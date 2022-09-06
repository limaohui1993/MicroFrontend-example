import {ReplaySubject} from "rxjs"
export function sayHello(who) {
    console.log(`%c${who} say hello`,"color:blue");
}
//跨组件通讯 发布订阅
export const sharedSubject=new ReplaySubject();