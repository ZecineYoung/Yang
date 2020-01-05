<template>
  <div>
    <div>
      <h1>标题：  {{blog.title}}</h1>
      <p style="opacity: 0.5;">发布于：{{blog.created_at}} </p>
      <my-logo></my-logo>
      <div v-html='blog.body'>
        {{blog}}
      </div>
     </div>
  </div>
</template>

<script>
  import MyLogo from '@/components/logo.vue'
  export default{
    data (){
      return{
        blog:{}
      }
    },
    mounted() {
      this.$http.get('api/interface/blogs/show?id=' + this.$route.query.id).then((response)=>{
        this.blog =response.body.result
      },(response)=>{
        console.error(response)
      }
      );
    },
    components:{
      MyLogo
    }
  }
</script>

<style>
</style>
