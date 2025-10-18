<template lang="">
    <div class="border-2 rounded-3 text-center p-5 bg-success">
        <h1> this is Test Component</h1>
        <p>Namber Start {{namber}}</p>
        <button class="bg-info" @click="namber++">Click Here</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            namber : 0
        }
    },
   

   
    
}
</script>
<style lang="">
    
</style>