<template>
    <Sprite>
        <Image x=0 y=0 :width="width" height="30" skin="img_obshead_jpg" fillMode="repeat"/>
        <Image x=0 y=30 :width="width" :height="height-30" skin="img_obsbody_jpg" fillMode="repeat"/>
    </Sprite>
</template>

<script>
import Image from '@/components/Image'

export default {
    name: "MapItem",
    components: {
        Image,
    },
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>
