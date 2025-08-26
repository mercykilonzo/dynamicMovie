const baseUrl ='/api/allMovies';
export async function fetchAllMovies() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Something went wrong" + response.statusText);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Failed to fetch all movies' + (error as Error).message);
  }
}