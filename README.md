# Assignment 1 - ReactJS app.

Name: [Milan Ples]

## Overview.

Movie App created using React. It allows the users to search and filter movies.
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
Register on TMDB and get the API credentials.
On TMDB go to Settings->API->Create ->Request API ->Developer -> And enter required data.
create .env file in your project and add the TMDB API key 
```
REACT_APP_TMDB_KEY=  API key value
```

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

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

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these (we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
