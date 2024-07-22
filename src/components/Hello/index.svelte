<script>
  import { onMount } from 'svelte'
  import anime from 'animejs'
  import Hello from './hello.svelte'

  onMount(() => {

    /*
    const spans = document.querySelectorAll('#hello-text span')

    anime({
      targets: spans,
      left: '100%',
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: 1100
    })
    */


//     anime({
//       targets: '.hello-text-bg',
//       width: '100%',
//       duration: 1000,
//       easing: 'easeInOutQuad',
//       delay: 100
//     })
// 
//     anime({
//       targets: '.hello-text-bg',
//       left: '100%',
//       duration: 1000,
//       easing: 'easeInOutQuad',
//       delay: 1100
//     })

    
    const t1 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 1000
    })

    const t2 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 1000
    })

    const t3 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 1000
    })


    setTimeout(() => {
      t1.add({
        targets: '#first',
        width: '100%',
      }).add({
        targets: '#first',
        left: '100%',
      })
    }, 1000)

    setTimeout(() => {

      t2.add({
        targets: '#second',
        width: '100%',
      }).add({
        targets: '#second',
        left: '100%',
      })

    }, 2000)

    setTimeout(() => {

      t3.add({
        targets: '#third',
        width: '100%',
      }).add({
        targets: '#third',
        left: '100%',
      })

    }, 3000)

    

    

  })
</script>

<div id="hello">
  <Hello/>
  <div id="hello-text">
    <div>
      <p>
        <span class="hello-text-inline">I'm Daniel, a web developer with over a decade of experience.</span>
        <span id="first" class="hello-text-bg"></span>
      </p>
    </div>
    <div>
      <p>
        <span class="hello-text-inline">I've worked with companies small and large, and love to push the boundaries of what's possible on the web.</span>
        <span id="second" class="hello-text-bg"></span>
      </p>
    </div>
    <div>
      <p>
        <span class="hello-text-inline">Let's build something amazing together!</span>
        <span id="third" class="hello-text-bg"></span>
      </p>
    </div>
  </div>
</div>

<style>

  @keyframes opacityDelay {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    51% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  #hello {
    min-height: 100vh;
    width: 100%;
    background: #000;
    padding: 9% 18% 0 18%;
    box-sizing: border-box;
  }

  #hello p {
    margin: 30px 0 30px;
    position: relative;
    display: inline-block;
    overflow: hidden;
  }

  #hello-text {
    margin-top: 30px;
    margin-left: 30px;
  }

  .hello-text-inline {
    color: #fff;
    font-family: serif;
    font-size: 24px;

    position: relative;

    opacity: 0;

    animation-name: opacityDelay;
    animation-duration: .01s;
    animation-fill-mode: forwards;
  }

  #hello-text > div:nth-child(1) .hello-text-inline {
    animation-delay: 2.1s;
  }

  #hello-text > div:nth-child(2) .hello-text-inline {
    animation-delay: 3.1s;
  }

  #hello-text > div:nth-child(3) .hello-text-inline {
    animation-delay: 4.1s;
  }

  .hello-text-bg {
    position: absolute;

    width: 0;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #fff;

/*    animation-name: wipe;*/
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  #hello-text > div:nth-child(1) .hello-text-bg {
    animation-delay: 2.1s;
  }

  #hello-text > div:nth-child(2) .hello-text-bg {
    animation-delay: 3.1s;
  }

  #hello-text > div:nth-child(3) .hello-text-bg {
    animation-delay: 4.1s;
  }

  @keyframes wipe {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    51% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }



</style>
