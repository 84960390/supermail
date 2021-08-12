import Toast from './toast';
const obj={};
obj.install=function(Vue){
    const toastConstractor=Vue.extend(Toast);
    const toast=new toastConstractor();
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast=toast;

}
export default obj;