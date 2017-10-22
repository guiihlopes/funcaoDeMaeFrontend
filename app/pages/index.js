import Head from 'next/head';
import PageWrapper from '~/components/PageWrapper';
import style from '../styles/pages/index.scss';
import MainLayout from '../layouts/main';

class IndexPage extends React.Component {
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
      <MainLayout style={style} title="Início">
        <Head>
          <meta name="description" content="Página principal" />
        </Head>
        <div>
          <h1>Página principal</h1>
        </div>
      </MainLayout>
    );
  }
}

export default PageWrapper(IndexPage);
