// src/utils/poke-translator.ts

export const getTranslation = (entries: any[], lang: string = 'es') => {
  // 1. Buscamos el idioma solicitado (es)
  // 2. Si no existe, buscamos inglés (en) como respaldo
  // 3. Si no, devolvemos el primero que haya
  const record = entries.find(e => e.language.name === lang) 
                || entries.find(e => e.language.name === 'en')
                || entries[0];
  
  // Algunos recursos de la API usan 'name', otros 'flavor_text', otros 'name'
  return record?.name || record?.flavor_text || record?.text || "Sin traducción";
};

// Formateador para limpiar textos de la API (quitar saltos de línea raros)
export const formatText = (text: string) => text.replace(/\f/g, ' ').replace(/\n/g, ' ');