const successResponse = (res, message, statusCode = 200, data = null) => {
  return res.status(statusCode).json({
    status: 'Success',
    message,
    data,
  })
}

const errorResponse = (res, message, errors = null, statusCode = 400) => {
  return res.status(statusCode).json({
    status: 'Error',
    message,
  });
};


module.exports = { successResponse, errorResponse };