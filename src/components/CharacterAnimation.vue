<template>
	<div
		:class="{
			characteranimation: true,
			characteranimation_small: [1, 2, 8, 16].includes(character.id),
			characteranimation_complete: complete,
		}"
		@click="reverseAnimation"
	>
		<CharacterLines :character="character" :complete="over" />
		<img class="char-logo" src="@/assets/char-logo.png" alt="" />
		<img
			:style="{ marginLeft: character.height + '%' }"
			class="characteranimation__image"
			:src="require('@/assets/characters/Full/' + character.picture)"
			alt=""
		/>
		<CharacterCircles :complete="over" />
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import CharacterCircles from './CharacterCircles.vue';
import CharacterLines from './CharacterLines.vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import endSoundSrc from '../assets/sounds/CharEnd.mp3';

export default {
	components: {
		CharacterCircles,
		CharacterLines,
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
		active: Boolean,
	},
	setup(props) {
		const soundEnd = new Howl({
			src: endSoundSrc,
			volume: 0.1,
			onplay: () => {
				over.value = false;
			},
		});
		const reverseAnimation = () => {
			soundEnd.play();
		};
		const complete = ref(false);
		const over = ref(false);
		onMounted(() => {
			setTimeout(() => {
				complete.value = true;
				over.value = true;
			}, 200);
		});
		onUnmounted(() => {
			complete.value = false;
		});
		return {
			complete,
			over,
			reverseAnimation,
		};
	},
};
</script>

<style lang="scss" scoped>
* {
	font-family: 'Libre Franklin', sans-serif;
	font-optical-sizing: auto;
	font-weight: 900;
	font-style: normal;
}

.characteranimation {
	position: absolute;
	width: 0%;
	height: 100%;
	padding-left: 10px;
	z-index: 10;
	transition: width 1s;
	&__image {
		position: relative;
		top: 10%;
		height: 90%;
		z-index: 70;
	}
	&_small {
		.characteranimation__image {
			height: 110%;
			top: 0%;
			z-index: 70;
		}
	}
	&_complete {
		transition: all 1s;
		width: 100%;
	}
}
.char-logo {
	position: absolute;
	top: 3%;
	left: 3%;
	z-index: 60;
	height: 40%;
	opacity: 0.3;
}
@media (orientation: portrait) {
	.characteranimation {
		height: 30vh;
		&__image {
			// left: -13vh;
		}
	}
}
</style>
