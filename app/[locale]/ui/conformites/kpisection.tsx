import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaClipboardList, FaClock } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionText = motion(Text);

interface CounterBoxProps {
  value: number;
  label: string;
  suffix?: string;
  isPercentage?: boolean;
  icon: React.ReactNode;
  delay: number;
  gradient: string;
}

export default function KPISection() {
  const [counters, setCounters] = useState({ audits: 0, validated: 0, delay: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = { audits: 500, validated: 98, delay: 24 };
  const duration = 2000;

  // Nouveaux gradients utilisant votre palette #F78719 et #45C5EB
  const gradients = [
    'linear-gradient(135deg, #F78719 0%, #FFA94D 100%)', // Orange
    'linear-gradient(135deg, #45C5EB 0%, #7BD5F5 100%)', // Bleu
    'linear-gradient(135deg, #F78719 0%, #45C5EB 100%)', // Mix orange-bleu
  ];

  // Nouvelle couleur de carte plus claire
  const cardBg = useColorModeValue(
    'linear-gradient(135deg, #FFF9F5 0%, #F0F9FF 100%)', // Dégradé clair orange-bleu
    'linear-gradient(135deg, #2D1A0F 0%, #0A2A3A 100%)' // Dégradé sombre
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounters();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounters = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCounters({
        audits: Math.floor(targetValues.audits * easeOutQuart),
        validated: Math.floor(targetValues.validated * easeOutQuart),
        delay: Math.floor(targetValues.delay * easeOutQuart),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const CounterBox = ({ value, label, suffix = "", isPercentage = false, icon, delay, gradient }: CounterBoxProps) => {
    const controls = useAnimation();

    useEffect(() => {
      if (hasAnimated) {
        controls.start({
          scale: [0.8, 1.05, 1],
          opacity: [0, 1],
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            delay: delay * 0.2 
          },
        });
      }
    }, [hasAnimated, controls, delay]);

    return (
      <MotionBox
        animate={controls}
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        textAlign="center"
        p={10} // Augmenté de p={6} à p={10}
        bg={cardBg}
        borderRadius="3xl" // Arrondi plus prononcé
        boxShadow="0 20px 50px rgba(0, 0, 0, 0.15)" // Ombre plus importante
        position="relative"
        overflow="hidden"
        whileHover={{
          scale: 1.05, // Effet hover plus prononcé
          y: -8,
          boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 }
        }}
        transition={{ duration: 0.5 }}
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border="1px solid"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        minH="350px" // Hauteur minimale augmentée
      >
        {/* Background gradient animé plus visible */}
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg={gradient}
          opacity={0.1} // Augmenté l'opacité
          animate={{
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          zIndex={0}
        />

        {/* Bordure colorée en haut */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="2px"
          bg={gradient}
          zIndex={1}
        />

        {/* Icône avec container circulaire agrandi */}
        <MotionBox
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w={20} // Augmenté de w={12} à w={20}
          h={20} // Augmenté de h={12} à h={20}
          borderRadius="full"
          bg={gradient}
          color="white"
          fontSize="2xl" // Taille d'icône augmentée
          mb={6}
          zIndex={1}
          position="relative"
          animate={{ 
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            rotate: 360,
            transition: { duration: 0.8 }
          }}
          mx="auto"
          boxShadow="0 8px 25px rgba(0,0,0,0.2)"
        >
          {icon}
        </MotionBox>

        {/* Valeur animée avec taille augmentée */}
        <MotionText
          fontSize={useBreakpointValue({ base: "4xl", md: "5xl", lg: "6xl" })} // Tailles augmentées
          fontWeight="black"
          bg={gradient}
          backgroundClip="text"
          css={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          lineHeight="1"
          mb={4} // Marge augmentée
          zIndex={1}
          position="relative"
          key={value}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay * 0.2 + 0.3 }}
          textShadow="0 2px 10px rgba(0,0,0,0.1)"
        >
          {isPercentage ? value : value.toLocaleString()}
          {isPercentage ? "%" : suffix}
        </MotionText>

        {/* Label avec taille augmentée */}
        <Text 
          color={useColorModeValue('gray.700', 'gray.300')} 
          fontSize="xl" // Augmenté de "lg" à "xl"
          fontWeight="bold" // Graisse augmentée
          zIndex={1}
          position="relative"
          lineHeight="1.3"
        >
          {label}
        </Text>

        {/* Effet de lumière subtil */}
        <MotionBox
          position="absolute"
          top="-30%"
          left="-30%"
          w="160%"
          h="160%"
          bg="radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          zIndex={0}
        />
      </MotionBox>
    );
  };

  return (
    <MotionBox
      as="section"
      py={16} // Espacement vertical augmenté
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      bg={useColorModeValue('gray.50', 'gray.900')} // Fond de section
    >
      <Container maxW="container.xl"> 
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={12} // Marge augmentée
        >
          <Heading
            as="h2"
            id="kpi"
            color={useColorModeValue('gray.800', 'white')}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" })} // Tailles augmentées
            fontWeight="black"
            letterSpacing="tight"
            mb={4}
          >
            Chiffres Clés
          </Heading>
          
          <Text 
            fontSize="xl" // Taille augmentée
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
            fontWeight="medium"
          >
            Notre expertise en chiffres : performance, qualité et rapidité
          </Text>
        </MotionBox>

        <SimpleGrid columns={[1, 2, 3]} spacing={8} minH="400px"> 
          <CounterBox 
            value={counters.audits} 
            label="Audits Réalisés" 
            suffix="+" 
            icon={<FaClipboardList />} 
            delay={0}
            gradient={gradients[0]}
          />
          <CounterBox 
            value={counters.validated} 
            label="Validés du Premier Coup" 
            isPercentage 
            icon={<CheckCircleIcon />} 
            delay={1}
            gradient={gradients[1]}
          />
          <CounterBox 
            value={counters.delay} 
            label="Délai Moyen de Retour" 
            suffix="h" 
            icon={<FaClock />} 
            delay={2}
            gradient={gradients[2]}
          />
        </SimpleGrid>

        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: hasAnimated ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          color={useColorModeValue('gray.500', 'gray.400')} 
          textAlign="center" 
          mt={8} // Marge augmentée
          fontSize="md" // Taille augmentée
          fontStyle="italic"
        >
          * Sur dossiers complets conformes au cahier des charges
        </MotionText>
      </Container>
    </MotionBox>
  );
}