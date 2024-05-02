import { Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
} from "@ant-design/icons";
import React from "react";
import { BeakerIcon, ClipboardDocumentCheckIcon, DocumentPlusIcon, Squares2X2Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
const items = [
  {
    key: "dashboard",
    icon:<Squares2X2Icon className="size-5 text-blue-500" />,
    label: <Link href="/dashboard">Dashboard</Link>
  },
  {
    key: "allTasks",
    icon: <ClipboardDocumentCheckIcon className="size-5 text-blue-500"/>,
    label:  <Link href="/alltask">All Tasks</Link>
  },
  {
    key: "tasks",
    icon: <DocumentPlusIcon className="size-5"/>,
    label:  <Link href="/task">Tasks</Link> 
  },
];
const Sidebar = () => {

  return (
    <Sider  breakpoint="lg" collapsedWidth="0" className="min-h-screen">
      <Typography className="text-white px-8 py-4"><span className="text-xl font-bold text-white">TASKSTATS</span></Typography>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
