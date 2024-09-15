<template>
  <ion-page>
    <ion-header :translucent="true"> </ion-header>

    <ion-content class="ion-padding">
      <div class="login-container">
        <div class="logo-container">
          <img :src="logo" alt="FastFood Logo" class="logo" />
        </div>
        <h1>Bonjour!</h1>
        <p class="welcome-text">
          Welcome to all new FastFood mobile app. Kindly login your account.
          Thank you!
        </p>

        <form @submit.prevent="Login" class="login-form">
          <ion-item class="input-item">
            <ion-input
              v-model="email"
              placeholder="Email Address"
              type="email"
            ></ion-input>
          </ion-item>

          <ion-item class="input-item password-item">
            <ion-input
              v-model="password"
              placeholder="Password"
              :type="showPassword ? 'text' : 'password'"
            ></ion-input>
            <ion-button
              fill="clear"
              class="password-toggle"
              @click="togglePasswordVisibility"
            >
              <ion-icon :icon="showPassword ? eyeOff : eye"></ion-icon>
            </ion-button>
          </ion-item>

          <div class="forgot-password">
            <ion-button fill="clear" class="forgot-btn" @click="forgotPassword"
              >Forgot?</ion-button
            >
          </div>

          <ion-button
            expand="block"
            @click="Login"
            type="submit"
            class="login-btn"
            >Login</ion-button
          >
        </form>

        <ion-button
          expand="block"
          fill="clear"
          class="guest-btn"
          @click="Login"
        >
          Login as Guest
        </ion-button>

        <p class="create-account">
          Don't have an account yet?
          <ion-button fill="clear" class="create-btn" @click="createAccount"
            >Create</ion-button
          >
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import logo from "../../resources/fastfood_logo.png";
import { defineComponent, ref } from "vue";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { eye, eyeOff } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

const { Toast } = Plugins;

import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
  },

  setup() {
    const router = useRouter();

    const Login = () => {
      router.push("/Home");
    };

    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);

    const handleLogin = async () => {
      console.log("Login with:", email.value, password.value);
      await Toast.show({
        text: "Login functionality to be implemented",
        duration: "short",
        position: "bottom",
      });
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const forgotPassword = async () => {
      await Toast.show({
        text: "Forgot password functionality to be implemented",
        duration: "short",
        position: "bottom",
      });
    };

    const loginAsGuest = async () => {
      await Toast.show({
        text: "Guest login functionality to be implemented",
        duration: "short",
        position: "bottom",
      });
    };

    const createAccount = async () => {
      await Toast.show({
        text: "Account creation functionality to be implemented",
        duration: "short",
        position: "bottom",
      });
    };

    return {
      email,
      password,
      showPassword,
      handleLogin,
      togglePasswordVisibility,
      forgotPassword,
      loginAsGuest,
      createAccount,
      eye,
      eyeOff,
      logo,
      Login,
    };
  },
});
</script>

<style scoped>
.input-item {
  --highlight-color-focused: #3880ff;
  margin-bottom: 16px;
}

ion-label {
  padding-bottom: 5px;
  font-size: 1em;
}

ion-input {
  padding-top: 5px;
  font-size: 1.1em;
}

.password-item .password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.login-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 20px;
}

.logo-container {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 100px;
  height: auto;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.welcome-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.login-form {
  margin-bottom: 20px;
}

.password-item {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 0;
  bottom: 0;
  --padding-end: 0;
  --padding-start: 0;
  margin: 0;
}

.forgot-password {
  text-align: right;
  margin-top: 5px;
  border-radius: 50px;
}

.forgot-btn {
  --color: #d71a21;
  --border-radius: 50px;
  font-size: 12px;
  text-transform: none;
}

.login-btn {
  --background: #d71a21;
  --color: #ffffff;
  margin-top: 20px;
}

.guest-btn {
  --color: #d71a21;
  margin-top: 10px;
}

.create-account {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
}

.create-btn {
  --color: #d71a21;
  font-weight: bold;
  text-transform: none;
}
</style>
