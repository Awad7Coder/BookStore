const catchAsync = (asyncFn) => {
  return (req, res, next) => {
    asyncFn(req, res, next).catch((err) => next(err));
  };
};

export default catchAsync;
