<template>
  <div>
    <p>{{ years }}<span>年</span></p>
    <p>{{ months }}<span>ヶ月</span></p>
    <p>{{ days }}<span>日</span></p>
    <p>{{ hours }}<span>時間</span></p>
    <p>{{ minutes }}<span>分</span></p>
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

