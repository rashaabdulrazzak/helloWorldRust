(this["webpackJsonphello-world-front"]=this["webpackJsonphello-world-front"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),a=n(57),c=n.n(a),l=n(27),s=n(28),i=n(0),u=n.n(i);n(65);function h(e){return window.contract.say_hello_name({name:e})}var p=n(6);var w=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(""),c=Object(s.a)(a,2),i=c[0],w=c[1],d=Object(r.useState)(!1),f=Object(s.a)(d,2),b=f[0],O=f[1];function g(){O(!b)}function j(){return(j=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h(n);case 3:r=e.sent,console.log({result:r}),w(r),o("");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("h1",{children:[" ",i," "]}),Object(p.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(p.jsx)("input",{onChange:function(e){w(""),o(e.target.value),console.log(e.target.value)},type:"text",placeholder:"What's your name?",value:n}),Object(p.jsx)("button",{style:{backgroundColor:b?"Yellow":"white"},type:"submit",onMouseOver:g,onMouseOut:g,children:"Submit"})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))},f=Object({NODE_ENV:"production",PUBLIC_URL:"/helloWorldRust",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"helloworld.rashaabdulrazzak.testnet";var b=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:f,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:f,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},O=n(21),g=b("testnet");function j(){return(j=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.connect)(Object.assign({deps:{keyStore:new O.keyStores.BrowserLocalStorageKeyStore}},g));case 2:t=e.sent,window.walletConnection=new O.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new O.Contract(window.walletConnection.account(),g.contractName,{viewMethods:["say_hello_name","say_hello"],changeMethods:[]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(g),window.nearInitPromise=function(){return j.apply(this,arguments)}().then((function(){c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))})).catch(console.error),d()},65:function(e,t,n){},72:function(e,t){},82:function(e,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.3536371a.chunk.js.map