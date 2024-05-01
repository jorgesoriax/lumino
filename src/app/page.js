"use client";

import LumLogo from "@/components/media/LumLogo";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { Checks, Minus, Plus, List as PhList, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const CustomButton = ({ children, ...props }) => {
    return (
      <Button {...props} borderRadius="99" px={8} py={6}>
        {children}
      </Button>
    );
  };
  const CustomCard = ({
    src,
    heading,
    description,
    list,
    text,
    price,
    ...props
  }) => {
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
        <List mb={4}>
          {list.map((item, index) => (
            <ListItem key={index}>
              <HStack gap={2} align={"start"}>
                <Box minW={"20px"} minH={"20px"}>
                  <Checks size={20} color="green" />
                </Box>
                <Text>{item}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
        <Text fontSize={"sm"} color={"gray.600"}>
          {text}
        </Text>
      </VStack>
    );
  };
  const CustomAccordionItem = ({ title, body }) => {
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
                  {title}
                </Box>
                {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4} color={"gray.600"}>
              {body}
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
        h={{ base: "350px", lg: "100%" }}
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
      heading: "Logotipo básico",
      description: "Kit esencial.",
      list: [
        "Versiones horizontal, vertical y símbolo",
        "Adaptable a cualquier formato de diseño",
        "Archivos originales",
      ],
      text: "✦ Recomendado para obtener una solución express y de aplicación inmediata.",
      price: "499",
    },
    {
      src: "/static/images/services/logo_plus.jpg",
      heading: "Logotipo estándar",
      description: "Kit completo para escalar tu identidad.",
      list: [
        "Todo lo que incluye Logotipo básico",
        "Optimizado para impresión",
        "Paleta de colores y Tipografía personalizadas",
        "Manual de aplicación",
      ],
      text: "✦ Recomendado para quienes necesiten dar el primer paso para desarrollar una marca única.",
      price: "1499",
    },
    {
      src: "/static/images/services/flyer.jpg",
      heading: "Flyer",
      description: "",
      list: [
        "Múltiples formatos de diseño",
        "Optimizado para impresión",
        "Archivos originales",
      ],
      text: "✦ Recomendado para quienes necesiten promocionar información como servicios, productos o eventos en un formato físico.",
      price: "299",
    },
    {
      src: "/static/images/services/business_card.jpg",
      heading: "Tarjeta de presentación",
      description: "",
      list: [
        "Múltiples formatos de diseño",
        "Optimizado para impresión",
        "Archivos originales",
      ],
      text: "✦ Recomendado para quienes necesiten dar a conocer sus servicios profesionales en un formato físico.",
      price: "299",
    },
    {
      src: "/static/images/services/landing_page.jpg",
      heading: "Página informativa (WordPress + Divi)",
      description:
        "Tambien conocida como Landing Page. Una página para recibir a tus invitados, presentar tu oferta ante ellos e invitarles algo.",
      list: [
        "Diseño personalizado",
        "Optimización SEO-OnPage",
        "Optimización de carga inicial",
        "Redacción de contenido",
        "Optimización para celulares",
        "1 Trimestre de asistencia y mantenimiento",
      ],
      text: "✦ Recomendado para darse a conocer por medio de un sitio web usando catálogos, portafolios o galerías.",
      price: "1999",
    },
  ];

  const FAQItems = [
    {
      title: "¿Cómo funciona el proceso de diseño?",
      body: "Una vez recibimos tu formulario iniciamos nuestro proceso de diseño. Comienza con dibujar bocetos a mano para crear distintas propuestas. Después, seleccionamos la mejor, la vectorizamos y finalmente, desarrollamos la documentación necesaria.",
    },
    {
      title: "¿Qué archivos se me entrega al finalizar el servicio?",
      body: "Podemos exportar los diseños en el formato que desees. Normalmente te entregamos JPG, PNG, SVG, PDF y el archivo editable para Illustrator o Canva. Estos formatos pueden variar según el servicio que deseés.",
    },
    {
      title: "¿Qué sucede si el diseño final no es de mi agrado?",
      body: "Si no quedas satisfecho o satisfecha con el resultado, cuentas con una garantía de satisfacción que te permite solicitar un reembolso del 100%.",
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
          user
          <LumLogo />
          <List display={{ base: "none", lg: "block" }}>
            <HStack w={"100%"}>
              <ListItem>
                <CustomButton
                  variant={"ghost"}
                  fontWeight={"bold"}
                  as={"a"}
                  href={"#services"}
                >
                  Servicios
                </CustomButton>
              </ListItem>
              <ListItem>
                <CustomButton
                  variant={"ghost"}
                  fontWeight={"bold"}
                  as={"a"}
                  href={"#portfolio"}
                >
                  Portafolio
                </CustomButton>
              </ListItem>
              <ListItem>
                <CustomButton
                  variant={"ghost"}
                  fontWeight={"bold"}
                  as={"a"}
                  href={"#faq"}
                >
                  Preguntas
                </CustomButton>
              </ListItem>
            </HStack>
          </List>
          {/* MOBILE MENU */}
          <Box display={{ base: "block", lg: "none" }}>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    // rightIcon={<ChevronDownIcon />}
                    p={2}
                  >
                    {isOpen ? <X size={32} /> : <PhList size={32} />}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link textDecoration={"none"} href={"#services"}>
                        Servicios
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link textDecoration={"none"} href={"#portfolio"}>
                        Portafolio
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link textDecoration={"none"} href={"#faq"}>
                        Preguntas
                      </Link>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </HStack>
      </Container>
      {/**
       *
       * BODY
       *
       */}
      <Container maxW={1024} p={0} mb={{ base: 12, lg: 32 }}>
        <VStack
          gap={{ base: 12, lg: 32 }}
          backgroundImage={{
            base: "none",
            lg: "url('/static/images/header/bg.png')",
          }}
          backgroundPosition={"top"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"contain"}
        >
          {/**
           *
           * HEADER
           *
           */}
          <Stack
            gap={{ base: 0, lg: 12 }}
            pb={{ base: 0, lg: 8 }}
            h={{ base: "auto", lg: "calc(100vh - 71px - 32px)" }}
            w={"100%"}
            direction={{ base: "column-reverse", lg: "row" }}
            px={{ base: 4, lg: 0 }}
          >
            {/* Left */}
            <VStack
              w={{ base: "100%", lg: "65%" }}
              align={"left"}
              justify={"end"}
              h={"100%"}
            >
              <Box>
                <Heading as={"h1"} size={"4xl"} fontWeight={700} mb={4}>
                  Creatividad eficiente para tus proyectos
                </Heading>
                <Text mb={{ base: 4, lg: 12 }} color={"gray"}>
                  Lumino es un estudio creativo independiente que ofrece una
                  variedad de servicios de diseño personalizado y útil que
                  satisfaga al máximo tus necesidades.
                </Text>
              </Box>
              <Link
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.600" }}
                href={"https://wa.me/8112802209"}
                isExternal
                w={{ base: "100%", lg: "fit-content" }}
                h={"48px"}
                px={8}
                py={6}
                borderRadius={99}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  Hablemos
                </Flex>
              </Link>
            </VStack>
            {/* Right */}
            <VStack
              w={{ base: "100%", lg: "35%" }}
              gap={4}
              h={"100%"}
              justify={"end"}
              pb={{ base: 4, lg: 0 }}
            >
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
                display={{ base: "none", lg: "block" }}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  Ver portafolio en IG
                </Flex>
              </Link>
            </VStack>
          </Stack>
          {/**
           *
           * SERVICES
           *
           */}
          <Stack
            gap={8}
            align={"start"}
            direction={{ base: "column", lg: "row" }}
            id={"services"}
            scrollMarginTop={{ base: 4, lg: 8 }}
          >
            <VStack
              align={"left"}
              w={{ base: "100%", lg: "30%" }}
              padding={{ base: 4, lg: 0 }}
            >
              <Heading>Servicios</Heading>
              <Text color={"gray"} mb={4}>
                Creatividad que surge para satisfacer las necesidades de tu
                proyecto.
              </Text>
              <Link
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
                href={"https://wa.me/8112802209"}
                isExternal
                h={"48px"}
                borderRadius={99}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  Necesito algo más
                </Flex>
              </Link>
            </VStack>
            <VStack
              w={{ base: "100%", lg: "70%" }}
              padding={{ base: 4, lg: 0 }}
            >
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                columnGap={4}
                rowGap={8}
              >
                {servicesImages.map((image, index) => (
                  <GridItem key={index}>
                    <CustomCard
                      src={image.src}
                      heading={image.heading}
                      description={image.description}
                      list={image.list}
                      text={image.text}
                      price={image.price}
                    ></CustomCard>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </Stack>
          {/**
           *
           * PORTFOLIO
           *
           */}
          <Stack
            gap={8}
            align={"left"}
            direction={{ base: "column", lg: "row" }}
            px={{ base: 4, lg: 0 }}
            id={"portfolio"}
            scrollMarginTop={{ base: 4, lg: 8 }}
          >
            <VStack align={"left"} w={{ base: "100%", lg: "30%" }} mb={4}>
              <Heading>Portafolio</Heading>
              <Text color={"gray"} mb={4}>
                Hecha un vistazo a algunos de nuestros mejores proyectos en
                nuestra cuenta de Instagram.
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
            <VStack w={{ base: "100%", lg: "70%" }}>
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
          </Stack>
          {/**
           *
           * FAQ
           *
           */}
          <Stack
            gap={8}
            align={"left"}
            w={"100%"}
            direction={{ base: "column", lg: "row" }}
            px={{ base: 4, lg: 0 }}
            id={"faq"}
            scrollMarginTop={{ base: 4, lg: 8 }}
          >
            <VStack align={"left"} w={{ base: "100%", lg: "30%" }} mb={4}>
              <Heading>FAQ</Heading>
              <Text color={"gray"} mb={4}>
                Aquí tienes algunas de las preguntas más comunes.
              </Text>
              <Link
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.900" }}
                fontWeight={"400"}
                href={"https://wa.me/8112802209"}
                isExternal
                w={"100%"}
                h={"48px"}
                borderRadius={99}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  Sugerir una pregunta
                </Flex>
              </Link>
            </VStack>
            <VStack w={{ base: "100%", lg: "70%" }}>
              <Accordion allowMultiple w={"100%"}>
                {FAQItems.map((item, index) => (
                  <CustomAccordionItem title={item.title} body={item.body} />
                ))}
              </Accordion>
            </VStack>
          </Stack>
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
          <Stack
            py={20}
            gap={{ base: 8, lg: 0 }}
            align={"start"}
            direction={{ base: "column", lg: "row" }}
          >
            <VStack
              w={{ base: "100%", lg: "40%" }}
              align={{ base: "center", lg: "left" }}
              gap={8}
            >
              <Image
                src={"/static/images/logo/symbol_light.svg"}
                boxSize={55}
              />
              <Text textAlign={{ base: "center", lg: "left" }}>
                Lumino es un estudio creativo independiente que ofrece una
                variedad de servicios de diseño personalizado para tu negocio o
                proyecto.
              </Text>
            </VStack>
            <Stack
              w={{ base: "100%", lg: "60%" }}
              align={{ base: "center", lg: "start" }}
              justify={"end"}
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 8, lg: 0 }}
            >
              <VStack align={"right"} minW={"150px"}>
                <List textAlign={{ base: "center", lg: "right" }}>
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
                <List textAlign={{ base: "center", lg: "right" }}>
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
            </Stack>
          </Stack>
          <Divider borderColor={"gray.700"} />
          <Stack py={4}>
            <Text
              fontSize={"sm"}
              color={"gray.500"}
              textAlign={{ base: "center", lg: "left" }}
            >
              ©2024 Todos los derechos reservados.
            </Text>
          </Stack>
        </Container>
      </Container>
    </main>
  );
}
