(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vueIgApi = factory());
}(this, (function () { 'use strict';

var Api = {
  install: function install(Vue) {
    Vue.prototype.$api = {};
    Vue.prototype.$api.estate = Vue.resource('estate{/id}');
    Vue.prototype.$api.tickets = Vue.resource('tickets{/id}');
    Vue.prototype.$api.lease = Vue.resource('lease{/id}');
    Vue.prototype.$api.user = Vue.resource('user{/id}');
    Vue.prototype.$api.message = Vue.resource('message{/id}', {}, {
      unread: { method: 'GET', url: 'message/{/id}/unread' }
    });
    Vue.prototype.$api.files = Vue.resource('files{/id}');
  }
};

var igApi = Api;

return igApi;

})));
