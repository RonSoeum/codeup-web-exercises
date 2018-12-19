"use strict";

$(document).ready(function(){

    // Promise Delayed Resolve
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    // Fetch Last Commit
    const API_TOKEN = 'KEY';

    const fetchOptions = {
        headers: {'Authorization': `token ${API_TOKEN}`}
    };

    const getGithubUserLastCommit = function(user){
        return fetch(`https://api.github.com/users/${user}/events`, fetchOptions)
            .then(response => response.json())
            .then(lastCommit => lastCommit[0].created_at)
            .then(lastCommit => console.log(lastCommit))
            .catch(error => console.error(error));
    };
    getGithubUserLastCommit("RonSoeum");

});//ready