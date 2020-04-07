<template>
    <Sprite>
        <Loading :current="current" :total="total" @changeScene="changeScene" v-if="'loading' == scenes" />
        <Start @changeScene="changeScene" v-else-if="'start' == scenes" />
        <Game @changeScore="changeScore" @changeScene="changeScene" v-else-if="'game' == scenes" />
        <Over :score="score" @changeScene="changeScene" v-else-if="'over' == scenes" />
    </Sprite>
</template>

<script>
import Loading from './loading/Loading';
import Start from './module/Start';
import Game from './module/Game';
import Over from './module/Over';

export default {
    components: {
        Loading,
        Start,
        Game,
        Over,
    },
    data(){
        return{
            current: 0,
            total: 1,

            score: 0,
            scenes:'loading',
        }
    },
    created(){
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    },
    methods: {
        async runGame() {
            await this.loadResource()
            this.createGameScene()
        },
        async loadResource() {
            try {
                await RES.loadConfig("resource/default.res.json", "resource/");
                await RES.loadGroup("preload", 0, {
                    onProgress: (current, total, resItem) => {
                        this.current = current;
                        this.total = total;
                        //console.log(`${current}/${total}`, resItem)
                    }
                });
            }
            catch (e) {
                console.error(e);
            }
        },
        createGameScene() {
            this.scenes = 'start';
        },
        changeScene(evt){
            this.scenes = evt.data
        },
        changeScore(evt){
            this.score = evt.data
        }
    },
}
</script>