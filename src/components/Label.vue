<template>
    <Sprite>
        <TextField :width="width" :height="height" stroke="1" strokeColor="0xffffff" :textColor="color" :size="size" :filters="filters">{{text}}</TextField>
    </Sprite>
</template>

<script>
export default {
    name: 'Label',
    props: {
        text: {
            type: String,
            default: '',
        },
        size: {
            type: Number,
            default: 16,
        },
        color: {
            type: Number,
            default: 0,
        },
        filters: {
            type: Array,
            default: () => []
        },
        width: {
            type: Number,
            default: undefined,
        },
        height: {
            type: Number,
            default: undefined,
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
