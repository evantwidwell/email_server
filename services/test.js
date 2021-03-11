async function fetchThings() {
  const res = await fetch('https://swapi.dev/api/people/')
  const json = await res.json()
  console.log(json);
};

fetchThings();