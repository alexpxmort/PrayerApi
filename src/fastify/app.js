import fastifyAutoload from '@fastify/autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fastify from 'fastify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const buildApp = () => {
  const fastifyApp = fastify({
    logger: true
  });

  fastifyApp.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
    options: {
      prefix: '/api/v1'
    }
  });

  return fastifyApp;
};
