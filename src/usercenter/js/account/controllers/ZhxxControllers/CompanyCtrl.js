// 企业账号---公司信息控制器
import angular from 'angular';
import $ from 'jquery';
import {
  companynum,
  companytrade,
  companynature
} from '../../../data/data.js';
export default function CompanyCtrl($http) {
  var vm = this;
  vm.companynum = companynum;
  vm.companytrade = companytrade;
  vm.companynature = companynature;
  vm.businessTemp = [];
  vm.fuliTemp = [];
  vm.myjbusinessTemp = [];
  vm.data = {};
  vm.draft = {};
  vm.fuliT = {};
  vm.mapcity = '';
  // vm.address1 = '';
  function fail() {
    vm.isSubmitSuccess = false;
    vm.isDisabled = false;
  }
  vm.getDraft = function (fn) {
    $http.post('/UserAccount/Company').success((data) => {
      fn(data.result.area);
      vm.mapcity = angular.fromJson(data.result.area).district.name;
      // console.log(vm.mapcity);
      // vm.address1 = data.result.addr;
      if (data.result.business) {
        vm.businessTemp = angular.fromJson(data.result.business);
      }
      if (data.result.myj_business) {
        vm.myjbusinessTemp = angular.fromJson(data.result.myj_business);
      }
      if (data.result.fuli) {
        vm.fuliTep = data.result.fuli.split(',');
        for (var i = 0, len = vm.fuliTep.length; i < len; i++) {
          vm.fuliTemp.push({ value: vm.fuliTep[i] });
        }
      }
      $.extend(vm.data, data.result);
    });
  };
  // 添加业务范围与添加福利
  vm.addBusiness = function () {
    vm.businessTemp.push({});
  };
  vm.addFuli = function () {
    vm.fuliTemp.push({});
  };
  vm.myjBusiness = function () {
    vm.myjbusinessTemp.push({});
  };
  // 手机号码是否可见
  vm.isVisible = function (elem) {
    if ($(elem).is(':checked')) {
      vm.data.phonevisible = true;
    } else {
      vm.data.phonevisible = false;
    }
  };
  // 保存数据
  vm.submit = function () {
    var content = vm.draft.basic();
    var para = $.extend(vm.data, content);
    para.business = [];
    para.fuli = [];
    para.myj_business = [];
    for (var i = 0, len = vm.businessTemp.length; i < len; i++) {
      para.business.push(vm.businessTemp[i]);
    }
    for (var k = 0, lengt = vm.myjbusinessTemp.length; k < lengt; k++) {
      para.myj_business.push(vm.myjbusinessTemp[k]);
    }
    para.business = angular.toJson(para.business);
    para.myj_business = angular.toJson(para.myj_business);
    for (var j = 0, leng = vm.fuliTemp.length; j < leng; j++) {
      if (j < vm.fuliTemp.length - 1) {
        para.fuli += vm.fuliTemp[j].value + ',';
      } else {
        para.fuli += vm.fuliTemp[j].value;
      }
    }
    $http.post('/UserAccount/CompanyEdit', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
      } else {
        vm.errorMsg = d.msg;
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
}
