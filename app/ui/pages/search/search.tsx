"use client"

import { Box, Input } from "@chakra-ui/react"
import { Search } from "tabler-icons-react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export default function SearchInput({
  placeholder,
  width,
}: {
  placeholder: string
  width: string
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log("Typing", term)

    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <Box>
      <Input
        placeholder={placeholder}
        bgColor="white"
        borderRadius="xl"
        focusBorderColor="#1799cf"
        p="6"
        width={width}
        pl="12"
        zIndex="2"
        style={{ borderLeft: "none" }}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Box
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left="4"
        pointerEvents="none"
        zIndex="3"
      >
        <Search size={22} color="#A0AEC0" />
      </Box>
    </Box>
  )
}
