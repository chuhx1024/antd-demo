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

    getItem('流程管理', '/flowManage', <AppstoreOutlined />, <></>, [
        getItem('任务', '/flowManage/product1', null, <Task />),
        getItem('产品1', '/flowManage/product2', <></>, <Product />),
        getItem('工单管理', '/flowManage/ticketSystem', null, null, [
            getItem('新建工单', '/flowManage/ticketSystem/home', null, <Home />),
            getItem('历史数据', '/flowManage/ticketSystem/Task0', null, <Task />),
        ]),
    ]),
]

export default items || []
