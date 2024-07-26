<template>
  <div class="p-4">
    <h1 class="text-center text-gray-500 font-bold text-xl">Life coding task:</h1>

    <div class="mt-4">
      <ul class="space-y-20">
        <TreeNode
          v-for="(node, index ) in treeData2"
          :key="index"
          :node="node"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TreeNode from './TreeNode.vue'

const data = ref<any>(null)
const loading = ref(false)

const data2 = ref(
  [
    {
      id: 1,
      email: 'alice.smith@example.com',
      firstName: 'Alice',
      lastName: 'Smith',
      reportsTo: null,
      belongsTo: null
    },
    {
      id: 2,
      email: 'bob.johnson@example.com',
      firstName: 'Bob',
      lastName: 'Johnson',
      reportsTo: 'alice.smith@example.com',
      belongsTo: 1
    },
    {
      id: 3,
      email: 'carol.williams@example.com',
      firstName: 'Carol',
      lastName: 'Williams',
      reportsTo: 'alice.smith@example.com',
      belongsTo: 1
    },
    {
      id: 4,
      email: 'david.jones@example.com',
      firstName: 'David',
      lastName: 'Jones',
      reportsTo: 'bob.johnson@example.com',
      belongsTo: 2
    },
    {
      id: 5,
      email: 'eva.brown@example.com',
      firstName: 'Eva',
      lastName: 'Brown',
      reportsTo: 'bob.johnson@example.com',
      belongsTo: 2
    },
    {
      id: 6,
      email: 'frank.davis@example.com',
      firstName: 'Frank',
      lastName: 'Davis',
      reportsTo: 'bob.johnson@example.com',
      belongsTo: 2
    },
    {
      id: 8,
      email: 'grace.miller@example.com',
      firstName: 'Grace',
      lastName: 'Miller',
      reportsTo: 'carol.williams@example.com',
      belongsTo: 3
    },
    {
      id: 9,
      email: 'henry.wilson@example.com',
      firstName: 'Henry',
      lastName: 'Wilson',
      reportsTo: 'carol.williams@example.com',
      belongsTo: 3
    },
    {
      id: 7,
      email: 'iris.moore@example.com',
      firstName: 'Iris',
      lastName: 'Moore',
      reportsTo: 'carol.williams@example.com',
      belongsTo: 3
    },
    {
      id: 10,
      email: 'jack.taylor@example.com',
      firstName: 'Jack',
      lastName: 'Taylor',
      reportsTo: 'david.jones@example.com',
      belongsTo: 4
    },
    {
      id: 11,
      email: 'karen.anderson@example.com',
      firstName: 'Karen',
      lastName: 'Anderson',
      reportsTo: 'david.jones@example.com',
      belongsTo: 4
    },
    {
      id: 12,
      email: 'liam.thomas@example.com',
      firstName: 'Liam',
      lastName: 'Thomas',
      reportsTo: 'eva.brown@example.com',
      belongsTo: 5
    },
    {
      id: 13,
      email: 'mary.jackson@example.com',
      firstName: 'Mary',
      lastName: 'Jackson',
      reportsTo: 'eva.brown@example.com',
      belongsTo: 5
    },
    {
      id: 14,
      email: 'noah.white@example.com',
      firstName: 'Noah',
      lastName: 'White',
      reportsTo: 'frank.davis@example.com',
      belongsTo: 6
    },
    {
      id: 15,
      email: 'olivia.harris@example.com',
      firstName: 'Olivia',
      lastName: 'Harris',
      reportsTo: 'frank.davis@example.com',
      belongsTo: 6
    },
    {
      id: 16,
      email: 'peter.martin@example.com',
      firstName: 'Peter',
      lastName: 'Martin',
      reportsTo: 'grace.miller@example.com',
      belongsTo: 8

    },
    {
      id: 17,
      email: 'quincy.thompson@example.com',
      firstName: 'Quincy',
      lastName: 'Thompson',
      reportsTo: 'henry.wilson@example.com',
      belongsTo: 9
    },
    {
      id: 18,
      email: 'rachel.garcia@example.com',
      firstName: 'Rachel',
      lastName: 'Garcia',
      reportsTo: 'iris.moore@example.com',
      belongsTo: 7
    },
    {
      id: 19,
      email: 'sam.lee@example.com',
      firstName: 'Sam',
      lastName: 'Lee',
      reportsTo: 'iris.moore@example.com',
      belongsTo: 7
    },
    {
      id: 20,
      email: 'tina.lewis@example.com',
      firstName: 'Tina',
      lastName: 'Lewis',
      reportsTo: 'jack.taylor@example.com',
      belongsTo: 10
    }
  ]
)

function listToTree (list: any[]) {
  const map: { [key: number]: number } = {}
  const result: any[] = []

  list.forEach((item, index) => {
    map[item.id] = index
    item.children = []
  })

  list.forEach(item => {
    if (item.belongsTo !== null) {
      if (map[item.belongsTo] !== undefined) {
        list[map[item.belongsTo]].children.push(item)
      }
    } else {
      result.push(item)
    }
  })

  return result
}

const treeData2 = computed(() => {
  return listToTree(data2.value)
})

async function getData () {
  try {
    loading.value = true
    const res = await fetch('https://gist.githubusercontent.com/marianolg/438b24261065ab81bb2f68cb83fc6c57/raw/f5bf84d7f0a36d7b4fde8f3c7be89d58fa2bb6bf/employees.json')
    data.value = await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(getData)
</script>
