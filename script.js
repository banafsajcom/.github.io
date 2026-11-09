const CFG={PASS:"Jawad70900422me",SHIP:5,FREE:100}; // كلمة مرور الإدارة
const S={email:"combanafsaj@gmail.com",phone:"+961 70900422",wa:"96170900422",whish:"+961 70900422",discOn:true,pct:40}; // قابلة للتعديل من لوحة الإدارة
const U=id=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;
const EMO={Electronics:"📱",Fashion:"👕",Accessories:"👜",Perfumes:"🧴"};
const COL=[["أسود","Black"],["أبيض","White"],["فضي","Silver"],["أزرق","Blue"],["أحمر","Red"],["ذهبي","Gold"],["رمادي","Gray"],["أخضر","Green"],["بنفسجي","Purple"],["وردي","Pink"]];
const SCENT=[["عود","Oud"],["مسك","Musk"],["ورد","Rose"],["عنبر","Amber"],["فانيلا","Vanilla"],["ياسمين","Jasmine"],["صندل","Sandalwood"],["حمضيات","Citrus"],["بخور","Incense"],["لافندر","Lavender"]];
const CATS=[
["إلكترونيات","Electronics",COL,[["سماعات لاسلكية","Wireless headphones",65,"photo-1505740420928-5e560c06d30e"],["ساعة ذكية","Smart watch",129,"photo-1527814050087-3793815479db"],["هاتف ذكي","Smartphone",499,"photo-1511707171634-5f897ff02aa9"],["لابتوب","Laptop",799,"photo-1496181133206-80ce9b88a853"],["جهاز لوحي","Tablet",299,""],["سماعة بلوتوث","Bluetooth speaker",59,""],["كاميرا","Camera",449,"photo-1516035069371-29a1b244cc32"],["لوحة مفاتيح","Keyboard",45,"photo-1587829741301-dc798b83add3"],["شاحن متنقل","Power bank",29,""],["سماعات أذن","Earbuds",49,"photo-1590658268037-6bf12165a8df"]]],
["أزياء","Fashion",COL,[["حذاء رياضي","Running shoes",85,"photo-1542291026-7eec264c27ff"],["حذاء كاجوال","Casual sneakers",75,"photo-1491553895911-0055eca6402d"],["تيشيرت","T-shirt",18,"photo-1521572163474-6864f9cf17ab"],["بنطال جينز","Jeans",40,"photo-1542272604-787c3835535d"],["جاكيت","Jacket",90,"photo-1551028719-00167b16eac5"],["فستان","Dress",55,"photo-1595777457583-95e059d581b8"],["هودي","Hoodie",38,"photo-1556821840-3a63f95609a7"],["قميص","Shirt",32,"photo-1596755094514-f87e34085b2c"],["تنورة","Skirt",28,""],["معطف","Coat",120,""]]],
["إكسسوارات","Accessories",COL,[["ساعة كلاسيكية","Classic watch",99,"photo-1523170335258-f5ed11844a49"],["نظارة شمسية","Sunglasses",42,"photo-1572635196237-14b3f281503f"],["حقيبة يد","Handbag",70,"photo-1548036328-c9fa89d128fa"],["حقيبة ظهر","Backpack",48,"photo-1553062407-98eeb64c6a62"],["محفظة","Wallet",30,"photo-1627123424574-724758594e93"],["حزام","Belt",22,""],["قلادة","Necklace",36,"photo-1599643478518-a784e5dc4c8f"],["خاتم","Ring",40,"photo-1605100804763-247f67b3557e"],["قبعة","Cap",15,"photo-1588850561407-ed78c282e89b"],["وشاح","Scarf",20,""]]],
["عطور","Perfumes",SCENT,[["عطر نسائي","Women's perfume",58,"photo-1541643600914-78b084683601"],["عطر رجالي","Men's cologne",52,"photo-1592945403244-b3fbafd7f539"],["دهن عود","Oud oil",75,"photo-1523293182086-7651a899d37f"],["بخاخ للجسم","Body mist",18,"photo-1541643600914-78b084683601"],["طقم هدايا","Gift set",85,"photo-1587017539504-67cfbddac569"],["مبخرة","Incense burner",25,""],["مزيل عرق","Deodorant",9,""],["عطر للشعر","Hair mist",16,"photo-1592945403244-b3fbafd7f539"],["عطر سفر صغير","Travel mini",14,""],["عطر مركز","Attar",35,"photo-1594035910387-fea47794261f"]]]
];
const DEFAULTS=[];let _n=0;
CATS.forEach(([ca,ce,vars,types])=>types.forEach(([ta,te,base,id])=>vars.forEach(([va,ve],i)=>{
 const price=base+i*2;
 DEFAULTS.push({id:++_n,name_ar:`${ta} - ${va}`,name_en:`${te} - ${ve}`,desc_ar:`${ta} بجودة عالية (${va}).`,desc_en:`High-quality ${te.toLowerCase()} (${ve}).`,cat_ar:ca,cat_en:ce,price,old:i%3===0?Math.round(price*1.3):0,img:id?U(id):""});
})));
const T={ar:{home:"الرئيسية",products:"المنتجات",checkout:"إتمام الطلب",contact:"تواصل معنا",shop:"تسوّق الآن",heroBadge:"عرض الموسم",heroTitle:"خصم يصل إلى {n}% على منتجات مختارة",heroTitleOff:"اكتشف أحدث منتجاتنا",discOnLbl:"عرض الخصومات (الأسعار القديمة وبنر العرض)",discPct:"نسبة الخصم في البنر (%)",catTitle:"أسماء الأقسام",catHint:"عدّل الاسم بالعربية والإنجليزية ثم احفظ، ويتغير في كل منتجات القسم.",heroLead:"منتجات بجودة عالية، توصيل سريع، ودفع عند الاستلام.",f1:"🚚 توصيل سريع",f3:"🔒 دفع آمن",f4:"💬 دعم على مدار الساعة",all:"الكل",visOpt:"الظاهرة",hidOpt:"المخفية",hideRes:"إخفاء النتائج",showRes:"إظهار النتائج",hideLbl:"مخفي عن الزبائن (غير متوفر)",hid1:"مخفي",hide:"إخفاء",unhide:"إظهار",aSearch:"ابحث بالاسم أو القسم...",confirmBulk:"تطبيق على {n} منتج؟",more:"عرض المزيد",search:"ابحث عن منتج...",whish:"الدفع عبر Whish",whishNote:"حوّل مبلغ {a} إلى رقم Whish: {n} ثم اكتب رقم المرسل أو مرجع العملية أدناه.",whishRef:"رقم المرسل / مرجع العملية",e6:"يرجى إدخال رقم المرسل أو مرجع عملية Whish.",contactSet:"بيانات التواصل",email:"البريد الإلكتروني",phoneLbl:"الهاتف",waNum:"رقم واتساب (دولي بلا +)",whishNum:"رقم Whish",add:"أضف إلى السلة",name:"الاسم الكامل",phone:"رقم الهاتف",city:"المدينة",address:"العنوان بالتفصيل",payment:"طريقة الدفع",cod:"الدفع عند الاستلام",card:"بطاقة ائتمان",cardNo:"رقم البطاقة",exp:"تاريخ الانتهاء",placeOrder:"إتمام الشراء",waOrder:"أرسل الطلب عبر واتساب",summary:"ملخص الطلب",subtotal:"المجموع الفرعي",shipping:"الشحن",total:"الإجمالي",free:"مجاني",cartTitle:"سلة المشتريات",empty:"سلتك فارغة",del:"حذف",checkoutBtn:"إتمام الطلب",okTitle:"تم استلام طلبك بنجاح",orderNo:"رقم الطلب:",okText:"سنتواصل معك قريباً لتأكيد التوصيل.",continue:"متابعة التسوق",rights:"© 2026 جميع الحقوق محفوظة",admin:"إدارة المتجر",adminTitle:"إدارة المنتجات",bulk:"إضافة صور من المعرض",export:"تصدير products.json",import:"استيراد",reset:"استعادة الافتراضي",adminHint:"التعديلات تُحفظ في هذا المتصفح. لنشرها لكل الزوار: صدّر products.json وارفعه بجانب index.html على GitHub.",image:"صورة المنتج (من الجهاز)",imageUrl:"أو رابط صورة",price:"السعر ($)",oldPrice:"السعر القديم ($)",save:"حفظ",newProduct:"منتج جديد",editing:"تعديل منتج",adding:"إضافة منتج",edit:"تعديل",pass:"كلمة مرور الإدارة:",badPass:"كلمة المرور خاطئة",quota:"المساحة ممتلئة. استخدم صوراً أصغر أو صدّر الملف.",confirmDel:"حذف هذا المنتج؟",confirmReset:"استعادة المنتجات الافتراضية؟ ستفقد تعديلاتك.",draft:"منتج جديد",e1:"السلة فارغة، أضف منتجاً أولاً.",e2:"يرجى تعبئة الاسم والمدينة والعنوان.",e3:"رقم الهاتف غير صحيح.",e4:"رقم البطاقة يجب أن يكون 16 رقماً.",e5:"تاريخ الانتهاء غير صحيح (MM/YY).",waHi:"طلب جديد",waCust:"بيانات العميل",badFile:"ملف غير صالح"},
en:{home:"Home",products:"Products",checkout:"Checkout",contact:"Contact",shop:"Shop now",heroBadge:"Season sale",heroTitle:"Up to {n}% off selected products",heroTitleOff:"Discover our latest products",discOnLbl:"Show discounts (old prices and offer banner)",discPct:"Banner discount (%)",catTitle:"Category names",catHint:"Edit the Arabic and English names, then save. It changes in every product of the category.",heroLead:"Quality products, fast delivery, and cash on delivery.",f1:"🚚 Fast delivery",f3:"🔒 Secure payment",f4:"💬 24/7 support",all:"All",visOpt:"Visible",hidOpt:"Hidden",hideRes:"Hide results",showRes:"Show results",hideLbl:"Hidden from customers (unavailable)",hid1:"Hidden",hide:"Hide",unhide:"Show",aSearch:"Search by name or category...",confirmBulk:"Apply to {n} products?",more:"Show more",search:"Search products...",whish:"Pay with Whish",whishNote:"Send {a} to Whish number: {n}, then enter the sender number or transaction reference below.",whishRef:"Sender number / reference",e6:"Please enter the sender number or Whish reference.",contactSet:"Contact details",email:"Email",phoneLbl:"Phone",waNum:"WhatsApp number (international, no +)",whishNum:"Whish number",add:"Add to cart",name:"Full name",phone:"Phone number",city:"City",address:"Full address",payment:"Payment method",cod:"Cash on delivery",card:"Credit card",cardNo:"Card number",exp:"Expiry date",placeOrder:"Place order",waOrder:"Send order via WhatsApp",summary:"Order summary",subtotal:"Subtotal",shipping:"Shipping",total:"Total",free:"Free",cartTitle:"Shopping cart",empty:"Your cart is empty",del:"Remove",checkoutBtn:"Checkout",okTitle:"Your order was received",orderNo:"Order no:",okText:"We will contact you soon to confirm delivery.",continue:"Continue shopping",rights:"© 2026 All rights reserved",admin:"Store admin",adminTitle:"Manage products",bulk:"Add photos from gallery",export:"Export products.json",import:"Import",reset:"Restore defaults",adminHint:"Changes are saved in this browser. To publish for all visitors: export products.json and upload it next to index.html on GitHub.",image:"Product image (from device)",imageUrl:"Or image URL",price:"Price ($)",oldPrice:"Old price ($)",save:"Save",newProduct:"New product",editing:"Edit product",adding:"Add product",edit:"Edit",pass:"Admin password:",badPass:"Wrong password",quota:"Storage is full. Use smaller images or export the file.",confirmDel:"Delete this product?",confirmReset:"Restore default products? Your changes will be lost.",draft:"New product",e1:"Your cart is empty. Add a product first.",e2:"Please fill in name, city and address.",e3:"Invalid phone number.",e4:"Card number must be 16 digits.",e5:"Invalid expiry date (MM/YY).",waHi:"New order",waCust:"Customer details",badFile:"Invalid file"}};
const $=s=>document.querySelector(s);
let lang=localStorage.getItem("lang")||"ar",P=[],cart={},cat="all",editId=null,shown=24,q="";
const t=k=>T[lang][k]||k;
const fmt=n=>"$"+(+n).toFixed(2).replace(/\.00$/,"");
const L=(p,f)=>p[f+"_"+lang]||p[f+"_"+(lang==="ar"?"en":"ar")]||"";
const find=id=>P.find(p=>p.id==id);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fb=p=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f3edff"/><text x="300" y="360" font-size="200" text-anchor="middle">${EMO[p.cat_en]||"🛍️"}</text></svg>`);
const img=p=>`<img src="${esc(p.img||fb(p))}" alt="${esc(L(p,"name"))}" loading="lazy" onerror="this.onerror=null;this.src='${fb(p)}'">`;
const store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){alert(t("quota"));return false}};
try{cart=JSON.parse(localStorage.getItem("cart")||"{}")}catch(e){}
const saveP=()=>store("products",P);

