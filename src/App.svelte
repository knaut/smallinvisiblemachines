<script>
  import Heartwood from './components/Heartwood/index.svelte'
  import Header from './components/Header/index.svelte'
  import Hello from './components/Hello/index.svelte'
  import Footer from './components/Footer/index.svelte'
  

  // import { onMount } from 'svelte'
</script>
<div id="app">
  <Header/>

  <div id="heartwood">


    <Heartwood/>

  </div>
  <Hello/>
  <Footer/>
</div>
<style>
  :global(body) {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  

  #heartwood {
    position: relative; 
    z-index: 10;

    background-image: -webkit-gradient(radial, center center, 0, center center, 220, from(#fff), to(#e6e8eb));
    background-image: -webkit-radial-gradient(#fff, #e6e8eb);
    background-image: radial-gradient(#fff, #e6e8eb);

    height: calc(100vh - 100px);
    display: flex;

    align-items: center;

    overflow: hidden;
  }

  #heartwood::before {
    background-image: -webkit-gradient(radial, center center, 0, center center, 220, from(transparent), to(#e6e8eb));
    background-image: -webkit-radial-gradient(transparent, #e6e8eb);
    background-image: radial-gradient(transparent, #e6e8eb);
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

</style>
