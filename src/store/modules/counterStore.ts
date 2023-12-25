import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
    name: 'counter',
    // c初始化状态
    initialState: {
        count: 0,
    },
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
    },
})
// 导出 action 对象函数
export const { increment, decrement } = counterStore.actions // 导出 action creator

// 导出 reducer 函数
export default counterStore.reducer // 导出 reducer
