<template>

    
    <div>
        <div class="home">
            <div>
                <div class="text">
                    <h2>Design your own frame</h2>
                    <p>
                        Already own something that needs framing? Or have a really special digital photo that deserves a
                        unique
                        frame? Then this is the option for you! Fully customise everything - styles, sizes, personalisation.
                        Handmade by experts using premium quality materials. Order from the confort of your home, with free
                        delivery and art 'pick up' service.

                    </p>
                </div>
                <div class="img" >
                    <img src="@/assets/img.png" alt="flower Logo">

                </div>
            </div>
        </div>
        <div class="container">
            <div class="box">
                <img src="@/assets/a1.jpeg" alt="image" />
                <h4>Brancaster</h4>
                <p>Wire-brushed bare wood</p>
            </div>
            <div class="box">
                <img src="@/assets/a2.jpeg" alt="image" />
                <h4>Burnham</h4>
                <p>Veneer burr wood frame</p>
            </div>
            <div class="box">
                <img src="@/assets/a3.jpeg" alt="image" />
                <h4>George</h4>
                <p>Dark brown with glit edge</p>
            </div>
            <div class="box">
                <img src="@/assets/a4.jpeg" alt="image" />
                <h4>Claude</h4>
                <p>Blue washed scoope frame</p>
            </div>
            <div class="frame-btn">
                <button>DESIGN A CUSTOM FRAME</button>
            </div>

        </div>

        <div class="home">
            <div>
                <div class="text">
                    <h2>Standard sizes & gift frames</h2><br />
                    <p>
                        Cost effective readymade sizes. Choose a frame style then upload your photo and we'll print, build,
                        and dispatch your frame the next day. Ideal for quick gifts.

                    </p>
                </div>
                <div class="img">
                    <img src="@/assets/standardframe.png" alt="flower Logo">

                </div>
            </div>

        </div>
        <div class="container1">
            <div class="box">
                <img src="@/assets/monkey1.jpeg" alt="m1" /><br />
                <h3>Small Gift Frame in Branchaster(P)</h3>
                <p>20x30 textured bare wood frame</p>

            </div>
            <div class="box">
                <img src="@/assets/m2.jpeg" alt="m2" /><br />
                <h3>Small Float Picture Frame in Ansel Jr(L)</h3>
                <p>20x30 textured bare wood frame</p>

            </div>
            <div class="box">
                <img src="@/assets/m3.jpeg" alt="m3" /><br />
                <h3>Small Square Git Frame(P)</h3>
                <p>20x30 textured bare wood frame</p>

            </div>
            <div class="box">
                <img src="@/assets/m4.jpeg" alt="m4" /><br />
                <h3>Small Float Picture Frame in Ansel Jr(L)</h3>
                <p>20x30 textured bare wood frame</p>

            </div>
            <div class="frame-btn">
                <button>SHOP STANDARD FRAME</button>
            </div>
        </div>
        <div class="home">
            <div>
                <div class="text">
                    <h2>Gallery walls</h2><br />
                    <p>
                        Want that statement gallery wall without the hassle? Choose one of our gallery walls and upload your
                        photos in minutes, or get one of our designers to help create a truly custom one. Coming soon!

                    </p>
                </div>
                <div class="ape">
                    <img src="@/assets/ape.jpeg" alt="flower Logo">

                </div>
            </div>
            
        </div>
        <div class="frame-btn">
                        <button>COMING  SOON</button>
                    </div>



    </div>
</template>
<script>
import 'animate.css';
export default {
    name: 'HomePage'
}
</script>
<style scoped>


 @media (max-width: 767px) {
    .home{
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .container, .container1{
        padding: 10px;
    }
    .box{
        width: 100%;
        margin :10px 0;

    }
    .home .img img{
        max-height: 300px;
    }
    .home .ape img{
        max-height: 300px;
    }
    .frame-btn button{
        margin: 10px;
        padding: 10px;

    }
    
 }
.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}

.container1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.box {
    margin-top: 30px;
    width: 220px;
    height: 345px;
    border-radius: 5px;
    padding: 15px;
    padding-top: 60px;
    margin: 15px;
    text-align: center;
    letter-spacing: 1px;
    box-shadow: 0 3px 5px rgb(51, 52, 52);
    overflow: hidden;
    position: relative;

}


.frame-btn button {
    margin: 20px;
    height: 46px;
    padding: 14px;
    border-radius: 20px;
    color: black;
    background: goldenrod;
    font-size: 11px;
    cursor: pointer;
}

.home {
    margin-top: 40px;
    background-color: #f8f8f8;
    padding: 40px;
    display: flex;
    justify-content: left;
}

.home>div {
    display: flex;
    align-items: left;
    max-width: 1200px;
}


.home .text {
    flex: 1;
    text-align: left;
    padding: 0 20px;
}

.home h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.home p {
    font-size: 16px;
    line-height: 1.6;
}

.home .img {
    flex: 1;
    display: flex;
    justify-content: center;
}

.home .img img {
    max-width: 100%;
    max-height: 600px;
    border-radius: 5px;
}

.home .ape {
    flex: 1;
    display: flex;
    justify-content: center;
}

.home .ape img {
   width: 300px;
    border-radius: 5px;
    height: 400px;
}
</style>