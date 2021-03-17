<template>
  <div class="item">
    <span :class="{ 'item-ok': value.ok }">
      {{ value.texto || "-" }}
    </span>
    <input type="checkbox" v-model="value.ok" />
    <button @click="$emit('remover', value)">-</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    value() {
      return this.item;
    },
  },
};
</script>

<style>
.item span:first-child {
  text-align: left;
  display: inline-block;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-ok {
  text-decoration: line-through;
}
</style>
