const INCREMENT= (state) =>{
    state.count++
}

const DECREMENT = (state) =>{
    state.count--
}


const LISTA = (state, produtos)=>{
    state.itens = produtos
    console.log("sara", state.itens)
}

export{
    INCREMENT,
    DECREMENT, 
    LISTA
}