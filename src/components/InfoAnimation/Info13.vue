<template>
	<div class="char-13">
		<div class="char-13__wrapper">
			<img class="char-13__clear" src="@/assets/InfoAssets/13/1.png" alt="" />
			<img
				class="char-13__anime char-13__anime_1"
				src="@/assets/InfoAssets/13/2.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_2"
				src="@/assets/InfoAssets/13/3.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_3"
				src="@/assets/InfoAssets/13/4.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_4"
				src="@/assets/InfoAssets/13/5.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_5"
				src="@/assets/InfoAssets/13/6.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_6"
				src="@/assets/InfoAssets/13/7.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_7"
				src="@/assets/InfoAssets/13/8.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_8"
				src="@/assets/InfoAssets/13/9.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_9"
				src="@/assets/InfoAssets/13/10.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_10"
				src="@/assets/InfoAssets/13/11.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_11"
				src="@/assets/InfoAssets/13/12.png"
				alt=""
			/>
			<img
				class="char-13__anime char-13__anime_12"
				src="@/assets/InfoAssets/13/13.png"
				alt=""
			/>
		</div>
		<div class="char-13__info">
			<img
				class="char-13__image"
				src="@/assets/characters/More/13.png"
				alt=""
			/>
			<p class="char-13__text">
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
import startSoundSrc from '../../assets/sounds/Info/13.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.4, delay: 0.3, ease: 'bounce' },
		});

		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.3,
		});
		onMounted(() => {
			soundStart.play();
			infoTimeline.fromTo(
				'.char-13__clear',
				{
					rotate: '-45deg',
				},
				{
					rotate: '100deg',
					repeat: -1,
					duration: 0.7,
					delay: 0.3,
					yoyo: true,
					ease: 'linear',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_12',
				{
					left: '30%',
					bottom: '-20%',
				},
				{
					left: '-100%',
					bottom: '-100%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_11',
				{
					left: '70%',
				},
				{
					left: '-100%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_10',
				{
					left: '50%',
					bottom: '-30%',
				},
				{
					left: '30%',
					bottom: '130%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_9',
				{
					left: '7%',
				},
				{
					left: '150%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_8',
				{
					left: '50%',
				},
				{
					left: '-100%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_7',
				{
					left: '70%',
					bottom: '0%',
				},
				{
					left: '-100%',
					bottom: '70%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_6',
				{
					left: '15%',
				},
				{
					left: '150%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_5',
				{
					left: '30%',
				},
				{
					left: '-100%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_4',
				{
					left: '0%',
				},
				{
					left: '150%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_3',
				{
					left: '50%',
				},
				{
					left: '100%',
					top: '100%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_2',
				{
					left: '-10%',
					bottom: '-2%',
				},
				{
					left: '100%',
					bottom: '100%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__anime_1',
				{
					left: '40%',
				},
				{
					left: '140%',
				}
			);
			infoTimeline.fromTo(
				'.char-13__clear',
				{ opacity: 1 },
				{
					opacity: 0,
					ease: 'linear',
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
.char-13 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		z-index: 11;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	&__clear {
		opacity: 1;
		rotate: -90deg;
		z-index: 12;
		height: 400%;
		position: absolute;
		top: -40%;
	}
	&__anime {
		position: absolute;
		max-width: 100vw;
		max-height: 100vh;
		height: 80%;
		// opacity: 0;
		&_1 {
			// opacity: 1;
			left: 40%;
		}
		&_2 {
			// opacity: 1;
			left: -10%;
			bottom: -2%;
		}
		&_3 {
			// opacity: 1;
			left: 50%;
		}
		&_4 {
			// opacity: 1;
			left: 0;
		}
		&_5 {
			// opacity: 1;
			left: 30%;
		}
		&_6 {
			// opacity: 1;
			left: 15%;
		}
		&_7 {
			// opacity: 1;
			left: 70%;
			bottom: 0;
		}
		&_8 {
			// opacity: 1;
			left: 50%;
		}
		&_9 {
			// opacity: 1;
			left: 7%;
		}
		&_10 {
			// opacity: 1;
			left: 50%;
			bottom: -30%;
		}
		&_11 {
			// opacity: 1;
			left: 70%;
		}
		&_12 {
			// opacity: 1;
			left: 30%;
			bottom: -20%;
		}
	}
	&__info {
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
</style>
