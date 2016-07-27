var app = angular.module('BusDash', ['ui.router']);


// Add these states to an array in a seperate file..
app.config(function($stateProvider){
    
    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: 'pages/home.html'
    }
    
    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'pages/about.html'
    }
    
    var shareState = {
        name: 'share',
        url: '/share',
        templateUrl: 'pages/share.html'
    }
    
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(shareState);
});