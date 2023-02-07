<template>
  <div class="dimension-controller">
    <div class="label">对比维度</div>
    <div class="dimension-controller-inner">
      <el-radio-group class="controller-item" v-model="dimension">
        <el-radio-button label="osv" />
        <el-radio-button label="testbox" />
        <el-radio-button label="tags" />
      </el-radio-group>
      <el-select
        class="controller-item"
        v-model="filterList"
        placeholder="请先搜索数据"
        multiple
        collapse-tags
        collapse-tags-tooltip
        clearable
      >
        <el-option
          class="controller-item"
          v-for="item in filterOptions[dimension]"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button type="primary" @click="handleFiltering">对比</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    osvOptions: Array<string|undefined>,
    testboxOptions: Array<string|undefined>,
    tagsOptions: Array<string|undefined>,
  }>(),
  { 
    osvOptions: () => [],
    testboxOptions: () => [],
    tagsOptions: () => [],
  }
)

const emit = defineEmits<{
  (event: 'filtering', dimension: string, filterArr: Array<string>): void
}>()

const dimension = ref('osv')

const filterOptions = ref({
  osv: props.osvOptions,
  testbox: props.testboxOptions,
  tags: props.tagsOptions
})
const filterList = ref([])

const handleFiltering = () => {
  emit('filtering', dimension.value, filterList.value)
}
</script>
<style scoped lang="scss">
.dimension-controller {
  display: flex;
  margin: 12px 0 24px 0;
  .label {
    line-height: 32px;
    margin-right: 10px;
  }
  &-inner {
    display: inline-flex;
    .controller-item:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>