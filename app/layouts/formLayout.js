import Head from 'next/head';
import propTypes from 'prop-types';

const guestLayout = ({ children, title = 'Login', style }) => (
  <div>
    <Head>
      <title>{title} | Função de mãe</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <div className="account-pages" />
    <div className="clearfix" />
    <div className="wrapper-page">
      {children}
    </div>
  </div>
);

guestLayout.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  style: propTypes.string,
};

guestLayout.defaultProps = {
  children: <div />,
  title: '',
  style: {},
};

export default guestLayout;
