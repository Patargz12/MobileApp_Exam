<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons @click="goToFood" slot="start">
          <img :src="chevron" class="chevron" />
        </ion-buttons>
        <div class="header">
          <ion-title>Pasta</ion-title>
          <img :src="bag" class="bag" />
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-page>
          <ion-content class="ion-padding">
            <div class="food-item">
              <img
                :src="carbonara"
                alt="Steak Fries Veggies"
                class="food-image"
              />
              <ion-icon :icon="heart" class="favorite-icon"></ion-icon>
              <h2>Carbonara</h2>
              <div class="rating">
                <ion-icon
                  :icon="star"
                  v-for="i in 5"
                  :key="i"
                  :class="{ filled: i <= 4 }"
                ></ion-icon>
              </div>
              <p class="description">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus.
                Maecenas neque nunc.
              </p>

              <div class="price-quantity">
                <span class="price">P 172</span>
                <div class="quantity-selector button-margin-top2">
                  <ion-button fill="clear" class="custom-icon">
                    <ion-icon :icon="remove" class="icon-background"></ion-icon>
                  </ion-button>
                  <span class="quantity-text">{{ quantity }}</span>
                  <ion-button
                    fill="clear"
                    class="custom-icon button-margin-top"
                  >
                    <ion-icon :icon="add" class="icon-background"></ion-icon>
                  </ion-button>
                </div>
              </div>
              <div class="beverages">
                <h3>Beverages</h3>
              </div>

              <ion-accordion-group>
                <ion-accordion value="first">
                  <ion-item slot="header" class="custom-accordion-header">
                    <ion-label>Coke</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">Water</div>
                  <div class="ion-padding" slot="content">Pepsi</div>
                  <div class="ion-padding" slot="content">Gulaman</div>
                </ion-accordion>
              </ion-accordion-group>
            </div>
            <div class="size-selector">
              <ion-segment v-model="selectedSize" mode="ios">
                <ion-segment-button value="regular">Regular</ion-segment-button>
                <ion-segment-button value="large">Large</ion-segment-button>
                <ion-segment-button value="xlarge">X-Large</ion-segment-button>
              </ion-segment>
            </div>

            <h2 class="add-ons-title">Add-Ons</h2>
            <ion-list class="add-on">
              <ion-item
                v-for="(addon, index) in addons"
                :key="index"
                class="add-card"
              >
                <ion-thumbnail slot="start">
                  <img :src="addon.image" :alt="addon.name" />
                </ion-thumbnail>
                <ion-label>
                  <h3>{{ addon.name }}</h3>
                  <p>{{ addon.description }}</p>
                  <p class="add-price">P {{ addon.price }}</p>
                </ion-label>

                <div class="quantity-selector">
                  <ion-button
                    fill="clear"
                    class="custom-icon button-margin-top"
                  >
                    <ion-icon :icon="remove" class="icon-background"></ion-icon>
                  </ion-button>
                  <span class="quantity-text">{{ quantity }}</span>
                  <ion-button
                    fill="clear"
                    class="custom-icon button-margin-top"
                  >
                    <ion-icon :icon="add" class="icon-background"></ion-icon>
                  </ion-button>
                </div>

                <ion-icon
                  :icon="heart"
                  class="favorite-icon"
                  @click="toggleFavorite(index)"
                ></ion-icon>
              </ion-item>
            </ion-list>
          </ion-content>
          <ion-button
            color="danger"
            shape="round"
            class="custom-button"
            @click="handleAddToBag"
          >
            Add to Bag
          </ion-button>

          <CustomAlert
            v-if="showCustomAlert"
            @close="handleCloseAlert"
            @checkout="handleCheckout"
          />
          <ion-alert
            trigger="present-alert"
            header="Alert!"
            :buttons="alertButtons"
            @didDismiss="logResult($event)"
          ></ion-alert>
        </ion-page>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import carbonara from "../../resources/carbonara.jpg";

import cheese from "../../resources/cheese.jpg";
import bacon from "../../resources/bacon.jpg";
import CustomAlert from "./components/CustomAlert.vue";

import bag from "../../resources/bag.svg";

const alertButtons = [
  {
    text: "Cancel",
    role: "cancel",
    handler: () => {
      console.log("Alert canceled");
    },
  },
  {
    text: "OK",
    role: "confirm",
    handler: () => {
      console.log("Alert confirmed");
    },
  },
];

const logResult = (ev: CustomEvent) => {
  console.log(`Dismissed with role: ${ev.detail.role}`);
};

import chevron from "../../resources/chevron.svg";

