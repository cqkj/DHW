export default function replaymodal() {
  return {
    scope: true,
    replace: true,
    template: function (elem, attrs) {
      return `
      <div>
        <div class="replay_box" ng-style="style">
          <div class="replay_content">
            <span class="box_close"></span>
            <div class="replay_area">
              <textarea name="" id="" cols="30" rows="10" ng-model="${attrs.vm}.data.${attrs.name}"></textarea>
              <span class="replay_num">500字</span>
              <div class="form-footer clearfix">
                <button type="button" class="confirm_btn" ng-click="vm.submit()">确认</button>
              </div>
            </div>
            <span class="replay-arrow1"></span>
            <span class="replay-arrow2"></span>
          </div>
        </div>
       </div>
      `;
    },
    controller: ['$http', '$attrs', '$scope', function ($http, $attrs, $scope) {
      var vm = this;
      vm.submit = () => {
        var para = $scope.$parent[$attrs.vm].data;
        $http.post($attrs.replayapi, para).success((d) => {
          if (d.success) {
            alert('提交成功');
            location.reload();
          } else {
            alert('提交失败');
            location.reload();
          }
        });
      };
    }],
    controllerAs: 'vm'
  };
}