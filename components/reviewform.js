app.component("review-form", {
    template: `
        <form class="review-form d-flex flex-column mt-5 p-3 bg-info bg-opacity-10 border border-info rounded" @submit.prevent="onSubmit">
       <h3 class="text-info">Laat een review achter</h3>
       <label class="form-label" for="name">Naam:</label>
       <input class="form-control" id="name" v-model="name">
       <label class="form-label" for="review">Review:</label>
       <textarea class="form-control" id="review" v-model="review"></textarea>
       <label class="form-check-label" for="rating">Rating:</label>
       <select class="form-select" id="rating" v-model.number="rating">
         <option>5</option>
         <option>4</option>
         <option>3</option>
         <option>2</option>
         <option>1</option>
       </select>
       <input class="btn btn-info text-white mt-1 border border-2 border-white" type="submit" value="Submit">
        </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods:{
        onSubmit(){
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }
            this.$emit("toevoegenReview", productReview);
            this.name = ""
            this.review = ""
            this.rating = null
        }
    }
})