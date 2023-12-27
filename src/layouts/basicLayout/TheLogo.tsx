import style from './index.module.scss'
import { useSelector } from 'react-redux'
import { GithubOutlined } from '@ant-design/icons'

const TheLogo = () => {
    const { collapsed } = useSelector((state: any) => state.app)
    return (
        <div className={style.logoVertical}>
            <GithubOutlined className={style.logoIcon} />
            {collapsed || <span className={style.logoTitle}>管理系统</span>}
        </div>
    )
}
export default TheLogo
