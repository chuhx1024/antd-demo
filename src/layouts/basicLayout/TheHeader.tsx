import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    SmileOutlined,
    SettingOutlined,
    UserSwitchOutlined,
    ExportOutlined,
} from '@ant-design/icons'
import { Layout, Button, Dropdown, Avatar } from 'antd'
import style from './index.module.scss'
import type { MenuProps } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCollapsed } from '@/store/modules/appStore'

const { Header } = Layout
const TheHeader = () => {
    const { collapsed } = useSelector((state: any) => state.app)

    const Dispath = useDispatch()
    const setCollapsed = () => {
        Dispath(toggleCollapsed())
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="#">
                    个人中心
                </a>
            ),
            icon: <SmileOutlined />,
        },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" href="#">
                    设置中心
                </a>
            ),
            icon: <SettingOutlined />,
        },
        {
            key: '2',
            label: '切换用户',
            icon: <UserSwitchOutlined />,
        },
        {
            key: '4',
            danger: true,
            label: '退出登录',
            icon: <ExportOutlined />,
        },
    ]
    return (
        <Header className={style.headerContainer}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed()}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />

            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Avatar size={32} icon={<UserOutlined />} />
                </a>
            </Dropdown>
        </Header>
    )
}

export default TheHeader
