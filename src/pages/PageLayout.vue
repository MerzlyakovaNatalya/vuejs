<template>
    <div class="wrap">
        <router-link to="/layout/page_one">{{ titleOne}}</router-link>
        <router-link to="/layout/page_two">{{ titleTwo }}</router-link>
        <router-link to="/layout/page_three">{{ titleThree }}</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data() {
        return {
            titleOne: "Страница_1",
            titleTwo: "Страница_2",
            titleThree: "Страница_3"
        };
    }
};
</script>

<style scoped>
.wrap {
    padding: 20px;
}

a {
    border: 1px solid #0000ff1a;
    padding: 2px;
    text-decoration: none;
    margin-right: 20px;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}

a:hover {
    border: 1px solid red;
}

@media screen and (max-width: 550px) {
    a {
        margin-right: 2px;
        padding: 5px;
    }
}
</style>