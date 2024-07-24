<template>
  <div class="p-4 border space-y-4">
    <h1 class="mb-3 text-gray-600 text-center font-semibold">Component usage:</h1>

    <div class="flex items-start justify-evenly space-x-4">
      <!-- first column -->
      <div class="space-y-4">
        <div class="border border-red-600 px-2">
          <p>Example basic point separator: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo" separator="•" />
        </div>

        <div>
          <p>Example with | separator: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo" separator="|" />
        </div>

        <div>
          <p>Example with smile separator: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo" separator="🦋" />
        </div>

        <div>
          <p>Example with image separator: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo" :separator="book" />
        </div>
      </div>

      <!-- second column -->
      <div class="space-y-4">
        <div>
          <p>Example with 3 object items: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo3Items" separator="•" />
        </div>

        <div>
          <p>Example with 2 object items: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo2Items" separator="•" />
        </div>

        <div>
          <p>Example with 1 object item: ⬇️</p>
          <SeparatedDataList :data="formattedPersonInfo1Item" separator="•" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { personInfo, personInfo3Items, personInfo2Items, personInfo1Item } from './dummy-data'
import type { IRawDataObject, TFormattedDataObject } from './pre-assessment-task'
import book from '@/assets/icons/book.svg'

// Parse data
const { dayjs } = useDayjs()

function transformDataObject (personData: IRawDataObject): TFormattedDataObject {
  const transformedData: TFormattedDataObject = {}

  if (personData.count) {
    transformedData.count = `Count: ${personData.count}`
  }
  if (personData.location) {
    transformedData.location = personData.location.join(', ')
  }
  if (personData.salary) {
    transformedData.salary = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(personData.salary)
  }
  if (personData.timestamp) {
    transformedData.timestamp = dayjs(personData.timestamp).fromNow()
  }

  return transformedData
}

const formattedPersonInfo = transformDataObject(personInfo)

// data with 3,2,1 items in Object
const formattedPersonInfo3Items = transformDataObject(personInfo3Items)
const formattedPersonInfo2Items = transformDataObject(personInfo2Items)
const formattedPersonInfo1Item = transformDataObject(personInfo1Item)
</script>
