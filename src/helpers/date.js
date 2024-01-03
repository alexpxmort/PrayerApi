const DAYS_WEEK = [
  {
    name: 'Segunda-feira',
    number: 1
  },
  {
    name: 'Terça-feira',
    number: 2
  },
  {
    name: 'Quarta-feira',
    number: 3
  },
  {
    name: 'Quinta-feira',
    number: 4
  },
  {
    name: 'Sexta-feira',
    number: 5
  },
  {
    name: 'Sábado',
    number: 6
  },
  {
    name: 'Domingo',
    number: 0
  }
];

const getCurrentDate = () => {
  return new Date();
};

const getDaysWeek = () => {
  return DAYS_WEEK;
};

const isBissexto = (ano = new Date().getFullYear()) => {
  return !(ano % 4 || (!(ano % 100) && ano % 400));
};

function formatDate(date, format, separator = '-') {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  switch (format) {
    case 'yyyy-mm-dd':
      return `${year}${separator}${month
        .toString()
        .padStart(2, '0')}${separator}${day
        .toString()
        .padStart(2, '0')}`.trim();
    case 'dd-mm-yyyy':
      return `${day.toString().padStart(2, '0')}${separator}${month
        .toString()
        .padStart(2, '0')}${separator}${year}`.trim();
  }
}

export { getCurrentDate, getDaysWeek, isBissexto, formatDate };
