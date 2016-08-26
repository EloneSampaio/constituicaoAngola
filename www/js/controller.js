

angular.module('app')
    .controller('artigoController', artigoController)
    .controller('artigoDetalheController', artigoDetalheController);


artigoController.$inject = ['artigoService', '$scope', '$state'];
artigoDetalheController.$inject = ['artigoService', '$stateParams'];

function artigoController(artigoService, $scope, $state) {

    var vm = this;
    vm.dados = artigoService.lista();
    $scope.alterado = alterado;
    $scope.selectables = [];
    vm.total = [];



    artigoService.getObject()
        .then(function () {
            angular.forEach(artigoService.getAll(), function (user) {
                $scope.selectables.push(user.artigo);

            });
        });


    $scope.someModel = $scope.selectables[0];

    function alterado(newValor, oldValor) {
        $state.go('app.artigo', { id: newValor },{reload:true});

    }

     vm.loadMore = function () {

      console.log('carregando');

      artigoService.loadMore();  // calling the .next() method inside the Items service

      if (!artigoService.hasNext()) 
      { vm.noMoreItemsToLoad = true; }

      $scope.$broadcast('scroll.infiniteScrollComplete');

    }
  

}


function artigoDetalheController(artigoService, $stateParams) {

    var vm = this;

    artigoService.getArray().then(function (x) {
        var post = x.$getRecord('artigo' + $stateParams.id);
        vm.artigo = post;

        console.log(post);
    });


}


