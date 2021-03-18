
<template>
  <div class="todo">
    <hr />
    <h4>{{ upper(title || "") }}</h4>
    <Item
      v-for="(item, idx) in lista"
      :key="idx"
      :item="item"
      @remover="remover"
    />
    <br />
    <input
      ref="iptTexto"
      v-model="texto"
      @keypress.enter="add"
      placeholder="o que fazer?"
    />
    <button @click="add" :disabled="!texto">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Item from "./Item.vue";
import { useTodo } from "../utils/todo";
import { defineComponent } from "@vue/runtime-core";

function upper(v: string) {
  return v.toUpperCase();
}

export default defineComponent({
  name: "Todo",
  components: { Item },
  props: {
    title: String,
  },
  setup() {
    const iptTexto = ref<HTMLElement>();
    const texto = ref("");

    const { lista, add: addTodo, remover } = useTodo();

    return {
      iptTexto,
      texto,

      lista,
      add() {
        if (addTodo(texto.value)) {
          texto.value = "";
          iptTexto.value?.focus();
        }
      },
      remover,

      upper,
    };
  },
});
</script>
