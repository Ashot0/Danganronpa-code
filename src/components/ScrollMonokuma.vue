<template>
	<div @click="handleCick" :class="['monokuma', directionClass]"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
	setup() {
		let lastScrollY = window.scrollY;
		const directionClass = ref('stop');
		let timeout;
		gsap.registerPlugin(ScrollTrigger);

		const handleScroll = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				directionClass.value = 'stop';
				setTimeout(() => {
					if (directionClass.value === 'stop');
					{
						directionClass.value = 'sleep';
					}
				}, 12000);
			}, 400);
		};
		const handleCick = () => {
			directionClass.value = 'happy';
		};

		onMounted(() => {
			gsap.to('.monokuma', {
				scrollTrigger: {
					trigger: '.box-monokuma',
					toggleActions: 'restart reset restart reset',
					start: 'top 80%',
					end: 'bottom 80%',
				},

				opacity: 1,
				rotationX: 360,
				position: 'fixed',
			});

			ScrollTrigger.create({
				start: 0,
				end: 'bottom',
				onUpdate: (self) => {
					const currentScrollY = window.scrollY;
					const direction = currentScrollY > lastScrollY ? 'down' : 'up';
					if (direction === 'down') {
						directionClass.value = 'down';
					} else {
						directionClass.value = 'up';
					}

					lastScrollY = currentScrollY;
					handleScroll();
				},
			});
		});

		onUnmounted(() => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			clearTimeout(timeout);
		});

		return { directionClass, handleCick };
	},
};
</script>

<style scoped>
.monokuma {
	z-index: 100;
	position: relative;
	opacity: 0;
	top: 80%;
	left: 5%;
	width: 100px;
	height: 100px;
}
.up {
	background: center / contain no-repeat
		url(/src/assets/PixelCharacters/Monokuma/up.gif);
}
.down {
	background: center / contain no-repeat
		url(/src/assets/PixelCharacters/Monokuma/down.gif);
}
.stop {
	background: center / contain no-repeat
		url(/src/assets/PixelCharacters/Monokuma/stor.gif);
	width: 95px;
	height: 95px;
}
.happy {
	background: center / contain no-repeat
		url(/src/assets/PixelCharacters/Monokuma/happy.gif);
	width: 95px;
	height: 95px;
}
.sleep {
	background: center / contain no-repeat
		url(/src/assets/PixelCharacters/Monokuma/sleep.gif);
	left: 6%;
	width: 90px;
	height: 90px;
}
</style>
