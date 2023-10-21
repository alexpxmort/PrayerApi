
import { formatDate,getCurrentDate } from "../../../helpers/date.js";
import { getVideoHomiliaDiariaUseCase } from "../../../usecases/index.js";

const handler = async (fastify,opts) =>{
  fastify.get('/',async (req,reply) => {
    let videoCode = '';
    
    videoCode = await getVideoHomiliaDiariaUseCase.execute()
    return  reply.send({idVideo:videoCode})
  })
}

export default handler;
