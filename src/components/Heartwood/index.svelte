<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let constrain = 85;
  let perspX = 0;
  let perspY = 0;

  function transform(x, y, el) {
    let box = el.getBoundingClientRect();

    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    perspX = calcX
    perspY = calcY
  }

  function handleMousemove(event) {
    const { clientX, clientY, target } = event

    transform( clientX, clientY, target )
  }


  const colors = {
    CSS: '#2965f1',
    SCSS: '#cd669a',
    HTML: '#f06529',
    Javascript: '#f0db4f',
    React: '#61dafb',
    Svelte: '#ff3e00',
    TypeScript: '#3178c6',
    NodeJS: '#8bc500',
    Storybook: '#ff4785',
  }

  const skills = {
    '2024': [
      { skill: 'CSS', duration: [0, 8] },
      { skill: 'HTML', duration: [0, 8] },
      { skill: 'Javascript', duration: [0, 8] },
      { skill: 'SCSS', duration: [0, 5] },
      { skill: 'NodeJS', duration: [0, 8] },
      { skill: 'React', duration: [0, 5] },
      { skill: 'Storybook', duration: [[0, 4], [5, 8]] },
      { skill: 'Svelte', duration: [[0, 5], [6, 8]] },
      { skill: 'TypeScript', duration: [[0, 5], [6, 8]] },
    ],
    '2023': [
      { skill: 'CSS', duration: [0, 12] },
      { skill: 'HTML', duration: [0, 12] },
      { skill: 'Javascript', duration: [0, 12] },
      { skill: 'SCSS', duration: [0, 8] },
      { skill: 'NodeJS', duration: [7, 12] },
      { skill: 'React', duration: [0, 11] },
      { skill: 'Storybook', duration: [0, 6] },
      { skill: 'Svelte', duration: [8, 11] },
      { skill: 'TypeScript', duration: [7, 12] },
    ],
    '2022': [
      { skill: 'CSS', duration: [0, 12] },
      { skill: 'HTML', duration: [0, 12] },
      { skill: 'Javascript', duration: [0, 12] },
      { skill: 'SCSS', duration: [0, 7] },
      { skill: 'NodeJS', duration: [0, 12] },
      { skill: 'React', duration: [0, 11] },
      { skill: 'Storybook', duration: [7, 12] },
    ],
    '2021': [
      { skill: 'CSS', duration: [0, 12] },
      { skill: 'HTML', duration: [0, 12] },
      { skill: 'Javascript', duration: [0, 12] },
      { skill: 'SCSS', duration: [0, 12] },
      { skill: 'NodeJS', duration: [0, 12] },
      { skill: 'React', duration: [0, 12] },   
    ]
  }




  function gatherSkillList(skillsObj) {
    let skillList = []

    for (let year in skillsObj) {
      const val = skillsObj[year]

      for (let i = 0; val.length > i; i++) {
        const skill = val[i].skill

        if (skillList.indexOf(skill) === -1) {
          skillList.push(skill)
        }
      }
    }
    return skillList
  }

  let skillList = gatherSkillList(skills)

  onMount(() => {

    for (let yearKey in skills) {
      const skillData = skills[yearKey]

      for (let i = 0; skillData.length > i; i++) {
        const { skill, duration, fill } = skillData[i]

        if (Array.isArray(duration[0])) {
          for (let c = 0; duration.length > c; c++) {

            d3.select(`#year${yearKey}-${i + 1}-${c + 1}`)
              .append('g')
              .attr('transform', 'translate(0, 0)');
            
            const angleGen = d3.pie()
              .startAngle( duration[c][0] * Math.PI / 6 )
              .endAngle( duration[c][1] * Math.PI / 6 ); // need to convert months to angles 

            const data = angleGen([1]);

            const arcGen = d3.arc()
              .innerRadius((i + 1 / (i + 1.1)) * 28)
              .outerRadius((i + 1 / (i + 1)) * 31);

            d3.select(`#year${yearKey}-${i + 1}-${c + 1} g`)
              .selectAll('path')
              .data(data)
              .enter()
              .append('path')
              .attr('d', arcGen)
              .attr('fill', colors[skill])
              .attr('class', skill)
              // .attr('stroke-width', 1)
              // .attr('stroke', '#ddd')
            
          }

        } else {

          d3.select(`#year${yearKey}-${i + 1}`)
            .append('g')
            .attr('transform', 'translate(0, 0)');

          const angleGen = d3.pie()
            .startAngle( duration[0] * Math.PI / 6 )
            .endAngle( duration[1] * Math.PI / 6 ); // need to convert months to angles 
          
          const data = angleGen([1]);
          
          const arcGen = d3.arc()
            .innerRadius((i + 1 / (i + 1.1)) * 28)
            .outerRadius((i + 1 / (i + 1)) * 31);
          
          d3.select(`#year${yearKey}-${i + 1} g`)
            .selectAll('path')
            .data(data)
            .enter()
            .append('path')
            .attr('d', arcGen)
            .attr('fill', colors[skill])
            .attr('class', skill)
            // .attr('stroke-width', 1)
            // .attr('stroke', '#ddd')

        }

      }

    }
    

  })

