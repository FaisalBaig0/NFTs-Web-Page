<template>
    <div class="header">

        <div class="nav">
            <a href="#" class="nav-link">Start Framing</a>
            <a href="#" class="nav-link">How does it work</a>
            <a href="https://rb.gy/3gc9u" class="nav-link" id="hang">NFTs</a>

        </div>
        <div class="logo">
            <a href="#" class="nav-link">support</a>
            <img src="@/assets/bag.png" alt="Bag Logo">
            <router-link to="/login">
                <img src="@/assets/user.png" alt="User Logo">
            </router-link>


            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderWeb'

}
</script>

<style scoped>

@media (max-width: 767px) {
  .nav {
    flex-direction: column; /* Stack the navigation links vertically on smaller screens */
    align-items: center; /* Center the navigation links horizontally */
    text-align: center; /* Center the text within the links */
  }

  .nav-link {
    margin: 5px; /* Add some spacing between the navigation links */
  }

  .logo {
    flex-direction: column; /* Stack the logo and user icons vertically on smaller screens */
    align-items: center; /* Center the logo and user icons horizontally */
    text-align: center; /* Center the text within the logo and user icons */
  }

  .logo img {
    margin: 5px; /* Add some spacing between the icons and the support text */
  }

  .logo a {
    display: block; /* Make the support link a block element to center it properly */
  }
}
body,
h1,
h2,
h3,p,ul,li {
    margin: 0;
    padding: 0;
}

.header {
   
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 0 2px 45px rgba(12, 12, 12, 0.2);

}


.nav {
    display: flex;
}

.nav-link {
    text-decoration: none;
    color: #333;
    margin-right: 20px;
    font-size: 16px;
}

.nav-link:last-child {
    margin-right: 0;
}

.nav-link:hover {
    color: #007bff;
}


.logo img {
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
}

.logo span {
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
}

#hang {
    margin-left: 370px;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
</style>