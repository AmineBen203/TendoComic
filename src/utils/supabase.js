import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vaswaejyyniocbvzjdek.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhc3dhZWp5eW5pb2NidnpqZGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyNDkzMjAsImV4cCI6MjA3MjgyNTMyMH0.GhBklC1WYRpIQnOdMuJfEipc3CB918LspU1-NSfnXvo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
