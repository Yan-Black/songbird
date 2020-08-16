import error from 'assets/audio/error.mp3';
import correct from 'assets/audio/correct.mp3';
import success from 'assets/audio/success.mp3';
import birdsData from '@constants/birds-data';

export default [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

const [{ length }] = birdsData;
export const chekMarks = new Array(length).fill('check-mark');
export const getRandom = () => Math.floor(Math.random() * length);
export const maxScore = 5;
export const maxGameScore = 30;
export const namePlaceholder = '****';
export const audioCorrect = new Audio(correct);
export const audioErr = new Audio(error);
export const audioSuccess = new Audio(success);

audioCorrect.volume = 0.3;
audioErr.volume = 0.3;
audioSuccess.volume = 0.5;
