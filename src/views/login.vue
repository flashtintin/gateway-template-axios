<template>
  <div class="index">
    <input type="text" name="username" title="username" v-model="username" />
    <input name="password" type="password" title="password" v-model="password" />
    <input type="button" value="login" @click="login" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'login',
})
export default class LoginPage extends Vue {
  private username: string = '';
  private password: string = '';

  private login() {
    window.location.replace('/network');
  }
  data() {
    return {
      username: '',
      password: '',
    };
  }
}
</script>
