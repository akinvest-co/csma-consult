"use client";

import { useRef, useState } from "react";
import {
  Icon, IconButton, useDisclosure, Button, VStack,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
  DrawerBody, Box, Collapse,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown, FiChevronRight } from "react-icons/fi";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { useActive } from '@hooks/use-active';
import { Routes } from "@config/routes/routes";
import { menuItems } from "../menu-items/menu-items";

interface MenuItem {
  id: number;
  labelKey: string;
  path?: string;
  subItems?: MenuItem[];
}

export default function HumbergerMenu() {
  const ref = useRef<any | null>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isActive } = useActive();
  const t = useTranslations("menu");
  const [openSubMenus, setOpenSubMenus] = useState<Record<number, boolean>>({});

  const toggleSubMenu = (id: number) => {
    setOpenSubMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isItemActive = item.path ? isActive(item.path as keyof typeof Routes) : false;
    const isOpen = openSubMenus[item.id] || false;

    return (
      <Box key={item.id} width="100%" pl={level * 3}>
        <Button
          width="100%"
          justifyContent="space-between"
          rightIcon={hasSubItems ? (isOpen ? <Icon as={FiChevronDown} boxSize={3.5} /> : <Icon as={FiChevronRight} boxSize={3.5} />) : undefined}
          letterSpacing="0.5px"
          textTransform="uppercase"
          href={item.path}
          as={item.path ? NextLink : undefined}
          fontSize="0.85rem"
          py={2}
          px={3}
          height="auto"
          minH="36px"
          _hover={{
            bg: isItemActive ? "#e1f2fd" : "#f1f9fe",
            color: "#0b6999",
          }}
          fontWeight={isItemActive ? "600" : "normal"}
          bg={isItemActive ? "#e1f2fd" : "initial"}
          color={isItemActive ? "#0b6999" : "initial"}
          onClick={() => {
            if (hasSubItems) {
              toggleSubMenu(item.id);
            } else if (item.path) {
              onClose();
            }
          }}
        >
          {t(item.labelKey)}
        </Button>

        {hasSubItems && (
          <Collapse in={isOpen} animateOpacity>
            <VStack spacing="1.5" align="start" mt={1} ml={2}>
              {item.subItems!.map(subItem => renderMenuItem(subItem, level + 1))}
            </VStack>
          </Collapse>
        )}
      </Box>
    );
  };

  return (
    <Box display={{ base: "block", md: "block", lg: "none" }} borderRadius="xl">
      <Box ref={ref} onClick={onOpen}>
        <IconButton
          icon={<Icon as={FiMenu} boxSize="6" />}
          aria-label="Menu"
          colorScheme="white"
          color="black"
          size="sm"
        />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="sm" />
          <DrawerBody pt="16">
            <VStack spacing="2" align="start" width="100%">
              {menuItems.map(item => renderMenuItem(item))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
    
  );
}