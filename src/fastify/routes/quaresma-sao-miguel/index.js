import cache from "../../../helpers/cache.js";
import { formatDate,getCurrentDate } from "../../../helpers/date.js";
import {  getVideosQuaresmaSaoMiguelUseCase } from "../../../usecases/index.js";

const handler = async (fastify,opts) =>{
  fastify.get('/',async (req,reply) => {
  
    let videoCode = '';
    if(cache.get(`quaresma_sao_miguel_${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`)){
        videoCode = cache.get(`quaresma_sao_miguel_${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`)
      }else{
        videoCode =  await getVideosQuaresmaSaoMiguelUseCase.execute()
    }

    return  reply.send({code:videoCode})
  })
}

export default handler;