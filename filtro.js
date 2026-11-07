(function(){
var busca=document.getElementById('busca');if(!busca)return;
var cards=[].slice.call(document.querySelectorAll('.licitacao')),ads=[].slice.call(document.querySelectorAll('#lista .anuncio'));
var cont=document.getElementById('contagem'),vazio=document.getElementById('vazio');
function dobra(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
busca.addEventListener('input',function(){
  var termos=dobra(busca.value).split(/\s+/).filter(Boolean),n=0;
  cards.forEach(function(c){var ok=termos.every(function(t){return c.dataset.texto.indexOf(t)>=0;});c.hidden=!ok;if(ok)n++;});
  ads.forEach(function(x){x.hidden=termos.length>0;});
  cont.textContent=termos.length?n+' licitação(ões) com esse filtro':'';vazio.hidden=n>0;
});
document.addEventListener('click',function(ev){
  var a=ev.target.closest('[data-evento]');
  if(a&&window.gtag){gtag('event',a.dataset.evento,{link_url:a.href});}
});
})();
