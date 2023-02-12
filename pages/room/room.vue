<template>
	<view>
		<view>
			<u-grid col="3">
				<u-grid-item class="room-info">
					<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
					<view class="room-text">
						<u-text text="黑色玫瑰 145"></u-text>
					</view>
				</u-grid-item>
				<u-grid-item class="room-info">
					<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
					<view class="room-text">
						<u-text text="黑色玫瑰 145"></u-text>
					</view>
				</u-grid-item>
				<u-grid-item class="room-info">
					<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
					<view class="room-text">
						<u-text text="黑色玫瑰 145"></u-text>
					</view>
				</u-grid-item>
				<u-grid-item class="room-info">
					<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
					<view class="room-text">
						<u-text text="黑色玫瑰 145"></u-text>
					</view>
				</u-grid-item>
				<u-grid-item class="room-info">
					<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
					<view class="room-text">
						<u-text text="黑色玫瑰 145"></u-text>
					</view>
				</u-grid-item>
				<u-grid-item class="room-info">
					<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
					<view class="room-text">
						<u-text text="黑色玫瑰 145"></u-text>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- <view class="room">
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
			<view class="room-info">
				<u-image src="/static/imgs/temp.jpeg" width="100px" height="100px"></u-image>
			</view>
		</view> -->
		<view>{{name}}</view>
		<u-button text="连接" @click="connect"></u-button>
		<u-button text="断开" @click="close"></u-button>
	</view>
</template>

<script>
	import Websocket from '../../socket/websocket.js'
	
	export default {
		data() {
			return {
				name: "zhangsan"
			};
		},
		onLoad() {
			uni.$on("change",(data)=>{
				console.log(data)
				this.name = data
			})
		},
		watch:{
			name:function(val,oldVal){
				console.log(val,oldVal)
			}
		},
		methods:{
			connect(){
				Websocket.initSocket()
			},
			close(){
				uni.closeSocket({
					
				})
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.room-info{
		margin-top: 25rpx;
	}
	.test{
		margin-left: 50rpx;
	}
</style>
