console.log("BLL user.js");
var app = angular.module('bllapp', []);


app.controller('mainController', ['$http', function($http) {
    this.url =  'https://bll-app-fe.herokuapp.com/' || 'http://localhost:3000';
    this.message = "controller works";
    this.users = [];
    this.formdata = {};

    //========================================
    //           USER SHOW
    //========================================

    this.showUser = function (id) {
        console.log("showing user...");
        $http({
            method: 'GET',
            url: this.url + '/users/:id',
            }).then(function(response) {
                console.log(response);
                this.users = response.data;
                console.log(this.users);
            }.bind(this));
    };
    //========================================
    //           USER CREATE
    //========================================

    this.createUser = function(result) {
        console.log("User Create click");
        console.log("User Form Data: ", this.formdata);
        console.log(this.url, "this.url");
        $http({
            method: 'POST',
            url:    this.url  + '/users',
            data:   this.formdata,
        }).then(function (result) {
        console.log('Data from server: ', result);
        this.formdata = {};
        }.bind(this));
    };  //end create user

    //========================================
    //           USER DELETE
    //========================================

    this.deleteUser = function() {
        console.log("deleting...");
        $http({
            method: 'DELETE',
            url:    this.url + '/users/:id',
        }).then(function(response) {
            this.user = response.data;
            this.createUser();
        }.bind(this));
    };

    //========================================
    //           USER UPDATE
    //========================================

    // this.updateUser = function () {
    //     console.log("update user...");
    // };
    //


    //========================================
    //            USER INDEX
    //========================================

        console.log("getting users...");
        $http({
            method: 'GET',
            url: 'http://localhost:3000/users',
            // url: this.url + '/users',
            }).then(function(response) {
                console.log(response);
                this.users = response.data;
                console.log(this.users);
            }.bind(this));



}]);
