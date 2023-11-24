
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://khmghzwplawkxgqxshej.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtobWdoendwbGF3a3hncXhzaGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5NDEwNTAsImV4cCI6MjAwMjUxNzA1MH0.iwMNUfgZSxKEI6v5e_QSFWsCLobs49JR1E8YtbrYuow'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;


// the whole code in this page we will find them in > API docs > intoduction > 
// copy + paste
// Just we need change the key, and we will find it in > sitting > API > Project API keys
