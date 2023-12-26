import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCollapsed } from '@/store/modules/appStore'

const { Header } = Layout
const TheHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const { collapsed } = useSelector((state: any) => state.app)

    const Dispath = useDispatch()
    const setCollapsed = () => {
        Dispath(toggleCollapsed())
    }
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
    )
}

export default TheHeader
