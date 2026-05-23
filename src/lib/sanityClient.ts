import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'juuo6rlg', 
  dataset: 'production', 
  apiVersion: '2025-08-21', 
  useCdn: false, 
})
