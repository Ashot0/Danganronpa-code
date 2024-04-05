<template>
	<div class="char-15">
		<div class="char-15__wrapper">
			<img
				class="char-15__monokuma"
				src="@/assets/InfoAssets/15/5.gif"
				alt=""
			/>
			<img
				class="char-15__explosive"
				src="@/assets/InfoAssets/15/3.png"
				alt=""
			/>
		</div>
		<div class="char-15__info">
			<img
				class="char-15__image"
				src="@/assets/characters/More/15.png"
				alt=""
			/>
			<p class="char-15__text">
				Junko Enoshima (江ノ島 盾子), is a student in Hope's Peak Academy's
				Class 78th, and a participant of the Killing School Life featured in
				Danganronpa: Trigger Happy Havoc. Her title is the Ultimate Fashionista
				(超高校級の「ギャル」 lit. Super High School Level Gyaru).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/15.mp3';
import startExplosiveSrc from '../../assets/sounds/Info/151.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});

		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.3,
		});
		const explosiveStart = new Howl({
			src: startExplosiveSrc,
			volume: 0.3,
		});
		onMounted(() => {
			soundStart.play();
			infoTimeline.fromTo(
				'.char-15__explosive',
				{
					width: '0%',
				},
				{
					width: '200%',
					delay: 3,
					duration: 8,
					ease: 'elastic.out',
					onStart: () => {
						explosiveStart.play();
					},
				}
			);
			infoTimeline.fromTo(
				'.char-15__monokuma',
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 0.01,
				},
				'-=60000%'
			);
			infoTimeline.fromTo(
				'.char-15__explosive',
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 1.5,
					ease: 'elastic.out',
				},
				'-=400%'
			);
			infoTimeline.fromTo(
				'.char-15__info',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 1,
					ease: 'elastic.out',
				},
				'-=600%'
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
.char-15 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	&__monokuma {
		opacity: 1;
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%);
	}
	&__explosive {
		width: 0%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	&__info {
		top: 0;
		opacity: 0;
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
	.char-15 {
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
