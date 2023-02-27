<template>
	<view>
		<view>
			
			<u-grid col="2" v-if="rooms.length > 0">
				<u-grid-item class="room-info" v-for="item in rooms" :key="item.id">
					<view @click="roomInfo(item.id,item.name)">
						<u-image :src="'http://192.168.1.3:8080/asset/'+item.img" width="150px" height="150px"></u-image>
						<view class="room-text">
							<u-text :text="item.name+' '+(item.onlines?item.onlines:0)"></u-text>
						</view>
					</view>
				</u-grid-item>
			</u-grid>
			<u-empty v-else text="暂无房间" marginTop="20">
				
			</u-empty>
		
		</view>
	</view>
</template>

<script>
	import Websocket from '../../socket/websocket.js'
	import Http from '../../socket/http.js'
	export default {
		data() {
			return {
				rooms:[],
				limit: 16,
				id:0,
			};
		},
		onLoad() {
		
		},
		onReachBottom() {
			console.log("reach bottom")
			this.getRooms()
		},
		onPullDownRefresh() {
			console.log("refresh")
			this.getRooms(true)
		},
		methods:{
			async getRooms(refresh){
				if(refresh){
					this.id = 0
				}
				let res = await Http.roomList({id:this.id,limit:this.limit})
				if(!res || !res.data || !res.data.rooms){
					setTimeout(function() {
						uni.stopPullDownRefresh()
					}, 1000);
					return
				}
				if(refresh){
					this.rooms = res.data.rooms
				}else{
					this.rooms.push(...res.data.rooms)
				}
				this.id = res.data.rooms[res.data.rooms.length-1].id
				uni.stopPullDownRefresh()
			},
			roomInfo(id,name){
				uni.navigateTo({
					url:`/pages/room_info/room_info?id=${id}&name=${name}`
				})
			}
		},
		mounted() {
			this.getRooms(true)
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
