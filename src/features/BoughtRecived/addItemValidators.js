export const validateName = (value) => {
  let error;
  if (!value) {
    error = "Name is required";
  }
  return error;
};

export const validatePrice = (value) => {
  let error;
  if (!value) {
    error = "Price is required";
  } else if (isNaN(+value)) {
    error = "Price muse be a number";
  }
  return error;
};

export const validateStore = (value) => {
  let error;
  if (!value) {
    error = "You must select a store";
  }
  return error;
};

export const validateDeliveryDate = (value) => {
  const selectedDate = new Date(value).valueOf();
  const maxDate = new Date().valueOf();
  let error;
  if (selectedDate > maxDate) {
    error = "Not a valid date";
  }
  return error;
};
