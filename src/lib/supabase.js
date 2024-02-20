import { createClient } from '@supabase/supabase-js';

const SUPERBASE_URL = process.env.NEXT_PUBLIC_SUPERBASE_URL;
const SUPERBASE_API = process.env.NEXT_PUBLIC_SUPERBASE_API;

export const supabase = createClient(SUPERBASE_URL, SUPERBASE_API);
