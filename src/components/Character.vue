<template>
	<div
		@click="handleCharacterClick"
		class="character"
		:style="{ backgroundColor: character.bgColor }"
	>
		<CharacterAnimation v-if="active" :character="character" />
		<img
			v-else
			class="character__image"
			:src="require('@/assets/characters/' + character.picture)"
			alt=""
		/>

		<div
			:style="{ backgroundColor: character.bgColor }"
			class="character__color"
		></div>
	</div>
</template>

<script>
import CharacterAnimation from './CharacterAnimation.vue';
export default {
	components: {
		CharacterAnimation,
	},
	data() {
		return {
			active: false,
		};
	},
	props: {
		character: {
			picture: String,
			bgColor: String,
			id: Number,
		},
	},
	methods: {
		handleCharacterClick() {
			this.active = !this.active;
			console.log('hi', this.character.id);
		},
	},
};
</script>

<style lang="scss" scoped>
.character {
	overflow: hidden;
	height: 100vh;
	object-fit: fill;
	position: relative;
	display: flex;
	justify-content: center;
	width: calc(100vw / 15);
	transition: all 0.5s;
	&__image {
		position: relative;
		height: 100%;
		left: 3vw;
		transition: all 100ms;
	}

	&__color {
		opacity: 0.3;
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
