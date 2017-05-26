console.log("BLL user.js");
var app = angular.module('bll_app', []);

this.url = 'https://bll-app-be.herokuapp.com/' || 'http://localhost:3000';



app.controller('mainController', ['$http', function($http) {
    this.message = "controller works";
    this.users = [];

    //========================================
    //            USER INDEX
    //========================================
    $http({
        method: 'GET',
        url: 'http://localhost:3000/users',
        }).then(function(response) {
            console.log(response);
            this.users = response.data;
            console.log(this.users);
        }.bind(this));



}]);
