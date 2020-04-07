<template>
    <Sprite touchEnabled="true" @enterFrame="onEnterFrame" @touchTap="onTouchTop">
        <Image x=0 y=0 width=420 height=500 skin="img_bg_02_jpg" />
        <MapView ref="mapView" :play="play" :speed="MOVE_SPEED"/>
        <PlayerItem ref="playerItem" :play="play" :status="status" :x="playerX" :y="playerY" :rotation="playerAngle" />
        <Label v-if="play" x=20 y=20 width=400 height=30 size=20>当前分数为：{{score}}</Label>
        <Image v-else x=83 y=113 width=245 height=112 skin="img_tips_png" />
    </Sprite>
</template>

<script>
import Image from '@/components/Image'
import Label from '@/components/Label'
import MapView from './item/MapView'
import PlayerItem from './item/PlayerItem'

const MOVE_SPEED = 8;

export default {
    components: {
        Image,
        Label,
        MapView,
        PlayerItem
    },
    data(){
        return {
            MOVE_SPEED,

            playerX: 100,
            playerY: 330,
            playerWidth: 0,
            playerHeight: 0,
            playerAngle: 0,
            status: PlayerItem.RUN,

            play: false,
            isRot: false,
            frameNum: 0,
            speedY: 0,
            score: 0
        }
    },
    mounted () {
        const playerItem = this.$refs['playerItem']
        this.playerWidth = playerItem.playerWidth
        this.playerHeight = playerItem.playerHeight
    },
    methods: {
        onEnterFrame(){
            if(!this.play) return;

            this.playerY += this.speedY++;
            this.score = Math.floor(++this.frameNum * MOVE_SPEED/50)
            if (PlayerItem.DJUMP == this.status && !this.isRot)
            {
                this.playerAngle += 20
                if (this.playerAngle >= 180)
                {
                    this.isRot = true;
                    this.playerAngle = 0;
                }
            }
            else if (PlayerItem.RUN == this.status)
            {
                this.status = PlayerItem.RUN;
            }
            this.checkHit();
        },
        onTouchTop(){
            if(this.play){
                if(PlayerItem.RUN === this.status) {
                    this.status = PlayerItem.JUMP;
                    this.speedY = -11;
                }else if(PlayerItem.JUMP === this.status) {
                    this.status = PlayerItem.DJUMP;
                    this.speedY = -11;
                }
            }else{
                this.status = PlayerItem.RUN;
                this.playerX = 100;
                this.playerY = 330;
                this.playerAngle = 0;

                this.frameNum = 0;
                this.speedY = 0;
                this.isRot = false;
                this.play = true;
            }
        },
        
        checkHit(){
            const hitPot = this.$localToGlobal('playerItem', 0, 0);
            this.$refs['mapView'].getMapItems().forEach((item, index) => {
                let itemPot = this.$globalToLocal(item, hitPot.x, hitPot.y);
                /**是否撞到天花了 */
                if(this.$hitTestPoint(item, hitPot.x, hitPot.y-20))
                {
                    this.playerY = this.$displayObject(item).getTransformedBounds(this.$el).bottom+22;
                    this.playerAngle = 0;
                    this.speedY = 0;
                }
                /**是否掉地上了 */
                if(this.$hitTestPoint(item, hitPot.x, hitPot.y+35))
                {
                    this.playerY = this.$displayObject(item).getTransformedBounds(this.$el).top-34;
                    this.playerAngle = 0;
                    this.speedY = 0;
                    this.status = PlayerItem.RUN;
                    this.isRot = false;
                }
                /**是否撞到墙了，则往后推 */
                if(this.$hitTestPoint(item, hitPot.x+20, hitPot.y))
                {
                    this.playerX -= MOVE_SPEED;
                }
            })

            if(this.playerX < -this.playerWidth || this.playerY > this.$stage.stageHeight + this.playerHeight*.5){
                this.$emit('changeScore', this.score)
                this.$emit('changeScene', 'over');
            }
        }
    }
}
</script>
