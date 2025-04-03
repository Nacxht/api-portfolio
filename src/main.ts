import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { config } from "./configs/env_config.ts";
import { logger } from "./api/utils/logger.ts";

const app = new Hono();
export type App = typeof app;

const { allowedOrigin } = config.server;

app.use(
  cors({
    origin: allowedOrigin,
  }),
);

app.onError((_err, c) => {
  logger.error("An error happened");
  logger.error(`${_err.name} - ${_err.cause}`);

  return c.json(
    {
      status: "fail",
      message: "Internal server error",
    },
    500,
  );
});

export default app;
