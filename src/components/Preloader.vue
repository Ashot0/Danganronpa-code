<template>
	<div class="preloader">
		<img ref="loader" class="preloader__img" src="@/assets/Loader.png" alt="" />
		<p class="preloader__text">Loading...</p>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
export default {
	name: 'Preloader',
	setup() {
		const loader = ref(null);

		onMounted(() => {
			gsap.fromTo(
				loader.value,
				{ opacity: 0 },
				{ opacity: 0.6, duration: 1, ease: 'power2.out' }
			);
		});

		return { loader };
	},
};
</script>

<style lang="scss" scoped>
.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #000000;
	display: flex;
	z-index: 9999;
	&__img {
		width: 100vw;
		height: 100vh;
		position: absolute;
		opacity: 0.3;
		object-fit: fill;
	}
	&__text {
		position: relative;
		padding: 20px;
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		font-size: 2rem;
		color: rgb(255, 255, 255);
		filter: drop-shadow(0px 0px 10px #e33c96);
	}
}
</style>
