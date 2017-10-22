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

app.prepare().then(() => {
  const server = express();

  server.use(Cookies());

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
