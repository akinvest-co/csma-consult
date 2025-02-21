import Layout from "@app/app/layout/layout.page"
import { Box, Heading, Stack, Link, List, ListItem,Container,Text } from "@chakra-ui/react";

export default function PlanSiteView() {
  return (
    <Layout>
     <Container maxW="container.xl">
            <Box bg="gray.50" py={10}>
          <Container maxW="container.md" bg="white" boxShadow="md" p={8} borderRadius="md">
            <Heading as="h1" size="md" mb={6} textAlign="center" color="orange.500">
             Plan du site 
            </Heading>
    
            <Stack spacing={6}>
              <Box>
              <Heading as="h2" size="md" mb={2}>
            Pages Principales
          </Heading>
          <List spacing={2}>
          <ListItem>
              <Link href="/" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Accueil 
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bureau-etudes" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                La société
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/supports" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Support
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contact" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Contact
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/blog" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Blog
              </Link>
            </ListItem>
          </List>
              </Box>
    
              <Box>
              <Heading as="h2" size="md" mb={2}>
            Informations Légales
          </Heading>
          <List spacing={2}>
            <ListItem>
              <Link href="/mentions-legales" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Mentions Légales
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/politique" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Politique de Confidentialité
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/plan-du-site" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Plan du Site
              </Link>
            </ListItem>
          </List>
              </Box>
    
              <Box>
              <Heading as="h2" size="md" mb={2}>
            Autres Sections
          </Heading>
          <List spacing={2}>
            <ListItem>
              <Link href="/blog" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Blog
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/faq" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                FAQ
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/portfolio" color="#F7871A" _hover={{ textDecoration: "underline" }}>
                Portfolio
              </Link>
            </ListItem>
          </List>
              </Box>
            </Stack>
          </Container>
        </Box>
          </Container>
    </Layout>
  )
}
