import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ynwupyctgnmrgpqfpfpf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlud3VweWN0Z25tcmdwcWZwZnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNTU2OTQsImV4cCI6MjA3MTYzMTY5NH0.X08CTSMXf8oH04h-l05lvTH3i5zVuYrRYmq62GTo368'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)