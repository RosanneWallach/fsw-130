const store = require('./redux/index')
const {addMovie, deleteMovie, getAllMovies} = require('./redux/moviesActions')
const {addTvShow, deleteTvShow, getAllTvShows} = require('./redux/tvShowsActions')

store.dispatch(addMovie("Forrest Gump"))
store.dispatch(addMovie("The Warriors"))
store.dispatch(addMovie("Pulp Fiction"))
store.dispatch(addMovie("Back to the Future"))

store.dispatch(addTvShow("The Simpsons"))
store.dispatch(addTvShow("Family Guy"))
store.dispatch(addTvShow("2 Broke Girls"))
store.dispatch(addTvShow("90 Day Fiance"))

store.dispatch(deleteMovie("The Warriors"))

store.dispatch(deleteTvShow("Family Guy"))

store.dispatch(getAllMovies())

store.dispatch(getAllTvShows())