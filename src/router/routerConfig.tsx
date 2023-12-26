import React from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    ele?: React.ReactElement | null,
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
    getItem('Dashboard', '/', <MailOutlined />),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('产品', 'product'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
]

console.log(items)

export default items
