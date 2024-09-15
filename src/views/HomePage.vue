<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>

        <router-link to="/loyalty" class="no-decoration">
          <div class="center-content">
            <img
              :src="crown"
              alt="Crown logo"
              style="width: 60px; height: 60px"
            />
            <ion-text color="black" class="text-content">
              <h5>0 Points</h5>
            </ion-text>
            <img
              class="arrow-icon"
              :src="arrow"
              alt="Arrow icon"
              style="height: 25px; width: 25px"
            />
          </div>
        </router-link>

        <ion-buttons slot="end">
          <ion-avatar class="small-avatar">
            <img alt="Profile picture" :src="jennie" />
          </ion-avatar>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="auto" class="content-col">
            <ion-img
              :src="fastfood_logo"
              alt="Fast food logo"
              class="food_logo"
            ></ion-img>
          </ion-col>
          <ion-col size="auto" class="content-col">
            <ion-text class="title" color="black">
              <h5>Anneoyong, Chou!</h5>
              <h1>
                <b
                  >What do you want <br />
                  to eat?</b
                >
              </h1>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-searchbar
        class="curved-searchbar"
        placeholder="Try our new Steak Fries Veggies"
      ></ion-searchbar>
      <ion-text color="black">
        <h3><b class="offers">Special Offers!</b></h3>
      </ion-text>
      <ion-img
        :src="fastfood_promo"
        class="fastfood-promo"
        alt="Special Promo"
      ></ion-img>
      <ion-text color="black">
        <h3><b class="offers">Category</b></h3>
      </ion-text>

      <swiper :slides-per-view="2" :space-between="2">
        <swiper-slide v-for="category in recipeCategories" :key="category.id">
          <ion-card
            class="custom-card"
            :style="{
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <ion-card-header class="custom-card-header">
              <ion-card-title style="color: white; z-index: 10">
                <b>{{ category.title }}</b>
              </ion-card-title>
              <ion-card-subtitle style="color: white; z-index: 10">
                <b>{{ category.recipeCount }} Recipes</b>
              </ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </swiper-slide>
      </swiper>
      <ion-text color="black">
        <h3><b class="offers">What's new?</b></h3>
      </ion-text>
      <ion-img :src="new_food" class="new_food" alt="New food item"></ion-img>
      <div class="cards">
        <ion-text color="black">
          <h3><b class="offers">Most Popular</b></h3>
        </ion-text>

        <div class="card-container">
          <ion-card
            v-for="(item, index) in popularItems"
            :key="index"
            class="card-popular"
          >
            <img :alt="item.title" :src="item.imageUrl" />
            <ion-card-header>
              <ion-card-title
                ><h4>{{ item.title }}</h4></ion-card-title
              >
              <ion-card-subtitle
                ><h6>{{ item.category }}</h6></ion-card-subtitle
              >
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5>
                <b>{{ item.price }}</b>
              </h5>
              <div class="star-container">
                <ion-icon v-for="n in 5" :key="n" :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
      <ion-button
        color="danger"
        shape="round"
        @click="goToOrder"
        class="custom-button"
        >Order Now!</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const Loyalty = () => {
  router.push("/Loyalty");
};

import { defineComponent, ref } from "vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonText,
  IonTitle,
  IonAvatar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import crown from "../../resources/crown_logo.png";
import arrow from "../../resources/arrow.svg";
import jennie from "../../resources/jennie_pic.jpg";
import fastfood_logo from "../../resources/fastfood_logo.png";
import fastfood_promo from "../../resources/fastfood_promo.png";
import new_food from "../../resources/new.png";
import star from "../../resources/star.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

import burger from "../../resources/burger.jpg";
import chicken from "../../resources/chicken.jpg";
import pasta from "../../resources/pasta.jpg";

import cheese from "../../resources/cheese.jpg";
import fries from "../../resources/fries.jpg";
import pizza from "../../resources/pizza.jpg";
import carbonara from "../../resources/carbonara.jpg";

interface RecipeCategory {
  id: number;
  title: string;
  recipeCount: number;
  imageUrl: string;
}

