```javascript
<template>
  <div>
    <el-popover v-model:visible="visible" placement="top" :width="350">
      <div class="tree-wrap">
        <el-tree
          ref="treeRef"
          show-checkbox
          :data="treeData"
          :props="defaultProps"
          :check-strictly="checkStrictly"
          :default-expand-all="defaultExpandAll"
          :defaultProps="defaultProps"
          @node-click="handleNodeClick"
          nodeKey="id"
          :default-checked-keys="defaultCheckedKeys"
        />
      </div>
      <div style="text-align: right; margin: 0">
        <el-button size="small" text @click="visible = false">取消</el-button>
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </div>
      <template #reference>
        <el-input
          v-model="inputValue"
          @click="openTreePopover"
          placeholder="树形搜索"
          readonly
        />
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, toRefs, onMounted } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      default: [],
    },
    options: {
      required: true,
      default: [],
    },
    checkStrictly: {
      default: false,
    },
    defaultExpandAll: {
      default: true,
    },
    defaultProps: {
      default: {
        children: "children",
        label: "label",
      },
    },
  },
  setup(props, { emit }) {
    const treeRef = ref();
    const { options, modelValue } = toRefs(props);

    interface Tree {
      label: string;
      children?: Tree[];
    }

    const visible = ref(false);
    const inputValue = ref("");

    const defaultCheckedKeys = ref([]);

    onMounted(()=>{
      setCheckedKeys(modelValue.value)
    })

    const setCheckedKeys = (keys: any[]) => {
      treeRef.value.setCheckedKeys(keys, false);
      let checkList = getCheckedNodes();
      inputValue.value = checkList
        .map((item: { label: string }) => item.label)
        .join(",");
    };

    const handleNodeClick = (data: Tree) => {
      console.log(data);
    };

    const openTreePopover = () => {
      visible.value = true;
      // setCheckedKeys(modelValue.value);
    };

    const confirm = () => {
      let checkList = getCheckedNodes();
      emit(
        "update:modelValue",
        checkList.map((item: { id: string }) => item.id)
      );
      inputValue.value = checkList
        .map((item: { label: string }) => item.label)
        .join(",");
      visible.value = false;
    };

    const getCheckedNodes = () => {
      return treeRef.value.getCheckedNodes();
    };

    return {
      treeRef,
      visible,
      inputValue,
      defaultCheckedKeys,
      treeData: options.value,
      handleNodeClick,
      getCheckedNodes,
      setCheckedKeys,
      confirm,
      openTreePopover,
    };
  },
});
</script>

<style lang="scss" scoped>
.tree-wrap {
  height: 220px !important;
  overflow-y: scroll !important;
}
</style>

```

