import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Img } from '@react-email/components';


interface EmailTemplateProps {
  name: string;
  userMessage: string;
  productsHtml: string
}


export const EmailTemplate = ({ name, userMessage, productsHtml}: EmailTemplateProps) => (

  
  <Html lang="en">
    <Head />
    <Preview>Demande de devis de {name}</Preview>
    <Body >
      <Container >
        <Heading >Demande de devis de {name}</Heading>
        <div dangerouslySetInnerHTML={{ __html: productsHtml }} />
      </Container>
      <Text >
        &copy; 2024 Csma Consult. Tous droits réservés.
      </Text>
    </Body>
  </Html>
);

export default EmailTemplate