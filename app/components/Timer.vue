<template>
  <div>
    <div
      v-if="isTimeover"
      class="timeup"
    >
      <p>Time is up!!</p>
    </div>
    <div
      v-else
      class="timer"
    >
      <div>
        <p v-if="years">{{ years }}<span>年</span></p>
        <p v-if="months">{{ months }}<span>ヶ月</span></p>
        <p v-if="days">{{ days }}<span>日</span></p>
      </div>
      <div>
        <p v-if="hours">{{ hours }}<span>時間</span></p>
        <p v-if="minutes">{{ minutes }}<span>分</span></p>
        <p>{{ seconds }}<span>秒</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Object,
      default: undefined
    }
  },
  asyncData () {
    return {
      duration: this.$props.duration
    };
  },
  computed: {
    years () {
      return this.duration.years();
    },
    months () {
      return this.duration.months();
    },
    days () {
      return this.duration.days();
    },
    hours () {
      return this.duration.hours();
    },
    minutes () {
      return this.duration.minutes();
    },
    seconds () {
      const seconds = this.duration.seconds();
      if (seconds < 10) {
        return '0' + seconds;
      } else {
        return seconds;
      }
    },
    milliseconds() {
      return this.duration.milliseconds();
    },
    isTimeover () {
      return this.duration.seconds() < 0;
    }
  }
}
</script>
<style scoped>
p {
  margin: 0;
  padding: 8px;
}
.timeup {
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  color: brown;
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timer > div {
  display: flex;
}

.timer p {
  font-weight: 400;
  font-size: 3.5em;
}

.timer  p > span {
  font-weight: normal;
  font-size: 0.7em;
}
</style>


