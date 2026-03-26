"use strict";(()=>{chrome.runtime.onMessage.addListener((r,o,a)=>{var i;if(r.type==="GET_CONTENT"){let e=f();return a({content:e,url:window.location.href,title:document.title}),!0}if(r.type==="GET_SELECTED_CONTENT"){let e=((i=window.getSelection())==null?void 0:i.toString())||"";return a({content:e||f(),url:window.location.href,title:document.title,hasSelection:!!e}),!0}if(r.type==="OPEN_EXTRACTION_PANEL")return!1});function f(){let r=document.body;if(!r)return"";let o=r.cloneNode(!0);["script","style","noscript","iframe","svg","nav","footer","header",'[role="navigation"]','[role="banner"]','[role="contentinfo"]',".cookie-banner",".advertisement",".ad",".ads","#cookie-consent",".modal",".overlay"].forEach(t=>{o.querySelectorAll(t).forEach(n=>n.remove())});let i=o.querySelectorAll("table"),e="";i.forEach((t,n)=>{e+=`
[TABLE ${n+1}]
`,t.querySelectorAll("tr").forEach(E=>{let m=E.querySelectorAll("th, td");e+=Array.from(m).map(d=>d.innerText.trim()).join(" | ")+`
`})});let u=o.querySelectorAll("ul, ol"),s="";u.forEach((t,n)=>{s+=`
[LIST ${n+1}]
`,t.querySelectorAll("li").forEach(E=>{s+=`- ${E.innerText.trim()}
`})});let h=o.innerText||o.textContent||"",l=`PAGE TITLE: ${document.title}
URL: ${window.location.href}

`;l+=`MAIN CONTENT:
${h.slice(0,8e3)}
`,e&&(l+=`
STRUCTURED TABLES:${e}`),s&&(l+=`
LISTS:${s}`);let T=o.querySelectorAll("a[href]");return T.length>0&&T.length<100&&(l+=`
LINKS:
`,T.forEach(t=>{let n=t.innerText.trim(),c=t.href;n&&c&&!c.startsWith("javascript:")&&(l+=`${n}: ${c}
`)})),l.slice(0,15e3)}})();
