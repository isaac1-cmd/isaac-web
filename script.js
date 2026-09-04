/* EDIT YOUR WEBSITE HERE */
const DATA={
  contactEmail:"blakmixedentertainment@gmail.com",
  ads:[
    ["NEXT EVENT • NIGHTLIFER — ALL WHITE AFFAIR","#events"],
    ["TICKETS • PARTNERSHIPS • VENDOR SPACE","#join"],
    ["BLAKMIXED ENTERTAINMENT • MEDIA • EVENTS • FASHION","#services"]
  ],
  aboutGallery:["asset-24.webp","image-3.webp","event-127.webp","asset-26.webp","asset-21.webp","event-1.webp","event-3.webp","asset-8.webp"],
  pastEvents:[
    {title:"NightLifer",category:"All Black Affair",date:"PAST EVENT",image:"nightlifer.webp",desc:"A nightlife experience built around energy, style and unforgettable moments."},
    {title:"Wave of Romance",category:"Entertainment",date:"PAST EVENT",image:"wave-of-romance.webp",desc:"Music, people and atmosphere brought together under one roof."},
    {title:"D'BOLD STEP",category:"Events & Culture",date:"PAST EVENT",image:"bold-step.webp",desc:"A creative experience connecting entertainment and culture."}
  ],
  upcoming:{title:"NightLifer — All White Affair",desc:"Not Everyone Is a NightLifer. Are You? Get ready for the next chapter of the NightLifer experience.",date:"COMING SOON",location:"Port Harcourt, Nigeria",image:"image-5.webp",ticketUrl:"#"},
  gallery:["asset-24.webp","asset-23.webp","event-127.webp","asset-26.webp","asset-28.webp","image-2.webp","event-3.webp","image-4.webp","event-2.webp","event-57.webp","event-68.webp","okay.webp","asset-16.webp","part.webp","asset-27.webp","image-1.webp"]
};

function render(){
  const ad=document.getElementById("adTrack");
  ad.innerHTML=[...DATA.ads,...DATA.ads].map(x=>`<a href="${x[1]}">${x[0]}</a>`).join("");
  document.getElementById("aboutGallery").innerHTML=DATA.aboutGallery.map(x=>`<img src="${x}" alt="BLAKMIXED event moment" loading="lazy" decoding="async">`).join("");
  document.getElementById("pastEvents").innerHTML=DATA.pastEvents.map(e=>`<article class="event"><div class="eventimg" style="background-image:url('${e.image}')"></div><div class="eventinfo"><small>${e.date}</small><h3>${e.title}</h3><p>${e.category} — ${e.desc}</p></div></article>`).join("");
  const u=DATA.upcoming;
  document.getElementById("upTitle").textContent=u.title;document.getElementById("upDesc").textContent=u.desc;document.getElementById("upDate").textContent=u.date;document.getElementById("upLocation").textContent=u.location;document.getElementById("upImage").style.backgroundImage=`url('${u.image}')`;document.getElementById("ticket").href=u.ticketUrl;
  document.getElementById("album").innerHTML=DATA.gallery.map(x=>`<img src="${x}" alt="BLAKMIXED archive photo" loading="lazy" decoding="async">`).join("");
  document.getElementById("year").textContent=new Date().getFullYear();
}
function mail(form){
  const fd=new FormData(form);const subject=`BME Website Enquiry — ${fd.get("interest")||fd.get("role")||"General"}`;
  const body=[...fd.entries()].map(x=>x.join(": ")).join("\n");
  location.href=`mailto:${DATA.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
document.getElementById("contactForm").onsubmit=e=>{e.preventDefault();mail(e.currentTarget)};
document.getElementById("joinForm").onsubmit=e=>{e.preventDefault();mail(e.currentTarget)};
document.querySelectorAll(".joinlist button").forEach(b=>b.onclick=()=>{document.getElementById("role").value=b.dataset.role;document.getElementById("modalTitle").textContent=b.dataset.role==="Contact"?"Let's connect.":`Join as a ${b.dataset.role}.`;document.getElementById("modal").classList.add("open")});
document.getElementById("close").onclick=()=>document.getElementById("modal").classList.remove("open");
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("open")};
document.getElementById("hamburger").onclick=()=>{const n=document.getElementById("nav");n.style.display=n.style.display==="flex"?"":"flex"};
render();
document.getElementById('ticket').onclick=function(){
 document.getElementById('ticketModal').classList.add('open');
};
document.getElementById('ticketModal').onclick=function(e){
 if(e.target.id==='ticketModal') this.classList.remove('open');
};


async function saveContact(form){
 const fd=new FormData(form);
 const payload={
  name:fd.get('name'),
  email:fd.get('email'),
  phone:fd.get('phone'),
  interest:fd.get('interest'),
  message:fd.get('message')
 };
 const {error}=await window.supabase.from('contact_enquiries').insert(payload);
 if(error){alert('Error: '+error.message);return;}
 alert('Message submitted successfully.');
 form.reset();
}

async function saveJoin(form){
 const fd=new FormData(form);
 const payload={
  role:fd.get('role'),
  name:fd.get('name'),
  email:fd.get('email'),
  phone:fd.get('phone'),
  organization:fd.get('organization'),
  message:fd.get('message')
 };
 const {error}=await window.supabase.from('join_enquiries').insert(payload);
 if(error){alert('Error: '+error.message);return;}
 alert('Application submitted successfully.');
 form.reset();
}

document.getElementById("contactForm").onsubmit=async e=>{
 e.preventDefault(); await saveContact(e.currentTarget);
};

document.getElementById("joinForm").onsubmit=async e=>{
 e.preventDefault(); await saveJoin(e.currentTarget);
};
