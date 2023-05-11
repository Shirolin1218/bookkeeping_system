<script>
export default {
    props: ["name", "price", "isSelected"],
    data() {
        return {
        }
    },
    methods: {
        changeSelected() {
            this.$emit("changeSelected");
        }
    },
}
</script>
<template>
    <div class="item" :class="{ selected: isSelected }" @click="changeSelected">
        <div class="name">{{ name }}</div>
        <div class="price" :class="{ positive: price > 0, negative: price < 0, selected: isSelected }">$ {{ Math.abs(price) }}
        </div>
    </div>
</template>
<style lang="scss" scoped>
.item {
    width: 50%;
    padding: 4px 16px;
    height: 1.5rem;
    border: 2px solid rgb(60, 127, 165);
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
    transition: 0.2s;

    &:hover {
        background-color: rgb(60, 127, 165);
    }

    .price {
        transition: 0.2s;
    }

    .positive {
        color: green;
    }

    .negative {
        color: brown;
    }

    .selected {
        color: white;
    }
}

.selected {
    background-color: rgb(60, 127, 165);
    color: white;
}
</style>