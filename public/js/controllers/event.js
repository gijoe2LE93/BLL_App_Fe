console.log("BLL events.js");
var app = angular.module('bll_app', []);

this.url = 'https://bll-app-fe.herokuapp.com/' || 'http://localhost:3000';



app.controller('eventController', ['$http', function($http) {
    this.message = "controller works";
    this.events = [];

    //========================================
//     //            EVENT INDEX
//     //========================================
    $http({
        method: 'GET',
        url: 'http://localhost:3000/events',
        }).then(function(response) {
            console.log(response);
            this.events = response.data;
            console.log(this.events);
        }.bind(this));



}]);
