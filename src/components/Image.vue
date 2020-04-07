<template>
    <Bitmap :x="bitmapX" :y="bitmapY" :width="width" :height="height" :texture="texture" :fillMode="fillMode" :filters="filters"/>
</template>

<script>
const texturesCache = {};
export default {
    name: 'Image',
    props: {
        width: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 0,
        },
        bitmapX: {
            type: Number,
            default: 0,
        },
        bitmapY: {
            type: Number,
            default: 0,
        },
        skin: {
            type: String,
            default: ''
        },
        fillMode: {
            type: String,
            default: 'repeat'
        },
        filters: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        texture(){
            if(this.skin){
                if(!texturesCache[this.skin]){
                    texturesCache[this.skin] = RES.getRes(this.skin);
                }
                return texturesCache[this.skin];
            }
            return '';
        }
    },
    data(){
        return {
        }
    },
    mounted() {
    },

}
</script>
