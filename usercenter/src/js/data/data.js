// export const dhw = {
//   imgurl: 'http://upload.dreamhiway.com/img/',
//   imguploadurl: 'http://upload.dreamhiway.com/uploadimg',
//   imgcuturl: 'http://upload.dreamhiway.com/imagecut.ashx',
//   mainurl: '//www.dreamhiway.com/',
//   staticurl: 'http://cdn.dreamhiway.com',
//   urlmain: '//www.dreamhiway.com/',
//   urlcdn: '/n.dreamhiway.com/',
//   urlzc: '//zc.dreamhiway.com/',
//   urlkj: '//kj.dreamhiway.com/',
//   urlhr: '//hr.dreamhiway.com/',
//   urlzckj: '//zckj.dreamhiway.com/',
//   urlzb: '//zb.dreamhiway.com/',
//   urldiy: '//diy.dreamhiway.com/',
//   urlsrdz: '//srdz.dreamhiway.com/',
//   urlcqbh: '/bh.dreamhiway.com/',
//   urlzxsj: '//zxsj.dreamhiway.com/',
//   urlgsss: '//gsss.dreamhiway.com/'
// };

export const dhw = {
  imgurl: 'http://192.168.2.10:82/img/',
  imguploadurl: 'http://192.168.2.10:82/uploadimg',
  imgcuturl: 'http://192.168.2.10:82/imagecut.ashx',
  mainurl: '//localhost:8085/',
  staticurl: 'http://192.168.2.10:81',
  urlmain: '//localhost:8085/',
  urlcdn: '//192.168.2.10:81/',
  urlzc: '//localhost:8088/',
  urlkj: '//localhost:8087/',
  urlhr: '//localhost:8086/',
  urlzckj: '//localhost:8091/',
  urlzb: '//localhost:8090/',
  urldiy: '//localhost:8092/',
  urlsrdz: '//localhost:8093/',
  urlcqbh: '//localhost:8094/',
  urlzxsj: '//localhost:8095/',
  urlgsss: '//localhost:8096/'
};

export const jobCategory = ['不限', '全职', '兼职', '实习'];
export const salary = ['2k以下', '2k-5k', '5k-10k', '10k-15k', '15k-25k', '25k-50k', '50k以上','面议'];
export const exprience = ['不限', '应届毕业生', '一年以下', '1-3年', '3-5年', '5-10年', '10年以上'];
export const education = ['不限', '大专', '本科', '硕士', '博士'];
//私人定制
export const category = [{id:'1',name:'创意定制'},{id:'2',name:'企业定制'},{id:'3',name:'找代加工'},{id:'4',name:'礼品定制'},{id:'5',name:'logo定制'},{id:'6',name:'制服定制'},{id:'7',name:'3D打印设备定制'},{id:'8',name:'智能设备硬件加工'}]
// 获取行业
export function getTrade($http, cb) {
  $http.post('/HRZpxxFb/Tradeinfo').success((res) =>
    cb(res)
    );
};
/*
控制器里用法
  getTrade($http, (res) => 
    vm.trade = res.result
  );
*/