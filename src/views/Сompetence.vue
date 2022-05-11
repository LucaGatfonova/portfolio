<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h1 class="white--text ml-3 mt-4" align="left">
            Обучение АНО ДПО "Институт цифровых компетенций"
          </h1>
        </v-col>
        <v-col cols="6">
          <v-btn dark text @click="$router.push('/certificate')">
            Обучение Geekbrains
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <br /><br />
          <v-img src="web.png" contain max-height="400"></v-img>
        </v-col>
        <v-col cols="6">
          <h3 class="blue--text text-darken-4 top">
            ГРАФИЧЕСКИЙ ДИЗАЙН ВЕБ-СТРАНИЦ
          </h3>
          <p class="grey--text">
            1. Основные элементы управления интерфейсом <br />
            2. Современные стандарты при создании дизайна сайта <br />
            3. Подготовка изображений для публикации в сети Интернет <br />
          </p>
          <h3 class="blue--text text-darken-4 top">ВЕРСТКА (ВКЛЮЧАЯ CSS)</h3>
          <p class="grey--text">
            1. HTML тэги, атрибуты и их назначение <br />
            2. CSS. Селекторы. Современные тенденции при вёрстке <br />
            3. Вёрстка страниц <br />
            4. Адаптивная верстка <br />
            5. Реализация интерактивных элементов <br />
          </p>
          <h3 class="blue--text text-darken-4 top">
            ПРОГРАММИРОВАНИЕ НА СТОРОНЕ КЛИЕНТА И НА СТОРОНЕ СЕРВЕРА
          </h3>
          <p class="grey--text">
            1. Основы JavaScript <br />
            2. Фреймворки и библиотеки JavaScript <br />
            3. Создание анимации и интерактивных составляющих приложения <br />
            4. Манипуляция с AJAX-запросами и файлами <br />
            5. Язык программирования PHP <br />
            6. Разработка веб-приложения с доступом к базе данных MySQL <br />
            7. Фреймворк Yii2 <br />
          </p>
        </v-col>
      </v-row>
      <br />
      <BottomMenu />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomMenu from "../components/BottomMenu";

export default {
  name: "Competence",

  components: {
    Navbar,
    Footer,
    BottomMenu,
  },
};
</script>
