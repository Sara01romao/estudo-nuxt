<template>
    <div>
        Lista{{itens.length}}

        <ul class="d-flex flex-wrap" v-if="itens.length > 0">
            <li class="ml-5"  v-for="produto in itens" :key="produto.id" >
                <p>{{produto.title}}</p>
               <h4> {{produto.price}} </h4>
               <img :src="produto.image" alt="">

            </li>
        </ul>


         <ul class="d-flex flex-wrap" v-else>
            <li class="ml-5"  v-for="produto in produtos" :key="produto.id" >
                <p>{{produto.title}}</p>
               <h4> {{produto.price}} </h4>
               <img :src="produto.image" alt="">

            </li>
        </ul>

    </div>
</template>


<script>
import { mapState} from 'vuex'
export default {
    data() {
        return {
            produtos:[]
        }
    },

     computed:{
        ...mapState('example', ['itens'])
    },

     async fetch() {
      this.produtos = await fetch(
        'https://fakestoreapi.com/products?limit=5'
      ).then(res => res.json())
    },
}
</script>


<style >
p{
    width: 250px;
}
ul li img{
    width: 150px;
    height: 200px;
}

</style>