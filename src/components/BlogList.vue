<template>
  <div>
    <h1>{{title}}</h1>
    <my-logo ></my-logo>
    <table>
      <tr v-for="blog in blogs">
        <td @click='show_blog(blog.id)'>{{blog.title}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import MyLogo from '@/components/logo.vue'
  export default {
    data (){
      return{
        title:'博客列表页',
        blogs:[]
      }
    },
    mounted(){
      this.$http.get('api/interface/blogs/all').then((response)=>{
          console.info(response.body)
          this.blogs = response.body.blogs
        },(response) => {
          console.error(response)
        }
      );
      },
      methods:{
        show_blog:function(blog_id){
          this.$router.push({name:'Blog',query:{id:blog_id}})
        }
      },
      components:{
        MyLogo
      }
    }
</script>

<style>
td{
  border-bottom: 1px solid grey;
}
</style>
