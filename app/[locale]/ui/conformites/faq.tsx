"use client"
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon,
  useColorModeValue,
  Flex,
  Icon,
  Button
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaLightbulb,  } from "react-icons/fa";
import { Clock, FileText, ShieldCheck } from "tabler-icons-react";

const MotionBox = motion(Box);

export default function FAQSection() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("orange.500", "orange.300");

  const faqItems = [
    {
      question: "Quels sont les délais typiques pour un audit de conformité ?",
      answer: "Un audit complet prend généralement entre 3 et 10 jours ouvrables selon la complexité du projet. Nous fournissons un planning détaillé dès la première analyse de votre dossier.",
      icon: Clock
    },
    {
      question: "Intervenez-vous en cours de chantier ?",
      answer: "Oui, audits flash et reprises ciblées pour limiter les retards et pénalités.",
      icon: ShieldCheck
    },
    {
      question: "Comment garantissez-vous la confidentialité de nos données techniques ?",
      answer: "Tous nos échanges sont sécurisés par des protocoles chiffrés. Nous signons des clauses de confidentialité et n'utilisons vos données que dans le cadre strict de la mission.",
      icon: FileText
    },
    
    {
      question: "Pouvez-vous intervenir sur l'ensemble du territoire français ?",
      answer: "Absolument. Nos auditeurs sont mobiles sur tout le territoire métropolitain et ultramarin. Les audits à distance sont également possibles pour certaines phases.",
      icon: FaQuestionCircle
    },
   
  ];

  return (
    <Box bg={bgColor} py={16} id="faq">
      <Container maxW="6xl">
        <VStack spacing={12}>
          {/* En-tête */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <Flex align="center" justify="center" mb={4}>
              <Icon as={FaQuestionCircle} w={8} h={8} color={accentColor} mr={3} />
              <Text 
                fontWeight="bold" 
                color={accentColor}
                textTransform="uppercase"
                letterSpacing="wide"
                fontSize="lg"
              >
                FAQ
              </Text>
            </Flex>
            
            <Heading 
              size="2xl" 
              color={textColor}
              mb={4}
              fontWeight="black"
            >
              Questions Fréquentes
            </Heading>
            
            <Text 
              fontSize="xl" 
              color={useColorModeValue("gray.600", "gray.400")}
              maxW="2xl"
            >
              Tout ce que vous devez savoir sur nos audits de conformité technique
            </Text>
          </MotionBox>

          {/* Accordéon FAQ */}
          <Box w="100%" maxW="4xl">
            <Accordion allowToggle>
              {faqItems.map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  mb={4}
                >
                  <AccordionItem 
                    border="2px solid"
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    borderRadius="xl"
                    overflow="hidden"
                    bg={cardBg}
                    _hover={{
                      borderColor: accentColor,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                    }}
                    transition="all 0.3s"
                  >
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton 
                          py={6}
                          px={6}
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                        >
                          <Flex align="center" flex="1" textAlign="left">
                            <Icon 
                              as={item.icon} 
                              w={5} 
                              h={5} 
                              color={isExpanded ? accentColor : "gray.500"}
                              mr={4}
                              transition="color 0.3s"
                            />
                            <Text 
                              fontSize="lg" 
                              fontWeight="semibold"
                              color={isExpanded ? accentColor : textColor}
                              transition="color 0.3s"
                            >
                              {item.question}
                            </Text>
                          </Flex>
                          <AccordionIcon 
                            color={isExpanded ? accentColor : "gray.500"}
                            transition="all 0.3s"
                            transform={isExpanded ? "rotate(180deg)" : "none"}
                          />
                        </AccordionButton>
                        
                        <AccordionPanel pb={6} px={6}>
                          <Flex>
                            <Box 
                              w="4px" 
                              bg={accentColor} 
                              borderRadius="full" 
                              mr={4}
                              flexShrink={0}
                            />
                            <Text 
                              // eslint-disable-next-line react-hooks/rules-of-hooks
                              color={useColorModeValue("gray.700", "gray.300")}
                              lineHeight="1.7"
                              fontSize="md"
                            >
                              {item.answer}
                            </Text>
                          </Flex>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </MotionBox>
              ))}
            </Accordion>
          </Box>

          {/* CTA supplémentaire */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            textAlign="center"
            bg={useColorModeValue("white", "gray.800")}
            p={8}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.600")}
          >
            <Heading size="md" mb={3} color={textColor}>
              Une question spécifique ?
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.400")} mb={4}>
              Notre équipe technique se fera un plaisir de vous répondre sous 24h
            </Text>
            <Flex justify="center" gap={4} flexWrap="wrap">
              <Button 
                colorScheme="orange" 
                size="lg"
                leftIcon={<Icon as={FaQuestionCircle} />}
              >
                Poser une question
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<Icon as={FileText} />}
              >
                Voir nos références
              </Button>
            </Flex>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}