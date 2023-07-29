<template>
    <footer class="footer">
        <div class="hang">
            <h2>NFTs</h2>
            <img src="@/assets/instalogo.png" alt="insta Logo">
            <img src="@/assets/fb.png" alt="fb Logo">
            <img src="@/assets/q.png" alt="quora Logo">


        </div>
        <div class="startFarming">
            <h3>START FRAMING</h3><br/>
            <a href="#">Browse all frames</a>
            <br/>
            <a href="#">Upload a photo</a><br/>
            <a href="#">Frame an original</a><br/>


        </div>
        <div class="howItWork">
            <h3>HOW IT WORK</h3>
            <a href="#">Material & sustainability</a><br/>
            <a href="#">Pricing</a><br/>
            <a href="#">Our story</a><br/>

        </div>
        <div class="support">
            <h3>SUPPORT</h3><br/>
            <a href="#">Our services</a><br/>
            <a href="#">Inspiration</a><br/>
            <a href="#">FAQs</a><br/>
            <a href="#">Contact</a><br/>

        </div>
        <div class="email">
            <h3>SIGN UP FOR EMAIL UPDATES</h3>
            <input type="text" placeholder="Enter Your email*" />
            
            <button type="submit" class="btn">Submit</button>

        </div>

    </footer>
</template>
<script>
export default {
    name: 'FooterWeb'
}
</script>
<style scoped>
.hang img{
    padding: 3px;
    margin: 3px;
}



.footer {
    margin-bottom: 0px;
    background-color: #131313;
    color: #fff;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    font-family: 'Times New Roman', Times, serif;
    
}


.footer div {
    flex: 1;
    margin-right: 20px;
}

.footer h3 {
    font-size: 18px;
    margin-bottom: 10px;

}

.footer a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 14px;
}

.footer a:hover {
    text-decoration: underline;
}


.email input[type="text"] {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
    font-size: 14px;
}

.email h3 {
    margin-bottom: 10px;
}

.hang img,
.startFarming img,
.howItWork img,
.support img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background: white;    
}
.btn{
    height: 26px;
    width: 50px;
    cursor: pointer;
    color: black;
    font-size: 12px;
    font-weight: bold;
    margin: 5px;
    padding: 3px;
}


@media (max-width: 767px) {
  .footer {
    flex-direction: column; /* Stack the columns vertically on smaller screens */
    align-items: center; /* Center the columns horizontally */
    text-align: center; /* Center the content within each column */
  }

  .footer div {
    margin-bottom: 20px; /* Add bottom margin to separate the columns */
  }

  .email input[type="text"] {
    width: 80%; /* Make the email input slightly narrower on smaller screens */
  }

  .email button.btn {
    width: 100%; /* Make the button take full width on smaller screens */
    margin-top: 10px; /* Add some spacing between the input and button */
  }

  .hang img,
  .startFarming img,
  .howItWork img,
  .support img {
    margin-right: 5px; /* Reduce the right margin between images */
  }
}
</style>