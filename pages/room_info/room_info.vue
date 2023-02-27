<template>
	<view class="container">

		<scroll-view class="box" :scroll-into-view="subEle" :scroll-with-animation="true"  :style="'height:'+height+'px'" @scroll="scroll" scroll-y="true"  @scrolltolower="pullDown" @scrolltoupper="pullUp">
			<view v-for="(msg,index) in msgs" :id="'chatItem_' + index"  :key="index">
				{{msg}}
			</view>
		</scroll-view>
		
		<view class="bottom">
			<u-icon :name="voiceIcon" v-show="isKeybord" @click="changeVoice"  class="bottom-voice" size="22"></u-icon>
			<u-icon :name="keybordIcon" v-show="!isKeybord" @click="changeVoice"  class="bottom-voice" size="22"></u-icon>
			<u-input v-model="msg"   class="bottom-input"></u-input>
			<u-icon :name="emojIcon" class="bottom-emoj" size="26"></u-icon>
			<u-icon :name="moreIcon" class="bottom-more" v-show="!msg" size="26"></u-icon>
			<view class="bottom-msg"  @touchend.prevent="sendMsg"  v-show="msg">
				发送
			</view>
			
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
				msgs:[],
				n: 0,
				scrollTop:0,
				subEle:"",
				voiceIcon: "/static/imgs/voice.png",
				isKeybord: true,
				keybordIcon: "/static/imgs/keybord.png",
				emojIcon: "/static/imgs/emoj.png",
				moreIcon: "/static/imgs/more.png",
				msg: "",
				focus: false,
				holdKeyboard:true,
			};
		},
		onLoad(params) {
			uni.setNavigationBarTitle({
				title:params.name
			})
			this.height = uni.getSystemInfoSync().windowHeight-60
			uni.onKeyboardHeightChange((res)=>{
				this.height = uni.getSystemInfoSync().windowHeight-60
				this.height -= res.height
			
				this.$nextTick(()=>{
					this.subEle='chatItem_' + (this.msgs.length-1)
					console.log(this.subEle)
				})
			})
		},
		onUnload() {
			console.log("退出页面")
		},
		methods:{
			pullDown(){
				console.log("下拉刷新")
			},
			pullUp(){
				console.log("上拉")
			},
			toTop(){
				console.log("顶部")
				this.subEle="top"
			},
			toBottom(){
				console.log("底部")
				this.subEle="bottom"
			},
			scroll(e){
				console.log(e.detail)
			},
			sendMsg(){
				this.msgs.push(this.msg)
				this.msg = ""
				this.$nextTick(()=>{
					this.subEle='chatItem_' + (this.msgs.length-1)
				})
			},
			changeVoice(){
				this.isKeybord = !this.isKeybord
			},
			startHandle(){
				console.log("startHandle")
			},
			touchHandle(){
				console.log("touchHandle")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom{
		position: fixed;
		height: 60px;
		background-color: #F5F5F5;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		&-input{
			height: 40px;
			margin-top: 10px;
			background-color: #fff;
		}
		&-voice{
			margin: 0 10px;
		}
		&-emoj{
			margin: 0 5px;
		}
		&-more{
			margin-right: 10px;
		}
		&-msg{
			height: 36px;
			text-align: center;
			width: 50px;
			line-height: 36px;
			background-color:#32CD32;
			color: #fff;
			margin-top: 12px;
			border-radius: 8px;
			margin-right: 10px;
		}
	}
	.box{
		
	}

</style>
