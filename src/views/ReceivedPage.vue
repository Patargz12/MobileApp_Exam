<template>
  <ion-page>
    <ion-header :translucent="true"> </ion-header>

    <ion-content :fullscreen="true">
      <div class="order-confirmation">
        <div class="icon-container">
          <img :src="okay" />
        </div>
        <h1>Order Received!</h1>
        <p class="order-details">
          Your order No. <strong>19049585</strong> has successfully take and now
          being processed. Kindly wait for our notification regarding your
          order.
        </p>
        <ion-button expand="block" class="track-order-btn"
          >Track Order</ion-button
        >
        <ion-button fill="clear" @click="home" class="back-home-btn"
          >Back to Home</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import okay from "../../resources/okay.png";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { defineComponent } from "vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { thumbsUp } from "ionicons/icons";

import { useRouter } from "vue-router";

export default defineComponent({
  name: "OrderConfirmation",
  components: { IonPage, IonContent, IonButton, IonIcon },
  setup() {
    const router = useRouter();

    const home = () => {
      router.push("/Home");
    };
    return { thumbsUp, okay, home };
  },
});
</script>

<style scoped>
.order-confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.icon-container {
  background-color: #ffa500;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.thumbs-up {
  font-size: 60px;
  color: #ffffff;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.order-details {
  font-size: 14px;
  color: #666;
  margin-bottom: 32px;
  max-width: 80%;
}

.track-order-btn {
  --background: #d71a21;
  --color: #ffffff;
  font-weight: bold;
  margin-bottom: 16px;
}

.back-home-btn {
  --color: #d71a21;
  font-weight: bold;
}
</style>
