import {request} from './request';
export function getDetail(iid){
  return request({
        url:'/detail',
        params:{
            iid,
        }
    })
}
export class goods{
    constructor(itemInfo,columns,services,){
        this.desc=itemInfo.title;
        this.services=services;
        this.oldPrice=itemInfo.oldPrice;
        this.price=itemInfo.price;
        this.columns1=columns[0];
        this.columns2=columns[1];
        this.columns3=services[services.length-1].name;
        this.discount=itemInfo.discountDesc;
        this.discountColor=itemInfo.discountBgColor
    }
}
export function getRecommend(){
    return request({
        url:'recommend'
    })
}