document.querySelectorAll('.fb').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.fb').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.f;document.querySelectorAll('.pi').forEach(p=>p.style.display=(f==='all'||p.dataset.cat===f)?'':'none')}));

document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();
const btn=f.querySelector('button'),ok=document.getElementById('ok'),msg=document.getElementById('okmsg'),t=btn?btn.textContent:'';
if(btn){btn.disabled=true;btn.textContent='Sending...'}
const d=new FormData(f);d.append('_subject','New enquiry from your portfolio website');d.append('_template','table');d.append('_captcha','false');
try{const r=await fetch('https://formsubmit.co/ajax/manishasharma78519@gmail.com',{method:'POST',headers:{'Accept':'application/json'},body:d});const j=await r.json();
if(r.ok&&(j.success===true||j.success==='true')){if(msg){msg.className='alert alert-success mb-0';msg.textContent='Thank you! Your message has been sent. I will contact you within 24 hours.'}f.reset()}else throw 0}
catch(x){if(msg){msg.className='alert alert-danger mb-0';msg.innerHTML='Sorry, message could not be sent. Please email <a href="mailto:manishasharma78519@gmail.com">manishasharma78519@gmail.com</a> or WhatsApp me.'}}
if(ok)ok.classList.remove('d-none');if(btn){btn.disabled=false;btn.textContent=t}}));
