import StaffForm from "./StaffForm.jsx";
import {Sidebar} from "./Sidebar.jsx";
import "./staffForm.css"
import {Layout, Menu, theme} from "antd";
import React from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {useState} from "react";

export function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className={"dashboard"}>
            <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Staff Data',
                        },

                    ]}
                />
            </Layout.Sider>
            <Layout className="site-layout">
                <Layout.Header style={{height: 40, display: "flex" ,justifyContent: "start" , padding: 0, background: colorBgContainer }}>

                    {
                        collapsed? <MenuUnfoldOutlined style={{paddingLeft: 10}} onClick={() => setCollapsed(!collapsed)}/> : <MenuFoldOutlined style={{padding: 10}} onClick={() => setCollapsed(!collapsed)}/>
                    }
                </Layout.Header>
                <Layout.Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <StaffForm/>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}