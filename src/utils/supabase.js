import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zigiuudlksfggexvwepd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZ2l1dWRsa3NmZ2dleHZ3ZXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzA2NzUsImV4cCI6MjA2MDI0NjY3NX0.m2TYg18ZJNVqCdDCeCYF-ZvrZgpwwFlL5YSFV6cN7Ng'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
