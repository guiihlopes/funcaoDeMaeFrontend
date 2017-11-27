import { request } from '~/helpers/fetch';
import LoginForm from './FormStructure';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  // eslint-disable-next-line
  submit(values) {
    const submitValues = values.usuario;

    request('site/login', {
      method: 'POST',
      body: JSON.stringify({
        ...submitValues,
      }),
    })
      .then((response) => {
        console.log(response);

        return response;
      });
  }

  render() {
    return (

      <LoginForm
        onSubmit={this.submit}
      />
    );
  }
}

export default Form;
