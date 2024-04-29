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
  Flex,
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
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const CustomButton = ({ children, ...props }) => {
    return (
      <Button {...props} borderRadius="99" px={8} py={6}>
        {children}
      </Button>
    );
  };
  const CustomCard = ({ src, heading, text, price, ...props }) => {
    return (
      <VStack align={"left"}>
        <Image
          w={"100%"}
          h={"250px"}
          objectFit={"cover"}
          src={src}
          borderRadius={12}
          border={"1px solid"}
          borderColor={"gray.200"}
          mb={2}
        />
        <Text bg={"gray.100"} py={1} px={4} w={"fit-content"} borderRadius={99}>
          Desde ${price}
        </Text>
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

  const Carousel = () => {
    const [activeImage, setActiveImage] = useState(0);
    const imageRef = useRef(null);

    const images = [
      {
        src: "/static/images/header/preview_1.jpg",
        alt: "Image 1",
      },
      {
        src: "/static/images/header/preview_2.jpg",
        alt: "Image 2",
      },
      {
        src: "/static/images/header/preview_3.jpg",
        alt: "Image 3",
      },
    ];

    const handleNextImage = () => {
      setActiveImage(
        (prevActiveImage) => (prevActiveImage + 1) % images.length
      );
    };

    useEffect(() => {
      const intervalId = setInterval(handleNextImage, 3000);
      return () => clearInterval(intervalId);
    }, []);

    return (
      <Box
        w={"100%"}
        h={"100%"}
        position={"relative"}
        borderRadius={12}
        overflow={"hidden"}
      >
        <Flex position={"absolute"} w={"100%"} h={"100%"} top={0} left={0}>
          {images.map((image, index) => (
            <Box
              key={index}
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              opacity={index === activeImage ? 1 : 0}
              transition="opacity 0.5s ease"
            >
              <Image
                src={image.src}
                alt={image.alt}
                boxSize={"100%"}
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    );
  };

  const servicesImages = [
    {
      src: "/static/images/services/logo.jpg",
      heading: "Logo esencial",
      text: "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis.",
      price: "499",
    },
    {
      src: "/static/images/services/logo_plus.jpg",
      heading: "Logo estándar",
      text: "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis.",
      price: "1499",
    },
    {
      src: "/static/images/services/flyer.jpg",
      heading: "Flyer",
      text: "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis.",
      price: "299",
    },
    {
      src: "/static/images/services/business_card.jpg",
      heading: "Tarjeta de presentación",
      text: "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis.",
      price: "299",
    },
    {
      src: "/static/images/services/landing_page.jpg",
      heading: "Landing page",
      text: "Recomendado para Phasellus quis vehicula tellus. Donec pellentesque volutpat nibh, vel dapibus tellus sodales quis.",
      price: "1999",
    },
  ];

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
          <CustomButton
            borderRadius={99}
            colorScheme={"brand"}
            fontWeight={"500"}
          >
            Hablemos
          </CustomButton>
        </HStack>
      </Container>
      <Container maxW={1024} p={0} mb={32}>
        <VStack
          gap={32}
          backgroundImage={"url('/static/images/header/bg.png')"}
          backgroundPosition={"top"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"contain"}
        >
          {/**
           *
           * HEADER
           *
           */}
          <HStack gap={12} pb={8} h={"calc(100vh - 71px - 32px)"} w={"100%"}>
            <VStack
              w={"65%"}
              align={"left"}
              justify={"end"}
              h={"100%"}
              // border={"1px solid"}
              // borderColor={"gray.200"}
              // borderRadius={12}
              // p={8}
            >
              <Box>
                <Heading as={"h1"} size={"4xl"} fontWeight={700}>
                  Developing impactful
                </Heading>
                <Text mb={12} color={"gray"}>
                  We help brands defy by producing web and mobile solutions that
                  are as aesthetically pleasing as they are effective in
                  fulfilling their purposes: to grow your business, to appeal to
                  a specific audience, to get funded.
                </Text>
              </Box>
              <ButtonGroup>
                <CustomButton
                  borderRadius={99}
                  colorScheme={"brand"}
                  fontWeight={"500"}
                >
                  Hablemos
                </CustomButton>
                {/* <CustomButton variant={"outline"} borderRadius={99}>
                  Hablemos
                </CustomButton> */}
              </ButtonGroup>
            </VStack>
            <VStack w={"35%"} gap={4} h={"100%"} justify={"end"}>
              <Carousel />
              <Link
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
                href={"https://www.instagram.com/lumino.dw/"}
                isExternal
                w={"100%"}
                h={"48px"}
                borderRadius={99}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  Ver portafolio en IG
                </Flex>
              </Link>
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
                {servicesImages.map((image, index) => (
                  <GridItem key={index}>
                    <CustomCard
                      src={image.src}
                      heading={image.heading}
                      text={image.text}
                      price={image.price}
                    ></CustomCard>
                  </GridItem>
                ))}
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
              <Link
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
                href={"https://www.instagram.com/lumino.dw/"}
                isExternal
                h={"48px"}
                borderRadius={99}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  Ver portafolio en IG
                </Flex>
              </Link>
            </VStack>
            <VStack w={"70%"}>
              <Image
                w={"100%"}
                h={"350px"}
                objectFit={"cover"}
                border={"1px solid"}
                borderColor={"gray.200"}
                src={"/static/images/portfolio/portfolio-preview.jpg"}
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
