// Створюєм рандомні координати
const dataSet = {
  data: {
    random_point: { x: 0, y: 0, z: 0 },
    search_points: { x: 0, y: 0, z: 0 },
  },
};

const randomInd = () => {
  for (let key in dataSet.data.random_point) {
    dataSet.data.random_point[key] = Math.floor(101 * Math.random());
  }
  for (let key in dataSet.data.search_points) {
    dataSet.data.search_points[key] = Math.floor(101 * Math.random());
  }
};
randomInd();
console.log(dataSet);

// Витягуєм координати та записуємо в змінні

let x1 = dataSet.data.random_point.x,
  y1 = dataSet.data.random_point.y,
  z1 = dataSet.data.random_point.z;

let x2 = dataSet.data.search_points.x,
  y2 = dataSet.data.search_points.y,
  z2 = dataSet.data.search_points.z;

//Вираховуєм відстань та виводим все в консоль

function getDistance(x1, x2, y1, y2, z1, z2) {
  let y = x2 - x1;
  let x = y2 - y1;
  let z = z2 - z1;

  let distance = Math.floor(Math.sqrt(x * x + y * y + z * z));

  console.log(
    `Відстань між ${JSON.stringify(
      dataSet.data.random_point
    )}  та ${JSON.stringify(dataSet.data.search_points)} = ${distance}`
  );
}

getDistance(x1, x2, y1, y2, z1, z2);
