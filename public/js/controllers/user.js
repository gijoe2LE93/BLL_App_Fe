console.log("BLL user.js");
var app = angular.module('bllapp', []);

app.controller('mainController', ['$http', function($http) {
    // this.url =  'https://bll-app-fe.herokuapp.com/' || 'http://localhost:3000';
    this.url = 'http://localhost:3000';
    this.message = "controller works";
    this.users = [];
    this.formdata = {};
    this.eventdata = {};

    //========================================
    //           USER SHOW
    //========================================

    this.showUser = function (id) {
        console.log("showing user...");
        console.log(id);
        $http({
            method: 'GET',
            url: this.url + '/users/' + id,
            }).then(function(response) {
                console.log(response);
                this.specificUser = response.data;
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

    this.deleteUser = function(id) {
        console.log("deleting...");
        console.log(id);
        $http({
            method: 'DELETE',
            url:    this.url + '/users/' + id,
        }).then(function(response) {
            this.user = response.data;
            // this.createUser();
        }.bind(this));
    };

    //========================================
    //           USER EDIT
    //========================================

    this.editUser = function (id) {
        console.log("edit user...");
        console.log(id);
        $http({
            method: 'PUT',
            url: this.url + '/users/' + id,
        }).then(function(response) {
            this.user = response.data;
        }.bind(this));
    };



    //========================================
    //            USER INDEX
    //========================================

    this.getUsers = function(){
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

    };


    //========================================
    //            EVENT CONTROLLER
    //========================================
    //========================================
    //             EVENT CREATE
    //========================================

    this.createEvent = function(result) {
        console.log("Event Create click");
        console.log("Event Form Data: ", this.eventdata);
        console.log(this.url, "this.url");
        $http({
            method: 'POST',
            url:    this.url  + '/events',
            data:   this.eventdata,
        }).then(function (result) {
        console.log('Data from server: ', result);
        this.eventdata = {};
        }.bind(this));
    };  //end create event

    //========================================
    //             EVENT DELETE
    //========================================

    this.deleteEvent = function(id) {
        console.log("deleting...");
        console.log(id);
        $http({
            method: 'DELETE',
            url:    this.url + '/events/' + id,
        }).then(function(response) {
            this.event = response.data;
        }.bind(this));
    };

    //========================================
    //             EVENT EDIT
    //========================================

    this.editEvent = function (id) {
        console.log("edit event...");
        console.log(id);
        $http({
            method: 'PUT',
            url: this.url + '/events/' + id,
        }).then(function(response) {
            this.event = response.data;
        }.bind(this));
    };

    //========================================
    //           EVENT SHOW
    //========================================

    this.showEvent = function (id) {
        console.log("showing event...");
        console.log(id);
        $http({
            method: 'GET',
            url: this.url + '/events/' + id,
            }).then(function(response) {
                console.log(response);
                this.specificEvent = response.data;
                console.log(this.events);
            }.bind(this));
    };
    //========================================
    //             EVENT INDEX
    //========================================

    this.getEvents = function(){
        console.log("Getting Events");
        $http({
            method: 'GET',
            url: 'http://localhost:3000/events',
            }).then(function(response) {
                console.log(response);
                this.events = response.data;
                console.log(this.events);
            }.bind(this));
    };




}]);
