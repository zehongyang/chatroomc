<template>
	<view>
		<view class="center">
			<u-input class="center-account" v-model="userName" @change="canSubmit" placeholder="请输入6-16位账号" shape="circle"></u-input>
			<u-input class="center-account" v-model="password" @change="canSubmit" type="password" placeholder="请输入6位及以上密码" shape="circle"></u-input>
			<view class="captcha">
				<u-input class="captcha-info" v-model="code" @change="canSubmit" placeholder="请输入验证码" shape="circle"></u-input>
				<u-image :src="captchaSrc" width="100" height="40" @click="captcha"></u-image>
			</view>
			<view class="center-agree">
				<u-radio-group v-model="agreePrivacy" @change="jumpToPrivacy">
					<u-radio shape="circle"  name="privacy" size="12" labelSize="12" label="已阅读并同意 <<用户协议>> 和 <<隐私政策>>" ></u-radio>
				</u-radio-group>
			</view>
			<view class="center-button">
				<u-button  shape="circle" :disabled="noOpt" @click="register" text="注册"></u-button>
				<u-button  shape="circle" :disabled="noOpt" @click="login" text="登录"></u-button>
			</view>
		</view>
	</view>

</template>

<script>
	import Http from '../../socket/http.js'
	export default {
		data() {
			return {
				captchaSrc: "",
				agreePrivacy: "",
				checked: false,
				noOpt: true,
				userName: "",
				password: "",
				code: "",
				idkey: "",
			};
		},
		methods:{
			async captcha(){
				let res = await Http.captcha()
				this.captchaSrc = res.data.bs4
				this.idkey = res.data.id
			},
			jumpToPrivacy(){
				this.checked = !this.checked
				this.noOpt = (!this.userName || this.userName.length < 6 || this.userName.length > 16  || !this.password || this.password.length < 6 || !this.code || !this.checked)
				if(this.checked){
					uni.navigateTo({
						url:'/pages/privacy/privacy'
					})
				}else{
					this.agreePrivacy = ""
				}
			},
			canSubmit(){
				this.noOpt = (!this.userName || this.userName.length < 6 || this.userName.length > 16  || !this.password || this.password.length < 6 || !this.code || !this.checked)
			},
			async register(){
				let res = await Http.register({userName:this.userName,password:this.password,idKey:this.idkey,code:this.code})
				uni.setStorageSync("user_info",res.data.userInfo)
				uni.reLaunch({
					url:'/pages/room/room'
				})
			},
			async login(){
				let res = await Http.login({userName:this.userName,password:this.password,idKey:this.idkey,code:this.code})
				uni.setStorageSync("user_info",res.data.userInfo)
				uni.reLaunch({
					url:'/pages/room/room'
				})
			}
		},
		mounted() {
			this.captcha()
		}
	}
</script>

<style lang="scss" scoped>
	.center{
		margin: 20% 2%;
		&-account{
			margin-bottom: 20rpx;
		}
		&-agree{
			margin-top: 20rpx;
			margin-left: 15%;
		}
		&-button{
			margin-top: 20rpx;
			display: flex;
			button{
				width: 30%;
				color:#FFFFFF;
				background-color: 	#4876FF;
			}
		}
		.captcha{
			display: flex;
			justify-content: space-around;
			.captcha-info{
				margin-right: 20rpx;
			}
		}
		
	}

</style>
