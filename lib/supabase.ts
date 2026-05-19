import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://lslxkdnisglzbjzykinq.supabase.co/rest/v1/!
const supabaseKey = process.env.sb_publishable_bbsZx3PvGKR-hL1jCJgWTQ_2CxU29-y!

export const supabase = createClient(supabaseUrl, supabaseKey)