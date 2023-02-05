<template>
	<view>
		<u-toast ref="uToast"></u-toast>
		<view class="center">
			<u-input class="center-account" placeholder="请输入账号" shape="circle"></u-input>
			<u-input class="center-account" type="password" placeholder="请输入密码" shape="circle"></u-input>
			<view class="captcha">
				<u-input class="captcha-info" placeholder="请输入验证码" shape="circle"></u-input>
				<u-image :src="captchaSrc" width="100" height="40" @click="captcha"></u-image>
			</view>
			<view class="center-agree">
				<u-checkbox-group>
					<u-checkbox shape="circle" size="12" labelSize="12" label="已阅读并同意 <<用户协议>> 和 <<隐私政策>>"></u-checkbox>
				</u-checkbox-group>
			</view>
			<view class="center-button">
				<u-button  shape="circle" text="注册"></u-button>
				<u-button  shape="circle" text="登录"></u-button>
			</view>
		</view>
	</view>

</template>

<script>
	import Http from '../../socket/http.js'
	export default {
		data() {
			return {
				captchaSrc: ""
			};
		},
		methods:{
			async captcha(){
				try{
					let res = await Http.captcha()
					if(res.code != 200){
						//TODO 提示错误
						if(res.msg){
							this.showToast(res.msg)
							return
						}else{
							this.showToast(`未知code:${res.code}`)
							return
						}
					}
					this.captchaSrc = res.data.bs4
				}catch(e){
					//TODO handle the exception
					this.showToast(e)
				}
			},
			showToast(errMsg){
				this.$refs.uToast.show({message:errMsg,duration: 1000})
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
