const api = "https://gateway.marvel.com:443/v1/public";
const key = process.env.REACT_APP_API_KEY;

export const getComics = async (characterID, currentPage = 0, limit = 24) => {
  const pagination = currentPage * limit;
  const request = await fetch(`${api}/comics?format=comic&formatType=comic&characters=${characterID}&limit=${limit}&offset=${pagination}&apikey=${key}`);
  const response = await request.json();
  return response.data;
};

export const getCharacter = async (characterName) => {
  try {
    const request = await fetch(`${api}/characters?name=${characterName}&apikey=${key}`);
    return await request.json();
  } catch (error) {
    console.log("Ops, this shouldn't be happening. Error contacting Marvel's servers");
  }
};
