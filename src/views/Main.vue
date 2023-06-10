<script>
import Item from "../components/Item.vue"
import Side from "../components/Side.vue"
import AddItem from "../components/AddItem.vue"
import DelWarning from "../components/Delwarning.vue"
export default {
    components: {
        Item, Side, AddItem, DelWarning
    },
    data() {
        return {
            account: "",
            balance: 0,
            addShow: false,
            delShow: false,
            itemList: [],
            income: 0,
            expend: 0,
        }
    },
    methods: {
        changeSelect(index) {
            this.itemList[index].isSelected = !this.itemList[index].isSelected
        },
        openAdd() {
            this.addShow = true;
        },
        closeAdd(item) {
            if (item) {
                this.itemList.push(item);
                localStorage.setItem("itemList", JSON.stringify(this.itemList));
            }
            this.reloud();
        },
        delItem() {
            this.itemList = this.itemList.filter(item => { return !item.isSelected });
            localStorage.setItem("itemList", JSON.stringify(this.itemList));
            this.reloud();
        },
        reloud() {//重新渲染頁面
            //計算新的income 和 expend
            let incomeSum = 0;
            let expendSum = 0;
            this.itemList.forEach(item => {
                this.balance += item.price;
                if (item.price >= 0) {
                    incomeSum += item.price;
                } else {
                    expendSum += -item.price;
                }
            });
            //渲染到頁面上
            this.income = incomeSum;
            this.expend = expendSum;
            this.balance = incomeSum - expendSum;
            this.addShow = false;
        },
        changeDel(data) {
            this.delShow = !this.delShow;
            if (data === "go") {
                this.delItem();
            }
        },

    },

    mounted() {
        this.account = localStorage.getItem("account");

        if (localStorage.getItem("itemList")) {
            this.itemList = JSON.parse(localStorage.getItem("itemList"))
        }
        this.itemList.forEach(item => {
            this.balance += item.price;
            if (item.price >= 0) {
                this.income += item.price;
            } else {
                this.expend += -item.price;
            }
        })
    },

}
</script>
<template>
    <div class="main">
        <Side :account="account" :balance="balance" />
        <div class="container">
            <h2>這裡是Main</h2>
            <div class="area balance-area">
                <div class="income">
                    <h2>income</h2>
                    <h3>$ {{ income }}</h3>
                </div>
                <div class="expend">
                    <h2>expend</h2>
                    <h3>$ {{ expend }}</h3>
                </div>
            </div>
            <div class="area btn-area">
                <button type="button" @click="openAdd" class="btn add">add</button>
                <button type="button" @click="changeDel" class="btn del">del</button>
            </div>
            <div class="area item-area">
                <Item v-for="(item, index) in itemList" :key="index" :name="item.name" :price="item.price"
                    :isSelected="item.isSelected" @changeSelected="changeSelect(index)"></Item>
            </div>

        </div>
    </div>

    <AddItem v-if="addShow" @addShow="closeAdd" :isAdd="addShow" />
    <DelWarning v-if="delShow" @closeDel="changeDel" />
</template>
<style lang="scss" scoped>
.main {
    width: 100vw;
    height: 100vh;
    display: flex;

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        .area {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 16px 0;
        }

        .item-area {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .balance-area {
            text-align: center;

            .income {
                color: green;
            }

            .expend {
                color: brown;
            }
        }

        .btn-area {
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
}
</style>