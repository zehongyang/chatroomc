<template>
	<view>
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
				captchaSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAoCAMAAAA/pq9xAAAAP1BMVEUAAAANbBRMq1NGpU1rynIYdx9OrVU8m0MmhS0ZeCBFpEx93ISR8JiJ6JAaeSFHpk4FZAwkgysNbBRwz3cxkDiJbzLgAAAAAXRSTlMAQObYZgAAAYBJREFUeJzsltGugyAMhqlmokaD4vu/68nUugLFFtzuTq/WAP/Xvxan+Y/aAIzvS28fBnJKjr9UjG0L8ovhgSR5xktHifJT13sfNK/JUTSMK+aAYcCb/deRQtPkKEWMeX4rXv2hjbIA0HxhJgDm/cFfOVmz1p6zd65UsuLZDYE23VltiRwFMJdUKAg7vJ4SQD4YVrCaEjEMcZRoqhlDnhHVGzP0PoZhyNSWznGkWtCrgSluVEAATNUDQZFxHB25JUwH6YVVCZv0hozOOfJu4WjFCGOSyXG4SBbIZj1B7GngD3JDJkjkswCClxEeIsyNL+qn7H3Fbb05/rxTCggiAGDSvX75HatMeZ+dpukBY13Robs9PsmV5MtdcXW/iI9CdAqSk4eIHinZ6DSM29W+74VKuk6mSJ3qRQWRUf53LEjG33k42YtO/dgtNCf+mkQPyyJSLDlBGS1DYRkKJ8dnYhpty1AIoexZ8AzWCWGUECrj94ywU/43jCDz/obyFwAA///pWwVM7x+RIQAAAABJRU5ErkJggg=="
			};
		},
		methods:{
			async captcha(){
				try{
					let res = await Http.captcha()
					if(res.code != 200){
						//TODO 提示错误
						return
					}
					this.captchaSrc = res.data.bs4
				}catch(e){
					//TODO handle the exception
				}
				
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
