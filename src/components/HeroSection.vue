<template>
	<section class="hero-section-component">
		<h1 class="hero-section-title text-4xl md:text-7xl lg:text-8xl text-center">Sports League Explorer</h1>
	</section>
</template>

<style lang="scss">
.hero-section-component {
	position: relative;
	background-image: url("@/assets/players.webp");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 75vh;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;

	&::after {
		content: "";
		display: block;
		background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff 90%, #fff);
		position: absolute;
		left: 0;
		bottom: 0;
		height: 4rem;
		width: 100%;
	}

	h1 {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
		color: gold;
	}
}
</style>
