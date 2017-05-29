console.log("BLL user.js");
var app = angular.module('bll_app', []);

this.url = 'http://localhost:3000' || 'https://bll-app-be.herokuapp.com/';


app.controller('mainController', ['$http', function($http) {
    this.message = "controller works";
    this.users = [];
    this.formdata = {};


    //========================================
    //           USER CREATE
    //========================================

    // this.createUser = function() {
    //     console.log("User Create click");
    //     console.log("User Form Data: ", this.formdata);
    //     $http({
    //         method: 'POST',
    //         url:    this.url  + '/users',
    //         data:   this.formdata,
    //     }).then(function(result){
    //     console.log('Data from server: ', result);
    //     this.formdata = {};
    //     this.users.unshift(result.data);
    //     }.bind(this));
    // };

    //========================================
    //           USER DELETE
    //========================================

    // this.deleteUser = function() {
    //     console.log("deleting...");
    //     $http({
    //         method: 'DELETE',
    //         url:    this.url + '/users/:id',
    //     }.bind(this));
    // };

    //========================================
    //           USER UPDATE
    //========================================

    // this.updateUser = function () {
    //     console.log("update user...");
    // };
    //
    //========================================
    //           USER SHOW
    //========================================

    // this.showUser = function () {
    //     console.log("showing user...");
    //     $http({
    //         method: 'GET',
    //         url: this.url + '/users/:id',
    //         }).then(function(response) {
    //             console.log(response);
    //             this.users = response.data;
    //             console.log(this.users);
    //         }.bind(this));
    // };

    //========================================
    //            USER INDEX
    //========================================

        console.log("getting users...");
        $http({
            method: 'GET',
            url: 'http://localhost:3000/users',
            }).then(function(response) {
                console.log(response);
                this.users = response.data;
                console.log(this.users);
            }.bind(this));






}]);
