import { z } from "zod";

// Define expected environment variables
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.string().regex(/^\d+$/, "PORT must be a number").default("4000"),
  MONGO_URI: z
    .string()
    .url("MONGO_URI must be a valid MongoDB connection string"),
});

// Validate process.env
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment configuration.\n");

  const formattedErrors = parsed.error.issues
    .map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
    .join("\n");

  console.error(
    "Missing or invalid environment variables:\n" + formattedErrors
  );
  console.error("\n💡 Check your .env file and try again.");
  process.exit(1);
}

export const env = parsed.data;
