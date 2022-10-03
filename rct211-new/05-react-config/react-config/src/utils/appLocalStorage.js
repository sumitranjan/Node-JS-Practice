// to access the data from local storage
const accessData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (e) {
    return undefined;
  }
};

//to save the data to lacal storage
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { accessData, saveData };
