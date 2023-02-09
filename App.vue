<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let userInfo = uni.getStorageSync("user_info")
			if(userInfo && userInfo.uid > 0){
				plus.navigator.closeSplashscreen()
			}else{
				uni.reLaunch({
					url:'/pages/login/login',
					success() {
						plus.navigator.closeSplashscreen()
					}
				})
			}
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	@import 'static/css/common.css';
</style>
