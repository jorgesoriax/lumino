"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/theme";
import Fonts from "@/utils/fonts";

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
