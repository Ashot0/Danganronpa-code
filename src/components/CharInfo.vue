<template>
	<div class="char-info">
		<div
			ref="scrollElement"
			@click="scrollTo100"
			class="char-info__null null"
			v-if="active == null"
		>
			<div class="char-info__central-text">
				<p>&#9650;</p>
				<p>choose character</p>
			</div>
			<img class="null__image" src="@/assets/bgmonokuma.jpg" alt="" />
		</div>
		<div
			:style="{ backgroundColor: `${active.bgColor}` }"
			class="char-info__character"
			v-else
		>
			<div @click="playAnimation = true" class="char-info__animation">
				<div v-if="playAnimation === true" class="char-info__about">
					<InfoAnimations :info="active" />
				</div>
				<div v-if="playAnimation === false" class="char-info__about">
					<div class="char-info__central-text">
						<p>▶</p>
						<p>more informations</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import InfoAnimations from './InfoAnimations.vue';

export default {
	components: {
		InfoAnimations,
	},
	setup() {
		const store = useStore();
		const id = ref(null);
		const active = ref(null);
		const playAnimation = ref(null);

		const scrollElement = ref(null);
		const scrollTo100 = () => {
			const characterBlock = document.querySelector('.home__characters');
			characterBlock.scrollIntoView({ behavior: 'smooth' });
		};

		onMounted(() => {
			id.value = store.getters['nameActiveId'];
		});

		watch(
			() => store.getters['nameActiveId'],
			(newVal) => {
				id.value = newVal;
				active.value = store.getters['getCharacterById'](id.value);
				playAnimation.value = false;
			}
		);

		return { active, playAnimation, scrollTo100, scrollElement };
	},
};
</script>

<style lang="scss" scoped>
.char-info {
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	&__null {
	}
	&__character {
		width: 100%;
		height: 100%;
	}
	&__animation {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 12;
	}
	&__central-text {
		&:active {
			color: rgb(192, 194, 197);
		}
		cursor: pointer;
		text-align: center;
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		font-size: 500%;
		position: absolute;
		color: white;
		text-shadow: 1px 1px 2px black;
		top: 35%;
		left: 50%;
		transform: translate(-50%);
	}
	&__about {
		width: 100%;
		height: 100%;
	}
}
.null {
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
	&__image {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
}
@media (orientation: portrait) {
	.char-info {
		margin-top: -70vh;
	}
}
</style>
