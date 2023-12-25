// 创建store仓库
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer,
    },
})

export default store
