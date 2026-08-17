"use client";

import { contactInfo } from "@app/app/lib/static-data/pages/conctact";
import { Text, Heading, VStack, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import NextImage from "next/image";

const MotionBox = motion(Box);

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// ─── Tokens — identiques au reste du site ───
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const ink = "#0B1220";
const slate = "#55627A";
const line = "#DDE4EE";

function CornerMarks({ color }: { color: string }) {
  const arm = "14px";
  return (
    <>
      <Box position="absolute" top="-1px" left="-1px" w={arm} h={arm} borderTop="2px solid" borderLeft="2px solid" borderColor={color} borderTopLeftRadius="4px" pointerEvents="none" />
      <Box position="absolute" top="-1px" right="-1px" w={arm} h={arm} borderTop="2px solid" borderRight="2px solid" borderColor={color} borderTopRightRadius="4px" pointerEvents="none" />
      <Box position="absolute" bottom="-1px" left="-1px" w={arm} h={arm} borderBottom="2px solid" borderLeft="2px solid" borderColor={color} borderBottomLeftRadius="4px" pointerEvents="none" />
      <Box position="absolute" bottom="-1px" right="-1px" w={arm} h={arm} borderBottom="2px solid" borderRight="2px solid" borderColor={color} borderBottomRightRadius="4px" pointerEvents="none" />
    </>
  );
}

const Contact = () => {
  return (
    <Box className={body.className}>
      <VStack align="start" spacing="3" mb="10">
        <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandCyan} letterSpacing="0.22em" textTransform="uppercase">
          Contact
        </Text>
        <Text color={slate} lineHeight="1.7" maxW="620px">
          Un projet à cadrer, une équipe à renforcer, une question technique ?
          Contactez-nous — nous répondons sous 24h et vous orientons vers le bon
          interlocuteur.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        {contactInfo.map(({ id, icon, title, intro, address }, idx) => {
          const accent = idx % 2 === 0 ? brandCyan : brandOrange;
          return (
            <MotionBox
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              position="relative"
              bg="white"
              border="1px solid"
              borderColor={line}
              borderRadius="6px"
              p={6}
              _hover={{ boxShadow: `0 12px 28px -16px ${accent}55`, transform: "translateY(-3px)" }}
              sx={{ transition: "all 0.3s" }}
            >
              <CornerMarks color={accent} />
              <VStack align="start" spacing={3}>
                <Box position="relative" w="52px" h="52px" flexShrink={0}>
                  <Box position="absolute" inset={0} bg={`${accent}12`} transform="rotate(45deg)" borderRadius="10px" />
                  <Flex position="absolute" inset={0} align="center" justify="center">
                    <NextImage src={icon} alt="" width={24} height={24} />
                  </Flex>
                </Box>
                <Heading as="h3" className={display.className} fontSize="lg" fontWeight="700" color={ink}>
                  {title}
                </Heading>
                <Box color={slate}>
                  <Text fontSize="sm" mb={1}>{intro}</Text>
                  {title === "Notre adresse e-mail" ? (
                    <Text
                      as="a"
                      href={`mailto:${address}`}
                      fontSize="sm"
                      fontWeight="600"
                      color={brandCyan}
                      textDecoration="underline"
                      _hover={{ color: brandOrange }}
                    >
                      {address}
                    </Text>
                  ) : (
                    <Text fontSize="sm" fontWeight="600" color={ink}>
                      {address}
                    </Text>
                  )}
                </Box>
              </VStack>
            </MotionBox>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Contact;