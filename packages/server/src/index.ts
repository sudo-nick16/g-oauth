import createExpressApp from "./app/express/app";
import createConfig from "./config";
import env from "./env";

const start = async () => {
  const config = await createConfig(env);
  const app = createExpressApp(config);
  app.listen(env.port, signalAppStart);
};

const signalAppStart = () => {
  console.log(`${env.appName} started on port ${env.port}`);
  console.table([
    ["Port", env.port],
    ["Environment", env.env],
  ]);
};

export default start;
