import { contactInfo } from '@app/app/lib/static-data/pages/conctact'
import { Text, Heading, VStack, Box, SimpleGrid } from '@chakra-ui/react'
import NextImage from 'next/image'

const Contact = () => {
  return (
    <Box>
      <VStack align="start" spacing="8" mb="8">
        <Text color="#0b6999">Nous Rejoindre</Text>
        <Heading size="2xl" lineHeight="shorter">
          Discutons, nous sommes sympas !
        </Heading>
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
              border="1px solid #bde6fa"
              bg="#e1f2fd"
              padding={2}
              borderRadius="full"
              w="45px"
              h="45px"
              textAlign="center"
            >
              <NextImage src={icon} alt="" />
            </Box>
            <Heading size="md">{title}</Heading>
            <Box>
              <Text color="rgba(107,114,128,1)">{intro}</Text>
              {title === 'Notre adresse e-mail' ? (
                <a
                  href={`mailto:${address}`}
                  style={{ textDecoration: 'underline' }}
                >
                  {address}
                </a>
              ) : (
                <Text color="rgba(107,114,128,1)">{address}</Text>
              )}
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Contact
