<script>
export default {
    data() {
        return {
            goDel: "go"
        }
    },
    methods: {
        close() {
            this.$emit("closeDel");
        },
        del() {
            this.$emit("closeDel", this.goDel);
        }
    },
}
</script>
<template>
    <div class="del-warning">
        <div class="bg"></div>
        <div class="message-box">
            <button type="button" class="close-btn" @click="close">✖</button>
            <div class="title">
                <h2>Warning</h2>
            </div>
            <button type="button" class="btn del" @click="del">確定要刪除嗎?</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.del-warning {
    width: 100vw;
    height: 100vh;
    position: fixed;
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
        z-index: 2;

        .close-btn {
            position: absolute;
            top: 0;
            right: 0;
            background-color: transparent;
            border: none;
            font-size: 36px;
            color: rgb(60, 127, 165);
        }

        .btn {
            padding: 12px 32px;
            color: white;
            background-color: rgb(60, 127, 165);
            border-radius: 8px;
            border: none;
            transition: 0.2s;

            &:hover {
                transform: scale(1.1);
            }

            &:active {
                transform: scale(1);
            }
        }

        .del {
            background-color: rgb(161, 185, 199);

            &:hover {
                background-color: brown;
            }
        }
    }
}
</style>