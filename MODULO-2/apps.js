var hotel = {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  };
  
  document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
  document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hotel.location;
  document.getElementById("img-hotel").src = hotel.img;
  
  // Objetivo 2 [Puntuación del hotel]
  var rating = prompt("Puntuación: del 1 al 5");
  
  document.getElementById("rating").innerHTML = rating + " estrellas";
  
  // Objetivo 3 [Usuario anónimo]
  var anonymous = confirm("¿Quiere que la reseña sea anónima?");
  
  document.getElementById("anonymous").checked = anonymous;