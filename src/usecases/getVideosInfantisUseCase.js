import cache from "../helpers/cache.js";
import { formatDate, getCurrentDate } from "../helpers/date.js";

export default class GetVideosInfantisUseCase{
  constructor(getVideosInfantis){
    this.getVideosInfantis = getVideosInfantis;
  }
  
  async execute(){
    const videos =  await  this.getVideosInfantis()

    const _videos =  videos.items.slice(0,8).map((video) => ({
      idVideo: video.id,
      title:video.title,
      channel:video.channelTitle
    }))

    cache.set(`videos_infantis${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`,JSON.stringify(_videos))

    return _videos
  }
}