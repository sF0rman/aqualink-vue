<template>
  <table>
    <thead>
      <tr>
        <th v-for="heading in header" :key="heading">{{ heading }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in data" :key="i">
        <td v-for="val in row" :key="val">{{ val }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "table",
  props: {
    header: Array,
    data: Array,
    title: String,
    footnote: String,
    example: Boolean,
  },
};
</script>

<style scoped>
table {
  width: 100%;
  font-size: 0.9em;
  overflow: auto;
}
thead {
  background-color: var(--secondary);
  color: var(--light);
}
th,
td {
  padding: 0.5em;
  text-align: left;
}
</style>