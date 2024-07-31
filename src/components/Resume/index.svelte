<script>
  import Markdown from 'svelte-markdown'
  import source from  './resume.md?raw'

  
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
<div id="resume">
  <div id="resume-container">
    <article>
      <Markdown {source}/>
    </article>
    <nav>
      nav col
    </nav>
  </div>
</div>

<style>
  #resume {
    display: none;

    background: var(--bright4);
    position: fixed;
    top: 0;
    
    width: 100vw;
    height: 100vh;

    z-index: 80;

/*    padding: 6% 0 6%;*/

    box-sizing: border-box;

    display: flex;
    justify-content: center;
    overflow-y: auto;
  }

  #resume-container {
/*    background: #ddd;*/

/*    max-width: 1000px;*/
    width: 100%; 
/*    height: 100%;*/

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
