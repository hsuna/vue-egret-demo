<template>
    <Sprite @enterFrame="onEnterFrame">
        <Sprite :x="mapAX">
            <MapItem :ref="`itemA_${index}`" v-for="(item, index) in mapAInfo" :key="index" :x="item.x" :y="item.y" :width="Math.ceil(item.w)" :height="Math.ceil(item.h)" :rotation="item.r" />
        </Sprite>
        <Sprite :x="mapBX">
            <MapItem :ref="`itemB_${index}`" v-for="(item, index) in mapBInfo" :key="index" :x="item.x" :y="item.y" :width="Math.ceil(item.w)" :height="Math.ceil(item.h)" :rotation="item.r" />
        </Sprite>
    </Sprite>
</template>

<script>
import { mapInfos } from '@/infos/GameInfo'
import MapItem from './MapItem'

export default {
    name: 'PlayerItem',
    components: {
        MapItem,
    },
    props: {
        play: {
            type: Boolean,
            default: false,
        },
        speed: {
            type: Number,
            default: 0,
        }
    },
    data(){
        return {
            flag: true,
            index: 0,
            mapAX: 0,
            mapBX: 0,
            mapAInfo: [],
            mapBInfo: [],
        }
    },
    created () {
        this.mapAInfo = mapInfos[this.index];
        this.mapBInfo = this.getNextMapInfo();
        this.mapBX = this.mapAX+this.getMapWidth(this.mapAInfo)
    },
    computed: {
    },
    methods: {
        onEnterFrame(){
            if(!this.play) return;

            this.mapAX -= this.speed;
            this.mapBX -= this.speed;

            if(this.mapAX < 0 && !this.flag){
                this.mapBX = this.mapAX + this.getMapWidth(this.mapAInfo) - 2
                this.mapBInfo = this.getNextMapInfo();
                this.flag = !this.flag;
            }else if(this.mapBX < 0 && this.flag){
                this.mapAX = this.mapBX + this.getMapWidth(this.mapBInfo) - 2
                this.mapAInfo = this.getNextMapInfo();
                this.flag = !this.flag;
            }


        },
        getNextMapInfo(){
            this.index = this.index+1 < mapInfos.length ? this.index+1 : 0;
            return mapInfos[this.index];
        },
        getMapWidth(mapInfo){
            let mapWidth=0;
            for(let i=mapInfo.length-1; i>=0; i--){
                let item = mapInfo[i]
                mapWidth = Math.max(mapWidth, Math.ceil(item.x) + Math.ceil(item.w)*Math.max(0, Math.cos(item.r/180*Math.PI)))
                if(0 == item.r) break;
            }
            return mapWidth;
        },
        getMapItems(){
            return Object.values(this.$refs)
        }
    }
}
</script>
