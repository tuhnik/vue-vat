<template>
  <div id="app" class = "container">
  <h1 class="title">{{title}} </h1>
    <form @submit.prevent="submitted()">
      <input v-model="searchTerm" class="input" type="text" placeholder="Enter VAT number...">
    </form>
    <section>
     <div v-if="result">
     <table class="table is-bordered is-striped">
      <tbody>
        <tr v-for="(item, key) in result" :key="item.VATNumber">
           <td>{{key}}</td>
           <td>{{item}}</td>
        </tr>
      </tbody>
    </table>
    </div>
     <div v-if="error" class="notification is-danger" >
         {{error}}
   </div>
    </section>
  </div>
</template>
<script>
import API from "./API.js";
export default {
  name: "app",
  data() {
    return {
      title: "VAT number check",
      searchTerm: "",
      result: null,
      error: null
    };
  },
  methods: {
    submitted() {
      API.search(this.searchTerm).then(data => {
        if (!data.error) {
          this.result = data;
          this.error = null;
        } else {
          this.result = null;
          this.error = data.error;
        }
      });
    }
  }
};
</script>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  width: 45%;
}
section {
  margin-top: 30px;
  width: 100%;
}
table {
  width: 100%;
}
@media (max-width: 1079px) {
  #app {
    width: 75%;
  }
  @media (max-width: 880px) {
    #app {
      width: 95%;
    }
  }
}
</style>
