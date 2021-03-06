export default function MainCtrl() {
  var vm = this;
  // 个人账号
  vm.routes_p = [
    {
      url: 'jlbj',
      text: '简历编辑',
      active: false
    },
    {
      url: 'jlyl',
      text: '简历预览',
      active: false
    },
    {
      url: 'ytjl',
      text: '已投简历',
      active: false
    },
    {
      url: 'zwsc',
      text: '职位收藏',
      active: false
    },
    {
      url: 'preplay',
      text: '我的评价',
      active: false
    }
  ];
  // 公司账号
  vm.routes_c = [
    {
      url: 'fbzp',
      text: '发布招聘',
      active: false
    },
    {
      url: 'zplb.published',
      text: '招聘列表',
      active: false
    },
    {
      url: 'jllb.filter',
      text: '简历列表',
      active: false
    },
    {
      url: 'replay',
      text: '收到的评价',
      active: false
    }
  ];
  let cookies = {};
  document.cookie.split('; ').forEach(item => {
    let arr = item.split('=');
    cookies[arr[0]] = arr[1];
  });
  if (cookies.accountType) {
    vm.accountType = cookies.accountType;
    vm.logintype = cookies.logintype;
  }
  vm.routes = {
    title: '常用功能',
    items: vm.logintype == 1 ? vm.routes_p : vm.routes_c
  };
}
