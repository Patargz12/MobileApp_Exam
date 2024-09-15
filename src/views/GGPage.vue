<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons @click="goToAdd" slot="start">
          <img :src="chevron" style="width: 24px; height: 24px" />
        </ion-buttons>
        <ion-title>Order Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-card>
          <ion-card-content>
            <h2>{{ user.name }}</h2>
            <p>{{ user.phone }}</p>
            <p>{{ user.email }}</p>
          </ion-card-content>
          <ion-button fill="clear" class="ion-float-right">
            <ion-icon :icon="ellipsisVertical" />
          </ion-button>
        </ion-card>

        <ion-card>
          <ion-card-content>
            <h3>My Home Address</h3>
            <p>{{ user.homeAddress }}</p>
          </ion-card-content>
          <ion-button fill="clear" class="ion-float-right">
            <ion-icon :icon="ellipsisVertical" />
          </ion-button>
        </ion-card>

        <ion-card>
          <ion-card-content>
            <h3>Work/Office</h3>
            <p>{{ user.workAddress }}</p>
          </ion-card-content>
          <ion-button fill="clear" class="ion-float-right">
            <ion-icon :icon="ellipsisVertical" />
          </ion-button>
        </ion-card>

        <h2 class="order-text">Orders</h2>

        <ion-card>
          <ion-card-content>
            <div class="order-item">
              <img
                src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
                alt="Steak Fries Veggies"
                class="order-image"
              />
              <div class="order-details">
                <h3>Steak Fries Veggies</h3>
                <p>1x Tomato Sauce</p>
                <p>1x Regular Coke</p>
                <p>1x Fried Chicken</p>
              </div>
            </div>
            <div class="order-price">
              <span class="price">P 185</span>
              <ion-button fill="clear" size="small">
                <ion-icon :icon="remove" />
              </ion-button>
              <span>1</span>
              <ion-button fill="clear" size="small">
                <ion-icon :icon="add" />
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import chevron from "../../resources/chevron.svg";
import { useRouter } from "vue-router";
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonButtons,
  IonContent,
} from "@ionic/vue";
import { ellipsisVertical, add, remove } from "ionicons/icons";

const router = useRouter();

const goToAdd = () => {
  router.push("/Add");
};

const user = {
  name: "Chou Tzuyu",
  phone: "+63 912 345 6789",
  email: "chou.tzu-yu@email.com",
  homeAddress:
    "No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines",
  workAddress: "3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines",
};
</script>

<style>
.order-text {
  margin-left: 20px;
}

ion-content {
  --background: #fff;
}

ion-card {
  margin-top: 25px;
  margin-left: 23px;
  margin-right: 23px;
  margin-bottom: 16px;
  border-radius: 20px;
  --background: #e9ecef;
}

h2,
h3 {
  color: #333;
  margin-bottom: 8px;
}

.order-item {
  display: flex;
  align-items: center;
}

.order-image {
  width: 50px;
  height: 50px;
  margin-right: 16px;
}

.order-details {
  flex-grow: 1;
}

.order-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.price {
  color: #d71a21;
  font-weight: bold;
}

ion-button {
  --color: #d71a21;
}
</style>
