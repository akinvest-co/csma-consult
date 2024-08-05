"use client"

import { Articles } from "@app/app/types/blog.types"
import { formatDate } from "@app/app/utils/utils"
import { Link } from "@chakra-ui/next-js"
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"

export default function BlogView({ article }: { article: Articles }) {
  return (
    <Box key={article.id}>
      <Image
        src={article.attributes.image.data[0].attributes.url}
        width={article.attributes.image.data[0].attributes.width}
        height={article.attributes.image.data[0].attributes.height}
        alt={article.attributes.title}
        priority
        style={{ borderRadius: "5px", overflow: "hidden" }}
      />
      <VStack spacing="6" mt="4" align="start">
        <HStack alignItems="center" justifyContent="space-between" w="100%">
          <Link
            href={`/blog/category/${article.attributes.blog_categories.data[0]?.attributes.slug}`}
            _hover={{ textDecor: "none" }}
            fontSize="small"
            bgColor="#e1f2fd"
            py="1"
            px="2"
            borderRadius="md"
            color="#0b6999"
          >
            {article.attributes.blog_categories.data[0]?.attributes.name}
          </Link>

          <Text fontSize="small" color="hsl(0, 0%, 50%)">
            {formatDate.format(new Date(article.attributes.date))}
          </Text>
        </HStack>
        <Link
          href={`/blog/${article.attributes.slug}`}
          _hover={{ textDecor: "none" }}
        >
          <Heading fontSize="lg" lineHeight="short" noOfLines={2}>
            {article.attributes.title}
          </Heading>
        </Link>
      </VStack>
    </Box>
  )
}
