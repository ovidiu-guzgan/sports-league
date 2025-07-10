<template>
	<section class="search-bar flex flex-wrap gap-2 align-items-center mb-2 mx-auto p-4">
		<SearchLeagues class="flex-1" />
		<SportFilter class="flex-1" />
		<Button
			icon="pi pi-times"
			rounded
			outlined
			v-if="ui.searchQuery || ui.selectedSport"
			@click="ui.resetFilters()"
		/>
	</section>
</template>

<script setup lang="ts">
import SearchLeagues from "./SearchLeaguesInput.vue";
import SportFilter from "../components/SportFilter.vue";
import { useUIStore } from "../stores/ui.store";
import { Button } from "primevue";

const ui = useUIStore();
</script>
<style lang="scss">
.search-bar {
	max-width: 60rem;
	position: relative;
	top: -2.5rem;
	box-shadow: 0px 59px 16px -8px rgba(120, 149, 206, 0), 0px 38px 15px -8px rgba(120, 149, 206, 0.01),
		0px 21px 13px -8px rgba(120, 149, 206, 0.04), 0px 9px 9px -4px rgba(120, 149, 206, 0.07),
		0px 2px 5px 0px rgba(120, 149, 206, 0.08);
	background-color: #fff;
	--p-inputtext-border-radius: 2rem;
	--p-select-border-radius: 2rem;
	@media screen and (min-width: 992px) {
		border-radius: 4rem;
	}
}
</style>
