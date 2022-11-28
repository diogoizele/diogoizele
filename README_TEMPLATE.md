<style>
  .presentation {
    font-size: 1.8em;
  }
  .section-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #1DE9B6;
  }
  .name {
    font-weight: 900;
    color: #1DE9B6;
  }
  .divider {
    display: block; 
    height: 0px;
    border-top: 4px solid #1DE9B6;
  }
  .section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .repos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
</style>

<h1 align="center" class="presentation">Hi 👋 My name is <span class="name">Diogo Izele</span></h1>

<hr class="divider" />
<img alt="cover" src="./src/resources/images/cover.png">


<h2 class="section-title"> About me </h2>

I have been studying programming for about %{myexperience} 🎓 I am greaduated as a computer technician by the Instituto Federal Sul-Riograndense, where I had my first contact with programming using the JavaScript language. 👨‍💻 I am currently cursuing a Bachelor's Degree in Information Systems at Unisinos to increase my academic proficiency in programming and I plan to become an excellent software engineer soon.

- 🧑‍💻 Diogo Gabriel Izele, 20 years
- 📱 Web and Mobile Developer
- 🇧🇷  I'm from Brazil
- 🚀  I'm currently working on [CWI Software](http://www.cwi.com.br/)
-  🧝‍♂️  I'm a big fan of The Lord of the Rings 💍

<h2 class="section-title"> My recent works </h2>


<div class="repos-grid">
%{recentworks}
</div>

<div class="section" >
<img alt=gitstats src="https://github-readme-stats.vercel.app/api/top-langs/?username=diogoizele&langs_count=10&layout=compact&theme=gotham"/>
</div>
