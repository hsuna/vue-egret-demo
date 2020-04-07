<template>
    <Sprite>
        <Image x=0 y=0 width="420" height="500" skin="img_bg_03_jpg" />
        <Button x="56" y="360" width="143" height="64" skin="img_btn_2_png" @touchTap="onTouchReplay" />
        <Button x="225" y="360" width="143" height="64" skin="img_btn_3_png" @touchTap="onTouchMore" />
        <Label x="120" y="200" width="300" height="40">你获得的分数为：{{score}}</Label>
    </Sprite>
</template>

<script>
import Image from '@/components/Image'
import Label from '@/components/Label'
import Button from '@/components/Button'

export default {
    components: {
        Image,
        Button,
        Label
    },
    props: {
        score: {
            type: Number,
            default: 0
        }
    },
    data(){
       return {}
    },
    methods: {
        onTouchReplay(){
            this.$emit('changeScene', 'game');
        },
        onTouchMore(){
            window.location.href = '//www.hsuna.com'
        }
    },
}
</script>
