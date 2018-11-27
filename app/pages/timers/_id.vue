<template>
  <div class="container">
    <h1>{{ currentTimer.title }}<span>まで</span></h1>
    <no-ssr>
      <Timer :duration="duration" />
    </no-ssr>
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
  async fetch ({store, route}) {
    if (!store.state.timer.currentTimer) {
      await store.dispatch('timer/getTimer', route.params.id);
    }
  },
  computed: {
    ...mapState({
      currentTimer: state => state.timer.currentTimer
    }),
    duration () {
      return this.$moment.duration(this.remainTime)
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
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}

h1 {
  font-weight: 900;
  font-size: 5em;
  margin: 8px 0;
  text-align: center;
}

h1 > span {
  font-size: 0.8em;
  font-weight: normal;
}
</style>
