"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 1
let usersWithThreePlusLanguages = users.filter(user => user.languages.length >= 3);
// 2
let usersEmail = users.map(user => user.email);
// 3
let usersCombinedExperience = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
}, 0);
// 4
let usersAverageExperience = usersCombinedExperience / users.length;
// 5
let usersLongestEmail = users.reduce((longestEmail, user) => {
    return longestEmail.length > user.email.length ? longestEmail : user.email;
}, "");
// 6
let usersNameAsString = users.reduce((names, user) => {
    names.push(user.name);
    return names
        }, []).join(', ');
let yourInstructors = `Your instructors are: ${usersNameAsString}.`;
// 6.1
let betterSolution = users.map(user => user.name).join(", ");
let yourInstructorss = `Your instructors are: ${betterSolution}.`;
// 6.2 Class solution
let yourInstructorsss = users.reduce((names, user, index) => {
    if(index === users.length -1){
        return `${names}${user.name}.`
    }
    return `${names}${user.name}, `;
}, 'Your instructors are: ');
// Bonus
// let uniqueLanguages = users.reduce((a, user) => {
//     a !== user.languages ? a : user;
// }, "");