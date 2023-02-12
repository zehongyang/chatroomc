<template>
	<view class="content">
		<u-toast ref="uToast"></u-toast>
		<u-text text="hello wold"></u-text>
		<u-button @click="connect">创建连接</u-button>
		<view>
			{{message.content}}
		</view>
	</view>
</template>

<script>
	import socket from '../../socket/websocket.js'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hellso',
				conn: null,
				showToast:false,
				msg: '123'
			}
		},
		onLoad() {

		},
		computed:{
			myMsg(){
				return "1111"
			},
			...mapState(['message'])
		},
		watch:{
			message(val,oldVal){
				
			}
		},
		mounted() {
			
		}
		,
		methods: {
			connect(){
				// socket.initSocket()
				// socket.testemit()
				// uni.$u.toast(111122222224648486486)
				uni.showToast({
					title: String(111122222224648486486),
					icon: 'none',
					duration: 2000
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
