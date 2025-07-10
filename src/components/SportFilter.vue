<template>
	<Select
		v-model="ui.selectedSport"
		:options="dropdownOptions"
		optionLabel="label"
		optionValue="value"
		placeholder="Filter by sport"
		showClear
	/>
</template>

<script setup lang="ts">
import { Select } from "primevue";
import { computed } from "vue";

import { useUIStore } from "../stores/ui.store";

const ui = useUIStore();
const dropdownOptions = computed(() => (ui.availableSports ?? []).map((sport) => ({ label: sport, value: sport })));
</script>
