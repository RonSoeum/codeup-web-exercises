"use strict";

$(document).ready(function(){

    var latitude = 29.4241,
        longitude = -98.4936;

    // Google Maps API
    (function map() {
        var map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: latitude, lng: longitude},
            zoom: 11,
            mapTypeId: 'roadmap'
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
            + '<p>Codeup offers 18-week accelerator programs to launch your career as a ' +
            'computer programmer or a data scientist.</p>'
            + '<div class="iw-subTitle">Contacts</div>'
            + '<p class="mb-0">600 Navarro St #350<br>San Antonio, TX 78205<br>'
            + '<br class="iw-br">Phone: 210.802.7289<br>Website: <a href="https://codeup.com/" target="_blank">https://codeup.com</a></p>'
            + '</div>' + '</div>';
        var codeupInfoWindow = new google.maps.InfoWindow({
            content: codeupContent,
            maxWidth: 440
        });// InfoWindow for Codeup

        // Marker for Codeup
        var codeupMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: codeup,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: 'codeup'
        });
        // Open InfoWindow
        google.maps.event.addListener(codeupMarker, 'click', function() {
            codeupInfoWindow.open(map, codeupMarker);
        });
        // Close InfoWindow
        google.maps.event.addListener(map, 'click', function() {
            codeupInfoWindow.close();
        });// Marker for Codeup

        // Click Markers
        map.addListener('click', function(e) {
            placeMarker(e.latLng, map);
        });

        function placeMarker(position, map) {
            var marker = new google.maps.Marker({
                position: position,
                map: map
            });
            map.panTo(position);
        }

        // Search Markers
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }

                // Get Location
                latitude = place.geometry.location.lat().toFixed(3);
                longitude = place.geometry.location.lng().toFixed(3);

                // Change Weather API
                $('.weatherBox1').empty();
                $('.weatherBox2').empty();
                $('.weatherBox3').empty();
                weather(latitude, longitude);
            });
            map.fitBounds(bounds);
            searchBox.set('map', map);
        });// Search Markers


        // Get long & lat
        // google.maps.event.addListener(searchBox, 'places_changed', function() {
        //     searchBox.set('map', null);
        //
        //     var places = searchBox.getPlaces();
        //
        //     var bounds = new google.maps.LatLngBounds();
        //     var i, place;
        //     for (i = 0; place = places[i]; i++) {
        //         (function(place) {
        //             var marker = new google.maps.Marker({
        //                 position: new google.maps.LatLng(latitude, longitude),
        //                 draggable: true,
        //                 position: place.geometry.location
        //             });
        //             marker.bindTo('map', searchBox, 'map');
        //             google.maps.event.addListener(marker, 'map_changed', function() {
        //                 if (!this.getMap()) {
        //                     this.unbindAll();
        //                 }
        //             });
        //             bounds.extend(place.geometry.location);
        //
        //             map.addListener('bounds_changed', function(evt) {
        //                 // document.getElementById('long-lat').innerHTML = evt.latLng.lat().toFixed(3) + " " + evt.latLng.lng().toFixed(3);
        //                 // console.log(place.geometry.location.lat().toFixed(3) + " " + place.geometry.location.lng().toFixed(3));
        //                 searchPositionLat = place.geometry.location.lat().toFixed(3);
        //                 searchPositionLong = place.geometry.location.lng().toFixed(3);
        //             });
        //         }(place));
        //     }
        //     map.fitBounds(bounds);
        //     searchBox.set('map', map);
        //     map.setZoom(Math.min(map.getZoom(), 12));
        // });

    })();// Google Maps API


    // Weather Map API
    var weather = function() {

        var callWeatherAPI = "http://api.openweathermap.org/data/2.5/forecast?lat="
            + latitude + "&lon=" + longitude + "&APPID=490c989b60b09d95886b0ecd1b824208";

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

        $.get(callWeatherAPI, {
            units: "imperial"
        })
            .done(function (data) {
                var iconCode = data.list[7].weather[0].icon,
                    iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

                $('#location').html(data.city.name);
                var renderWeather = function (weatherBox, day) {
                    weatherBox.html("<p class='mt-3'>" + data.list[day].main.temp_max + "&deg;\/"
                        + data.list[day].main.temp_min + "&deg;" + "</p>"
                        + "<div>" + "<img src=" + iconUrl + ">" + "</div>"
                        + "<p class='d-inline-block mr-1'>" + "<strong>" + data.list[day].weather[0].main + ":" + "</strong>" + "</p>"
                        + "<p class='d-inline-block'>" + data.list[day].weather[0].description + "</p>"
                        + "<p>" + "Humidity: " + data.list[day].main.humidity + "%" + "</p>"
                        + "<p>" + "Wind: " + windDirection(data.list[day].wind.degree) + " " + data.list[day].wind.speed + " mph" + "</p>"
                        + "<p class='mb-3'>" + "Pressure: " + data.list[day].main.pressure + "</p>");
                };
                renderWeather($('.weatherBox1'), 7);
                renderWeather($('.weatherBox2'), 15);
                renderWeather($('.weatherBox3'), 23);
            })
            .fail(function (data, status) {
                console.log(status);
                alert('weather status: ' + status);
            });// Weather Map API
    };
    weather();

});//--ready--