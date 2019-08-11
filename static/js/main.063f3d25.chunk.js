(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),i=a(14),o=a(25),s=a(7),u=a(8),m=a(10),h=a(9),d=a(11),p=(a(31),a(2)),E=function(){return l.a.createElement("h1",null,"Loading...")},f=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Phone was not found"),l.a.createElement(p.c,{to:"/phones",className:"not_found_phone"},"Click to return"))},g=a(24),b=a.n(g),v=(a(36),function(e){var t=e.handlePageChange,a=e.page,n=e.total,c=e.perPage,r=Math.ceil(n/c);return l.a.createElement("div",{className:"pagination"},function(e,t,a){for(var n=[],c=0;c<a;c++)n.push(c);return n.map(function(a,n){return l.a.createElement("button",{key:n,onClick:function(){return e(a)},className:b()({pagination_button:!0,pagination_active:t===a})},a+1)})}(t,a,r))}),y=(a(37),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={page:0,perPage:4,phones:[],isLoaded:!1,inputedValue:"",error:!1},a.handlePageChange=function(e){a.setState({page:e})},a.handleInput=function(e){var t=e.target.value;a.setState({inputedValue:t.toLowerCase(),page:0})},a.getFilteredPhones=function(e){return a.state.phones.filter(function(t){return(t.name+t.id+t.snippet).toLowerCase().includes(e.trim())})},a.getSortedPhones=function(e){switch(e.target.value){case"age":return a.setState(function(e){return{phones:Object(i.a)(e.phones).sort(function(e,t){return e.age-t.age})}});case"alphabet":return a.setState(function(e){return{phones:Object(i.a)(e.phones).sort(function(e,t){return e.name.localeCompare(t.name)})}});default:return a.setState(function(e){return{phones:e.phones}})}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json").then(function(e){return e.json()}).then(function(t){e.setState({phones:t,isLoaded:!0})}).catch(function(){e.setState({error:!0,isLoaded:!1})})}},{key:"render",value:function(){var e=this.state,t=e.inputedValue,a=e.page,n=e.perPage,c=e.isLoaded,r=e.error,i=this.props.handleClick,o=this.getFilteredPhones(t),s=a*n,u=a*n+n;return l.a.createElement("div",null,r?l.a.createElement(f,null):"",c?l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"filter-input"},l.a.createElement("input",{type:"text",className:"filter__input",value:t,onChange:this.handleInput,placeholder:"Search:"})),l.a.createElement("label",{htmlFor:"sort-field"},l.a.createElement("select",{className:"filter__selector",onChange:this.getSortedPhones},l.a.createElement("option",{value:"",style:{display:"none"}},"Sort by:"),l.a.createElement("option",{value:"age"},"Newest"),l.a.createElement("option",{value:"alphabet"},"Alphabetical"))),l.a.createElement("div",{className:"phones_list"},o.slice(s,u).map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("ul",null,l.a.createElement("li",{className:"details_list"},l.a.createElement(p.b,{to:"/phones/".concat(e.id),className:"phone_names"},l.a.createElement("img",{src:"".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(e.imageUrl),className:"img_preview",alt:"".concat(e.name)}))),l.a.createElement("li",{className:"details_list"},l.a.createElement(p.b,{to:"/phones/".concat(e.id),className:"phone_names"},e.name)),l.a.createElement("li",{className:"details_list"},e.snippet)),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return i(e)},className:"add-to-basket_button"},"Add to Basket")))}),l.a.createElement(v,{page:a,perPage:n,total:o.length,handlePageChange:this.handlePageChange}))):l.a.createElement(E,null))}}]),t}(l.a.Component)),N=(a(38),function(e){var t=e.phone,a=e.handleClick;return l.a.createElement("div",{className:"Details_List"},l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return a(t)},className:"add-to-basket_button-details"},"Add to Basket")),l.a.createElement("ul",{className:"Details_Li-ul"},l.a.createElement("b",null,"Description: "),l.a.createElement("li",null,t.description),l.a.createElement("b",null,"Display:"),l.a.createElement("ul",{className:"Details_Li-ul"},l.a.createElement("li",null,l.a.createElement("b",null,"ScreenResolution: "),t.display.screenResolution),l.a.createElement("li",null,l.a.createElement("b",null,"ScreenSize: "),t.display.screenSize),l.a.createElement("li",null,l.a.createElement("b",null,"TouchScreen: "),t.display.touchScreen?"Yes":"No")),l.a.createElement("li",null,t.additionalFeatures),l.a.createElement("li",null,l.a.createElement("b",null,"Battery:")),l.a.createElement("ul",{className:"Details_Li-ul"},l.a.createElement("li",null,l.a.createElement("b",null,"StandbyTime: "),t.battery.standbyTime),l.a.createElement("li",null,l.a.createElement("b",null,"TalkTime: "),t.battery.talkTime),l.a.createElement("li",null,l.a.createElement("b",null,"Type: "),t.battery.type)),l.a.createElement("li",null,l.a.createElement("b",null,"Connectivity:")),l.a.createElement("ul",{className:"Details_Li-ul"},l.a.createElement("li",null,l.a.createElement("b",null,"Bluetooth: "),t.connectivity.bluetooth),l.a.createElement("li",null,l.a.createElement("b",null,"Cell: "),t.connectivity.cell),l.a.createElement("li",null,l.a.createElement("b",null,"GPS: "),t.connectivity.gps?"Yes":"No"),l.a.createElement("li",null,l.a.createElement("b",null,"infrared: "),t.connectivity.infrared?"Yes":"No"),l.a.createElement("li",null,l.a.createElement("b",null,"Wi-Fi: "),t.connectivity.wifi)),l.a.createElement("li",null,l.a.createElement("b",null,"Hardware: "),l.a.createElement("ul",{className:"Details_Li-ul"},l.a.createElement("li",null,l.a.createElement("b",null,"Accelerometer: "),t.hardware.accelerometer?"Yes":"No"),l.a.createElement("li",null,l.a.createElement("b",null,"AudioJack: "),t.hardware.audioJack?t.hardware.audioJack:"NO"),l.a.createElement("li",null,l.a.createElement("b",null,"CPU: "),t.hardware.cpu),l.a.createElement("li",null,l.a.createElement("b",null,"Radio: "),t.hardware.fmRadio?"Yes":"No"),l.a.createElement("li",null,l.a.createElement("b",null,"Keyboard: "),t.hardware.physicalKeyboard?"Yes":"No"),l.a.createElement("li",null,l.a.createElement("b",null,"USB: "),t.hardware.usb)))))}),k=(a(39),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={phone:{},isLoaded:!1,imageIndex:0,isShown:!1,error:!1},a.handleSwitchImage=function(e){a.setState({imageIndex:e,isShown:!0})},a.handleCloseImage=function(){a.setState({isShown:!1})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.phoneId;fetch("".concat("https://mate-academy.github.io/phone-catalogue-static/api/phones","/").concat(t+".json")).then(function(e){return e.json()}).then(function(t){e.setState({phone:t,isLoaded:!0})}).catch(function(){e.setState({error:!0,isLoaded:!1})})}},{key:"render",value:function(){var e=this,t="/".concat(this.state.phone.images).split(","),a=this.state,n=a.phone,c=a.isLoaded,r=a.imageIndex,i=a.isShown,o=a.error,s=this.props.handleClick;return l.a.createElement("div",{className:"Phone"},o?l.a.createElement(f,null):"",c?l.a.createElement(l.a.Fragment,null,i?l.a.createElement("div",{className:"change_img_block"},l.a.createElement("div",null,r>0&&l.a.createElement("button",{onClick:function(){return e.handleSwitchImage(r-1)},className:"change-button"},"<")),l.a.createElement("div",{className:"phoneimage_preview"},l.a.createElement("img",{src:"".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(t[r]),alt:"Phone"})),l.a.createElement("div",null,r<t.length-1&&l.a.createElement("button",{onClick:function(){return e.handleSwitchImage(r+1)},className:"change-button"},">")),l.a.createElement("button",{className:"change-button",onClick:function(){return e.handleCloseImage()}},"Close")):"",l.a.createElement("div",{className:"phoneimage"},t.map(function(t,a){return l.a.createElement("img",{src:"".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(t),className:"img_preview",key:Math.random(),alt:"Phone",onClick:function(){return e.handleSwitchImage(a)}})})),l.a.createElement(N,{phone:n,handleClick:s})):"")}}]),t}(l.a.Component)),_=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home page"),l.a.createElement("h1",null,"\u4e3b\u9801"),l.a.createElement("h1",null,"Startseite"),l.a.createElement("h1",null,"\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea"),l.a.createElement("h1",null,"Leathanach baile"),l.a.createElement("h1",null,"\u10e1\u10d0\u10ec\u10e7\u10d8\u10e1\u10d8 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d8"))},P=(a(40),function(e){var t=e.selectedPhones,a=e.handleItemDelete,n=e.decreaseQuantity,c=e.increaseQuantity;return l.a.createElement("div",{className:"basket_phones_list"},l.a.createElement("h6",null,"Basket with ",t.length," item"),t.map(function(e){return l.a.createElement("div",{key:Math.random(),className:"basket_phones_item"},l.a.createElement("div",null,l.a.createElement(p.b,{to:"/phones/".concat(e.id),className:"phone_names"},l.a.createElement("img",{src:"".concat("https://mate-academy.github.io/phone-catalogue-static","/").concat(e.imageUrl),className:"img_preview_basket",alt:"".concat(e.name)}))),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/phones/".concat(e.id),className:"phone_names"},l.a.createElement("p",{className:"phone_names"},e.id)),l.a.createElement("p",null," ",e.snippet)),l.a.createElement("div",{className:"phone_quantity"},l.a.createElement("button",{onClick:function(){return c(e.id)},className:"small_delete-button"},"+"),l.a.createElement("p",null,e.quantity),l.a.createElement("button",{onClick:function(){return n(e.id)},className:"small_delete-button"},"-")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return a(e.id)},className:"delete-button"},"Delete")))}))}),S=function(){return l.a.createElement("div",{className:"error404"},l.a.createElement("h1",null,"Page not found"),l.a.createElement(p.c,{to:"/",exact:!0,className:"not_found_phone"},"Click to go to the HomePage"))},w=a(6),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={selectedPhones:[]},a.handlePhoneAdd=function(e){a.setState(function(t){return{selectedPhones:t.selectedPhones.find(function(t){return t.id===e.id})?t.selectedPhones.map(function(t){return t.id===e.id?Object(o.a)({},t,{quantity:t.quantity+1}):t}):[].concat(Object(i.a)(t.selectedPhones),[{id:e.id,name:e.name,quantity:1,imageUrl:e.imageUrl||e.images[0],snippet:e.snippet||e.description}])}})},a.increaseQuantity=function(e){return a.setState(function(t){return t.selectedPhones.filter(function(t){return t.id===e})[0].quantity+=1,{selectedPhones:t.selectedPhones}})},a.decreaseQuantity=function(e){return a.setState(function(t){return t.selectedPhones.filter(function(t){return t.id===e})[0].quantity-=1,{selectedPhones:t.selectedPhones.filter(function(e){return e.quantity>0})}})},a.handleItemDelete=function(e){var t=a.state.selectedPhones;a.setState({selectedPhones:t.filter(function(t){return t.id!==e})})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("selectedPhones"));e&&this.setState({selectedPhones:e})}},{key:"componentDidUpdate",value:function(e){var t=this.state.selectedPhones;e.selectedPhones!==t&&this.saveToLocalStorage()}},{key:"saveToLocalStorage",value:function(){var e=JSON.stringify(this.state.selectedPhones);localStorage.setItem("selectedPhones",e)}},{key:"render",value:function(){var e=this,t=this.state.selectedPhones;return l.a.createElement("div",{className:"header"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"navigation__link"},l.a.createElement(p.c,{to:"/",exact:!0},"Home")),l.a.createElement("li",{className:"navigation__link"},l.a.createElement(p.c,{to:"/phones"},"Phones")),l.a.createElement("li",{className:"navigation__link"},l.a.createElement(p.c,{to:"/basket"},"Basket")),l.a.createElement("span",{className:"navigation__link-counter"},t.length>0?t.length:""))),l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/",exact:!0,component:_}),l.a.createElement(w.a,{path:"/phones/",exact:!0,render:function(){return l.a.createElement(y,{handleClick:e.handlePhoneAdd})}}),l.a.createElement(w.a,{path:"/basket/",render:function(){return l.a.createElement(P,{selectedPhones:t,handleItemDelete:e.handleItemDelete,increaseQuantity:e.increaseQuantity,decreaseQuantity:e.decreaseQuantity})}}),l.a.createElement(w.a,{path:"/phones/:phoneId",render:function(t){var a=t.match;return l.a.createElement(k,{phoneId:a.params.phoneId,handleClick:e.handlePhoneAdd})}}),l.a.createElement(w.a,{path:"*",component:S})))}}]),t}(l.a.Component);r.a.render(l.a.createElement(p.a,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.063f3d25.chunk.js.map