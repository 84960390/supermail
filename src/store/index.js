import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        goodsShop:[],

    },
    mutations:{
        shopAdd(state,payload){
            state.goodsShop.push(payload)
        },
        countAdd(state,payload){
            payload.num++;
        },
    },
    actions:{
        addShop(context,payload){
            return new Promise((resolve,reject)=>{
                let oldProduct=context.state.goodsShop.find(item=>item.iid==payload.iid);
            if(oldProduct){
                context.commit('countAdd',oldProduct);
                resolve('当前商品数量+1');
            }else{
                payload.num=1;
                context.commit('shopAdd',payload);
                resolve('添加了新的商品');
            }       
            })
        },
       
    }
})
export default store;