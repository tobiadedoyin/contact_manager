const apiStatusCodes = require("../utils/apiCodes");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case apiStatusCodes.badRequest:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack.slice(0, 30),
      });
      break;
    case apiStatusCodes.notFound:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case apiStatusCodes.conflict:
      res.json({
        title: "Conflict",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case apiStatusCodes.forbidden:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case apiStatusCodes.severError:
      res.json({
        title: "server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("no error, all good");
      break;
  }
};

module.exports = errorHandler;
