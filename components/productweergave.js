app.component('product-weergave',{
    props:{
      gold:{
          type:Boolean,
          required:true,
      }
    },
    //hier gaan we de template maken.
    template: `
        <div class="d-flex"><div class="card" style="width: 18rem;">
        <div class="card-header d-flex justify-content-between">
            <h5 class="card-title text-center text-secondary">{{product}}</h5>

        </div>
        <img :src="imagePrint" class="card-img-top" :alt="product">
        <div class="d-flex px-3 text-start">
            <div @click="updateAfbeeldingVoorraad(soort.soortId)" v-for="(soort, index) in soorten" :key="soort.soortId" :style="{background:soort.kleur}" class="kleurvak border border-2 border-white rounded-circle p-2 m-1"></div>
        </div>
        <div class="card-body">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DETAILS
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p class="card-text">{{beschrijvingMerk}}</p>
                            <ul>
                                <li v-for="productDetail in productDetails">{{productDetail}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <button :disabled="aantalInVoorraad <= 0" @click="toevoegenAanWinkelwagen" class="btn btn-success align-self-center"><i class="bi bi-basket3-fill"></i></button>
                <div class="d-flex">
                    <h5 class="text-success display-6">$ {{prijs}}</h5>
                    <a :href="url" class=" ms-3 btn btn-warning align-self-center text-white"><i
                            class="bi bi-eye-fill"></i></a>
                </div>
            </div>
        </div>
        <div class="card-footer text-body-secondary">
            <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5">Voorraad?</p>
                <div class="">
                    <p class="text-success" v-if="aantalInVoorraad>9">NOG {{aantalInVoorraad}} STUKS.</p>
                    <p class="text-warning" v-else-if="aantalInVoorraad > 0 && aantalInVoorraad <= 9">NOG {{aantalInVoorraad}} STUKS.</p>
                    <p class="text-danger" v-else>UITVERKOCHT</p>
                </div>
                <p v-if="aantalInVoorraad > 9"><i class="bi bi-check-circle-fill text-success fs-5"></i></p>
                <p v-else-if="aantalInVoorraad > 0 && aantalInVoorraad <= 9"><i class="bi bi-check-circle-fill text-warning fs-5"></i></p>
                <p v-else><i class="bi bi-x-circle-fill text-danger fs-5"></i></p>
            </div>
            <div>
            <p class="text-center text-warning">{{verzendkosten}}</p>
            </div>

        </div>
    </div>
    <review-lijst :reviews="reviews"></review-lijst></div>
    <review-form @toevoegenReview="toevoegenReview">   </review-form>
        `,
    data(){
        return{
            winkelwagen:0,
            geselecteerdProduct:0,
            product: 'GSM oplader',
            merk:'Ailkin',
            prijs: 15.99,
            beschrijving: 'Een efficiente en duurzame oplader voor je GSM.',
            image: "./assets/images/chargerblue.png",
            opVoorraad:false,
            // aantalInVoorraad:0,
            url:'https://www.amazon.com/Charger-Adapter-Ailkin-Replacement-Samsung/dp/B076JBS6KB?th=1',
            productDetails:[
                "universeel",
                "smartphone",
                "2 aansluitingen",
                "inclusief kabel"
            ],
            soorten:[
                {soortId: 0, kleur:"blue", image: "./assets/images/chargerblue.png", aantal:20},
                {soortId: 1, kleur: "pink", image: "./assets/images/chargerpink.png", aantal:0},
                {soortId: 2, kleur: "black", image: "./assets/images/chargerblue.png", aantal:10},
                {soortId: 3, kleur: "green", image: "./assets/images/chargerpink.png", aantal:6}
            ],
            reviews:[],
        }
    },
    methods:{
        toevoegenAanWinkelwagen(){
            this.$emit("toevoegen-winkelwagen", this.soorten[this.geselecteerdProduct].soortId);
            this.soorten[this.geselecteerdProduct].aantal--
        },
        updateAfbeeldingVoorraad(soortId){
            this.geselecteerdProduct=soortId;
        },
        toevoegenReview(review){
            this.reviews.push(review)
        }
    },
    computed:{
        beschrijvingMerk(){
            return this.beschrijving + " - " + this.merk
        },
        imagePrint(){
            return this.soorten[this.geselecteerdProduct].image
        },
        aantalInVoorraad(){
            return this.soorten[this.geselecteerdProduct].aantal
        },
        verzendkosten(){
            if(this.gold){
                return "GRATIS verzending"
            }
            return 9.99
        }
    }
});