function applyLang(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 $("#langBtn").textContent=lang==="ar"?"EN":"عربي";
 renderAll();
}
function renderContact(){
 $("#fMail").textContent=S.email;$("#fMail").href="mailto:"+S.email;
 $("#fTel").textContent=S.phone;$("#fTel").href="tel:"+S.phone.replace(/[^\d+]/g,"");
}
function renderHero(){
 const on=S.discOn!==false&&+S.pct>0;
 $("#hBadge").hidden=!on;
 $("#hTitle").textContent=on?t("heroTitle").replace("{n}",S.pct):t("heroTitleOff");
}
function renderAll(){renderContact();renderHero();$("#q").placeholder=t("search");$("#aq").placeholder=t("aSearch");renderFilters();renderGrid();update();if(!$("#admin").hidden)renderAdmin()}
function renderFilters(){
 const cats=[...new Map(P.filter(p=>!p.hidden&&(p.cat_en||p.cat_ar)).map(p=>[p.cat_en||p.cat_ar,L(p,"cat")]))];
 if(cat!=="all"&&!cats.some(c=>c[0]===cat))cat="all";
 $("#filters").innerHTML=[["all",t("all")],...cats].map(([k,v])=>`<button class="${k===cat?"on":""}" data-c="${esc(k)}">${esc(v)}</button>`).join("");
}
function renderGrid(){
 const k=q.trim().toLowerCase();
 const list=P.filter(p=>!p.hidden&&(cat==="all"||(p.cat_en||p.cat_ar)===cat)&&(!k||(p.name_ar+" "+p.name_en).toLowerCase().includes(k)));
 $("#grid").innerHTML=list.slice(0,shown).map(p=>`
 <article class="card"><div class="im">${img(p)}</div><div class="bd">
 <span class="cat">${esc(L(p,"cat"))}</span><h3>${esc(L(p,"name"))}</h3>
 ${L(p,"desc")?`<p class="desc">${esc(L(p,"desc"))}</p>`:""}
 <div class="price">${fmt(p.price)}${S.discOn!==false&&+p.old>+p.price?`<s>${fmt(p.old)}</s>`:""}</div>
 <button class="btn" data-add="${p.id}">${t("add")}</button></div></article>`).join("");
 $("#more").hidden=list.length<=shown;
}
$("#more").onclick=()=>{shown+=24;renderGrid()};
$("#q").oninput=e=>{q=e.target.value;shown=24;renderGrid()};
$("#filters").onclick=e=>{const c=e.target.dataset.c;if(c){cat=c;shown=24;renderFilters();renderGrid()}};
$("#grid").onclick=e=>{const id=e.target.dataset.add;if(id){add(id);openCart()}};
$("#langBtn").onclick=()=>{lang=lang==="ar"?"en":"ar";localStorage.setItem("lang",lang);applyLang()};

