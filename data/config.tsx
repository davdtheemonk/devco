import { Badge, Box, SimpleGrid, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Saas UI",
    description: "The React component library for startups",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
        content: (
          <SimpleGrid columns={2} gap={3}>
            <Stack direction="row">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Saas UI
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Design system and UI Kit for designers
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Figma
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Design system and UI Kit for designers
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Saas UI pro
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Design system and UI Kit for designers
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Blocks
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Design system and UI Kit for designers
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Next.js starter kit
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Design system and UI Kit for designers
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        ),
      },
      {
        id: "docs",
        label: "Docs",
        content: (
          <SimpleGrid columns={3} gap={3}>
            <Stack direction="column">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Saas UI
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Learn how to use Saas UI
                </Text>
              </Stack>
              <Stack direction="row">
                <Badge
                  alignItems="center"
                  justifyContent="center"
                  display={"flex"}
                  rounded={"full"}
                >
                  Introduction
                </Badge>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Saas UI Pro
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Learn how to use Saas UI
                </Text>
                <Badge
                  alignItems="center"
                  justifyContent="center"
                  display={"flex"}
                  rounded={"full"}
                >
                  <Text fontSize="sm" color="white">
                    Getting started
                  </Text>
                </Badge>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Box
                borderWidth="1px"
                p="5px"
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                bg="blackAlpha.300"
                borderColor="gray.800"
                _hover={{
                  bg: "purple.500",
                }}
                width="35px"
                borderRadius="md"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                      stroke="#9a9996"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Box>
              <Stack direction="column">
                <Text flex="1" fontSize="md">
                  Next.js starter kit
                </Text>
                <Text flex="1" fontSize="sm" color="gray">
                  Learn how to use Saas UI
                </Text>
              </Stack>
              <Badge
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                rounded={"full"}
              >
                Quick start
              </Badge>
            </Stack>
          </SimpleGrid>
        ),
      },
      {
        id: "resources",
        label: "Resources",
      },
      {
        label: "Login",
        href: "/login",
      },
      {
        label: "Sign Up",
        href: "/signup",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{" "}
        <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
      </>
    ),
    links: [
      {
        href: "mailto:hello@saas-ui.dev",
        label: "Contact",
      },
      {
        href: "https://twitter.com/saas_js",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/saas-js/saas-ui",
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
