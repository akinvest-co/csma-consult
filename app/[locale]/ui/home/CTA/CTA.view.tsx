"use client";

import { useTranslations } from "next-intl";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";

const CTAView = () => {
  const t = useTranslations("cta");

  return (
    <Box display="flex" alignItems="center" justifyContent="center"
      bg="gray.50" px={{ base: 4, md: 6 }} py={{ base: 8, md: 12 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        maxW="container.lg" w="100%"
        bg="#0E2939" borderRadius="2xl"
        boxShadow="2xl" p={{ base: 6, md: 8 }}
        textAlign="center"
      >
        <VStack spacing={5}>
          <Heading as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
            bgClip="text" lineHeight="1.3">
            {t("heading")}<br />{t("heading2")} {/* ✅ */}
          </Heading>

          <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
            {t("description")}<br />{t("description2")} {/* ✅ */}
          </Text>

          <Button as="a" href="/contact" size="md"
            bg={brandCyan} color="#ffff" px={6} py={5}
            fontSize="sm" fontWeight="600" borderRadius="full"
            rightIcon={<FiArrowRight />}
            _hover={{ bg: brandOrange, color: "white",
              transform: "translateY(-2px)", boxShadow: "lg" }}
            transition="all 0.2s">
            {t("cta")} {/* ✅ */}
          </Button>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default CTAView;