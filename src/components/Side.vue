<script>
export default {
    props: [
        "account", "balance"
    ]

}
</script>
<template>
    <div class="side">
        <div class="tital-area">
            <h2>這是一個side</h2>
        </div>
        <div class="account-area">
            <h2>{{ account }}</h2>
        </div>
        <div class="balance-area">
            <p>你的餘額</p>
            <h2>$ {{ balance }}</h2>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.side {
    min-width: 10rem;
    height: 100vh;
    background-color: rgb(60, 127, 165);
    text-align: center;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    .tital-area {
        margin-top: 112px;
    }

    .account-area {
        margin-top: 128px;
    }
}
</style>