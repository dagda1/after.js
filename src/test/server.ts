import express from 'express';
import { render } from '../render';
import routes from './routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
     const html = await render({
        req,
        res,
        routes,
        assets
      });
      res.send(html);
  });

export default server;
