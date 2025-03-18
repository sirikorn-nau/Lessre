<template>
  <form
    id="mali"
    class="box has-background-white-bis px-6 pt-6"
    style="margin-left: 350px; margin-right: 350px; margin-top: 75px"
  >
    <span class="icon " >
      <a @click="backHome" class="fas fa-home" style="color: hsl(0, 0%, 21%)"></a>
    </span>
    <label class="label is-size-1 has-text-centered mb-0" id="euphoria"><b>lessre</b></label>
    <label class="label is-size-4 has-text-centered mb-5">Sign in</label>
    <!-- รหัสนศ -->
    <div class="field">
      <label class="label is-size-6 is-pulled-left">รหัสนักศึกษา</label>
      <div class="control has-icons-left">
        <input
          class="input"
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
          class="input"
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
          class="input"
          type="password"
          placeholder="********"
          v-model="password"
        />
        <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
      </div>
    </div>
    <!-- ลืมรหัส -->
    <label class="label is-size-7 is-pulled-right"> 
        <a href="http://localhost:8080/sign-up">ลืมรหัสผ่าน?</a></label><br>
    <!-- ปุ่ม -->
    <div class="has-text-centered">
      <button @click="signIn" class="button is-dark mt-1 mb-4" id="mali">
        Sign In
      </button>
      <label class="label is-size-7 ">ยังไม่ได้เป็นสมาชิก? 
        <a href="http://localhost:8080/sign-up">คลิกที่นี่เพื่อสมัคร!</a></label>
    </div>

    
  </form>
</template>

<style>



</style>

<script>
export default {
  name: "SignIn",
  components: {},
  methods: {
    signIn() {
      alert("Sign in!");
      this.$router.push({ name: "Home" });
    },
    backHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
