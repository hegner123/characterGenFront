import config from "config";

export const characterService = {
  generateCharacter,
};

export function generateCharacter() {
  const requestOptions = {
    method: "GET",
    headers: "application/json",
  };
  return fetch(
    `http://localhost:4000/characters/character`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
