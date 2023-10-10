function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.forEach((item) => {
    if (item.available) {
      result.push(item);
    } else {
      return null;
    }
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
