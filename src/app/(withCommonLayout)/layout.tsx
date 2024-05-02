import Sidebar from "@/components/dashboard/sider/Sidebar";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }} >{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
