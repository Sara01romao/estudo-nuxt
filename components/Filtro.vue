<template>
  <div>
    <VueSimpleRangeSlider
                    style="width: 300px"
                    :min="0"
                    :max="1000000"
                    :logarithmic="true"
                    v-model="range"
            />

            <button @click="LISTA(filterPrice)" >Filtrar</button>


     <!--<ul>
         <li v-for="produto in  filterPrice" :key="produto.id">
             {{produto.price}}

         </li>

     </ul>-->
   
  </div>
</template>
<script>

import { mapMutations} from 'vuex'

import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'
export default {
    // register the component
    components: { VueSimpleRangeSlider },
    
    
    data() {
          return {
               range: [20,1000],
               produtos: []
          }
    },

    async fetch() {
      this.produtos = await fetch(
        'https://fakestoreapi.com/products'
      ).then(res => res.json())
    },

    computed:{
        filterPrice:function(){
            const min = this.range[0]
            const max = this.range[1]
            

            return this.produtos.filter((p)=>{
                return(p.price>=min && p.price<=max)
            })
        }
    },

    methods:{
        ...mapMutations('example', ['LISTA' ])
    }


}
</script>