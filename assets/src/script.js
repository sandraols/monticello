$(document).ready(function() {
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
    initMap();
    // Smooth Scroll from nav links
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            let target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
        });
    });

    // Smooth scroll to projects section
    $('.arrow__container').click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });

    // Slick slider header section
    $('.header__slider-container').slick({
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: 'vertical-dots',
        arrows: false
    });

    // Slick slider news section
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false
    });

    $('.left').click(function(){
    $('.news__slider').slick('slickPrev');
    })

    $('.right').click(function(){
    $('.news__slider').slick('slickNext');
    })

    // google maps
    function initMap() {
        const london = {lat: 51.506707, lng: -0.125963};
        const map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 14, 
                center: london,
                gestureHandling: 'none',
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
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                        "color": "#8e8e8e"
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
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                        "color": "#e2e2e2"
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
                    "featureType": "poi.medical",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                        "color": "#bebebe"
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
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                        "color": "#e5e5e5"
                        },
                        {
                        "visibility": "off"
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
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                        "color": "#ffffff"
                        },
                        {
                        "weight": 1.5
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
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                        "color": "#e7e7e7"
                        }
                    ]
                    },
                    {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                        "color": "#e6e6e6"
                        },
                        {
                        "visibility": "off"
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
        // custom marker
        let marker = new google.maps.Marker({
            position: {lat: 51.510994, lng: -0.129903},
            map: map,
            icon: "assets/images/marker.png",
        }); 
        // Show controls on mouseover
        document.getElementById('map').addEventListener('mouseover', function() {
            map.setOptions({
                disableDefaultUI: false,
            });
        });
        // Hide controls on mouseout
            document.getElementById('map').addEventListener('mouseout', function() {
            map.setOptions({
                disableDefaultUI: true,
            });
        });    
    }
    // form validation
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const submit = document.getElementById('submit');
    const submittedBox = document.getElementById('submitted-box');

    const validateName = () => {
        if (name.value === '') {
            name.setCustomValidity('Please fill in your name');
            return false;
        } else {
            name.setCustomValidity('');
            return true;
        }
    }
    const validateEmail = () => {
        if (email.value === '' || email.validity.typeMismatch) {
            email.setCustomValidity('Please fill in a valid email adress');
            return false;
        } else {
        email.setCustomValidity('');
        return true;
        }
    }
    name.addEventListener('input', function () {
        validateName();
    });
    email.addEventListener('input', function() {
        validateEmail();
    });
    submit.addEventListener('click', function (event) {
        if (validateName() && validateEmail()) {
            submittedBox.style.display = 'block';
            event.preventDefault();
        }
    });
});

