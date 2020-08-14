import error from 'assets/audio/error.mp3';
import success from 'assets/audio/correct.mp3';

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
export const audioSuccess = new Audio(success);
export const audioErr = new Audio(error);
audioSuccess.volume = 0.3;
audioErr.volume = 0.3;
