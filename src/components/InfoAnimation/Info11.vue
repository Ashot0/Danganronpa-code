<template>
	<div class="char-11">
		<div class="char-11__wrapper">
			<svg
				id="svg1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="100vw"
				height="100vh"
				viewBox="300 120 200 200"
				style="border: 1px solid"
			>
				<text
					x="30vh"
					y="10vw"
					font-size="24px"
					font-family="monospace"
					fill="black"
				></text>

				<path
					id="p1"
					d="M50 500 A350 350 0 0 1 750 500"
					fill="none"
					stroke="none"
				/>
				<g>
					<image
						y="0"
						href="@/assets/InfoAssets/11/6.png"
						width="210px"
						height="262px"
					>
						<animateMotion
							dur="0.1s"
							begin="load"
							repeatCount="1"
							rotate="auto"
							keyPoints="0.3;0.3"
							keyTimes="0;1"
							calcMode="linear"
							fill="freeze"
						>
							<mpath xlink:href="#p1" />
						</animateMotion>
					</image>
					<image
						y="0"
						href="@/assets/InfoAssets/11/3.png"
						width="210px"
						height="262px"
					>
						<animateMotion
							dur="2s"
							begin="load"
							repeatCount="1"
							rotate="auto"
							keyPoints="0.3;0.36"
							keyTimes="0;1"
							fill="freeze"
							calcMode="linear"
						>
							<mpath xlink:href="#p1" />
						</animateMotion>
					</image>
				</g>
				<image
					y="0"
					href="@/assets/InfoAssets/11/4.png"
					width="210px"
					height="262px"
				>
					<animateMotion
						dur="2s"
						begin="load"
						repeatCount="1"
						rotate="auto"
						keyPoints="0.3;0.42"
						keyTimes="0;1"
						fill="freeze"
						calcMode="linear"
					>
						<mpath xlink:href="#p1" />
					</animateMotion>
				</image>
				<image
					y="0"
					href="@/assets/InfoAssets/11/2.png"
					width="210px"
					height="262px"
				>
					<animateMotion
						dur="2s"
						begin="load"
						repeatCount="1"
						rotate="auto"
						keyPoints="0.3;0.48"
						keyTimes="0;1"
						fill="freeze"
						calcMode="linear"
					>
						<mpath xlink:href="#p1" />
					</animateMotion>
				</image>
				<image
					y="0"
					href="@/assets/InfoAssets/11/3.png"
					width="210px"
					height="262px"
				>
					<animateMotion
						dur="2s"
						begin="load"
						repeatCount="1"
						rotate="auto"
						keyPoints="0.3;0.54"
						keyTimes="0;1"
						fill="freeze"
						calcMode="linear"
					>
						<mpath xlink:href="#p1" />
					</animateMotion>
				</image>
				<image
					y="0"
					href="@/assets/InfoAssets/11/4.png"
					width="210px"
					height="262px"
				>
					<animateMotion
						dur="2s"
						begin="load"
						repeatCount="1"
						rotate="auto"
						keyPoints="0.3;0.6"
						keyTimes="0;1"
						fill="freeze"
						calcMode="linear"
					>
						<mpath xlink:href="#p1" />
					</animateMotion>
				</image>
			</svg>
		</div>
		<div class="char-11__info">
			<img
				class="char-11__image"
				src="@/assets/characters/More/11.png"
				alt=""
			/>
			<p class="char-11__text">
				Celestia Ludenberg (セレスティア・ルーデンベルク), also known as
				Celeste, is a student in Hope's Peak Academy's Class 78th, and a
				participant of the Killing School Life featured in Danganronpa: Trigger
				Happy Havoc. Her title is the Ultimate Gambler
				(超高校級の「ギャンブラー」 lit. Super High School Level Gambler).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/11.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});

		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.2,
		});
		onMounted(() => {
			soundStart.play();
			gsap.fromTo(
				'.char-11__info',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 1,
					delay: 2.5,
				}
			);
			gsap.fromTo(
				'.char-11__wrapper',
				{
					opacity: 1,
				},
				{
					opacity: 0.6,
					duration: 1,
					delay: 2.5,
				}
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
.char-11 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		width: 100%;
		height: 100%;
		opacity: 1;
	}

	&__info {
		margin: 0 5%;
		top: 0;
		position: absolute;
		z-index: 12;
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
		color: rgb(255, 255, 255);
		text-shadow: 0px 0px 20px rgb(0, 0, 0);
	}
}
@media (orientation: portrait) {
	.char-11 {
		&__wrapper {
			margin-top: 0%;
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
