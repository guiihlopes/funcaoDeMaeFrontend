import Head from 'next/head';
import Link from 'next/link';
import PageWrapper from '~/components/PageWrapper';
import Form from '~/components/Usuario/LoginForm';
import Logo from '~/components/@ui/Logo';
import style from '../styles/pages/login.scss';
import LoginLayout from '../layouts/formLayout';

const LoginPage = () => (
  <LoginLayout style={style} title="Login">
    <Head>
      <meta name="description" content="Login" />
    </Head>
    <div>
      <div className="text-center">
        <Link href="/">
          <Logo />
        </Link>
        <h5 className="text-muted m-t-0 font-600">Monitore seus gastos de eletricidade no chuveiro</h5>
      </div>
      <div className="m-t-40 card-box">
        <div className="text-center">
          <h4 className="text-uppercase font-bold m-b-0">Login</h4>
        </div>
        <div className="panel-body">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="text-muted">Não tem uma conta?
            <Link href="/register">
              <a className="text-primary m-l-5"><b>Registre</b></a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </LoginLayout>
);

export default PageWrapper(LoginPage);
