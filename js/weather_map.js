"use strict";

$(document).ready(function(){
    // Initial Lat Lng for Map Position and Weather Info
    var latitude = 29.4241,
        longitude = -98.4936;


    // Google Maps API
    (function map() {
        // Render Google Maps API
        var map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: latitude, lng: longitude},
            zoom: 11,
            mapTypeId: 'roadmap',
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#ff6a6a"
                        },
                        {
                            "lightness": "0"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ee3123"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ee3123"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ee3123"
                        },
                        {
                            "lightness": "62"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "lightness": "75"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.bus",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "weight": "0.01"
                        },
                        {
                            "hue": "#ff0028"
                        },
                        {
                            "lightness": "0"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#80e4d8"
                        },
                        {
                            "lightness": "25"
                        },
                        {
                            "saturation": "-23"
                        }
                    ]
                }
            ]
        });


        // Search Box
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });


        // InfoWindow for Codeup
        var codeup = { lat: 29.4267857, lng: -98.4896021 };
        var codeupContent = '<div id="iw-container">'
            + '<div class="iw-title">Codeup</div>'
            + '<div class="iw-content">'
            + '<div class="iw-subTitle">Reboot Your Career</div>'
            + '<img src="images/codeup.jpg" alt="Codeup Building" height="180" width="180">'
            + '<p class="mb-3">Codeup offers 18-week accelerator programs to launch your career as a ' +
            'computer programmer or a data scientist.</p>'
            + '<div class="iw-subTitle">Contacts</div>'
            + '<p class="mb-0">600 Navarro St #350<br>San Antonio, TX 78205<br>'
            + '<br class="iw-br">Phone: 210.802.7289<br>Website: <a href="https://codeup.com/" target="_blank">https://codeup.com</a></p>'
            + '</div>' + '</div>';
        var codeupInfoWindow = new google.maps.InfoWindow({
            content: codeupContent,
            maxWidth: 440
        });
        // Marker for Codeup
        var codeupMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: codeup,
            map: map,
            title: 'codeup'
        });
        // Open Codeup InfoWindow
        google.maps.event.addListener(codeupMarker, 'click', function() {
            codeupInfoWindow.open(map, codeupMarker);
        });
        // Close Codeup InfoWindow
        google.maps.event.addListener(map, 'click', function() {
            codeupInfoWindow.close();
        });


        var markers = [];
        // Adds a marker to the map and pushes it into markers array
        function addNewMarkers(position) {
            var marker = new google.maps.Marker({
                position: position,
                map: map
            });
            markers.push(marker);
            map.panTo(position);
        }
        // Clear out the old markers.
        function deleteMarker() {
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
        }
        // Click to Create Map Marker
        map.addListener('click', function(event) {
            deleteMarker();
            addNewMarkers(event.latLng);
            // Get Longitude and Latitude
            latitude = event.latLng.lat();
            longitude = event.latLng.lng();
            // Change Weather API
            $('.weatherBox1').empty();
            $('.weatherBox2').empty();
            $('.weatherBox3').empty();
            weather(latitude, longitude);
        });
        // Search Markers
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            deleteMarker();
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: place.name,
                    position: place.geometry.location
                }));
                // Set new map bounds
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
                // Get Longitude and Latitude
                latitude = place.geometry.location.lat().toFixed(3);
                longitude = place.geometry.location.lng().toFixed(3);
                // Change Weather API
                $('.weatherBox1').empty();
                $('.weatherBox2').empty();
                $('.weatherBox3').empty();
                weather(latitude, longitude);
            });
            map.fitBounds(bounds);
        });
    })();// Google Maps API


    // Weather Map API
    var weather = function() {
        var callWeatherAPI = "http://api.openweathermap.org/data/2.5/forecast?lat="
            + latitude + "&lon=" + longitude + "&APPID=490c989b60b09d95886b0ecd1b824208";
        // Wind Direction
        var windDirection = function(degree){
            if(degree>337.5) return 'N';
            if(degree>292.5) return 'NW';
            if(degree>247.5) return 'W';
            if(degree>202.5) return 'SW';
            if(degree>157.5) return 'S';
            if(degree>122.5) return 'SE';
            if(degree>67.5) return 'E';
            if(degree>22.5){return 'NE';}
            return 'N';
        };
        // Call OpenWeather API
        $.get(callWeatherAPI, {
            units: "imperial"
        })
            .done(function (data) {
                // Day of Week
                var dayOfWeek = function(index) {
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var dayNum = new Date(data.list[index].dt * 1000).getDay();
                    return days[dayNum];
                };
                // Icon URL
                var iconCode = data.list[7].weather[0].icon,
                    iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
                // Location Name
                $('#location').html(data.city.name);
                // Render Weather Info
                var renderWeather = function(weatherBox, day) {
                    weatherBox.html("<div class='row'>" + "<div class='col-6 p-0'>"
                        + "<h4 class='mt-2'>" + dayOfWeek(day) + "</h4>" + "</div>"
                        + "<div class='col-3 p-0'>" + "<h4 class='mt-2'>" + Number(data.list[day].main.temp.toFixed(0)) + "&deg;" + "</h4>" + "</div>"
                        + "<div class='col-3 p-0'>" + "<img src=" + iconUrl + ">" + "</div>" + "</div>"
                        + "<p class='d-inline-block mr-1'>" + data.list[day].weather[0].main + ":" + "</p>"
                        + "<p class='d-inline-block'>" + data.list[day].weather[0].description + "</p>"
                        + "<p>" + "Humidity: " + data.list[day].main.humidity + "%" + "</p>"
                        + "<p>" + "Wind: " + windDirection(data.list[day].wind.degree) + " " + Math.round(data.list[day].wind.speed) + " mph" + "</p>"
                        + "<p class='mb-3'>" + "Pressure: " + data.list[day].main.pressure + "</p>");
                };
                renderWeather($('.weatherBox1'), 7);
                renderWeather($('.weatherBox2'), 15);
                renderWeather($('.weatherBox3'), 23);
            })
            .fail(function (data, status) {
                console.log(status);
                alert('weather status: ' + status);
            });
    };// Weather Map API
    weather();

});//ready