<script>
  import Heartwood from './components/Heartwood/index.svelte'
  import Header from './components/Header/index.svelte'
  import Hello from './components/Hello/index.svelte'
  import Footer from './components/Footer/index.svelte'
  import Resume from './components/Resume/index.svelte'  

  import { active as resumeActive } from './components/Resume/store.js'
  import { fade } from 'svelte/transition'

  console.log($resumeActive)
</script>
<div id="app-wrap">
  <Header/>

  <div id="heartwood">


    <Heartwood/>

  </div>
  <Hello/>
  {#if $resumeActive}
    <div transition:fade style="position:relative; z-index: 82;"><Resume/></div>
  {/if}
  <Footer/>
</div>
<style>
  :root {
    --white: #fff;
    --bright1: #f5f8ff;
    --bright2: #f1f5ff;
    --bright3: #eaf0ff;
    --bright4: #dfeafe;

    --gray: #555f73;

    --black: #000000;
    --dark1: #00030a;
    --dark2: #00040e;
    --dark3: #000615;
    --dark4: #010c20;

    --teal: #07223C;
    --teal1: #2B4C69;
    --teal2: #486C85;
    --teal3: #698EA0;
    --teal4: #90ADBA;
  }


  :global(body) {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  

  #heartwood {
    position: relative; 
    z-index: 10;

    background-image: -webkit-gradient(radial, center center, 0, center center, 220, from( var(--white )), to( var(--bright4) ));
    background-image: -webkit-radial-gradient( var(--white ), var(--bright4) );
    background-image: radial-gradient( var(--white ), var(--bright4) );

    height: calc(100vh - 100px);
    display: flex;

    align-items: center;

    overflow: hidden;
  }

  #heartwood::before {
    background-image: -webkit-gradient(radial, center center, 0, center center, 220, from(transparent), to( var(--bright3) ));
    background-image: -webkit-radial-gradient(transparent,  var(--bright3) );
    background-image: radial-gradient(transparent,  var(--bright3) );
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
  }


  @keyframes heartwoodEnter {
    from {
      opacity: 0;
      transform: rotate(-33deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  :global(#heartwood .container) {
    animation-name: heartwoodEnter;
    animation-duration: 4s;
    animation-delay: 2s;
    transition: all 1s ease-in;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  @keyframes heartwoodContainerEnter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #heartwood {
    animation-name: heartwoodContainerEnter;
    animation-duration: 4s;
    animation-delay: 1s;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  @keyframes height {
    from {
      height: auto;
    }
    to {
      height: 100vh;
    }
  }

  :global(#app-wrap.resume-active) {
    overflow: hidden;
/*    height: 100vh;*/
    animation-name: height;
    animation-delay: 0.5s;
  }


</style>
