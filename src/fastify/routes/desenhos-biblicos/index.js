import cache from '../../../helpers/cache.js';
import { formatDate, getCurrentDate } from '../../../helpers/date.js';
import { getVideosInfantisUseCase } from '../../../usecases/index.js';

const handler = async (fastify, opts) => {
  fastify.get('/', async (req, reply) => {
    let videos = [];
    if (
      cache.get(
        `videos_infantis${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`
      )
    ) {
      videos = JSON.parse(
        cache.get(
          `videos_infantis${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`
        )
      );
      return reply.send({ videos });
    }

    videos = await getVideosInfantisUseCase.execute();
    return reply.send({ videos });
  });
};

export default handler;
