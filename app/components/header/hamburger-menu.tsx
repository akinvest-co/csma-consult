import { useRef } from "react";

import {
  Icon,
  IconButton,
  useDisclosure,
  Button,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import { Menu2 } from 'tabler-icons-react';
import NextLink from "next/link";
import { useActive } from "@app/app/hooks/use-active";
import { Routes } from "@app/app/config/routes/routes";
import { menuItems } from "../menu-items/menu-items";

export default function HumbergerMenu() {
  const ref = useRef<any | null>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isActive } = useActive();

  return (
    <Box display={{ base: "block", md: "block", lg: "none" }} borderRadius="xl">
      <Box ref={ref} onClick={onOpen}>
        <IconButton
          icon={<Icon as={Menu2} boxSize="7" />}
          aria-label="Carte"
          colorScheme="white"
          color="black"
        />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt="20">
            <VStack spacing="3" align="start">
              {menuItems.map(({ id, label, path }) => {
                return (
                  <Button
                    key={id}
                    letterSpacing="1px"
                    textTransform="uppercase"
                    href={path}
                    as={NextLink}
                    fontSize="1rem"
                    _hover={{
                      bg: isActive(path as keyof typeof Routes)
                        ? "#e1f2fd"
                        : "#f1f9fe",
                      color: "#0b6999",
                    }}
                    fontWeight={
                      isActive(path as keyof typeof Routes) ? "600" : "normal"
                    }
                    bg={
                      isActive(path as keyof typeof Routes)
                        ? "#e1f2fd"
                        : "initial"
                    }
                    color={
                      isActive(path as keyof typeof Routes)
                        ? "#0b6999"
                        : "initial"
                    }
                  >
                    {label}
                  </Button>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
