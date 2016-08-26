angular.module('app').factory('artigoService', artigoService);
artigoService.$inject = ['$firebaseObject', '$firebaseArray'];

function artigoService($firebaseObject, $firebaseArray) {

    var rootrEF = firebase.database().ref().child('constituicao');
    var object = $firebaseObject(rootrEF);
    var array = $firebaseArray(rootrEF);
     var scrollRef = new firebase.util.Scroll(rootrEF, 'artigo');

    return {
        getArray: getArray,
        getObject: getObject,
        getAll: getAll,
        getByArtigo: getByArtigo,
        lista:lista,
        loadMore: loadMore,
        hasNext: hasNext
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

        var query = rootrEF.orderByChild("artigo");
        return $firebaseArray(query);


    }

     function lista() {
          scrollRef.scroll.next(6);
             return $firebaseArray(scrollRef);


        }

        function loadMore() {
            scrollRef.scroll.next(4);
        }

        function hasNext() {
            if (scrollRef.scroll.hasNext()) { return true; }
            else { return false; }
        }


}