import type { NotFoundHandler } from "@hono/zod-openapi";

import { STATUS_CODES, STATUS_PHRASES } from "../utils/constants.ts";

export const notFound: NotFoundHandler = (c) => {
  return c.json(
    {
      message: `${STATUS_PHRASES.NOT_FOUND} - ${c.req.path}`,
    },
    STATUS_CODES.NOT_FOUND,
  );
};
