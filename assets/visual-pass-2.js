(()=>{
  if(window.__agusVisualPass2)return;
  window.__agusVisualPass2=true;

  const gs=window.gsap;
  const ST=window.ScrollTrigger;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!gs||!ST||reduced)return;
  gs.registerPlugin(ST);

  const style=document.createElement('style');
  style.id='visualPass2Styles';
  style.textContent=`
    .scene{--v2-warm:.08;--v2-depth:.35}
    .v2-sky-film{position:absolute;inset:-8%;z-index:0;pointer-events:none;opacity:.08;background:
      radial-gradient(circle at 18% 18%,rgba(255,244,202,.62),transparent 30%),
      radial-gradient(circle at 78% 26%,rgba(255,177,92,.28),transparent 33%),
      linear-gradient(180deg,rgba(255,223,157,.08),rgba(255,139,88,.12) 52%,rgba(78,96,54,.08));
      mix-blend-mode:soft-light;filter:saturate(1.05);will-change:transform,opacity,filter}
    .v2-light-ribbon{position:absolute;z-index:3;left:-18%;top:12%;width:44%;height:86%;pointer-events:none;opacity:.0;background:linear-gradient(105deg,transparent 0%,rgba(255,248,213,.18) 42%,rgba(255,235,175,.38) 50%,rgba(255,246,214,.14) 58%,transparent 100%);filter:blur(20px);transform:skewX(-13deg);mix-blend-mode:screen;will-change:transform,opacity}
    .v2-bokeh-layer{position:absolute;inset:0;z-index:3;pointer-events:none;overflow:hidden}.v2-bokeh{position:absolute;width:var(--size);height:var(--size);left:var(--x);top:var(--y);border-radius:50%;background:rgba(255,231,142,var(--alpha));box-shadow:0 0 22px rgba(255,209,75,.14);filter:blur(.4px);will-change:transform,opacity}
    .v2-aura{position:absolute;z-index:0;left:50%;top:50%;width:min(82vw,920px);aspect-ratio:1.65;transform:translate(-50%,-50%) scale(.82);pointer-events:none;border-radius:50%;opacity:0;background:radial-gradient(circle,rgba(255,244,199,.18) 0%,rgba(255,210,94,.07) 34%,transparent 69%);filter:blur(18px);will-change:transform,opacity}
    .hero-card,.letter,.admire-panel,.garden-card,.final>div{position:relative;z-index:1;transform-style:preserve-3d;backface-visibility:hidden}
    .v2-glint{position:absolute;z-index:0;left:-65%;top:-28%;width:46%;height:160%;pointer-events:none;background:linear-gradient(105deg,transparent,rgba(255,255,255,.05) 28%,rgba(255,250,220,.52) 49%,rgba(255,255,255,.06) 70%,transparent);filter:blur(7px);transform:skewX(-18deg);mix-blend-mode:screen;opacity:.9;will-change:transform,opacity}
    .v2-ring{position:absolute;z-index:0;left:50%;top:50%;width:82%;aspect-ratio:1;border:1px solid rgba(244,149,32,.16);border-radius:50%;pointer-events:none;opacity:.2;transform:translate(-50%,-50%) scale(.88);will-change:transform,opacity}.v2-ring.r2{width:96%;border-color:rgba(254,214,4,.11)}.v2-ring.r3{width:68%;border-color:rgba(255,238,194,.12)}
    .v2-reading-rail{position:absolute;z-index:0;left:18px;top:12%;width:2px;height:74%;overflow:visible;background:linear-gradient(180deg,transparent,rgba(178,122,20,.13) 12%,rgba(178,122,20,.13) 88%,transparent);border-radius:9px;pointer-events:none}.v2-reading-beam{position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:50% 0%;transform:scaleY(0);background:linear-gradient(180deg,#ffd85c,#f0a826 76%,rgba(244,149,32,.2));box-shadow:0 0 16px rgba(244,149,32,.28)}.v2-reading-beam:after{content:"";position:absolute;left:50%;bottom:-4px;width:9px;height:9px;transform:translateX(-50%);border-radius:50%;background:#ffd85c;box-shadow:0 0 18px 5px rgba(255,216,92,.26)}
    .v2-final-burst{position:absolute;z-index:0;left:50%;top:50%;width:min(92vw,920px);aspect-ratio:1;transform:translate(-50%,-50%) scale(.62);opacity:0;pointer-events:none;background:repeating-conic-gradient(from 0deg,rgba(255,229,125,.18) 0 1.2deg,transparent 1.2deg 8deg);-webkit-mask-image:radial-gradient(circle,transparent 0 18%,#000 33% 57%,transparent 78%);mask-image:radial-gradient(circle,transparent 0 18%,#000 33% 57%,transparent 78%);filter:blur(.2px);will-change:transform,opacity}
    .v2-final-orb{position:absolute;z-index:0;left:50%;top:58%;width:min(44vw,420px);aspect-ratio:1;transform:translate(-50%,-50%) scale(.72);border-radius:50%;opacity:.0;pointer-events:none;background:radial-gradient(circle,rgba(255,240,176,.34),rgba(255,207,78,.13) 43%,transparent 72%);filter:blur(12px);will-change:transform,opacity}
    .v2-surface-depth{will-change:transform,filter,box-shadow}
    @media(max-width:640px){.v2-reading-rail{left:10px}.v2-bokeh:nth-child(n+9){display:none}.v2-ring.r2{display:none}.v2-light-ribbon{width:62%;left:-30%}}
  `;
  document.head.append(style);

  const scene=document.querySelector('.scene');
  const hero=document.querySelector('.hero');
  const letterWrap=document.querySelector('.letter-wrap');
  const admire=document.querySelector('.admire');
  const garden=document.querySelector('.garden');
  const final=document.querySelector('.final');
  const heroCard=document.querySelector('.hero-card');
  const letter=document.querySelector('.letter');
  const admirePanel=document.querySelector('.admire-panel');
  const gardenCard=document.querySelector('.garden-card');
  const finalBox=document.querySelector('.final > div');
  const symbolShell=document.querySelector('.rds-symbol-shell');

  if(scene){
    scene.insertAdjacentHTML('afterbegin','<div class="v2-sky-film" aria-hidden="true"></div><div class="v2-light-ribbon" aria-hidden="true"></div><div class="v2-bokeh-layer" id="v2Bokeh" aria-hidden="true"></div>');
    const bokeh=document.querySelector('#v2Bokeh');
    const frag=document.createDocumentFragment();
    const count=innerWidth<640?8:14;
    for(let i=0;i<count;i++){
      const s=document.createElement('i');
      s.className='v2-bokeh';
      s.style.setProperty('--x',`${4+Math.random()*92}%`);
      s.style.setProperty('--y',`${8+Math.random()*72}%`);
      s.style.setProperty('--size',`${3+Math.random()*7}px`);
      s.style.setProperty('--alpha',(.10+Math.random()*.24).toFixed(2));
      frag.append(s);
    }
    bokeh.append(frag);
  }

  [hero,letterWrap,admire,garden,final].forEach(section=>{
    if(section)section.insertAdjacentHTML('afterbegin','<div class="v2-aura" aria-hidden="true"></div>');
  });

  [heroCard,admirePanel,gardenCard].forEach(surface=>{
    if(surface){surface.classList.add('v2-surface-depth');surface.insertAdjacentHTML('afterbegin','<span class="v2-glint" aria-hidden="true"></span>')}
  });

  if(letter){
    letter.insertAdjacentHTML('afterbegin','<div class="v2-reading-rail" aria-hidden="true"><span class="v2-reading-beam"></span></div>');
  }
  if(symbolShell){
    symbolShell.insertAdjacentHTML('afterbegin','<span class="v2-ring r1" aria-hidden="true"></span><span class="v2-ring r2" aria-hidden="true"></span><span class="v2-ring r3" aria-hidden="true"></span>');
  }
  if(final){
    final.insertAdjacentHTML('afterbegin','<div class="v2-final-burst" aria-hidden="true"></div><div class="v2-final-orb" aria-hidden="true"></div>');
  }

  const heroIntro=gs.timeline({delay:.35});
  if(heroCard){
    heroIntro.fromTo(heroCard,{filter:'saturate(.88) contrast(.96)'},{filter:'saturate(1.03) contrast(1)',duration:1.35,ease:'power2.out'},0)
      .fromTo(heroCard.querySelector('.v2-glint'),{xPercent:0,autoAlpha:.25},{xPercent:330,autoAlpha:0,duration:1.65,ease:'power2.inOut'},.15);
  }
  const title=document.querySelector('#title');
  if(title)heroIntro.fromTo(title,{letterSpacing:'-.085em',filter:'blur(4px)'},{letterSpacing:'-.055em',filter:'blur(0px)',duration:1.15,ease:'power3.out'},.2);

  if(scene){
    gs.to('.v2-sky-film',{opacity:.34,filter:'saturate(1.18) hue-rotate(-8deg)',ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:1.8}});
    gs.fromTo('.v2-light-ribbon',{xPercent:-20,autoAlpha:0},{xPercent:290,autoAlpha:.58,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:2.4}});
  }

  gs.to('.hill.back',{yPercent:-8,scale:1.035,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:1.7}});
  gs.to('.hill.front',{yPercent:-3.4,scale:1.018,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:1.25}});
  gs.to('.sun-glow',{scale:1.11,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'65% center',scrub:2}});

  document.querySelectorAll('section').forEach(section=>{
    const aura=section.querySelector('.v2-aura');
    if(aura){
      gs.fromTo(aura,{scale:.78,autoAlpha:0},{scale:1.05,autoAlpha:.95,ease:'none',scrollTrigger:{trigger:section,start:'top 88%',end:'center 48%',scrub:1.25}});
      gs.to(aura,{autoAlpha:.18,scale:1.14,ease:'none',scrollTrigger:{trigger:section,start:'center 45%',end:'bottom 18%',scrub:1.2}});
    }
  });

  [heroCard,letter,admirePanel,gardenCard].filter(Boolean).forEach(surface=>{
    gs.fromTo(surface,{filter:'saturate(.93) brightness(.985)'},{filter:'saturate(1.035) brightness(1.012)',ease:'none',scrollTrigger:{trigger:surface,start:'top 82%',end:'center 48%',scrub:.9}});
  });

  if(letter){
    gs.to(letter.querySelector('.v2-reading-beam'),{scaleY:1,ease:'none',scrollTrigger:{trigger:letter,start:'top 68%',end:'bottom 34%',scrub:1}});
    const paragraphs=[...letter.querySelectorAll('.speech p')];
    paragraphs.forEach((p,i)=>{
      gs.fromTo(p,{x:i%2?7:-7,filter:'brightness(.95)'},{x:0,filter:'brightness(1.01)',ease:'none',scrollTrigger:{trigger:p,start:'top 78%',end:'bottom 46%',scrub:.55}});
    });
  }

  const heads=[...document.querySelectorAll('.sunflower .head')];
  if(heads.length){
    const wave=gs.timeline({repeat:-1,repeatDelay:2.2,delay:1.2});
    wave.to(heads,{y:-5,duration:.5,stagger:{each:.028,from:'start'},ease:'sine.out'})
        .to(heads,{y:0,duration:.72,stagger:{each:.028,from:'start'},ease:'sine.inOut'},'<.14');
  }

  if(symbolShell){
    gs.to('.v2-ring.r1',{rotation:'+=360',scale:1.04,duration:42,repeat:-1,ease:'none'});
    gs.to('.v2-ring.r2',{rotation:'-=360',scale:.96,duration:58,repeat:-1,ease:'none'});
    gs.to('.v2-ring.r3',{rotation:'+=360',scale:1.08,duration:33,repeat:-1,ease:'none'});
    gs.fromTo('.v2-ring',{autoAlpha:.08},{autoAlpha:.33,stagger:.08,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom 35%',scrub:1.4}});
  }

  if(final&&finalBox){
    const finale=gs.timeline({scrollTrigger:{trigger:final,start:'top 72%',end:'center 48%',scrub:1.15}});
    finale.fromTo('.v2-final-orb',{scale:.62,autoAlpha:0},{scale:1.12,autoAlpha:.86,ease:'power2.out'},0)
          .fromTo('.v2-final-burst',{scale:.55,rotation:-12,autoAlpha:0},{scale:1.06,rotation:18,autoAlpha:.72,ease:'power2.out'},0)
          .fromTo(finalBox,{filter:'brightness(.96) saturate(.96)'},{filter:'brightness(1.055) saturate(1.04)',ease:'power2.out'},0);
    gs.to('.v2-final-burst',{rotation:'+=360',duration:90,repeat:-1,ease:'none'});
  }

  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(fine){
    [heroCard,admirePanel,gardenCard].filter(Boolean).forEach(surface=>{
      gs.set(surface,{transformPerspective:1200,transformOrigin:'50% 50%'});
      const rx=gs.quickTo(surface,'rotationX',{duration:.5,ease:'power3.out'});
      const ry=gs.quickTo(surface,'rotationY',{duration:.5,ease:'power3.out'});
      const z=gs.quickTo(surface,'z',{duration:.5,ease:'power3.out'});
      surface.addEventListener('pointermove',e=>{
        const r=surface.getBoundingClientRect();
        const nx=(e.clientX-r.left)/r.width-.5;
        const ny=(e.clientY-r.top)/r.height-.5;
        rx(ny*-4.2);ry(nx*5.2);z(5);
      },{passive:true});
      surface.addEventListener('pointerleave',()=>{rx(0);ry(0);z(0)});
    });
  }

  document.querySelectorAll('.v2-bokeh').forEach((dot,i)=>{
    gs.to(dot,{x:gs.utils.random(-30,30),y:gs.utils.random(-44,24),scale:gs.utils.random(.72,1.35),autoAlpha:gs.utils.random(.15,.65),duration:gs.utils.random(5.5,10.5),delay:i*.08,repeat:-1,yoyo:true,ease:'sine.inOut'});
  });

  ST.refresh();
})();
