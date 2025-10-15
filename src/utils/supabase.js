// src/utils/supabase.js
import { createClient } from '@supabase/supabase-js'

const url  = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anon) {
  throw new Error(
    `Missing Vite envs: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.
     Add them to your .env/.env.local and to your host's env settings, then rebuild.`
  )
}

export const supabase = createClient(url, anon)
