const BaseUrl = "http://192.168.1.3:8080"
const CaptchaPath = "/user/captcha"
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
						reject("请求超时，请检测网络")
						return
					}
					if(res.statusCode != 200){
						reject(`未知code:${res.statusCode}`)
					}else{
						resolve(res.data)
					}
				}
			})
		})
	},
	captcha(){
		let url = BaseUrl+CaptchaPath
		return this.post(url)
	}
}
