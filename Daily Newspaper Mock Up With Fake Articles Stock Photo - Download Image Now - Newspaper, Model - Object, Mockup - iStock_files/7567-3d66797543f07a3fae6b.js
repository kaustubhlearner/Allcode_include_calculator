(self.webpackChunkglobal_nav=self.webpackChunkglobal_nav||[]).push([[7567],{5268:function(e,t,a){"use strict";a.d(t,{v0:function(){return P},C:function(){return je}});var n=a(3426),s=a.n(n),o=a(3224),i=a.n(o);const r=new Map;var c=a(6011),l=a(2485),d=a.n(l),u=a(6634),p={container:"LcVZ5eGV8TcCbBleDWQm",toaster:"hZC3jUIHecXONIz_fYYK",positionBottomLeft:"PswK9DUtzFGg7HWrSex3",positionBottomRight:"bTcUR5xpIiITcY0moG08",positionBottom:"Otj4b94MsDxvmeLE5X49",enter:"aen6kXFN9eTABRzSW2o5",enterBottomLeft:"BgjkQVg72mCJJTEDT2Ad",enterBottomRight:"G84jIWqNtw2IkrdTRGQM",enterBottom:"fiWC53EDVpYmaZOVSHXW",enterActive:"J2KyuFTHl2CW0eai4Guv",enterDone:"WnFWkQyr7yY0JxekCW03",exit:"xlB7wMQbBMj6iGSDklvI",exitActive:"bn3ASJI_tXqWXD9JRApY",exitDone:"sY0G9zE6VJb2xW1hrYV7",exitActiveBottomLeft:"Rw8sxIpIePjsonxkAWqj",exitActiveBottomRight:"Jj_Irw0fmPAX81tKfCMg",exitDoneBottomLeft:"RpvfscS05wzO92vibRpm",exitDoneBottomRight:"Z8yIZJGdTl9Y4Ks4qHeu",exitActiveBottom:"HG0ITEw6bgz9tTqPMZ8F",exitDoneBottom:"QQP7BDCwwnl4C1haVwbg"},m=a(4848);const _=({children:e,close:t,position:a,closeTimeout:s,onClose:o})=>{const i=(0,n.useRef)(),[r,c]=(0,n.useState)(!1);(0,n.useLayoutEffect)((()=>{c(!0)}),[]),(0,n.useEffect)((()=>_()),[]);const l=()=>{o&&o(),c(!1),setTimeout(t,400)},_=()=>{i.current||(i.current=setTimeout(l,s))},g=(0,n.useCallback)((()=>{i.current&&(clearTimeout(i.current),i.current=null)}),[i.current]);return(0,m.jsx)("div",{className:p.container,children:(0,m.jsx)(u.A,{in:r,timeout:400,unmountOnExit:!0,classNames:{appear:d()(p.enter,p[`appear${a}`]),appearActive:d()(p.enterActive,p[`appearActive${a}`]),appearDone:d()(p.enterDone,p[`appearDone${a}`]),enter:d()(p.enter,p[`enter${a}`]),enterActive:d()(p.enterActive,p[`enterActive${a}`]),enterDone:d()(p.enterDone,p[`enterDone${a}`]),exit:d()(p.exit,p[`exit${a}`]),exitActive:d()(p.exitActive,p[`exitActive${a}`]),exitDone:d()(p.exitDone,p[`exitDone${a}`])},children:(0,m.jsx)("div",{onMouseLeave:_,onMouseEnter:g,className:d()(p.toaster,p[`position${a}`]),children:e})})})};var g=a(3504),h=a.n(g);const f="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,v={toasters:{}},S=(e,t)=>{switch(t.type){case"ADD":return{...e,toasters:{...e.toasters,[t.id]:{component:t.component,options:t.options}}};case"REMOVE":return delete e.toasters[t.id],{...e,toasters:{...e.toasters}};default:return e}},b=(0,n.createContext)(),y=({children:e,targetContainer:t})=>{const a=(0,n.useId)(),o=(0,n.useRef)(),[i,r]=(0,n.useReducer)(S,v),c=e=>{r({type:"REMOVE",id:e})};return f((()=>{o.current=document.querySelector(t),o.current||(o.current=document.createElement("div"),o.current.setAttribute("id",t.replace("#","")),o.current.setAttribute("data-testid",t.replace("#","")),document.body.appendChild(o.current))}),[]),(0,m.jsxs)(b.Provider,{value:{addToaster:(e,t={})=>(r({type:"ADD",id:a,component:e,options:t}),a),removeToaster:c},children:[o.current&&h().createPortal(Array.from(Object.entries(i.toasters)).map((([e,t])=>(0,m.jsx)(_,{position:t.component.props.position||"BottomRight",closeTimeout:t.component.props.closeTimeout||3e4,onClose:t.component.props.onClose,close:()=>c(e),children:s().cloneElement(t.component,{...t.component.props,close:()=>c(e)})},e))),o.current),e]})};y.defaultProps={targetContainer:"#toaster-root"};const w=()=>{const{addToaster:e,removeToaster:t}=(0,n.useContext)(b);return{addToaster:e,removeToaster:t}};var D=a(3290),x=a.n(D);async function C(){return(await x().get("/collaboration/boards/default.json",{params:{assetsPageSize:25,assetsPageNumber:1},headers:{Accept:"application/json","X-Robots-Tag":"noindex"}})).data}class k{constructor(e){if(e)for(const t of Object.keys(e))this[t]=e[t]}}class A extends k{isAssetInBoard(e){return this.defaultBoard&&this.defaultBoard.assetIds.includes(e.id)}}const B=(0,n.createContext)(),T="BOARDS_GET_DEFAULT",j="BOARDS_GET_LIST",O="BOARDS_ADD_ASSET_TO_DEFAULT_BOARD",I="BOARDS_REMOVE_ASSET_FROM_DEFAULT_BOARD",N={list:null,defaultBoard:null},E=(e=N,t)=>{let a;switch(t.type){case T:return a=t.payload,a.assetIds=a.assets.map((e=>e.uri.replace(/^gi:/,""))),{...e,defaultBoard:a};case j:return{...e,list:t.payload.boards};case I:return a={...e.defaultBoard},a.assetIds=a.assetIds.filter((e=>e!==t.payload)),{...e,defaultBoard:a};case O:return a={...e.defaultBoard},a.assetIds.push(t.payload),{...e,defaultBoard:a};default:return e}},P=({children:e})=>{const[t,a]=(0,n.useReducer)(E,N),s=async()=>{const e=await C();return a({type:T,payload:e}),e},o=async()=>{const e=await async function(){return(await x().get("/collaboration/boards.json",{params:{pageSize:250},headers:{Accept:"application/json"}})).data}();return a({type:j,payload:e}),e},l=(0,n.useMemo)((()=>new A(t)),[t]);var d;return(d=((e,t)=>{const[a,s]=(0,n.useState)(null),o=(e,t)=>{s(t)};return(0,n.useEffect)((()=>{const a=i().countSubscriptions(e),n=r.get(e),s=async()=>{const a=await t();r.set(e,a),i().publish(e,a)};return i().subscribe(e,o),0===a?(r.delete(e),s()):n?o(0,n):s(),()=>{const t=i().countSubscriptions(e);i().unsubscribe(e),1===t&&r.delete(e)}}),[]),a})("BoardToolBox.getDefaultBoard",(async()=>{if("undefined"!=typeof window&&window.user&&!window.user.isBot)return await C()})))&&!l.defaultBoard&&a({type:T,payload:d}),(0,m.jsx)(B.Provider,{value:{boards:l,createBoard:async e=>{const t=await async function(e){const t={name:e};return(await x().post("/collaboration/boards.json",t)).data}(e);return await s(),await o(),void 0!==window.eventBus&&window.eventBus.trigger("loadBoardsMenu"),t},toggleAsset:async(e,t,n)=>{await async function(e,t,a){const n={assets:[`gi:${a}`],action_type:e},s=await x().put(`/collaboration/boards/${t}.json`,n),o=new CustomEvent("boards.boardsUpdated");return window.dispatchEvent(o),s.data}(e,t,n),a({type:"add_assets"===e?O:I,payload:n})},getBoardsList:o,getDefaultBoard:s},children:(0,m.jsx)(y,{children:(0,m.jsx)(c.Zn,{children:e})})})};P.defaultProps={children:null};const R=()=>(0,n.useContext)(B);var L=a(9456),V={component:"ROKSD_iH4jHkpijGW4nq",save:"xdk6Bqtbby3Gxn8F14jB",save_istock:"zNQmbtOUvurNVzGbWZq3",save_getty:"PD4odptKmt0nzD7Xo3p7",text:"BC659xD43ntSglGhKFJX"};const F=({children:e,theme:t,onClick:a})=>{const n=(0,L.c)();return(0,m.jsxs)("li",{role:"menuitem",className:V.component,onKeyDown:e=>{"Space"!==e.code&&"Enter"!==e.code||a()},onClick:a,tabIndex:0,children:[(0,m.jsx)("span",{className:V.text,children:e}),(0,m.jsx)("span",{className:d()(V.save,V[`save_${t}`]),children:n("save")})]})};var G=a(7726),q=a.n(G),M={component:"SlhqeqU2shsnZHrdUEmO",disabled:"W3RVWf2wHjV0yggnB_hu",component_getty:"GIowS1GNjbZPVpKS23Sv",component_istock:"IrofgjBHhj23QOWqYnPl"};const W=q().bind(M),X=({className:e,children:t,disabled:a,theme:n,submit:s})=>(0,m.jsx)("button",{className:W(M.component,M[`component_${n}`],e,{disabled:a}),type:s?"submit":"button",tabIndex:"0",children:t});X.defaultProps={className:null,disabled:!1,submit:!0};var $={component:"Ov1NzTiIH0ZWZWMJnq5f",component_istock:"STzF5CKXAuyYS_tS2UXw",component_getty:"oAL2zjy4Q9y4WIZhn08S"};const z=({children:e,className:t,theme:a,onClick:n})=>(0,m.jsx)("button",{type:"button",onClick:n,className:d()($.component,t,$[`component_${a}`]),children:e});z.defaultProps={className:null,children:null,onClick:null};var J={component:"fQY0EuldZRoJkAX3zCCs",input:"S1MO7cSqH8ty5v4flB0g",input_istock:"O9WKu18rtyfQTFwBlJuq",input_getty:"_ei92pUW_ycFJUt8APCT",input_icon:"iw9PkRe3LuWJu6jhgSbn",icon:"sWS38AkgQUFsfnfwfuK_"};const U=q().bind(J),H=({className:e,defaultValue:t,placeholder:a,theme:s,icon:o,onChange:i,...r})=>{const[c,l]=(0,n.useState)(t);return(0,n.useEffect)((()=>i(c)),[c]),(0,m.jsxs)("div",{className:U(J.component,e),children:[(0,m.jsx)("input",{type:"text",value:c,onChange:e=>{l(e.target.value)},placeholder:a,className:U(J.input,J[`input_${s}`],{input_icon:o}),...r}),o&&(0,m.jsx)("img",{alt:"icon",src:o,className:J.icon})]})};H.defaultProps={className:null,defaultValue:"",icon:null,placeholder:null};var Q=a(333);class Y{constructor(e){this.trackingData=e}defaultData(){return{source:this.trackingData.site_nickname,properties:{accept_lang:this.trackingData.language,auth_state:this.trackingData.auth_state,country:this.trackingData.billing_country||this.trackingData.geolocation_country,experiences:this.trackingData.spectrum_experiences,industry:this.trackingData.industry_segment,referer:document.referrer,request_id:this.trackingData.request_id,RF_plus_enabled:this.trackingData.has_expansion_bundle,target_search_mix:this.trackingData.target_search_mix,url:this.trackingData.url,user_agent:this.trackingData.user_agent,user_id:this.trackingData.userid,visitor_count:this.trackingData.visitor_count,visitor_id:this.trackingData.visitor_id}}}assetData(e){return{asset_id:e.id||e.asset_id||e.assetId,search_position:e.slot,asset_metadata:{editorial_products:e.editorial_products||e.editorialProducts,asset_family:e.asset_family||e.assetFamily||e.family,asset_type:e.asset_type||e.assetType,has_nudity:e.has_nudity||e.hasNudity}}}searchData(e){return{asset_ids:e.asset_ids,asset_family:e.asset_family,creative_assets_type:e.creative_assets_type,exclude_nudity:e.exclude_nudity,license:e.license,number_of_concepts:e.number_of_concepts,page_number:e.page_number,pa_agreement_filter:e.pa_agreement_filter,sbi:e.sbi,search_page_format:e.search_page_format,sort_type:e.sort_type,phrase:e.phrase,queried_keywords_by_clause:e.queried_keywords_by_clause,total_number_of_results:e.total_number_of_results}}adpCategoryLinkClickSignalData(e){const t=this.defaultData();return t.event="ADP Category Link Click",t.properties={...t.properties,...e},t}adpCategoryBrowseClickSignalData(e){const t=this.defaultData();return t.event="ADP Category Browse Click",t.properties={...t.properties,...e},t}cartRemoveItemSignalData(e){const t=this.defaultData();return t.event="Cart Remove Item",t.properties={...t.properties,...e},t}chatRequestSuccessSignalData(e){const t=this.defaultData();return t.event="Chat Request Success",t.properties={...t.properties,...e},t}chatClosedSignalData(e){const t=this.defaultData();return t.event="Chat Closed",t.properties={...t.properties,...e},t}chatOpenDataSignalData(e){const t=this.defaultData();return t.event="Chat Open",t.properties={...t.properties,...e},t}pnpSubscriptionTermToggleSignalData(e){const t=this.defaultData();return t.event="PNP Subscription Term Toggle",t.properties={...t.properties,...e},t}pnpFaqSignalData(e){const t=this.defaultData();return t.event="PNP FAQ",t.properties={...t.properties,...e},t}boardCreatedSignalData(e,t){const a=this.defaultData();return a.event="Board Created",a.properties={...a.properties,board_id:e,...t},a}boardDeletedSignalData(e,t){const a=this.defaultData();return a.event="Board Deleted",a.properties={...a.properties,board_id:e,...t},a}boardItemRemovedSignalData(e,t,a){const n=this.defaultData();return n.event="Board Removed Item",n.properties={...n.properties,board_id:t,...this.assetData(e),...a},n}assetAddedToCartSignalData(e,t){const a=this.defaultData();return a.event="Asset Added To Cart",a.properties={...a.properties,...this.assetData(e),...t},a}assetDetailsViewedSignalData(e,t){const a=this.defaultData();return a.event="Asset Details Viewed",a.properties={...a.properties,...this.assetData(e),...t},a}assetCompDownloadedSignalData(e,t){const a=this.defaultData();return a.event="Asset Comp Downloaded",a.properties={...a.properties,...this.assetData(e),...t},a}assetPurchasedSignalData(e,t){const a=this.defaultData();return a.event="Asset Purchased",a.properties={...a.properties,...this.assetData(e),...t},a}assetDownloadedSignalData(e,t){const a=this.defaultData();return a.event="Asset Downloaded",a.properties={...a.properties,...this.assetData(e),...t},a}bulkDownloadedSignalData(e){const t=this.defaultData();return t.event="Bulk Downloaded",t.properties={...t.properties,...e},t}assetAddedToBoardSignalData(e,t,a){const n=this.defaultData();return n.event="Asset Added To Board",n.properties={...n.properties,...this.assetData(e),board_id:t,...a},n}itemSelectedSignalData(e,t,a,n){const s=this.defaultData();return s.event="Item Selected",s.properties={...s.properties,location:e,selection:{name:t,value:a},...n},s}assetImpressionsSignalData(e,t){const a=this.defaultData();return a.event="Asset Impression",a.properties={...a.properties,asset_ids:e,...t},a}searchSignalData(e,t){const a=this.defaultData();return a.event="Search Results Viewed",a.properties={...a.properties,...this.searchData(e),...t},a}searchMoreLikeThisSignalData(e,t){const a=this.defaultData();return a.event="Search More Like This Viewed",a.properties={...a.properties,...this.searchData(e),...t},a}async sendChatClosedSignal(e={}){return this.postSignal(this.chatClosedSignalData(e))}async sendBoardDeletedSignal(e,t={}){return this.postSignal(this.boardDeletedSignalData(e,t))}async sendAdpCategoryLinkClickSignal(e={}){return this.postSignal(this.adpCategoryLinkClickSignalData(e))}async sendAdpCategoryBrowseClickSignal(e={}){return this.postSignal(this.adpCategoryBrowseClickSignalData(e))}async sendCartRemoveItemSignal(e={}){return this.postSignal(this.cartRemoveItemSignalData(e))}async sendChatRequestSuccessSignal(e={}){return this.postSignal(this.chatRequestSuccessSignalData(e))}async sendChatOpenDataSignal(e={}){return this.postSignal(this.chatOpenDataSignalData(e))}async sendPnpFaqSignalSignal(e={}){return this.postSignal(this.pnpFaqSignalData(e))}async sendPnpSubscriptionTermToggleSignal(e={}){return this.postSignal(this.pnpSubscriptionTermToggleSignalData(e))}async sendAssetAddedToBoardSignal(e,t,a={}){return this.postSignal(this.assetAddedToBoardSignalData(e,t,a))}async sendAssetCompDownloadedSignal(e,t={}){return this.postSignal(this.assetCompDownloadedSignalData(e,t))}async sendBoardCreatedSignal(e={}){return this.postSignal(this.boardCreatedSignalData({}))}async sendAssetDownloadedSignal(e,t={}){return this.postSignal(this.assetDownloadedSignalData(e,t))}async sendBoardItemRemovedSignal(e,t,a={}){return this.postSignal(this.boardItemRemovedSignalData(e,t,a))}async sendAssetPurchasedSignal(e,t={}){return this.postSignal(this.assetPurchasedSignalData(e,t))}async sendBulkDownloadedSignal(e={}){return this.postSignal(this.bulkDownloadedSignalData(e))}async sendItemSelectedSignal(e,t,a,n={}){return this.postSignal(this.itemSelectedSignalData(e,t,a,n))}async sendAssetAddedToCartSignal(e,t={}){return this.postSignal(this.assetAddedToCartSignalData(e,t))}async sendAssetDetailsViewedSignal(e,t={}){return this.postSignal(this.assetDetailsViewedSignalData(e,t))}async sendAssetImpressionsSignal(e,t={}){return this.postSignal(this.assetImpressionsSignalData(e,t))}async sendSearchSignal(e,t={}){return this.postSignal(this.searchSignalData(e,t))}async postSignal(e){var t;e.pipeline_id=window.pipelineId,e.app_name=null==(t=window.application)?void 0:t.app_prefix;const a=`${this.trackingData.spectrum_host_three}signals`;try{"undefined"!=typeof window&&window.navigator&&window.navigator.sendBeacon?await window.navigator.sendBeacon(a,JSON.stringify([e])):await x().post(a,[e])}catch(e){return{}}}}var K=a(4038);const Z=()=>{const e=(0,K.y)(),t=new Y(e);return{sendAssetAddedToBoardSignal:(e,a,n)=>t.sendAssetAddedToBoardSignal(e,a,n),sendAssetAddedToCartSignal:(e,a)=>t.sendAssetAddedToCartSignal(e,a),sendAssetDetailsViewedSignal:(e,a)=>t.sendAssetDetailsViewedSignal(e,a),sendAssetCompDownloadedSignal:(e,a)=>t.sendAssetCompDownloadedSignal(e,a),sendAssetDownloadedSignal:(e,a)=>t.sendAssetDownloadedSignal(e,a),sendAssetImpressionsSignal:(e,a)=>t.sendAssetImpressionsSignal(e,a),sendBulkDownloadedSignal:e=>t.sendBulkDownloadedSignal(e),sendItemSelectedSignal:(e,a,n,s)=>t.sendItemSelectedSignal(e,a,n,s),sendSearchSignal:(e,a)=>t.sendSearchSignal(e,a),sendPnpSubscriptionTermToggleSignal:e=>t.sendPnpSubscriptionTermToggleSignal(e),sendAdpCategoryBrowseClickSignal:e=>t.sendAdpCategoryBrowseClickSignal(e),sendAdpCategoryLinkClickSignal:e=>t.sendAdpCategoryLinkClickSignal(e),sendChatRequestSuccessSignal:e=>t.sendChatRequestSuccessSignal(e),sendBoardItemRemovedSignal:(e,a,n)=>t.sendBoardItemRemovedSignal(e,a,n),sendAssetPurchasedSignal:(e,a)=>t.sendAssetPurchasedSignal(e,a),sendCartRemoveItemSignal:e=>t.sendCartRemoveItemSignal(e),sendBoardCreatedSignal:e=>t.sendBoardCreatedSignal(e),sendPnpFaqSignalSignal:e=>t.sendPnpFaqSignalSignal(e),sendChatOpenDataSignal:e=>t.sendChatOpenDataSignal(e),sendBoardDeletedSignal:(e,a)=>t.sendBoardDeletedSignal(e,a),sendChatClosedSignal:e=>t.sendChatClosedSignal(e)}};var ee=a(3422),te=a(91);var ae=(0,te.p2)((({event:e,modal_content:t,modal_type:a,cta_text:n,ui_element_location:s,item_id:o,modal_selection:i})=>({event:"modal_interaction",event_name:e,modal_interaction:e,modal_content:t,modal_type:a,cta_text:n,ui_element_location:s,...o&&{item_id:o},...i&&{modal_selection:i}})));var ne=(0,te.p2)((({ui_element_location:e,board_interaction:t,asset_id:a,asset_type:n,asset_family:s})=>a?{event:"remove_from_board",board_interaction:t,ui_element_location:e,asset_id:a,asset_type:n,asset_family:s}:{event:"remove_from_board",board_interaction:t,ui_element_location:e}));var se=(0,te.p2)((({ui_element_location:e,board_interaction:t,asset_id:a,asset_type:n,asset_family:s})=>({event:"add_to_board",board_interaction:t,ui_element_location:e,asset_id:a,asset_type:n,asset_family:s}))),oe="gJyuZp8xrnzIts2l23Gi",ie="hBWKwlLi9OgFk3Cb934S",re="WFQgkKCxGYgooj0vQhCw",ce="UdMqNc9ZRej2P8uVFG8y",le="hc9uW7ikPpUj86iBzXAm",de="jYgYU0G0Z5EIpdA0eMP3",ue="M5e1kHf5gv4LDrFVRYhN";const pe=({className:e,asset:t,uiLocation:a,modal:o,toaster:i,tooltip:r,children:l})=>{const p=(0,L.c)(),_=(0,n.useRef)(),[g,h]=(0,n.useState)(null),[f]=((e,t=0)=>{const[a,s]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1),r=(0,n.useRef)(null),c=()=>{r.current&&clearTimeout(r.current),s(!0),i(!0)},l=()=>{r.current=setTimeout((()=>{e.current&&s(!1)}),t)};return(0,n.useEffect)((()=>(e.current&&(e.current.addEventListener("mouseenter",c),e.current.addEventListener("focus",c),e.current.addEventListener("mouseleave",l),e.current.addEventListener("blur",l)),()=>{e.current&&(e.current.removeEventListener("mouseenter",c),e.current.removeEventListener("focus",c),e.current.removeEventListener("mouseleave",l),e.current.removeEventListener("blur",l))})),[]),[a,o]})(_,300),{boards:v,toggleAsset:S,getDefaultBoard:b}=R(),y=(0,Q.m)(),D=Z(),{showModal:x}=(0,c.hS)(),{addToaster:C}=w(),k=v.isAssetInBoard(t);(0,n.useEffect)((()=>{null!=v&&v.defaultBoard||b(),h(_.current.offsetWidth/2)}),[]);const A=(e,n)=>({[e]:[t],board_name:n,grid_slot_number:t.slot,ui_element_location:a});return(0,m.jsxs)("button",{type:"button",ref:_,"data-testid":"add-to-board-button","aria-label":p(k?"remove_from_board":"save"),onClick:()=>{if(v.defaultBoard){if("default"===v.defaultBoard.id)return x(s().cloneElement(o,{asset:t,uiLocation:a.replace("_overlay","")})),void(0,ee.C)(ae({event:"open_modal",modal_content:"choose_board",modal_type:"detailed_modal_with_cta",cta_text:"save",ui_element_location:"boards_tooltip",modal_selection:"choose_board_button"}));if(k){const e=ne({ui_element_location:a,board_interaction:"remove_single_asset_from_board",asset_id:t.id,asset_type:t.assetType,asset_family:t.family});(0,ee.C)(e),D.sendBoardItemRemovedSignal(t,v.defaultBoard.id),y.trackEvent("removeFromBoard",A("removed_items",v.defaultBoard.name)),S("remove_assets",v.defaultBoard.id,t.id),C(i)}else{const e=se({ui_element_location:a,board_interaction:"add_to_existing_board",asset_id:t.id,asset_type:t.assetType,asset_family:t.family});(0,ee.C)(e),y.trackEvent("addToBoard",A("added_items",v.defaultBoard.name)),D.sendAssetAddedToBoardSignal(t,v.defaultBoard.id),S("add_assets",v.defaultBoard.id,t.id),C(i)}}},className:d()(oe,e),children:[l({isAssetInBoard:k,uiLocation:a,hover:f}),(0,m.jsx)(u.A,{in:f,unmountOnExit:!0,timeout:300,classNames:{appear:ie,appearActive:re,appearDone:ce,enter:ie,enterActive:re,enterDone:ce,exit:le,exitActive:de,exitDone:ue},children:s().cloneElement(r,{asset:t,uiLocation:a,center:g})})]})};pe.defaultProps={className:null};var me="GKP6Fpm4HXOuAuuXolbw";const _e=({boards:e,theme:t,onSelect:a})=>(0,m.jsx)("ul",{role:"menu",className:me,children:e.map((({name:e,id:n})=>(0,m.jsx)(F,{theme:t,onClick:()=>a(n),children:e},n)))});var ge=a(7632),he={container:"tzGUREwXaulsAfDEA590",container_getty:"_vOibaUSX40QlMatXrA6",container_istock:"gdXJtL3ZC5t7rO9R4lTk",content:"H61GC57uR9gxOkAnlGLl",thumbnail:"oIDOcQM73sIpyfyexz8P",thumbnailImg:"F4toIFNNQ7PLsSDtzTJ9",offlineThumbnail:"VvXL4glil6HKNQHdyHiy",offlineAsset:"HXN_l1xCeKXqLXicC8pK",contentData:"lEobpimKIxloY5cb3m8L",title:"zISal7CHRKUMFmXwHcgS",message:"oGoXoXRxE6QBOPJKfPQD",message_getty:"n4lffLJRnEYSjLvi70LD",message_istock:"AUwHQIVCdkqSZDb1BSuz"};const fe=({uiLocation:e,asset:t,theme:a})=>{var n;const s=(0,Q.m)(),o=(0,L.c)(),{boards:i}=R(),r=(0,ge.F)(),c=()=>{const a={board_id:i.defaultBoard.id,"boards.toasterAsset_id":t.id,notification_interaction:"Boards_Notification_Saved_to_Board_Click",ui_element_location:e,products_string:[t.family,t.assetType,t.licenseType,t.collectionCode,t.quality,t.releaseCode].join("|")};s.trackEvent("BoardsNotificationClicked",a),i.isAssetInBoard(t)&&s.trackEvent("boardsNotificationInteraction",a),window.location.href=r.boardUrl(i.defaultBoard.id)};return(0,m.jsx)("div",{className:d()(he.container,he[`container_${a}`]),onClick:c,onKeyDown:e=>{"Space"!==e.code&&"Escape"!==e.code||c()},tabIndex:0,role:"button",children:(0,m.jsxs)("div",{className:he.content,children:[t.isOffline?(0,m.jsx)("div",{className:d()(he.thumbnail,he.offlineThumbnail),children:(0,m.jsx)("p",{className:he.offlineAsset,children:t.shortTitle})}):(0,m.jsx)("div",{className:he.thumbnail,children:(0,m.jsx)("img",{alt:t.title,className:he.thumbnailImg,src:t.thumbUrl})}),(0,m.jsxs)("div",{className:he.contentData,children:[(0,m.jsxs)("div",{className:he.title,children:[(0,m.jsx)("div",{className:he.title__icon}),(0,m.jsx)("div",{className:he.title__title,children:i.isAssetInBoard(t)?o("saved_to_board"):o("removed_from_board")})]}),(0,m.jsx)("div",{className:d()(he.message,he[`message_${a}`]),children:null==(n=i.defaultBoard)?void 0:n.name})]})]})})};fe.defaultProps={position:"Bottom",closeTimeout:3e3};var ve={container:"WIFDcBPY5V5ICiqNucLA",name:"xooqV3GpBVl3zp8nTSl_",container_istock:"T89n0CRtOkHCOPtYOVcv",title:"P3tfhRpltQlMpTXab43r",container_getty:"GyFrTJaQzWYkjiYnFNMc",arrow:"gi53uNT934yn_fAXWJ8w",caret:"bTTUkpXgsgg_NeAtXVBN",caret_getty:"FW_EBCfpGGnqrsDxYRBy",caret_istock:"slb1neOvJhckVarhJkRj"};const Se=({asset:e,uiLocation:t,className:a,modal:n,theme:s,center:o})=>{const i=(0,Q.m)(),r=(0,L.c)(),{boards:l}=R(),{showModal:u}=(0,c.hS)(),p=a=>{a.stopPropagation(),u(n),i.trackEvent("BoardsToolboxOpen",{board_name:l.defaultBoard.name,grid_slot_number:e.slot,ui_element_location:t}),(0,ee.C)(ae({event:"open_modal",modal_content:"choose_board",modal_type:"detailed_modal_with_cta",cta_text:"new_board",ui_element_location:"asset_overlay",modal_selection:"choose_board_title"}))};return(0,m.jsxs)("div",{"data-testid":"add-to-board-tooltip",role:"button",tabIndex:0,className:d()(ve.container,a,ve[`container_${s}`]),onClick:p,onKeyDown:e=>{"Space"!==e.code&&"Enter"!==e.code||p()},children:[(0,m.jsxs)("div",{className:ve.title,children:[l.isAssetInBoard(e)?r("remove_from_board"):r("save_to_board"),(0,m.jsx)("span",{className:d()(ve.caret,ve[`caret_${s}`])})]}),l.defaultBoard&&(0,m.jsx)("div",{className:ve.name,children:l.defaultBoard.name}),(0,m.jsx)("div",{className:ve.arrow,style:o&&{right:o-9}})]})};Se.defaultProps={center:null,asset:null,className:""};var be=a.p+"static/search-494309da7da14895f705.svg",ye={textInput:"uf69CuVT7lzcdO42JOtQ"};const we=({className:e,boards:t,theme:a,onSelect:s})=>{const o=(0,L.c)(),[i,r]=(0,n.useState)(""),c=t.filter((e=>{var t;return null==e||null==(t=e.name)?void 0:t.toLowerCase().includes(i.toLowerCase())}));return(0,m.jsxs)("div",{className:d()(ye.component,e),children:[(0,m.jsx)(H,{theme:a,className:ye.textInput,icon:be,placeholder:o("board_name"),onChange:r}),(0,m.jsx)(_e,{boards:c,theme:a,onSelect:s})]})};we.defaultProps={className:null};var De={textInput:"zuBm4sa22zTzsBVXWNat"};const xe=({className:e,theme:t,onSubmit:a})=>{const s=(0,L.c)(),[o,i]=(0,n.useState)(null);return(0,m.jsxs)("form",{"data-testid":"create-board-form",autoComplete:"off",className:d()(De.component,e),onSubmit:e=>{e.preventDefault(),a(o)},children:[(0,m.jsx)(H,{theme:t,placeholder:s("board_name"),className:De.textInput,onChange:i,maxLength:"255"}),(0,m.jsx)(X,{type:"submit",theme:t,disabled:!o,children:s("save")})]})};xe.defaultProps={className:null};var Ce=(0,te.p2)((e=>({event:"create_board",board_interaction:"create_board",ui_element_location:e})));var ke="bxhU42HCgfXt8k95STXY",Ae="jwORId9IpxHp0J6ZMOiw",Be="RT89DGS0NmrfoNDDK1L0",Te="d6iYfljLBBNYUXJvcaJ1";const je=({theme:e})=>{const t=(0,Q.m)(),a=(0,L.c)(),s=R();(0,n.useEffect)((()=>{t.trackEvent({eventType:"gtm",eventName:"BoardsMenuCreate"}),(0,ee.C)(ae({event:"open_modal",modal_content:"create_board",modal_type:"detailed_modal_with_cta",cta_text:"create_board",ui_element_location:"boards_menu_container",modal_selection:"create_board_modal_open"}))}),[]);return(0,m.jsx)(c.aF,{onClose:()=>{t.trackEvent({eventType:"gtm",eventName:"CreateBoardModalClosed"}),(0,ee.C)(ae({event:"close_modal",modal_content:"create_board",modal_type:"detailed_modal_with_cta",cta_text:"create_board",ui_element_location:"modal_x",modal_selection:"create_board_modal_close"}))},header:a("create_new_board"),modalClassName:Be,headerClassName:ke,bodyClassName:Ae,children:a=>(0,m.jsx)(xe,{onSubmit:e=>(async(e,a)=>{const n=new CustomEvent("boards.boardsUpdated"),o=Z();await s.createBoard(e),t.trackEvent({eventType:"gtm",eventName:"createBoard",boardName:e}),o.sendBoardCreatedSignal(),window.dispatchEvent(n);const i=Ce("boards_menu_container");(0,ee.u)(null,i),a()})(e,a),theme:e,className:Te})})}},6746:function(e,t,a){"use strict";a.d(t,{A:function(){return f}});var n=a(3426);const s=Date.now(),o=async(e,t,n)=>{await(e=>new Promise(((t,a)=>{if(window[e])return void t();const n=document.createElement("script"),o=e.replace(/_/g,"-");n.src=`/components/${o}/static/remoteEntry.js?${s}`,n.type="text/javascript",n.async=!0,n.onload=()=>{t()},n.onerror=a,document.head.appendChild(n)})))(e),await a.I(n);const o=window[e];return await o.init(a.S[n]),o.get(t)};var i=()=>{const e=window.currentSite,t=window.experiences;return{experiences:t,site:e,locale:window.user.locale,imageFilmGrid:(()=>{var a,n,s;const o=null==t||null==(a=t.creativeimagefilmgridexperience)?void 0:a.isActive,i=null==t||null==(n=t.edimagefilmgridtest)?void 0:n.isActive,r="test"===(null==t||null==(s=t.edimagefilmgridtest)||null==(s=s.activeOffers)?void 0:s.offers);return{inExperience:"istock"===e.nickname||o||r,inCreativeExperience:o,inEditorialTest:i}})()}},r=a(3290),c=a.n(r);const l=e=>{var t;return 401===(null==e?void 0:e.status)&&!0===(null==(t=e.data)||null==(t=t.errorDetails)?void 0:t.forceSignIn)};function d(e,t,a){l(a)&&(null!=t||(t=""),e.location.href=`${t}/sign-in?returnUrl=${encodeURIComponent(e.location.pathname+e.location.search)}`)}var u=e=>{const t=c().create();return e&&(e.startsWith("/")||(e=`/${e}`),t.interceptors.request.use((t=>{var a;return null!=(a=t.url)&&a.includes(e)||(t.url=`${e}${t.url}`),t}))),t.interceptors.response.use(function(e,t){return a=>(d(e,t,a),a)}(window,e),function(e,t){return a=>(a.response&&d(e,t,a.response),Promise.reject(a))}(window,e)),t},p=a(4848);var m=(e,t,a,s)=>{e[t]=e[t]||{};let r=e[t][a];return r||(r=(0,n.lazy)((async()=>{var e;const n=await(async(e,t,a)=>(await o(e,t,a))().default)(t,a,s),r=i(),c=u(null==(e=r.site)?void 0:e.countryLanguagePrefix);return{default:e=>(0,p.jsx)(n,{...r,axios:c,...e})}})),e[t][a]=r),r},_=a(8689),g=a.n(_);const h=(0,n.createContext)({});var f=(e,t,a="default")=>({children:s,...o})=>{const i=(0,n.useContext)(h);let r;return r="undefined"!=typeof window?m(i,e,t,a):g()(e,t,o),(0,p.jsx)(r,{...o,children:s})}},7250:function(e,t,a){"use strict";var n=a(91);t.A=(0,n.p2)((function(e){return{event:"notification_interaction",event_name:e.event,notification_interaction:e.event,notification_description:e.notification_description,notification_type:e.notification_type,cta_text:e.cta_text,cta_url:e.cta_url,ui_element_location:e.ui_element_location,item_id:e.item_id,event_model:e.event_model}}))},753:function(e,t,a){"use strict";a.d(t,{p:function(){return o}});var n=a(91);const s=(0,n.p2)((({event_name:e,search_selection:t,ui_element_location:a,search_grid_slot_number:n})=>({event:"search_interaction",event_name:e,search_interaction:e,search_selection:t,ui_element_location:a,search_grid_slot_number:n}))),o=(0,n.p2)((({is_show:e})=>s({event_name:"show_search_bar",search_selection:e?"show":"hide",ui_element_location:"search_icon_toggle"})))},1989:function(e,t,a){"use strict";var n=a(91);t.A=(0,n.p2)((({ui_element_location:e="",customer_type:t="unknown"})=>({event:"sign_up_interaction",event_name:"select_sign_up",ui_element_location:e,customer_type:t})))},333:function(e,t,a){"use strict";function n(){"undefined"!=typeof window&&window.combinedGtmTracking&&window.combinedGtmTracking.gtmSearchResultsChanged()}a.d(t,{m:function(){return i}});class s{constructor(e){this.intersectionOptionsDefault={root:null,rootMargin:"0px",threshold:.85},this.canSeeElement=e=>null!=window.combinedGtmTracking&&!this.isViewed&&e.isIntersecting,this.sendSeenTracking=()=>{window.combinedGtmTracking.gtmPushTracking(this.interactionName,this.interactionDetails),this.isViewed=!0},this.callbackFunction=e=>{const[t]=e;this.canSeeElement(t)&&this.sendSeenTracking()};const{interactionName:t,interactionDetails:a,intersectionOptions:n}=e;this.interactionName=t,this.interactionDetails=a,this.intersectionOptions=this.intersectionOptionsDefault,null!=n&&(this.intersectionOptions=n),this.savedTarget=null}sendTracking(e){if(this.isViewed||!e.current||"undefined"==typeof window||!window.combinedGtmTracking)return()=>"";const t=new IntersectionObserver(this.callbackFunction,this.intersectionOptions);return t.observe(e.current),this.savedTarget=null==e?void 0:e.current,()=>{this.savedTarget&&t.unobserve(this.savedTarget)}}}var o=a(4038);const i=()=>{const e=(e,t=0)=>{new Promise((a=>{setTimeout((()=>{e(),a()}),t)}))};return{prepareEvent:(t,a)=>e((()=>function(e,t){if("undefined"!=typeof window&&window.giLocalStorage){window.giLocalStorage.setItem("tracking-data.event",e);for(let e in t)window.giLocalStorage.setItem(`tracking-data.${e.replace(/_/g,"-")}`,t[e])}}(t,a))),trackEvent:(t,a)=>e((()=>function(e,t){"undefined"!=typeof window&&window.combinedGtmTracking&&window.combinedGtmTracking.gtmPushTracking(e,t)}(t,a))),trackSearch:()=>e(n),trackGa4Event:t=>e((()=>function(e){"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(e))}(t))),trackAbTestVariation:e=>function(e){if("undefined"!=typeof window&&"string"==typeof e){let t=window.tracking_data.ab_test_variation;window.tracking_data.ab_test_variation=t?`${t}|${e}`:e}}(e),trackViewed:e=>new s(e),fetchTrackingData:o.y}}},4038:function(e,t,a){"use strict";a.d(t,{y:function(){return n}});const n=()=>"undefined"!=typeof window&&window.tracking_data?window.tracking_data:{}},4721:function(e,t,a){"use strict";var n=a(3426),s=a(5556),o=a.n(s);const i=new Promise((e=>{"undefined"!=typeof document?document.addEventListener("CNS:tooltips",(t=>e(t.detail.tooltips)),{once:!0}):e(new Map)})),r=({type:e})=>{const[t,a]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{const t=(await i).get(e);t&&a(t)})()}),[e,a]),t};r.propTypes={type:o().string.isRequired},t.A=r},6773:function(e,t,a){"use strict";a(3426);var n=a(8707),s=a.n(n),o=a(4848);t.A=({children:e,trusted:t=!1})=>{const a="string"!=typeof e||t?e:(n=e,s()(n,{allowedTags:["a","b","i","em","strong","strike","br"],allowedAttributes:!1}));var n;return(0,o.jsx)("span",{"data-testid":"sanitizedString",dangerouslySetInnerHTML:{__html:a}})}},3224:function(e,t,a){e=a.nmd(e),function(a,n){"use strict";var s={};a.PubSub?s=a.PubSub:(a.PubSub=s,function(e){var t={},a=-1,n="*";function s(e){var t;for(t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}function o(e){return function(){throw e}}function i(e,t,a){try{e(t,a)}catch(e){setTimeout(o(e),0)}}function r(e,t,a){e(t,a)}function c(e,a,n,s){var o,c=t[a],l=s?r:i;if(Object.prototype.hasOwnProperty.call(t,a))for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&l(c[o],e,n)}function l(e,t,a){return function(){var s=String(e),o=s.lastIndexOf(".");for(c(e,e,t,a);-1!==o;)o=(s=s.substr(0,o)).lastIndexOf("."),c(e,s,t,a);c(e,n,t,a)}}function d(e){var a=String(e);return Boolean(Object.prototype.hasOwnProperty.call(t,a)&&s(t[a]))}function u(e){for(var t=String(e),a=d(t)||d(n),s=t.lastIndexOf(".");!a&&-1!==s;)s=(t=t.substr(0,s)).lastIndexOf("."),a=d(t);return a}function p(e,t,a,n){var s=l(e="symbol"==typeof e?e.toString():e,t,n);return!!u(e)&&(!0===a?s():setTimeout(s,0),!0)}e.publish=function(t,a){return p(t,a,!1,e.immediateExceptions)},e.publishSync=function(t,a){return p(t,a,!0,e.immediateExceptions)},e.subscribe=function(e,n){if("function"!=typeof n)return!1;e="symbol"==typeof e?e.toString():e,Object.prototype.hasOwnProperty.call(t,e)||(t[e]={});var s="uid_"+String(++a);return t[e][s]=n,s},e.subscribeAll=function(t){return e.subscribe(n,t)},e.subscribeOnce=function(t,a){var n=e.subscribe(t,(function(){e.unsubscribe(n),a.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var a;for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&0===a.indexOf(e)&&delete t[a]},e.countSubscriptions=function(e){var a,n,s=0;for(a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&0===a.indexOf(e)){for(n in t[a])s++;break}return s},e.getSubscriptions=function(e){var a,n=[];for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&0===a.indexOf(e)&&n.push(a);return n},e.unsubscribe=function(a){var n,s,o,i=function(e){var a;for(a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&0===a.indexOf(e))return!0;return!1},r="string"==typeof a&&(Object.prototype.hasOwnProperty.call(t,a)||i(a)),c=!r&&"string"==typeof a,l="function"==typeof a,d=!1;if(!r){for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(s=t[n],c&&s[a]){delete s[a],d=a;break}if(l)for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&s[o]===a&&(delete s[o],d=!0)}return d}e.clearSubscriptions(a)}}(s)),void 0!==e&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s}("object"==typeof window&&window||this)}}]);
//# sourceMappingURL=7567-3d66797543f07a3fae6b.js.map