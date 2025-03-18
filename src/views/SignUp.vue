<template>
  <form
    id="mali"
    class="box has-background-warning-light px-6 pt-6"
    style="margin-left: 350px; margin-right: 350px; margin-top: 30px"
  >
    <span class="icon">
      <a
        @click="backHome"
        class="fa-solid fa-home"
        style="color: hsl(0, 0%, 21%)"
      ></a>
    </span>
    <label class="label is-size-1 has-text-centered mb-0" id="euphoria"><b>lessre</b></label>
    <label class="label is-size-4 has-text-centered mb-5">Create Account</label>

    <!-- ชื่อจริง -->

    <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label is-pulled-left">ชื่อของคุณ</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input
          class="input is-warning"
          type="text"
          placeholder="ชื่อจริง"
          id="mali"
          v-model="fname"
              
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
     
     
   
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input
          class="input is-warning"
          type="text"
          placeholder="นามสกุล"
          id="mali"
          v-model="lname"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        
      </p>
    </div>
  </div>
</div>


    <!-- รหัสนศ -->
    <div class="field">
      <label class="label is-size-6 is-pulled-left">รหัสนักศึกษา</label>
      <div class="control has-icons-left">
        <input
          class="input is-warning"
          type="text"
          placeholder="รหัสนักศึกษา"
          id="mali"
          v-model="idStudent"
        />
        <span class="icon is-small is-left">
      <i class="fa-solid fa-id-card"></i>
    </span>
      </div>
    </div>
    <!-- อีเมลล์ -->
    <div class="field">
      <label class="label is-size-6 is-pulled-left">อีเมลล์</label>
      <div class="control has-icons-left">
        <input
          class="input is-warning"
          type="email"
          placeholder="email@example.com"
          id="mali"
          v-model="email"
        />
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
      </div>
    </div>
    <!-- รหัสผ่าน -->
    <div class="field">
      <label class="label is-size-6 is-pulled-left">รหัสผ่าน</label>
      <div class="control has-icons-left">
        <input
          class="input is-warning"
          type="password"
          placeholder="********"
          v-model="password"
        />
        <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
      </div>
    </div>
    <!-- ยืนยันรหัส -->
    <div class="field">
      <label class="label is-size-6 is-pulled-left">ยืนยันรหัสผ่าน</label>
      <div class="control has-icons-left">
        <input
          class="input is-warning" 
          type="password"
          placeholder="********"
          v-model="cf_password"
        />
        <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
      </div>
    </div>
    <div class="has-text-centered">
      <button
        @click="signUp"
        class="button is-dark mt-1 has-text-centered"
        id="mali"
      >
        Sign Up
      </button>
    </div>
  </form>
</template>



<script>

export default {
  name: "SignUp",
  
  data() {
    return {
      fname: "",
      lname: null,
      idStudent: null,
      email: null,
      password: null,
      cf_password: null,
      info: [],
    };
  },
  methods: {
    signUp() {
      this.$router.push({ name: "Home" });
    },
    backHome() {
      this.$router.push({ name: "Home" });
    },
  },
  


};
</script>

