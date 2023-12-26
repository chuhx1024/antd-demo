import React from 'react'
import { Layout, Menu, theme } from 'antd'
import style from './index.module.scss'

import IndexRouter from '@/router/index'

import TheHeader from './TheHeader'

import { useSelector } from 'react-redux'

const { Sider, Content } = Layout

import ccc from '@/router/routerConfig.tsx'
console.log(ccc)
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router'

const BasicLayout: React.FC = () => {
    const { collapsed } = useSelector((state: any) => state.app)

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    const handleNavLink = ({ key }) => {
        console.log(key)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const Navigate = useNavigate()
        Navigate(key)
        // history.push(key)
    }

    return (
        <Layout className={style.basicLayout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={style.logoVertical} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={ccc}
                    onClick={handleNavLink}
                />
            </Sider>
            <Layout>
                <TheHeader></TheHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <IndexRouter></IndexRouter>
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
