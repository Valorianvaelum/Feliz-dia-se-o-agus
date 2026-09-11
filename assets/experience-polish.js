(()=>{
  if(window.__agusExperiencePolish)return;
  window.__agusExperiencePolish=true;

  const gs=window.gsap, ST=window.ScrollTrigger;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!gs||!ST)return;
  gs.registerPlugin(ST);

  const mobile=matchMedia('(max-width: 820px)').matches;
  const coarse=matchMedia('(pointer: coarse)').matches;
  const lowPower=(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||(navigator.deviceMemory&&navigator.deviceMemory<=4);
  const restrained=mobile||coarse||lowPower;

  ST.config({limitCallbacks:true,ignoreMobileResize:true});
  gs.ticker.lagSmoothing(500,33);

  const style=document.createElement('style');
  style.id='experiencePolishStyles';
  style.textContent=`
    html{scroll-padding-top:72px}
    body{overscroll-behavior-x:none}
    .scene{transform:translateZ(0);backface-visibility:hidden}
    .experience-veil{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0;background:radial-gradient(ellipse at 50% 42%,rgba(255,251,236,.10),rgba(255,247,218,.035) 38%,rgba(28,48,30,.055) 100%);will-change:opacity}
    .journey7{transform-origin:50% 0;will-change:opacity,transform;box-shadow:0 9px 26px rgba(34,56,34,.075)}
    .hero-card,.letter,.admire-panel,.garden-card{isolation:isolate}
    .hero-card,.letter,.admire-panel,.garden-card,.final>div{transform-origin:50% 50%;backface-visibility:hidden}
    .speech p{max-width:66ch}
    .final>div{max-width:940px;margin-inline:auto}
    .final h2{max-width:13ch;margin-inline:auto}
    .v3-vignette{opacity:.42}
    .v3-final-rays,.v2-final-burst{mix-blend-mode:soft-light}
    .rds-symbol{image-rendering:auto}
    .experience-ready .btn{transition:transform .22s cubic-bezier(.22,.7,.25,1),box-shadow .22s ease,background-color .2s ease}
    .experience-ready .btn:hover{transform:translateY(-1.5px) scale(1.01)}
    @media(max-width:820px){
      .hero-card,.letter,.garden-card,.admire-panel{backdrop-filter:blur(10px) saturate(1.035);-webkit-backdrop-filter:blur(10px) saturate(1.035)}
      .v3-lens,.v2-light-ribbon{display:none!important}
      .v3-depth-fog{filter:blur(15px)!important;opacity:.34!important}
      .v3-atmosphere{filter:saturate(1.08)!important}
      .v2-sky-film{filter:saturate(1.07)!important}
      .v3-final-rays{opacity:.45}
      .v3-final-ring{box-shadow:0 0 0 18px rgba(255,225,136,.012)}
      .journey7{width:min(620px,calc(100% - 18px));background:rgba(255,252,239,.72);backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px)}
    }
    @media(max-width:640px){
      .v2-bokeh:nth-child(n+7),.v3-haze-dot:nth-child(n+7),.v3-star:nth-child(n+8){display:none!important}
      .grain{opacity:.024}
      .hero-card,.letter,.garden-card,.admire-panel{box-shadow:0 22px 65px rgba(29,51,29,.16)}
    }
    @media(prefers-reduced-motion:reduce){.experience-veil{display:none}.journey7{will-change:auto}}
  `;
  document.head.append(style);
  document.body.classList.add('experience-ready');

  const veil=document.createElement('div');
  veil.className='experience-veil';
  veil.setAttribute('aria-hidden','true');
  document.body.insertBefore(veil,document.querySelector('main'));

  if(reduced){
    gs.set(['.hero-card','.letter','.admire-panel','.garden-card','.final>div'],{clearProps:'transform,filter'});
    return;
  }

  const title=document.querySelector('#title');
  if(title){
    gs.killTweensOf(title);
    gs.set(title,{filter:'none',letterSpacing:''});
  }

  const surfaces=[...document.querySelectorAll('.hero-card,.letter,.admire-panel,.garden-card,.final>div')];
  surfaces.forEach(surface=>{
    gs.killTweensOf(surface,'filter');
    gs.set(surface,{filter:'none'});
  });

  const sun=document.querySelector('.sun-glow');
  if(sun){
    gs.killTweensOf(sun,'scale,yPercent');
    gs.fromTo(sun,{scale:1,yPercent:0},{scale:restrained?1.075:1.13,yPercent:restrained?2:5,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'72% center',scrub:1.8}});
  }

  const sky=document.querySelector('.v2-sky-film');
  const atm=document.querySelector('.v3-atmosphere');
  if(sky){gs.killTweensOf(sky,'filter');gs.set(sky,{filter:restrained?'saturate(1.06)':'saturate(1.11) hue-rotate(-4deg)'})}
  if(atm){gs.killTweensOf(atm,'filter');gs.set(atm,{filter:restrained?'saturate(1.08)':'saturate(1.13) contrast(1.018)'})}

  const flowers=[...document.querySelectorAll('.sunflower')];
  if(flowers.length){
    gs.killTweensOf(flowers,'rotation,x');
    flowers.forEach((f,i)=>{
      const d=+(f.dataset.depth||.5);
      const amp=restrained?(1.1+d*1.7):(1.6+d*2.8);
      gs.to(f,{rotation:(i%2?1:-1)*amp,x:(i%3-1)*(restrained?1.2:2.2)*d,duration:3.5+(i%7)*.34,delay:(i%11)*-.23,repeat:-1,yoyo:true,ease:'sine.inOut'});
    });
  }

  const focusTL=gs.timeline({scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:1.1}});
  focusTL.to(veil,{autoAlpha:0,duration:.12})
         .to(veil,{autoAlpha:.52,duration:.19})
         .to(veil,{autoAlpha:.20,duration:.16})
         .to(veil,{autoAlpha:.34,duration:.18})
         .to(veil,{autoAlpha:.08,duration:.18})
         .to(veil,{autoAlpha:.18,duration:.17});

  const journey=document.querySelector('.journey7');
  if(journey){
    gs.set(journey,{autoAlpha:.22,y:-7,scale:.985});
    gs.to(journey,{autoAlpha:.94,y:0,scale:1,ease:'none',scrollTrigger:{trigger:'.letter-wrap',start:'top 98%',end:'top 77%',scrub:.65}});
    gs.to(journey,{autoAlpha:.66,ease:'none',scrollTrigger:{trigger:'.final',start:'top 70%',end:'center 45%',scrub:.7}});
  }

  const final=document.querySelector('.final');
  const finalBox=document.querySelector('.final > div');
  if(final&&finalBox){
    gs.killTweensOf(finalBox,'filter');
    gs.set(finalBox,{filter:'none'});
    gs.fromTo(finalBox,{y:restrained?20:30,scale:.985},{y:0,scale:1,ease:'none',scrollTrigger:{trigger:final,start:'top 82%',end:'center 48%',scrub:.9}});
    const finaleDecor=[...final.querySelectorAll('.v2-final-burst,.v2-final-orb,.v3-final-core,.v3-final-ring,.v3-final-ring-b,.v3-final-rays,.v3-final-sweep')];
    if(restrained){
      finaleDecor.forEach((el,i)=>{if(i%2)el.style.opacity=Math.min(parseFloat(getComputedStyle(el).opacity)||.5,.5)});
    }
  }

  if('IntersectionObserver'in window){
    const hosts=[...document.querySelectorAll('.letter-wrap,.admire,.garden,.final')];
    const observers=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        const descendants=[entry.target,...entry.target.querySelectorAll('*')];
        gs.getTweensOf(descendants).forEach(t=>{
          if(t.repeat()===-1&&!t.scrollTrigger){entry.isIntersecting?t.resume():t.pause()}
        });
      });
    },{rootMargin:'35% 0px 35% 0px',threshold:0});
    hosts.forEach(h=>observers.observe(h));
  }

  const syncVisibility=()=>gs.globalTimeline.paused(document.hidden);
  document.addEventListener('visibilitychange',syncVisibility,{passive:true});
  syncVisibility();

  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    document.querySelectorAll('.btn').forEach(btn=>{
      const up=gs.quickTo(btn,'y',{duration:.24,ease:'power2.out'});
      btn.addEventListener('pointerenter',()=>up(-1.5),{passive:true});
      btn.addEventListener('pointerleave',()=>up(0),{passive:true});
    });
  }

  requestAnimationFrame(()=>requestAnimationFrame(()=>ST.refresh()));
})();
