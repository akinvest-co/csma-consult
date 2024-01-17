import { usePathname } from "next/navigation"
import { Routes } from "../config/routes/routes"

export function useActive() {
  const pathname = usePathname()
  const isActive = (path: keyof typeof Routes) => {
    return pathname === path
  }

  return { isActive }
}
