import Head from 'next/head';
import { BootstrapTable, TableHeaderColumn, InsertButton, InsertModalHeader } from 'react-bootstrap-table';
import PageWrapper from '~/components/PageWrapper';
import style from '../styles/pages/tags.scss';
import MainLayout from '../layouts/main';

const onAfterSaveCell = (row, cellName, cellValue) => {
  console.log(cellValue);
  console.log('row: ', row);
};
const onBeforeSaveCell = (row, cellName, cellValue) => {
  console.log(cellValue);
  return true;
};

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell,
  beforeSaveCell: onBeforeSaveCell,
};

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  className: 'delete-row',
  bgColor: 'rgb(238, 193, 213)',
};

class DashboardPage extends React.Component {
  static async getInitialProps(context) {
    const { store } = context;
    console.log(store);
  }

  // eslint-disable-next-line
  handleModalClose(closeModal) {
    closeModal();
  }

  // eslint-disable-next-line
  handleClick(onClick) {
    onClick();
  }

  createCustomInsertButton = onClick => (
    <InsertButton
      btnText="Adicionar"
      btnContextual="btn-success"
      onClick={() => this.handleClick(onClick)}
    />
  );

  createCustomModalHeader = closeModal => (
    <InsertModalHeader
      title="Cadastrar tags"
      onModalClose={() => this.handleModalClose(closeModal)}
    />
  );

  render() {
    let tags = new Array(100).fill(1);
    tags = tags.map((obj, index) => ({
      id: index + 1,
      name: `Tag ${index + 1}`,
      codigo: `${Math.floor(Math.random() * 1000)}`,
    }));

    const options = {
      insertBtn: this.createCustomInsertButton,
      insertModalHeader: this.createCustomModalHeader,
      noDataText: 'Sem tags cadastrados',
    };

    return (
      <MainLayout style={style} title="Tags">
        <Head>
          <meta name="description" content="Tags" />
        </Head>
        <div className="row">
          <div className="col-md-12">
            <BootstrapTable
              data={tags}
              cellEdit={cellEditProp}
              selectRow={selectRowProp}
              striped
              hover
              bordered={false}
              condensed
              pagination
              insertRow
              deleteRow
              search
              options={options}
            >
              <TableHeaderColumn hiddenOnInsert autoValue dataField="id" isKey>ID</TableHeaderColumn>
              <TableHeaderColumn dataField="name">Nome</TableHeaderColumn>
              <TableHeaderColumn dataField="codigo">Código</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default PageWrapper(DashboardPage);
