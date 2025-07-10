<template>
	<section class="page-container leagues-listing-page">
		<SearchBar />
		<InfiniteBadgeCarousel :badges="leaguesLogos" />
		<section
			class="leagues-listing mx-auto md:w-11 xl:w-9 text-center h-20rem"
			:class="{ grid: filteredLeagues?.length }"
		>
			<template v-if="filteredLeagues?.length">
				<LeagueCard
					v-for="league in filteredLeagues"
					:key="league.idLeague"
					:league="league"
					:style-class="'col-12 md:col-6 lg:col-3 text-left'"
				/>
			</template>
			<template v-else-if="isLoading">
				<div class="loading-indicator flex flex-column">
					<!-- normally i would prefer skeleton here, but not so much time -->
					<ProgressSpinner />
					Loading...
				</div>
			</template>
			<template v-else>
				<h2 class="no-results-text text-center">
					Sorry, no league matches your search! Try adjusting your search criteria.
				</h2>
			</template>
		</section>
	</section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useUIStore } from "../stores/ui.store";
import { ProgressSpinner } from "primevue";

import LeagueCard from "../components/LeagueCard.vue";
import SearchBar from "../components/SearchBar.vue";
import InfiniteBadgeCarousel from "../components/BadgeCarousel.vue";

const isLoading = ref(false);

const ui = useUIStore();
const filteredLeagues = computed(() => ui.filteredLeagues);

const leaguesLogos = [
	{
		icon: "https://www.thesportsdb.com/images/media/league/badgearchive/fcahr21690675991.png",
		label: "English Premier League",
	},
	{
		icon: "https://www.thesportsdb.com/images/media/league/badgearchive/02egea1661959225.png",
		label: "English Championship League",
	},
	{
		icon: "https://www.thesportsdb.com/images/media/league/badgearchive/pdhuqk1661980628.png",
		label: "German Bundesliga",
	},
	{
		icon: "https://www.thesportsdb.com/images/media/league/badgearchive/aff9g41694897652.png",
		label: "Italian Serie A",
	},
	{
		icon: "https://www.thesportsdb.com/images/media/league/badgearchive/tzltns1662929432.png",
		label: "Formula E",
	},
	{
		icon: "https://www.thesportsdb.com/images/media/league/badgearchive/afrdnu1749137860.png",
		label: "Formula 1",
	},
];

const loadLeagues = async () => {
	isLoading.value = true;
	await ui.fetchLeagues();
	isLoading.value = false;
};

onMounted(() => {
	loadLeagues();
});
</script>
