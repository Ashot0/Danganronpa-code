<template>
	<div>
		<div class="line__wrapper">
			<div class="line_color">
				<div class="text__wrapper">
					<div class="text text_color">
						<p class="text_litle">specialty</p>
						{{ character.specialty }}
					</div>
				</div>
			</div>
			<div class="line_white">
				<div class="text__wrapper">
					<div class="text text_white">
						<p class="text_litle">name</p>
						{{ character.nameJapane }}
						<p class="text_litle">{{ character.nameEnglish }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="black-line__block">
			<div class="black-line__wrapper">
				<div class="black-line black-line_1"></div>
				<div class="black-line black-line_2"></div>
				<div class="black-line black-line_3"></div>
				<div class="black-line black-line_4"></div>
				<div class="black-line black-line_5"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
export default {
	setup(props) {
		const animTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});
		onMounted(() => {
			animTimeline.fromTo(
				'.line__wrapper',
				{
					left: '0%',
					width: '0%',
				},
				{
					delay: 0.3,
					width: '120%',
					left: '-10%',
				}
			);
			animTimeline.fromTo(
				'.line__wrapper',
				{
					rotate: 0,
					top: '20%',
					height: '1%',
				},
				{
					height: '20%',
					rotate: 20,
					top: '35%',
				},
				'>95%'
			);
			animTimeline.fromTo(
				'.line_color',
				{
					height: '100%',
				},
				{
					height: '35%',
				},
				'<25%'
			);
			animTimeline.fromTo(
				'.line_white',
				{ height: '0%' },
				{
					height: '65%',
				},
				'<25%'
			);
			animTimeline.fromTo(
				'.line__wrapper',
				{
					gap: '0%',
				},
				{
					gap: '95%',
					rotate: 0,
					delay: 0,
					duration: 0.25,
				}
			);
			animTimeline.to('.line__wrapper', {
				gap: '3%',
				height: '40%',
				rotate: -20,
				delay: 0,
				duration: 0.25,
			});
			animTimeline.fromTo(
				'.line_white',
				{
					opacity: 0.3,
				},
				{
					opacity: 0.7,
				},
				'<25%'
			);
			animTimeline.fromTo(
				'.line_color',
				{
					opacity: 0.3,
				},
				{
					opacity: 0.7,
				},
				'>5%'
			);
			animTimeline.fromTo(
				'.black-line__block',
				{
					left: '-100%',
					width: '0%',
					opacity: 0,
				},
				{
					width: '100%',
					left: '0%',
					opacity: 1,
				}
			);
			animTimeline.fromTo(
				'.text',
				{
					width: '0%',
					opacity: 0,
				},
				{
					width: 'fit-content',
					opacity: 1,
				}
			);
			animTimeline.fromTo(
				'.text__wrapper',
				{
					width: '0%',
					opacity: 0,
				},
				{
					width: '80%',
					opacity: 1,
				}
			);
			animTimeline.fromTo(
				'.black-line__block',
				{
					left: '0%',
					opacity: 1,
				},
				{
					left: '100%',
					opacity: 0,
				}
			);
		});
		onUnmounted(() => {
			animTimeline.clear();
		});
		watch(
			() => props.complete,
			(newVal) => {
				if (!newVal) {
					animTimeline.reverse();
				}
			}
		);
		return {};
	},
	props: {
		character: {
			picture: String,
			bgColor: String,
			id: Number,
			height: Number,
			nameJapane: String,
			nameEnglish: String,
			specialty: String,
		},
		complete: Boolean,
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
* {
	font-family: 'Libre Franklin', sans-serif;
	font-optical-sizing: auto;
	font-weight: 900;
	font-style: normal;
}

.line {
	&__wrapper {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 0;
		top: 20%;
		left: 0%;
		position: absolute;
		width: 0%;
		height: 1%;
		z-index: 40;
	}
	&_color {
		background-color: black;
		width: 100%;
		opacity: 0.3;
		height: 100%;
	}
	&_white {
		width: 100%;
		background-color: white;
		opacity: 0.3;
		height: 0%;
	}
}
.text {
	opacity: 0;
	color: inherit;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-direction: column;
	gap: 0%;
	height: 100%;
	text-align: end;
	width: 0%;
	overflow: hidden;
	margin: 0;
	padding: 0;
	&__wrapper {
		font-size: 5rem;
		width: 0;
		display: flex;
		justify-content: flex-end;
		overflow: hidden;
	}
	&_litle {
		font-size: 1.5rem;
		margin: 0;
	}
	&__white {
		margin: 0%;
		padding: 0;
	}
	&_color {
		color: white;
		font-size: 3rem;
	}
}

.black-line {
	&__block {
		z-index: 50;
		position: absolute;
		top: 80%;
		left: -100%;
		opacity: 0;
		height: 10%;
		width: 100%;
	}
	&__wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 5%;
		box-sizing: content-box;
	}
	//line
	position: relative;
	background-color: black;
	opacity: 0.8;
	width: 100%;
	border-radius: 0 50%;
	&_1 {
		right: 0%;
		height: 20%;
	}
	&_2 {
		right: 1%;
		height: 16%;
	}
	&_3 {
		right: 2%;
		height: 12%;
	}
	&_4 {
		right: 3%;
		height: 9%;
	}
	&_5 {
		right: 4%;
		height: 6%;
	}
}
@media (orientation: portrait) {
	.line {
		&__wrapper {
		}
		&_color {
		}
		&_white {
		}
	}
	.text {
		overflow: hidden;
		&__wrapper {
			font-size: 1.8rem;
		}
		&_litle {
			font-size: 0.4rem;
		}
		&_color {
			font-size: 0.8rem;
		}
	}
}
</style>
