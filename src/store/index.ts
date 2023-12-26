// 创建store仓库
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'
import appReducer from './modules/appStore'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer,
        app: appReducer,
    },
})

export default store
