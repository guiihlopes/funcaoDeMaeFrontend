import Head from 'next/head';
import PageWrapper from '~/components/PageWrapper';
import CardBox from '~/components/CardBox';
import style from '../styles/pages/dashboard.scss';
import MainLayout from '../layouts/main';

class DashboardPage extends React.Component {
  static async getInitialProps(context) {
    const { store } = context;
    console.log(store);
  }
  render() {
    return (
      <MainLayout style={style} title="Dashboard">
        <Head>
          <meta name="description" content="Dashboard" />
        </Head>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default PageWrapper(DashboardPage);
