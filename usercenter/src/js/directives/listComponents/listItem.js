export default function listItem() {
  return {
    replace: true,
    template: function(elem, attrs) {
      return `
        <li>
          <div class="list_item_date">
            <i class="list_item_del" ng-if="${attrs.del}" ng-click="vm.delItem(${attrs.delkey})"></i>
            <span ng-show="${attrs.toptxt}">${attrs.datekeytxt} : {{item.${attrs.datekey}}}</span>
          </div>
          <ul class="list_item_boxes clearfix">
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" ng-style="{width: box.width}">
              <a ng-if="box.link" href="{{ box.link }}{{ item[box.linkkey] }}" target="_blank">{{ item[box.key] }}</a>
              <a ng-if="box.resumlink" href="${attrs.editurl}">{{ item[box.key] }}</a>
              <img ng-if="box.img && !vm.isArray(box.key)" ng-src="${attrs.imgurl}{{item[box.key]}}">
              <span ng-if="!box.link && !box.img && !box.resumlink">{{ item[box.key] }}</span>
              <span ng-if="vm.isArray(box.key) && !box.img"> {{box.key[0].zid}}{{ item[box.key[0].zikey] }}<br/>{{ box.key[1].zid }}{{item[box.key[1].zikey]}}{{box.key[1].zikeyfh}}</span>
              <span ng-if="vm.isArray(box.key) && box.img"><img ng-src="http://upload.dreamhiway.com/img/{{item[box.key[0].zikey]}}_280x280.jpg">{{item[box.key[1].zikey]}}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%">
              <a href='{{item.states === 2 ? "${attrs.editurl}" + item.id  : "javascript:;" }}' ng-if="${attrs.projectname} === srdz ">${attrs.operation}</a>
              <a href="${attrs.editurl}" ng-click="${attrs.vm}.${attrs.func}" ng-if="${attrs.projectname} === false ">${attrs.operation}</a>  
            </li>
            <li ng-if="${attrs.orderstate}" class="list_item_box" style="width:15%">
              <a href='/pay2/{{item.number}}' ng-if="item['state']===0">去付款</a>
              <a href="http://localhost:8088/cpzcorder/drderdetail?number={{item.number}}" ng-if="item['state']!==0">查看详情</a>
            </li>
          </ul>
        </li>
      `;
    }
  };
}
