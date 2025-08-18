import { createClient } from "@supabase/supabase-js";

// შევაიმპორტე _lib/data-service.js-ში

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
