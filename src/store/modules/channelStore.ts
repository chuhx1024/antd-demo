import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
    name: 'channel',
    // c初始化状态
    initialState: {
        channelList: [],
    },
    reducers: {
        setChannel(state, action) {
            state.channelList = action.payload
        },
    },
})
//  action 对象函数
const { setChannel } = channelStore.actions // 导出 action creator

// 异步请求处理
const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannel(res.data.data.channels))
    }
}

// 导出 reducer 函数
export default channelStore.reducer // 导出 reducer

export { fetchChannelList }
