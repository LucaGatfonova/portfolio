<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
  <Navbar />
  
    <v-container>
      <div class="wrapper" style="text-align:center;">
        <h1 class="white--text">Контакты</h1>
          <br /><br />
            <v-icon color="#2196f3">fa fa-map-marker ico-contact</v-icon>
            <h4 class="blue--text">РБ, г. Уфа</h4>
        <span class="clearfix"></span><br />
            <v-icon color="#2196f3">fa fa-envelope ico-contact</v-icon>
            <h4 class="blue--text">gatfanovaluca@mail.ru</h4>
        <span class="clearfix"></span><br />
            <v-icon color="#2196f3">fa-brands fa-whatsapp-square ico-contact</v-icon>
            <h4 class="blue--text">+7 (937) 161 84 24</h4>
      </div>
        <br /><br />
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
  name: 'Contact',

  components: {
    Navbar,
    Footer,
    BottomMenu
  },
}
</script>

<style scoped>
</style>