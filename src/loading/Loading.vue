<template>
    <Sprite>
        <Label x=150 y=250 width=200 height=100 size=20>加载中：{{percent}}%</Label>
    </Sprite>
</template>

<script>
import Label from '@/components/Label'

export default {
    components: {
        Label,
    },
    props: {
        current: {
            type: Number,
            default: 0,
        },
        total: {
            type: Number,
            default: 1,
        }
    },
    data(){
        return {
        }
    },
    computed: {
        percent(){
            return Math.round(this.current/this.total*100)
        }
    },
}
</script>
