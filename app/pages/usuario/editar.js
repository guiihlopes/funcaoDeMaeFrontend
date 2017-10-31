import Head from 'next/head';
import PageWrapper from '~/components/PageWrapper';
import style from '~/styles/pages/dispositivos.scss';
import MainLayout from '~/layouts/main';

class DashboardPage extends React.Component {
  static async getInitialProps(context) {
    const { store } = context;
    console.log(store);
  }
  render() {
    return (
      <MainLayout style={style} title="Configurações do usuário">
        <Head>
          <meta name="description" content="Dispositivos" />
        </Head>
        <h2>Atualizar informações</h2>
        <div className="row">
          <div className="col-md-12">
            Formulario
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default PageWrapper(DashboardPage);
