import { ref } from "@vue/reactivity";

export function useTodo() {
  const lista = ref<any>([]);

  return {
    lista,
    add(texto: string) {
      if (!texto) {
        return false;
      }
      lista.value.push({
        texto,
        ok: false,
      });
      return true;
    },
    remover(item: any) {
      lista.value.splice(lista.value.indexOf(item), 1);
    },
  };
}
