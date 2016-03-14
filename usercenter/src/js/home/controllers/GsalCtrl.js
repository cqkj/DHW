export default function GsalCtrl($http) {
  var vm = this;
  vm.data = {};
    function fail() {
        vm.isSubmitSuccess = false;
        vm.isDisabled = false;
    }
  vm.submit = function() {
    var para = $.extend({},vm.data);
    $http.post('/CompanyHomeEdit/CaseAdd',para).success(function(d){
      if(d.success){
        vm.isSubmitSuccess = true;
      }else {
        vm.errorMsg = res.msg;
        fail();
      }
      vm.showModal = true;
    }).error(() => {
       fail();
       vm.showModal = true;
    })
  }
}
