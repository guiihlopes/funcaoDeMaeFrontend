const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextFramework = require('next');

const Cookies = require('cookie-parser');

const app = nextFramework({ dir: './app', dev });

const handle = app.getRequestHandler();

// eslint-disable-next-line
const getMessages = locale => require(`./lang/${locale}.json`);

const getLocalesAndMessages = (req, res) => {
  let funcaoDeMaeLocale = req.cookies.funcao_de_mae_locale;

  // if doesnt have already cookie
  if (funcaoDeMaeLocale === undefined) {
    // set a cookie default locale
    funcaoDeMaeLocale = 'pt-BR';
    // by default language = 'pt-BR'
    res.cookie('funcao_de_mae_locale', 'pt-BR');
  }

  const locale = funcaoDeMaeLocale;
  req.locale = locale;
  req.messages = getMessages(locale);
};

const isLoggedIn = (req) => {
  const funcaoDeMaeToken = req.cookies.funcao_de_mae_token;

  return funcaoDeMaeToken !== undefined && funcaoDeMaeToken !== '';
};

app.prepare().then(() => {
  const server = express();

  server.use(Cookies());

  server.get('/login', (req, res) => {
    getLocalesAndMessages(req, res);
    return isLoggedIn(req) ? res.redirect('/') :
      app.render(req, res, '/login', req.query);
  });

  server.get('/register', (req, res) => {
    getLocalesAndMessages(req, res);
    return isLoggedIn(req) ? res.redirect('/') :
      app.render(req, res, '/register', req.query);
  });

  server.get('/', (req, res) => {
    getLocalesAndMessages(req, res);
    return !isLoggedIn(req) ? res.redirect('/login') :
      app.render(req, res, '/dashboard', req.query);
  });
  server.get('/dashboard', (req, res) => {
    getLocalesAndMessages(req, res);
    return !isLoggedIn(req) ? res.redirect('/login') :
      app.render(req, res, '/dashboard', req.query);
  });
  server.get('/dispositivos', (req, res) => {
    getLocalesAndMessages(req, res);
    return !isLoggedIn(req) ? res.redirect('/login') :
      app.render(req, res, '/dispositivos', req.query);
  });
  server.get('/tags', (req, res) => {
    getLocalesAndMessages(req, res);
    return !isLoggedIn(req) ? res.redirect('/login') :
      app.render(req, res, '/tags', req.query);
  });
  server.get('/usuario/editar', (req, res) => {
    getLocalesAndMessages(req, res);
    return !isLoggedIn(req) ? res.redirect('/login') :
      app.render(req, res, '/usuario/editar', req.query);
  });

  server.get('/*', (req, res, next) => {
    getLocalesAndMessages(req, res);
    next();
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
