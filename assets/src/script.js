$('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  });

$('.left').click(function(){
$('.news__slider').slick('slickPrev');
})

$('.right').click(function(){
$('.news__slider').slick('slickNext');
})


function initMap() {
    const london = {lat: 51.506707, lng: -0.125963};
    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15, 
            center: london,
            gestureHandling: 'none',
            zoomControl: false,
            disableDefaultUI: true,
            styles: [
                {
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#f5f5f5"
                    }
                ]
                },
                {
                "elementType": "labels.icon",
                "stylers": [
                    {
                    "visibility": "off"
                    }
                ]
                },
                {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#616161"
                    }
                ]
                },
                {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                    "color": "#f5f5f5"
                    }
                ]
                },
                {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#bdbdbd"
                    }
                ]
                },
                {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#eeeeee"
                    }
                ]
                },
                {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#757575"
                    }
                ]
                },
                {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#e5e5e5"
                    }
                ]
                },
                {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#9e9e9e"
                    }
                ]
                },
                {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#ffffff"
                    }
                ]
                },
                {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#757575"
                    }
                ]
                },
                {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#dadada"
                    }
                ]
                },
                {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#616161"
                    }
                ]
                },
                {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#9e9e9e"
                    }
                ]
                },
                {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#e5e5e5"
                    }
                ]
                },
                {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#eeeeee"
                    }
                ]
                },
                {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#c9c9c9"
                    }
                ]
                },
                {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#9e9e9e"
                    }
                ]
                }
            ]
    });

    let marker = new google.maps.Marker({
        position: {lat: 51.510994, lng: -0.129903},
        map: map,
        icon: "assets/images/marker.png",
    });
}


// const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById("email");
// const name = document.getElementById("name");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please fill in a valid email adress");
  } else {
    email.setCustomValidity("");
  }
});

// name.addEventListener("input", function (event) {
//     if (name.validity.typeMismatch) {
//       name.setCustomValidity("I am expecting a name");
//     } else {
//       name.setCustomValidity("");
//     }
//   });