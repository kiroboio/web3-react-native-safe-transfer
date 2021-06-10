import isMobile from "ismobilejs";
import { useStorageMobile } from "./useStorageMobile";
import { useSecureStorageWeb, } from "./useSecureStorageWeb";
/**
 * ## web
 * {@link useSecureStorageWeb}
 *
 * ## mobile
 * {@link useStorageMobile}
 */
export var useStorage = isMobile(window.navigator).any
    ? useStorageMobile
    : useSecureStorageWeb;
