import { ThemeConfig, theme } from "antd";

export const config: ThemeConfig = {
  // Use dark algorithm
  token:{
colorPrimary:"#2B6CB0",

  },
  components: {
    Button: {
      colorPrimary: "#F26430",
      colorPrimaryHover: "#F26445",
      algorithm: true,
    },
  },
};
