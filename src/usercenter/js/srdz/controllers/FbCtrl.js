import {
  category
} from '../../data/data.js';
import angular from 'angular';
export default function FbCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.skuTemp = [];
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
    vm.isSubmitSuccess = false;
    vm.submitText = '提交';
    vm.isDisabled = false;
  }
  vm.category = category;

  vm.addSku = function () {
    vm.skuTemp.push({});
  };

  vm.showModal = false;

  vm.submit = function () {
    var para = $.extend({}, vm.data);
    para.type = vm.data.type.id;
    para.sku = {};
    // 循环规格数组s.skuTemp，把数据放入规格para.sku
    for (var i = 0; i < vm.skuTemp.length; i++) {
      var content = vm.skuTemp[i].content;
      if (content[content.length - 1] == ';') {
        content = content.substring(0, content.length - 2);
      }
      para.sku[vm.skuTemp[i].name] = content.split(';');
    }
    para.sku = angular.toJson(para.sku);


    vm.submitText = '提交中';
    vm.isDisabled = true;
    $http.post('/SrdzFb/srfb', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
      } else {
        vm.errorMsg = '网络延迟,提交失败,请重试';
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
  $http.post('/LoginService/Certify').success((d) => {
    if (d.success) {
      vm.isfuws = d.result.ServiceCertify;
    }
  });
}