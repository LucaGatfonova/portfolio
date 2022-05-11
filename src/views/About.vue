<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
  <Navbar />
    <v-container>
      <v-row>
        <v-col cols="6">
          <h1 class="white--text ml-3 mt-4" align="left">Мои проекты</h1>
        </v-col>
      </v-row>
     <br />
      <v-row v-for="(item, index) in historyList" :key="index">
        <v-col cols="6">
          <v-img :src="item.img" contain max-height="400"></v-img>
        </v-col>
        <v-col cols="6">
          <br /><br /><br />
          <h3 class="blue--text text-darken-4 top">{{ item.name }}</h3>
          <p class="grey--text">{{ item.text }}</p>
          <a :href="item.url" target="_blank">{{ item.url }}</a>
        </v-col>          
      </v-row>
      <br />
      <v-pagination 
        class="pagination mb-2"
        v-model="page" 
        :length="pages" 
        @input="updatePage">
      </v-pagination>
    </v-container>
  <BottomMenu />  
  <Footer />
  </v-app>      
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomMenu from "../components/BottomMenu";

export default {
  name: 'Certificate',

  components: {
    Navbar,
    Footer,
    BottomMenu
  },

  data: () => ({
		page: 1,
		pageSize: 4,
    list: [
      {
        id: 0,
        name: 'Интернет-магазин на Django Framework',
        img: 'shop.png',
        text:'Шаблон + контекст = html. Модели + ORM = данные.Аутентификация + регистрация. Пользователь + товар = корзина.\
              Ajax + декораторы. Собственная админ-панель. Шаблонные фильтры, CBV. Отправка электронной почты. Контекстные процессоры.\
              Регистрация через социальную сеть. Работа с заказом пользователя: CBV, Django formsets. Библиотека jQuery.\
              Профилирование и нагрузочное тестирование проекта, оптимизация работы с базой данных. кеширование в Django.',
        url: 'https://github.com/LucaGatfonova/geekshop'     
      },
      {
        id: 1,
        name: 'Todo (Single Page Application)',
        img: 'todo.png',
        text: 'Создание проекта и заметок к нему. Регистрация и авторизация пользователя. Редактирование и удаление.\
        Фильтрация. Создание API на стороне backend и использование для этих целей DRF и GraphQL. Создание frontend с использованием React.\
        Тестирование API. Развертывание проекта с Docker и docker-compose. ',
        url: 'https://github.com/LucaGatfonova/Todo_v2'
      },
      {
        id: 2,
        name: 'Портфолио',
        img: 'portfolio.png',
        text: 'Сайт написан с использованием фрейморка Vue.js. Изучение проходило самостоятельно, с помощью документации, сервиса YouTube\
        и поисковых системы.',
        url: 'https://github.com/LucaGatfonova/'
      },
      {
        id: 3,
        name: 'API Hotel',
        img: 'drf_project.png',
        text: 'Создание API номеров отеля, с использованием Django Rest Framework.',
        url: 'https://github.com/LucaGatfonova/hotel'
      },
      {
        id: 4,
        name: 'Messenger',
        img: 'mess.png',
        text: 'Основы сетевого программирования. Логирование. Сокеты. Хранение данных в БД. ORM SQLAlchemy. Основы QT, QT и потоки.',
        url: 'https://github.com/LucaGatfonova/Messenger'
      },
      {
        id: 5,
        name: 'База данных SQL: Реестр сдельной заработной платы',
        img: 'db.png',
        text: 'База данных обеспечивает подсчёт продаж и подключений физических и юридических лиц к разным услугам.\
Решаемые задачи: Подсчёт количественных показателей по организации и по группам,ФИО. Подсчёт заработной платы по ФИО.\
 Анализ эффективности групп.\ Выгрузка заработной платы для начисления. Представления, запросы',
        url: 'https://github.com/LucaGatfonova/Project-SQL'
      },
    ],
    listCount: 0,
		historyList: []  
  }),
  created() {
		let _this = this;
		_this.initPage();
		_this.updatePage(_this.page);
	},
	methods: {
		initPage: function() {
			let _this = this;
			_this.listCount = _this.list.length;
			if (_this.listCount < _this.pageSize) {
				_this.historyList = _this.list;
			} else {
				_this.historyList = _this.list.slice(0, _this.pageSize);
			}
		},
		updatePage: function(pageIndex) {
			let _this = this;
			let _start = (pageIndex - 1) * _this.pageSize;
			let _end = pageIndex * _this.pageSize;
			_this.historyList = _this.list.slice(_start, _end);
			_this.page = pageIndex;
		}
	},
	computed: {
		pages() {
			let _this = this;
			if (_this.pageSize == null || _this.listCount == null) return 0;
			return Math.ceil(_this.listCount / _this.pageSize);
		}
	}
};

</script>

