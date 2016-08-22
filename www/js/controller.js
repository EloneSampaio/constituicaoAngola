

angular.module('app')
    .controller('artigoController', artigoController)
    .controller('artigoDetalheController', artigoDetalheController);


artigoController.$inject = ['artigoService', '$scope', '$state'];
artigoDetalheController.$inject = ['artigoService', '$stateParams'];

function artigoController(artigoService, $scope, $state) {

    var vm = this;
    vm.dados = artigoService.getAll();
    $scope.alterado = alterado;
    $scope.selectables = [];
    vm.total = [];



    artigoService.getObject()
        .then(function () {
            angular.forEach(vm.dados, function (user) {
                $scope.selectables.push(user.artigo);

            });
        });


    $scope.someModel = $scope.selectables[0];

    function alterado(newValor, oldValor) {
        $state.go('app.home/artigo', { id: newValor });

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

