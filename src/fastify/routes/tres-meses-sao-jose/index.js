import cache from "../../../helpers/cache.js";
import { formatDate,getCurrentDate } from "../../../helpers/date.js";
import { getVideosTresMesesSaoJoseUseCase } from "../../../usecases/index.js";

const handler = async (fastify,opts) =>{
  fastify.get('/',async (req,reply) => {
  
    let videoCode = '';
    if(cache.get(`sao_jose_tres_meses${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`)){
        videoCode = cache.get(`sao_jose_tres_meses${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`)
      }else{
        videoCode =  await getVideosTresMesesSaoJoseUseCase.execute()
    }



    return  reply.send(videoCode)
  })
}

export default handler;