import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Img } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  userMessage: string;
  products: { name: string; quantity: number; imageUrl: string }[];
}

export const EmailTemplate = ({ name, userMessage, products }: EmailTemplateProps) => (
  <Html lang="en">
    <Head />
    <Preview>Demande de devis de {name}</Preview>
    <Body style={{ backgroundColor: '#f6f6f6', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Heading style={{ color: '#333333' }}>Demande de devis de {name}</Heading>
        <Text style={{ color: '#666666' }}>{userMessage}</Text>
        {products.map((product, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
            <Img src={product.imageUrl} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
            <Text>{product.name} (x{product.quantity})</Text>
          </div>
        ))}
      </Container>
      <Text style={{ textAlign: 'center', color: '#999999', fontSize: '12px', marginTop: '20px' }}>
        &copy; 2024 Votre Entreprise. Tous droits réservés.
      </Text>
    </Body>
  </Html>
);

export default EmailTemplate