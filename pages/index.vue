<template>
  <div>
    
    <h1>{{ ip.length}}</h1>

    <ul>
      <li v-for="item in ip" :key="item.id">
        <h3>{{item.title}}</h3>
      </li>
    </ul>

    <h2>filtro nome</h2>
    <input type="text" v-model="search" placeholder="buscar">
    <ul>
      <li v-for="(n, index) in filteredNames" :key="index" >

        {{n.nome}}
      </li>
    </ul>

  </div>
</template>

<script>
import Lista from '../components/Lista.vue'

  export default {
  components: { Lista },
    data() {
      return {
        nomes: [
          {nome: 'sara'},
          {nome: 'Lua'},
          
          {nome: 'saara'},
          
          {nome: 'Luna'},
          

        ],

        search:''
      }
    },
   

    async asyncData({ $axios }) {
      const ip = await $axios.$get('https://fakestoreapi.com/products?limit=2')
      return { ip }
    },
    

    computed:{
      filteredNames: function(){
        return this.nomes.filter((e) =>{
          return e.nome.match(this.search)
        })
      },


      
    }

   
  }

 
</script>