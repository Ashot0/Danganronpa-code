<template>
	<img class="characters-monitor" src="@/assets/characters/Screen.png" alt="" />
	<div :class="{ characters: true, characters_notactive: activeItem === null }">
		<Character
			v-for="character in characters"
			:character="character"
			:class="{
				active: activeItem === character.id,
				inactive: activeItem !== character.id && activeItem !== null,
				notactive: activeItem === null,
			}"
			@click="setActiveItem(character.id)"
		/>
	</div>
</template>

<script>
import Character from './Character';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../assets/sounds/CharStart.mp3';
export default {
	data() {
		return {
			activeItem: null,
		};
	},
	components: {
		Character,
	},
	computed: {
		characters() {
			return this.$store.state.ActiveCharacter.characters;
		},
	},
	methods: {
		setActiveItem(id) {
			if (this.activeItem === id) {
				setTimeout(() => {
					this.activeItem = null;
					this.$store.dispatch('setActiveId', null);
				}, 2300);
			} else {
				const soundStart = new Howl({
					src: startSoundSrc,
					volume: 0.1,
					onplay: () => {
						this.activeItem = id;
						this.$store.dispatch('setActiveId', id);
						// this.active = this.$store.getters['nameActiveId'];
					},
				});
				soundStart.play();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.characters {
	z-index: 9;
	top: 0%;
	left: 11.5vw;
	right: 11.5vw;
	bottom: 0;
	width: 77.5vw;
	height: 97vh;
	background: linear-gradient(
		to right,
		#37d716ff,
		#eceb01ff,
		#f02907ff,
		#0268e9ff,
		#f31c89ff,
		#2e06c5ff,
		#f99600ff,
		#02cd22ff,
		#f95cd7ff,
		#9de808ff,
		#f51a02ff,
		#a601c1ff,
		#ec002fff,
		#cb5106ff,
		#f318b9ff
	);
	overflow: hidden;
	max-width: 78vw;
	max-height: 97vh;
	display: grid;
	grid-template-columns: repeat(15, auto);
	grid-template-rows: repeat(1, auto);
	position: relative;
	margin-left: 0;
	transition: margin-left 500ms 0.02s;
	&_notactive {
		&:hover {
			margin-left: -5px;
		}
	}
}

.characters-monitor {
	pointer-events: none;
	z-index: 15;
	width: 100vw;
	height: 100vh;
	position: absolute;
	object-fit: fill;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
@media (orientation: portrait) {
	.characters {
		height: 29vh;
	}
	.characters-monitor {
		width: 100vw;
		height: 30vh;
	}
}
.notactive {
	top: 0%;
	bottom: 0;
	&:hover {
		transition: width 0.5s, scale 0.35s;
		width: calc(80vw / 13);
		transform: scale(1.1);
		z-index: 6;
	}
}
.active {
	top: 0%;
	bottom: 0;
	width: 78vw;
}
.inactive {
	width: 0px;
	overflow: hidden;
	transition: all 0.5s;
}
</style>
