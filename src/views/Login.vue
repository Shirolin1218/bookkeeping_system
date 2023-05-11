<script>
export default {
    data() {
        return {
            account: "",
            pwd: "",
            itemList: [
                {
                    name: "default",
                    price: 0,
                    isSelected: false,
                }
            ]
        }
    },
    methods: {
        signUp() {//簡單的註冊功能，設定localStorage
            if (this.account && this.pwd) {
                localStorage.setItem("account", this.account);
                localStorage.setItem("pwd", this.pwd);
                alert("註冊成功")
            } else {
                alert("請輸入帳號及密碼");
            }

        },
        goLogin() {//簡單的登入功能，用localStorage做驗證
            if (this.account === localStorage.getItem("account") && this.pwd === localStorage.getItem("pwd")) {
                localStorage.setItem("itemList", JSON.stringify(this.itemList));
                this.$router.push("/main");
            } else {
                alert("登入失敗");
            }

        }
    },
    mounted() {

    },

}
</script>

<template>
    <div class="login">
        <div class="container">
            <h2>LOGIN</h2>
            <div class="input account">
                <label for="account">account</label>
                <input type="text" id="account" v-model="account">
            </div>
            <div class="input pwd">
                <label for="pwd">pwd</label>
                <input type="password" id="pwd" v-model="pwd">
            </div>
            <div class="btn-area">
                <button type="button" class="btn" @click="signUp">Sign Up</button>
                <button type="button" class="btn" @click="goLogin">Login</button>
            </div>
        </div>
    </div>
</template >

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .container {
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .input {
            margin: 24px;
            display: flex;
            flex-direction: column;
            font-size: 1.5rem;

            input {
                font-size: 1.5rem;
            }
        }

        .btn-area {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1rem;

            .btn {
                width: 5rem;
                height: 2rem;
            }
        }
    }
}
</style>