<template>
  <v-toolbar class="topTolbar" color="#111111" dark flat>
    <div
        style="
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
        "
    >
        <v-btn text @click="$router.push('/')">Главная</v-btn>
        <v-btn text @click="$router.push('/certificate')">Обучение</v-btn>
        <v-btn text @click="$router.push('/about')">Проекты</v-btn>
        <v-btn text @click="$router.push('/contact')">Контакты</v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
};
</script>

<style>
</style>