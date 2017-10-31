export const normalizeData = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
};


export const normalizeNumbers = (value) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');

  return onlyNums;
};


export const normalizeChildren = (value) => {
  if (!value) {
    return value;
  }
  if (value < 1) {
    return 1;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 2)}`;
};

export const normalizeDDD = (value) => {
  if (!value) {
    return value;
  }
  if (value < 1) {
    return 0;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 2)}`;
};
export const normalizeMaxDigits = (value, maxDigits) => {
  if (!value) {
    return value;
  }
  return `${value.slice(0, maxDigits)}`;
};

export const normalizeCellphone = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 4) { return onlyNums; }
  if (onlyNums.length <= 8) { return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`; }

  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 9)}`;
};
export const normalizeCEP = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 5) { return onlyNums; }

  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}`;
};

export const normalizeCurrency = (value) => {
  const numbers = normalizeNumbers(value);

  return numbers.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
};

export const normalizeCPF = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) { return onlyNums; }
  if (onlyNums.length <= 7) { return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3)}`; }
  if (onlyNums.length <= 10) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6)}`;
  }

  // eslint-disable-next-line
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`;
};
