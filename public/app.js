console.log("BLL APP.js");

var app = angular.module('bll', []);
this.url = 'https://bll-app-be.herokuapp.com/' || 'http://localhost:3000';



app.controller('mainController', ['$http', function($http) {
    this.message = "controller works";
    this.getUsers = function(){

    $http({
        method: 'GET',
        url: 'http://localhost:3000/users',
    }).then(function(response) {
        console.log(response);
    });
};
    this.getUsers();





}]);
