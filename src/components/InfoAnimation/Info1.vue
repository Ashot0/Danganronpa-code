<template>
	<div class="char-1">
		<div class="char-1__wrapper">
			<img class="char-1__space" src="@/assets/InfoAssets/1/1.png" alt="" />
			<img class="char-1__ball" src="@/assets/InfoAssets/1/ball.png" alt="" />
		</div>
		<div class="char-1__info">
			<img class="char-1__image" src="@/assets/characters/More/1.png" alt="" />
			<p class="char-1__text">
				Yasuhiro Hagakure (葉隠 康比呂), also known as Hiro, is a student in
				Hope's Peak Academy's Class 78th, and a participant of the Killing
				School Life featured in Danganronpa: Trigger Happy Havoc. His title is
				the Ultimate Clairvoyant (超高校級の「占い師」 lit. Super High School
				Level Fortune-Teller).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/1.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});
		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.1,
		});
		onMounted(() => {
			soundStart.play();
			gsap.to('.char-1__space', {
				rotate: '360deg',
				repeat: -1,
				duration: 25,
				ease: 'linear',
			});
			infoTimeline.fromTo(
				'.char-1__wrapper',
				{
					width: '1vw',
					height: '1vw',
					top: '50%',
				},
				{
					width: '150vw',
					height: '150vw',
					top: '-50vw',
					duration: 4,
					opacity: 1,
				}
			);
			infoTimeline.fromTo(
				'.char-1__info',
				{
					opacity: 0,
					rotateZ: -45,
					width: '95%',
					height: '95%',
				},
				{
					opacity: 0.6,
					rotateZ: 0,
					ease: 'power2.out',
					width: '95%',
					height: '95%',

					duration: 7,
				}
			);
		});
		onBeforeUnmount(() => {});

		onUnmounted(() => {
			soundStart.stop();
			infoTimeline.clear;
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.char-1 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		width: 1vw;
		height: 1vw;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		opacity: 1;
		transform: translate(-50%);
	}
	&__ball {
		width: 100%;
		height: 100%;
		object-fit: contain;
		position: absolute;
	}
	&__space {
		width: 100%;
		height: 100%;
		object-fit: fill;
		object-position: center;
		position: absolute;
	}
	&__info {
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	&__image {
		width: 50%;
		filter: drop-shadow(30px 10px 10px #565685);
	}
	&__text {
		width: 50%;
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
</style>
