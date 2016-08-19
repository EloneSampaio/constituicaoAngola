
var app = angular.module('app');

app.controller('artigoController', ['$scope', '$firebaseObject', '$state','$firebaseArray', function ($scope, $firebaseObject, $state,$firebaseArray) {

    var rootrEF = firebase.database().ref().child('constituicao');
    var object = $firebaseObject(rootrEF);
    var array = $firebaseArray(rootrEF);
    var vm = this;
    var dados = null;
    $scope.selectables = [];
    object.$loaded()
        .then(function () {
            angular.forEach(object, function (user) {
                $scope.selectables.push(user.artigo);

            });
        });


    $scope.someModel = $scope.selectables[0];

    $scope.alterado = function (newValor, oldValor) {
        array.$loaded().then(function (x) {
            var post = x.$getRecord('artigo'+newValor);
            console.log(post);
        }).catch(function (error) {
            console.log("Error:", error);
        });
    }

}]);

