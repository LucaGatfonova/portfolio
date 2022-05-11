<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#2196f3">fas fa-scroll</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/')">Главная</v-btn>
    <v-btn text @click="$router.push('/certificate')">Обучение</v-btn>
    <v-btn text @click="$router.push('/about')">Проекты</v-btn>
    <v-btn text @click="$router.push('/contact')">Контакты</v-btn>
  </v-app-bar>
</template>

<script>
export default {
};
</script>

<style>
</style>