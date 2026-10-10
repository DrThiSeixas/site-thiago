import test from 'node:test';
import assert from 'node:assert/strict';
import {parse,evaluate} from 'groq-js';
import {artigosQuery,artigoBySlugQuery,sitemapArtigosQuery} from '../src/lib/queries';
import {headingId,safeHref} from '../src/lib/article-format';
const base={_type:'artigo',_id:'visible',slug:{current:'visible'},titulo:'Texto',publicadoEm:'2020-01-01T12:00:00Z',statusEditorial:'aprovado',corpo:[{_type:'block',children:[{text:'Conteúdo'}]}]};
const dataset=[base,{...base,_id:'drafts.private',slug:{current:'draft'}},{...base,_id:'future',slug:{current:'future'},publicadoEm:'2099-01-01T12:00:00Z'},{...base,_id:'withdrawn',slug:{current:'withdrawn'},retirado:true},{...base,_id:'review',slug:{current:'review'},statusEditorial:'revisao'},{...base,_id:'international',slug:{current:'international'},area:'internacional'},{_type:'artigo',_id:'legacy',slug:{current:'legacy'},titulo:'Anterior',resumo:'Resumo anterior',conteudo:base.corpo,dataPublicacao:'2020-03-26',categoria:'Governança'}];
async function query(q:string,params={}){return (await evaluate(parse(q),{dataset,params})).get()}
test('published lists and sitemap exclude draft, future, withdrawn, unapproved and international',async()=>{assert.deepEqual((await query(artigosQuery)).map((a:any)=>a._id).sort(),['legacy','visible']);assert.deepEqual((await query(sitemapArtigosQuery)).map((a:any)=>a.slug).sort(),['legacy','visible']);});
test('direct URL cannot reveal an excluded article',async()=>{for(const slug of ['draft','future','withdrawn','review','international'])assert.equal(await query(artigoBySlugQuery,{slug}),null)});
test('existing Studio fields retain body, summary, category and date',async()=>{const a=await query(artigoBySlugQuery,{slug:'legacy'});assert.equal(a.chamada,'Resumo anterior');assert.equal(a.categoria.titulo,'Governança');assert.equal(a.corpo[0].children[0].text,'Conteúdo');assert.equal(a.publicadoEm,'2020-03-26T12:00:00Z')});
test('headings share stable accents-aware anchors, including repeated headings',()=>{assert.equal(headingId({_key:'x',children:[{text:'Decisões '},{text:'dos sócios'}]}),'decisoes-dos-socios-x');assert.notEqual(headingId({_key:'x',children:[{text:'A'}]}),headingId({_key:'y',children:[{text:'A'}]}))});
test('editorial links do not allow executable or protocol-relative destinations',()=>{for(const href of ['javascript:alert(1)','data:text/html,hello','//example.com'])assert.equal(safeHref(href),'/contato');assert.equal(safeHref('/artigos'),'/artigos');assert.equal(safeHref('https://www.gov.br'),'https://www.gov.br')});
