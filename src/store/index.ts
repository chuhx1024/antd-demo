// 创建store仓库
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export default store
