import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Img } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  userMessage: string;
}


export const EmailTemplate = ({ name, userMessage}: EmailTemplateProps) => (
  <Html lang="en">
    <Head />
    <Preview>Demande de devis de {name}</Preview>
    <Body >
      <Container >
        <Heading >Demande de devis de {name}</Heading>
        {/* <Text >{userMessage}</Text> */}
        <Text >{userMessage}</Text>
        +       <div dangerouslySetInnerHTML={{ __html: userMessage }} />
      </Container>
      <Text >
        &copy; 2024 Csma Consult. Tous droits réservés.
      </Text>
    </Body>
  </Html>
);

export default EmailTemplate