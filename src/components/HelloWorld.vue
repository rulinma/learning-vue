<!--
 * @Author: rulinma rulinma@gmail.com
 * @Date: 2023-03-06 18:13:51
 * @LastEditors: rulinma rulinma@gmail.com
 * @LastEditTime: 2023-03-07 18:38:09
 * @Description: 程序员学习和实战指南 https://github.com/rulinma/it 获取更多内容
 * @copyright: 马如林保留所有版权
-->
<template>
  <div class="hello">
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have few pages</div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have more than 7 pages</div>
      <el-pagination layout="prev, pager, next" :total="1000" />
    </div>

    <el-radio-group v-model="size" label="size control" size="small">
      <el-radio-button label="large">large</el-radio-button>
      <el-radio-button label="default">default</el-radio-button>
      <el-radio-button label="small">small</el-radio-button>
    </el-radio-group>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
      </div>
      <div class="block">
        <span class="demonstration">Picker with quick options</span>
        <el-date-picker v-model="value2" type="date" placeholder="Pick a day" :disabled-date="disabledDate"
          :shortcuts="shortcuts" :size="size" />
      </div>
    </div>

    <h1>{{ msg }}</h1>
    <el-button type="danger">Danger</el-button>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
import { ref } from 'vue'
const size = ref < 'default' | 'large' | 'small' > ('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.example-pagination-block+.example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
