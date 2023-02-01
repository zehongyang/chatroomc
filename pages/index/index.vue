<template>
	<view class="content">
		
		<u-text text="hello wold"></u-text>
		<u-button @click="connect">创建连接</u-button>
	</view>
</template>

<script>
	import socket from '../../socket/websocket.js'
	export default {
		data() {
			return {
				title: 'Hellso',
				conn: null,
				showToast:false
			}
		},
		onLoad() {

		},
		methods: {
			connect(){
				// socket.initSocket()
				this.showToast = true
				console.log(this.showToast)
			}
		}
	}
</script>

<style>
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
