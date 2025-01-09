import { contactInfo } from "@app/app/lib/static-data/pages/conctact"
import { Text, Heading, VStack, Box, SimpleGrid } from "@chakra-ui/react"
import NextImage from "next/image"

const Contact = () => {
  return (
    <Box>
      <VStack align="start" spacing="8" mb="8">

        <Text color="rgba(107,114,128,1)">
          Nous sommes impatients d'avoir de vos nouvelles et de vous accompagner
          dans toutes vos démarches. Merci de nous faire confiance.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
        {contactInfo.map(({ id, icon, title, intro, address }) => (
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
              <NextImage src={icon} alt=""  width={45}  height={45}/>
            </Box>
            <Heading size="md">{title}</Heading>
            <Box color="rgba(107,114,128,1)">
              <Text>{intro}</Text>
              {title === "Notre adresse e-mail" ? (
                <a
                  href={`mailto:${address}`}
                  style={{ textDecoration: "underline" }}
                >
                  {address}
                </a>
              ) : (
                <Text>{address}</Text>
              )}
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Contact
