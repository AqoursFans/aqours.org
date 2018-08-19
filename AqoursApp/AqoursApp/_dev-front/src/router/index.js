import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Schedule from '../components/Schedule';
import Apply from '../components/Apply';
import Board from '../components/Board';
import File from '../components/File';
import Member from '../components/Member/Member';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
,
    {
      path: '/Schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/Board',
      name: 'Board',
      component: Board
    },
    {
      path: '/File',
      name: 'File',
      component: File
    }
  ]
});
