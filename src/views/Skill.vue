<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
  <Navbar />
  <section class="row">
    <div class="col-sm-3 col-xs-3">
      <img src="postgres.png" width="150" height="80">
    </div>
    <div class="col-sm-3 col-xs-3">
      <img src="linux.png" width="80" height="80">
    </div>
    <div class="col-sm-3 col-xs-3">
      <img src="giticon.png" width="80" height="80">
    </div>
        <div class="col-sm-3 col-xs-3">
      <img src="vue.png" width="80" height="80">
    </div>
  </section>
  <v-row class="second">
    <div class="col-sm-3 col-xs-3">
      <img src="python.png" width="200" height="100">
    </div>
    <div class="col-sm-4 col-xs-4">
      <img src="django.png" width="200" height="80">
    </div>
    <div class="col-sm-3 col-xs-3">
      <img src="html.png" width="200" height="80">
    </div>
  </v-row>
  <section class="row">
    <div class="col-sm-3 col-xs-3">
      <img src="docker.png" width="100" height="80">
    </div>
    <div class="col-sm-3 col-xs-3">
      <img src="drf.png" width="150" height="120">
    </div>
    <div class="col-sm-3 col-xs-3">
      <img src="mysql.png" width="100" height="100">
    </div>
    <div class="col-sm-3 col-xs-3">
      <img src="react.png" width="100" height="100">
    </div>
  </section>  

     
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
.row {
  margin-left: 300px;
  margin-top: 50px;
}
.second{
  margin-left: 150px;
}
</style>