// cart
function totals(){
 const sub=Object.entries(cart).reduce((s,[id,q])=>s+(find(id)?.price||0)*q,0);
 const ship=sub===0||sub>=CFG.FREE?0:CFG.SHIP;
 return{sub,ship,tot:sub+ship};
}
const add=id=>{cart[id]=(cart[id]||0)+1;update(true)};
const setQty=(id,q)=>{if(q<=0)delete cart[id];else cart[id]=q;update()};
function update(bump){
 Object.keys(cart).forEach(id=>{const p=find(id);if(!p||p.hidden)delete cart[id]});
 store("cart",cart);
 const ids=Object.keys(cart),c=$("#count");
 c.textContent=Object.values(cart).reduce((a,b)=>a+b,0);
 if(bump){c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")}
 $("#cartItems").innerHTML=ids.length?ids.map(id=>{const p=find(id);return `
 <div class="item">${img(p)}<div><h4>${esc(L(p,"name"))}</h4><b>${fmt(p.price)}</b>
 <div class="qty"><button data-q="${id}" data-d="1">+</button><span>${cart[id]}</span><button data-q="${id}" data-d="-1">−</button></div></div>
 <button class="del" data-del="${id}">${t("del")}</button></div>`}).join(""):`<p class="empty">${t("empty")}</p>`;
 const x=totals(),sh=x.ship?fmt(x.ship):(x.sub?t("free"):fmt(0));
 ["d","s"].forEach(k=>{$("#"+k+"Sub").textContent=fmt(x.sub);$("#"+k+"Ship").textContent=sh;$("#"+k+"Tot").textContent=fmt(x.tot)});
 $("#whishInfo").textContent=t("whishNote").replace("{a}",fmt(x.tot)).replace("{n}",S.whish);
 $("#sumList").innerHTML=ids.length?ids.map(id=>`<div class="mini"><span>${esc(L(find(id),"name"))} × ${cart[id]}</span><span>${fmt(find(id).price*cart[id])}</span></div>`).join(""):`<p class="empty">${t("empty")}</p>`;
}
$("#cartItems").onclick=e=>{const b=e.target;
 if(b.dataset.q)setQty(b.dataset.q,(cart[b.dataset.q]||0)+Number(b.dataset.d));
 if(b.dataset.del)setQty(b.dataset.del,0)};
const openCart=()=>{$("#drawer").classList.add("on");$("#overlay").classList.add("on")};
const closeCart=()=>{$("#drawer").classList.remove("on");$("#overlay").classList.remove("on")};
$("#openCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#overlay").onclick=closeCart;$("#toCheckout").onclick=closeCart;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
$("#burger").onclick=()=>$("#links").classList.toggle("on");
$("#links").onclick=()=>$("#links").classList.remove("on");

// checkout
const form=$("#form");
form.pay.forEach(r=>r.onchange=()=>{$("#cardBox").hidden=form.pay.value!=="card";$("#whishBox").hidden=form.pay.value!=="whish"});
form.card.oninput=e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()};
form.exp.oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,4);if(v.length>2)v=v.slice(0,2)+"/"+v.slice(2);e.target.value=v};
function validate(needCard){
 const f=Object.fromEntries(new FormData(form)),bad=k=>{$("#err").textContent=t(k);return null};
 if(!Object.keys(cart).length)return bad("e1");
 if(!f.name.trim()||!f.city.trim()||!f.address.trim())return bad("e2");
 if(!/^[\d+\s-]{8,15}$/.test(f.phone.trim()))return bad("e3");
 if(needCard&&f.pay==="card"){
  if(f.card.replace(/\s/g,"").length<16)return bad("e4");
  if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(f.exp))return bad("e5");
 }
 if(needCard&&f.pay==="whish"&&!f.ref.trim())return bad("e6");
 $("#err").textContent="";return f;
}
const clearOrder=()=>{cart={};update();form.reset();$("#cardBox").hidden=true;$("#whishBox").hidden=true};
form.onsubmit=e=>{e.preventDefault();
 if(!validate(true))return;
 $("#orderNo").textContent="#"+Math.floor(100000+Math.random()*900000);
 $("#modal").hidden=false;clearOrder()};
