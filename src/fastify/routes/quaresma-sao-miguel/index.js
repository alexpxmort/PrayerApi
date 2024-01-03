import cache from '../../../helpers/cache.js';
import { formatDate, getCurrentDate } from '../../../helpers/date.js';
import { getVideosQuaresmaSaoMiguelUseCase } from '../../../usecases/index.js';

const handler = async (fastify, opts) => {
  fastify.get('/', async (req, reply) => {
    let videoObj = {};
    if (
      cache.get(
        `quaresma_sao_miguel_${formatDate(getCurrentDate(), 'dd-mm-yyyy', '-')}`
      )
    ) {
      videoObj = JSON.parse(
        cache.get(
          `quaresma_sao_miguel_${formatDate(
            getCurrentDate(),
            'dd-mm-yyyy',
            '-'
          )}`
        )
      );
    } else {
      videoObj = await getVideosQuaresmaSaoMiguelUseCase.execute();
    }

    return reply.send(videoObj);
  });
};

export default handler;
