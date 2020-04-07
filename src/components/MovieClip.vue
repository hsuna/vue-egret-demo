<template>
    <Sprite>
        <MovieClip ref="movie" :movieClipData="movieClipData" :frameRate="frameRate" @frame_label="onFrameLabel" />
    </Sprite>
</template>

<script>
const animatsCache = {};

export default {
    name: 'MovieClip',
    props: {
        action:{
            type: String,
            default: ''
        },
        skin: {
            type: String,
            default: ''
        },
        play:{
            type: Boolean,
            default: false
        },
        frameRate:{
            type: Number,
            default: 24
        }
    },
    data(){
        return {
            movie: null,
        }
    },
    mounted(){
        this.movie = this.$refs['movie']
        if(this.movie && this.movie.frameLabels){
            this.movie.frameLabels.forEach(frameLabel => {
                this.movie.frameEvents[frameLabel.end] = (evt) => {
                    if(frameLabel.end != frameLabel.frame){
                        this.movie.gotoAndPlay(frameLabel.frame)
                    }else{
                        this.movie.gotoAndStop(frameLabel.frame)
                    }
                    this.$emit(frameLabel.name)
                }
            })
            if(this.play){
                this.movie.gotoAndPlay(this.action)
            }else{
                this.movie.gotoAndStop(this.action)
            }
        }
    },
    computed: {
        movieClipData(){
            if(this.skin){
                if(!animatsCache[this.skin]){
                    const movieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes(`mc_${this.skin}_data`), RES.getRes(`mc_${this.skin}_tex`));
                    animatsCache[this.skin] = movieClipDataFactory.generateMovieClipData(this.skin)
                    animatsCache[this.skin].frameRate = this.frameRate
                }
                return animatsCache[this.skin];
            }
            return '';
        },
        width(){
            return this.movie ? this.movie.width : 0
        },
        height(){
            return this.movie ? this.movie.height : 0
        }
    },
    watch: {
        play(newVal, oldVal){
            if(this.movie){
                if(newVal){
                    this.movie.play();
                }else{
                    this.movie.stop();
                }
            }
        },
        action(newVal, oldVal){
            if(this.movie){
                if(this.play){
                    this.movie.gotoAndPlay(newVal)
                }else{
                    this.movie.gotoAndStop(newVal)
                }
            }
        },
    },
    methods: {
        onFrameLabel(evt){
            if('function' === typeof evt.frameLabel){
                evt.frameLabel.call(this, evt)
            }
        }
    },
}
</script>
