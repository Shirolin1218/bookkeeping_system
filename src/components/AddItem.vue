<script>
export default {
    props: ["isAdd"],
    data() {
        return {
            name: "",
            price: null,
        }
    },
    methods: {
        closeAdd() {
            this.$emit("addShow");
        },
        addItem() {
            if (this.name && this.price) {
                const item = {
                    name: this.name,
                    price: this.price,
                    isSlected: false,
                };
                this.name = "";
                this.price = null;
                this.$emit("addShow", item);
            } else {
                alert("請輸入項目");
            }
        }

    },
}
</script>
<template>
    <div class="add-item" v-show="isAdd" :addShow="isAdd">
        <div class="bg"></div>
        <div class="message-box">
            <button type="button" class="btn close-btn" @click="closeAdd">✖</button>
            <div class="input item-area">
                <label for="item"> item </label>
                <input type="text" id="item" v-model="name">
            </div>
            <div class="input price-area">
                <label for="price">price</label>
                <input type="number" id="price" v-model="price">
            </div>
            <button type="button" @click="addItem">OK</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.add-item {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .bg {
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.3;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .message-box {
        width: 40vw;
        text-align: center;
        border-radius: 16px;
        padding: 64px;
        background-color: white;
        position: relative;
        z-index: 5;

        .close-btn {
            position: absolute;
            top: 0;
            right: 0;
            background-color: transparent;
            border: none;
            font-size: 36px;
            color: rgb(60, 127, 165);
        }

        .input {

            font-size: 1.2rem;
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: start;

            input {
                width: 100%;
                padding: 0.5rem;
                border-radius: 8px;
                border: 2px solid rgb(60, 127, 165);
            }
        }

        button {
            padding: 12px 32px;
            color: white;
            background-color: rgb(60, 127, 165);
            border-radius: 8px;
            border: none;
            transition: 0.2s;
            margin-top: 32px;

            &:hover {
                transform: scale(1.1);
            }

            &:active {
                transform: scale(1);
            }
        }
    }

    .show {
        opacity: 1;
    }

}
</style>
