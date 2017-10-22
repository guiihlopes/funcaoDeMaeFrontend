import moment from 'moment';

const calculateAge = (birthday) => {
  if (birthday.trim() === '') {
    return 0;
  }

  return moment().diff(moment(birthday, 'DD/MM/YYYY'), 'years');
};

export default calculateAge;
