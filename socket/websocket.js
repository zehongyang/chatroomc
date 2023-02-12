import {store} from '@/store/store.js'
const SocketUrl = "ws://192.168.1.3:8080/user/ws"
const HeartBeatId = 2 //心跳
const Ping = "ping"
const HeartDuration = 45000 //心跳时间

export default{
	timer: null,
	initSocket(){
		let userInfo = uni.getStorageSync("user_info")
		if(!userInfo || !userInfo.uid || !userInfo.token){
			uni.showToast({
				title:"未知token",
				icon:'none'
			})
			return
		}
		//连接socket
		uni.connectSocket({
			url: SocketUrl,
			header:{
				"Uid":`${userInfo.uid}`,
				"Token":userInfo.token,
			}
		})
		//连接成功
		uni.onSocketOpen(res=>{
			console.log("WebSocket连接已打开！")
			//发送心跳
			this.heartBeat()
		})
		//socket 错误
		uni.onSocketError(res=>{
			if(this.timer){
				clearInterval(this.timer)
			}
			console.log("连接错误"+res)
			if(this.reconnect()){
				return
			}
			uni.$u.toast("连接失败,请检查网络")
		})
		//收到数据
		uni.onSocketMessage(function(res){
			console.log('收到服务器内容：' + res.data)
			let msg = JSON.parse(res.data)
			if(msg.code != 200){
				if(msg.msg){
					uni.$u.toast(msg.msg)
				}else{
					uni.$u.toast(`未知code:${msg.code}`)
				}
				return
			}
			store.commit("ReceiveMsg",msg)
		})
		//监听 socket 关闭
		uni.onSocketClose(res=>{
			console.log("连接关闭"+res)
			if(this.timer){
				clearInterval(this.timer)
			}
			 if(this.reconnect()){
			 	return
			 }
			 uni.$u.toast("连接失败,请检查网络")
		})
	},
	reconnect(){
		if(store.state.close){
			return false
		}
		//重连3次
		if(store.state.reconnectTimes > 2){
			return false
		}
		console.log(`重连${store.state.reconnectTimes+1}次`)
		this.initSocket()
		store.commit("ReConnect")
		return true
	},
	close(){
		//主动关闭，无需重连
		uni.closeSocket()
		store.commit("Close")
	},
	heartBeat(){
		//发送心跳
		this.timer = setInterval(function(){
			console.log("ping...")
			uni.sendSocketMessage({
				data:JSON.stringify({id:HeartBeatId,data:JSON.stringify({msg:Ping})}),
				fail(res) {
					console.log(res)
					console.log("fail"+res)
				}
			})
		},HeartDuration)
	}
}