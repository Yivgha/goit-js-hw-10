const API_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountryByName(name) {
    return fetch(`${API_URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    },
  );
}