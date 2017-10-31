import Head from 'next/head';
import PageWrapper from '~/components/PageWrapper';
import Form from '~/components/Usuario/UpdateForm';
import style from '../styles/pages/login.scss';
import MainLayout from '../layouts/main';

const LoginPage = () => (
  <MainLayout style={style} title="Login">
    <Head>
      <meta name="description" content="Login" />
    </Head>
    <Form />
  </MainLayout>
);

export default PageWrapper(LoginPage);
