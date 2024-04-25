import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins';

const theme = extendTheme({
  colors:{
    brand: {
      50: "#FBE8E6",
      100: "#FFCBB9",
      200: "#FEA98B",
      300: "#FD875D",
      400: "#FC6C38",
      500: "#FB530F",
      600: "#F04D0A",
      700: "#E24604",
      800: "#D53E00",
      900: "#BC3100",
    }
  },
  fonts: {
    heading: `"Cabinet Grotesk", sans`,
    body: `"Poppins", sans-serif`,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
