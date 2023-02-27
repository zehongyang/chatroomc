const BaseUrl = "http://192.168.1.3:8080"
const CaptchaPath = "/guest/captcha"
const RegisterPath = "/guest/register"
const LoginPath = "/guest/login"
const RoomListPath = "/user/rooms"
export default {
	post(url,data,header){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:url,
				data:data,
				header:header,
				method:"POST",
				complete(res) {
					if(!res.statusCode){
						uni.showToast({
							title:"请求超时，请检测网络",
							icon:"none"
						})
						uni.stopPullDownRefresh()
						return
					}
					if(res.statusCode != 200){
						uni.showToast({
							title:`未知code:${res.statusCode}`,
							icon:"none"
						})
						uni.stopPullDownRefresh()
						return
					}else{
						if(res.data.code != 200){
							if(res.data.msg){
								uni.showToast({
									title:res.data.msg
								})
								uni.stopPullDownRefresh()
							}else{
								uni.showToast({
									title:`未知code:${res.data.code}`,
									icon:"none"
								})
								uni.stopPullDownRefresh()
							}
						}else{
							resolve(res.data)
						}
					}
				}
			})
		})
	},
	captcha(){
		let url = BaseUrl+CaptchaPath
		return this.post(url)
	},
	register(data){
		let url = BaseUrl+RegisterPath
		return this.post(url,data)
	},
	login(data){
		let url = BaseUrl+LoginPath
		return this.post(url,data)
	},
	roomList(data){
		let url = BaseUrl+RoomListPath
		return this.post(url,data)
	}
}
