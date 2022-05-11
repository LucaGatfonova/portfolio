<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="luca.png" contain max-height="400"></v-img>
        </v-col>
        <v-col cols="6">
          <h3 class="blue--text text-darken-4 top">Привет, я Люция</h3>
          <h1 class="white--text">Python Developer</h1>
          <p class="grey--text">
            Программирование - это не просто работа, <br />
            это возможность изменить мышление, <br />
            воплотить собственные идеи в интересном проекте,<br />
            и всегда учиться чему-то новому!
           </p>
          <v-col md="3" class="text-end">
            <v-btn tile color="#2196f3" dark @click="$router.push('/resume')">Резюме</v-btn>
          </v-col>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="#2196f3" x-large class="ml-3">
                    mdi-book-open-page-variant
                  </v-icon>
                  <h3 class="white--text ml-3 mt-4">Обучение</h3>
                  <p class="grey--text ml-3 mt-6">
                    <br /><br />
                  </p>
                  <v-btn color="#2196f3" dark text @click="$router.push('/certificate')">
                    Узнать больше
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <v-icon x-large class="ml-3" dark>mdi-file-code</v-icon>
                  <h3 class="white--text ml-3 mt-4">Учебные проекты</h3>
                  <p class="black--text ml-3 mt-6">
                    <br /><br />
                  </p>
                  <v-btn dark text @click="$router.push('/about')">
                    Узнать больше
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor1">
                  <v-icon color="#2196f3" x-large class="ml-3">
                    mdi-palette-swatch
                  </v-icon>
                  <h3 class="white--text ml-3 mt-4">Ключевые навыки</h3>
                  <p class="grey--text ml-3 mt-6">
                    <br /><br />
                  </p>
                  <v-btn color="#2196f3" dark text @click="$router.push('/skill')">
                    Узнать больше
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" class="mt-10">
                <div class="child1">
                  <h1 class="blue--text text darken-4 mt-4 number">1,5</h1>
                  <h3 class="white--text mt-4">ГОДА ОБУЧЕНИЯ</h3>
                </div>
                <div class="child mRight">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="blue--text text--darken-4">920+</h1>
                        <p class="grey--text">Часов пройдено</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="blue--text text--darken-4">20+</h1>
                        <p class="grey--text">Курсов завершено</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="3" offset-md="3" id="about">
          <h4 class="white--text">КОМАНДНАЯ РАЗРАБОТКА</h4>
          <p class="grey--text">По концепции Agile: SCRUM.<br /></p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#2196f3" dark @click="$router.push('/develop')">Обзор</v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1e1e1e"
          >
            <v-img src="python1.png" contain></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1e1e1e"
          >
            <v-img src="web.png" contain></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="m1-n4"> Обучение Geekbrains </v-btn><br />
          <v-btn color="#2196f3" dark text class="m1-n4" @click="$router.push('/certificate')">
            Узнать больше
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="m1-n4"> Обучение АНО ДПО "Институт цифровых компетенций" </v-btn><br />
          <v-btn color="#2196f3" dark text class="m1-n4" @click="$router.push('/web')">
            Узнать больше
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text">Давайте работать вместе <br /></h1>
                </v-col>
                <v-col cols="5">
                  <v-btn tile color="#2196f3" dark class="mt-16" @click="$router.push('/contact')"
                    >Контакты</v-btn
                  >
                </v-col>
              </v-row>
            </div>
          </div>
          <BottomMenu />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomMenu from "../components/BottomMenu";

export default {
  name: "Home",

  components: {
    Navbar,
    Footer,
    BottomMenu
  },
};
</script>

<style scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: #111111;
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #2196f3;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
  text-align: center;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>
