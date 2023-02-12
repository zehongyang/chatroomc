import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const MessageId = 3 //聊天消息
const store = new Vuex.Store({
	state:{
		message: {}, //聊天消息
		eventMessage: {},//事件消息
		close: false, //是否主动关闭连接，退出登录
		reconnectTimes: 0, //重连次数
	},
	mutations:{
		ReceiveMsg(state,msg){
			switch (msg.id) {
				case MessageId:
					state.message = msg.data
					break
			}
		},
		Close(state){
			state.close = true
		},
		ReConnect(state){
			state.reconnectTimes++
		}
	}
})

export {store}