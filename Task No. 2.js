const dataSet = {
  data: [
    { user: "mike@mail.com", rating: 20, disabled: false },
    { user: "greg@mail.com", rating: 14, disabled: false },
    { user: "john@mail.com", rating: 25, disabled: true },
  ],
  condition: { exclude: [{ disabled: true }], sort_by: ["rating"] },
};

const sortsCondition = [];

function sortBy(a, b) {
  if (!sortsCondition.length) return 0;
  for (let i in sortsCondition) {
    const sort = sortsCondition[i];
    if (a[sort] > b[sort] || a[sort] < b[sort]) {
      return a[sort] > b[sort] ? 1 : -1;
    }
  }
  return 0;
}

function getter(data) {
  const list = data.data;
  data.condition.sort_by.forEach((el) => {
    sortsCondition.push(el);
  });
  const exclude = {};
  for (let i in data.condition.exclude) {
    const cond = data.condition.exclude[i];
    for (let j in cond) {
      exclude[j] = cond[j];
    }
  }

  const result = {
    result: [],
  };
  list.forEach((item) => {
    let flg = true;
    for (let i in item) {
      if (exclude.hasOwnProperty(i) && exclude[i] === item[i]) {
        flg = false;
        break;
      }
    }
    if (flg) {
      result.result.push(item);
    }
  });
  result.result.sort(sortBy);
  return result;
}

console.log(getter(dataSet));
