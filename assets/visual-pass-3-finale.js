(()=>{
  if(window.__agusV3Finale)return;
  window.__agusV3Finale=true;
  const gs=window.gsap,ST=window.ScrollTrigger;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!gs||!ST||reduced)return;
  gs.registerPlugin(ST);
  const desktop=matchMedia('(min-width:821px)').matches;
  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;

  const style=document.createElement('style');
  style.id='v3FinaleStyles';
  style.textContent=`
    .v3-final-core,.v3-final-ring,.v3-final-ring-b,.v3-final-sweep,.v3-final-stars,.v3-final-rays{position:absolute;left:50%;top:50%;pointer-events:none;z-index:0;will-change:transform,opacity}
    .v3-final-core{width:min(62vw,620px);aspect-ratio:1;transform:translate(-50%,-50%) scale(.45);border-radius:50%;opacity:0;background:radial-gradient(circle,rgba(255,248,207,.34),rgba(255,215,90,.12) 40%,rgba(244,149,32,.05) 62%,transparent 76%);filter:blur(18px)}
    .v3-final-ring,.v3-final-ring-b{width:min(78vw,800px);aspect-ratio:1;transform:translate(-50%,-50%) scale(.68);border-radius:50%;opacity:0;border:1px solid rgba(255,225,136,.2);box-shadow:0 0 0 24px rgba(255,225,136,.018),0 0 0 52px rgba(244,149,32,.012)}.v3-final-ring-b{width:min(58vw,610px);border-color:rgba(249,133,122,.14);box-shadow:none}
    .v3-final-sweep{width:min(105vw,1200px);height:46%;transform:translate(-50%,-50%) rotate(-9deg);opacity:0;background:linear-gradient(90deg,transparent,rgba(255,243,200,.05) 34%,rgba(255,220,127,.24) 49%,rgba(255,243,200,.05) 64%,transparent);filter:blur(12px);mix-blend-mode:screen}
    .v3-final-rays{width:min(98vw,1100px);aspect-ratio:1;transform:translate(-50%,-50%) scale(.6);opacity:0;background:repeating-conic-gradient(from 0deg,rgba(255,233,139,.14) 0 1deg,transparent 1deg 7deg);-webkit-mask-image:radial-gradient(circle,transparent 0 18%,#000 34% 60%,transparent 79%);mask-image:radial-gradient(circle,transparent 0 18%,#000 34% 60%,transparent 79%)}
    .v3-final-stars{inset:0;left:0;top:0}.v3-star{position:absolute;width:3px;height:3px;border-radius:50%;background:#fff2b0;box-shadow:0 0 10px 3px rgba(255,225,124,.38);opacity:0;will-change:transform,opacity}
    .v3-button-sheen{position:absolute;inset:-35% -65%;pointer-events:none;background:linear-gradient(105deg,transparent 36%,rgba(255,255,255,.5) 49%,transparent 62%);transform:translateX(-58%) skewX(-18deg);opacity:0}.btn{position:relative;overflow:hidden}.btn>*{position:relative;z-index:1}
    .v3-signature-glow{position:absolute;left:0;right:0;bottom:-10px;height:28px;pointer-events:none;background:radial-gradient(ellipse,rgba(244,187,44,.16),transparent 70%);filter:blur(8px);opacity:0}
    .v3-garden-orbit{position:absolute;z-index:0;left:50%;top:50%;width:84%;aspect-ratio:1;transform:translate(-50%,-50%) scale(.7);border:1px solid rgba(255,227,150,.09);border-radius:50%;opacity:0;pointer-events:none}.v3-garden-orbit.o2{width:68%;border-color:rgba(249,133,122,.075)}
    .v3-message-glow{position:absolute;inset:-14%;z-index:0;border-radius:30px;pointer-events:none;background:radial-gradient(circle at 50% 50%,rgba(255,221,108,.11),transparent 68%);opacity:0;filter:blur(12px)}
    .v3-progress-pulse{position:absolute;left:50%;top:50%;width:16px;height:16px;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(255,218,93,.34);opacity:0;pointer-events:none}
    @media(max-width:820px){.v3-final-ring{width:105vw}.v3-final-ring-b{width:82vw}.v3-final-sweep{width:140vw}.v3-final-rays{width:138vw}}
    @media(max-width:640px){.v3-star:nth-child(n+10){display:none}.v3-garden-orbit.o2{display:none}.v3-button-sheen{opacity:.35}}
  `;
  document.head.append(style);

  const final=document.querySelector('.final');
  const finalBox=document.querySelector('.final > div');
  const garden=document.querySelector('.garden');
  const gardenCard=document.querySelector('.garden-card');
  const messageBox=document.querySelector('.message-box');
  const signature=document.querySelector('.signature');
  const journey=document.querySelector('.journey7-track');

  if(final){
    final.insertAdjacentHTML('afterbegin','<div class="v3-final-core" aria-hidden="true"></div><div class="v3-final-ring" aria-hidden="true"></div><div class="v3-final-ring-b" aria-hidden="true"></div><div class="v3-final-sweep" aria-hidden="true"></div><div class="v3-final-rays" aria-hidden="true"></div><div class="v3-final-stars" aria-hidden="true"></div>');
    const stars=final.querySelector('.v3-final-stars'),frag=document.createDocumentFragment(),count=desktop?20:9;
    for(let i=0;i<count;i++){const star=document.createElement('i');star.className='v3-star';star.style.left=`${8+Math.random()*84}%`;star.style.top=`${10+Math.random()*76}%`;frag.append(star)}stars.append(frag);
  }
  if(gardenCard)gardenCard.insertAdjacentHTML('afterbegin','<span class="v3-garden-orbit" aria-hidden="true"></span><span class="v3-garden-orbit o2" aria-hidden="true"></span>');
  if(messageBox)messageBox.insertAdjacentHTML('afterbegin','<span class="v3-message-glow" aria-hidden="true"></span>');
  if(signature){signature.style.position='relative';signature.insertAdjacentHTML('beforeend','<span class="v3-signature-glow" aria-hidden="true"></span>')}
  if(journey)journey.insertAdjacentHTML('beforeend','<span class="v3-progress-pulse" aria-hidden="true"></span>');
  document.querySelectorAll('.btn').forEach(btn=>{if(!btn.querySelector('.v3-button-sheen'))btn.insertAdjacentHTML('afterbegin','<span class="v3-button-sheen" aria-hidden="true"></span>')});

  if(garden&&gardenCard){
    gs.fromTo('.v3-garden-orbit',{scale:.62,autoAlpha:0},{scale:1.08,autoAlpha:.7,ease:'none',scrollTrigger:{trigger:garden,start:'top 80%',end:'center 48%',scrub:1.1}});
    gs.fromTo('.v3-garden-orbit.o2',{scale:.54,rotation:-22,autoAlpha:0},{scale:1,rotation:24,autoAlpha:.52,ease:'none',scrollTrigger:{trigger:garden,start:'top 78%',end:'center 42%',scrub:1.3}});
    gs.to('.v3-garden-orbit:not(.o2)',{rotation:'+=360',duration:76,repeat:-1,ease:'none'});
    gs.to('.v3-garden-orbit.o2',{rotation:'-=360',duration:94,repeat:-1,ease:'none'});
    gs.fromTo(gardenCard,{filter:'brightness(.97) saturate(.96)'},{filter:'brightness(1.045) saturate(1.04)',ease:'none',scrollTrigger:{trigger:gardenCard,start:'top 80%',end:'center 50%',scrub:.8}});
  }

  if(messageBox){
    gs.fromTo('.v3-message-glow',{scale:.75,autoAlpha:0},{scale:1.08,autoAlpha:.9,ease:'none',scrollTrigger:{trigger:messageBox,start:'top 82%',end:'bottom 48%',scrub:.7}});
    gs.to('.message-sun',{rotation:'+=360',duration:34,repeat:-1,ease:'none'});
    gs.to('.message-sun',{scale:1.08,duration:2.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
  }

  if(signature){
    gs.fromTo('.v3-signature-glow',{scaleX:.5,autoAlpha:0},{scaleX:1.15,autoAlpha:.86,ease:'none',scrollTrigger:{trigger:signature,start:'top 82%',end:'bottom 56%',scrub:.7}});
    const sig=document.querySelector('.signature7');if(sig)gs.to(sig,{filter:'drop-shadow(0 4px 9px rgba(197,139,33,.18))',duration:1.1,scrollTrigger:{trigger:signature,start:'top 76%',once:true}});
  }

  document.querySelectorAll('.btn').forEach((btn,i)=>{
    const sheen=btn.querySelector('.v3-button-sheen');
    if(!sheen)return;
    gs.fromTo(sheen,{xPercent:-40,autoAlpha:0},{xPercent:190,autoAlpha:.68,duration:1.05,delay:.35+i*.08,ease:'power2.inOut',scrollTrigger:{trigger:btn,start:'top 90%',once:true}});
    if(fine){btn.addEventListener('pointerenter',()=>gs.fromTo(sheen,{xPercent:-45,autoAlpha:0},{xPercent:190,autoAlpha:.8,duration:.72,ease:'power2.out'}))}
  });

  if(journey){
    const pulse=journey.querySelector('.v3-progress-pulse');
    gs.to(pulse,{autoAlpha:.55,scale:2.4,duration:1.8,repeat:-1,ease:'power2.out'});
    gs.to(pulse,{xPercent:desktop?1850:1150,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:.5}});
  }

  if(final&&finalBox){
    const fin=gs.timeline({scrollTrigger:{trigger:final,start:'top 80%',end:'center 40%',scrub:1.02}});
    fin.fromTo('.v3-final-core',{scale:.42,autoAlpha:0},{scale:1.14,autoAlpha:.96,ease:'power2.out'},0)
       .fromTo('.v3-final-ring',{scale:.56,rotation:-26,autoAlpha:0},{scale:1.1,rotation:14,autoAlpha:.78,ease:'power2.out'},0)
       .fromTo('.v3-final-ring-b',{scale:.48,rotation:24,autoAlpha:0},{scale:1.04,rotation:-16,autoAlpha:.58,ease:'power2.out'},.04)
       .fromTo('.v3-final-rays',{scale:.52,rotation:-14,autoAlpha:0},{scale:1.06,rotation:16,autoAlpha:.68,ease:'power2.out'},.02)
       .fromTo('.v3-final-sweep',{xPercent:-42,autoAlpha:0},{xPercent:42,autoAlpha:.8,ease:'power2.inOut'},.08)
       .fromTo(finalBox,{scale:.968,filter:'brightness(.95) saturate(.94)'},{scale:1.016,filter:'brightness(1.075) saturate(1.055)',ease:'power2.out'},0);
    gs.to('.v3-final-ring',{rotation:'+=360',duration:72,repeat:-1,ease:'none'});
    gs.to('.v3-final-ring-b',{rotation:'-=360',duration:93,repeat:-1,ease:'none'});
    gs.to('.v3-final-rays',{rotation:'+=360',duration:110,repeat:-1,ease:'none'});
    gs.to('.v3-final-core',{scale:1.07,autoAlpha:.84,duration:3.2,repeat:-1,yoyo:true,ease:'sine.inOut'});
    document.querySelectorAll('.v3-star').forEach((star,i)=>gs.to(star,{autoAlpha:gs.utils.random(.3,.92),scale:gs.utils.random(.7,1.7),x:gs.utils.random(-16,16),y:gs.utils.random(-24,18),duration:gs.utils.random(2,4.8),delay:i*.075,repeat:-1,yoyo:true,ease:'sine.inOut'}));
    const heading=final.querySelector('h2');if(heading){gs.fromTo(heading,{letterSpacing:'-.065em',textShadow:'0 12px 42px rgba(32,58,34,.32)'},{letterSpacing:'-.045em',textShadow:'0 12px 52px rgba(255,213,96,.18),0 14px 42px rgba(32,58,34,.3)',ease:'none',scrollTrigger:{trigger:heading,start:'top 82%',end:'bottom 48%',scrub:.8}})}
  }

  const finalSurprise=document.querySelector('#surprise');
  if(finalSurprise&&final){
    finalSurprise.addEventListener('click',()=>{
      gs.fromTo('.v3-final-core',{scale:.78,autoAlpha:.35},{scale:1.34,autoAlpha:1,duration:1.2,ease:'expo.out'});
      gs.fromTo('.v3-final-rays',{scale:.72,rotation:-18,autoAlpha:.18},{scale:1.24,rotation:25,autoAlpha:.82,duration:1.5,ease:'power3.out'});
      gs.fromTo('.v3-star',{scale:.3,autoAlpha:0},{scale:1.5,autoAlpha:.9,duration:.8,stagger:{each:.025,from:'random'},yoyo:true,repeat:1,ease:'back.out(2)'});
    });
  }
  const hug=document.querySelector('#hug7');
  if(hug&&final){hug.addEventListener('click',()=>gs.fromTo(finalBox,{scale:.985},{scale:1.025,duration:.45,yoyo:true,repeat:1,ease:'sine.inOut'}))}

  ST.refresh();
})();