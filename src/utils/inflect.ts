import inflection from 'inflection';

export const dbKey = (str: string) => inflection.underscore(str);
export const bfKey = (str: string) => inflection.camelize(str, true);
export const scoreKey = (str: string) => `score${inflection.capitalize(str)}`;
