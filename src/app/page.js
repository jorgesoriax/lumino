"use client";

import LumLogo from "@/components/media/LumLogo";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Minus, Plus } from "@phosphor-icons/react";

export default function Home() {
  const CustomButton = ({ children, ...props }) => {
    return (
      <Button {...props} borderRadius="99" px={8} py={6}>
        {children}
      </Button>
    );
  };
  const CustomCard = ({ src, heading, text, ...props }) => {
    return (
      <VStack align={"left"}>
        <Image
          w={"100%"}
          h={"250px"}
          objectFit={"cover"}
          src={src}
          borderRadius={12}
        />
        <Heading>{heading}</Heading>
        <Text fontSize={"sm"} color={"gray.600"}>
          {text}
        </Text>
      </VStack>
    );
  };
  const CustomAccordionItem = () => {
    return (
      <AccordionItem
        borderTop={0}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
      >
        {({ isExpanded }) => (
          <>
            <Heading as={"h2"} size={"md"}>
              <AccordionButton _hover={{ bg: "transparent" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"xl"}
                  fontWeight={"600"}
                  py={4}
                >
                  Section 2 title
                </Box>
                {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4} color={"gray.600"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    );
  };

  return (
    <main>
      <Container maxW={1280}>
        {/**
         *
         * NAVBAR
         *
         */}
        <HStack w={"100%"} justifyContent={"space-between"} mb={8} pt={4}>
          <LumLogo />
          <List>
            <HStack w={"100%"}>
              <ListItem>
                <CustomButton variant={"ghost"}>Servicios</CustomButton>
              </ListItem>
              <ListItem>
                <CustomButton variant={"ghost"}>Portafolio</CustomButton>
              </ListItem>
              <ListItem>
                <CustomButton variant={"ghost"}>Preguntas</CustomButton>
              </ListItem>
            </HStack>
          </List>
          <CustomButton borderRadius={99}>Hablemos</CustomButton>
        </HStack>
      </Container>
      <Container maxW={1024} p={0} mb={32}>
        <VStack gap={32}>
          {/**
           *
           * HEADER
           *
           */}
          <HStack gap={4} pb={8} h={"calc(100vh - 71px - 32px)"}>
            <VStack
              w={"65%"}
              align={"left"}
              justify={"end"}
              h={"100%"}
              border={"1px solid"}
              borderColor={"gray.200"}
              borderRadius={12}
              p={6}
            >
              <Box>
                <Heading as={"h1"} size={"4xl"} mb={4}>
                  Put an eye-catching display here
                </Heading>
                <Text mb={12} color={"gray"}>
                  Lumino es un estudio creativo en línea...
                </Text>
              </Box>
              <ButtonGroup>
                <CustomButton borderRadius={99}>Primary</CustomButton>
                <CustomButton variant={"outline"} borderRadius={99}>
                  Secondary
                </CustomButton>
              </ButtonGroup>
            </VStack>
            <VStack w={"35%"} gap={4} h={"100%"} justify={"end"}>
              <Image
                src={
                  "https://cdn.dribbble.com/userupload/14052174/file/original-b7f9b9c6dc9504613b81b1c9cd5f2ed4.jpg?resize=1024x768"
                }
                h={"100%"}
                objectFit={"cover"}
                borderRadius={12}
              />
              <CustomButton
                w={"100%"}
                borderRadius={"99"}
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
              >
                Ver portafolio
              </CustomButton>
            </VStack>
          </HStack>
          {/**
           *
           * SERVICES
           *
           */}
          <HStack gap={8} align={"start"}>
            <VStack align={"left"} w="30%">
              <Heading>Servicios</Heading>
              <Text color={"gray"} mb={4}>
                Nulla libero ipsum, pulvinar id nunc porttitor, aliquam varius
                sem. Nullam ut orci lectus. In sollicitudin pellentesque quam,
                id convallis tellus vestibulum a. Mauris sed dolor et arcu
                dignissim fringilla.
              </Text>
              <CustomButton
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
              >
                Necesito algo más
              </CustomButton>
            </VStack>
            <VStack w={"70%"}>
              <Grid templateColumns={"repeat(2, 1fr)"} columnGap={4} rowGap={8}>
                {/* Card */}
                <GridItem>
                  <CustomCard
                    src={
                      "https://cdn.dribbble.com/userupload/14130643/file/original-74c8b0b921d4fb5e39c5d07a163cde66.gif"
                    }
                    heading={"Logo esencial"}
                    text={
                      "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis."
                    }
                  ></CustomCard>
                </GridItem>
                {/* Card */}
                <GridItem>
                  <CustomCard
                    src={
                      "https://cdn.dribbble.com/userupload/14130643/file/original-74c8b0b921d4fb5e39c5d07a163cde66.gif"
                    }
                    heading={"Logo estándar"}
                    text={
                      "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis."
                    }
                  ></CustomCard>
                </GridItem>
                {/* Card */}
                <GridItem>
                  <CustomCard
                    src={
                      "https://cdn.dribbble.com/userupload/14130643/file/original-74c8b0b921d4fb5e39c5d07a163cde66.gif"
                    }
                    heading={"Flyer"}
                    text={
                      "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis."
                    }
                  ></CustomCard>
                </GridItem>
                {/* Card */}
                <GridItem>
                  <CustomCard
                    src={
                      "https://cdn.dribbble.com/userupload/14130643/file/original-74c8b0b921d4fb5e39c5d07a163cde66.gif"
                    }
                    heading={"Tarjeta de presentación"}
                    text={
                      "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis."
                    }
                  ></CustomCard>
                </GridItem>
                {/* Card */}
                <GridItem>
                  <CustomCard
                    src={
                      "https://cdn.dribbble.com/userupload/14130643/file/original-74c8b0b921d4fb5e39c5d07a163cde66.gif"
                    }
                    heading={"Landing page"}
                    text={
                      "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis."
                    }
                  ></CustomCard>
                </GridItem>
              </Grid>
            </VStack>
          </HStack>
          {/**
           *
           * PORTFOLIO
           *
           */}
          <HStack gap={8} align={"left"}>
            <VStack align={"left"} w={"30%"} mb={4}>
              <Heading>Portafolio</Heading>
              <Text color={"gray"} mb={4}>
                Nulla libero ipsum, pulvinar id nunc porttitor, aliquam varius
                sem. Nullam ut orci lectus. In sollicitudin pellentesque quam,
                id convallis tellus vestibulum a. Mauris sed dolor et arcu
                dignissim fringilla.
              </Text>
              <CustomButton
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
              >
                Ver portafolio en IG
              </CustomButton>
            </VStack>
            <VStack w={"70%"}>
              <Image
                w={"100%"}
                h={"350px"}
                objectFit={"cover"}
                border={"1px solid"}
                borderColor={"gray.200"}
                src="https://cdn.dribbble.com/userupload/8869711/file/original-0899e0e3fa28fd4301224df885b83f2a.png?resize=1024x366&vertical=center"
                borderRadius={12}
              ></Image>
            </VStack>
          </HStack>
          {/**
           *
           * FAQ
           *
           */}
          <HStack gap={8} align={"left"}>
            <VStack align={"left"} w={"30%"} mb={4}>
              <Heading>FAQ</Heading>
              <Text color={"gray"} mb={4}>
                Nulla libero ipsum, pulvinar id nunc porttitor, aliquam varius
                sem. Nullam ut orci lectus. In sollicitudin pellentesque quam,
                id convallis tellus vestibulum a. Mauris sed dolor et arcu
                dignissim fringilla.
              </Text>
              <CustomButton
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
              >
                Hacer una pregunta
              </CustomButton>
            </VStack>
            <VStack w={"70%"}>
              <Accordion allowMultiple w={"100%"}>
                <CustomAccordionItem />
                <CustomAccordionItem />
                <CustomAccordionItem />
                <CustomAccordionItem />
              </Accordion>
            </VStack>
          </HStack>
        </VStack>
      </Container>
      {/**
       *
       * FOOTER
       *
       */}
      <Container
        maxW={"100%"}
        borderColor={"gray.200"}
        bg={"gray.900"}
        color={"white"}
      >
        <Container maxW={1280}>
          <HStack py={20}>
            <VStack w={"40%"}>
              <Text>
                Proin a tortor sagittis nulla placerat dignissim ac a ex.
                Aliquam orci neque, commodo at tellus nec, aliquet posuere erat.
                Mauris vitae tellus in leo laoreet vehicula quis eu lacus.
                Quisque gravida massa at lorem condimentum imperdiet.
              </Text>
            </VStack>
            <HStack w={"60%"} align={"start"} justify={"end"}>
              <VStack align={"right"} minW={"150px"}>
                <List textAlign={"right"}>
                  <Text color={"gray.500"}>Contacto</Text>
                  <ListItem>
                    <Link href={"https://wa.me/8112802209"} isExternal>
                      +52 1 81 1280 2209
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href={"mailto:lumino.flow@gmail.com"} isExternal>
                      lumino.flow@gmail.com
                    </Link>
                  </ListItem>
                </List>
              </VStack>
              <VStack align={"right"} minW={"150px"}>
                <List textAlign={"right"}>
                  <ListItem>
                    <Text color={"gray.500"}>Redes sociales</Text>
                    <Link
                      href={"https://www.instagram.com/lumino.dw/"}
                      isExternal
                    >
                      Instagram
                    </Link>
                  </ListItem>
                </List>
              </VStack>
            </HStack>
          </HStack>
          <Divider borderColor={"gray.700"} />
          <Stack py={4}>
            <Text fontSize={"sm"} color={"gray.500"}>
              ©2024 Todos los derechos reservados.
            </Text>
          </Stack>
        </Container>
      </Container>
    </main>
  );
}
