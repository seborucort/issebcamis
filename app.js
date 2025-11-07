// ===== Datos iniciales (lista de productos) =====
const productos = [
  {id:1,name:'Arsenal — Equipación alternativa 2025/26',price:1299,img:'images/arsenal.jpg',desc:'Equipación alternativa 2025/26 — réplica de alta calidad.'},
  {id:2,name:'PSG — 4ª equipación 2024/25',price:1399,img:'images/psg.jpg',desc:'PSG cuarta equipación temporada 2024/25.'},
  {id:3,name:'FC Barcelona — Visitante 2024/25',price:1499,img:'images/barca.jpg',desc:'Equipación visitante FC Barcelona 2024/25.'},
  {id:4,name:'Tottenham — Visitante 2025/26',price:1299,img:'images/tottenham.jpg',desc:'Tottenham equipación visitante temporada 2025/26.'},
  {id:5,name:'Chelsea — Local 2025/26',price:1399,img:'images/chelsea.jpg',desc:'Chelsea equipación local temporada 2025/26.'},
  {id:6,name:'Manchester City — Alternativa 2023/24',price:1499,img:'images/mancity.jpg',desc:'Man City equipación alternativa 2023/24.'},
  {id:7,name:'Liverpool — Local 2025/26',price:1399,img:'images/liverpool.jpg',desc:'Liverpool equipación local temporada 2025/26.'},
  {id:8,name:'Inter — Local 2024/25',price:1299,img:'images/inter.jpg',desc:'Internazionale Milano equipación local 2024/25.'},
  {id:9,name:'Bayern — Alternativa 2024/25',price:1299,img:'images/bayern.jpg',desc:'Bayern Munich equipación alternativa 2024/25.'},
  {id:10,name:'Selección España — Local EUROCOPA 2024',price:1499,img:'images/spain.jpg',desc:'Selección España equipación local EUROCOPA 2024.'},
  {id:11,name:'Selección Argentina — Local Copa América 2024',price:1499,img:'images/argentina.jpg',desc:'Selección Argentina equipación local Copa América 2024.'},
  {id:12,name:'Selección Francia — Local Mundial Qatar 2022',price:1399,img:'images/france.jpg',desc:'Selección Francia equipación local Mundial Qatar 2022.'},
  {id:13,name:'Selección Inglaterra — Local EUROCOPA 2024',price:1399,img:'images/england.jpg',desc:'Selección Inglaterra equipación local EUROCOPA 2024.'},
  {id:14,name:'Villarreal CF — Local 2024/25',price:1199,img:'images/villarreal.jpg',desc:'Villarreal CF equipación local temporada 2024/25.'},
  {id:15,name:'Corea del Sur — Mundial 2022',price:1199,img:'images/korea.jpg',desc:'Selección República de Corea equipación local Mundial Qatar 2022.'},
  {id:16,name:'Japón — Mundial 2026',price:1199,img:'images/japan.jpg',desc:'Selección Japón equipación local Mundial Norteamérica 2026.'},
  {id:17,name:'Napoli — Local 2024/25',price:1299,img:'images/napoli.jpg',desc:'Napoli equipación local temporada 2024/25.'},
  {id:18,name:'Milan — Local 2025/26',price:1399,img:'images/milan.jpg',desc:'Milan equipación local temporada 2025/26.'},
  {id:19,name:'Atlético de Madrid — Alternativa 2024/25',price:1299,img:'images/atleti.jpg',desc:'Atlético de Madrid equipación alternativa 2024/25.'},
  {id:20,name:'Athletic Club — Visitante 2024/25',price:1199,img:'images/athletic.jpg',desc:'Athletic Club de Bilbao equipación visitante 2024/25.'},
  {id:21,name:'Borussia Dortmund — Local 2023/24',price:1199,img:'images/dortmund.jpg',desc:'Borussia Dortmund equipación local temporada 2023/24.'},
  {id:22,name:'Bayer Leverkusen — Local 2023/24',price:1199,img:'images/leverkusen.jpg',desc:'Bayer Leverkusen 04 equipación local temporada 2023/24.'},
  {id:23,name:'Manchester United — Local 2023/24',price:1399,img:'images/manutd.jpg',desc:'Manchester United equipación local temporada 2023/24.'},
  {id:24,name:'Guadalajara — Local 2025/26',price:1299,img:'images/chivas.jpg',desc:'Guadalajara equipación local temporada 2025/26.'},
  {id:25,name:'Cruz Azul — Local 2024/25',price:1199,img:'images/cruzazul.jpg',desc:'Cruz Azul equipación local temporada 2024/25.'},
  {id:26,name:'Toluca — Local 2024/25',price:1199,img:'images/toluca.jpg',desc:'Toluca equipación local temporada 2024/25.'},
  {id:27,name:'Monterrey — Local 2024/25',price:1299,img:'images/monterrey.jpg',desc:'Monterrey Rayados equipación local temporada 2024/25.'},
  {id:28,name:'Xolos de Tijuana — Visitante 2024/25',price:1099,img:'images/xolos.jpg',desc:'Xolos de Tijuana equipación visitante temporada 2024/25.'},
  {id:29,name:'Pumas — Visitante 2024/25',price:1099,img:'images/pumas.jpg',desc:'Universidad Nacional equipación visitante temporada 2024/25.'}
];