interface PopularItem {
  title: string;
  category: string;
  price: string;
  imageUrl: string;
}

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonText,
    IonTitle,
    IonAvatar,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
    const goToOrder = () => {
      router.push("/Food");
    };

    const recipeCategories = ref<RecipeCategory[]>([
      {
        id: 1,
        title: "Chicken",
        recipeCount: 9,
        imageUrl: chicken,
      },
      {
        id: 2,
        title: "Burger",
        recipeCount: 6,
        imageUrl: burger,
      },
      {
        id: 3,
        title: "Pasta",
        recipeCount: 4,
        imageUrl: pasta,
      },
    ]);

    const popularItems = ref<PopularItem[]>([
      {
        title: "Carbonara",
        category: "Pasta",
        price: "P 175",
        imageUrl: carbonara,
      },
      {
        title: "Pizza",
        category: "Extras",
        price: "P 200",
        imageUrl: pizza,
      },
      {
        title: "Fries",
        category: "Snacks",
        price: "P 120",
        imageUrl: fries,
      },
      {
        title: "Cheeseburger",
        category: "Snacks",
        price: "P 220",
        imageUrl: cheese,
      },
    ]);

    return {
      crown,
      arrow,
      jennie,
      fastfood_logo,
      fastfood_promo,
      new_food,
      star,
      goToOrder,
      recipeCategories,
      popularItems,
      Loyalty,
    };
  },
});
</script>

<style scoped>
.no-decoration {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color to prevent default blue */
}

.no-decoration:hover {
  color: inherit; /* Keep the color the same on hover */
}

.custom-button {
  --padding-start: 32px;
  --padding-end: 32px;
  --padding-top: 17px;
  --padding-bottom: 17px;
  --background: #d71a21;
  --color: white;
  --border-radius: 20px;
  --box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.cards {
  margin-bottom: 90px;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card-popular {
  width: 40%;
  height: auto;
  border-radius: 20px;
  background-color: #f0ecec;
}

.card-popular img {
  height: 240px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

.card-popular ion-card-header {
  padding: 8px 12px;
  margin-bottom: 0;
}

.card-popular ion-card-content h5 {
  margin: 0;
  padding: 0.2px 0;
  font-size: 18px;
  line-height: 0.9;
  color: #d71a21;
  margin-bottom: 10px;
}

.card-popular ion-card-title h4 {
  margin: 0;
  padding: 0.2px 0;
  font-size: 20px;
  line-height: 0.9;
  color: #333;
}

.card-popular ion-card-subtitle h6 {
  margin: 0;
  padding: 0.2px 0;
  font-size: 14px;
  line-height: 0.9;
  color: #8d8282;
}

.card-popular ion-card-content {
  padding: 4px 12px;
}

@media (max-width: 400px) {
  .card-popular ion-card-content h5 {
    font-size: 14px;
  }

  .card-popular ion-card-title h4 {
    font-size: 16px;
  }

  .card-popular ion-card-subtitle h6 {
    font-size: 10px;
  }

  .title h1 {
    font-size: 21px;
  }

  .title h5 {
    font-size: 21px;
  }

  .food_logo {
    height: 120px;
    width: 120px;
  }
}

.star-container {
  display: flex;
  align-items: center;
}

.star-container ion-icon {
  margin-left: 2px;
  margin-bottom: 11px;
  text-shadow: 0 0 9px rgba(0, 0, 0, 10);
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-content .offers {
  margin-left: 20px !important;
}

.new_food {
  width: 100%;
  height: auto;
  max-width: 500px;
}

.card-row {
  --ion-grid-padding: 0;
  margin: 0 -10px;
}

.card-col {
  padding: 0 20px;
}

.custom-card {
  position: relative;
  overflow: hidden;
  background-size: cover;
  width: 100%;
  height: 320px;
  border-radius: 20px;
  color: white !important;
}

.custom-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 70%
  );
  border-radius: 20px;
  pointer-events: none;
}

.custom-card-header {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white !important;
}

.custom-card-content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white !important;
}

.fastfood-promo {
  width: 100%;
  height: auto;
  max-width: 500px;
}

.small-avatar {
  margin-right: 12px;
  width: 40px;
  height: 40px;
}

.curved-searchbar {
  --background: #f1f1f1;
  --border-radius: 15px;
  --placeholder-color: #888;
  --icon-color: #d71a21;
}

ion-img {
  height: 140px;
  width: 140px;
}

.small-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 30px;
}

.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
}

.content-col {
  display: flex;
  align-items: center;
}
</style>
