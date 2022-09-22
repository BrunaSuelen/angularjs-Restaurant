(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/sign-up/sign-up.html',
  bindings: {
    signUp: '<'
  },
  controller: SignUpController,
  controllerAs: ctrl
});
})();
