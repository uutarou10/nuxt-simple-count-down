<template>
  <div>
    <p v-if="years">{{ years }}<span>年</span></p>
    <p v-if="months">{{ months }}<span>ヶ月</span></p>
    <p v-if="days">{{ days }}<span>日</span></p>
    <p v-if="hours">{{ hours }}<span>時間</span></p>
    <p v-if="minutes">{{ minutes }}<span>分</span></p>
    <p>{{ seconds }}<span>秒</span></p>

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
      return this.duration.seconds();
    }
  }
}
</script>

