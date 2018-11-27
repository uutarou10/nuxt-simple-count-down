<template>
  <div class="container">
    <header>
      <img
        src="~assets/logo.svg"
        alt="Logo"
      >
      <div>
        <h1>SIMPLE COUNT DOWN</h1>
        <small>指定時刻までカウントダウンするやつ</small>
      </div>
    </header>
    <section class="description">
      <p>
        指定時刻までカウントダウンするタイマーを表示するアプリです。<br>
        締め切りまでカウントダウンしたりするのにご活用ください。
      </p>
    </section>
    <section class="form">
      <el-input
        v-model="title"
        placeholder="Title"
      />
      <el-date-picker
        v-model="dueDate"
        type="datetime"
        placeholder="Select date and time" />
      <el-button
        :disabled="isValid"
        :loading="isCreating"
        plain
        @click="createTimer"
      >作成</el-button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  asyncData({app, store}) {
    const now = new Date();
    const tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return {
      title: '',
      dueDate: tommorow
    }
  },
  computed: {
    isValid () {
      return !(this.title.length > 0 && this.dueDate != null);
    },
    ...mapState({
      isCreating: state => state.timer.isCreating
    })
  },
  methods: {
    createTimer () {
      this.$store.dispatch('timer/createTimer', {
        title: this.title,
        dueDate: this.dueDate
      });
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  text-align: center;
}

h1 {
  font-weight: 900;
  margin: 0;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 8px auto;
}

header img {
  width: 60px;
  height: 60px;
  padding: 8px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form > * {
  margin-bottom: 8px;
  width: 50%;
}

.form > button {
  width: 30%;
}

p {
  line-height: 1.8em;
}
</style>
