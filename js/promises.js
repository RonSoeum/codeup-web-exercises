"use strict";

$(document).ready(function(){

    // Promise Delayed Resolve
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    // UserInfo
    const getGithubUserInfo = function(user){
        return fetch(`https://api.github.com/users/${user}`,
            {headers: {'Authorization': 'token KEY'}})
            .then(response => response.json())
            .then(user => console.log(user))
            .catch(error => console.error(error));
    };
    getGithubUserInfo("RonSoeum");

    // User Repo List
    const getGithubUserRepoList = function(user){
        fetch(`https://api.github.com/users/${user}/repos`,
            {headers: {'Authorization': 'token KEY'}})
            .then(response => response.json())
            .then(repo => console.log(repo))
            .catch(error => console.error(error));
    };
    getGithubUserRepoList("RonSoeum");

    // User Repo commit
    const getGithubUserRepoCommit = function (user){
        fetch(`https://api.github.com/repos/${user}/codeup-web-exercises/commits`,
            {headers: {'Authorization': 'token KEY'}})
            .then(response => response.json())
            .then(commit => console.log(commit[0].commit.author.date))
            .catch(error => console.error(error));
    };
    getGithubUserRepoCommit("RonSoeum");

});//ready