/**
 * Standardized success response schema.
 *
 * @param data - The response data.
 * @returns A formatted success response object.
 */
export const successResponse = (data: object) => ({
  status: "Success",
  statusCode: 200,
  data,
});

/**
 * Standardized unauthorized response schema.
 *
 * @param c - The context object (Hono request context).
 * @param err - The error message (default: "Unauthorized Request").
 * @returns A formatted unauthorized response.
 */
export const unauthorizedResponse = (c, err = "Unauthorized Request") =>
  c.json({
    status: "Unauthorized Request",
    statusCode: 401,
    details: err,
  });

/**
 * Standardized token not found response.
 *
 * @param c - The context object (Hono request context).
 * @param err - The error message (default: "Token Not Found").
 * @returns A formatted response for missing tokens.
 */
export const tokenNotFoundResponse = (c, err = "Token Not Found") =>
  c.json({
    status: "Unauthorized Request",
    statusCode: 401,
    details: err,
  });

/**
 * Standardized token expiration response.
 *
 * @param c - The context object (Hono request context).
 * @param err - The error message (default: "Session Timed Out").
 * @returns A formatted response for expired tokens.
 */
export const tokenExpiryResponse = (c, err = "Session Timed Out") =>
  c.json({
    status: "Token Expired",
    statusCode: 403,
    details: err,
  });
