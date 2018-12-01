<template>
  <div class="container">
    <h1 class="title-wrap">
      <div>
        <div class="title">{{ currentTimer.title }}</div>
        <div class="dueDate">{{ dueDateString }}</div>
      </div>
      <span class="untill">まで</span>
    </h1>
    <no-ssr>
      <Timer :duration="duration" />
    </no-ssr>
    <div class="buttons">
      <el-button
        round
        size="small"
        @click="backToTop"
      >トップに戻る</el-button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Timer from  '../../components/Timer';

export default {
  head () {
    const title = `「${this.currentTimer.title}」までのカウントダウンタイマー`;
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title}
      ]
    };
  },
  components: {
    Timer
  },
  asyncData () {
    return {
      intervalId: undefined,
      remainTime: 0
    }
  },
  async fetch ({store, route, error}) {
    if (!store.state.timer.currentTimer) {
      await store.dispatch('timer/getTimer', route.params.id);
    }

    if (!store.state.timer.currentTimer) {
      error({
        statusCode: 404,
        message: 'そのタイマーは存在しません。'
      });
    }
  },
  computed: {
    ...mapState({
      currentTimer: state => state.timer.currentTimer
    }),
    duration () {
      return this.$moment.duration(this.remainTime)
    },
    dueDateString () {
      const dueDate = this.currentTimer.dueDate;
      return `${dueDate.getFullYear()}年${dueDate.getMonth() + 1}月${dueDate.getDate()}日 ${dueDate.getHours()}時${dueDate.getMinutes()}分`;
    }
  },
  mounted () {
    this.updateRemainTime()
    this.intervalId = setInterval(() => {
      this.updateRemainTime()
    }, 200);
  },
  destroyed () {
    clearInterval(this.intervalId);
  },
  methods: {
    updateRemainTime () {
      this.remainTime = this.currentTimer.dueDate - new Date().getTime();
    },
    backToTop () {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.container {
  width: 100%;
}

.title-wrap {
  text-align: center;
}

.title-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.title {
  font-weight: 900;
  font-size: 2em;
}

.dueDate {
  font-weight: 400;
  font-size: 0.5em;
}

.buttons {
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.3s linear;
}

.buttons:hover {
  opacity: 1;
}
</style>
