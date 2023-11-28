app.component('review-lijst',{
    props:{
        reviews:{
            type:Array,
            required:true,
        }
    },
    template:`
         <div v-show="reviews.length > 0" class="mt-5 p-3 bg-success bg-opacity-10 ms-3 border border-success rounded w-50">
            <h3 class="text-center text-success">Reviews</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} gaf {{ review.rating }} stars
                    <br/>
                    "{{ review.review }}"
                    <br/>
                </li>
            </ul>
         </div>
    `
});