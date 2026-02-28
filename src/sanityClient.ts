import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'e5s6wnrw', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-02-28',
});

const builder = createImageUrlBuilder(client);

// Використовуємо вбудований тип Record для об'єктів Sanity
export const urlFor = (source: Record<string, unknown> | null | undefined) => {
  if (!source) return { url: () => '' }; // Захист від пустих даних
  return builder.image(source);
};