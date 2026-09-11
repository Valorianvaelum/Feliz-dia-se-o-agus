(()=>{
  if(window.__agusV3Atmosphere)return;
  window.__agusV3Atmosphere=true;
  const gs=window.gsap,ST=window.ScrollTrigger;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!gs||!ST||reduced)return;
  gs.registerPlugin(ST);
  const desktop=matchMedia('(min-width:821px)').matches;
  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;

  const style=document.createElement('style');
  style.id='v3AtmosphereStyles';
  style.textContent=`
    .v3-atmosphere,.v3-vignette,.v3-lens,.v3-depth-fog,.v3-cursor-light{position:absolute;inset:0;pointer-events:none}
    .v3-atmosphere{z-index:0;inset:-12%;opacity:.16;background:radial-gradient(circle at 18% 20%,rgba(255,244,203,.62),transparent 26%),radial-gradient(circle at 78% 24%,rgba(255,187,98,.24),transparent 31%),radial-gradient(circle at 52% 74%,rgba(244,149,32,.10),transparent 38%),linear-gradient(180deg,rgba(255,239,190,.08),rgba(255,167,94,.07) 51%,rgba(65,90,49,.08));mix-blend-mode:soft-light;filter:saturate(1.04) contrast(1.01);will-change:transform,opacity,filter}
    .v3-vignette{z-index:4;background:radial-gradient(ellipse at center,transparent 38%,rgba(31,52,32,.08) 78%,rgba(27,43,27,.19) 100%);opacity:.52;mix-blend-mode:multiply;will-change:opacity}
    .v3-depth-fog{z-index:2;inset:auto -10% -4% -10%;height:42%;background:linear-gradient(180deg,transparent,rgba(232,243,205,.10) 48%,rgba(255,239,184,.10));filter:blur(24px);opacity:0;will-change:transform,opacity}
    .v3-lens{z-index:3;inset:-8%;overflow:hidden;opacity:0;mix-blend-mode:screen;will-change:opacity,transform}.v3-lens:before,.v3-lens:after{content:"";position:absolute;border-radius:50%;border:1px solid rgba(255,237,177,.22);box-shadow:0 0 35px rgba(255,216,100,.08)}.v3-lens:before{width:min(36vw,460px);aspect-ratio:1;left:8%;top:12%;box-shadow:0 0 0 18px rgba(255,232,153,.018),0 0 0 42px rgba(255,205,85,.012)}.v3-lens:after{width:min(16vw,210px);aspect-ratio:1;right:18%;top:36%;border-color:rgba(255,209,94,.18);box-shadow:0 0 28px rgba(255,186,69,.10)}
    .v3-cursor-light{z-index:4;width:340px;height:340px;inset:auto;left:0;top:0;border-radius:50%;background:radial-gradient(circle,rgba(255,248,211,.13),rgba(255,220,132,.055) 36%,transparent 68%);mix-blend-mode:screen;filter:blur(5px);opacity:0;transform:translate(-50%,-50%);will-change:transform,opacity}
    .v3-section-wash{position:absolute;z-index:0;left:50%;top:50%;width:min(112vw,1320px);height:72%;transform:translate(-50%,-50%) scale(.88);border-radius:50%;pointer-events:none;opacity:0;background:radial-gradient(circle,rgba(255,242,200,.16),rgba(255,211,114,.055) 42%,transparent 72%);filter:blur(26px);will-change:transform,opacity}
    .v3-transition-line{position:absolute;z-index:0;left:8%;right:8%;top:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,231,158,.26),rgba(244,149,32,.16),transparent);transform:scaleX(.15);opacity:0;transform-origin:50% 50%;pointer-events:none}
    .v3-title-word{display:inline-block;will-change:transform,filter,opacity,text-shadow}
    body.v3-scroll-fast .v3-atmosphere{filter:saturate(1.14) contrast(1.035)}
    @media(max-width:820px){.v3-cursor-light{display:none}.v3-lens:after{display:none}}
    @media(max-width:640px){.v3-section-wash{width:150vw}.v3-transition-line{left:14%;right:14%}}
  `;
  document.head.append(style);

  const scene=document.querySelector('.scene');
  const sections=[...document.querySelectorAll('main > section')];
  const heroCard=document.querySelector('.hero-card');
  const title=document.querySelector('#title');
  if(scene){
    scene.insertAdjacentHTML('afterbegin','<div class="v3-atmosphere" aria-hidden="true"></div><div class="v3-depth-fog" aria-hidden="true"></div><div class="v3-lens" aria-hidden="true"></div><div class="v3-vignette" aria-hidden="true"></div>');
    if(fine)scene.insertAdjacentHTML('beforeend','<div class="v3-cursor-light" aria-hidden="true"></div>');
  }
  sections.forEach((section,i)=>section.insertAdjacentHTML('afterbegin',`<div class="v3-section-wash" aria-hidden="true"></div>${i?'<div class="v3-transition-line" aria-hidden="true"></div>':''}`));

  if(title){
    const label=title.textContent.replace(/\s+/g,' ').trim();
    title.setAttribute('aria-label',label);
    title.innerHTML='<span class="v3-title-word">Feliz</span> <span class="v3-title-word">día,</span><br><span class="v3-title-word">seño</span> <span class="v3-title-word">Agus</span>';
    const words=[...title.querySelectorAll('.v3-title-word')];
    gs.fromTo(words,{y:48,rotationX:-26,autoAlpha:0,filter:'blur(8px)'},{y:0,rotationX:0,autoAlpha:1,filter:'blur(0px)',duration:1.18,stagger:.10,ease:'power4.out',delay:.16});
    gs.to(words,{textShadow:'0 12px 34px rgba(244,149,32,.14)',duration:1.5,delay:.65,ease:'sine.out'});
  }
  if(heroCard)gs.fromTo(heroCard,{rotationX:3.4,rotationY:-2.4,z:20},{rotationX:0,rotationY:0,z:0,duration:1.85,ease:'power3.out',delay:.12});

  if(scene){
    gs.to('.v3-atmosphere',{opacity:.5,scale:1.08,xPercent:2,yPercent:-2,filter:'saturate(1.2) contrast(1.025)',ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:2.2}});
    gs.fromTo('.v3-lens',{autoAlpha:0,rotation:-8,scale:.86},{autoAlpha:.8,rotation:18,scale:1.16,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'75% bottom',scrub:2.5}});
    gs.fromTo('.v3-depth-fog',{yPercent:30,autoAlpha:0},{yPercent:-18,autoAlpha:.68,ease:'none',scrollTrigger:{trigger:'main',start:'8% top',end:'80% bottom',scrub:1.8}});
    gs.to('.v3-vignette',{opacity:.84,ease:'none',scrollTrigger:{trigger:'main',start:'35% center',end:'bottom bottom',scrub:1.6}});
  }

  sections.forEach((section,i)=>{
    const wash=section.querySelector('.v3-section-wash');
    const line=section.querySelector('.v3-transition-line');
    gs.fromTo(wash,{scale:.8,autoAlpha:0},{scale:1.08,autoAlpha:i===sections.length-1?.86:.62,ease:'none',scrollTrigger:{trigger:section,start:'top 88%',end:'center 50%',scrub:1.1}});
    gs.to(wash,{scale:1.18,autoAlpha:.12,ease:'none',scrollTrigger:{trigger:section,start:'center 48%',end:'bottom 14%',scrub:1.25}});
    if(line)gs.fromTo(line,{scaleX:.12,autoAlpha:0},{scaleX:1,autoAlpha:.72,ease:'none',scrollTrigger:{trigger:section,start:'top 96%',end:'top 68%',scrub:.8}});
  });

  gs.to('.c1',{yPercent:-22,scale:1.06,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:2.4}});
  gs.to('.c2',{yPercent:18,scale:.96,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:2.7}});
  gs.to('.sun-glow',{scale:1.16,yPercent:5,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'70% center',scrub:2.1}});

  if(fine&&scene){
    const light=scene.querySelector('.v3-cursor-light');
    const lx=gs.quickTo(light,'x',{duration:.65,ease:'power3.out'}),ly=gs.quickTo(light,'y',{duration:.65,ease:'power3.out'}),la=gs.quickTo(light,'autoAlpha',{duration:.35,ease:'power2.out'});
    addEventListener('pointermove',e=>{lx(e.clientX);ly(e.clientY);la(.9)},{passive:true});
    addEventListener('pointerleave',()=>la(0),{passive:true});
  }

  if(desktop&&scene){
    const atm=scene.querySelector('.v3-atmosphere');
    const skew=gs.quickTo(atm,'skewY',{duration:.45,ease:'power3.out'}),scale=gs.quickTo(atm,'scale',{duration:.6,ease:'power3.out'});
    let settle;
    ST.create({trigger:'main',start:'top top',end:'bottom bottom',onUpdate:self=>{
      const v=Math.max(-1,Math.min(1,self.getVelocity()/1800));
      skew(v*1.8);scale(1.05+Math.abs(v)*.018);document.body.classList.toggle('v3-scroll-fast',Math.abs(v)>.5);
      clearTimeout(settle);settle=setTimeout(()=>{skew(0);scale(1.05);document.body.classList.remove('v3-scroll-fast')},120);
    }});
  }
  ST.refresh();
})();