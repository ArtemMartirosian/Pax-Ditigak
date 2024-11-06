import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ru", "am"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/services": "/services",
  "/portfolio": "/portfolio",
  "/our-team": "/our-team",
  "/contacts": "/contacts",
};

export const defaultLocale = locales[0];

export type LocaleType = (typeof locales)[number];

export type PathnamesType = keyof typeof pathnames;

export const {
  Link,
  useRouter,
  usePathname,
  getPathname,
  permanentRedirect,
  redirect,
} = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
