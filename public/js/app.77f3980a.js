(function(e){function t(t){for(var o,a,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)a=i[d],r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},1950:function(e,t,n){},"19aa":function(e,t,n){},"1c84":function(e,t,n){"use strict";var o=n("6edd"),r=n.n(o);r.a},"1da8":function(e,t,n){"use strict";var o=n("1950"),r=n.n(o);r.a},"297c":function(e,t,n){e.exports=n.p+"img/bacon-heart.b99cc1ed.jpg"},"2a7d":function(e,t,n){},"2d60":function(e,t,n){},"2ea9":function(e,t,n){"use strict";var o=n("6cde"),r=n.n(o);r.a},"2fe3":function(e,t,n){"use strict";var o=n("90e6"),r=n.n(o);r.a},"555a":function(e,t,n){e.exports=n.p+"img/icon.d2eece8f.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{user:e.user,onSignOut:e.handleSignOut}}),n("div",{staticClass:"demo"},[n("button",{on:{click:function(t){return t.preventDefault(),e.handleAddWorkout(t)}}},[e._v("add workout")]),n("button",{on:{click:function(t){return t.preventDefault(),e.handleRemoveWorkout(t)}}},[e._v("remove workout")]),n("button",{on:{click:function(t){return t.preventDefault(),e.handleAddLog(t)}}},[e._v("add log")]),n("button",{on:{click:function(t){return t.preventDefault(),e.handleRemoveLog(t)}}},[e._v("remove log")]),n("button",{on:{click:function(t){return t.preventDefault(),e.handleUpdateLog(t)}}},[e._v("update log")])]),n("RouterView",{attrs:{workoutSet:e.workoutSet,programSet:e.programSet,movements:e.movements,muscles:e.muscles,muscleMovements:e.muscleMovements,selectedMuscle:e.selectedMuscle,user:e.user,onUser:e.handleUser,handleAddLog:e.handleAddLog}}),n("Footer")],1)},a=[],i=(n("7f7f"),n("ac6a"),"/api"),c="".concat(i,"/auth"),u="".concat(i,"/movements"),l="".concat(i,"/programs"),d="".concat(i,"/me/workouts"),m="".concat(i,"/me/logs"),f="".concat(i,"/muscles");function p(e){return e.ok?e.json():e.json().then(function(e){throw e.error})}var v="";function h(){var e={"Content-Type":"application/json"};return v&&(e["Authorization"]=v),e}function g(e){return fetch("".concat(c,"/signup"),{method:"POST",headers:h(),body:JSON.stringify(e)}).then(p).then(function(e){return b(e),e})}function _(e){return fetch("".concat(c,"/signin"),{method:"POST",headers:h(),body:JSON.stringify(e)}).then(p).then(function(e){return b(e),e})}function b(e){v=e.id,window.localStorage.setItem("user",JSON.stringify(e))}function w(){v="",window.localStorage.removeItem("user")}function k(){var e=window.localStorage.getItem("user");if(!e)return null;var t=JSON.parse(e);return v=t.id,t}function y(){return fetch(f,{headers:h()}).then(p)}function C(){return fetch(u,{headers:h()}).then(p)}function x(){return fetch(l,{headers:h()}).then(p)}function S(){return fetch(d,{headers:h()}).then(p)}function A(){return fetch(d,{method:"POST",headers:h()}).then(p)}function O(e){return fetch(d,{method:"DELETE",headers:h(),body:JSON.stringify(e)}).then(p)}function M(e){return fetch(m,{method:"POST",headers:h(),body:JSON.stringify(e)}).then(p)}function E(e){return fetch(m,{method:"PUT",headers:h(),body:JSON.stringify(e)}).then(p)}function j(e){return fetch(m,{method:"DELETE",headers:h(),body:JSON.stringify(e)}).then(p)}var $=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("RouterLink",{staticClass:"branding",attrs:{to:"/"}},[o("img",{staticClass:"logo",attrs:{alt:"logo",src:n("555a")}}),o("h1",[e._v("Maximum Intensity")])]),o("nav",[o("RouterLink",{staticClass:"nav",attrs:{to:"/"}},[e._v("Home")]),o("RouterLink",{staticClass:"nav",attrs:{to:"/about"}},[e._v("About")]),e.user?o("RouterLink",{staticClass:"nav",attrs:{to:"/dashboard"}},[e._v("Dashboard")]):e._e()],1),o("div",{staticClass:"user-controls"},[e.user?o("p",{staticClass:"current-user"},[e._v("User: "+e._s(e.user.email))]):e._e(),e.user?e._e():o("RouterLink",{staticClass:"nav",attrs:{to:"/auth"}},[e._v("Sign In")]),e.user?o("a",{staticClass:"nav",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.onSignOut(t)}}},[e._v("Sign Out")]):e._e()],1)],1)},L=[],F={props:{user:Object,onSignOut:Function}},U=F,N=(n("dc08"),n("2877")),W=Object(N["a"])(U,$,L,!1,null,"54e8bd07",null);W.options.__file="Header.vue";var P=W.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",[o("img",{attrs:{alt:"logo",src:n("555a")}}),o("p",[e._v("© Team BigCat - 2018")])])}],R={},J=R,I=(n("f237"),Object(N["a"])(J,T,D,!1,null,"63b8df6e",null));I.options.__file="Footer.vue";var H=I.exports,V={name:"app",components:{Header:P,Footer:H},data:function(){return{user:null,workoutSet:[],programSet:[],movements:[],muscles:[],muscleMovements:{},selectedMuscle:"abdominals"}},created:function(){this.user=k(),this.updateCoreData()},computed:{selectedMuscleMovements:function(){return null}},methods:{handleUser:function(e){this.user=e},handleSignOut:function(){w(),this.user=null,this.$router.push("/")},getMuscleMovements:function(){var e=this;this.muscles.forEach(function(t){e.muscleMovements[t.name]=[]}),this.movements.forEach(function(t){e.muscleMovements[t.muscle].push(t)}),console.log("MUSCLE MOVEMENTS",this.muscleMovements)},updateCoreData:function(){var e=this;this.loading=!0,this.error=null,S().then(function(t){e.workoutSet=t,console.log("WORKOUT SET",e.workoutSet),e.loading=!1}).catch(function(t){e.error=t.message,e.loading=!1}),x().then(function(t){e.programSet=t,console.log("PROGRAM SET",e.programSet),e.loading=!1}).catch(function(t){e.error=t.message,e.loading=!1}),C().then(function(t){e.movements=t,console.log("MOVEMENTS",e.movements),e.loading=!1}).then(function(){y().then(function(t){e.muscles=t,console.log("MUSCLES",e.muscles),e.loading=!1}).then(function(){e.getMuscleMovements()})}).catch(function(t){e.error=t.message,e.loading=!1})},handleAddWorkout:function(){A(),this.workoutSet=S(),console.log("workout added")},handleRemoveWorkout:function(){var e=this;if(confirm("Are you sure you want to remove the workout on ".concat(this.workout.date,"?")))return O(this.workout.id).then(function(){e.$router.push("/neighborhoods")})},handleAddLog:function(e){M(e).then(function(){console.log("log added")})},handleRemoveLog:function(){var e=this;if(confirm("Are you sure you want to remove this ".concat(this.log.movement," log?")))return j(this.log.id).then(function(){e.$router.push("/neighborhoods")})},handleUpdateLog:function(e){var t=this;return E(e).then(function(e){t.log=e,t.editing=!1})}}},q=V,B=(n("034f"),Object(N["a"])(q,s,a,!1,null,null,null));B.options.__file="App.vue";var G=B.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h2",[e._v("Making Fitness Goals Achieveable Since 2018")]),e._m(0),e.user?e._e():n("p",{staticClass:"center"},[e._v("\n    Click "),n("router-link",{attrs:{to:"/auth"}},[e._v("here")]),e._v(" to sign in!\n  ")],1)])},z=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("\n      Here at TigerFit, we think goal setting matters. We want to help people achieve what they desire!\n    ")]),o("p",{staticClass:"center"},[o("img",{attrs:{src:n("93ad")}})])])}],K={props:{user:Object},data:function(){return{proof:"\n        \n      "}}},Q=K,X=(n("e504"),Object(N["a"])(Q,Y,z,!1,null,"62942624",null));X.options.__file="Home.vue";var Z=X.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("About ~whatever we call this~ ")])])}],ne={},oe=ne,re=(n("b9e6"),Object(N["a"])(oe,ee,te,!1,null,"452f5108",null));re.options.__file="About.vue";var se=re.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.label))]),n("button",{on:{click:function(t){e.type=e.isSignUp?"signIn":"signUp"}}},[e._v("\n    "+e._s(e.isSignUp?"Already a user? Click here to sign in":"New? Click here to sign up")+"\n  ")]),n("div",{staticClass:"auth-form"},[n("pre",[e._v(e._s(e.error))]),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("FormControl",{attrs:{label:"email"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"email-input",domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),n("FormControl",{attrs:{label:"password"}},["checkbox"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.credentials.password)?e._i(e.credentials.password,null)>-1:e.credentials.password},on:{change:function(t){var n=e.credentials.password,o=t.target,r=!!o.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);o.checked?a<0&&e.$set(e.credentials,"password",n.concat([s])):a>-1&&e.$set(e.credentials,"password",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.credentials,"password",r)}}}):"radio"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"radio"},domProps:{checked:e._q(e.credentials.password,null)},on:{change:function(t){e.$set(e.credentials,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:e.show?"text":"password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(t){e.show=!e.show}}},[e._v("\n          "+e._s(e.show?"Hide":"Show")+"\n        ")])]),n("FormControl",[n("button",{attrs:{type:"submit"}},[e._v("\n          "+e._s(e.label)+"\n        ")])])],1)])])},ie=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-control"},[n("label",[e._v("\n    "+e._s(e.label)+"\n  ")]),n("div",[e._t("default")],2)])},ue=[],le={props:{label:String}},de=le,me=(n("d872"),Object(N["a"])(de,ce,ue,!1,null,null,null));me.options.__file="FormControl.vue";var fe=me.exports,pe={props:{onUser:Function},components:{FormControl:fe},data:function(){return{credentials:{email:"",password:""},show:!1,type:"signIn",error:null}},computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},watch:{type:function(e,t){e!==t&&(this.error=null)}},methods:{handleSubmit:function(){var e=this;this.error=null;var t=this.isSignUp?g:_;t(this.credentials).then(function(t){e.onUser(t),console.log(t),e.$router.push("/")}).catch(function(t){e.error=t})}}},ve=pe,he=(n("76de"),Object(N["a"])(ve,ae,ie,!1,null,"2b95bf3d",null));he.options.__file="Auth.vue";var ge=he.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"users"},[e.users?n("ul",{staticClass:"list"},e._l(e.users,function(e,t){return n("User",{key:t,attrs:{user:e}})})):n("p",[e._v("Loading users...")])])},be=[],we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("div",{staticClass:"title"},[n("h3",[e._v("User: "+e._s(e.user.email))])])])},ke=[],ye={props:{user:Object}},Ce=ye,xe=(n("1da8"),Object(N["a"])(Ce,we,ke,!1,null,"0e6693ea",null));xe.options.__file="User.vue";var Se=xe.exports,Ae={data:function(){return{users:null}},created:function(){},components:{User:Se}},Oe=Ae,Me=(n("2ea9"),Object(N["a"])(Oe,_e,be,!1,null,"3c726578",null));Me.options.__file="Users.vue";var Ee=Me.exports,je=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$e=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("h2",[e._v("You are now logged out!")]),o("p",{staticClass:"center"},[e._v("\n    It was nice to see you! Don't forget about your goals!\n  ")]),o("img",{attrs:{src:n("297c")}})])}],Le={data:function(){return{proof:"\n        \n      "}}},Fe=Le,Ue=(n("dda5"),Object(N["a"])(Fe,je,$e,!1,null,"5f023d74",null));Ue.options.__file="Logout.vue";var Ne=Ue.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Your Workouts")]),n("AddWorkout"),n("div",{staticClass:"workout-cards"},[n("h3",[e._v("Workout List")]),n("ul",e._l(e.workoutSet,function(t,o){return n("WorkoutCard",{key:o,staticClass:"workout-card",attrs:{workout:t,movements:e.movements,muscles:e.muscles,muscleMovements:e.muscleMovements,selectedMuscle:e.selectedMuscle,exercises:t.exercises,handleAddLog:e.handleAddLog}})}))])],1)},Pe=[],Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._l(e.exercises,function(e,t){return n("ExerciseCounter",{key:t,attrs:{exercise:e}})}),n("AddExercise",{attrs:{movements:e.movements,muscles:e.muscles,workout:e.workout,muscleMovements:e.muscleMovements,selectedMuscle:e.selectedMuscle,handleAddLog:e.handleAddLog}})],2)},De=[],Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"add-exercise"},[n("FormControl",{attrs:{label:"Add Exercise"}},[n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Muscles"}},[e.muscleMovements?n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMuscle,expression:"selectedMuscle"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedMuscle=t.target.multiple?n:n[0]}}},e._l(e.muscles,function(t){return n("option",{key:t.id},[e._v("\n            "+e._s(t.name)+"\n          ")])})):e._e()]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Movements"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMovement,expression:"selectedMovement"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedMovement=t.target.multiple?n:n[0]}}},e._l(e.muscleMovements[this.selectedMuscle],function(t){return n("option",{key:t.id,attrs:{movement:t,name:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Sets"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.sets,expression:"sets"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sets=t.target.multiple?n:n[0]}}},e._l([1,2,3,4,5,6,7,8,9,10],function(t){return n("option",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])}))]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Reps"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"reps"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.reps=t.target.multiple?n:n[0]}}},e._l([1,2,3,4,5,6,7,8,9,10],function(t){return n("option",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])}))]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Weight"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{required:""},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=t.target.value)}}})])],1),n("button",{on:{click:function(t){return t.preventDefault(),e.onExerciseAdd(t)}}},[e._v("Add")])],1)},Je=[],Ie=(n("7514"),{props:{movements:Array,muscles:Array,muscleMovements:Object,workout:Object,handleAddLog:Function},components:{FormControl:fe},data:function(){return{selectedMuscle:"abdominals",selectedMovement:null,sets:null,reps:null,weight:null}},methods:{onExerciseAdd:function(){var e=this,t={workout_id:this.workout.id,movement_id:this.movements.find(function(t){return t.name===e.selectedMovement}).id,attempted:this.reps,completed:0,weight:this.weight};console.log("adding log...",t,"for",this.sets,"number of times");for(var n=0;n<this.sets;n++)this.handleAddLog(t)}}}),He=Ie,Ve=(n("9bd8"),Object(N["a"])(He,Re,Je,!1,null,null,null));Ve.options.__file="AddExercise.vue";var qe=Ve.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(e._s(e.exercise.movement.toUpperCase()))]),n("div",{staticClass:"set"},e._l(e.exercise.sets,function(t,o){return n("button",{key:o,staticClass:"set__checkbox",class:{set__checkbox__completed:t.completed},on:{click:function(t){e.markAsCompleted(e.i)}}},[e._v(" \n      "+e._s(t.attempted)+"\n    ")])}))])},Ge=[],Ye={props:{exercise:Object},data:function(){return{set:{completed:!1}}},methods:{markAsCompleted:function(e){console.log("i will mark a log as completed","index is",e)}}},ze=Ye,Ke=(n("9949"),Object(N["a"])(ze,Be,Ge,!1,null,null,null));Ke.options.__file="ExerciseCounter.vue";var Qe=Ke.exports,Xe={props:{movements:Array,muscles:Array,muscleMovements:Object,selectedMuscle:String,exercises:Array,workout:Object,handleAddLog:Function},components:{AddExercise:qe,ExerciseCounter:Qe}},Ze=Xe,et=(n("1c84"),Object(N["a"])(Ze,Te,De,!1,null,null,null));et.options.__file="WorkoutCard.vue";var tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-workout"},[n("h3",[e._v("Add a New Workout")]),n("FormControl",{attrs:{label:"New Workout"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.program,expression:"program"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.program=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Choose A Workout")]),e._l(e.programs,function(t){return n("option",{key:t.id,attrs:{program:t,name:t.name},domProps:{selected:e.selected}},[e._v("\n            "+e._s(t.name)+"\n      ")])})],2)]),n("FormControl",[n("button",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.onSelect(t)}}},[e._v("Begin Workout")])])],1)},ot=[],rt={props:{onSelect:Function,programs:Array,selected:Object},components:{FormControl:fe}},st=rt,at=(n("5fb1"),Object(N["a"])(st,nt,ot,!1,null,null,null));at.options.__file="AddWorkout.vue";var it=at.exports,ct={props:{workoutSet:Array,programSet:Array,movements:Array,muscles:Array,muscleMovements:Object,selectedMuscle:String,handleAddLog:Function},created:function(){},components:{WorkoutCard:tt,AddWorkout:it}},ut=ct,lt=(n("2fe3"),Object(N["a"])(ut,We,Pe,!1,null,null,null));lt.options.__file="Dashboard.vue";var dt=lt.exports,mt=new r["a"]({routes:[{path:"/",component:Z},{path:"/about",component:se},{path:"/dashboard",component:dt},{path:"/auth",component:ge},{path:"/users",component:Ee},{path:"/logout",component:Ne},{path:"*",redirect:"/"}]});n("db43");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].component("RouterLink",o["a"].component("router-link")),o["a"].component("RouterView",o["a"].component("router-view")),new o["a"]({router:mt,render:function(e){return e(G)}}).$mount("#app")},"5fb1":function(e,t,n){"use strict";var o=n("2a7d"),r=n.n(o);r.a},"6cde":function(e,t,n){},"6edd":function(e,t,n){},"76de":function(e,t,n){"use strict";var o=n("932c"),r=n.n(o);r.a},"90e6":function(e,t,n){},"932c":function(e,t,n){},"93ad":function(e,t,n){e.exports=n.p+"img/bacon.53289f59.gif"},"96d6":function(e,t,n){},9949:function(e,t,n){"use strict";var o=n("cf24"),r=n.n(o);r.a},"9bd8":function(e,t,n){"use strict";var o=n("96d6"),r=n.n(o);r.a},afe5:function(e,t,n){},b9e6:function(e,t,n){"use strict";var o=n("c6c1"),r=n.n(o);r.a},c21b:function(e,t,n){},c6c1:function(e,t,n){},c9b6:function(e,t,n){},cbe4:function(e,t,n){},cf24:function(e,t,n){},d872:function(e,t,n){"use strict";var o=n("2d60"),r=n.n(o);r.a},db43:function(e,t,n){},dc08:function(e,t,n){"use strict";var o=n("afe5"),r=n.n(o);r.a},dda5:function(e,t,n){"use strict";var o=n("c9b6"),r=n.n(o);r.a},e504:function(e,t,n){"use strict";var o=n("19aa"),r=n.n(o);r.a},f237:function(e,t,n){"use strict";var o=n("cbe4"),r=n.n(o);r.a}});
//# sourceMappingURL=app.77f3980a.js.map