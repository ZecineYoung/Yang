<template>
	<div class="hi">
		Hi Vue!
    {{message}}
    <br />
    <input type="button" @click="show_my_value('Young')" value="Click Me" />
    <ul>
      <li v-for="person in people" v-if="person.indexOf('g')==0">{{person}}</li>
    </ul>
    <p v-bind:style="'color:'+ color">this is showing a language {{na}}</p>
    <div v-if="name==='vue.js'">vue.js!</div>
    <div v-else-if="name==='anguler'">anguler!</div>
    <div v-else="name==='react'">react!</div>
    <input type="text" v-model="na"/>
    
    
	</div>
</template>


<script>
	export default {
		data(){
			return{
        message: 'Welcome to Learning Vue!',
        people:["girl","boy","Ma","pa","grandMa"],
        name:'vue.js',
        color:'red',
        na:'vue.js'
      }
		},
    methods:{
      show_my_value:function(name){
        alert('Hi~  ' + name);
      }
    }
	}
</script>
<style>
	.hi{
		color: aqua;
		font-size:42px ;
	}
</style>
