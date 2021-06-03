import isMobile from "ismobilejs";
import { useStorageMobile, UseMobileStorageRes } from "./useStorageMobile";
import { useSecureStorageWeb, UseSecureStorageRes } from "./useSecureStorageWeb";

type UseSecureStorageType = UseSecureStorageRes |  UseMobileStorageRes;

export type { UseSecureStorageType }
export const useStorage = isMobile(window.navigator).any
  ? useStorageMobile : useSecureStorageWeb
 