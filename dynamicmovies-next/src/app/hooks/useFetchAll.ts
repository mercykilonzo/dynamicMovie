"use client";
import { useEffect, useState } from "react";
import { fetchAllMovies } from "../utils/fetchAll";
interface MovieType{
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
}
const useFetchAllMovies = () => {
  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const moviesData = await fetchAllMovies();
        setMovies(moviesData?.results || []);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { movies, loading, error };
};
export default useFetchAllMovies;





