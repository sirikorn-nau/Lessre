<template>
  <Header></Header>
  <div class="container is-fluid mt-3" id="mali">
    <div class="notification has-background-white">
      <label class="label is-size-2 has-text-centered mb-6"
        >My Assignment</label
      >

      <div class="select mr-5 ml-5 is-pulled-left">
        <select id="mali" v-model="selectedSem" @change="FilterAsm()">
          <option value="all">เลือกเทอมที่ส่ง</option>
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
      <button
        @click="showModal"
        class="button is-info mr-5 ml-5 is-pulled-right"
        id="mali"
        style="margin-top: -20 px"
      >
        Add Assignment
      </button>
      <div class="field has-addons mt-3" style="margin-top: -30px">
        <div class="control is-expanded">
          <input
            class="input"
            v-model="search"
            type="text"
            placeholder="ค้นหา"
          />
        </div>
      </div>

      <br /><br />
      <br /><br />

      <div class="tile is-ancestor" style="margin-top: -30px">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <!-- ยังไม่เริ่ม -->
            <div class="tile is-parent is-vertical ml-4">
              <article class="tile is-child notification has-background-white">
                <p class="title is-size-4 has-text-black-bis ml-2">
                  ยังไม่เริ่ม
                  <span class="icon">
                    <i class="fa-solid fa-question fa-shake"></i>
                  </span>
                </p>

                <div
                  class="box has-background-danger-light"
                  v-for="nst in NotStarted"
                  :key="nst.number"
                >
                  <label class="label is-size-5">{{ nst.asm_name }}</label>
                  <label class="label is-size-6 has-text-grey"
                    >วิชา {{ nst.sub_id }} ชื่อ</label
                  >
                  <label class="label is-size-6 has-text-grey"
                    >กำหนดส่ง : {{ nst.deadline }}</label
                  >

                  <span class="icon is-medium mt-1">
                    <a
                      @click="showEditModal"
                      class="fa-regular fa-pen-to-square fa-lg mr-3 ml-5"
                    ></a>
                    <a
                      @click="showDelModal"
                      class="fa-solid fa-trash-can fa-lg"
                    ></a>
                  </span>

                  <progress
                    class="progress is-small is-danger mt-3"
                    value="10"
                    max="100"
                  ></progress>
                </div>
              </article>
            </div>
            <!-- กำลังทำ -->
            <div class="tile is-parent">
              <article class="tile is-child notification has-background-white">
                <p class="title is-size-4 has-text-black-bis ml-2">
                  กำลังทำ

                  <span class="icon">
                    <i class="fas fa-spinner fa-pulse"></i>
                  </span>
                </p>

                <div
                  class="box has-background-warning-light"
                  v-for="wip in Doing"
                  :key="wip.number"
                >
                  <label class="label is-size-5">{{ wip.asm_name }}</label>
                  <label class="label is-size-6 has-text-grey"
                    >วิชา {{ wip.sub_id }} ชื่อ</label
                  >
                  <label class="label is-size-6 has-text-grey"
                    >กำหนดส่ง : {{ wip.deadline }}</label
                  >
                  <span class="icon is-medium mt-1">
                    <a
                      @click="showEditModal"
                      class="fa-regular fa-pen-to-square fa-lg mr-3 ml-5"
                    ></a>
                    <a
                      @click="showDelModal"
                      class="fa-solid fa-trash-can fa-lg"
                    ></a>
                  </span>
                  <progress
                    class="progress is-small is-warning mt-3"
                    max="100"
                  ></progress>
                </div>
              </article>
            </div>
          </div>
        </div>
        <!-- งานเสร็จ -->
        <div class="tile is-parent">
          <article class="tile is-child notification has-background-white">
            <p class="title is-size-4 has-text-black-bis ml-2">
              งานเสร็จสิ้น
              <span class="icon">
                <i class="fa-solid fa-check fa-bounce"></i>
              </span>
            </p>

            <div
              class="box has-background-success-light"
              v-for="fns in Finished"
              :key="fns.number"
            >
              <label class="label is-size-5">{{ fns.asm_name }}</label>
              <label class="label is-size-6 has-text-grey"
                >วิชา {{ fns.sub_id }} ชื่อวิชา</label
              >
              <label class="label is-size-6 has-text-grey"
                >กำหนดส่ง : {{ fns.deadline }}</label
              >

              <span class="icon is-medium mt-1">
                <i class="fa-solid fa-crown fa-lg mr-3 ml-5"></i>
                <a
                  @click="showDelModal"
                  class="fa-solid fa-trash-can fa-lg"
                ></a>
              </span>

              <progress
                class="progress is-small is-success mt-3"
                value="100"
                max="100"
              ></progress>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <!-- modal del trash -->

  <div
    id="mali"
    class="modal has-background-white"
    :class="{ 'is-active': showDelModalFlag }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title is-size-3 ml-1 py-3" id="mali">
          <strong>Confirm Delete Assignment</strong>
        </p>
      </header>

      <section class="modal-card-body">
        <label class="label is-pulled-left is-size-5"
          >คุณยืนยันจะลบ งาน ... ใช่ไหม</label
        >
      </section>

      <footer class="modal-card-foot">
        <button @click="okModal" class="button is-success" id="mali">
          Submit
        </button>
        <button @click="cancelModal" class="button is-danger" id="mali">
          Cancel
        </button>
      </footer>
    </div>
  </div>

  <!-- modal add -->
  <div
    id="mali"
    class="modal has-background-white"
    :class="{ 'is-active': showModalFlag }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title is-size-3 ml-1 py-3" id="mali">
          <strong>Add Assignment</strong>
        </p>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label is-size-5 is-pulled-left"
            >ชื่องาน</label
          >
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="ชื่อของงาน"
              id="mali"
            />
          </div>
        </div>

        <div class="field">
          <label class="label is-size-5 is-pulled-left"
            >คำอธิบายงาน</label
          >
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="คำอธิบายเกี่ยวกับงาน"
              id="mali"
            />
          </div>
        </div>

        <div class="field is-grouped mb-3">
          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5">รหัสวิชา</label>
            <input class="input" type="text" id="mali" placeholder="รหัสวิชา"/>
          </div>

          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5">กำหนดส่ง</label>
            <input class="input" type="date" id="mali" />
          </div>
        </div>

        <div class="field is-grouped mb-3">
          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5">เลือกเทอมที่ส่ง</label>
            <div class="select" id="mali">
            <select id="mali">
              <option value="all">เลือกเทอมที่ส่ง</option>
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

          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5 ">สถานะของงาน</label>
            <div class="select " id="mali">
            <select id="mali">
              <option>สถานะของงาน</option>
              <option>ยังไม่เริ่มทำ</option>
              <option>กำลังทำ</option>
              <option>งานเสร็จสิ้น</option>
            </select>
          </div>
          </div>
        </div>

      </section>

      <footer class="modal-card-foot">
        <button @click="okModal" class="button is-success" id="mali">
          Submit
        </button>
        <button @click="cancelModal" class="button is-danger" id="mali">
          Cancel
        </button>
      </footer>
    </div>
  </div>

  <!-- modal edit -->
  <div
    id="mali"
    class="modal has-background-white"
    :class="{ 'is-active': showEditModalFlag }" >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title is-size-3 ml-1 py-3" id="mali">
          <strong>Edit Assignment</strong>
        </p>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label is-size-5 is-pulled-left"
            >ชื่องาน</label
          >
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="ชื่อของงาน"
              id="mali"
            />
          </div>
        </div>

        <div class="field">
          <label class="label is-size-5 is-pulled-left"
            >คำอธิบายงาน</label
          >
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="คำอธิบายเกี่ยวกับงาน"
              id="mali"
            />
          </div>
        </div>

        <div class="field is-grouped mb-3">
          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5">รหัสวิชา</label>
            <input class="input" type="text" id="mali" placeholder="รหัสวิชา"/>
          </div>

          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5">กำหนดส่ง</label>
            <input class="input" type="date" id="mali" />
          </div>
        </div>

        <div class="field is-grouped mb-3">
          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5">เลือกเทอมที่ส่ง</label>
            <div class="select" id="mali">
            <select id="mali">
              <option value="all">เลือกเทอมที่ส่ง</option>
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

          <div class="control is-expanded">
            <label class="label is-pulled-left is-size-5 ">สถานะของงาน</label>
            <div class="select " id="mali">
            <select id="mali">
              <option>สถานะของงาน</option>
              <option>ยังไม่เริ่มทำ</option>
              <option>กำลังทำ</option>
              <option>งานเสร็จสิ้น</option>
            </select>
          </div>
          </div>
        </div>

      </section>

      <footer class="modal-card-foot">
        <button @click="okModal" class="button is-success" id="mali">
          Submit
        </button>
        <button @click="cancelModal" class="button is-danger" id="mali">
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
// import Footer from "../components/Footer.vue";
import Assignments from "../assets/json/jsonAssignment.json";
export default {
  name: "AssignmentPage",
  el: "#modalAssignment",
  components: {
    Header,
    // Footer,
  },
  data() {
    return {
      data: Assignments,
      showModalFlag: false,
      showEditModalFlag: false,
      okPressed: false,
      showDelModalFlag: false,
      Assignments: Assignments,
      sortAssignments: Assignments,
      selectedSem: "all",
      semester: "ทั้งหมด",
      search: "",
    };
  },
  mounted() {
    this.sortAssignments = this.Assignments;
  },
  methods: {
    FilterAsm() {
      this.sortAssignments = [];
      if (this.selectedSem === "11") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 1/1"
        );
        this.semester = "ปี 1/1";
      } else if (this.selectedSem === "12") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 1/2"
        );
        this.semester = "ปี 1/2";
      } else if (this.selectedSem === "21") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 2/1"
        );
        this.semester = "ปี 2/1";
      } else if (this.selectedSem === "22") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 2/2"
        );
        this.semester = "ปี 2/2";
      } else if (this.selectedSem === "31") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 3/1"
        );
        this.semester = "ปี 3/1";
      } else if (this.selectedSem === "32") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 3/2"
        );
        this.semester = "ปี 3/2";
      } else if (this.selectedSem === "41") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 4/1"
        );
        this.semester = "ปี 4/1";
      } else if (this.selectedSem === "42") {
        this.sortAssignments = Assignments.filter(
          (sub) => sub.semester === "ปี 4/2"
        );
        this.semester = "ปี 4/2";
      } else {
        this.sortAssignments = this.Assignments;
        this.semester = "ทั้งหมด";
      }
    },
    showDelModal() {
      this.okPressed = false;
      this.showDelModalFlag = true;
    },
    showModal() {
      this.okPressed = false;
      this.showModalFlag = true;
    },
    showEditModal() {
      this.okPressed = false;
      this.showEditModalFlag = true;
    },
    okModal() {
      this.okPressed = true;
      this.showModalFlag = false;
      this.showEditModalFlag = false;
      this.showDelModalFlag = false;
    },
    cancelModal() {
      this.okPressed = false;
      this.showModalFlag = false;
      this.showEditModalFlag = false;
      this.showDelModalFlag = false;
    },
  },
  computed: {
    NotStarted: function () {
      return this.sortAssignments.filter(
        (data) => data.asm_status === "ยังไม่เริ่มทำ"
      );
    },
    Doing: function () {
      return this.sortAssignments.filter(
        (data) => data.asm_status === "กำลังทำ"
      );
    },
    Finished: function () {
      return this.sortAssignments.filter(
        (data) => data.asm_status === "เสร็จแล้ว"
      );
    },
  },
  watch: {
    search: function Search(value) {
      value = value.toLowerCase();
      let searchASM = this.Assignments.filter(
        (data) =>
          data.sub_id.includes(value) ||
          data.asm_name.toLowerCase().includes(value)
      );
      this.sortAssignments = searchASM;
    },
  },
};
</script>

<style></style>