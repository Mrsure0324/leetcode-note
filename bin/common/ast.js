import {
    Logger
} from './index.js'
const Ast = {
    push({
        type = undefined,
        item = undefined,
    }) {
        if(!type || !item) {
            Logger.log('error','【 Ast PUSH 】 参数错误');
            Logger.log('danger',JSON.stringify({type,item}));
            return
        }


    },
}

export {
    Ast
}