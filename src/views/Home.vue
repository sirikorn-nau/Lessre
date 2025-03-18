<template>
    <Header></Header>

    <!-- home หน้าจริง ห้ามลบ -->


    <img src="https://media.discordapp.net/attachments/856448592947183627/1080189529287295057/607b093b14de0dd2.png?width=1405&height=703"
        style="width: 100%;">
    <div class="columns mx-6 mt-4">
        <!-- info 3 -->
        <div class="column is-two-fifths has-background-white">
            <div class="box has-background-warning-light" id="tilt">
                <label class="label is-size-2 mb-0">What is Lorem Ipsum?</label>
                <label class="label is-size-5 mt-0">Cupcake cookie candy canes jelly pastry powder cake oat cake. Jelly-o
                    bonbon gummi bears wafer gummies
                    topping lollipop gingerbread. Gingerbread chocolate cake soufflé topping wafer bonbon pastry.
                    Gingerbread
                    wafer tootsie roll macaroon wafer dragée.</label>

            </div>
            <div class="box has-background-warning-light" id="tilt">
                <label class="label is-size-2 mb-0">Where can I get some?</label>
                <label class="label is-size-5 mt-0">Lemon drops dessert carrot cake powder caramels. Lollipop caramels cake
                    donut candy canes icing. Chocolate bar dragée bear claw toffee fruitcake pudding icing jelly-o.</label>
            </div>
            <div class="box has-background-warning-light" id="tilt">
                <label class="label is-size-2 mb-0">Why do we use it?</label>
                <label class="label is-size-5 mt-0">Sugar plum lollipop chocolate bar biscuit bonbon chocolate bar jelly
                    tootsie roll croissant. Croissant cookie tootsie roll chocolate pastry tootsie roll cake. Candy canes
                    cupcake chocolate dessert pastry sweet roll.</label>
            </div>
        </div>
        <!-- งานที่กำลังทำยุ -->
        <div class="column">
            <article class="panel is-warning">
                <p class="panel-heading has-text-centered" id="mali">
                    Works in progress
                </p>

                <a class="panel-block" id="mali" v-for="wip in FilterAsm" :key="wip.number">
                    <span class="icon">
                        <i class="fas fa-spinner fa-pulse ml-1 mr-4"></i>
                    </span>
                    <p><strong>{{ wip.asm_name }}</strong> <br> กำหนดส่ง: {{ wip.deadline }}</p>
                </a>
            </article>
        </div>
    </div>

    <!-- footer component -->
    <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Assignments from '../assets/json/jsonAssignment.json'

export default {
    name: 'HomePage',
    components: {
        Header,
        Footer,

    },
    data() {
        return {
            data: Assignments
        }
    }, computed: {
        FilterAsm: function () {
            return this.data.filter(data => data.asm_status === 'กำลังทำ').slice(0, 5)
        }
    }
}

</script>

