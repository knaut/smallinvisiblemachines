<script>
  import Markdown from 'svelte-markdown'
  import source from  './resume.md?raw'

  import { active as resumeStore } from './store.js'

  import { fade } from 'svelte/transition'

  function handleResumeClick() {
    resumeStore.set(false)
    const app = document.getElementById('app-wrap')
    app.classList.remove('resume-active')
  }

</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
<div id="resume">
  <div id="resume-close" on:click={handleResumeClick}></div>
  <div id="resume-container">
    <article>
      <Markdown {source}/>
    </article>
    <nav>
      <a href='/resume.pdf'>Download PDF</a>
      <a href='/resume.docx'>Download DOC</a>
      <a href='/resume.md'>Download Markdown</a>
    </nav>
  </div>
</div>

<style>
  #resume {
    background: var(--bright4);
    position: fixed;
    top: 0;
    
    width: 100vw;
    height: 100vh;

    z-index: 80;


    box-sizing: border-box;

    display: flex;
    justify-content: center;
    overflow-y: auto;

    transition: 0.5s all ease-in-out;
  }



  #resume-container {

    width: 100%; 

    position: absolute;

    padding: 100px 12%;
    box-sizing: border-box;

    color: var(--gray);

    display: flex;
    justify-content: space-between;
  }

  #resume-container > article {
    width: 1000px;
  }

  :global(#resume-container > article #daniel-a-anderson + hr + p),
  :global(#resume-container > article #daniel-a-anderson + hr + p + p),
  :global(#resume-container > article #daniel-a-anderson + hr + p + p + p),
  :global(#resume-container > article #daniel-a-anderson + hr + p + p + p + p),
  :global(#resume-container > article #daniel-a-anderson + hr + p + p + p + p + p) {
    display: none;
  }

  #resume-container > nav {
/*    float*/
    display: flex;
    flex-direction: column;
  }

  #resume-container > nav a:link {
    color: var(--dark4);
    text-decoration: none;
    font-size: 18px;
    transition: 0.2s all ease;
    position: relative;
  }

  #resume-container > nav a:link:before {
    content: '>';
    display: block;
    height: 25px;
    width: 25px;
    position: absolute;
    left: -40px;
    opacity: 0;
  }

  #resume-container > nav a:hover:before {
    left: -20px;
    opacity: 1;
  }

  #resume-container > nav a:visited {
    color: var(--dark4);
  }

  #resume-container > nav a:hover {
    color: var(--teal3);
  }

  #resume-container > nav a:active {
    color: var(--teal2);
  }

  

  #resume-close {
    height: 50px;
    width: 50px;
    border: 2px solid var(--gray);
    border-radius: 100%;

    position: absolute;
    right: 60px;
    top: 40px;

    transform: rotate(45deg);
    cursor: pointer;
    z-index: 81;
  }

  #resume-close:before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 25px;
    background: #000;
    right: 24px;
    top: 12px;
  }

  #resume-close:after {
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 2px;
    background: #000;
    right: 12px;
    top: 24px;
  }

  #resume {
/*    font-family: 'Lucida Grande', sans-serif;*/
    font-family: 'Roboto Mono', monospace;
  }

  :global(#resume hr) {
    display: none;
  }

  :global(#resume h1) {
/*    font-weight: bold;*/
    font-size: 42px;
/*    margin-top: 36px;*/
  }

  :global(#resume h2) {
    font-weight: bold;
    font-size: 18px;
    margin-top: 36px;
  }

  :global(#resume p), :global(#resume li) {
    font-size: 15px;
  }

  :global(#resume li) {
    margin-bottom: 10px;
  }

  :global(#resume p) {
    font-weight: bold;
    margin: 25px 0 0;
  }

</style>
