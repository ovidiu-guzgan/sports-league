<template>
	<InputText v-model="searchInput" placeholder="Type to search leagues..." />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUIStore } from "../stores/ui.store";
import debounce from "lodash/debounce";
import { InputText } from "primevue";

const ui = useUIStore();

const searchInput = computed({
	get: () => ui.searchQuery,
	set: debounce((val: string) => {
		ui.searchQuery = val;
	}, 300),
});
</script>
