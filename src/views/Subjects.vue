<template>
    <Header></Header>
    <div id="mali" class="container is-fluid px-6">
        <div class="notification is-white">

            <!-- หัวข้อ -->
            <div class="field has-addons mb-0">
                <label class="label is-size-2 mr-auto">Subjects</label>
                <!-- filter หมวดวิชา -->
                <div class="select is-pulled-right mt-3 ">
                    <select id="mali" class="courses" v-model="selectedType" @change="FilterSub()">
                        <option value="all">เลือกหมวดวิชา</option>
                        <option value="req">วิชาบังคับ</option>
                        <option value="ele">วิชาเลือก</option>
                    </select>
                </div>
            </div>
            <hr class="has-background-grey-light mt-0">

            
            
            <div class="columns is-desktop is-multiline">
                
                    <div  class="column is-one-quarter mx-0 px-2" v-for="(sub) in sortSubject" :key="sub.sub_name">
                        <div class="card" >
                            <div class="card-image">
                                <figure class="image is-5by3" id="picture">
                                    <div class="pic1" v-if="sub.sub_name.length<15">
                                            <strong>{{ sub.sub_name }}</strong>
                                        </div>
                                        <div class="pic2" v-if="sub.sub_name.length<29 & sub.sub_name.length >=15">
                                            <strong>{{ sub.sub_name }}</strong>
                                        </div>
                                        <div class="pic3" v-if="sub.sub_name.length>=29">
                                            <strong>{{ sub.sub_name }}</strong>
                                        </div>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <div class="field has-addons mb-2">
                                        <label class="label is-size-5 ">รหัสวิชา {{ sub.sub_id }}</label>
                                    </div>
                                    <div class="field has-addons mb-2">
                                        <label class="label is-size-6" >{{ sub.sub_name }}</label>
                                       
                                    </div>
                                    <div class="field has-addons mb-2">
                                        <span class="icon is-small mr-1">
                                            <i class="fa-solid fa-book"></i>
                                        </span>
                                        <label class="label is-size-7 mr-2">{{ sub.course }}</label>
                                        <label class="label is-size-7">จำนวน {{ sub.credit }} หน่วยกิต</label>
                                    </div>
                                    <hr class="has-background-grey-light mt-2 mb-3">
                                    <label class="label is-size-7 mb-1">วันสอบกลางภาค: {{ sub.midterm }}</label>
                                    <label class="label is-size-7">วันสอบปลายภาค: {{ sub.final }}</label>

                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <!-- footer component -->
   
    
</template>

<script>

import Header from '../components/Header.vue'
import subjects from '../assets/json/subjects.json'
export default {
    name: 'SubjectsPage',
    components: {
        Header,
        
    },
    data() {
        return {
            subjects: subjects,
            sortSubject: subjects,
            selectedType: "all",
        }
    }, mounted() {
        this.sortSubject = this.subjects
    }, methods: {
        FilterSub() {
            this.sortSubject = [];
            if (this.selectedType === "req") {
                this.sortSubject = subjects.filter((sub) => sub.course === 'วิชาบังคับ')
            }  
            if (this.selectedType === "ele") {
                this.sortSubject = subjects.filter((sub) => sub.course === 'วิชาเลือก')
            }  
            if (this.selectedType === "all") {
                this.sortSubject = this.subjects
            }
        }
    }
    
}

</script>

<style>
#picture {
    background-color:rgb(255, 222, 89);
    width: auto;
    text-align: center;
    font-size: 2vw;
    padding-left: 2vw;
    padding-right: 2vw;

}
.pic1 {
    margin-top: calc(-20vh + 2rem);
}
.pic2 {
    margin-top: calc(-20vh + 1rem);
}
.pic3 {
    margin-top: calc(-25vh + 2rem);
}
</style>

