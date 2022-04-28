export function BlackList(countries) {
  const list = ["Western Sahara"];

  const cleanList = countries.filter(
    (country) => !list.includes(country.name.common)
  );

  return cleanList;
}
