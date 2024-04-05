<template>
	<div class="char-3">
		<div class="char-3__wrapper">
			<img class="char-3__bat" src="@/assets/InfoAssets/3/2.png" alt="" />
		</div>
		<div class="char-3__info">
			<img class="char-3__image" src="@/assets/characters/More/3.png" alt="" />
			<p class="char-3__text">
				Mondo Owada (大和田 紋土), is a student in Hope's Peak Academy's Class
				78th, and a participant of the Killing School Life featured in
				Danganronpa: Trigger Happy Havoc. His title is the Ultimate Biker Gang
				Leader (超高校級の「暴走族」lit. Super High School Level Gang Leader).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/3.mp3';
export default {
	props: { info: Object },
	setup() {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});

		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.1,
		});
		onMounted(() => {
			setTimeout(() => {
				soundStart.play();
			}, 400);

			infoTimeline.fromTo(
				'.char-3__wrapper',
				{
					rotate: '-90deg',
				},
				{
					rotate: '0deg',
					duration: 0.7,
					delay: 0.3,
				}
			);
			infoTimeline.fromTo(
				'.char-3__info',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: 0,
					duration: 0.3,
					ease: 'linear',
				},
				'-=85%'
			);
		});
		onUnmounted(() => {
			soundStart.stop();
			infoTimeline.clear;
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.char-3 {
	position: relative;
	width: 100%;
	height: 100%;

	overflow: hidden;
	&__wrapper {
		position: absolute;
		right: -30%;
		rotate: -90deg;
		top: 100%;
		z-index: 12;
	}
	&__bat {
		height: 300vh;
		rotate: -15deg;
		transform: translate(50%, -50%);
		z-index: 12;
		pointer-events: none;
	}
	&__info {
		opacity: 0;
		top: 0%;
		margin: 0 5%;
		position: absolute;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
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
	.char-3 {
		&__wrapper {
			margin-right: -100%;
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
