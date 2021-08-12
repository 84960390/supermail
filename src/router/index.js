import Vue from 'vue';
import VueRouter from 'vue-router';
const home=()=>import('views/home/home.vue');
const me=()=>import('views/me/me.vue');
const category=()=>import('views/category/category.vue');
const shop=()=>import('views/shop/shop.vue');
const detail=()=>import('views/detail/detail.vue');
// 解决重复点击报错
const originslPush=VueRouter.prototype.push;
VueRouter.prototype.push=function push(location){
    return originslPush.call(this,location).catch(err=>err);
}
Vue.use(VueRouter);
const routes=[{
    path:'/',
    redirect:'/home'

},{
    path:'/home',
    component:home
},{
    path:'/me',
    component:me
} ,{
    path:'/category',
    component:category
},{
    path:'/shop',
    component:shop
},{
    path:'/detail/:iid',
    component:detail
}];
const router=new VueRouter({
    routes,
    mode:'history'
})
export default router;
