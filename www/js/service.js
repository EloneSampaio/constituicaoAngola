angular.module('app').factory('artigoService', artigoService);
artigoService.$inject = ['$firebaseObject', '$firebaseArray'];

function artigoService($firebaseObject, $firebaseArray) {

    var rootrEF = firebase.database().ref().child('constituicao');
    var object = $firebaseObject(rootrEF);
    var array = $firebaseArray(rootrEF);

    return {
        getArray: getArray,
        getObject: getObject,
        getAll: getAll,
        getByArtigo: getByArtigo
    }


    function getArray() {

        return array.$loaded();
    }

    function getObject() {

        return object.$loaded();
    }

    function getAll() {
        return object;
    }

    function getByArtigo() {

        var query = rootrEF.orderByChild("artigo").limitToLast(2);
        return $firebaseArray(query);


    }


}