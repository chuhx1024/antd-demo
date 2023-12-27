import React from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

import Product from '@/views/product/Product'
import Home from '@/views/home/Home'
import Task from '@/views/task/Task'

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    ele?: React.ReactElement | null,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        ele,
    } as MenuItem
}

const items: MenuProps['items'] = [
    getItem('Dashboard', '/', <MailOutlined />, <Home />),
    getItem('产品', '/product0', <MailOutlined />, <Product />),

    getItem('流程管理', 'flowManage', <AppstoreOutlined />, <></>, [
        getItem('任务', 'product1', null, <Task />),
        getItem('产品1', 'product2', <></>, <Product />),
        getItem('工单管理', 'sub3', null, null, [
            getItem('新建工单', 'home', null, <Home />),
            getItem('历史数据', 'Task0', null, <Task />),
        ]),
    ]),
]

console.log(items)

export default items || []
