import { getVideoReflexaoUseCase } from '../../../usecases/index.js';

const handler = async (fastify, opts) => {
  fastify.get('/', async (req, reply) => {
    return reply.send(await getVideoReflexaoUseCase.execute());
  });
};

export default handler;
