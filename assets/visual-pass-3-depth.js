(()=>{
  if(window.__agusV3Depth)return;
  window.__agusV3Depth=true;
  const gs=window.gsap,ST=window.ScrollTrigger;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!gs||!ST||reduced)return;
  gs.registerPlugin(ST);
  const desktop=matchMedia('(min-width:821px)').matches;

  const style=document.createElement('style');
  style.id='v3DepthStyles';
  style.textContent=`
    .v3-edge-light{position:absolute;z-index:2;inset:0;border-radius:inherit;pointer-events:none;overflow:hidden;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);padding:1px;opacity:0}
    .v3-edge-light:before{content:"";position:absolute;inset:-35%;background:conic-gradient(from 0deg,transparent 0 18%,rgba(255,218,104,.74) 24%,transparent 32% 60%,rgba(249,133,122,.32) 68%,transparent 78%);filter:blur(8px);will-change:transform;animation:v3EdgeSpin 22s linear infinite}@keyframes v3EdgeSpin{to{transform:rotate(360deg)}}
    .v3-paper-sheen{position:absolute;z-index:0;left:-30%;top:-25%;width:34%;height:150%;background:linear-gradient(102deg,transparent,rgba(255,255,255,.12) 25%,rgba(255,246,216,.48) 50%,rgba(255,255,255,.09) 70%,transparent);filter:blur(8px);transform:skewX(-17deg);opacity:0;pointer-events:none;will-change:transform,opacity}
    .speech p{position:relative}.speech p:after{content:"";position:absolute;left:0;right:0;bottom:.1em;height:.38em;z-index:-1;background:linear-gradient(90deg,rgba(255,216,92,0),rgba(255,216,92,.11) 18%,rgba(244,149,32,.06) 72%,transparent);transform:scaleX(0);transform-origin:0 50%;opacity:0;border-radius:99px;pointer-events:none;transition:transform .9s cubic-bezier(.22,.75,.24,1),opacity .6s ease}.speech p.v3-lit:after{transform:scaleX(1);opacity:.7}
    .admire-card{transform-style:preserve-3d;backface-visibility:hidden}.v3-card-halo{position:absolute;inset:-35%;z-index:0;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(255,226,128,.18),transparent 62%);opacity:0;filter:blur(18px);will-change:transform,opacity}.admire-card>*{position:relative;z-index:1}.v3-card-streak{position:absolute;z-index:0;left:-52%;top:-32%;width:40%;height:164%;background:linear-gradient(105deg,transparent,rgba(255,255,255,.08),rgba(255,239,181,.42),rgba(255,255,255,.07),transparent);filter:blur(6px);transform:skewX(-15deg);opacity:0;pointer-events:none}
    .v3-field-rays{position:absolute;inset:30% -20% -12% -20%;z-index:1;pointer-events:none;opacity:0;background:repeating-linear-gradient(105deg,transparent 0 8%,rgba(255,240,186,.045) 8.4% 9.1%,transparent 9.4% 17%);filter:blur(8px);mix-blend-mode:screen;will-change:transform,opacity}.sunflower{transform-style:preserve-3d}.v3-deep{filter:blur(.45px) saturate(.92);opacity:.88}.v3-near{filter:saturate(1.08) contrast(1.015);z-index:3}
    .v3-symbol-aura{position:absolute;z-index:0;left:50%;top:50%;width:72%;aspect-ratio:1;transform:translate(-50%,-50%) scale(.7);border-radius:50%;pointer-events:none;opacity:0;background:radial-gradient(circle,rgba(255,243,188,.24),rgba(254,214,4,.085) 40%,transparent 70%);filter:blur(14px);will-change:transform,opacity}.rds-symbol-shell{transform-style:preserve-3d}
    .v3-progress-glow{position:absolute;left:0;top:50%;height:14px;transform:translateY(-50%);border-radius:999px;background:radial-gradient(ellipse,rgba(255,218,90,.36),transparent 72%);filter:blur(6px);opacity:0;pointer-events:none;will-change:width,opacity}
    .v3-petal-haze{position:absolute;inset:0;z-index:2;pointer-events:none;overflow:hidden}.v3-haze-dot{position:absolute;width:var(--s);height:var(--s);left:var(--x);top:var(--y);border-radius:50%;background:rgba(255,217,95,.32);box-shadow:0 0 14px rgba(255,207,77,.16);filter:blur(.5px);opacity:0;will-change:transform,opacity}
    @media(max-width:820px){.v3-paper-sheen{width:48%}.v3-deep{filter:none;opacity:.94}}
    @media(max-width:640px){.v3-edge-light{display:none}.v3-field-rays{opacity:.22}.v3-haze-dot:nth-child(n+10){display:none}}
  `;
  document.head.append(style);

  const scene=document.querySelector('.scene');
  const letter=document.querySelector('.letter');
  const admire=document.querySelector('.admire');
  const admirePanel=document.querySelector('.admire-panel');
  const gardenCard=document.querySelector('.garden-card');
  const heroCard=document.querySelector('.hero-card');
  const symbolShell=document.querySelector('.rds-symbol-shell');
  const journey=document.querySelector('.journey7-track');

  if(scene){
    scene.insertAdjacentHTML('beforeend','<div class="v3-field-rays" aria-hidden="true"></div><div class="v3-petal-haze" id="v3Haze" aria-hidden="true"></div>');
    const host=scene.querySelector('#v3Haze'),frag=document.createDocumentFragment(),count=desktop?18:9;
    for(let i=0;i<count;i++){const d=document.createElement('i');d.className='v3-haze-dot';d.style.setProperty('--x',`${4+Math.random()*92}%`);d.style.setProperty('--y',`${18+Math.random()*68}%`);d.style.setProperty('--s',`${2+Math.random()*5}px`);frag.append(d)}host.append(frag);
  }

  [heroCard,letter,admirePanel,gardenCard].filter(Boolean).forEach(surface=>surface.insertAdjacentHTML('beforeend','<span class="v3-edge-light" aria-hidden="true"></span>'));
  if(letter)letter.insertAdjacentHTML('afterbegin','<span class="v3-paper-sheen" aria-hidden="true"></span>');
  if(admirePanel)admirePanel.querySelectorAll('.admire-card').forEach(card=>card.insertAdjacentHTML('afterbegin','<span class="v3-card-halo" aria-hidden="true"></span><span class="v3-card-streak" aria-hidden="true"></span>'));
  if(symbolShell)symbolShell.insertAdjacentHTML('afterbegin','<span class="v3-symbol-aura" aria-hidden="true"></span>');
  if(journey)journey.insertAdjacentHTML('afterbegin','<span class="v3-progress-glow" aria-hidden="true"></span>');

  if(letter){
    gs.to(letter.querySelector('.v3-edge-light'),{autoAlpha:.82,ease:'none',scrollTrigger:{trigger:letter,start:'top 78%',end:'center 48%',scrub:.8}});
    gs.fromTo('.v3-paper-sheen',{xPercent:0,autoAlpha:0},{xPercent:430,autoAlpha:.8,ease:'none',scrollTrigger:{trigger:letter,start:'top 80%',end:'bottom 30%',scrub:1.2}});
    [...letter.querySelectorAll('.speech p')].forEach((p,i)=>{
      gs.to(p,{y:i%2?-2:2,ease:'none',scrollTrigger:{trigger:p,start:'top 82%',end:'bottom 40%',scrub:.45}});
      ST.create({trigger:p,start:'top 70%',end:'bottom 45%',onEnter:()=>p.classList.add('v3-lit'),onLeaveBack:()=>p.classList.remove('v3-lit')});
    });
  }

  if(admirePanel){
    const cards=[...admirePanel.querySelectorAll('.admire-card')];
    gs.fromTo(cards,{rotationY:(i)=>i===0?-11:i===2?11:0,rotationX:5,y:38,z:-30,autoAlpha:.42},{rotationY:0,rotationX:0,y:0,z:0,autoAlpha:1,duration:1.15,stagger:.14,ease:'power3.out',scrollTrigger:{trigger:admire,start:'top 76%',once:true}});
    cards.forEach((card,i)=>{
      gs.fromTo(card.querySelector('.v3-card-halo'),{scale:.65,autoAlpha:0},{scale:1.05,autoAlpha:.68,ease:'none',scrollTrigger:{trigger:card,start:'top 80%',end:'bottom 45%',scrub:.7}});
      gs.fromTo(card.querySelector('.v3-card-streak'),{xPercent:0,autoAlpha:0},{xPercent:420,autoAlpha:.65,duration:1.25,delay:i*.12,ease:'power2.inOut',scrollTrigger:{trigger:card,start:'top 72%',once:true}});
    });
  }

  const flowers=[...document.querySelectorAll('.sunflower')];
  if(flowers.length){
    flowers.forEach(f=>{const d=parseFloat(f.dataset.depth||'.5');if(d<.28)f.classList.add('v3-deep');if(d>.74)f.classList.add('v3-near')});
    gs.fromTo('.v3-field-rays',{xPercent:-12,autoAlpha:0},{xPercent:16,autoAlpha:desktop?.72:.34,ease:'none',scrollTrigger:{trigger:'main',start:'10% top',end:'82% bottom',scrub:2.2}});
    const sorted=[...flowers].sort((a,b)=>(+a.dataset.depth||0)-(+b.dataset.depth||0));
    const gust=gs.timeline({repeat:-1,repeatDelay:3.4,delay:2});
    gust.to(sorted,{rotation:(i,el)=>-2.5-(+el.dataset.depth||.5)*3.8,x:(i,el)=>-2-(+el.dataset.depth||.5)*4,duration:.65,stagger:{each:.018,from:'start'},ease:'sine.inOut'})
        .to(sorted,{rotation:0,x:0,duration:1.05,stagger:{each:.018,from:'start'},ease:'elastic.out(1,.45)'},'<.2');
  }

  document.querySelectorAll('.butterfly7').forEach((b,i)=>gs.to(b,{scale:i?1.08:.86,yPercent:i?-22:-34,xPercent:i?-12:18,rotation:i?-7:9,duration:5.8+i*1.7,repeat:-1,yoyo:true,ease:'sine.inOut'}));

  if(symbolShell){
    gs.fromTo('.v3-symbol-aura',{scale:.62,autoAlpha:0},{scale:1.14,autoAlpha:.8,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom 38%',scrub:1.45}});
    gs.to(symbolShell,{z:desktop?22:0,rotationZ:1.2,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'55% center',scrub:1.8}});
    gs.to('.v3-symbol-aura',{scale:1.03,autoAlpha:.42,duration:3.2,repeat:-1,yoyo:true,ease:'sine.inOut'});
  }

  if(journey){const glow=journey.querySelector('.v3-progress-glow');gs.to(glow,{width:'100%',autoAlpha:.72,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:.55}})}

  document.querySelectorAll('.v3-haze-dot').forEach((dot,i)=>gs.to(dot,{autoAlpha:gs.utils.random(.15,.58),x:gs.utils.random(-30,30),y:gs.utils.random(-48,18),scale:gs.utils.random(.7,1.4),duration:gs.utils.random(4.5,9.5),delay:i*.07,repeat:-1,yoyo:true,ease:'sine.inOut'}));

  document.querySelectorAll('.v3-edge-light').forEach((edge,i)=>{gs.to(edge,{autoAlpha:.58,duration:1.2,delay:.15*i,ease:'sine.out'});gs.to(edge,{opacity:.25,duration:3.4+i*.45,repeat:-1,yoyo:true,ease:'sine.inOut',delay:1+i*.2})});
  ST.refresh();
})();