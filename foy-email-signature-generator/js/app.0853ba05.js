(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)r=s[d],n[r]&&u.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},n={1:0},i=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;i.push([1,0]),o()})({1:function(e,t,o){e.exports=o("Vtdi")},"7MBv":function(e,t,o){e.exports=o.p+"img/Rick_Sanchez.c0b19f00.png"},Vtdi:function(e,t,o){"use strict";o.r(t);o("T8Sv");var a=o("Kw5r"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"email-signature-app"}},[o("h1",[e._v("Email Signature Creator")]),o("div",{staticClass:"creator"},[o("section",[o("div",{staticClass:"creator__input"},[o("h2",[e._v("Input")]),o("form",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name",autocomplete:"new-name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{placeholder:"Title",autocomplete:"new-title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.license,expression:"license"}],attrs:{placeholder:"License Number",autocomplete:"license-number"},domProps:{value:e.license},on:{input:function(t){t.target.composing||(e.license=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addressLine1,expression:"addressLine1"}],attrs:{placeholder:"Address Line 1",autocomplete:"addressLine1"},domProps:{value:e.addressLine1},on:{input:function(t){t.target.composing||(e.addressLine1=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addressLine2,expression:"addressLine2"}],attrs:{placeholder:"Address Line 2",autocomplete:"addressLine2"},domProps:{value:e.addressLine2},on:{input:function(t){t.target.composing||(e.addressLine2=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{placeholder:"City",autocomplete:"city"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],attrs:{placeholder:"State",autocomplete:"state"},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"}],attrs:{placeholder:"Zip Code",autocomplete:"zipcode"},domProps:{value:e.zipcode},on:{input:function(t){t.target.composing||(e.zipcode=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone1,expression:"telephone1"}],attrs:{placeholder:"Phone",autocomplete:"phone1"},domProps:{value:e.telephone1},on:{input:function(t){t.target.composing||(e.telephone1=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone1description,expression:"telephone1description"}],attrs:{placeholder:"Phone Description",autocomplete:"phone1-description"},domProps:{value:e.telephone1description},on:{input:function(t){t.target.composing||(e.telephone1description=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone2,expression:"telephone2"}],attrs:{placeholder:"Phone 2",autocomplete:"phone2"},domProps:{value:e.telephone2},on:{input:function(t){t.target.composing||(e.telephone2=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone2description,expression:"telephone2description"}],attrs:{placeholder:"Phone 2 Description",autocomplete:"phone2-description"},domProps:{value:e.telephone2description},on:{input:function(t){t.target.composing||(e.telephone2description=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"Email",autocomplete:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.website,expression:"website"}],attrs:{placeholder:"Website",autocomplete:"website"},domProps:{value:e.website},on:{input:function(t){t.target.composing||(e.website=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.facebook,expression:"facebook"}],attrs:{placeholder:"Facebook",autocomplete:"facebook"},domProps:{value:e.facebook},on:{input:function(t){t.target.composing||(e.facebook=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.linkedin,expression:"linkedin"}],attrs:{placeholder:"LinkedIn",autocomplete:"linkedin"},domProps:{value:e.linkedin},on:{input:function(t){t.target.composing||(e.linkedin=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.twitter,expression:"twitter"}],attrs:{placeholder:"Twitter",autocomplete:"twitter"},domProps:{value:e.twitter},on:{input:function(t){t.target.composing||(e.twitter=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.youtube,expression:"youtube"}],attrs:{placeholder:"YouTube",autocomplete:"youtube"},domProps:{value:e.youtube},on:{input:function(t){t.target.composing||(e.youtube=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.logoCheckbox,expression:"logoCheckbox"}],attrs:{id:"logo-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.logoCheckbox)?e._i(e.logoCheckbox,null)>-1:e.logoCheckbox},on:{change:function(t){var o=e.logoCheckbox,a=t.target,n=!!a.checked;if(Array.isArray(o)){var i=null,r=e._i(o,i);a.checked?r<0&&(e.logoCheckbox=o.concat([i])):r>-1&&(e.logoCheckbox=o.slice(0,r).concat(o.slice(r+1)))}else e.logoCheckbox=n}}}),o("label",{attrs:{for:"logo-checkbox"}},[e._v("Display Logo")])])]),o("div",{staticClass:"creator__output"},[o("h2",[e._v("Output")]),o("div",{staticClass:"creator__source"},[o("div",{ref:"sourceWrapper",attrs:{id:"source-wrapper"}},[o("table",{staticStyle:{"font-family":"Helvetica, Arial, sans-serif","font-size":"14px","font-weight":"normal",color:"#37474f","text-align":"left","line-height":"20px"},attrs:{id:"source",cellpadding:"0",cellspacing:"0"}},[o("tr",[o("td",{staticStyle:{"font-size":"0px"}},[e.logoCheckbox?o("img",{staticStyle:{"padding-top":"8px"},attrs:{src:"http://hub.connectpcf.com/wp-content/uploads/sites/3/2019/03/PCFSM.png",border:"0",width:"100"}}):e._e()]),o("td",{staticStyle:{"padding-left":"10px"}},[o("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.name||"Rick Sanchez"))]),e._v(", "),o("span",{staticStyle:{color:"#78909c"}},[e._v(e._s(e.title||"Inventor"))]),""!==e.license?o("span",[o("br"),e._v("License #"+e._s(e.license))]):e._e(),""!==e.addressLine1?o("span",[o("br"),e._v(e._s(e.addressLine1))]):e._e(),""!==e.addressLine2?o("span",[o("br"),e._v(e._s(e.addressLine2))]):e._e(),""!==e.city?o("span",[o("br"),e._v(e._s(e.city))]):e._e(),""!==e.state?o("span",[e._v(", "+e._s(e.state))]):e._e(),""!==e.zipcode?o("span",[e._v(" "+e._s(e.zipcode))]):e._e(),o("br"),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.tel1}},[e._v(" "+e._s(e.telephone1||"+137 Earth 1 415 555 5555"))]),o("span",{staticStyle:{color:"#78909c"}},[e._v(" "+e._s(e.telephone1description))]),e.telephone2?o("span",{staticStyle:{color:"#999"}},[e._v(" • ")]):e._e(),e.telephone2?o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.tel2}},[e._v(" "+e._s(e.telephone2))]):e._e(),o("span",{staticStyle:{color:"#78909c"}},[e._v(" "+e._s(e.telephone2description))]),""!==e.email?o("span",[o("br"),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.emailLink}},[e._v(" "+e._s(e.email))])]):e._e(),o("br"),""!==e.website?o("span",{staticStyle:{color:"#999"}},[e._v(" • "),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.checkHttp(e.website)}},[e._v("Website")])]):e._e(),""!==e.facebook?o("span",{staticStyle:{color:"#999"}},[e._v(" • "),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.checkHttp(e.facebook)}},[e._v("Facebook")])]):e._e(),""!==e.linkedin?o("span",{staticStyle:{color:"#999"}},[e._v(" • "),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.checkHttp(e.linkedin)}},[e._v("LinkedIn")])]):e._e(),""!==e.twitter?o("span",{staticStyle:{color:"#999"}},[e._v(" • "),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.checkHttp(e.twitter)}},[e._v("Twitter")])]):e._e(),""!==e.youtube?o("span",{staticStyle:{color:"#999"}},[e._v(" • "),o("a",{staticStyle:{color:"#1f96f2"},attrs:{tabindex:"-1",href:e.checkHttp(e.youtube)}},[e._v("YouTube")])]):e._e()])])])]),e._m(0)])]),o("div",{staticClass:"creator__copy"},[o("h2",[e._v("Actions")]),o("button",{ref:"copy",staticClass:"js-copy",attrs:{id:"js-copy","data-clipboard-target":"#source"}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M22 3v21h-20v-21h4.667l-2.667 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 15h10v1h-10v-1zm0-1h10v-1h-10v1zm0-2h10v-1h-10v1zm0-2h10v-1h-10v1z"}}),o("path",{attrs:{d:"M7 14.729l.855-1.151c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.326-4.033-3.911zm15-11.729v21h-20v-21h4.666l-2.666 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"}})]),o("span",[e._v("Copy with Styles")]),o("span",{staticClass:"feedback__text"},[e._v("Copied!")])]),o("button",{ref:"copySrc",staticClass:"js-copy-src",attrs:{id:"js-copy-src","data-clipboard-target":"#source"}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M22 3v21h-20v-21h4.667l-2.667 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 15h10v1h-10v-1zm0-1h10v-1h-10v1zm0-2h10v-1h-10v1zm0-2h10v-1h-10v1z"}}),o("path",{attrs:{d:"M7 14.729l.855-1.151c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.326-4.033-3.911zm15-11.729v21h-20v-21h4.666l-2.666 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"}})]),o("span",[e._v("Copy Raw HTML")]),o("span",{staticClass:"feedback__text"},[e._v("Copied!")])])])])])])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"raw-html"}},[o("hr"),o("strong",[e._v("Raw HTML:")]),o("textarea",{attrs:{id:"raw-html-text",rows:"8",cols:"80",readonly:""}})])}],r=(o("qGDF"),o("GdbN"),o("aYGk")),s=o.n(r),l=new s.a(".js-copy");l.on("success",function(){var e=document.getElementById("js-copy");e.classList.add("feedback"),setTimeout(function(){e.classList.remove("feedback")},3e3)});var c=new s.a(".js-copy-src",{target:function(){var e=document.getElementById("raw-html-text");return e}});c.on("success",function(){var e=document.getElementById("js-copy-src");e.classList.add("feedback"),setTimeout(function(){e.classList.remove("feedback")},3e3)});var p={data:function(){return{rick:o("7MBv"),name:"",title:"",email:"",telephone1:"",telephone1description:"",telephone2:"",telephone2description:"",image:"",imageHref:"",license:"",logoCheckbox:"true",website:"",facebook:"",twitter:"",linkedin:"",youtube:"",addressLine1:"",addressLine2:"",city:"",state:"",zipcode:""}},methods:{checkHttp:function(e){return e=e.startsWith("http://")||e.startsWith("https://")?e:"http://"+e,e}},computed:{tel1:function(){return"tel:".concat(this.telephone1.replace(/ /g,"").replace(/\D/g,""))},tel2:function(){return"tel:".concat(this.telephone2.replace(/ /g,"").replace(/\D/g,""))},emailLink:function(){return"mailto:"+this.email}},updated:function(){this.$nextTick(function(){var e=document.getElementById("source-wrapper").innerHTML;document.getElementById("raw-html-text").innerHTML=e})},mounted:function(){var e=document.getElementById("source-wrapper").innerHTML;document.getElementById("raw-html-text").innerHTML=e}},d=p,u=(o("nNx0"),o("KHd+")),m=Object(u["a"])(d,n,i,!1,null,null,null),v=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(v)}}).$mount("#email-signature-app")},gCip:function(e,t,o){},nNx0:function(e,t,o){"use strict";var a=o("gCip"),n=o.n(a);n.a}});
//# sourceMappingURL=app.0853ba05.js.map
