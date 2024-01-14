const currentYear = new Date().getFullYear();
const currentMoth = new Date().getMonth();

const findVideosByQuery = (
  arr,
  query = 'Padre Mario Sartori',
  title = 'Homilia Diária',
  dayName = ``
) => {
  return arr.filter(
    (video) =>
      new Date(video.date).getFullYear() === currentYear &&
      new Date(video.date).getMonth() === currentMoth &&
      video.channelTitle?.includes(query) &&
      video.title.includes(title) &&
      video.title.includes(dayName)
  );
};

const THEMES_PRAYERS = [
  `amor pregacao`,
  `perdao pregacao`,
  `vida financeira pregacao`,
  `humildade pregacao`,
  `senhorio de jesus pregacao`,
  'vontade de Deus pregação',
  'Pecado da inveja pregação',
  'Virgem Maria pregação',
  'São José pregação',
  'Familia pregacao',
  'Conversao pregacao',
  'Orar e vigiar pregcao',
  'Adoração pregacao',
  'Autoestima  pregacao',
  'Curando as feridas dos relacionamentos mal resolvidos pregacao',
  'Deus tem um propósito em minha vida pregacao',
  'Tudo é dom de Deus  pregacao',
  'Confiar em Deus pregacao'
];

const getPrayerWord = () => {
  const themes = [...THEMES_PRAYERS];
  return themes[Math.floor(Math.random() * themes.length)];
};
export { findVideosByQuery, getPrayerWord };
