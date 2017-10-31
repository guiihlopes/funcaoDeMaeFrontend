const dateConversion = (value) => {
  const date = new Date(value);

  if (!isNaN(date.getTime())) {
    const day = date.getUTCDate().toString();
    const month = (date.getUTCMonth() + 1).toString();

    return `${day[1] ? day : `0${day[0]}`}/${month[1] ?
      month : `0${month[0]}`}/${date.getFullYear()}`;
  }

  return value;
};


export default dateConversion;
