export default function MainCtrl() {
  var vm = this;
  // 个人账号
  vm.routes_p = [
    {
      url: 'sc',
      text: '收藏列表'
    },
    {
      url: 'buyer.all',
      text: '买家订单'
    }
  ];
  // 公司账号
  vm.routes_c = [
    {
      url: 'fb',
      text: '发布商品'
    },
    {
      url: 'yfb.all',
      text: '已发布商品'
    },
    {
      url: 'seller.all',
      text: '卖家订单'
    }
  ];
  vm.routesArrBuild = function () {
    let cookies = {};
    document.cookie.split('; ').forEach(item => {
      let arr = item.split('=');
      cookies[arr[0]] = arr[1];
    });
    if (cookies.accountType) {
      vm.accountType = cookies.accountType;
      vm.logintype = cookies.logintype;
    }
    vm.routesArr = [{
      title: '买家功能',
      items: vm.routes_p
    }];
    if (vm.logintype != 1) {
      vm.routesArr.push({
        title: '卖家功能',
        items: vm.routes_c,
        isSeller: true
      });
    }
  };
  vm.routesArrBuild();
  vm.normal = [
    {
      href: 'http://www.dreamhiway.com/apphome#/zhxx/addfd',
      text: '添加分店'
    }
  ];
}
