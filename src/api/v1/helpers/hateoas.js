

const HATEOAS = async (entity, data) => {
  const results = data
    .map((item) => {
      return {
        artist: item.artist,

        links: [
          {
            href: `http://localhost:5000/api/v1/${entity}/${item.id}`,
          },
        ],
      };
    })
    .slice(0, 4);

  console.log(results);
  const total = data.length; // TOTAL DE REGISTROS EN LA BASE DE DATOS
  const dataWithHateoas = {
    total,
    results,
  };
  console.log(dataWithHateoas);
  return dataWithHateoas;
};

export default HATEOAS;
