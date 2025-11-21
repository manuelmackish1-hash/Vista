document.addEventListener('DOMContentLoaded', ()=>{
  const list = document.getElementById('property-list');
  fetch('listings.json').then(r=>r.json()).then(data=>{
    data.listings.forEach(p=>{
      const el = document.createElement('article'); el.className='card';
      el.innerHTML = `<div class="card-img" style="background-image:url('${p.image}')"></div><div class="property-info"><h3>${p.title}</h3><div>${p.location}</div><div class="price">${p.price>=1000? 'KES ' + Number(p.price).toLocaleString(): p.price}</div><p style="margin-top:8px">${p.description}</p></div>`;
      list.appendChild(el);
    });
  }).catch(e=>{ list.innerHTML = '<p>Failed to load properties.</p>'; console.error(e)});
});
