import Head from 'next/head';
import propTypes from 'prop-types';
import Footer from '~/components/Footer/Footer';
import LeftSidebarMenu from '~/components/LeftSidebar';
import TopBar from '~/components/TopBar';

// eslint-disable-next-line
class Layout extends React.Component {
  render() {
    const { children, title = 'Início', style } = this.props;
    return (
      <div>
        <Head>
          <title>{title} | Função de mãe</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </Head>
        <div id="wrapper">
          <TopBar title={title} />
          <LeftSidebarMenu />
          <div className="content-page">
            <div className="content">
              <div className="container">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  style: propTypes.string,
};

Layout.defaultProps = {
  children: <div />,
  title: '',
  style: {},
};

export default Layout;
