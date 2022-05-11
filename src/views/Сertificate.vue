<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
  <Navbar />
    <v-container>
      <v-row>
        <v-col cols="6">
          <h1 class="white--text ml-3 mt-4" align="left">Обучение Geekbrains</h1>
        </v-col>
        <v-col cols="6">
          <v-btn dark text @click="$router.push('/competence')">
            Обучение АНО ДПО "Институт цифровых компетенций"
      <v-icon right>mdi-arrow-right</v-icon>
    </v-btn>
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
		pageSize: 3,
    list: [
      {
        id: 0,
        name: 'Факультет Python - разработки',
        img: 'python2.png',
        text:''
      },
      {
        id: 1,
        name: 'Основы Django Framework',
        img: '7.png',
        text: 'Создание первой рабочей версии интернет-магазина. Разработка серверной части. Админка, пользователи, страницы товаров и корзина.'
      },
      {
        id: 2,
        name: 'Django Framework. Инструменты оптимизации',
        img: '8.png',
        text: 'Взаимодействие с пользователем (отправление email, регистрация через социальные сети, обработка заказов), тестирование проекта и развертка его на сервере.'
      },
      {
        id: 3,
        name: 'Базовый курс JavaScript',
        img: '6.png',
        text: 'Frontend сайта и его взаимодействие с backend’ом.'
      },
      {
        id: 4,
        name: 'Курс по HTML/CSS',
        img: '5.png',
        text: 'Основы верстки сайта.'
      },
      {
        id: 5,
        name: 'Алгоритмы и структуры данных на Python',
        img: '4.png',
        text: 'Изучение классических структур данных, алгоритмов.'
      },
      {
        id: 6,
        name: 'Базы данных',
        img: '3.png',
        text: 'Проектирование базы данных,освоение языка запросов SQL. Проект по разработке собственной БД.'
      },
      {
        id: 7,
        name: 'Git.Базовый курс',
        img: 'git.png',
        text: 'Основные команды терминала, работа с репозиториями в Git, работа с ветками, слияние веток.'
      },
      {
        id: 8,
        name: 'Linux. Рабочая станция',
        img: '2.png',
        text: 'Особенности работы ОС. Устройство файловой системы Linux. Управление пакетами и репозиториями, введение в скрипты bash.'
      },
      {
        id: 9,
        name: 'Архитектура и шаблоны проектирования на Python',
        img: '11.png',
        text: 'Использование различных шаблонов проектирования, оптимальная архитектурой будущего проекта. Создание собственного фреймворка.'
      },
      {
        id: 10,
        name: 'Клиент-серверные приложения на Python',
        img: '9.png',
        text: 'Сети, сокеты, логирование и как итог — консольные сервер и клиент, которые позволят обмениваться сообщениями.'
      },
      {
        id: 11,
        name: 'Базы данных и PyQT',
        img: '10.png',
        text: 'Разработка графического интерфейса с помощью библиотеки PyQt5 и подготовка дистрибутива приложения. Применение модульного тестирования с использованием библиотеки PyTest и рассмотрение вопросов безопасности приложения.'
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

