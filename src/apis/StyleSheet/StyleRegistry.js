
import createReactDOMStyle from './createReactDOMStyle';
import ReactPropRegistry from '../../../modules/ReactPropRegistry';
import flattenStyle from './flattenStyle';
import flattenArray from '../../../modules/flattenArray';

const emptyObject = {};

const createCacheKey = id => {
    const prefix = 'rc';
    return `${prefix}-${id}`;
}

class StyleRegistry {
    cache = { ltr: {}, rtl: {} };
    
    //1.处理样式
    resolve(reactStyle, options= emptyObject){
        console.log('reactStyle---1-------->',reactStyle);
        if (!reactStyle) {
            return emptyObject;
        }
        // 1.2.如果已缓存
        if (typeof reactStyle === 'number') {
            this._registerById(reactStyle);
            const key = createCacheKey(reactStyle);
            return this._resolveStyleIfNeeded(reactStyle, options, key);
        }
        // 1.3 没有缓存
        if(!Array.isArray(reactStyle)){
            console.log('没有缓存样式');
            return;
        }
        // 1.4 没有缓存样式 降低数组维度
        const flatArray = flattenArray(reactStyle);
        // 1.5 是否是数字数组
        let isArrayOfNumbers = true;
        for(let i = 0; i< flatArray.length; i++){
            const id = flatArray[i];

            if(typeof id !== 'number'){
                isArrayOfNumbers = false;
            } else {
                this._registerById(id);
            }
        }

        const key = isArrayOfNumbers ? createCacheKey(flatArray.join('-')) : null;
        return this._resolveStyleIfNeeded(flatArray, options, key);
    }

    //2.注册样式
    register(flatStyle) {
        const id = ReactPropRegistry.register(flatStyle);//2.1返回样式id
        this._registerById(id);//2.2通过样式id注册
        return id;
    }
    //3.通过id注册样式
    _registerById(id) {
        const dir = 'ltr';//3.1没有国际化 阅读从左至右 I18nManager.isRTL ? 'rtl' : 'ltr';
        if(!this.cache[dir][id]){
            this.cache[dir][id] = true;
        }
    }
    //4.取需要的样式
    _resolveStyleIfNeeded(style, options ,key) {
        const dir = 'ltr';//3.1没有国际化 阅读从左至右 I18nManager.isRTL ? 'rtl' : 'ltr';
        if(key){
            if(!this.cache[dir][key]){
                this.cache[dir][key] = this._resolveStyle(style, options);
            }
            return this.cache[dir][key];
        }
        return this._resolveStyle(style, options);
    }
    //5.取缓存样式
    _resolveStyle(reactStyle,options){
        const flatStyle = flattenStyle(reactStyle);
        
        const domStyle = createReactDOMStyle(flatStyle);

        const props = Object.keys(domStyle).reduce(
            (prop, styleProp)=>{
                console.log('prop---------->',prop);
                console.log('styleProp---------->',styleProp);
                
                const value = domStyle[styleProp];
                if (value != null) {

                }
            },
            { classList: [] }
        );
    }
}

export default StyleRegistry;