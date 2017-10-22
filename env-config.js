const NODE_ENV = process.env.NODE_ENV;

let BACKEND_URL = 'http://localhost:8080';

switch (NODE_ENV) {
  case 'production':
    BACKEND_URL = 'backendurl.com.br';
    break;

  default:
    break;
}

module.exports = {
  BACKEND_URL,
  NODE_ENV,
};
