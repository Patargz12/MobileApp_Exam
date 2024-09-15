<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons @click="goToAdd" slot="start">
          <img :src="chevron" class="chevron" />
        </ion-buttons>
        <ion-title>Order Summary</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-card>
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h2>{{ user.name }}</h2>
                  <p>{{ user.phone }}</p>
                  <p>{{ user.email }}</p>
                </ion-col>
                <ion-col size="auto">
                  <ion-button fill="clear">
                    <ion-icon :icon="ellipsisVertical" />
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h3>My Home Address</h3>
                  <p>{{ user.homeAddress }}</p>
                </ion-col>
                <ion-col size="auto">
                  <ion-button fill="clear">
                    <ion-icon :icon="ellipsisVertical" />
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h3>Work/Office</h3>
                  <p>{{ user.workAddress }}</p>
                </ion-col>
                <ion-col size="auto">
                  <ion-button fill="clear">
                    <ion-icon :icon="ellipsisVertical" />
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <h2 class="order-text">Orders</h2>

        <ion-card>
          <ion-card-content>
            <div class="order-item">
              <img
                :src="carbonara"
                alt="Steak Fries Veggies"
                class="order-image"
              />
              <div class="order-details">
                <h3>Carbonara</h3>
                <p>1x Cheese</p>
                <p>2x Bacon</p>
                <p>1x Coke</p>
              </div>
            </div>
            <div class="order-price">
              <span class="price">P 185</span>
              <ion-button class="circular-button" fill="clear" size="small">
                <ion-icon :icon="remove" />
              </ion-button>
              <span class="item-value">1</span>
              <ion-button class="circular-button" fill="clear" size="small">
                <ion-icon :icon="add" />
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>

        <h2 class="payment-header">Payment Option</h2>
        <ion-radio-group v-model="selectedPayment">
          <ion-card
            class="payment-card"
            v-for="option in paymentOptions"
            :key="option.value"
          >
            <ion-card-content>
              <ion-item lines="none" class="order-card">
                <ion-radio :value="option.value" slot="end"></ion-radio>
                <ion-label class="order-text">
                  <h3>{{ option.title }}</h3>
                  <p>
                    {{ option.description }}
                  </p>
                </ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </ion-radio-group>

        <div class="summary-text">
          <ion-item lines="none" class="subtotal">
            <ion-label><b>Subtotal</b></ion-label>
            <ion-text slot="end">₱ {{ subtotal }}</ion-text>
          </ion-item>
          <ion-item lines="none">
            <ion-label><b>Delivery Charge</b></ion-label>
            <ion-text slot="end">₱ {{ deliveryCharge }}</ion-text>
          </ion-item>
          <ion-item lines="none" class="delivery-note">
            <ion-label>
              <ion-input
                label="Change for"
                label-placement="floating"
                fill="outline"
                placeholder="e.g 1,000"
              ></ion-input>
            </ion-label>
          </ion-item>
        </div>
        <div class="item-button-container with-border">
          <ion-item lines="none" class="grand-total">
            <ion-label>
              <div class="label-container">
                <div>Grand Total</div>
                <div class="grand-total-value">
                  <b>₱ {{ grandTotal }}</b>
                </div>
              </div>
            </ion-label>
          </ion-item>
          <ion-button
            @click="goToReceived"
            color="danger"
            class="place-order-button"
          >
            Place Order
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { IonToggle, IonButton } from "@ionic/vue";

import carbonara from "../../resources/carbonara.jpg";

const selectedPayment = ref("cash");
const subtotal = ref(185);
const deliveryCharge = ref(59);
const grandTotal = computed(() => subtotal.value + deliveryCharge.value);

const paymentOptions = [
  {
    value: "cash",
    title: "Cash on Delivery",
    description: "Pay when you received the order",
  },
  {
    value: "loyalty",
    title: "Loyalty Points",
    description: "Pay using your earned loyalty points",
  },
  {
    value: "paypal",
    title: "PayPal",
    description: "A new tab will open to access your account",
  },
  {
    value: "paynamics",
    title: "Paynamics",
    description: "Choose paynamics services available from you",
  },
];

import chevron from "../../resources/chevron.svg";
import { useRouter } from "vue-router";
import { ellipsisVertical, add, remove } from "ionicons/icons";

const router = useRouter();

const goToAdd = () => {
  router.push("/Add");
};

const goToReceived = () => {
  router.push("/Received");
};

const user = {
  name: "Jennie Kim",
  phone: "+63 912 345 6789",
  email: "jennie@email.com",
  homeAddress: "8th Avenue Caloocan City",
  workAddress: "Chino Roces Makati City",
};

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
.subtotal {
  margin-top: 20px;
}

.chevron {
  margin-left: 20px;
  width: 24px;
  height: 24px;
}

.circular-button {
  padding: 1px; /* Adjust the padding to control the size */
  background-color: #d4d3d8; /* Light background color */
  border-radius: 20px; /* Makes the button circular */
  padding: 1px; /* Adds padding around the icon */
  min-width: 15px; /* Ensures a minimum width for the circle */
  height: 15px; /* Ensures a height that makes the button circular */
  display: flex;
  justify-content: center;
  margin: 0 1px; /* Controls the spacing between the button and the value */
  align-items: center;
}

.circular-button ion-icon {
  color: #d71a21; /* Customize the icon color */
}

.item-value {
  font-size: 1.2em;
  margin: 20 2px; /* Adds some space around the value */
}

.circular-button:hover {
  background-color: #d4d3d8; /* Change the background color on hover for effect */
}

.label-container {
  display: flex;
  flex-direction: column;
}

.grand-total-value {
  margin-top: 5px; /* Adds space between the texts */
  font-size: 1.2em; /* Adjust the font size for grandTotal */
  color: #000; /* Customize the color if needed */
}

.payment-header {
  margin-left: 20px;
}

ion-input::part(native) {
  border-radius: 30px;
}

.order-card {
  margin-top: 7px;
  margin-bottom: 7px;
}

.payment-header {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.payment-card {
  margin-bottom: 1px;
  border-radius: 8px;
  box-shadow: none;
  background-color: #f4f5f8;
}

.payment-card ion-card-content {
  padding: 1px;
}

.payment-card ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
}

.payment-card ion-radio {
  margin-right: 1rem;
  --color-checked: #ffc409;
}

.payment-card h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.payment-card p {
  font-size: 0.8rem;
  color: var(--ion-color-medium);
  margin: 0;
}

.payment-icon {
  width: 20px;
  height: 20px;
}

.summary-card {
  --margin-top: 90px;
  box-shadow: none;
}

.summary-card ion-item {
  --padding-start: 4;
  --inner-padding-end: 2;
  font-size: 0.9rem;
}

.delivery-note {
  font-size: 0.8rem;
  margin-top: -0.5rem;
}

.item-button-container {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grand-total {
  flex-grow: 1;
  margin-right: 10px;
}

.place-order-button {
  height: 50px;
  margin-bottom: 20px;
  border-radius: 50%;
  width: 60%;
  white-space: nowrap;
}

.with-border {
  border: 2px solid #d3d3d3;
  border-radius: 8px;
  padding: 10px;
}

.place-order-button {
  margin-top: 1.5rem;
  --border-radius: 8px;
  font-weight: bold;
}

.order-text {
  margin-left: 20px;
}

ion-content {
  --background: #fff;
}

ion-card {
  margin-top: 10px;
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
