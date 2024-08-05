<script>
  import { onMount } from 'svelte'
  import anime from 'animejs'
  import Hello from './hello.svelte'
  import profile from './profile_photo.jpg'

  import Paperplane from '../Icons/paperplane.svelte'
  import Resume from '../Icons/resume.svelte'
  import Github from '../Icons/github.svelte'

  import { active as resumeStore } from '../Resume/store.js'

  function handleResumeClick() {
    resumeStore.set(true)
    const app = document.getElementById('app-wrap')
    setTimeout( () => {
      app.classList.add('resume-active')  
    }, 500)
    
  }

  onMount(() => {

    const hello = document.getElementById('hello')
    const elHeight = hello.scrollHeight
    
    let hasRun = false;


    window.addEventListener('scroll', e => {
      const winScroll = window.scrollY


      if (winScroll >= elHeight / 2 ) {

        if (hasRun === false) {



          hasRun = true;

          hello.classList.add('animate')

          anime({
            targets: '#hello img',
            translateY: '150px',
            duration: 3000,
            opacity: 1,
            filter: 'blur(0px)'
          })

          anime({
            targets: '#hello img',
            easing: 'easeInOutQuad',
            duration: 1500,
            opacity: 1,
            filter: 'blur(0px)'
          })

          anime({
            targets: '#hello-bg',
            width: '100%',
            duration: 1000,
            easing: 'easeInOutQuad',
            delay: 100
          })

          anime({
            targets: '#hello-bg',
            left: '100%',
            duration: 1000,
            easing: 'easeInOutQuad',
            delay: 1100
          })

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

          const icons = anime.timeline({
            // easing: 'easeInOutQuad',
            duration: 600
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

          setTimeout(() => {

            icons.add({
              targets: '#calls-to-action li:nth-child(1)',
              opacity: 1,
              left: '0'
            }).add({
              targets: '#calls-to-action li:nth-child(2)',
              opacity: 1,
              left: '0'
            }).add({
              targets: '#calls-to-action li:nth-child(3)',
              opacity: 1,
              left: '0'
            })

          }, 4800)

        }



      }
    })
    
    

    

    

  })
</script>

<div id="hello">
  <Hello/>
  <img src={profile} alt="Daniel A. Anderson"/>
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

  <div id="calls-to-action">
    <ul>
      <li>
        <a on:click={handleResumeClick}>
          <span class="cta-inner-wrap">
            <span class="icon">
              <Resume/>
            </span>
            <span>check my resume</span>
          </span>
        </a>
      </li>
      <li> 
        <a href="https://github.com/knaut">
          <span class="cta-inner-wrap">
            <span class="icon">
              <Github/>
            </span>
            <span>check my github</span>
          </span>
        </a>
      </li>
      <li>
        <a href="mailto:daniel@smallinvisiblemachines.com">
          <span class="cta-inner-wrap">
            <span class="icon">
              <Paperplane/>
            </span>
            <span>get in touch with me</span>
          </span>
        </a>
      </li>
    </ul>
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
    background: var(--dark2);
    padding: 9% 18% 0 18%;
    box-sizing: border-box;
    position: relative;
  }

  #hello img {
/*    float: right;*/
    position: absolute;
    top: 4.5%;
    right: 18%;
    z-index: 54;
    height: 500px;
/*    border-radius: 100%;*/
    clip-path: circle(40%);
    z-index: 2;
    opacity: 0;
    filter: blur(20px);
    margin-top: -100px;
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
    position: relative;
    z-index: 3;
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
    animation-play-state: paused;

    text-shadow: 3px -3px 4px #000, -3px 3px 4px #000;
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
  }

  :global(#hello.animate .hello-text-inline) {
    animation-play-state: running;
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


  #calls-to-action {
    color: #fff;
    float: right;
  }

  #calls-to-action .icon {
    width: 50px;
    display: inline-block;
  }

  #calls-to-action ul {
    display: flex;
  }

  #calls-to-action li {
    list-style: none;

    font-family: serif;
/*    text-transform: capitalize;*/
    font-style: italic;
    font-size: 21px;
    margin-right: 30px;

    opacity: 0;

/*    transform: translateX(-100px);*/
    position: relative;
    left: -200px;
  }

  #calls-to-action a {
    cursor: pointer;    
  }

  #calls-to-action .cta-inner-wrap {
    display: flex;
    align-items: center;
  }

  #calls-to-action a:link, #calls-to-action a:visited, #calls-to-action a:active {
    text-decoration: none;
    color: #fff;
  }

  #calls-to-action a:link .cta-inner-wrap,
  #calls-to-action a .cta-inner-wrap {
    position: relative;
    top: 0;
    transition: 0.25s all ease-in-out;
  }

  #calls-to-action a:hover .cta-inner-wrap {
    top: -20px;
  }

  #calls-to-action a:hover {
    color: cyan;
  }

  :global(#calls-to-action a:hover path) {
    fill: cyan !important;
  }

  #calls-to-action span {
    display: inline-block;
    margin-left: 15px;
  }

</style>
