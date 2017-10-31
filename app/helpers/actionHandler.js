import { SubmissionError } from 'redux-form';

const actionHandler = ({ action, values, block }) => (
  action(values)
    .catch((response) => {
      console.log('catch', response);
      if (response.status === 422) {
        const errorObject = block
          ? {
            [block]: response.json,
          }
          : response.json;

        throw new SubmissionError(errorObject);
      }
    })
);

export default actionHandler;
