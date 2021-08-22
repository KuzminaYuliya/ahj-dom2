/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */

import Table from './Table';

const filmList = [
  {
    'id': 26,
    'title': 'Побег из Шоушенка',
    'imdb': 9.30,
    'year': 1994,
  },
  {
    'id': 25,
    'title': 'Крёстный отец',
    'imdb': 9.20,
    'year': 1972,
  },
  {
    'id': 27,
    'title': 'Крёстный отец 2',
    'imdb': 9.00,
    'year': 1974,
  },
  {
    'id': 1047,
    'title': 'Тёмный рыцарь',
    'imdb': 9.00,
    'year': 2008,
  },
  {
    'id': 223,
    'title': 'Криминальное чтиво',
    'imdb': 8.90,
    'year': 1994,
  },
];
const table = new Table(filmList);
table.bindToDom(document.querySelector('.container'));
table.init();

const param = ['id', 'id', 'title', 'title', 'year', 'year', 'imdb', 'imdb'];
let index = 0;

setInterval(() => {
  table.getSort(param[index]);
  index += 1;
  if (index === param.length) index = 0;
}, 2000);
