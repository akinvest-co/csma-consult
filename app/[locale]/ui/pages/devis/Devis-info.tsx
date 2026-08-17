// components/DevisInfos.jsx ou directement dans la page
import { Text, Heading, VStack, Box, SimpleGrid } from "@chakra-ui/react";
import NextImage from "next/image";

// Tu peux stocker ces données dans un fichier static-data/pages/devis.js
const devisInfosData = [
  {
    id: 1,
    icon: "/icons/devis-reference.svg", // remplace par tes vraies icônes
    title: "Référence devis",
    intro: "Devis estimatif",
    value: "DEV-2025-0012",
  },
  {
    id: 2,
    icon: "/icons/calendar.svg",
    title: "Validité",
    intro: "Offre valable jusqu'au",
    value: "11/07/2026",
  },
  {
    id: 3,
    icon: "/icons/clock.svg",
    title: "Délai de réponse",
    intro: "Sous 24h ouvrées",
    value: "Rapide & personnalisé",
  },
  {
    id: 4,
    icon: "/icons/euro.svg", // ou /icons/cfa.svg
    title: "Montant estimé",
    intro: "À partir de",
    value: "Sur devis personnalisé",
  },
];

const DevisInfos = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
      {devisInfosData.map(({ id, icon, title, intro, value }) => (
        <VStack
          align="start"
          key={id}
          borderRadius="xl"
          spacing="3"
          p="5"
          boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
        >
          <Box
            overflow="hidden"
            border="1px dashed #F7871A"
            bg="#e1f2fd"
            padding={2}
            borderRadius="full"
            w="45px"
            h="45px"
            textAlign="center"
          >
            <NextImage src={icon} alt="" width={45} height={45} />
          </Box>
          <Heading size="sm">{title}</Heading>
          <Box color="rgba(107,114,128,1)">
            <Text>{intro}</Text>
            <Text fontWeight="semibold" color="#1799cf">
              {value}
            </Text>
          </Box>
        </VStack>
      ))}
    </SimpleGrid>
  );
};

export default DevisInfos;