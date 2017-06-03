console.log("BLL user.js");
var app = angular.module('bllapp', []);

app.controller('mainController', ['$http', function($http) {

this.url = 'http://localhost:3000' || 'https://bll-app-fe.herokuapp.com';

// this.url = 'https://bll-app-fe.herokuapp.com' || 'http://localhost:3000';


    this.message = "controller works";

    this.users = [];
    this.events = [];
    this.formdata = {};
    this.userdata = {};

    //========================================
    //           USER SHOW
    //========================================

    this.showUser = function (id) {
        console.log("showing user..." + id);
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
        console.log("deleting..." + id);
        $http({
            method: 'DELETE',
            url:    this.url + '/users/' + id,
        }).then(function(response) {
            this.user = response.data;
            return this.users;
        }.bind(this));

    };

    //========================================
    //           USER EDIT
    //========================================

    this.editUser = function () {
        var id = this.specificUser.user.id;
        console.log("edit user..." + id);
        $http({
            method: 'PUT',
            url: this.url + '/users/' + id,
            data: this.edituserdata
        }).then(function(response) {
            // this.edituserdata={};
            this.getUsers();
        }.bind(this));
    };



    //========================================
    //            USER INDEX
    //========================================

    this.getUsers = function(){
        console.log("getting users...");
        $http({
            method: 'GET',
            // url: 'http://localhost:3000/users',
            url: this.url + '/users',
            }).then(function(response) {
                console.log(response);
                this.users = response.data;
                console.log("here are the users", this.users);
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
        this.getUsers();
    };  //end create event

    //========================================
    //             EVENT DELETE
    //========================================

    this.deleteEvent = function(id) {
        console.log("deleting..." + id);
        // this.specificEvent.event.id = id;
        $http({
            method: 'DELETE',
            url:    this.url + '/events/' + id,
            data: this.editeventdata
        }).then(function(response) {
            console.log(response);
            this.editformdata={};
            this.getEvents();
        }.bind(this));
    };


    //========================================
    //             EVENT EDIT
    //========================================


    this.editEvent = function () {
        var id = this.specificEvent.event.id;
        console.log("edit event..." + id);
        $http({
            method: 'PUT',
            url: this.url + '/events/' + id,
            data: this.editeventdata
        }).then(function(response) {
            this.editformdata={};
            this.getEvents();
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
            url: 'http://localhost:3000/events/' + id,
            }).then(function(response) {
                console.log(response);
                this.specificEvent = response.data;
                console.log("This is the specificEvent ", this.specificEvent);
            }.bind(this));
    };
    //========================================
    //             EVENT INDEX
    //========================================

    this.getEvents = function(){
        console.log("Getting Events");
        console.log(this.url);
        $http({
            method: 'GET',
            url: this.url + '/events',
            }).then(function(response) {
                console.log(response);
                this.events = response.data;
                console.log(this.events);
            }.bind(this));
    };

    $('#open-signup').on('click', function () {
          $('#signup-modal').css('display', 'block');
    });

  $('.close').on('click', function() {
  $('#signup-modal').css('display', 'none');
  });
}]);
