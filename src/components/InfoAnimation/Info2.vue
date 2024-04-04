<template>
	<div class="char-2">
		<svg
			class="char-2__wrapper"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
		>
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
				/>
			</defs>
			<g class="char-2__parallax">
				<use xlink:href="#gentle-wave" x="50" y="0" fill="#4579e2" />
				<use xlink:href="#gentle-wave" x="50" y="3" fill="#3461c1" />
				<use xlink:href="#gentle-wave" x="50" y="6" fill="#2d55aa" />
			</g>
		</svg>
		<div class="char-2__underwater">
			<img
				class="char-2__fish char-2__fish_1"
				src="@/assets/InfoAssets/2/Fish-3.png"
				alt=""
			/>
			<img
				class="char-2__fish char-2__fish_2"
				src="@/assets/InfoAssets/2/Fish-10.png"
				alt=""
			/>
			<img
				class="char-2__fish char-2__fish_3"
				src="@/assets/InfoAssets/2/Fish-1.png"
				alt=""
			/>
			<img
				class="char-2__fish char-2__fish_4"
				src="@/assets/InfoAssets/2/Fish-4.png"
				alt=""
			/>
			<img
				class="char-2__fish char-2__fish_5"
				src="@/assets/InfoAssets/2/Fish-5.png"
				alt=""
			/>
		</div>
		<div class="char-2__info">
			<img class="char-2__image" src="@/assets/characters/More/2.png" alt="" />
			<p class="char-2__text">
				Aoi Asahina (朝日奈 葵), also known as Hina, is a student in Hope's Peak
				Academy's Class 78th, and a participant of the Killing School Life
				featured in Danganronpa: Trigger Happy Havoc. Her title is the Ultimate
				Swimming Pro (超高校級の「スイマー」lit. Super High School Level
				Swimmer).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/2.mp3';
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
			soundStart.play();
			infoTimeline.fromTo(
				'.char-2__wrapper',
				{
					top: '75%',
				},
				{
					delay: 1,
					duration: 2,
					top: '0%',
					ease: 'linear',
				}
			);
			infoTimeline.fromTo(
				'.char-2__underwater',
				{
					height: '0%',
					top: '100%',
				},
				{
					delay: 1,
					duration: 3,
					height: '101%',
					top: '-1%',
					ease: 'linear',
				},
				'='
			);
			infoTimeline.fromTo(
				'.char-2__fish',
				{ opacity: 0 },
				{
					opacity: 0.3,
				}
			);
			infoTimeline.fromTo(
				'.char-2__fish_1',
				{ x: '-50vw', y: '-12vh' },
				{
					x: '100vw',
					y: '0vh',
					duration: 12,
					repeat: -1,
				},
				'-1%'
			);
			infoTimeline.fromTo(
				'.char-2__fish_2',
				{ x: '-50vw', y: '-10vh' },
				{
					x: '100vw',
					y: '0vh',
					duration: 5,
					repeat: -1,
				},
				'-1%'
			);
			infoTimeline.fromTo(
				'.char-2__fish_3',
				{ x: '100vw', y: '-30vh' },
				{
					x: '-100vw',
					y: '0vh',
					duration: 13,
					repeat: -1,
				},
				'-1%'
			);
			infoTimeline.fromTo(
				'.char-2__fish_4',
				{ x: '100vw', y: '-60vh' },
				{
					x: '-100vw',
					y: '0vh',
					duration: 7,
					repeat: -1,
				},
				'-1%'
			);
			infoTimeline.fromTo(
				'.char-2__fish_5',
				{ x: '100vw', y: '30vh' },
				{
					x: '-100vw',
					y: '0vh',
					duration: 10,
					repeat: -1,
				},
				'-1%'
			);
			infoTimeline.fromTo(
				'.char-2__info',
				{
					opacity: '0',
				},
				{
					delay: 1,
					duration: 2,
					opacity: '1',
					ease: 'linear',
				},
				'-1%'
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
@keyframes move-forever {
	0% {
		transform: translate(-90px, 0%);
	}
	100% {
		transform: translate(85px, 0%);
	}
}
.char-2 {
	position: relative;
	width: 100%;
	height: 100%;

	overflow: hidden;
	&__wrapper {
		position: relative;
		top: 75%;
		z-index: 11;
	}
	&__parallax > use {
		animation: move-forever 12s linear infinite;
		&:nth-child(1) {
			animation-delay: -2s;
		}
		&:nth-child(2) {
			animation-delay: -2s;
			animation-duration: 5s;
		}
		&:nth-child(3) {
			animation-delay: -4s;
			animation-duration: 3s;
		}
	}
	&__underwater {
		top: 100%;
		position: relative;
		z-index: 10;
		background-color: #2d55aa;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 0%;
		width: 100%;
	}
	&__fish {
		width: 10%;
		height: 10%;
		object-fit: contain;
		position: absolute;
	}
	&__info {
		top: 0%;
		margin: 0 5%;
		opacity: 0;
		position: absolute;
		z-index: 12;
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
</style>
