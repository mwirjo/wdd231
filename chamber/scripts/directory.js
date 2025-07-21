const cards=document.querySelector("#cards"),gridBtn=document.querySelector("#grid-view"),listBtn=document.querySelector("#list-view");async function fetchMembers(){let e=await fetch("data/members.json"),s=await e.json();displayMembers(s)}function displayMembers(e){cards.innerHTML="",e.forEach(e=>{let s=document.createElement("section");s.classList.add("member-card"),s.innerHTML=`
      <img src="images/${e.image}" alt="${e.name} logo" width="200" height="200" loading="lazy">
      <h2>${e.name}</h2>
      <p>${e.address}</p>
      <p>${e.phone}</p>
      <a href="${e.website}" target="_blank">${e.website}</a>
    `,cards.appendChild(s)})}gridBtn.addEventListener("click",()=>{cards.classList.add("grid"),cards.classList.remove("list"),gridBtn.classList.add("active"),listBtn.classList.remove("active")}),listBtn.addEventListener("click",()=>{cards.classList.add("list"),cards.classList.remove("grid"),listBtn.classList.add("active"),gridBtn.classList.remove("active")}),fetchMembers();