
var hoteles = {
    Mencey: {

    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },

Lani:  {

    name: "Lani",
    location: "Tenerifes",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",


    },
};

var selectedHotel = prompt("Indica el nombre del Hotel: Mencey o Lani");


document.getElementById("name-hotel").innerHTML = hoteles  [selectedHotel].name;
document.getElementById("location-hotel").innerHTML = hoteles[selectedHotel]["location"];

document.getElementById("img-hotel").src = hoteles[selectedHotel].img; 
  


  var stars = {
    una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
      
  };

  var rating = prompt("Cuantas Estrellas?: una, dos, tres, cuatro o cinco")

  document.getElementById("rating").innerHTML = stars [rating];



