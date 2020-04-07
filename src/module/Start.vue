<template>
    <Sprite>
        <Image x=0 y=0 width="420" height="500" skin="img_bg_01_jpg" />
        <Button x="126" y="383" width="170" height="76" skin="img_btn_1_png" @touchTap="onTouchStart" />
    </Sprite>
</template>

<script>
import Image from '@/components/Image'
import Button from '@/components/Button'

export default {
    components: {
        Image,
        Button,
    },
    methods: {
        onTouchStart(){
            this.$emit('changeScene', 'game');
        }
    }
}
</script>