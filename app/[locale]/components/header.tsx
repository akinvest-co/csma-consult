"use client";

import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  useDisclosure,
  Collapse,
  Stack,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { AppLogo } from './logo/logo';
import NextLink from 'next/link';

// Structure du menu avec clés de traduction
export const menuItems = [
  {
    id: 1,
    labelKey: "company",
    path: "/qui-sommes-nous",
  },
  {
    id: 2,
    labelKey: "infrastructures",
    path: "#",
    subItems: [
      { id: 21, labelKey: "telecoms", path: "/telecommunications" },
      { id: 22, labelKey: "energies", path: "/energies" },
    ],
  },
  {
    id: 3,
    labelKey: "conseil",
    path: "#",
    subItems: [
      { id: 31, labelKey: "expertise_assistance", path: "/expertise-assistance" },
      { id: 32, labelKey: "strategie_partenariats", path: "/strategie-partenariats" },
    ],
  },
  {
    id: 4,
    labelKey: "contact",
    path: "/contact",
  },
];

// Couleurs de la marque
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const grayBackground = "#F7FAFC";

const Header = () => {
  const t = useTranslations("common");
  const pathname = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  // Vérification de l'active pour les liens principaux (on compare le chemin)
  const isActive = (path: string) => pathname === path;

  return (
    <Box bg="white" borderBottom="1px solid" borderColor="gray.100" px={4} position="sticky" top={0} zIndex={1000}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box fontWeight="bold" fontSize="lg">
          <AppLogo />
        </Box>

        {/* Navigation pour desktop */}
        <Flex display={{ base: "none", md: "flex" }} alignItems="center" gap={2}>
          {menuItems.map((item) => {
            const label = t(item.labelKey);
            const hasSubmenu = item.subItems && item.subItems.length > 0;

            if (hasSubmenu) {
              return (
                <Menu key={item.id} autoSelect={false} matchWidth>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="ghost"
                    color="gray.700"
                    fontWeight="600"
                    fontSize="sm"
                    _hover={{ bg: `${brandCyan}10`, color: brandCyan }}
                    _expanded={{ bg: `${brandCyan}10`, color: brandCyan }}
                    px={3}
                    py={2}
                    borderRadius="md"
                  >
                    {label}
                  </MenuButton>
                  <MenuList bg="white" border="1px solid" borderColor="gray.200" boxShadow="lg" py={2}>
                    {item.subItems.map((sub) => {
                      const subLabel = t(sub.labelKey);
                      const isSubActive = isActive(sub.path);
                      return (
                        <MenuItem
                          key={sub.id}
                          as={NextLink}
                          href={sub.path}
                          bg={isSubActive ? `${brandCyan}10` : "transparent"}
                          color={isSubActive ? brandCyan : "gray.700"}
                          fontWeight={isSubActive ? "600" : "400"}
                          _hover={{ bg: `${brandCyan}5`, color: brandCyan }}
                          _focus={{ bg: `${brandCyan}5`, color: brandCyan }}
                          px={4}
                          py={2.5}
                        >
                          {subLabel}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              );
            }

            // Lien simple (sans sous-menu)
            const isLinkActive = isActive(item.path);
            return (
              <Link
                key={item.id}
                as={NextLink}
                href={item.path}
                px={3}
                py={2}
                fontWeight={isLinkActive ? "700" : "500"}
                color={isLinkActive ? brandCyan : "gray.700"}
                borderBottom={isLinkActive ? `2px solid ${brandCyan}` : "2px solid transparent"}
                _hover={{ textDecoration: "none", color: brandCyan }}
                fontSize="sm"
                borderRadius="md"
                transition="all 0.2s"
              >
                {label}
              </Link>
            );
          })}
        </Flex>

        {/* Mobile : bouton hamburger */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Ouvrir le menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          onClick={onToggle}
          color="gray.700"
          _hover={{ bg: `${brandCyan}10` }}
        />
      </Flex>

      {/* Menu mobile déroulant */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: "block", md: "none" }}
          bg="white"
          borderTop="1px solid"
          borderColor="gray.100"
          pb={4}
          pt={2}
        >
          <Stack spacing={1}>
            {menuItems.map((item) => {
              const label = t(item.labelKey);
              const hasSubmenu = item.subItems && item.subItems.length > 0;

              if (hasSubmenu) {
                return (
                  <Box key={item.id}>
                    <Box fontWeight="600" color="gray.600" px={3} py={2} fontSize="sm">
                      {label}
                    </Box>
                    <Stack pl={4}>
                      {item.subItems.map((sub) => {
                        const subLabel = t(sub.labelKey);
                        const isSubActive = isActive(sub.path);
                        return (
                          <Link
                            key={sub.id}
                            as={NextLink}
                            href={sub.path}
                            py={2}
                            px={4}
                            fontWeight={isSubActive ? "600" : "400"}
                            color={isSubActive ? brandCyan : "gray.700"}
                            borderLeft={isSubActive ? `3px solid ${brandCyan}` : "3px solid transparent"}
                            _hover={{ textDecoration: "none", bg: `${brandCyan}5` }}
                            onClick={onToggle}
                            fontSize="sm"
                          >
                            {subLabel}
                          </Link>
                        );
                      })}
                    </Stack>
                  </Box>
                );
              }

              const isLinkActive = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  as={NextLink}
                  href={item.path}
                  py={2.5}
                  px={3}
                  fontWeight={isLinkActive ? "600" : "400"}
                  color={isLinkActive ? brandCyan : "gray.700"}
                  bg={isLinkActive ? `${brandCyan}10` : "transparent"}
                  borderLeft={isLinkActive ? `3px solid ${brandCyan}` : "3px solid transparent"}
                  _hover={{ textDecoration: "none", bg: `${brandCyan}5` }}
                  onClick={onToggle}
                  fontSize="sm"
                >
                  {label}
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;