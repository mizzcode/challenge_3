function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.forEach((car) => {
    if (item.available) {
      result.push(car);
    } else {
      return null;
    }
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
