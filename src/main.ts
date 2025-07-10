import "./style.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});

app.mount("#app");
