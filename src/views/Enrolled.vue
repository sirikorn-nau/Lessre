<template>
    <Header></Header>
    <div id="mali" class="container is-fluid px-6">
        <div class="notification has-background-white">
            <label class="label is-size-2">Enrolled Course</label>

            <div class="select is-pulled-right" style="margin-top: -30px;">
                <select id="mali" v-model="selectedSem" @change="FilterEnr()">
                    <option value="all">เลือกเทอมที่ลง</option>
                    <option value="11">ปี 1/1</option>
                    <option value="12">ปี 1/2</option>
                    <option value="21">ปี 2/1</option>
                    <option value="22">ปี 2/2</option>
                    <option value="31">ปี 3/1</option>
                    <option value="32">ปี 3/2</option>
                    <option value="41">ปี 4/1</option>
                    <option value="42">ปี 4/2</option>
                </select>
            </div>

            <!-- ตาราง enroll -->
            <div class="tile is-ancestor mt-6">
                <div class="tile is-vertical is-9">
                    <div class="tile is-parent">
                        <article class="tile is-child notification has-background-white">

                            <div class="field has-addons">
                                <p class="title is-size-3"> {{ semester }}</p>
                                <p class="title is-size-3 ml-auto">{{ sortEnrolled.length }} วิชา {{ sumCredits }} หน่วยกิต</p>

                            </div>
                            <div class="content">
                                <!-- box 1 วิชา -->
                                <div class="box has-background-warning-light" v-for="enr in sortEnrolled"
                                    :key="enr.sub_name">
                                    <article class="media">
                                        <div class="media-left">
                                            <figure class="image is-128x128 mt-3">
                                                <div class="pic">
                                                    <div class="minipic1" v-if="enr.sub_name.length < 12">
                                                        <strong>{{ enr.sub_name }}</strong>
                                                    </div>
                                                    <div class="minipic2" v-if="enr.sub_name.length >= 12 & enr.sub_name.length < 24">
                                                        <strong>{{ enr.sub_name }}</strong>
                                                    </div>
                                                    <div class="minipic3" v-if="enr.sub_name.length >= 24 & enr.sub_name.length < 36">
                                                        <strong>{{ enr.sub_name }}</strong>
                                                    </div>
                                                    <div class="minipic4" v-if="enr.sub_name.length >= 36">
                                                        <strong>{{ enr.sub_name }}</strong>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <!-- รหัส ชื่อวิชา -->
                                                <div class="field has-addons">
                                                    <label class="label is-size-5 mr-2">{{ enr.sub_id }} </label>
                                                    <label class="label is-size-5 mr-auto">{{ enr.sub_name }}</label>
                                                    <label class="label is-size-5">{{ enr.enr_credit }}
                                                        หน่วยกิต</label>
                                                </div>
                                                <!-- บรรทัด2 -->
                                                <div class="field has-addons">
                                                    <label class="label is-size-6 mr-2">เวลาเรียน {{ enr.timetable }}</label>
                                                    <label class="label is-size-6 mr-auto">ห้องเรียน {{ enr.class }}</label>

                                                </div>
                                                <!-- บรรทัด3 -->
                                                <div class="field has-addons">
                                                    <label class="label is-size-6 mr-4">สอบกลางภาค: {{ enr.midterm }}</label>
                                                    <label class="label is-size-6 mr-auto">สอบปลายภาค: {{ enr.final }}</label>
                                                    <span class="icon is-medium mt-5 mr-1">

                                                        <a @click="showEditModal" class="fa-regular fa-pen-to-square fa-lg mr-3"></a>
                                                        <a @click="showDelTrashModal" class="fa-solid fa-trash-can fa-lg mr-2"></a>

                                                    </span>
                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <!-- สรุปลงทะเบียน -->
                <div class="tile is-parent">
                    <article class="tile is-child notification has-background-white">
                        <div class="content">
                            <p class="title is-size-4">สรุปลงทะเบียน</p>
                            <div class="content">
                                <label class="label is-size-6">จำนวนหน่วยกิตที่ต้องลง: {{ totalCredits }}</label>
                                <label class="label is-size-6">จำนวนหน่วยกิตที่ลงแล้ว: {{ sumAllCredits }}</label>
                                <label class="label is-size-6 mb-6">จำนวนวิชาที่ลงแล้ว: {{ Enrolled.length }}</label>

                                <button @click="showAddModal" class="button is-fullwidth mb-4 is-success" id="mali">Add
                                    Enroll</button>
                                <button @click="showDelModal" class="button is-fullwidth mb-3 is-danger" id="mali">Delete
                                    Enroll</button>

                            </div>
                        </div>
                    </article>
                </div>
            </div>



        </div>
    </div>

    <!-- footer -->
    <Footer></Footer>
    
    <!-- modal add -->
    <div id="mali" class="modal has-background-white" :class="{ 'is-active': showAddModalFlag }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head ">
                <p class="modal-card-title is-size-3 ml-1 py-3" id="mali"><strong>Add
                        Enroll</strong></p>
                
            </header>
            <section class="modal-card-body">


                <div class="field is-grouped mb-3">

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">รหัสวิชา</label>
                        <input class="input" type="number" placeholder="e.g. 06016322" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">ชื่อวิชา</label>
                        <input class="input" type="text" placeholder="e.g. Web Programming" id="mali">
                    </div>



                </div>


                <div class="field is-grouped mb-3">
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">จำนวนหน่วยกิต</label>
                        <input class="input" type="number" placeholder="e.g. 3" id="mali">
                    </div>
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">เวลาเรียน</label>
                        <input class="input" type="text" placeholder="e.g. 09.00-13.00" id="mali">
                    </div>



                </div>
                <div class="field is-grouped mb-3">
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">ห้องเรียน</label>
                        <input class="input" type="text" placeholder="e.g. L-305" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">เทอมที่ลง</label>
                        <br>
                        <div class="select is-fullwidth">
                            <select id="mali">
                                <option value="all">เลือกเทอมที่ลง</option>
                                <option value="11">ปี 1/1</option>
                                <option value="12">ปี 1/2</option>
                                <option value="21">ปี 2/1</option>
                                <option value="22">ปี 2/2</option>
                                <option value="31">ปี 3/1</option>
                                <option value="32">ปี 3/2</option>
                                <option value="41">ปี 4/1</option>
                                <option value="42">ปี 4/2</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field is-grouped mb-3">


                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">วันสอบกลางภาค</label>
                        <input class="input" type="date" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">วันสอบปลายภาค</label>
                        <input class="input" type="date" id="mali">
                    </div>

                </div>



            </section>
            <footer class="modal-card-foot">
                <button @click="okModal" class="button is-success" id="mali">Submit</button>
                <button @click="cancelModal" class="button is-danger" id="mali">Cancel</button>

            </footer>
        </div>
    </div>

    <!-- modal del trash -->

    <div id="mali" class="modal has-background-white" :class="{ 'is-active': showDelTrashModalFlag }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head ">
                <p class="modal-card-title is-size-3 ml-1 py-3" id="mali">
                    <strong>Confirm Delete Enroll</strong>
                </p>
                
            </header>

            <section class="modal-card-body">
                <label class="label is-pulled-left is-size-5">คุณยืนยันจะลบ วิชา ... จริง ๆ ใช่ไหม</label>
            </section>
            
            <footer class="modal-card-foot">
                <button @click="okModal" class="button is-success" id="mali">Submit</button>
                <button @click="cancelModal" class="button is-danger" id="mali">Cancel</button>

            </footer>
        </div>
    </div>

    <!-- modal del enroll-->

    <div id="mali" class="modal has-background-white" :class="{ 'is-active': showDelModalFlag }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head ">
                <p class="modal-card-title is-size-3 ml-1 py-3" id="mali">
                    <strong>Delete Enroll</strong>
                </p>
                
            </header>
            <section class="modal-card-body">


                <div class="field is-grouped mb-3">

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">รหัสวิชา</label>
                        <input class="input" type="number" placeholder="e.g. 06016322" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">ชื่อวิชา</label>
                        <input class="input" type="text" placeholder="e.g. Web Programming" id="mali">
                    </div>



                </div>


                <div class="field is-grouped mb-3">
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">จำนวนหน่วยกิต</label>
                        <input class="input" type="number" placeholder="e.g. 3" id="mali">
                    </div>
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">เวลาเรียน</label>
                        <input class="input" type="text" placeholder="e.g. 09.00-13.00" id="mali">
                    </div>



                </div>
                <div class="field is-grouped mb-3">
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">ห้องเรียน</label>
                        <input class="input" type="text" placeholder="e.g. L-305" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">เทอมที่ลง</label>
                        <br>
                        <div class="select is-fullwidth">
                            <select id="mali">
                                <option>เลือกเทอมที่ลง</option>
                                <option>ปี 1/1</option>
                                <option>ปี 1/2</option>
                                <option>ปี 2/1</option>
                                <option>ปี 2/2</option>
                                <option>ปี 3/1</option>
                                <option>ปี 3/2</option>
                                <option>ปี 4/1</option>
                                <option>ปี 4/2</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field is-grouped mb-3">


                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">วันสอบกลางภาค</label>
                        <input class="input" type="date" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">วันสอบปลายภาค</label>
                        <input class="input" type="date" id="mali">
                    </div>

                </div>



            </section>
            <footer class="modal-card-foot">
                <button @click="okModal" class="button is-success" id="mali">Submit</button>
                <button @click="cancelModal" class="button is-danger" id="mali">Cancel</button>

            </footer>
        </div>
    </div>

    <!-- modal edit -->
    <div id="mali" class="modal has-background-white" :class="{ 'is-active': showEditModalFlag }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head ">
                <p class="modal-card-title is-size-3 ml-1 py-3" id="mali"><strong>Edit
                        Enroll</strong></p>
                
            </header>
            <section class="modal-card-body">


                <div class="field is-grouped mb-3">

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">รหัสวิชา</label>
                        <input class="input" type="number" placeholder="e.g. 06016322" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">ชื่อวิชา</label>
                        <input class="input" type="text" placeholder="e.g. Web Programming" id="mali">
                    </div>



                </div>


                <div class="field is-grouped mb-3">
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">จำนวนหน่วยกิต</label>
                        <input class="input" type="number" placeholder="e.g. 3" id="mali">
                    </div>
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">เวลาเรียน</label>
                        <input class="input" type="text" placeholder="e.g. 09.00-13.00" id="mali">
                    </div>



                </div>
                <div class="field is-grouped mb-3">
                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">ห้องเรียน</label>
                        <input class="input" type="text" placeholder="e.g. L-305" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">เทอมที่ลง</label>
                        <br>
                        <div class="select is-fullwidth">
                            <select id="mali">
                                <option value="all">เลือกเทอมที่ลง</option>
                                <option value="11">ปี 1/1</option>
                                <option value="12">ปี 1/2</option>
                                <option value="21">ปี 2/1</option>
                                <option value="22">ปี 2/2</option>
                                <option value="31">ปี 3/1</option>
                                <option value="32">ปี 3/2</option>
                                <option value="41">ปี 4/1</option>
                                <option value="42">ปี 4/2</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field is-grouped mb-3">


                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">วันสอบกลางภาค</label>
                        <input class="input" type="date" id="mali">
                    </div>

                    <div class="control is-expanded">
                        <label class="label is-pulled-left is-size-5">วันสอบปลายภาค</label>
                        <input class="input" type="date" id="mali">
                    </div>

                </div>



            </section>
            <footer class="modal-card-foot">
                <button @click="okModal" class="button is-success" id="mali">Submit</button>
                <button @click="cancelModal" class="button is-danger" id="mali">Cancel</button>

            </footer>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Enrolled from '../assets/json/Enrolled.json'
