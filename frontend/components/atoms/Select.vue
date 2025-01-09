<template>
  <div class="flex flex-wrap">
    <div class="m-4">
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter genre"
        remote-show-suffix
        :remote-method="remoteMethod"
        :loading="loading"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

interface ListItem {
  value: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    states: string[];
    updateGenres: (newGenres: string[]) => void;
  }>(),
  {
    states: () => [],
  }
);

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value = ref<string[]>([]);
const loading = ref(false);

const updateOptions = () => {
  list.value = props.states.map((item) => {
    return { value: `value:${item}`, label: `${item}` };
  });
};

onMounted(() => {
  updateOptions();
});

watch(
  () => props.states,
  () => {
    updateOptions();
  },
  { deep: true }
);

const remoteMethod = (query: string) => {
  if (!query) {
    options.value = list.value;
    return;
  }
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};

watch(value, (newValue) => {
  const newGenres = newValue.map((item) => {
    return item.replace("value:", "");
  });
  props.updateGenres(newGenres)
});
</script>
