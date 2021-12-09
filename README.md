# Assignment 1 - ReactJS app.

Name: [Milan Ples]

## Overview.

Movie App created using React. It allows the users to search and filter movies by genre.
Movies can also be added into favorites. All the information about the movies is
pulled from TMDB using their public API. 

### Features.
 
+ Top Rated movies page
+ Popular page
+ Actors page
+ Firebase Auth
+ Pagination home page and upcoming

## Setup requirements.
Running this project:
install nodeJS
Clone this repo or download.
Open the working directory and run
```
npm install
```
Register on TMDB and get the API credentials.[here](https://firebase.google.com/)
On TMDB go to Settings->API->Create ->Request API ->Developer -> And enter required data.
create .env file in your project and add the TMDB API key 
```
REACT_APP_TMDB_KEY=  API key value
```

## API endpoints.

GET
/movie/top_rated
Get the top rated movies on TMDB.
**Get Top Rated**: `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`

GET
/person/popular
Get the list of popular people on TMDB. This list updates daily.
**Get Actors** `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

GET
/movie/upcoming
Get a list of upcoming movies in theatres.
**Get Upcoming** `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`

## App Design.

![Screenshot_26](https://user-images.githubusercontent.com/36207533/145411474-0380542a-a6a0-4462-9419-02c778af518d.png)
![Screenshot_27](https://user-images.githubusercontent.com/36207533/145411483-7138a0c4-d8e0-4a19-a914-a086037625d4.png)
![Screenshot_28](https://user-images.githubusercontent.com/36207533/145411490-14f20722-ae9f-4906-970b-986803a02f39.png)

### Component catalogue.
![Screenshot_29](https://user-images.githubusercontent.com/36207533/145411750-b737f9d0-860b-42a3-98a4-b943b7efec89.png)


### Routing.

+ GET /home - displays all movies.
+ GET /login - login to firebase
+ GET /signup - sign up for Firebase 
+ GET /reviews/:id - displays a particular review.
+ GET /movies/favourites - displaying selected user favourites
+ GET /movies/upcoming - display upcoming movies
+ GET /movies/topRatedMovies - displays top rated movies
+ GET /movies/:id - displays a particular movie
+ GET /movies/:id - displays a particular actor
+ GET /actor - displays all popular actors 

## Independent learning (If relevant).

**Firebase Authentication** Enables security for the app. Did not manage to get it full working. 
**Pagination** Enables for data to be cached locally and reduces a strain on the server. Works properly.