import Footer from '../components/Footer.vue'
export default {
    name: 'EnrolledPage',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            showAddModalFlag: false,
            showDelModalFlag: false,
            showEditModalFlag: false,
            showDelTrashModalFlag: false,
            okPressed: false,
            totalCredits: 130,
            Enrolled: Enrolled,
            sortEnrolled: Enrolled,
            selectedSem: "all",
            semester: "ทั้งหมด"
        }
    }, computed: {
        sumCredits: function () {
            var sum = 0;
            var enr = this.sortEnrolled;
            for (let i = 0; i < enr.length; i++) {
                sum += parseInt(enr[i].enr_credit);
            }
            return sum
        },
        sumAllCredits: function () {
            var sum = 0;
            var enr = this.Enrolled;
            for (let i = 0; i < enr.length; i++) {
                sum += parseInt(enr[i].enr_credit);
            }
            return sum
        }
    }, mounted() {
        this.sortEnrolled = this.Enrolled
    }, methods: {
        FilterEnr() {
            this.sortEnrolled = [];
            if (this.selectedSem === "11") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 1/1')
                this.semester = "ปี 1/1"
            } else if (this.selectedSem === "12") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 1/2')
                this.semester = "ปี 1/2"
            } else if (this.selectedSem === "21") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 2/1')
                this.semester = "ปี 2/1"
            } else if (this.selectedSem === "22") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 2/2')
                this.semester = "ปี 2/2"
            } else if (this.selectedSem === "31") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 3/1')
                this.semester = "ปี 3/1"
            } else if (this.selectedSem === "32") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 3/2')
                this.semester = "ปี 3/2"
            } else if (this.selectedSem === "41") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 4/1')
                this.semester = "ปี 4/1"
            } else if (this.selectedSem === "42") {
                this.sortEnrolled = Enrolled.filter((sub) => sub.semester === 'ปี 4/2')
                this.semester = "ปี 4/2"
            } else {
                this.sortEnrolled = this.Enrolled
                this.semester = "ทั้งหมด"
            }
        },
        showDelTrashModal(){
            this.okPressed = false;
            this.showDelTrashModalFlag = true;
        },
        showAddModal() {
            this.okPressed = false;
            this.showAddModalFlag = true;
        },
        showDelModal() {
            this.okPressed = false;
            this.showDelModalFlag = true;
        },
        showEditModal() {
            this.okPressed = false;
            this.showEditModalFlag = true;
        },
        okModal() {
            this.okPressed = true;
            this.showAddModalFlag = false;
            this.showDelModalFlag = false;
            this.showEditModalFlag = false;
            this.showDelTrashModalFlag = false;

        },
        cancelModal() {
            this.okPressed = false;
            this.showAddModalFlag = false;
            this.showDelModalFlag = false;
            this.showDelTrashModalFlag = false;
            this.showEditModalFlag = false;
        }
    },


}

</script>

<style>
.pic {
    width: 128px;
    height: 128px;
    background-color: rgb(255, 222, 89);
    text-align: center;
    padding: 2px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.minipic1 {
    margin-top: 3.5em;
}

.minipic2 {
    margin-top: 2.5em;
}

.minipic3 {
    margin-top: 1.5em;
}

.minipic4 {
    margin-top: 1em;
}
</style>