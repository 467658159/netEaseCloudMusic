<template>
	<div class="column">
		<div class="list" v-for="(item, index) in lists">
			<div class="imgBox">
				<img v-lazy="item.picUrl" alt="">
			</div>
			<p class="desc">{{item.name}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'column',
		props: ['lists', 'listShow'],
		data () {
			return {

			}
		},
	}
</script>
<style scoped lang="less">
	@import '../../assets/style/mixin';
	.column{
		margin: .1rem .05rem;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		.list{
			.mx_wh(1.15rem, 1.8rem);
			img{
				.mx_wh(1.15rem, 1.15rem);
				.mx_bdrs(4px);
			}
		}
	}
</style>