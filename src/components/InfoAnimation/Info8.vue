<template>
	<div class="char-8">
		<div class="char-8__wrapper">
			<div id="odometer" class="char-8__odometer" ref="odometerRef"></div>
		</div>
		<div class="char-8__info">
			<img class="char-8__image" src="@/assets/characters/More/8.png" alt="" />
			<p class="char-8__text">
				Makoto Naegi (苗木 誠), is a student in Hope's Peak Academy's Class
				78th, and a participant of the Killing School Life featured in
				Danganronpa: Trigger Happy Havoc. His title is the Ultimate Lucky
				Student (超高校級の「幸運」lit. Super High School Level Good Luck).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted } from 'vue';
import Odometer from 'odometer';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/8.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});
		const odometerRef = ref(null);
		let odometer;

		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.1,
		});
		onMounted(() => {
			soundStart.play();
			odometer = new Odometer({
				el: odometerRef.value,
				value: 0,
				format: '(,ddd)',
			});
			setTimeout(() => {
				odometer.update(777);
			}, 1000);

			infoTimeline.fromTo(
				'.char-8__info',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: 3.5,
					duration: 0.5,
				}
			);
			infoTimeline.fromTo(
				odometerRef.value,
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 0.5,
					pointerEvents: 'none',
				}
			);
		});

		onUnmounted(() => {
			soundStart.stop();
			infoTimeline.clear;
		});
		return { odometerRef };
	},
};
</script>

<style lang="scss" scoped>
.char-8 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
	}
	&__odometer {
		text-wrap: nowrap;
		left: 50%;
		transform: translate(-50%);
		font-size: 45vh;
		position: relative;
		overflow: hidden;
		z-index: 11;
	}
	&__info {
		top: 0;
		margin: 0 5%;
		position: absolute;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90%;
	}
	&__image {
		width: 45%;
	}
	&__text {
		width: 45%;
		text-align: center;
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-size: 2rem;
		font-style: normal;
		color: white;
		text-shadow: 1px 1px 2px black;
	}
}
@media (orientation: portrait) {
	.char-8 {
		&__wrapper {
			margin-top: 0%;
		}
		&__odometer {
			margin-top: 60%;
			font-size: 7rem;
		}
		&__info {
			flex-direction: column;
		}
		&__image {
			width: 100%;
		}
		&__text {
			width: 100%;
			font-size: 1rem;
		}
	}
}
</style>
