<script>
  import Markdown from 'svelte-markdown'
  import source from  './resume.md?raw'

  
</script>

<div id="resume">
  <div id="resume-container">
    resume
    <Markdown {source}/>
  </div>
</div>

<style>
  #resume {
    background: #ccc;
    position: fixed;
    top: 0;
    
    width: 100vw;
    height: 100vh;

    z-index: 80;

    padding: 6% 0 0 0;

    display: flex;
    justify-content: center;
  }

  #resume-container {
    background: #ddd;

    max-width: 1000px;
    width: 100%; 
  }
</style>
