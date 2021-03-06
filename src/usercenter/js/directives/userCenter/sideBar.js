export default function sideBar() {
  return {
    replace: true,
    scope: true,
    template: function () {
      return `
      <div class="ucSidebar">
        <dl class="ucSidebar_menu">
          <dt class="ucSidebar_menu_title">
            {{ mainVm.routes.title }}
          </dt>
          <dd class="ucSidebar_menu_list" ng-cloak>
            <a ng-repeat="route in mainVm.routes.items"
              class="ucSidebar_menu_list_item"
              ng-class="{'ucSidebar_menu_list_item--active': route.active}"
              ng-click="vm.changeRoute($index)"
              ui-sref="{{route.url}}"
            >{{route.text}}</a>
          </dd>
        </dl>
      </div>
      `;
    },
    controller: ['$scope', '$location', function ($scope, $location) {
      let vm = this;

      vm.changeRoute = (index) => {
        $scope.$parent.mainVm.routes.items.forEach((route, i) => {
          route.active = i === index ? true : false;
        });
      };
      // 刷新页面时，判断当前路由，更改菜单高亮项
      (function () {
        let index;
        let currentPath;
        let lastIndex = $location.path().lastIndexOf('/');
        if (lastIndex !== 0) {
          currentPath = $location.path().substring(1, lastIndex);
        } else {
          currentPath = $location.path().substring(1);
        }
        $scope.$parent.mainVm.routes.items.forEach((route, i) => {
          if (route.url.indexOf('.') !== -1 && route.url.slice(0, route.url.indexOf('.')) === currentPath) {
            index = i;
          } else if (route.url.slice(0) === currentPath) {
            index = i;
          }
        });
        vm.changeRoute(index === undefined ? 0 : index);
      }());
    }],
    controllerAs: 'vm'
  };
}
