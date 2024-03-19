<template>
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
export default {
	data() {
		return {
			characters: [
				{ picture: '1.png', bgColor: '#3ADE17FF', id: 1, height: '10' },
				{ picture: '2.png', bgColor: '#ECEB01FF', id: 2, height: '10' },
				{ picture: '3.png', bgColor: '#F02907FF', id: 3, height: '10' },
				{ picture: '4.png', bgColor: '#0268EAFF', id: 4, height: '10' },
				{ picture: '5.png', bgColor: '#F31C8AFF', id: 5, height: '10' },
				{ picture: '6.png', bgColor: '#2E06C5FF', id: 6, height: '10' },
				{ picture: '7.png', bgColor: '#F99700FF', id: 7, height: '10' },
				{ picture: '8.png', bgColor: '#02CD22FF', id: 8, height: '10' },
				{ picture: '9.png', bgColor: '#F95CD7FF', id: 9, height: '10' },
				{ picture: '10.png', bgColor: '#9DE808FF', id: 10, height: '10' },
				{ picture: '11.png', bgColor: '#F51A02FF', id: 11, height: '10' },
				{ picture: '12.png', bgColor: '#A601C1FF', id: 12, height: '10' },
				{ picture: '13.png', bgColor: '#ED002FFF', id: 13, height: '10' },
				{ picture: '14.png', bgColor: '#CC5106FF', id: 14, height: '10' },
				{ picture: '15.png', bgColor: '#F418B9FF', id: 15, height: '10' },
			],
			activeItem: null,
		};
	},
	mounted() {
		console.log('start');
	},
	components: {
		Character,
	},
	methods: {
		setActiveItem(id) {
			if (this.activeItem === id) {
				this.activeItem = null;
			} else {
				this.activeItem = id;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.characters {
	overflow: hidden;
	max-width: 100vw;
	max-height: 100vw;
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

.notactive {
	&:hover {
		transition: width 0.5s, scale 0.35s;
		width: calc(100vw / 13);
		transform: scale(1.1);
		z-index: 6;
	}
}
.active {
	width: 100vw;
}
.inactive {
	width: 0px;
	overflow: hidden;
	transition: all 0.5s;
}
</style>
