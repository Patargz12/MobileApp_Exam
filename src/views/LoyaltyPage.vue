<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
        <ion-title>Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div class="container">
          <div class="beginner">
            <img :src="crown" class="crown" style="width: 60px; height: 60px" />
            <h3><b>Beginner Tier</b></h3>
          </div>

          <div class="view">
            <h5><b>View all</b></h5>
            <img
              class="arrow-icon"
              :src="arrow"
              style="height: 25px; width: 25px"
            />
          </div>
        </div>

        <p class="lead">
          Earn points by purchasing from our store. Lorem ipsum dolor sit amet
          consectetur.
        </p>

        <div class="circular-progress">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              class="progress-background"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FFC0CB"
              stroke-width="10"
            />
            <circle
              class="progress-circle"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FFC0CB"
              stroke-width="10"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
            />
          </svg>
          <div class="progress-text">{{ current }} / {{ total }}</div>
        </div>
      </div>
      <div class="container">
        <div class="beginner">
          <h3><b>Rewards</b></h3>
        </div>

        <div class="view">
          <h5><b>How it works</b></h5>
          <img
            class="arrow-icon"
            :src="arrow"
            style="height: 25px; width: 25px"
          />
        </div>
      </div>

      <div class="filtered-menu">
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
        <div class="menu-item" v-if="selectedItem">
          <img
            :src="selectedItem.image"
            :alt="selectedItem.name"
            class="menu-item-image"
          />
          <div class="menu-item-details">
            <h2>{{ selectedItem.name }}</h2>
            <p>{{ selectedItem.category }}</p>
            <div class="points">
              <img
                :src="crown"
                class="crown"
                style="width: 50px; height: 50px"
              />
              <span class="points"> {{ selectedItem.points }} points </span>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import garlic_bread from "../../resources/Garlic_Bread.jpg";

const filters = ["All", "Beginner", "Intermediate", "Loyal"];
const selectedFilter = ref("All");

const selectedItem = ref({
  name: "Garlic Bread",
  category: "Bread",
  points: 20,
  image: garlic_bread,
});

import { computed, ref, watch } from "vue";

const props = defineProps({
  current: { type: Number, default: 0 },
  total: { type: Number, default: 160 },
});

const circumference = 2 * Math.PI * 45;
const dashOffset = computed(() => {
  const progress = props.current / props.total;
  return circumference * (1 - progress);
});

import crown from "../../resources/crown_logo.png";
import arrow from "../../resources/arrow.svg";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style scoped>
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

.menu-item {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
}

.menu-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}

.menu-item-details h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.menu-item-details p {
  margin: 4px 0;
  color: #666;
}

.points {
  display: flex;
  align-items: center;
  color: #d71a21;
  font-weight: bold;
}

.crown-icon {
  margin-right: 4px;
}

.circular-progress {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 40px auto 0;
}

svg {
  transform: rotate(-90deg);
}

.progress-circle {
  transition: stroke-dashoffset 0.35s;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1px 10px;
}

.beginner,
.view {
  display: flex;
  align-items: center;
}

.beginner h3,
.view h5 {
  margin-left: 10px;
}

.beginner {
  margin-top: 7px;
}

.view {
  margin-top: 13px;
}

.view h5 {
  margin-top: 13px;
  font-size: 15px;
  margin-right: 8px;
  color: #d71a21;
}

.lead {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #333;
  margin: 1px 10px;
}
</style>
