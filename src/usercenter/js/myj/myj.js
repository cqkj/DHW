import angular from 'angular';

// 依赖模块
import '../directives/formComponents.js';
import '../directives/pagination.js';
import '../directives/listComponents.js';
import '../directives/modalComponents.js';
// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBars from '../directives/userCenter/sideBars.js';
import switchType2 from '../directives/userCenter/switchType2.js';

import MainCtrl from './controllers/MainCtrl.js';
import FbCtrl from './controllers/FbCtrl.js';
import DetailCtrl from './controllers/DetailCtrl.js';
import ScCtrl from './controllers/ScCtrl.js';
import YfbCtrl from './controllers/YfbCtrl.js';
import YfbAllCtrl from './controllers/yfb/YfbAllCtrl.js';
import YfbBtgCtrl from './controllers/yfb/YfbBtgCtrl.js';
import YfbDshCtrl from './controllers/yfb/YfbDshCtrl.js';
import YfbTgCtrl from './controllers/yfb/YfbTgCtrl.js';
import YfbYxjCtrl from './controllers/yfb/YfbYxjCtrl.js';
// 买家订单
import BuyerCtrl from './controllers/BuyerCtrl.js';
import BuyerallCtrl from './controllers/buyercontrollers/BuyerallCtrl.js';
import BuyercloseCtrl from './controllers/buyercontrollers/BuyercloseCtrl.js';
import BuyerdfkCtrl from './controllers/buyercontrollers/BuyerdfkCtrl.js';
import BuyerdshCtrl from './controllers/buyercontrollers/BuyerdshCtrl.js';
import BuyerdfhCtrl from './controllers/buyercontrollers/BuyerdfhCtrl.js';
import BuyerjywcCtrl from './controllers/buyercontrollers/BuyerjywcCtrl.js';
// 卖家订单
import SellerCtrl from './controllers/SellerCtrl.js';
import SellerallCtrl from './controllers/sellercontrollers/SellerallCtrl.js';
import SellercloseCtrl from './controllers/sellercontrollers/SellercloseCtrl.js';
import SellerdfkCtrl from './controllers/sellercontrollers/SellerdfkCtrl.js';
import SellerdshCtrl from './controllers/sellercontrollers/SellerdshCtrl.js';
import SellerdfhCtrl from './controllers/sellercontrollers/SellerdfhCtrl.js';
import SellerjywcCtrl from './controllers/sellercontrollers/SellerjywcCtrl.js';
import SellerdetailCtrl from './controllers/sellercontrollers/SellerdetailCtrl.js'; // 显示买家订单详情




