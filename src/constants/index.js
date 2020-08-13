export default [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

export const chekMarks = new Array(6).fill('check-mark');
export const getRandom = () => Math.floor(Math.random() * 6);
export const maxScore = 5;
export const namePlaceholder = '****';
