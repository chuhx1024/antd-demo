import { createSlice } from '@reduxjs/toolkit'

const appStore = createSlice({
    name: 'app',
    // c初始化状态
    initialState: {
        collapsed: false,
    },
    reducers: {
        toggleCollapsed(state) {
            state.collapsed = !state.collapsed
        },
    },
})
// 导出 action 对象函数
export const { toggleCollapsed } = appStore.actions // 导出 action creator

// 导出 reducer 函数
export default appStore.reducer // 导出 reducer
