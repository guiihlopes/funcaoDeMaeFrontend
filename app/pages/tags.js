import Head from 'next/head';
import PageWrapper from '~/components/PageWrapper';
import CardBox from '~/components/CardBox';
import style from '../styles/pages/index.scss';
import MainLayout from '../layouts/main';

class DashboardPage extends React.Component {
  static async getInitialProps(context) {
    const { store } = context;
    console.log(store);
    // if (store.getState().curriculum.name === '') {
    //   const curriculums = await fetch(`${BACKEND_URL}/curriculos/1`);
    //   const json = await curriculums.json();
    //   store.dispatch(actionCurriculum.curriculumFetched(json));
    // }
  }
  render() {
    return (
      <MainLayout style={style} title="Tags">
        <Head>
          <meta name="description" content="Tags" />
        </Head>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <CardBox />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default PageWrapper(DashboardPage);
