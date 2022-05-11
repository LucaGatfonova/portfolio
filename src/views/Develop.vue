<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Navbar />

    <v-container>
      <v-row>
        <v-col cols="6">
          <h1 class="blue--text ml-3 mt-4" align="left">
            Мой опыт командной разработки
          </h1>
        </v-col>
      </v-row>
      <br /><br />
      <div>
        <p class="white--text">
          Завершающим этапом обучения стала командная разработка по концепции
          Agile: SCRUM. Нас разделили на команды по 6 человек. Перед нами стояла
          задача создать рекрутинговый интернет-портал по аналогии с hh.ru,
          который позволит связать между собой сотрудников, ищущих работу и
          работодателей, которые ищут подходящих сотрудников по средствам
          размещения и подбора вакансий и резюме. Мы должны были освоить
          методологию Scrum, разделить весь проект на 7 спринтов и проводить
          ретро спринта каждую неделю.
        </p>
        <p class="white--text">
          Скрам (Scrum) – это набор принципов, на которых строится процесс
          разработки, позволяющий в жёстко фиксированные и небольшие по времени
          итерации, называемые спринтами (sprints), предоставлять конечному
          пользователю работающее ПО с новыми возможностями, для которых
          определён наибольший приоритет. Возможности ПО к реализации в
          очередном спринте определяются в начале спринта на этапе планирования
          и не могут изменяться на всём его протяжении. При этом строго
          фиксированная небольшая длительность спринта придаёт процессу
          разработки предсказуемость и гибкость.
        </p>
        <p class="white--text">
          Для визуализации процесса работы над спринтом команды используют
          Scrum-доску, в качестве доски был использовани сервис Trello. На доске
          оформлялось: бэклог спринта: список историй. Задачи, готовые к работе
          (понятна, имеет подходящий размер, оценку, критерий готовности и
          приёмки). Задачи, которые находятся в работе. Готовые задачи. Доска
          нашего проекта:
          <br /><br />
          <v-img src="trello.png" contain max-height="300"></v-img>
        </p>
        <p class="white--text">На ретро мы отвечали на 3 вопроса:</p>
        <p class="white--text">
          -что сделано с момента предыдущего ежедневного совещания?
        </p>
        <p class="white--text">
          -что будет сделано с момента текущего совещания до следующего?
        </p>
        <p class="white--text">
          -какие проблемы мешают достижению целей спринта?
        </p>
        <p class="white--text">
          1. Разработка и развертывание проекта: запуск необходимых для
          разработки сервисов выполнялся через Docker Compose
        </p>
        <p class="white--text">
          2. В качестве основных инструментов для разработки использовались:
        </p>
        <p class="white--text">Django rest framework (backend)</p>
        <p class="white--text">Nuxt.js framework (frontend)</p>
        <p class="white--text">PostreSQL(data base)</p>
        <p class="white--text">
          3. Для хранения историй версий проектов был использован github:
        </p>
        <a href="https://github.com/LucaGatfonova/jobfinder" target="_blank"
          >https://github.com/LucaGatfonova/jobfinder</a
        >
        <br /><br />
        <v-img src="jobfinder.png" contain max-height="300"></v-img>
        <br /><br />
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
  name: "Contact",

  components: {
    Navbar,
    Footer,
    BottomMenu,
  },
};
</script>

<style scoped>
</style>