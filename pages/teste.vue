<template>
    <div class="d-flex mt-5">
        <div class="mr-5">
             <Filtro/>
        </div>

       


        <div class="ml-5">
            <Lista/>
        </div>



       
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
export default {
  
    data() {
        return {
            
        }
    },

    computed:{
        ...mapState('example', ['count'])
    }, 

    methods:{
        ...mapMutations('example', ['INCREMENT', 'DECREMENT' ])
    }
}
</script>