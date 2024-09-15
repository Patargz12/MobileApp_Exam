<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header class="header-content">
              <ion-avatar>
                <img alt="Silhouette of a person's head" :src="jennie" />
              </ion-avatar>
              <ion-menu-toggle :auto-hide="false">
                <ion-router-link @click="goToLoyalty" class="link-wrapper">
                  <div class="button-content">
                    <img :src="crown" class="crown" />
                    <ion-text color="black" class="text-content">
                      <h5>0 Points</h5>
                    </ion-text>
                    <img
                      class="arrow-icon"
                      :src="arrow"
                      style="height: 25px; width: 25px"
                    />
                  </div>
                </ion-router-link>
              </ion-menu-toggle>
            </ion-list-header>
            <h2 class="jennie">Jennie Kim</h2>
            <ion-note>+63 927 4484 584</ion-note>

            <ion-menu-toggle
              :auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-list-header>Labels</ion-list-header>

            <ion-menu-toggle
              :auto-hide="false"
              v-for="(p, i) in appPages2"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          <ion-button color="danger" @click="logout" shape="round"
            >LOGOUT</ion-button
          >
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import chevron from "../resources/chevron.svg";
import { menuController } from "@ionic/vue";

import { useRouter } from "vue-router";
const router = useRouter();

const goToLoyalty = () => {
  router.push("/Loyalty");
};

const closeMenu = async () => {
  await menuController.close();
};

const logout = async () => {
  await closeMenu();
  setTimeout(() => {
    router.push("/Login");
  }, 100);
};
import jennie from "../resources/jennie_pic.jpg";
import crown from "../resources/crown_logo.png";

import arrow from "../resources/arrow.svg";

import { IonTextarea } from "@ionic/vue";
import { defineComponent } from "vue";

import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import { ref } from "vue";

import { IonButton } from "@ionic/vue";

import { heart } from "ionicons/icons";

import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  home,
  cart,
  notifications,
  storefront,
  helpCircle,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  person,
  location,
  trashBin,
  book,
} from "ionicons/icons";

const selectedIndex = ref(0);

const appPages = [
  {
    title: "Home",
    url: "/Home",
    iosIcon: home,
    mdIcon: home,
  },
  {
    title: "Order Now!",
    url: "/Food",
    iosIcon: cart,
    mdIcon: cart,
  },
  {
    title: "Notifications",
    url: "/Home",
    iosIcon: notifications,
    mdIcon: notifications,
  },
  {
    title: "Store Locator",
    url: "/Home",
    iosIcon: storefront,
    mdIcon: storefront,
  },
  {
    title: "FAQ's",
    url: "/Home",
    iosIcon: helpCircle,
    mdIcon: helpCircle,
  },
];

const appPages2 = [
  {
    title: "My Orders",
    url: "/Home",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "My Account",
    url: "/Home",
    iosIcon: person,
    mdIcon: person,
  },
  {
    title: "My Favorites",
    url: "/Home",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Order Tracker",
    url: "/Home",
    iosIcon: location,
    mdIcon: location,
  },
  {
    title: "Order History",
    url: "/Home",
    iosIcon: book,
    mdIcon: book,
  },
];

const path = window.location.pathname.split("folder/")[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase()
  );
}
</script>

<style scoped>
.jennie {
  margin-left: 10px;
}

.link-wrapper {
  text-decoration: none;
  display: block;
  color: inherit;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
}

.crown {
  height: 60px;
  width: 60px;
  margin-left: 21px;
}

.arrow-icon {
  fill: #d71a21;
  height: 25px;
  width: 25px;
}

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

.header-content {
  display: flex;
  align-items: center;
}

.text-content {
  margin-right: 10px;
}

.logout {
  color: white;
  background-color: #d71a21;
}

ion-avatar {
  margin-right: 10px;
}

.textarea-item {
  flex: 1;
}

ion-text {
  margin-left: 20px;
}

ion-textarea {
  width: 100%;
}

ion-list-header {
  display: flex !important;
  align-items: center;
  padding: 0;
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu2.md ion-list-header2,
ion-menu2.md ion-note2 {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: #d71a21;
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: #d71a21;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-list-header {
  justify-content: space-between;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: #d71a21;
}
</style>
