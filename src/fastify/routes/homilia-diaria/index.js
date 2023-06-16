import cache from "../../../helpers/cache.js";
import { formatDate,getCurrentDate } from "../../../helpers/date.js";
import { getVideoHomiliaDiariaUseCase } from "../../../usecases/index.js";

const handler = async (fastify,opts) =>{
  fastify.get('/',async (req,reply) => {
    let videoCode = '';
    if(cache.get(`homilia_diaria${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`)){
        videoCode = cache.get(`homilia_diaria${formatDate(getCurrentDate(),'dd-mm-yyyy','-')}`)
        return reply.send({idVideo:videoCode})
    }

    videoCode = await getVideoHomiliaDiariaUseCase.execute()
    return  reply.send({idVideo:videoCode})
  })
}

export default handler;