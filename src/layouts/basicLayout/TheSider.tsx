import { Layout, Menu } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import TheLogo from './TheLogo'
import style from './index.module.scss'
import ccc from '@/router/routerConfig.tsx'
console.log(ccc)
const { Sider } = Layout

const TheSider = () => {
    const { collapsed } = useSelector((state: any) => state.app)

    const Navigate = useNavigate()

    const handleNavLink = ({ key }) => {
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
                defaultSelectedKeys={['1']}
                items={ccc}
                onClick={handleNavLink}
            />
        </Sider>
    )
}
export default TheSider
