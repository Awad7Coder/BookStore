class AppError extends Error {
  constructor(message, statusCode, statusText) {
    super(message); // Call the built-in Error constructor
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.isOperational = true; // Mark as a trusted operational error
  }

  static create(message, statusCode, statusText) {
    return new AppError(message, statusCode, statusText);
  }
}

export default AppError;
