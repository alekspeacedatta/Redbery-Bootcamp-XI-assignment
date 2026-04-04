export const ENV = {
  BASE_URL: import.meta.env.VITE_BASE_URL as string,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const;

if (!ENV.BASE_URL) {
  throw new Error("Missing VITE_BASE_URL in .env file");
}