import { defineComponent, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import {
  removeCircleOutline,
  addCircleOutline,
  heart,
  star,
  remove,
  add,
} from "ionicons/icons";

import { useRouter } from "vue-router";
export default defineComponent({
  name: "FoodItemDetail",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon,
    IonAccordion,
    IonAccordionGroup,
    IonSelect,
    IonSelectOption,
    CustomAlert,
  },

  setup() {
    const showCustomAlert = ref(false);

    const handleAddToBag = () => {
      showCustomAlert.value = true;
    };

    const handleCloseAlert = () => {
      showCustomAlert.value = false;
    };

    const handleCheckout = () => {
      // Add your checkout logic here
      router.push("/Food");
      console.log("Proceeding to checkout");
    };

    const router = useRouter();

    const goToFood = () => {
      router.push("/Food");
    };

    const quantity = ref(1);
    const selectedBeverage = ref("coke");
    const selectedSize = ref("regular");

    const addons = ref([
      {
        name: "Cheese",
        description: "Extras",
        price: 49,
        quantity: 1,
        image: cheese,
        favorite: true,
      },
      {
        name: "Bacon",
        description: "Extras",
        price: 25,
        quantity: 1,
        image: bacon,
        favorite: false,
      },
    ]);

    const incrementQuantity = () => {
      quantity.value++;
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const incrementAddonQuantity = (index: number) => {
      addons.value[index].quantity++;
    };

    const decrementAddonQuantity = (index: number) => {
      if (addons.value[index].quantity > 0) {
        addons.value[index].quantity--;
      }
    };

    const toggleFavorite = (index: number) => {
      addons.value[index].favorite = !addons.value[index].favorite;
    };

    return {
      quantity,
      selectedBeverage,
      selectedSize,
      addons,
      incrementQuantity,
      decrementQuantity,
      incrementAddonQuantity,
      decrementAddonQuantity,
      toggleFavorite,
      heart,
      star,
      remove,
      add,
      removeCircleOutline,
      addCircleOutline,
      chevron,
      goToFood,
      alertButtons,
      logResult,
      showCustomAlert,
      handleAddToBag,
      handleCloseAlert,
      handleCheckout,
      bag,
      carbonara,
    };
  },
});
</script>

<style scoped>
.bag {
  margin-right: 16px;
  height: 30px;
  width: 30px;
}

.chevron {
  width: 40px;
  height: 40px;
  margin-left: 15px;
  background-color: #d2d4d7;
  padding: 8px;
  border-radius: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 91%;
  right: 20px;
  z-index: 1000;
}

.icon-background {
  background-color: #d2d4d7;
  border-radius: 50%;
  padding: 8px;
  color: #d71a21;
}

.custom-icon {
  margin: 0 8px;
}

.quantity-text {
  margin: 0 7px;
  font-weight: bold;
}

.add-card {
  --background: #e9ecef;
  border-radius: 30px;
  padding: 4px;
}

.add-on {
  position: relative;
  margin-bottom: 90px;
}

.size-selector {
  margin-top: 20px;
  margin-bottom: 20px;
}

.add-ons-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.price {
  color: #d71a21;
  font-weight: bold;
  font-size: 1px;
}

.add-price {
  color: #d71a21;
  font-weight: bold;
  margin-top: 10px;
  font-size: 19px;
}

.quantity-selector {
  display: flex;
  margin-top: 21px;
}

.quantity-selector ion-button {
  --padding-start: 0;
  --padding-end: 0;
}

ion-button {
  margin-top: 10px;
}

.favorite-icon {
  font-size: 1.5rem;
  margin-left: 10px;
  color: #d71a21;
}

ion-segment {
  --background: #f4f4f4;
}

ion-segment-button {
  --background-checked: #ffc02e;
  --color-checked: #ffffff;
  --border-radius: 20px;
  min-width: 80px;
  height: 40px;
}

ion-segment-button::part(indicator-background) {
  background: #ffc02e;
}

ion-thumbnail {
  --size: 60px;
  margin-right: 16px;
}

.ion-accordion-toggle-icon {
  font-size: 50px;
  color: red;
}

.ion-accordion-toggle-icon {
  font-size: 50px;
  color: red;
}

ion-accordion {
  border-radius: 15px;
  margin: 0 auto;
}

ion-accordion.accordion-expanding,
ion-accordion.accordion-expanded {
  width: calc(100% - 32px);

  margin: 16px auto;
}

ion-accordion.accordion-collapsing ion-item[slot="header"],
ion-accordion.accordion-collapsed ion-item[slot="header"] {
  --background: var(--ion-color-light);
  --color: var(--ion-color-light-contrast);
}

ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --background: var(--ion-color-light);
  --color: var(--ion-color-light-contrast);
}

.custom-icon {
  color: #d71a21;
}

.button-margin-top2 {
  margin-bottom: 15px;
}

.food-item {
  position: relative;
  margin-top: 70px;
}

.food-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.favorite-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: white;
}

.rating {
  color: #ffd700;
  font-size: 20px;
}

.rating .filled {
  color: #ffd700;
}

.price-quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #d71a21;
}

.quantity-selector {
  display: flex;
  align-items: center;
}

.beverages {
  margin-top: 24px;
}
</style>
