import cache from '../../../helpers/cache.js';
import { formatDate, getCurrentDate } from '../../../helpers/date.js';
import { getVideosNossaSenhoraUseCase } from '../../../usecases/index.js';

const handler = async (fastify, opts) => {
  fastify.get('/', async (req, reply) => {
    let videoCode = '';
    if (
      cache.get(`holy_mary_${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`)
    ) {
      videoCode = cache.get(
        `holy_mary_${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`
      );
    } else {
      videoCode = await getVideosNossaSenhoraUseCase.execute();
    }

    return reply.send({ code: videoCode });
  });
};

export default handler;
