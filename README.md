To run the app: 
- get the code: 
  git clone https://github.com/nshakoori/Fast-Checkout.git
- go to code's folder:
  cd Fast-Checkout
- install libraries:
  npm install
- run the app:
  npm install


State of the application consists of:
- isFetching: (boolean) that shows if the movies are being loaded or not,
- error: (object) keeps the errors after each API call if there were any errors,
- moviesArray: (array) keeps an array of the movies that are loaded at the start of the program,
- MoviesHash: (object) keeps a hash that has movie ids as key and movie object as value. The hash is created at the start of the program so that accessing a single movie is simple and efficient,
- selectedMovies: (array) an array of ids of selected movies 


`index.js`: 
The `HomeIndex` component is wrapped by the `Provider` to have the store available to its children.
There are two routes defined: 
 - `/` for the home page
 - and `/checkout` that takes the user to checkout

`HomeIndex.js`: 
 - renders `SearchBar` and `MoviesContainer`

`SearchBar.js`:
 - uses the api end point to fetch movies when the user search for a name and presses enter or the submit button

`MoviesContainer.js`:
- is subscribed to the movies reducer and renders `Loading ...`, and error message or the list of found movies

`CheckoutContainer.js`: 
- the shopping card at the top is linked to the checkout contianer.
- list of the selected movies are rendered when user goes to the page

1. What were the most difficult tasks?
  - setting up the MovieCard so that everything is algned in all device sizes
2. Did you learn anything new while completing this assignment?
  - I learnt how to use grid layout
3. What did you not have time to add? What work took the up majority of your time?
  - I didn't have time to add pagination 
4. How could the application be improved?
  - Add pagination so the user sees all the results
  - Add tests