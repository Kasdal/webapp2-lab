# Assignment 1 - ReactJS app.

Name: [Milan Ples]

## Overview.

Movie App created using React. It allows the users to search and filter movies by genre.
Movies can also be added into favorites. All the information about the movies is
pulled from TMDB using their public API. 

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Feature 1
+ Feature 2
+ Feature 3
+ etc
+ etc

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

### Component catalogue.

[ Insert a screenshot from the Storybook UI that lists all the stories for the app's components, and highlight those relating to your __new/modified components__ - see the example screenshot below.] .......

![](./images/storybook.png)
### UI Design.

[ Insert screenshots of the __new/modified app pages__ you developed (and modified existing pages), Include an appropriate caption for each one (see example below).

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

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
