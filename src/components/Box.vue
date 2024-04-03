<template>
	<div class="box"></div>
	<!-- <div class="box-monokuma">
		<ScrollMonokuma /> -->
	<!-- </div> -->
</template>

<script>
import ScrollMonokuma from './ScrollMonokuma.vue';
export default {
	components: {
		ScrollMonokuma,
	},
};
</script>

<style lang="scss" scoped>
.box {
	height: 100vh;
	background-color: black;
}
</style>
