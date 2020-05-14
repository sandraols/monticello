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
$('.slider').slick('slickPrev');
})

$('.right').click(function(){
$('.slider').slick('slickNext');
})


function initMap() {
    const london = {lat: 51.506707, lng: -0.125959};
    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15, 
            center: london,
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
        position: london, 
        map: map,
        icon: "assets/images/marker.png",
    });

}