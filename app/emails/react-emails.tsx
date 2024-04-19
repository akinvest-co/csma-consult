import { Container, Heading, Html, Text } from "@react-email/components"

type ContactFormEmailProps = {
  name: string
  titleProduct: string
  qtyProduct: number
}

export function ContactFormEmail({
  name,
  titleProduct,
  qtyProduct,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Container>
        <Heading>Details de la commande :</Heading>
        <Text>Nom du client : {name}</Text>

        <Heading>Produits Sélectionnés : </Heading>

        <Text>{titleProduct}</Text>
        <Text>{qtyProduct}</Text>
      </Container>
    </Html>
  )
}
