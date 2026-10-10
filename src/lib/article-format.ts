export function headingId(block:{_key?:string;children?:unknown[]}){
 const title=(block.children||[]).map(c=>c&&typeof c==='object'&&'text' in c&&typeof c.text==='string'?c.text:'').join('');
 const slug=title.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 return `${slug||'secao'}${block._key?`-${block._key}`:''}`;
}
export function safeHref(value:unknown,fallback='/contato'){
 if(typeof value!=='string')return fallback;
 const href=value.trim();
 return /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(href)?href:fallback;
}
