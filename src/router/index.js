import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contact from '@/components/Contact'
import blog from '@/components/Blog'
import blogSinglePost from '@/components/BlogSinglePost'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '/blog',
      name: 'blog-post-list',
      component: blog
    }, {
      path: '/blog/:id',
      name: 'blog-single-post',
      component: blogSinglePost,
      props: true
    }
  ]
})
