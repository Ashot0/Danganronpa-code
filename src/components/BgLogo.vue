<template>
	<div class="bg__wrapper">
		<img src="@/assets/char-logo-white.png" alt="" class="bg" />
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
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
			gsap.to('.bg', {
				opacity: 0.3,
				scrollTrigger: {
					trigger: '.bg__line',
					toggleActions: 'play reset play none',
					start: 'top bottom',
					end: 'bottom top',
				},
			});
			circlesAnimation();
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.bg {
	position: absolute;
	height: 50vh;
	opacity: 0;
	top: 25vh;
	&__wrapper {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		background-color: #be0022ff;
	}
}
</style>
