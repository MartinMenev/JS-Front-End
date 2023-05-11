function createObjectsFromTable(input) {
    const objects = [];
    for (let i = 1; i < input.length; i++) {
      const [town, latitude, longitude] = input[i].split("|").map((x) => x.trim());
      const object = {
        Town: town,
        Latitude: parseFloat(latitude).toFixed(2),
        Longitude: parseFloat(longitude).toFixed(2),
      };
      objects.push(object);
    }
    console.log(objects);
  }


  createObjectsFromTable(
    ['Plovdiv | 136.45 | 812.575']
  );