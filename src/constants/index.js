import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const links = [
  'tel:375-44-778-47-13',
  'mailto:yan.7feb@gmail.com',
  'https://www.linkedin.com/in/%D1%8F%D0%BD-%D0%B0%D0%BD%D0%B4%D1%80%D1%8E%D1%88%D0%BA%D0%B8%D0%BD-588045197/',
  'https://github.com/Yan-Black',
];
export const icons = [faMobileAlt, faEnvelope, faLinkedin, faGithub];
export const tooltips = ['A1:375447784713', 'yan.7feb@gmail.com', 'linkedin', 'github'];
export const skills = ['HTML5', 'CSS3', 'SCSS', 'JS ES6', 'React/Redux', 'TypeScript', 'Git', 'Webpack'];
export const aboutMe = `I'm 27 years old, for today self-studying front-end developer.
I was started my education in IT-sphere in april 2019 with cumputer science
course provided by "SkillUp" and continued with course "Java-script in web-programming"
provided by "Центр Обучающих Технологий" in september till november 2019. Further i was participating in
Rolling Scopes School front-end development course. By the study way i was always at the top 50 students of the course.`;
export const projects = [
  {
    category: {
      categoryName: 'Vanilla JS',
      prjcts: [
        {
          name: 'Virtual Keyboard',
          id: 'virtualKeyboard',
          github: 'https://github.com/Yan-Black/Virtual-Keyboard',
          project: 'https://yan-black.github.io/Virtual-Keyboard/',
        },
        {
          id: 'englishForKids',
          name: 'English for Kids',
          github: 'https://github.com/Yan-Black/english-for-kids',
          project: 'https://yan-black-english-for-kids.netlify.app/',
        },
        {
          id: 'movieSearch',
          name: 'Movie Search',
          github: 'https://github.com/Yan-Black/MovieSearch',
          project: 'https://yan-black-movie-search.netlify.app/',
        },
      ],
    },
  },
  {
    category: {
      categoryName: 'React JS',
      prjcts: [
        {
          id: 'fancyWeather',
          name: 'Fancy Weather',
          github: 'https://github.com/Yan-Black/fancy-weather',
          project: 'https://yan-black-fancy-weather.netlify.app/',
        },
      ],
    },
  },
  {
    category: {
      categoryName: 'React/Redux/TypeScript',
      prjcts: [
        {
          id: 'rsLang',
          name: 'RS Lang',
          github: 'https://github.com/Yan-Black/RS-Lang',
          project: 'https://rslang-team38-yan-black.netlify.app/',
        },
      ],
    },
  },
];

export const ruDescriptions = {
  virtualKeyboard: 'keyboard',
  englishForKids: 'kids',
  movieSearch: 'movie',
  fancyWeather: 'weather',
  rsLang: 'lang',
};

export const enDescriptions = {
  virtualKeyboard: {
    description: `Created with JS/HTML/CSS.
   It completely repeats the functionality of the physical keyboard.`,
    features: [
      'Language changing',
      'Saving choosed language in localStorage',
      'Case changing',
      'Correct work of shift and Caps Lock keys',
      'Spec symbols changing',
      'Keys animation',
    ],
  },
  englishForKids: {
    description: `Created with JS/HTML/CSS.
    This is active and colourfull application for kids and begginers.
    Despite the fact that the application has several pages
    it was implemented as Single Page Application.`,
    features: [
      'Game mode',
      'Words pronunciation',
      'Flipping cards with word translate',
      'Long-term statistic stored in localStorage',
      'Page with difficult words',
      'Responsibility',
    ],
  },
  movieSearch: {
    description: `Created with JS/HTML/CSS.
    Application for searching movies which binded with IMDB API database.
    Works asynchronously.`,
    features: [
      'Search input',
      'Dynamicly ranged slider (used library swiper.js)',
      'Catching errors',
      'Responsibility',
    ],
  },
  fancyWeather: {
    description: `Created with ReactJS/CSS. Project
    was bootstrapped with "create-react-app".
    Functional components and hooks approach was used.
    This is application which gets current weather information
    and forecast for 3 - 5 days, for specific location.
    Works with different API sources.`,
    features: [
      'Search input',
      'Defining user location',
      'Getting weather info by users requests, both physycally and voice',
      'Speech synthesis for current weather',
      'Location map (used mapbox-api)',
      'Three languages localization',
      'Custom loaders',
      'Catching errors',
      'Responsibility',
    ],
  },
  rsLang: {
    description: `Created with React/Redux/TypeScript/SCSS.
    This is a team project, that was the final task of the Rolling Scopes School course.
    Project was bootstrapped with custom setup.
    Functional components and hooks approach was used.
    This is application for learning english language, based on Anki interval repeating programm.
    Also, it has saveral different mini-games, intended to improve user english skills.
    As a siginificant part of the apllication i can admit that it has a possibility
    to work with unique users and save them progress on the backend.
    In this project i was implement: Authorization logic, both Login and Authorization forms, main page functionality,
    education logic, requests to the backend, EnglishPuzzle game.`,
    features: [
      'Athorization',
      'App settings',
      'Training card settings',
      'Dynamic vocabulary',
      'Education modes',
      'Mini games',
      'Catching errors',
      'Responsibility',
    ],
  },
};

