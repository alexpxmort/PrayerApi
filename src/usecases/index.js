import { dayVideosNossaSenhora } from "../constants/videos/nove-meses-nossa-senhora-videos.js";
import cache from "../helpers/cache.js";
import { getCurrentDate,formatDate } from "../helpers/date.js";
import GetVideosNossaSenhoraUseCase from "./getVideosNossaSenhoraUseCase.js";

const  getVideosNossaSenhora = async () => {
        
  const currentDate = getCurrentDate()
  const day = dayVideosNossaSenhora.find((dayVideoNossaSenhora) => dayVideoNossaSenhora.day === currentDate.getDate() && dayVideoNossaSenhora.month === currentDate.getMonth()+1)
  const code = day?.code ?? ''

  cache.set(`holy_mary_${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`,code)


  return Promise.resolve(code)
}

export const getVideosNossaSenhoraUseCase = new GetVideosNossaSenhoraUseCase(getVideosNossaSenhora)