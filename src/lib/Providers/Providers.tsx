"use client";

import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { config } from "../theme/theme";

const Providers = ({children}:{children:ReactNode}) => {
  return (
    <ConfigProvider theme={config}>
     {children}
    </ConfigProvider>
  );
};

export default Providers;
