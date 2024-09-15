<template>
  <div class="custom-alert-overlay" @click="close">
    <div class="custom-alert" @click.stop>
      <div class="alert-icon">
        <img :src="ok" alt="Success" />
      </div>
      <h2>Successfully Added!</h2>
      <p>What do you want to do now?</p>
      <ion-button expand="block" @click="checkout" class="checkout-button">
        Proceed to Checkout
      </ion-button>
      <button @click="more" class="add-more-button">Add More</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { useRouter } from "vue-router";
import { IonButton } from "@ionic/vue";

import ok from "../../../resources/okay.png";

export default defineComponent({
  name: "CustomAlert",
  components: { IonButton },
  emits: ["close", "checkout"],
  setup(props, { emit }) {
    const router = useRouter();

    const close = () => emit("close");

    const checkout = () => {
      router.push("/Order").then(() => {
        nextTick(() => {
          close();
        });
      });
    };

    const more = () => {
      router.push("/Food").then(() => {
        nextTick(() => {
          close();
        });
      });
    };

    return { close, more, ok, checkout };
  },
});
</script>

<style scoped>
.custom-alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.custom-alert {
  background-color: white;
  border-radius: 10px;
  padding: 37px;

  width: 80%;
  max-width: 300px;
  text-align: center;
}

.alert-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-color: #ffc02e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-icon img {
  width: 70px;
  height: 70px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

.checkout-button {
  --background: #d71a21;
  --color: white;
  --border-radius: 30px;
  margin-bottom: 10px;
  padding: 10px 0px;
}

.add-more-button {
  background: none;
  border: none;
  color: #d71a21;
  font-weight: bold;
  cursor: pointer;
}
</style>
