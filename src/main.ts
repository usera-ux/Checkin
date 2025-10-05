import { createApp } from "vue";
import App from "./App.vue";
import "./index.css"
import router from './router';
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";  



import "primeicons/primeicons.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Dropdown from "primevue/dropdown";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(router);

app.component("p-button", Button);
app.component("p-inputtext", InputText);
app.component("p-card", Card);
app.component("p-dropdown", Dropdown);

app.mount("#app");
