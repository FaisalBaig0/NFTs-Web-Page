<template>
    <div>
        <h1>Login</h1>
        <div class="login">
            <input type="email" placeholder="Enter Your Email" v-model="email" />
            <input type="password" placeholder="Enter Your password" v-model="password" />
            <button class="login-btn" v-on:click="login()">Login</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginR',

    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        login(){
            alert("Login Successfully!")
        }

    }

}
</script>

<style scoped>
/* Your CSS styles */
</style>

<style scoped>
.login input {
    width: 300px;
    height: 35px;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    display: block;

}

.login input:focus {
    outline: none;
    border-color: black;
    background-color: #f5f5f5;
}

.login-btn {
    width: 155px;
    height: 30px;
    border: 1px solid rgb(13, 108, 67);
    color: white;
    background-color: black;
    cursor: pointer;
    font-size: large;
    margin: 5px;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0.8);
    }

    to {
        transform: scale(1);
    }
}

/* Apply animations */
.login input,
.register button.register-btn {
    animation: fadeInUp 1.7s ease forwards;
}

.login button.login-btn {
    animation-delay: 0.5s;
}

.logo {
    width: 100px;
    margin: 0 auto;
    padding: 5px;
}

@media (max-width: 767px) {
  .login input {
    width: 100%; /* Inputs take full width on smaller screens */
  }
}

/* For screens smaller than 576px */
@media (max-width: 575px) {
  .login {
    padding: 10px; /* Reduce padding around the login form */
  }

  .login-btn {
    width: 100%; /* Button takes full width on smaller screens */
  }

}


</style>