<template>
	<div class="char" v-if="info">
		<Info1 :info="info" v-if="info.id === 1" />
		<Info2 :info="info" v-if="info.id === 2" />
		<Info3 :info="info" v-if="info.id === 3" />
		<Info4 :info="info" v-if="info.id === 4" />
		<Info5 :info="info" v-if="info.id === 5" />
		<Info6 :info="info" v-if="info.id === 6" />
		<Info7 :info="info" v-if="info.id === 7" />
		<Info8 :info="info" v-if="info.id === 8" />
		<Info9 :info="info" v-if="info.id === 9" />
		<Info10 :info="info" v-if="info.id === 10" />
		<Info11 :info="info" v-if="info.id === 11" />
		<Info12 :info="info" v-if="info.id === 12" />
		<Info13 :info="info" v-if="info.id === 13" />
		<Info14 :info="info" v-if="info.id === 14" />
		<Info15 :info="info" v-if="info.id === 15" />
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import Info1 from './InfoAnimation/Info1.vue';
import Info2 from './InfoAnimation/Info2.vue';
import Info3 from './InfoAnimation/Info3.vue';
import Info4 from './InfoAnimation/Info4.vue';
import Info5 from './InfoAnimation/Info5.vue';
import Info6 from './InfoAnimation/Info6.vue';
import Info7 from './InfoAnimation/Info7.vue';
import Info8 from './InfoAnimation/Info8.vue';
import Info9 from './InfoAnimation/Info9.vue';
import Info10 from './InfoAnimation/Info10.vue';
import Info11 from './InfoAnimation/Info11.vue';
import Info12 from './InfoAnimation/Info12.vue';
import Info13 from './InfoAnimation/Info13.vue';
import Info14 from './InfoAnimation/Info14.vue';
import Info15 from './InfoAnimation/Info15.vue';
export default {
	components: {
		Info1,
		Info2,
		Info3,
		Info4,
		Info5,
		Info6,
		Info7,
		Info8,
		Info9,
		Info10,
		Info11,
		Info12,
		Info13,
		Info14,
		Info15,
	},
	props: { info: Object },
	setup(props) {
		onMounted(() => {});
		onBeforeUnmount(() => {});

		onUnmounted(() => {});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.char {
	width: 100%;
	height: 100%;
}
</style>
