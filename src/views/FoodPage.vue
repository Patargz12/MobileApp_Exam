<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
        <div class="header">
          <ion-title>Our Foods</ion-title>
          <img :src="bag" class="bag" />
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-searchbar
          class="custom-searchbar"
          show-clear-button="always"
          :clear-icon="trashBin"
          placeholder="Try our new Beef Bibimbowl"
        ></ion-searchbar>
        <div class="filter-buttons">
          <ion-button
            v-for="filter in filters"
            :key="filter"
            :color="selectedFilter === filter ? 'danger' : 'light'"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </ion-button>
        </div>
        <div class="card-container">
          <ion-card class="card-popular" @click="AddPage">
            <img alt="carb" :src="carbonara" />
            <ion-card-header>
              <ion-card-title><h4>Carbonara</h4></ion-card-title>
              <ion-card-subtitle><h6>Pasta</h6></ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5><b>P 175</b></h5>
              <div class="star-container">
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
          <ion-card class="card-popular" @click="AddPage">
            <img alt="pizza" :src="pizza_pic" />
            <ion-card-header>
              <ion-card-title><h4>Pizza</h4></ion-card-title>
              <ion-card-subtitle><h6>Extras</h6></ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5><b>P 200</b></h5>
              <div class="star-container">
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
        <div class="card-container">
          <ion-card class="card-popular" @click="AddPage">
            <img alt="carb" :src="carbonara" />
            <ion-card-header>
              <ion-card-title><h4>Carbonara</h4></ion-card-title>
              <ion-card-subtitle><h6>Pasta</h6></ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5><b>P 175</b></h5>
              <div class="star-container">
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
          <ion-card class="card-popular" @click="AddPage">
            <img alt="pizza" :src="pizza_pic" />
            <ion-card-header>
              <ion-card-title><h4>Pizza</h4></ion-card-title>
              <ion-card-subtitle><h6>Extras</h6></ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5><b>P 200</b></h5>
              <div class="star-container">
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <div class="card-container">
          <ion-card class="card-popular" @click="AddPage">
            <img alt="carb" :src="carbonara" />
            <ion-card-header>
              <ion-card-title><h4>Carbonara</h4></ion-card-title>
              <ion-card-subtitle><h6>Pasta</h6></ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5><b>P 175</b></h5>
              <div class="star-container">
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
          <ion-card class="card-popular" @click="AddPage">
            <img alt="pizza" :src="pizza_pic" />
            <ion-card-header>
              <ion-card-title><h4>Pizza</h4></ion-card-title>
              <ion-card-subtitle><h6>Extras</h6></ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="card-content">
              <h5><b>P 200</b></h5>
              <div class="star-container">
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
                <ion-icon :src="star"></ion-icon>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import carbonara from "../../resources/carbonara.jpg";
import pizza_pic from "../../resources/pizza.jpg";

const router = useRouter();

const AddPage = () => {
  router.push("/Add");
};

import star from "../../resources/star.svg";
import bag from "../../resources/bag.svg";
import { trashBin } from "ionicons/icons";

const filters = ["All", "Breakfast", "Chicken", "Dessert"];
const selectedFilter = ref("All");

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { ref } from "vue";
</script>

<style scoped>
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

.filtered-menu {
  padding: 16px;
}

.filter-buttons {
  display: flex;
  overflow-x: auto;
  margin-bottom: 16px;
}

ion-button {
  --border-radius: 20px;
  margin-right: 8px;
}

.custom-searchbar {
  margin-top: 10px;
  --background: #f2f2f2;
  --border-radius: 15px;
  --height: 45px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bag {
  margin-right: 16px;
  height: 30px;
  width: 30px;
}
</style>
