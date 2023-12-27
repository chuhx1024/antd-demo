import React from 'react'
import { Layout, theme } from 'antd'
import style from './index.module.scss'

import IndexRouter from '@/router/index'

import TheHeader from './TheHeader'

const { Content } = Layout

import TheSider from './TheSider'

const BasicLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout className={style.basicLayout}>
            <TheSider></TheSider>
            <Layout>
                <TheHeader></TheHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 10,
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
