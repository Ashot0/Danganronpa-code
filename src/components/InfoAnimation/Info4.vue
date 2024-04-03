<template>
	<div class="char-4">
		<div class="char-4__wrapper">
			<img class="char-4__money" src="@/assets/InfoAssets/4/money.png" alt="" />
			<div class="char-4__helicopter-box">
				<img
					class="char-4__helicopter-up"
					src="@/assets/InfoAssets/4/up1.png"
					alt=""
				/>
				<img
					class="char-4__helicopter"
					src="@/assets/InfoAssets/4/helicopter.png"
					alt=""
				/>
				<img
					class="char-4__helicopter-right"
					src="@/assets/InfoAssets/4/right.png"
					alt=""
				/>
			</div>
		</div>
		<div class="char-4__info">
			<img class="char-4__image" src="@/assets/characters/More/4.png" alt="" />
			<p class="char-4__text">
				Byakuya Togami (十神 白夜) is a student in Hope's Peak Academy's Class
				78th, and a participant of the Killing School Life featured in
				Danganronpa: Trigger Happy Havoc. His title is the Ultimate Affluent
				Progeny (超高校級の「御曹司」lit. Super High School Level Heir).
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
			infoTimeline.to('.char-4__helicopter-right', {
				repeat: -1,
				duration: 0.2,
				rotationZ: '360deg',
			});
			infoTimeline.to(
				'.char-4__helicopter-up',
				{
					repeat: -1,
					duration: 0.1,
					rotationY: '360deg',
				},
				'='
			);
			infoTimeline.fromTo(
				'.char-4__helicopter-box',
				{
					top: '-60%',
				},
				{
					top: '30%',
					duration: 2,
					ease: 'elastic',
				}
			);
			infoTimeline.fromTo(
				'.char-4__helicopter-box',
				{
					top: '30%',
					height: '100vh',
				},
				{
					top: '-500%',
					height: '2300vh',
					duration: 4,
					ease: 'linear',
				}
			);
			infoTimeline.fromTo(
				'.char-4__info',
				{
					opacity: 0,
					height: '80%',
					width: '70%',
				},
				{
					height: '100%',
					width: '90%',
					opacity: 1,
					duration: 0.4,
					ease: 'linear',
				},
				'-=450%'
			);
		});

		onUnmounted(() => {
			infoTimeline.clear;
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.char-4 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	&__money {
		width: 100%;
		position: absolute;
	}
	&__helicopter-box {
		position: relative;
		left: 50%;
		transform: translate(-31.5%);
		top: -60%;
		height: 100vh;
		width: fit-content;
		object-fit: cover;
	}
	&__helicopter-up {
		height: 10%;
		z-index: 6;
		position: absolute;
	}
	&__helicopter {
		height: 43%;
		z-index: 4;
		position: relative;
	}
	&__helicopter-right {
		z-index: 5;
		top: 10%;
		height: 12%;
		right: -6%;
		position: absolute;
		transform: translate(-50%);
	}
	&__info {
		left: 40%;
		transform: translate(-50%);
		margin: 0 5%;
		position: absolute;
		opacity: 0;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80%;
		width: 70%;
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
