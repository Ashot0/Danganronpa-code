<template>
	<div class="home">
		<div class="bg__wrapper">
			<img src="@/assets/char-logo.png" alt="" class="bg" />
		</div>
		<Hero />
		<Box />
		<Characters class="home__characters" />
		<BoxT />
		<footer>footer</footer>
	</div>
</template>

<script>
import { onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
import Hero from '../components/Hero.vue';
import Box from '../components/Box.vue';
import BoxT from '../components/BoxT.vue';
import Characters from '../components/Characters.vue';
export default {
	components: {
		Characters,
		Hero,
		Box,
		BoxT,
	},
	setup(props) {
		const circlesAnimation = () => {
			gsap.to('.bg', {
				rotationY: 360,
				duration: 17,
				repeat: -1,
				ease: 'linear',
				transformOrigin: '50% 50%',
			});
		};
		onMounted(() => {
			circlesAnimation();
			gsap.fromTo(
				'.home__characters',
				{ filter: 'blur(1.5rem)' },
				{
					scrollTrigger: {
						trigger: '.home__characters',
						toggleActions: 'restart restart none none',
					},
					duration: 0.3,
					filter: 'blur(0rem)',
				}
			);
		});
	},
};
</script>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.home {
	width: 100vw;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}

.bg {
	position: absolute;
	height: 50vh;
	opacity: 0.3;
	top: 25vh;
	&__wrapper {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		background-color: #ef92c550;
	}
}
</style>
