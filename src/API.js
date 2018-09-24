const API_URL = 'https://vat.erply.com/numbers';

export default {
  search(searchTerm) {
    const url = `${API_URL}?vatNumber=${searchTerm}`;
    return fetch(url)
      .then(response => response.json())
  },
};