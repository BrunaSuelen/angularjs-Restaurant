(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var $ctrl = this;

    //Formulario
    $ctrl.itemMenuData = null;
    $ctrl.completed = false;
    $ctrl.itemMenuInvalid = false;

    //Campos do Formulário 
    $ctrl.name = '';
    $ctrl.sobrenome = '';
    $ctrl.endereco = '';
    $ctrl.email = '';
    $ctrl.telefone = '';
    $ctrl.itemMenu = '';



    $ctrl.save = function() {
      $ctrl.completed = true;

      MenuService.setUser({
        name: $ctrl.name,
        endereco: $ctrl.endereco,
        telefone: $ctrl.telefone,
        email: $ctrl.email,
        sobrenome: $ctrl.sobrenome,
        item: $ctrl.itemMenuData
      })
    };


    $ctrl.validateItemMenu = function() { 
      let itemMenuUppercase = $ctrl.itemMenu.toUpperCase();

      if (itemMenuUppercase) {
        MenuService
          .validateShortNameMenu(itemMenuUppercase)   
          .then((data) => {
            $ctrl.itemMenuData = data;
            $ctrl.itemMenuInvalid = false;
          })
          .catch(() => {
            $ctrl.itemMenu = '';
            $ctrl.itemMenuInvalid = true;
            $ctrl.itemMenuData = null;
          })
      }

    };
  }
})();
