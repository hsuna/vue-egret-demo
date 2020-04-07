<template>
    <Sprite touchEnabled="true" @touchBegin="onTouchBegin" @touchEnd="onTouchEnd" @touchCancel="onTouchEnd">
        <Image :skin="skin" :width="width" :height="bitmaps[status].height || height" bitmapX="0" :bitmapY="bitmaps[status].y||0" :filters="bitmaps[status].filters||[]">
    </Sprite>
</template>

<script>
import Image from './Image'
import { dark, gray } from '../tools/FilterTool'

/** 按钮类型 */
const BUTTON_TYPE = {
    NONE: 0,      // 单张图
    DOUBLE: 1,    // 两态图
    THREE: 2,     // 三态图
}
/** 按钮状态 */
const BUTTON_STATUS = {
    NORMAL: 0,      // 正常
    ACTIVE: 1,      // 按下
    DISABLED: 2,    // 禁用
}

export default {
    BUTTON_TYPE,
    BUTTON_STATUS,
    name: 'Button',
    components: {
        Image
    },
    props: {
        skin: {
            type: String,
            default: '',
        },
        width: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 0,
        },
        type: {
            type: Number,
            default: BUTTON_TYPE.NONE,
        }
    },
    data(){
        return {
            status: 0,
        }
    },
    mounted() {
    },
    computed: {
        bitmaps(){
            switch(this.type){
                case BUTTON_TYPE.NONE:
                    return [ {}, { filters: [dark()] }, { filters: [gray()] } ];
                case BUTTON_TYPE.DOUBLE:
                    //this.sp.height = this.height/2;
                    return [ { height: this.height/2 }, { y: this.height/2, height: this.height/2 }, { y: this.height/2, height: this.height/2, filters: [gray()] } ];
                case BUTTON_TYPE.THREE:
                    //this.sp.height = this.height/3;
                    return [ { height: this.height/3 }, { y: this.height/3, height: this.height/3 }, { y: this.height/3*2, height: this.height/3 } ];
                default:
                    return [{},{},{}];
            }
        }
    },
    methods: {
        onTouchBegin(){
            if(BUTTON_STATUS.DISABLED === this.status) return;
            this.status = BUTTON_STATUS.ACTIVE;
        },
        onTouchEnd(){
            if(BUTTON_STATUS.DISABLED === this.status) return;
            this.status = BUTTON_STATUS.NORMAL;
        },
    },
}
</script>
