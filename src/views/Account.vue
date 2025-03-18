<template>
    <Header></Header>
    <div id="mali" class="container is-fluid px-6 mb-6">
        <div class="notification is-white">

            <label class="label is-size-2 mb-0 pl-6">My Profile</label>

            <div class="tile is-ancestor mt-3">
                <div class="tile is-vertical is-5">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-white">
                                <div class="is-pulled-right mt-5">
                                    <figure class="image is-256x256">
                                        <img src="https://media.discordapp.net/attachments/1079783003494031480/1080793872772382760/5.png">
                                    </figure>
                                </div>




                            </article>
                        </div>
                    </div>
                </div>


                <div class="tile is-parent">
                    <article class="tile is-child notification is-white">


                        <div class="content">
                            <label class="label is-size-5 mb-1">ชื่อ</label>
                            <div class="control mb-3">
                                <input id="mali" class="input mt-0" type="text" value="ศรุตา" disabled>
                            </div>

                            <label class="label is-size-5 mb-1">นามสกุล</label>
                            <div class="control mb-3">
                                <input id="mali" class="input mt-0" type="text" value="จรูญกีรติโรจน์" disabled>
                            </div>

                            <label class="label is-size-5 mb-1">รหัสนักศึกษา</label>
                            <div class="control mb-3">
                                <input id="mali" class="input mt-0" type="number" value="64070234" disabled>
                            </div>

                            <label class="label is-size-5 mb-1">อีเมลล์</label>
                            <div class="control mb-3">
                                <input id="mali" class="input mt-0" type="email" value="64070234@kmitl.ac.th" disabled>
                            </div>


                        </div>

                    </article>
                </div>
            </div>



        </div>
    </div>


    <!-- footer -->
    <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'AccountPage',
    components: {
        Header,
        Footer,

    },
}
</script>