import { mapTo } from 'x-utils-rx';
import { dayVideosQuaresmaSaoMiguel } from '../constants/videos/quaresma-sao-miguel.js';
import cache from '../helpers/cache.js';
import { getCurrentDate, formatDate } from '../helpers/date.js';
import repo from '../helpers/firebase/repository.js';
import { capitalize } from '../helpers/str.js';
import { getPrayerWord } from '../helpers/video.js';
import { search } from '../helpers/youtube.js';
import GetVideoHomiliaDiariaUseCase from './getVideoHomiliaDiariaUseCase.js';
import GetVideoReflexaoUseCase from './getVideoReflexaoUseCase.js';
import GetVideosInfantisUseCase from './getVideosInfantisUseCase.js';
import GetVideosNossaSenhoraUseCase from './getVideosNossaSenhoraUseCase.js';
import GetVideosQuaresmaSaoMiguelUseCase from './getVideosQuaresmaSaoMiguel.js';
import GetVideosTresMesesSaoJoseUseCase from './getVideosTresMesesSaoJoseUseCase.js';
import { dayVideosTresMesesSaoJose } from '../constants/videos/tres-meses-sao-jose.js';

const getVideosNossaSenhora = async () => {
  const currentDate = getCurrentDate();

  let result = await repo.find(
    currentDate.getDate(),
    currentDate.getMonth() + 1
  );
  result = mapTo(result.docs[0].data(), undefined, ['code'], 'keep');
  const code = result?.code ?? '';

  cache.set(
    `holy_mary_${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`,
    code
  );

  return Promise.resolve(code);
};

const getVideosQuaresmaSaoMiguel = async () => {
  const currentDate = getCurrentDate();
  const day = dayVideosQuaresmaSaoMiguel.find(
    (dayVideoQuaresmaSaoMiguel) =>
      dayVideoQuaresmaSaoMiguel.day === currentDate.getDate() &&
      dayVideoQuaresmaSaoMiguel.month === currentDate.getMonth() + 1
  );
  const code = day?.code ?? '';

  const objPray = { code, start: day?.start, final: day?.final };

  cache.set(
    `quaresma_sao_miguel_${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`,
    JSON.stringify(objPray)
  );

  return Promise.resolve(objPray);
};

const getVideosTresMesesSaoJose = async () => {
  const currentDate = getCurrentDate();
  const day = dayVideosTresMesesSaoJose.find(
    (dayVideoTresMesesSaoJose) =>
      dayVideoTresMesesSaoJose.day === currentDate.getDate() &&
      dayVideoTresMesesSaoJose.month === currentDate.getMonth() + 1
  );
  const codeAttr = day?.code ?? '';

  const objPray = { code: codeAttr };

  cache.set(
    `sao_jose_tres_meses${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`,
    JSON.stringify(objPray)
  );

  return Promise.resolve(objPray);
};

const getVideoHomiliaDiaria = async () => {
  let dayName = capitalize(
    getCurrentDate().toLocaleDateString('pt-br', {
      weekday: `long`
    })
  );
  const padreMario = 'homilia diaria padre mario' + '|' + dayName;
  const value = await search(`${padreMario}`, false, 2000);

  return Promise.resolve(value);
};

const getVideoReflexao = async () => {
  const theme = getPrayerWord();
  const result = await search(theme);

  return {
    idVideo:
      result.items?.[Math.floor(Math.random() * result?.items.length)]?.id,
    theme: `${theme}`
  };
};

const getVideosInfantis = async () => {
  const result = await search('patrulha canina pt br');

  return result;
};
export const getVideosNossaSenhoraUseCase = new GetVideosNossaSenhoraUseCase(
  getVideosNossaSenhora
);
export const getVideoHomiliaDiariaUseCase = new GetVideoHomiliaDiariaUseCase(
  getVideoHomiliaDiaria
);
export const getVideoReflexaoUseCase = new GetVideoReflexaoUseCase(
  getVideoReflexao
);
export const getVideosInfantisUseCase = new GetVideosInfantisUseCase(
  getVideosInfantis
);
export const getVideosQuaresmaSaoMiguelUseCase =
  new GetVideosQuaresmaSaoMiguelUseCase(getVideosQuaresmaSaoMiguel);
export const getVideosTresMesesSaoJoseUseCase =
  new GetVideosTresMesesSaoJoseUseCase(getVideosTresMesesSaoJose);
