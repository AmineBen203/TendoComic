// utils/supabase.js
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !anon) {
  // Crash fast so you see it in logs rather than rendering stale data
  throw new Error(
    `Missing Supabase envs. Got url=${String(url)} anon=${anon ? 'present' : 'missing'}.` +
    ` Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set on your host (Production env) and redeploy with cache cleared.`
  )
}

export const supabase = createClient(url, anon)
