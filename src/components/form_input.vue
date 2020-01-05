<template>
  <div>
    input : <input type="text" v-model.lazy="input_value" />,
    输入的值：{{input_value}}

    <hr />
    text area : <textarea v-model.trim="textarea_value" ></textarea>,
    输入的值：{{textarea_value}}

    <hr />
    radio:
    <input type="radio" v-model="radio_value" value="A" />A,
    <input type="radio" v-model="radio_value" value="B" />B,
    <input type="radio" v-model="radio_value" value="C" />C,
    输入的值：{{radio_value}}

    <hr />
    checkbox:
    <input type="checkbox" v-model="checkbox_value" :true-value="true" :falue-value="false" />,
    输入的值：{{checkbox_value}}

    <hr />
    select:
    <select v-model="select_value">
      <option v-for="e in options" v-bind:value="e.value">
        {{e.text}}
      </option>
    </select>
    输入的值：{{select_value}}
    <br />
    <hr />
    <textarea v-model="content"></textarea>
    <input type="button" @click="submit" value="留言"/>
  </div>
</template>

<script>
  export default{
    data (){
      return {
        input_value:'',
        textarea_value:'',
        radio_value:'',
        checkbox_value:'',
        select_value:'',
        content:'',
        options:[
          {
            text:'红烧肉',value:'A'
          },
          {
            text:'馕包肉',value:'B'
          },
          {
            text:'水煮鱼',value:'C'
          }
        ]
      }
    },
    methods:{
      submit:function(){
        this.$http.post('api/interface/blogs/add_comment',
        {
          content:this.content
        })
        .then((response)=>{
          alert("提交成功！，刚才提交的内容是：" + response.body.content)
        },(response)=>{
          alert("出错了")
        })
      }
    }
  }
</script>

<style>
</style>
