<template>
    <div class="box px-6  has-background-danger-light" style="margin: 60px; ">
        <label class="label is-size-2 mt-5">Add/Update Subjects</label>
        <hr class="has-background-grey-light">

        <div class="field is-grouped px-6 mb-6">

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">รหัสวิชา</label>
                <input class="input" type="number" placeholder="e.g. 06016322">
            </div>

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">ชื่อวิชา</label>
                <input class="input" type="text" placeholder="e.g. Web Programming">
            </div>

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">จำนวนหน่วยกิต</label>
                <input class="input" type="number" placeholder="e.g. 3">
            </div>

        </div>

        <div class="field is-grouped px-6 mb-6">

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">อาจารย์ผู้สอน</label>
                <input class="input" type="text" placeholder="e.g. ผศ.ดร.บัณฑิต ฐานะโสภณ">
            </div>

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">หมวดวิชา</label>
                <br>
                <div class="select  is-fullwidth">
                    <select>
                        <option>เลือกหมวดวิชา</option>
                        <option>วิชาบังคับ</option>
                        <option>วิชาเลือก</option>
                    </select>
                </div>
            </div>

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">ห้องเรียน</label>
                <input class="input" type="text" placeholder="e.g. L-305">
            </div>

        </div>

        <div class="field is-grouped px-6 mb-6">

            <!-- <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">เวลาเรียน</label>
                <input class="input" type="text" placeholder="e.g. 09.00-13.00">
            </div> -->

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">วันสอบกลางภาค</label>
                <input class="input" type="date">
            </div>

            <div class="control is-expanded">
                <label class="label is-pulled-left is-size-5">วันสอบปลายภาค</label>
                <input class="input" type="date" >
            </div>

        </div>
        <div class="buttons is-pulled-left ml-6">
            <button class="button is-danger is-outlined">Delete</button>
        </div>
        <div class="buttons is-pulled-right mr-6">
            <button class="button is-success">Submit</button>
            <button class="button is-danger">Cancel</button>
        </div>



        <br><br><br>


    </div>
</template>
<script>
export default {
    name: 'manage_subjects',

}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@500&display=swap');

.box,
input,
option,
select,
button {
    font-family: 'Mali', cursive;
}
</style>