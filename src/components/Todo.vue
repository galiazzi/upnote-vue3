
<template>
  <div class="todo">
    <hr />
    <h4>{{ upper(title) }}</h4>
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

<script>
import Item from "./Item.vue";

export default {
  name: "Todo",
  components: { Item },
  props: {
    title: String,
  },
  data() {
    return {
      texto: "",
      lista: [],
    };
  },
  methods: {
    add() {
      if (!this.texto) {
        return;
      }
      this.lista.push({
        texto: this.texto,
        ok: false,
      });
      this.texto = "";
      this.$refs.iptTexto.focus();
    },
    remover(item) {
      this.lista.splice(this.lista.indexOf(item), 1);
    },
    upper(v) {
      return v.toUpperCase();
    },
  },
};
</script>
