import { createClient } from '@supabase/supabase-js';

const isServer = typeof window === 'undefined';

function createSupabase() {
  if (isServer) {
    // Server environment will use service key
    return createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '');
  }
  // Browser environment will use anon key
  return createClient(window.ENV.SUPABASE_URL, window.ENV.SUPABASE_KEY);
}

export const supabase = createSupabase();
