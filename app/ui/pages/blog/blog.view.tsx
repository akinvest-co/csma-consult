"use client"

import { Articles } from "@app/app/types/blog.types"
import { Link } from "@chakra-ui/next-js"
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"

export default function BlogView({ article }: { article: Articles }) {
  const formatDate = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Box
      key={article.id}
      // boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px,rgb(145 158 171 / 24%) 0px 16px 32px -4px"
    >
      <Image
        src={article.attributes.image.data.attributes.url}
        width={article.attributes.image.data.attributes.width}
        height={article.attributes.image.data.attributes.height}
        alt={article.attributes.title}
        priority
        style={{ borderRadius: "5px", overflow: "hidden" }}
      />
      <VStack spacing="6" mt="4" align="start">
        <HStack alignItems="center" justifyContent="space-between" w="100%">
          <Text
            fontSize="small"
            bgColor="#e1f2fd"
            py="1"
            px="2"
            borderRadius="md"
            color="#0b6999"
          >
            {article.attributes.blog_category.data.attributes.name}
          </Text>

          <Text fontSize="small" color="hsl(0, 0%, 50%)">
            {formatDate.format(new Date(article.attributes.date))}
          </Text>
        </HStack>
        <Link href={`article/${article.attributes.title}`}>
          <Heading fontSize="lg" lineHeight="short" noOfLines={2}>
            {article.attributes.title}
          </Heading>
        </Link>
      </VStack>
    </Box>
  )
}
