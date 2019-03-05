import Vue from 'vue/dist/vue';
import VueResource from 'vue-resource'
import IGApi from '../ig-api';

Vue.use(VueResource)
Vue.use(IGApi)

const vm = new Vue({
  template: '<div></div>',
  data() {
    return {
    };
  },
}).$mount();


describe("Api testing", function() {

  describe("Api should have methods regarding the estate", function() {
    it("Should have a resource etate", function() {
      expect(typeof vm.$api.estate.delete).toEqual('function');
      expect(typeof vm.$api.estate.get).toEqual('function');
      expect(typeof vm.$api.estate.query).toEqual('function');
      expect(typeof vm.$api.estate.remove).toEqual('function');
      expect(typeof vm.$api.estate.save).toEqual('function');
      expect(typeof vm.$api.estate.update).toEqual('function');
    })
  })

  describe("Api should have methods regarding the tickets", function() {
    it("Should have a resource etate", function() {
      expect(typeof vm.$api.tickets.delete).toEqual('function');
      expect(typeof vm.$api.tickets.get).toEqual('function');
      expect(typeof vm.$api.tickets.query).toEqual('function');
      expect(typeof vm.$api.tickets.remove).toEqual('function');
      expect(typeof vm.$api.tickets.save).toEqual('function');
      expect(typeof vm.$api.tickets.update).toEqual('function');
    })
  })

  describe("Api should have methods regarding the lease", function() {
    it("Should have a resource etate", function() {
      expect(typeof vm.$api.lease.delete).toEqual('function');
      expect(typeof vm.$api.lease.get).toEqual('function');
      expect(typeof vm.$api.lease.query).toEqual('function');
      expect(typeof vm.$api.lease.remove).toEqual('function');
      expect(typeof vm.$api.lease.save).toEqual('function');
      expect(typeof vm.$api.lease.update).toEqual('function');
    })
  })

  describe("Api should have methods regarding the user", function() {
    it("Should have a resource etate", function() {
      expect(typeof vm.$api.user.delete).toEqual('function');
      expect(typeof vm.$api.user.get).toEqual('function');
      expect(typeof vm.$api.user.query).toEqual('function');
      expect(typeof vm.$api.user.remove).toEqual('function');
      expect(typeof vm.$api.user.save).toEqual('function');
      expect(typeof vm.$api.user.update).toEqual('function');
    })
  })

  describe("Api should have methods regarding the message", function() {
    it("Should have a resource etate", function() {
      expect(typeof vm.$api.message.delete).toEqual('function');
      expect(typeof vm.$api.message.get).toEqual('function');
      expect(typeof vm.$api.message.query).toEqual('function');
      expect(typeof vm.$api.message.remove).toEqual('function');
      expect(typeof vm.$api.message.save).toEqual('function');
      expect(typeof vm.$api.message.update).toEqual('function');
      expect(typeof vm.$api.message.unread).toEqual('function');
    })
  })

  describe("Api should have methods regarding the files", function() {
    it("Should have a resource etate", function() {
      expect(typeof vm.$api.files.delete).toEqual('function');
      expect(typeof vm.$api.files.get).toEqual('function');
      expect(typeof vm.$api.files.query).toEqual('function');
      expect(typeof vm.$api.files.remove).toEqual('function');
      expect(typeof vm.$api.files.save).toEqual('function');
      expect(typeof vm.$api.files.update).toEqual('function');
    })
  })
})