let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'formComponents', 'modalComponents', 'listComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // 从cookie获取当前个人中心类型（企业或个人）
    let logintype;
    let cookies = document.cookie.split('; ');
    cookies.forEach((cookie) => {
      if (cookie.indexOf('logintype') !== -1) {
        logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
      }
    });
    $urlRouterProvider.otherwise(logintype === 1 ? '/sc' : '/fb');
    $stateProvider
      .state('fb', {
        url: '/fb',
        templateUrl: '/partials/myj/partial-fb.html',
        controller: 'FbCtrl as fbVm'
      })
      .state('detail', {
        url: '/detail/:id',
        templateUrl: '/partials/myj/partial-detail.html',
        controller: 'DetailCtrl as detailVm'
      })
      .state('sc', {
        url: '/sc',
        templateUrl: '/partials/myj/partial-sc.html',
        controller: 'ScCtrl as scVm'
      })
      .state('yfb', {
        url: '/yfb',
        templateUrl: '/partials/myj/partial-yfb.html',
        controller: 'YfbCtrl as yfbVm'
      })
      .state('yfb.all', {
        url: '/all',
        templateUrl: '/partials/myj/yfb/partial-yfb-all.html',
        controller: 'YfbAllCtrl as yfbAllVm'
      })
      .state('yfb.dsh', {
        url: '/dsh',
        templateUrl: '/partials/myj/yfb/partial-yfb-dsh.html',
        controller: 'YfbDshCtrl as yfbDshVm'
      })
      .state('yfb.btg', {
        url: '/btg',
        templateUrl: '/partials/myj/yfb/partial-yfb-btg.html',
        controller: 'YfbBtgCtrl as yfbBtgVm'
      })
      .state('yfb.tg', {
        url: '/tg',
        templateUrl: '/partials/myj/yfb/partial-yfb-tg.html',
        controller: 'YfbTgCtrl as yfbTgVm'
      })
      .state('yfb.yxj', {
        url: '/yxj',
        templateUrl: '/partials/myj/yfb/partial-yfb-yxj.html',
        controller: 'YfbYxjCtrl as yfbYxjVm'
      })
      .state('buyer', {
        url: '/buyer',
        templateUrl: '/partials/myj/partial-buyer.html',
        controller: 'BuyerCtrl as buyerVm'
      })
      .state('buyer.all', {
        url: '/all',
        templateUrl: '/partials/myj/buyer/partial-buyer-all.html',
        controller: 'BuyerallCtrl as allVm'
      })
      .state('buyer.dfk', {
        url: '/dfk',
        templateUrl: '/partials/myj/buyer/partial-buyer-dfk.html',
        controller: 'BuyerdfkCtrl as dfkVm'
      })
      .state('buyer.dsh', {
        url: '/dsh',
        templateUrl: '/partials/myj/buyer/partial-buyer-dsh.html',
        controller: 'BuyerdshCtrl as dshVm'
      })
      .state('buyer.dfh', {
        url: '/dfh',
        templateUrl: '/partials/myj/buyer/partial-buyer-dfh.html',
        controller: 'BuyerdfhCtrl as dfhVm'
      })
      .state('buyer.jywc', {
        url: '/jywc',
        templateUrl: '/partials/myj/buyer/partial-buyer-jywc.html',
        controller: 'BuyerjywcCtrl as jywcVm'
      })
      .state('buyer.close', {
        url: '/close',
        templateUrl: '/partials/myj/buyer/partial-buyer-close.html',
        controller: 'BuyercloseCtrl as closeVm'
      })
      .state('seller', {
        url: '/seller',
        templateUrl: '/partials/myj/partial-seller.html',
        controller: 'SellerCtrl as sellerVm'
      })
      .state('seller.all', {
        url: '/all',
        templateUrl: '/partials/myj/seller/partial-seller-all.html',
        controller: 'SellerallCtrl as allVm'
      })
      .state('seller.dfk', {
        url: '/dfk',
        templateUrl: '/partials/myj/seller/partial-seller-dfk.html',
        controller: 'SellerdfkCtrl as dfkVm'
      })
      .state('seller.dfh', {
        url: '/dfh',
        templateUrl: '/partials/myj/seller/partial-seller-dfh.html',
        controller: 'SellerdfhCtrl as dfhVm'
      })
      .state('seller.dsh', {
        url: '/dsh',
        templateUrl: '/partials/myj/seller/partial-seller-dsh.html',
        controller: 'SellerdshCtrl as dshVm'
      })
      .state('seller.jywc', {
        url: '/jywc',
        templateUrl: '/partials/myj/seller/partial-seller-jywc.html',
        controller: 'SellerjywcCtrl as jywcVm'
      })
      .state('seller.close', {
        url: '/close',
        templateUrl: '/partials/myj/seller/partial-seller-close.html',
        controller: 'SellercloseCtrl as closeVm'
      })
      .state('sellerdetail', {
        url: '/sellerdetail/:id/:number',
        templateUrl: '/partials/myj/seller/partial-seller-detail.html',
        controller: 'SellerdetailCtrl as SellerdetailVm'
      });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBars', sideBars)
  .directive('switchType2', switchType2)

  .controller('MainCtrl', ['$location', MainCtrl])
  .controller('FbCtrl', ['$http', FbCtrl])
  .controller('ScCtrl', ['$http', ScCtrl])
  .controller('DetailCtrl', ['$http', '$stateParams', DetailCtrl])
  .controller('YfbCtrl', [YfbCtrl])
  .controller('YfbAllCtrl', [YfbAllCtrl])
  .controller('YfbBtgCtrl', [YfbBtgCtrl])
  .controller('YfbDshCtrl', [YfbDshCtrl])
  .controller('YfbTgCtrl', [YfbTgCtrl])
  .controller('YfbYxjCtrl', [YfbYxjCtrl])
  // 买家订单
  .controller('BuyerCtrl', [BuyerCtrl])
  .controller('BuyerallCtrl', ['$http', BuyerallCtrl])
  .controller('BuyercloseCtrl', ['$http', BuyercloseCtrl])
  .controller('BuyerdfkCtrl', ['$http', BuyerdfkCtrl])
  .controller('BuyerdshCtrl', ['$http', BuyerdshCtrl])
  .controller('BuyerdfhCtrl', ['$http', BuyerdfhCtrl])
  .controller('BuyerjywcCtrl', ['$http', BuyerjywcCtrl])
  // 卖家订单
  .controller('SellerCtrl', [SellerCtrl])
  .controller('SellerallCtrl', ['$http', SellerallCtrl])
  .controller('SellercloseCtrl', ['$http', SellercloseCtrl])
  .controller('SellerdfkCtrl', ['$http', SellerdfkCtrl])
  .controller('SellerdshCtrl', ['$http', SellerdshCtrl])
  .controller('SellerdfhCtrl', ['$http', SellerdfhCtrl])
  .controller('SellerjywcCtrl', ['$http', SellerjywcCtrl])
  .controller('SellerdetailCtrl', ['$http', '$stateParams', SellerdetailCtrl]); // 显示买家订单详情

export default app;
