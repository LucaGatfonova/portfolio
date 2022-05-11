<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Navbar />
    <v-container>
      <div id="app">
      <v-app id="inspire">
        <v-card color="basil">
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">
              Резюме
            </h1>
        </v-card-title>
  
      <v-tabs
        v-model="tab"
        background-color="white"
        color=""
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card
            color="white"
            flat
          >
            <v-card-text align="center">{{ item.text0 }}</v-card-text>
            <v-card-text align="center">{{ item.text1 }}</v-card-text>
            <v-card-text align="center">{{ item.text2 }}</v-card-text>
            <v-card-text align="center">{{ item.text3 }}</v-card-text>
            <v-card-text align="center">{{ item.text4 }}</v-card-text>
            <v-card-text align="center">{{ item.text5 }}</v-card-text>
            <v-card-text align="center">{{ item.text6 }}</v-card-text>
            <v-card-text align="center">{{ item.text7 }}</v-card-text>
            <v-card-text align="center">{{ item.text8 }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</div>
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
    name: "Resume",

    components: {
        Navbar,
        Footer,
        BottomMenu,
    },
    
    data () {
    return {
        tab: null,
        items: [
        {
            name: 'Сведения',
            text0: 'Ф.И.О.: Гатфанова Люция Маратовна',
            text1: 'Дата рождения: 22.09.1987',
            text2: 'Адрес: РБ, г.Уфа',
            text3: 'Телефон: +7(937) 161 84 24',
            text4: 'Email: gatfanovaluca@mail.ru',
            text5: 'Гражданство: Россия',
            text6: 'К переезду: не готова',
            text7: 'Занятость: полный рабочий день',
        },
        {
            name: 'Опыт работы',
            text0: 'Сентябрь 2020-Февраль 2022: обучение в Geekbrains, дополнительные курсы',
            text1: 'Март 2019-Декабрь 2020: АО "Уфанет", занимала должность бизнес-аналитика.',
            text2: 'Июль 2012-Февраль 2019: АО "Уфанет", занимала должность бухгалтера, бухгалтера по расчету\
            заработной платы.',
            text3: 'Сентябрь 2010-Июнь 2012: АО "Уфанет", занимала должность менеджера, старшего менеджера по работе\
            с клиентами.',
        },
        {
            name: 'Дополнительная информация',
            text0: 'Знание языков: русский - родной, английский язык - базовый уровень.',
            text1: 'Ключевые навыки: python, linux, sql, git, postgresql, django, DRF, docker, vue.js, react.js, html, css ',
            text2: 'Личные качества: аналитическое мышление, быстрая обучаемость, ответственость, коммуникабельность,\
            деловое общение',
            text3: 'Хобби: веду здоровый образ жизни, посещаю тренажерный зал, бассейн. Увлекаюсь изучением игры\
            на фортепиано, изучаю иностранные языки.',
        },
        ],
        }
    },
};
</script>

<style scoped>
.basil {
background-color: #111111!important;
}
.basil--text {
color: #2196f3 !important;
}
.white{
background-color: #ffffff;
}
</style>