import cache from "../helpers/cache.js";
import { formatDate, getCurrentDate } from "../helpers/date.js";
import { capitalize } from "../helpers/str.js";
import { findVideosByQuery } from "../helpers/video.js";
import { search } from "../helpers/youtube.js";

export default class GetVideoHomiliaDiariaUseCase{
  constructor(getVideoHomiliaDiaria){
    this.getVideoHomiliaDiaria = getVideoHomiliaDiaria;
  }
  
  async execute(){
    let dayName = capitalize(getCurrentDate().toLocaleDateString('pt-br',{
      weekday:`long`
    }))
    const value =  await  this.getVideoHomiliaDiaria()
    let videos = findVideosByQuery(value.items,'Padre Mario Sartori')
    let  videoDiario  = videos.find((video) => video.title.includes(dayName))

     

    
      
    
    return videoDiario?.id ?? '';
    
  }
}
