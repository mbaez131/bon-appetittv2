import React from 'react'
import ReactPlayer from "react-player"


const Home = () => {
    return (
        <main>
          <div class="home-logo">
          <img src="./imgs/bon-logo.png" alt="webiste logo"/>
 </div>

             <div class="hero-image">
                <div class="hero--wrapper">
                    <h1 class="hero--text">You Are What You Eat ! Bon Appétit !</h1>
                    <div>
                      </div>
                      <div class="videos">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=cTgs_KO7Stc&t=1s" 
      />

</div>
  <div class="home-logo">
          <img src="./imgs/bon-logo.png" alt="webiste logo"/>
 </div>
 <ReactPlayer
        url="https://www.youtube.com/watch?v=3zLC2QDNBuc"
      />

<div class="home-logo">
          <img src="./imgs/bon-logo.png" alt="webiste logo"/>
 </div>

       <ReactPlayer
        url="https://www.youtube.com/watch?v=Ow5xpaFBEj8"
      />
                </div>
                </div>
        </main>
       
    )
}

export default Home;