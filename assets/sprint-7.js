(()=>{
  if(window.__agusSprint7)return;
  window.__agusSprint7=true;

  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gs=window.gsap;

  const css=`
  .journey7{position:fixed;z-index:26;top:14px;left:50%;transform:translateX(-50%);width:min(680px,calc(100% - 28px));padding:8px 10px;border:1px solid rgba(255,255,255,.4);border-radius:999px;background:rgba(255,252,239,.66);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 10px 30px rgba(35,58,34,.09)}
  .journey7-track{position:relative;display:grid;grid-template-columns:repeat(5,1fr);align-items:center}.journey7-track:before,.journey7-progress{content:"";position:absolute;left:8%;right:8%;top:50%;height:2px;transform:translateY(-50%);border-radius:99px}.journey7-track:before{background:rgba(69,91,57,.13)}.journey7-progress{right:auto;width:0;background:linear-gradient(90deg,#f1bc2f,#f49520);box-shadow:0 0 12px rgba(244,149,32,.22);transition:width .25s ease}.journey7-dot{position:relative;z-index:1;justify-self:center;width:11px;height:11px;border:2px solid rgba(71,92,58,.28);border-radius:50%;background:#fff9e8;transition:transform .25s ease,background .25s ease,border-color .25s ease}.journey7-dot.active{transform:scale(1.22);border-color:#d79c20;background:#ffd95f}.journey7-dot.done{border-color:#d79c20;background:#f5bd2c}.journey7-label{position:absolute;top:16px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:.62rem;font-weight:750;letter-spacing:.04em;color:#64705c;opacity:0;transition:opacity .2s ease}.journey7-dot.active .journey7-label{opacity:1}
  .scene{--golden7:0}.scene:before{content:"";position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(180deg,rgba(255,193,91,0),rgba(255,180,73,.2) 48%,rgba(116,74,43,.12));opacity:var(--golden7);mix-blend-mode:soft-light;transition:opacity .25s linear}
  .butterfly7{position:absolute;z-index:3;width:24px;height:18px;opacity:.7;filter:drop-shadow(0 4px 5px rgba(58,66,32,.1));animation:fly7 16s ease-in-out infinite}.butterfly7:before,.butterfly7:after{content:"";position:absolute;top:2px;width:12px;height:14px;background:linear-gradient(145deg,rgba(255,225,116,.94),rgba(244,149,32,.74));border-radius:80% 30% 70% 35%;transform-origin:100% 70%;animation:wing7 .75s ease-in-out infinite alternate}.butterfly7:before{left:0;transform:rotate(22deg)}.butterfly7:after{right:0;transform:scaleX(-1) rotate(22deg)}.butterfly7.b2{top:34%;left:72%;transform:scale(.72);animation-duration:21s;animation-delay:-8s}.butterfly7.b1{top:44%;left:16%;animation-delay:-2s}@keyframes wing7{to{transform:rotateY(65deg) rotate(9deg)}}@keyframes fly7{0%,100%{translate:-8px 10px;rotate:-5deg}25%{translate:48px -28px;rotate:7deg}55%{translate:92px 8px;rotate:-4deg}78%{translate:32px 30px;rotate:5deg}}
  .signature7{display:block;width:190px;max-width:70%;height:22px;margin-top:6px;overflow:visible}.signature7 path{fill:none;stroke:#c58b21;stroke-width:2.2;stroke-linecap:round;stroke-dasharray:280;stroke-dashoffset:280;opacity:.72}.signature7.drawn path{animation:draw7 1.5s cubic-bezier(.22,.7,.21,1) forwards}@keyframes draw7{to{stroke-dashoffset:0}}
  .seed-meter7{display:inline-flex;align-items:center;gap:9px;margin:0 auto 22px;padding:8px 13px;border-radius:999px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.14);color:rgba(255,249,226,.86);font-size:.82rem}.seed-meter7 b{min-width:1.6ch;color:#ffd95f;font-size:1.05rem}.seed-meter7.pulse{animation:meter7 .45s ease}@keyframes meter7{50%{transform:scale(1.06);background:rgba(255,215,95,.15)}}
  .hug7{margin-top:24px;color:#35482f;background:linear-gradient(180deg,#ffe383,#f5c744);box-shadow:0 12px 34px rgba(112,80,17,.18)}.hug-wave7{position:fixed;z-index:24;left:50%;top:50%;width:20px;height:20px;transform:translate(-50%,-50%);border-radius:50%;pointer-events:none;border:2px solid rgba(255,225,122,.68);box-shadow:0 0 80px 25px rgba(255,219,105,.18)}.petal7{position:fixed;z-index:25;width:10px;height:18px;border-radius:80% 80% 50% 50%;pointer-events:none;background:linear-gradient(90deg,#e4a71e,#ffd75b)}
  .fireflies7{position:fixed;inset:0;z-index:4;pointer-events:none;overflow:hidden;opacity:0;transition:opacity .9s ease}.fireflies7.on{opacity:1}.firefly7{position:absolute;width:4px;height:4px;border-radius:50%;background:#ffe98c;box-shadow:0 0 9px 3px rgba(255,221,103,.55);animation:firefly7 var(--fd) ease-in-out var(--delay) infinite alternate}@keyframes firefly7{to{transform:translate(var(--fx),var(--fy)) scale(.7);opacity:.35}}body.evening7 .scene{background:linear-gradient(180deg,#69a9d0 0%,#d8d0aa 44%,#c9b576 69%,#597746 100%)}body.evening7 .sun-glow{background:radial-gradient(circle,rgba(255,226,143,.8),rgba(244,149,32,.15) 48%,transparent 72%)}body.evening7 .grain{opacity:.045}
  @media(max-width:640px){.journey7{top:8px;padding:7px 8px}.journey7-label{display:none}.butterfly7{opacity:.5}.seed-meter7{font-size:.78rem}.hug7{width:100%;max-width:320px}}
  @media(prefers-reduced-motion:reduce){.butterfly7,.firefly7{animation:none!important}.journey7-progress{transition:none}.signature7 path{stroke-dashoffset:0}.hug-wave7{display:none}}
  `;
  const style=document.createElement('style');style.id='sprint7Styles';style.textContent=css;document.head.append(style);

  const grain=document.querySelector('.grain');
  if(grain){grain.insertAdjacentHTML('afterend','<div class="journey7" id="journey7" aria-label="Progreso del recorrido"><div class="journey7-track"><span class="journey7-progress" id="journey7Progress"></span><span class="journey7-dot active"><span class="journey7-label">Inicio</span></span><span class="journey7-dot"><span class="journey7-label">Carta</span></span><span class="journey7-dot"><span class="journey7-label">Admiro</span></span><span class="journey7-dot"><span class="journey7-label">Campo</span></span><span class="journey7-dot"><span class="journey7-label">Final</span></span></div></div><div class="fireflies7" id="fireflies7" aria-hidden="true"></div>')}

  const scene=document.querySelector('.scene');
  if(scene){scene.insertAdjacentHTML('beforeend','<span class="butterfly7 b1" aria-hidden="true"></span><span class="butterfly7 b2" aria-hidden="true"></span>')}

  const signature=document.querySelector('.signature');
  if(signature){signature.insertAdjacentHTML('beforeend','<svg class="signature7" id="signature7" viewBox="0 0 190 22" aria-hidden="true"><path d="M3 13 C32 3,54 19,78 10 S124 6,150 11 C163 13,174 9,187 5"/></svg>')}

  const gardenActions=document.querySelector('.garden-card .actions');
  if(gardenActions){gardenActions.insertAdjacentHTML('beforebegin','<div class="seed-meter7" id="seedMeter7" aria-live="polite">Girasoles sembrados: <b id="seedCount7">0</b></div>')}

  const finalBox=document.querySelector('.final > div');
  if(finalBox){finalBox.insertAdjacentHTML('beforeend','<button class="btn hug7" id="hug7" type="button">Mandarte un abrazo</button>')}

  const sections=[...document.querySelectorAll('.hero,.letter-wrap,.admire,.garden,.final')];
  const dots=[...document.querySelectorAll('.journey7-dot')];
  const progress=document.querySelector('#journey7Progress');
  function updateJourney(){
    if(!sections.length||!progress)return;
    const center=scrollY+innerHeight*.46;let idx=0;
    sections.forEach((sec,i)=>{if(center>=sec.offsetTop)idx=i});
    dots.forEach((dot,i)=>{dot.classList.toggle('active',i===idx);dot.classList.toggle('done',i<idx)});
    progress.style.width=`${idx/(dots.length-1)*84}%`;
    const max=Math.max(1,document.documentElement.scrollHeight-innerHeight),ratio=Math.min(1,scrollY/max);
    scene?.style.setProperty('--golden7',(ratio*.9).toFixed(3));
  }
  addEventListener('scroll',updateJourney,{passive:true});updateJourney();

  const flourish=document.querySelector('#signature7');
  if(flourish){
    if('IntersectionObserver'in window&&!reduced){new IntersectionObserver((entries,obs)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('drawn');obs.disconnect()}})},{threshold:.5}).observe(flourish)}
    else flourish.classList.add('drawn');
  }

  function burst7(x=innerWidth/2,y=innerHeight/2,n=18){
    for(let i=0;i<n;i++){
      const p=document.createElement('span');p.className='petal7';p.style.left=x+'px';p.style.top=y+'px';document.body.append(p);
      if(gs&&!reduced){gs.to(p,{x:gs.utils.random(-180,180),y:gs.utils.random(-225,155),rotation:gs.utils.random(-500,500),scale:gs.utils.random(.55,1.18),autoAlpha:0,duration:gs.utils.random(1.35,2.15),ease:'power2.out',onComplete:()=>p.remove()})}
      else{p.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${Math.random()*180-90}px,${Math.random()*-130}px) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:900,fill:'forwards'}).finished.finally(()=>p.remove())}
    }
  }

  function notify7(msg){
    const toast=document.querySelector('#toast');if(!toast)return;toast.textContent=msg;
    if(gs&&!reduced){gs.killTweensOf(toast);gs.to(toast,{y:-6,duration:.3,ease:'power2.out'});setTimeout(()=>gs.to(toast,{y:120,duration:.4,ease:'power2.in'}),2300)}
  }

  let seedTotal=0;const seedCount=document.querySelector('#seedCount7'),seedMeter=document.querySelector('#seedMeter7');
  function registerSeed(){
    seedTotal++;if(seedCount)seedCount.textContent=seedTotal;
    if(seedMeter){seedMeter.classList.remove('pulse');void seedMeter.offsetWidth;seedMeter.classList.add('pulse')}
    if(seedTotal===3)notify7('Tres girasoles. Ya parece un pequeño jardín.');
    else if(seedTotal===7)notify7('Siete girasoles para siete motivos de orgullo.');
    else if(seedTotal===12)notify7('Agus se ganó un campo entero.');
  }
  document.querySelector('#plant')?.addEventListener('click',registerSeed);
  document.addEventListener('click',e=>{if(e.target.closest('button,a,.letter,.garden-card,.admire-panel,.message-box'))return;if(e.clientY<80)return;registerSeed()});

  function lightFireflies(){
    const host=document.querySelector('#fireflies7');if(!host)return;
    if(host.children.length===0){const frag=document.createDocumentFragment();for(let i=0;i<(innerWidth<640?14:24);i++){const f=document.createElement('i');f.className='firefly7';f.style.left=`${Math.random()*100}%`;f.style.top=`${20+Math.random()*75}%`;f.style.setProperty('--fd',`${4+Math.random()*6}s`);f.style.setProperty('--delay',`${-Math.random()*6}s`);f.style.setProperty('--fx',`${-30+Math.random()*60}px`);f.style.setProperty('--fy',`${-50+Math.random()*90}px`);frag.append(f)}host.append(frag)}
    host.classList.add('on');document.body.classList.add('evening7');
  }

  document.querySelector('#surprise')?.addEventListener('click',()=>{lightFireflies();setTimeout(updateJourney,650)});

  document.querySelector('#hug7')?.addEventListener('click',e=>{
    const wave=document.createElement('span');wave.className='hug-wave7';document.body.append(wave);
    const r=e.currentTarget.getBoundingClientRect();burst7(r.left+r.width/2,r.top+r.height/2,28);lightFireflies();document.querySelector('#final')?.classList.add('lit');notify7('Un abrazo enorme, Agus. Te quiero.');
    if(gs&&!reduced){gs.fromTo(wave,{scale:.2,autoAlpha:.9},{scale:38,autoAlpha:0,duration:1.25,ease:'power2.out',onComplete:()=>wave.remove()})}else setTimeout(()=>wave.remove(),800)
  });
})();