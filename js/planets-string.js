(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var arrayToString = planetsArray.join('<br>');
    console.log(arrayToString);

    // Bonus

    function arrayToUl(target) {
        var ul = document.createElement('ul'),
            li;

        target.appendChild(ul);
        return function (a) {
            if (Array.isArray(a)) {
                if (!li) {
                    li = document.createElement('li');
                    ul.appendChild(li);
                }
                a.forEach(arrayToString(li));
                return;
            }
            li = document.createElement('li');
            li.appendChild(document.createTextNode(a));
            ul.appendChild(li);
        };
    }

    planetsArray.forEach(arrayToUl(document.getElementById('myList')));

    // Class Example

    var htmlString = '<ul><li>';

    htmlString += planetsArray.join('</li><li>');

    htmlString += '</li></ul>';

    document.body.innerHTML += htmlString;

})();