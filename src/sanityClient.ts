/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'e5s6wnrw', // Твій ID
  dataset: 'production',
  useCdn: true, // true для швидкого завантаження (кеш), false для миттєвого оновлення даних
  apiVersion: '2024-02-28',
});

const builder = createImageUrlBuilder(client);

// Функція для перетворення об'єктів Sanity Image на посилання
export const urlFor = (source: any) => {
  return builder.image(source);
};