const SocketUrl = "ws://192.168.1.3:8080/ws"

export default{
	conn: null,
	initSocket(){
		if(conn){
			return
		}
		this.conn = uni.connectSocket({
			url: SocketUrl,
			fail() {
				console.log("connect fail")
			}
		})
		this.conn.onOpen(onOpen)
		this.conn.onMessage(onMessage)
		this.conn.onClose(onClose)
		this.conn.onError(onError)
	},
}



function onOpen(res){
	console.log("on open")
}

function onMessage(res){
	console.log("on message")
}

function onClose(res){
	console.log("on close")
}

function onError(res){
	console.log("on error")
}