$("#waBtn").onclick=()=>{
 const f=validate(false);if(!f)return;
 const x=totals();
 const lines=Object.keys(cart).map(id=>`• ${L(find(id),"name")} × ${cart[id]} = ${fmt(find(id).price*cart[id])}`);
 const msg=`${t("waHi")}\n${lines.join("\n")}\n${t("shipping")}: ${x.ship?fmt(x.ship):t("free")}\n${t("total")}: ${fmt(x.tot)}\n\n${t("waCust")}:\n${f.name}\n${f.phone}\n${f.city} - ${f.address}\n${t("payment")}: ${t(f.pay==="card"?"card":f.pay==="whish"?"whish":"cod")}${f.pay==="whish"&&f.ref?" ("+f.ref+")":""}`;
 window.open(`https://wa.me/${S.wa}?text=${encodeURIComponent(msg)}`,"_blank");
 clearOrder();
};
$("#closeModal").onclick=()=>{$("#modal").hidden=true;location.hash="#products"};

// admin
const shrink=f=>new Promise(r=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,800/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);r(c.toDataURL("image/jpeg",.8))};im.src=fr.result};fr.readAsDataURL(f)});
const pf=$("#pForm");
const sf=$("#sForm");
sf.onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(sf));
 Object.assign(S,{email:f.email,phone:f.phone,wa:f.wa,whish:f.whish,discOn:f.discOn==="on",pct:Math.max(0,Math.min(99,+f.pct||0))});
 if(store("settings",S)){renderContact();renderHero();renderGrid();update()}};
