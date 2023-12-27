import React from 'react'
import { Routes, Route } from 'react-router-dom'
import type { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

import routerConfig from '@/router/routerConfig'

const getRouteArr = (arr: MenuProps['items']) => {
    const routeArr: React.ReactElement[] = []
    arr &&
        arr.forEach((item: MenuItem) => {
            if (item) {
                if (!(item as { children: unknown }).children) {
                    routeArr.push(<Route path={item?.key} element={item?.ele} />)
                } else {
                    const arr = (item as { children: unknown }).children as MenuProps['items']
                    routeArr.push(...getRouteArr(arr))
                }
            }
        })
    return routeArr
}
function IndexRouter() {
    return (
        <nav>
            <Routes>{getRouteArr(routerConfig)}</Routes>
        </nav>
    )
}

export default IndexRouter
