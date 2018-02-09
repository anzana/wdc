var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

var movies = [
  {title: "In Bruges", hasWatched: false, rating: 3},
  {
    title: "Frozen", hasWatched: true, 7.5
  }
]

movies.forEach(function(movie){
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched";
  }else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " starts";
  console.log(result);
});