const aFiltered=()=>{const k=$("#aq").value.trim().toLowerCase(),st=$("#aStat").value;return P.filter(p=>(st==="all"||(st==="hid")===!!p.hidden)&&(!k||[p.name_ar,p.name_en,p.cat_ar,p.cat_en].join(" ").toLowerCase().includes(k)))};
function renderList(){
 const l=aFiltered();
 $("#aList").innerHTML=`<p class="hint">${l.length} / ${P.length}</p>`+l.map(p=>`<div class="a-row${p.hidden?" off":""}">${img(p)}<span>${esc(L(p,"name")||"—")}${p.hidden?` <em class="tag">${t("hid1")}</em>`:""}<br><small>${fmt(p.price)} · ${esc(L(p,"cat"))}</small></span><button data-h="${p.id}">${t(p.hidden?"unhide":"hide")}</button><button data-e="${p.id}">${t("edit")}</button><button class="del" data-x="${p.id}">✕</button></div>`).join("");
}
function refresh(){renderFilters();renderGrid();update();renderList()}
function renderCats(){
 const m=new Map();
 P.forEach(p=>{const k=p.cat_en||p.cat_ar;if(!k)return;if(!m.has(k))m.set(k,{ar:p.cat_ar,en:p.cat_en,n:0});m.get(k).n++});
 $("#cRows").innerHTML=[...m].map(([k,v])=>`<div class="c-row"><input data-k="${esc(k)}" data-l="ar" value="${esc(v.ar)}" placeholder="عربي"><input data-k="${esc(k)}" data-l="en" value="${esc(v.en)}" placeholder="English" dir="ltr"><small>${v.n}</small></div>`).join("");
}
$("#cForm").onsubmit=e=>{e.preventDefault();
 const ch={};
 document.querySelectorAll("#cRows input").forEach(i=>{(ch[i.dataset.k]??={})[i.dataset.l]=i.value.trim()});
 P.forEach(p=>{const c=ch[p.cat_en||p.cat_ar];if(c){p.cat_ar=c.ar;p.cat_en=c.en}});
 cat="all";
 if(saveP()){renderFilters();renderGrid();renderList();renderCats()}
};
function renderAdmin(){
 ["email","phone","wa","whish"].forEach(k=>sf[k].value=S[k]);
 sf.discOn.checked=S.discOn!==false;sf.pct.value=S.pct;
 renderCats();renderList();
 fillForm(find(editId));
}
function fillForm(p){
 editId=p?p.id:null;
 $("#fTitle").textContent=p?t("editing"):t("adding");
 ["img","name_ar","name_en","desc_ar","desc_en","cat_ar","cat_en","price","old"].forEach(k=>{pf[k].value=p?(p[k]??""):""});
 $("#preview").innerHTML=p&&p.img?img(p):"";
 $("#pFile").value="";pf.hidden.checked=!!(p&&p.hidden);
}
$("#aList").onclick=e=>{const d=e.target.dataset;
 if(d.e)fillForm(find(d.e));
 if(d.h){const p=find(d.h);p.hidden=!p.hidden;if(editId==p.id)pf.hidden.checked=p.hidden;if(saveP())refresh()}
 if(d.x&&confirm(t("confirmDel"))){P=P.filter(p=>p.id!=d.x);saveP();refresh()}
};
$("#aq").oninput=renderList;$("#aStat").onchange=renderList;
const bulkHide=v=>{const l=aFiltered();if(!l.length||!confirm(t("confirmBulk").replace("{n}",l.length)))return;l.forEach(p=>p.hidden=v);if(saveP())refresh()};
$("#hideAll").onclick=()=>bulkHide(true);$("#showAll").onclick=()=>bulkHide(false);
$("#cancelEdit").onclick=()=>fillForm(null);
$("#pFile").onchange=async e=>{const f=e.target.files[0];if(!f)return;const d=await shrink(f);pf.img.value=d;$("#preview").innerHTML=`<img src="${d}" alt="">`};
pf.img.oninput=()=>{$("#preview").innerHTML=pf.img.value?`<img src="${esc(pf.img.value)}" alt="">`:""};
pf.onsubmit=e=>{e.preventDefault();
 const v=Object.fromEntries(new FormData(pf));
 const o={name_ar:v.name_ar,name_en:v.name_en,desc_ar:v.desc_ar,desc_en:v.desc_en,cat_ar:v.cat_ar,cat_en:v.cat_en,img:v.img,price:+v.price||0,old:+v.old||0,hidden:v.hidden==="on"};
 const p=find(editId);
 if(p)Object.assign(p,o);else{const n={id:Date.now(),...o};P.unshift(n);editId=n.id}
 if(saveP())renderAll();
};
$("#bulk").onchange=async e=>{
 for(const f of e.target.files)P.unshift({id:Date.now()+Math.random(),name_ar:T.ar.draft,name_en:T.en.draft,desc_ar:"",desc_en:"",cat_ar:"",cat_en:"",price:0,old:0,img:await shrink(f)});
 e.target.value="";if(saveP()){editId=P[0].id;renderAll()}
};
$("#export").onclick=()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify({settings:S,products:P},null,1)],{type:"application/json"}));a.download="products.json";a.click()};
$("#import").onchange=async e=>{
 try{const d=JSON.parse(await e.target.files[0].text());const arr=Array.isArray(d)?d:d.products;if(!Array.isArray(arr))throw 0;P=arr;if(d.settings){Object.assign(S,d.settings);store("settings",S)}saveP();renderAll()}catch(x){alert(t("badFile"))}
 e.target.value="";
};
$("#reset").onclick=()=>{if(confirm(t("confirmReset"))){localStorage.removeItem("products");P=structuredClone(DEFAULTS);editId=null;renderAll()}};
$("#adminBtn").onclick=()=>{
 if(prompt(t("pass"))!==CFG.PASS){alert(t("badPass"));return}
 $("#admin").hidden=false;editId=null;renderAdmin();
};
$("#closeAdmin").onclick=()=>{$("#admin").hidden=true};

// init
(async()=>{
 try{P=JSON.parse(localStorage.getItem("products")||"null")}catch(e){}
 let hasS=false;
 try{const x=JSON.parse(localStorage.getItem("settings")||"null");if(x){Object.assign(S,x);hasS=true}}catch(e){}
 if(!Array.isArray(P)||!hasS){
  try{const r=await fetch("products.json",{cache:"no-store"});
   if(r.ok){const j=await r.json(),arr=Array.isArray(j)?j:j.products;
    if(!Array.isArray(P)&&Array.isArray(arr))P=arr;
    if(!hasS&&j.settings)Object.assign(S,j.settings)}}catch(e){}
 }
 if(!Array.isArray(P))P=structuredClone(DEFAULTS);
 applyLang();
})();
