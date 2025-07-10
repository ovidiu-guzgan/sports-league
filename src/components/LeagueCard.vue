<template>
	<div class="league-card-component" :class="styleClass">
		<Card
			class="h-full"
			:pt="{
				body: { class: 'h-full justify-content-between' },
			}"
		>
			<template #title>
				{{ league.strLeague }}
			</template>

			<template #subtitle>
				{{ league.strSport }}
			</template>

			<template #content>
				<p class="alternate text-secondary" v-if="league.strLeagueAlternate">
					{{ league.strLeagueAlternate }}
				</p>
			</template>

			<template #footer>
				<Button severity="contrast" class="w-full" label="See Badge" @click.stop="openBadgeDialog()" />
			</template>
		</Card>
	</div>
	<Dialog
		class="text-center season-badge-dialog"
		v-model:visible="showDialog"
		header="Season Badge"
		:style="{ width: '25rem' }"
		:breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
		modal
		dismissableMask
	>
		<template v-if="isLoading">
			<ProgressSpinner />
		</template>
		<template v-else-if="badge">
			<img :src="badge" alt="Badge" class="badge-img mx-auto" />
		</template>
		<template v-else>
			<p>No badge available.</p>
		</template>
	</Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Card, Button, Dialog, ProgressSpinner } from "primevue";
import type { League } from "../models/league.model";

import { useUIStore } from "../stores/ui.store";

const ui = useUIStore();

const props = defineProps<{
	league: League;
	styleClass: string;
}>();

const showDialog = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const badge = ref<string | null>(null);

const loadBadge = async (idLeague: string) => {
	isLoading.value = true;
	badge.value = await ui.fetchBadge(idLeague);
	isLoading.value = false;
};

const openBadgeDialog = () => {
	showDialog.value = true;
	loadBadge(props.league?.idLeague);
};
</script>

<style lang="scss">
.league-card-component {
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.02);
	}
}
</style>
