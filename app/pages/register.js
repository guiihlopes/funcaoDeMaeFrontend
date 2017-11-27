import Head from 'next/head';
import Link from 'next/link';
import PageWrapper from '~/components/PageWrapper';
import Form from '~/components/Usuario/UpdateForm';
import Logo from '~/components/@ui/Logo';
import style from '../styles/pages/register.scss';
import RegisterLayout from '../layouts/formLayout';

const RegisterPage = () => (
  <RegisterLayout style={style} title="Cadastro">
    <Head>
      <meta name="description" content="Cadastro" />
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
          <h4 className="text-uppercase font-bold m-b-0">Cadastro</h4>
        </div>
        <div className="panel-body">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="text-muted">Já tem uma conta?
            <Link href="/login">
              <a className="text-primary m-l-5"><b>Entre</b></a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </RegisterLayout>
);

export default PageWrapper(RegisterPage);
