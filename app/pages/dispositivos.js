import Head from 'next/head';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PageWrapper from '~/components/PageWrapper';
import style from '../styles/pages/dispositivos.scss';
import MainLayout from '../layouts/main';

class DashboardPage extends React.Component {
  static async getInitialProps(context) {
    const { store } = context;
    console.log(store);
  }
  render() {
    let dispositivos = new Array(100).fill(1);
    dispositivos = dispositivos.map((obj, index) => ({
      id: index + 1,
      name: `Dispositivo ${index + 1}`,
      potencia: `${Math.floor(Math.random() * 1000)}w`,
    }));

    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      bgColor: 'rgb(238, 193, 213)',
    };
    return (
      <MainLayout style={style} title="Dispositivos">
        <Head>
          <meta name="description" content="Dispositivos" />
        </Head>
        <div className="row">
          <div className="col-md-12">
            <BootstrapTable
              data={dispositivos}
              selectRow={selectRowProp}
              striped
              hover
              bordered={false}
              condensed
              pagination
              insertRow
              deleteRow
              search
              options={{ noDataText: 'Sem dispositivos cadastrados' }}
            >
              <TableHeaderColumn dataField="id" isKey>ID</TableHeaderColumn>
              <TableHeaderColumn dataField="name">Nome</TableHeaderColumn>
              <TableHeaderColumn dataField="potencia">Potência</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default PageWrapper(DashboardPage);
