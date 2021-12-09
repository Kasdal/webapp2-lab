import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from "../api/tmdb-api"
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import Pagination from "@material-ui/lab/Pagination";
import SiteHeader from "../components/siteHeader";

const UpcomingMoviesPage = (props) => {
  const [page, setPage] = React.useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['upComingMovie',{page : page}], getUpcomingMovies)
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
 
   return (
    <>
    <SiteHeader/>
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
              <Pagination count={data.total_pages} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} page={page} onChange={handleChange} color="secondary" />
      </>
  );
};

export default UpcomingMoviesPage;










