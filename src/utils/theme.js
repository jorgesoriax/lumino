import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins';

const theme = extendTheme({
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
