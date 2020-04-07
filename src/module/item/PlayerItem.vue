<template>
    <MovieClip ref="movie" :play="play" :action="action" x=0 y=0 frameRate="18" skin="player"/>
</template>

<script>
import MovieClip from '@/components/MovieClip'

const RUN=0, JUMP=1, DJUMP=2;

export default {
    RUN,
    JUMP,
    DJUMP,
    props: {
        play: {
            type: Boolean,
            default: false,
        },
        status: {
            type: Number,
            default: RUN
        }
    },
    components: {
        MovieClip,
    },
    data(){
        return {
        }
    },
    computed: {
        action() {
            switch(this.status){
                case RUN:
                    return 'run';
                case JUMP:
                case DJUMP:
                    return 'jump';
            }
        },
        playerWidth(){
            return this.$refs['movie'] ? this.$refs['movie'].width : 0
        },
        playerHeight(){
            return this.$refs['movie'] ? this.$refs['movie'].height : 0
        }
    },
    methods: {
    }
}
</script>