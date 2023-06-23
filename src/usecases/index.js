import { dayVideosNossaSenhora } from "../constants/videos/nove-meses-nossa-senhora-videos.js";
import cache from "../helpers/cache.js";
import { getCurrentDate,formatDate } from "../helpers/date.js";
import { capitalize } from "../helpers/str.js";
import { getPrayerWord } from "../helpers/video.js";
import { search } from "../helpers/youtube.js";
import GetVideoHomiliaDiariaUseCase from "./getVideoHomiliaDiariaUseCase.js";
import GetVideoReflexaoUseCase from "./getVideoReflexaoUseCase.js";
import GetVideosInfantisUseCase from "./getVideosInfantisUseCase.js";
import GetVideosNossaSenhoraUseCase from "./getVideosNossaSenhoraUseCase.js";

const  getVideosNossaSenhora = async () => {   
  const currentDate = getCurrentDate()
  const day = dayVideosNossaSenhora.find((dayVideoNossaSenhora) => dayVideoNossaSenhora.day === currentDate.getDate() && dayVideoNossaSenhora.month === currentDate.getMonth()+1)
  const code = day?.code ?? ''

  cache.set(`holy_mary_${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`,code)

  return Promise.resolve(code)
}

const getVideoHomiliaDiaria = async () =>{
  let dayName = capitalize(getCurrentDate().toLocaleDateString('pt-br',{
      weekday:`long`
  }))
  const padreMario = 'homilia diaria padre mario' + '|' + dayName
  const value = await search(`${padreMario}`,false,5)

 return Promise.resolve(value)
}

const getVideoReflexao = async () =>{
  const theme = getPrayerWord()
  const result = await search(theme)

  return {idVideo:result.items?.[Math.floor(Math.random() * result?.items.length)]?.id,theme:`${theme}`}
}



const getVideosInfantis = async () =>{
  const result = await search('patrulha caninaa')

  return result
}
export const getVideosNossaSenhoraUseCase = new GetVideosNossaSenhoraUseCase(getVideosNossaSenhora)
export const getVideoHomiliaDiariaUseCase = new GetVideoHomiliaDiariaUseCase(getVideoHomiliaDiaria)
export const getVideoReflexaoUseCase = new GetVideoReflexaoUseCase(getVideoReflexao)
export const getVideosInfantisUseCase = new GetVideosInfantisUseCase(getVideosInfantis)
