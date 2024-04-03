<template>
	<div class="preloader">
		<img ref="loader" class="preloader__img" src="@/assets/Loader.png" alt="" />
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
	justify-content: center;
	align-items: center;
	z-index: 9999;
	&__img {
		width: 100vw;
		height: 100vh;
		position: absolute;
		opacity: 0.3;
		object-fit: fill;
	}
}
</style>
