export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  REDIRECT: 302,

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,

  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  HTTP_VERSION_NOT_SUPPORTED: 505,
};

export const STATUS_PHRASES = {
  OK: "OK",
  CREATED: "Created",
  ACCEPTED: "Accepted",
  NO_CONTENT: "No Content",

  REDIRECT: "Found (Redirect)",

  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not Found",
  REQUEST_TIMEOUT: "Request Timeout",
  CONFLICT: "Conflict",
  UNPROCESSABLE_ENTITY: "Unprocessable Entity",

  INTERNAL_SERVER_ERROR: "Internal Server Error",
  SERVICE_UNAVAILABLE: "Service Unavailable",
  HTTP_VERSION_NOT_SUPPORTED: "HTTP Version Not Supported",

  TOKEN_NOT_FOUND: "Token Not Found",
  TOKEN_EXPIRED: "Session Expired",
  SUCCESS: "Success",
  DATA_REMOVED: "Data Removed Successfully",
};

export const ZOD_ERRORS = {
  VALIDATION_ERROR: "ValidationError",
  INVALID_UPDATES: "invalid_updates",
};
