<template>
	<div
		:class="{
			characteranimation: true,
			characteranimation_small: this.character.id === 2,
			characteranimation_complete: this.complete,
		}"
	>
		{{ this.character.id }}
		<img
			class="characteranimation__image"
			:src="require('@/assets/characters/Full/' + character.picture)"
			alt=""
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			complete: false,
		};
	},
	props: {
		character: {
			picture: String,
			bgColor: String,
			id: Number,
		},
	},
	mounted() {
		this.complete = true;
	},
	unmounted() {
		this.complete = false;
	},
};
</script>

<style lang="scss" scoped>
.characteranimation {
	position: absolute;
	width: 0%;
	height: 100%;
	padding-left: 10px;
	z-index: 6;
	transition: width 1s;
	&__image {
		position: relative;
		height: 100%;
	}
	&_small {
		.characteranimation__image {
			height: 120%;
			top: -10%;
			left: 2%;
		}
	}
	&_complete {
		transition: all 1s;
		width: 100%;
	}
}
</style>
