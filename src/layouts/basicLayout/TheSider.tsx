import { Layout, Menu } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import TheLogo from './TheLogo'
import style from './index.module.scss'
import ccc from '@/router/routerConfig.tsx'
import { useLocation } from 'react-router-dom'
const { Sider } = Layout

const TheSider = () => {
    const { collapsed } = useSelector((state: any) => state.app)
    const { pathname } = useLocation()
    const defaultSelectedKey = pathname
    const defaultOpenKey = pathname.split('/').slice(0, -1).join('/')

    const Navigate = useNavigate()

    const handleNavLink = ({ key }: { key: string }) => {
        Navigate(key)
    }
    return (
        <Sider
            className={`${style.siderContainer} awesome-scroll`}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <TheLogo />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[defaultSelectedKey]}
                defaultOpenKeys={[defaultOpenKey]}
                items={ccc}
                onClick={handleNavLink}
            />
        </Sider>
    )
}
export default TheSider
