const _0x3f5779=_0x35ef;function _0x35ef(_0x54a5dc,_0x5838ef){const _0x1aefbf=_0x1aef();return _0x35ef=function(_0x35ef99,_0x42752b){_0x35ef99=_0x35ef99-0x11c;let _0x5e37ca=_0x1aefbf[_0x35ef99];return _0x5e37ca;},_0x35ef(_0x54a5dc,_0x5838ef);}(function(_0x45ce9c,_0x12a90f){const _0x414dd2=_0x35ef,_0x62cd74=_0x45ce9c();while(!![]){try{const _0x59c020=parseInt(_0x414dd2(0x18e))/0x1+parseInt(_0x414dd2(0x152))/0x2*(-parseInt(_0x414dd2(0x183))/0x3)+-parseInt(_0x414dd2(0x13c))/0x4*(parseInt(_0x414dd2(0x191))/0x5)+parseInt(_0x414dd2(0x178))/0x6+-parseInt(_0x414dd2(0x14b))/0x7+parseInt(_0x414dd2(0x17d))/0x8*(parseInt(_0x414dd2(0x13b))/0x9)+parseInt(_0x414dd2(0x177))/0xa;if(_0x59c020===_0x12a90f)break;else _0x62cd74['push'](_0x62cd74['shift']());}catch(_0x5587ed){_0x62cd74['push'](_0x62cd74['shift']());}}}(_0x1aef,0xbc75f));const sessionName=_0x3f5779(0x17a),donet=_0x3f5779(0x170),{default:sansekaiConnect,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,jidDecode,proto,getContentType,Browsers,fetchLatestWaWebVersion}=require(_0x3f5779(0x180)),pino=require('pino'),{Boom}=require(_0x3f5779(0x124)),fs=require('fs'),axios=require(_0x3f5779(0x145)),chalk=require(_0x3f5779(0x15c)),figlet=require(_0x3f5779(0x1a2)),_=require(_0x3f5779(0x19a)),PhoneNumber=require(_0x3f5779(0x1a5)),store=makeInMemoryStore({'logger':pino()[_0x3f5779(0x190)]({'level':'silent','stream':_0x3f5779(0x18d)})}),color=(_0x24a05b,_0x255bb6)=>{const _0x12de42=_0x3f5779;return!_0x255bb6?chalk[_0x12de42(0x174)](_0x24a05b):chalk['keyword'](_0x255bb6)(_0x24a05b);};function smsg(_0x40f549,_0x3d3ef6,_0x4090ab){const _0x444216=_0x3f5779;if(!_0x3d3ef6)return _0x3d3ef6;let _0xd7f0fd=proto[_0x444216(0x136)];if(_0x3d3ef6[_0x444216(0x11e)]){_0x3d3ef6['id']=_0x3d3ef6[_0x444216(0x11e)]['id'],_0x3d3ef6[_0x444216(0x11f)]=_0x3d3ef6['id'][_0x444216(0x167)](_0x444216(0x1a3))&&_0x3d3ef6['id'][_0x444216(0x14d)]===0x10,_0x3d3ef6[_0x444216(0x122)]=_0x3d3ef6[_0x444216(0x11e)][_0x444216(0x19c)],_0x3d3ef6['fromMe']=_0x3d3ef6[_0x444216(0x11e)]['fromMe'],_0x3d3ef6['isGroup']=_0x3d3ef6[_0x444216(0x122)]['endsWith']('@g.us'),_0x3d3ef6[_0x444216(0x121)]=_0x40f549[_0x444216(0x131)](_0x3d3ef6[_0x444216(0x129)]&&_0x40f549['user']['id']||_0x3d3ef6[_0x444216(0x127)]||_0x3d3ef6[_0x444216(0x11e)][_0x444216(0x127)]||_0x3d3ef6[_0x444216(0x122)]||'');if(_0x3d3ef6[_0x444216(0x185)])_0x3d3ef6[_0x444216(0x127)]=_0x40f549[_0x444216(0x131)](_0x3d3ef6[_0x444216(0x11e)][_0x444216(0x127)])||'';}if(_0x3d3ef6[_0x444216(0x182)]){_0x3d3ef6['mtype']=getContentType(_0x3d3ef6[_0x444216(0x182)]),_0x3d3ef6['msg']=_0x3d3ef6[_0x444216(0x193)]==_0x444216(0x179)?_0x3d3ef6[_0x444216(0x182)][_0x3d3ef6[_0x444216(0x193)]]['message'][getContentType(_0x3d3ef6[_0x444216(0x182)][_0x3d3ef6['mtype']][_0x444216(0x182)])]:_0x3d3ef6[_0x444216(0x182)][_0x3d3ef6['mtype']],_0x3d3ef6[_0x444216(0x173)]=_0x3d3ef6[_0x444216(0x182)][_0x444216(0x143)]||_0x3d3ef6[_0x444216(0x135)][_0x444216(0x1a6)]||_0x3d3ef6[_0x444216(0x135)][_0x444216(0x1b4)]||_0x3d3ef6[_0x444216(0x193)]==_0x444216(0x179)&&_0x3d3ef6['msg']['caption']||_0x3d3ef6[_0x444216(0x1b4)];let _0x537fae=_0x3d3ef6[_0x444216(0x1aa)]=_0x3d3ef6['msg'][_0x444216(0x120)]?_0x3d3ef6['msg'][_0x444216(0x120)][_0x444216(0x18b)]:null;_0x3d3ef6[_0x444216(0x18a)]=_0x3d3ef6[_0x444216(0x135)]['contextInfo']?_0x3d3ef6[_0x444216(0x135)][_0x444216(0x120)]['mentionedJid']:[];if(_0x3d3ef6[_0x444216(0x1aa)]){let _0x4b06ee=getContentType(_0x537fae);_0x3d3ef6[_0x444216(0x1aa)]=_0x3d3ef6[_0x444216(0x1aa)][_0x4b06ee];[_0x444216(0x12a)][_0x444216(0x1ad)](_0x4b06ee)&&(_0x4b06ee=getContentType(_0x3d3ef6['quoted']),_0x3d3ef6[_0x444216(0x1aa)]=_0x3d3ef6[_0x444216(0x1aa)][_0x4b06ee]);if(typeof _0x3d3ef6['quoted']===_0x444216(0x199))_0x3d3ef6[_0x444216(0x1aa)]={'text':_0x3d3ef6[_0x444216(0x1aa)]};_0x3d3ef6['quoted'][_0x444216(0x193)]=_0x4b06ee,_0x3d3ef6[_0x444216(0x1aa)]['id']=_0x3d3ef6[_0x444216(0x135)]['contextInfo'][_0x444216(0x14e)],_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x122)]=_0x3d3ef6[_0x444216(0x135)][_0x444216(0x120)][_0x444216(0x19c)]||_0x3d3ef6['chat'],_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x11f)]=_0x3d3ef6[_0x444216(0x1aa)]['id']?_0x3d3ef6['quoted']['id'][_0x444216(0x167)](_0x444216(0x1a3))&&_0x3d3ef6['quoted']['id']['length']===0x10:![],_0x3d3ef6[_0x444216(0x1aa)]['sender']=_0x40f549[_0x444216(0x131)](_0x3d3ef6[_0x444216(0x135)][_0x444216(0x120)][_0x444216(0x127)]),_0x3d3ef6['quoted'][_0x444216(0x129)]=_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x121)]===_0x40f549['decodeJid'](_0x40f549[_0x444216(0x16c)]['id']),_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x1b4)]=_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x1b4)]||_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x1a6)]||_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x143)]||_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x17c)]||_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x189)]||_0x3d3ef6[_0x444216(0x1aa)]['title']||'',_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x18a)]=_0x3d3ef6[_0x444216(0x135)][_0x444216(0x120)]?_0x3d3ef6['msg']['contextInfo']['mentionedJid']:[],_0x3d3ef6['getQuotedObj']=_0x3d3ef6[_0x444216(0x12e)]=async()=>{const _0x51f5cb=_0x444216;if(!_0x3d3ef6['quoted']['id'])return![];let _0x31ed51=await _0x4090ab[_0x51f5cb(0x158)](_0x3d3ef6[_0x51f5cb(0x122)],_0x3d3ef6[_0x51f5cb(0x1aa)]['id'],_0x40f549);return exports[_0x51f5cb(0x147)](_0x40f549,_0x31ed51,_0x4090ab);};let _0x20899e=_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x196)]=_0xd7f0fd[_0x444216(0x1b3)]({'key':{'remoteJid':_0x3d3ef6['quoted'][_0x444216(0x122)],'fromMe':_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x129)],'id':_0x3d3ef6[_0x444216(0x1aa)]['id']},'message':_0x537fae,..._0x3d3ef6[_0x444216(0x185)]?{'participant':_0x3d3ef6['quoted'][_0x444216(0x121)]}:{}});_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x128)]=()=>_0x40f549['sendMessage'](_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x122)],{'delete':_0x20899e['key']}),_0x3d3ef6['quoted'][_0x444216(0x186)]=(_0xcf8b0a,_0xa76eda=![],_0x211389={})=>_0x40f549[_0x444216(0x186)](_0xcf8b0a,_0x20899e,_0xa76eda,_0x211389),_0x3d3ef6[_0x444216(0x1aa)][_0x444216(0x17b)]=()=>_0x40f549[_0x444216(0x153)](_0x3d3ef6[_0x444216(0x1aa)]);}}if(_0x3d3ef6[_0x444216(0x135)][_0x444216(0x16a)])_0x3d3ef6[_0x444216(0x17b)]=()=>_0x40f549[_0x444216(0x153)](_0x3d3ef6[_0x444216(0x135)]);return _0x3d3ef6[_0x444216(0x1b4)]=_0x3d3ef6[_0x444216(0x135)][_0x444216(0x1b4)]||_0x3d3ef6[_0x444216(0x135)][_0x444216(0x1a6)]||_0x3d3ef6[_0x444216(0x182)][_0x444216(0x143)]||_0x3d3ef6[_0x444216(0x135)][_0x444216(0x17c)]||_0x3d3ef6[_0x444216(0x135)]['selectedDisplayText']||_0x3d3ef6[_0x444216(0x135)]['title']||'',_0x3d3ef6[_0x444216(0x1ab)]=(_0x55fb1d,_0x3d8198=_0x3d3ef6[_0x444216(0x122)],_0x126cbf={})=>Buffer[_0x444216(0x15d)](_0x55fb1d)?_0x40f549[_0x444216(0x175)](_0x3d8198,_0x55fb1d,_0x444216(0x140),'',_0x3d3ef6,{..._0x126cbf}):_0x40f549[_0x444216(0x17f)](_0x3d8198,_0x55fb1d,_0x3d3ef6,{..._0x126cbf}),_0x3d3ef6[_0x444216(0x134)]=()=>exports[_0x444216(0x147)](_0x40f549,_0xd7f0fd[_0x444216(0x1b3)](_0xd7f0fd[_0x444216(0x148)](_0x3d3ef6))),_0x3d3ef6;}async function startHisoka(){const _0x45be20=_0x3f5779,{state:_0x38d6b5,saveCreds:_0x45cc61}=await useMultiFileAuthState('./'+(sessionName?sessionName:_0x45be20(0x169))),{version:_0x215b0f,isLatest:_0x45ed6f}=await fetchLatestWaWebVersion()[_0x45be20(0x192)](()=>fetchLatestBaileysVersion());console[_0x45be20(0x137)](_0x45be20(0x1b0)+_0x215b0f[_0x45be20(0x1a4)]('.')+_0x45be20(0x126)+_0x45ed6f),console[_0x45be20(0x137)](color(figlet[_0x45be20(0x13f)](_0x45be20(0x138),{'font':_0x45be20(0x15b),'horizontalLayout':'default','vertivalLayout':_0x45be20(0x168),'whitespaceBreak':![]}),_0x45be20(0x174)));const _0x156895=sansekaiConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':Browsers[_0x45be20(0x154)](_0x45be20(0x165)),'auth':_0x38d6b5});store[_0x45be20(0x14c)](_0x156895['ev']),_0x156895['ev']['on']('messages.upsert',async _0x4c5c31=>{const _0x742736=_0x45be20;try{mek=_0x4c5c31[_0x742736(0x144)][0x0];if(!mek[_0x742736(0x182)])return;mek['message']=Object['keys'](mek[_0x742736(0x182)])[0x0]===_0x742736(0x150)?mek[_0x742736(0x182)]['ephemeralMessage'][_0x742736(0x182)]:mek[_0x742736(0x182)];if(mek[_0x742736(0x11e)]&&mek[_0x742736(0x11e)][_0x742736(0x19c)]==='status@broadcast')return;if(!_0x156895['public']&&!mek[_0x742736(0x11e)]['fromMe']&&_0x4c5c31[_0x742736(0x16f)]===_0x742736(0x11c))return;if(mek[_0x742736(0x11e)]['id'][_0x742736(0x167)](_0x742736(0x1a3))&&mek[_0x742736(0x11e)]['id']['length']===0x10)return;m=smsg(_0x156895,mek,store),require('./sansekai')(_0x156895,m,_0x4c5c31,store);}catch(_0x258e4f){console[_0x742736(0x137)](_0x258e4f);}});const _0x2ec193=new Map();process['on'](_0x45be20(0x19d),(_0x414ec6,_0x54775e)=>{const _0x3f867d=_0x45be20;_0x2ec193[_0x3f867d(0x195)](_0x54775e,_0x414ec6),console[_0x3f867d(0x137)](_0x3f867d(0x197),_0x54775e,_0x3f867d(0x19e),_0x414ec6);}),process['on'](_0x45be20(0x194),_0x3adba4=>{const _0x27d209=_0x45be20;_0x2ec193[_0x27d209(0x128)](_0x3adba4);}),process['on'](_0x45be20(0x13d),function(_0xdd6cec){const _0x1bfbe9=_0x45be20;console[_0x1bfbe9(0x137)](_0x1bfbe9(0x1a9),_0xdd6cec);}),_0x156895[_0x45be20(0x131)]=_0x28e200=>{const _0x4ebcc7=_0x45be20;if(!_0x28e200)return _0x28e200;if(/:\d+@/gi['test'](_0x28e200)){let _0x390e0c=jidDecode(_0x28e200)||{};return _0x390e0c[_0x4ebcc7(0x16c)]&&_0x390e0c[_0x4ebcc7(0x12d)]&&_0x390e0c[_0x4ebcc7(0x16c)]+'@'+_0x390e0c[_0x4ebcc7(0x12d)]||_0x28e200;}else return _0x28e200;},_0x156895['ev']['on']('contacts.update',_0x41e824=>{const _0x424647=_0x45be20;for(let _0x5f5141 of _0x41e824){let _0x5acd64=_0x156895[_0x424647(0x131)](_0x5f5141['id']);if(store&&store[_0x424647(0x132)])store['contacts'][_0x5acd64]={'id':_0x5acd64,'name':_0x5f5141[_0x424647(0x11c)]};}}),_0x156895[_0x45be20(0x16b)]=(_0x1ffd16,_0x3beec3=![])=>{const _0x2b0985=_0x45be20;id=_0x156895['decodeJid'](_0x1ffd16),_0x3beec3=_0x156895[_0x2b0985(0x15a)]||_0x3beec3;let _0x15b44c;if(id[_0x2b0985(0x11d)](_0x2b0985(0x18f)))return new Promise(async _0x150dfd=>{const _0x341c87=_0x2b0985;_0x15b44c=store['contacts'][id]||{};if(!(_0x15b44c['name']||_0x15b44c[_0x341c87(0x171)]))_0x15b44c=_0x156895['groupMetadata'](id)||{};_0x150dfd(_0x15b44c[_0x341c87(0x155)]||_0x15b44c['subject']||PhoneNumber('+'+id[_0x341c87(0x12b)](_0x341c87(0x13a),''))['getNumber'](_0x341c87(0x1ac)));});else _0x15b44c=id===_0x2b0985(0x19b)?{'id':id,'name':_0x2b0985(0x15e)}:id===_0x156895[_0x2b0985(0x131)](_0x156895[_0x2b0985(0x16c)]['id'])?_0x156895['user']:store[_0x2b0985(0x132)][id]||{};return(_0x3beec3?'':_0x15b44c[_0x2b0985(0x155)])||_0x15b44c[_0x2b0985(0x171)]||_0x15b44c[_0x2b0985(0x184)]||PhoneNumber('+'+_0x1ffd16[_0x2b0985(0x12b)](_0x2b0985(0x13a),''))[_0x2b0985(0x14a)](_0x2b0985(0x1ac));},_0x156895[_0x45be20(0x146)]=!![],_0x156895[_0x45be20(0x156)]=_0x175ccd=>smsg(_0x156895,_0x175ccd,store),_0x156895['ev']['on'](_0x45be20(0x1b2),async _0x2ceb66=>{const _0x18c01a=_0x45be20,{connection:_0x3dd6ed,lastDisconnect:_0x1c180f}=_0x2ceb66;if(_0x3dd6ed===_0x18c01a(0x172)){let _0x24f63c=new Boom(_0x1c180f?.['error'])?.[_0x18c01a(0x19f)][_0x18c01a(0x125)];if(_0x24f63c===DisconnectReason['badSession'])console['log'](_0x18c01a(0x1b1)),process[_0x18c01a(0x198)]();else{if(_0x24f63c===DisconnectReason[_0x18c01a(0x163)])console[_0x18c01a(0x137)](_0x18c01a(0x181)),startHisoka();else{if(_0x24f63c===DisconnectReason[_0x18c01a(0x160)])console[_0x18c01a(0x137)](_0x18c01a(0x164)),startHisoka();else{if(_0x24f63c===DisconnectReason[_0x18c01a(0x176)])console[_0x18c01a(0x137)](_0x18c01a(0x1ae)),process['exit']();else{if(_0x24f63c===DisconnectReason[_0x18c01a(0x15f)])console[_0x18c01a(0x137)](_0x18c01a(0x188)),process[_0x18c01a(0x198)]();else{if(_0x24f63c===DisconnectReason[_0x18c01a(0x161)])console[_0x18c01a(0x137)](_0x18c01a(0x162)),startHisoka();else _0x24f63c===DisconnectReason[_0x18c01a(0x187)]?(console['log'](_0x18c01a(0x13e)),startHisoka()):(console[_0x18c01a(0x137)](_0x18c01a(0x149)+_0x24f63c+'|'+_0x3dd6ed),startHisoka());}}}}}}else{if(_0x3dd6ed===_0x18c01a(0x139)){const _0x4dabca=await _0x156895['decodeJid'](_0x156895['user']['id']);console[_0x18c01a(0x137)](color(_0x18c01a(0x18c),'green')),console['log'](color(_0x18c01a(0x1a0),'yellow')),console[_0x18c01a(0x137)](color('Type\x20/menu\x20to\x20see\x20menu')),_0x156895[_0x18c01a(0x166)](_0x4dabca,{'text':_0x18c01a(0x141)+donet});}}}),_0x156895['ev']['on'](_0x45be20(0x16e),_0x45cc61);const _0x4e09dd=async(_0x38877b,_0x2951f1)=>{const _0x39c7f6=_0x45be20;try{_0x2951f1?_0x2951f1:{};const _0x2a6617=await axios({'method':_0x39c7f6(0x1a1),'url':_0x38877b,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x2951f1,'responseType':_0x39c7f6(0x16d)});return _0x2a6617['data'];}catch(_0x2bedc9){return _0x2bedc9;}};return _0x156895[_0x45be20(0x151)]=async(_0x19e07a,_0x286f84,_0x17cc73='',_0x368167='',_0x598408)=>{const _0x58d294=_0x45be20;let _0x82a5da=Buffer[_0x58d294(0x15d)](_0x286f84)?_0x286f84:/^data:.*?\/.*?;base64,/i['test'](_0x286f84)?Buffer[_0x58d294(0x133)](_0x286f84[_0x58d294(0x1af)]`,`[0x1],_0x58d294(0x159)):/^https?:\/\//[_0x58d294(0x17e)](_0x286f84)?await await _0x4e09dd(_0x286f84):fs[_0x58d294(0x1a8)](_0x286f84)?fs[_0x58d294(0x1a7)](_0x286f84):Buffer[_0x58d294(0x14f)](0x0);return await _0x156895[_0x58d294(0x166)](_0x19e07a,{'image':_0x82a5da,'caption':_0x17cc73,..._0x598408},{'quoted':_0x368167});},_0x156895[_0x45be20(0x17f)]=(_0x501b54,_0x34082d,_0x4384b0='',_0x4f6ce5)=>_0x156895['sendMessage'](_0x501b54,{'text':_0x34082d,..._0x4f6ce5},{'quoted':_0x4384b0}),_0x156895['cMod']=(_0x4a94aa,_0x314cef,_0x3b2587='',_0x414f91=_0x156895[_0x45be20(0x16c)]['id'],_0x29e61b={})=>{const _0x3222fb=_0x45be20;let _0x186637=Object[_0x3222fb(0x157)](_0x314cef[_0x3222fb(0x182)])[0x0],_0x5749c5=_0x186637===_0x3222fb(0x150);_0x5749c5&&(_0x186637=Object['keys'](_0x314cef['message'][_0x3222fb(0x150)][_0x3222fb(0x182)])[0x0]);let _0x211e10=_0x5749c5?_0x314cef[_0x3222fb(0x182)][_0x3222fb(0x150)][_0x3222fb(0x182)]:_0x314cef[_0x3222fb(0x182)],_0x927d7f=_0x211e10[_0x186637];if(typeof _0x927d7f===_0x3222fb(0x199))_0x211e10[_0x186637]=_0x3b2587||_0x927d7f;else{if(_0x927d7f['caption'])_0x927d7f[_0x3222fb(0x1a6)]=_0x3b2587||_0x927d7f['caption'];else{if(_0x927d7f[_0x3222fb(0x1b4)])_0x927d7f['text']=_0x3b2587||_0x927d7f[_0x3222fb(0x1b4)];}}if(typeof _0x927d7f!==_0x3222fb(0x199))_0x211e10[_0x186637]={..._0x927d7f,..._0x29e61b};if(_0x314cef[_0x3222fb(0x11e)]['participant'])_0x414f91=_0x314cef['key'][_0x3222fb(0x127)]=_0x414f91||_0x314cef[_0x3222fb(0x11e)][_0x3222fb(0x127)];else{if(_0x314cef[_0x3222fb(0x11e)]['participant'])_0x414f91=_0x314cef['key'][_0x3222fb(0x127)]=_0x414f91||_0x314cef[_0x3222fb(0x11e)][_0x3222fb(0x127)];}if(_0x314cef['key'][_0x3222fb(0x19c)]['includes'](_0x3222fb(0x13a)))_0x414f91=_0x414f91||_0x314cef[_0x3222fb(0x11e)]['remoteJid'];else{if(_0x314cef[_0x3222fb(0x11e)][_0x3222fb(0x19c)][_0x3222fb(0x1ad)]('@broadcast'))_0x414f91=_0x414f91||_0x314cef['key']['remoteJid'];}return _0x314cef[_0x3222fb(0x11e)][_0x3222fb(0x19c)]=_0x4a94aa,_0x314cef['key'][_0x3222fb(0x129)]=_0x414f91===_0x156895[_0x3222fb(0x16c)]['id'],proto['WebMessageInfo'][_0x3222fb(0x1b3)](_0x314cef);},_0x156895;}startHisoka();function _0x1aef(){const _0x51d25a=['serializeM','keys','loadMessage','base64','withoutContact','Standard','chalk','isBuffer','WhatsApp','loggedOut','connectionLost','restartRequired','Restart\x20Required,\x20Restarting...','connectionClosed','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','Desktop','sendMessage','startsWith','default','session','url','getName','user','arraybuffer','creds.update','type','https://github.com/sponsors/functionofpwnosec','subject','close','body','green','sendMedia','connectionReplaced','8707920ifeWVg','7002930tiSljl','viewOnceMessage','Pwn0sec','download','contentText','1317104YRwIUf','test','sendText','@whiskeysockets/baileys','Connection\x20closed,\x20reconnecting....','message','345KPVYhK','verifiedName','isGroup','copyNForward','timedOut','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Folder\x20Session\x20Pwn0sec\x20and\x20Scan\x20Again.','selectedDisplayText','mentionedJid','quotedMessage','Bot\x20success\x20conneted\x20to\x20server','store','881880uqiCKY','@g.us','child','215665KVUDLK','catch','mtype','rejectionHandled','set','fakeObj','Unhandled\x20Rejection\x20at:','exit','string','lodash','0@s.whatsapp.net','remoteJid','unhandledRejection','reason:','output','Donate\x20for\x20creator\x20https://github.com/sponsors/functionofpwnosec','get','figlet','BAE5','join','awesome-phonenumber','caption','readFileSync','existsSync','Caught\x20exception:\x20','quoted','reply','international','includes','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot','split','using\x20WA\x20v','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','connection.update','fromObject','text','notify','endsWith','key','isBaileys','contextInfo','sender','chat','cache','@hapi/boom','statusCode',',\x20isLatest:\x20','participant','delete','fromMe','productMessage','replace','redBright','server','getQuotedMessage','watchFile','unwatchFile','decodeJid','contacts','from','copy','msg','WebMessageInfo','log','Wa-OpenAI','open','@s.whatsapp.net','9cPfNnf','60rEQjKp','Something\x20went\x20wrong','Connection\x20TimedOut,\x20Reconnecting...','textSync','file','Bot\x20started!\x0a\x0ajangan\x20lupa\x20support\x20ya\x20bang\x20:)\x0a','Update\x20','conversation','messages','axios','public','smsg','toObject','Unknown\x20DisconnectReason:\x20','getNumber','5378135PDCHqw','bind','length','stanzaId','alloc','ephemeralMessage','sendImage','15604maAfjB','downloadMediaMessage','macOS','name'];_0x1aef=function(){return _0x51d25a;};return _0x1aef();}let file=require['resolve'](__filename);fs[_0x3f5779(0x12f)](file,()=>{const _0x1175b6=_0x3f5779;fs[_0x1175b6(0x130)](file),console[_0x1175b6(0x137)](chalk[_0x1175b6(0x12c)](_0x1175b6(0x142)+__filename)),delete require[_0x1175b6(0x123)][file],require(file);});
