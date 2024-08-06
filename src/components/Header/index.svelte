<script>
  import Logo from './logo.svelte'
  import Typeface from './typeface.svelte'
  import profile from './profile.jpeg'

  import anime from 'animejs'
  import { onMount } from 'svelte'

  onMount(() => {

    const width = document.querySelector('body').clientWidth
    const breakpoint = 620

    anime({
      targets: '#divider',
      width: '100%',
      duration: 2000,
      easing: 'easeInOutQuad',
      delay: 1000
    })

    if (width > breakpoint) {
      // desktop
      anime({
        targets: '#bubble-profile',
        translateX: -150
      })

      anime({
        targets: '#global .logo',
        opacity: [0, 1],
        duration: 10000,
        delay: 1000
      })

      

      anime({
        targets: '#typeface',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutQuad',
        delay: 1000
      })

    } else {



    }

  })

</script>

<header id="global">
  <Logo/>
  <h1>Small Invisible Machines</h1>
  <div id="typeface">
    <Typeface/>
    <h2>Daniel A. Anderson</h2>
  </div>
  <img id="bubble-profile" src="{profile}" alt="Daniel Anderson"/>
</header>
<div id="divider"></div>

<style>
  @keyframes boxShadow {
    from {
      box-shadow: 0 5px 0 rgba(0, 0, 0, 0);
    }
    to {
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }
  }

  #global {
    height: 100px;

    position: relative;
    z-index: 60;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px 0 10px;

    animation-name: boxShadow;
    animation-duration: 4s;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    opacity: 1;
    transition: all 0.1s ease;
  }

  h1 {
    display: none;
  }

  :global(#global .logo) {
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
  }

  :global(#global .logo path) {
    fill: var(--gray);
  }

  #bubble-profile {
    height: 80px;
    border: 2px solid var(--dark4);
    border-radius: 100%;
    position: relative;
    left: 150px;
  }

  #divider {
    height: 3px;
    background: var(--gray);
    width: 0%;
    position: relative;
    z-index: 60;
  }

  #typeface svg {
    width: 300px;
  }

  #typeface {
    text-align: center;
  }

  #typeface h2 {
    color: var(--gray);
  }

  :global(#typeface path) {
    fill: var(--gray);
  }

  h2 {
    margin: 0;
    font-family: HelveticaNeue, Helvetica, sans-serif;
    font-weight: 100;
    letter-spacing: 10px;
    font-size: 16px;
  }

  @media (max-width: 620px) {
    #global {
      /* TODO: mobile implementation!
      should we add a mobile-style menu? is it needed? */
/*      opacity: 0;*/
/*      box-shadow: 0;*/

      justify-content: center;
    }

    :global(#global .logo, #global #bubble-profile) {
      display: none;
    }

    #divider {
/*      opacity: 0;*/
/*      display: none;*/
    }

  }

  

</style>


