<template>
	<section class="badge-carousel-component mb-6">
		<div class="badge-carousel-track flex max-content">
			<div class="badge-carousel-group flex" v-for="(_, i) in repeatedBadges" :key="i">
				<div
					v-for="(badge, index) in badges"
					:key="index"
					class="badge-carousel-item flex align-items-center gap-2 mx-6"
				>
					<img
						:src="badge.icon"
						:alt="badge.label"
						class="badge-carousel-icon w-3rem h-3rem object-contain"
					/>
					<span class="badge-carousel-label font-semibold text-color-secondary white-space-nowrap">{{
						badge.label
					}}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	badges: { icon: string; label: string }[];
}>();

const repeatedBadges = [0, 1];
</script>

<style lang="scss">
.badge-carousel-component {
	overflow: hidden;
	width: 100%;
	background: #fff;
	padding: 1rem 0;
	max-width: 70rem;
	margin: 0 auto;
	mask-image: linear-gradient(90deg, transparent 0, #fff 62px, #fff calc(100% - 62px), transparent);

	.badge-carousel-track {
		animation: scroll-left 25s linear infinite;
	}
}

@keyframes scroll-left {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}
</style>
