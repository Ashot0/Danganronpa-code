<template>
	<div class="circle__wrapper">
		<img class="circle circle_outer" src="@/assets/elips/elips 1.png" alt="" />
		<img class="circle circle_middle" src="@/assets/elips/elips 2.png" alt="" />
		<img class="circle circle_inner" src="@/assets/elips/elips 3.png" alt="" />
	</div>
</template>

<script>
import { onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
export default {
	props: {
		complete: Boolean,
	},
	setup(props) {
		const circlesAnimation = () => {
			gsap.to('.circle_outer', {
				rotation: 360,
				duration: 10,
				repeat: -1,
				ease: 'linear',
				transformOrigin: '50% 50%',
			});
			gsap.to('.circle_middle', {
				rotation: -360,
				duration: 10,
				repeat: -1,
				ease: 'linear',
				transformOrigin: '50% 50%',
			});
			gsap.to('.circle_inner', {
				rotation: 360,
				duration: 10,
				repeat: -1,
				ease: 'linear',
				transformOrigin: '50% 50%',
			});
		};
		const circlesInit = () => {
			gsap.fromTo(
				'.circle_outer',
				{
					width: '10%',
					height: '10%',
				},
				{ delay: 0.3, width: '45%', height: '45%', opacity: 0.5 }
			);
			gsap.fromTo(
				'.circle_middle',
				{
					width: '10%',
					height: '10%',
				},
				{
					delay: 0.3,
					width: '65%',
					height: '65%',
					opacity: 0.5,
				}
			);
			gsap.fromTo(
				'.circle_inner',
				{
					width: '10%',
					height: '10%',
				},
				{
					delay: 0.3,
					width: '100%',
					height: '100%',
					opacity: 0.5,
				}
			);
		};
		const reverseCirclesInit = () => {
			gsap.to('.circle_outer', {
				duration: 0.3,
				delay: 1.3,
				width: '10%',
				height: '10%',
				opacity: 0.5,
			});
			gsap.to('.circle_middle', {
				duration: 0.3,
				delay: 1.3,
				width: '10%',
				height: '10%',
				opacity: 0.5,
			});
			gsap.to('.circle_inner', {
				duration: 0.3,
				delay: 1.3,
				width: '10%',
				height: '10%',
				opacity: 0.5,
			});
		};

		onMounted(() => {
			circlesAnimation();
			circlesInit();
		});
		onUnmounted(() => {
			reverseCirclesInit();
		});

		watch(
			() => props.complete,
			(newVal) => {
				if (!newVal) {
					reverseCirclesInit();
				}
			}
		);
	},
};
</script>

<style lang="scss" scoped>
.circle {
	z-index: 30;
	position: absolute;
	opacity: 0.5;
	&__wrapper {
		position: absolute;
		top: -10vh;
		left: 40%;
		width: 120vh;
		height: 120vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
@media (orientation: portrait) {
	.circle {
		&__wrapper {
			width: 120vw;
			height: 120vw;
		}
	}
}
</style>
