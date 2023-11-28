const app = Vue.createApp({
    data(){
        return{
            winkelwagen:[],
            gold:true,
        }
    },
    methods:{

        updateWinkelwagen(id){
            this.winkelwagen.push(id)
        },
    }
})
