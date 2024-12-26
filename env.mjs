import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().min(1).optional(),
    GOOGLE_CLIENT_ID: z.string().min(1).optional(),
    GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),
    DATABASE_URL: z.string().min(1).optional(),
    STRIPE_API_KEY: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1).optional(),
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET || "default-secret",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "default-client-id",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "default-client-secret",
    DATABASE_URL: process.env.DATABASE_URL || "sqlite::memory:",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    STRIPE_API_KEY: process.env.STRIPE_API_KEY || "default-stripe-key",
  },
});