</script>

<ul id="skill-list">
  {#each skillList as skill, i}
    <li id="{skill}"
      on:mouseenter={e => {
        // console.log(e.target, skill)
        d3.selectAll(`svg[id^="year"] path:not(.${skill})`)
          .classed('hovered', true)
      }}
      on:mouseleave={e => {
        // console.log(e.target, skill)
        d3.selectAll(`svg[id^="year"] path:not(.${skill})`)
          .classed('hovered', false)
      }}
    >
      {skill}
    </li>
  {/each}
</ul>

<div id="viz-viewport" on:mousemove={handleMousemove}></div>

<div class="container">

  {#each Object.entries(skills).reverse() as [yearKey, skillData], s}

    <div class="svg-wrapper" style="
      opacity: {1 - (s * .30)};
      z-index: {skillData.length - s};
      transform:
        perspective(200px)
        rotateX({perspX}deg)
        rotateY({perspY}deg)
        translateZ(-{s * 100}px)
        scale({1 + (s * (skillData.length * (.0001 * (Math.abs(perspX) + Math.abs(perspY)) ) ))});

    ">
      <div class="svg-label">{yearKey}</div>

      {#each skillData as skill, i}
        
        {#if Array.isArray(skill.duration[0])}

          {#each skill.duration as duration, c}
            <!-- might have to scale viewboxes based on number of data -->
            <!-- viewbox args, center is half of width/height -->
            <!-- viewBox="-175 -175 350 350" -->
            <!-- every added skill needs to grow the viewBox by ~25-28px -->
            <!-- <svg id="year{yearKey}-{i + 1}-{c + 1}" viewBox="-200 -200 400 400"></svg>         -->
            <svg id="year{yearKey}-{i + 1}-{c + 1}" viewBox="-275 -275 550 550"></svg>   
          {/each}
        
        {:else}
          <svg id="year{yearKey}-{i + 1}" viewBox="-275 -275 550 550"></svg>  
        {/if}
        
      {/each}
    </div>

  {/each}

  
</div>

<style>

  svg {
    position: absolute;
    z-index: 1;
  }

  svg path {
    position: relative;
    z-index: 1;
  }

  :global(svg[id^="year"] path) {
/*    fill: red !important;*/
    transition: 0.8s all ease-in-out;
  }

  :global(svg[id^="year"] path.hovered) {
    opacity: .2;
  }

  :global(svg[id^="year"] path.active) {
    opacity: .2;
  }

  .svg-wrapper {
    position: absolute;
    width: 100vh; /* set to vw to expand to full-width below the fold */
    height: 100vh;
  }

  .svg-label {
    position: absolute;
    top: 125px;
    left: 0;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: 'Roboto Mono', monospace;
  }

  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #viz-viewport {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }

  #skill-list {
    position: absolute;
    z-index: 51;
    left: 50px;
    top: 20px;
    list-style: none;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    justify-content: center;
    flex-direction: column;

  }

  #skill-list li {
    display: flex;
/*    transform: rotate(-90deg);*/
/*    width: 120px;*/
    padding: 15px 0 15px 30px;
/*    margin-bottom: 10px;*/
/*    margin-left: -80px;*/
    text-align: right;
    cursor: pointer;
    position: relative;
    color: #999;
    font-size: 16px;
    text-align: left;

    transition: padding 0.2s ease;
  }

  #skill-list li:before {
      content: '>';
      position: relative;
      left: -30px;
      transition: all 0.1s ease-in-out;
      color: transparent;
  }

  #skill-list li:hover {
    color: orange;
    padding-left: 45px;
  }

  #skill-list li:hover:before {
    color: orange;
    left: -5px;
    transition: all 0.5s ease-in-out;
  }

  :global(#heartwood path) {
    transition: 0.4s all ease-in-out;
  }


  #skill-list li:after {
    content: '';
    height: 25px;
    width: 25px;
    display: block;
    position: absolute;
    left: 0;
    top: 8px;
    background-size: 20px 20px;
    background-position: center bottom;
  }

  #CSS:after {
    background: url(./icons/css.svg) no-repeat;
  }

  #SCSS:after {
    background: url(./icons/scss.svg) no-repeat;
  }

  #HTML:after {
    background: url(./icons/html.svg) no-repeat;
  }

  #Javascript:after {
    background: url(./icons/js.svg) no-repeat;
  }

  #React:after {
    background: url(./icons/react.svg) no-repeat;
  }

  #Svelte:after {
    background: url(./icons/svelte.svg) no-repeat;
  }

  #TypeScript:after {
    background: url(./icons/ts.svg) no-repeat;
  }

  #NodeJS:after {
    background: url(./icons/node.svg) no-repeat;
  }

  #Storybook:after {
    background: url(./icons/storybook.svg) no-repeat;
  }


</style>
