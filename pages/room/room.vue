<template>
	<view>
		<view>
			<u-button text="测试" @click="test"></u-button>
			<u-grid col="4">
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
		<view class="test">
			<u-image src="/static/imgs/ss.png" width="100px" height="40px"></u-image>
		</view>
	</view>
</template>

<script>
	import Http from '../../socket/http.js'
	export default {
		data() {
			return {
				img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABQCAMAAAAQlwhOAAAAP1BMVEUAAAASDHwsJpYJA3OIgvJfWclbVcVsZtY6NKQQCnoYEoJRS7tNR7cvKZl2cOB5c+NpY9MsJpYtJ5cXEYErJZUzBFXvAAAAAXRSTlMAQObYZgAABDpJREFUeJzsW+1uozAQ9EqpQtMmUZv3f9fTAbb30wbjYgjM/TiFGHvGs7teiOpOnDhxohWez2drCqvi+TyY4lPw2+Noehfis8Ykl8ulxjRr4POzguLLZU+KK8xRTTDUmGQFVBIMADtSPO8GkGZCL3gviudCSgM4mN7h31sKBtvft9SrpSqMBreiNJD4Iw6KlQAbcDhQqCta1GJ/obngUEaqivazwbgEMre1YOxwoWhtPHE4Oks0t5Ed9BLVk+/Wzxg/oVfu8CKj2lY+ewYdtpjmnmEF2IdMVITsHAcC2oM/1GVjUNR1nXOKw3ZFs1Oy3zGm1/nQ95/Hr8s492wL4Ql0iC2Au91uMcK1EwaFJ4tqIlW9M85Qlsddt0gxX/Q/xdutV2xXVl7qyFcp//GVUfFsn5cJJkw9x0FwaEoE8Rjl3GH/wSx/eIPnV8kedQQTN4PDiBglis8crNeXJqOcCX1FBZvpZQmVvx/o4RRyON5L+QPNPumwXszCAPrZHjoBapVN3pADHmdI5DuTFKF8EcpBAcaCQSZzoL55EB0fYYQct1QpGgBXLIuh3qjMM9lXO07eR5+/hug7GsNUL7keOqbYGgPfVBB7ZfC3vplnclzCk1P2Q8Sqyg1IUUYuh3FSTSjM6F7TX6ttS+2SOjYRFpEDPSLHQJc1BHUHuBWONvK6yE/emRGNWU6Qiw02x5DgTkVPHMaoAMobdotj8ZJSlQjbacymFznv5oRFRdCijFE7M7ItqaMh5aIdG6GUQO0XgBA7K42KTok6nNzRjDG4fLgoEOdsudyPjw+VkU9hVsns81VuRKHDfgAv92j2ZXo1xTg+wzV1aRfqHd8GCNmmTJ9NPcIAF81iqQMMwY6GVGQJDvfIsTrJ1OPB96VNn5Ss5NCfCY55CPxhifVcMurY6JHh1xdVPLW7AP8ctlzrAN1g4jCXEijzzbdSrsdsh8n4UnmTFwDUOEUpLuGwkuOJd5/tf3mgwA5gq+JlPECvaPqLzBDu1/SOZGAEZilIMPJa5ZzxeOdEChsT/x90vV4X/P5g1dpiWExICstb8FV7ggoO1xZsvJHNO0zm0JtDEQabcVheww2D+oomM4Pjr8U2k8M6XXxR6nPq06I+d1WudaDFGm0INYvZYPuxvCrXGlCSixXebAhbsnKCH49HKeslELSA7wE5aLVHydRbHHvhx6OJYv3XQ+kp7kKmxmnW4DaCaWsYPooxjpu9EG0Ee32oSRRFCB+oNetQE4NfjqlRDCY/zWzqQWA+Xq8XMDn6bxYL+6Xt4DX+n5PzLg4zJN/nsueFtThtAvuP7Jk4Bb89vN6f1kRWxs/P4RS3JnBc7OgPrKpglT8p21Klzgi+3+/L19jU2ZQWfL+nFH9PXGNTgtM5nBT8/T1R8bYEJ1HH4U3lcAZVcvjEibn4bU1gZfz+Hk5xawJ7wL8AAAD//xkbENS7IPlYAAAAAElFTkSuQmCC"
			};
		},
		methods:{
			 async test(){
				 try{
				 	let res = await Http.test()
				 	console.log(res)
					
				 }catch(e){
				 	//TODO handle the exception
					console.log(e)
				 }
				
			 }
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
