import { invalidate } from '$app/navigation'
import { PUBLIC_SUPABASE_PROJECT_URL } from '$env/static/public'
import { PRIVATE_SUPABASE_SECRET_KEY } from '$env/static/private'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_PROJECT_URL,
    supabaseKey: PRIVATE_SUPABASE_SECRET_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}