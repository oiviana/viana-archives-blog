import { createClient } from 'next-sanity'

export const sanity = createClient({
  projectId: 'juuo6rlg', 
  dataset: 'production', 
  apiVersion: '2025-08-21', 
  useCdn: false, 
})