import error from 'assets/audio/error.mp3';
import correct from 'assets/audio/correct.mp3';
import success from 'assets/audio/success.mp3';
import birdsData from '@constants/birds-data';

export default [
  'Разминка',
  'Экзотические',
  'Северные',
  'Арктические',
  'Пустынные',
  'Средиземные',
];

const [{ length }] = birdsData;
export const chekMarks = new Array(length).fill('check-mark');
export const getRandom = () => Math.floor(Math.random() * length);
export const maxScore = 5;
export const maxGameScore = 30;
export const namePlaceholder = '*****';
export const audioCorrect = new Audio(correct);
export const audioErr = new Audio(error);
export const audioSuccess = new Audio(success);

export const exotic = 'exotic';
export const arctic = 'arctic';
export const desert = 'desert';
export const arcticIdx = 1;
export const desertIdx = 3;

audioCorrect.volume = 0.3;
audioErr.volume = 0.3;
audioSuccess.volume = 0.5;
