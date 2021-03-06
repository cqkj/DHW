export default function Gslc($http) {
  let vm = this;
  vm.data = {};
  vm.dtlist = [];
  $http.post('/CompanyHomeEdit/CompanyDevelopmentDetail').success((d) => {
    vm.dtlist = d.result;
  });
  vm.submit = () => {
    var para = Object.assign({}, vm.data);
    $http.post('/CompanyHomeEdit/CompanyDevelopmentAdd', para).success((d) => {
      if (d.success) {
        alert('提交成功');
        location.reload();
      } else {
        alert('网络原因，提交失败');
        location.reload();
      }
    });
  };
  // 删除历程
  vm.del = (index, id) => {
    $http.post('/CompanyHomeEdit/CompanyDevelopmentDel', { id: id }).success((d) => {
      if (d.success) {
        alert('删除成功');
        location.reload();
      } else {
        alert('网络原因，删除失败');
        location.reload();
      }
    });
  };
}
