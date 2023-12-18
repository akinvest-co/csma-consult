import { useRouter } from "next/router";
import { Routes } from "../config/routes/routes";

export function useActive() {
  const { pathname } = useRouter();
  const isActive = (path: keyof typeof Routes) => {
    return pathname === path;
  };

  return { isActive };
}
