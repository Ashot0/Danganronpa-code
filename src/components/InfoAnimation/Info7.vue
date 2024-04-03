<template>
	<div class="char-7">
		<div class="char-7__wrapper">
			<img class="char-7__ball" src="@/assets/InfoAssets/7/ball.png" alt="" />
			<img class="char-7__fire" src="@/assets/InfoAssets/7/fire.png" alt="" />
		</div>
		<div
			v-for="(wrapperSmall, index) in 10"
			:class="['char-7__wrapper-small', `char-7__wrapper-small_${index}`]"
			:key="index"
		>
			<img
				class="char-7__ball-small"
				src="@/assets/InfoAssets/7/ball.png"
				alt=""
			/>
			<img
				class="char-7__fire-small"
				src="@/assets/InfoAssets/7/fire.png"
				alt=""
			/>
		</div>
		<div class="char-7__info">
			<img class="char-7__image" src="@/assets/characters/More/7.png" alt="" />
			<p class="char-7__text">
				Leon Kuwata (桑田 怜恩) is a student in Hope's Peak Academy's Class
				78th, and a participant of the Killing School Life featured in
				Danganronpa: Trigger Happy Havoc. His title is the Ultimate Baseball
				Star (超高校級の「野球選手」lit. Super High School Level Baseball
				Player). However, he states he wishes to change his title to the
				Ultimate Musician (超高校級の「ミュージシャン」lit. Super High School
				Level Musician).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});

		onMounted(() => {
			gsap.to('.char-7__ball', {
				rotate: '360deg',
				repeat: -1,
				duration: 0.2,
				ease: 'linear',
			});
			gsap.to('.char-7__ball-small', {
				rotate: '360deg',
				repeat: -1,
				duration: 0.2,
				ease: 'linear',
			});
			infoTimeline.fromTo(
				'.char-7__wrapper',
				{
					right: '130%',
				},
				{
					delay: 0.6,
					duration: 0.7,
					right: '-130%',
				}
			);
			infoTimeline.fromTo(
				'.char-7__image',
				{
					opacity: 0,
				},
				{
					duration: 0.3,
					opacity: 1,
				},
				'-=100%'
			);
			infoTimeline.fromTo(
				'.char-7__text',
				{
					opacity: 0,
				},
				{
					duration: 0.3,
					opacity: 1,
				},
				'-=90%'
			);
			infoTimeline.fromTo(
				'.char-7__wrapper-small',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			);
			gsap.fromTo(
				'.char-7__wrapper-small_1',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 1,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_2',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 0.7,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_3',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 1.8,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_4',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 3,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_5',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 3.9,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_6',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 8,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_7',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 4.8,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_8',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 2.5,
					delay: 0.7,
				}
			);

			gsap.fromTo(
				'.char-7__wrapper-small_9',
				{
					right: '130%',
				},
				{
					duration: 0.7,
					right: '-130%',
					repeat: -1,
					repeatDelay: 6,
					delay: 0.7,
				}
			);
		});
		onBeforeUnmount(() => {});

		onUnmounted(() => {
			infoTimeline.clear;
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.char-7 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		right: 130%;
		width: 100vw;
		height: 100vh;
		position: absolute;
	}
	&__ball {
		position: absolute;
		height: 100%;
		left: 70%;
		z-index: 12;
	}
	&__fire {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 11;
	}
	&__wrapper-small {
		opacity: 0;
		right: 130%;
		width: 10vw;
		height: 10vh;
		position: absolute;
		&_0 {
			top: 10%;
		}
		&_1 {
			top: 36%;
		}
		&_2 {
			top: 6%;
		}
		&_3 {
			top: 56%;
		}
		&_4 {
			top: 69%;
		}
		&_5 {
			top: 90%;
		}
		&_6 {
			top: 40%;
		}
		&_7 {
			top: 19%;
		}
		&_8 {
			top: 80%;
		}
		&_9 {
			top: 11%;
		}
		&_10 {
			top: 44%;
		}
	}
	&__ball-small {
		position: absolute;
		height: 100%;
		left: 150%;
		z-index: 1;
	}
	&__fire-small {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 200%;
		height: 100%;
	}

	&__info {
		margin: 0 5%;
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90%;
	}
	&__image {
		width: 50%;
		opacity: 0;
	}
	&__text {
		width: 45%;
		opacity: 0;
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