// ===== Render productos =====
const grid = document.getElementById('productGrid');
productos.forEach(p=>{
  const el = document.createElement('div');
  el.className='card';
  el.innerHTML = `
    <img src="${p.img}" alt="${p.name}" onerror="this.src='images/placeholder.jpg'"/>
    <h3>${p.name}</h3>
    <div class='small'>${p.desc}</div>
    <div style='display:flex;justify-content:space-between;align-items:center;margin-top:10px'>
      <div class='price'>$${p.price}</div>
      <div><button class='btn secondary' onclick='openProduct(${p.id})'>Personalizar</button></div>
    </div>
  `;
  grid.appendChild(el);
});

// ===== Modal logic =====
let currentProduct=null;
function openProduct(id){
  const p = productos.find(x=>x.id===id);
  currentProduct = p;
  document.getElementById('pmTitle').innerText = p.name;
  document.getElementById('pmImg').src = p.img;
  document.getElementById('pmDesc').innerText = p.desc;
  document.getElementById('pmPrice').innerText = '$'+p.price;
  document.getElementById('productModal').classList.add('open');
}
function closeModal(){
  document.getElementById('productModal').classList.remove('open');
}

// ===== Carrito simple (local-only) =====
let cart = [];

function addToCart(){
  const size = document.getElementById('pmSize').value;
  const name = document.getElementById('pmName').value.trim();
  const number = document.getElementById('pmNumber').value.trim();
  const patchEls = Array.from(document.querySelectorAll('#productModal input[type=checkbox]:checked'));
  const patches = patchEls.map(x=>x.value);
  const item = {
    id: Date.now(),
    product: currentProduct,
    size,
    name,
    number,
    patches,
    price: currentProduct.price + patches.length * 150
  };
  cart.push(item);
  updateCartUI();
  closeModal();
  alert('Producto agregado al carrito. Revisa el carrito abajo a la derecha.');
}

function updateCartUI(){
  document.getElementById('cartCount').innerText = cart.length;
  const items = document.getElementById('cartItems');
  items.innerHTML = '';
  let total = 0;
  cart.forEach(it=>{
    total += it.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src='${it.product.img}' onerror="this.src='images/placeholder.jpg'"/>
      <div style='flex:1'>
        <div style='font-weight:700'>${it.product.name}</div>
        <div class='small'>Talla:${it.size} ${it.name?('• '+it.name):''} ${it.number?('#'+it.number):''}</div>
      </div>
      <div style='text-align:right'>
        <div class='price'>$${it.price}</div>
        <div class='small'><button class='btn secondary' onclick='removeItem(${it.id})'>Eliminar</button></div>
      </div>
    `;
    items.appendChild(div);
  });
  document.getElementById('cartTotal').innerText = '$' + total;
  document.getElementById('cartCount').innerText = cart.length;
}

function removeItem(id){
  cart = cart.filter(i=>i.id!==id);
  updateCartUI();
}

function clearCart(){
  if(confirm('Vaciar carrito?')){
    cart = [];
    updateCartUI();
  }
}

function openCart(){
  const pane = document.getElementById('cartPane');
  pane.style.display = 'block';
  pane.scrollIntoView({behavior:'smooth',block:'end'});
}

function checkout(){
  if(cart.length===0){
    alert('El carrito está vacío.');
    return;
  }
  alert('Simulación de pago: se generó un pedido. (Funcionalidad real requiere pasarela).');
  cart = [];
  updateCartUI();
}

// ===== Contact form handler =====
function handleContact(e){
  e.preventDefault();
  alert('Gracias por contactarnos. Te responderemos pronto.');
  document.getElementById('contactForm').reset();
}

// ===== Search =====
document.getElementById('searchInput').addEventListener('input',function(){
  const q = this.value.toLowerCase();
  document.querySelectorAll('#productGrid .card').forEach(card=>{
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(q)?'block':'none';
  });
});

// ===== Inicializa =====
updateCartUI();
