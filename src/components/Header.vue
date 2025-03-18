<template>
    <nav class="navbar  px-5" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <p @click="backHome" id="logo"><b>lessre</b></p>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a @click="goSubjects" class="navbar-item ml-3" id="mali">
                    Subjects
                </a>

                <a @click="goEnrolled" class="navbar-item ml-3" id="mali">
                    Enrolls
                </a>

                <a @click="goAssignment" class="navbar-item ml-3" id="mali">
                    Assignments
                </a>
            </div>



            <div id="mali" class="navbar-end">

                <!-- หลังจาก sign in -->

                <!-- <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Saruta J.
                    </a>
                    <div class="navbar-dropdown">
                        <a @click="goAccount" class="navbar-item">
                            My Profile
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Sign Up
                        </a>
                    </div>
                </div> -->

                <!-- ปุ่ม signin signup -->

                <div class="navbar-item">
                    <div class="buttons">
                        <a @click="goSignUp" class="button is-dark" id="mali">
                            Sign up
                        </a>
                        <a @click="goSignIn" class="button" id="mali">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'HeaderComponent',
    methods: {
        backHome() {
            this.$router.push({ name: "Home" })
        },
        goSignUp() {
            this.$router.push({ name: "SignUp" })
        },
        goSignIn() {
            this.$router.push({ name: "SignIn" })
        },
        goSubjects() {
            this.$router.push({ name: "Subjects" })
        },
        goEnrolled() {
            this.$router.push({ name: "Enrolled" })
        },
        goAssignment() {
            this.$router.push({ name: "Assignment" })
        },
        goAccount() {
            this.$router.push({ name: "Account" })
        },
    }

}

</script>


