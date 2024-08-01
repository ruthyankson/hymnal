var qy=Object.defineProperty,Ky=Object.defineProperties;var Qy=Object.getOwnPropertyDescriptors;var Wo=Object.getOwnPropertySymbols;var Cc=Object.prototype.hasOwnProperty,Sc=Object.prototype.propertyIsEnumerable;var Ec=(t,e,i)=>e in t?qy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,I=(t,e)=>{for(var i in e||={})Cc.call(e,i)&&Ec(t,i,e[i]);if(Wo)for(var i of Wo(e))Sc.call(e,i)&&Ec(t,i,e[i]);return t},ae=(t,e)=>Ky(t,Qy(e));var Zy=(t,e)=>{var i={};for(var n in t)Cc.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&Wo)for(var n of Wo(t))e.indexOf(n)<0&&Sc.call(t,n)&&(i[n]=t[n]);return i};var Rt=(t,e,i)=>new Promise((n,o)=>{var r=u=>{try{l(i.next(u))}catch(d){o(d)}},a=u=>{try{l(i.throw(u))}catch(d){o(d)}},l=u=>u.done?n(u.value):Promise.resolve(u.value).then(r,a);l((i=i.apply(t,e)).next())});var Mc=null;var Ia=1,Ac=Symbol("SIGNAL");function Y(t){let e=Mc;return Mc=t,e}var Oc={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Xy(t){if(!(Ea(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Ia)){if(!t.producerMustRecompute(t)&&!Ta(t)){t.dirty=!1,t.lastCleanEpoch=Ia;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Ia}}function Nc(t){return t&&(t.nextProducerIndex=0),Y(t)}function kc(t,e){if(Y(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Ea(t))for(let i=t.nextProducerIndex;i<t.producerNode.length;i++)Da(t.producerNode[i],t.producerIndexOfThis[i]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function Ta(t){Uo(t);for(let e=0;e<t.producerNode.length;e++){let i=t.producerNode[e],n=t.producerLastReadVersion[e];if(n!==i.version||(Xy(i),n!==i.version))return!0}return!1}function Rc(t){if(Uo(t),Ea(t))for(let e=0;e<t.producerNode.length;e++)Da(t.producerNode[e],t.producerIndexOfThis[e]);t.producerNode.length=t.producerLastReadVersion.length=t.producerIndexOfThis.length=0,t.liveConsumerNode&&(t.liveConsumerNode.length=t.liveConsumerIndexOfThis.length=0)}function Da(t,e){if(ew(t),Uo(t),t.liveConsumerNode.length===1)for(let n=0;n<t.producerNode.length;n++)Da(t.producerNode[n],t.producerIndexOfThis[n]);let i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){let n=t.liveConsumerIndexOfThis[e],o=t.liveConsumerNode[e];Uo(o),o.producerIndexOfThis[n]=e}}function Ea(t){return t.consumerIsAlwaysLive||(t?.liveConsumerNode?.length??0)>0}function Uo(t){t.producerNode??=[],t.producerIndexOfThis??=[],t.producerLastReadVersion??=[]}function ew(t){t.liveConsumerNode??=[],t.liveConsumerIndexOfThis??=[]}function tw(){throw new Error}var nw=tw;function xc(t){nw=t}function N(t){return typeof t=="function"}function Jn(t){let i=t(n=>{Error.call(n),n.stack=new Error().stack});return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}var $o=Jn(t=>function(i){t(this),this.message=i?`${i.length} errors occurred during unsubscription:
${i.map((n,o)=>`${o+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=i});function vn(t,e){if(t){let i=t.indexOf(e);0<=i&&t.splice(i,1)}}var fe=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:i}=this;if(i)if(this._parentage=null,Array.isArray(i))for(let r of i)r.remove(this);else i.remove(this);let{initialTeardown:n}=this;if(N(n))try{n()}catch(r){e=r instanceof $o?r.errors:[r]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let r of o)try{Hc(r)}catch(a){e=e??[],a instanceof $o?e=[...e,...a.errors]:e.push(a)}}if(e)throw new $o(e)}}add(e){var i;if(e&&e!==this)if(this.closed)Hc(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(i=this._finalizers)!==null&&i!==void 0?i:[]).push(e)}}_hasParent(e){let{_parentage:i}=this;return i===e||Array.isArray(i)&&i.includes(e)}_addParent(e){let{_parentage:i}=this;this._parentage=Array.isArray(i)?(i.push(e),i):i?[i,e]:e}_removeParent(e){let{_parentage:i}=this;i===e?this._parentage=null:Array.isArray(i)&&vn(i,e)}remove(e){let{_finalizers:i}=this;i&&vn(i,e),e instanceof t&&e._removeParent(this)}};fe.EMPTY=(()=>{let t=new fe;return t.closed=!0,t})();var Ca=fe.EMPTY;function Jo(t){return t instanceof fe||t&&"closed"in t&&N(t.remove)&&N(t.add)&&N(t.unsubscribe)}function Hc(t){N(t)?t():t.unsubscribe()}var at={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var zn={setTimeout(t,e,...i){let{delegate:n}=zn;return n?.setTimeout?n.setTimeout(t,e,...i):setTimeout(t,e,...i)},clearTimeout(t){let{delegate:e}=zn;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function zo(t){zn.setTimeout(()=>{let{onUnhandledError:e}=at;if(e)e(t);else throw t})}function bn(){}var Fc=Sa("C",void 0,void 0);function Lc(t){return Sa("E",void 0,t)}function Pc(t){return Sa("N",t,void 0)}function Sa(t,e,i){return{kind:t,value:e,error:i}}var _n=null;function Yn(t){if(at.useDeprecatedSynchronousErrorHandling){let e=!_n;if(e&&(_n={errorThrown:!1,error:null}),t(),e){let{errorThrown:i,error:n}=_n;if(_n=null,i)throw n}}else t()}function Bc(t){at.useDeprecatedSynchronousErrorHandling&&_n&&(_n.errorThrown=!0,_n.error=t)}var In=class extends fe{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Jo(e)&&e.add(this)):this.destination=rw}static create(e,i,n){return new qn(e,i,n)}next(e){this.isStopped?Aa(Pc(e),this):this._next(e)}error(e){this.isStopped?Aa(Lc(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Aa(Fc,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},iw=Function.prototype.bind;function Ma(t,e){return iw.call(t,e)}var Oa=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:i}=this;if(i.next)try{i.next(e)}catch(n){Yo(n)}}error(e){let{partialObserver:i}=this;if(i.error)try{i.error(e)}catch(n){Yo(n)}else Yo(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(i){Yo(i)}}},qn=class extends In{constructor(e,i,n){super();let o;if(N(e)||!e)o={next:e??void 0,error:i??void 0,complete:n??void 0};else{let r;this&&at.useDeprecatedNextContext?(r=Object.create(e),r.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&Ma(e.next,r),error:e.error&&Ma(e.error,r),complete:e.complete&&Ma(e.complete,r)}):o=e}this.destination=new Oa(o)}};function Yo(t){at.useDeprecatedSynchronousErrorHandling?Bc(t):zo(t)}function ow(t){throw t}function Aa(t,e){let{onStoppedNotification:i}=at;i&&zn.setTimeout(()=>i(t,e))}var rw={closed:!0,next:bn,error:ow,complete:bn};var Kn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function He(t){return t}function Na(...t){return ka(t)}function ka(t){return t.length===0?He:t.length===1?t[0]:function(i){return t.reduce((n,o)=>o(n),i)}}var P=(()=>{class t{constructor(i){i&&(this._subscribe=i)}lift(i){let n=new t;return n.source=this,n.operator=i,n}subscribe(i,n,o){let r=aw(i)?i:new qn(i,n,o);return Yn(()=>{let{operator:a,source:l}=this;r.add(a?a.call(r,l):l?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(i){try{return this._subscribe(i)}catch(n){i.error(n)}}forEach(i,n){return n=Vc(n),new n((o,r)=>{let a=new qn({next:l=>{try{i(l)}catch(u){r(u),a.unsubscribe()}},error:r,complete:o});this.subscribe(a)})}_subscribe(i){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(i)}[Kn](){return this}pipe(...i){return ka(i)(this)}toPromise(i){return i=Vc(i),new i((n,o)=>{let r;this.subscribe(a=>r=a,a=>o(a),()=>n(r))})}}return t.create=e=>new t(e),t})();function Vc(t){var e;return(e=t??at.Promise)!==null&&e!==void 0?e:Promise}function sw(t){return t&&N(t.next)&&N(t.error)&&N(t.complete)}function aw(t){return t&&t instanceof In||sw(t)&&Jo(t)}function Ra(t){return N(t?.lift)}function $(t){return e=>{if(Ra(e))return e.lift(function(i){try{return t(i,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function F(t,e,i,n,o){return new xa(t,e,i,n,o)}var xa=class extends In{constructor(e,i,n,o,r,a){super(e),this.onFinalize=r,this.shouldUnsubscribe=a,this._next=i?function(l){try{i(l)}catch(u){e.error(u)}}:super._next,this._error=o?function(l){try{o(l)}catch(u){e.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:i}=this;super.unsubscribe(),!i&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Qn(){return $((t,e)=>{let i=null;t._refCount++;let n=F(e,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){i=null;return}let o=t._connection,r=i;i=null,o&&(!r||o===r)&&o.unsubscribe(),e.unsubscribe()});t.subscribe(n),n.closed||(i=t.connect())})}var Zn=class extends P{constructor(e,i){super(),this.source=e,this.subjectFactory=i,this._subject=null,this._refCount=0,this._connection=null,Ra(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new fe;let i=this.getSubject();e.add(this.source.subscribe(F(i,void 0,()=>{this._teardown(),i.complete()},n=>{this._teardown(),i.error(n)},()=>this._teardown()))),e.closed&&(this._connection=null,e=fe.EMPTY)}return e}refCount(){return Qn()(this)}};var jc=Jn(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var te=(()=>{class t extends P{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(i){let n=new qo(this,this);return n.operator=i,n}_throwIfClosed(){if(this.closed)throw new jc}next(i){Yn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(i)}})}error(i){Yn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=i;let{observers:n}=this;for(;n.length;)n.shift().error(i)}})}complete(){Yn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:i}=this;for(;i.length;)i.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var i;return((i=this.observers)===null||i===void 0?void 0:i.length)>0}_trySubscribe(i){return this._throwIfClosed(),super._trySubscribe(i)}_subscribe(i){return this._throwIfClosed(),this._checkFinalizedStatuses(i),this._innerSubscribe(i)}_innerSubscribe(i){let{hasError:n,isStopped:o,observers:r}=this;return n||o?Ca:(this.currentObservers=null,r.push(i),new fe(()=>{this.currentObservers=null,vn(r,i)}))}_checkFinalizedStatuses(i){let{hasError:n,thrownError:o,isStopped:r}=this;n?i.error(o):r&&i.complete()}asObservable(){let i=new P;return i.source=this,i}}return t.create=(e,i)=>new qo(e,i),t})(),qo=class extends te{constructor(e,i){super(),this.destination=e,this.source=i}next(e){var i,n;(n=(i=this.destination)===null||i===void 0?void 0:i.next)===null||n===void 0||n.call(i,e)}error(e){var i,n;(n=(i=this.destination)===null||i===void 0?void 0:i.error)===null||n===void 0||n.call(i,e)}complete(){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||i===void 0||i.call(e)}_subscribe(e){var i,n;return(n=(i=this.source)===null||i===void 0?void 0:i.subscribe(e))!==null&&n!==void 0?n:Ca}};var _e=class extends te{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let i=super._subscribe(e);return!i.closed&&e.next(this._value),i}getValue(){let{hasError:e,thrownError:i,_value:n}=this;if(e)throw i;return this._throwIfClosed(),n}next(e){super.next(this._value=e)}};var Ha={now(){return(Ha.delegate||Date).now()},delegate:void 0};var Ko=class extends fe{constructor(e,i){super()}schedule(e,i=0){return this}};var Gi={setInterval(t,e,...i){let{delegate:n}=Gi;return n?.setInterval?n.setInterval(t,e,...i):setInterval(t,e,...i)},clearInterval(t){let{delegate:e}=Gi;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};var Qo=class extends Ko{constructor(e,i){super(e,i),this.scheduler=e,this.work=i,this.pending=!1}schedule(e,i=0){var n;if(this.closed)return this;this.state=e;let o=this.id,r=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(r,o,i)),this.pending=!0,this.delay=i,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(r,this.id,i),this}requestAsyncId(e,i,n=0){return Gi.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,i,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return i;i!=null&&Gi.clearInterval(i)}execute(e,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(e,i);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,i){let n=!1,o;try{this.work(e)}catch(r){n=!0,o=r||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:e,scheduler:i}=this,{actions:n}=i;this.work=this.state=this.scheduler=null,this.pending=!1,vn(n,this),e!=null&&(this.id=this.recycleAsyncId(i,e,null)),this.delay=null,super.unsubscribe()}}};var Xn=class t{constructor(e,i=t.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,n){return new this.schedulerActionCtor(this,e).schedule(n,i)}};Xn.now=Ha.now;var Zo=class extends Xn{constructor(e,i=Xn.now){super(e,i),this.actions=[],this._active=!1}flush(e){let{actions:i}=this;if(this._active){i.push(e);return}let n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=i.shift());if(this._active=!1,n){for(;e=i.shift();)e.unsubscribe();throw n}}};var Fa=new Zo(Qo),Gc=Fa;var Ce=new P(t=>t.complete());function Xo(t){return t&&N(t.schedule)}function Wc(t){return t[t.length-1]}function Xt(t){return N(Wc(t))?t.pop():void 0}function en(t){return Xo(Wc(t))?t.pop():void 0}function $c(t,e,i,n){function o(r){return r instanceof i?r:new i(function(a){a(r)})}return new(i||(i=Promise))(function(r,a){function l(h){try{d(n.next(h))}catch(p){a(p)}}function u(h){try{d(n.throw(h))}catch(p){a(p)}}function d(h){h.done?r(h.value):o(h.value).then(l,u)}d((n=n.apply(t,e||[])).next())})}function Uc(t){var e=typeof Symbol=="function"&&Symbol.iterator,i=e&&t[e],n=0;if(i)return i.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Tn(t){return this instanceof Tn?(this.v=t,this):new Tn(t)}function Jc(t,e,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=i.apply(t,e||[]),o,r=[];return o={},l("next"),l("throw"),l("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(g){return function(b){return Promise.resolve(b).then(g,p)}}function l(g,b){n[g]&&(o[g]=function(L){return new Promise(function(H,O){r.push([g,L,H,O])>1||u(g,L)})},b&&(o[g]=b(o[g])))}function u(g,b){try{d(n[g](b))}catch(L){m(r[0][3],L)}}function d(g){g.value instanceof Tn?Promise.resolve(g.value.v).then(h,p):m(r[0][2],g)}function h(g){u("next",g)}function p(g){u("throw",g)}function m(g,b){g(b),r.shift(),r.length&&u(r[0][0],r[0][1])}}function zc(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],i;return e?e.call(t):(t=typeof Uc=="function"?Uc(t):t[Symbol.iterator](),i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i);function n(r){i[r]=t[r]&&function(a){return new Promise(function(l,u){a=t[r](a),o(l,u,a.done,a.value)})}}function o(r,a,l,u){Promise.resolve(u).then(function(d){r({value:d,done:l})},a)}}var ei=t=>t&&typeof t.length=="number"&&typeof t!="function";function er(t){return N(t?.then)}function tr(t){return N(t[Kn])}function nr(t){return Symbol.asyncIterator&&N(t?.[Symbol.asyncIterator])}function ir(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function lw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var or=lw();function rr(t){return N(t?.[or])}function sr(t){return Jc(this,arguments,function*(){let i=t.getReader();try{for(;;){let{value:n,done:o}=yield Tn(i.read());if(o)return yield Tn(void 0);yield yield Tn(n)}}finally{i.releaseLock()}})}function ar(t){return N(t?.getReader)}function Q(t){if(t instanceof P)return t;if(t!=null){if(tr(t))return uw(t);if(ei(t))return dw(t);if(er(t))return cw(t);if(nr(t))return Yc(t);if(rr(t))return hw(t);if(ar(t))return fw(t)}throw ir(t)}function uw(t){return new P(e=>{let i=t[Kn]();if(N(i.subscribe))return i.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function dw(t){return new P(e=>{for(let i=0;i<t.length&&!e.closed;i++)e.next(t[i]);e.complete()})}function cw(t){return new P(e=>{t.then(i=>{e.closed||(e.next(i),e.complete())},i=>e.error(i)).then(null,zo)})}function hw(t){return new P(e=>{for(let i of t)if(e.next(i),e.closed)return;e.complete()})}function Yc(t){return new P(e=>{pw(t,e).catch(i=>e.error(i))})}function fw(t){return Yc(sr(t))}function pw(t,e){var i,n,o,r;return $c(this,void 0,void 0,function*(){try{for(i=zc(t);n=yield i.next(),!n.done;){let a=n.value;if(e.next(a),e.closed)return}}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=i.return)&&(yield r.call(i))}finally{if(o)throw o.error}}e.complete()})}function Be(t,e,i,n=0,o=!1){let r=e.schedule(function(){i(),o?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(r),!o)return r}function lr(t,e=0){return $((i,n)=>{i.subscribe(F(n,o=>Be(n,t,()=>n.next(o),e),()=>Be(n,t,()=>n.complete(),e),o=>Be(n,t,()=>n.error(o),e)))})}function ur(t,e=0){return $((i,n)=>{n.add(t.schedule(()=>i.subscribe(n),e))})}function qc(t,e){return Q(t).pipe(ur(e),lr(e))}function Kc(t,e){return Q(t).pipe(ur(e),lr(e))}function Qc(t,e){return new P(i=>{let n=0;return e.schedule(function(){n===t.length?i.complete():(i.next(t[n++]),i.closed||this.schedule())})})}function Zc(t,e){return new P(i=>{let n;return Be(i,e,()=>{n=t[or](),Be(i,e,()=>{let o,r;try{({value:o,done:r}=n.next())}catch(a){i.error(a);return}r?i.complete():i.next(o)},0,!0)}),()=>N(n?.return)&&n.return()})}function dr(t,e){if(!t)throw new Error("Iterable cannot be null");return new P(i=>{Be(i,e,()=>{let n=t[Symbol.asyncIterator]();Be(i,e,()=>{n.next().then(o=>{o.done?i.complete():i.next(o.value)})},0,!0)})})}function Xc(t,e){return dr(sr(t),e)}function eh(t,e){if(t!=null){if(tr(t))return qc(t,e);if(ei(t))return Qc(t,e);if(er(t))return Kc(t,e);if(nr(t))return dr(t,e);if(rr(t))return Zc(t,e);if(ar(t))return Xc(t,e)}throw ir(t)}function le(t,e){return e?eh(t,e):Q(t)}function E(...t){let e=en(t);return le(t,e)}function ti(t,e){let i=N(t)?t:()=>t,n=o=>o.error(i());return new P(e?o=>e.schedule(n,0,o):n)}function La(t){return!!t&&(t instanceof P||N(t.lift)&&N(t.subscribe))}var xt=Jn(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function th(t){return t instanceof Date&&!isNaN(t)}function R(t,e){return $((i,n)=>{let o=0;i.subscribe(F(n,r=>{n.next(t.call(e,r,o++))}))})}var{isArray:mw}=Array;function gw(t,e){return mw(e)?t(...e):t(e)}function ni(t){return R(e=>gw(t,e))}var{isArray:yw}=Array,{getPrototypeOf:ww,prototype:vw,keys:bw}=Object;function cr(t){if(t.length===1){let e=t[0];if(yw(e))return{args:e,keys:null};if(_w(e)){let i=bw(e);return{args:i.map(n=>e[n]),keys:i}}}return{args:t,keys:null}}function _w(t){return t&&typeof t=="object"&&ww(t)===vw}function hr(t,e){return t.reduce((i,n,o)=>(i[n]=e[o],i),{})}function ii(...t){let e=en(t),i=Xt(t),{args:n,keys:o}=cr(t);if(n.length===0)return le([],e);let r=new P(Iw(n,e,o?a=>hr(o,a):He));return i?r.pipe(ni(i)):r}function Iw(t,e,i=He){return n=>{nh(e,()=>{let{length:o}=t,r=new Array(o),a=o,l=o;for(let u=0;u<o;u++)nh(e,()=>{let d=le(t[u],e),h=!1;d.subscribe(F(n,p=>{r[u]=p,h||(h=!0,l--),l||n.next(i(r.slice()))},()=>{--a||n.complete()}))},n)},n)}}function nh(t,e,i){t?Be(i,t,e):e()}function ih(t,e,i,n,o,r,a,l){let u=[],d=0,h=0,p=!1,m=()=>{p&&!u.length&&!d&&e.complete()},g=L=>d<n?b(L):u.push(L),b=L=>{r&&e.next(L),d++;let H=!1;Q(i(L,h++)).subscribe(F(e,O=>{o?.(O),r?g(O):e.next(O)},()=>{H=!0},void 0,()=>{if(H)try{for(d--;u.length&&d<n;){let O=u.shift();a?Be(e,a,()=>b(O)):b(O)}m()}catch(O){e.error(O)}}))};return t.subscribe(F(e,g,()=>{p=!0,m()})),()=>{l?.()}}function de(t,e,i=1/0){return N(e)?de((n,o)=>R((r,a)=>e(n,r,o,a))(Q(t(n,o))),i):(typeof e=="number"&&(i=e),$((n,o)=>ih(n,o,t,i)))}function tn(t=1/0){return de(He,t)}function oh(){return tn(1)}function nn(...t){return oh()(le(t,en(t)))}function fr(t){return new P(e=>{Q(t()).subscribe(e)})}function pr(...t){let e=Xt(t),{args:i,keys:n}=cr(t),o=new P(r=>{let{length:a}=i;if(!a){r.complete();return}let l=new Array(a),u=a,d=a;for(let h=0;h<a;h++){let p=!1;Q(i[h]).subscribe(F(r,m=>{p||(p=!0,d--),l[h]=m},()=>u--,void 0,()=>{(!u||!p)&&(d||r.next(n?hr(n,l):l),r.complete())}))}});return e?o.pipe(ni(e)):o}var Tw=["addListener","removeListener"],Dw=["addEventListener","removeEventListener"],Ew=["on","off"];function tt(t,e,i,n){if(N(i)&&(n=i,i=void 0),n)return tt(t,e,i).pipe(ni(n));let[o,r]=Mw(t)?Dw.map(a=>l=>t[a](e,l,i)):Cw(t)?Tw.map(rh(t,e)):Sw(t)?Ew.map(rh(t,e)):[];if(!o&&ei(t))return de(a=>tt(a,e,i))(Q(t));if(!o)throw new TypeError("Invalid event target");return new P(a=>{let l=(...u)=>a.next(1<u.length?u:u[0]);return o(l),()=>r(l)})}function rh(t,e){return i=>n=>t[i](e,n)}function Cw(t){return N(t.addListener)&&N(t.removeListener)}function Sw(t){return N(t.on)&&N(t.off)}function Mw(t){return N(t.addEventListener)&&N(t.removeEventListener)}function Pa(t=0,e,i=Gc){let n=-1;return e!=null&&(Xo(e)?i=e:n=e),new P(o=>{let r=th(t)?+t-i.now():t;r<0&&(r=0);let a=0;return i.schedule(function(){o.closed||(o.next(a++),0<=n?this.schedule(void 0,n):o.complete())},r)})}var{isArray:Aw}=Array;function mr(t){return t.length===1&&Aw(t[0])?t[0]:t}function ye(t,e){return $((i,n)=>{let o=0;i.subscribe(F(n,r=>t.call(e,r,o++)&&n.next(r)))})}function Ba(...t){return t=mr(t),t.length===1?Q(t[0]):new P(Ow(t))}function Ow(t){return e=>{let i=[];for(let n=0;i&&!e.closed&&n<t.length;n++)i.push(Q(t[n]).subscribe(F(e,o=>{if(i){for(let r=0;r<i.length;r++)r!==n&&i[r].unsubscribe();i=null}e.next(o)})))}}function Wi(...t){let e=Xt(t),i=mr(t);return i.length?new P(n=>{let o=i.map(()=>[]),r=i.map(()=>!1);n.add(()=>{o=r=null});for(let a=0;!n.closed&&a<i.length;a++)Q(i[a]).subscribe(F(n,l=>{if(o[a].push(l),o.every(u=>u.length)){let u=o.map(d=>d.shift());n.next(e?e(...u):u),o.some((d,h)=>!d.length&&r[h])&&n.complete()}},()=>{r[a]=!0,!o[a].length&&n.complete()}));return()=>{o=r=null}}):Ce}function Se(t){return $((e,i)=>{let n=null,o=!1,r;n=e.subscribe(F(i,void 0,void 0,a=>{r=Q(t(a,Se(t)(e))),n?(n.unsubscribe(),n=null,r.subscribe(i)):o=!0})),o&&(n.unsubscribe(),n=null,r.subscribe(i))})}function sh(t,e,i,n,o){return(r,a)=>{let l=i,u=e,d=0;r.subscribe(F(a,h=>{let p=d++;u=l?t(u,h,p):(l=!0,h),n&&a.next(u)},o&&(()=>{l&&a.next(u),a.complete()})))}}function Ht(t,e){return N(e)?de(t,e,1):de(t,1)}function Va(t,e=Fa){return $((i,n)=>{let o=null,r=null,a=null,l=()=>{if(o){o.unsubscribe(),o=null;let d=r;r=null,n.next(d)}};function u(){let d=a+t,h=e.now();if(h<d){o=this.schedule(void 0,d-h),n.add(o);return}l()}i.subscribe(F(n,d=>{r=d,a=e.now(),o||(o=e.schedule(u,t),n.add(o))},()=>{l(),n.complete()},void 0,()=>{r=o=null}))})}function on(t){return $((e,i)=>{let n=!1;e.subscribe(F(i,o=>{n=!0,i.next(o)},()=>{n||i.next(t),i.complete()}))})}function Ve(t){return t<=0?()=>Ce:$((e,i)=>{let n=0;e.subscribe(F(i,o=>{++n<=t&&(i.next(o),t<=n&&i.complete())}))})}function ja(t){return R(()=>t)}function gr(t=Nw){return $((e,i)=>{let n=!1;e.subscribe(F(i,o=>{n=!0,i.next(o)},()=>n?i.complete():i.error(t())))})}function Nw(){return new xt}function Ga(...t){return e=>nn(e,E(...t))}function Ft(t){return $((e,i)=>{try{e.subscribe(i)}finally{i.add(t)}})}function vt(t,e){let i=arguments.length>=2;return n=>n.pipe(t?ye((o,r)=>t(o,r,n)):He,Ve(1),i?on(e):gr(()=>new xt))}function oi(t){return t<=0?()=>Ce:$((e,i)=>{let n=[];e.subscribe(F(i,o=>{n.push(o),t<n.length&&n.shift()},()=>{for(let o of n)i.next(o);i.complete()},void 0,()=>{n=null}))})}function Wa(t,e){let i=arguments.length>=2;return n=>n.pipe(t?ye((o,r)=>t(o,r,n)):He,oi(1),i?on(e):gr(()=>new xt))}function Ua(t,e){return $(sh(t,e,arguments.length>=2,!0))}function yr(...t){let e=en(t);return $((i,n)=>{(e?nn(t,i,e):nn(t,i)).subscribe(n)})}function we(t,e){return $((i,n)=>{let o=null,r=0,a=!1,l=()=>a&&!o&&n.complete();i.subscribe(F(n,u=>{o?.unsubscribe();let d=0,h=r++;Q(t(u,h)).subscribe(o=F(n,p=>n.next(e?e(u,p,h,d++):p),()=>{o=null,l()}))},()=>{a=!0,l()}))})}function xe(t){return $((e,i)=>{Q(t).subscribe(F(i,()=>i.complete(),bn)),!i.closed&&e.subscribe(i)})}function Z(t,e,i){let n=N(t)||e||i?{next:t,error:e,complete:i}:t;return n?$((o,r)=>{var a;(a=n.subscribe)===null||a===void 0||a.call(n);let l=!0;o.subscribe(F(r,u=>{var d;(d=n.next)===null||d===void 0||d.call(n,u),r.next(u)},()=>{var u;l=!1,(u=n.complete)===null||u===void 0||u.call(n),r.complete()},u=>{var d;l=!1,(d=n.error)===null||d===void 0||d.call(n,u),r.error(u)},()=>{var u,d;l&&((u=n.unsubscribe)===null||u===void 0||u.call(n)),(d=n.finalize)===null||d===void 0||d.call(n)}))}):He}function wr(...t){let e=Xt(t);return $((i,n)=>{let o=t.length,r=new Array(o),a=t.map(()=>!1),l=!1;for(let u=0;u<o;u++)Q(t[u]).subscribe(F(n,d=>{r[u]=d,!l&&!a[u]&&(a[u]=!0,(l=a.every(He))&&(a=null))},bn));i.subscribe(F(n,u=>{if(l){let d=[u,...r];n.next(e?e(...d):d)}}))})}var Yh="https://g.co/ng/security#xss",M=class extends Error{constructor(e,i){super(es(e,i)),this.code=e}};function es(t,e){return`${`NG0${Math.abs(t)}`}${e?": "+e:""}`}function io(t){return{toString:t}.toString()}var vr="__parameters__";function kw(t){return function(...i){if(t){let n=t(...i);for(let o in n)this[o]=n[o]}}}function qh(t,e,i){return io(()=>{let n=kw(e);function o(...r){if(this instanceof o)return n.apply(this,r),this;let a=new o(...r);return l.annotation=a,l;function l(u,d,h){let p=u.hasOwnProperty(vr)?u[vr]:Object.defineProperty(u,vr,{value:[]})[vr];for(;p.length<=h;)p.push(null);return(p[h]=p[h]||[]).push(a),u}}return i&&(o.prototype=Object.create(i.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}var Me=globalThis;function ie(t){for(let e in t)if(t[e]===ie)return e;throw Error("Could not find renamed property on target object.")}function Le(t){if(typeof t=="string")return t;if(Array.isArray(t))return"["+t.map(Le).join(", ")+"]";if(t==null)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i===-1?e:e.substring(0,i)}function rl(t,e){return t==null||t===""?e===null?"":e:e==null||e===""?t:t+" "+e}var Rw=ie({__forward_ref__:ie});function gi(t){return t.__forward_ref__=gi,t.toString=function(){return Le(this())},t}function Fe(t){return Kh(t)?t():t}function Kh(t){return typeof t=="function"&&t.hasOwnProperty(Rw)&&t.__forward_ref__===gi}function _(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function G(t){return{providers:t.providers||[],imports:t.imports||[]}}function ts(t){return ah(t,Zh)||ah(t,Xh)}function Qh(t){return ts(t)!==null}function ah(t,e){return t.hasOwnProperty(e)?t[e]:null}function xw(t){let e=t&&(t[Zh]||t[Xh]);return e||null}function lh(t){return t&&(t.hasOwnProperty(uh)||t.hasOwnProperty(Hw))?t[uh]:null}var Zh=ie({\u0275prov:ie}),uh=ie({\u0275inj:ie}),Xh=ie({ngInjectableDef:ie}),Hw=ie({ngInjectorDef:ie}),S=class{constructor(e,i){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof i=="number"?this.__NG_ELEMENT_ID__=i:i!==void 0&&(this.\u0275prov=_({token:this,providedIn:i.providedIn||"root",factory:i.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ef(t){return t&&!!t.\u0275providers}var Fw=ie({\u0275cmp:ie}),Lw=ie({\u0275dir:ie}),Pw=ie({\u0275pipe:ie}),Bw=ie({\u0275mod:ie}),Nr=ie({\u0275fac:ie}),Ui=ie({__NG_ELEMENT_ID__:ie}),dh=ie({__NG_ENV_ID__:ie});function oo(t){return typeof t=="string"?t:t==null?"":String(t)}function Vw(t){return typeof t=="function"?t.name||t.toString():typeof t=="object"&&t!=null&&typeof t.type=="function"?t.type.name||t.type.toString():oo(t)}function jw(t,e){let i=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new M(-200,t)}function iu(t,e){throw new M(-201,!1)}var J=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}(J||{}),sl;function tf(){return sl}function je(t){let e=sl;return sl=t,e}function nf(t,e,i){let n=ts(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(i&J.Optional)return null;if(e!==void 0)return e;iu(t,"Injector")}var Gw={},Ji=Gw,al="__NG_DI_FLAG__",kr="ngTempTokenPath",Ww="ngTokenPath",Uw=/\n/gm,$w="\u0275",ch="__source",ui;function Jw(){return ui}function rn(t){let e=ui;return ui=t,e}function zw(t,e=J.Default){if(ui===void 0)throw new M(-203,!1);return ui===null?nf(t,void 0,e):ui.get(t,e&J.Optional?null:void 0,e)}function C(t,e=J.Default){return(tf()||zw)(Fe(t),e)}function y(t,e=J.Default){return C(t,ns(e))}function ns(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function ll(t){let e=[];for(let i=0;i<t.length;i++){let n=Fe(t[i]);if(Array.isArray(n)){if(n.length===0)throw new M(900,!1);let o,r=J.Default;for(let a=0;a<n.length;a++){let l=n[a],u=Yw(l);typeof u=="number"?u===-1?o=l.token:r|=u:o=l}e.push(C(o,r))}else e.push(C(n))}return e}function of(t,e){return t[al]=e,t.prototype[al]=e,t}function Yw(t){return t[al]}function qw(t,e,i,n){let o=t[kr];throw e[ch]&&o.unshift(e[ch]),t.message=Kw(`
`+t.message,o,i,n),t[Ww]=o,t[kr]=null,t}function Kw(t,e,i,n=null){t=t&&t.charAt(0)===`
`&&t.charAt(1)==$w?t.slice(2):t;let o=Le(e);if(Array.isArray(e))o=e.map(Le).join(" -> ");else if(typeof e=="object"){let r=[];for(let a in e)if(e.hasOwnProperty(a)){let l=e[a];r.push(a+":"+(typeof l=="string"?JSON.stringify(l):Le(l)))}o=`{${r.join(", ")}}`}return`${i}${n?"("+n+")":""}[${o}]: ${t.replace(Uw,`
  `)}`}var is=of(qh("Optional"),8);var ou=of(qh("SkipSelf"),4);function Cn(t,e){let i=t.hasOwnProperty(Nr);return i?t[Nr]:null}function Qw(t,e,i){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++){let o=t[n],r=e[n];if(i&&(o=i(o),r=i(r)),r!==o)return!1}return!0}function Zw(t){return t.flat(Number.POSITIVE_INFINITY)}function ru(t,e){t.forEach(i=>Array.isArray(i)?ru(i,e):e(i))}function rf(t,e,i){e>=t.length?t.push(i):t.splice(e,0,i)}function Rr(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function Xw(t,e){let i=[];for(let n=0;n<t;n++)i.push(e);return i}function ev(t,e,i,n){let o=t.length;if(o==e)t.push(i,n);else if(o===1)t.push(n,t[0]),t[0]=i;else{for(o--,t.push(t[o-1],t[o]);o>e;){let r=o-2;t[o]=t[r],o--}t[e]=i,t[e+1]=n}}function su(t,e,i){let n=ro(t,e);return n>=0?t[n|1]=i:(n=~n,ev(t,n,e,i)),n}function $a(t,e){let i=ro(t,e);if(i>=0)return t[i|1]}function ro(t,e){return tv(t,e,1)}function tv(t,e,i){let n=0,o=t.length>>i;for(;o!==n;){let r=n+(o-n>>1),a=t[r<<i];if(e===a)return r<<i;a>e?o=r:n=r+1}return~(o<<i)}var zi={},ze=[],ci=new S(""),sf=new S("",-1),af=new S(""),xr=class{get(e,i=Ji){if(i===Ji){let n=new Error(`NullInjectorError: No provider for ${Le(e)}!`);throw n.name="NullInjectorError",n}return i}},lf=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}(lf||{}),It=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}(It||{}),Ge=function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t}(Ge||{});function nv(t,e,i){let n=t.length;for(;;){let o=t.indexOf(e,i);if(o===-1)return o;if(o===0||t.charCodeAt(o-1)<=32){let r=e.length;if(o+r===n||t.charCodeAt(o+r)<=32)return o}i=o+1}}function ul(t,e,i){let n=0;for(;n<i.length;){let o=i[n];if(typeof o=="number"){if(o!==0)break;n++;let r=i[n++],a=i[n++],l=i[n++];t.setAttribute(e,a,l,r)}else{let r=o,a=i[++n];iv(r)?t.setProperty(e,r,a):t.setAttribute(e,r,a),n++}}return n}function uf(t){return t===3||t===4||t===6}function iv(t){return t.charCodeAt(0)===64}function au(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let i=-1;for(let n=0;n<e.length;n++){let o=e[n];typeof o=="number"?i=o:i===0||(i===-1||i===2?hh(t,i,o,null,e[++n]):hh(t,i,o,null,null))}}return t}function hh(t,e,i,n,o){let r=0,a=t.length;if(e===-1)a=-1;else for(;r<t.length;){let l=t[r++];if(typeof l=="number"){if(l===e){a=-1;break}else if(l>e){a=r-1;break}}}for(;r<t.length;){let l=t[r];if(typeof l=="number")break;if(l===i){if(n===null){o!==null&&(t[r+1]=o);return}else if(n===t[r+1]){t[r+2]=o;return}}r++,n!==null&&r++,o!==null&&r++}a!==-1&&(t.splice(a,0,e),r=a+1),t.splice(r++,0,i),n!==null&&t.splice(r++,0,n),o!==null&&t.splice(r++,0,o)}var df="ng-template";function ov(t,e,i,n){let o=0;if(n){for(;o<e.length&&typeof e[o]=="string";o+=2)if(e[o]==="class"&&nv(e[o+1].toLowerCase(),i,0)!==-1)return!0}else if(lu(t))return!1;if(o=e.indexOf(1,o),o>-1){let r;for(;++o<e.length&&typeof(r=e[o])=="string";)if(r.toLowerCase()===i)return!0}return!1}function lu(t){return t.type===4&&t.value!==df}function rv(t,e,i){let n=t.type===4&&!i?df:t.value;return e===n}function sv(t,e,i){let n=4,o=t.attrs,r=o!==null?uv(o):0,a=!1;for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="number"){if(!a&&!lt(n)&&!lt(u))return!1;if(a&&lt(u))continue;a=!1,n=u|n&1;continue}if(!a)if(n&4){if(n=2|n&1,u!==""&&!rv(t,u,i)||u===""&&e.length===1){if(lt(n))return!1;a=!0}}else if(n&8){if(o===null||!ov(t,o,u,i)){if(lt(n))return!1;a=!0}}else{let d=e[++l],h=av(u,o,lu(t),i);if(h===-1){if(lt(n))return!1;a=!0;continue}if(d!==""){let p;if(h>r?p="":p=o[h+1].toLowerCase(),n&2&&d!==p){if(lt(n))return!1;a=!0}}}}return lt(n)||a}function lt(t){return(t&1)===0}function av(t,e,i,n){if(e===null)return-1;let o=0;if(n||!i){let r=!1;for(;o<e.length;){let a=e[o];if(a===t)return o;if(a===3||a===6)r=!0;else if(a===1||a===2){let l=e[++o];for(;typeof l=="string";)l=e[++o];continue}else{if(a===4)break;if(a===0){o+=4;continue}}o+=r?1:2}return-1}else return dv(e,t)}function cf(t,e,i=!1){for(let n=0;n<e.length;n++)if(sv(t,e[n],i))return!0;return!1}function lv(t){let e=t.attrs;if(e!=null){let i=e.indexOf(5);if(!(i&1))return e[i+1]}return null}function uv(t){for(let e=0;e<t.length;e++){let i=t[e];if(uf(i))return e}return t.length}function dv(t,e){let i=t.indexOf(4);if(i>-1)for(i++;i<t.length;){let n=t[i];if(typeof n=="number")return-1;if(n===e)return i;i++}return-1}function cv(t,e){e:for(let i=0;i<e.length;i++){let n=e[i];if(t.length===n.length){for(let o=0;o<t.length;o++)if(t[o]!==n[o])continue e;return!0}}return!1}function fh(t,e){return t?":not("+e.trim()+")":e}function hv(t){let e=t[0],i=1,n=2,o="",r=!1;for(;i<t.length;){let a=t[i];if(typeof a=="string")if(n&2){let l=t[++i];o+="["+a+(l.length>0?'="'+l+'"':"")+"]"}else n&8?o+="."+a:n&4&&(o+=" "+a);else o!==""&&!lt(a)&&(e+=fh(r,o),o=""),n=a,r=r||!lt(n);i++}return o!==""&&(e+=fh(r,o)),e}function fv(t){return t.map(hv).join(",")}function pv(t){let e=[],i=[],n=1,o=2;for(;n<t.length;){let r=t[n];if(typeof r=="string")o===2?r!==""&&e.push(r,t[++n]):o===8&&i.push(r);else{if(!lt(o))break;o=r}n++}return{attrs:e,classes:i}}function X(t){return io(()=>{let e=gf(t),i=ae(I({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===lf.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||It.Emulated,styles:t.styles||ze,_:null,schemas:t.schemas||null,tView:null,id:""});yf(i);let n=t.dependencies;return i.directiveDefs=mh(n,!1),i.pipeDefs=mh(n,!0),i.id=yv(i),i})}function mv(t){return Lt(t)||hf(t)}function gv(t){return t!==null}function W(t){return io(()=>({type:t.type,bootstrap:t.bootstrap||ze,declarations:t.declarations||ze,imports:t.imports||ze,exports:t.exports||ze,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function ph(t,e){if(t==null)return zi;let i={};for(let n in t)if(t.hasOwnProperty(n)){let o=t[n],r,a,l=Ge.None;Array.isArray(o)?(l=o[0],r=o[1],a=o[2]??r):(r=o,a=o),e?(i[r]=l!==Ge.None?[n,l]:n,e[r]=a):i[r]=n}return i}function it(t){return io(()=>{let e=gf(t);return yf(e),e})}function os(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone===!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Lt(t){return t[Fw]||null}function hf(t){return t[Lw]||null}function ff(t){return t[Pw]||null}function pf(t){let e=Lt(t)||hf(t)||ff(t);return e!==null?e.standalone:!1}function mf(t,e){let i=t[Bw]||null;if(!i&&e===!0)throw new Error(`Type ${Le(t)} does not have '\u0275mod' property.`);return i}function gf(t){let e={};return{type:t.type,providersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:t.inputs||zi,exportAs:t.exportAs||null,standalone:t.standalone===!0,signals:t.signals===!0,selectors:t.selectors||ze,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:ph(t.inputs,e),outputs:ph(t.outputs),debugInfo:null}}function yf(t){t.features?.forEach(e=>e(t))}function mh(t,e){if(!t)return null;let i=e?ff:mv;return()=>(typeof t=="function"?t():t).map(n=>i(n)).filter(gv)}function yv(t){let e=0,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,t.consts,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery].join("|");for(let o of i)e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function rs(t){return{\u0275providers:t}}function wv(...t){return{\u0275providers:wf(!0,t),\u0275fromNgModule:!0}}function wf(t,...e){let i=[],n=new Set,o,r=a=>{i.push(a)};return ru(e,a=>{let l=a;dl(l,r,[],n)&&(o||=[],o.push(l))}),o!==void 0&&vf(o,r),i}function vf(t,e){for(let i=0;i<t.length;i++){let{ngModule:n,providers:o}=t[i];uu(o,r=>{e(r,n)})}}function dl(t,e,i,n){if(t=Fe(t),!t)return!1;let o=null,r=lh(t),a=!r&&Lt(t);if(!r&&!a){let u=t.ngModule;if(r=lh(u),r)o=u;else return!1}else{if(a&&!a.standalone)return!1;o=t}let l=n.has(o);if(a){if(l)return!1;if(n.add(o),a.dependencies){let u=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let d of u)dl(d,e,i,n)}}else if(r){if(r.imports!=null&&!l){n.add(o);let d;try{ru(r.imports,h=>{dl(h,e,i,n)&&(d||=[],d.push(h))})}finally{}d!==void 0&&vf(d,e)}if(!l){let d=Cn(o)||(()=>new o);e({provide:o,useFactory:d,deps:ze},o),e({provide:af,useValue:o,multi:!0},o),e({provide:ci,useValue:()=>C(o),multi:!0},o)}let u=r.providers;if(u!=null&&!l){let d=t;uu(u,h=>{e(h,d)})}}else return!1;return o!==t&&t.providers!==void 0}function uu(t,e){for(let i of t)ef(i)&&(i=i.\u0275providers),Array.isArray(i)?uu(i,e):e(i)}var vv=ie({provide:String,useValue:ie});function bf(t){return t!==null&&typeof t=="object"&&vv in t}function bv(t){return!!(t&&t.useExisting)}function _v(t){return!!(t&&t.useFactory)}function hi(t){return typeof t=="function"}function Iv(t){return!!t.useClass}var ss=new S(""),Er={},Tv={},Ja;function as(){return Ja===void 0&&(Ja=new xr),Ja}var ve=class{},Yi=class extends ve{get destroyed(){return this._destroyed}constructor(e,i,n,o){super(),this.parent=i,this.source=n,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,hl(e,a=>this.processProvider(a)),this.records.set(sf,ri(void 0,this)),o.has("environment")&&this.records.set(ve,ri(void 0,this));let r=this.records.get(ss);r!=null&&typeof r.value=="string"&&this.scopes.add(r.value),this.injectorDefTypes=new Set(this.get(af,ze,J.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=Y(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let i=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of i)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Y(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let i=rn(this),n=je(void 0),o;try{return e()}finally{rn(i),je(n)}}get(e,i=Ji,n=J.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(dh))return e[dh](this);n=ns(n);let o,r=rn(this),a=je(void 0);try{if(!(n&J.SkipSelf)){let u=this.records.get(e);if(u===void 0){let d=Mv(e)&&ts(e);d&&this.injectableDefInScope(d)?u=ri(cl(e),Er):u=null,this.records.set(e,u)}if(u!=null)return this.hydrate(e,u)}let l=n&J.Self?as():this.parent;return i=n&J.Optional&&i===Ji?null:i,l.get(e,i)}catch(l){if(l.name==="NullInjectorError"){if((l[kr]=l[kr]||[]).unshift(Le(e)),r)throw l;return qw(l,e,"R3InjectorError",this.source)}else throw l}finally{je(a),rn(r)}}resolveInjectorInitializers(){let e=Y(null),i=rn(this),n=je(void 0),o;try{let r=this.get(ci,ze,J.Self);for(let a of r)a()}finally{rn(i),je(n),Y(e)}}toString(){let e=[],i=this.records;for(let n of i.keys())e.push(Le(n));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new M(205,!1)}processProvider(e){e=Fe(e);let i=hi(e)?e:Fe(e&&e.provide),n=Ev(e);if(!hi(e)&&e.multi===!0){let o=this.records.get(i);o||(o=ri(void 0,Er,!0),o.factory=()=>ll(o.multi),this.records.set(i,o)),i=e,o.multi.push(e)}this.records.set(i,n)}hydrate(e,i){let n=Y(null);try{return i.value===Er&&(i.value=Tv,i.value=i.factory()),typeof i.value=="object"&&i.value&&Sv(i.value)&&this._ngOnDestroyHooks.add(i.value),i.value}finally{Y(n)}}injectableDefInScope(e){if(!e.providedIn)return!1;let i=Fe(e.providedIn);return typeof i=="string"?i==="any"||this.scopes.has(i):this.injectorDefTypes.has(i)}removeOnDestroy(e){let i=this._onDestroyHooks.indexOf(e);i!==-1&&this._onDestroyHooks.splice(i,1)}};function cl(t){let e=ts(t),i=e!==null?e.factory:Cn(t);if(i!==null)return i;if(t instanceof S)throw new M(204,!1);if(t instanceof Function)return Dv(t);throw new M(204,!1)}function Dv(t){if(t.length>0)throw new M(204,!1);let i=xw(t);return i!==null?()=>i.factory(t):()=>new t}function Ev(t){if(bf(t))return ri(void 0,t.useValue);{let e=_f(t);return ri(e,Er)}}function _f(t,e,i){let n;if(hi(t)){let o=Fe(t);return Cn(o)||cl(o)}else if(bf(t))n=()=>Fe(t.useValue);else if(_v(t))n=()=>t.useFactory(...ll(t.deps||[]));else if(bv(t))n=()=>C(Fe(t.useExisting));else{let o=Fe(t&&(t.useClass||t.provide));if(Cv(t))n=()=>new o(...ll(t.deps));else return Cn(o)||cl(o)}return n}function ri(t,e,i=!1){return{factory:t,value:e,multi:i?[]:void 0}}function Cv(t){return!!t.deps}function Sv(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function Mv(t){return typeof t=="function"||typeof t=="object"&&t instanceof S}function hl(t,e){for(let i of t)Array.isArray(i)?hl(i,e):i&&ef(i)?hl(i.\u0275providers,e):e(i)}function pt(t,e){t instanceof Yi&&t.assertNotDestroyed();let i,n=rn(t),o=je(void 0);try{return e()}finally{rn(n),je(o)}}function If(){return tf()!==void 0||Jw()!=null}function Av(t){if(!If())throw new M(-203,!1)}function Ov(t){let e=Me.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function Nv(t){return typeof t=="function"}var jt=0,j=1,x=2,Ae=3,dt=4,qe=5,qi=6,Ki=7,ct=8,fi=9,ht=10,pe=11,Qi=12,gh=13,yi=14,ft=15,so=16,si=17,Pt=18,ls=19,Tf=20,sn=21,za=22,Sn=23,nt=25,Df=1;var Mn=7,Hr=8,pi=9,Ye=10,du=function(t){return t[t.None=0]="None",t[t.HasTransplantedViews=2]="HasTransplantedViews",t}(du||{});function Dn(t){return Array.isArray(t)&&typeof t[Df]=="object"}function Gt(t){return Array.isArray(t)&&t[Df]===!0}function Ef(t){return(t.flags&4)!==0}function us(t){return t.componentOffset>-1}function cu(t){return(t.flags&1)===1}function wi(t){return!!t.template}function kv(t){return(t[x]&512)!==0}var fl=class{constructor(e,i,n){this.previousValue=e,this.currentValue=i,this.firstChange=n}isFirstChange(){return this.firstChange}};function Cf(t,e,i,n){e!==null?e.applyValueToInputSignal(e,n):t[i]=n}function Et(){return Sf}function Sf(t){return t.type.prototype.ngOnChanges&&(t.setInput=xv),Rv}Et.ngInherit=!0;function Rv(){let t=Af(this),e=t?.current;if(e){let i=t.previous;if(i===zi)t.previous=e;else for(let n in e)i[n]=e[n];t.current=null,this.ngOnChanges(e)}}function xv(t,e,i,n,o){let r=this.declaredInputs[n],a=Af(t)||Hv(t,{previous:zi,current:null}),l=a.current||(a.current={}),u=a.previous,d=u[r];l[r]=new fl(d&&d.currentValue,i,u===zi),Cf(t,e,o,i)}var Mf="__ngSimpleChanges__";function Af(t){return t[Mf]||null}function Hv(t,e){return t[Mf]=e}var yh=null;var bt=function(t,e,i){yh?.(t,e,i)},Fv="svg",Lv="math",Pv=!1;function Bv(){return Pv}function Tt(t){for(;Array.isArray(t);)t=t[jt];return t}function Of(t,e){return Tt(e[t])}function ot(t,e){return Tt(e[t.index])}function Nf(t,e){return t.data[e]}function kf(t,e){return t[e]}function un(t,e){let i=e[t];return Dn(i)?i:i[jt]}function Vv(t){return(t[x]&4)===4}function hu(t){return(t[x]&128)===128}function jv(t){return Gt(t[Ae])}function Fr(t,e){return e==null?null:t[e]}function Rf(t){t[si]=0}function Gv(t){t[x]&1024||(t[x]|=1024,hu(t)&&Zi(t))}function Wv(t,e){for(;t>0;)e=e[yi],t--;return e}function fu(t){return!!(t[x]&9216||t[Sn]?.dirty)}function pl(t){t[ht].changeDetectionScheduler?.notify(1),fu(t)?Zi(t):t[x]&64&&(Bv()?(t[x]|=1024,Zi(t)):t[ht].changeDetectionScheduler?.notify())}function Zi(t){t[ht].changeDetectionScheduler?.notify();let e=Xi(t);for(;e!==null&&!(e[x]&8192||(e[x]|=8192,!hu(e)));)e=Xi(e)}function xf(t,e){if((t[x]&256)===256)throw new M(911,!1);t[sn]===null&&(t[sn]=[]),t[sn].push(e)}function Uv(t,e){if(t[sn]===null)return;let i=t[sn].indexOf(e);i!==-1&&t[sn].splice(i,1)}function Xi(t){let e=t[Ae];return Gt(e)?e[Ae]:e}var U={lFrame:Uf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function $v(){return U.lFrame.elementDepthCount}function Jv(){U.lFrame.elementDepthCount++}function zv(){U.lFrame.elementDepthCount--}function Hf(){return U.bindingsEnabled}function Ff(){return U.skipHydrationRootTNode!==null}function Yv(t){return U.skipHydrationRootTNode===t}function qv(){U.skipHydrationRootTNode=null}function z(){return U.lFrame.lView}function Ie(){return U.lFrame.tView}function ce(t){return U.lFrame.contextLView=t,t[ct]}function he(t){return U.lFrame.contextLView=null,t}function We(){let t=Lf();for(;t!==null&&t.type===64;)t=t.parent;return t}function Lf(){return U.lFrame.currentTNode}function Kv(){let t=U.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function ao(t,e){let i=U.lFrame;i.currentTNode=t,i.isParent=e}function Pf(){return U.lFrame.isParent}function Bf(){U.lFrame.isParent=!1}function Qv(){return U.lFrame.contextLView}function ds(){let t=U.lFrame,e=t.bindingRootIndex;return e===-1&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function Zv(t){return U.lFrame.bindingIndex=t}function pu(){return U.lFrame.bindingIndex++}function Vf(t){let e=U.lFrame,i=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,i}function Xv(){return U.lFrame.inI18n}function e0(t,e){let i=U.lFrame;i.bindingIndex=i.bindingRootIndex=t,ml(e)}function t0(){return U.lFrame.currentDirectiveIndex}function ml(t){U.lFrame.currentDirectiveIndex=t}function n0(t){let e=U.lFrame.currentDirectiveIndex;return e===-1?null:t[e]}function jf(){return U.lFrame.currentQueryIndex}function mu(t){U.lFrame.currentQueryIndex=t}function i0(t){let e=t[j];return e.type===2?e.declTNode:e.type===1?t[qe]:null}function Gf(t,e,i){if(i&J.SkipSelf){let o=e,r=t;for(;o=o.parent,o===null&&!(i&J.Host);)if(o=i0(r),o===null||(r=r[yi],o.type&10))break;if(o===null)return!1;e=o,t=r}let n=U.lFrame=Wf();return n.currentTNode=e,n.lView=t,!0}function gu(t){let e=Wf(),i=t[j];U.lFrame=e,e.currentTNode=i.firstChild,e.lView=t,e.tView=i,e.contextLView=t,e.bindingIndex=i.bindingStartIndex,e.inI18n=!1}function Wf(){let t=U.lFrame,e=t===null?null:t.child;return e===null?Uf(t):e}function Uf(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function $f(){let t=U.lFrame;return U.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Jf=$f;function yu(){let t=$f();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function o0(t){return(U.lFrame.contextLView=Wv(t,U.lFrame.contextLView))[ct]}function Fn(){return U.lFrame.selectedIndex}function An(t){U.lFrame.selectedIndex=t}function wu(){let t=U.lFrame;return Nf(t.tView,t.selectedIndex)}function r0(){return U.lFrame.currentNamespace}var zf=!0;function vu(){return zf}function bu(t){zf=t}function s0(t,e,i){let{ngOnChanges:n,ngOnInit:o,ngDoCheck:r}=e.type.prototype;if(n){let a=Sf(e);(i.preOrderHooks??=[]).push(t,a),(i.preOrderCheckHooks??=[]).push(t,a)}o&&(i.preOrderHooks??=[]).push(0-t,o),r&&((i.preOrderHooks??=[]).push(t,r),(i.preOrderCheckHooks??=[]).push(t,r))}function _u(t,e){for(let i=e.directiveStart,n=e.directiveEnd;i<n;i++){let r=t.data[i].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:l,ngAfterViewInit:u,ngAfterViewChecked:d,ngOnDestroy:h}=r;a&&(t.contentHooks??=[]).push(-i,a),l&&((t.contentHooks??=[]).push(i,l),(t.contentCheckHooks??=[]).push(i,l)),u&&(t.viewHooks??=[]).push(-i,u),d&&((t.viewHooks??=[]).push(i,d),(t.viewCheckHooks??=[]).push(i,d)),h!=null&&(t.destroyHooks??=[]).push(i,h)}}function Cr(t,e,i){Yf(t,e,3,i)}function Sr(t,e,i,n){(t[x]&3)===i&&Yf(t,e,i,n)}function Ya(t,e){let i=t[x];(i&3)===e&&(i&=16383,i+=1,t[x]=i)}function Yf(t,e,i,n){let o=n!==void 0?t[si]&65535:0,r=n??-1,a=e.length-1,l=0;for(let u=o;u<a;u++)if(typeof e[u+1]=="number"){if(l=e[u],n!=null&&l>=n)break}else e[u]<0&&(t[si]+=65536),(l<r||r==-1)&&(a0(t,i,e,u),t[si]=(t[si]&4294901760)+u+2),u++}function wh(t,e){bt(4,t,e);let i=Y(null);try{e.call(t)}finally{Y(i),bt(5,t,e)}}function a0(t,e,i,n){let o=i[n]<0,r=i[n+1],a=o?-i[n]:i[n],l=t[a];o?t[x]>>14<t[si]>>16&&(t[x]&3)===e&&(t[x]+=16384,wh(l,r)):wh(l,r)}var di=-1,On=class{constructor(e,i,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=i,this.injectImpl=n}};function l0(t){return t instanceof On}function u0(t){return(t.flags&8)!==0}function d0(t){return(t.flags&16)!==0}function qf(t){return t!==di}function Lr(t){return t&32767}function c0(t){return t>>16}function Pr(t,e){let i=c0(t),n=e;for(;i>0;)n=n[yi],i--;return n}var gl=!0;function Br(t){let e=gl;return gl=t,e}var h0=256,Kf=h0-1,Qf=5,f0=0,_t={};function p0(t,e,i){let n;typeof i=="string"?n=i.charCodeAt(0)||0:i.hasOwnProperty(Ui)&&(n=i[Ui]),n==null&&(n=i[Ui]=f0++);let o=n&Kf,r=1<<o;e.data[t+(o>>Qf)]|=r}function Vr(t,e){let i=Zf(t,e);if(i!==-1)return i;let n=e[j];n.firstCreatePass&&(t.injectorIndex=e.length,qa(n.data,t),qa(e,null),qa(n.blueprint,null));let o=Iu(t,e),r=t.injectorIndex;if(qf(o)){let a=Lr(o),l=Pr(o,e),u=l[j].data;for(let d=0;d<8;d++)e[r+d]=l[a+d]|u[a+d]}return e[r+8]=o,r}function qa(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Zf(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function Iu(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let i=0,n=null,o=e;for(;o!==null;){if(n=ip(o),n===null)return di;if(i++,o=o[yi],n.injectorIndex!==-1)return n.injectorIndex|i<<16}return di}function yl(t,e,i){p0(t,e,i)}function m0(t,e){if(e==="class")return t.classes;if(e==="style")return t.styles;let i=t.attrs;if(i){let n=i.length,o=0;for(;o<n;){let r=i[o];if(uf(r))break;if(r===0)o=o+2;else if(typeof r=="number")for(o++;o<n&&typeof i[o]=="string";)o++;else{if(r===e)return i[o+1];o=o+2}}}return null}function Xf(t,e,i){if(i&J.Optional||t!==void 0)return t;iu(e,"NodeInjector")}function ep(t,e,i,n){if(i&J.Optional&&n===void 0&&(n=null),!(i&(J.Self|J.Host))){let o=t[fi],r=je(void 0);try{return o?o.get(e,n,i&J.Optional):nf(e,n,i&J.Optional)}finally{je(r)}}return Xf(n,e,i)}function tp(t,e,i,n=J.Default,o){if(t!==null){if(e[x]&2048&&!(n&J.Self)){let a=v0(t,e,i,n,_t);if(a!==_t)return a}let r=np(t,e,i,n,_t);if(r!==_t)return r}return ep(e,i,n,o)}function np(t,e,i,n,o){let r=y0(i);if(typeof r=="function"){if(!Gf(e,t,n))return n&J.Host?Xf(o,i,n):ep(e,i,n,o);try{let a;if(a=r(n),a==null&&!(n&J.Optional))iu(i);else return a}finally{Jf()}}else if(typeof r=="number"){let a=null,l=Zf(t,e),u=di,d=n&J.Host?e[ft][qe]:null;for((l===-1||n&J.SkipSelf)&&(u=l===-1?Iu(t,e):e[l+8],u===di||!bh(n,!1)?l=-1:(a=e[j],l=Lr(u),e=Pr(u,e)));l!==-1;){let h=e[j];if(vh(r,l,h.data)){let p=g0(l,e,i,a,n,d);if(p!==_t)return p}u=e[l+8],u!==di&&bh(n,e[j].data[l+8]===d)&&vh(r,l,e)?(a=h,l=Lr(u),e=Pr(u,e)):l=-1}}return o}function g0(t,e,i,n,o,r){let a=e[j],l=a.data[t+8],u=n==null?us(l)&&gl:n!=a&&(l.type&3)!==0,d=o&J.Host&&r===l,h=Mr(l,a,i,u,d);return h!==null?Nn(e,a,h,l):_t}function Mr(t,e,i,n,o){let r=t.providerIndexes,a=e.data,l=r&1048575,u=t.directiveStart,d=t.directiveEnd,h=r>>20,p=n?l:l+h,m=o?l+h:d;for(let g=p;g<m;g++){let b=a[g];if(g<u&&i===b||g>=u&&b.type===i)return g}if(o){let g=a[u];if(g&&wi(g)&&g.type===i)return u}return null}function Nn(t,e,i,n){let o=t[i],r=e.data;if(l0(o)){let a=o;a.resolving&&jw(Vw(r[i]));let l=Br(a.canSeeViewProviders);a.resolving=!0;let u,d=a.injectImpl?je(a.injectImpl):null,h=Gf(t,n,J.Default);try{o=t[i]=a.factory(void 0,r,t,n),e.firstCreatePass&&i>=n.directiveStart&&s0(i,r[i],e)}finally{d!==null&&je(d),Br(l),a.resolving=!1,Jf()}}return o}function y0(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(Ui)?t[Ui]:void 0;return typeof e=="number"?e>=0?e&Kf:w0:e}function vh(t,e,i){let n=1<<t;return!!(i[e+(t>>Qf)]&n)}function bh(t,e){return!(t&J.Self)&&!(t&J.Host&&e)}var En=class{constructor(e,i){this._tNode=e,this._lView=i}get(e,i,n){return tp(this._tNode,this._lView,e,ns(n),i)}};function w0(){return new En(We(),z())}function lo(t){return io(()=>{let e=t.prototype.constructor,i=e[Nr]||wl(e),n=Object.prototype,o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==n;){let r=o[Nr]||wl(o);if(r&&r!==i)return r;o=Object.getPrototypeOf(o)}return r=>new r})}function wl(t){return Kh(t)?()=>{let e=wl(Fe(t));return e&&e()}:Cn(t)}function v0(t,e,i,n,o){let r=t,a=e;for(;r!==null&&a!==null&&a[x]&2048&&!(a[x]&512);){let l=np(r,a,i,n|J.Self,_t);if(l!==_t)return l;let u=r.parent;if(!u){let d=a[Tf];if(d){let h=d.get(i,_t,n);if(h!==_t)return h}u=ip(a),a=a[yi]}r=u}return o}function ip(t){let e=t[j],i=e.type;return i===2?e.declTNode:i===1?t[qe]:null}function cs(t){return m0(We(),t)}function _h(t,e=null,i=null,n){let o=op(t,e,i,n);return o.resolveInjectorInitializers(),o}function op(t,e=null,i=null,n,o=new Set){let r=[i||ze,wv(t)];return n=n||(typeof t=="object"?void 0:Le(t)),new Yi(r,e||as(),n||null,o)}var Pe=(()=>{let e=class e{static create(n,o){if(Array.isArray(n))return _h({name:""},o,n,"");{let r=n.name??"";return _h({name:r},n.parent,n.providers,r)}}};e.THROW_IF_NOT_FOUND=Ji,e.NULL=new xr,e.\u0275prov=_({token:e,providedIn:"any",factory:()=>C(sf)}),e.__NG_ELEMENT_ID__=-1;let t=e;return t})();var b0="ngOriginalError";function Ka(t){return t[b0]}var Dt=class{constructor(){this._console=console}handleError(e){let i=this._findOriginalError(e);this._console.error("ERROR",e),i&&this._console.error("ORIGINAL ERROR",i)}_findOriginalError(e){let i=e&&Ka(e);for(;i&&Ka(i);)i=Ka(i);return i||null}},rp=new S("",{providedIn:"root",factory:()=>y(Dt).handleError.bind(void 0)}),hs=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=_0,e.__NG_ENV_ID__=n=>n;let t=e;return t})(),vl=class extends hs{constructor(e){super(),this._lView=e}onDestroy(e){return xf(this._lView,e),()=>Uv(this._lView,e)}};function _0(){return new vl(z())}function I0(){return vi(We(),z())}function vi(t,e){return new Oe(ot(t,e))}var Oe=(()=>{let e=class e{constructor(n){this.nativeElement=n}};e.__NG_ELEMENT_ID__=I0;let t=e;return t})();function T0(t){return t instanceof Oe?t.nativeElement:t}var bl=class extends te{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,If()&&(this.destroyRef=y(hs,{optional:!0})??void 0)}emit(e){let i=Y(null);try{super.next(e)}finally{Y(i)}}subscribe(e,i,n){let o=e,r=i||(()=>null),a=n;if(e&&typeof e=="object"){let u=e;o=u.next?.bind(u),r=u.error?.bind(u),a=u.complete?.bind(u)}this.__isAsync&&(r=Qa(r),o&&(o=Qa(o)),a&&(a=Qa(a)));let l=super.subscribe({next:o,error:r,complete:a});return e instanceof fe&&e.add(l),l}};function Qa(t){return e=>{setTimeout(t,void 0,e)}}var ne=bl;function D0(){return this._results[Symbol.iterator]()}var _l=class t{get changes(){return this._changes??=new ne}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let i=t.prototype;i[Symbol.iterator]||(i[Symbol.iterator]=D0)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,i){return this._results.reduce(e,i)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,i){this.dirty=!1;let n=Zw(e);(this._changesDetected=!Qw(this._results,n,i))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function sp(t){return(t.flags&128)===128}var ap=new Map,E0=0;function C0(){return E0++}function S0(t){ap.set(t[ls],t)}function M0(t){ap.delete(t[ls])}var Ih="__ngContext__";function kn(t,e){Dn(e)?(t[Ih]=e[ls],S0(e)):t[Ih]=e}function lp(t){return dp(t[Qi])}function up(t){return dp(t[dt])}function dp(t){for(;t!==null&&!Gt(t);)t=t[dt];return t}var Il;function cp(t){Il=t}function hp(){if(Il!==void 0)return Il;if(typeof document<"u")return document;throw new M(210,!1)}var fs=new S("",{providedIn:"root",factory:()=>A0}),A0="ng",Tu=new S(""),Ue=new S("",{providedIn:"platform",factory:()=>"unknown"});var jR=new S(""),Du=new S("",{providedIn:"root",factory:()=>hp().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var O0="h",N0="b";var k0=()=>null;function Eu(t,e,i=!1){return k0(t,e,i)}var fp=!1,R0=new S("",{providedIn:"root",factory:()=>fp});var br;function x0(){if(br===void 0&&(br=null,Me.trustedTypes))try{br=Me.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return br}function ps(t){return x0()?.createHTML(t)||t}var _r;function pp(){if(_r===void 0&&(_r=null,Me.trustedTypes))try{_r=Me.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return _r}function Th(t){return pp()?.createHTML(t)||t}function Dh(t){return pp()?.createScriptURL(t)||t}var jr=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Yh})`}};function Ln(t){return t instanceof jr?t.changingThisBreaksApplicationSecurity:t}function ms(t,e){let i=H0(t);if(i!=null&&i!==e){if(i==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${i} (see ${Yh})`)}return i===e}function H0(t){return t instanceof jr&&t.getTypeName()||null}function F0(t){let e=new Dl(t);return L0()?new Tl(e):e}var Tl=class{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let i=new window.DOMParser().parseFromString(ps(e),"text/html").body;return i===null?this.inertDocumentHelper.getInertBodyElement(e):(i.removeChild(i.firstChild),i)}catch{return null}}},Dl=class{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let i=this.inertDocument.createElement("template");return i.innerHTML=ps(e),i}};function L0(){try{return!!new window.DOMParser().parseFromString(ps(""),"text/html")}catch{return!1}}var P0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Cu(t){return t=String(t),t.match(P0)?t:"unsafe:"+t}function Wt(t){let e={};for(let i of t.split(","))e[i]=!0;return e}function uo(...t){let e={};for(let i of t)for(let n in i)i.hasOwnProperty(n)&&(e[n]=!0);return e}var mp=Wt("area,br,col,hr,img,wbr"),gp=Wt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),yp=Wt("rp,rt"),B0=uo(yp,gp),V0=uo(gp,Wt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),j0=uo(yp,Wt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Eh=uo(mp,V0,j0,B0),wp=Wt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),G0=Wt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),W0=Wt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),U0=uo(wp,G0,W0),$0=Wt("script,style,template"),El=class{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let i=e.firstChild,n=!0,o=[];for(;i;){if(i.nodeType===Node.ELEMENT_NODE?n=this.startElement(i):i.nodeType===Node.TEXT_NODE?this.chars(i.nodeValue):this.sanitizedSomething=!0,n&&i.firstChild){o.push(i),i=Y0(i);continue}for(;i;){i.nodeType===Node.ELEMENT_NODE&&this.endElement(i);let r=z0(i);if(r){i=r;break}i=o.pop()}}return this.buf.join("")}startElement(e){let i=Ch(e).toLowerCase();if(!Eh.hasOwnProperty(i))return this.sanitizedSomething=!0,!$0.hasOwnProperty(i);this.buf.push("<"),this.buf.push(i);let n=e.attributes;for(let o=0;o<n.length;o++){let r=n.item(o),a=r.name,l=a.toLowerCase();if(!U0.hasOwnProperty(l)){this.sanitizedSomething=!0;continue}let u=r.value;wp[l]&&(u=Cu(u)),this.buf.push(" ",a,'="',Sh(u),'"')}return this.buf.push(">"),!0}endElement(e){let i=Ch(e).toLowerCase();Eh.hasOwnProperty(i)&&!mp.hasOwnProperty(i)&&(this.buf.push("</"),this.buf.push(i),this.buf.push(">"))}chars(e){this.buf.push(Sh(e))}};function J0(t,e){return(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function z0(t){let e=t.nextSibling;if(e&&t!==e.previousSibling)throw vp(e);return e}function Y0(t){let e=t.firstChild;if(e&&J0(t,e))throw vp(e);return e}function Ch(t){let e=t.nodeName;return typeof e=="string"?e:"FORM"}function vp(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var q0=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,K0=/([^\#-~ |!])/g;function Sh(t){return t.replace(/&/g,"&amp;").replace(q0,function(e){let i=e.charCodeAt(0),n=e.charCodeAt(1);return"&#"+((i-55296)*1024+(n-56320)+65536)+";"}).replace(K0,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ir;function bp(t,e){let i=null;try{Ir=Ir||F0(t);let n=e?String(e):"";i=Ir.getInertBodyElement(n);let o=5,r=n;do{if(o===0)throw new Error("Failed to sanitize html because the input is unstable");o--,n=r,r=i.innerHTML,i=Ir.getInertBodyElement(n)}while(n!==r);let l=new El().sanitizeChildren(Mh(i)||i);return ps(l)}finally{if(i){let n=Mh(i)||i;for(;n.firstChild;)n.removeChild(n.firstChild)}}}function Mh(t){return"content"in t&&Q0(t)?t.content:null}function Q0(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var co=function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t}(co||{});function Su(t){let e=Au();return e?Th(e.sanitize(co.HTML,t)||""):ms(t,"HTML")?Th(Ln(t)):bp(hp(),oo(t))}function Mu(t){let e=Au();return e?e.sanitize(co.URL,t)||"":ms(t,"URL")?Ln(t):Cu(oo(t))}function Z0(t){let e=Au();if(e)return Dh(e.sanitize(co.RESOURCE_URL,t)||"");if(ms(t,"ResourceURL"))return Dh(Ln(t));throw new M(904,!1)}function X0(t,e){return e==="src"&&(t==="embed"||t==="frame"||t==="iframe"||t==="media"||t==="script")||e==="href"&&(t==="base"||t==="link")?Z0:Mu}function _p(t,e,i){return X0(e,i)(t)}function Au(){let t=z();return t&&t[ht].sanitizer}function Ip(t){return t instanceof Function?t():t}function eb(t){return(t??y(Pe)).get(Ue)==="browser"}var Bt=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}(Bt||{}),tb;function Ou(t,e){return tb(t,e)}function ai(t,e,i,n,o){if(n!=null){let r,a=!1;Gt(n)?r=n:Dn(n)&&(a=!0,n=n[jt]);let l=Tt(n);t===0&&i!==null?o==null?Mp(e,i,l):Gr(e,i,l,o||null,!0):t===1&&i!==null?Gr(e,i,l,o||null,!0):t===2?gb(e,l,a):t===3&&e.destroyNode(l),r!=null&&wb(e,t,r,i,o)}}function nb(t,e){return t.createText(e)}function ib(t,e,i){t.setValue(e,i)}function Tp(t,e,i){return t.createElement(e,i)}function ob(t,e){Dp(t,e),e[jt]=null,e[qe]=null}function rb(t,e,i,n,o,r){n[jt]=o,n[qe]=e,gs(t,n,i,1,o,r)}function Dp(t,e){e[ht].changeDetectionScheduler?.notify(1),gs(t,e,e[pe],2,null,null)}function sb(t){let e=t[Qi];if(!e)return Za(t[j],t);for(;e;){let i=null;if(Dn(e))i=e[Qi];else{let n=e[Ye];n&&(i=n)}if(!i){for(;e&&!e[dt]&&e!==t;)Dn(e)&&Za(e[j],e),e=e[Ae];e===null&&(e=t),Dn(e)&&Za(e[j],e),i=e&&e[dt]}e=i}}function ab(t,e,i,n){let o=Ye+n,r=i.length;n>0&&(i[o-1][dt]=e),n<r-Ye?(e[dt]=i[o],rf(i,Ye+n,e)):(i.push(e),e[dt]=null),e[Ae]=i;let a=e[so];a!==null&&i!==a&&lb(a,e);let l=e[Pt];l!==null&&l.insertView(t),pl(e),e[x]|=128}function lb(t,e){let i=t[pi],o=e[Ae][Ae][ft];e[ft]!==o&&(t[x]|=du.HasTransplantedViews),i===null?t[pi]=[e]:i.push(e)}function Ep(t,e){let i=t[pi],n=i.indexOf(e);i.splice(n,1)}function Cl(t,e){if(t.length<=Ye)return;let i=Ye+e,n=t[i];if(n){let o=n[so];o!==null&&o!==t&&Ep(o,n),e>0&&(t[i-1][dt]=n[dt]);let r=Rr(t,Ye+e);ob(n[j],n);let a=r[Pt];a!==null&&a.detachView(r[j]),n[Ae]=null,n[dt]=null,n[x]&=-129}return n}function Cp(t,e){if(!(e[x]&256)){let i=e[pe];i.destroyNode&&gs(t,e,i,3,null,null),sb(e)}}function Za(t,e){if(e[x]&256)return;let i=Y(null);try{e[x]&=-129,e[x]|=256,e[Sn]&&Rc(e[Sn]),db(t,e),ub(t,e),e[j].type===1&&e[pe].destroy();let n=e[so];if(n!==null&&Gt(e[Ae])){n!==e[Ae]&&Ep(n,e);let o=e[Pt];o!==null&&o.detachView(t)}M0(e)}finally{Y(i)}}function ub(t,e){let i=t.cleanup,n=e[Ki];if(i!==null)for(let r=0;r<i.length-1;r+=2)if(typeof i[r]=="string"){let a=i[r+3];a>=0?n[a]():n[-a].unsubscribe(),r+=2}else{let a=n[i[r+1]];i[r].call(a)}n!==null&&(e[Ki]=null);let o=e[sn];if(o!==null){e[sn]=null;for(let r=0;r<o.length;r++){let a=o[r];a()}}}function db(t,e){let i;if(t!=null&&(i=t.destroyHooks)!=null)for(let n=0;n<i.length;n+=2){let o=e[i[n]];if(!(o instanceof On)){let r=i[n+1];if(Array.isArray(r))for(let a=0;a<r.length;a+=2){let l=o[r[a]],u=r[a+1];bt(4,l,u);try{u.call(l)}finally{bt(5,l,u)}}else{bt(4,o,r);try{r.call(o)}finally{bt(5,o,r)}}}}}function Sp(t,e,i){return cb(t,e.parent,i)}function cb(t,e,i){let n=e;for(;n!==null&&n.type&40;)e=n,n=e.parent;if(n===null)return i[jt];{let{componentOffset:o}=n;if(o>-1){let{encapsulation:r}=t.data[n.directiveStart+o];if(r===It.None||r===It.Emulated)return null}return ot(n,i)}}function Gr(t,e,i,n,o){t.insertBefore(e,i,n,o)}function Mp(t,e,i){t.appendChild(e,i)}function Ah(t,e,i,n,o){n!==null?Gr(t,e,i,n,o):Mp(t,e,i)}function hb(t,e,i,n){t.removeChild(e,i,n)}function Nu(t,e){return t.parentNode(e)}function fb(t,e){return t.nextSibling(e)}function Ap(t,e,i){return mb(t,e,i)}function pb(t,e,i){return t.type&40?ot(t,i):null}var mb=pb,Oh;function ku(t,e,i,n){let o=Sp(t,n,e),r=e[pe],a=n.parent||e[qe],l=Ap(a,n,e);if(o!=null)if(Array.isArray(i))for(let u=0;u<i.length;u++)Ah(r,o,i[u],l,!1);else Ah(r,o,i,l,!1);Oh!==void 0&&Oh(r,n,e,i,o)}function Ar(t,e){if(e!==null){let i=e.type;if(i&3)return ot(e,t);if(i&4)return Sl(-1,t[e.index]);if(i&8){let n=e.child;if(n!==null)return Ar(t,n);{let o=t[e.index];return Gt(o)?Sl(-1,o):Tt(o)}}else{if(i&32)return Ou(e,t)()||Tt(t[e.index]);{let n=Op(t,e);if(n!==null){if(Array.isArray(n))return n[0];let o=Xi(t[ft]);return Ar(o,n)}else return Ar(t,e.next)}}}return null}function Op(t,e){if(e!==null){let n=t[ft][qe],o=e.projection;return n.projection[o]}return null}function Sl(t,e){let i=Ye+t+1;if(i<e.length){let n=e[i],o=n[j].firstChild;if(o!==null)return Ar(n,o)}return e[Mn]}function gb(t,e,i){let n=Nu(t,e);n&&hb(t,n,e,i)}function Ru(t,e,i,n,o,r,a){for(;i!=null;){let l=n[i.index],u=i.type;if(a&&e===0&&(l&&kn(Tt(l),n),i.flags|=2),(i.flags&32)!==32)if(u&8)Ru(t,e,i.child,n,o,r,!1),ai(e,t,o,l,r);else if(u&32){let d=Ou(i,n),h;for(;h=d();)ai(e,t,o,h,r);ai(e,t,o,l,r)}else u&16?Np(t,e,n,i,o,r):ai(e,t,o,l,r);i=a?i.projectionNext:i.next}}function gs(t,e,i,n,o,r){Ru(i,n,t.firstChild,e,o,r,!1)}function yb(t,e,i){let n=e[pe],o=Sp(t,i,e),r=i.parent||e[qe],a=Ap(r,i,e);Np(n,0,e,i,o,a)}function Np(t,e,i,n,o,r){let a=i[ft],u=a[qe].projection[n.projection];if(Array.isArray(u))for(let d=0;d<u.length;d++){let h=u[d];ai(e,t,o,h,r)}else{let d=u,h=a[Ae];sp(n)&&(d.flags|=128),Ru(t,e,d,h,o,r,!0)}}function wb(t,e,i,n,o){let r=i[Mn],a=Tt(i);r!==a&&ai(e,t,n,r,o);for(let l=Ye;l<i.length;l++){let u=i[l];gs(u[j],u,t,e,n,r)}}function vb(t,e,i,n,o){if(e)o?t.addClass(i,n):t.removeClass(i,n);else{let r=n.indexOf("-")===-1?void 0:Bt.DashCase;o==null?t.removeStyle(i,n,r):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),r|=Bt.Important),t.setStyle(i,n,o,r))}}function bb(t,e,i){t.setAttribute(e,"style",i)}function kp(t,e,i){i===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",i)}function Rp(t,e,i){let{mergedAttrs:n,classes:o,styles:r}=i;n!==null&&ul(t,e,n),o!==null&&kp(t,e,o),r!==null&&bb(t,e,r)}var mt={};function A(t=1){xp(Ie(),z(),Fn()+t,!1)}function xp(t,e,i,n){if(!n)if((e[x]&3)===3){let r=t.preOrderCheckHooks;r!==null&&Cr(e,r,i)}else{let r=t.preOrderHooks;r!==null&&Sr(e,r,0,i)}An(i)}function B(t,e=J.Default){let i=z();if(i===null)return C(t,e);let n=We();return tp(n,i,Fe(t),e)}function Hp(){let t="invalid";throw new Error(t)}function Fp(t,e,i,n,o,r){let a=Y(null);try{let l=null;o&Ge.SignalBased&&(l=e[n][Ac]),l!==null&&l.transformFn!==void 0&&(r=l.transformFn(r)),o&Ge.HasDecoratorInputTransform&&(r=t.inputTransforms[n].call(e,r)),t.setInput!==null?t.setInput(e,l,r,i,n):Cf(e,l,n,r)}finally{Y(a)}}function _b(t,e){let i=t.hostBindingOpCodes;if(i!==null)try{for(let n=0;n<i.length;n++){let o=i[n];if(o<0)An(~o);else{let r=o,a=i[++n],l=i[++n];e0(a,r);let u=e[r];l(2,u)}}}finally{An(-1)}}function ys(t,e,i,n,o,r,a,l,u,d,h){let p=e.blueprint.slice();return p[jt]=o,p[x]=n|4|128|8|64,(d!==null||t&&t[x]&2048)&&(p[x]|=2048),Rf(p),p[Ae]=p[yi]=t,p[ct]=i,p[ht]=a||t&&t[ht],p[pe]=l||t&&t[pe],p[fi]=u||t&&t[fi]||null,p[qe]=r,p[ls]=C0(),p[qi]=h,p[Tf]=d,p[ft]=e.type==2?t[ft]:p,p}function ho(t,e,i,n,o){let r=t.data[e];if(r===null)r=Ib(t,e,i,n,o),Xv()&&(r.flags|=32);else if(r.type&64){r.type=i,r.value=n,r.attrs=o;let a=Kv();r.injectorIndex=a===null?-1:a.injectorIndex}return ao(r,!0),r}function Ib(t,e,i,n,o){let r=Lf(),a=Pf(),l=a?r:r&&r.parent,u=t.data[e]=Mb(t,l,i,e,n,o);return t.firstChild===null&&(t.firstChild=u),r!==null&&(a?r.child==null&&u.parent!==null&&(r.child=u):r.next===null&&(r.next=u,u.prev=r)),u}function Lp(t,e,i,n){if(i===0)return-1;let o=e.length;for(let r=0;r<i;r++)e.push(n),t.blueprint.push(n),t.data.push(null);return o}function Pp(t,e,i,n,o){let r=Fn(),a=n&2;try{An(-1),a&&e.length>nt&&xp(t,e,nt,!1),bt(a?2:0,o),i(n,o)}finally{An(r),bt(a?3:1,o)}}function Bp(t,e,i){if(Ef(e)){let n=Y(null);try{let o=e.directiveStart,r=e.directiveEnd;for(let a=o;a<r;a++){let l=t.data[a];if(l.contentQueries){let u=i[a];l.contentQueries(1,u,a)}}}finally{Y(n)}}}function Vp(t,e,i){Hf()&&(xb(t,e,i,ot(i,e)),(i.flags&64)===64&&Jp(t,e,i))}function jp(t,e,i=ot){let n=e.localNames;if(n!==null){let o=e.index+1;for(let r=0;r<n.length;r+=2){let a=n[r+1],l=a===-1?i(e,t):t[a];t[o++]=l}}}function Gp(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=xu(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function xu(t,e,i,n,o,r,a,l,u,d,h){let p=nt+n,m=p+o,g=Tb(p,m),b=typeof d=="function"?d():d;return g[j]={type:t,blueprint:g,template:i,queries:null,viewQuery:l,declTNode:e,data:g.slice().fill(null,p),bindingStartIndex:p,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof r=="function"?r():r,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:u,consts:b,incompleteFirstPass:!1,ssrId:h}}function Tb(t,e){let i=[];for(let n=0;n<e;n++)i.push(n<t?null:mt);return i}function Db(t,e,i,n){let r=n.get(R0,fp)||i===It.ShadowDom,a=t.selectRootElement(e,r);return Eb(a),a}function Eb(t){Cb(t)}var Cb=()=>null;function Sb(t,e,i,n){let o=qp(e);o.push(i),t.firstCreatePass&&Kp(t).push(n,o.length-1)}function Mb(t,e,i,n,o,r){let a=e?e.injectorIndex:-1,l=0;return Ff()&&(l|=128),{type:i,index:n,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:l,providerIndexes:0,value:o,attrs:r,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Nh(t,e,i,n,o){for(let r in e){if(!e.hasOwnProperty(r))continue;let a=e[r];if(a===void 0)continue;n??={};let l,u=Ge.None;Array.isArray(a)?(l=a[0],u=a[1]):l=a;let d=r;if(o!==null){if(!o.hasOwnProperty(r))continue;d=o[r]}t===0?kh(n,i,d,l,u):kh(n,i,d,l)}return n}function kh(t,e,i,n,o){let r;t.hasOwnProperty(i)?(r=t[i]).push(e,n):r=t[i]=[e,n],o!==void 0&&r.push(o)}function Ab(t,e,i){let n=e.directiveStart,o=e.directiveEnd,r=t.data,a=e.attrs,l=[],u=null,d=null;for(let h=n;h<o;h++){let p=r[h],m=i?i.get(p):null,g=m?m.inputs:null,b=m?m.outputs:null;u=Nh(0,p.inputs,h,u,g),d=Nh(1,p.outputs,h,d,b);let L=u!==null&&a!==null&&!lu(e)?$b(u,h,a):null;l.push(L)}u!==null&&(u.hasOwnProperty("class")&&(e.flags|=8),u.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=l,e.inputs=u,e.outputs=d}function Ob(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Wp(t,e,i,n,o,r,a,l){let u=ot(e,i),d=e.inputs,h;!l&&d!=null&&(h=d[n])?(Hu(t,i,h,n,o),us(e)&&Nb(i,e.index)):e.type&3?(n=Ob(n),o=a!=null?a(o,e.value||"",n):o,r.setProperty(u,n,o)):e.type&12}function Nb(t,e){let i=un(e,t);i[x]&16||(i[x]|=64)}function Up(t,e,i,n){if(Hf()){let o=n===null?null:{"":-1},r=Fb(t,i),a,l;r===null?a=l=null:[a,l]=r,a!==null&&$p(t,e,i,a,o,l),o&&Lb(i,n,o)}i.mergedAttrs=au(i.mergedAttrs,i.attrs)}function $p(t,e,i,n,o,r){for(let d=0;d<n.length;d++)yl(Vr(i,e),t,n[d].type);Bb(i,t.data.length,n.length);for(let d=0;d<n.length;d++){let h=n[d];h.providersResolver&&h.providersResolver(h)}let a=!1,l=!1,u=Lp(t,e,n.length,null);for(let d=0;d<n.length;d++){let h=n[d];i.mergedAttrs=au(i.mergedAttrs,h.hostAttrs),Vb(t,i,e,u,h),Pb(u,h,o),h.contentQueries!==null&&(i.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(i.flags|=64);let p=h.type.prototype;!a&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(i.index),a=!0),!l&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(i.index),l=!0),u++}Ab(t,i,r)}function kb(t,e,i,n,o){let r=o.hostBindings;if(r){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let l=~e.index;Rb(a)!=l&&a.push(l),a.push(i,n,r)}}function Rb(t){let e=t.length;for(;e>0;){let i=t[--e];if(typeof i=="number"&&i<0)return i}return 0}function xb(t,e,i,n){let o=i.directiveStart,r=i.directiveEnd;us(i)&&jb(e,i,t.data[o+i.componentOffset]),t.firstCreatePass||Vr(i,e),kn(n,e);let a=i.initialInputs;for(let l=o;l<r;l++){let u=t.data[l],d=Nn(e,t,l,i);if(kn(d,e),a!==null&&Ub(e,l-o,d,u,i,a),wi(u)){let h=un(i.index,e);h[ct]=Nn(e,t,l,i)}}}function Jp(t,e,i){let n=i.directiveStart,o=i.directiveEnd,r=i.index,a=t0();try{An(r);for(let l=n;l<o;l++){let u=t.data[l],d=e[l];ml(l),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&Hb(u,d)}}finally{An(-1),ml(a)}}function Hb(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function Fb(t,e){let i=t.directiveRegistry,n=null,o=null;if(i)for(let r=0;r<i.length;r++){let a=i[r];if(cf(e,a.selectors,!1))if(n||(n=[]),wi(a))if(a.findHostDirectiveDefs!==null){let l=[];o=o||new Map,a.findHostDirectiveDefs(a,l,o),n.unshift(...l,a);let u=l.length;Ml(t,e,u)}else n.unshift(a),Ml(t,e,0);else o=o||new Map,a.findHostDirectiveDefs?.(a,n,o),n.push(a)}return n===null?null:[n,o]}function Ml(t,e,i){e.componentOffset=i,(t.components??=[]).push(e.index)}function Lb(t,e,i){if(e){let n=t.localNames=[];for(let o=0;o<e.length;o+=2){let r=i[e[o+1]];if(r==null)throw new M(-301,!1);n.push(e[o],r)}}}function Pb(t,e,i){if(i){if(e.exportAs)for(let n=0;n<e.exportAs.length;n++)i[e.exportAs[n]]=t;wi(e)&&(i[""]=t)}}function Bb(t,e,i){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+i,t.providerIndexes=e}function Vb(t,e,i,n,o){t.data[n]=o;let r=o.factory||(o.factory=Cn(o.type,!0)),a=new On(r,wi(o),B);t.blueprint[n]=a,i[n]=a,kb(t,e,n,Lp(t,i,o.hostVars,mt),o)}function jb(t,e,i){let n=ot(e,t),o=Gp(i),r=t[ht].rendererFactory,a=16;i.signals?a=4096:i.onPush&&(a=64);let l=ws(t,ys(t,o,null,a,n,e,null,r.createRenderer(n,i),null,null,null));t[e.index]=l}function Gb(t,e,i,n,o,r){let a=ot(t,e);Wb(e[pe],a,r,t.value,i,n,o)}function Wb(t,e,i,n,o,r,a){if(r==null)t.removeAttribute(e,o,i);else{let l=a==null?oo(r):a(r,n||"",o);t.setAttribute(e,o,l,i)}}function Ub(t,e,i,n,o,r){let a=r[e];if(a!==null)for(let l=0;l<a.length;){let u=a[l++],d=a[l++],h=a[l++],p=a[l++];Fp(n,i,u,d,h,p)}}function $b(t,e,i){let n=null,o=0;for(;o<i.length;){let r=i[o];if(r===0){o+=4;continue}else if(r===5){o+=2;continue}if(typeof r=="number")break;if(t.hasOwnProperty(r)){n===null&&(n=[]);let a=t[r];for(let l=0;l<a.length;l+=3)if(a[l]===e){n.push(r,a[l+1],a[l+2],i[o+1]);break}}o+=2}return n}function zp(t,e,i,n){return[t,!0,0,e,null,n,null,i,null,null]}function Yp(t,e){let i=t.contentQueries;if(i!==null){let n=Y(null);try{for(let o=0;o<i.length;o+=2){let r=i[o],a=i[o+1];if(a!==-1){let l=t.data[a];mu(r),l.contentQueries(2,e[a],a)}}}finally{Y(n)}}}function ws(t,e){return t[Qi]?t[gh][dt]=e:t[Qi]=e,t[gh]=e,e}function Al(t,e,i){mu(0);let n=Y(null);try{e(t,i)}finally{Y(n)}}function qp(t){return t[Ki]||(t[Ki]=[])}function Kp(t){return t.cleanup||(t.cleanup=[])}function Qp(t,e){let i=t[fi],n=i?i.get(Dt,null):null;n&&n.handleError(e)}function Hu(t,e,i,n,o){for(let r=0;r<i.length;){let a=i[r++],l=i[r++],u=i[r++],d=e[a],h=t.data[a];Fp(h,d,n,l,u,o)}}function Jb(t,e,i){let n=Of(e,t);ib(t[pe],n,i)}function zb(t,e){let i=un(e,t),n=i[j];Yb(n,i);let o=i[jt];o!==null&&i[qi]===null&&(i[qi]=Eu(o,i[fi])),Fu(n,i,i[ct])}function Yb(t,e){for(let i=e.length;i<t.blueprint.length;i++)e.push(t.blueprint[i])}function Fu(t,e,i){gu(e);try{let n=t.viewQuery;n!==null&&Al(1,n,i);let o=t.template;o!==null&&Pp(t,e,o,1,i),t.firstCreatePass&&(t.firstCreatePass=!1),e[Pt]?.finishViewCreation(t),t.staticContentQueries&&Yp(t,e),t.staticViewQueries&&Al(2,t.viewQuery,i);let r=t.components;r!==null&&qb(e,r)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{e[x]&=-5,yu()}}function qb(t,e){for(let i=0;i<e.length;i++)zb(t,e[i])}function Kb(t,e,i,n){let o=Y(null);try{let r=e.tView,l=t[x]&4096?4096:16,u=ys(t,r,i,l,null,e,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),d=t[e.index];u[so]=d;let h=t[Pt];return h!==null&&(u[Pt]=h.createEmbeddedView(r)),Fu(r,u,i),u}finally{Y(o)}}function Rh(t,e){return!e||e.firstChild===null||sp(t)}function Qb(t,e,i,n=!0){let o=e[j];if(ab(o,e,t,i),n){let a=Sl(i,t),l=e[pe],u=Nu(l,t[Mn]);u!==null&&rb(o,t[qe],l,e,u,a)}let r=e[qi];r!==null&&r.firstChild!==null&&(r.firstChild=null)}function Wr(t,e,i,n,o=!1){for(;i!==null;){let r=e[i.index];r!==null&&n.push(Tt(r)),Gt(r)&&Zb(r,n);let a=i.type;if(a&8)Wr(t,e,i.child,n);else if(a&32){let l=Ou(i,e),u;for(;u=l();)n.push(u)}else if(a&16){let l=Op(e,i);if(Array.isArray(l))n.push(...l);else{let u=Xi(e[ft]);Wr(u[j],u,l,n,!0)}}i=o?i.projectionNext:i.next}return n}function Zb(t,e){for(let i=Ye;i<t.length;i++){let n=t[i],o=n[j].firstChild;o!==null&&Wr(n[j],n,o,e)}t[Mn]!==t[jt]&&e.push(t[Mn])}var Zp=[];function Xb(t){return t[Sn]??e_(t)}function e_(t){let e=Zp.pop()??Object.create(n_);return e.lView=t,e}function t_(t){t.lView[Sn]!==t&&(t.lView=null,Zp.push(t))}var n_=ae(I({},Oc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:t=>{Zi(t.lView)},consumerOnSignalRead(){this.lView[Sn]=this}}),Xp=100;function em(t,e=!0,i=0){let n=t[ht],o=n.rendererFactory,r=!1;r||o.begin?.();try{i_(t,i)}catch(a){throw e&&Qp(t,a),a}finally{r||(o.end?.(),n.inlineEffectRunner?.flush())}}function i_(t,e){Ol(t,e);let i=0;for(;fu(t);){if(i===Xp)throw new M(103,!1);i++,Ol(t,1)}}function o_(t,e,i,n){let o=e[x];if((o&256)===256)return;let r=!1;!r&&e[ht].inlineEffectRunner?.flush(),gu(e);let a=null,l=null;!r&&r_(t)&&(l=Xb(e),a=Nc(l));try{Rf(e),Zv(t.bindingStartIndex),i!==null&&Pp(t,e,i,2,n);let u=(o&3)===3;if(!r)if(u){let p=t.preOrderCheckHooks;p!==null&&Cr(e,p,null)}else{let p=t.preOrderHooks;p!==null&&Sr(e,p,0,null),Ya(e,0)}if(s_(e),tm(e,0),t.contentQueries!==null&&Yp(t,e),!r)if(u){let p=t.contentCheckHooks;p!==null&&Cr(e,p)}else{let p=t.contentHooks;p!==null&&Sr(e,p,1),Ya(e,1)}_b(t,e);let d=t.components;d!==null&&im(e,d,0);let h=t.viewQuery;if(h!==null&&Al(2,h,n),!r)if(u){let p=t.viewCheckHooks;p!==null&&Cr(e,p)}else{let p=t.viewHooks;p!==null&&Sr(e,p,2),Ya(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[za]){for(let p of e[za])p();e[za]=null}r||(e[x]&=-73)}catch(u){throw Zi(e),u}finally{l!==null&&(kc(l,a),t_(l)),yu()}}function r_(t){return t.type!==2}function tm(t,e){for(let i=lp(t);i!==null;i=up(i))for(let n=Ye;n<i.length;n++){let o=i[n];nm(o,e)}}function s_(t){for(let e=lp(t);e!==null;e=up(e)){if(!(e[x]&du.HasTransplantedViews))continue;let i=e[pi];for(let n=0;n<i.length;n++){let o=i[n],r=o[Ae];Gv(o)}}}function a_(t,e,i){let n=un(e,t);nm(n,i)}function nm(t,e){hu(t)&&Ol(t,e)}function Ol(t,e){let n=t[j],o=t[x],r=t[Sn],a=!!(e===0&&o&16);if(a||=!!(o&64&&e===0),a||=!!(o&1024),a||=!!(r?.dirty&&Ta(r)),r&&(r.dirty=!1),t[x]&=-9217,a)o_(n,t,n.template,t[ct]);else if(o&8192){tm(t,1);let l=n.components;l!==null&&im(t,l,1)}}function im(t,e,i){for(let n=0;n<e.length;n++)a_(t,e[n],i)}function Lu(t){for(t[ht].changeDetectionScheduler?.notify();t;){t[x]|=64;let e=Xi(t);if(kv(t)&&!e)return t;t=e}return null}var Rn=class{get rootNodes(){let e=this._lView,i=e[j];return Wr(i,e,i.firstChild,[])}constructor(e,i,n=!0){this._lView=e,this._cdRefInjectingView=i,this.notifyErrorHandler=n,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[ct]}set context(e){this._lView[ct]=e}get destroyed(){return(this._lView[x]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ae];if(Gt(e)){let i=e[Hr],n=i?i.indexOf(this):-1;n>-1&&(Cl(e,n),Rr(i,n))}this._attachedToViewContainer=!1}Cp(this._lView[j],this._lView)}onDestroy(e){xf(this._lView,e)}markForCheck(){Lu(this._cdRefInjectingView||this._lView)}detach(){this._lView[x]&=-129}reattach(){pl(this._lView),this._lView[x]|=128}detectChanges(){this._lView[x]|=1024,em(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new M(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,Dp(this._lView[j],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new M(902,!1);this._appRef=e,pl(this._lView)}},Vt=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=d_;let t=e;return t})(),l_=Vt,u_=class extends l_{constructor(e,i,n){super(),this._declarationLView=e,this._declarationTContainer=i,this.elementRef=n}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,n){let o=Kb(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:n});return new Rn(o)}};function d_(){return vs(We(),z())}function vs(t,e){return t.type&4?new u_(e,t,vi(t,e)):null}var WR=new RegExp(`^(\\d+)*(${N0}|${O0})*(.*)`);var c_=()=>null;function xh(t,e){return c_(t,e)}var Ur=class{},Nl=class{},$r=class{};function h_(t){let e=Error(`No component factory found for ${Le(t)}.`);return e[f_]=t,e}var f_="ngComponent";var kl=class{resolveComponentFactory(e){throw h_(e)}},bs=(()=>{let e=class e{};e.NULL=new kl;let t=e;return t})(),eo=class{},Ut=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>p_();let t=e;return t})();function p_(){let t=z(),e=We(),i=un(e.index,t);return(Dn(i)?i:t)[pe]}var m_=(()=>{let e=class e{};e.\u0275prov=_({token:e,providedIn:"root",factory:()=>null});let t=e;return t})(),Xa={};var Hh=new Set;function _s(t){Hh.has(t)||(Hh.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}function Fh(...t){}function g_(){let t=typeof Me.requestAnimationFrame=="function",e=Me[t?"requestAnimationFrame":"setTimeout"],i=Me[t?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&i){let n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);let o=i[Zone.__symbol__("OriginalDelegate")];o&&(i=o)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:i}}var q=class t{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ne(!1),this.onMicrotaskEmpty=new ne(!1),this.onStable=new ne(!1),this.onError=new ne(!1),typeof Zone>"u")throw new M(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!n&&i,o.shouldCoalesceRunChangeDetection=n,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=g_().nativeRequestAnimationFrame,v_(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new M(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new M(909,!1)}run(e,i,n){return this._inner.run(e,i,n)}runTask(e,i,n,o){let r=this._inner,a=r.scheduleEventTask("NgZoneEvent: "+o,e,y_,Fh,Fh);try{return r.runTask(a,i,n)}finally{r.cancelTask(a)}}runGuarded(e,i,n){return this._inner.runGuarded(e,i,n)}runOutsideAngular(e){return this._outer.run(e)}},y_={};function Pu(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function w_(t){t.isCheckStableRunning||t.lastRequestAnimationFrameId!==-1||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(Me,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Rl(t),t.isCheckStableRunning=!0,Pu(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Rl(t))}function v_(t){let e=()=>{w_(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(i,n,o,r,a,l)=>{if(b_(l))return i.invokeTask(o,r,a,l);try{return Lh(t),i.invokeTask(o,r,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&r.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),Ph(t)}},onInvoke:(i,n,o,r,a,l,u)=>{try{return Lh(t),i.invoke(o,r,a,l,u)}finally{t.shouldCoalesceRunChangeDetection&&e(),Ph(t)}},onHasTask:(i,n,o,r)=>{i.hasTask(o,r),n===o&&(r.change=="microTask"?(t._hasPendingMicrotasks=r.microTask,Rl(t),Pu(t)):r.change=="macroTask"&&(t.hasPendingMacrotasks=r.macroTask))},onHandleError:(i,n,o,r)=>(i.handleError(o,r),t.runOutsideAngular(()=>t.onError.emit(r)),!1)})}function Rl(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.lastRequestAnimationFrameId!==-1?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Lh(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ph(t){t._nesting--,Pu(t)}var xl=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ne,this.onMicrotaskEmpty=new ne,this.onStable=new ne,this.onError=new ne}run(e,i,n){return e.apply(i,n)}runGuarded(e,i,n){return e.apply(i,n)}runOutsideAngular(e){return e()}runTask(e,i,n,o){return e.apply(i,n)}};function b_(t){return!Array.isArray(t)||t.length!==1?!1:t[0].data?.__ignore_ng_zone__===!0}function __(t="zone.js",e){return t==="noop"?new xl:t==="zone.js"?new q(e):t}var li=function(t){return t[t.EarlyRead=0]="EarlyRead",t[t.Write=1]="Write",t[t.MixedReadWrite=2]="MixedReadWrite",t[t.Read=3]="Read",t}(li||{}),I_={destroy(){}};function Is(t,e){!e&&Av(Is);let i=e?.injector??y(Pe);if(!eb(i))return I_;_s("NgAfterNextRender");let n=i.get(Bu),o=n.handler??=new Fl,r=e?.phase??li.MixedReadWrite,a=()=>{o.unregister(u),l()},l=i.get(hs).onDestroy(a),u=pt(i,()=>new Hl(r,()=>{a(),t()}));return o.register(u),{destroy:a}}var Hl=class{constructor(e,i){this.phase=e,this.callbackFn=i,this.zone=y(q),this.errorHandler=y(Dt,{optional:!0}),y(Ur,{optional:!0})?.notify(1)}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(e){this.errorHandler?.handleError(e)}}},Fl=class{constructor(){this.executingCallbacks=!1,this.buckets={[li.EarlyRead]:new Set,[li.Write]:new Set,[li.MixedReadWrite]:new Set,[li.Read]:new Set},this.deferredCallbacks=new Set}register(e){(this.executingCallbacks?this.deferredCallbacks:this.buckets[e.phase]).add(e)}unregister(e){this.buckets[e.phase].delete(e),this.deferredCallbacks.delete(e)}execute(){this.executingCallbacks=!0;for(let e of Object.values(this.buckets))for(let i of e)i.invoke();this.executingCallbacks=!1;for(let e of this.deferredCallbacks)this.buckets[e.phase].add(e);this.deferredCallbacks.clear()}destroy(){for(let e of Object.values(this.buckets))e.clear();this.deferredCallbacks.clear()}},Bu=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let n=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let o of n)o()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=_({token:e,providedIn:"root",factory:()=>new e});let t=e;return t})();function Ll(t,e,i){let n=i?t.styles:null,o=i?t.classes:null,r=0;if(e!==null)for(let a=0;a<e.length;a++){let l=e[a];if(typeof l=="number")r=l;else if(r==1)o=rl(o,l);else if(r==2){let u=l,d=e[++a];n=rl(n,u+": "+d+";")}}i?t.styles=n:t.stylesWithoutHost=n,i?t.classes=o:t.classesWithoutHost=o}var Jr=class extends bs{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let i=Lt(e);return new xn(i,this.ngModule)}};function Bh(t){let e=[];for(let i in t){if(!t.hasOwnProperty(i))continue;let n=t[i];n!==void 0&&e.push({propName:Array.isArray(n)?n[0]:n,templateName:i})}return e}function T_(t){let e=t.toLowerCase();return e==="svg"?Fv:e==="math"?Lv:null}var Pl=class{constructor(e,i){this.injector=e,this.parentInjector=i}get(e,i,n){n=ns(n);let o=this.injector.get(e,Xa,n);return o!==Xa||i===Xa?o:this.parentInjector.get(e,i,n)}},xn=class extends $r{get inputs(){let e=this.componentDef,i=e.inputTransforms,n=Bh(e.inputs);if(i!==null)for(let o of n)i.hasOwnProperty(o.propName)&&(o.transform=i[o.propName]);return n}get outputs(){return Bh(this.componentDef.outputs)}constructor(e,i){super(),this.componentDef=e,this.ngModule=i,this.componentType=e.type,this.selector=fv(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!i}create(e,i,n,o){let r=Y(null);try{o=o||this.ngModule;let a=o instanceof ve?o:o?.injector;a&&this.componentDef.getStandaloneInjector!==null&&(a=this.componentDef.getStandaloneInjector(a)||a);let l=a?new Pl(e,a):e,u=l.get(eo,null);if(u===null)throw new M(407,!1);let d=l.get(m_,null),h=l.get(Bu,null),p=l.get(Ur,null),m={rendererFactory:u,sanitizer:d,inlineEffectRunner:null,afterRenderEventManager:h,changeDetectionScheduler:p},g=u.createRenderer(null,this.componentDef),b=this.componentDef.selectors[0][0]||"div",L=n?Db(g,n,this.componentDef.encapsulation,l):Tp(g,b,T_(b)),H=512;this.componentDef.signals?H|=4096:this.componentDef.onPush||(H|=16);let O=null;L!==null&&(O=Eu(L,l,!0));let Re=xu(0,null,null,1,0,null,null,null,null,null,null),Ee=ys(null,Re,null,H,null,null,m,g,l,null,O);gu(Ee);let se,wt;try{let Je=this.componentDef,Zt,_a=null;Je.findHostDirectiveDefs?(Zt=[],_a=new Map,Je.findHostDirectiveDefs(Je,Zt,_a),Zt.push(Je)):Zt=[Je];let zy=D_(Ee,L),Yy=E_(zy,L,Je,Zt,Ee,m,g);wt=Nf(Re,nt),L&&M_(g,Je,L,n),i!==void 0&&A_(wt,this.ngContentSelectors,i),se=S_(Yy,Je,Zt,_a,Ee,[O_]),Fu(Re,Ee,null)}finally{yu()}return new Bl(this.componentType,se,vi(wt,Ee),Ee,wt)}finally{Y(r)}}},Bl=class extends Nl{constructor(e,i,n,o,r){super(),this.location=n,this._rootLView=o,this._tNode=r,this.previousInputValues=null,this.instance=i,this.hostView=this.changeDetectorRef=new Rn(o,void 0,!1),this.componentType=e}setInput(e,i){let n=this._tNode.inputs,o;if(n!==null&&(o=n[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),i))return;let r=this._rootLView;Hu(r[j],r,o,e,i),this.previousInputValues.set(e,i);let a=un(this._tNode.index,r);Lu(a)}}get injector(){return new En(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function D_(t,e){let i=t[j],n=nt;return t[n]=e,ho(i,n,2,"#host",null)}function E_(t,e,i,n,o,r,a){let l=o[j];C_(n,t,e,a);let u=null;e!==null&&(u=Eu(e,o[fi]));let d=r.rendererFactory.createRenderer(e,i),h=16;i.signals?h=4096:i.onPush&&(h=64);let p=ys(o,Gp(i),null,h,o[t.index],t,r,d,null,null,u);return l.firstCreatePass&&Ml(l,t,n.length-1),ws(o,p),o[t.index]=p}function C_(t,e,i,n){for(let o of t)e.mergedAttrs=au(e.mergedAttrs,o.hostAttrs);e.mergedAttrs!==null&&(Ll(e,e.mergedAttrs,!0),i!==null&&Rp(n,i,e))}function S_(t,e,i,n,o,r){let a=We(),l=o[j],u=ot(a,o);$p(l,o,a,i,null,n);for(let h=0;h<i.length;h++){let p=a.directiveStart+h,m=Nn(o,l,p,a);kn(m,o)}Jp(l,o,a),u&&kn(u,o);let d=Nn(o,l,a.directiveStart+a.componentOffset,a);if(t[ct]=o[ct]=d,r!==null)for(let h of r)h(d,e);return Bp(l,a,o),d}function M_(t,e,i,n){if(n)ul(t,i,["ng-version","17.3.11"]);else{let{attrs:o,classes:r}=pv(e.selectors[0]);o&&ul(t,i,o),r&&r.length>0&&kp(t,i,r.join(" "))}}function A_(t,e,i){let n=t.projection=[];for(let o=0;o<e.length;o++){let r=i[o];n.push(r!=null?Array.from(r):null)}}function O_(){let t=We();_u(z()[j],t)}var $t=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=N_;let t=e;return t})();function N_(){let t=We();return rm(t,z())}var k_=$t,om=class extends k_{constructor(e,i,n){super(),this._lContainer=e,this._hostTNode=i,this._hostLView=n}get element(){return vi(this._hostTNode,this._hostLView)}get injector(){return new En(this._hostTNode,this._hostLView)}get parentInjector(){let e=Iu(this._hostTNode,this._hostLView);if(qf(e)){let i=Pr(e,this._hostLView),n=Lr(e),o=i[j].data[n+8];return new En(o,i)}else return new En(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let i=Vh(this._lContainer);return i!==null&&i[e]||null}get length(){return this._lContainer.length-Ye}createEmbeddedView(e,i,n){let o,r;typeof n=="number"?o=n:n!=null&&(o=n.index,r=n.injector);let a=xh(this._lContainer,e.ssrId),l=e.createEmbeddedViewImpl(i||{},r,a);return this.insertImpl(l,o,Rh(this._hostTNode,a)),l}createComponent(e,i,n,o,r){let a=e&&!Nv(e),l;if(a)l=i;else{let b=i||{};l=b.index,n=b.injector,o=b.projectableNodes,r=b.environmentInjector||b.ngModuleRef}let u=a?e:new xn(Lt(e)),d=n||this.parentInjector;if(!r&&u.ngModule==null){let L=(a?d:this.parentInjector).get(ve,null);L&&(r=L)}let h=Lt(u.componentType??{}),p=xh(this._lContainer,h?.id??null),m=p?.firstChild??null,g=u.create(d,o,m,r);return this.insertImpl(g.hostView,l,Rh(this._hostTNode,p)),g}insert(e,i){return this.insertImpl(e,i,!0)}insertImpl(e,i,n){let o=e._lView;if(jv(o)){let l=this.indexOf(e);if(l!==-1)this.detach(l);else{let u=o[Ae],d=new om(u,u[qe],u[Ae]);d.detach(d.indexOf(e))}}let r=this._adjustIndex(i),a=this._lContainer;return Qb(a,o,r,n),e.attachToViewContainerRef(),rf(el(a),r,e),e}move(e,i){return this.insert(e,i)}indexOf(e){let i=Vh(this._lContainer);return i!==null?i.indexOf(e):-1}remove(e){let i=this._adjustIndex(e,-1),n=Cl(this._lContainer,i);n&&(Rr(el(this._lContainer),i),Cp(n[j],n))}detach(e){let i=this._adjustIndex(e,-1),n=Cl(this._lContainer,i);return n&&Rr(el(this._lContainer),i)!=null?new Rn(n):null}_adjustIndex(e,i=0){return e??this.length+i}};function Vh(t){return t[Hr]}function el(t){return t[Hr]||(t[Hr]=[])}function rm(t,e){let i,n=e[t.index];return Gt(n)?i=n:(i=zp(n,e,null,t),e[t.index]=i,ws(e,i)),x_(i,e,t,n),new om(i,t,e)}function R_(t,e){let i=t[pe],n=i.createComment(""),o=ot(e,t),r=Nu(i,o);return Gr(i,r,n,fb(i,o),!1),n}var x_=L_,H_=()=>!1;function F_(t,e,i){return H_(t,e,i)}function L_(t,e,i,n){if(t[Mn])return;let o;i.type&8?o=Tt(n):o=R_(e,i),t[Mn]=o}var Vl=class t{constructor(e){this.queryList=e,this.matches=null}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},jl=class t{constructor(e=[]){this.queries=e}createEmbeddedView(e){let i=e.queries;if(i!==null){let n=e.contentQueries!==null?e.contentQueries[0]:i.length,o=[];for(let r=0;r<n;r++){let a=i.getByIndex(r),l=this.queries[a.indexInDeclarationView];o.push(l.clone())}return new t(o)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let i=0;i<this.queries.length;i++)Vu(e,i).matches!==null&&this.queries[i].setDirty()}},zr=class{constructor(e,i,n=null){this.flags=i,this.read=n,typeof e=="string"?this.predicate=$_(e):this.predicate=e}},Gl=class t{constructor(e=[]){this.queries=e}elementStart(e,i){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,i)}elementEnd(e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementEnd(e)}embeddedTView(e){let i=null;for(let n=0;n<this.length;n++){let o=i!==null?i.length:0,r=this.getByIndex(n).embeddedTView(e,o);r&&(r.indexInDeclarationView=n,i!==null?i.push(r):i=[r])}return i!==null?new t(i):null}template(e,i){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,i)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Wl=class t{constructor(e,i=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=i}elementStart(e,i){this.isApplyingToNode(i)&&this.matchTNode(e,i)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,i){this.elementStart(e,i)}embeddedTView(e,i){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,i),new t(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let i=this._declarationNodeIndex,n=e.parent;for(;n!==null&&n.type&8&&n.index!==i;)n=n.parent;return i===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(e,i){let n=this.metadata.predicate;if(Array.isArray(n))for(let o=0;o<n.length;o++){let r=n[o];this.matchTNodeWithReadOption(e,i,P_(i,r)),this.matchTNodeWithReadOption(e,i,Mr(i,e,r,!1,!1))}else n===Vt?i.type&4&&this.matchTNodeWithReadOption(e,i,-1):this.matchTNodeWithReadOption(e,i,Mr(i,e,n,!1,!1))}matchTNodeWithReadOption(e,i,n){if(n!==null){let o=this.metadata.read;if(o!==null)if(o===Oe||o===$t||o===Vt&&i.type&4)this.addMatch(i.index,-2);else{let r=Mr(i,e,o,!1,!1);r!==null&&this.addMatch(i.index,r)}else this.addMatch(i.index,n)}}addMatch(e,i){this.matches===null?this.matches=[e,i]:this.matches.push(e,i)}};function P_(t,e){let i=t.localNames;if(i!==null){for(let n=0;n<i.length;n+=2)if(i[n]===e)return i[n+1]}return null}function B_(t,e){return t.type&11?vi(t,e):t.type&4?vs(t,e):null}function V_(t,e,i,n){return i===-1?B_(e,t):i===-2?j_(t,e,n):Nn(t,t[j],i,e)}function j_(t,e,i){if(i===Oe)return vi(e,t);if(i===Vt)return vs(e,t);if(i===$t)return rm(e,t)}function sm(t,e,i,n){let o=e[Pt].queries[n];if(o.matches===null){let r=t.data,a=i.matches,l=[];for(let u=0;a!==null&&u<a.length;u+=2){let d=a[u];if(d<0)l.push(null);else{let h=r[d];l.push(V_(e,h,a[u+1],i.metadata.read))}}o.matches=l}return o.matches}function Ul(t,e,i,n){let o=t.queries.getByIndex(i),r=o.matches;if(r!==null){let a=sm(t,e,o,i);for(let l=0;l<r.length;l+=2){let u=r[l];if(u>0)n.push(a[l/2]);else{let d=r[l+1],h=e[-u];for(let p=Ye;p<h.length;p++){let m=h[p];m[so]===m[Ae]&&Ul(m[j],m,d,n)}if(h[pi]!==null){let p=h[pi];for(let m=0;m<p.length;m++){let g=p[m];Ul(g[j],g,d,n)}}}}}return n}function G_(t,e){return t[Pt].queries[e].queryList}function am(t,e,i){let n=new _l((i&4)===4);return Sb(t,e,n,n.destroy),(e[Pt]??=new jl).queries.push(new Vl(n))-1}function W_(t,e,i){let n=Ie();return n.firstCreatePass&&(lm(n,new zr(t,e,i),-1),(e&2)===2&&(n.staticViewQueries=!0)),am(n,z(),e)}function U_(t,e,i,n){let o=Ie();if(o.firstCreatePass){let r=We();lm(o,new zr(e,i,n),r.index),J_(o,t),(i&2)===2&&(o.staticContentQueries=!0)}return am(o,z(),i)}function $_(t){return t.split(",").map(e=>e.trim())}function lm(t,e,i){t.queries===null&&(t.queries=new Gl),t.queries.track(new Wl(e,i))}function J_(t,e){let i=t.contentQueries||(t.contentQueries=[]),n=i.length?i[i.length-1]:-1;e!==n&&i.push(t.queries.length-1,e)}function Vu(t,e){return t.queries.getByIndex(e)}function z_(t,e){let i=t[j],n=Vu(i,e);return n.crossesNgTemplate?Ul(i,t,e,[]):sm(i,t,n,e)}function Y_(t){let e=[],i=new Map;function n(o){let r=i.get(o);if(!r){let a=t(o);i.set(o,r=a.then(Z_))}return r}return Yr.forEach((o,r)=>{let a=[];o.templateUrl&&a.push(n(o.templateUrl).then(d=>{o.template=d}));let l=typeof o.styles=="string"?[o.styles]:o.styles||[];if(o.styles=l,o.styleUrl&&o.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(o.styleUrls?.length){let d=o.styles.length,h=o.styleUrls;o.styleUrls.forEach((p,m)=>{l.push(""),a.push(n(p).then(g=>{l[d+m]=g,h.splice(h.indexOf(p),1),h.length==0&&(o.styleUrls=void 0)}))})}else o.styleUrl&&a.push(n(o.styleUrl).then(d=>{l.push(d),o.styleUrl=void 0}));let u=Promise.all(a).then(()=>X_(r));e.push(u)}),K_(),Promise.all(e).then(()=>{})}var Yr=new Map,q_=new Set;function K_(){let t=Yr;return Yr=new Map,t}function Q_(){return Yr.size===0}function Z_(t){return typeof t=="string"?t:t.text()}function X_(t){q_.delete(t)}function ju(t){let e=t.inputConfig,i={};for(let n in e)if(e.hasOwnProperty(n)){let o=e[n];Array.isArray(o)&&o[3]&&(i[n]=o[3])}t.inputTransforms=i}var an=class{},to=class{};var qr=class extends an{constructor(e,i,n){super(),this._parent=i,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Jr(this);let o=mf(e);this._bootstrapComponents=Ip(o.bootstrap),this._r3Injector=op(e,i,[{provide:an,useValue:this},{provide:bs,useValue:this.componentFactoryResolver},...n],Le(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(i=>i()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Kr=class extends to{constructor(e){super(),this.moduleType=e}create(e){return new qr(this.moduleType,e,[])}};function eI(t,e,i){return new qr(t,e,i)}var $l=class extends an{constructor(e){super(),this.componentFactoryResolver=new Jr(this),this.instance=null;let i=new Yi([...e.providers,{provide:an,useValue:this},{provide:bs,useValue:this.componentFactoryResolver}],e.parent||as(),e.debugName,new Set(["environment"]));this.injector=i,e.runEnvironmentInitializers&&i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Ts(t,e,i=null){return new $l({providers:t,parent:e,debugName:i,runEnvironmentInitializers:!0}).injector}var Pn=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new _e(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function um(t){return nI(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function tI(t,e){if(Array.isArray(t))for(let i=0;i<t.length;i++)e(t[i]);else{let i=t[Symbol.iterator](),n;for(;!(n=i.next()).done;)e(n.value)}}function nI(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function Gu(t,e,i){return t[e]=i}function iI(t,e){return t[e]}function ln(t,e,i){let n=t[e];return Object.is(n,i)?!1:(t[e]=i,!0)}function oI(t,e,i,n){let o=ln(t,e,i);return ln(t,e+1,n)||o}function rI(t){return(t.flags&32)===32}function sI(t,e,i,n,o,r,a,l,u){let d=e.consts,h=ho(e,t,4,a||null,Fr(d,l));Up(e,i,h,Fr(d,u)),_u(e,h);let p=h.tView=xu(2,h,n,o,r,e.directiveRegistry,e.pipeRegistry,null,e.schemas,d,null);return e.queries!==null&&(e.queries.template(e,h),p.queries=e.queries.embeddedTView(h)),h}function re(t,e,i,n,o,r,a,l){let u=z(),d=Ie(),h=t+nt,p=d.firstCreatePass?sI(h,d,u,e,i,n,o,r,a):d.data[h];ao(p,!1);let m=aI(d,u,p,t);vu()&&ku(d,u,m,p),kn(m,u);let g=zp(m,u,m,p);return u[h]=g,ws(u,g),F_(g,p,u),cu(p)&&Vp(d,u,p),a!=null&&jp(u,p,l),re}var aI=lI;function lI(t,e,i,n){return bu(!0),e[pe].createComment("")}function bi(t,e,i,n){let o=z(),r=pu();if(ln(o,r,e)){let a=Ie(),l=wu();Gb(l,o,t,e,i,n)}return bi}function dm(t,e,i,n){return ln(t,pu(),i)?e+oo(i)+n:mt}function Tr(t,e){return t<<17|e<<2}function Hn(t){return t>>17&32767}function uI(t){return(t&2)==2}function dI(t,e){return t&131071|e<<17}function Jl(t){return t|2}function mi(t){return(t&131068)>>2}function tl(t,e){return t&-131069|e<<2}function cI(t){return(t&1)===1}function zl(t){return t|1}function hI(t,e,i,n,o,r){let a=r?e.classBindings:e.styleBindings,l=Hn(a),u=mi(a);t[n]=i;let d=!1,h;if(Array.isArray(i)){let p=i;h=p[1],(h===null||ro(p,h)>0)&&(d=!0)}else h=i;if(o)if(u!==0){let m=Hn(t[l+1]);t[n+1]=Tr(m,l),m!==0&&(t[m+1]=tl(t[m+1],n)),t[l+1]=dI(t[l+1],n)}else t[n+1]=Tr(l,0),l!==0&&(t[l+1]=tl(t[l+1],n)),l=n;else t[n+1]=Tr(u,0),l===0?l=n:t[u+1]=tl(t[u+1],n),u=n;d&&(t[n+1]=Jl(t[n+1])),jh(t,h,n,!0),jh(t,h,n,!1),fI(e,h,t,n,r),a=Tr(l,u),r?e.classBindings=a:e.styleBindings=a}function fI(t,e,i,n,o){let r=o?t.residualClasses:t.residualStyles;r!=null&&typeof e=="string"&&ro(r,e)>=0&&(i[n+1]=zl(i[n+1]))}function jh(t,e,i,n){let o=t[i+1],r=e===null,a=n?Hn(o):mi(o),l=!1;for(;a!==0&&(l===!1||r);){let u=t[a],d=t[a+1];pI(u,e)&&(l=!0,t[a+1]=n?zl(d):Jl(d)),a=n?Hn(d):mi(d)}l&&(t[i+1]=n?Jl(o):zl(o))}function pI(t,e){return t===null||e==null||(Array.isArray(t)?t[1]:t)===e?!0:Array.isArray(t)&&typeof e=="string"?ro(t,e)>=0:!1}var ut={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function mI(t){return t.substring(ut.key,ut.keyEnd)}function gI(t){return yI(t),cm(t,hm(t,0,ut.textEnd))}function cm(t,e){let i=ut.textEnd;return i===e?-1:(e=ut.keyEnd=wI(t,ut.key=e,i),hm(t,e,i))}function yI(t){ut.key=0,ut.keyEnd=0,ut.value=0,ut.valueEnd=0,ut.textEnd=t.length}function hm(t,e,i){for(;e<i&&t.charCodeAt(e)<=32;)e++;return e}function wI(t,e,i){for(;e<i&&t.charCodeAt(e)>32;)e++;return e}function k(t,e,i){let n=z(),o=pu();if(ln(n,o,e)){let r=Ie(),a=wu();Wp(r,a,n,t,e,n[pe],i,!1)}return k}function Yl(t,e,i,n,o){let r=e.inputs,a=o?"class":"style";Hu(t,i,r[a],a,n)}function fo(t,e){return bI(t,e,null,!0),fo}function Ds(t){_I(SI,vI,t,!0)}function vI(t,e){for(let i=gI(e);i>=0;i=cm(e,i))su(t,mI(e),!0)}function bI(t,e,i,n){let o=z(),r=Ie(),a=Vf(2);if(r.firstUpdatePass&&pm(r,t,a,n),e!==mt&&ln(o,a,e)){let l=r.data[Fn()];mm(r,l,o,o[pe],t,o[a+1]=AI(e,i),n,a)}}function _I(t,e,i,n){let o=Ie(),r=Vf(2);o.firstUpdatePass&&pm(o,null,r,n);let a=z();if(i!==mt&&ln(a,r,i)){let l=o.data[Fn()];if(gm(l,n)&&!fm(o,r)){let u=n?l.classesWithoutHost:l.stylesWithoutHost;u!==null&&(i=rl(u,i||"")),Yl(o,l,a,i,n)}else MI(o,l,a,a[pe],a[r+1],a[r+1]=CI(t,e,i),n,r)}}function fm(t,e){return e>=t.expandoStartIndex}function pm(t,e,i,n){let o=t.data;if(o[i+1]===null){let r=o[Fn()],a=fm(t,i);gm(r,n)&&e===null&&!a&&(e=!1),e=II(o,r,e,n),hI(o,r,e,i,a,n)}}function II(t,e,i,n){let o=n0(t),r=n?e.residualClasses:e.residualStyles;if(o===null)(n?e.classBindings:e.styleBindings)===0&&(i=nl(null,t,e,i,n),i=no(i,e.attrs,n),r=null);else{let a=e.directiveStylingLast;if(a===-1||t[a]!==o)if(i=nl(o,t,e,i,n),r===null){let u=TI(t,e,n);u!==void 0&&Array.isArray(u)&&(u=nl(null,t,e,u[1],n),u=no(u,e.attrs,n),DI(t,e,n,u))}else r=EI(t,e,n)}return r!==void 0&&(n?e.residualClasses=r:e.residualStyles=r),i}function TI(t,e,i){let n=i?e.classBindings:e.styleBindings;if(mi(n)!==0)return t[Hn(n)]}function DI(t,e,i,n){let o=i?e.classBindings:e.styleBindings;t[Hn(o)]=n}function EI(t,e,i){let n,o=e.directiveEnd;for(let r=1+e.directiveStylingLast;r<o;r++){let a=t[r].hostAttrs;n=no(n,a,i)}return no(n,e.attrs,i)}function nl(t,e,i,n,o){let r=null,a=i.directiveEnd,l=i.directiveStylingLast;for(l===-1?l=i.directiveStart:l++;l<a&&(r=e[l],n=no(n,r.hostAttrs,o),r!==t);)l++;return t!==null&&(i.directiveStylingLast=l),n}function no(t,e,i){let n=i?1:2,o=-1;if(e!==null)for(let r=0;r<e.length;r++){let a=e[r];typeof a=="number"?o=a:o===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),su(t,a,i?!0:e[++r]))}return t===void 0?null:t}function CI(t,e,i){if(i==null||i==="")return ze;let n=[],o=Ln(i);if(Array.isArray(o))for(let r=0;r<o.length;r++)t(n,o[r],!0);else if(typeof o=="object")for(let r in o)o.hasOwnProperty(r)&&t(n,r,o[r]);else typeof o=="string"&&e(n,o);return n}function SI(t,e,i){let n=String(e);n!==""&&!n.includes(" ")&&su(t,n,i)}function MI(t,e,i,n,o,r,a,l){o===mt&&(o=ze);let u=0,d=0,h=0<o.length?o[0]:null,p=0<r.length?r[0]:null;for(;h!==null||p!==null;){let m=u<o.length?o[u+1]:void 0,g=d<r.length?r[d+1]:void 0,b=null,L;h===p?(u+=2,d+=2,m!==g&&(b=p,L=g)):p===null||h!==null&&h<p?(u+=2,b=h):(d+=2,b=p,L=g),b!==null&&mm(t,e,i,n,b,L,a,l),h=u<o.length?o[u]:null,p=d<r.length?r[d]:null}}function mm(t,e,i,n,o,r,a,l){if(!(e.type&3))return;let u=t.data,d=u[l+1],h=cI(d)?Gh(u,e,i,o,mi(d),a):void 0;if(!Qr(h)){Qr(r)||uI(d)&&(r=Gh(u,null,i,o,l,a));let p=Of(Fn(),i);vb(n,a,p,o,r)}}function Gh(t,e,i,n,o,r){let a=e===null,l;for(;o>0;){let u=t[o],d=Array.isArray(u),h=d?u[1]:u,p=h===null,m=i[o+1];m===mt&&(m=p?ze:void 0);let g=p?$a(m,n):h===n?m:void 0;if(d&&!Qr(g)&&(g=$a(u,n)),Qr(g)&&(l=g,a))return l;let b=t[o+1];o=a?Hn(b):mi(b)}if(e!==null){let u=r?e.residualClasses:e.residualStyles;u!=null&&(l=$a(u,n))}return l}function Qr(t){return t!==void 0}function AI(t,e){return t==null||t===""||(typeof e=="string"?t=t+e:typeof t=="object"&&(t=Le(Ln(t)))),t}function gm(t,e){return(t.flags&(e?8:16))!==0}function OI(t,e,i,n,o,r){let a=e.consts,l=Fr(a,o),u=ho(e,t,2,n,l);return Up(e,i,u,Fr(a,r)),u.attrs!==null&&Ll(u,u.attrs,!1),u.mergedAttrs!==null&&Ll(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function w(t,e,i,n){let o=z(),r=Ie(),a=nt+t,l=o[pe],u=r.firstCreatePass?OI(a,r,o,e,i,n):r.data[a],d=NI(r,o,u,l,e,t);o[a]=d;let h=cu(u);return ao(u,!0),Rp(l,d,u),!rI(u)&&vu()&&ku(r,o,d,u),$v()===0&&kn(d,o),Jv(),h&&(Vp(r,o,u),Bp(r,u,o)),n!==null&&jp(o,u),w}function v(){let t=We();Pf()?Bf():(t=t.parent,ao(t,!1));let e=t;Yv(e)&&qv(),zv();let i=Ie();return i.firstCreatePass&&(_u(i,t),Ef(t)&&i.queries.elementEnd(t)),e.classesWithoutHost!=null&&u0(e)&&Yl(i,e,z(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&d0(e)&&Yl(i,e,z(),e.stylesWithoutHost,!1),v}function T(t,e,i,n){return w(t,e,i,n),v(),T}var NI=(t,e,i,n,o,r)=>(bu(!0),Tp(n,o,r0()));function Te(){return z()}var Zr="en-US";var kI=Zr;function RI(t){typeof t=="string"&&(kI=t.toLowerCase().replace(/_/g,"-"))}function ee(t,e,i,n){let o=z(),r=Ie(),a=We();return HI(r,o,o[pe],a,t,e,n),ee}function xI(t,e,i,n){let o=t.cleanup;if(o!=null)for(let r=0;r<o.length-1;r+=2){let a=o[r];if(a===i&&o[r+1]===n){let l=e[Ki],u=o[r+2];return l.length>u?l[u]:null}typeof a=="string"&&(r+=2)}return null}function HI(t,e,i,n,o,r,a){let l=cu(n),d=t.firstCreatePass&&Kp(t),h=e[ct],p=qp(e),m=!0;if(n.type&3||a){let L=ot(n,e),H=a?a(L):L,O=p.length,Re=a?se=>a(Tt(se[n.index])):n.index,Ee=null;if(!a&&l&&(Ee=xI(t,e,o,n.index)),Ee!==null){let se=Ee.__ngLastListenerFn__||Ee;se.__ngNextListenerFn__=r,Ee.__ngLastListenerFn__=r,m=!1}else{r=Uh(n,e,h,r,!1);let se=i.listen(H,o,r);p.push(r,se),d&&d.push(o,Re,O,O+1)}}else r=Uh(n,e,h,r,!1);let g=n.outputs,b;if(m&&g!==null&&(b=g[o])){let L=b.length;if(L)for(let H=0;H<L;H+=2){let O=b[H],Re=b[H+1],wt=e[O][Re].subscribe(r),Je=p.length;p.push(r,wt),d&&d.push(o,n.index,Je,-(Je+1))}}}function Wh(t,e,i,n){let o=Y(null);try{return bt(6,e,i),i(n)!==!1}catch(r){return Qp(t,r),!1}finally{bt(7,e,i),Y(o)}}function Uh(t,e,i,n,o){return function r(a){if(a===Function)return n;let l=t.componentOffset>-1?un(t.index,e):e;Lu(l);let u=Wh(e,i,n,a),d=r.__ngNextListenerFn__;for(;d;)u=Wh(e,i,d,a)&&u,d=d.__ngNextListenerFn__;return o&&u===!1&&a.preventDefault(),u}}function oe(t=1){return o0(t)}function FI(t,e){let i=null,n=lv(t);for(let o=0;o<e.length;o++){let r=e[o];if(r==="*"){i=o;continue}if(n===null?cf(t,r,!0):cv(n,r))return o}return i}function _i(t){let e=z()[ft][qe];if(!e.projection){let i=t?t.length:1,n=e.projection=Xw(i,null),o=n.slice(),r=e.child;for(;r!==null;){let a=t?FI(r,t):0;a!==null&&(o[a]?o[a].projectionNext=r:n[a]=r,o[a]=r),r=r.next}}}function Ii(t,e=0,i){let n=z(),o=Ie(),r=ho(o,nt+t,16,null,i||null);r.projection===null&&(r.projection=e),Bf(),(!n[qi]||Ff())&&(r.flags&32)!==32&&yb(o,n,r)}function Wu(t,e,i){return Es(t,"",e,"",i),Wu}function Es(t,e,i,n,o){let r=z(),a=dm(r,e,i,n);if(a!==mt){let l=Ie(),u=wu();Wp(l,u,r,t,a,r[pe],o,!1)}return Es}function Uu(t,e,i,n){U_(t,e,i,n)}function gt(t,e,i){W_(t,e,i)}function Ke(t){let e=z(),i=Ie(),n=jf();mu(n+1);let o=Vu(i,n);if(t.dirty&&Vv(e)===((o.metadata.flags&2)===2)){if(o.matches===null)t.reset([]);else{let r=z_(e,n);t.reset(r,T0),t.notifyOnChanges()}return!0}return!1}function Qe(){return G_(z(),jf())}function LI(t,e,i,n){i>=t.data.length&&(t.data[i]=null,t.blueprint[i]=null),e[i]=n}function Ct(t){let e=Qv();return kf(e,nt+t)}function D(t,e=""){let i=z(),n=Ie(),o=t+nt,r=n.firstCreatePass?ho(n,o,1,e,null):n.data[o],a=PI(n,i,r,e,t);i[o]=a,vu()&&ku(n,i,a,r),ao(r,!1)}var PI=(t,e,i,n,o)=>(bu(!0),nb(e[pe],n));function Ti(t){return be("",t,""),Ti}function be(t,e,i){let n=z(),o=dm(n,t,e,i);return o!==mt&&Jb(n,Fn(),o),be}function BI(t,e,i){let n=Ie();if(n.firstCreatePass){let o=wi(t);ql(i,n.data,n.blueprint,o,!0),ql(e,n.data,n.blueprint,o,!1)}}function ql(t,e,i,n,o){if(t=Fe(t),Array.isArray(t))for(let r=0;r<t.length;r++)ql(t[r],e,i,n,o);else{let r=Ie(),a=z(),l=We(),u=hi(t)?t:Fe(t.provide),d=_f(t),h=l.providerIndexes&1048575,p=l.directiveStart,m=l.providerIndexes>>20;if(hi(t)||!t.multi){let g=new On(d,o,B),b=ol(u,e,o?h:h+m,p);b===-1?(yl(Vr(l,a),r,u),il(r,t,e.length),e.push(u),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=1048576),i.push(g),a.push(g)):(i[b]=g,a[b]=g)}else{let g=ol(u,e,h+m,p),b=ol(u,e,h,h+m),L=g>=0&&i[g],H=b>=0&&i[b];if(o&&!H||!o&&!L){yl(Vr(l,a),r,u);let O=GI(o?jI:VI,i.length,o,n,d);!o&&H&&(i[b].providerFactory=O),il(r,t,e.length,0),e.push(u),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=1048576),i.push(O),a.push(O)}else{let O=ym(i[o?b:g],d,!o&&n);il(r,t,g>-1?g:b,O)}!o&&n&&H&&i[b].componentProviders++}}}function il(t,e,i,n){let o=hi(e),r=Iv(e);if(o||r){let u=(r?Fe(e.useClass):e).prototype.ngOnDestroy;if(u){let d=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){let h=d.indexOf(i);h===-1?d.push(i,[n,u]):d[h+1].push(n,u)}else d.push(i,u)}}}function ym(t,e,i){return i&&t.componentProviders++,t.multi.push(e)-1}function ol(t,e,i,n){for(let o=i;o<n;o++)if(e[o]===t)return o;return-1}function VI(t,e,i,n){return Kl(this.multi,[])}function jI(t,e,i,n){let o=this.multi,r;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Nn(i,i[j],this.providerFactory.index,n);r=l.slice(0,a),Kl(o,r);for(let u=a;u<l.length;u++)r.push(l[u])}else r=[],Kl(o,r);return r}function Kl(t,e){for(let i=0;i<t.length;i++){let n=t[i];e.push(n())}return e}function GI(t,e,i,n,o){let r=new On(t,i,B);return r.multi=[],r.index=e,r.componentProviders=0,ym(r,o,n&&!i),r}function Cs(t,e=[]){return i=>{i.providersResolver=(n,o)=>BI(n,o?o(t):t,e)}}var WI=(()=>{let e=class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let o=wf(!1,n.type),r=o.length>0?Ts([o],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,r)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=_({token:e,providedIn:"environment",factory:()=>new e(C(ve))});let t=e;return t})();function Bn(t){_s("NgStandalone"),t.getStandaloneInjector=e=>e.get(WI).getOrCreateStandaloneInjector(t)}function $u(t,e,i){let n=ds()+t,o=z();return o[n]===mt?Gu(o,n,i?e.call(i):e()):iI(o,n)}function po(t,e,i,n){return vm(z(),ds(),t,e,i,n)}function Ju(t,e,i,n,o){return UI(z(),ds(),t,e,i,n,o)}function wm(t,e){let i=t[e];return i===mt?void 0:i}function vm(t,e,i,n,o,r){let a=e+i;return ln(t,a,o)?Gu(t,a+1,r?n.call(r,o):n(o)):wm(t,a+1)}function UI(t,e,i,n,o,r,a){let l=e+i;return oI(t,l,o,r)?Gu(t,l+2,a?n.call(a,o,r):n(o,r)):wm(t,l+2)}function dn(t,e){let i=Ie(),n,o=t+nt;i.firstCreatePass?(n=$I(e,i.pipeRegistry),i.data[o]=n,n.onDestroy&&(i.destroyHooks??=[]).push(o,n.onDestroy)):n=i.data[o];let r=n.factory||(n.factory=Cn(n.type,!0)),a,l=je(B);try{let u=Br(!1),d=r();return Br(u),LI(i,z(),o,d),d}finally{je(l)}}function $I(t,e){if(e)for(let i=e.length-1;i>=0;i--){let n=e[i];if(t===n.name)return n}}function cn(t,e,i){let n=t+nt,o=z(),r=kf(o,n);return JI(o,n)?vm(o,ds(),e,r.transform,i,r):r.transform(i)}function JI(t,e){return t[j].data[e].pure}function zu(t,e){return vs(t,e)}var Dr=null;function zI(t){Dr!==null&&(t.defaultEncapsulation!==Dr.defaultEncapsulation||t.preserveWhitespaces!==Dr.preserveWhitespaces)||(Dr=t)}var Ss=(()=>{let e=class e{log(n){console.log(n)}warn(n){console.warn(n)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();var Yu=new S(""),mo=new S(""),Ms=(()=>{let e=class e{constructor(n,o,r){this._ngZone=n,this.registry=o,this._pendingCount=0,this._isZoneStable=!0,this._callbacks=[],this.taskTrackingZone=null,qu||(YI(r),r.addToWindow(o)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{q.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&this._pendingCount===0&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb()}});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(o=>o.updateCb&&o.updateCb(n)?(clearTimeout(o.timeoutId),!1):!0)}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,o,r){let a=-1;o&&o>0&&(a=setTimeout(()=>{this._callbacks=this._callbacks.filter(l=>l.timeoutId!==a),n()},o)),this._callbacks.push({doneCb:n,timeoutId:a,updateCb:r})}whenStable(n,o,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,o,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,o,r){return[]}};e.\u0275fac=function(o){return new(o||e)(C(q),C(As),C(mo))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),As=(()=>{let e=class e{constructor(){this._applications=new Map}registerApplication(n,o){this._applications.set(n,o)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,o=!0){return qu?.findTestabilityInTree(this,n,o)??null}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();function YI(t){qu=t}var qu;function Vn(t){return!!t&&typeof t.then=="function"}function Ku(t){return!!t&&typeof t.subscribe=="function"}var Os=new S(""),bm=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((n,o)=>{this.resolve=n,this.reject=o}),this.appInits=y(Os,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let n=[];for(let r of this.appInits){let a=r();if(Vn(a))n.push(a);else if(Ku(a)){let l=new Promise((u,d)=>{a.subscribe({complete:u,error:d})});n.push(l)}}let o=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{o()}).catch(r=>{this.reject(r)}),n.length===0&&o(),this.initialized=!0}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ns=new S("");function qI(){xc(()=>{throw new M(600,!1)})}function KI(t){return t.isBoundToModule}function QI(t,e,i){try{let n=i();return Vn(n)?n.catch(o=>{throw e.runOutsideAngular(()=>t.handleError(o)),o}):n}catch(n){throw e.runOutsideAngular(()=>t.handleError(n)),n}}function _m(t,e){return Array.isArray(e)?e.reduce(_m,t):I(I({},t),e)}var Jt=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=y(rp),this.afterRenderEffectManager=y(Bu),this.externalTestViews=new Set,this.beforeRender=new te,this.afterTick=new te,this.componentTypes=[],this.components=[],this.isStable=y(Pn).hasPendingTasks.pipe(R(n=>!n)),this._injector=y(ve)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,o){let r=n instanceof $r;if(!this._injector.get(bm).done){let g=!r&&pf(n),b=!1;throw new M(405,b)}let l;r?l=n:l=this._injector.get(bs).resolveComponentFactory(n),this.componentTypes.push(l.componentType);let u=KI(l)?void 0:this._injector.get(an),d=o||l.selector,h=l.create(Pe.NULL,[],d,u),p=h.location.nativeElement,m=h.injector.get(Yu,null);return m?.registerApplication(p),h.onDestroy(()=>{this.detachView(h.hostView),Or(this.components,h),m?.unregisterApplication(p)}),this._loadComponent(h),h}tick(){this._tick(!0)}_tick(n){if(this._runningTick)throw new M(101,!1);let o=Y(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(n)}catch(r){this.internalErrorHandler(r)}finally{this.afterTick.next(),this._runningTick=!1,Y(o)}}detectChangesInAttachedViews(n){let o=0,r=this.afterRenderEffectManager;for(;;){if(o===Xp)throw new M(103,!1);if(n){let a=o===0;this.beforeRender.next(a);for(let{_lView:l,notifyErrorHandler:u}of this._views)ZI(l,a,u)}if(o++,r.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:a})=>Ql(a))&&(r.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:a})=>Ql(a))))break}}attachView(n){let o=n;this._views.push(o),o.attachToAppRef(this)}detachView(n){let o=n;Or(this._views,o),o.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n);let o=this._injector.get(Ns,[]);[...this._bootstrapListeners,...o].forEach(r=>r(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Or(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new M(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Or(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ZI(t,e,i){!e&&!Ql(t)||XI(t,i,e)}function Ql(t){return fu(t)}function XI(t,e,i){let n;i?(n=0,t[x]|=1024):t[x]&64?n=0:n=1,em(t,e,n)}var Zl=class{constructor(e,i){this.ngModuleFactory=e,this.componentFactories=i}},ks=(()=>{let e=class e{compileModuleSync(n){return new Kr(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let o=this.compileModuleSync(n),r=mf(n),a=Ip(r.declarations).reduce((l,u)=>{let d=Lt(u);return d&&l.push(new xn(d)),l},[]);return new Zl(o,a)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),eT=new S("");function tT(t,e,i){let n=new Kr(i);return Promise.resolve(n)}function $h(t){for(let e=t.length-1;e>=0;e--)if(t[e]!==void 0)return t[e]}var nT=(()=>{let e=class e{constructor(){this.zone=y(q),this.applicationRef=y(Jt)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function iT(t){return[{provide:q,useFactory:t},{provide:ci,multi:!0,useFactory:()=>{let e=y(nT,{optional:!0});return()=>e.initialize()}},{provide:ci,multi:!0,useFactory:()=>{let e=y(sT);return()=>{e.initialize()}}},{provide:rp,useFactory:oT}]}function oT(){let t=y(q),e=y(Dt);return i=>t.runOutsideAngular(()=>e.handleError(i))}function rT(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var sT=(()=>{let e=class e{constructor(){this.subscription=new fe,this.initialized=!1,this.zone=y(q),this.pendingTasks=y(Pn)}initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{q.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{q.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function aT(){return typeof $localize<"u"&&$localize.locale||Zr}var Rs=new S("",{providedIn:"root",factory:()=>y(Rs,J.Optional|J.SkipSelf)||aT()});var Im=new S(""),Tm=(()=>{let e=class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,o){let r=__(o?.ngZone,rT({eventCoalescing:o?.ngZoneEventCoalescing,runCoalescing:o?.ngZoneRunCoalescing}));return r.run(()=>{let a=eI(n.moduleType,this.injector,iT(()=>r)),l=a.injector.get(Dt,null);return r.runOutsideAngular(()=>{let u=r.onError.subscribe({next:d=>{l.handleError(d)}});a.onDestroy(()=>{Or(this._modules,a),u.unsubscribe()})}),QI(l,r,()=>{let u=a.injector.get(bm);return u.runInitializers(),u.donePromise.then(()=>{let d=a.injector.get(Rs,Zr);return RI(d||Zr),this._moduleDoBootstrap(a),a})})})}bootstrapModule(n,o=[]){let r=_m({},o);return tT(this.injector,r,n).then(a=>this.bootstrapModuleFactory(a,r))}_moduleDoBootstrap(n){let o=n.injector.get(Jt);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(r=>o.bootstrap(r));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(o);else throw new M(-403,!1);this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new M(404,!1);this._modules.slice().forEach(o=>o.destroy()),this._destroyListeners.forEach(o=>o());let n=this._injector.get(Im,null);n&&(n.forEach(o=>o()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}};e.\u0275fac=function(o){return new(o||e)(C(Pe))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})(),$i=null,Dm=new S("");function lT(t){if($i&&!$i.get(Dm,!1))throw new M(400,!1);qI(),$i=t;let e=t.get(Tm);return cT(t),e}function Qu(t,e,i=[]){let n=`Platform: ${e}`,o=new S(n);return(r=[])=>{let a=Em();if(!a||a.injector.get(Dm,!1)){let l=[...i,...r,{provide:o,useValue:!0}];t?t(l):lT(uT(l,n))}return dT(o)}}function uT(t=[],e){return Pe.create({name:e,providers:[{provide:ss,useValue:"platform"},{provide:Im,useValue:new Set([()=>$i=null])},...t]})}function dT(t){let e=Em();if(!e)throw new M(401,!1);return e}function Em(){return $i?.get(Tm)??null}function cT(t){t.get(Tu,null)?.forEach(i=>i())}var St=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=hT;let t=e;return t})();function hT(t){return fT(We(),z(),(t&16)===16)}function fT(t,e,i){if(us(t)&&!i){let n=un(t.index,e);return new Rn(n,n)}else if(t.type&47){let n=e[ft];return new Rn(n,e)}return null}var Xl=class{constructor(){}supports(e){return um(e)}create(e){return new eu(e)}},pT=(t,e)=>e,eu=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||pT}forEachItem(e){let i;for(i=this._itHead;i!==null;i=i._next)e(i)}forEachOperation(e){let i=this._itHead,n=this._removalsHead,o=0,r=null;for(;i||n;){let a=!n||i&&i.currentIndex<Jh(n,o,r)?i:n,l=Jh(a,o,r),u=a.currentIndex;if(a===n)o--,n=n._nextRemoved;else if(i=i._next,a.previousIndex==null)o++;else{r||(r=[]);let d=l-o,h=u-o;if(d!=h){for(let m=0;m<d;m++){let g=m<r.length?r[m]:r[m]=0,b=g+m;h<=b&&b<d&&(r[m]=g+1)}let p=a.previousIndex;r[p]=h-d}}l!==u&&e(a,l,u)}}forEachPreviousItem(e){let i;for(i=this._previousItHead;i!==null;i=i._nextPrevious)e(i)}forEachAddedItem(e){let i;for(i=this._additionsHead;i!==null;i=i._nextAdded)e(i)}forEachMovedItem(e){let i;for(i=this._movesHead;i!==null;i=i._nextMoved)e(i)}forEachRemovedItem(e){let i;for(i=this._removalsHead;i!==null;i=i._nextRemoved)e(i)}forEachIdentityChange(e){let i;for(i=this._identityChangesHead;i!==null;i=i._nextIdentityChange)e(i)}diff(e){if(e==null&&(e=[]),!um(e))throw new M(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let i=this._itHead,n=!1,o,r,a;if(Array.isArray(e)){this.length=e.length;for(let l=0;l<this.length;l++)r=e[l],a=this._trackByFn(l,r),i===null||!Object.is(i.trackById,a)?(i=this._mismatch(i,r,a,l),n=!0):(n&&(i=this._verifyReinsertion(i,r,a,l)),Object.is(i.item,r)||this._addIdentityChange(i,r)),i=i._next}else o=0,tI(e,l=>{a=this._trackByFn(o,l),i===null||!Object.is(i.trackById,a)?(i=this._mismatch(i,l,a,o),n=!0):(n&&(i=this._verifyReinsertion(i,l,a,o)),Object.is(i.item,l)||this._addIdentityChange(i,l)),i=i._next,o++}),this.length=o;return this._truncate(i),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,i,n,o){let r;return e===null?r=this._itTail:(r=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(n,null),e!==null?(Object.is(e.item,i)||this._addIdentityChange(e,i),this._reinsertAfter(e,r,o)):(e=this._linkedRecords===null?null:this._linkedRecords.get(n,o),e!==null?(Object.is(e.item,i)||this._addIdentityChange(e,i),this._moveAfter(e,r,o)):e=this._addAfter(new tu(i,n),r,o)),e}_verifyReinsertion(e,i,n,o){let r=this._unlinkedRecords===null?null:this._unlinkedRecords.get(n,null);return r!==null?e=this._reinsertAfter(r,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;e!==null;){let i=e._next;this._addToRemovals(this._unlink(e)),e=i}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,i,n){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let o=e._prevRemoved,r=e._nextRemoved;return o===null?this._removalsHead=r:o._nextRemoved=r,r===null?this._removalsTail=o:r._prevRemoved=o,this._insertAfter(e,i,n),this._addToMoves(e,n),e}_moveAfter(e,i,n){return this._unlink(e),this._insertAfter(e,i,n),this._addToMoves(e,n),e}_addAfter(e,i,n){return this._insertAfter(e,i,n),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,i,n){let o=i===null?this._itHead:i._next;return e._next=o,e._prev=i,o===null?this._itTail=e:o._prev=e,i===null?this._itHead=e:i._next=e,this._linkedRecords===null&&(this._linkedRecords=new Xr),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let i=e._prev,n=e._next;return i===null?this._itHead=n:i._next=n,n===null?this._itTail=i:n._prev=i,e}_addToMoves(e,i){return e.previousIndex===i||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Xr),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,i){return e.item=i,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},tu=class{constructor(e,i){this.item=e,this.trackById=i,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},nu=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,i){let n;for(n=this._head;n!==null;n=n._nextDup)if((i===null||i<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){let i=e._prevDup,n=e._nextDup;return i===null?this._head=n:i._nextDup=n,n===null?this._tail=i:n._prevDup=i,this._head===null}},Xr=class{constructor(){this.map=new Map}put(e){let i=e.trackById,n=this.map.get(i);n||(n=new nu,this.map.set(i,n)),n.add(e)}get(e,i){let n=e,o=this.map.get(n);return o?o.get(e,i):null}remove(e){let i=e.trackById;return this.map.get(i).remove(e)&&this.map.delete(i),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Jh(t,e,i){let n=t.previousIndex;if(n===null)return n;let o=0;return i&&n<i.length&&(o=i[n]),n+e+o}function zh(){return new Zu([new Xl])}var Zu=(()=>{let e=class e{constructor(n){this.factories=n}static create(n,o){if(o!=null){let r=o.factories.slice();n=n.concat(r)}return new e(n)}static extend(n){return{provide:e,useFactory:o=>e.create(n,o||zh()),deps:[[e,new ou,new is]]}}find(n){let o=this.factories.find(r=>r.supports(n));if(o!=null)return o;throw new M(901,!1)}};e.\u0275prov=_({token:e,providedIn:"root",factory:zh});let t=e;return t})();var Cm=Qu(null,"core",[]),Sm=(()=>{let e=class e{constructor(n){}};e.\u0275fac=function(o){return new(o||e)(C(Jt))},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();function Di(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Xu(t){let e=Y(null);try{return t()}finally{Y(e)}}function xs(t,e){let i=Lt(t),n=e.elementInjector||as();return new xn(i).create(n,e.projectableNodes,e.hostElement,e.environmentInjector)}function Mm(t){let e=Lt(t);if(!e)return null;let i=new xn(e);return{get selector(){return i.selector},get type(){return i.componentType},get inputs(){return i.inputs},get outputs(){return i.outputs},get ngContentSelectors(){return i.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var xm=null;function jn(){return xm}function Hm(t){xm??=t}var Hs=class{};var me=new S(""),ld=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>y(gT),providedIn:"platform"});let t=e;return t})(),Fm=new S(""),gT=(()=>{let e=class e extends ld{constructor(){super(),this._doc=y(me),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return jn().getBaseHref(this._doc)}onPopState(n){let o=jn().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",n,!1),()=>o.removeEventListener("popstate",n)}onHashChange(n){let o=jn().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",n,!1),()=>o.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,o,r){this._history.pushState(n,o,r)}replaceState(n,o,r){this._history.replaceState(n,o,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function ud(t,e){if(t.length==0)return e;if(e.length==0)return t;let i=0;return t.endsWith("/")&&i++,e.startsWith("/")&&i++,i==2?t+e.substring(1):i==1?t+e:t+"/"+e}function Am(t){let e=t.match(/#|\?|$/),i=e&&e.index||t.length,n=i-(t[i-1]==="/"?1:0);return t.slice(0,n)+t.slice(i)}function zt(t){return t&&t[0]!=="?"?"?"+t:t}var Yt=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>y(dd),providedIn:"root"});let t=e;return t})(),Lm=new S(""),dd=(()=>{let e=class e extends Yt{constructor(n,o){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??y(me).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ud(this._baseHref,n)}path(n=!1){let o=this._platformLocation.pathname+zt(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${o}${r}`:o}pushState(n,o,r,a){let l=this.prepareExternalUrl(r+zt(a));this._platformLocation.pushState(n,o,l)}replaceState(n,o,r,a){let l=this.prepareExternalUrl(r+zt(a));this._platformLocation.replaceState(n,o,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(o){return new(o||e)(C(ld),C(Lm,8))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Pm=(()=>{let e=class e extends Yt{constructor(n,o){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],o!=null&&(this._baseHref=o)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let o=this._platformLocation.hash??"#";return o.length>0?o.substring(1):o}prepareExternalUrl(n){let o=ud(this._baseHref,n);return o.length>0?"#"+o:o}pushState(n,o,r,a){let l=this.prepareExternalUrl(r+zt(a));l.length==0&&(l=this._platformLocation.pathname),this._platformLocation.pushState(n,o,l)}replaceState(n,o,r,a){let l=this.prepareExternalUrl(r+zt(a));l.length==0&&(l=this._platformLocation.pathname),this._platformLocation.replaceState(n,o,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(o){return new(o||e)(C(ld),C(Lm,8))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),Ci=(()=>{let e=class e{constructor(n){this._subject=new ne,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let o=this._locationStrategy.getBaseHref();this._basePath=vT(Am(Om(o))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,o=""){return this.path()==this.normalize(n+zt(o))}normalize(n){return e.stripTrailingSlash(wT(this._basePath,Om(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,o="",r=null){this._locationStrategy.pushState(r,"",n,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+zt(o)),r)}replaceState(n,o="",r=null){this._locationStrategy.replaceState(r,"",n,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+zt(o)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",o){this._urlChangeListeners.forEach(r=>r(n,o))}subscribe(n,o,r){return this._subject.subscribe({next:n,error:o,complete:r})}};e.normalizeQueryParams=zt,e.joinWithSlash=ud,e.stripTrailingSlash=Am,e.\u0275fac=function(o){return new(o||e)(C(Yt))},e.\u0275prov=_({token:e,factory:()=>yT(),providedIn:"root"});let t=e;return t})();function yT(){return new Ci(C(Yt))}function wT(t,e){if(!t||!e.startsWith(t))return e;let i=e.substring(t.length);return i===""||["/",";","?","#"].includes(i[0])?i:e}function Om(t){return t.replace(/\/index.html$/,"")}function vT(t){if(new RegExp("^(https?:)?//").test(t)){let[,i]=t.split(/\/\/[^\/]+/);return i}return t}function Fs(t,e){e=encodeURIComponent(e);for(let i of t.split(";")){let n=i.indexOf("="),[o,r]=n==-1?[i,""]:[i.slice(0,n),i.slice(n+1)];if(o.trim()===e)return decodeURIComponent(r)}return null}var ed=/\s+/,Nm=[],Ls=(()=>{let e=class e{constructor(n,o){this._ngEl=n,this._renderer=o,this.initialClasses=Nm,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(ed):Nm}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(ed):n}ngDoCheck(){for(let o of this.initialClasses)this._updateState(o,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let o of n)this._updateState(o,!0);else if(n!=null)for(let o of Object.keys(n))this._updateState(o,!!n[o]);this._applyStateDiff()}_updateState(n,o){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==o&&(r.changed=!0,r.enabled=o),r.touched=!0):this.stateMap.set(n,{enabled:o,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let o=n[0],r=n[1];r.changed?(this._toggleClass(o,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(o,!1),this.stateMap.delete(o)),r.touched=!1}}_toggleClass(n,o){n=n.trim(),n.length>0&&n.split(ed).forEach(r=>{o?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};e.\u0275fac=function(o){return new(o||e)(B(Oe),B(Ut))},e.\u0275dir=it({type:e,selectors:[["","ngClass",""]],inputs:{klass:[Ge.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let t=e;return t})();var td=class{constructor(e,i,n,o){this.$implicit=e,this.ngForOf=i,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Mt=(()=>{let e=class e{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,o,r){this._viewContainer=n,this._template=o,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let o=this._viewContainer;n.forEachOperation((r,a,l)=>{if(r.previousIndex==null)o.createEmbeddedView(this._template,new td(r.item,this._ngForOf,-1,-1),l===null?void 0:l);else if(l==null)o.remove(a===null?void 0:a);else if(a!==null){let u=o.get(a);o.move(u,l),km(u,r)}});for(let r=0,a=o.length;r<a;r++){let u=o.get(r).context;u.index=r,u.count=a,u.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let a=o.get(r.currentIndex);km(a,r)})}static ngTemplateContextGuard(n,o){return!0}};e.\u0275fac=function(o){return new(o||e)(B($t),B(Vt),B(Zu))},e.\u0275dir=it({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function km(t,e){t.context.$implicit=e.item}var At=(()=>{let e=class e{constructor(n,o){this._viewContainer=n,this._context=new nd,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=o}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Rm("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Rm("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,o){return!0}};e.\u0275fac=function(o){return new(o||e)(B($t),B(Vt))},e.\u0275dir=it({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),nd=class{constructor(){this.$implicit=null,this.ngIf=null}};function Rm(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${Le(e)}'.`)}function bT(t,e){return new M(2100,!1)}var id=class{createSubscription(e,i){return Xu(()=>e.subscribe({next:i,error:n=>{throw n}}))}dispose(e){Xu(()=>e.unsubscribe())}},od=class{createSubscription(e,i){return e.then(i,n=>{throw n})}dispose(e){}},_T=new od,IT=new id,Bm=(()=>{let e=class e{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,o=>this._updateLatestValue(n,o))}_selectStrategy(n){if(Vn(n))return _T;if(Ku(n))return IT;throw bT(e,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,o){n===this._obj&&(this._latestValue=o,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};e.\u0275fac=function(o){return new(o||e)(B(St,16))},e.\u0275pipe=os({name:"async",type:e,pure:!1,standalone:!0});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})(),cd="browser",TT="server";function Vm(t){return t===cd}function Gn(t){return t===TT}var jm=(()=>{let e=class e{};e.\u0275prov=_({token:e,providedIn:"root",factory:()=>Vm(y(Ue))?new rd(y(me),window):new sd});let t=e;return t})(),rd=class{constructor(e,i){this.document=e,this.window=i,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let i=DT(this.document,e);i&&(this.scrollToElement(i),i.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let i=e.getBoundingClientRect(),n=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],o-r[1])}};function DT(t,e){let i=t.getElementById(e)||t.getElementsByName(e)[0];if(i)return i;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let a=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(a)return a}o=n.nextNode()}}return null}var sd=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},Ei=class{};var Gm=new S("");var CT={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Cx=ae(I({},CT),{"[class.ng-submitted]":"isSubmitted"});var ST=new S("CallSetDisabledState",{providedIn:"root",factory:()=>Wm}),Wm="always";var MT=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var hd=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ST,useValue:n.callSetDisabledState??Wm}]}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({imports:[MT]});let t=e;return t})();var Um="Only Believe";var yo=class{},Bs=class{},Kt=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(i=>{let n=i.indexOf(":");if(n>0){let o=i.slice(0,n),r=o.toLowerCase(),a=i.slice(n+1).trim();this.maybeSetNormalizedName(o,r),this.headers.has(r)?this.headers.get(r).push(a):this.headers.set(r,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((i,n)=>{this.setHeaderEntries(n,i)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([i,n])=>{this.setHeaderEntries(i,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let i=this.headers.get(e.toLowerCase());return i&&i.length>0?i[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,i){return this.clone({name:e,value:i,op:"a"})}set(e,i){return this.clone({name:e,value:i,op:"s"})}delete(e,i){return this.clone({name:e,value:i,op:"d"})}maybeSetNormalizedName(e,i){this.normalizedNames.has(i)||this.normalizedNames.set(i,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(i=>{this.headers.set(i,e.headers.get(i)),this.normalizedNames.set(i,e.normalizedNames.get(i))})}clone(e){let i=new t;return i.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,i.lazyUpdate=(this.lazyUpdate||[]).concat([e]),i}applyUpdate(e){let i=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,i);let o=(e.op==="a"?this.headers.get(i):void 0)||[];o.push(...n),this.headers.set(i,o);break;case"d":let r=e.value;if(!r)this.headers.delete(i),this.normalizedNames.delete(i);else{let a=this.headers.get(i);if(!a)return;a=a.filter(l=>r.indexOf(l)===-1),a.length===0?(this.headers.delete(i),this.normalizedNames.delete(i)):this.headers.set(i,a)}break}}setHeaderEntries(e,i){let n=(Array.isArray(i)?i:[i]).map(r=>r.toString()),o=e.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(e,o)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(i=>e(this.normalizedNames.get(i),this.headers.get(i)))}};var pd=class{encodeKey(e){return $m(e)}encodeValue(e){return $m(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function NT(t,e){let i=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[a,l]=r==-1?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,r)),e.decodeValue(o.slice(r+1))],u=i.get(a)||[];u.push(l),i.set(a,u)}),i}var kT=/%(\d[a-f0-9])/gi,RT={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $m(t){return encodeURIComponent(t).replace(kT,(e,i)=>RT[i]??e)}function Ps(t){return`${t}`}var fn=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new pd,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=NT(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(i=>{let n=e.fromObject[i],o=Array.isArray(n)?n.map(Ps):[Ps(n)];this.map.set(i,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let i=this.map.get(e);return i?i[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,i){return this.clone({param:e,value:i,op:"a"})}appendAll(e){let i=[];return Object.keys(e).forEach(n=>{let o=e[n];Array.isArray(o)?o.forEach(r=>{i.push({param:n,value:r,op:"a"})}):i.push({param:n,value:o,op:"a"})}),this.clone(i)}set(e,i){return this.clone({param:e,value:i,op:"s"})}delete(e,i){return this.clone({param:e,value:i,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let i=this.encoder.encodeKey(e);return this.map.get(e).map(n=>i+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let i=new t({encoder:this.encoder});return i.cloneFrom=this.cloneFrom||this,i.updates=(this.updates||[]).concat(e),i}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let i=(e.op==="a"?this.map.get(e.param):void 0)||[];i.push(Ps(e.value)),this.map.set(e.param,i);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],o=n.indexOf(Ps(e.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var md=class{constructor(){this.map=new Map}set(e,i){return this.map.set(e,i),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function xT(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Jm(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function zm(t){return typeof Blob<"u"&&t instanceof Blob}function Ym(t){return typeof FormData<"u"&&t instanceof FormData}function HT(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var go=class t{constructor(e,i,n,o){this.url=i,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let r;if(xT(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new Kt,this.context??=new md,!this.params)this.params=new fn,this.urlWithParams=i;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=i;else{let l=i.indexOf("?"),u=l===-1?"?":l<i.length-1?"&":"";this.urlWithParams=i+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Jm(this.body)||zm(this.body)||Ym(this.body)||HT(this.body)?this.body:this.body instanceof fn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ym(this.body)?null:zm(this.body)?this.body.type||null:Jm(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof fn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let i=e.method||this.method,n=e.url||this.url,o=e.responseType||this.responseType,r=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,l=e.withCredentials??this.withCredentials,u=e.reportProgress??this.reportProgress,d=e.headers||this.headers,h=e.params||this.params,p=e.context??this.context;return e.setHeaders!==void 0&&(d=Object.keys(e.setHeaders).reduce((m,g)=>m.set(g,e.setHeaders[g]),d)),e.setParams&&(h=Object.keys(e.setParams).reduce((m,g)=>m.set(g,e.setParams[g]),h)),new t(i,n,a,{params:h,headers:d,context:p,reportProgress:u,responseType:o,withCredentials:l,transferCache:r})}},Si=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Si||{}),wo=class{constructor(e,i=Gs.Ok,n="OK"){this.headers=e.headers||new Kt,this.status=e.status!==void 0?e.status:i,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},gd=class t extends wo{constructor(e={}){super(e),this.type=Si.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Vs=class t extends wo{constructor(e={}){super(e),this.type=Si.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},js=class extends wo{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Gs=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(Gs||{});function fd(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var yd=(()=>{let e=class e{constructor(n){this.handler=n}request(n,o,r={}){let a;if(n instanceof go)a=n;else{let d;r.headers instanceof Kt?d=r.headers:d=new Kt(r.headers);let h;r.params&&(r.params instanceof fn?h=r.params:h=new fn({fromObject:r.params})),a=new go(n,o,r.body!==void 0?r.body:null,{headers:d,context:r.context,params:h,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let l=E(a).pipe(Ht(d=>this.handler.handle(d)));if(n instanceof go||r.observe==="events")return l;let u=l.pipe(ye(d=>d instanceof Vs));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return u.pipe(R(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return d.body}));case"blob":return u.pipe(R(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new Error("Response is not a Blob.");return d.body}));case"text":return u.pipe(R(d=>{if(d.body!==null&&typeof d.body!="string")throw new Error("Response is not a string.");return d.body}));case"json":default:return u.pipe(R(d=>d.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(n,o={}){return this.request("DELETE",n,o)}get(n,o={}){return this.request("GET",n,o)}head(n,o={}){return this.request("HEAD",n,o)}jsonp(n,o){return this.request("JSONP",n,{params:new fn().append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,o={}){return this.request("OPTIONS",n,o)}patch(n,o,r={}){return this.request("PATCH",n,fd(r,o))}post(n,o,r={}){return this.request("POST",n,fd(r,o))}put(n,o,r={}){return this.request("PUT",n,fd(r,o))}};e.\u0275fac=function(o){return new(o||e)(C(yo))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();function Zm(t,e){return e(t)}function FT(t,e){return(i,n)=>e.intercept(i,{handle:o=>t(o,n)})}function LT(t,e,i){return(n,o)=>pt(i,()=>e(n,r=>t(r,o)))}var PT=new S(""),wd=new S(""),BT=new S(""),VT=new S("");function jT(){let t=null;return(e,i)=>{t===null&&(t=(y(PT,{optional:!0})??[]).reduceRight(FT,Zm));let n=y(Pn),o=n.add();return t(e,i).pipe(Ft(()=>n.remove(o)))}}var qm=(()=>{let e=class e extends yo{constructor(n,o){super(),this.backend=n,this.injector=o,this.chain=null,this.pendingTasks=y(Pn);let r=y(VT,{optional:!0});this.backend=r??n}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(wd),...this.injector.get(BT,[])]));this.chain=r.reduceRight((a,l)=>LT(a,l,this.injector),Zm)}let o=this.pendingTasks.add();return this.chain(n,r=>this.backend.handle(r)).pipe(Ft(()=>this.pendingTasks.remove(o)))}};e.\u0275fac=function(o){return new(o||e)(C(Bs),C(ve))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();var GT=/^\)\]\}',?\n/;function WT(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var Km=(()=>{let e=class e{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new M(-2800,!1);let o=this.xhrFactory;return(o.\u0275loadImpl?le(o.\u0275loadImpl()):E(null)).pipe(we(()=>new P(a=>{let l=o.build();if(l.open(n.method,n.urlWithParams),n.withCredentials&&(l.withCredentials=!0),n.headers.forEach((H,O)=>l.setRequestHeader(H,O.join(","))),n.headers.has("Accept")||l.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let H=n.detectContentTypeHeader();H!==null&&l.setRequestHeader("Content-Type",H)}if(n.responseType){let H=n.responseType.toLowerCase();l.responseType=H!=="json"?H:"text"}let u=n.serializeBody(),d=null,h=()=>{if(d!==null)return d;let H=l.statusText||"OK",O=new Kt(l.getAllResponseHeaders()),Re=WT(l)||n.url;return d=new gd({headers:O,status:l.status,statusText:H,url:Re}),d},p=()=>{let{headers:H,status:O,statusText:Re,url:Ee}=h(),se=null;O!==Gs.NoContent&&(se=typeof l.response>"u"?l.responseText:l.response),O===0&&(O=se?Gs.Ok:0);let wt=O>=200&&O<300;if(n.responseType==="json"&&typeof se=="string"){let Je=se;se=se.replace(GT,"");try{se=se!==""?JSON.parse(se):null}catch(Zt){se=Je,wt&&(wt=!1,se={error:Zt,text:se})}}wt?(a.next(new Vs({body:se,headers:H,status:O,statusText:Re,url:Ee||void 0})),a.complete()):a.error(new js({error:se,headers:H,status:O,statusText:Re,url:Ee||void 0}))},m=H=>{let{url:O}=h(),Re=new js({error:H,status:l.status||0,statusText:l.statusText||"Unknown Error",url:O||void 0});a.error(Re)},g=!1,b=H=>{g||(a.next(h()),g=!0);let O={type:Si.DownloadProgress,loaded:H.loaded};H.lengthComputable&&(O.total=H.total),n.responseType==="text"&&l.responseText&&(O.partialText=l.responseText),a.next(O)},L=H=>{let O={type:Si.UploadProgress,loaded:H.loaded};H.lengthComputable&&(O.total=H.total),a.next(O)};return l.addEventListener("load",p),l.addEventListener("error",m),l.addEventListener("timeout",m),l.addEventListener("abort",m),n.reportProgress&&(l.addEventListener("progress",b),u!==null&&l.upload&&l.upload.addEventListener("progress",L)),l.send(u),a.next({type:Si.Sent}),()=>{l.removeEventListener("error",m),l.removeEventListener("abort",m),l.removeEventListener("load",p),l.removeEventListener("timeout",m),n.reportProgress&&(l.removeEventListener("progress",b),u!==null&&l.upload&&l.upload.removeEventListener("progress",L)),l.readyState!==l.DONE&&l.abort()}})))}};e.\u0275fac=function(o){return new(o||e)(C(Ei))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),Xm=new S(""),UT="XSRF-TOKEN",$T=new S("",{providedIn:"root",factory:()=>UT}),JT="X-XSRF-TOKEN",zT=new S("",{providedIn:"root",factory:()=>JT}),Ws=class{},YT=(()=>{let e=class e{constructor(n,o,r){this.doc=n,this.platform=o,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Fs(n,this.cookieName),this.lastCookieString=n),this.lastToken}};e.\u0275fac=function(o){return new(o||e)(C(me),C(Ue),C($T))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();function qT(t,e){let i=t.url.toLowerCase();if(!y(Xm)||t.method==="GET"||t.method==="HEAD"||i.startsWith("http://")||i.startsWith("https://"))return e(t);let n=y(Ws).getToken(),o=y(zT);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),e(t)}var eg=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(eg||{});function KT(t,e){return{\u0275kind:t,\u0275providers:e}}function QT(...t){let e=[yd,Km,qm,{provide:yo,useExisting:qm},{provide:Bs,useExisting:Km},{provide:wd,useValue:qT,multi:!0},{provide:Xm,useValue:!0},{provide:Ws,useClass:YT}];for(let i of t)e.push(...i.\u0275providers);return rs(e)}var Qm=new S("");function ZT(){return KT(eg.LegacyInterceptors,[{provide:Qm,useFactory:jT},{provide:wd,useExisting:Qm,multi:!0}])}var Vx=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({providers:[QT(ZT())]});let t=e;return t})();var _d=class extends Hs{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Id=class t extends _d{static makeCurrent(){Hm(new t)}onAndCancel(e,i,n){return e.addEventListener(i,n),()=>{e.removeEventListener(i,n)}}dispatchEvent(e,i){e.dispatchEvent(i)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,i){return i=i||this.getDefaultDocument(),i.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,i){return i==="window"?window:i==="document"?e:i==="body"?e.body:null}getBaseHref(e){let i=eD();return i==null?null:tD(i)}resetBaseElement(){vo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Fs(document.cookie,e)}},vo=null;function eD(){return vo=vo||document.querySelector("base"),vo?vo.getAttribute("href"):null}function tD(t){return new URL(t,document.baseURI).pathname}var Td=class{addToWindow(e){Me.getAngularTestability=(n,o=!0)=>{let r=e.findTestabilityInTree(n,o);if(r==null)throw new M(5103,!1);return r},Me.getAllAngularTestabilities=()=>e.getAllTestabilities(),Me.getAllAngularRootElements=()=>e.getAllRootElements();let i=n=>{let o=Me.getAllAngularTestabilities(),r=o.length,a=function(){r--,r==0&&n()};o.forEach(l=>{l.whenStable(a)})};Me.frameworkStabilizers||(Me.frameworkStabilizers=[]),Me.frameworkStabilizers.push(i)}findTestabilityInTree(e,i,n){if(i==null)return null;let o=e.getTestability(i);return o??(n?jn().isShadowRoot(i)?this.findTestabilityInTree(e,i.host,!0):this.findTestabilityInTree(e,i.parentElement,!0):null)}},nD=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),Dd=new S(""),og=(()=>{let e=class e{constructor(n,o){this._zone=o,this._eventNameToPlugin=new Map,n.forEach(r=>{r.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,o,r){return this._findPluginFor(o).addEventListener(n,o,r)}getZone(){return this._zone}_findPluginFor(n){let o=this._eventNameToPlugin.get(n);if(o)return o;if(o=this._plugins.find(a=>a.supports(n)),!o)throw new M(5101,!1);return this._eventNameToPlugin.set(n,o),o}};e.\u0275fac=function(o){return new(o||e)(C(Dd),C(q))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),Us=class{constructor(e){this._doc=e}},vd="ng-app-id",rg=(()=>{let e=class e{constructor(n,o,r,a={}){this.doc=n,this.appId=o,this.nonce=r,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Gn(a),this.resetHostNodes()}addStyles(n){for(let o of n)this.changeUsageCount(o,1)===1&&this.onStyleAdded(o)}removeStyles(n){for(let o of n)this.changeUsageCount(o,-1)<=0&&this.onStyleRemoved(o)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(o=>o.remove()),n.clear());for(let o of this.getAllStyles())this.onStyleRemoved(o);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let o of this.getAllStyles())this.addStyleToHost(n,o)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let o of this.hostNodes)this.addStyleToHost(o,n)}onStyleRemoved(n){let o=this.styleRef;o.get(n)?.elements?.forEach(r=>r.remove()),o.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${vd}="${this.appId}"]`);if(n?.length){let o=new Map;return n.forEach(r=>{r.textContent!=null&&o.set(r.textContent,r)}),o}return null}changeUsageCount(n,o){let r=this.styleRef;if(r.has(n)){let a=r.get(n);return a.usage+=o,a.usage}return r.set(n,{usage:o,elements:[]}),o}getStyleElement(n,o){let r=this.styleNodesInDOM,a=r?.get(o);if(a?.parentNode===n)return r.delete(o),a.removeAttribute(vd),a;{let l=this.doc.createElement("style");return this.nonce&&l.setAttribute("nonce",this.nonce),l.textContent=o,this.platformIsServer&&l.setAttribute(vd,this.appId),n.appendChild(l),l}}addStyleToHost(n,o){let r=this.getStyleElement(n,o),a=this.styleRef,l=a.get(o)?.elements;l?l.push(r):a.set(o,{elements:[r],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(o){return new(o||e)(C(me),C(fs),C(Du,8),C(Ue))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),bd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Cd=/%COMP%/g,sg="%COMP%",iD=`_nghost-${sg}`,oD=`_ngcontent-${sg}`,rD=!0,sD=new S("",{providedIn:"root",factory:()=>rD});function aD(t){return oD.replace(Cd,t)}function lD(t){return iD.replace(Cd,t)}function ag(t,e){return e.map(i=>i.replace(Cd,t))}var tg=(()=>{let e=class e{constructor(n,o,r,a,l,u,d,h=null){this.eventManager=n,this.sharedStylesHost=o,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=l,this.platformId=u,this.ngZone=d,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=Gn(u),this.defaultRenderer=new bo(n,l,d,this.platformIsServer)}createRenderer(n,o){if(!n||!o)return this.defaultRenderer;this.platformIsServer&&o.encapsulation===It.ShadowDom&&(o=ae(I({},o),{encapsulation:It.Emulated}));let r=this.getOrCreateRenderer(n,o);return r instanceof $s?r.applyToHost(n):r instanceof _o&&r.applyStyles(),r}getOrCreateRenderer(n,o){let r=this.rendererByCompId,a=r.get(o.id);if(!a){let l=this.doc,u=this.ngZone,d=this.eventManager,h=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(o.encapsulation){case It.Emulated:a=new $s(d,h,o,this.appId,p,l,u,m);break;case It.ShadowDom:return new Ed(d,h,n,o,l,u,this.nonce,m);default:a=new _o(d,h,o,p,l,u,m);break}r.set(o.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(o){return new(o||e)(C(og),C(rg),C(fs),C(sD),C(me),C(Ue),C(q),C(Du))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),bo=class{constructor(e,i,n,o){this.eventManager=e,this.doc=i,this.ngZone=n,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,i){return i?this.doc.createElementNS(bd[i]||i,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,i){(ng(e)?e.content:e).appendChild(i)}insertBefore(e,i,n){e&&(ng(e)?e.content:e).insertBefore(i,n)}removeChild(e,i){e&&e.removeChild(i)}selectRootElement(e,i){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new M(-5104,!1);return i||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,i,n,o){if(o){i=o+":"+i;let r=bd[o];r?e.setAttributeNS(r,i,n):e.setAttribute(i,n)}else e.setAttribute(i,n)}removeAttribute(e,i,n){if(n){let o=bd[n];o?e.removeAttributeNS(o,i):e.removeAttribute(`${n}:${i}`)}else e.removeAttribute(i)}addClass(e,i){e.classList.add(i)}removeClass(e,i){e.classList.remove(i)}setStyle(e,i,n,o){o&(Bt.DashCase|Bt.Important)?e.style.setProperty(i,n,o&Bt.Important?"important":""):e.style[i]=n}removeStyle(e,i,n){n&Bt.DashCase?e.style.removeProperty(i):e.style[i]=""}setProperty(e,i,n){e!=null&&(e[i]=n)}setValue(e,i){e.nodeValue=i}listen(e,i,n){if(typeof e=="string"&&(e=jn().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${i}`);return this.eventManager.addEventListener(e,i,this.decoratePreventDefault(n))}decoratePreventDefault(e){return i=>{if(i==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(i)):e(i))===!1&&i.preventDefault()}}};function ng(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ed=class extends bo{constructor(e,i,n,o,r,a,l,u){super(e,r,a,u),this.sharedStylesHost=i,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=ag(o.id,o.styles);for(let h of d){let p=document.createElement("style");l&&p.setAttribute("nonce",l),p.textContent=h,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,i){return super.appendChild(this.nodeOrShadowRoot(e),i)}insertBefore(e,i,n){return super.insertBefore(this.nodeOrShadowRoot(e),i,n)}removeChild(e,i){return super.removeChild(this.nodeOrShadowRoot(e),i)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},_o=class extends bo{constructor(e,i,n,o,r,a,l,u){super(e,r,a,l),this.sharedStylesHost=i,this.removeStylesOnCompDestroy=o,this.styles=u?ag(u,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},$s=class extends _o{constructor(e,i,n,o,r,a,l,u){let d=o+"-"+n.id;super(e,i,n,r,a,l,u,d),this.contentAttr=aD(d),this.hostAttr=lD(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,i){let n=super.createElement(e,i);return super.setAttribute(n,this.contentAttr,""),n}},uD=(()=>{let e=class e extends Us{constructor(n){super(n)}supports(n){return!0}addEventListener(n,o,r){return n.addEventListener(o,r,!1),()=>this.removeEventListener(n,o,r)}removeEventListener(n,o,r){return n.removeEventListener(o,r)}};e.\u0275fac=function(o){return new(o||e)(C(me))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),ig=["alt","control","meta","shift"],dD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},cD={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},hD=(()=>{let e=class e extends Us{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,o,r){let a=e.parseEventName(o),l=e.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>jn().onAndCancel(n,a.domEventName,l))}static parseEventName(n){let o=n.toLowerCase().split("."),r=o.shift();if(o.length===0||!(r==="keydown"||r==="keyup"))return null;let a=e._normalizeKey(o.pop()),l="",u=o.indexOf("code");if(u>-1&&(o.splice(u,1),l="code."),ig.forEach(h=>{let p=o.indexOf(h);p>-1&&(o.splice(p,1),l+=h+".")}),l+=a,o.length!=0||a.length===0)return null;let d={};return d.domEventName=r,d.fullKey=l,d}static matchEventFullKeyCode(n,o){let r=dD[n.key]||n.key,a="";return o.indexOf("code.")>-1&&(r=n.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ig.forEach(l=>{if(l!==r){let u=cD[l];u(n)&&(a+=l+".")}}),a+=r,a===o)}static eventCallback(n,o,r){return a=>{e.matchEventFullKeyCode(a,n)&&r.runGuarded(()=>o(a))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(o){return new(o||e)(C(me))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();function fD(){Id.makeCurrent()}function pD(){return new Dt}function mD(){return cp(document),document}var gD=[{provide:Ue,useValue:cd},{provide:Tu,useValue:fD,multi:!0},{provide:me,useFactory:mD,deps:[]}],iH=Qu(Cm,"browser",gD),yD=new S(""),wD=[{provide:mo,useClass:Td,deps:[]},{provide:Yu,useClass:Ms,deps:[q,As,mo]},{provide:Ms,useClass:Ms,deps:[q,As,mo]}],vD=[{provide:ss,useValue:"root"},{provide:Dt,useFactory:pD,deps:[]},{provide:Dd,useClass:uD,multi:!0,deps:[me,q,Ue]},{provide:Dd,useClass:hD,multi:!0,deps:[me]},tg,rg,og,{provide:eo,useExisting:tg},{provide:Ei,useClass:nD,deps:[]},[]],oH=(()=>{let e=class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:fs,useValue:n.appId}]}}};e.\u0275fac=function(o){return new(o||e)(C(yD,12))},e.\u0275mod=W({type:e}),e.\u0275inj=G({providers:[...vD,...wD],imports:[qt,Sm]});let t=e;return t})();var lg=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(o){return new(o||e)(C(me))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var V="primary",Fo=Symbol("RouteTitle"),Nd=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let i=this.params[e];return Array.isArray(i)?i[0]:i}return null}getAll(e){if(this.has(e)){let i=this.params[e];return Array.isArray(i)?i:[i]}return[]}get keys(){return Object.keys(this.params)}};function ki(t){return new Nd(t)}function _D(t,e,i){let n=i.path.split("/");if(n.length>t.length||i.pathMatch==="full"&&(e.hasChildren()||n.length<t.length))return null;let o={};for(let r=0;r<n.length;r++){let a=n[r],l=t[r];if(a.startsWith(":"))o[a.substring(1)]=l;else if(a!==l.path)return null}return{consumed:t.slice(0,n.length),posParams:o}}function ID(t,e){if(t.length!==e.length)return!1;for(let i=0;i<t.length;++i)if(!Ot(t[i],e[i]))return!1;return!0}function Ot(t,e){let i=t?kd(t):void 0,n=e?kd(e):void 0;if(!i||!n||i.length!=n.length)return!1;let o;for(let r=0;r<i.length;r++)if(o=i[r],!yg(t[o],e[o]))return!1;return!0}function kd(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function yg(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let i=[...t].sort(),n=[...e].sort();return i.every((o,r)=>n[r]===o)}else return t===e}function wg(t){return t.length>0?t[t.length-1]:null}function yn(t){return La(t)?t:Vn(t)?le(Promise.resolve(t)):E(t)}var TD={exact:bg,subset:_g},vg={exact:DD,subset:ED,ignored:()=>!0};function ug(t,e,i){return TD[i.paths](t.root,e.root,i.matrixParams)&&vg[i.queryParams](t.queryParams,e.queryParams)&&!(i.fragment==="exact"&&t.fragment!==e.fragment)}function DD(t,e){return Ot(t,e)}function bg(t,e,i){if(!Un(t.segments,e.segments)||!Ys(t.segments,e.segments,i)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!t.children[n]||!bg(t.children[n],e.children[n],i))return!1;return!0}function ED(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(i=>yg(t[i],e[i]))}function _g(t,e,i){return Ig(t,e,e.segments,i)}function Ig(t,e,i,n){if(t.segments.length>i.length){let o=t.segments.slice(0,i.length);return!(!Un(o,i)||e.hasChildren()||!Ys(o,i,n))}else if(t.segments.length===i.length){if(!Un(t.segments,i)||!Ys(t.segments,i,n))return!1;for(let o in e.children)if(!t.children[o]||!_g(t.children[o],e.children[o],n))return!1;return!0}else{let o=i.slice(0,t.segments.length),r=i.slice(t.segments.length);return!Un(t.segments,o)||!Ys(t.segments,o,n)||!t.children[V]?!1:Ig(t.children[V],e,r,n)}}function Ys(t,e,i){return e.every((n,o)=>vg[i](t[o].parameters,n.parameters))}var pn=class{constructor(e=new K([],{}),i={},n=null){this.root=e,this.queryParams=i,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ki(this.queryParams),this._queryParamMap}toString(){return MD.serialize(this)}},K=class{constructor(e,i){this.segments=e,this.children=i,this.parent=null,Object.values(i).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qs(this)}},Wn=class{constructor(e,i){this.path=e,this.parameters=i}get parameterMap(){return this._parameterMap??=ki(this.parameters),this._parameterMap}toString(){return Dg(this)}};function CD(t,e){return Un(t,e)&&t.every((i,n)=>Ot(i.parameters,e[n].parameters))}function Un(t,e){return t.length!==e.length?!1:t.every((i,n)=>i.path===e[n].path)}function SD(t,e){let i=[];return Object.entries(t.children).forEach(([n,o])=>{n===V&&(i=i.concat(e(o,n)))}),Object.entries(t.children).forEach(([n,o])=>{n!==V&&(i=i.concat(e(o,n)))}),i}var Lo=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>new Mo,providedIn:"root"});let t=e;return t})(),Mo=class{parse(e){let i=new xd(e);return new pn(i.parseRootSegment(),i.parseQueryParams(),i.parseFragment())}serialize(e){let i=`/${Io(e.root,!0)}`,n=ND(e.queryParams),o=typeof e.fragment=="string"?`#${AD(e.fragment)}`:"";return`${i}${n}${o}`}},MD=new Mo;function qs(t){return t.segments.map(e=>Dg(e)).join("/")}function Io(t,e){if(!t.hasChildren())return qs(t);if(e){let i=t.children[V]?Io(t.children[V],!1):"",n=[];return Object.entries(t.children).forEach(([o,r])=>{o!==V&&n.push(`${o}:${Io(r,!1)}`)}),n.length>0?`${i}(${n.join("//")})`:i}else{let i=SD(t,(n,o)=>o===V?[Io(t.children[V],!1)]:[`${o}:${Io(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[V]!=null?`${qs(t)}/${i[0]}`:`${qs(t)}/(${i.join("//")})`}}function Tg(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Js(t){return Tg(t).replace(/%3B/gi,";")}function AD(t){return encodeURI(t)}function Rd(t){return Tg(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ks(t){return decodeURIComponent(t)}function dg(t){return Ks(t.replace(/\+/g,"%20"))}function Dg(t){return`${Rd(t.path)}${OD(t.parameters)}`}function OD(t){return Object.entries(t).map(([e,i])=>`;${Rd(e)}=${Rd(i)}`).join("")}function ND(t){let e=Object.entries(t).map(([i,n])=>Array.isArray(n)?n.map(o=>`${Js(i)}=${Js(o)}`).join("&"):`${Js(i)}=${Js(n)}`).filter(i=>i);return e.length?`?${e.join("&")}`:""}var kD=/^[^\/()?;#]+/;function Sd(t){let e=t.match(kD);return e?e[0]:""}var RD=/^[^\/()?;=#]+/;function xD(t){let e=t.match(RD);return e?e[0]:""}var HD=/^[^=?&#]+/;function FD(t){let e=t.match(HD);return e?e[0]:""}var LD=/^[^&#]+/;function PD(t){let e=t.match(LD);return e?e[0]:""}var xd=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new K([],{}):new K([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(i).length>0)&&(n[V]=new K(e,i)),n}parseSegment(){let e=Sd(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new M(4009,!1);return this.capture(e),new Wn(Ks(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let i=xD(this.remaining);if(!i)return;this.capture(i);let n="";if(this.consumeOptional("=")){let o=Sd(this.remaining);o&&(n=o,this.capture(n))}e[Ks(i)]=Ks(n)}parseQueryParam(e){let i=FD(this.remaining);if(!i)return;this.capture(i);let n="";if(this.consumeOptional("=")){let a=PD(this.remaining);a&&(n=a,this.capture(n))}let o=dg(i),r=dg(n);if(e.hasOwnProperty(o)){let a=e[o];Array.isArray(a)||(a=[a],e[o]=a),a.push(r)}else e[o]=r}parseParens(e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Sd(this.remaining),o=this.remaining[n.length];if(o!=="/"&&o!==")"&&o!==";")throw new M(4010,!1);let r;n.indexOf(":")>-1?(r=n.slice(0,n.indexOf(":")),this.capture(r),this.capture(":")):e&&(r=V);let a=this.parseChildren();i[r]=Object.keys(a).length===1?a[V]:new K([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new M(4011,!1)}};function Eg(t){return t.segments.length>0?new K([],{[V]:t}):t}function Cg(t){let e={};for(let[n,o]of Object.entries(t.children)){let r=Cg(o);if(n===V&&r.segments.length===0&&r.hasChildren())for(let[a,l]of Object.entries(r.children))e[a]=l;else(r.segments.length>0||r.hasChildren())&&(e[n]=r)}let i=new K(t.segments,e);return BD(i)}function BD(t){if(t.numberOfChildren===1&&t.children[V]){let e=t.children[V];return new K(t.segments.concat(e.segments),e.children)}return t}function Ri(t){return t instanceof pn}function VD(t,e,i=null,n=null){let o=Sg(t);return Mg(o,e,i,n)}function Sg(t){let e;function i(r){let a={};for(let u of r.children){let d=i(u);a[u.outlet]=d}let l=new K(r.url,a);return r===t&&(e=l),l}let n=i(t.root),o=Eg(n);return e??o}function Mg(t,e,i,n){let o=t;for(;o.parent;)o=o.parent;if(e.length===0)return Md(o,o,o,i,n);let r=jD(e);if(r.toRoot())return Md(o,o,new K([],{}),i,n);let a=GD(r,o,t),l=a.processChildren?Eo(a.segmentGroup,a.index,r.commands):Og(a.segmentGroup,a.index,r.commands);return Md(o,a.segmentGroup,l,i,n)}function Qs(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ao(t){return typeof t=="object"&&t!=null&&t.outlets}function Md(t,e,i,n,o){let r={};n&&Object.entries(n).forEach(([u,d])=>{r[u]=Array.isArray(d)?d.map(h=>`${h}`):`${d}`});let a;t===e?a=i:a=Ag(t,e,i);let l=Eg(Cg(a));return new pn(l,r,o)}function Ag(t,e,i){let n={};return Object.entries(t.children).forEach(([o,r])=>{r===e?n[o]=i:n[o]=Ag(r,e,i)}),new K(t.segments,n)}var Zs=class{constructor(e,i,n){if(this.isAbsolute=e,this.numberOfDoubleDots=i,this.commands=n,e&&n.length>0&&Qs(n[0]))throw new M(4003,!1);let o=n.find(Ao);if(o&&o!==wg(n))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function jD(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Zs(!0,0,t);let e=0,i=!1,n=t.reduce((o,r,a)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let l={};return Object.entries(r.outlets).forEach(([u,d])=>{l[u]=typeof d=="string"?d.split("/"):d}),[...o,{outlets:l}]}if(r.segmentPath)return[...o,r.segmentPath]}return typeof r!="string"?[...o,r]:a===0?(r.split("/").forEach((l,u)=>{u==0&&l==="."||(u==0&&l===""?i=!0:l===".."?e++:l!=""&&o.push(l))}),o):[...o,r]},[]);return new Zs(i,e,n)}var Oi=class{constructor(e,i,n){this.segmentGroup=e,this.processChildren=i,this.index=n}};function GD(t,e,i){if(t.isAbsolute)return new Oi(e,!0,0);if(!i)return new Oi(e,!1,NaN);if(i.parent===null)return new Oi(i,!0,0);let n=Qs(t.commands[0])?0:1,o=i.segments.length-1+n;return WD(i,o,t.numberOfDoubleDots)}function WD(t,e,i){let n=t,o=e,r=i;for(;r>o;){if(r-=o,n=n.parent,!n)throw new M(4005,!1);o=n.segments.length}return new Oi(n,!1,o-r)}function UD(t){return Ao(t[0])?t[0].outlets:{[V]:t}}function Og(t,e,i){if(t??=new K([],{}),t.segments.length===0&&t.hasChildren())return Eo(t,e,i);let n=$D(t,e,i),o=i.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let r=new K(t.segments.slice(0,n.pathIndex),{});return r.children[V]=new K(t.segments.slice(n.pathIndex),t.children),Eo(r,0,o)}else return n.match&&o.length===0?new K(t.segments,{}):n.match&&!t.hasChildren()?Hd(t,e,i):n.match?Eo(t,0,o):Hd(t,e,i)}function Eo(t,e,i){if(i.length===0)return new K(t.segments,{});{let n=UD(i),o={};if(Object.keys(n).some(r=>r!==V)&&t.children[V]&&t.numberOfChildren===1&&t.children[V].segments.length===0){let r=Eo(t.children[V],e,i);return new K(t.segments,r.children)}return Object.entries(n).forEach(([r,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(o[r]=Og(t.children[r],e,a))}),Object.entries(t.children).forEach(([r,a])=>{n[r]===void 0&&(o[r]=a)}),new K(t.segments,o)}}function $D(t,e,i){let n=0,o=e,r={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(n>=i.length)return r;let a=t.segments[o],l=i[n];if(Ao(l))break;let u=`${l}`,d=n<i.length-1?i[n+1]:null;if(o>0&&u===void 0)break;if(u&&d&&typeof d=="object"&&d.outlets===void 0){if(!hg(u,d,a))return r;n+=2}else{if(!hg(u,{},a))return r;n++}o++}return{match:!0,pathIndex:o,commandIndex:n}}function Hd(t,e,i){let n=t.segments.slice(0,e),o=0;for(;o<i.length;){let r=i[o];if(Ao(r)){let u=JD(r.outlets);return new K(n,u)}if(o===0&&Qs(i[0])){let u=t.segments[e];n.push(new Wn(u.path,cg(i[0]))),o++;continue}let a=Ao(r)?r.outlets[V]:`${r}`,l=o<i.length-1?i[o+1]:null;a&&l&&Qs(l)?(n.push(new Wn(a,cg(l))),o+=2):(n.push(new Wn(a,{})),o++)}return new K(n,{})}function JD(t){let e={};return Object.entries(t).forEach(([i,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[i]=Hd(new K([],{}),0,n))}),e}function cg(t){let e={};return Object.entries(t).forEach(([i,n])=>e[i]=`${n}`),e}function hg(t,e,i){return t==i.path&&Ot(e,i.parameters)}var Co="imperative",De=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(De||{}),rt=class{constructor(e,i){this.id=e,this.url=i}},xi=class extends rt{constructor(e,i,n="imperative",o=null){super(e,i),this.type=De.NavigationStart,this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yt=class extends rt{constructor(e,i,n){super(e,i),this.urlAfterRedirects=n,this.type=De.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Xe=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(Xe||{}),Xs=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Xs||{}),mn=class extends rt{constructor(e,i,n,o){super(e,i),this.reason=n,this.code=o,this.type=De.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},gn=class extends rt{constructor(e,i,n,o){super(e,i),this.reason=n,this.code=o,this.type=De.NavigationSkipped}},Oo=class extends rt{constructor(e,i,n,o){super(e,i),this.error=n,this.target=o,this.type=De.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ea=class extends rt{constructor(e,i,n,o){super(e,i),this.urlAfterRedirects=n,this.state=o,this.type=De.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fd=class extends rt{constructor(e,i,n,o){super(e,i),this.urlAfterRedirects=n,this.state=o,this.type=De.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ld=class extends rt{constructor(e,i,n,o,r){super(e,i),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=r,this.type=De.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Pd=class extends rt{constructor(e,i,n,o){super(e,i),this.urlAfterRedirects=n,this.state=o,this.type=De.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bd=class extends rt{constructor(e,i,n,o){super(e,i),this.urlAfterRedirects=n,this.state=o,this.type=De.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vd=class{constructor(e){this.route=e,this.type=De.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},jd=class{constructor(e){this.route=e,this.type=De.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Gd=class{constructor(e){this.snapshot=e,this.type=De.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wd=class{constructor(e){this.snapshot=e,this.type=De.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ud=class{constructor(e){this.snapshot=e,this.type=De.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$d=class{constructor(e){this.snapshot=e,this.type=De.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ta=class{constructor(e,i,n){this.routerEvent=e,this.position=i,this.anchor=n,this.type=De.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},No=class{},ko=class{constructor(e){this.url=e}};var Jd=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Po,this.attachRef=null}},Po=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,o){let r=this.getOrCreateContext(n);r.outlet=o,this.contexts.set(n,r)}onChildOutletDestroyed(n){let o=this.getContext(n);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let o=this.getContext(n);return o||(o=new Jd,this.contexts.set(n,o)),o}getContext(n){return this.contexts.get(n)||null}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),na=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let i=this.pathFromRoot(e);return i.length>1?i[i.length-2]:null}children(e){let i=zd(e,this._root);return i?i.children.map(n=>n.value):[]}firstChild(e){let i=zd(e,this._root);return i&&i.children.length>0?i.children[0].value:null}siblings(e){let i=Yd(e,this._root);return i.length<2?[]:i[i.length-2].children.map(o=>o.value).filter(o=>o!==e)}pathFromRoot(e){return Yd(e,this._root).map(i=>i.value)}};function zd(t,e){if(t===e.value)return e;for(let i of e.children){let n=zd(t,i);if(n)return n}return null}function Yd(t,e){if(t===e.value)return[e];for(let i of e.children){let n=Yd(t,i);if(n.length)return n.unshift(e),n}return[]}var Ze=class{constructor(e,i){this.value=e,this.children=i}toString(){return`TreeNode(${this.value})`}};function Ai(t){let e={};return t&&t.children.forEach(i=>e[i.value.outlet]=i),e}var ia=class extends na{constructor(e,i){super(e),this.snapshot=i,oc(this,e)}toString(){return this.snapshot.toString()}};function Ng(t){let e=zD(t),i=new _e([new Wn("",{})]),n=new _e({}),o=new _e({}),r=new _e({}),a=new _e(""),l=new Qt(i,n,r,a,o,V,t,e.root);return l.snapshot=e.root,new ia(new Ze(l,[]),e)}function zD(t){let e={},i={},n={},o="",r=new Ro([],e,n,o,i,V,t,null,{});return new oa("",new Ze(r,[]))}var Qt=class{constructor(e,i,n,o,r,a,l,u){this.urlSubject=e,this.paramsSubject=i,this.queryParamsSubject=n,this.fragmentSubject=o,this.dataSubject=r,this.outlet=a,this.component=l,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(R(d=>d[Fo]))??E(void 0),this.url=e,this.params=i,this.queryParams=n,this.fragment=o,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(R(e=>ki(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(R(e=>ki(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ic(t,e,i="emptyOnly"){let n,{routeConfig:o}=t;return e!==null&&(i==="always"||o?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:I(I({},e.params),t.params),data:I(I({},e.data),t.data),resolve:I(I(I(I({},t.data),e.data),o?.data),t._resolvedData)}:n={params:I({},t.params),data:I({},t.data),resolve:I(I({},t.data),t._resolvedData??{})},o&&Rg(o)&&(n.resolve[Fo]=o.title),n}var Ro=class{get title(){return this.data?.[Fo]}constructor(e,i,n,o,r,a,l,u,d){this.url=e,this.params=i,this.queryParams=n,this.fragment=o,this.data=r,this.outlet=a,this.component=l,this.routeConfig=u,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ki(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ki(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),i=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${i}')`}},oa=class extends na{constructor(e,i){super(i),this.url=e,oc(this,i)}toString(){return kg(this._root)}};function oc(t,e){e.value._routerState=t,e.children.forEach(i=>oc(t,i))}function kg(t){let e=t.children.length>0?` { ${t.children.map(kg).join(", ")} } `:"";return`${t.value}${e}`}function Ad(t){if(t.snapshot){let e=t.snapshot,i=t._futureSnapshot;t.snapshot=i,Ot(e.queryParams,i.queryParams)||t.queryParamsSubject.next(i.queryParams),e.fragment!==i.fragment&&t.fragmentSubject.next(i.fragment),Ot(e.params,i.params)||t.paramsSubject.next(i.params),ID(e.url,i.url)||t.urlSubject.next(i.url),Ot(e.data,i.data)||t.dataSubject.next(i.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function qd(t,e){let i=Ot(t.params,e.params)&&CD(t.url,e.url),n=!t.parent!=!e.parent;return i&&!n&&(!t.parent||qd(t.parent,e.parent))}function Rg(t){return typeof t.title=="string"||t.title===null}var rc=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=V,this.activateEvents=new ne,this.deactivateEvents=new ne,this.attachEvents=new ne,this.detachEvents=new ne,this.parentContexts=y(Po),this.location=y($t),this.changeDetector=y(St),this.environmentInjector=y(ve),this.inputBinder=y(ua,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:o,previousValue:r}=n.name;if(o)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,o){this.activated=n,this._activatedRoute=o,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,o){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=n;let r=this.location,l=n.snapshot.component,u=this.parentContexts.getOrCreateContext(this.name).children,d=new Kd(n,u,r.injector);this.activated=r.createComponent(l,{index:r.length,injector:d,environmentInjector:o??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=it({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Et]});let t=e;return t})(),Kd=class t{__ngOutletInjector(e){return new t(this.route,this.childContexts,e)}constructor(e,i,n){this.route=e,this.childContexts=i,this.parent=n}get(e,i){return e===Qt?this.route:e===Po?this.childContexts:this.parent.get(e,i)}},ua=new S(""),fg=(()=>{let e=class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(n){this.unsubscribeFromRouteData(n),this.subscribeToRouteData(n)}unsubscribeFromRouteData(n){this.outletDataSubscriptions.get(n)?.unsubscribe(),this.outletDataSubscriptions.delete(n)}subscribeToRouteData(n){let{activatedRoute:o}=n,r=ii([o.queryParams,o.params,o.data]).pipe(we(([a,l,u],d)=>(u=I(I(I({},a),l),u),d===0?E(u):Promise.resolve(u)))).subscribe(a=>{if(!n.isActivated||!n.activatedComponentRef||n.activatedRoute!==o||o.component===null){this.unsubscribeFromRouteData(n);return}let l=Mm(o.component);if(!l){this.unsubscribeFromRouteData(n);return}for(let{templateName:u}of l.inputs)n.activatedComponentRef.setInput(u,a[u])});this.outletDataSubscriptions.set(n,r)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();function YD(t,e,i){let n=xo(t,e._root,i?i._root:void 0);return new ia(n,e)}function xo(t,e,i){if(i&&t.shouldReuseRoute(e.value,i.value.snapshot)){let n=i.value;n._futureSnapshot=e.value;let o=qD(t,e,i);return new Ze(n,o)}else{if(t.shouldAttach(e.value)){let r=t.retrieve(e.value);if(r!==null){let a=r.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(l=>xo(t,l)),a}}let n=KD(e.value),o=e.children.map(r=>xo(t,r));return new Ze(n,o)}}function qD(t,e,i){return e.children.map(n=>{for(let o of i.children)if(t.shouldReuseRoute(n.value,o.value.snapshot))return xo(t,n,o);return xo(t,n)})}function KD(t){return new Qt(new _e(t.url),new _e(t.params),new _e(t.queryParams),new _e(t.fragment),new _e(t.data),t.outlet,t.component,t)}var xg="ngNavigationCancelingError";function Hg(t,e){let{redirectTo:i,navigationBehaviorOptions:n}=Ri(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,o=Fg(!1,Xe.Redirect);return o.url=i,o.navigationBehaviorOptions=n,o}function Fg(t,e){let i=new Error(`NavigationCancelingError: ${t||""}`);return i[xg]=!0,i.cancellationCode=e,i}function QD(t){return Lg(t)&&Ri(t.url)}function Lg(t){return!!t&&t[xg]}var ZD=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["ng-component"]],standalone:!0,features:[Bn],decls:1,vars:0,template:function(o,r){o&1&&T(0,"router-outlet")},dependencies:[rc],encapsulation:2});let t=e;return t})();function XD(t,e){return t.providers&&!t._injector&&(t._injector=Ts(t.providers,e,`Route: ${t.path}`)),t._injector??e}function sc(t){let e=t.children&&t.children.map(sc),i=e?ae(I({},t),{children:e}):I({},t);return!i.component&&!i.loadComponent&&(e||i.loadChildren)&&i.outlet&&i.outlet!==V&&(i.component=ZD),i}function Nt(t){return t.outlet||V}function e1(t,e){let i=t.filter(n=>Nt(n)===e);return i.push(...t.filter(n=>Nt(n)!==e)),i}function Bo(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let e=t.parent;e;e=e.parent){let i=e.routeConfig;if(i?._loadedInjector)return i._loadedInjector;if(i?._injector)return i._injector}return null}var t1=(t,e,i,n)=>R(o=>(new Qd(e,o.targetRouterState,o.currentRouterState,i,n).activate(t),o)),Qd=class{constructor(e,i,n,o,r){this.routeReuseStrategy=e,this.futureState=i,this.currState=n,this.forwardEvent=o,this.inputBindingEnabled=r}activate(e){let i=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(i,n,e),Ad(this.futureState.root),this.activateChildRoutes(i,n,e)}deactivateChildRoutes(e,i,n){let o=Ai(i);e.children.forEach(r=>{let a=r.value.outlet;this.deactivateRoutes(r,o[a],n),delete o[a]}),Object.values(o).forEach(r=>{this.deactivateRouteAndItsChildren(r,n)})}deactivateRoutes(e,i,n){let o=e.value,r=i?i.value:null;if(o===r)if(o.component){let a=n.getContext(o.outlet);a&&this.deactivateChildRoutes(e,i,a.children)}else this.deactivateChildRoutes(e,i,n);else r&&this.deactivateRouteAndItsChildren(i,n)}deactivateRouteAndItsChildren(e,i){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,i):this.deactivateRouteAndOutlet(e,i)}detachAndStoreRouteSubtree(e,i){let n=i.getContext(e.value.outlet),o=n&&e.value.component?n.children:i,r=Ai(e);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,o);if(n&&n.outlet){let a=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:a,route:e,contexts:l})}}deactivateRouteAndOutlet(e,i){let n=i.getContext(e.value.outlet),o=n&&e.value.component?n.children:i,r=Ai(e);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,o);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,i,n){let o=Ai(i);e.children.forEach(r=>{this.activateRoutes(r,o[r.value.outlet],n),this.forwardEvent(new $d(r.value.snapshot))}),e.children.length&&this.forwardEvent(new Wd(e.value.snapshot))}activateRoutes(e,i,n){let o=e.value,r=i?i.value:null;if(Ad(o),o===r)if(o.component){let a=n.getOrCreateContext(o.outlet);this.activateChildRoutes(e,i,a.children)}else this.activateChildRoutes(e,i,n);else if(o.component){let a=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Ad(l.route.value),this.activateChildRoutes(e,null,a.children)}else{let l=Bo(o.snapshot);a.attachRef=null,a.route=o,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(e,null,a.children)}}else this.activateChildRoutes(e,null,n)}},ra=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ni=class{constructor(e,i){this.component=e,this.route=i}};function n1(t,e,i){let n=t._root,o=e?e._root:null;return To(n,o,i,[n.value])}function i1(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function Li(t,e){let i=Symbol(),n=e.get(t,i);return n===i?typeof t=="function"&&!Qh(t)?t:e.get(t):n}function To(t,e,i,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=Ai(e);return t.children.forEach(a=>{o1(a,r[a.value.outlet],i,n.concat([a.value]),o),delete r[a.value.outlet]}),Object.entries(r).forEach(([a,l])=>So(l,i.getContext(a),o)),o}function o1(t,e,i,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=t.value,a=e?e.value:null,l=i?i.getContext(t.value.outlet):null;if(a&&r.routeConfig===a.routeConfig){let u=r1(a,r,r.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new ra(n)):(r.data=a.data,r._resolvedData=a._resolvedData),r.component?To(t,e,l?l.children:null,n,o):To(t,e,i,n,o),u&&l&&l.outlet&&l.outlet.isActivated&&o.canDeactivateChecks.push(new Ni(l.outlet.component,a))}else a&&So(e,l,o),o.canActivateChecks.push(new ra(n)),r.component?To(t,null,l?l.children:null,n,o):To(t,null,i,n,o);return o}function r1(t,e,i){if(typeof i=="function")return i(t,e);switch(i){case"pathParamsChange":return!Un(t.url,e.url);case"pathParamsOrQueryParamsChange":return!Un(t.url,e.url)||!Ot(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!qd(t,e)||!Ot(t.queryParams,e.queryParams);case"paramsChange":default:return!qd(t,e)}}function So(t,e,i){let n=Ai(t),o=t.value;Object.entries(n).forEach(([r,a])=>{o.component?e?So(a,e.children.getContext(r),i):So(a,null,i):So(a,e,i)}),o.component?e&&e.outlet&&e.outlet.isActivated?i.canDeactivateChecks.push(new Ni(e.outlet.component,o)):i.canDeactivateChecks.push(new Ni(null,o)):i.canDeactivateChecks.push(new Ni(null,o))}function Vo(t){return typeof t=="function"}function s1(t){return typeof t=="boolean"}function a1(t){return t&&Vo(t.canLoad)}function l1(t){return t&&Vo(t.canActivate)}function u1(t){return t&&Vo(t.canActivateChild)}function d1(t){return t&&Vo(t.canDeactivate)}function c1(t){return t&&Vo(t.canMatch)}function Pg(t){return t instanceof xt||t?.name==="EmptyError"}var zs=Symbol("INITIAL_VALUE");function Hi(){return we(t=>ii(t.map(e=>e.pipe(Ve(1),yr(zs)))).pipe(R(e=>{for(let i of e)if(i!==!0){if(i===zs)return zs;if(i===!1||i instanceof pn)return i}return!0}),ye(e=>e!==zs),Ve(1)))}function h1(t,e){return de(i=>{let{targetSnapshot:n,currentSnapshot:o,guards:{canActivateChecks:r,canDeactivateChecks:a}}=i;return a.length===0&&r.length===0?E(ae(I({},i),{guardsResult:!0})):f1(a,n,o,t).pipe(de(l=>l&&s1(l)?p1(n,r,t,e):E(l)),R(l=>ae(I({},i),{guardsResult:l})))})}function f1(t,e,i,n){return le(t).pipe(de(o=>v1(o.component,o.route,i,e,n)),vt(o=>o!==!0,!0))}function p1(t,e,i,n){return le(e).pipe(Ht(o=>nn(g1(o.route.parent,n),m1(o.route,n),w1(t,o.path,i),y1(t,o.route,i))),vt(o=>o!==!0,!0))}function m1(t,e){return t!==null&&e&&e(new Ud(t)),E(!0)}function g1(t,e){return t!==null&&e&&e(new Gd(t)),E(!0)}function y1(t,e,i){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return E(!0);let o=n.map(r=>fr(()=>{let a=Bo(e)??i,l=Li(r,a),u=l1(l)?l.canActivate(e,t):pt(a,()=>l(e,t));return yn(u).pipe(vt())}));return E(o).pipe(Hi())}function w1(t,e,i){let n=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(a=>i1(a)).filter(a=>a!==null).map(a=>fr(()=>{let l=a.guards.map(u=>{let d=Bo(a.node)??i,h=Li(u,d),p=u1(h)?h.canActivateChild(n,t):pt(d,()=>h(n,t));return yn(p).pipe(vt())});return E(l).pipe(Hi())}));return E(r).pipe(Hi())}function v1(t,e,i,n,o){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return E(!0);let a=r.map(l=>{let u=Bo(e)??o,d=Li(l,u),h=d1(d)?d.canDeactivate(t,e,i,n):pt(u,()=>d(t,e,i,n));return yn(h).pipe(vt())});return E(a).pipe(Hi())}function b1(t,e,i,n){let o=e.canLoad;if(o===void 0||o.length===0)return E(!0);let r=o.map(a=>{let l=Li(a,t),u=a1(l)?l.canLoad(e,i):pt(t,()=>l(e,i));return yn(u)});return E(r).pipe(Hi(),Bg(n))}function Bg(t){return Na(Z(e=>{if(Ri(e))throw Hg(t,e)}),R(e=>e===!0))}function _1(t,e,i,n){let o=e.canMatch;if(!o||o.length===0)return E(!0);let r=o.map(a=>{let l=Li(a,t),u=c1(l)?l.canMatch(e,i):pt(t,()=>l(e,i));return yn(u)});return E(r).pipe(Hi(),Bg(n))}var Ho=class{constructor(e){this.segmentGroup=e||null}},sa=class extends Error{constructor(e){super(),this.urlTree=e}};function Mi(t){return ti(new Ho(t))}function I1(t){return ti(new M(4e3,!1))}function T1(t){return ti(Fg(!1,Xe.GuardRejected))}var Zd=class{constructor(e,i){this.urlSerializer=e,this.urlTree=i}lineralizeSegments(e,i){let n=[],o=i.root;for(;;){if(n=n.concat(o.segments),o.numberOfChildren===0)return E(n);if(o.numberOfChildren>1||!o.children[V])return I1(e.redirectTo);o=o.children[V]}}applyRedirectCommands(e,i,n){let o=this.applyRedirectCreateUrlTree(i,this.urlSerializer.parse(i),e,n);if(i.startsWith("/"))throw new sa(o);return o}applyRedirectCreateUrlTree(e,i,n,o){let r=this.createSegmentGroup(e,i.root,n,o);return new pn(r,this.createQueryParams(i.queryParams,this.urlTree.queryParams),i.fragment)}createQueryParams(e,i){let n={};return Object.entries(e).forEach(([o,r])=>{if(typeof r=="string"&&r.startsWith(":")){let l=r.substring(1);n[o]=i[l]}else n[o]=r}),n}createSegmentGroup(e,i,n,o){let r=this.createSegments(e,i.segments,n,o),a={};return Object.entries(i.children).forEach(([l,u])=>{a[l]=this.createSegmentGroup(e,u,n,o)}),new K(r,a)}createSegments(e,i,n,o){return i.map(r=>r.path.startsWith(":")?this.findPosParam(e,r,o):this.findOrReturn(r,n))}findPosParam(e,i,n){let o=n[i.path.substring(1)];if(!o)throw new M(4001,!1);return o}findOrReturn(e,i){let n=0;for(let o of i){if(o.path===e.path)return i.splice(n),o;n++}return e}},Xd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function D1(t,e,i,n,o){let r=ac(t,e,i);return r.matched?(n=XD(e,n),_1(n,e,i,o).pipe(R(a=>a===!0?r:I({},Xd)))):E(r)}function ac(t,e,i){if(e.path==="**")return E1(i);if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||i.length>0)?I({},Xd):{matched:!0,consumedSegments:[],remainingSegments:i,parameters:{},positionalParamSegments:{}};let o=(e.matcher||_D)(i,t,e);if(!o)return I({},Xd);let r={};Object.entries(o.posParams??{}).forEach(([l,u])=>{r[l]=u.path});let a=o.consumed.length>0?I(I({},r),o.consumed[o.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:o.consumed,remainingSegments:i.slice(o.consumed.length),parameters:a,positionalParamSegments:o.posParams??{}}}function E1(t){return{matched:!0,parameters:t.length>0?wg(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function pg(t,e,i,n){return i.length>0&&M1(t,i,n)?{segmentGroup:new K(e,S1(n,new K(i,t.children))),slicedSegments:[]}:i.length===0&&A1(t,i,n)?{segmentGroup:new K(t.segments,C1(t,i,n,t.children)),slicedSegments:i}:{segmentGroup:new K(t.segments,t.children),slicedSegments:i}}function C1(t,e,i,n){let o={};for(let r of i)if(da(t,e,r)&&!n[Nt(r)]){let a=new K([],{});o[Nt(r)]=a}return I(I({},n),o)}function S1(t,e){let i={};i[V]=e;for(let n of t)if(n.path===""&&Nt(n)!==V){let o=new K([],{});i[Nt(n)]=o}return i}function M1(t,e,i){return i.some(n=>da(t,e,n)&&Nt(n)!==V)}function A1(t,e,i){return i.some(n=>da(t,e,n))}function da(t,e,i){return(t.hasChildren()||e.length>0)&&i.pathMatch==="full"?!1:i.path===""}function O1(t,e,i,n){return Nt(t)!==n&&(n===V||!da(e,i,t))?!1:ac(e,t,i).matched}function N1(t,e,i){return e.length===0&&!t.children[i]}var ec=class{};function k1(t,e,i,n,o,r,a="emptyOnly"){return new tc(t,e,i,n,o,a,r).recognize()}var R1=31,tc=class{constructor(e,i,n,o,r,a,l){this.injector=e,this.configLoader=i,this.rootComponentType=n,this.config=o,this.urlTree=r,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.applyRedirects=new Zd(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new M(4002,`'${e.segmentGroup}'`)}recognize(){let e=pg(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(R(i=>{let n=new Ro([],Object.freeze({}),Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,{},V,this.rootComponentType,null,{}),o=new Ze(n,i),r=new oa("",o),a=VD(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(a),this.inheritParamsAndData(r._root,null),{state:r,tree:a}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,V).pipe(Se(n=>{if(n instanceof sa)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ho?this.noMatchError(n):n}))}inheritParamsAndData(e,i){let n=e.value,o=ic(n,i,this.paramsInheritanceStrategy);n.params=Object.freeze(o.params),n.data=Object.freeze(o.data),e.children.forEach(r=>this.inheritParamsAndData(r,n))}processSegmentGroup(e,i,n,o){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,i,n):this.processSegment(e,i,n,n.segments,o,!0).pipe(R(r=>r instanceof Ze?[r]:[]))}processChildren(e,i,n){let o=[];for(let r of Object.keys(n.children))r==="primary"?o.unshift(r):o.push(r);return le(o).pipe(Ht(r=>{let a=n.children[r],l=e1(i,r);return this.processSegmentGroup(e,l,a,r)}),Ua((r,a)=>(r.push(...a),r)),on(null),Wa(),de(r=>{if(r===null)return Mi(n);let a=Vg(r);return x1(a),E(a)}))}processSegment(e,i,n,o,r,a){return le(i).pipe(Ht(l=>this.processSegmentAgainstRoute(l._injector??e,i,l,n,o,r,a).pipe(Se(u=>{if(u instanceof Ho)return E(null);throw u}))),vt(l=>!!l),Se(l=>{if(Pg(l))return N1(n,o,r)?E(new ec):Mi(n);throw l}))}processSegmentAgainstRoute(e,i,n,o,r,a,l){return O1(n,o,r,a)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,o,n,r,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(e,o,i,n,r,a):Mi(o):Mi(o)}expandSegmentAgainstRouteUsingRedirect(e,i,n,o,r,a){let{matched:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:h}=ac(i,o,r);if(!l)return Mi(i);o.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>R1&&(this.allowRedirects=!1));let p=this.applyRedirects.applyRedirectCommands(u,o.redirectTo,d);return this.applyRedirects.lineralizeSegments(o,p).pipe(de(m=>this.processSegment(e,n,i,m.concat(h),a,!1)))}matchSegmentAgainstRoute(e,i,n,o,r){let a=D1(i,n,o,e,this.urlSerializer);return n.path==="**"&&(i.children={}),a.pipe(we(l=>l.matched?(e=n._injector??e,this.getChildConfig(e,n,o).pipe(we(({routes:u})=>{let d=n._loadedInjector??e,{consumedSegments:h,remainingSegments:p,parameters:m}=l,g=new Ro(h,m,Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,F1(n),Nt(n),n.component??n._loadedComponent??null,n,L1(n)),{segmentGroup:b,slicedSegments:L}=pg(i,h,p,u);if(L.length===0&&b.hasChildren())return this.processChildren(d,u,b).pipe(R(O=>O===null?null:new Ze(g,O)));if(u.length===0&&L.length===0)return E(new Ze(g,[]));let H=Nt(n)===r;return this.processSegment(d,u,b,L,H?V:r,!0).pipe(R(O=>new Ze(g,O instanceof Ze?[O]:[])))}))):Mi(i)))}getChildConfig(e,i,n){return i.children?E({routes:i.children,injector:e}):i.loadChildren?i._loadedRoutes!==void 0?E({routes:i._loadedRoutes,injector:i._loadedInjector}):b1(e,i,n,this.urlSerializer).pipe(de(o=>o?this.configLoader.loadChildren(e,i).pipe(Z(r=>{i._loadedRoutes=r.routes,i._loadedInjector=r.injector})):T1(i))):E({routes:[],injector:e})}};function x1(t){t.sort((e,i)=>e.value.outlet===V?-1:i.value.outlet===V?1:e.value.outlet.localeCompare(i.value.outlet))}function H1(t){let e=t.value.routeConfig;return e&&e.path===""}function Vg(t){let e=[],i=new Set;for(let n of t){if(!H1(n)){e.push(n);continue}let o=e.find(r=>n.value.routeConfig===r.value.routeConfig);o!==void 0?(o.children.push(...n.children),i.add(o)):e.push(n)}for(let n of i){let o=Vg(n.children);e.push(new Ze(n.value,o))}return e.filter(n=>!i.has(n))}function F1(t){return t.data||{}}function L1(t){return t.resolve||{}}function P1(t,e,i,n,o,r){return de(a=>k1(t,e,i,n,a.extractedUrl,o,r).pipe(R(({state:l,tree:u})=>ae(I({},a),{targetSnapshot:l,urlAfterRedirects:u}))))}function B1(t,e){return de(i=>{let{targetSnapshot:n,guards:{canActivateChecks:o}}=i;if(!o.length)return E(i);let r=new Set(o.map(u=>u.route)),a=new Set;for(let u of r)if(!a.has(u))for(let d of jg(u))a.add(d);let l=0;return le(a).pipe(Ht(u=>r.has(u)?V1(u,n,t,e):(u.data=ic(u,u.parent,t).resolve,E(void 0))),Z(()=>l++),oi(1),de(u=>l===a.size?E(i):Ce))})}function jg(t){let e=t.children.map(i=>jg(i)).flat();return[t,...e]}function V1(t,e,i,n){let o=t.routeConfig,r=t._resolve;return o?.title!==void 0&&!Rg(o)&&(r[Fo]=o.title),j1(r,t,e,n).pipe(R(a=>(t._resolvedData=a,t.data=ic(t,t.parent,i).resolve,null)))}function j1(t,e,i,n){let o=kd(t);if(o.length===0)return E({});let r={};return le(o).pipe(de(a=>G1(t[a],e,i,n).pipe(vt(),Z(l=>{r[a]=l}))),oi(1),ja(r),Se(a=>Pg(a)?Ce:ti(a)))}function G1(t,e,i,n){let o=Bo(e)??n,r=Li(t,o),a=r.resolve?r.resolve(e,i):pt(o,()=>r(e,i));return yn(a)}function Od(t){return we(e=>{let i=t(e);return i?le(i).pipe(R(()=>e)):E(e)})}var Gg=(()=>{let e=class e{buildTitle(n){let o,r=n.root;for(;r!==void 0;)o=this.getResolvedTitleForRoute(r)??o,r=r.children.find(a=>a.outlet===V);return o}getResolvedTitleForRoute(n){return n.data[Fo]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>y(W1),providedIn:"root"});let t=e;return t})(),W1=(()=>{let e=class e extends Gg{constructor(n){super(),this.title=n}updateTitle(n){let o=this.buildTitle(n);o!==void 0&&this.title.setTitle(o)}};e.\u0275fac=function(o){return new(o||e)(C(lg))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),jo=new S("",{providedIn:"root",factory:()=>({})}),aa=new S(""),lc=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=y(ks)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return E(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let o=yn(n.loadComponent()).pipe(R(Wg),Z(a=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a}),Ft(()=>{this.componentLoaders.delete(n)})),r=new Zn(o,()=>new te).pipe(Qn());return this.componentLoaders.set(n,r),r}loadChildren(n,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return E({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let a=U1(o,this.compiler,n,this.onLoadEndListener).pipe(Ft(()=>{this.childrenLoaders.delete(o)})),l=new Zn(a,()=>new te).pipe(Qn());return this.childrenLoaders.set(o,l),l}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function U1(t,e,i,n){return yn(t.loadChildren()).pipe(R(Wg),de(o=>o instanceof to||Array.isArray(o)?E(o):le(e.compileModuleAsync(o))),R(o=>{n&&n(t);let r,a,l=!1;return Array.isArray(o)?(a=o,l=!0):(r=o.create(i).injector,a=r.get(aa,[],{optional:!0,self:!0}).flat()),{routes:a.map(sc),injector:r}}))}function $1(t){return t&&typeof t=="object"&&"default"in t}function Wg(t){return $1(t)?t.default:t}var uc=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>y(J1),providedIn:"root"});let t=e;return t})(),J1=(()=>{let e=class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,o){return n}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ug=new S(""),$g=new S("");function z1(t,e,i){let n=t.get($g),o=t.get(me);return t.get(q).runOutsideAngular(()=>{if(!o.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(d=>setTimeout(d));let r,a=new Promise(d=>{r=d}),l=o.startViewTransition(()=>(r(),Y1(t))),{onViewTransitionCreated:u}=n;return u&&pt(t,()=>u({transition:l,from:e,to:i})),a})}function Y1(t){return new Promise(e=>{Is(e,{injector:t})})}var dc=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new te,this.transitionAbortSubject=new te,this.configLoader=y(lc),this.environmentInjector=y(ve),this.urlSerializer=y(Lo),this.rootContexts=y(Po),this.location=y(Ci),this.inputBindingEnabled=y(ua,{optional:!0})!==null,this.titleStrategy=y(Gg),this.options=y(jo,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=y(uc),this.createViewTransition=y(Ug,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>E(void 0),this.rootComponentType=null;let n=r=>this.events.next(new Vd(r)),o=r=>this.events.next(new jd(r));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let o=++this.navigationId;this.transitions?.next(ae(I(I({},this.transitions.value),n),{id:o}))}setupNavigations(n,o,r){return this.transitions=new _e({id:0,currentUrlTree:o,currentRawUrl:o,extractedUrl:this.urlHandlingStrategy.extract(o),urlAfterRedirects:this.urlHandlingStrategy.extract(o),rawUrl:o,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Co,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(ye(a=>a.id!==0),R(a=>ae(I({},a),{extractedUrl:this.urlHandlingStrategy.extract(a.rawUrl)})),we(a=>{let l=!1,u=!1;return E(a).pipe(we(d=>{if(this.navigationId>a.id)return this.cancelNavigationTransition(a,"",Xe.SupersededByNewNavigation),Ce;this.currentTransition=a,this.currentNavigation={id:d.id,initialUrl:d.rawUrl,extractedUrl:d.extractedUrl,trigger:d.source,extras:d.extras,previousNavigation:this.lastSuccessfulNavigation?ae(I({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let h=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),p=d.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!h&&p!=="reload"){let m="";return this.events.next(new gn(d.id,this.urlSerializer.serialize(d.rawUrl),m,Xs.IgnoredSameUrlNavigation)),d.resolve(null),Ce}if(this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))return E(d).pipe(we(m=>{let g=this.transitions?.getValue();return this.events.next(new xi(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),g!==this.transitions?.getValue()?Ce:Promise.resolve(m)}),P1(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Z(m=>{a.targetSnapshot=m.targetSnapshot,a.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation=ae(I({},this.currentNavigation),{finalUrl:m.urlAfterRedirects});let g=new ea(m.id,this.urlSerializer.serialize(m.extractedUrl),this.urlSerializer.serialize(m.urlAfterRedirects),m.targetSnapshot);this.events.next(g)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)){let{id:m,extractedUrl:g,source:b,restoredState:L,extras:H}=d,O=new xi(m,this.urlSerializer.serialize(g),b,L);this.events.next(O);let Re=Ng(this.rootComponentType).snapshot;return this.currentTransition=a=ae(I({},d),{targetSnapshot:Re,urlAfterRedirects:g,extras:ae(I({},H),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=g,E(a)}else{let m="";return this.events.next(new gn(d.id,this.urlSerializer.serialize(d.extractedUrl),m,Xs.IgnoredByUrlHandlingStrategy)),d.resolve(null),Ce}}),Z(d=>{let h=new Fd(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}),R(d=>(this.currentTransition=a=ae(I({},d),{guards:n1(d.targetSnapshot,d.currentSnapshot,this.rootContexts)}),a)),h1(this.environmentInjector,d=>this.events.next(d)),Z(d=>{if(a.guardsResult=d.guardsResult,Ri(d.guardsResult))throw Hg(this.urlSerializer,d.guardsResult);let h=new Ld(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot,!!d.guardsResult);this.events.next(h)}),ye(d=>d.guardsResult?!0:(this.cancelNavigationTransition(d,"",Xe.GuardRejected),!1)),Od(d=>{if(d.guards.canActivateChecks.length)return E(d).pipe(Z(h=>{let p=new Pd(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(p)}),we(h=>{let p=!1;return E(h).pipe(B1(this.paramsInheritanceStrategy,this.environmentInjector),Z({next:()=>p=!0,complete:()=>{p||this.cancelNavigationTransition(h,"",Xe.NoDataFromResolver)}}))}),Z(h=>{let p=new Bd(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(p)}))}),Od(d=>{let h=p=>{let m=[];p.routeConfig?.loadComponent&&!p.routeConfig._loadedComponent&&m.push(this.configLoader.loadComponent(p.routeConfig).pipe(Z(g=>{p.component=g}),R(()=>{})));for(let g of p.children)m.push(...h(g));return m};return ii(h(d.targetSnapshot.root)).pipe(on(null),Ve(1))}),Od(()=>this.afterPreactivation()),we(()=>{let{currentSnapshot:d,targetSnapshot:h}=a,p=this.createViewTransition?.(this.environmentInjector,d.root,h.root);return p?le(p).pipe(R(()=>a)):E(a)}),R(d=>{let h=YD(n.routeReuseStrategy,d.targetSnapshot,d.currentRouterState);return this.currentTransition=a=ae(I({},d),{targetRouterState:h}),this.currentNavigation.targetRouterState=h,a}),Z(()=>{this.events.next(new No)}),t1(this.rootContexts,n.routeReuseStrategy,d=>this.events.next(d),this.inputBindingEnabled),Ve(1),Z({next:d=>{l=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new yt(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects))),this.titleStrategy?.updateTitle(d.targetRouterState.snapshot),d.resolve(!0)},complete:()=>{l=!0}}),xe(this.transitionAbortSubject.pipe(Z(d=>{throw d}))),Ft(()=>{!l&&!u&&this.cancelNavigationTransition(a,"",Xe.SupersededByNewNavigation),this.currentTransition?.id===a.id&&(this.currentNavigation=null,this.currentTransition=null)}),Se(d=>{if(u=!0,Lg(d))this.events.next(new mn(a.id,this.urlSerializer.serialize(a.extractedUrl),d.message,d.cancellationCode)),QD(d)?this.events.next(new ko(d.url)):a.resolve(!1);else{this.events.next(new Oo(a.id,this.urlSerializer.serialize(a.extractedUrl),d,a.targetSnapshot??void 0));try{a.resolve(n.errorHandler(d))}catch(h){this.options.resolveNavigationPromiseOnError?a.resolve(!1):a.reject(h)}}return Ce}))}))}cancelNavigationTransition(n,o,r){let a=new mn(n.id,this.urlSerializer.serialize(n.extractedUrl),o,r);this.events.next(a),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function q1(t){return t!==Co}var K1=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>y(Q1),providedIn:"root"});let t=e;return t})(),nc=class{shouldDetach(e){return!1}store(e,i){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,i){return e.routeConfig===i.routeConfig}},Q1=(()=>{let e=class e extends nc{};e.\u0275fac=(()=>{let n;return function(r){return(n||(n=lo(e)))(r||e)}})(),e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Jg=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:()=>y(Z1),providedIn:"root"});let t=e;return t})(),Z1=(()=>{let e=class e extends Jg{constructor(){super(...arguments),this.location=y(Ci),this.urlSerializer=y(Lo),this.options=y(jo,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=y(uc),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new pn,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Ng(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(o=>{o.type==="popstate"&&n(o.url,o.state)})}handleRouterEvent(n,o){if(n instanceof xi)this.stateMemento=this.createStateMemento();else if(n instanceof gn)this.rawUrlTree=o.initialUrl;else if(n instanceof ea){if(this.urlUpdateStrategy==="eager"&&!o.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl);this.setBrowserUrl(r,o)}}else n instanceof No?(this.currentUrlTree=o.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl),this.routerState=o.targetRouterState,this.urlUpdateStrategy==="deferred"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,o))):n instanceof mn&&(n.code===Xe.GuardRejected||n.code===Xe.NoDataFromResolver)?this.restoreHistory(o):n instanceof Oo?this.restoreHistory(o,!0):n instanceof yt&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,o){let r=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(r)||o.extras.replaceUrl){let a=this.browserPageId,l=I(I({},o.extras.state),this.generateNgRouterState(o.id,a));this.location.replaceState(r,"",l)}else{let a=I(I({},o.extras.state),this.generateNgRouterState(o.id,this.browserPageId+1));this.location.go(r,"",a)}}restoreHistory(n,o=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.currentUrlTree===n.finalUrl&&a===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,o){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:o}:{navigationId:n}}};e.\u0275fac=(()=>{let n;return function(r){return(n||(n=lo(e)))(r||e)}})(),e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Do=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(Do||{});function zg(t,e){t.events.pipe(ye(i=>i instanceof yt||i instanceof mn||i instanceof Oo||i instanceof gn),R(i=>i instanceof yt||i instanceof gn?Do.COMPLETE:(i instanceof mn?i.code===Xe.Redirect||i.code===Xe.SupersededByNewNavigation:!1)?Do.REDIRECTING:Do.FAILED),ye(i=>i!==Do.REDIRECTING),Ve(1)).subscribe(()=>{e()})}function X1(t){throw t}var eE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},tE={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ne=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=y(Ss),this.stateManager=y(Jg),this.options=y(jo,{optional:!0})||{},this.pendingTasks=y(Pn),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=y(dc),this.urlSerializer=y(Lo),this.location=y(Ci),this.urlHandlingStrategy=y(uc),this._events=new te,this.errorHandler=this.options.errorHandler||X1,this.navigated=!1,this.routeReuseStrategy=y(K1),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=y(aa,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!y(ua,{optional:!0}),this.eventsSubscription=new fe,this.isNgZoneEnabled=y(q)instanceof q&&q.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(o=>{try{let r=this.navigationTransitions.currentTransition,a=this.navigationTransitions.currentNavigation;if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(o,a),o instanceof mn&&o.code!==Xe.Redirect&&o.code!==Xe.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof yt)this.navigated=!0;else if(o instanceof ko){let l=this.urlHandlingStrategy.merge(o.url,r.currentRawUrl),u={info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||q1(r.source)};this.scheduleNavigation(l,Co,null,u,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}iE(o)&&this._events.next(o)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Co,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,o)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",o)},0)})}navigateToSyncWithBrowser(n,o,r){let a={replaceUrl:!0},l=r?.navigationId?r:null;if(r){let d=I({},r);delete d.navigationId,delete d.\u0275routerPageId,Object.keys(d).length!==0&&(a.state=d)}let u=this.parseUrl(n);this.scheduleNavigation(u,o,l,a)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(sc),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,o={}){let{relativeTo:r,queryParams:a,fragment:l,queryParamsHandling:u,preserveFragment:d}=o,h=d?this.currentUrlTree.fragment:l,p=null;switch(u){case"merge":p=I(I({},this.currentUrlTree.queryParams),a);break;case"preserve":p=this.currentUrlTree.queryParams;break;default:p=a||null}p!==null&&(p=this.removeEmptyProps(p));let m;try{let g=r?r.snapshot:this.routerState.snapshot.root;m=Sg(g)}catch{(typeof n[0]!="string"||!n[0].startsWith("/"))&&(n=[]),m=this.currentUrlTree.root}return Mg(m,n,p,h??null)}navigateByUrl(n,o={skipLocationChange:!1}){let r=Ri(n)?n:this.parseUrl(n),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Co,null,o)}navigate(n,o={skipLocationChange:!1}){return nE(n),this.navigateByUrl(this.createUrlTree(n,o),o)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,o){let r;if(o===!0?r=I({},eE):o===!1?r=I({},tE):r=o,Ri(n))return ug(this.currentUrlTree,n,r);let a=this.parseUrl(n);return ug(this.currentUrlTree,a,r)}removeEmptyProps(n){return Object.entries(n).reduce((o,[r,a])=>(a!=null&&(o[r]=a),o),{})}scheduleNavigation(n,o,r,a,l){if(this.disposed)return Promise.resolve(!1);let u,d,h;l?(u=l.resolve,d=l.reject,h=l.promise):h=new Promise((m,g)=>{u=m,d=g});let p=this.pendingTasks.add();return zg(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(p))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:a,resolve:u,reject:d,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(m=>Promise.reject(m))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function nE(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new M(4008,!1)}function iE(t){return!(t instanceof No)&&!(t instanceof ko)}var Fi=(()=>{let e=class e{constructor(n,o,r,a,l,u){this.router=n,this.route=o,this.tabIndexAttribute=r,this.renderer=a,this.el=l,this.locationStrategy=u,this.href=null,this.commands=null,this.onChanges=new te,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let d=l.nativeElement.tagName?.toLowerCase();this.isAnchorElement=d==="a"||d==="area",this.isAnchorElement?this.subscription=n.events.subscribe(h=>{h instanceof yt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(n){n!=null?(this.commands=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(n,o,r,a,l){let u=this.urlTree;if(u===null||this.isAnchorElement&&(n!==0||o||r||a||l||typeof this.target=="string"&&this.target!="_self"))return!0;let d={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(u,d),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.href=n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n)):null;let o=this.href===null?null:_p(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",o)}applyAttributeValue(n,o){let r=this.renderer,a=this.el.nativeElement;o!==null?r.setAttribute(a,n,o):r.removeAttribute(a,n)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};e.\u0275fac=function(o){return new(o||e)(B(Ne),B(Qt),cs("tabindex"),B(Ut),B(Oe),B(Yt))},e.\u0275dir=it({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(o,r){o&1&&ee("click",function(l){return r.onClick(l.button,l.ctrlKey,l.shiftKey,l.altKey,l.metaKey)}),o&2&&bi("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[Ge.HasDecoratorInputTransform,"preserveFragment","preserveFragment",Di],skipLocationChange:[Ge.HasDecoratorInputTransform,"skipLocationChange","skipLocationChange",Di],replaceUrl:[Ge.HasDecoratorInputTransform,"replaceUrl","replaceUrl",Di],routerLink:"routerLink"},standalone:!0,features:[ju,Et]});let t=e;return t})(),Yg=(()=>{let e=class e{get isActive(){return this._isActive}constructor(n,o,r,a,l){this.router=n,this.element=o,this.renderer=r,this.cdr=a,this.link=l,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new ne,this.routerEventsSubscription=n.events.subscribe(u=>{u instanceof yt&&this.update()})}ngAfterContentInit(){E(this.links.changes,E(null)).pipe(tn()).subscribe(n=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let n=[...this.links.toArray(),this.link].filter(o=>!!o).map(o=>o.onChanges);this.linkInputChangesSubscription=le(n).pipe(tn()).subscribe(o=>{this._isActive!==this.isLinkActive(this.router)(o)&&this.update()})}set routerLinkActive(n){let o=Array.isArray(n)?n:n.split(" ");this.classes=o.filter(r=>!!r)}ngOnChanges(n){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let n=this.hasActiveLinks();this.classes.forEach(o=>{n?this.renderer.addClass(this.element.nativeElement,o):this.renderer.removeClass(this.element.nativeElement,o)}),n&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==n&&(this._isActive=n,this.cdr.markForCheck(),this.isActiveChange.emit(n))})}isLinkActive(n){let o=oE(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let a=r.urlTree;return a?n.isActive(a,o):!1}}hasActiveLinks(){let n=this.isLinkActive(this.router);return this.link&&n(this.link)||this.links.some(n)}};e.\u0275fac=function(o){return new(o||e)(B(Ne),B(Oe),B(Ut),B(St),B(Fi,8))},e.\u0275dir=it({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(o,r,a){if(o&1&&Uu(a,Fi,5),o&2){let l;Ke(l=Qe())&&(r.links=l)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[Et]});let t=e;return t})();function oE(t){return!!t.paths}var la=class{};var rE=(()=>{let e=class e{constructor(n,o,r,a,l){this.router=n,this.injector=r,this.preloadingStrategy=a,this.loader=l}setUpPreloading(){this.subscription=this.router.events.pipe(ye(n=>n instanceof yt),Ht(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,o){let r=[];for(let a of o){a.providers&&!a._injector&&(a._injector=Ts(a.providers,n,`Route: ${a.path}`));let l=a._injector??n,u=a._loadedInjector??l;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&r.push(this.preloadConfig(l,a)),(a.children||a._loadedRoutes)&&r.push(this.processRoutes(u,a.children??a._loadedRoutes))}return le(r).pipe(tn())}preloadConfig(n,o){return this.preloadingStrategy.preload(o,()=>{let r;o.loadChildren&&o.canLoad===void 0?r=this.loader.loadChildren(n,o):r=E(null);let a=r.pipe(de(l=>l===null?E(void 0):(o._loadedRoutes=l.routes,o._loadedInjector=l.injector,this.processRoutes(l.injector??n,l.routes))));if(o.loadComponent&&!o._loadedComponent){let l=this.loader.loadComponent(o);return le([a,l]).pipe(tn())}else return a})}};e.\u0275fac=function(o){return new(o||e)(C(Ne),C(ks),C(ve),C(la),C(lc))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),qg=new S(""),sE=(()=>{let e=class e{constructor(n,o,r,a,l={}){this.urlSerializer=n,this.transitions=o,this.viewportScroller=r,this.zone=a,this.options=l,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},this.environmentInjector=y(ve),l.scrollPositionRestoration||="disabled",l.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof xi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof yt?(this.lastId=n.id,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.urlAfterRedirects).fragment)):n instanceof gn&&n.code===Xs.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof ta&&(n.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(n.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,o){this.zone.runOutsideAngular(()=>Rt(this,null,function*(){yield new Promise(r=>{setTimeout(()=>{r()}),Is(()=>{r()},{injector:this.environmentInjector})}),this.zone.run(()=>{this.transitions.events.next(new ta(n,this.lastSource==="popstate"?this.store[this.restoredId]:null,o))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};e.\u0275fac=function(o){Hp()},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();function aE(t){return t.routerState.root}function Go(t,e){return{\u0275kind:t,\u0275providers:e}}function lE(){let t=y(Pe);return e=>{let i=t.get(Jt);if(e!==i.components[0])return;let n=t.get(Ne),o=t.get(Kg);t.get(cc)===1&&n.initialNavigation(),t.get(Qg,null,J.Optional)?.setUpPreloading(),t.get(qg,null,J.Optional)?.init(),n.resetRootComponentType(i.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Kg=new S("",{factory:()=>new te}),cc=new S("",{providedIn:"root",factory:()=>1});function uE(){return Go(2,[{provide:cc,useValue:0},{provide:Os,multi:!0,deps:[Pe],useFactory:e=>{let i=e.get(Fm,Promise.resolve());return()=>i.then(()=>new Promise(n=>{let o=e.get(Ne),r=e.get(Kg);zg(o,()=>{n(!0)}),e.get(dc).afterPreactivation=()=>(n(!0),r.closed?E(void 0):r),o.initialNavigation()}))}}])}function dE(){return Go(3,[{provide:Os,multi:!0,useFactory:()=>{let e=y(Ne);return()=>{e.setUpLocationChangeListener()}}},{provide:cc,useValue:2}])}var Qg=new S("");function cE(t){return Go(0,[{provide:Qg,useExisting:rE},{provide:la,useExisting:t}])}function hE(){return Go(8,[fg,{provide:ua,useExisting:fg}])}function fE(t){let e=[{provide:Ug,useValue:z1},{provide:$g,useValue:I({skipNextTransition:!!t?.skipInitialTransition},t)}];return Go(9,e)}var mg=new S("ROUTER_FORROOT_GUARD"),pE=[Ci,{provide:Lo,useClass:Mo},Ne,Po,{provide:Qt,useFactory:aE,deps:[Ne]},lc,[]],hc=(()=>{let e=class e{constructor(n){}static forRoot(n,o){return{ngModule:e,providers:[pE,[],{provide:aa,multi:!0,useValue:n},{provide:mg,useFactory:wE,deps:[[Ne,new is,new ou]]},{provide:jo,useValue:o||{}},o?.useHash?gE():yE(),mE(),o?.preloadingStrategy?cE(o.preloadingStrategy).\u0275providers:[],o?.initialNavigation?vE(o):[],o?.bindToComponentInputs?hE().\u0275providers:[],o?.enableViewTransitions?fE().\u0275providers:[],bE()]}}static forChild(n){return{ngModule:e,providers:[{provide:aa,multi:!0,useValue:n}]}}};e.\u0275fac=function(o){return new(o||e)(C(mg,8))},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();function mE(){return{provide:qg,useFactory:()=>{let t=y(jm),e=y(q),i=y(jo),n=y(dc),o=y(Lo);return i.scrollOffset&&t.setOffset(i.scrollOffset),new sE(o,n,t,e,i)}}}function gE(){return{provide:Yt,useClass:Pm}}function yE(){return{provide:Yt,useClass:dd}}function wE(t){return"guarded"}function vE(t){return[t.initialNavigation==="disabled"?dE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?uE().\u0275providers:[]]}var gg=new S("");function bE(){return[{provide:gg,useFactory:lE},{provide:Ns,multi:!0,useExisting:gg}]}var wn=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(wn||{}),TH="*";function st(t,e){return{type:wn.Trigger,name:t,definitions:e,options:{}}}function $e(t,e=null){return{type:wn.Animate,styles:e,timings:t}}function DH(t,e=null){return{type:wn.Sequence,steps:t,options:e}}function ge(t){return{type:wn.Style,styles:t,offset:null}}function et(t,e,i=null){return{type:wn.Transition,expr:t,animation:e,options:i}}function fc(t,e,i=null){return{type:wn.Query,selector:t,animation:e,options:i}}function ey(t,e){return{type:wn.Stagger,timings:t,animation:e}}var Zg=class{constructor(e=0,i=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+i}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let i=e=="start"?this._onStartFns:this._onDoneFns;i.forEach(n=>n()),i.length=0}},Xg=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let i=0,n=0,o=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++i==r&&this._onFinish()}),a.onDestroy(()=>{++n==r&&this._onDestroy()}),a.onStart(()=>{++o==r&&this._onStart()})}),this.totalTime=this.players.reduce((a,l)=>Math.max(a,l.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let i=e*this.totalTime;this.players.forEach(n=>{let o=n.totalTime?Math.min(1,i/n.totalTime):1;n.setPosition(o)})}getPosition(){let e=this.players.reduce((i,n)=>i===null||n.totalTime>i.totalTime?n:i,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let i=e=="start"?this._onStartFns:this._onDoneFns;i.forEach(n=>n()),i.length=0}},EH="!";var ca,_E=new Uint8Array(16);function pc(){if(!ca&&(ca=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ca))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ca(_E)}var ke=[];for(let t=0;t<256;++t)ke.push((t+256).toString(16).slice(1));function ty(t,e=0){return ke[t[e+0]]+ke[t[e+1]]+ke[t[e+2]]+ke[t[e+3]]+"-"+ke[t[e+4]]+ke[t[e+5]]+"-"+ke[t[e+6]]+ke[t[e+7]]+"-"+ke[t[e+8]]+ke[t[e+9]]+"-"+ke[t[e+10]]+ke[t[e+11]]+ke[t[e+12]]+ke[t[e+13]]+ke[t[e+14]]+ke[t[e+15]]}var IE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),mc={randomUUID:IE};function TE(t,e,i){if(mc.randomUUID&&!e&&!t)return mc.randomUUID();t=t||{};let n=t.random||(t.rng||pc)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){i=i||0;for(let o=0;o<16;++o)e[i+o]=n[o];return e}return ty(n)}var gc=TE;var Bi=class{constructor(){this.id=gc().toString()}};var f=class extends Bi{constructor(e){super(),this.refrain=e}};var c=class{constructor(e,i,n,o,r,a,l){this.id=l||e,this.hymn_number=e,this.title=i,this.keynote=o,this.chorus=r,this.stanzas=n,this.song_writer=a}};var s=class extends Bi{constructor(e){super(),this.verse=e}};var ny=[new c(1,"ONLY BELIEVE",[new s(`Fear not, little flock, from the cross to the throne,
From death into life He went for His own;
All power in earth, all power above,
Is given to Him for the flock of His love.`),new s(`Fear not, little flock, He goeth ahead,
Your Shepherd selecteth the path you must tread;
The waters of Marah He'll sweeten for thee,
He drank all the bitter in Gethsemane.`),new s(`Fear not, little flock, whatever your lot,
He enters all rooms, "the doors being shut;"
He never forsake, He never is gone,
So count on His presence in darkness and dawn.`)],"C",new f(`Only believe, only believe,
All things are possible, only believe;
Only believe, only believe
All things are possible, only believe.
(Lord, I believe \u2026)
(Lord, I receive \u2026)
(Jesus is here \u2026)`)),new c(2,"AMAZING GRACE",[new s(`Amazing Grace! How sweet the sound,
That saved a wretch like me!
I once was lost but now am found,
Was blind, but now I see.`),new s(`'Twas grace that taught my heart to fear,
And Grace my fears relieved;
How precious did that grace appear
The hour I first believed!`),new s(`Through many dangers, toils and snares,
I have already come;
'Tis grace hath brought me safe thus far,
And grace will lead me home.`),new s(`When we've been there ten thousand years,
Bright shining as the sun;
We've no less days to sing God's praise
Than when we first begun.`)],"Ab"),new c(3,"THEY COME",[new s(`They come from the East and West,
They come from the lands afar,
To feast with the King, to dine as His guest;
How blessed these pilgrims are!
Beholding His hallowed face
Aglow with light divine;
Blest partakers of His grace,
As gems in His crown to shine.`),new s(`I look on the great white throne,
Before it the ransom'd stand;
No longer are tears, no sorrow is known
Nor death in that goodly land
My Saviour has gone before,
Preparing the way for me;
Soon we'll meet to part no more
Thru time or eternity.`),new s(`The gates of that holy place
Stand open by night and day;
O look to the Lord who "giveth more grace,"
Whose love has prepared the way.
A home in those mansions fair
His hand hath reserved for all.
For the wedding feast prepare,
Obeying the gracious call.`),new s(`Oh, Jesus is coming soon,
Our trials will then be o'er.
What if our Lord this moment should come
For those who are free from sin?
Then would it bring you joy,
Or Sorrow and deep despair?
When Our Lord in glory comes,
We'll meet Him up in the air.`)],"Eb",new f(`Since Jesus has set me free,
I'm happy as heart can be;
No longer I bear the burdens of care.
His yoke is so sweet to me.
My soul was as black as night,
But darkness has taken flight;Now I shout the victory,
For Jesus has set me free.`)),new c(4,"I LOVE HIM",[new s(`Gone from my heart the world and all it charms;
Now, through the blood, I'm saved from all alarms;
Down at the cross my heart is bending low;
The precious blood of Jesus cleanses white as snow.`),new s(`Once I was lost, and 'way down deep in sin;
Once was a slave to passions fierce within;
Once was afraid to trust a loving God;
But now I'm cleansed from every stain through Jesus' blood.`),new s(`Once I was bound, but now I am set free;
Once I was blind, but now the light I see;
Once I was dead, but now in Christ I live,
To tell the world around the peace that He doth give.`)],"C",new f(`I love Him, I love Him
Because He first love me
And purchased my salvation
On Calvary's tree.`)),new c(5,"SWEET HOUR OF PRAYER",[new s(`Sweet Hour of prayer, sweet hour of prayer,
That calls me from a world of care,
And bids me, at my Father's throne,
Make all my wants and wishes known;
In seasons of distress and grief,
My soul has often found relief,
And oft escaped the tempter's snare.
By Thy return, sweet hour of prayer.`),new s(`Sweet hour of prayer, sweet hour of prayer,
The joy I feel, the bliss I share,
Of those whose anxious spirits burn
With strong desires for Thy return!
With such I hasten to the place
Where God, my Saviour, shows His face,
And gladly take my station there,
And wait for Thee, sweet hour of prayer.`),new s(`Sweet hour of prayer, sweet hour of prayer,
Thy wings shall my petition bear
To Him whose truth and faithfulness
Engage the waiting soul to bless;
And since He bids me seek His face,
Believe His Word and trust His grace,
I'll cast on Him my every care,
And wait for Thee, sweet hour of prayer.`)],"Eb"),new c(6,"OH, HOW I LOVE JESUS",[new s(`There is a name I love to hear,
I love to sing its worth;
It sounds like music in mine ear,
The sweetest name on earth.`),new s(`It tells me of a Saviour's love,
Who died to set me free;
It tells me of His precious blood;
The sinner's perfect plea.`),new s(`It tells me what my Father hath
In store for every day,
And though I tread a darksome path,
Yields sunshine all the way.`),new s(`It tells of One whose loving heart
Can feel my deepest woe,
Who in each sorrow bears a part,That none can bear below.`)],"Ab",new f(`Oh, how I love Jesus,
Oh, how I love Jesus,
Oh, how I love Jesus,
Because He first loved me.
(I'll never forsake Him \u2026)
(To me He is so wonderful\u2026)`)),new c(7,"WHEN THE REDEEMED ARE GATHERING IN",[new s(`I am thinking of the rapture
In our blessed home on high,
When the redeemed are gathering in;
How we'll raise the heavenly
anthem in that city in the sky,
When the redeemed are gathering in.`),new s(`There will be a great procession
Over on the street of gold,
When the redeemed are gathering in;
O what music, O what singing,
o'er the city will be rolled,
When the redeemed are gathering in.`),new s(`Saints will sing redemption's
Story with their voices clear and strong,
When the redeemed are gathering in;
Then the angles all will listen,
For they cannot join that song,
When the redeemed are gathering in.`),new s(`Then the Saviour will give orders
To prepare the banquet board,
When the redeemed are gathering in;
And we'll hear His invitation,
"Come, ye blessed of the Lord,"
When the redeemed are gathering in.`)],"G",new f(`When the redeemed are gathering in,
Washed like the snow, and free from all sin;
How we will shout, and how we will sing,
When the redeemed are gathering in.`)),new c(8,"OH, I WANT TO SEE HIM",[new s(`AS I journey through the land, singing as I go,
Pointing souls to Calvary, to the crimson flow,
Many arrows pierce my soul from without, within;
But my Lord leads me on, through Him I must win.`),new s(`When in service for my Lord, dark may be the night,
But I'll cling more close to Him, He will give me light;
Satan's snares may vex my soul, turn my thoughts aside;
But my Lord goes ahead, leads whate'er betide.`),new s(`When in valleys low I look toward the mountain height,
And behold my Saviour there, leading in the fight,
With a tender hand outstretched toward the valley low;
Guiding me, I can see, as I onward go.`),new s(`When before me billows rise from the mighty deep.
Then my Lord directs my bark, He doth safely keep,
And He leads me gently on through this world below;
He's a real Friend to me, O I love Him so.`)],"Ab",new f(`Oh, I want to see Him, look upon His face.
There to sing forever of His saving grace;
On the streets of Glory let me lift my voice;
Cares all past, home at last, ever to rejoice.`)),new c(9,"FEELING SO MUCH BETTER",[new s(`Feeling So much better talking about this good old Way,
Feeling so much better talking about the Lord;
 Let's go on, Let's go on talking about this good old Way.
Let's go on, let's go on talking about the Lord`),new s(`The devil he don't like it, talking about this good old Way,
The devil he don't like it talking about the Lord;
So, Let's go on, Let's go on talking about this good old Way,
Let's go on, let's go on talking about the Lord.`)],"F"),new c(10,"TEACH ME, LORD, TO WAIT",[new s(`Teach Me, Lord, to wait down on my knees,
Till in Your own good time You answer my pleas;
Teach me not to rely on what others do,
But to wait in prayer for an answer from you.`),new s(`Teach me, Lord, to wait while hearts are aflame,
Help me humble my pride and call on Your Name;
Keep my faith renewed, Keep my eyes on Thee,
Help me be on this earth what You want me to be.`)],"F",new f(`They that wait upon the Lord, shall renew their strength,
They shall mount up with wings as an eagle,
They shall run and not be weary, they shall walk and not faint;
Teach me, Lord, teach me, Lord, to wait.`)),new c(11,"HALLELUJAH, WE SHALL RISE",[new s(`In the resurrection morning,
When the trump of God shall sound,
We shall rise, (Hallelujah!) we shall rise!
Then the saints will come rejoicing
And no tears will e'er be found,
We shall rise, (Hallelujah!) we shall rise.`),new s(`In the resurrection morning,
What a meeting it will be,
We shall rise, (Hallelujah!) we shall rise!
When our fathers and our mothers,
And our loved ones we shall see,
We shall rise, (Hallelujah!) we shall rise.`),new s(`In the resurrection morning,
Blessed thought it is to me,
We shall rise, (Hallelujah!) we shall rise!
I shall see my blessed Saviour,
Who so freely died for me,
We shall rise, (Hallelujah!) we shall rise.`),new s(`In the resurrection morning,
We shall meet Him in the air,
We shall rise, (Hallelujah!) we shall rise!
And be carried up to glory,
To our home so bright and fair,
We shall rise, (Hallelujah!) we shall rise.`)],"Bb",new f(`We shall rise, (Hallelujah!)
We shall rise! (Amen)
We shall rise, (Hallelujah!)
In the resurrection morning,
When death's prison bars are broken.
We shall rise, (Hallelujah!) we shall rise`)),new c(12,"WEAR A CROWN",[new s(`Am I a soldier of the cross,
A follower of the Lamb,
And shall I fear to own His cause,
Or blush to speak His Name?`),new s(`Must I be carried to the skies
On flow'ry beds of ease,
While others fought to win the prize,
And sailed through bloody seas?`),new s(`Are there no foes for me to face?
Must I not stem the flood?
Is this vile world a friend to grace
To help me on to God?`),new s(`Sure, I must fight if I would reign,
Increase my courage, Lord;
I'll bear the toil, endure the pain.
Supported by Thy Word.`)],"Ab",new f(`And when the battle's over, we shall wear a crown!
Yes, we shall wear a crown! Yes we shall wear a crown.
And when the battle's over! we shall wear a crown
In the new Jerusalem.
Wear a crown, wear a crown,
Wear a bright and shining crown.
And when the battle's over, we shall wear a crown
In the New Jerusalem.`)),new c(13,"MARVELOUS GRACE",[new s(`Marvelous Grace of our loving Lord,
Grace that exceeds our sin and our guilt.
Yonder on Calvary's mount outpoured,
There where the Blood of the Lamb was spilt.`),new s(`Sin and despair like the sea waves cold,
Threaten the soul with infinite loss;
Grace that is greater, yes grace untold,
Points to the Refuge, the Mighty Cross.`),new s(`Dark is the stain that we cannot hide,
What can avail to wash it away?
Look! There is flowing a crimson tide;
Whiter than snow you may be today.`),new s(`Marvelous, infinite, matchless grace,
Freely bestowed on all who believe;
You that are longing to see His face,
Will you this moment His grace receive?`)],"F",new f(`Grace, Grace, God's Grace,
Grace that will pardon and cleanse within;
Grace, Grace, God's Grace,
Grace that is greater than all our sin.`)),new c(14,"ZION\u2019S HILL",[new s(`There waits for me a glad tomorrow,
Where gates of pearl swing open wide,
And when I've passed this vale of sorrow,
I'll camp upon the other side.
`),new s(`Some day I'll hear the angles singing,
Beyond the shadows of the tomb;
And all the bells of heaven ringing,
While saints are singing, "Home, sweet Home."`),new s(`Some day my labors will be ended,
And all my wand'rings will be o'er,
And all earth's broken ties be mended,
And I shall sigh and weep no more.`),new s(`Some day the dark clouds will be rifted,
And all the night of gloom be past;
And all life's burdens will be lifted,
The day of rest shall dawn at last.`)],"Ab",new f(`Some day beyond the reach of mortal ken,
Some day, God only knows just where and when,
The wheels of mortal life shall all stand still,
And I shall go to dwell on Zion's hill.`)),new c(15,"WE'RE MARCHING TO ZION",[new s(`Come, we that love the Lord,
And let our joys be known,
Join in a song with sweet accord,
Join in a song with sweet accord,
And thus surround the throne,
And thus surround the throne.`),new s(`Let those refuse to sing
Who never knew our God;
But children of the heavenly King,
But children of the heavenly King,
May speak their joys abroad,
May speak their joys abroad.`),new s(`The hill of Zion yields
A thousand sacred sweets
Before we reach the heavenly fields
Before we reach the heavenly fields
Or walk the golden street,
Or walk the golden street.`),new s(`Then let our songs abound,
And every tear be dry;
We're marching thru Immanuel's ground,
We're marching thru Immanuel's ground,
To fairer worlds on high,
To fairer worlds on high.`)],"G",new f(`We're marching to Zion,
Beautiful, Beautiful Zion;
We're marching upward to Zion.
The beautiful city of God.`)),new c(16,"CLEANSE ME",[new s(`Search me, O God, and know my heart today;
Try me, O Saviour, know my thoughts, I pray;
See if there be some wicked way in me;
Cleanse me from every sin, and set me free.`),new s(`I praise Thee, Lord, for cleansing me from sin;
Fulfill Thy Word, and make me pure within;
Fill me with fire, where once I burned with shame;
Grant my desire to magnify Thy Name.`),new s(`Lord, take my life, and make it wholly Thine;
Fill my poor heart with Thy great love divine;
Take all my will, my passion, self and pride;
I now surrender; Lord, in me abide.`),new s(`O Holy Ghost, revival comes from Thee;
Send a revival, start the work in me;
Thy Word declares Thou wilt supply our need;
For blessing now, O Lord, I humbly plead.`)],"F"),new c(17,"MY SHEEP KNOW MY VOICE",[new s(`MY sheep know My voice,
And the path that I take,
They follow wherever I go;
My sheep know My voice
And come at My call,
But a stranger's voice do they not know.`),new s(`My sheep know My voice,
And the pastures of green,
Where I lead them so often to feed;
My sheep know My voice,
And the cool sparkling stream,
Where beside its still waters I lead.`),new s(`My sheep know My voice,
And the valley of death,
Thru which I shall lead them some day;
But no danger nor harm
Can touch one of them,
For I will be with them alway.`)],"Bb",new f(`My sheep know My voice.
And day by day,
They abide in the fold,
And go not astray;
They love Me because
I have made them My choice,
And they follow My call,
For My sheep know My voice.`)),new c(18,"ONWARD, CHRISTIAN SOLDIERS",[new s(`Onward, Christian soldiers!
Marching as to war,
With the cross of Jesus
Going on before;
Christ, the royal Master,
Leads against the foe;
Forward into battle,
See, His banners go!`),new s(`Like a mighty army
Moves the Church of God;
Brothers, we are treading
Where the saints have trod;
We are not divided,
All one body we;
One in hope and doctrine,
One in charity.`),new s(`Crowns and thrones may perish,
Kingdoms rise and wane;
But the Church of Jesus
Constant will remain;
Gates of hell can never
'Gainst that Church prevail;
We have Christ's own promise,
Which can never fail.`),new s(`At the sign of triumph,
Satan's host doth flee;
Oh, then, Christian solders,
On to Victory!
Hell's foundations quiver
At the shout of praise;
Brothers, lift your voices,
Loud your anthems raise!`),new s(`Onward, then, ye people!
Join our happy throng;
Blend with ours your voices
In the triumph song;
Glory, laud, and honor.
Unto Christ the King;
This through countless ages
Men and angels sing.`)],"G",new f(`Onward, Christian soldiers!
Marching as to war,
With the cross of Jesus
Going on before.`)),new c(19,"LET\u2019S TALK ABOUT JESUS",[new s(`Let\u2019s talk about Jesus,
The King of kings is He,
The Lord of lords, Supreme
Throughout Eternity;
The great I AM, the Way,
The Truth, the Life, the Door;
Let's talk about Jesus more and more.`),new s(`Let's talk about Jesus,
Let all the world proclaim,
The pow'r and majesty
Of such a wondrous Name.
The Babe of Bethlehem,
The Bright and Morning Star,
Let's sing His praises near and far.`),new s(`Let's talk about Jesus,
The Bread of Life is He,
The Saviour of the world,
The Man of Galilee.
The Prophet, Priest and King,
The Mighty God is He,
The well of Living water free.`),new s(`Let's talk about Jesus,
The Prince of peace is He,
The Great Physician too,
Down through all history.
The Lily pure and white,
The Rose of Sharon fair,
The shepherd of such tender care.`),new s(`Let's talk about Jesus,
The Rock of ages He,
The lamb of sinners slain,
The Man of Calvary.
The Great Emmanuel,
The Word of God sublime,
He is our Bridegroom so Divine.`)],"Bb"),new c(20,"WHEN UPON THE CLOUDS OF HEAVEN",[new s(`When upon the clouds of heaven,
Christ shall come to earth again,
Will the world be glad to see Him,
When our Lord shall come again?`),new s(`Will His coming bring rejoicing?
Or will it bring tears and pain?
Are you ready to receive Him,
When our Lord shall come again?`),new s(`Will you join in lamentation?
Or the angel's glad refrain?
Will you help His people crown Him,
When our Lord shall come again?`),new s(`Work and pray till Jesus calls you,
Help to gather in the grain,
Then with joy you'll meet the Saviour,
When our Lord shall come again.`)],"G",new f(`There'll be singing, there'll be shouting,
There'll be sorrow, there'll be pain,
There'll be weeping, there'll be praying,
When our Lord shall come again.`)),new c(21,"THE FIGHT IS ON",[new s(`The fight is on, the trumpet sound is ringing out,
The cry "To arms" is heard afar and near;
The Lord of hosts is marching on to victory,
The triumph of the right will soon appear.`),new s(`The fight is on, arouse ye solders brave and true,
Jehovah leads, and vict'ry will assure;
Go buckle on the armor God has given you,
And in His strength unto the end endure.`),new s(`The Lord is leading on to certain victory,
The bow of promise spans the eastern sky;
His glorious name in every land shall honored be,
The morn will break, the dawn of peace is nigh.`)],"C",new f(`The fight is on, O Christian soldiers,
And face to face in stern array,
With armor gleaming, and colors streaming,
The right and wrong engage today;
The fight is on, but be not weary,
Be strong and in Him might hold fast;
    If God be for us, His banner o'er us,
We'll sing the victor's song at last.`)),new c(22,"VICTORY IN JESUS",[new s(`I heard an old, old story,
How a Saviour came from glory,
How He gave His life on Calvary
To save a wretch like me;
I heard about His groaning,
Of His precious blood's atoning,
Then I repented of my sins
 And won the victory.`),new s(`I heard about His healing,
Of His cleansing pow'r revealing,
How He made the lame to walk again
And caused the blind to see;
And then I cried, "Dear Jesus,
Come and heal my broken spirit,"
And somehow Jesus came and brought
To me the victory.`),new s(`I heard about a mansion
He has built for me in glory,
And I heard about the street of gold
Beyond the crystal sea;
About the angels singing,
And the old redemption story,
And some sweet day I'll sing up there
The song of victory.`)],"Ab",new f(`O victory in Jesus,
My Saviour, forever,
He sought me and bought me
With His redeeming blood;
He loved me ere I knew Him
And all my love is due Him,
He plunged me to victory,
Beneath the cleansing flood.`)),new c(23,"MY FAITH LOOKS UP TO THEE",[new s(`My faith looks up to Thee,
Thou Lamb of Calvary,
Saviour divine;
Now hear me while I pray,
Take all my sin away,
O let me from this day
Be wholly Thine!`),new s(`May Thy rich grace impart
Strength to my fainting heart,
My zeal inspire;
As Thou hast died for me,
O may my love to Thee,
Pure, warm, and changeless be,
A living fire!`),new s(`While life's dark maze I tread,
And grief's around me spread
Be Thou my Guide;
Bid darkness turn to day,
Wipe sorrow's tears away,
Nor let me ever stray,
From Thee aside.`)],"Eb"),new c(24,"LIVING BY FAITH",[new s(`I care not today what the morrow may bring,
If shadow or sunshine or rain,
The Lord I know ruleth o'er everything,
And all of my worry is vain.
`),new s(`Though tempest may blow and the storm clouds arise.
Obscuring the brightness of life.
I'm never alarmed at the overcast skies,
The Master looks on at the strife.
`),new s(`I know that He safely will carry me through,
No matter what evils betide.
Why should I then care, though the tempest may below,
If Jesus walks close to my side.`),new s(`Our Lord will return to this earth some sweet day,
Our troubles will then all be o'er,
The Master so gently will lead us away,
Beyond that blest heavenly shore.`)],"Eb",new f(`Living by faith, in Jesus above,
Trusting, confiding in His great love;
From all harm safe in His sheltering arm.
I'm living by faith and feel no alarm.`)),new c(25,"I SURRENDER ALL",[new s(`All to Jesus I surrender,
All to Him I freely give;
I will ever love and trust Him,
In His presence daily live.`),new s(`All to Jesus I surrender,
Humbly at His feet I bow,
Worldly pleasures all forsaken,
Take me, Jesus, take me now.`),new s(`All to Jesus I surrender,
Make me, Saviour, wholly Thine;
Let me feel the Holy Spirit.
Truly know that Thou art mine.`),new s(`All to Jesus I surrender,
Lord, I give myself to Thee;
Fill me with Thy love and power,
Let Thy blessing fall on me.`),new s(`All to Jesus I surrender,
Now I feel the sacred flame;
Oh, the joy of full salvation!
Glory, glory to His name!`)],"Eb",new f(`I surrender all,
I surrender all,
All to Thee, my blessed Saviour.
I surrender all`)),new c(26,"WHEN I REACH THAT CITY",[new s(`On the top of Mount Zion is a city
And the earth with glory it doth fill;
I shall look on its beauty in the morning
When I reach that city on the hill.`),new s(`I'm invited to come home to that city,
For the Word says, "Whosoever will,"
And I'll find there a mansion for me waiting
When I reach that city on the hill.`),new s(`Death will never molest me in that city,
Never leave me lying cold and chill;
And I'll enter to live up there forever
When I reach that city on the hill.`),new s(`So, I'll stay here until my Saviour calls me,
Trying daily to perform His will;
Then He'll say unto me, "Well done," up yonder
When I reach that city on the hill.`)],"Ab",new f(`Oh, that city on Mount Zion,
Tho' a pilgrim yet I love thee still;
I'll not leave thee, through the ages,
When I reach that city on the hill.`)),new c(27,"FARTHER ALONG",[new s(`Tempted and tried we're oft made to wonder
Why it should be thus all the day long,
While there are others living about us,
Never molested though in the wrong.`),new s(`When death has come and taken our loves ones,
It leaves our home so lonely and drear;
Then do we wonder why others prosper,
Living so wicked year after year.`),new s(`Faithful till death said our loving Master,
A few more days to labor and wait;
Toils of the road will then seem as nothing,
As we sweep through the beautiful gate.`),new s(`When we see Jesus coming in glory,
When He comes from His home in the sky;
Then we shall meet Him in that bright mansion,
We'll understand it all by and by.`)],"F",new f(`Farther along we'll know all about it,
Farther along we'll understand why;
Cheer up, my brother, live in the sunshine,
We'll understand it all by and by.`)),new c(28,"FILL MY WAY WITH LOVE",[new s(`Let me walk, blessed Lord, in the way Thou hast gone,
Leading straight to the land above;
Giving cheer everywhere, to the sad and the lone,
Fill my way every day with love.`),new s(`Keep me close to the side of my Saviour and Guide,
Let me never in darkness rove;
Keep my path free from wrath, and my soul satisfied,
Fill my way every day with love.`),new s(`Soon the race will be o'er, and I'll travel no more,
But abide in my home above;
Let me sing, blessed King, all the way to the shore,
Fill my way every day with love.`)],"Ab",new f(`Fill my way every day with love,
As I walk with the heavenly Dove;
Let me go all the while, with a song and a smile,
Fill my way every day with love.`)),new c(29,"I AM RESOLVED",[new s(`I am resolved no longer to linger,
Charmed by the world's delight;
Things that are higher, things that are nobler,
These have allured my sight.`),new s(`I am resolved to go to the Saviour,
Leaving my sin and strife;
He is the true one, He is the just one,
He hath the words of life.`),new s(`I am resolved to follow the Saviour,
Faithful and true each day;
Heed what He sayeth, do what He willeth,
He is the living way.`),new s(`I am resolved to enter the kingdom,
Leaving the paths of sin;
Friends may oppose me, foes may beset me,
Still will I enter in.`),new s(`I am resolved, and who will go with me?
Come, friends, without delay,
Taught by the Bible, led by the Spirit,
We'll walk the heavenly way.`)],"Bb",new f(`I will hasten to Him,
Hasten so glad and free,
Jesus, greatest, highest,
I will come to Thee.`)),new c(30,"HIGHER GROUND",[new s(`I'm pressing on the upward way,
New heights I'm gaining every day;
Still praying as I'm onward bound,
"Lord, Plant my feet on higher ground."`),new s(`My heart has no desire to stay
Where doubts arise and fears dismay;
Tho' some may dwell where these abound,
My prayer, my aim, is higher ground.`),new s(`I want to scale the utmost height,
And catch a gleam of glory bright;
But still I'll pray till heav'n I've found,
"Lord, lead me on to higher ground."`)],"G",new f(`Lord, lift me up and let me stand,
By faith, on heaven's table land,
A higher plane than I have found;
Lord, plant my feet on higher ground.`)),new c(31,"STANDING ON THE PROMISES",[new s(`Standing on the promises of Christ my King,
Through eternal ages let His praises ring;
Glory in the highest I will shout and sing,
Standing on the promises of God.`),new s(`Standing on the promises that cannot fail,
When the howling storms of doubt and fear assail,
By the living Word of God I shall prevail,
Standing on the promises of God.`),new s(`Standing on the promises I now can see
Perfect, present cleansing in the blood for me;
Standing in the liberty where Christ makes free,
Standing on the promises of God.`),new s(`Standing on the promises of Christ the Lord,
Bound to Him eternally by love's strong cord,
Overcoming daily with the Spirit's sword,
Standing on the promises of God.`),new s(`Standing on the promises I cannot fall,
List'ning every moment to the Spirit's call,
Resting in my Saviour, as my all in all,
Standing on the promises of God.`)],"Bb",new f(`Standing, standing,
Standing on the promises of God my Saviour;
Standing, standing,
I'm standing on the promises of God.`)),new c(32,"BY AND BY, MORNING COMES",[new s(`We are often tossed and driven on the restless sea of time,
Somber skies and howling tempests oft succeed a bright sunshine;
In the land of perfect day, when the mists have rolled away,
We will understand it better by and by.`),new s(`We are often destitute of the things that life demands,
Want of food and want of shelter, thirsty hills and barren lands;
But we're trusting in the Lord, and according to His Word,
We will understand it better by and by.`),new s(`Trials dark on every hand, and we cannot understand,
All the ways that God would lead us to that blessed promised Land;
But He guides us with His eye and we'll follow till we die,
For we'll understand it better by and by.`),new s(`Temptations, hidden snares often take us unawares,
And our hearts are made to bleed for many a thoughtless word or deed,
And we wonder why the test when we try to do our best,
But we'll understand it better by and by.`)],"F",new f(`By and by when the morning comes,
When all the saints of God are gathered home,
We will tell the story how we overcome,
For we'll understand it better by and by.`)),new c(33,"ROCK OF AGES",[new s(`Rock of Ages, cleft for me,
Let me hide myself in Thee;
Let the water and the blood,
From Thy wounded side which flowed
Be of sin the double cure,
Save from wrath and make me pure.`),new s(`Could my tears forever flow,
Could my zeal no languor know,
These for sin could not atone;
Thou must save, and Thou alone;
In my hand no price I bring,
Simply to Thy cross I cling.`),new s(`While I draw this fleeting breath,
When my eyes shall close in death,
When I rise to worlds unknown,
And behold Thee on Thy throne,
Rock of Ages, cleft for me,
Let me hide myself in Thee.`)],"Bb"),new c(34,"WHEN I SEE THE BLOOD",[new s(`Christ our Redeemer died on the cross,
Died for the sinner, paid all His due;
Sprinkle your soul with the blood of the Lamb,
And I will pass, will pass over you.`),new s(`Chiefest of sinners, Jesus will save;
All He has promised, that will He do;
Wash in the fountain opened for sin,
And I will pass, I will pass over you.`),new s(`Judgment is coming, all will be there,
Each one receiving justly his due;
Hide in the saving, sin-cleansing blood,
And I will pass, will pass over you.
`),new s(`Oh, great compassion! O boundless love!
O loving kindness, faithful and true!
Find peace and shelter under the blood,
And I will pass, will pass over you.`)],"C",new f(`When I see the blood,
When I see the blood,
When I see the blood,
I will pass, I will pass over you.`)),new c(35,"LOVE LIFTED ME",[new s(`I was sinking deep in sin,
Far from the peaceful shore,
Very deeply stained within,
Sinking to rise no more;
But the Master of the sea
Heard my despairing cry,
From the waters lifted me,
Now safe am I.`),new s(`All my heart to Him I give,
Ever to Him I'll cling,
In His blessed presence live,
Ever His praises sing.
Love so mighty and so true
Merits my soul's best songs;
Faithful, loving service, too,
To Him belongs.`),new s(`Souls in danger, look above,
Jesus completely saves;
He will lift you by His love
Out of the angry waves.
He's the Master of the sea,
Billows His will obey;
He your Saviour wants to be;
Be saved today.`)],"Bb",new f(`Love lifted me! Love lifted me!
When nothing else could help, love lifted me,
Love lifted me! Love lifted me!
When nothing else could help, love lifted me.`)),new c(36,"THERE SHALL BE SHOWERS OF BLESSING",[new s(`\u201CThree shall be showers of blessing,\u201D
This is the promise of love;
There shall be seasons refreshing,
Sent from the Saviour above.`),new s(`"There shall be showers blessing,"
Precious reviving again;
Over the hills and the valleys,
Sound of abundance of rain.`),new s(`"There shall be showers of blessing,"
Send them upon us, O Lord;
Grant to us now a refreshing,
Come, and now honor Thy Word.`),new s(`"There shall be showers of blessing,"
Oh, that today they might fall,
Now as to God we're confessing,
Now as on Jesus we call!`)],"Bb",new f(`Showers of blessing,
Showers of blessing we need;
Mercy drops round us are falling,
But for the showers we plead.`)),new c(37,"HAVE THINE OWN WAY, LORD",[new s(`Have Thine own way, Lord!
Have Thine own way!
Thou art the Potter;
I am the clay,
Mould me and make me
After Thy will,
While I am waiting,
Yielded and still.`),new s(`Have Thine own way, Lord!
Have Thine own way!
Search me and try me,
Master, today!
Whiter than snow, Lord,
Wash me just now,
As in Thy presence
Humbly I bow.`),new s(`Have Thine own way, Lord!
Have Thine own way!
Wounded and weary,
Help me, I pray!
Power, all power,
Surely is Thine!
Touch me and heal me.
Saviour divine!`),new s(`Have Thine own way, Lord!
Have Thine own way!
Hold o'er my being
Absolute sway!
Fill with Thy Spirit
Till all shall see
Christ only, always,
Living in me!`)],"Eb"),new c(38,"DRAW ME NEARER",[new s(`I am Thine, O Lord I have heard Thy voice,
And it told Thy love to me;
But I long to rise in the arms of faith,
And be closer drawn to Thee.`),new s(`Consecrate me now to Thy service, Lord,
By the pow'r of grace divine;
Let my soul look up with a steadfast hope,
And my will be lost in Thine.`),new s(`Oh, the pure delight of a single hour
That before Thy throne I spend,
When I kneel in prayer, and with Thee, my God,
I commune as friend with friend.`),new s(`There are depths of love that I cannot know
Till I cross the narrow sea,
There are heights of joy that I may not reach,
Till I rest in peace with Thee.`)],"Ab",new f(`Draw me nearer, nearer, blessed Lord,
To the cross where Thou has died;
Draw me nearer, nearer, nearer, blessed Lord,
To Thy precious, bleeding side.`)),new c(39,"I AM MARKED",[new s(`I Have lost my reputation since I turned my back on sin,
And a lot of friends went from me, since I let my Saviour in;
Now they pass me by unknown, when they once passed with a smile;
Now they say I'm very foolish, and they say I'm out of style.`),new s(`Well, they say my life is ruined, and my talent thrown away,
And they cannot understand it, for I had such plans one day;
But I know what I surrendered when I
promised I'd go through;
And I gained far more glory since God made me over new.`)],"Ab",new f(`I am marked, marked, marked,
I am marked, now wherever I go;
I am marked, marked, marked,
Just what I am everyone seems to know.
I am sealed, sealed, sealed,
I am sealed by His Spirit Divine;
O glory to God! Hallelujah! Amen!
I am His, and I know He is mine.`)),new c(40,"WON\u2019T IT BE WONDERFUL THERE?",[new s(`When with the Saviour we enter the gloryland,
Won't it be wonderful there?
Ended the troubles and cares of the storyland,
Won't it be wonderful there?`),new s(`Walking and talking with Christ, the supernal One,
Won't it be wonderful there?
Praising, adoring the matchless eternal One,
Won't it be wonderful there?`),new s(`There where the tempest will never be sweeping us,
Won't it be wonderful there?
Sure that forever the Lord will be keeping us,
Won't it be wonderful there?`)],"Bb",new f(`Won't it be wonderful there,
Having no burdens to bear?
Joyously singing with heart-bells all ringing,
O won't it be wonderful there?`)),new c(41,"WINGS OF A DOVE",[new s(`Noah had drifted
On the floods many days,
He searched for land
In various ways;
Troubles he had some,
But not from above,
God gave him His sign
On the wings of a dove.`),new s(`Jesus, our Saviour
Came to earth one day;
He was born in a stable,
In a manger of hay;
Though here rejected,
But not from above,
God gave us His sign
On the wings of a dove.`),new s(`Though I have suffered
In many a way,
I cried for healing
Both night and day;
Faith wasn't forgotten
By the Father above,
He gave me His sign
On the wings of a dove.`)],"Eb",new f(`On the wings of a snow-white dove,
God sends down His pure, sweet love,
A sign from above,
On the wings of dove.`)),new c(42,"I FEEL LIKE TRAVELING ON",[new s(`My Heavenly home is bright and fair,
I feel like traveling on,
Nor pain, nor death can enter there,
I feel like traveling on.`),new s(`Its glittering towers the sun outshine,
I feel like traveling on;
That heavenly mansion shall be mine,
I feel like traveling on.`),new s(`Let others seek a home below,
I feel like traveling on;
Which flames devour, or waves o'erflow,
I feel like traveling on.`),new s(`The Lord has been so good to me,
I feel like traveling on;
Until that blessed home I see,
I feel like traveling on.`)],"G",new f(`Yes, I feel like traveling on,
I feel like traveling on;
My heavenly home is bright and fair,
I feel like traveling on.`)),new c(43,"COME AND DINE",[new s(`Jesus has a table spread
Where the saints of God are fed,
He invites His chosen people \u201CCome and dine\u201D
With His manna He doth feed
And supplies our every need;
O, 'tis sweet to sup with Jesus all the time!`),new s(`The disciples came to land,
Thus obeying Christ's command,
For the Master called to them, "Come and dine;"
There they found their hearts' desire,
Bread and fish upon the fire;
Thus He Satisfies the hungry every time.`),new s(`Soon the Lamb will take His bride
To be ever at His side,
All the host of heaven will assembled be:
O, 'twill be a glorious sight,
All the saints in spotless white;
And with Jesus they will feast eternally.`)],"C",new f(`"Come and dine," the Master calleth,
"Come and dine,"
You may feast at Jesus' table all the time;
He who fed the multitude, turned the water into wine,
To the hungry calleth now, "Come and dine."`)),new c(44,"GOD LEADS US ALONG",[new s(`In shady, green pastures, so rich and so sweet,
God leads His dear children along;
Where the water's cool flow bathes the weary one's feet,
God leads His dear children along.`),new s(`Sometimes on the mount where the sun shines so bright,
God leads His dear children along;
Sometimes in the valley in the darkest of night,
God leads His dear children along.`),new s(`Tho' sorrow befall us, and Satan oppose,
God leads His dear children along;
Through grace we can conquer, defeat all our foes,
God leads His dear children along.`),new s(`Away from the mire, and away from the clay,
God leads His dear children along;
Away up in glory, eternity's day,
God leads His dear children along`)],"Eb",new f(`Some through the waters, some through the flood,
Some through the fire, but all through the Blood;
Some though great sorrow, but God gives a song,
In the night season and all the day long.`)),new c(45,"LEANING ON THE EVERLASTING ARMS",[new s(`What a fellowship, what a joy divine,
Leaning on the everlasting arms;
What a blessedness, what a peace is mine
Leaning on the everlasting arms.`),new s(`Leaning, leaning,
Safe and secure from all alarms;
Leaning, leaning, leaning on the everlasting arms.`),new s(`Oh, how sweet to walk in this pilgrim way,
Leaning on the everlasting arms;
Oh, how bright the path grows from day to day,
Leaning on the everlasting arms.`),new s(`What have I to dread, what have I to fear,
Leaning on the everlasting arms;
I have blessed peace with my Lord so near,
Leaning go the everlasting arms.`)],"Eb",new f(`Leaning, leaning,
Safe and secure from all alarms;
Leaning, leaning,
Leaning on the everlasting arms.`))];var iy=[new c(46,"SUNLIGHT",[new s(`I wandered in the shades of night,
Till Jesus came to me,
And with the sunlight of His love
Bid all my darkness flee.`),new s(`Though clouds may gather in the sky,
And billows 'round me roll,
However dark the world may be,
I've sunlight in my soul.`),new s(`While walking in the light of God, I sweet communion find;
I press with holy vigor on,
And leave the world behind.`),new s(`I cross the wild extended fields,
I journey o'er the plains,
And in the sunlight of His love
I reap the golden grain.`),new s(`Soon I shall see Him as He is,
The light that came to me;
Behold the brightness of His face,
Throughout eternity.`)],"Eb",new f(`Sunlight, sunlight in my soul today,
Sunlight, sunlight all along the way;
Since the Saviour found me, took away my sin,
I have had sunlight of His love within.`)),new c(47,"I KNOW WHOM I HAVE BELIEVED",[new s(`I know not why God's wondrous grace
 To me He hath made known,
Nor why, unworthy, Christ in love
Redeemed me for His own.`),new s(`I know not how this saving faith
To me He did impart,
Nor how believing in His Word
Wrought peace within my heart.`),new s(`I know not how the Spirit moves,
Convincing men of sin,
Revealing Jesus through the Word,
Creating faith in Him.`),new s(`I know not what of good or ill
May be reserved for me,
Of weary ways or golden days,
Before His face I see.`),new s(`I know not when my Lord may come,
At night or noonday fair,
Nor if I'll walk the vale with Him,
Or \u201Cmeet Him in the air.\u201D`)],"Eb",new f(`But "I know whom I have believed,
And am persuaded that He is able
To keep that which I've committed
Unto Him against that day."`)),new c(48,"BRINGING IN THE SHEAVES",[new s(`Sowing in the morning, sowing seeds of kindness,
Sowing in the noontide and the dewy eve;
Waiting for the harvest and the time of reaping,
We shall come rejoicing, bringing in the sheaves.`),new s(`Sowing in the sunshine, sowing in the shadows,
Fearing neither clouds nor winter's Chilling breeze;
By and by the harvest and the labor ended,
We shall come rejoicing, bringing in the sheaves.`),new s(`Going forth with weeping, sowing for the Master,
Though the loss sustained, our spirit often grieves;
When our weeping's over, He will bid us welcome,
We shall come rejoicing, bringing in the sheaves.`)],"Bb",new f(`Bringing in the sheaves, bringing in the shaves;
We shall come rejoicing, bringing in the sheaves;
Bringing in the sheaves, bringing in the sheaves,
We shall come rejoicing, bringing in the sheaves.`)),new c(49,"SOME GOLDEN DAYBREAK",[new s(`Some glorious morning sorrow will cease,
Some glorious morning all will be peace;
Heartaches all ended, schooldays all done,
Heaven will open, Jesus will come.`),new s(`Sad hearts will gladden, all shall be bright,
Good-bye forever to earth's dark night;
Changed in a moment, like Him to be,
Oh, glorious daybreak, Jesus I'll see.`),new s(`Oh, what a meeting, there in the skies,
No tears nor crying shall dim our eyes;
Loved ones united eternally,
Oh, what a daybreak that morn will be.`)],"Ab",new f(`Some golden daybreak, Jesus will come;
Some golden daybreak, battles all won,
He'll shout the victory, break through the blue,
Some golden daybreak for me, for you.`)),new c(50,"SHALL WE GATHER AT THE RIVER?",[new s(`Shall we gather at the river,
Where bright angel feet have trod,
With its crystal tide forever,
Flowing by the throne of God?`),new s(`On the bosom of the river,
Where the Saviour-King we own,
We shall meet and sorrow never,
'Neath the glory of the throne.`),new s(`On the margin of the river,
Washing up its silver spray,
We will walk and worship ever,
All the happy, golden day.`),new s(`Ere we reach the shining river,
Lay we every burden down;
Grace our spirit will deliver,
And provide a robe and crown.`),new s(`At the smiling of the river,
Mirror of the Saviour's face,
Saints whom death will never sever
Lift their songs of saving grace.`),new s(`Soon we'll reach the shining river,
Soon our pilgrimage will cease;
Soon our happy hearts will quiver
With the melody of peace.
`)],"Ab",new f(`Yes, we'll gather at the river,
The beautiful, the beautiful river;
Gather with the saints at the river
That flows by the throne of God.
`)),new c(51,"GLORY TO HIS NAME",[new s(`Down at the cross where my Saviour died,
Down where for cleansing from sin I cried;
There to my heart was the blood applied;
Glory to His name!`),new s(`I am so wondrously saved from sin,
Jesus so sweetly abides within,
There at the cross where He took me in;
Glory to His name!`),new s(`Oh, precious fountain that saves from sin!
I am so glad I have entered in;
There Jesus saves me and keeps me clean;
Glory to His name!`),new s(`Come, to this fountain so rich and sweet;
Cast thy poor soul at the Saviour's feet;
Plunge in today, and be made complete;
Glory to His name!`)],"Ab",new f(`Glory to His name!
Glory to His name!
There to my heart was the blood applied;
Glory to His name!`)),new c(52,"HE BROUGHT ME OUT",[new s(`My heart was distressed 'neath Jehovah's dread frown,
And low in the pit where my sins dragged me down;
I cried to the Lord from the deep miry clay,
Who tenderly brought me out to golden day.`),new s(`He placed me upon the strong Rock by His side,
My steps were established and here I'll Abide;
No danger of falling while here I remain,
But stand by His grace until the crown I gain.`),new s(`He gave me a song, 'twas a new song of praise,
By day and by night its sweet notes I will raise;
My heart's overflowing, I'm happy and free,
I'll praise my Redeemer, who has rescued me.`),new s(`I'll sing of his wonderful mercy to me,
I'll praise him till all men His goodness shall see;
I'll sing of salvation at home and abroad,
Till many shall hear the truth and trust in God.`)],"Eb",new f(`He brought me out of the miry clay;
He set my feet on the rock to stay;
He puts a song in my soul today,
A song of praise, hallelujah!`)),new c(53,"SWEET BY AND BY",[new s(`There\u2019s a land that is fairer than day,
And by faith we can see it afar;
For the Father waits over the way,
To prepare us a dwelling place there.`),new s(`We shall sing on that beautiful shore,
The melodious songs of the blest,
And our spirits shall sorrow no more,
Not a sigh for the blessing of rest.`),new s(`To our bountiful Father above,
We will offer our tribute of praise,
For the glorious gift of His love,
And the blessings that hallow our days.`)],"G",new f(`In the sweet by and by,
We shall meet on that beautiful shore;
In the sweet by and by,
We shall meet on that beautiful shore.`)),new c(54,"THERE IS A FOUNTAIN",[new s(`There is a fountain filled with blood,
Drawn from Immanuel's veins,
And sinners plunged beneath that flood,
Lose all their guilty stains.
Lose all their guilty stains,
Lose all their guilty stains;
And sinners plunged beneath that flood,
Lose all their guilty stains.`),new s(`The dying thief rejoiced to see
That fountain in his day;
And there may I, though vile as he,
Wash all my sins away,
Wash all my sins away,
Wash all my sins away,
And there may I, though vile as he,
Wash all my sins away.`),new s(`E'er since by faith I saw the stream
Thy flowing wounds supply,
Redeeming love has been my theme,
And shall be till I die.
And shall be till I die,
And shall be till I die;
Redeeming love has been my theme,
And shall be till I die.`),new s(`Then in a nobler, sweeter song,
I'll sing Thy power to save,
When this poor lisping, stammering tongue
Lies silent in the grave.
Lies silent in the grave,
Lies silent in the grave;
When this poor lisping, stammering tongue
Lies silent in the grave.`)],"C"),new c(55,"OH, WHAT PRECIOUS LOVE",[new s(`Oh, what precious love the Father
Had for Adam's fallen race,
Gave His only Son to suffer,
And redeem us by His grace.`)],"F"),new c(56,"JESUS NEVER FAILS",[new s(`Jesus Never fails,
Jesus never fails,
Heaven and earth will pass away,
But Jesus never fails.`)],"Ab"),new c(57,"BATTLE HYMN OF REPUBLIC",[new s(`Mine eyes have seen the glory of the
Coming of the Lord;
He is tramping out the vintage where the
grapes of wrath are stored;
He hath loosed the fateful lightning of His
terrible swift sword;
His truth is marching on.`),new s(`I have seen Him in the watchfires of a
hundred circling camps;
They have builded Him an altar in the
evening dews and damps;
I can read His righteous sentence by the dim and flaring lamps;
His day is marching on.`),new s(`He has sounded forth the trumpet that
shall never sound retreat;
He is sifting out the hearts of men before His judgment seat;
O be swift, my soul, to answer Him! Be
jubilant, my feet!
Our God is marching on.`),new s(`In the beauty of the lilies Christ was born across the sea,
With a glory in His bosom that transfigures you and me;
As He died to make men holy, let us die to make men free;
While God is marching on.`)],"Bb",new f(`Glory! Glory!, hallelujah!
Glory! Glory!, hallelujah!
Glory! Glory!, hallelujah!
His Truth is marching on.`)),new c(58,"AMEN",[new s(`Amen! Amen! Amen! Amen! Amen!
Are you going to love Him? Amen!
Are you going to praise Him? Amen!
Are you going to worship Him? Amen!
Amen, Amen!`),new s(`Do you love Him? Amen!
Will you serve Him? Amen!
Do you believe Him? Amen!
Amen, Amen!`),new s(`The Bible's true. Amen!
I believe it. Amen!
It's the Word of God. Amen!
Amen, Amen!`),new s(`We believe You're coming. Amen!
We're ready to meet You. Amen!
Come, Lord Jesus. Amen!
Amen, Amen!`)],"F"),new c(59,"THE CIRCUIT RIDER PREACHER",[new s(`The circuit-rider preacher went riding through the land,
With a rifle on his shoulder and a Bible in his hand;
He told the prairie people of a blessed Promised Land.
As he went riding, singing along.`),new s(`Leaning, leaning,
Leaning on the everlasting arm;
Leaning, leaning,
Leaning on the everlasting arm.`),new s(`He preached the coming judgment of fire and brimstone;
And a glorious, endless Heaven of the justified alone.
As he rode across the mountains you could
hear him sing this song.
As he went riding on.`),new s(`There is power, power, wonder-working power,
In the blood of the Lamb;
There is power, power, wonder-working power,
In the precious blood of the Lamb.`),new s(`His rifle's old and rusty, and it's hanging on the wall;
His Bible's worn and dusty, and it's seldom
touched at all;
But his Message from this Bible will meet us
at Judgment Day.
For God's Truth keeps marching on.`),new s(`Glory! glory, hallelujah!
Glory! glory, hallelujah!
Glory! glory, hallelujah!
His Truth is marching on.`)],"Bb"),new c(60,"EACH STEP OF THE WAY",[new s(`I'm following Jesus,
One step at a time;
I live for the moment,
In His love divine.
Why think of tomorrow,
Just live for today;
I'm following Jesus,
Each step of the way.`),new s(`The pathway is narrow,
But He leads me on;
I walk in His shadow,
My fears are all gone.
My spirit grows stronger.
Each moment, each day,
For Jesus is leading
Each step of the way.`)],""),new c(61,"I SHALL NOT BE MOVED ",[new s(`Jesus is my Saviour, I shall not be moved;
In His love and favor, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`In my Christ abiding, I shall not be moved;
In His love I'm hiding, I shall not moved.
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`If I trust Him ever, I shall not be moved;
He will fail me never, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`On His word I'm feeding, I shall not be moved;
He's the One that's leading, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`Glory Hallelujah, I shall not be moved;
Anchored in Jehovah, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`In His love abiding, I shall not moved;
And in Him confiding, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`Though all hell assail me, I shall not be moved;
Jesus will not fail me, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`),new s(`Though the tempest rages, I shall not be moved;
On the Rock of Ages, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved.`)],"Ab",new f(`I shall not be, I shall not be moved,
I shall not be, I shall not be moved;
Just like a tree that's planted by the waters,
I shall not be moved;`)),new c(62,"YESTERDAY, TODAY AND FOREVER",[new s(`Oh, how sweet the glorious message,
Simple faith may claim;
Yesterday, today, forever,
Jesus is the same.
Still, He loves to save the sinful,
Heal the sick and lame;
Cheer the mourner, still the tempest;
Glory to His name!`),new s(`He who was the friend of sinners,
Seeks thee, lost one, now;
Sinner, come, and at His footstool
Penitently bow.
He who said, \u201CI\u2019ll not condemn thee,
Go and sin no more;\u201D
Speaks to thee that word of pardon,
As in days of yore.`),new s(`Oft\u2019 on earth He healed the suff\u2019rer
By His mighty hand;
Still our sicknesses and sorrows
Go at His command.
He who gave His healing virtue,
To a woman\u2019s touch;
To the faith that claims His fullness,
Still will give as much.`),new s(`He who pardoned erring Peter,
Never need\u2019st thou fear;
He that came to faithless Thomas,
All thy doubt will clear.
He who let the loved disciple
On His bosom rest,
Bids thee still, with love as tender,
Lean upon His breast.`),new s(`He who \u2018mid the raging billows,
Walked upon the sea;
Still can hush our wildest tempest,
As on Galilee.
He who wept and prayed in anguish,
In Gethsemane,
Drink with us each cup of trembling,
In our agony.`),new s(`As of old He walked to Emmaus,
With them to abide;
So through all life\u2019s way He walketh,
Ever near our side.
Soon again we shall behold Him,
Hasten, Lord, the day!
But \u2018twill still be \u201Cthis same Jesus,\u201D
As He went away.`)],"Bb",new f(`Yesterday, today, forever,
Jesus is the same;
All may change, but Jesus never!
Glory to His name.
Glory to His name,
Glory to His name;
All may change, but Jesus never!
Glory to His name.`)),new c(63,"THE OLD-TIME RELIGION",[new s(`It\u2019s the old-time Holy Spirit,
And the devil won't go near It,
That's the reason people fear It;
But It's good enough for me.`),new s(`It will make you stop your lying;
It will save you when you're dying;
It will start the devil flying;
And It's good enough for me.`),new s(`It's so good I want no other,
For It makes me love my brother;
And It brings things from under cover,
And it's good enough for me.`),new s(`(It was good in the fiery furnace\u2026)
(It was good for Paul and Silas \u2026)
(It was good for our fathers \u2026)
(It was good for Brother Branham \u2026)
(Makes me love everybody \u2026)
(It will do when I am dying \u2026)
(It will take us all to Heaven \u2026)`)],"Ab",new f(`Give me that old-time religion,
Give me that old-time religion,
Give me that old-time religion,
It's good enough for me`)),new c(64,"GET ON BOARD",[new s(`It\u2019s the old ship of Zion,
It's the old ship of Zion,
It's the old ship of Zion,
Get on board, get on board.`),new s(`It has landed my old father,
It has landed my old father,
It has landed my old father,
Get on board, get on board.`)],"Ab"),new c(65,"ON THE OTHER SHORE",[new s(`I've got a Father over yonder,
I've got a Father over yonder,
I've got a Father over yonder,
On the other shore.`),new s(`Some bright day I'll go and see Him,
Some bright day I'll go and see Him,
Some bright day I'll go and see Him,
On the other shore.`),new s(`Won't that be a happy meeting!
Won't that be a happy meeting!
Won't that be a happy meeting!
On the other shore.`),new s(`That bright day may be tomorrow,
That bright day may be tomorrow,
That bright day may be tomorrow,
On the other shore.`)],"Ab"),new c(66,"SHINE ON ME",[new s(`Shine on me, Lord, shine on me,
Let the Light from the lighthouse shine on me;
Shine on me, Lord, shine on me,
Let the Light from the lighthouse shine on me.`)],"Ab"),new c(67,"TO BE LIKE HIM",[new s(`FROM Bethlehem's manger came forth a Stranger,
On earth I long to be like Him;
My faithful Saviour, how rich His favor!
On earth I long to be like Him.`),new s(`Serene and holy, obedient, lowly,
On earth I long to be like Him;
By grace forgiven, an heir of heaven,
On earth I long to be like Him.`)],"Ab",new f(`To be like Jesus, to be like Jesus,
On earth I long to be like Him;
All thru life's journey from earth to glory
I only ask to be like Him.`)),new c(68,"GREAT IS THY FAITHFULNESS",[new s(`Great is Thy faithfulness, O God my Father,
There is no shadow of turning with Thee;
Thou changest not, Thy compassions, they fail not;
As Thou hast been forever wilt be.`),new s(`Summer and winter, and springtime and harvest,
Sun, moon and stars in their courses above,
Join with all nature in manifold witness.
To Thy great faithfulness, mercy and love.`),new s(`Pardon for sin and peace that endureth.
Thy own dear presence to cheer and to guide;
Strength for today and bright hope for tomorrow,
Blessings all mine, with ten thousand beside!`)],"Eb",new f(`Great is Thy faithfulness! Great is Thy faithfulness!
Morning by morning new mercies I see;
All I have needed Thy hand hath provided;
\u201CGreat is Thy faithful,\u201D Lord, unto me`)),new c(69,"OPEN MY EYES, THAT I MAY SEE",[new s(`Open my eyes, that I may see
Glimpses of truth Thou hast for me;
Place in my hands the wonderful key
That shall unclasp, and set me free.`),new s(`Open my ears, that I may hear
Voices of truth Thou sendest clear;
And while the wave-notes fall on my ear,
Everything false will disappear.`),new s(`Open my mouth, and let me bear
Gladly the warm truth everywhere;
Open my heart, and let me prepare,
Love with Thy Children thus to share.`)],"Ab",new f(`Silently now I wait for Thee,
Ready, my God, Thy will to see;
Open my eyes, illumine me,
Spirit Divine!`)),new c(70,"HE\u2019S EVERYTHING TO ME",[new s(`HE'S everything, He's everything to me;
He's everything, He's everything to me;
For He's my father, my mother,
my sister and my brother,
He's everything to me.`)],"F"),new c(71,"I KNOW IT WAS THE BLOOD",[new s(`I KNOW it was the Blood, I know it was the Blood,
I know it was the Blood for me;
One day when I was lost, He died upon the cross,
I know it was the Blood for me.`)],"F"),new c(72,"OH, WON\u2019T YOU WATCH?",[new s(`OH, won't you watch with me one hour,
While I go yonder, while I go yonder?
Oh, won't you watch with me one hour,
While I go yonder and pray?`)],"Bb"),new c(73,"I\u2019M OVERCOMING",[new s(`I'M overcoming, I'm overcoming,
I'm overcoming, I'm overcoming;
For I love Jesus, He's my Saviour,
And He smiles and He loves me too.`)],"Bb"),new c(74,"SPIRIT OF THE LIVING GOD",[new s(`Spirit of the living God, fall fresh on me;
Spirit of the living God, fall fresh on me;
Break me! Melt me! Mould me! Fill me!
Spirit of the Living God, fall fresh on me.`)],"F",new f("F")),new c(75,"THE BEAUTY OF JESUS",[new s(`Let the beauty of Jesus be seen in me,
All His wonderful passion and purity:
O Thou Spirit divine, all my nature refine,
Till the beauty of Jesus is seen in me.`)],"Eb"),new c(76,"SHUT IN WITH GOD",[new s(`Shut in with God in the secret place,
There in the Spirit beholding His face,
Gaining new power to run in the race,
I love to be shut in with God.`)],"C"),new c(77,"TURN YOUR EYES UPON JESUS",[new s(`O soul, are you weary and troubled?
No light in the darkness you see?
There's light for a look at the Saviour,
And life more abundant and free!`),new s(`Through death into life everlasting
He passed, and we follow Him there;
Over us sin no more hath dominion,
For more the conqu'rors we are!`),new s(`His Word shall not fail you, He promised;
Believe Him, and all will be well;
Then go to a world that is dying,
His perfect salvation to tell!`)],"F",new f(`Turn your eyes upon Jesus,
Look full in His wonderful face;
And the things of earth will grow strangely dim
In the light of His glory and grace.`)),new c(78,"WE\u2019LL GIVE THE GLORY TO JESUS",[new s(`We'll give the glory to Jesus,
And tell of His love, and tell of His love;
We'll give the glory to Jesus,
And tell of His wonderful love.`)],"Bb"),new c(79,"SWEEP OVER MY SOUL",[new s(`Sweep over my soul, sweep over my soul,
Sweet Spirit, sweep over my soul;
My rest is complete while I sit at your feet;
Sweet Spirit, sweep over my soul.`)],"Ab"),new c(80,"FRIENDSHIP WITH JESUS",[new s(`A friend of Jesus, O what bliss,
That one so vile as I
Should ever have a friend like this
To lead me to the sky.`),new s(`A friend when other friendships cease,
A friend when others fail,
A friend who gives me joy and peace,
A friend when foes assail.`),new s(`A friend when sickness lays me low,
A friend when death draws near,
A friend as through the vale I go,
A friend to help and cheer.`),new s(`A friend when life's short race is o'er
A friend when earth is past,
A friend to meet on heaven's shore,
A friend when home at last.`)],"Eb",new f(`Friendship with Jesus,
Fellowship divine,
O what blessed, sweet communion,
Jesus is a friend of mine.`)),new c(81,"JESUS IS THE ONE",[new s(`When the day is dark before you,
And the clouds are hanging low,
There is One who watches o'er you,
Everywhere that you may go.`),new s(`O if you are sad and lonely,
Life is but an empty tomb,
Breathe a prayer to Jesus only,
He will drive away the gloom.`),new s(`When you come to cross the river,
He will be your Friend and guide;
You can live with Him forever,
Over on the other side.`),new s(""),new s("")],"Ab",new f(`Jesus is the one, yes, He's the only one,
Let Him have His way until the day is done;
When He speaks, you know the clouds
will have to go, Just because He loves you so.`)),new c(82,"HE\u2019S COMING AGAIN",[new s(`Would You be numbered as one of His fold?
Would you be numbered as one of His fold?
Be spotless within, be watching and
waiting that sight to behold;
He's coming again.`)],"F"),new c(83,"THE LILY OF THE VALLEY",[new s(`I've found a friend in Jesus, He's everything to me.
He's the fairest of ten thousand to my soul;
The Lily of the Valley in Him alone I see,
All I need to cleanse and make me fully whole.
In sorrow He's my comfort, in trouble He's my stay,
He tells me every care on Him to roll. Hallelujah!
He's the Lily of the Valley, the Bright and morning star,
He's the fairest of ten thousand to my soul.`),new s(`He all my griefs has taken, and all my sorrow borne;
In temptation He's my strong and mighty tow'r,
I have all for Him forsaken, and all my idols torn
From my heart, and now He keeps me by His power.
Though all the world forsake me, and Satan tempt me sore,
Through Jesus I shall safely reach the goal, Hallelujah!
He's the Lily of the Valley, the Bright and morning star,
He's the fairest of ten thousand to my soul.`),new s(`He'll never, never leave me, nor yet forsake me here,
While I live by faith and do His blessed will;
A wall of fire about me, I've nothing now to fear;
With His manna He my hungry soul shall fill.
Then sweeping up to glory, we'll see His blessed face,
Where rivers of delight shall ever roll. Hallelujah!
He's the Lily of the Valley, the Bright and Morning star,
He's the fairest of ten thousand to my soul.`)],"F"),new c(84,"HE CARETH FOR YOU",[new s(`He careth for you,
He careth for you;
Through sunshine or shadow,
He careth for you.`)],"F"),new c(85,"WHEN I GET TO THE END OF THE WAY",[new s(`The Sands have been washed in the footprints
Of the Stranger on Galilee's shore,
And the voice that subdued the rough billows,
Will be heard in Judea no more.
But the path of that lone Galilean
With joy I will follow today.
And the toils of the road will seem nothing,
When I get to the end of the way,
And the toils of the road will seem nothing,
When I get to the end of the way.`),new s(`There are so many hills to climb upward,
I often am looking for rest,
But He who appoints me my pathway,
Knows just what is needful and best.
I know in His word He hath promised
That my strength, \u201Cit shall be as my day.\u201D
And the toils of the road will seem nothing,
When I get to the end of the way,
And the toils of the road will seem nothing,
When I get to the end of the way.`),new s(`He loves me too well to forsake me
Or give me one trial too much.
All His people have been dearly purchased,
And Satan can never claim such.
By and by I shall see Him and praise Him,
In the city of unending day.
And the toils of the road will seem nothing,
When I get to the end of way,
And the toils of the road will seem nothing,
When I get to the end of the way.`),new s(`When the last feeble step has been taken.
And the gates of that city appear,
And the beautiful songs of the angels
Float out on my listening ear.
When all that now seems so mysterious
Will be bright and as clear as the day,
Then the toils of the road will seem nothing,
When I get to the end of the way,
Then the toils of the road will seem nothing,
When I get to the end of the way.`)],"C"),new c(86,"ROOM AT THE CROSS FOR YOU ",[new s(`The cross upon which Jesus died
Is a shelter in which we can hide,
And its grace so free is sufficient for me,
And deep is its fountain; as wide as the sea.`),new s(`Though millions have found Him a friend
And have turned from the sins they have sinned,
The Saviour still waits to open the gates,
And welcome a sinner before it's too late.`),new s(`The hand of my Saviour is strong
And the love of my Saviour is long,
Through sunshine or rain, through loss or in gain,
The blood flows from Calv'ry to cleanse every stain.`)],"Ab",new f(`There's room at the cross for you,
There's room at the cross for you,
Though millions have come, there's still
room for one,
Yes, there's room at the cross for you.`)),new c(87,"WHEN THE ROLL IS CALLED",[new s(`When the trumpet of the Lord shall sound,
And time shall be no more,
And the morning breaks eternal, bright and fair;
When the saved of earth shall gather over
on the other shore,
And the roll is called up yonder, I'll be there.`),new s(`On that bright and cloudless morning when
the dead in Christ shall rise,
And the glory of His resurrection share;
When His chosen ones shall gather to their
home beyond the skies,
And the roll is called up yonder, I'll be there.`),new s(`Let us labor for the Master from the dawn
till setting sun,
Let us talk of all His wondrous love and care;
Then when all of life is over, and our work
on earth is done,
And the roll is called up yonder, I'll be there.`)],"Ab",new f(`When the roll is called up yonder,
When the roll is called up yonder,
When the roll is called up yonder,
When the roll is called up yonder, I'll be there.`)),new c(88,"THE HAVEN OF REST",[new s(`MY Soul in sad exile was out on life's sea,
So burdened with sin and distressed,
Till I heard a sweet voice saying,
\u201CMake Me your choice;\u201D
And I entered the \u201CHaven of Rest!\u201D`),new s(`I yielded myself to His tender embrace,
And faith taking hold of the Word,
My fetters fell, and I anchored my soul;
The Haven of Rest is my Lord.`),new s(`The song of my soul, since the Lord made me whole,
Has been the old story, so blest,
Of Jesus, who'll save whosoever will have
A home in the \u201CHaven of Rest!\u201D`),new s(`How precious the thought that we all may recline,
Like John, the beloved and blest,
On Jesus strong arm, where no tempest can Harm,
Secure in the \u201CHaven of Rest!\u201D`),new s(`O come to the Saviour,
He patiently waits
To save by His power divine;
Come, anchor your soul in the haven of rest,
And say, \u201CMy Beloved is mine.\u201D`)],"Ab",new f(`I've anchored my soul in the heaven of rest,
I'll sail the wild seas no more;
The tempest may sweep o'er the wild, Stormy deep,
In Jesus I'm safe evermore.`)),new c(89,"MUST JESUS BEAR THE CROSS ALONE?",[new s(`Must Jesus bear the cross alone,
And all the world go free?
No, there's a cross for every one,
And there's a cross for me.`),new s(`The consecrated cross I'll bear,
Till death shall set me free,
And then go home my crown to wear,
For there's a crown for me.`),new s(`Upon the crystal pavement, down
At Jesus' pierced feet,
With joy I'll cast my golden crown,
And His dear Name repeat.`),new s(`O precious cross! O glorious crown!
O resurrection day!
Ye angels from the stars come down
And bear my soul away.`)],"Ab"),new c(90,"BLESSED BE THE NAME",[new s(`All praise to Him who reigns above
In majesty supreme;
Who gave His Son for man to die,
That He might man redeem.`),new s(`His name above all names shall stand,
Exalted more and more,
At God the Father's own right hand,
Where angel hosts adore.`),new s(`Redeemer, Saviour, Friend of men
Once ruined by the fall;
Thou hast devised salvation's plan,
For thou hast died for all.`),new s(`His name shall be the Counselor,
The mighty Prince of Peace,
Of all earth's kingdoms Conqueror,
Whose reign shall never cease.`)],"Ab",new f(`Blessed be the name, blessed be the name,
Blessed be the name of the Lord;
Blessed be the name, blessed be the name,
Blessed be the name of the Lord.
(Jesus is the Name \u2026)
(Magnify His Name \u2026)
(There's Healing in the Name\u2026)
(Sing glory to His Name\u2026)`)),new c(91,"I\u2019M GOING THROUGH",[new s(`Lord, I have started to walk in the light,
Shining upon me from heaven so bright;
I bade the world and its follies adieu,
I've started in Jesus and I'm going through.`),new s(`O there are many who start in the race,
But with the light refuse to keep pace;
Others accept it because it is new,
But not very many expect to go through`),new s(`I'd rather walk with Jesus alone,
Have for a pillow, like Jacob, a stone;
Living each moment with His face in view,
Than shrink from my pathway and fail to go through.`),new s(`O brother, now will you take up the cross?
Give up the world and count it as dross;
Sell all thou hast and give to the poor,
Then go through with Jesus and those who endure.`)],"Ab",new f(`I'm going through, yes, I'm going through,
I'll pay the price whatever others do,
I'll take the way with the Lord's despised few,
I'm going through, Jesus, I'm going through.`)),new c(92,"SPEAK, MY LORD",[new s(`Hear the Lord of harvest sweetly calling,
\u201CWho will go and work for Me today?
Who will bring to Me the lost and dying?
Who will point them to the narrow way?\u201D`),new s(`When the coal of fire touched the prophet,
Making him as pure as pure can be,
When the voice of God, said \u201CWho'll go for us?\u201D
Then he answered, \u201CHere I am, send me.\u201D`),new s(`Millions now in sin and shame are dying;
Listen to their sad and bitter cry;
Hasten, brother, hasten to the rescue;
Quickly answer, \u201CMaster, here am I.\u201D`),new s(`Soon the time for reaping will be over;
Soon we'll gather for the harvest home;
May the Lord of harvest smile upon us,
May we hear His blessed, \u201CChild, well done.\u201D`)],"G",new f(`Speak, my Lord speak, my Lord,
Speak, and I'll be quick to answer Thee;
Speak, my Lord, speak, my Lord,
Speak, and I will answer, \u201CLord send me.\u201D`)),new c(93,"THE LOVE OF GOD",[new s(`The Love of God is greater far
Than tongue or pen can ever tell;
It goes beyond the highest star,
And reaches to the lowest hell.
The guilty pair, bowed down with care,
God gave His son to win;
His erring child He reconciled,
And pardoned from his sin.`),new s(`When hoary time shall pass away,
And earthly thrones and kingdoms fall;
When men who here refuse to pray,
On rocks and hill and mountains call;
God's love, so sure, shall still endure,
All measureless and strong;
Redeeming grace to Adam's race,
The saints and angels' song.`),new s(`Could we with ink the ocean fill,
And were the skies of parchments made;
Were every stalk on earth a quill,
And every man a scribe by trade;
To write the love of God above
Would drain the ocean dry;
Nor could the scroll contain the whole,
Though stretched from sky to sky.`)],"Eb",new f(`Oh, love of God, how rich and pure!
How measureless and strong!
It shall forevermore endure,
The saints and angels song.`)),new c(94,"THE MEETING IN THE AIR",[new s(`You have heard of little Moses in the bulrush,
You have heard of fearless David and his sling;
You have heard the story told of dreaming Joseph,
And of Jonah and the whale you often sing.
There are many, many others through the Bible,
I should like to meet them all, I do declare!
By and by the Lord will surely let us meet them
At the meeting in the air.`),new s(`Many things will there be missing, in that meeting;
For the mourners bench will have no place at all;
There will never be a sermon preached to sinners,
For the sinner had refused to heed the call.
There will be no mourning over wayward loved ones,
There will be no lonely nights of pleading prayer;
All our burdens and our anguish will be lifted
At the meeting in the air.`),new s(`There the doubters will be missing altogether,
All the skeptics will be absent on that day;
There will be no grumblers present to disturb us,
And the Achans will be busy far away.
There the saints will have His \u201Cseal upon their foreheads,\u201D
Dressed in raiment none but ransomed ones can wear;
All who have the wedding garments will be present
At the meeting in the air.`)],"Ab",new f(`There is going to be a meeting in the air,
In the sweet, sweet by and by;
I am going to meet you, meet you there
In that home beyond the sky;
Such singing you will hear, never heard by mortal ear,
'Twill be glorious, I do declare!
And God's own Son will be the leading One
At the meeting in the air.`)),new c(95,"IT\u2019S DRIPPING WITH BLOOD ",[new s(`The first one to die for this Holy Ghost plan,
Was John the Baptist, but he died like a man;
Then came the Lord Jesus, they crucified Him,
He taught that the Spirit would save men from sin.`),new s(`There was Peter and Paul, and John the divine,
They gave up their lives so this Gospel could shine;
They mingled their blood, like the prophets of old,
So the true Word of God could honest be told.`),new s(`Then they stoned Stephen, he preached against sin,
He made them so angry, they dashed his head in;
But he died in the Spirit, and gave up the ghost,
And went to join others, in that life-giving host.`),new s(`There\u2019s souls under the altar, crying, \u201CHow long?\u201D
For the Lord to punish those who\u2019ve done wrong;
But there\u2019s going to be more who\u2019ll give their life\u2019s blood
For this Holy Ghost Gospel and its crimson flood.`)],"F",new f(`It\u2019s dripping with blood, yes, it\u2019s dripping with blood.
This Holy Ghost Gospel is dripping with blood,
The blood of disciples who died for the Truth,
This Holy Ghost Gospel is dripping with blood.`)),new c(96,"HOLY, HOLY, HOLY, LORD OF HOSTS",[new s(`Holy, Holy, Holy, Lord God of hosts.
Heaven and earth are full of Thee,
Heaven and earth are praising Thee,
O Lord Most High.`)],"F")];var oy=[new c(97,"THIS OLD WORLD CAN NEVER HOLD ME",[new s(`This old world can never hold me,
Any moment I'll be gone,
For I've made my consecration,
And I have the wedding garment on`)],"Ab"),new c(98,"OUR LORD\u2019S RETURN TO EARTH AGAIN",[new s(`I am watching for the coming of the glad
Millennial day,
When our blessed Lord shall come and catch
His waiting Bride away;
Oh! my heart is filled with rapture as I labor,
watch and pray,
For our Lord is coming back to earth again.`),new s(`Jesus' coming back will be the answer to
earth's sorr'wing cry,
For the knowledge of the Lord shall fill the
earth and sea and sky;
God shall take away all sickness and the suff'rer's tears will dry,
When our Saviour shall come back to earth again.`),new s(`Yes, the ransomed of the Lord shall come to
Zion then with joy,
And in all His holy mountain nothing hurts or shall destroy;
Perfect peace shall reign in every heart, and
love without alloy,
After Jesus shall come back to earth again.`),new s(`Then the sin and sorrow, pain and death of
this dark world shall cease,
In a glorious reign with Jesus of a thousand years of peace;
All the earth is groaning, crying for that day of sweet release,
For our Jesus to come back to earth again.`)],"G",new f(`Oh! Our Lord is coming back to earth again,
Yes, our Lord is coming back to earth again,
Satan will be bound a thousand years,
we'll have no tempter then,
After Jesus shall come back to earth again.`)),new c(99,"I SHALL KNOW HIM",[new s(`Standing somewhere in the shadows you'll find Jesus,
He's the One who always cares and understands;
Standing somewhere in the shadows you will find Him,
And you'll know Him by the nail prints in
His hands.`)],"F",new f(`I shall know Him, I shall know Him,
As redeemed by His side I shall stand;
I shall know Him, I shall know Him
By the prints of the nails in His hands.`)),new c(100,"THEN JESUS CAME",[new s(`One sat alone beside the highway begging,
His eyes were blind, the light he could not see;
He clutched his rags and shivered in the shadows,
Then Jesus came and bade his darkness flee.`),new s(`When Jesus comes the tempter's pow'r is broken;
When Jesus comes the tears are wiped away.
He takes the gloom and fills the life with glory,
For all is changed when Jesus comes to stay.`),new s(`Unclean! Unclean! The leper cried in torment,
The deaf, the dumb, in helplessness stood near;
The fever raged, disease had gripped its victim,
Then Jesus came and cast out every fear.`),new s(`So men today have found the Saviour able,
They could not conquer passion, lust and sin;
Their broken hearts had left them sad and lonely,
Then Jesus came and dwelt Himself within.`)],"C",new f(`When Jesus comes the tempter's pow'r is broken;
When Jesus comes the tears are wiped away.
He takes the gloom and fills the life with glory,
For all is changed when Jesus comes to stay.`)),new c(101,"WHEN I SURVEY THE CROSS",[new s(`When I survey the wondrous cross
On which the Prince of glory died,
My richest gain I count but loss,
And pour contempt on all my pride.`),new s(`Forbid it, Lord, that I should boast,
Save in the death of Christ, my God;
All the vain things that charm me most,
I sacrifice them to His blood.`),new s(`See, from His head, His hands His feet,
Sorrow and love flow mingled down;
Did e'er such love and sorrow meet,
Or thorns compose so rich a crown?`),new s(`Were the whole realm of nature mine,
That were a present far too small;
Love so amazing, so divine,
Demands my soul, my life, my all!`)],"F",new f(`I'm going home,
I'm going home,
I'm going home
Never to die, Never to die, Never to die,
I'm going home,
Never to die.`)),new c(102,"THE WATER WAY",[new s(`Long ago the maids drew water
In the evening time, they say,
One day Isaac sent his servant
To stop Rebekah on her way.
\u201CMy master sent me here to tell thee;
See these jewels rich and rare;
Would'st thou not his lovely bride be
In that country over there?\u201D`),new s(`So God's servants come to tell you
Of a Bridegroom in the sky,
Looking for a holy people
To be His bride soon, by and by;
He sends to us refreshing water
In this wondrous latter day;
They who really will be raptured
Must go thru the water way.`),new s(`Are you on your way to ruin,
Cumbered with a load of care?
See the quick work God is doing
That so His glory you may share.
At last the faith He once delivered
To the saints, is ours today;
To get in the Church triumphant
You must go the water way.`),new s(`Have you looked and often wondered
Why the power is slack today?
Will you stay in that back number
And go on in the man-made way?
O saints who never have been buried
In the blessed name of God,
Let the truth now sanctify you;
It's the way apostles trod.`)],"F",new f(`It shall be light in the evening time,
The path to glory you will surely find;
Thru the water way, It is the light today,
Buried in the precious Name of Jesus Christ.
Young and old repent of all your sin,
The Holy Ghost will surely enter in;
The evening Light has come,
It is a fact that God and Christ are one.`)),new c(103,"DON\u2019T FORGET PRAYER",[new s(`Don\u2019t forget the family prayer,
Jesus wants to meet you there;
He will take your every care,
Oh, don't forget the family prayer.`)],"F"),new c(104,"STAND ON THAT ROCK",[new s(`Crying \u201CHoly\u201D unto the Lord,
Crying \u201CHoly\u201D unto the Lord,
If I could, I surely would
Stand on that rock where Moses stood.`)],"F"),new c(105,"OH, THAT MAN FROM GALILEE",[new s(`In a manger long ago, I know it's really so,
A Babe was born to save men from their sin.
John saw Him on the shore, the Lamb
forevermore,
Oh, Christ, the Crucified of Calvary.`),new s(`The publican went to pray in the temple there one day,
He cried, \u201CO Lord, be merciful to me!\u201D
He was forgiven of every sin, and a deep peace placed within;
He said, \u201CCome see this Man from Galilee.\u201D`),new s(`The lame was made to walk, the dumb was made to talk,
That power was spoken with love upon the sea;
The blind was made to see, I know it could only be
The mercy of that Man from Galilee.`),new s(`Nicodemus came by night, to know the way of right,
He asked the Son of man what must he do.
These words He said to him, \u201CYe must be born again,\u201D
By the Spirit of that Man from Galilee.`),new s(`The woman at the well, He all her sins did tell,
How five husbands she had at that time.
She was forgiven of every sin, and a deep peace came within;
Then she cried, \u201CCome see that Man from Galilee!\u201D`)],"F",new f(`Oh, I love that Man from Galilee, from Galilee,
For He's done so very much for me.
He's forgiven all my sins, placed the Holy Ghost within;
Oh, I love, I love that Man from Galilee.`)),new c(106,"REACH OUT, TOUCH THE LORD",[new s(`Reach out and touch the Lord as He passes by,
You'll find He's not too busy to hear your heart's cry;
He's passing by this moment, your needs to supply,
Reach out and touch the Lord as He goes by.`)],"F"),new c(107,"IN THAT CITY, LAMB IS LIGHT",[new s(`There's a country far beyond the starry Sky,
There's a city where there never comes a night;
If we're faithful we shall go there by and by,
It's the city where the Lamb is the light.`),new s(`Here we have our days of sunshine, but we know
That the sun which shines upon us now so bright
Will be changed to clouds and rain until we go
To the city where the Lamb is the light.`),new s(`There the flowers bloom forever and the day
Shall be one eternal day without a night;
And our tears shall be forever wiped away,
In that city where the Lamb is the light.`),new s(`Here we have our disappointments all the while,
And our fondest hopes but meet with bitter blight;
Though by night we weep, the morning brings a smile,
In that city where the Lamb is the light.`),new s(`Then let sunlight fade, let twilight bring its gloom,
Not a shadow can my blissful soul affright;
For I know that up in heaven there is room,
In that city where the Lamb is the light.`)],"Bb",new f(`In that city where the Lamb is the light
The city where there cometh no night;
I've a mansion over there, and when free from toil and care,
I am going where the Lamb is the light.`)),new c(108,"JESUS SET ME FREE",[new s(`I'm so glad Jesus set me free,
I'm so glad Jesus set me free,
I'm so glad Jesus set me free,
Glory, hallelujah, Jesus set me free.`),new s(`(I'm so glad Jesus lifted me \u2026)
(I'm on my way to Heaven, shouting victory \u2026)
(Satan had me bound, but Jesus set me free \u2026)`)],"Ab"),new c(109,"WHEN I TAKE MY VACATION",[new s(`Here So many are taking vacation,
To the mountains, the lakes or the sea;
Where they rest from their cares and their worries,
What a wonderful time that must be!
But it seems not my lot to be like them,
I must toil thru the heat and the cold,
Seeking out the lost sheep on the mountains,
Bringing wanderers back to the fold.`),new s(`Now some day I shall take my vacation
To the city John tells us about;
With its foundation walls all so precious.
Where from gladness of heart I shall shout!
O no sights ever witnessed by mortals.
Can compare with the glories up there
I shall spend my vacation with Jesus,
In the place He went on to prepare.`),new s(`There the weather will always be perfect
Not a cloud shall sweep over the sky;
And no earthquakes or cyclones shall threaten,
In the land of the \u201CSweet by and by\u201D;
Soon there's going to be an excursion,
I am booked for a ride in the air,
You're invited to share my vacation,
And the feast with our Bridegroom to share.`),new s(`Here on earth when we take our vacation,
We return to our homes by and by;
When I take my vacation in heaven,
In those mansions of gold in the sky,
I shall dwell with my Savior forever,
With Him sit on His Heavenly Throne;
All the days will be one, long vacation,
When my Savior takes me to His home.`)],"Bb",new f(`When I take my vacation in heaven,
What a wonderful time that will be;
Hearing concerts by the heavenly Chorus,
And the face of my Saviour I'll see;
Sitting down by the banks of the river;
\u201ENeath the shade of the ever green tree,
I shall rest from my burdens forever,
Won't you spend your vacation with me.`)),new c(110,"OH, IT IS JESUS",[new s(`Oh, it is Jesus! Yes, it is Jesus!
It is Jesus in my soul;
For I have touched the hem of His garment,
And His blood has made me whole.`),new s(`I tried as much as I could, but it seems like
nothing could Do me any good when I heard of Jesus,
He was passing by then I decided to give Him my heart.`)],"C"),new c(111,"WHAT THEN?",[new s(`When the great plants of our cities have turned
out their last finished work,
When our merchants have sold their last yard of
goods and dismissed the last tired clerk,
When our banks have raked in their last dollar
and paid the last dividends,
When the Judge of the earth says, \u201Cclosed for the
night,\u201D and asks for a balance \u2013
What Then?`),new s(`When the choir has sung its last song and the
preacher has said his last prayer,
When the people have heard their last sermon and
the sound has died out in the air,
When the Bible lies closed on the altar and the
pews are all empty of folks,
And each one stands facing his record and the
great Book is opened \u2013 What Then?`),new s(`When the actors have played their last drama and
the mimic has made his last fun,
When the film has flashed its last film and the
billboard displayed its last run,
When the crowds seeking pleasure have vanished
and all the liquor stores and beer joints have been closed,
And the salesman sold his last drink and gone out
in the darkness,
When the trumpet of ages is sounded and we
stand before Him \u2013 What Then?`),new s(`When the bugle call sinks into silence and the
long marching columns stand still,
And the captain repeat his last orders,
And the flag has been hauled from the mast,
And the wounded afield checked in and a world
That rejects its Saviour is asked for a reason \u2013 What Then?`)],"F",new f(`What then? What then?
When the great Book is opened, what then?
When the ones that's rejecting this Message tonight,
Will be asked to give a reason \u2013 What Then?`)),new c(112,"FAITH IN JEHOVAH",[new s(`Faith in the Father, faith in the Son,
Faith in the Holy Ghost, these three are One;
Demons will tremble, and sinners awake;
Faith in Jehovah makes anything shake.`)],"F"),new c(113,"LEAVE IT THERE",[new s(`If the world from you withhold of its silver
And its gold,
And you have to get along with meager fare,
Just remember, in His Word, how He feeds
the little bird;
Take your burden to the Lord and leave it there.`),new s(`If your body suffers pain and your health you can't regain,
And your soul is almost sinking in despair,
Jesus knows the pain you feel, He can save and He can heal;
Take your burdens to the Lord and leave it there.`),new s(`When your enemies assail and your heart begins to fail,
Don't forget that God in Heaven answers prayer;
He will make a way for you and will lead you safely through;
Take your burden to the Lord and leave it there.`),new s(`When your youthful days are gone and old age is stealing on,
And your body bends beneath the weight of care;
He will never leave you then, He'll go with you to the end;
Take your burden to the Lord and leave it there.`)],"G",new f(`Leave it there, leave it there,
Take your burden to the Lord and leave it there;
If you trust and never doubt, He will surely
bring you out;
Take your burden to the Lord and leave it there.`)),new c(114,"I CAN, I WILL, I DO BELIEVE",[new s(`I can, I will, I do believe;
I can, I will, I do believe;
I can, I will, I do believe
That Jesus heals me now.`),new s("(I'm trusting only in the Lord \u2026)")],"Ab"),new c(115,"ISN\u2019T HE WONDERFUL!",[new s(`Isn\u2019t He wonderful, wonderful, Wonderful?
Isn't Jesus my Lord wonderful?
Eyes have seen, ears have heard
What's recorded in God's word;
Isn't Jesus my Lord wonderful?`)],"Bb"),new c(116,"THE LIFEBOAT",[new s(`We\u2019re floating down the stream of time,
We have not long to stay;
The stormy clouds of darkness
Will turn to brightest day,
Then let us all take courage,
For we're not left alone;
The lifeboat soon is coming
To gather the Jewels home.`),new s(`Sometimes the Devil tempts me,
And says it's all in vain
To try to live a Christian life
And walk in Jesus' name;
But then we hear the Master say,
\u201CI'll lend you a helping hand,
And if you'll only trust Me,
I'll guide you to that land.\u201D`),new s(`The lifeboat soon is coming,
By eyes of faith I see
As she sweeps through the waters
To rescue you and me,
And land us safely in the port
With friends we love so dear.
\u201CGet ready,\u201D cries the Captain;
\u201COh, look, she's almost here.\u201D`),new s(`Oh, now's the time to get on board,
While she is passing by;
But if you stand and wait too long,
You shall forever die;
The fare is paid for one and all,
The captain bids you come,
And get on board the lifeboat,
She'll carry you safely home.`)],"G",new f(`Then cheer, my brother, cheer,
Our trials will soon be o'er,
Our loved ones we shall meet, shall meet,
Upon the golden shore.
We're pilgrims and we're strangers here,
We're seeking a city to come,
The lifeboat soon is coming,
To gather the Jewels home.`)),new c(117,"IT SHALL FLOW LIKE A RIVER",[new s(`It shall flow like a river, It shall fall like the rain,
It shall rise as the dew in morning o'er the plain;
For the knowledge of the Lord shall fill all the earth
When the Spirit of the Lord shall fall.`),new s(`Flow, river, flow; flow, river, flow;
Flow out through the nations wherever man may go;
Cause life to spring forth, that all men may know
That You're the river of the Spirit;
Oh, flow, river, flow.`)],"C"),new c(118,"THE GREAT JUDGMENT",[new s(`I dreamed that the great judgment morning
Had dawned, and the trumpet had blown;
I dreamed that the nations had gathered
To judgment before the white throne;
From the throne came a bright shining angel,
And stood on the land and the sea,
And swore with his hand raised to heaven,
That time was no longer to be.`),new s(`The rich man was there, but his money
Had melted and vanished away;
A pauper he stood in the judgment,
His debts were too heavy to pay;
The great man was there, but his greatness,
When death came, was left far behind.
The angel that opened the records,
Not a trace of his greatness could find.`),new s(`The widow was there with the orphans,
God heard and remembered their cries;
No sorrow in heaven forever,
God wiped all the tears from their eyes;
The gambler was there and the drunkard,
And the man that had sold them the drink,
With the people who gave him the license,
Together in hell they did sink.`),new s(`The moral man came to the judgment,
But his self-righteous rags would do not;
The men who had crucified Jesus
Had passed off as moral men too;
The soul that had put off salvation,
\u201CNot tonight; I'll get saved by and by,
No time now to think of religion!\u201D
At last they had found time to die.`)],"C",new f(`And O, what a weeping and wailing,
As the lost were told of their fate;
They cried for the rocks and the mountains,
They prayed, but their prayers were too late.`)),new c(119,"I HAVE CROSSED RIVEN VEIL",[new s(`I've believed the true report,
Hallelujah to the Lamb,
I have passed the outer court, O glory be to God,
I am all on Jesus' side on the altar sanctified,
To the world and sin I've died,
Hallelujah to the Lamb.`),new s(`I'm a king and priest to God,
Hallelujah to the Lamb,
By the cleansing of the Blood,
O glory be to God,
By the Spirit's pow'r and Light,
I am living day and night,
In the holiest place so bright,
Hallelujah to the Lamb.`),new s(`I have passed the outer veil,
Hallelujah to the Lamb,
Which did once God's light conceal,
O glory be to God,
But the blood has brought me in,
To God's holiness so clean,
Where there's death to self and sin.
Hallelujah to the Lamb.`),new s(`I'm within the holiest place,
Hallelujah to the Lamb,
I have passed the inner veil,
O glory be to God,
By the power of the blood,
I am sanctified to God,
Now the Lord is my abode,
Hallelujah to the Lamb.`)],"Ab",new f(`I have crossed the riven veil
Where the glory never fails,
Hallelujah, Hallelujah;
I have crossed the riven veil
Where the glory never fails,
For I'm living in the presence of the King.`)),new c(120,"ROOM AT THE FOUNTAIN",[new s(`I heard my loving Savior say,
There's room at the fountain for thee,
Come, wash the stains of sin away,
There's room at the fountain for thee.`),new s(`I came to Him, my sins confessed,
There was room at the fountain for me;
When I gave up, my heart was blest,
There's room at the fountain for thee.`),new s(`I plunged beneath the crimson tide,
There was room at the fountain for me;
And now by faith am sanctified,
There's room at the fountain for thee.`),new s(`I found the crimson stream I know,
There was room at the fountain for me;
His blood has washed me white as snow,
There's room at the fountain for thee.`),new s(`He cleansed my heart from inbred sin,
There was room at the fountain for me;
And now He keeps me pure within,
There's room at the fountain for thee.`),new s(`I'll praise Him while He gives me breath,
There was room at the fountain for me;
He saved me from an awful death,
There's room at the fountain for thee.`),new s(`His blood was shed but once for all,
There was room at the fountain for me;
Oh, don't reject sweet Mercy's call,
There's room at the fountain for thee.`),new s(`We'll sing with all the saints above,
There was room at the fountain for me;
And praise Him for redeeming love,
There's room at the fountain for thee.`)],"Eb",new f(`Room, room, yes, there is room,
Room at the fountain for thee;
Room, room, yes, there is room,
There's room at the fountain for thee.`)),new c(121,"COME AND GO WITH ME",[new s(`Come and go with me to my Father's House,
To my Father's House, to my Father's House.
Come and go with me to my Father's House,
Where there's peace, peace, peace.`),new s(`(Jesus will be there\u2026)
(There'll be no sorrow there)`)],"Ab"),new c(122,"JUST ANOTHER TOUCH, LORD",[new s(`Just another touch, Lord, from You,
To help in hard trials I go through;
Though dark may be the night, You've
sent a ray of light,
When I get a touch, Lord, from You.`)],"Eb"),new c(123,"THE PEARLY WHITE CITY",[new s(`There's a holy and beautiful city,
Whose builder and ruler is God.
John saw it descending from heaven
When Patmos, in exile, he trod;
Its high, massive wall is of jasper,
The city itself is pure gold;
And when my frail tent here is folded,
Mine eyes shall its glory behold.`),new s(`No sin is allowed in that city,
And nothing defiling nor mean;
No pain and no sickness can enter,
No crape on the doorknob is seen;
Earth's sorrows and cares are forgotten,
No tempter is there to annoy;
No parting words ever are spoken,
There's nothing to hurt and destroy.`),new s(`No heartaches are known in that city,
No tears ever moisten the eye,
There's no disappointment in heaven,
No envy and strife in the sky;
The saints are all sanctified wholly,
They live in sweet harmony there;
My heart is now set on that city,
And some day its blessings I'll share.`),new s(`My loved ones are gathering yonder,
My friends, too, are passing away;
And soon I shall join their bright number,
And dwell in eternity's day;
They're safe now in glory with Jesus,
Their trials and battles are past;
They overcome sin and the tempter,
They've reached that fair city at last.`)],"Eb",new f(`In that bright city, pearly white city,
I have a mansion, a harp, and a crown;
Now I am watching, waiting and longing,
For the white city John saw coming down.`)),new c(124,"JUST A CLOSER WALK",[new s(`I am weak but Thou art strong,
Jesus keep me from all wrong;
I'll be satisfied as long,
As I walk let me walk close to Thee.`),new s(`Thru this world of toil and snares,
If I falter, Lord, who cares?
Who with me my burden shares?
None but Thee, dear Lord, none but Thee.`),new s(`When my feeble life is o'er,
Time for me will be no more;
Guide me gently, safely o'er,
To Thy kingdom shore, to Thy shore.`)],"C",new f(`Just a closer walk with Thee,
Grant it, Jesus, is my plea;
Daily walking close to Thee,
Let it be, dear Lord, let it be.`)),new c(125,"THE MESSAGE OF HIS COMING",[new s(`We\u2019re looking for His coming, in the clouds of heaven,
Coming back to earth to catch away His own;
Then may we all be ready, when midnight cry is given,
To go and reign with Christ on His throne.`),new s(`We're longing for the glory that awaits the faithful,
Who shall overcome, and every conflict win;
Press ever bravely onward, the prize is life eternal
To all who win the fight over sin.`),new s(`We're praying of the advent of our blessed Saviour,
Who has promised life to all who trust His grace;
His coming now is pending, the message being given,
And soon we'll see our Lord face to face.`),new s(`We see the signs appearing of His blessed coming,
Lo, behold the fig leaves now becoming green;
The gospel of His kingdom has gone to every nation;
That we are near the end can be seen.`)],"C",new f(`Gladly may we herald the message of His blessed appearing,
Soon He's coming in glory, tell to one and all;
Then awake, ye saints of the Lord, why slumber when the end is nearing,
But get ready for the final call.`)),new c(126,"THE SHEEP OF HIS PASTURE",[new s(`The sheep of His pasture have gathered
To hear what the Shepherd would say,
His voice like the sound of slow waters,
Came rippling through vessels of clay.`),new s(`'Tis the voice that brought forth creation
And set all the stars in array,
And speaks words of Life and of wisdom,
In the midst of His people today.`),new s(`Through prophets, by precious Blood purchased,
Cleansed and surrendered and filled.
And set in the Body for service,
As the Head of the Body hath willed.`)],"F"),new c(127,"ARE YOU WASHED IN BLOOD",[new s(`Have you been to Jesus for the cleansing pow'r?
Are you washed in the blood of the Lamb?
Are you fully trusting in His grace this hour?
Are you washed in the blood of the Lamb?`),new s(`Are you walking daily by the Saviour's side?
Are you washed in the blood of the Lamb?
Do you rest each moment in the Crucified?
Are you washed in the blood of the Lamb?`),new s(`When the Bridegroom cometh, will your robes be white,
Pure and white in the blood of the Lamb?
Will your soul be ready for the mansions bright
And be washed in the blood of the Lamb?`),new s(`Lay aside the garments that are stained with sin,
And be washed in the blood of the Lamb.
There's a fountain flowing for the soul unclean,
Oh, be washed in the blood of the Lamb.`)],"Ab",new f(`Are you washed in the blood,
In the soul-cleansing blood of the Lamb?
Are your garments spotless? Are they
white as snow?
Are you washed in the blood of the Lamb?`)),new c(128,"JESUS LOVES ME",[new s(`Jesus loves me! This I know,
For the Bible tells me so;
Little ones to Him belong,
They are weak but He is strong.`),new s(`Jesus loves me! He who died,
Heaven's gates to open wide;
He will wash away my sin,
Let His little child come in.`),new s(`Jesus loves me, this I know,
As he loved so long ago;
Taking children on his knee,
Saying, "Let them come to me."`),new s(`Jesus loves me he will stay,
Close beside me all the way;
Thou hast bled and died for me,
I will henceforth live for thee.`)],"Eb",new f(`Yes, Jesus loves me,
Yes, Jesus loves me,
Yes, Jesus loves me,
The Bible tells me so.`)),new c(129,"BAPTIZED INTO THE BODY",[new s(`Have you been baptized into the Body?
Baptized with the Holy Ghost;
There is but one way to enter in it,
Just as they did on Pentecost.`),new s(`There is but one Church, Bride or Body,
And into it we're all baptized;
By the one, true, promised Holy Spirit;
Though by the world we're all despised.`),new s(`Every creed has claimed to the Body,
But the \u201Cplumb line\u201D proved untrue
All their dreams, for God has so determined
To bring His Son's true Bride to view.`),new s(`Many thought that they were in the Body,
'till the Holy Ghost had come;
When the Word of God was opened to them,
They entered in, and yet there's room.`),new s(`Those who died before the Holy Spirit
Came upon us from on high,
May, by faith with Saints of old departed,
Arise to meet Him in the sky.`),new s(`When the Bridegroom comes, will you be ready;
And your vessel all filled and bright?
You will be among the foolish virgins
If you do not walk in the light.`)],"G",new f(`Are you in the Church triumphant?
Are you in the Saviour's Bride?
Come and be baptized into the Body,
And forevermore abide.`)),new c(130,"THIS IS LIKE HEAVEN TO ME",[new s(`WE find many people who can't understand
Why we are so happy and free;
We've crossed over Jordan to Canaan's fair land
And this is like Heaven to me`),new s(`Oh, when I get happy, I sing and I shout,
The devil don't believe it, I see;
But I'm filled with the Spirit, there isn't a doubt,
And that's what's the matter with me.`)],"F",new f(`Oh, this is like Heaven to me (Praise God!)
Yes! This is like Heaven to me;
I've crossed over Jordan to Canaan's fair land,
And this is like Heaven to me.`)),new c(131,"WHAT WOULD YOU EXCHANGE",[new s(`Brother a-far from the Saviour today,
Risking your soul for the things that decay,
Oh, if today God should call it away,
What would you give in exchange for your soul?`),new s(`Mercy is calling you, won't you give heed?
Must the Saviour still tenderly plead?
Risk not your soul, it is precious indeed;
What would you give in exchange for your soul?`),new s(`More than the silver and gold of the earth,
More than all jewels thy spirit is worth!
God, the Creator, has given it birth!
What would you give in exchange for your soul?`),new s(`If, when you stand at the bar by and by,
When you are weighed in the balance on high,
You should be sentenced forever to die,
What would you give in exchange for your soul?`)],"G",new f(`What would you give? What would you give?
What would you give in exchange for your soul?
Oh, if today God should call it away,
What would you give in exchange for your soul?`)),new c(132,"A WONDERFUL TIME",[new s(`A Wonderful time is just ahead,
The Lord Whom we love and own
Will open the gates of gloryland
Revealing His glory throne.`),new s(`A wonderful time is just ahead,
Our conflicts and trials passed;
Our wilderness journey at an end,
Safe home everyone at last.`),new s(`A wonderful time is just ahead,
The groans of creation cease;
And all that is held in bondage now
The Lord will that day release.`)],"Bb",new f(`A wonderful time for you,
A wonderful time for me;
If we are prepared to meet Jesus the King,
A wonderful time it will be.`)),new c(133,"WHEN HE REACHED DOWN",[new s(""),new s(""),new s(""),new s(""),new s("")],"C",new f("")),new c(134,"BRING THEM IN",[new s(`Hark! 'tis the Shepherd's voice I hear,
Out in the desert dark and drear,
Calling the sheep who've gone astray,
Far from the Shepherd's fold away.`),new s(`Who'll go and help this Shepherd kind,
Help Him the wand'ring ones to find?
Who'll bring the lost ones to the fold,
Where they'll be sheltered from the cold?`),new s(`Out in the desert hear their cry,
Out on the mountains wild and high;
Hark! 'tis the Master speaks to thee,
\u201CGo find My sheep where'er they be.\u201D`)],"Ab",new f(`Bring them in, bring them in,
Bring them in from the fields of sin;
Bring them in, bring them in,
Bring the wand'ring ones to Jesus.`)),new c(135,"HOW GREAT THOU ART",[new s(`O Lord my God! When I in awesome wonder,
Consider all the worlds Thy hands have made;
I see the stars, I hear the rolling thunder;
Thy pow'r throughout the universe displayed.`),new s(`When through the woods and forest glades I wander
And hear the birds sing sweetly in the trees;
When I look down from lofty mountain grandeur
And hear the brook and feel the gentle breeze.`),new s(`And when I think that God, His Son not sparing,
Sent Him to die, I scarce can take it in;
That on the cross, my burden gladly bearing,
He bled and died to take away my sin.`),new s(`When Christ shall come with shout of acclamation
And take me home, what joy shall fill my heart!
Then I shall bow in humble adoration
And there proclaim, my God, how great Thou art!`)],"Bb",new f(`O Lord my God! When I in awesome wonder,
Consider all the worlds Thy hands have made;
I see the stars, I hear the rolling thunder;
Thy pow'r throughout the universe displayed.`)),new c(136,"OLD\u2013TIME POWER",[new s(`They were in an upper chamber,
They were all with one accord,
When the Holy Ghost descended
As was promised by our Lord.`),new s(`Yes, this power from heaven descended
With the sound of rushing wind;
Tongues of fire came down upon them,
As the Lord said He would send.`),new s(`Yes, this power from heaven descended
With the sound of rushing wind;
Tongues of fire came down upon them,
As the Lord said He would send.`)],"F",new f(`Oh Lord, send the power just now,
Oh Lord, send the power just now;
Oh Lord, send the power just now
And baptize every one.`)),new c(137,"THERE IS POWER IN BLOOD",[new s(`Would you be free from your burden of sin?
There's power in the blood, power in the blood;
Would you o'er evil a victory win?
There's wonderful power in the blood.`),new s(`Would you be free from your passion and pride?
There's power in the blood, power in the blood;
Come for a cleansing to Calvary's tide,
There's wonderful power in the blood.`),new s(`Would you be whiter, much whiter than snow?
There's power in the blood, power in the blood;
Sin's stains are lost in its life \u2013 giving flow,
There's wonderful power in the blood.`),new s(`Would you do service for Jesus your King?
There's power in the blood, power in the blood;
Would you live daily, His praises to sing?
There's wonderful power in the blood.`)],"Bb",new f(`There is power, power, wonder \u2013 working power
In the blood of the Lamb,
There is power, power, wonder \u2013 working power,
In the precious blood of the Lamb.`)),new c(138,"THE SOLID ROCK",[new s(`My hope is built on nothing less
Than Jesus' blood and righteousness;
I dare not trust the sweetest frame;
But wholly lean on Jesus' Name.`),new s(`When darkness seems to hide His face,
I rest on His unchanging grace;
In every high and stormy gale,
My anchor holds within the veil.`),new s(`His oath, His covenant, His blood,
Support me in the whelming flood;
When all around my soul gives way,
He then is all my hope and stay.`),new s(`When He shall come with trumpet sound,
Oh, may I then in Him be found;
Dressed in his righteousness alone,
Faultless to stand before the throne.`)],"G",new f(`On Christ, the solid Rock, I stand;
All other ground is sinking sand,
All other ground is sinking sand.`)),new c(139,"HE ABIDES",[new s(`I'm rejoicing night and day,
As I walk the pilgrim way,
For the hand of God in all my life I see,
And the reason of my bliss,
Yes, the secret all is this;
That the Comforter abides with me.`),new s(`Once my heart was full of sin,
Once I had no peace within,
Till I heard how Jesus died upon the tree;
Then I fell down at His feet,
And there came a peace so sweet,
Now the Comforter abides with me.`),new s(`He is with me everywhere,
And He knows my every care,
I'm as happy as a bird and just as free;
For the Spirit has control, Jesus satisfies my soul,
Since the Comforter abides with me!`),new s(`There's no thirsting for the things
Of the world, they've taken wings;
Long ago I gave them up, and instantly
All my night was turned to day.
All my burdens rolled away,
Now the Comforter abides with me!`)],"Ab",new f(`He abides, He abides,
Hallelujah, He abides with me!
I'm rejoicing night and day,
As I walk the narrow way,
For the Comforter abides with me.`)),new c(140,"REDEEMED",[new s(`Redeemed, how I love to proclaim it!
Redeemed by the blood of the Lamb;
Redeemed through His infinite mercy,
His child, and forever, I am.`),new s(`Redeemed and so happy in Jesus,
No language my rapture can tell;
I know that the light of His presence
With me doth continually dwell.`),new s(`I think of my blessed Redeemer,
I think of Him all the day long;
I sing, for I cannot be silent;
His love is the theme of my song.`),new s(`I know I shall see in His beauty
The King in whose law I delight;
Who lovingly guardeth my footsteps,
And giveth me songs in the night.`)],"Ab",new f(`Redeemed, Redeemed,
Redeemed by the blood of the Lamb;
Redeemed, Redeemed,
His child, and forever, I am.`)),new c(141,"NOTHING BUT THE BLOOD",[new s(`What can wash away my sin?
Nothing but the blood of Jesus;
What can make me whole again?
Nothing but the blood of Jesus.`),new s(`For my cleansing this I see,
Nothing but the blood of Jesus,
For my pardon this my plea,
Nothing but the blood of Jesus.`),new s(`Nothing can for sin atone,
Nothing but the blood of Jesus;
Naught of good that I have done,
Nothing but the blood of Jesus.`),new s(`This is all my hope and peace,
Nothing but the blood of Jesus;
This is all my righteousness,
Nothing but the blood of Jesus.`),new s(`Now by this I'll overcome,
Nothing but the blood of Jesus;
Now by this I'll reach my home,
Nothing but the blood of Jesus`),new s(`Glory! glory! thus I sing,
Nothing but the blood of Jesus;
All my praise for this I bring,
Nothing but the blood of Jesus.`)],"G",new f(`Oh, Precious is the flow
That makes me white as snow;
No other fount I know,
Nothing but the blood of Jesus.`)),new c(142,"JESUS, THE LIGHT OF THE WORLD",[new s(`All ye saints of light proclaim,
Jesus, the light of the world;
Life and mercy in His name,
Jesus, the light of the world.`),new s(`Hear the Savior's earnest call,
Jesus, the light of the world;
Send the Gospel truth to all,
Jesus, the light of the world.`),new s(`Why not seek Him then today,
Jesus, the light of the world;
Go with truth the narrow way,
Jesus, the light of the world.`),new s(`Come, confess Him as your King,
Jesus, the light of the world;
Then the bells of heaven will ring,
Jesus, the light of the world.`)],"Ab",new f(`We'll walk in the light, beautiful light,
Come where the dewdrops of mercy are bright;
Shine all around us by day and by night,
Jesus, the light of the world.`)),new c(143,"WHEN WE SEE CHRIST",[new s(`Oft times the day seems long, our trials hard to bear;
We're tempted to complain, to murmur and despair;
But Christ will soon appear, to catch His bride away,
All tears forever over, in God's eternal day.`),new s(`Sometimes the sky looks dark, with not a ray of light;
We're tossed and driven on, no human help in sight;
But there is One in heaven, who knows
our deepest care,
Let Jesus solve your problem, just go to
Him in prayer.`),new s(`Life's day will soon be o'er, all storms
forever past;
We'll cross the great divide, to glory safe at last;
We'll share the joys of heaven, a harp, a
home, a crown;
The tempter will be banished, we'll lay
our burden down.`)],"Eb",new f(`It will be worth it all, when we see Jesus;
Life's trials will seem so small, when we see Christ;
One glimpse of His dear face, all sorrow will erase,
So bravely run the race till we see Christ.`)),new c(144,"BLESSED BE THE FOUNTAIN OF BLOOD",[new s(`Blessed be the fountain of blood,
To a world of sinners revealed;
Blessed be the dear Son of God;
Only by His stripes we are healed.
Though I've wandered far from His fold,
Bringing to my heart pain and woe,
Wash me in the blood of the Lamb,
And I shall be whiter than snow.`),new s(`Father, I have wandered form Thee,
Often has my heart gone astray;
Crimson do my sins seem to me
Water cannot wash them away.
Jesus, to that Fountain of Thine,
Leaning on Thy promise, I go;
Cleanse me by Thy washing divine,
And I shall be whiter than snow.`)],"Eb",new f(`Whiter than snow!
Whiter than snow!
Wash me in the blood of the Lamb,
And I shall be whiter than snow.`))];var ry=[new c(145,"ALL HAIL JESUS\u2019 NAME",[new s(`All hail the pow'r of Jesus' name!
Let angels prostrate fall;
Bring forth the royal diadem,
And crown Him Lord of all;
Bring forth the royal diadem,
And crown Him Lord of all.`),new s(`Ye seed of Israel's chosen race,
Ye ransomed from the fall;
Hail Him, who saves you by His grace,
And crown Him Lord of all;
Hail Him, who saves you by His grace,
And crown Him Lord of all.`),new s(`Sinners, whose love can ne'er forget
The wormwood and the gall,
Go, spread your trophies at His feet,
And crown Him Lord of all;
Go, spread your trophies at His feet,
And crown Him Lord of all.`),new s(`Let every kindred, every tribe,
On this terrestrial ball,
To Him all majesty ascribe,
And crown Him Lord of all;
To Him all majesty ascribe,
And crown Him Lord of all.`),new s(`O that with yonder sacred throng
We at His feet may fall;
We'll join the everlasting song,
And crown Him Lord of all;
We'll join the everlasting song,
And crown Him Lord of all.`)],"G"),new c(146,"AT THE CROSS",[new s(`Alas! And did my Saviour bleed
And did my Sovereign die?
Would He devote that sacred head
For such a worm as I?`),new s(`Was it for crimes that I have done,
He groaned upon the tree?
Amazing pity, grace unknown,
And love beyond degree!`),new s(`Well might the sun in darkness hide,
And shut his glories in,
When Christ, the mighty Maker, died
For man, the creature's sin.`),new s(`But drops of grief can ne'er repay
The debt of love I owe;
Here, Lord, I give myself away,
'tis all that I can do!`)],"Eb",new f(`At the cross, at the cross where I first saw the light,
And the burden of my heart rolled away,
It was there by faith I received my sight,
And now I am happy all the day!`)),new c(147,"THE GREAT I AM",[new s(`I AM that spoke to Moses in the burning bush of fire,
I AM the God of Abraham, the Bright and Morning Star.
I AM the Rose of Sharon, from beginning whence I came;
I AM the whole creation, and Jesus is My Name.`),new s(`I AM was before old Abraham, \u201CHe
rejoiced to see My day.\u201D
When Jesus spoke these precious words,
they stoned Him right away.
\u201CWhy do you stone Me?\u201D Jesus said, in a
holy, sweet command,
\u201CBecause you say you're the great I AM,
we believe you're just a man\u201D`),new s(`It was on the Day of Pentecost, oh, how the fire did fall;
The Holy Ghost descended and filled them one and all.
Then Peter told the multitude, \u201CRepent of all your sins.\u201D
About three thousand souls were buried in
Jesus' precious Name.`),new s(""),new s("")],"Ab",new f(`Oh, who do you say I am, and whence do you say I came,
Do you know the Father, and can you tell His Name?
In Jesus dwells the fullness of the Godhead, don't you see;
Jesus is the great I AM, and the Lord of lords is He.`)),new c(148,"ALMOST PERSUADED",[new s(`\u201CAlmost persuaded\u201D now to believe;
\u201CAlmost persuaded\u201D Christ to receive;
Seems now some soul to say, \u201CGo, Spirit, go Thy way;
Some more convenient day, on Thee I'll call.\u201D`),new s(`\u201CAlmost persuaded,\u201D come, come today;
\u201CAlmost persuaded,\u201D turn not away;
Jesus invites you here, Angels are ling'ring near,
Prayers rise from hearts so dear;
O wand'rer, come.`),new s(`\u201CAlmost persuaded,\u201D harvest is past!
\u201CAlmost persuaded,\u201D doom comes at last!
\u201CAlmost\u201D cannot avail, \u201CAlmost\u201D is but to fail!
Sad, sad, that bitter wail: \u201CAlmost \u2013 but lost!\u201D`)],"G"),new c(149,"NO DISAPPOINTMENT",[new s(`There\u2019s no disappointment in heaven,
No weariness, sorrow or pain;
No hearts that are bleeding and broken,
No song with a minor refrain.
The clouds of our earthly horizon
Will never appear in the sky,
For all will be sunshine and gladness,
With never a sob nor a sigh.`),new s(`I'm bound for that beautiful city
My Lord has prepared for His own;
Where all the redeemed of all ages
Sing \u201CGlory!\u201D around the white throne;
Sometimes I grow homesick for heaven,
And the glories I there shall behold:
What a joy that will be when my Saviour I see,
In that beautiful city of gold!`),new s(`There'll never be crape on the doorknob,
No funeral train in the sky;
No graves on the hillsides of glory,
For there we shall nevermore die.
The old will be young there forever,
Transformed in a moment of time;
Immortal we'll stand in His likeness,
The stars and the sun to outshine.`)],"Eb",new f(`I'm bound for that beautiful city
My Lord has prepared for His own;
Where all the redeemed of all ages
Sing \u201CGlory!\u201D around the white throne;
Sometimes I grow homesick for heaven,
And the glories I there shall behold:
What a joy that will be when my Saviour I see,
In that beautiful city of gold!`)),new c(150,"HAPPY DAY",[new s(`O happy day, that fixed my choice
On Thee, my Saviour and my God!
Well may this glowing heart rejoice,
And tell its raptures all abroad.`),new s(`O happy bond, that seals my vows
To Him who merits all my love!
Let cheerful anthems fill His house,
While to that sacred shrine I move.`),new s(`'Tis done; the great transaction's done!
I am my Lord's and He is mine;
He drew me, and I followed on,
Charmed to confess the voice divine.`),new s(`High heav'n, that heard the solemn vow,
That vow renewed shall daily hear,
Till in life's latest hour I bow,
And bless in death a bond so dear.`)],"G",new f(`Happy day, happy day,
When Jesus washed my sins away!
He taught me how to watch and pray,
And live rejoicing every day.
Happy day, happy day,
When Jesus washed my sins away!`)),new c(151,"ONE OF THEM",[new s(`There are people almost everywhere,
Whose hearts are all aflame
With the fire that fell at Pentecost,
Which cleansed and made them clean;
It is burning now within my heart,
All glory to His name!
I'm so glad that I can say I'm one of them.`),new s(`Though these people may not learned be,
Nor boast of worldly fame,
They have all received their Pentecost,
Baptized in Jesus' name;
And are telling now, both far and wide,
His power is yet the same,
I'm so glad that I can say I'm one of them.`),new s(`They were gathered in the upper room,
All praying in His name,
They were baptized with the Holy Ghost,
And pow'r for service came;
Now what He did for them that day
He'll do for you the same,
I'm so glad that I can say I'm one of them.`),new s(`Come, my brother seek this blessing
That will cleanse your heart from sin,
That will start the joy-bells ringing
And will keep the soul aflame;
It is burning now within my heart,
All glory to His name,
I'm so glad that I can say I'm one of them.`)],"Ab",new f(`One of them, one of them,
I am glad that I can say I'm one of them;
One of them, one of them,
I'm so glad that I can say I'm one of them.`)),new c(152,"I\u2019LL BE LISTENING",[new s(`When the Saviour calls I will answer,
When He calls for me I will hear;
When the Saviour call I will answer,
I'll be somewhere list'ning for my name.`),new s(`If my heart is right when He calls me,
If my heart is right I will hear;
If my heart is right when He calls me,
I'll be somewhere list'ning for my name;`),new s(`If my robe is white when He calls me,
If my robe is white I will hear;
If my robe is white when He calls me,
I'll be somewhere list'ning for my name.`)],"Ab",new f(`I'll be somewhere list'ning,
I'll be somewhere list'ning,
I'll be somewhere list'ning for my name;
I'll be somewhere list'ning,
I'll be somewhere list'ning,
I'll be somewhere list'ning for my name;`)),new c(153,"THE HOMECOMING WEEK",[new s(`Upon our journey here below we meet with pain and loss;
Sometimes there is a crown of thorns,
sometimes the heavy cross.
The dreary road to Calvary, the bitter goad and sting,
But what's inside those gates of pearl will be worth everything.`),new s(`The shadows now begin to fall, the time is drawing nigh,
When Christ our Lord shall come again
like lightening from the sky.
And while we wait and suffer here, praise God,
we'll shout and sing,
For one glimpse through those gates of
pearl will be worth everything.`),new s(`The precious Blood of God's own Son has saved and sanctified
A wondrous people for His name and they
are called the Bride.
Though here neglected and despised, one
day the Lord will bring
His chosen ones within the gates, and that's worth everything.`)],"G",new f(`When we're inside the gates of pearl,
We'll learn a lot of things,
We'll have a harp that's made of gold,
Perhaps a thousand strings;
We'll sing and shout and dance about,
The Lamb will dry our tears;
We'll have a grand homecoming week,
The first ten thousand years.`)),new c(154,"JUST AS I AM",[new s(`Just as I am, without one plea,
But that Thy blood was shed for me,
And that Thou bidd'st me come to Thee,
O Lamb of God, I come! I come!`),new s(`Just as I am, and waiting not
To rid my soul of one dark blot,
To Thee, whose blood can cleanse each spot,
O Lamb of God, I come! I come!`),new s(`Just as I am, Thou wilt receive,
Wilt welcome, pardon, cleanse, relieve;
Because Thy promise I believe,
O Lamb of God, I come! I come!`),new s(`Just as I am, Thy love unknown
Hath broken every barrier down;
Now to be Thine, yea, Thine alone,
O Lamb of God, I come! I come!`)],"Eb",new f(`There will be peace in the valley for me some day;
There will be peace in the valley for me, oh, Lord, I pray;
There'll be no sadness, no sorrow, no trouble I'll see;
There will be peace in the valley for me.`)),new c(155,"PEACE IN THE VALLEY",[new s(`Well, I'm tired and so weary, but I must go along;
Till the Lord comes and calls me away, oh, yes;
Well the morning is bright, and the Lamb is the Light;
And the night, night is as fair as the day, oh, yes.`),new s(`There the flow'rs will be blooming, and
the grass will be green;
And the skies will be clear and serene, oh, yes;
Well the sun ever beams, in this valley of dreams;
And no clouds there will ever be seen, oh, yes;`),new s(`Well, the bear will be gentle, and the wolf will be tamed;
And the lion shall lay down by the lamb, oh, yes;
Well the beast from the wild, shall be led by a lit'le child;
And I'll be changed, changed from this creature that I am, oh, yes.`)],"Eb",new f("")),new c(156,"GREAT IS THE LORD",[new s(`There is a name I love to hear, it falls like
Music on my ear,
It's the Name of Jesus Christ the Lord;
He came from the Father in Heaven above,
He died on the cross just to show us His love;
Jesus, yes, Jesus is His Name.`),new s(`He is the dear Saviour of men; He gave His own life
Just to free us from sin,
It's the Name of Jesus Christ the Lord;
The wonderful Counselor, the Man from
Galilee, He calmed the angry waters
And He walked on the sea.`)],"Bb",new f(`Great is the Lord! Great is the Lord!
Great is the Father, great is the Son,
Great is the Holy Ghost, and these three
are One;
Jesus, yes, Jesus is His Name.`)),new c(157,"I\u2019VE ANCHORED IN JESUS",[new s(`Upon life's boundless ocean where mighty billows roll,
I've fixed my hope in Jesus, blest anchor of my soul;
When trials fierce assail me as storms are
gath'ring o'er,
I rest upon His mercy and trust Him more.`),new s(`He keeps my soul from evil and gives me
blessed peace;
His voice has stilled the waters and bid
their tumult cease.
My Pilot and deliv'rer to Him I all confide,
For always when I need Him, He's at my side.`),new s(`He is my Friend and Savior, in Him my
anchor's cast,
He drives away my sorrows and shields
me from the blast;
By faith I'm looking upward beyond life's troubled sea,
There I behold a haven prepared for me.`)],"Bb",new f(`I've anchored in Jesus, the storms of life I'll brave,
I've anchored in Jesus, I fear no wind or wave;
I've anchored in Jesus, for He hath pow'r to save,
I've anchored in the Rock of Ages.`)),new c(158,"BEYOND THE SUNSET",[new s(`Beyond the sunset, o blissful morning,
When with our Saviour heaven is begun.
Earth's toiling ended, O glorious dawning;
Beyond the sunset, when day is done.`),new s(`Beyond the sunset no clouds will gather,
No storms will threaten, no fears annoy.
O day of gladness, O day unending;
Beyond the sunset, eternal joy.`),new s(`Beyond the sunset, a hand will guide me
To God, the Father, whom I adore;
His glorious presence, His words of welcome,
Will be my portion on that fair shore.`),new s(`Beyond the sunset, O glad reunion,
With our dear loved ones who've gone before.
In that fair homeland we'll know no parting,
Beyond the sunset forevermore.`)],"Eb"),new c(159,"A CHILD OF THE KING",[new s(`My father is rich in houses and lands,
He holdeth the wealth of the world in His hands!
Of rubies and diamonds, of silver and gold,
His coffers are full, He has riches untold.`),new s(`My Father's own Son, the Savior of men,
Once wandered o'er earth as the poorest of them;
But now He is reigning forever on high,
And will give me a home in heav'n by and by.`),new s(`I once was an outcast, stranger on earth,
A sinner by choice, an alien by birth!
But I've been adopted, my name's written down,
An heir to a mansion, a robe, and a crown!`),new s(`A tent or a cottage, why should I care?
They're building a palace for me over there!
Though exiled from home, yet still I may sing;
All glory to God, I'm a child of the King!`)],"F",new f(`My father is rich in houses and lands,
He holdeth the wealth of the world in His hands!
Of rubies and diamonds, of silver and gold,
His coffers are full, He has riches untold.`)),new c(160,"HOLD TO GOD\u2019S HAND",[new s(`Time is filled with swift transition,
Naught of earth unmoved can stand,
Build your hopes on things eternal,
Hold to God's unchanging hand!`),new s(`Trust in Him who will not leave you,
Whatsoever years may bring,
If by earthly friends forsaken,
Still more closely to Him cling!`),new s(`Covet not this world's vain riches,
That so rapidly decay,
Seek to gain the heavenly treasures,
They will never pass away!`),new s(`When your journey is completed,
If to God you have been true,
Fair and bright the home in glory,
Your enraptured soul will view!`)],"G",new f(`Hold to God's unchanging hand!
Hold to God's unchanging hand!
Build your hopes on things eternal,
Hold to God's unchanging hand!`)),new c(161,"THE DAY OF REDEMPTION",[new s(`Nations are breaking, Israel's awaking,
The signs that the prophets, foretold;
The Gentile days numbered, with horrors encumbered;
Eternity soon will unfold.`),new s(`The fig tree is growing; Jerusalem's restoring
Her national life, long dethroned;
Today she is calling, her latter rain's falling,
\u201CReturn, O dispersed, to your own.\u201D`),new s(`Heaven's powers are shaking, and many are mistaking
God's meaning to be of the sky;
God's Church is the power that's shaking this hour;
The day of redemption is nigh.`),new s(`False prophets are lying, God's Truth they're denying,
That Jesus the Christ is our God;
Though this generation spurns God's revelation,
We'll walk where the apostles have trod.`),new s("")],"Ab",new f(`The day of redemption is near,
Men's hearts are failing for fear;
Be filled with the Spirit, your lamps
trimmed and clear,
Look up! your redemption is near.`)),new c(162,"ONLY TRUST HIM ",[new s(`Come, every soul by sin oppressed,
There's mercy with the Lord,
And He will surely give you rest,
By trusting in His Word.`),new s(`For Jesus shed His precious Blood
Rich blessings to bestow:
Plunge now into crimson flood
That washes white as snow.`),new s(`Yes, Jesus is the Truth, the Way,
That leads you into rest;
Believe in Him without delay,
And you are fully blest.`),new s(`Come, then, and join this holy band,
And on to glory go,
To dwell in that celestial land,
Where joys immortal flow.`)],"Ab",new f(`Only trust Him, only trust Him,
Only trust Him now:
He will save you, He will save you,
He will save you now.`)),new c(163,"ONE DAY",[new s(`One day when heaven was filled with His praises,
One day when sin was as black as could be,
Jesus came forth to be born of a virgin \u2013
Dwelt amongst men, my example is He!`),new s(`One day they led Him up Calvary's mountain,
One day they nailed Him to die on the tree;
Suffering anguish, despised and rejected:
Bearing our sins, my Redeemer is He.`),new s(`One day they left Him alone in the garden,
One day He rested, from suffering free;
Angels came down o'er His tomb to keep vigil;
Hope of the hopeless, my Saviour is He!`),new s(`One day the grave could conceal Him no longer;
One day the stone rolled away from the door;
Then He arose, over death He had conquered;
Now is ascended, my Lord evermore!`),new s(`One day the trumpet will sound for His coming,
One day the skies with His glories will shine;
Wonderful day, my beloved ones bringing;
Glorious Saviour, this Jesus is mine!`)],"C",new f(`Living, He loved me; dying, He saved me;
Buried, He carried my sins far away;
Rising, He justified freely forever:
One day He's coming \u2013 oh, glorious day!`)),new c(164,"SWING LOW, SWEET CHARIOT",[new s(`I looked over Jordan and what did I see
Coming for to carry me home;
A band of angels coming after me.
Coming for to carry me home.`),new s(`If you get there before I do,
Coming for to carry me home;
Tell all my friends I'm a-coming too,
Coming for to carry me home.`)],"F",new f(`Swing low, sweet chariot,
Coming for to carry me home;
Swing low, sweet chariot,
Coming for to carry me home.`)),new c(165,"WHEN THEY RING THE BELLS",[new s(`There\u2019s a land beyond the river,
That we call the sweet forever,
And we only reach that shore by faith's decree;
One by one we'll gain the portals,
There to dwell with the immortals,
When they ring the golden bells for you and me.`),new s(`We shall know no sin or sorrow,
In the haven of tomorrow,
When our barque shall sail beyond the silver sea;
We shall only know the blessing
Of our Father's sweet caressing,
When they ring the golden bells for you and me.`),new s(`When our days shall know their number,
When in death we sweetly slumber,
When the King commands the spirit to be free;
Nevermore with anguish laden,
We shall reach that lovely aiden,
When they ring the golden bells for you and me.`)],"F",new f(`Don't you hear the bells now ringing?
Don't you hear the angels singing?
'Tis the glory hallelujah Jubilee.
In that far-off sweet forever,
Just beyond the shining river,
When they ring the golden bells for you and me.`)),new c(166,"WHEN WE ALL GET TO HEAVEN",[new s(`Sing the wondrous love of Jesus,
Sing His mercy and His grace;
In the mansions, bright and blessed,
He'll prepare for us a place`),new s(`While we walk the pilgrim pathway,
Clouds will overspread the sky;
But when trav'ling days are over,
Not a shadow, not a sigh.`),new s(`Let us then be true and faithful,
Trusting, serving, every day;
Just one glimpse of Him in glory
Will the toils of life repay.`),new s(`Onward to the prize before us!
Soon His beauty we'll behold;
Soon the pearly gates will open,
We shall tread the streets of gold.`)],"C",new f(`When we all get to heaven,
What a day of rejoicing that will be!
When we all see Jesus,
We'll sing and shout the victory.`)),new c(167,"THE OLD RUGGED CROSS",[new s(`On a hill far away stood an old rugged cross,
The emblem of suff'ring and shame,
And I love that old cross where the Dearest and Best,
For a world of lost sinners was slain.`),new s(`Oh, that old rugged cross, so despised by the world,
Has a wondrous attraction for me;
For the dear Lamb of God left His glory above,
To bear it to dark Calvary.`),new s(`In the old rugged cross, stained with blood so divine,
A wondrous beauty I see.
For 'twas on that old cross Jesus
suffered and died,
To pardon and sanctify me.`),new s(`To the old rugged cross I will ever be true,
Its shame and reproach gladly bear;
Then He'll call me some day to my home far away,
Where His glory forever I'll share.`)],"Bb",new f(`So I'll cherish the old rugged cross,
Till my trophies at last I lay down;
I will cling to the old rugged cross,
And exchange it some day for a crown.`)),new c(168,"WHERE HE LEADS ME",[new s(`I can hear my Saviour calling,
I can hear my Saviour calling,
I can hear my Saviour calling,
\u201CTake thy cross, and follow, follow Me.\u201D`),new s(`I'll go with Him through the garden,
I'll go with Him through the garden,
I'll go with Him through the garden,
I'll go with Him, with Him all the way.`),new s(`I'll go with Him through the judgment,
I'll go with Him through the judgment,
I'll go with Him through the judgment,
I'll go with Him, with Him all the way.`),new s(`He will give me grace and glory,
He will give me grace and glory,
He will give me grace and glory,
And go with me, with me all the way.`)],"F",new f(`Where He leads me I will follow,
Where He leads me I will follow,
Where He leads me I will follow,
I'll go with Him, with Him all the way.`)),new c(169,"WONDERFUL",[new s(`O my heart sings today, sings for joy and gladness,
Jesus saves, satisfies, banishes my sadness;
Guilt is gone, peace is mine, peace like to a river,
Jesus is wonderful, mighty to deliver.`),new s(`Once a slave, now I'm free, free from condemnation,
Jesus gives liberty and a full salvation;
Now the sins of the past have been all forgiven,
And my name is inscribed on the book of heaven.`),new s(`Living here with my Lord in a holy union,
Day by day, all the way holding sweet communion;
O what change grace hath wrought in my lowly station!
Since my soul has received full and free salvation.`)],"Ab",new f(`Wonderful, wonderful, Jesus is to me,
Counselor, Prince of Peace, Mighty God is He;
Saving me, keeping me from all sin and shame,
Wonderful is my Redeemer, praise His name!`)),new c(170,"WHERE COULD I GO?",[new s(`Living below in this old sinful world,
Hardly a comfort can afford;
Striving alone to face temptations sore,
Where could I go but to the Lord?`),new s(`Neighbors are kind, I love them every one,
We get along in sweet accord;
But when my soul needs manna from above,
Where could I go but to the Lord?`),new s(`Life here is grand with friends I love so dear,
Comfort I get from God's own word;
Yet when I face the chilling hand of death,
Where could I go but to the Lord?`)],"G",new f(`Where could I go, O where could I go?
Seeking a refuge for my soul?
Needing a friend to help me in the end,
Where could I go but to the Lord?`)),new c(171,"WONDERFUL PEACE",[new s(`Far away in the depth of my spirit tonight
Rolls a melody sweeter than psalm;
In celestial-like strains it unceasingly falls
O'er my soul like an infinite calm.`),new s(`What a treasure I have in this wonderful peace,
Buried deep in the heart of my soul;
So secure that no power can mine it away,
While the years of eternity roll.`),new s(`I am resting tonight in this wonderful peace,
Resting sweetly in Jesus' control;
For I'm kept from all danger by night and by day,
And His glory is flooding my soul.`),new s(`And methinks when I rise to that City of peace,
Where the Author of peace I shall see,
That one strain of the song which the ransomed will sing,
In that heavenly kingdom shall be.`),new s(`Ah! Soul, are you here without comfort and rest,
Marching down the rough pathway of time?
Make Jesus your friend ere the shadows grow dark;
Oh, accept this sweet peace so sublime.`)],"Ab",new f(`Peace! Peace! Wonderful peace,
Coming down from the Father above;
Sweep over my spirit forever, I pray,
In fathomless billows of love.`)),new c(172,"THE SUN, NEVER GO DOWN",[new s(`The sun, it will never go down, in that city,
The sun, it will never go down;
The flowers are blooming forever,
And the sun, it will never go down.`),new s(`I feel like traveling on, I do,
I feel like traveling on;
The flowers are blooming forever,
And the sun, it will never go down.`),new s(`I feel like shouting, sometimes I do,
I feel like shouting, I do;
The flowers are blooming forever,
And the sun, it will never go down.`)],"F"),new c(173,"I BOWED AND CRIED, \u201CHOLY\u201D",[new s(`I Dreamed I went to that city called Glory,
So bright and so fair,
When I entered the gate I cried, \u201CHoly,\u201D
The angels all met me there;
They showed me from mansion to mansion,
And oh, the sights I saw,
But I said, \u201CI want to see Jesus,
The One who died for all.\u201D`),new s(`I thought when I entered that city,
My friends knew me well,
They showed me all through heaven.
The scenes are too num'rous to tell;
They showed me Abraham, Isaac,
Jacob, Mark, Luke, and Timothy,
But I said, \u201CI want to give praise.
To the One who died for me.\u201D`),new s(`I thought when I saw my Saviour, Oh! glory to God!
I just fell right down before Him.
Singing, \u201CPraise to the name of the Lord;\u201D
I bowed down and worshipped Jehovah,
My friend of Calvary,
For I wanted to give praise to Jesus.
For saving a sinner like me.`)],"Bb",new f(`Then I bowed on my knees and cried,
\u201CHoly, Holy, Holy,\u201D
I clapped my hands and sang, \u201CGlory,
Glory to the Son of God.\u201D`)),new c(174,"WHEN THE SAINTS MARCH IN",[new s(`I'm a pilgrim and a stranger
Wand'ring through this world of sin.
On my way to that fair city,
When the Saints go marching in.`),new s(`Oh, I know I'll see my Saviour
If my life is free from sin,
Heavens doors will open for me
When the Saints go marching in.`),new s(`When we gather 'round the Throne
And the gates are closed Within,
I'll be shouting \u201CGlory, Glory\u201D
When the Saints go marching in.`),new s(`I'm waiting for the chariot
To swing low and I'll step in,
On the clouds I'll ride to Heaven
When the Saints go marching in.`)],"Eb",new f(`When the saints go marching in,
When the saints go marching in,
Lord, I want to be in that number
When the Saints go marching in.`)),new c(175,"I\u2019D RATHER BE CHRISTIAN",[new s(`In this world I've tried most everything,
And I'm happy now to say
There is nothing like religion
In the good old-fashioned way;
I am walking in the old-time way.
And I want the world to know
That I'd rather be an old-time Christian
Than anything I know.`),new s(`There are many things I'd like to be
As my journey I pursue,
I have longed to be a leader
Like a mortal man would do;
I would like to be a millionaire,
With a million to bestow,
But I'd rather be an old-time Christian
Than anything I know.`),new s(`All the world is bright since I got right,
Now I sing and pray and shout,
All my burdens have been lifted
Since the Saviour brought me out;
I will tell the world both far and near
As I travel here below,
That I'd rather be an old-time Christian
Than anything I know.`)],"Eb",new f(`I'd rather be an old-time Christian
Than anything I know,
There's nothing like an old-time Christian
With a Christian love to show;
I'm walking in the grand old highway,
And I'm telling everywhere I go,
That I'd rather be an old-time Christian
Than anything I know.`)),new c(176,"BLESSED ASSURANCE",[new s(`BLESSED Assurance, Jesus is mine!
Oh, what a foretaste of glory divine!
Heir of Salvation, purchased of God,
Born of His Spirit, washed in His Blood.`),new s(`Perfect submission, perfect delight,
Visions of rapture now burst on my sight;
Angels descending, bring from above
Echoes of mercy, whispers of love.`),new s(`Perfect submission, all is at rest,
I in my Savior am happy and blest;
Watching and waiting, looking above,
Filled with His goodness, lost in His love.`)],"Eb",new f(`This is my story, this is my song,
Praising my Savior all the day long;
This is my story, this is my song,
Praising my Savior all the day long.`)),new c(177,"THE CLOUD AND FIRE",[new s(`AS of old, when the hosts of Israel
Were compelled in the wilderness to dwell,
Trusting they in their God to lead the way
To the light of perfect day.`),new s(`To and fro, as a ship without a sail,
Not a compass to guide them through the vale,
But the sign of their God was ever near,
Thus their fainting hearts to cheer.`),new s(`All the days of their wand'rings they were fed,
To the land of the promise they were led;
By the hand of the Lord in guidance sure,
They were brought to Canaan's shore.`)],"Eb",new f(`So the sign of the fire by night,
And the sign of the cloud by day,
Hovering o'er, just before,
As they journey on their way,
Shall a guide and a leader be,
Till the wilderness be past,
For the Lord, our God,
In His own good time
Shall lead to the light at last.`)),new c(178,"I WON\u2019T CROSS ALONE",[new s(`When I come to the river at ending of day,
When the last winds of sorrow have blown;
There'll be somebody waiting to show me the way,
I won't have to cross Jordan alone.`),new s(`Oftentimes I'm forsaken, and weary and sad,
When it seems that my friends have all gone;
There is one thought that cheers me and
makes my heart glad,
I won't have to cross Jordan alone.`),new s(`Though the billows of sorrow and trouble may sweep,
Christ the Saviour will care for His own;
Till the end of the journey, my soul He will keep,
I won't have to cross Jordan alone.`)],"Eb",new f(`I won't have to cross Jordan alone,
Jesus died all my sins to atone;
When the darkness I see, He'll be waiting for me,
I won't have to cross Jordan alone.`)),new c(179,"SOFTLY AND TENDERLY",[new s(`Softly and tenderly Jesus is calling,
Calling for you and for me,
See on the portals He's waiting and watching,
Watching for you and for me.`),new s(`Why should we tarry when Jesus is pleading,
Pleading for you and for me?
Why should we linger and heed not His mercies,
Mercies for you and for me?`),new s(`Time is now fleeting, the moments are passing,
Passing from you and from me;
Shadows are gathering, death's night is coming,
Coming for you and for me.`),new s(`Oh! For the wonderful love He has promised,
Promised for you and for me;
Though we have sinned, He has mercy and pardon,
Pardon for you and for me.`)],"Ab",new f(`Come home, come home,
Ye who are weary, come home;
Earnestly, tenderly, Jesus is calling,
Calling, O sinner, come home!`)),new c(180,"CLOSE TO THEE",[new s(`Thou, my everlasting portion,
More than friend or life to me,
All along my pilgrim journey,
Savior let me walk with Thee,
Close to Thee, close to Thee,
Close to Thee, close to Thee;
All along my pilgrim journey,
Savior let me walk with Thee.`),new s(`Not for ease or worldly pleasure,
Nor for fame my prayer shall be;
Gladly will I toil and suffer,
Only let me walk with Thee.
Close to Thee, close to Thee,
Close to Thee, close to Thee;
Gladly will I toil and suffer,
Only let me walk with Thee.`),new s(`Lead me through the vale of shadows,
Bear me o'er life's fitful sea;
Then the gate of life eternal
May I enter, Lord, with Thee,
Close to Thee, close to Thee;
Close to Thee, close to Thee;
Then the gate of life eternal
May I enter, Lord, with Thee.`)],"G"),new c(181,"GOT ANY RIVERS? ",[new s(`\u201CBe of good courage,\u201D God spake unto Joshua,
When o'er the river God pointed the way;
Jordan uncrossable! Things seemed impossible,
Waters divide as they march and obey.`),new s(`Battles to win! They would meet with their Obstacles,
Jericho's walls, too, must fall to the ground.
God never failed; He stood back of His promises,
Walls had to crumble as they marched around.`),new s(`Battles to win! They would meet with their Obstacles,
Jericho's walls, too, must fall to the ground.
God never failed; He stood back of His promises,
Walls had to crumble as they marched around.`)],"Ab",new f(`Got any rivers you think are uncrossable?
Got any mountains you can't tunnel through?
God specializes in things thought impossible,
And He will do what no other power can do.`)),new c(182,"WHERE WE NEVER GROW OLD",[new s(`I have heard of a land on the far away strand,
'Tis a beautiful home of the soul;
Built by Jesus on high, there we never shall die,
'Tis a land where we never grow old.`),new s(`In that beautiful home where we'll nevermore roam,
We shall be in the sweet by and by;
Happy praise to the King, through eternity sing,
'Tis a land where we never shall die.`),new s(`When our work here is done and the life-crown is won,
And our troubles and trails are o'er,
All our sorrow will end, and our voices will blend,
With the loved ones who've gone on before.`)],"Eb",new f(`Never grow old, never grow old,
In a land where we'll never grow old;
Never grow old, never grow old,
In a land where we'll never grow old.`)),new c(183,"LIFT HIM UP",[new s(`How to reach the masses, men of every birth?
For an answer Jesus gave a key,
\u201CAnd I, if I be lifted up from the earth,
Will draw all men unto me.\u201D`),new s(`O the world is hungry for the living bread,
Lift the Saviour up for them to see;
Trust Him, and do not doubt the words that He said,
"I'll draw all men unto me.\u201D`),new s(`Don't exalt the preacher, don't exalt the pew,
Preach the Gospel simple, full and free;
Prove Him and you will find that promise is true,
"I'll draw all men unto me.\u201D`),new s(`Lift Him up by living as a Christian ought,
Let the world in you the Saviour see,
Then men will gladly follow Him, who once taught,
'I'll draw all men unto me.`)],"Ab",new f(`Lift Him up, lift Him up,
Still, He speaks from eternity,
\u201CAnd I, if I be lifted up from the earth,
Will draw all men unto me.\u201D`)),new c(184,"BEULAH LAND",[new s(`I've reached the land of corn and wine,
And all its riches freely mine;
Here shines undimmed one blissful day,
For all my night has passed away.`),new s(`My Savior comes and walks with me!
And sweet communion here have we;
He gently leads me by His hand,
For this is Heaven's borderland.`),new s(`A sweet perfume upon the breeze
Is borne from ever vernal trees,
And flow'rs, that never fading grow,
Where streams of life forever flow.`),new s(`The zephyrs seem to float to me,
Sweet sounds of Heaven's melody,
As angels with the white-robed throng
Join in the sweet Redemption song.`)],"G",new f(`O Beulah Land, sweet Beulah Land,
As on Thy highest mount I stand,
I look away across the sea,
Where mansions are prepared for me,
And view the shining glory-shore,
My heaven, my home forevermore!`)),new c(185,"THE LORD BROUGHT ME OUT",[new s(`I'm so glad that the Lord brought me out;
I'm so glad that the Lord brought me out;
If it had not been for Jesus, oh where would I be?
I'm so glad that the Lord brought me out.`),new s(`I've been happy since the Lord brought me out;
I've been happy since the Lord brought me out;
If it had not been for Jesus, oh where would I be?
I'm so glad that the Lord brought me out.`),new s(`Aren't you glad that the Lord brought you out?
Aren't you glad that the Lord brought you out?
If it had not been for Jesus, oh where would I be?
I'm so glad that the Lord brought me out.`),new s(`I've been singing since the Lord brought me out;
I've been singing since the Lord brought me out;
If it had not been for Jesus, oh where would I be?
I'm so glad that the Lord brought me out.`)],"Eb"),new c(186,"GATHERING SHEAVES",[new s(`To the harvest field away we will gladly go today,
Gathering sheaves, beautiful sheaves;
From the early dawn till night we will
labor with our might,
Gathering sheaves, beautiful sheaves.`),new s(`On the mountain, hill or plain we will
harvest in the grain,
Gathering sheaves, beautiful sheaves;
Yes, we'll labor far and near, never falter,
never fear,
Gathering sheaves, beautiful sheaves.`),new s(`We will sing and we will pray, and our
Master's voice obey,
Gathering sheaves, beautiful sheaves;
As we go in foreign lands, doing what our
Lord commands,
Gathering sheaves, beautiful sheaves.`)],"Bb",new f(`Gathering sheaves, beautiful sheaves,
Gathering sheaves, beautiful sheaves;
Praise the Lord, we're on our way to that
land of endless day,
Gathering sheaves, beautiful sheaves`)),new c(187,"SUCH LOVE",[new s(`That God should love a sinner such as I,
Should yearn to change my sorrow into bliss,
Nor rest till He had planned to bring me nigh,
How wonderful is love like this!`),new s(`That Christ should join so freely in the scheme,
Although it meant His death on Calvary,
Did ever human tongue find nobler theme
Than love divine that ransomed me?`),new s(`That for a wilful outcast such as I,
The Father planned, the Saviour bled and died;
Redemption for a worthless slave to buy,
Who long had law and grace defied.`),new s(`And now He takes me to His heart, a son,
He asks me not to fill a servant's place;
The \u201Cfar-off country\u201D wand'rings all are done,
Wide open are His arms of grace.`)],"Ab",new f(`Such love, such wondrous love,
Such love, such wondrous love,
That God should love a sinner such as I,
How wonderful is love like this`)),new c(188,"DOWN FROM HIS GLORY",[new s(`Down from His glory, ever living story,
My God and Saviour came, and Jesus was His Name.
Born in a manger, to His own a stranger,
A Man of sorrows, tears, and agony.`),new s(`What condescension, bringing us redemption;
That in the dead of night, not one faint hope in sight;
God, gracious, tender, laid aside His splendor,
Stooping to woo, to win, to save my soul.`),new s(`Without reluctance, flesh and blood His substance,
He took the form of man, revealed the hidden plan.
O glorious mystery, Sacrifice of Calvary,
And now I know Thou wert the great \u201CI AM.\u201D`)],"F",new f(`O how l love Him! How I adore Him!
My breath, my sunshine, my all in all!
The great Creator became my Saviour,
And all God's fullness dwelleth in Him`)),new c(189,"I\u2019LL MEET YOU In the morning",[new s(`I will meet you in the morning, by the
Bright river side,
When all sorrow has drifted away;
I'll be standing at the portals, when the
gates open wide,
At the close of life's long, dreary day.`),new s(`I'll meet you in the mornings in the sweet by and by,
And exchange the old cross for a crown;
There will be no disappointments and
nobody shall die,
In that land, e'er the sun goeth down.`),new s(`I'll meet you in the morning, at the end of the way,
On the streets of that city of gold;
Where we all can be together and be happy for aye,
While the years and the ages shall roll.`)],"Eb",new f(`I'll meet you in the morning with a \u201CHow do you do,\u201D
And we'll sit down by the river and with
rapture \u201Cauld\u201D acquaintance renew,
You'll know me in the morning, by the
smiles that I wear,
When I meet you in the morning, in the
city that is built foursquare.`)),new c(190,"WATCHING YOU",[new s(`All along on the road to the soul's true abode,
There's an Eye watching you;
Every step that you take, this great Eye is awake,
There's an Eye watching you.`),new s(`As you make life's great flight, keep the pathway of right,
There's an Eye watching you;
God will warn not to go in the path of the foe,
There's an Eye watching you.`),new s(`Fix your mind on the goal, that sweet home of the soul,
There's an Eye watching you;
Never turn from the way to the kingdom of day,
There's an Eye watching you.`)],"F",new f(`Watching you, watching you,
Every day mind the course you pursue;
Watching you, watching you,
There's an all-seeing Eye watching you.`))];var sy=[new c(191,"PAST THE CURTAIN OF TIME",[new s(`There\u2019s a curtain that's drawn between earth and Heaven,
And just beyond lies a beautiful clime
Where the evils of this life no longer can touch me;
Lord, let me look past the curtain of time.`),new s(`I'm helpless, alone, and I want to see Jesus,
And hear the sweet harbor bells chime,
Where my friends and dear loved ones are
waiting for me;
Lord, let me look past the curtain of time.`),new s(`I'm so homesick and blue, and I want to see Jesus,
I would like to hear those sweet harbor bells chime;
It would brighten my path and would vanish all fear;
Lord, let me look past the curtain of time.`)],"Eb",new f(`Lord, let me look past the curtain of sorrows and fear,
Let me view that sunny bright clime;
It would strengthen my faith and would banish all fear;
Lord, let me look past the curtain of time.`)),new c(192,"HONEY IN THE ROCK",[new s(`O my brother, do you know the Savior,
Who is wondrous, kind and true?
He's the \u201CRock of your salvation!\u201D
There's Honey in the Rock for you.`),new s(`Have you \u201Ctasted that the Lord is gracious?\u201D
Do you walk in the way that's new?
Have you drank from the living Fountain?
There's Honey in the Rock for you.`),new s(`Do you pray unto God the Father,
\u201CWhat wilt thou have me to do?\u201D
Never fear He will surely answer;
There's Honey in the Rock for you.`),new s(`Then go out through the streets and byways.
Preach the word to the many or few;
Say to every fallen brother,
There's Honey in the Rock for you.`)],"F",new f(`Oh, there's Honey in the Rock, my brother.
There's Honey in the Rock for you;
Leave your sins for the blood to cover,
There's Honey in the Rock for you.`)),new c(193,"THE UNVEILED CHRIST",[new s(`Once our blessed Christ of beauty,
Was veiled off from human view;
But through suff'ring, death and sorrow,
He has rent the veil in two.`),new s(`Yes, He is with God, the Father,
Interceding there for you;
For He is the mighty conqueror,
Since He rent the veil in two.`),new s(`Holy angels bow before Him,
Men of earth give praises due,
For He is the well beloved,
Since He rent the veil in two.`),new s(`Throughout time and endless ages,
Heights and depths of love so true,
He alone can be the giver,
Since He rent the veil in two.`)],"Eb",new f(`O behold the man of sorrows,
O behold Him in plain view,
Lo! He is the mighty conqueror,
Since He rent the veil in two.
Lo! He is the mighty conqueror
Since He rent the veil in two`)),new c(194,"JESUS BREAKS EVERY FETTER",[new s(`I am now on the altar,
I am now on the altar,
I am now on the altar.
Which was made for me.`),new s(`I will never doubt my Saviour,
I will never doubt my Saviour,
I will never doubt my Saviour,
For He cleanses me.`),new s(`I will rest on His promise,
I will rest on His promise,
I will rest on His promise, which is given to me.`),new s(`On the other side of Jordan,
In the sweet fields of Eden
Where the Tree of Life is blooming,
There is rest for me.`)],"Bb",new f(`Jesus breaks every fetter,
Jesus breaks every fetter,
Jesus breaks every fetter,
For He sets me free!
(I will ever, ever praise Him \u2026)
(I will give God the glory \u2026)
(I will shout Hallelujah \u2026)`)),new c(195,"HE\u2019S THE LORD OF GLORY",[new s(`Behold what manner of Man is this
Who stills the raging sea;
He heals the sick, the lame, the halt,
And makes the blind to see.
He opens all the prison doors
And sets the captives free;
Behold what manner of man is this,
What manner of man is He!`),new s(`Behold what manner of man is this
Who healed the lame and halt;
Who said thy sins be forgiven thee,
Take up thy bed and walk.
He stands as the mighty Healer now,
And cries look unto Me;
Behold what manner of man is this,
What manner of man is He!`),new s(`Behold what manner of Man is this,
Who spake to the woman at the well.
Everlasting life I will give thee,
Far richer than man can tell
And whosoever shall drink of the well
Shall live eternally.
Behold what manner of Man is this,
What manner of man is He!`),new s(`Behold what manner of Man is this,
Who stand between God and man.
His eyes are as a flame of fire
His fan is in His hand.
John saw Him in the seven churches
As the sun in brilliancy
Behold what manner of Man is this,
What manner of man is He!`),new s(`Behold what manner of Man is this,
Who sit on His heavenly throne,
He rules and reigns from heaven above
His beloved and His own,
He\u2019s the lion of the tribe of Judah,
The root of David is He,
Behold what manner of Man is this
What manner of Man is He!`)],"Eb",new f(`He\u2019s the Lord of Glory,
He is the great \u201CI AM\u201D;
The Alpha and Omega,
The beginning and the end;
His name is Wonderful,
The Prince of Peace is He;
The Everlasting Father,
Throughout Eternity.`)),new c(196,"I WILL PRAISE HIM",[new s(`When I saw the cleansing fountain
Open wide for all my sin,
I obeyed the Spirit's wooing
When He said, \u201Cwilt thou be clean?\u201D`),new s(`Though the way seemed straight and narrow,
All I claimed was swept away;
My ambitions, plans, and wishes.
At my feet in ashes lay.`),new s(`Then God's fire upon the altar
Of my heart was set aflame;
I shall never cease to praise Him,
Glory! Glory to His name!`),new s(`Blessed be the name of Jesus!
I'm so glad He took me in;
He's forgiven my transgressions,
He has cleansed my heart from sin.`)],"Eb",new f(`I will praise Him, I will praise Him,
Praise the Lamb for sinners slain;
Give Him glory all ye people,
For His blood can wash away each stain.`)),new c(197,"THERE\u2019S A GREAT DAY COMING",[new s(`There\u2019s great day coming, a great day coming,
There's a great day coming by and by,
When the saints and the sinners shall be
parted right and left,
Are you ready for that day to come?`),new s(`There's a bright day coming, a bright day coming,
There's a bright day coming by and by,
But its brightness shall only come to them
that love the Lord,
Are you ready for that day to come?`),new s(`There's a sad day coming, a sad day coming,
There's a sad day coming by and by,
When the sinner shall hear his doom,
\u201CDepart, I know ye not\u201D
Are you ready for that day to come?`)],"G",new f(`Are you ready? Are you ready?
Are you ready for the judgment day?
Are you ready? Are you ready?
For the judgment day?`)),new c(198,"HE\u2019S COMING SOON",[new s(`In these, the closing days of time,
What joy the glorious hope affords,
That soon\u2013oh, wondrous truth sublime!
He shall reign, King of kings and Lord of lords.`),new s(`The signs around, in earth and air,
Or painted on the starlit sky,
God's faithful witnesses declare
That the coming of the Saviour draweth nigh.`),new s(`The dead in Christ who 'neath us lie,
In countless numbers, all shall rise
When through the portals of the sky
He shall come to prepare our Paradise.`),new s(`And we who, living, yet remain,
Caught up, shall meet our faithful Lord;
This hope we cherish not in vain,
But we comfort one another by this word.`)],"Ab",new f(`He's coming soon, He's coming soon;
With joy we welcome His returning;
It may be morn; it may be night or noon,
We know He's coming soon.`)),new c(199,"WHAT A FRIEND",[new s(`What a friend we have in Jesus,
All our sins and griefs to bear!
What a privilege to carry
Everything to God in prayer!
O what peace we often forfeit,
O what needless pain we bear,
All because we do not carry
Everything to God in prayer!`),new s(`Have we trials and temptations?
Is there trouble anywhere?
We should never be discouraged.
Take it to the Lord in prayer.
Can we find a friend so faithful,
Who will all our sorrows share?
Jesus knows our every weakness,
Take it to the Lord in prayer.`),new s(`Are we weak and heavy laden,
Cumbered with a load of care?
Precious Saviour, still our refuge,
Take it to the Lord in prayer.
Do thy friends despise, forsake thee?
Take it to the Lord in prayer;
In His arms He'll take and shield thee,
Thou wilt find a solace there.`)],"F"),new c(200,"I\u2019M BOUND FOR PROMISE LAND",[new s(`On Jordan's stormy banks I stand,
And cast a wishful eye,
Toward Canaan's fair and happy land,
Where my possessions lie.`),new s(`O'er all those wide extended plains
Shines one eternal day;
There God the Son forever reigns,
And scatters night away.`),new s(`No chilling winds, nor pois'nous breath,
Can reach that healthful shore;
Sickness and sorrow, pain and death,
Are feared and felt no more.`),new s(`When shall I reach that happy place,
And be forever blest!
When shall I see my Father's face,
And in His bosom rest?`)],"",new f(`I am bound for the promised land,
I am bound for the promised land;
O who will come and go with me?
I am bound for the promised land.`)),new c(201,"THE GREAT PHYSICIAN",[new s(`The great physician now is near,
The sympathizing Jesus,
He speaks the drooping heart to cheer,
Oh, hear the voice of Jesus;`),new s(`Your many sins are all forgiven,
Oh, hear the voice of Jesus;
Go on your way in peace to heaven,
And wear a crown with Jesus.`),new s(`All glory to the dying Lamb!
I now believe in Jesus;
I love the blessed Saviour's name,
I love the name of Jesus.`),new s(`His name dispels my guilt and fear,
No other name but Jesus;
O how my soul delight to hear
The charming name of Jesus.`)],"Eb",new f(`Sweetest note in seraph song,
Sweetest name on mortal tongue,
Sweetest carol ever sung,
Jesus, blessed Jesus.`)),new c(202,"I MUST TELL JESUS",[new s(`I must tell Jesus all of my trials;
I cannot bear these burdens alone;
In my distress He kindly will help me;
He ever loves and cares for His own.`),new s(`I must tell Jesus all of my troubles;
He is a kind, compassionate Friend;
If I but ask Him, He will deliver,
Make of my troubles quickly an end.`),new s(`Tempted and tried I need a great Saviour,
One who can help my burdens to bear;
I must tell Jesus, I must tell Jesus;
He all my cares and sorrows will share.`),new s(`O how the world to evil allures me!
O how my heart is tempted to sin!
I must tell Jesus, and He will help me
Over the world the vict'ry to win.`)],"Eb",new f(`I must tell Jesus! I must tell Jesus!
I cannot bear my burdens alone;
I must tell Jesus! I must tell Jesus!
Jesus can help me, Jesus alone.`)),new c(203,"NOTHING BETWEEN",[new s(`Nothing between my soul and the Saviour,
Naught of this world's delusive dream;
I have renounced all sinful pleasure,
Jesus is mine, there's nothing between.`),new s(`Nothing between like worldly pleasure;
Habits of life, though harmless they seem,
Must not my heart from Him ever sever;
He is my all, there's nothing between.`),new s(`Nothing between, like pride or station;
Self or friends shall not intervene;
Though it may cost me much tribulation,
I am resolved, there's nothing between.`),new s(`Nothing between, e'en many hard trials,
Though the whole world against me
convene;
Watching with prayer and much self-denial,
I'll triumph at last, with nothing between.`),new s("")],"G",new f(`Nothing between my soul and the Saviour,
So that His blessed face may be seen;
Nothing preventing the least of His favor,
Keep the way clear! Let nothing between.`)),new c(204,"WHAT A DAY THAT WILL BE",[new s(`There is coming a day when no heartaches shall come,
No more clouds in the sky, no more tears to dim the eye;
All is peace forevermore on that happy golden shore,
What a day, glorious day that will be.`),new s(`There'll be no sorrow there, no more burdens to bear,
No more sickness, no pain, no more parting over there;
And forever I will be with the One who died for me,
What a day, glorious day that will be.`)],"Ab",new f(`What a day that will be when my Jesus I shall see,
And l look upon His face, the One who saved me by His grace;
When He takes me by the hands and
Leads me through the Promised Land,
What a day, glorious day that will be.`)),new c(205,"NEAR THE CROSS",[new s(`Jesus, keep me near the cross,
There a precious fountain,
Free to all, a healing stream,
Flows from Calv'ry's mountain.`),new s(`Near the cross, a trembling soul,
Love and mercy found me;
There the Bright and Morning Star
Sheds its beams around me.`),new s(`Near the cross! O Lamb of God,
Bring its scenes before me;
Help me walk from day to day,
With its shadows o'er me.`),new s(`Near the cross I'll watch and wait,
Hoping, trusting, ever,
Till I reach the golden strand,
Just beyond the river.`)],"F",new f(`In the cross, in the cross,
Be my glory ever;
Till my raptured soul shall find
Rest beyond the river.`)),new c(206,"PASS ME NOT ",[new s(`Pass me not, o gentle Saviour,
Hear my humble cry;
While on others Thou art calling,
Do not pass me by.`),new s(`Let me at Thy throne of mercy
Find a sweet relief;
Kneeling there in deep contrition,
Help my unbelief.`),new s(`Trusting only in Thy merit,
Would I seek Thy face;
Heal my wounded, broken spirit,
Save me by Thy grace.`),new s(`Thou the Spring of all my comfort,
More than life to me,
Whom have I on earth beside Thee?
Whom in heaven but Thee?`)],"Ab",new f(`Saviour, Saviour,
Hear my humble cry;
While on others Thou art calling,
Do not pass me by.`)),new c(207,"I see a crimson stream",[new s(`On Calvary's hill of sorrow
Where sin's demands were paid,
And rays of hope for tomorrow
Across our path were laid.`),new s(`Today no condemnation
Abides to turn away
My soul from His salvation,
He's in my heart to stay.`),new s(`When gloom and sadness whisper
You've sinned, no use to pray;
I look away to Jesus,
And He tells me to say;`),new s(`And when we reach the portal
Where life forever reigns,
The ransomed hosts grand final
Will be his glad refrain.`)],"Bb",new f(`I see a crimson stream of blood,
It flows from Calvary,
Its waves which reach the throne of God,
Are sweeping over me.`)),new c(208,"COME TO THE FEAST",[new s(`\u201CAll things are ready,\u201D come to the feast!
Come, for the table now is spread;
Ye famishing, ye weary, come,
And thou shalt be richly fed.`),new s(`\u201CAll things are ready,\u201D come to the feast!
Come, for the door is open wide;
A place of honor is reserved
For you at the Master's side.`),new s(`\u201CAll things are ready,\u201D come to the feast!
Come, while He waits to welcome thee;
Delay not while this day is thine,
Tomorrow may never be.`),new s(`\u201CAll things are ready,\u201D come to the feast!
Leave every care and worldly strife;
Come, feast upon the love of God,
And drink everlasting life.`)],"",new f(`Hear the invitation,
Come, \u201Cwhosoever will,\u201D
Praise God for full salvation
For \u201Cwhosoever will.\u201D`)),new c(209,"LORD, I\u2019M COMING HOME",[new s(`I've wandered far away from God,
Now I'm coming home;
The path of sin too long I've trod,
Lord I'm coming home.`),new s(`I've wasted many precious years,
Now I'm coming home;
I now repent with bitter tears,
Lord, I'm coming home.`),new s(`I'm tired of sin and straying, Lord,
Now I'm coming home;
I'll trust Thy love, believe Thy Word,
Lord, I'm coming home.`),new s(`My Soul is sick, my heart is sore,
Now I'm coming home;
My strength renew, my hope restore,
Lord, I'm coming home.`),new s(`My only hope, my only plea,
Now I'm coming home;
That Jesus died, and died for me.
Lord, I'm coming home.`),new s(`I need His cleansing blood, I know,
Now I'm coming home;
O wash me whiter than the snow,
Lord, I'm coming home.`)],"Ab",new f(`Coming home, coming home,
Nevermore to roam;
Open wide Thine arms of love,
Lord, I'm coming home.`)),new c(210,"THE EASTERN GATE",[new s(`I will meet you in the morning,
Just inside the Eastern Gate,
Then be ready, faithful pilgrim,
Lest with you it be too late.`),new s(`If you hasten off to glory,
Linger near the Eastern Gate,
For I'm coming in the morning,
So you'll not have long to wait.`),new s(`Keep your lamps all trimmed and burning,
For the Bridegroom watch and wait,
He'll be with us at the meeting,
Just inside the Eastern Gate.`),new s(`O the joys of that glad meeting
With the saints who for us wait,
What a blessed, happy meeting,
Just inside the Eastern Gate.`),new s("")],"Ab",new f(`I will meet you, I will meet you
Just inside the Eastern Gate over there;
I will meet you, I will meet you,
I will meet you in the morning over there.`)),new c(211,"JESUS PAID IT ALL",[new s(`I hear the Savior say,
\u201CThy strength indeed is small,
Child of weakness, watch and pray,
Find in Me thine all in all.\u201D`),new s(`Lord, now indeed I find
Thy pow'r, and Thine alone,
Can change the leper's spots,
And melt the heart of stone.`),new s(`Since nothing good have I
Whereby Thy grace to claim,
 I'll wash my garments white
In the blood of Calv'ry's Lamb.`)],"Eb",new f(`Jesus paid it all.
All to Him I owe;
Sin had left a crimson stain;
He washed it white as snow.`)),new c(212,"I BELIEVE GOD ",[new s(`I believe God! I Believe God!
Ask what you will and it shall be done;
Trust and obey, believe it and say:
I Believe, I believe God.`),new s(`And if you want Salvation now
And the Holy Ghost and power,
Just trust and obey, believe it and say;
I believe, I believe God.`),new s(`O Land of rest, for thee I sigh!
When will the moment come
When I shall lay my armor by,
And dwell in peace at home?`),new s(`We'll work till Jesus comes,
We'll work till Jesus comes,
We'll work till Jesus comes,
And we'll be gathered home!`),new s(`To Jesus Christ I fled for rest;
He bade me cease to roam;
And lean for succor on His breast
Till He conduct me home?`),new s(`I sought at once my Saviour's side,
No more my steps shall roam;
With Him I'll brave death's chilling tide
And reach my heavenly home.`),new s(`No Tranquil joys on earth I know
No peaceful, sheltering dome;
This world's a wilderness of woe,
This world is not my Home.`)],"Bb",new f(`I believe God! I Believe God!
Ask what you will and it shall be done;
Trust and obey, believe it and say:
I Believe, I believe God.`)),new c(213,"WE\u2019LL WORK TILL JESUS COMES ",[new s(`O land of rest, for thee I sigh!
When will the moment come
When I shall lay my armor by,
And dwell in peace at home?`),new s(`To Jesus Christ I fled for rest;
He bade me cease to roam;
And lean for succor on His breast
Till He conduct me home?`),new s(`I sought at once my Saviour's side,
No more my steps shall roam;
With Him I'll brave death's chilling tide
And reach my heavenly home.`),new s(`No Tranquil joys on earth I know
No peaceful, sheltering dome;
This world's a wilderness of woe,
This world is not my Home.`)],"Fb",new f(`We'll work till Jesus comes,
 We'll work till Jesus comes,
 We'll work till Jesus comes,
 And we'll be gathered home!`)),new c(214,"THE WINDOWS OF HEAVEN",[new s(`THE Windows of Heaven are open,
The blessings are falling tonight,
There's joy, joy, joy in my heart,
For Jesus makes everything right;
I gave Him my old tattered garment,
He gave me a robe of pure white,
I'm feasting today on the Manna,
And that's why I'm happy tonight.`)],"Eb"),new c(215,"PRECIOUS MEMORIES",[new s(`Precious memories, unseen angels,
Sent from somewhere to my soul;
How they linger, ever near me,
And the sacred past unfold.`),new s(`Precious father, loving mother,
Fly across the lonely years;
And old home scenes of my childhood,
In fond memory appear.`),new s(`In the stillness of the midnight,
Echoes from the past I hear;
Old-time singing, gladness bringing,
From that lovely land somewhere.`),new s(`As I travel on life's pathway,
Know not what the years may hold;
As I ponder, hope grows fonder,
Precious memories flood my soul.`),new s(`Precious memories of the prophet,
Flood my soul from day to day,
I remember scenes so precious
That can never pass away.`),new s(`I've heard the Message and Its signal
That day's end is near at hand,
But I remember that He promised
He'd return for those who'd stand.`),new s(`Precious memories, glorious meetings
Across this land from sea to sea
Where I heard the prophet's Message
That brought Life and hope to me.`),new s(`Precious memories in this storehouse
Where the Food was laid away,
We've returned to where he stored It,
Spiritual Food against this day.`)],"Ab",new f(`Precious memories, how they linger,
How they ever flood my soul;
In the stillness of the midnight,
Precious, sacred scenes unfold.`)),new c(216,"THE END TIME",[new s(`I Look and see earth's sorrowing picture,
The hoarding mobs for selfish again;
Their toil of hand for ease and comfort,
Can they not see, their doom is sealed, it's
all in vain.`),new s(`Sirs, this is the time! Our prophet spoke of,
The Angel came with a Shout,
The mountain shook as His Voice cried out,
\u201CTime is no more,\u201D loud and clear the Shout went forth.`),new s(`Have you considered the end-time Message?
Have you considered Malachi 4?
Revelation 10:7 and St. Luke 17
Proclaims this Message now, and then
forevermore.`)],"F",new f(`The end is here, it's now at hand,
The bride is gathering; the world is failing;
Israel's awak'ning; nations are breaking;
Our prophet taught us, we believe the end
is here.`)),new c(217,"IT IS NO SECRET",[new s(`The chimes of time ring out the news, another day is through
Someone slipped and fell, was that someone you?
You may have longed for added strength your courage to renew
Do not be disheartened, I have news for you`),new s(`There is no night for in his light you'll never walk alone
You'll always feel at home, wherever you may roam
There is no power can conquer you while God is on your side
Take him at his promise, don't run away and hide`)],"C",new f(`IT is no secret what God can do;
What he's done for others, He'll do for you.
With arms wide open, He'll pardon you,
It is no secret what God can do.`)),new c(218,"HOW GREAT IS OUR GOD!",[new s(`When I consider the works of my God,
The moon and the stars, the path that He trod.
The sheep and the oxen, the beast of the field,
All of these wonders make me know that He's real.`),new s(`He used our prophet in many a way
To show forth His greatness in this our day.
He never changes; He's always the same,
So worship and praise Him and love His dear Name.`)],"F",new f(`How great is our God! How great is His Word!
He's the greatest one that ever was heard.
He rolled back the waters of the mighty
Red Sea,
And He said, \u201CI will lead you,
Put your trust in me.\u201D`)),new c(219,"SO JUST BE FAITHFUL",[new s(`In these days of trials so near the end,
When Christ from Glory doth now descend,
Men's hearts are failing and filled with fear,
We know the end time is surely here.`),new s(`In every church age a star did shine,
To help God's people a Truth to find;
In this last church age a star shines bright,
So friend receive It, walk in the Light.`),new s(`Do not be fearful or filled with dread,
Your prophet sleepeth, he is not dead;
The Bride is waiting now for that Voice,
And in this hope we can now rejoice.`),new s(`His Word of promise he gave the Bride,
From his White Charger the prophet cried,
\u201CYet one more time shall I ride this trail.\u201D
THUS SAITH THE LORD can never fail.`)],"Eb",new f(`So just be faithful, believe His Word;
Stay with the Message that you have heard;
List' to His prophet, his Message heed;
Walk in the Light where His star doth lead.`)),new c(220,"BLEST BE THE TIE THAT BINDS",[new s(`Blest be the tie that binds
Our hearts in Christian love;
The fellowship of kindred minds
Is like to that above.`),new s(`Before our Father's throne,
We pour our ardent prayers;
Our fear, our hopes, our aims are one,
Our comforts and our cares.`),new s(`We share our mutual woes,
Our mutual burdens bear;
And often for each other flows
The sympathizing tear.`),new s(`When we asunder part,
It gives us inward pain;
But we shall still be joined in heart,
And hope to meet again.`)],"F"),new c(221,"GOD BE WITH YOU",[new s(`God be with you till we meet again!
By His counsels guide, uphold you,
With His sheep securely fold you;
God be with you till we meet again!`),new s(`God be with you till we meet again!
'Neath His wings securely hide you,
Daily manna still provide you;
God be with you till we meet again!`),new s(`God be with you till we meet again!
When life's perils thick confound you,
Put His arms unfailing round you;
God be with you till we meet again!`),new s(`God be with you till we meet again!
Keep love's banner floating o'er you,
Smite death's threat'ning wave before you;
God be with you till we meet again!`),new s("")],"C",new f(`Till we meet! Till we meet!
Till we meet at Jesus feet;
Till we meet! Till we meet!
God be with you till we meet again!`)),new c(222,"TAKE THE NAME OF JESUS",[new s(`Take the name of Jesus with you,
Child of sorrow and of woe;
It will joy and comfort give you,
Take it, then, where'er you go.`),new s(`Take the name of Jesus ever,
As a shield from every snare;
If temptations round you gather,
Breathe that Holy Name in prayer.`),new s(`O the precious Name of Jesus!
How it thrills our souls with joy,
When His loving arms receive us,
And His songs our tongues employ!`),new s(`At the name of Jesus bowing,
Falling prostrate at His feet,
King of Kings in Heaven we'll crown Him,
When our journey is complete.`)],"Ab",new f(`Precious name, O how sweet!
Hope of earth and joy of Heaven;
Precious name, O how sweet!
Hope of earth and joy of Heaven.`)),new c(223,"WE HAVE AN ANCHOR ",[new s(`Will your anchor hold in the storms of life,
When the clouds unfold their wings of strife?
When the strong tides lift, and the cable strain,
Will your anchor shift, or firm remain?`),new s(`It is safely moor'd, 'twill the storm withstand,
For 'tis well secured by the Saviour's hand;
And the cables, pass'd from His heart to mine,
Can defy the blast, thro' strength divine.`),new s(`It will firmly hold in the straits of fear,
When the breakers have told the reef is near;
Tho' the tempest rave, and the wild winds blow,
Not an angry wave shall our barque o'erflow.`),new s(`It will surely hold in the floods of death,
When the waters cold chill our latest breath;
On the rising tide it can never fail,
While our hopes abide within the veil!`),new s(`When our eyes behold, thro' the gathering night,
The city of gold, our harbour bright,
We shall anchor fast by the heav'nly shore,
With the storms all past for evermore.`)],"Ab",new f(`We have an anchor that keeps the soul
Steadfast and sure while the billows roll,
Fasten'd to the Rock which cannot move
Grounded firm and deep in the Saviour's love.`)),new c(224,"MY FAITH HAS FOUND A RESTING PLACE",[new s(`My faith has found a resting place,
Not in device nor creed;
I trust the ever living One,
His wounds for me shall plead.`),new s(`Enough for me that Jesus saves,
This ends my fear and doubt;
A sinful soul I come to Him,
He'll never cast me out.`),new s(`My heart is leaning on the Word,
The written Word of God;
Salvation by my Saviour's name,
Salvation through His blood.`),new s(`My great Physician heals the sick,
The lost He came to save;
For me His precious blood He shed,
For me His life He gave.`)],"Eb",new f(`I need no other argument,
I need no other plea,
It is enough that Jesus died,
And that He died for me.`)),new c(225,"JESUS IS PASSING THIS WAY",[new s(`Is there a heart that is waiting,
Longing for pardon to-day?
Hear the glad message proclaiming,
Jesus is passing this way.`),new s(`Is there a heart that has wandered?
Come with thy burden to-day;
Mercy is tenderly pleading,
Jesus is passing this way.`),new s(`Is there a heart that is broken?
Weary and sighing for rest?
Come to the arms of thy Saviour,
Pillow thy head on His breast.`),new s(`Come to thy only Redeemer,
Come to His infinite love;
Come to the gate that is leading
Homeward to mansions above.`)],"F",new f(`Jesus is passing this way \u2026 This way \u2026
To-day,\u2026.Jesus is passing this way\u2026
Is passing this way to-day.`)),new c(226,"TO GOD BE THE GLORY",[new s(`To God be the glory, great things He hath done,
So loved He the world that He gave us His son,
Who Yielded His life an atonement for sin
And opened the life Gate that all may go in.`),new s(`O perfect redemption, the purchase of blood,
To every believer the promise of God;
The Vilest offender who truly believes,
That moment from Jesus a pardon receives.`),new s(`Great things He hath taught us, great things
He hath done,
And great our rejoicing through Jesus the Son;
But purer, and higher, and greater will be
Our wonder, our transport when Jesus we see.`)],"Eb",new f(`Praise the Lord, praise Lord,
Let the earth hear His voice!
Praise the Lord, praise the Lord,
Let the people rejoice!
O come to the Father, through Jesus the son,
And give Him the glory, great things He hath done.`)),new c(227,"BURN, BURN, HOLY-SPIRIT",[new s(`Burn, burn, Holy Spirit burn in me
Set my heart on fire,
Fill me with the Holy Ghost,
And God's full desire,
Make me like the Christ of old,
Healing and raising the dead,
Give me the power that Jesus had,
Through the blood that was shed.`)],"C"),new c(228,"SEND THE LIGHT",[new s(`There\u2019s a call comes ringing o\u2019er the restless wave,
Send the light! Send the light!
There are souls to rescue, there are souls to save,
Send the light! Send the light!`),new s(`We have heard the Macedonian call to-day
Send the light! Send the light!
And a golden off\u2019 ring at the Cross we lay,
Send the light! Send the light!`),new s(`Let us pray that grace may ev\u2019rywhere abound,
Send the light! Send the light!
And a Christ-like spirit ev\u2019rywhere be found,
Send the light! Send the light!`),new s(`Let us not grow weary in the work of love
Send the light! Send the light!
Let us gather jewels for a crown above,
Send the light! Send the light!`)],"F",new f(`Send the light, the blessed Gospel light!
Let it shine from shore to shore!
Send the light! And let its radiant beams
Light the world for evermore.`)),new c(229,"TAKE MY LIFE LET IT BE",[new s(`Take my life, and let it be
Consecrated, Lord, to Thee;
Take my moments and my days,
Let them flow in ceaseless praise.`),new s(`Take my hands, and let them move
At the impulse of Thy love;
Take my feet and let them be
Swift and beautiful for Thee.`),new s(`Take my voice, and let me sing
Always, only, for my King;
Take my lips, and let them be
Filled with messages from Thee.`),new s(`Take my silver and my gold,
Not a mite would I withhold;
Take my intellect, and use
Ev\u2019ry power as Thou shalt choose.`),new s(`Take my will and make it Thine,
It shall be no longer mine;
Take my heart, it is Thine own;
It shall be Thy royal throne.`),new s(`Take my love; my Lord, I pour
At Thy feet its treasure store;
Take myself, and I will be
Ever only ALL for Thee!`)],"G"),new c(230,"LOOK AND LIVE",[new s(`I've a message from the Lord, hallelujah!
The message unto you I'll give.
'Tis recorded in His word, hallelujah!
It is only that you \u201Clook and live.\u201D`),new s(`I've a message full of love, Hallelujah!
A message, O my friend, for you.
'Tis a message from above, hallelujah!
Jesus said it, and I know 'tis true.`),new s(`Life is offered unto you, hallelujah!
Eternal life your soul shall have,
If you'll only look to Him, hallelujah!
Look to Jesus Who alone can save.`)],"C",new f(`\u201CLook and live\u201D \u2026 my brother, live \u2026
Look to Jesus now and live,
Tis recorded in His word, hallelujah!
It is only that you \u201Clook and live.\u201D`)),new c(231,"COUNT YOUR BLESSINGS",[new s(`When upon life's billows you are tempest-tossed,
When you are discouraged, thinking all is lost,
Count your many blessings, name them one by one,
And it will surprise you what the Lord hath done.`),new s(`Are you ever burdened with a load of care?
Does the cross seem heavy you are called to bear?
Count your many blessings, every doubt will fly,
And you will be singing as the days go by.`),new s(`So amid the conflict, whether great or small,
Do not be discouraged, God is over all,
Count your many blessings, angels will attend,
Help and comfort give you to your journey's end.`)],"Bb",new f(`Count your blessings, name them one by one,
Count your blessings, see what God hath done;
Count your blessings, name them one by one,
And it will surprise you what the Lord hath done.`)),new c(232,"THE MOVE IS ON",[new s(`The move is on my Lord the move is on,
The move is on my Lord the move is on,
I can hear the rustle in the mulberry tree,
And I know, I know, I know the move is on.`),new s(`Move on brother, move on sister.
This is the moving day,
Move a little closer,
Where the streams are flowing,
Move on brother, move on.`)],"F"),new c(233,"SPREAD THE TIDINGS ROUND",[new s(`Oh, spread the tidings round,
Wherever man is found,
Wherever human heart and human woes abound;
Let ev'ry Christian tongue proclaim the joyful sound:
\u201CThe Comforter has come!\u201D`),new s(`The long, long night is past,
The morning breaks at last;
And hush'd the dreadful
Wall and fury of the blast,
As o'er the golden hills
The day advances fast!
\u201CThe Comforter has come!\u201D`),new s(`Lo, the great King of kings,
With healing in His wings,
To ev'ry captive soul
a full deliv'rance brings;
And thro' the vacant cells
the songs of triumph rings:
\u201CThe Comforter has come!\u201D`),new s(`O boundless love divine!
How shall this tongue of mine
To wond'ring mortals tell
The matchless grace divine
That I, a child of hell,
Should in His image shine!
\u201CThe Comforter has come!\u201D`),new s(`Sing till the echoes fly,
Above the vaulted sky,
And all the saints above to all below reply,
In strains of endless love, the song that ne'er will die:
\u201CThe Comforter has come!\u201D`)],"C",new f(`The Comforter has come,
the Comforter has come!
The Holy Ghost from Heaven,
the Father's promise giv'n;
Oh, spread the tiding round
Wherever man is found,
The Comforter has come!`)),new c(234,"WHEN JESUS COMES TO REWARD",[new s(`When Jesus comes to reward His servants,
Whether it be noon or night,
Faithful to Him will He find us watching,
With our lamps all trimm'd and bright?`),new s(`If at the dawn of the early morning,
He shall call us one by one.
When to the Lord we restore our talents,
Will He answer thee \u201CWell done?\u201D`),new s(`Have we been true to the trust He left us?
Do we seek to do our best?
If in our heart there is naught condemns us,
We shall have a glorious rest.`),new s(`Blessed are those whom the Lord finds watching,
In His glory they shall share;
If He should come at the dawn or midnight,
Will He find us watching there?`)],"C",new f(`Oh, can we say we are ready, brother,
Ready for the soul's bright home?
Say, will He find you and me still watching,
Waiting, waiting, when the Lord shall come?`)),new c(235,"CHRISTIAN, SEEK NOT YET REPOSE",[new s(`Christian, seek not yet repose;
Hear thy guardian angel say,
Thou art in the midst of foes:
Watch and pray!`),new s(`Gird thy heavenly armour on;
Wear it ever, night and day,
Ambushed lies the evil one:
Watch and pray!`),new s(`Hear the victors who o\u2019ercame;
Still they mark each warrior\u2019s way;
All with one sweet voice exclaim:
Watch and pray!`),new s(`Hear, above all, hear thy Lord;
Him thou lovest to obey;
Hide within thy heart his word:
Watch and pray!`),new s(`Watch, as if on that alone;
Hung the issue of the day,
Pray, that help may be sent down:
Watch and pray!`)],"Eb")];var ay=[new c(236,"GOD OUR HELP",[new s(`O God, our help in ages past,
Our hope for years to come,
Our shelter from the stormy blast,
And our eternal home!`),new s(`Under the shadow of Thy throne
Thy saints have dwelt secure;
Sufficient is Thine arm alone;
And our defence is sure.`),new s(`Before the hills in order stood,
Or earth received her frame,
From everlasting Thou art God,
To endless years the same.`),new s(`A thousand ages in Thy sight
Are like an evening gone
Short as the watch that ends the night
Before the rising sun.`),new s(`Time, like an ever rolling stream,
Bears all its sons away;
They fly forgotten, as a dream
Dies at the opening day.`),new s(`O God, our help in ages past,
Our hope for years to come,
Be Thou our Guard while troubles last,
And our eternal home.`)],"C"),new c(237,"PERFECT PEACE",[new s(`Peace, perfect peace, in this dark world of sin?
The blood of Jesus whispers peace within.`),new s(`Peace, perfect peace, by thronging duties pressed?
To do the will of Jesus, this is rest.`),new s(`Peace, perfect peace, with sorrows surging round?
On Jesus bosom naught but calm is found.`),new s(`Peace, perfect peace, with loved ones far away?
In Jesus keeping we are safe, and they`),new s(`Peace, perfect peace, our future all unknown?
Jesus we know, and He is on the throne.`),new s(`Peace, perfect peace, death shadowing us and ours?
Jesus has vanquished death and all its powers,`),new s(`It is enough earth\u2019s struggles soon shall cease,
And Jesus calls us to heaven\u2019s perfect peace.`)],"Eb"),new c(238,"I WILL SING OF MY REDEEMER",[new s(`I will sing of my Redeemer,
And His wondrous love to me;
On the cruel cross He suffered,
From the curse to set me free.`),new s(`I will tell the wondrous story,
How my lost estate to save,
In His boundless love and mercy,
He the ransom freely gave.`),new s(`I will praise my Dear Redeemer,
His triumphant power I will tell,
How the victory He giveth,
Over sin, and death, and hell.`),new s(`I will sing of my Redeemer,
And His heavenly love to me;
He from death to life hath brought me,
Son of God, with Him to be.`)],"Eb",new f(`Sing, oh sing..... of my Redeemer....
With His Blood... He purchased me..
On the cross... He sealed my pardon,
Paid the debt... and made me free.`)),new c(239,"NO FRIEND LIKE JESUS",[new s(`There\u2019s not a friend like the lowly Jesus.
No, not one! No, not one!
None else can heal all our soul's diseases
No, not one! No, not one!`),new s(`No friend like Him is so high and holy,
No, not one! No, not one!
And yet no friend is so meek and lowly,
No, not one! No, not one!`),new s(`There's not an hour that He is not near us
No, not one! No, not one!
No night so dark but His love can cheer us,
No, not one! No, not one!`),new s(`Did ever saint find this Friend forsake him?
No, not one! No, not one!
Or sinner find that He would not take him?
No, not one! No, not one!`),new s(`Was e'er a gift like the Saviour given?
No, not one! No, not one!
Will He refuse us a home in heaven?
No, not one! No, not one!`)],"F",new f(`Jesus knows all about our struggle
He will guide till the day is done.
There's not a Friend like the lowly Jesus,
No, not one! No, Not one!`)),new c(240,"TELL ME THE OLD STORY",[new s(`Tell me the old, old story
Of unseen things above,
Of Jesus and His glory,
Of Jesus and His love.
Tell me the story simply,
As to a little child;
For I am weak and weary,
And helpless and defiled.`),new s(`Tell me the story slowly
That I may take it in
That wonderful redemption,
God's remedy for sin.
Tell me the story often,
For I forget so soon!
The \u201Cearly dew\u201D of morning
Has passed away at noon.`),new s(`Tell me the story softly,
With earnest tones, and grave;
Remember! I'm the sinner
Whom Jesus came to save
Tell me that story always,
If you would really be
In any time of trouble
A comforter to me.`),new s(`Tell me the same old story
When you have cause to fear
That this world's empty glory
Is costing me too dear
Yes; and when the world's glory
Is dawning on my soul,
Tell me the old, old story,
\u201CChrist Jesus makes thee whole.\u201D`)],"C",new f(`Tell me the old, old story
Tell me the old, old story
Tell me the old, old story
Of Jesus and His love.`)),new c(241,"TRUST AND OBEY",[new s(`When we walk with the Lord,
In the light of His word,
What a glory He sheds on our way!
While we do His good will
He abides with us still,
And with all who will trust and obey.`),new s(`Not a shadow can rise,
Not a cloud in the skies,
But His smile quickly drives it away;
Not a doubt nor a fear
Not a sigh nor a tear,
Can abide while we trust and obey`),new s(`Not a burden we bear,
Not a sorrow we share,
But our toil He doth richly repay:
Not a grief nor a loss,
Not a frown nor a cross,
But it blest if we trust and obey.`),new s(`But we never can prove,
The delight of His love,
Until all on the altar we lay:
For the favour He shows,
And the joy He bestows,
Are for them who will trust and obey.`),new s(`Then in fellowship sweet,
We will sit at His feet,
Or we\u2019ll walk by His side in the way;
What He says we will do,
Where He sends, we will go,
Never fear, only trust and obey.`)],"F",new f(`Trust and obey:
For there\u2019s no other way,
To be happy in Jesus,
But to trust and obey.`)),new c(242,"TRUST IN GOD, DO THE RIGHT",[new s(`Courage brother! Do not stumble
Though thy path be dark as night;
There's a star to guide the humble,
Trust in God, and do the right.`),new s(`Let the road be rough and dreary,
And its end far out of sight;
Foot it bravely! Strong or weary;
Trust in God, and do the right.`),new s(`Perish policy and cunning!
Perish all that fears the light,
Whether losing, whether winning,
Trust in God, and do the right.`),new s(`Trust no party, sect, or faction,
Trust no leaders in the light,
But in every word and action,
Trust in God, and do the right.`),new s(`Trust no lovely forms of passion,
Friends may look like angels bright;
Trust no custom, school, or fashion,
Trust in God, and do the right.`),new s(`Simple rule, and safest guiding,
Inward peace, and inward might;
Star upon our path abiding,
Trust in God, and do the right.`),new s(`Some will hate thee, some will love thee
Some will flatter some will slight;
Cease from man, and look above thee,
Trust in God, and do the right.`)],"Ab"),new c(243,"GOD MOVES MYSTERIOUSLY",[new s(`God moves in a mysterious way
His wonders to perform;
He plants His footsteps in the sea
And rides upon the storm.`),new s(`Deep in unfathomable mines
Of never-falling skill,
He treasures up His bright designs
And works His Sovereign will.`),new s(`Ye fearful saints, fresh courage take!
The clouds ye so much dread
Are big with mercy, and shall break
In blessing on your head.`),new s(`Judge not the Lord by feeble sense
But trust Him for His grace;
Behind a frowning providence
He hides a smiling face.`),new s(`His purposes will ripen fast,
Unfolding every hour;
The bud may have a bitter taste,
But sweet will be the flower.`),new s(`Blind unbelief is sure to err,
And scan His work in vain;
God is His own interpreter,
And He will make it plain.`)],"Bb"),new c(244,"IT IS WELL WITH MY SOUL",[new s(`When peace like a river, attendeth my way
When sorrows, like sea-billows, roll:
Whatever my lot, Thou has taught me to know,
\u201CIt is well, it is well with my soul\u201D`),new s(`If Satan should buffet, if trials should come,
Let this blest assurance control,
That Christ hath regarded my helpless estate,
And hath shed His own blood for my soul.`),new s(`My sin-oh, the bliss of this glorious thought-
My sin-not in part, but the whole,
Is nail'd to His Cross, and I bear it no more;
Praise the Lord, praise the Lord, O my soul!
For me, be it Christ, be it Christ hence to live!`)],"c",new f(`It is well\u2026 with my soul\u2026
It is well, it is well with my soul.`)),new c(245,"WHO IS ON THE LORD'S SIDE",[new s(`Who is on the Lord's side?
Who will serve the King?
Who will be His helpers,
Other lives to bring?
Who will leave the world's side?
Who will face the foe?
Who is on the Lord's side?
Who for Him will go?
By Thy call of mercy,
By Thy grace divine,
We are on the Lord's side,
Saviour, we are Thine!`),new s(`Not for weight of glory,
Nor for crown and palm,
Enter we the army,
Raise the warrior psalm;
But for love that claimeth
Lives for whom He died:
He whom Jesus nameth
Must be on His side!
By Thy love constraining,
By Thy grace divine,
We are on the Lord's side,
Saviour, we are Thine!`),new s(`Jesus, Thou hast bought us,
Not with gold or gem,
But with Thine own life-blood
For Thy diadem;
With Thy blessing filling
All who come to Thee,
Thou hast made us willing,
Thou hast made us free.
By Thy grand redemption,
By Thy grace divine,
We are on the Lord's side,
Saviour, we are Thine!`),new s(`Fierce may be the conflict,
Strong may be the foe;
But the King's own army
None can overthrow:
Round His standard raging,
Victory is secure,
For His truth unchanging
Makes the triumph sure,
Joyfully enlisting,
By Thy grace divine,
We are on the Lord's side
Saviour, We are Thine!`)],"C"),new c(246,"COME TO THE SAVIOUR",[new s(`Come to the Saviour, make no delay;
Here in His Word He has shown us the way;
Here in our midst He's standing to-day,
Tenderly saying, \u201CCome!\u201D`),new s(`\u201CSuffer the children!\u201D oh, hear His voice!
Let every heart leap forth and rejoice;
And let us freely make Him our choice,
Do not delay, but come.`),new s(`Think once again, He's with us to-day;
Heed now His blest command and obey;
Hear now His accents tenderly say,
\u201CWill you, my children, come?\u201D`)],"Eb",new f(`Joyful, joyful will the meeting be,
When from sin our hearts are pure and free,
And we shall gather, Saviour, with Thee,
In our Eternal home.`)),new c(247,"WHERE WILL YOU SPEND ETERNITY",[new s(`Where will you spend eternity?
This question comes to you and me!
Tell me, what shall your answer be?
Where will you spend eternity?`),new s(`Many are choosing Christ to-day,
Turning from all their sins away:
Heav'n shall their happy portion be,
Where will you spend eternity?`),new s(`Leaving the strait and narrow way,
Going the downward road to-day.
Sad will their final ending be-
Lost thro' a long eternity!`),new s(`Repent, believe, this very hour,
Trust in the Saviour's grace and power,
Then will your joyous answer be,
Sav'd thro' a long eternity!`)],"F",new f(`Eternity! Eternity!
Where will you spend eternity?`)),new c(248,"PRECIOUS TO ME",[new s(`Peace like a river is flooding my soul,
Since Christ, My Saviour, maketh me whole
Sweet peace abiding my portion shall be
Jesus, my Saviour, is precious to me.`),new s(`Joy is abounding-my heart gaily sings,
Cleave I the heavens, mount up on wings.
Christ hath exalted, my Soul He set free
Jesus, my Saviour, is precious to me.`),new s(`Oh, precious Jesus, how lowly Thou art!
Come, and abiding, rule in my heart:
Break ev'ry fetter. Thy face let me see.
Then Thou shall ever be precious to me.`)],"Eb",new f(`Pre\u2026cious to me\u2026
Pre\u2026cious is He\u2026
Jesus shall ever\u2026 be pre\u2026cious to me\u2026`)),new c(249,"DEEPER, DEEPER",[new s(`Deeper, deeper! In the love of Jesus
Daily let me go;
Higher, higher in the school of wisdom,
More of grace to know.`),new s(`Deeper, deeper! Blessed Holy Spirit,
Take me deeper still,
Till my life is wholly lost in Jesus,
And His perfect will.`),new s(`Deeper, deeper! Tho' it cost hard trials,
Deeper let me go!
Rooted in the holy love of Jesus
Let me fruitful grow.`),new s(`Deeper, higher, everyday in Jesus,
Till all conflict past,
Finds me conqueror, and in His own image,
Perfected at last.`)],"C",new f(`O deeper yet, I pray,
And higher everyday,
And wiser blessed Lord,
In Thy precious Holy Word.`)),new c(250,"AN OLD ACCOUNT SETTLED",[new s(`There was a time on earth when in the Book of Heav\u2019n
An old account was standing for sins yet unforgiv\u2019n
My name was at the top and many things below,
I went up to the Keeper and settled long ago.`),new s(`The old account was large and growing everyday,
For I was always sinning and never tried to pay,
But when I look ahead and saw such pain and woe,
I said that I would settle, and settled long ago.`),new s(`When at the judgement bar, I stand before my King,
And He the book will open, He cannot find a thing,
Then will my heart be glad while tears of joy will flow,
Because I had it settled and settled long ago.`),new s(`O sinner seek the Lord, repent of all your sins,
For thus He has commanded, if you would enter in,
And then if you should live, a hundred years below,
E\u2019en then you\u2019ll not regret it, you settled it long ago.`)],"F",new f(`Long ago, down on my knees, long ago,
Yes, the old account was settled long ago.
(Hallelujah)
And the record\u2019s clear today, for He washed my sins away,
When the old account was settled long ago.`)),new c(251,"RESCUE THE PERISHING",[new s(`Rescue the perishing, care for the dying,
Snatch them in pity from sin and the grave,
Weep o\u2019er the erring ones, lift up the fallen,
Tell them of Jesus, the mighty to save.`),new s(`Tho\u2019 they are slighting Him,
Still, He is waiting,
Waiting the penitent child to receive;
Plead with them earnestly,
Plead with them gently;
He will forgive if they only believe.`),new s(`Down in the human heart,
Crushed by the tempter,
Feelings lie buried; that grace can restore;
Touching by a loving heart,
Wakened by a kindness,
Chords that are broken will vibrate once more.`),new s(`Rescue the perishing,
Duty demands it;
Strength for thy Labour the Lord will provide;
Back to the narrow way patiently win them,
Tell the poor wand\u2019rer a Saviour has died.`)],"Ab",new f(`Rescue the perishing, care for the dying;
Jesus is merciful, Jesus will save.`)),new c(252,"JESUS IS CALLING",[new s(`Jesus is tenderly calling thee home
Calling today, Calling today;
Why from the sunshine of love
Wilt thou roam farther and farther away?`),new s(`Jesus is calling the weary to rest
Calling today, calling today;
Bring Him thy burden and thou shalt be blest,
He will not turn you away.`),new s(`Jesus is waiting, O come to Him now
Waiting today, waiting today;
Come with thy sins at His feet lowly bow;
Come, and no longer delay.`),new s(`Jesus is pleading, O list'n to His voice
Hear Him today, hear Him today;
They who believe on His name shall rejoice;
Quickly arise and away.`)],"C",new f(`Calling today! Calling today!
Jesus is calling,
Is tenderly calling to-day.`)),new c(253,"'TIS SO SWEET TO TRUST IN JESUS",[new s(`'Tis so sweet to trust in Jesus
Just to take Him at His word;
Just to rest upon His promise;
Just to know. 'Thus saith the Lord\u201D`),new s(`O! how sweet to trust in Jesus,
Just to trust His cleansing blood;
Just in simple faith to plunge me,
'Neath the healing cleansing flood.`),new s(`Yes! 'tis sweet to trust in Jesus,
Just from sin and self to cease;
Just from Jesus simply taking,
Life, and rest, and joy, and peace.`),new s(`I'm so glad I learned to trust Thee,
Precious Jesus, Saviour, Friend:
And I know that Thou art with me,
Wilt be with me to the end.`)],"Ab",new f(`Jesus, Jesus, how I trust Him;
How I've proved Him o'er and o'er,
Jesus, Jesus, Precious Jesus!
O! for grace to trust Him more.`)),new c(254,"SIN CAN NEVER ENTER THERE",[new s(`Heaven is a holy place,
Filled with glory and with grace,
Sin can never enter there;
All within its gate are pure
From defilement kept secure,
Sin can never enter there.`),new s(`If you want to dwell at last,
When your life on earth is past,
In that home so bright and fair,
You must here be cleans\u2019d from sin,
Have the Life of Christ within,
Sin can never enter there.`),new s(`You may live in sin below,
Heaven\u2019s grace refuse to know,
But you can not enter there;
It will stop you at the door,
Bar you out forever more,
Sin can never enter there.`),new s(`If you cling to sin till death,
When you draw your latest breath,
You will sink in dark despair,
To the region of the lost,
Thus to prove at awful cost,
Sin can never enter there`)],"",new f(`Sin can never enter there;
Sin can never enter there;
So, if at the Judgment bar,
Sinful spots your soul shall mar,
You can never enter there.`)),new c(255,"JOY UNSPEAKABLE",[new s(`It is joy unspeakable and full of glory,
Full of glory, full of glory
It is joy unspeakable and full of glory,
And a heart has never yet been told.`)],""),new c(256,"O WHY NOT TONIGHT",[new s(`O do not let the Word depart,
And close thine eyes against the light,
Poor sinner, harden not your heart,
Be saved, O tonight?`),new s(`Tomorrow's sun may never rise
To bless thy long deluded sight;
This is the time, O then, be wise
Be saved, O tonight.`),new s(`Our Lord in pity lingers still
And wilt thus His love requite?
Renounce at once thy stubborn will,
Be saved, O tonight.`),new s(`Our blessed Lord refuses none
Who would to Him their souls unite;
Believe, obey, the work is done,
Be saved, O tonight.`)],"",new f(`O why not tonight?
O why not tonight?
Wilt thou be save?
Then why not tonight?`)),new c(257,"I NEED THEE",[new s(`I need Thee ev\u2019ry hour,
Most gra-cious Lord;
No ten-der voice like Thine
Can peace af-ford.`),new s(`I need Thee ev\u2019ery hour;
Stay Thou near by;
Temp-ta-tions lose their power
When Thou art nigh.`),new s(`I need Thee ev-ery hour,
In joy or pain;
Come quick-ly and a-bide
Or life is vain.`),new s(`I need Thee ev\u2019ery hour,
Teach me Thy will;
And Thy rich promi-s-es
In me ful-fill.`),new s(`I need Thee every hour
Most Holy One
Oh make me Thine indeed
Thou blessed son.`)],"Ab",new f(`I need Thee, O I need Thee;
Ev\u2019ery hour I need Thee;
O bless me now, my saviour
I come to Thee!`)),new c(258,"I WOULD NOT BE DENIED",[new s(`When pangs of death seized on my soul,
Un-to the Lord I cried,
Till Je-sus came and made me whole,
I would not be denied.`),new s(`As Ja-cob in the days of old,
I wrestled with the Lord;
And instant, with a cour-age bold,
I stood up-on His Word.`),new s(`Old Sa-tan said my Lord was gone
And would not hear my pray'r,
But, praise the Lord! the work is done,
And Christ the Lord is here.`)],"",new f(`I would not be de-nied,
I would not be de-nied,
Till Jesus came and made me whole,
I would not be denied.`)),new c(259,"HE LEADETH ME",[new s(`He leadeth me! O blessed thought!
O words with heavenly comfort fraught!
Whate'er I do, where'er I be,
Still 'tis God's hand that leadeth me.`),new s(`Sometimes 'mid scenes of deepest gloom,
Sometimes when Eden's bowers bloom,
By waters still, o'er troubled seas,
Still 'tis His hand that leadeth me.`),new s(`Lord, I would clasp Thy hand in mine,
Nor ev-er murmur nor re-pine,
Content whatev-er lot I see,
Since 'tis my God that leadeth me!`),new s(`And when my task on earth is done,
When, by grace, the victory's won,
E'en death's cold wave, I will not flee
Since God thru Jordan leadeth me.`)],"C",new f(`He leadeth me, He leadeth me,
By His own hand He leadeth me:
His faithful follow'r I would be,
For by His hand He leadeth me.`)),new c(260,"I LOVE TO TELL THE STORY",[new s(`I love to tell the story,
Of unseen things above,
Of Jesus and His glory,
Of Jesus and His love,
I love to tell the story,
Because I know it's true,
It satisfies my longings,
As nothing else can do.`),new s(`I love to tell the story.
More wonderful it seems,
Than all the golden fancies,
Of all our golden dreams
I love to tell the story,
It did so much for me,
And that is just the reason,
I tell it now to thee.`),new s(`I love to tell the story,
'Tis pleasant to repeat,
What seems, each time I tell it,
More wonderfully sweet,
I love to tell the story,
For some have never heard,
The message of salvation,
From God's own Holy word.`),new s(`I love to tell the story,
For those who know it best,
Seem hungering and thirsting,
To hear it like the rest,
And when it seems of glory,
I sing the new, new song,
'twill be the old, old story,
That I have loved so long.`)],"Ab",new f(`I love to tell the story,
'twill be my theme in glory,
To tell the old, old, story
Of Jesus and His love.`)),new c(261,"JESUS SAVES",[new s(`We have heard a joyful sound.
Jesus saves! Jesus saves!
Spread the gladness all around,
Jesus saves! Jesus saves!
Bear the news to ev'ry land,
Climb the steeps and cross the waves,
Onward,'tis our Lord's command,
Jesus saves! Jesus saves!`),new s(`Waft it on the rolling tide,
Jesus saves! Jesus saves!
Tell to sinners far and wide,
Jesus saves! Jesus saves!
Sing, ye islands of the sea,
Echo back, ye ocean caves,
Earth shall keep her jubilee,
Jesus saves! Jesus saves!`),new s(`Sing above the battle's strife,
Jesus saves! Jesus saves!
By His death and endless life,
Jesus saves! Jesus saves!
Sing it softly thro' the gloom,
When the heart for mercy craves
Sing in triumph o'er the tomb,
Jesus saves! Jesus saves!`),new s(`Give the wind a mighty voice,
Jesus saves! Jesus saves!
Let the nations now rejoice,
Jesus saves! Jesus saves!
Shout salvation full and free,
Highest hills and deepest caves,
This our song of victory,
Jesus saves! Jesus saves!`)],"G"),new c(262,"THE SON HATH MADE ME FREE",[new s(`I was once in Egypt\u2019s bondage, Egypt\u2019s bondage
But deliverance came to me, came to me,
And I\u2019m living now in Canaan, now in Canaan,
For the Son hath made me free,
For the Son made me free.`),new s(`I was once slave to Satan, slave to Satan,
And He worked His will in me, yes in me;
But I\u2019m bound by sin no longer, bound no longer,
For the Son hath made me free,
For the Son made me free,`),new s(`Worldly pleasures can not charm me, cannot charm me,
No delight in them I see, none for me,
Fashion, folly, pride have left me, they have left me,
For the Son hath made me free
For the Son made me free`),new s(`All my fear all condemnation, condemnation,
All that stood \u2018twist\u2019 God and me, God and me,
Praise His name! are left behind me, Left behind me,
For the Son hath made me free
For the Son made me free.`)],"F",new f(`I am dwelling now in Canaan, now in Canaan
Jesus\u2019 Blood avails for me; yes for me;
I am free from condemnation
For the Son hath made me free.`)),new c(263,"NEARER TO THEE",[new s(`Nearer, my God, to Thee
Nearer to Thee
E'en though it be a cross
That raiseth me
Still all my song shall be
Nearer, my God, to Thee
Nearer, my God, to Thee
Nearer to Thee.`),new s(`Though like a wanderer
The sun gone down
Darkness be over me
My rest a stone
Yet in my dreams I'd be
Nearer, my God, to Thee
Nearer, my God, to Thee
Nearer to Thee.`),new s(`There let the way appear
Steps unto heav'n
All that Thou sendest me
In mercy giv'n
Angels to beckon me
Nearer, my God, to Thee
Nearer, my God, to Thee
Nearer, to Thee.`),new s(`Then with my waking thoughts
Bright with Thy praise
Out of my stony griefs
Bethel I'll raise
So by my woes to be
Nearer, my God, to Thee
Nearer, my God, to Thee
Nearer, to Thee.`),new s(`Or if on joyful wing
Cleaving the sky
Sun, moon, and stars forgot
Upward I fly
Still all my song shall be
Nearer, my God, to Thee
Nearer, my God, to Thee
Nearer, to Thee.`)],"G"),new c(264,"VICTORY AHEAD",[new s(`When the host of Israel, led by God,
Round the wall of Jericho softly trod;
Trusting in the Lord, the felt the conq\u2019ror\u2019s tread,
By faith they saw the victory ahead.`),new s(`David, with a shepherd\u2019s sling and five stones,
Met the giant on the field all alone;
Trusting in the Lord, He knew what God had said,
By faith he saw the victory ahead.`),new s(`Daniel prayed unto the Lord thrice each day,
Then unto the lion\u2019s den led the way;
Trusting in the Lord, he did not fear or dread,
By faith he saw the victory ahead.`),new s(`Often with carnal mind I was tried,
Asking for deliverance oft I cried,
Trusting in the Lord, I reckoned I was dead,
By faith I saw the victory ahead.`),new s(`When like those who\u2019ve gone before to that land,
By death\u2019s river cold and dark I shall stand;
Trusting in the Lord, I will not fear or dread,
By faith I see the victory ahead.`)],"Eb",new f(`Victory ahead! Victory ahead!
Thru the blood of Jesus victory ahead.
Trusting in the Lord I hear the conq\u2019ror\u2019s tread,
By faith I see the victory ahead.`)),new c(265,"FIGHT THE GOOD FIGHT",[new s(`Fight the good fight with all thy might
Christ is thy strength, and Christ thy right
Lay hold on life and it shall be
Thy joy and crown eternally.`),new s(`Run the straight race
Through God\u2019s good grace
Lift up thine eyes and seek His face
Lift with its path before us lies
Christ is the way and Christ the prize.`),new s(`Cast care aside;
Lean on thy guide
Lean, and His mercy will provide,
Lean, and the trusting soul shall prove
Christ is its life and Christ its love`),new s(`Faint not, nor fear;
His arms are near;
He changeth not and thou art dear;
Only believe and thou shalt see
That Christ is all in all to thee.`)],"C"),new c(266,"HOW SWEET THE NAME",[new s(`How sweet the name of Jesus sounds
In a believer's ear;
It soothes his sorrows, heals his wounds
And drives away his fear.`),new s(`It makes the wounded spirit whole,
And calms the troubled breast;
'tis manna to the hungry soul,
And to the weary rest.`),new s(`Dear name, the Rock on which I build
My shield and hiding-place,
My never-failing treasury, filled
With boundless stores of grace.`),new s(`Jesus, my Shepherd, Saviour, Friend.
My Prophet, Priest and King,
My Lord, my Life my Way, my End,
Accept the praise I bring.`),new s(`Till then, I would Thy love proclaim
With every fleeting breath;
And may the music of Thy name
Refresh my soul in death.`)],"C"),new c(267,"LORD SPEAK TO ME",[new s(`Lord, speak to me, that I may speak
In living echoes of Thy tone,
As thou hast sought, so let me seek,
Thy erring children lost and lone.`),new s(`Oh, lead me, Lord that I may lead,
The wandering and that wavering feet,
Oh, feed me, Lord, that I may feed,
Thy hungering once with manna sweet.`),new s(`Oh, strengthen me, that while I stand,
Firm on the rock, and strong in Thee,
I may stretch out a loving hand
To wrestlers with the troubled sea!`),new s(`Oh, teach me, Lord, that I may teach
The precious things Thou dost impart,
And wing my words, that they may reach
The hidden depths of many a heart!`),new s(`Oh, give Thine own sweet rest to me,
That I may speak, with soothing power
A word in season, as from Thee,
To weary ones in needful hour.`)],"F"),new c(268,"ABIDE WITH ME",[new s(`Abide with me; fast falls the eventide;
The darkness deepens; Lord, with me abide:
When other helper fail, and comforts flee,
Help of the helpless, oh, abide with me!`),new s(`Swift to its close ebbs out life's little day;
Earth's joy grows dim, its glories pass away;
Change and decay in all around I see;
O Thou, who changest not, abide with me.`),new s(`Come not In terrors, as the King of kings;
But kind and good, with healing in Thy wing;
Tears for all woes, a heart for every plea;
Come, Friend of sinners, thus abide with me.`),new s(`I need Thy presence every passing hour;
What but Thy grace can foils, the tempter's power?
Who like Thyself my guide and stay can be?
Through cloud and sunshine, oh, abide with me!`),new s(`I fear no foe, with Thee at hand to bless:
Ills have no weight, and tears no bitterness:
Where is death's sting? Where, grave, thy victory?
I triumph still, if Thou abide with me.`),new s(`Hold Thou Thy Cross before my closing eyes;
Shine through the gloom, and point me to the skies;
Heaven's morning breaks, and earth's vain shadows flee;
In life, in death, O Lord, abide with me!`)],"Ab"),new c(269,"THY KINGDOM COME, OH GOD",[new s(`Thy kingdom come, O God;
Thy rule, O Christ, begin:
Break with Thy iron rod
The tyrannies of sin.`),new s(`Where is Thy reign of peace;
And purity and love?
When shall all hatred cease,
As in the realms above?`),new s(`When comes the promise time
That war shall be no more,
And lust, oppression, crime,
Shall flee Thy face before?`),new s(`We pray Thee, Lord arise,
And come in Thy great might;
Receive our longing eyes,
Which languish for Thy sight`),new s(`Men scorn Thy sacred Name,
And wolves devour Thy fold;
By many deeds of shame
We learn that love grows cold.`),new s(`O\u2019er heathen lands afar
Thick darkness broodeth yet;
Arise, O Morning Star,
Arise, and never set.`)],"Eb"),new c(270,"STAND UP FOR JESUS",[new s(`Stand up, stand up for Jesus
Ye soldiers of the cross
Lift high His royal banner
It must not suffer loss
From victory unto victory
His army shall He lead
Till every foe is vanquished
And Christ is Lord indeed.`),new s(`Stand up, stand up for Jesus
The trumpet call obey
Forth to the mighty conflict
In this His glorious day
Ye who are men, now serve Him
Against unnumbered foes
Let courage rise with danger
And strength to strength oppose.`),new s(`Stand up, stand up for Jesus
Stand in His strength alone
The arm of flesh will fail you
Ye dare not trust your own
Put on the gospel armour
Each piece put on with prayer
Where duty calls or danger
Be never wanting there.`),new s(`Stand up, stand up for Jesus
The strife will not be long
This day the noise of battle
The next, the victor\u2019s song
To him that overcometh
A crown of life shall be
He, with the King of Glory
Shall reign eternally.`)],"Eb",new f("")),new c(271,"THY WAY NOT MINE O LORD",[new s(`Thy way, not mine, O Lord,
However dark it be;
Lead me by Thine own hand;
Choose out the path for me.`),new s(`Smooth let it be or rough,
It will be still the best,
Winding or straight, it leads
Right onward to Thy rest.`),new s(`I dare not choose my lot;
I would not if I might;
Choose thou for me, my God,
So shall I walk alright.`),new s(`The Kingdom that I seek
Is Thine; So let the way
That leads to it be Thine,
Else I must surely go astray.`),new s(`Take thou my cup, and it
With joy or sorrow fill,
As best to Thee may seem,
Choose Thou my good or ill.`),new s(`Choose Thou for me my friends,
My sickness or my health;
Choose Thou my cares for me
My poverty or wealth.`),new s(`Not mine, not mine the choice,
In things or great or small;
Be Thou my Guide, my Strength
My Wisdom, and my All.`)],"C"),new c(272,"I AM COMING LORD",[new s(`That calls me, Lord, to Thee
For cleansing in Thy precious blood
That flowed on Calvary.`),new s(`Though coming weak and vile,
Thou dost my strength assure;
Thou dost my vileness fully cleanse,
Till spotless all and pure.`),new s(`\u2018Tis Jesus call me on
To perfect faith and love,
To perfect hope, and peace and trust,
For earth and heaven above`),new s(`\u2018Tis Jesus who confirms
The blessed work within,
By adding grace to welcomed grace,
Where reigned the power of sin.`),new s(`And He the witness gives
To loyal hearts and free,
That every promise is fulfilled,
If faith but bring the plea.`),new s(`All hail, atoning blood!
All hail, redeeming grace!
All hail, the gift of Christ, our Lord,
Our strength and righteousness!`)],"F",new f(`I am coming, Lord
Coming now to Thee;
Trusting only in the blood
That flowed on Calvary.`)),new c(273,"GIVE ME OIL IN MY LAMP",[new s(`Give me oil in my Lamp,
Keep me burning,
Give me oil in my Lamp, I pray.
Give oil in my Lamp,
Keep me burning,
Keep me burning 'till the break of day.`),new s(`Make me a fisher of men,
Keep me seeking,
Make me a fisher of men, I pray.
Make me a fisher of men,
Keep me seeking,
Seeking souls \u2018till Jesus comes again.`),new s(`Give me joy in my heart,
keep me praising,
Give me joy in my heart, I pray.
Give me joy in my heart,
Keep me praising,
Keep me praising \u2018till the break of day.`),new s(`Give me love in my heart,
Keep me serving,
Give me love in my heart, I pray.
Give me love in my heart,
Keep me serving,
Keep me serving \u2018till the break of day.`)],"Eb",new f(`Sing Hosannah! Sing Hosannah!
Sing Hosannah to the King of kings!
Sing Hosannah! Sing Hosannah!
Sing Hosannah to the King!`)),new c(274,"THROUGH THE LOVE OF GOD",[new s(`Through the love of God our Saviour
All will be well;
Free and changeless is His favour,
All, All is well.
Precious is the Blood that healed us,
Perfect is the grace that sealed us,
Strong the hand stretched forth to shield us,
All will be well.`),new s(`Though we pass through tribulation,
All will be well;
Ours is such a free salvation,
All, all is well.
Happy, still in God confiding,
Fruitful, if in Christ abiding,
Holy, through the spirit's guiding
All will be well.`),new s(`We expect a bright tomorrow
All will be well;
Faith can sing through days of sorrow
All, all is well.
On our Father's love relying,
Jesus every need supplying,
Or in living, or in dying,
All will be well.`)],"G"),new c(275,"HE THAT IS DOWN",[new s(`He that is down needs fear no fall,
He that is low, no pride,
He that is humble ever shall
Have God to be his guide.`),new s(`I am content with what I have,
Little be it or much;
And, Lord, contentment still I crave;
Because Thou savest such.`),new s(`Fullness to such a burden is
That go on pilgrimage;
Here little, and hereafter bliss,
Is best from age to age.`)],"F"),new c(276,"WONDERFUL JESUS",[new s(`Wonderful, Wonderful, Jesus,
He is my friend, true to the end.
He gave himself to redeem me,
Jesus, wonderful Lord.`)],""),new c(277,"SEEK YE FIRST THE KINGDOM",[new s(`Seek ye first the kingdom of God,
And His righteousness.
And all these things,
Shall be added unto you,
Halle-lu-Hallelu-jah`),new s(`Man shall not live by bread alone.
But by every Word
That proceedeth from the mouth of God.
Halle-lu-Hallelu-jah`),new s(`Ask, and it shall be given unto you,
Seek, and ye shall find.
Knock, and it shall be opened unto you.
Halle-lu-Hallelu-jah`)],""),new c(278,"TAKE MY HAND, PRECIOUS LORD",[new s(`Precious Lord, take my hand,
Lead me on, let me stand,
I'm tired, I\u2019m weak, I\u2019m lone,
Through the storm, through the night,
Lead me on to the light:
Take my hand precious Lord,
Lead me home.`),new s(`When my way grows drear,
Precious Lord, linger near,
When my light is almost gone,
Hear my cry, hear my call,
Hold my hand lest I fall:
Take my hand precious Lord,
Lead me home.`),new s(`When the darkness appears
And the night draws near,
And the day is past and gone,
At the river I stand,
Guide my feet, hold my hand:
Take my hand precious Lord,
Lead me home.`),new s(`When my work is all done,
And my race here is run,
Let me see by the light,
Thou hast shown,
That fair city so bright,
Where the lamb is the light:
Take my hand precious Lord,
Lead me home.`)],""),new c(279,"WELCOME",[new s(`WELCOME, welcome, welcome,
Holy Ghost we welcome Thee,
Come with power this very hour,
Holy Ghost we welcome Thee,`)],""),new c(280,"THANK YOU LORD FOR SAVING ME",[new s(`THANK you, thank you Lord for saving me;
Thank you, thank you Lord for setting me free.
Once I was lost, but now I am found,
Now my soul is heaven bound.
Thank you, thank you Lord for saving me.`)],""),new c(281,"ALL THAT I HAVE",[new s(`All that I have, all that I am,
All I shall ever be,
Cannot repay the love debt I owe,
I surrender to Thee.`)],""),new c(282,"JESUS, NAME ABOVE ALL NAMES",[new s(`Jesus, name above all names
Beautiful Saviour, glorious Lord
Emmanuel, God is with us
Blessed redeemer, Living word`)],""),new c(283,"HE BROUGHT ME IN",[new s(`HE brought me in, He brought me in,
Oh, I thank God, He brought me in,
Just look out yonder, where I have been,
Oh, I thank God, He brought me in.`),new s("(He took me in \u2026)"),new s("(He brought me out \u2026)")],""),new c(284,"IT\u2019S SETTING ME FREE",[new s(`IT\u2019S setting me free,
This Holy Ghost power;
It\u2019s setting me free, this very hour;
It\u2019s down in my soul
It\u2019s making me whole;
It\u2019s setting me free, free, free,
This holy Ghost power.`)],""),new c(285,"IN THE UPPER ROOM",[new s(`In the upper-room with Jesus,
Sitting at His nail-scarred feet,
Oh, what rich and full communion,
Fellowship divine and sweet.`)],""),new c(286,"GREAT IS THE LORD & GREATLY TO BE PRAISED",[new s(`Great is the Lord and greatly to be praised,
In the city of our God,
In the mountain of His holiness,
Beautiful for situation,
The joy of the whole earth
Is mount Zion on the sides of the north,
The city of the great King,
Is mount Zion on the sides of the north
The city of the great King!`)],"")];var ly=[new c(287,"LET EVERYTHING WITHIN ME",[new s(`Let everything within me, cry Holy
Let everything within me, cry Holy
Holy, Holy, Holy is the lamb that was slain.`),new s(`Let everything within me, cry Glory
Let everything within me, cry Glory
Glory, glory, glory to the Lamb that was slain.`),new s("(Let everything within me, cry Jesus \u2026)"),new s("(Let everything within me, cry Worthy \u2026)")],""),new c(288,"I WANT GOD\u2019S WAY",[new s(`I Want God\u2019s way to be my way,
As I journey here below.
For there is no other highway
That a child of God should go.
Though the road be steep and rough,
If He leads me it\u2019s enough,
I want God\u2019s way to be my way every day.`)],""),new c(289,"THIS IS THE EVENING TIME",[new s(`This is the evening time,
It\u2019s later than you think.
The bride is preparing now
For her Lord to meet.
All things are ready now.
The bridegroom, I hear;
He that hath an ear to hear,
The evening time is here.`)],""),new c(290,"EVERY PROMISE IS MINE",[new s(`Every promise in the book is mine
Every chapter, every verse, every line
I am trusting in His love divine,
Every promise in the book is mine.`)],""),new c(291,"IN THE NAME OF JESUS",[new s(`In the name of Jesus, in the name of Jesus
We have the victory,
In the Name of Jesus, in the name of Jesus
Demons will have to flee.
When we stand in the name of Jesus,
Tell me who can stand before,
In the precious Name of Jesus,
We have the victory.`)],""),new c(292,"JESUS BLOOD",[new s(`Jesus blood will never lose its power.
No never; no never!
Jesus blood avails for sin forever,
And will never lose its power.`)],""),new c(293,"GOD IS SO GOOD",[new s(`GOD Is so good,
GOD Is so good,
GOD Is so good,
He's so good to me.`),new s(`He saved my sin-sick soul,
He set my spirit free,
He healed my broken heart,
He's so good to me.`),new s("(He answers prayer \u2026)"),new s("(I love Him so \u2026)"),new s("(He's coming soon \u2026)")],""),new c(294,"GLAD DAY",[new s(`Glad day when I was born again
Glad day when I was born again.
Glad day when I was born again.
It was a glad day when I was born again.`),new s(`The sins I used to do, I do them no more,
The sins I used to do, I do them no more,
The sins I used to do, I do them no more,
It was a glad day when I was born again.`)],""),new c(295,"THIS IS THE DAY",[new s(`This is the day, this is the day
That the Lord has made,
That the Lord has made.
We will rejoice, we will rejoice
And be glad in it, and be glad in it.
This is the day that the Lord has made;
We will rejoice and be glad in it,
This is the day, this is the day
That the Lord has made.`)],""),new c(296,"I LIKE THE OLD TIME WAY",[new s(`I like the old time singing, shouting
I like the old-time way,
I like the old time singing, shouting
Preaching, praying,
I like the old-time way.`),new s(`I sing about my Saviour everywhere I go.
Everywhere I go, everywhere I go:
I sing about my Saviour everywhere I go,
For there\u2019s joy, joy in my soul.`)],""),new c(297,"HE IS LORD",[new s(`Jehovah of the Old Testament is Jesus Christ
of the New Testament,
My Lord my God, is Jehovah the Almighty
He has been given a name above all names.
Every knee shall bow and every tongue confess.
He has been given a name above all names
That Jesus Christ is the Lord.`),new s(`He is Lord, He is Lord, (Amen)
He has risen from the dead, He is Lord.
Every knee shall bow, every tongue, confess.
That Jesus Christ is Lord.`)],""),new c(298,"WE SHALL OVERCOME",[new s(`We shall overcome, we shall overcome,
By the words of our mouths,
And the blood of the Lamb,
We shall overcome.`)],""),new c(299,"WORTHY",[new s(`Worthy, worthy,
Worthy, the lamb that was slain,
Worthy, worthy,
Worthy, the lamb that was slain.`),new s(`Praise him, praise him,
Praise the lamb that was slain,
Praise him, praise him,
Praise the lamb that was slain.`),new s("(Love him\u2026)"),new s("(Serve him\u2026)")],""),new c(300,"CREATE IN ME A CLEAN HEART",[new s(`Create in me a clean heart, O God
And renew a right spirit within me.
Create in me a clean heart, O God
And renew a right spirit within me.
Cast me not away from thy presence, Oh God
And take not Thy Holy Spirit from me
Restore unto me the joy of Thy salvation
And renew a right spirit within me.`)],""),new c(301,"HEAVENLY FATHER, I APPRECIATE YOU",[new s(`Heavenly Father, I appreciate you,
Heavenly Father I appreciate you,
I love you, adore you, bow down before you,
Heavenly Father, I appreciate you.`),new s(`Son of God, what a wonder you are
Son of God, what a wonder you are,
You cleansed my soul from sin,
You set the Holy Ghost within me,
Son of God, what a wonder You are.`),new s(`Holy Spirit you\u2019re a comfort to me
Holy Spirit you\u2019re a comfort to me,
You lead me, you guide me,
You\u2019re dwelling inside me,
Holy Spirit you\u2019re a comfort to me.`)],""),new c(302,"BEHOLD I LIVE",[new s(`John was in the spirit on the Lord\u2019s day,
He heard a voice from Heaven
And this is what it said;
I\u2019m the Alpha and Omega
The beginning and the end;
Behold I live forevermore.
Behold I live, behold I live,
Behold I live forevermore,
Behold I live, behold I live,
Behold I live forevermore.`)],""),new c(303,"TOUCHING JESUS",[new s(`A woman tried many phy-si-cians
Yet grew worse, so to Jesus she came;
And when the crowd tried to restrain her,
She whis-pered, these word thro\u2019 her pain.`),new s(`I was bound when I knelt at that old altar,
But they said Je-sus! Could meet ev\u2019ry need;
(And) when this pris-\u2018ner could fin-ly touched Je-sus;
He set me free, praise the Lord! I\u2019m free indeed.`)],"",new f(`Touching Jesus is all that (really) matters,
Then your life will never be the same,
And there\u2019s only one way to touch Him
Just believe when you call on His name.`)),new c(304,"I WANT MORE OF JESUS",[new s(`I want more of Jesus
More and more and more
I want more of Jesus
Than I\u2019ve ever had before,
I want more of His great love
So rich, so full and free.
I want more of Jesus,
So I\u2019ll give Him more of me.`)],""),new c(305,"I'M A NEW CREATION",[new s(`Hallelujah, He redeemed me,
I\u2019ve been born again to win,
I thank God, He justified me
Of His fullness have we all received of Him
I\u2019m a new creation, I'm a brand-new man,
Old things are passed away, I am born again,
More than a conqueror, that's who I am,
I am a new creation, I'm a brand-new man.`)],""),new c(306,"GOD CAN DO ANYTHING",[new s(`God can do anything, anything, anything,
My God can do anything,
He made the earth and all therein,
He saved my soul from every sin,
My God can do anything.`)],""),new c(307,"HE\u2019S CHANGING ME",[new s(`From glory to glory He\u2019s changing me,
Changing me, changing me.
His likeness and image to perfect in me,
The love of God shown to the world
For He\u2019s changing, changing me,
From earthly things to the heavenly.
His likeness and image to perfect in me,
The love of God shown to the world.`)],""),new c(308,"BRIGHTEN THE CORNER",[new s(`Brighten the corner where you are
Brighten the corner where you are
Someone far from Jesus
May behold your light afar
Brighten the corner where you are.`),new s(`Brighten the corner where you are,
Brighten the corner where you are,
Shine your light for Jesus
You must shine it from your heart
Brighten the corner where you are.`)],""),new c(309,"IT\u2019S THE LIFE",[new s(`It\u2019s the life behind the name,
That makes the demons tremble.
It\u2019s the life behind the name,
That makes the proud heart humble.
It was God who devised a plan,
That in all things like a man,
He would live, so He could give
To us the life behind the name.`)],""),new c(310,"HOSANNA",[new s(`Oh, magnify the Lord with me,
For He is worthy to be praised.
Oh, magnify the Lord with me,
For He is worthy to be praised.`),new s(`Glory, glory to His name,
He lives and reigns forevermore.
Glory, glory to His name,
He lives and reigns forevermore.`),new s(`Jehovah Jireh is His name
For He provideth all my needs.
Jehovah Jireh is His name
For He provideth all my needs.`)],"",new f(`Hosanna! Blessed be the Rock,
Blessed be the Rock of my salvation!
Hosanna! Blessed be the Rock,
Blessed be the Rock of my Salvation!`)),new c(311,"KNOW YE NOT",[new s(`Know ye not, know ye not, ye are the temple
Know ye not, know ye not, ye are the temple
Know ye not, know ye not, ye are the temple
Ye are the temple of the Holy Ghost.`),new s(`Yes I know, yes I know I am a temple
Yes I know, yes I know I am a temple
Yes I know, yes I know I am a temple
I am a temple of the Holy Ghost.`),new s(`Full of praise, full of power, full of glory
Full of praise, full of power, full of glory
Full of praise, full of power, full of glory
I am a temple of the Holy Ghost.`)],""),new c(312,"KEEP ME TRUE",[new s(`Keep me true, Lord Jesus keep me true,
Keep me true, Lord Jesus keep me true,
There\u2019s a race that I must run,
There are victories to be won,
Give me power, every hour, to be true.`)],""),new c(313,"LONGING FOR JESUS",[new s(`Longing, longing for Jesus
I have a longing in my heart for Him
Just to be near Him, to feel His presence
I have a longing in my heart for Him.`)],""),new c(314,"EMMANUEL",[new s(`Emmanuel, Emmanuel;
His name is called Emmanuel.
He\u2019s God with us, revealed in us.
His name is called Emmanuel.`)],""),new c(315,"JESUS, JESUS, JESUS",[new s(`Jesus, Jesus, Jesus
There\u2019s just something about that name,
Master, Saviour, Jesus!
Like the fragrance after the rain.
Jesus, Jesus, Jesus!
Let all Heaven and earth proclaim,
Kings and kingdoms will all pass away,
But there\u2019s something about the name!`)],""),new c(316,"I\u2019LL SAY YES",[new s(`I\u2019LL say yes, yes, yes.
I\u2019ll say yes, yes, yes.
I\u2019ll say yes Lord; I\u2019ll say yes Lord.
I\u2019ll say yes, yes, yes.`)],""),new c(317,"JUST ANY DAY NOW",[new s(`Each time I stop and take time to look around me;
I see the sign of His appearing everywhere,
The things He said will come to pass are now before us
And I feel a strong excitement in the air.`),new s(`Oh, there is this longing in my heart of His appearing;
I\u2019ll gladly leave behind these trails here below,
For the journey has been long and I\u2019m so weary,
But Lord somehow, I feel I\u2019m so much closer home.`)],"",new f(`Just any day now our Lord is coming He\u2019ll be returning,
For you and me oh I\u2019ve been waiting and I\u2019ve
been watching
Just any day now, His face I\u2019ll see.`)),new c(318,"ALL HAIL KING JESUS",[new s(`All hail king Jesus, all hail Emmanuel,
King of kings, Lord of lords,
Bright morning star
And throughout eternity
I\u2019m going to praise Him
And forevermore, I will reign with Him.`)],""),new c(319,"WHAT A MIGHTY GOD",[new s(`What a mighty God we serve,
What a mighty God we serve,
Angels bow before Him,
Heaven and earth adore Him,
What a mighty God we serve.`)],""),new c(320,"BLESS THE LORD O MY SOUL",[new s(`Bless the Lord O my soul
Bless the Lord O my soul
And all that is within me
Bless (Praise) His Holy Name.`)],""),new c(321,"I'LL FLY AWAY",[new s(`Some glad morning when this life is o'er
I'll fly away,
To a home on God's celestial shore,
I'll fly away.`),new s(`When the shadows of this life have grown,
I'll fly away;
Like a bird from prison bars has flown,
I'll fly away.`),new s(`Just a few more weary days and then,
I'll fly away;
To a land where joys shall never end,
I'll fly away.`)],"",new f(`I'll fly away, O glory, I'll fly away;
When I die, (I won't die) hallelujah by and by,
I'll fly away.`)),new c(322,"THE GREAT EMANCIPATOR",[new s(`Once my heart and soul were fettered
By the binding chains of sin.
But the Great Emancipator,
Set me free to worship Him.`),new s(`Like a lost lamb I was drifting
O so helpless and alone,
But the seeking Shepherd found me,
Led me to my Father's home.`)],"",new f(`Glory, Glory, Hallelujah,
Blessed be His Holy name!
He's that Great Emancipator,
That's the song of the Redeemed!`)),new c(323,"THE ORIGINAL LIFE",[new s(`God\u2019s attributes were manifested
To His Bride in this last age.
We have caught the revelation
By the last prophets' message.
And we know who we are
And what we are raised up for,
Praise the Lord, for the Original Life.`),new s(`We are the word made flesh today
This is what the Scriptures say.
And our names are seen within,
Redeemed and perfect without sin.
Yes, we are anointed and inspired
By our God, who's the Original Life.`),new s(`Our eyes of understanding
He has opened up at last.
And sweet victory is ours
Who were chained down in the past.
True jubilee has responded
To our God, Who's the Original Life.`),new s(`We are called unto adoption
Full authority and power.
Sleeping saints will wake and join us
For translation in this hour.
Gentiles' days soon will be over
Glory, hallelujah!
To our God, Who's the Original Life.`)],"",new f(`The Original Life, the Original Seed
The Original word is what I believe.
The son of Man is revealed
The seventh seal is unveiled
The Original Life, the original seed.`)),new c(324,"THE CHURCH\u2019S ONE FOUNDATION",[new s(`The church\u2019s one foundation
Is Jesus Christ her Lord
She is His new creation
By water and the word
From heaven He came and
sought her to be His holy bride
With His own blood He bought her
And for her life He died.`),new s(`Elect from every nation
Yet one o\u2019er all the earth
Her charter of salvation
One Lord, one faith, one birth
One holy name she blesses
Partakes one holy food
And to one hope she presses
With every grace endued.`),new s(`Though with a scornful wonder
Men see her sore oppressed
By schisms rent asunder
By heresies distressed
Yet saints their watch are keeping
Their cry goes up, \u201Chow long?\u201D
And soon the night of weeping`),new s(`\u2018Mid toil and tribulation
And tumult of her war
She waits the consummation
Of peace forevermore
Till with the vision glorious
Her longing eyes are blest
And the great Church victorious
Shall be the Church at rest.`)],""),new c(325,"HIS BANNER OVER ME IS LOVE",[new s(`He brought me to His banqueting table
His banner over me is love;
He brought me to His banqueting table
His banner over me is love;
He brought me to His banqueting table
His banner over me is love;
His banner over me is love.`),new s(`He set straight paths before my feet
His banner over me is love,
He set straight paths before my feet
His banner over me is love,
He set straight paths before my feet
His banner over me is love,
His banner over me is love.`),new s(`He broke the chains and He set me free
His banner over me is love
He broke the chains and He set me free
His banner over me is love
He broke the chains and He set me free
His banner over me is love
His banner over me is love.`),new s(`I am my Beloved's and He is mine
His banner over me is love,
I am my Beloved's and He is mine
His banner over me is love,
I am my Beloved's and He is mine
His banner over me is love,
His banner over me is love.`),new s(`I'm safe and secure in the rock of ages
His banner over me is love,
I'm safe and secure in the rock of ages
His banner over me is love,
I'm safe and secure in the rock of ages
His banner over me is love,
His banner over me is love.`)],""),new c(326,"WE ARE HEIRS",[new s(`We are heirs of the Father
We are joint-heirs with the son.
We are people of His Kingdom
We are family, we are one.`),new s(`We are washed, we are sanctified.
We are cleansed by His blood.
We are born of the spirit
We are children of the Lord.`),new s(`We are members of His body
We are objects of His love.
We're partakers of His holiness
We are citizens of heaven above.`),new s(`We're partakers of His suffering;
We're partakers of His grace.
We shall meet Him to be like Him
We shall see Him face to face.`),new s(`We are longing for His coming
We are looking to the skies;
We are watching, we are waiting,
We shall dwell with Him, we shall rise.`),new s(`We shall reign with Him forever;
Men and angels shout and sing.
For dominion has been given
To the family of the King.`)],""),new c(327,"HE TOUCHED ME",[new s(`Shackled by a heavy burden
'Neath a load of guilt and shame,
Then the hand of Jesus touched me,
And now I am no longer the same.`),new s(`Since I met this blessed Saviour,
Since He cleansed and made me whole,
I shall never cease to praise Him,
I'll shout it while eternity rolls.`)],"",new f(`He touched me,
Yes, He touched me;
And oh, the joy
That floods my soul,
Something happened,
And now I know,
He touched me
And made me whole.`)),new c(328,"THIS WORLD IS NOT MY HOME",[new s(`This world is not my home
I'm just a' passing through
My treasures are laid up
Somewhere beyond the blue.
The angels beckon me
From heaven's open door
And I can't feel at home
In this world anymore.`),new s(`They're all expecting me
And that's one thing I know
I fixed it up with Jesus
Many years ago.
I know He'll see me through
Tho' I am weak and poor
And I can't feel at home
In this world anymore.`),new s(`I have a loving mother
Just over in glory land
And I don't expect to stop
until I shake her hand
She's waiting now for me
In heaven's open door
And I can't feel at home
In this world anymore`),new s(`Just over in Gloryland,
We'll live eternally;
The saints on every hand
Are shouting \u201CVICTORY\u201D
The songs of sweetest praise
Drift back from heaven's shore
And I can't feel at home
In this world anymore.`)],"",new f(`O Lord you know,
I have no friend like you
If heaven's not my home
Then Lord what will I do?
The angels beckon me
From heaven's open door
And I can't feel at home
In this world anymore.`)),new c(329,"BORN, BORN, BORN AGAIN",[new s(`Born, born, born again
Thank God I\u2019m born again,
Born, born, born again,
Thank God I\u2019m born again,
Born of the water
And the Spirit and the blood
Thank God I\u2019m born again,
Born of the water
And the Spirit and the blood
Thank God I\u2019m born again.`)],""),new c(330,"I'M IN THAT NUMBER",[new s(`I'm in that number, I'm in that number,
I'm in that number robed in white;
I'm in that number, I'm in that number,
I'm in that number robed in white.`),new s(`That blood-washed number,
I'm in that number robed in white;
That blood-washed number,
That blood-washed number,
I'm in that number robed in white.`),new s(`John saw that number,
That blood-washed number,
John saw that number all robed in white;
John saw that number,
That blood-washed number,
John saw that number robed in white.`)],""),new c(331,"GLORIOUS PEACE",[new s(`Glorious peace that never shall cease,
Heartaches can\u2019t enter these beautiful streets,
No pain, no woe, no rich, no poor,
It\u2019s glorious to know that we\u2019re nearing the shore.`)],"",new f(`We\u2019re nearing the shore,
We\u2019re nearing the shore,
Troubles soon will be over, we\u2019ll suffer no more,
Trials all past, it\u2019s victory at last,
O it is wonderful to be nearing the shore.`)),new c(332,"GOODNESS AND MERCY",[new s(`A pilgrim was I and a wand\u2019ring,
In the cold night of sin I did roam,
When Jesus the Good Shepherd Found me,
And now I am on my way home.`),new s(`He restoreth my soul when I\u2019m weary,
He giveth me strength day by day,
He leads me beside the still waters
He guards me each step of the way.`),new s(`When I walk thro\u2019 the dark lonesome valley,
My saviour will walk with me there,
And safely His great hand will lead me,
To the mansions He\u2019s gone to prepare.`)],"",new f(`Surely Goodness and mercy shall follow me,
All the days, all the days of my life.
Surely Goodness and Mercy shall follow me,
All the days, all the days of my life.
And I shall dwell in the house of the Lord forever,
And I shall feast at the table spread for me,
Surely Goodness and Mercy shall follow me,
All the days, all the days of my life.`)),new c(333,"MY GLORY",[new s(`My glory and the lifter of my head
My glory and the lifter of my head
For Thou O Lord art a shield to me
My gory and the lifter of my head.`)],"",new f(`I cried unto the Lord with my voice
I cried unto the Lord with my voice
And He heard me out of His holy hill\u2026`)),new c(334,"ALL OVER THE WORLD",[new s(`All over the world
The Spirit is moving,
All over the world
As the Prophet said it would be,
All over the world
There's a mighty revelation,
Of the glory of the Lord,
As the waters cover the sea.`),new s(`All over the Church
The Spirit is moving,
All over the Church
As the Prophet said it would be,
All over the Church
There's a mighty revelation
Of the glory of the Lord,
As the waters cover the sea.`),new s(`Deep down in my heart
The Spirit is moving,
Deep down in my heart
As the Prophet said it would be,
Deep down in my heart
There's a mighty revelation
Of the glory of the Lord,
As the waters cover the sea.`)],""),new c(335,"THY LOVING KINDNESS",[new s(`Thy loving kindness is better than life
Thy loving kindness is better than life
My lips shall praise Thee, thus will I bless Thee
Thy loving kindness is better than life.`),new s(`I\u2019ll lift my hands up unto Thy name
I\u2019ll lift my hands up unto Thy name
My lips shall praise Thee, thus will I bless Thee
Thy loving kindness is better than life.`)],""),new c(336,"TO GOD BE THE GLORY",[new s(`To God be the glory
To God be the glory
To God be the glory
For the things He has done.
With His blood He has saved me,
With His power He has raised me,
To God be the glory
For the things He has done.`)],""),new c(337,"OH, COME LET US ADORE HIM",[new s(`Oh, come let us adore Him,
Oh, come let us adore Him,
Oh, come let us adore Him,
Christ the Lord.`),new s(`For He alone is worthy,
For He alone is worthy,
For He alone is worthy,
Christ the Lord.`),new s(`He is the Lily of the Valley,
He is the Lily of the Valley,
He is the Lily of the Valley,
Christ the Lord.`)],""),new c(338,"THOU WILT KEEP HIM IN PERFECT PEACE",[new s(`Thou wilt keep Him in perfect peace
Thou wilt keep Him in perfect peace
Thou wilt keep Him in perfect peace
Whose mind is stayed on Thee.`),new s(`Marvel not that I say unto you
Marvel not that I say unto you
Marvel not that I say unto you
You must be born again.`),new s(`Though your sins as scarlet be
Though your sins as scarlet be
Though your sins as scarlet be
They shall be white as snow.`),new s(`If the Son shall set you free
If the Son shall set you free
If the Son shall set you free
You shall be free indeed.`)],""),new c(339,"GRACIOUS FATHER",[new s(`Gracious Father, gracious Father,
We\u2019re so blest to be your children, gracious Father,
And we lift our hearts before you,
As a token of our love,
Gracious Father, gracious Father.`),new s(`Precious Jesus, precious Jesus,
We\u2019re so glad that you\u2019ve redeemed us, precious Jesus,
And we lift our hands before you,
As a token of our love,
Precious Jesus, precious Jesus.`),new s(`Holy Spirit, Holy Spirit,
Come and fill our hearts anew, Holy Spirit.
And we lift our voice before you,
As a token of our love,
Holy Spirit, Holy Spirit.`),new s(`Hallelujah, hallelujah,
Hallelujah, hallelujah,
And we lift our hearts before you,
As a token of our love,
Hallelujah, hallelujah.`)],""),new c(340,"UNTO THEE O LORD",[new s(`Unto Thee O Lord do I lift up my soul.
Unto Thee O Lord do I lift up my soul.`),new s(`Remember not the sins of my youth.
Remember not the sins of my youth.`),new s(`All the paths of the Lord are mercy and truth.
All the paths of the Lord are mercy and truth.`),new s(`Turn Thee unto me, and have mercy upon me.
Turn Thee unto me, and have mercy upon me.`),new s(`O keep my soul and deliver me.
O keep my soul and deliver me.`),new s(`Let integrity and uprightness preserve me.
Let integrity and uprightness preserve me.`)],"",new f(`O my God, I trust in Thee
Let me not be ashamed
Let not mine enemies triumph over me.`)),new c(341,"MY JESUS I LOVE THEE",[new s(`My Jesus, I love thee, I know Thou art mine,
For Thee all the follies of sin I resign;
My gracious Redeemer, my Saviour art Thou;
If ever I love Thee, my Jesus, tis now,`),new s(`I love Thee because Thou hath first loved me,
And purchased my pardon on Calvary's tree;
I love Thee for wearing the thorns on Thy brow,
If ever I love Thee my Jesus tis now.`),new s(`I\u2019ll love Thee in life, I will love Thee in death,
And praise Thee as long as Thou lendest me breath,
And say should the death dew lie cold on my brow,
If ever I loved Thee, my Jesus \u2018tis now!`),new s(`In mansions of glory and endless delight,
I'll ever adore Thee in heaven so bright;
I'll sing with the glittering crown on my brow;
If ever I loved Thee my Jesus tis now.`)],""),new c(342,"THERE IS A RIVER",[new s(`There is a river that flows from deep within,
There is a fountain that frees the soul from sin,
Come to its water, there is a vast supply,
Jesus is the river, that never shall run dry.`),new s(`There is a river that flows from God above,
There is a fountain that\u2019s filled with His great love.
Come to its water, there is a vast supply,
Jesus is the river, that never shall run dry.`)],""),new c(343,"LET THE LORD HAVE HIS WAY",[new s(`Let the Lord have His way,
In your heart every day;
There's no rest, there's no peace,
'Till the Lord has His way.
Place your life in His hands,
Rest secure in His plans,
Let the Lord, let the Lord
Have His way.`)],""),new c(344,"ONLY TO BE WHAT HE WANTS",[new s(`Only to be what He wants me to be,
Every moment of every day,
Yielded completely to Jesus alone,
Every step of this pilgrim way.
Just to be clay in the Potter\u2019s hand,
Ready to do what His word commands,
Only to be what He wants me to be,
Every moment of every day.`)],""),new c(345,"JESUS IS ALIVE",[new s(`Jesus is alive, Jesus is alive;
His is the blood that ransomed me,
His is the power that sets me free,
His is the life that is given to me,
For Jesus is alive.`)],""),new c(346,"MAGNIFY THE LORD WITH ME",[new s(`O Magnify the Lord with me,
Blessed lamb of Calvary,
For His grace so rich and free,
Magnify the Lord with me.
Magnify the Lord with me,
Blessed Lamb of Calvary
Jesus gives the victory
O magnify the Lord with me.`)],""),new c(347,"THAT SOUNDS LIKE HOME TO ME",[new s(`Somewhere just across the Jordan river
Is a place of everlasting joy and peace
The tree of life is blooming there forever
And the crown of life is waiting there for me.`),new s(`He said there\u2019s mansion there inside the city
The crystal river flowing by the tree of life
No pain nor disappointment ever come there
And Jesus Christ the Lamb will be the Light.`)],"",new f(`That sounds like home to me,
That\u2019s where I long to be.
There\u2019ll be no tears
To dim our eyes again.
The hills will echo with the story
As we sing of His grace and glory;
Where the saints of God will be,
That sounds like home to me.`)),new c(348,"THE TOMB NOW IS EMPTY",[new s(`The tomb now is empty,
The stone is rolled away,
And Christ is alive in my heart.
And death which is conquered
In me hath no part,
For Christ is alive in my heart.`)],""),new c(349,"JESUS TOOK MY BURDEN",[new s(`Yes, Jesus took my burden,
I could no longer bear,
Yes, Jesus took my burden
In answer to my prayer,
My anxious fears subsided,
My spirit was made strong
For Jesus took my burden
And left me with a song.`)],""),new c(350,"NOT BY MIGHT",[new s(`Not by might, nor by power,
But by my Spirit, saith the Lord
Not by might, nor by power,
But by my Spirit, saith the Lord
This mountain shall be removed
This mountain shall be removed
This mountain shall be removed
By my Spirit, saith the Lord.`)],""),new c(351,"THOU ART WORTHY",[new s(`Thou art worthy, Thou art worthy,
Thou art worthy O Lord,
To receive glory, glory and honour
Glory and honour and power,
For Thou hast created all things
And for Thy pleasure, they are and were created.`)],""),new c(352,"REVELATION 22:1",[new s(`And He showed me a pure river
Of water of life, clear as crystal,
Proceeding out of the throne of God.
In the midst of the street of it,
And on either side of the river,
Was there the tree of life.`)],""),new c(353,"THE LORD REIGNETH",[new s(`The Lord reigneth, the Lord reigneth.
Blessed be the name of our God.
The Lord reigneth, the Lord reigneth.
Blessed be the name of our God.
Let the heavens be glad
And the earth rejoice.
Let men say among the nations:
The Lord reigneth, the Lord reigneth.
Blessed be the name of our God.`)],""),new c(354,"I AM ONE OF THE FEW",[new s(`I am one of the few. one of the few,
And by faith in God's word, I can claim it.
Tho' the way may seem long,
Tho' the opposition strong,
For the Bride there's a way provided.
If I plan to go through
Just to hope will not do,
I must be firmly decided
To follow the Lord by obeying His word
And believe that I'm one of the few.`)],""),new c(355,"I'M LIVING ON THE MOUNTAIN",[new s(`I'M living on the mountain
Underneath a cloudless sky
I'm drinking at the fountain
That never shall run dry.
O yes, I'm feasting on the manna
From a bountiful supply.
For I am dwelling in Beulah land.`)],""),new c(356,"I'VE BEEN REDEEMED",[new s(`I've been redeemed, by love divine,
Oh. glory, glory, Christ is mine,
All to Him I now resign.
I have been, I have been redeemed.`)],""),new c(357,"SWEET WILL OF GOD",[new s(`Sweet will of God,
Still fold me closer.
\u2018Till I am wholly lost in Thee.
Sweet will of God still fold me Closer
\u2018Till I am wholly lost in Thee.`)],""),new c(358,"HE IS ABLE",[new s(`My God is able, He is able
I know my God is able,
I know my God is able,
To carry me through.
My God is able, He is able
I know my God is able,
I know my God is able,
To carry me through.
For He has healed the broken hearted
He has set the captive free,
Healed the sick
Raised the dead and walked upon the sea
My God is able, He is able,
I know my God,
I know my God is able to carry me through.`)],""),new c(359,"WHEREVER I GO",[new s(`Wherever I go, I'll praise Him
Wherever I go, I'll praise Him,
For His love surrounds me like a sea.
I'll praise the name of Jesus
Lift up the name of Jesus
For the name of Jesus lifted me.`)],""),new c(360,"I AM BLESSED",[new s(`I am blessed, I am blessed.
Every day that I live I am blessed.
When I wake up in the morning
When I lay my head to rest
I am blessed, I am blessed.`)],"")];var uy=[new c(361,"HE SIGNED THE DEED",[new s(`He signed the deed with His Atoning Blood,
He ever lives to make the promise good;
Tho\u2019 all the hosts of hell
March in to make a second claim,
They all march out
At the mention of His name.`)],""),new c(362,"SPIRIT NOW MELT AND MOVE",[new s(`Spirit now melt and move,
All of our hearts with love;
Breathe on us from above,
With old time power.`)],""),new c(363,"I WILL SING OF THE MERCIES",[new s(`I will sing of the mercies of the Lord forever
I will sing, I will sing.
I will sing of the mercies of the Lord forever
I will sing of the mercies of the Lord.
With my mouth shall I make known
Thy faithfulness, Thy faithfulness,
With my mouth shall I make known
Thy faithfulness to all generations.
I will sing to the mercies of the Lord forever
I will sing of the mercies of the Lord.`)],""),new c(364,"MY HEART IS STIRRED",[new s(`My heart is stirred
When e'er I think of Jesus,
That precious Name sets the captive free;
The only Name through which I find Salvation
No name on earth,
Has meant so much to me.`)],""),new c(365,"NO TURNING BACK",[new s(`I have decided to follow Jesus,
I have decided to follow Jesus,
I have decided to follow Jesus,
No turning back, no turning back.`),new s(`The cross before me the world behind me,
The cross before me the world behind me,
The cross before me the world behind me,
No turning back, no turning back.`),new s(`Take this whole world but give me Jesus,
Take this whole world but give me Jesus,
Take this whole world but give me Jesus,
I won't turn back, I won't turn back.`),new s(`I have started for the kingdom,
I have started for the kingdom,
I have started for the kingdom,
I won't turn back, I won't turn back.`),new s(`Though none go with me, still will I follow,
Though none go with me, still will I follow,
Though none go with me, still will I follow,
No turning back, no turning back.`)],""),new c(366,"IF YOU KNOW THE LORD",[new s(`If you know the Lord,
You\u2019ll need nobody else.
To see you through,
The darkest night;
You can walk alone;
You\u2019ll only need the Lord;
To see you on the road that\u2019s right,
Take time to pray, every day;
And as you\u2019re heading home,
He\u2019ll show you the way,
If you know the Lord.
You\u2019ll need nobody else,
You\u2019ll see the light;
His wonderful light.`)],""),new c(367,"LORD, LORD, LORD",[new s(`Lord, Lord, Lord,
You've surely been good to me;
Lord, Lord, Lord,
You've surely been good to me;
Lord, Lord, Lord,
You've surely been good to me;
You have done what this world could not do.`),new s(`You saved my soul when I was lost
You've surely been good to me;
You saved my soul when I was lost
You've surely been good to me;
You saved my soul when I was lost
You've surely been good to me;
You have done what this world could not do.`),new s(`You filled me with the Holy Ghost,
You've surely been good to me;
You filled me with the Holy Ghost,
You've surely been good to me;
You filled me with the Holy Ghost,
You've surely been good to me;
You have done what this world could not do.`),new s(`You healed my body when I was sick.
You've surely been good to me;
You healed my body when I was sick.
You've surely been good to me;
You healed my body when I was sick.
You've surely been good to me;
You have done what this world could not do.`)],""),new c(368,"BURDENS NOW ARE LIGHTER",[new s(`Burdens now are lighter, brighter is my way
It is such a joy to walk with Him
When this journey here is o'er
I'll set my feet on heaven's shore
Eternity all joy will just begin.`),new s(`When my Jesus saved me, washed my sins away
Cast them in the bottom of the sea
Picked me up, turned me around
Set my feet on higher ground
Now I'm walking happy, glad and free.`)],"",new f(`O glory, glory hallelujah
Praise the Lord today I know I'm free
He is with me and if I stay close to Him
Safe from harm and danger I will be`)),new c(369,"JUST A LITTLE LONGER",[new s(`Just a little longer,
And the trumpet of God shall sound
Just a little longer,
And we\u2019ll be Glory bound,
Look away to Heaven
Your redemption draweth nigh
Just a little longer,
And we\u2019ll meet Him the sky.`),new s(`Just across the bridge,
There\u2019ll be no sorrow
Just across the bridge,
There\u2019ll be no pain;
God\u2019s Son is going to shine
Across the river,
And we\u2019ll never be unhappy again.`),new s(`Ten thousand years,
We\u2019ll just be started,
Ten thousand years,
We\u2019ll just have begun;
When the battle is over
Sweet victory is won,
Ten thousand years,
And we\u2019ve just begun.`)],""),new c(370,"HE'S ON THE INSIDE",[new s(`He\u2019s on the inside
Of those pearly gates.
He's on the inside of heaven,
There He waits.
He'll call for me by name,
I'll answer and I'll go
To be with Him who died
And lives to love me so.`)],""),new c(371,"LEARNING TO LEAN",[new s(`Learning to lean, learning to lean
I\u2019m learning to lean on Jesus
Gaining more power than I ever dreamed
I\u2019m learning to lean on Jesus.`),new s(`Sad broken hearted at an altar I knelt
I found peace that is so serene
And all that He asks is a childlike trust
And a heart that is learning to lean.`)],""),new c(372,"'TIS TRUE",[new s(`'Tis true, oh yes 'tis true
God's wonderful promise is true!
For I've trusted and tested and tri
And I know God's promise is true.`)],""),new c(373,"THE PEARLY GATES",[new s(`He the pearly gates will open,
So that I may enter in,
For He purchased my redemption,
And forgave me all my sins.`)],""),new c(374,"LORD I'M COMING NOW TO THEE",[new s(`Lord I'm coming now to Thee
Lay Thy nail scarred hand on me
Let Thy healing virtue flow
And I shall be made whole.`)],""),new c(375,"MAKE ME MORE LIKE THEE",[new s(`Make me more like Thee Jesus
Make me more like Thee
Give me a heart that\u2019s filled with love
And make me more like Thee.`)],""),new c(376,"JESUS I'LL NEVER FORGET",[new s(`Jesus, I'll never forget
What You've done for me,
Jesus, I'll never forget
How You set me free
Jesus, I'll never forget
How You brought me out
Jesus, I'll never forget, no, never.`)],""),new c(377,"UNTIL YOU KNOW",[new s(`If you could own all the world and its money,
You could put up enough to reach the skies above,
If you could know everything,
You want to know about my faith,
Yet you\u2019ve known nothing until you\u2019ve
Known the love of God.`),new s(`If in your lifetime you could meet everybody,
And you could call every name from here to yonder,
If you\u2019ve not come face to face with Jesus
And His saving grace,
Friends you\u2019ve known nothing,
Until you know the love of God.`),new s(`If in your lifetime you could learn all the theology
And you could know every line of the scriptures,
If you\u2019ve not known the Revelation
Of Malachi four and end-time seal,
Friends you\u2019ve known nothing,
Until you know the love of God.`)],"",new f(`Until you know the loving hand
That reaches down to fallen man
And picks him up above the plain
Where he has trod
Until you know just how it feels,
To know that God is really real,
Then you\u2019ve known nothing,
Until you know the love of God.`)),new c(378,"SWEET JESUS",[new s(`Sweet Jesus, sweet Jesus,
What a wonder You are,
You're brighter than the morning star;
You're fairer, much fairer,
Than the lily that grows by the wayside,
Precious, more precious than gold;
Just Like the Rose of Sharon,
You're fairer than the fair,
You are all my heart and soul's desire,
Sweet Jesus, sweet Jesus,
What a wonder you are,
You're precious, more precious than gold.`)],"Eb"),new c(379,"OVERCOMING POWER",[new s(`Overcoming Power
Is what we have today;
Overcoming power
To keep the devil away.
Overcoming power
So we'll become the Word.
That's when we'll leave this sinful earth.
And go to meet the Lord.`)],"F"),new c(380,"IN TIMES LIKE THESE",[new s(`In times like these you need a Saviour
In times like these you need an anchor
Be very sure, be very sure,
Your anchor holds and grips the solid rock.`),new s(`In times like these you need the Bible,
In times like these O be not idle,
Be very sure, be very sure,
Your anchor holds and grips the solid rock.`),new s(`In times like these, I have a Saviour,
In times like these, I have an anchor,
I'm very sure, I'm very sure,
My anchor holds and grips the solid rock.`)],"G",new f(`This rock is Jesus, yes, He's the One,
This rock is Jesus, the only One;
Be very sure, be very sure,
Your anchor holds and grips the solid rock.`)),new c(381,"OH MY LOVING BROTHER",[new s(`Oh, the judgement day is coming
What an awful day 'twill be,
Christ forever is my refuge
Rock of ages cleft for me.`),new s(`At the sounding of the trumpet,
At the dawning of the day,
Worldly pleasures with their treasures,
Shall forever pass away.`),new s(`Poor lost sinners will be crying,
For the home they'll never see,
But the ransomed will be singing
Rock of ages, cleft for me.`)],"F",new f(`Oh, my loving brother,
When the world's on fire,
Don't you want God's bosom
To be your pillow,
Hide me over in the rock of ages
Rock of ages cleft for me.`)),new c(382,"LIGHTS OF THAT CITY",[new s(`John tells of a city, that he saw coming down,
Where no sorrow or death will be known,
That someday we could go there
Through His marvelous grace,
Forever live in that heavenly home.`),new s(`And sometimes when I'm burdened,
And my cross seems hard to bear,
And old Satan, he tries to dim my view,
Well, I just look unto Jesus,
He is standing close by,
Then once again, His great light shines through.`)],"F",new f(`I can almost see the lights of that city,
I see them gathering, all around
The great white throne;
With faith in my Saviour,
And His wonderful love,
Oh, I can almost see the lights of home.`)),new c(383,"I'M LOOKING FOR A CITY",[new s(`I'm looking for a city,
The one not made by hands,
I'm looking over Jordan,
I see the Promised Land,
The waters will be parted
And I'll be on my way,
As we're crossing over Jordan I can say:`),new s(`I'm drinking from the fountain
That floweth from on high,
A well of blessed waters
That never shall run dry,
I'm feasting on God's manna,
I'm praying day by day,
And that everlasting joy is here to stay.`),new s(`I've heard the prophet's message,
I've placed it in my heart,
I've got the revelation
That never shall depart,
The Rapture is upon us,
The stage is set to go.
We have this precious promise we all know.`)],"G",new f(`Now I have that everlasting joy within,
Since He came and took away my sin,
The moment that He blessed me,
He made me fully whole,
With that everlasting joy within my soul.`)),new c(384,"ALL THAT THRILLS MY SOUL",[new s(`Who can cheer the heart like Jesus,
By His presence all divine?
True and tender, pure and precious,
O how blest to call Him mine!`),new s(`Love of Christ so freely given,
Grace of God beyond degree,
Mercy higher than the heaven,
Deeper than the deepest sea.`),new s(`What a wonderful redemption!
Never can a mortal know
How my sin, tho'red like crimson,
Can be whiter than the snow.`),new s(`Every need His hand supplying,
Every good in Him I see;
On His strength divine relying,
He is all in all to me.`),new s(`By the crystal flowing river
With the ransomed I will sing,
And forever and forever
Praise and glorify the king.`)],"",new f(`All that thrills my soul is Jesus;
He is more than life to me;
And the fairest of ten thousand,
In my blessed Lord I see.`)),new c(385,"MY SINS ARE GONE",[new s(`You ask me why I\u2019m happy
So, I\u2019ll just tell you why,
Because my sins are gone;
And when I meet the scoffers
Who ask me where they are,
I say, my sins are gone.`),new s(`\u2018Twas at the old-time altar
Where God came in my heart,
And now my sins are gone;
The Lord took full possession,
The devil did depart,
I\u2019m glad my sins are gone.`),new s(`When Satan comes to tempt me
And tries to make me doubt,
I say, my sins are gone;
You got me into trouble,
But Jesus got me out,
I\u2019m glad my sins are gone.`),new s(`I\u2019m living now for Jesus,
I\u2019m happy night and day,
Because my sins are gone
My Soul is filled with music,
With all my heart I say, I know my sins are gone.`)],"Eb",new f(`They\u2019re underneath the Blood,
On the Cross of Calvary,
As far removed as darkness is from dawn;
In the sea of God\u2019s forgetfulness,
That\u2019s good enough for me,
Praise God, my sins are gone.`)),new c(386,"HE SET ME FREE",[new s(`Once like a bird in prison I dwelt.
No freedom from my sorrow I felt.
Then Jesus came and listened to me,
And glory to God, He set me free.`),new s(`Now I am climbing higher each day,
Darkness of night has drifted away.
My feet are planted on higher ground,
And glory to God, I\u2019m homeward bound.`),new s(`Good-bye to sin and things that confound,
Naught of this world shall turn me around,
Daily I\u2019m working, I\u2019m praying too,
And glory to God, I\u2019m going through.`)],"G",new f(`He set me free, yes, He set me free.
He broke the bonds of prison for me.
I\u2019m glory bound my Jesus to see,
For glory to God, He set me free.`)),new c(387,"LEAD ME TO CALVARY",[new s(`King of my life I crown Thee now,
Thine shall the glory be;
Lest I forget Thy thorn-crowned brow,
Lead me to Calvary.`),new s(`Show me the tomb where Thou was laid,
Tenderly mourned and wept:
Angels in robes of light arrayed,
Guarded Thee whilst Thou slept.`),new s(`Let me, like Mary, through the gloom,
Come with a gift to Thee:
Show to me now the empty tomb,
Lead me to Calvary.`),new s(`May I be willing, Lord, to bear,
Daily my cross for Thee:
Even Thy cup of grief to share,
Thou hast borne all for me.`),new s(`Fill me, O Lord, with Thy desire,
For all who know not Thee:
Then touch my lips with holy fire,
To speak of Calvary.`)],"Eb",new f(`Lest I forget Gethsemane,
Lest I forget Thine agony,
Lest I forget Thy love for me,
Lead me to Calvary.`)),new c(388,"WHISPER A PRAYER",[new s(`Whisper a prayer in the morning,
Whisper a prayer at noon,
Whisper a prayer in the evening,
To keep your heart in tune.`),new s(`God answers prayer in the morning,
God answers prayer at noon,
God answers prayer in the evening,
So, keep your heart in tune.`),new s(`Jesus may come in the morning,
Jesus may come at noon,
Jesus may come in the evening,
So, keep your heart in tune.`)],"G"),new c(389,"PRAISE THE LORD",[new s(`Praise the Lord, praise His holy name,
praise the Lord, every day the same;
Praise the Lord, praise His holy name,
praise, O praise the Lord.`),new s(`He brought me out of bondage,
praise His holy name,
He brought me out of bondage,
Praise His holy name,
He brought me out of bondage,
praise His holy name,
Praise, O praise the Lord.`)],"C"),new c(390,"THANK GOD I AM FREE",[new s(`For a long time, I travelled
Down a long lonely road;
My heart was so heavy in sin I sank low.
Then I heard about Jesus,
What a wonderful hour;
I\u2019m so glad that I found out
He could bring me out
Through His saving power.`),new s(`Like a bird out of prison
That has taken its flight;
Like a blind man that God
Gave back his sight.
Like a poor wretched beggar
That\u2019s found fortune and fame,
I\u2019m so glad that I found out
He could bring me out
Thro\u2019 His holy name.`)],"G",new f(`Thank God I am free, free, free
From this world of sin.
Washed in the blood of Jesus,
I\u2019ve been born again.
Hallelujah, I\u2019m saved, saved, saved
By His wonderful grace.
I\u2019m so glad that I found out
He could bring me out
And show me the way.`)),new c(391,"MY LORD KNOWS THE WAY",[new s(`My Lord knows the way
Through the wilderness;
All I have to do is follow.
My Lord knows the way
Through the wilderness;
All I have to do is follow.
Strength for today is mine always,
And all that I need for tomorrow;
My Lord knows the way
Through the wilderness;
All I have to do is follow.`)],"F"),new c(392,"HE PAID A DEBT",[new s(`He paid a debt He did not owe,
I owed a debt I could not pay,
I needed someone to wash my sins away;
And now I sing a brand-new song,
Amazing grace all day long,
Christ Jesus paid a debt
That I could never pay.`),new s(`He paid a debt at Calvary,
He cleansed my soul and set me free,
I\u2019m glad that Jesus did all my sins erase.
I now can sing a brand new song,
Amazing grace all day long,
Christ Jesus paid a debt
That I could never pay.`),new s(`One day He\u2019s coming back for me,
To live with Him eternally,
Won\u2019t it be glory to see Him on that day!
I then will sing a brand-new song,
Amazing grace all day long
Christ Jesus paid a debt
That I could never pay.`)],"C"),new c(393,"ALL I WANT TO DO IS LOVE HIM",[new s(`All I want to do is love Him
So glad I feel His love for me,
Jesus paid the price of redemption
On the cross of Calvary.
So, every day my heart will praise Him
I know I\u2019ll never be the same
All I want to do is love Him,
Love His holy name.`)],"C"),new c(394,"WE SHALL BE CHANGED",[new s(`We shall be changed,
We shall be changed,
Changed from mortal to immortality
In the twinkling of an eye.`)],"Ab"),new c(395,"PSALM 122:1",[new s(`I was glad when they said unto me,
I was glad when they said unto me,
I was glad when they said unto me,
\u201CLet us go into the house of the Lord.\u201D`)],"C"),new c(396,"NOBODY BUT YOU, LORD",[new s(`Nobody but you, Lord, nobody but you,
Can keep me happy, can keep me true.
All through life\u2019s journey
You\u2019ll carry me through,
Nobody but you, Lord, nobody but you.`)],"C"),new c(397,"I LOVE MY JESUS",[new s(`I love my Jesus, for He\u2019s my Saviour,
And He has brought me unto the fountain;
The blessed fountain of Living Water,
The crystal fountain that never shall run dry.`)],""),new c(398,"VICTORY ALL THE TIME",[new s(`Victory, victory blessed blood bought
victory,
Victory, victory, victory all the time,
As Jehovah liveth, strength divine He
giveth,
Unto those who know Him victory all the time.`)],""),new c(399,"I like the old time way",[new s(`I Like the old time singing, shouting
I like the old time way,
I like the old time singing, shouting
Preaching, praying,
I like the old time way.`),new s(`I sing about my Saviour everywhere I go.
Everywhere I go, every where I go:
I sing about my Saviour everywhere I go,
For there\u2019s joy, joy in my soul.`)],"G",new f("")),new c(400,"Manifesting time",[new s(`The voice of my Beloved!
Behold! He quickly comes!
Sweeping over the mountains,
Over the hills He runs!
I long to hear His voice!
I long to hear Him say,
\u201CArise, my love, my fair one,
Come away,\u201D`),new s(`The grapes are yours and mine,
Little foxes spoil the vine,
For the vineyard blossoms forth
Her harvest time!
Keep your eyes on things above
Don\u2019t look at me or you.
See that Lovely One
He\u2019s coming in plain view!`),new s(`In the cleft of the rock,
In the secret place so high!
\u201CTil the daybreak and the shadows flee away!
Oh, in that mountain place,
A sweet smell is coming thro\u201D
He\u2019s that Lovely One__
He\u2019s coming in plain view!`)],"C",new f(`It\u2019s manifesting time,
The fruits are on the vine
And the Lovely One
Is coming in plain view,
Oh, to cap God\u2019s chosen Bride,
Redemption draweth nigh;
He\u2019s that Lovely One
He\u2019s coming in plain view!`))];var ha=[...ny,...iy,...oy,...ry,...sy,...ay,...ly,...uy];var fa=(()=>{let e=class e{constructor(){this.messages=[]}add(n){this.messages.push(n)}clear(){this.messages=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var kt=(()=>{let e=class e{constructor(n,o){this.http=n,this.messageService=o,this.httpOptions={headers:new Kt({"Content-Type":"application/json"})},this.hymnsUrl="api/hymns",this.hymns=ha}log(n){this.messageService.add(`HymnsService: ${n}`)}handleError(n="operation",o){return r=>(this.log(`${n} failed: ${r.message}`),E(o))}getHymns(){return this.http.get(this.hymnsUrl).pipe(Z(n=>this.log("Fetched hymns")),Se(this.handleError("getHymns",[])))}getHymn(n){let o=`${this.hymnsUrl}/${n}`;return this.http.get(o).pipe(Z(r=>this.log(`Fetched hymn id = ${n}`)),Se(this.handleError(`getHymn id = ${n}`)))}normalizeApostrophes(n){return n.replace(/’/g,"'").replace(/‘/g,"'")}searchHymns(n,o,r,a){if(!n.trim())return E([]);let l=this.normalizeApostrophes(n.toLowerCase());return o&&!r?this.searchChorus(l):r&&!o?this.searchStanzas(l):o&&r?this.searchCombinedChorusAndStanzas(l):a||o&&r&&a||o&&a||r&&a?this.searchAll(l):this.getHymns().pipe(R(u=>u.filter(d=>this.normalizeApostrophes(d.title.toLowerCase()).includes(l))),Z(u=>u.length?this.log(`Found hymns matching "${n}"`):this.log(`No such hymn "${n}"`)),Se(this.handleError("searchHymns",[])))}searchChorus(n){return this.http.get(this.hymnsUrl).pipe(R(o=>o.filter(r=>r.chorus&&this.normalizeApostrophes(r.chorus.refrain.toLowerCase()).includes(n))),Z(o=>o.length?this.log(`Found hymns containing the term "${n}" in the chorus`):this.log(`No hymn contains the term "${n}" in the chorus`)),Se(this.handleError("searchHymns",[])))}searchStanzas(n){return this.http.get(this.hymnsUrl).pipe(R(o=>o.filter(r=>r.stanzas.some(a=>this.normalizeApostrophes(a.verse.toLowerCase()).includes(n)))),Z(o=>o.length?this.log(`Found hymns containing the term "${n}"`):this.log(`No hymn contains the term "${n}"`)),Se(this.handleError("searchHymns",[])))}searchCombinedChorusAndStanzas(n){return pr([this.searchChorus(n),this.searchStanzas(n)]).pipe(R(([o,r])=>[...o,...r].filter((u,d,h)=>d===h.findIndex(p=>p.id===u.id))),Z(o=>o.length?this.log(`Found hymns containing the term "${n}" in the chorus or stanzas`):this.log(`No hymn contains the term "${n}" in the chorus or stanzas`)),Se(this.handleError("searchHymns",[])))}searchAll(n){if(!n.trim())return E([]);let o=this.normalizeApostrophes(n.toLowerCase());return pr([this.getHymns().pipe(R(r=>r.filter(a=>this.normalizeApostrophes(a.title.toLowerCase()).includes(o)))),this.searchChorus(o),this.searchStanzas(o)]).pipe(R(([r,a,l])=>[...r,...a,...l].filter((h,p,m)=>p===m.findIndex(g=>g.id===h.id))),Z(r=>r.length?this.log(`Found hymns containing the term "${n}" in the title, chorus, or stanzas`):this.log(`No hymn contains the term "${n}" in the title, chorus, or stanzas`)),Se(this.handleError("searchHymns",[])))}};e.\u0275fac=function(o){return new(o||e)(C(yd),C(fa))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Vi=(()=>{let e=class e{transform(n){return n&&n.replace(/\b\w+([’']\w*)?/g,o=>{let r=o.search(/[’']/);return r!==-1&&r<o.length-1?o.charAt(0).toUpperCase()+o.slice(1,r+1).toLowerCase()+o.charAt(r+1).toLowerCase()+o.slice(r+2).toLowerCase():o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=os({name:"capitalize",type:e,pure:!0});let t=e;return t})();var EE=["chorusCheckbox"],CE=["verseCheckbox"],SE=["allCheckbox"],ME=["searchBox"],AE=(t,e)=>({heading:t,heading1:e}),OE=t=>({"custom-container":t});function NE(t,e){if(t&1){let i=Te();w(0,"button",27),ee("click",function(){ce(i);let o=oe(),r=Ct(35);return he(o.clearSearch(r))}),D(1," \xD7 "),v()}}function kE(t,e){if(t&1){let i=Te();w(0,"li")(1,"a",28),ee("click",function(){let o=ce(i).$implicit,r=oe();return he(r.navigateToHymn(o.hymn_number))}),w(2,"div",29)(3,"div",30),T(4,"i",31),v(),w(5,"div",32),D(6),v(),w(7,"div",33),D(8),dn(9,"capitalize"),v()()()()}if(t&2){let i=e.$implicit;A(6),be(" ",i.hymn_number," "),A(2),be(" ",cn(9,2,i.title)," ")}}function RE(t,e){if(t&1){let i=Te();w(0,"div",34),D(1," No hymns found. "),w(2,"button",35),ee("click",function(){ce(i);let o=oe();return he(o.closeInfo())}),D(3,"\xD7"),v()()}}var ma=(()=>{let e=class e{constructor(n,o){this.hymnService=n,this.router=o,this.page_search=!1,this.checkedChorus=!1,this.checkedVerse=!1,this.checkedAll=!1,this.hymns=ha,this.showInfo=!1,this.yesTerm=!1,this.searchLabel="Hymn search",this.searchTerms=new te}search(n){this.searchTerms.next(n),this.yesTerm=n===""}ngOnInit(){this.searchTerm()}searchTerm(){this.hymns$=this.searchTerms.pipe(Va(300),we(n=>this.hymnService.searchHymns(n,this.checkedChorus,this.checkedVerse,this.checkedAll))),this.hymns$.subscribe(n=>{this.hymns=n,this.showInfo=this.hymns.length===0&&!this.yesTerm})}clearSearch(n){n.value="",this.search(""),this.closeInfo()}getChorusCheckedValue(n){this.checkedChorus=this.chorusCheckbox.nativeElement.checked,this.search(n)}getVerseCheckedValue(n){this.checkedVerse=this.verseCheckbox.nativeElement.checked,this.search(n)}getAllCheckedValue(n){this.checkedAll=this.allCheckbox.nativeElement.checked,this.search(n)}closeInfo(){this.showInfo=!1}navigateToHymn(n){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate(["hymn",n]),this.modal?.close()})}};e.\u0275fac=function(o){return new(o||e)(B(kt),B(Ne))},e.\u0275cmp=X({type:e,selectors:[["app-search"]],viewQuery:function(o,r){if(o&1&&(gt(EE,5),gt(CE,5),gt(SE,5),gt(ME,5)),o&2){let a;Ke(a=Qe())&&(r.chorusCheckbox=a.first),Ke(a=Qe())&&(r.verseCheckbox=a.first),Ke(a=Qe())&&(r.allCheckbox=a.first),Ke(a=Qe())&&(r.searchBox=a.first)}},inputs:{page_search:"page_search",modal:"modal"},decls:41,vars:14,consts:[["verseCheckbox",""],["chorusCheckbox",""],["allCheckbox",""],["searchBox",""],["id","search-component"],["for","search-box",1,"heading__design",3,"ngClass"],[1,"label-flex"],["width","70px","src","assets/images/music_staff.png","alt","Music Staff"],[1,"centered"],["width","70px","src","assets/images/music_staff_right.png","alt","Music Staff"],[1,"white-back",3,"ngClass"],[1,"search__parameters"],[1,"space-1"],[1,"checkbox-flex","pl-4"],[1,"checkbox-container","pr-4"],[1,"emphasized"],["type","checkbox","id","verse","name","verse",3,"click"],[1,"checkmark"],["type","checkbox","id","chorus","name","chorus",3,"click"],[1,"checkbox-container"],["type","checkbox","id","all","name","all",3,"click"],[1,"search-box-wrapper"],["id","search-box",3,"input"],["type","button","class","clear-button",3,"click",4,"ngIf"],[1,"search-result"],[4,"ngFor","ngForOf"],["class","info",4,"ngIf"],["type","button",1,"clear-button",3,"click"],[3,"click"],[1,"flex-container"],[1,"flex-icon"],[1,"bi","bi-music-note"],[1,"flex-number"],[1,"flex-text"],[1,"info"],[1,"close-button-info",3,"click"]],template:function(o,r){if(o&1){let a=Te();w(0,"div",4)(1,"label",5)(2,"div",6)(3,"div"),T(4,"img",7),v(),w(5,"div",8),D(6),v(),w(7,"div"),T(8,"img",9),v()()(),w(9,"div",10)(10,"div",11),T(11,"div",12),w(12,"span",8),D(13,"Search hymn by title or:"),v(),w(14,"div",13)(15,"label",14)(16,"span",15),D(17,"Verse"),v(),w(18,"input",16,0),ee("click",function(){ce(a);let u=Ct(35);return he(r.getVerseCheckedValue(u.value))}),v(),T(20,"span",17),v(),w(21,"label",14)(22,"span",15),D(23,"Chorus"),v(),w(24,"input",18,1),ee("click",function(){ce(a);let u=Ct(35);return he(r.getChorusCheckedValue(u.value))}),v(),T(26,"span",17),v(),w(27,"label",19)(28,"span",15),D(29,"All"),v(),w(30,"input",20,2),ee("click",function(){ce(a);let u=Ct(35);return he(r.getAllCheckedValue(u.value))}),v(),T(32,"span",17),v()()(),w(33,"div",21)(34,"input",22,3),ee("input",function(){ce(a);let u=Ct(35);return he(r.search(u.value))}),v(),re(36,NE,2,0,"button",23),v(),w(37,"ul",24),re(38,kE,10,4,"li",25),dn(39,"async"),v(),re(40,RE,4,0,"div",26),v()()}if(o&2){let a=Ct(35);A(),k("ngClass",Ju(9,AE,r.page_search,!r.page_search)),A(5),Ti(r.searchLabel),A(3),k("ngClass",po(12,OE,r.page_search)),A(27),k("ngIf",a.value),A(),k("@listAnimation",void 0),A(),k("ngForOf",cn(39,7,r.hymns$)),A(2),k("ngIf",r.showInfo)}},dependencies:[Ls,Mt,At,Bm,Vi],styles:["#search-component[_ngcontent-%COMP%]{padding-bottom:15px}.search-box-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}input[_ngcontent-%COMP%]{color:#5b676f;padding:.5rem 1rem;width:100%;border-color:#0099ff54;border-radius:5px;box-sizing:border-box;display:block;font-size:1.2rem;box-shadow:0 0 8px #0000001a}input[_ngcontent-%COMP%]:focus{outline:none;background-color:#0099ff21}li[_ngcontent-%COMP%]{list-style-type:none}.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2rem;border-radius:0 0 5px 5px;display:inline-block;width:100%;padding:.5rem;box-sizing:border-box;text-decoration:none;color:#5b676f;cursor:pointer;transition:background-color .3s ease-out,color .3s ease-out;box-shadow:0 0 2px #0000004d}.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#0099ffce;color:#fff}.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .flex-icon[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff,#fff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}ul.search-result[_ngcontent-%COMP%]{margin-top:0;padding-left:0}"],data:{animation:[st("listAnimation",[et("* => *",[fc(":enter",[ge({opacity:0,transform:"translateY(-20px)"}),ey(100,[$e("5s ease-out",ge({opacity:1,transform:"translateY(0)"}))])],{optional:!0}),fc(":leave",[$e("5s ease-out",ge({opacity:0,transform:"translateY(20px)"}))],{optional:!0})])])]}});let t=e;return t})();var xE=["*"];var HE=["dialog"];var cy={animation:!0,transitionTimerDelayMs:5},FE=(()=>{let e=class e{constructor(){this.animation=cy.animation}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function LE(t){let{transitionDelay:e,transitionDuration:i}=window.getComputedStyle(t),n=parseFloat(e),o=parseFloat(i);return(n+o)*1e3}function hy(t){return typeof t=="string"}function wc(t){return t!=null}function PE(t){return t&&t.then}function fy(t){return(t||document.body).getBoundingClientRect()}function BE(t){return e=>new P(i=>{let n=a=>t.run(()=>i.next(a)),o=a=>t.run(()=>i.error(a)),r=()=>t.run(()=>i.complete());return e.subscribe({next:n,error:o,complete:r})})}var VE=()=>{},{transitionTimerDelayMs:jE}=cy,ga=new Map,$n=(t,e,i,n)=>{let o=n.context||{},r=ga.get(e);if(r)switch(n.runningTransition){case"continue":return Ce;case"stop":t.run(()=>r.transition$.complete()),o=Object.assign(r.context,o),ga.delete(e)}let a=i(e,n.animation,o)||VE;if(!n.animation||window.getComputedStyle(e).transitionProperty==="none")return t.run(()=>a()),E(void 0).pipe(BE(t));let l=new te,u=new te,d=l.pipe(Ga(!0));ga.set(e,{transition$:l,complete:()=>{u.next(),u.complete()},context:o});let h=LE(e);return t.runOutsideAngular(()=>{let p=tt(e,"transitionend").pipe(xe(d),ye(({target:g})=>g===e)),m=Pa(h+jE).pipe(xe(d));Ba(m,p,u).pipe(xe(d)).subscribe(()=>{ga.delete(e),t.run(()=>{a(),l.next(),l.complete()})})}),l.asObservable()};var py=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var my=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var gy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})(),yy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var _c=function(t){return t[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",t}(_c||{});var CL=(()=>{let t=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(t()||e()):!1})();var GE=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function wy(t){let e=Array.from(t.querySelectorAll(GE)).filter(i=>i.tabIndex!==-1);return[e[0],e[e.length-1]]}var WE=(t,e,i,n=!1)=>{t.runOutsideAngular(()=>{let o=tt(e,"focusin").pipe(xe(i),R(r=>r.target));tt(e,"keydown").pipe(xe(i),ye(r=>r.which===_c.Tab),wr(o)).subscribe(([r,a])=>{let[l,u]=wy(e);(a===l||a===e)&&r.shiftKey&&(u.focus(),r.preventDefault()),a===u&&!r.shiftKey&&(l.focus(),r.preventDefault())}),n&&tt(e,"click").pipe(xe(i),wr(o),R(r=>r[1])).subscribe(r=>r.focus())})};var SL=new Date(1882,10,12),ML=new Date(2174,10,25);var AL=1e3*60*60*24;var Ic=1080,UE=24*Ic,$E=12*Ic+793,OL=29*UE+$E,NL=11*Ic+204;var vy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var by=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})(),JE=(()=>{let e=class e{constructor(){this._ngbConfig=y(FE),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(n){this._animation=n}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ji=class{constructor(e,i,n){this.nodes=e,this.viewRef=i,this.componentRef=n}};var zE=(()=>{let e=class e{constructor(){this._document=y(me)}hide(){let n=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),o=this._document.body,r=o.style,{overflow:a,paddingRight:l}=r;if(n>0){let u=parseFloat(window.getComputedStyle(o).paddingRight);r.paddingRight=`${u+n}px`}return r.overflow="hidden",()=>{n>0&&(r.paddingRight=l),r.overflow=a}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),YE=(()=>{let e=class e{constructor(){this._nativeElement=y(Oe).nativeElement,this._zone=y(q)}ngOnInit(){this._zone.onStable.asObservable().pipe(Ve(1)).subscribe(()=>{$n(this._zone,this._nativeElement,(n,o)=>{o&&fy(n),n.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return $n(this._zone,this._nativeElement,({classList:n})=>n.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(o,r){o&2&&(Ds("modal-backdrop"+(r.backdropClass?" "+r.backdropClass:"")),fo("show",!r.animation)("fade",r.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[Bn],decls:0,vars:0,template:function(o,r){},encapsulation:2});let t=e;return t})(),ya=class{update(e){}close(e){}dismiss(e){}},qE=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],KE=["animation","backdropClass"],vc=class{_applyWindowOptions(e,i){qE.forEach(n=>{wc(i[n])&&(e[n]=i[n])})}_applyBackdropOptions(e,i){KE.forEach(n=>{wc(i[n])&&(e[n]=i[n])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(xe(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(xe(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,i,n,o){this._windowCmptRef=e,this._contentRef=i,this._backdropCmptRef=n,this._beforeDismiss=o,this._closed=new te,this._dismissed=new te,this._hidden=new te,e.instance.dismissEvent.subscribe(r=>{this.dismiss(r)}),this.result=new Promise((r,a)=>{this._resolve=r,this._reject=a}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let i=this._beforeDismiss();PE(i)?i.then(n=>{n!==!1&&this._dismiss(e)},()=>{}):i!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),i=this._backdropCmptRef?this._backdropCmptRef.instance.hide():E(void 0);e.subscribe(()=>{let{nativeElement:n}=this._windowCmptRef.location;n.parentNode.removeChild(n),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),i.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:n}=this._backdropCmptRef.location;n.parentNode.removeChild(n),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),Wi(e,i).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},bc=function(t){return t[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",t}(bc||{}),QE=(()=>{let e=class e{constructor(){this._document=y(me),this._elRef=y(Oe),this._zone=y(q),this._closed$=new te,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new ne,this.shown=new te,this.hidden=new te}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":hy(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(n){this.dismissEvent.emit(n)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(Ve(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:n}=this._elRef,o={animation:this.animation,runningTransition:"stop"},r=$n(this._zone,n,()=>n.classList.remove("show"),o),a=$n(this._zone,this._dialogEl.nativeElement,()=>{},o),l=Wi(r,a);return l.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),l}_show(){let n={animation:this.animation,runningTransition:"continue"},o=$n(this._zone,this._elRef.nativeElement,(a,l)=>{l&&fy(a),a.classList.add("show")},n),r=$n(this._zone,this._dialogEl.nativeElement,()=>{},n);Wi(o,r).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:n}=this._elRef;this._zone.runOutsideAngular(()=>{tt(n,"keydown").pipe(xe(this._closed$),ye(r=>r.which===_c.Escape)).subscribe(r=>{this.keyboard?requestAnimationFrame(()=>{r.defaultPrevented||this._zone.run(()=>this.dismiss(bc.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let o=!1;tt(this._dialogEl.nativeElement,"mousedown").pipe(xe(this._closed$),Z(()=>o=!1),we(()=>tt(n,"mouseup").pipe(xe(this._closed$),Ve(1))),ye(({target:r})=>n===r)).subscribe(()=>{o=!0}),tt(n,"click").pipe(xe(this._closed$)).subscribe(({target:r})=>{n===r&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!o&&this._zone.run(()=>this.dismiss(bc.BACKDROP_CLICK))),o=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:n}=this._elRef;if(!n.contains(document.activeElement)){let o=n.querySelector("[ngbAutofocus]"),r=wy(n)[0];(o||r||n).focus()}}_restoreFocus(){let n=this._document.body,o=this._elWithFocus,r;o&&o.focus&&n.contains(o)?r=o:r=n,this._zone.runOutsideAngular(()=>{setTimeout(()=>r.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&$n(this._zone,this._elRef.nativeElement,({classList:n})=>(n.add("modal-static"),()=>n.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(o,r){if(o&1&&gt(HE,7),o&2){let a;Ke(a=Qe())&&(r._dialogEl=a.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(o,r){o&2&&(bi("aria-modal",!0)("aria-labelledby",r.ariaLabelledBy)("aria-describedby",r.ariaDescribedBy),Ds("modal d-block"+(r.windowClass?" "+r.windowClass:"")),fo("fade",r.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[Bn],ngContentSelectors:xE,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(o,r){o&1&&(_i(),w(0,"div",1,0)(2,"div",2),Ii(3),v()()),o&2&&Ds("modal-dialog"+(r.size?" modal-"+r.size:"")+(r.centered?" modal-dialog-centered":"")+r.fullscreenClass+(r.scrollable?" modal-dialog-scrollable":"")+(r.modalDialogClass?" "+r.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let t=e;return t})(),ZE=(()=>{let e=class e{constructor(){this._applicationRef=y(Jt),this._injector=y(Pe),this._environmentInjector=y(ve),this._document=y(me),this._scrollBar=y(zE),this._activeWindowCmptHasChanged=new te,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new ne;let n=y(q);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let o=this._windowCmpts[this._windowCmpts.length-1];WE(n,o.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(o.location.nativeElement)}})}_restoreScrollBar(){let n=this._scrollBarRestoreFn;n&&(this._scrollBarRestoreFn=null,n())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(n,o,r){let a=r.container instanceof HTMLElement?r.container:wc(r.container)?this._document.querySelector(r.container):this._document.body;if(!a)throw new Error(`The specified modal container "${r.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let l=new ya;n=r.injector||n;let u=n.get(ve,null)||this._environmentInjector,d=this._getContentRef(n,u,o,l,r),h=r.backdrop!==!1?this._attachBackdrop(a):void 0,p=this._attachWindowComponent(a,d.nodes),m=new vc(p,d,h,r.beforeDismiss);return this._registerModalRef(m),this._registerWindowCmpt(p),m.hidden.pipe(Ve(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),l.close=g=>{m.close(g)},l.dismiss=g=>{m.dismiss(g)},l.update=g=>{m.update(g)},m.update(r),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),h&&h.instance&&h.changeDetectorRef.detectChanges(),p.changeDetectorRef.detectChanges(),m}get activeInstances(){return this._activeInstances}dismissAll(n){this._modalRefs.forEach(o=>o.dismiss(n))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(n){let o=xs(YE,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(o.hostView),n.appendChild(o.location.nativeElement),o}_attachWindowComponent(n,o){let r=xs(QE,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:o});return this._applicationRef.attachView(r.hostView),n.appendChild(r.location.nativeElement),r}_getContentRef(n,o,r,a,l){return r?r instanceof Vt?this._createFromTemplateRef(r,a):hy(r)?this._createFromString(r):this._createFromComponent(n,o,r,a,l):new ji([])}_createFromTemplateRef(n,o){let r={$implicit:o,close(l){o.close(l)},dismiss(l){o.dismiss(l)}},a=n.createEmbeddedView(r);return this._applicationRef.attachView(a),new ji([a.rootNodes],a)}_createFromString(n){let o=this._document.createTextNode(`${n}`);return new ji([[o]])}_createFromComponent(n,o,r,a,l){let u=Pe.create({providers:[{provide:ya,useValue:a}],parent:n}),d=xs(r,{environmentInjector:o,elementInjector:u}),h=d.location.nativeElement;return l.scrollable&&h.classList.add("component-host-scrollable"),this._applicationRef.attachView(d.hostView),new ji([[h]],d.hostView,d)}_setAriaHidden(n){let o=n.parentElement;o&&n!==this._document.body&&(Array.from(o.children).forEach(r=>{r!==n&&r.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}),this._setAriaHidden(o))}_revertAriaHidden(){this._ariaHiddenValues.forEach((n,o)=>{n?o.setAttribute("aria-hidden",n):o.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(n){let o=()=>{let r=this._modalRefs.indexOf(n);r>-1&&(this._modalRefs.splice(r,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(n),this._activeInstances.emit(this._modalRefs),n.result.then(o,o)}_registerWindowCmpt(n){this._windowCmpts.push(n),this._activeWindowCmptHasChanged.next(),n.onDestroy(()=>{let o=this._windowCmpts.indexOf(n);o>-1&&(this._windowCmpts.splice(o,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Tc=(()=>{let e=class e{constructor(){this._injector=y(Pe),this._modalStack=y(ZE),this._config=y(JE)}open(n,o={}){let r=I(ae(I({},this._config),{animation:this._config.animation}),o);return this._modalStack.open(this._injector,n,r)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(n){this._modalStack.dismissAll(n)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),_y=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({providers:[Tc]});let t=e;return t})();var Iy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Ty=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Dy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Ey=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Cy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Sy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var My=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Ay=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var Oy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var kL=new S("live announcer delay",{providedIn:"root",factory:()=>100});var Ny=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})();var ky=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({});let t=e;return t})(),XE=[py,my,gy,yy,vy,by,_y,Iy,ky,Ty,Dy,Ey,Cy,Sy,My,Ay,Oy,Ny],RL=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({imports:[XE,py,my,gy,yy,vy,by,_y,Iy,ky,Ty,Dy,Ey,Cy,Sy,My,Ay,Oy,Ny]});let t=e;return t})();var tC=["modal"],nC=["*"];function iC(t,e){if(t&1){let i=Te();w(0,"div",4)(1,"button",5),ee("click",function(){ce(i);let o=oe(2);return he(o.close())}),w(2,"span",6),D(3,"\xD7"),v()(),w(4,"button",5),ee("click",function(){ce(i);let o=oe(2);return he(o.close())}),w(5,"span",6),D(6,"\xD7"),v()()()}}function oC(t,e){if(t&1){let i=Te();w(0,"button",10),ee("click",function(){ce(i);let o=oe(3);return he(o.dismiss())}),D(1),v()}if(t&2){let i=oe(3);k("disabled",i.modalConfig.disableDismissButton!==void 0&&i.modalConfig.disableDismissButton()),A(),be(" ",i.modalConfig.dismissButtonLabel," ")}}function rC(t,e){if(t&1){let i=Te();w(0,"button",11),ee("click",function(){ce(i);let o=oe(3);return he(o.close())}),D(1),v()}if(t&2){let i=oe(3);k("disabled",i.modalConfig.disableCloseButton!==void 0&&i.modalConfig.disableCloseButton()),A(),be(" ",i.modalConfig.closeButtonLabel," ")}}function sC(t,e){if(t&1&&(w(0,"div",7),re(1,oC,2,2,"button",8)(2,rC,2,2,"button",9),v()),t&2){let i=oe(2);A(),k("ngIf",i.modalConfig.hideDismissButton===void 0||!i.modalConfig.hideDismissButton()),A(),k("ngIf",i.modalConfig.hideCloseButton===void 0||!i.modalConfig.hideCloseButton())}}function aC(t,e){if(t&1&&(w(0,"div"),re(1,iC,7,0,"div",1),w(2,"div",2),Ii(3),v(),re(4,sC,3,2,"div",3),v()),t&2){let i=oe();k("@fadeInOut",void 0),A(),k("ngIf",!i.modalConfig.hideHeader),A(3),k("ngIf",!i.modalConfig.hideFooter)}}var Ry=(()=>{let e=class e{constructor(n){this.modalService=n}open(){return new Promise(n=>{this.modalRef=this.modalService.open(this.modalContent),this.modalRef.result.then(n,n)})}close(){return Rt(this,null,function*(){if(this.modalConfig.shouldClose===void 0||(yield this.modalConfig.shouldClose())){let n=this.modalConfig.onClose===void 0||(yield this.modalConfig.onClose());this.modalRef.close(n)}})}dismiss(){return Rt(this,null,function*(){if(this.modalConfig.shouldDismiss===void 0||(yield this.modalConfig.shouldDismiss())){let n=this.modalConfig.onDismiss===void 0||(yield this.modalConfig.onDismiss());this.modalRef.dismiss(n)}})}};e.\u0275fac=function(o){return new(o||e)(B(Tc))},e.\u0275cmp=X({type:e,selectors:[["app-modal"]],viewQuery:function(o,r){if(o&1&&gt(tC,5),o&2){let a;Ke(a=Qe())&&(r.modalContent=a.first)}},inputs:{modalConfig:"modalConfig"},ngContentSelectors:nC,decls:2,vars:0,consts:[["modal",""],["class","modal-header",4,"ngIf"],[1,"modal-body"],["class","modal-footer",4,"ngIf"],[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-footer"],["type","button","class","btn btn-outline-secondary",3,"disabled","click",4,"ngIf"],["type","button","class","btn btn-outline-primary",3,"disabled","click",4,"ngIf"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","button",1,"btn","btn-outline-primary",3,"click","disabled"]],template:function(o,r){o&1&&(_i(),re(0,aC,5,3,"ng-template",null,0,zu))},dependencies:[At],styles:[".modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 15px}.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background:none;border:none;color:#0099ff4f;font-size:1.5rem;cursor:pointer;outline:none}.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover{color:#5b676f}"],data:{animation:[st("fadeInOut",[et(":enter",[ge({opacity:0}),$e("500ms ease-in",ge({opacity:1}))]),et(":leave",[$e("500ms ease-out",ge({opacity:0}))])])]}}),e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();var uC=["modal"],xy=(()=>{let e=class e{constructor(){this.appName=Um,this.modalConfig={modalTitle:"",closeButtonLabel:"x",disableCloseButton:()=>!0,disableDismissButton:()=>!0,hideCloseButton:()=>!0,hideDismissButton:()=>!0,shouldClose:()=>!0,onClose:()=>!0,shouldDismiss:()=>!1,onDismiss:()=>!1,hideHeader:!1,hideFooter:!0}}openModal(){return Rt(this,null,function*(){return yield this.modalComponent.open()})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["app-header"]],viewQuery:function(o,r){if(o&1&&gt(uC,5),o&2){let a;Ke(a=Qe())&&(r.modalComponent=a.first)}},decls:17,vars:3,consts:[["modal",""],["routerLink","/",1,"brand"],[1,"item__routing","pr-1"],["src","assets/images/one_note.png","width","27px","alt","Logo"],[1,"capitalize","item__routing","app__name"],[1,"spacer"],[1,"flex-items__right"],["routerLink","hymns","routerLinkActive","active"],[1,"capitalize","item__routing","menu__item"],[1,"search-button","button-icon",3,"click"],[1,"bi","bi-search","search-icon"],[3,"modalConfig"],[3,"modal"]],template:function(o,r){if(o&1){let a=Te();w(0,"nav")(1,"a",1)(2,"span",2),T(3,"img",3),v()(),w(4,"a",1)(5,"span",4),D(6),v()(),T(7,"span",5),w(8,"div",6)(9,"a",7)(10,"span",8),D(11,"Hymns"),v()(),w(12,"button",9),ee("click",function(){return ce(a),he(r.openModal())}),T(13,"i",10),v()()(),w(14,"app-modal",11,0),T(16,"app-search",12),v()}if(o&2){let a=Ct(15);A(6),Ti(r.appName),A(8),k("modalConfig",r.modalConfig),A(2),k("modal",a)}},dependencies:[Fi,Yg,ma,Ry],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}nav[_ngcontent-%COMP%]{position:sticky;top:0;width:100%;padding:15px 70px;background-color:#09f;color:#fff;display:flex;align-items:center;font:20px/32px Inter,Reddit Sans,Roboto,Helvetica Neue,sans-serif;z-index:5;box-shadow:0 1px 10px #0003}nav[_ngcontent-%COMP%]   .flex-items__right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffe08a}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app__name[_ngcontent-%COMP%]{font-weight:600}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]{font-weight:450}nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:800;background:-webkit-linear-gradient(white,#FFE08A);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#ffe396}@media (max-width: 820px){nav[_ngcontent-%COMP%]{padding:10px 16px}}"]});let t=e;return t})();var Hy=(()=>{let e=class e{constructor(){this.currentYear=2024}ngOnInit(){this.currentYear=new Date().getFullYear()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["app-footer"]],decls:25,vars:1,consts:[[1,"footer"],[1,"footer-container"],[1,"footer-section"],["href","https://forms.gle/z3iC9n6WMyrKn5fv5","target","_blank"],[1,"bi","bi-emoji-smile-fill"],[1,"social-icons"],["href","https://www.linkedin.com/in/ruthyankson","target","_blank"],[1,"bi","bi-linkedin"],["href","https://github.com/ruthyankson","target","_blank"],[1,"bi","bi-github"],["href","https://twitter.com/adwowaray","target","_blank"],[1,"bi","bi-twitter-x"],[1,"footer-bottom"],[2,"padding-top","2%"]],template:function(o,r){o&1&&(w(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h3"),D(4,"About"),v(),w(5,"p"),D(6,"The best hymns collection for your spiritual growth and worship."),v(),w(7,"p"),D(8,"For your valuable input, click here: "),w(9,"a",3),T(10,"i",4),D(11," Feedback "),v()()(),w(12,"div",2)(13,"h3"),D(14,"Let's Connect"),v(),w(15,"div",5)(16,"a",6),T(17,"i",7),v(),w(18,"a",8),T(19,"i",9),v(),w(20,"a",10),T(21,"i",11),v()()()(),w(22,"div",12)(23,"p",13),D(24),v()()()),o&2&&(A(24),be("\xA9 ",r.currentYear," Only Believe Hymnal. All rights reserved."))},styles:[".footer[_ngcontent-%COMP%]{position:absolute;background-color:#003254;color:#fff;padding:8% 1.5% 1.5%;text-align:center;width:100%}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:flex-start;flex-wrap:wrap;padding-bottom:2%}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]{flex:1;margin:10px}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:5%;margin-bottom:15px;font-size:1.5rem;color:#daa520}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffe396;margin:0 10px;font-size:1.5rem;text-decoration:none;transition:color .3s}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#c8e5f4}.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]{border-top:1px solid #daa520;margin-top:20px;padding-top:10px;font-size:.9rem}"]});let t=e;return t})();var wa=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["app-page-heading"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:1,consts:[[1,"hymns__heading","centered","heading__design1"],[1,"label-flex"],["width","70px","src","assets/images/string_note_left.png","alt","Music Staff"],[1,"centered"],["width","70px","src","assets/images/string_note.png","alt","Music Staff"]],template:function(o,r){o&1&&(w(0,"div",0)(1,"div",1)(2,"div"),T(3,"img",2),v(),w(4,"div",3),D(5),v(),w(6,"div"),T(7,"img",4),v()()()),o&2&&(A(5),be(" ",r.pageTitle," "))}});let t=e;return t})();var Ly=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({providers:[kt,fa],imports:[qt,hd,qt,hd]});let t=e;return t})();var Py=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["app-app-hymnal"]],decls:3,vars:0,template:function(o,r){o&1&&T(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[rc,xy,Hy],data:{animation:[st("routeAnimations",[et("* <=> *",[ge({opacity:0}),$e("300ms",ge({opacity:1}))])])]}});let t=e;return t})();var va=(()=>{let e=class e{constructor(n){this.router=n}navigateToHymn(n){this.router.navigate(["hymn",n])}};e.\u0275fac=function(o){return new(o||e)(B(Ne))},e.\u0275cmp=X({type:e,selectors:[["app-song"]],inputs:{hymn:"hymn"},decls:11,vars:4,consts:[[1,"song__card"],[3,"click"],[1,"flex-container"],[1,"flex-icon"],[1,"bi","bi-music-note"],[1,"flex-number"],[1,"flex-text"],[1,"thin-divider"]],template:function(o,r){o&1&&(w(0,"div",0)(1,"a",1),ee("click",function(){return r.navigateToHymn(r.hymn.hymn_number)}),w(2,"div",2)(3,"div",3),T(4,"i",4),v(),w(5,"div",5),D(6),v(),w(7,"div",6),D(8),dn(9,"capitalize"),v()()(),T(10,"div",7),v()),o&2&&(A(6),be(" ",r.hymn.hymn_number," "),A(2),be(" ",cn(9,2,r.hymn.title)," "))},dependencies:[Vi],styles:[".song__card[_ngcontent-%COMP%]{font-size:1.2rem}.song__card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:100%;padding:15px;box-sizing:border-box;text-decoration:none;color:#4ea8e3;cursor:pointer;transition:background-color .3s ease-out,color .3s ease-out}.song__card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#09f;border-left:2px solid rgba(0,153,255,.311);border-right:2px solid rgba(0,153,255,.311)}.song__card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .flex-icon[_ngcontent-%COMP%]{border-radius:0 0 0 15%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}"]});let t=e;return t})();var hC=t=>({"scroll-effect":t});function fC(t,e){t&1&&(w(0,"div",2),T(1,"img",3),v())}function pC(t,e){if(t&1&&(w(0,"div"),T(1,"app-song",19),v()),t&2){let i=e.$implicit;A(),k("hymn",i)}}function mC(t,e){if(t&1){let i=Te();w(0,"section"),T(1,"app-page-heading",4),w(2,"div",5),T(3,"div",6),w(4,"div",7),re(5,pC,2,1,"div",8),v(),w(6,"div",9)(7,"button",10),ee("click",function(){ce(i);let o=oe();return he(o.loadMore())}),D(8," Load More "),T(9,"i",11),v(),w(10,"button",12),ee("click",function(){ce(i);let o=oe();return he(o.loadLess())}),T(11,"i",13),D(12," Load Less "),v()()(),T(13,"div",14),w(14,"div",15),T(15,"img",16),w(16,"div",17)(17,"div",18),D(18,"Aren't these hymns Refreshing!"),v()()()()}if(t&2){let i=oe();k("@routeAnimations",void 0),A(),k("pageTitle",i.title),A(),k("ngClass",po(4,hC,i.isScrolling)),A(3),k("ngForOf",i.hymns)}}var Vy=(()=>{let e=class e{constructor(n){this.hymnService=n,this.title="Hymns",this.hymns=[],this.isLoading=!0,this.isScrolling=!1}ngOnInit(){this.getHymns()}getHymns(){this.hymnService.getHymns().subscribe(n=>{this.hymns=n.slice(0,25),this.isLoading=!1})}loadMore(){let n=[];this.isLoading=!0,this.isScrolling=!0,this.hymnService.getHymns().subscribe(o=>{n=o.slice(25,o.length),setTimeout(()=>{this.hymns=[...this.hymns,...n],setTimeout(()=>{this.isScrolling=!1},500)},100),this.isLoading=!1})}loadLess(){let n=[];this.isLoading=!0,this.isScrolling=!0,this.hymnService.getHymns().subscribe(o=>{n=o.slice(0,25),setTimeout(()=>{this.hymns=n,setTimeout(()=>{this.isScrolling=!1},500)},100),this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(B(kt))},e.\u0275cmp=X({type:e,selectors:[["app-hymns"]],decls:2,vars:2,consts:[["class","loading-container",4,"ngIf"],[4,"ngIf"],[1,"loading-container"],["src","assets/gifs/loading.gif","width","70px","alt","Loading..."],[3,"pageTitle"],[1,"custom-container","scroll-over",3,"ngClass"],[1,"space-1"],[1,"hymn-list"],[4,"ngFor","ngForOf"],[1,"scroll-effect__buttons"],[1,"primary-button__no-outline",3,"click"],[1,"bi","bi-caret-right"],[1,"secondary-button__no-outline",3,"click"],[1,"bi","bi-caret-left"],[1,"more","last-section__before","scroll-over","centered"],[1,"image-container"],["src","assets/gifs/waterfall.gif","alt","Refreshing",1,"last-image"],[1,"overlay"],[1,"overlay__text","glow"],[3,"hymn"]],template:function(o,r){o&1&&re(0,fC,2,0,"div",0)(1,mC,19,6,"section",1),o&2&&(k("ngIf",r.isLoading),A(),k("ngIf",!r.isLoading))},dependencies:[Ls,Mt,At,wa,va],styles:[".hymn-list[_ngcontent-%COMP%]{width:100%;max-height:60%;overflow-y:auto;transition:max-height .5s ease-out}.hymn-list.scroll-effect[_ngcontent-%COMP%]{max-height:100vh}.scroll-effect__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;justify-content:space-between;padding:2rem 0}"],data:{animation:[st("routeAnimations",[et("* <=> *",[ge({opacity:0}),$e("300ms",ge({opacity:1}))])])]}});let t=e;return t})();var jy=()=>[];function gC(t,e){t&1&&(w(0,"div",2),T(1,"img",3),v())}function yC(t,e){if(t&1&&(w(0,"div",26)(1,"a",27),D(2),v()()),t&2){let i=e.index;A(),k("routerLink",$u(3,jy))("fragment","hymn__stanza"+i),A(),be("[",i+1,"]")}}function wC(t,e){if(t&1&&(w(0,"div",20),T(1,"div",21),w(2,"div",22),D(3," Chorus "),v(),T(4,"p",23),w(5,"div",24),D(6," Stanzas: "),re(7,yC,3,4,"div",25),v()()),t&2){let i=oe(2);A(4),k("innerHTML",i.formatUndefinedPossibleText(i.hymnHere==null||i.hymnHere.chorus==null?null:i.hymnHere.chorus.refrain),Su),A(3),k("ngForOf",i.hymnHere==null?null:i.hymnHere.stanzas)}}function vC(t,e){t&1&&(w(0,"p")(1,"a",27),D(2," Chorus "),T(3,"i",30),v()()),t&2&&(A(),k("routerLink",$u(2,jy))("fragment","hymn__chorus"))}function bC(t,e){if(t&1&&(w(0,"div",28)(1,"div",29),D(2),v(),T(3,"p",23),re(4,vC,4,3,"p",1),v()),t&2){let i=e.$implicit,n=e.index,o=oe(2);A(),Es("id","hymn__stanza",n,""),A(),be("Stanza ",n+1,""),A(),k("innerHTML",o.formatText(i.verse),Su),A(),k("ngIf",o.hymnHere==null?null:o.hymnHere.chorus)}}function _C(t,e){if(t&1){let i=Te();w(0,"section"),T(1,"app-page-heading",4),dn(2,"capitalize"),w(3,"div",5),re(4,wC,8,2,"div",6),w(5,"div",7)(6,"div",8)(7,"div",9),re(8,bC,5,5,"div",10),v()()(),w(9,"div",11),T(10,"div",12),w(11,"button",13),ee("click",function(){ce(i);let o=oe();return he(o.goBack())}),T(12,"i",14),D(13," Back to hymns "),v()()(),T(14,"div",15),w(15,"div",16),T(16,"img",17),w(17,"div",18)(18,"div",19),D(19,"Isn't this hymn Uplifting?!"),v()()()()}if(t&2){let i=oe();k("@routeAnimations",void 0),A(),k("pageTitle",cn(2,4,i.hymnHere==null?null:i.hymnHere.title)),A(3),k("ngIf",i.hymnHere==null?null:i.hymnHere.chorus),A(4),k("ngForOf",i.hymnHere==null?null:i.hymnHere.stanzas)}}var Gy=(()=>{let e=class e{constructor(n,o,r){this.route=n,this.hymnService=o,this.router=r,this.isLoading=!0}ngOnInit(){this.getHymn()}getHymn(){let n=Number(this.route.snapshot.paramMap.get("hymn_number"));n&&this.hymnService.getHymn(n).subscribe(o=>{this.hymnHere=o,this.isLoading=!1})}formatUndefinedPossibleText(n){return n?this.formatText(n):""}formatText(n){return n.replace(/\n/g,"<br>")}goBack(){this.router.navigate(["hymns"])}};e.\u0275fac=function(o){return new(o||e)(B(Qt),B(kt),B(Ne))},e.\u0275cmp=X({type:e,selectors:[["app-hymn"]],decls:2,vars:2,consts:[["class","loading-container",4,"ngIf"],[4,"ngIf"],[1,"loading-container"],["src","assets/gifs/loading.gif","width","70px","alt","Loading..."],[3,"pageTitle"],[1,"custom-container","scroll-over"],["class","chorus__padding",4,"ngIf"],[1,"picture-back","mob__pt-2"],[1,"inner-back"],[1,"grid__container"],["class","hymn__stanza",4,"ngFor","ngForOf"],[1,"centered"],[1,"space-5"],[1,"primary-button",3,"click"],[1,"bi","bi-arrow-left-circle"],[1,"more","last-section__before","scroll-over","centered"],[1,"image-container"],["src","assets/gifs/flying_eagle.gif","alt","Uplifting",1,"last-image"],[1,"overlay"],[1,"overlay__text","glow"],[1,"chorus__padding"],[1,"space-1"],["id","hymn__chorus",1,"emphasized"],[1,"pt-2",3,"innerHTML"],[1,"stanza__numbers"],["class","stanza__number",4,"ngFor","ngForOf"],[1,"stanza__number"],[3,"routerLink","fragment"],[1,"hymn__stanza"],[1,"emphasized",3,"id"],[1,"bi","bi-arrow-bar-up"]],template:function(o,r){o&1&&re(0,gC,2,0,"div",0)(1,_C,20,6,"section",1),o&2&&(k("ngIf",r.isLoading),A(),k("ngIf",!r.isLoading))},dependencies:[Fi,Mt,At,wa,Vi],styles:['section[_ngcontent-%COMP%]{color:#5b676f;font-size:1.2rem}section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#886714;font-style:italic}section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#daa520}section[_ngcontent-%COMP%]   .hymn__stanza[_ngcontent-%COMP%]{padding-top:20px}section[_ngcontent-%COMP%]   .picture-back[_ngcontent-%COMP%]{background:url("./media/one_note_tilted-IZFLSRCN.png") no-repeat bottom right;background-size:contain}section[_ngcontent-%COMP%]   .inner-back[_ngcontent-%COMP%]{background-color:#fffc}section[_ngcontent-%COMP%]   .stanza__numbers[_ngcontent-%COMP%]{font-style:italic;display:flex;gap:10px;align-items:baseline;flex-direction:row}'],data:{animation:[st("routeAnimations",[et("* <=> *",[ge({opacity:0}),$e("300ms",ge({opacity:1}))])])]}});let t=e;return t})();var IC=["*"],Dc=(()=>{class t{config;afterChange=new ne;beforeChange=new ne;breakpoint=new ne;destroy=new ne;init=new ne;$instance;currentIndex=0;slides=[];initialized=!1;_removedSlides=[];_addedSlides=[];el=y(Oe);zone=y(q);isServer=Gn(y(Ue));ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!this.isServer&&(this._addedSlides.length>0||this._removedSlides.length>0)){let i=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?i===0?this.unslick():(this._addedSlides.forEach(n=>{this.slides.push(n),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",n.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(n=>{let o=this.slides.indexOf(n);this.slides=this.slides.filter(r=>r!==n),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",o)})}),this._removedSlides=[]):i>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(i,n)=>{this.zone.run(()=>{this.init.emit({event:i,slick:n})})}),this.$instance.slick(this.config),this.zone.run(()=>{this.initialized=!0,this.currentIndex=this.config?.initialSlide||0}),this.$instance.on("afterChange",(i,n,o)=>{this.zone.run(()=>{this.afterChange.emit({event:i,slick:n,currentSlide:o,first:o===0,last:n.$slides.length===o+n.options.slidesToScroll}),this.currentIndex=o})}),this.$instance.on("beforeChange",(i,n,o,r)=>{this.zone.run(()=>{this.beforeChange.emit({event:i,slick:n,currentSlide:o,nextSlide:r}),this.currentIndex=r})}),this.$instance.on("breakpoint",(i,n,o)=>{this.zone.run(()=>{this.breakpoint.emit({event:i,slick:n,breakpoint:o})})}),this.$instance.on("destroy",(i,n)=>{this.zone.run(()=>{this.destroy.emit({event:i,slick:n}),this.initialized=!1})})})}addSlide(i){this._addedSlides.push(i)}removeSlide(i){this._removedSlides.push(i)}slickGoTo(i){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",i)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(i){if(this.initialized){let n=i.config;if(n.previousValue!==n.currentValue&&n.currentValue!==void 0){let o=n.currentValue.refresh,r=Object.assign({},n.currentValue);delete r.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",r,o)})}}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[Cs([{provide:Gm,useExisting:gi(()=>t),multi:!0}]),Et],ngContentSelectors:IC,decls:1,vars:0,template:function(n,o){n&1&&(_i(),Ii(0))},encapsulation:2})}return t})(),Wy=(()=>{class t{carousel=y(Dc,{host:!0});renderer=y(Ut);el=y(Oe);isServer=Gn(y(Ue));ngOnInit(){this.carousel.addSlide(this),this.isServer&&this.carousel.slides.length>0&&this.renderer.setStyle(this.el,"display","none")}ngOnDestroy(){this.carousel.removeSlide(this)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=it({type:t,selectors:[["","ngxSlickItem",""]]})}return t})(),Uy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=G({imports:[qt]})}return t})();function SC(t,e){if(t&1&&(w(0,"div",3),T(1,"img",4),v()),t&2){let i=e.$implicit;A(),Wu("src",i.img,Mu)}}var ba=(()=>{let e=class e{constructor(){this.slides=[{img:"assets/images/wmb.png"},{img:"assets/images/heinrich_hofmann.jpg"},{img:"assets/images/church_ages.jpg"},{img:"assets/images/pyramid.jpg"},{img:"assets/images/bride_tree.jpg"}],this.slideConfig={slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:820,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,fade:!0}}],autoplay:!0,infinite:!0,speed:1400,autoplaySpeed:2e3,cssEase:"ease",dots:!0,easing:"linear",arrows:!1,pauseOnHover:!0}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=X({type:e,selectors:[["app-carousel"]],exportAs:["app-carousel"],standalone:!0,features:[Bn],decls:3,vars:2,consts:[["slickModal","slick-carousel"],[1,"carousel",3,"config"],["ngxSlickItem","","class","slider",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slider"],["alt","Only Believe","width","100%","height","400px",3,"src"]],template:function(o,r){o&1&&(w(0,"ngx-slick-carousel",1,0),re(2,SC,2,1,"div",2),v()),o&2&&(k("config",r.slideConfig),A(2),k("ngForOf",r.slides))},dependencies:[qt,Mt,Uy,Dc,Wy],styles:[".carousel[_ngcontent-%COMP%]{padding:0;margin:0;box-shadow:0 1px 10px #886714 inset}.slider[_ngcontent-%COMP%]{padding:10px 0}"]});let t=e;return t})();function AC(t,e){t&1&&(w(0,"div",2),T(1,"img",3),v())}function OC(t,e){if(t&1&&(w(0,"div"),T(1,"app-song",27),v()),t&2){let i=e.$implicit;A(),k("hymn",i)}}function NC(t,e){if(t&1){let i=Te();w(0,"div")(1,"section",4)(2,"div",5),T(3,"app-carousel"),v(),T(4,"div",6),v(),T(5,"div",7),w(6,"section",8)(7,"p",9),D(8,"Welcome! This app provides "),w(9,"span",10),D(10,"hymn lyrics"),v(),D(11," from the "),w(12,"span",10),D(13,"Only Believe Ghanaian Hymnal"),v(),D(14,". In the search section below, you can search for a hymn by title, stanza, chorus or all."),v(),w(15,"div",11)(16,"p")(17,"strong")(18,"span",12),D(19,"Search Tips:"),v()()(),T(20,"hr"),w(21,"ul",13)(22,"li")(23,"strong"),D(24,"By Title:"),v(),D(25," Type any word from the hymn title."),v(),w(26,"li")(27,"strong"),D(28,"By Stanza or Chorus:"),v(),D(29," Check the corresponding box and type any word you recall."),v(),w(30,"li")(31,"strong"),D(32,"All:"),v(),D(33,' Check the "All" box to search by title, stanza, and chorus.'),v()()(),w(34,"p",14)(35,"strong"),D(36,"Note:"),v(),D(37," Maximum number of hymns available is 400."),v()(),w(38,"section"),T(39,"app-search",15),v(),T(40,"div",16)(41,"div",17),w(42,"section",18)(43,"div",19)(44,"div",20),D(45," A Peek At Hymns "),v(),T(46,"div",21),w(47,"section",22),re(48,OC,2,1,"div",23),v()(),w(49,"div",24)(50,"a",25),ee("click",function(){ce(i);let o=oe();return he(o.moreHymns())}),T(51,"img",26),D(52," More Hymns "),v()()(),T(53,"div",6),v()}if(t&2){let i=oe();k("@routeAnimations",void 0),A(39),k("page_search",!0),A(9),k("ngForOf",i.hymns)}}var $y=(()=>{let e=class e{constructor(n,o){this.hymnService=n,this.router=o,this.hymns=[],this.isLoading=!0}ngOnInit(){this.getHymns()}getHymns(){this.hymnService.getHymns().subscribe(n=>{this.hymns=n.slice(0,6),this.isLoading=!1,console.log(n[159].title.toLowerCase())})}moreHymns(){this.router.navigate(["hymns"])}};e.\u0275fac=function(o){return new(o||e)(B(kt),B(Ne))},e.\u0275cmp=X({type:e,selectors:[["app-home"]],decls:2,vars:2,consts:[["class","loading-container",4,"ngIf"],[4,"ngIf"],[1,"loading-container"],["src","assets/gifs/loading.gif","width","70px","alt","Loading..."],[1,"custom-container"],[1,"carousel-section"],[1,"space-3"],[1,"thin-divider"],[1,"custom-container__home","custom-container"],[1,"dropcap"],[1,"emphasized"],[1,"search__tips"],[2,"color","rgb(0, 39, 65)","font-size","larger"],[1,"custom-list"],[1,"note"],[3,"page_search"],[1,"divider1"],[1,"divider2"],[1,"custom-container","white-back"],[1,"hymn-list"],[1,"heading1","heading__design","centered"],[1,"space-1"],[1,"white-back"],[4,"ngFor","ngForOf"],[1,"more","centered"],[3,"click"],["src","assets/gifs/music_note_blue.gif","width","50px","alt","Music Note"],[3,"hymn"]],template:function(o,r){o&1&&re(0,AC,2,0,"div",0)(1,NC,54,3,"div",1),o&2&&(k("ngIf",r.isLoading),A(),k("ngIf",!r.isLoading))},dependencies:[Mt,At,ma,ba,va],styles:['.divider2[_ngcontent-%COMP%], .divider1[_ngcontent-%COMP%]{display:flex;padding:16rem;position:relative;isolation:isolate}.divider1[_ngcontent-%COMP%]{background-color:#0099ffda;clip-path:polygon(0% 41.01%,34.48% 66.08%,50.5% 53.6%,82.9% 53%,100% 38%,100% 75%,67.26% 88.8%,0% 71.25%);margin-top:-225px;z-index:2}.divider2[_ngcontent-%COMP%]{background-color:#0099ff54;clip-path:polygon(-.5% 55.66%,34.64% 70.58%,50.17% 53.5%,82.4% 43.48%,98.92% 23.58%,100.14% 60.4%,68.02% 83.66%,.5% 85.76%);margin-top:-515px;z-index:1}.hymns-list[_ngcontent-%COMP%]{padding-bottom:10px;font-size:1.2rem}.more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:#daa520;text-decoration:none;cursor:pointer}.more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#daa520}.custom-container__home[_ngcontent-%COMP%]{font-size:1.2rem;background:#fff;background:-moz-linear-gradient(top,white 0%,rgba(0,153,255,.129),white 100%);background:-webkit-linear-gradient(top,white 0%,rgba(0,153,255,.129),white 100%);background:linear-gradient(to bottom,#fff,#0099ff21,#fff);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="white",endColorstr="white",GradientType=0);padding-bottom:25px;padding-top:30px}.custom-container__home[_ngcontent-%COMP%]   .dropcap[_ngcontent-%COMP%]{font-family:Arial,sans-serif;padding-bottom:15px}.custom-container__home[_ngcontent-%COMP%]   .dropcap[_ngcontent-%COMP%]:first-letter{font-size:3.5rem;color:#daa520;font-weight:700;float:left;margin-right:5px;line-height:1}.custom-container__home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 10px}.custom-container__home[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#333}.custom-container__home[_ngcontent-%COMP%]   .search__tips[_ngcontent-%COMP%]{padding:15px;background-color:#fff;border-radius:15px}.custom-container__home[_ngcontent-%COMP%]   .search__tips[_ngcontent-%COMP%]   .custom-list[_ngcontent-%COMP%]{list-style:none;padding-left:0}.custom-container__home[_ngcontent-%COMP%]   .search__tips[_ngcontent-%COMP%]   .custom-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:20px}.custom-container__home[_ngcontent-%COMP%]   .search__tips[_ngcontent-%COMP%]   .custom-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%) rotate(45deg);width:10px;height:10px;background-color:#333}.custom-container__home[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{color:#daa520;font-weight:700;font-size:medium;padding-top:30px}@media (max-width: 820px){.divider1[_ngcontent-%COMP%]{padding:10rem;margin-top:-145px}.divider2[_ngcontent-%COMP%]{padding:10rem;margin-top:-310px}}@media (max-width: 480px){.divider1[_ngcontent-%COMP%]{padding:5rem;margin-top:-95px}.divider2[_ngcontent-%COMP%]{padding:5rem;margin-top:-155px}}'],data:{animation:[st("routeAnimations",[et("* <=> *",[ge({opacity:0}),$e("300ms",ge({opacity:1}))])])]}});let t=e;return t})();var kC=[{path:"",component:Py,children:[{path:"",component:$y,data:{title:"Hymnal"}},{path:"hymns",component:Vy,data:{title:"Hymns"}},{path:"hymn/:hymn_number",component:Gy,data:{title:"Hymn"}}]}],Jy=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({imports:[hc.forChild(kC),hc]});let t=e;return t})();var VP=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=W({type:e}),e.\u0275inj=G({imports:[Jy,Ly,ba]});let t=e;return t})();export{I as a,Zy as b,P as c,_e as d,le as e,E as f,R as g,Ht as h,vt as i,M as j,_ as k,G as l,C as m,y as n,X as o,W as p,jR as q,B as r,Ur as s,eo as t,q as u,w as v,v as w,T as x,ee as y,D as z,me as A,Ei as B,Bs as C,Kt as D,fn as E,Vs as F,Km as G,Vx as H,tg as I,iH as J,oH as K,wn as L,TH as M,DH as N,ge as O,Zg as P,Xg as Q,EH as R,rc as S,Ne as T,hc as U,ha as V,RL as W,Ly as X,ba as Y,VP as Z};
