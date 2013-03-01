function(){return function(){function g(a){throw a;}var h=void 0,j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}function n(a){return function(){return a}}var p=this;function q(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function r(a,b){function c(){}c.prototype=b.prototype;a.ca=b.prototype;a.prototype=new c};function s(a,b){this.code=a;this.message=b||"";this.name=aa[a]||aa[13];var c=Error(this.message);c.name=this.name;this.stack=c.stack||""}r(s,Error);
var aa={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
s.prototype.toString=function(){return this.name+": "+this.message};function t(a){Error.captureStackTrace?Error.captureStackTrace(this,t):this.stack=Error().stack||"";a&&(this.message=String(a))}r(t,Error);t.prototype.name="CustomError";function ba(a,b){for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a};function ca(a,b){b.unshift(a);t.call(this,ba.apply(k,b));b.shift();this.ba=a}r(ca,t);ca.prototype.name="AssertionError";function da(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(b)var e=e+(": "+b),f=d;g(new ca(""+e,f||[]))}};var u=Array.prototype;function v(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(h,d[e],e,a)}function ea(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;v(a,function(c,f){d=b.call(h,d,c,f,a)});return d}function x(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(h,d[e],e,a))return j;return l}function fa(a){return u.concat.apply(u,arguments)}function ga(a,b,c){da(a.length!=k);return 2>=arguments.length?u.slice.call(a,b):u.slice.call(a,b,c)};function ha(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ia(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?ja(a,b):!c&&ha(e,b)?-1*ka(a,b):!d&&ha(f,a)?ka(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=la(a);c=d.createRange();c.selectNode(a);c.collapse(j);d=d.createRange();d.selectNode(b);
d.collapse(j);return c.compareBoundaryPoints(p.Range.START_TO_END,d)}function ka(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return ja(d,a)}function ja(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1}function la(a){return 9==a.nodeType?a:a.ownerDocument||a.document};var ma;ma=l;var y=p.navigator?p.navigator.userAgent:k;y&&(-1!=y.indexOf("Firefox")||-1!=y.indexOf("Camino")||-1!=y.indexOf("iPhone")||-1!=y.indexOf("iPod")||-1!=y.indexOf("iPad")||-1!=y.indexOf("Android")&&(ma=j));var na=ma;function z(a,b,c){this.i=a;this.$=b||1;this.h=c||1};function oa(a){this.I=a;this.z=0}var pa=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),qa=/^\s/;function A(a,b){return a.I[a.z+(b||0)]}oa.prototype.next=function(){return this.I[this.z++]};oa.prototype.back=function(){this.z--};oa.prototype.empty=function(){return this.I.length<=this.z};function C(a){var b=k,c=a.nodeType;1==c&&(b=a.textContent,b=b==h||b==k?a.innerText:b,b=b==h||b==k?"":b);if("string"!=typeof b)if(9==c||1==c)for(var a=9==c?a.documentElement:a.firstChild,c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}else b=a.nodeValue;return""+b}function D(a,b,c){if(b===k)return j;try{if(!a.getAttribute)return l}catch(d){return l}return c==k?!!a.getAttribute(b):a.getAttribute(b,2)==c}
function E(a,b,c,d,e){return ra.call(k,a,b,q(c)?c:k,q(d)?d:k,e||new F)}function ra(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),v(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),v(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):a instanceof H?sa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),v(b,function(a){D(a,c,d)&&e.add(a)}));return e}
function ta(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)D(b,c,d)&&a.matches(b)&&e.add(b);return e}function sa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)D(b,c,d)&&a.matches(b)&&e.add(b),sa(a,b,c,d,e)};function F(){this.h=this.f=k;this.t=0}function ua(a){this.p=a;this.next=this.o=k}function va(a,b){if(a.f){if(!b.f)return a}else return b;for(var c=a.f,d=b.f,e=k,f=k,i=0;c&&d;)c.p==d.p?(f=c,c=c.next,d=d.next):0<ia(c.p,d.p)?(f=d,d=d.next):(f=c,c=c.next),(f.o=e)?e.next=f:a.f=f,e=f,i++;for(f=c||d;f;)f.o=e,e=e.next=f,i++,f=f.next;a.h=e;a.t=i;return a}F.prototype.unshift=function(a){a=new ua(a);a.next=this.f;this.h?this.f.o=a:this.f=this.h=a;this.f=a;this.t++};
F.prototype.add=function(a){a=new ua(a);a.o=this.h;this.f?this.h.next=a:this.f=this.h=a;this.h=a;this.t++};function wa(a){return(a=a.f)?a.p:k}F.prototype.k=m("t");function xa(a){return(a=wa(a))?C(a):""}function I(a,b){return new ya(a,!!b)}function ya(a,b){this.X=a;this.J=(this.q=b)?a.h:a.f;this.F=k}ya.prototype.next=function(){var a=this.J;if(a==k)return k;var b=this.F=a;this.J=this.q?a.o:a.next;return b.p};
ya.prototype.remove=function(){var a=this.X,b=this.F;b||g(Error("Next must be called at least once before remove."));var c=b.o,b=b.next;c?c.next=b:a.f=b;b?b.o=c:a.h=c;a.t--;this.F=k};function J(a){this.e=a;this.d=this.j=l;this.u=k}J.prototype.c=m("j");J.prototype.m=m("u");function K(a,b){var c=a.evaluate(b);return c instanceof F?+xa(c):+c}function L(a,b){var c=a.evaluate(b);return c instanceof F?xa(c):""+c}function M(a,b){var c=a.evaluate(b);return c instanceof F?!!c.k():!!c};function N(a,b,c){J.call(this,a.e);this.H=a;this.M=b;this.R=c;this.j=b.c()||c.c();this.d=b.d||c.d;this.H==za&&(!c.d&&!c.c()&&4!=c.e&&0!=c.e&&b.m()?this.u={name:b.m().name,s:c}:!b.d&&(!b.c()&&4!=b.e&&0!=b.e&&c.m())&&(this.u={name:c.m().name,s:b}))}r(N,J);
function O(a,b,c,d,e){var b=b.evaluate(d),c=c.evaluate(d),f;if(b instanceof F&&c instanceof F){f=I(b);for(b=f.next();b;b=f.next()){e=I(c);for(d=e.next();d;d=e.next())if(a(C(b),C(d)))return j}return l}if(b instanceof F||c instanceof F){b instanceof F?e=b:(e=c,c=b);e=I(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":f=+C(d);break;case "boolean":f=!!C(d);break;case "string":f=C(d);break;default:g(Error("Illegal primitive type for comparison."))}if(a(f,c))return j}return l}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}N.prototype.evaluate=function(a){return this.H.n(this.M,this.R,a)};N.prototype.toString=function(a){var a=a||"",b=a+"binary expression: "+this.H+"\n",a=a+"  ",b=b+(this.M.toString(a)+"\n");return b+=this.R.toString(a)};function Aa(a,b,c,d){this.Z=a;this.P=b;this.e=c;this.n=d}Aa.prototype.toString=m("Z");var Ba={};
function P(a,b,c,d){a in Ba&&g(Error("Binary operator already created: "+a));a=new Aa(a,b,c,d);return Ba[a.toString()]=a}P("div",6,1,function(a,b,c){return K(a,c)/K(b,c)});P("mod",6,1,function(a,b,c){return K(a,c)%K(b,c)});P("*",6,1,function(a,b,c){return K(a,c)*K(b,c)});P("+",5,1,function(a,b,c){return K(a,c)+K(b,c)});P("-",5,1,function(a,b,c){return K(a,c)-K(b,c)});P("<",4,2,function(a,b,c){return O(function(a,b){return a<b},a,b,c)});
P(">",4,2,function(a,b,c){return O(function(a,b){return a>b},a,b,c)});P("<=",4,2,function(a,b,c){return O(function(a,b){return a<=b},a,b,c)});P(">=",4,2,function(a,b,c){return O(function(a,b){return a>=b},a,b,c)});var za=P("=",3,2,function(a,b,c){return O(function(a,b){return a==b},a,b,c,j)});P("!=",3,2,function(a,b,c){return O(function(a,b){return a!=b},a,b,c,j)});P("and",2,2,function(a,b,c){return M(a,c)&&M(b,c)});P("or",1,2,function(a,b,c){return M(a,c)||M(b,c)});function Ca(a,b){b.k()&&4!=a.e&&g(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));J.call(this,a.e);this.Q=a;this.b=b;this.j=a.c();this.d=a.d}r(Ca,J);Ca.prototype.evaluate=function(a){a=this.Q.evaluate(a);return Da(this.b,a)};Ca.prototype.toString=function(a){var a=a||"",b=a+"Filter: \n",a=a+"  ",b=b+this.Q.toString(a);return b+=this.b.toString(a)};function Ea(a,b){b.length<a.O&&g(Error("Function "+a.g+" expects at least"+a.O+" arguments, "+b.length+" given"));a.G!==k&&b.length>a.G&&g(Error("Function "+a.g+" expects at most "+a.G+" arguments, "+b.length+" given"));a.Y&&v(b,function(b,d){4!=b.e&&g(Error("Argument "+d+" to function "+a.g+" is not of type Nodeset: "+b))});J.call(this,a.e);this.w=a;this.C=b;this.j=a.j||x(b,function(a){return a.c()});this.d=a.W&&!b.length||a.V&&!!b.length||x(b,function(a){return a.d})}r(Ea,J);
Ea.prototype.evaluate=function(a){return this.w.n.apply(k,fa(a,this.C))};Ea.prototype.toString=function(a){var b=a||"",a=b+"Function: "+this.w+"\n",b=b+"  ";this.C.length&&(a+=b+"Arguments:",b+="  ",a=ea(this.C,function(a,d){return a+"\n"+d.toString(b)},a));return a};function Fa(a,b,c,d,e,f,i,w,B){this.g=a;this.e=b;this.j=c;this.W=d;this.V=e;this.n=f;this.O=i;this.G=w!==h?w:i;this.Y=!!B}Fa.prototype.toString=m("g");var Ga={};
function Q(a,b,c,d,e,f,i,w){a in Ga&&g(Error("Function already created: "+a+"."));Ga[a]=new Fa(a,b,c,d,l,e,f,i,w)}Q("boolean",2,l,l,function(a,b){return M(b,a)},1);Q("ceiling",1,l,l,function(a,b){return Math.ceil(K(b,a))},1);Q("concat",3,l,l,function(a,b){var c=ga(arguments,1);return ea(c,function(b,c){return b+L(c,a)},"")},2,k);Q("contains",2,l,l,function(a,b,c){b=L(b,a);a=L(c,a);return-1!=b.indexOf(a)},2);Q("count",1,l,l,function(a,b){return b.evaluate(a).k()},1,1,j);Q("false",2,l,l,n(l),0);
Q("floor",1,l,l,function(a,b){return Math.floor(K(b,a))},1);Q("id",4,l,l,function(a,b){var c=a.i,d=9==c.nodeType?c:c.ownerDocument,c=L(b,a).split(/\s+/),e=[];v(c,function(a){var a=d.getElementById(a),b;if(b=a){a:if(q(e))b=!q(a)||1!=a.length?-1:e.indexOf(a,0);else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=!(0<=b)}b&&e.push(a)});e.sort(ia);var f=new F;v(e,function(a){f.add(a)});return f},1);Q("lang",2,l,l,n(l),1);
Q("last",1,j,l,function(a){1!=arguments.length&&g(Error("Function last expects ()"));return a.h},0);Q("local-name",3,l,j,function(a,b){var c=b?wa(b.evaluate(a)):a.i;return c?c.nodeName.toLowerCase():""},0,1,j);Q("name",3,l,j,function(a,b){var c=b?wa(b.evaluate(a)):a.i;return c?c.nodeName.toLowerCase():""},0,1,j);Q("namespace-uri",3,j,l,n(""),0,1,j);Q("normalize-space",3,l,j,function(a,b){return(b?L(b,a):C(a.i)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
Q("not",2,l,l,function(a,b){return!M(b,a)},1);Q("number",1,l,j,function(a,b){return b?K(b,a):+C(a.i)},0,1);Q("position",1,j,l,function(a){return a.$},0);Q("round",1,l,l,function(a,b){return Math.round(K(b,a))},1);Q("starts-with",2,l,l,function(a,b,c){b=L(b,a);a=L(c,a);return 0==b.lastIndexOf(a,0)},2);Q("string",3,l,j,function(a,b){return b?L(b,a):C(a.i)},0,1);Q("string-length",1,l,j,function(a,b){return(b?L(b,a):C(a.i)).length},0,1);
Q("substring",3,l,l,function(a,b,c,d){c=K(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?K(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";var c=Math.round(c)-1,e=Math.max(c,0),a=L(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);Q("substring-after",3,l,l,function(a,b,c){b=L(b,a);a=L(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
Q("substring-before",3,l,l,function(a,b,c){b=L(b,a);a=L(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);Q("sum",1,l,l,function(a,b){for(var c=I(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+C(e);return d},1,1,j);Q("translate",3,l,l,function(a,b,c,d){for(var b=L(b,a),c=L(c,a),e=L(d,a),a=[],d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);Q("true",2,l,l,n(j),0);function H(a,b){this.T=a;this.N=b!==h?b:k;this.r=k;switch(a){case "comment":this.r=8;break;case "text":this.r=3;break;case "processing-instruction":this.r=7;break;case "node":break;default:g(Error("Unexpected argument"))}}function Ha(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}H.prototype.matches=function(a){return this.r===k||this.r==a.nodeType};H.prototype.getName=m("T");
H.prototype.toString=function(a){var a=a||"",b=a+"kindtest: "+this.T;this.N===k||(b+="\n"+this.N.toString(a+"  "));return b};function Ia(a){J.call(this,3);this.S=a.substring(1,a.length-1)}r(Ia,J);Ia.prototype.evaluate=m("S");Ia.prototype.toString=function(a){return(a||"")+"literal: "+this.S};function R(a){this.g=a.toLowerCase()}R.prototype.matches=function(a){var b=a.nodeType;if(1==b||2==b)return"*"==this.g||this.g==a.nodeName.toLowerCase()?j:this.g==(a.namespaceURI||"http://www.w3.org/1999/xhtml")+":*"};R.prototype.getName=m("g");R.prototype.toString=function(a){return(a||"")+"nametest: "+this.g};function Ja(a){J.call(this,1);this.U=a}r(Ja,J);Ja.prototype.evaluate=m("U");Ja.prototype.toString=function(a){return(a||"")+"number: "+this.U};function Ka(a,b){J.call(this,a.e);this.L=a;this.v=b;this.j=a.c();this.d=a.d;if(1==this.v.length){var c=this.v[0];!c.D&&c.l==La&&(c=c.B,"*"!=c.getName()&&(this.u={name:c.getName(),s:k}))}}r(Ka,J);function S(){J.call(this,4)}r(S,J);S.prototype.evaluate=function(a){var b=new F,a=a.i;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};S.prototype.toString=function(a){return a+"RootHelperExpr"};function Ma(){J.call(this,4)}r(Ma,J);Ma.prototype.evaluate=function(a){var b=new F;b.add(a.i);return b};
Ma.prototype.toString=function(a){return a+"ContextHelperExpr"};
Ka.prototype.evaluate=function(a){var b=this.L.evaluate(a);b instanceof F||g(Error("FilterExpr must evaluate to nodeset."));for(var a=this.v,c=0,d=a.length;c<d&&b.k();c++){var e=a[c],f=I(b,e.l.q),i;if(!e.c()&&e.l==Na){for(i=f.next();(b=f.next())&&(!i.contains||i.contains(b))&&b.compareDocumentPosition(i)&8;i=b);b=e.evaluate(new z(i))}else if(!e.c()&&e.l==Oa)i=f.next(),b=e.evaluate(new z(i));else{i=f.next();for(b=e.evaluate(new z(i));(i=f.next())!=k;)i=e.evaluate(new z(i)),b=va(b,i)}}return b};
Ka.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.L.toString(b);this.v.length&&(c+=b+"Steps:\n",b+="  ",v(this.v,function(a){c+=a.toString(b)}));return c};function T(a,b){this.b=a;this.q=!!b}function Da(a,b,c){for(c=c||0;c<a.b.length;c++)for(var d=a.b[c],e=I(b),f=b.k(),i,w=0;i=e.next();w++){var B=a.q?f-w:w+1;i=d.evaluate(new z(i,B,f));var G;"number"==typeof i?G=B==i:"string"==typeof i||"boolean"==typeof i?G=!!i:i instanceof F?G=0<i.k():g(Error("Predicate.evaluate returned an unexpected type."));G||e.remove()}return b}T.prototype.m=function(){return 0<this.b.length?this.b[0].m():k};
T.prototype.c=function(){for(var a=0;a<this.b.length;a++){var b=this.b[a];if(b.c()||1==b.e||0==b.e)return j}return l};T.prototype.k=function(){return this.b.length};T.prototype.toString=function(a){var b=a||"",a=b+"Predicates:",b=b+"  ";return ea(this.b,function(a,d){return a+"\n"+b+d.toString(b)},a)};function U(a,b,c,d){J.call(this,4);this.l=a;this.B=b;this.b=c||new T([]);this.D=!!d;b=this.b.m();a.aa&&b&&(this.u={name:b.name,s:b.s});this.j=this.b.c()}r(U,J);U.prototype.evaluate=function(a){var b=a.i,c=k,c=this.m(),d=k,e=k,f=0;c&&(d=c.name,e=c.s?L(c.s,a):k,f=1);if(this.D)if(!this.c()&&this.l==Pa)c=E(this.B,b,d,e),c=Da(this.b,c,f);else if(a=I((new U(Qa,new H("node"))).evaluate(a)),b=a.next())for(c=this.n(b,d,e,f);(b=a.next())!=k;)c=va(c,this.n(b,d,e,f));else c=new F;else c=this.n(a.i,d,e,f);return c};
U.prototype.n=function(a,b,c,d){a=this.l.w(this.B,a,b,c);return a=Da(this.b,a,d)};U.prototype.toString=function(a){var a=a||"",b=a+"Step: \n",a=a+"  ",b=b+(a+"Operator: "+(this.D?"//":"/")+"\n");this.l.g&&(b+=a+"Axis: "+this.l+"\n");b+=this.B.toString(a);if(this.b.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.b.length;c++)var d=c<this.b.length-1?", ":"",b=b+(this.b[c].toString(a)+d);return b};function Ra(a,b,c,d){this.g=a;this.w=b;this.q=c;this.aa=d}Ra.prototype.toString=m("g");var Sa={};
function V(a,b,c,d){a in Sa&&g(Error("Axis already created: "+a));b=new Ra(a,b,c,!!d);return Sa[a]=b}V("ancestor",function(a,b){for(var c=new F,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},j);V("ancestor-or-self",function(a,b){var c=new F,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},j);
var La=V("attribute",function(a,b){var c=new F,d=a.getName(),e=b.attributes;if(e)if(a instanceof H&&a.r===k||"*"==d)for(var d=0,f;f=e[d];d++)c.add(f);else(f=e.getNamedItem(d))&&c.add(f);return c},l),Pa=V("child",function(a,b,c,d,e){return ta.call(k,a,b,q(c)?c:k,q(d)?d:k,e||new F)},l,j);V("descendant",E,l,j);
var Qa=V("descendant-or-self",function(a,b,c,d){var e=new F;D(b,c,d)&&a.matches(b)&&e.add(b);return E(a,b,c,d,e)},l,j),Na=V("following",function(a,b,c,d){var e=new F;do for(var f=b;f=f.nextSibling;)D(f,c,d)&&a.matches(f)&&e.add(f),e=E(a,f,c,d,e);while(b=b.parentNode);return e},l,j);V("following-sibling",function(a,b){for(var c=new F,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},l);V("namespace",function(){return new F},l);
var Ta=V("parent",function(a,b){var c=new F;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},l),Oa=V("preceding",function(a,b,c,d){var e=new F,f=[];do f.unshift(b);while(b=b.parentNode);for(var i=1,w=f.length;i<w;i++){for(var B=[],b=f[i];b=b.previousSibling;)B.unshift(b);for(var G=0,hb=B.length;G<hb;G++)b=B[G],D(b,c,d)&&a.matches(b)&&e.add(b),e=E(a,b,c,d,e)}return e},j,j);
V("preceding-sibling",function(a,b){for(var c=new F,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},j);var Ua=V("self",function(a,b){var c=new F;a.matches(b)&&c.add(b);return c},l);function Va(a){J.call(this,1);this.K=a;this.j=a.c();this.d=a.d}r(Va,J);Va.prototype.evaluate=function(a){return-K(this.K,a)};Va.prototype.toString=function(a){var a=a||"",b=a+"UnaryExpr: -\n";return b+=this.K.toString(a+"  ")};function Wa(a){J.call(this,4);this.A=a;this.j=x(this.A,function(a){return a.c()});this.d=x(this.A,function(a){return a.d})}r(Wa,J);Wa.prototype.evaluate=function(a){var b=new F;v(this.A,function(c){c=c.evaluate(a);c instanceof F||g(Error("PathExpr must evaluate to NodeSet."));b=va(b,c)});return b};Wa.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";v(this.A,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function Xa(a){this.a=a}function Ya(a){for(var b,c=[];;){W(a,"Missing right hand side of binary expression.");b=Za(a);var d=a.a.next();if(!d)break;var e=(d=Ba[d]||k)&&d.P;if(!e){a.a.back();break}for(;c.length&&e<=c[c.length-1].P;)b=new N(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new N(c.pop(),c.pop(),b);return b}function W(a,b){a.a.empty()&&g(Error(b))}function $a(a,b){var c=a.a.next();c!=b&&g(Error("Bad token, expected: "+b+" got: "+c))}
function ab(a){a=a.a.next();")"!=a&&g(Error("Bad token: "+a))}function bb(a){a=a.a.next();2>a.length&&g(Error("Unclosed literal string"));return new Ia(a)}function cb(a){return"*"!=A(a.a)&&":"==A(a.a,1)&&"*"==A(a.a,2)?new R(a.a.next()+a.a.next()+a.a.next()):new R(a.a.next())}
function db(a){var b,c=[],d;if("/"==A(a.a)||"//"==A(a.a)){b=a.a.next();d=A(a.a);if("/"==b&&(a.a.empty()||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new S;d=new S;W(a,"Missing next location step.");b=eb(a,b);c.push(b)}else{a:{b=A(a.a);d=b.charAt(0);switch(d){case "$":g(Error("Variable reference not allowed in HTML XPath"));case "(":a.a.next();b=Ya(a);W(a,'unclosed "("');$a(a,")");break;case '"':case "'":b=bb(a);break;default:if(isNaN(+b))if(!Ha(b)&&/(?![0-9])[\w]/.test(d)&&"("==
A(a.a,1)){b=a.a.next();b=Ga[b]||k;a.a.next();for(d=[];")"!=A(a.a);){W(a,"Missing function argument list.");d.push(Ya(a));if(","!=A(a.a))break;a.a.next()}W(a,"Unclosed function argument list.");ab(a);b=new Ea(b,d)}else{b=k;break a}else b=new Ja(+a.a.next())}"["==A(a.a)&&(d=new T(fb(a)),b=new Ca(b,d))}if(b)if("/"==A(a.a)||"//"==A(a.a))d=b;else return b;else b=eb(a,"/"),d=new Ma,c.push(b)}for(;"/"==A(a.a)||"//"==A(a.a);)b=a.a.next(),W(a,"Missing next location step."),b=eb(a,b),c.push(b);return new Ka(d,
c)}
function eb(a,b){var c,d,e;"/"!=b&&"//"!=b&&g(Error('Step op should be "/" or "//"'));if("."==A(a.a))return d=new U(Ua,new H("node")),a.a.next(),d;if(".."==A(a.a))return d=new U(Ta,new H("node")),a.a.next(),d;var f;"@"==A(a.a)?(f=La,a.a.next(),W(a,"Missing attribute name")):"::"==A(a.a,1)?(/(?![0-9])[\w]/.test(A(a.a).charAt(0))||g(Error("Bad token: "+a.a.next())),e=a.a.next(),(f=Sa[e]||k)||g(Error("No axis with name: "+e)),a.a.next(),W(a,"Missing node name")):f=Pa;e=A(a.a);if(/(?![0-9])[\w]/.test(e.charAt(0)))if("("==A(a.a,
1)){Ha(e)||g(Error("Invalid node type: "+e));c=a.a.next();Ha(c)||g(Error("Invalid type name: "+c));$a(a,"(");W(a,"Bad nodetype");e=A(a.a).charAt(0);var i=k;if('"'==e||"'"==e)i=bb(a);W(a,"Bad nodetype");ab(a);c=new H(c,i)}else c=cb(a);else"*"==e?c=cb(a):g(Error("Bad token: "+a.a.next()));e=new T(fb(a),f.q);return d||new U(f,c,e,"//"==b)}
function fb(a){for(var b=[];"["==A(a.a);){a.a.next();W(a,"Missing predicate expression.");var c=Ya(a);b.push(c);W(a,"Unclosed predicate expression.");$a(a,"]")}return b}function Za(a){if("-"==A(a.a))return a.a.next(),new Va(Za(a));var b=db(a);if("|"!=A(a.a))a=b;else{for(b=[b];"|"==a.a.next();)W(a,"Missing next union location path."),b.push(db(a));a.a.back();a=new Wa(b)}return a};function gb(a){a.length||g(Error("Empty XPath expression."));for(var a=a.match(pa),b=0;b<a.length;b++)qa.test(a[b])&&a.splice(b,1);a=new oa(a);a.empty()&&g(Error("Invalid XPath expression."));var c=Ya(new Xa(a));a.empty()||g(Error("Bad token: "+a.next()));this.evaluate=function(a,b){var f=c.evaluate(new z(a));return new X(f,b)}}
function X(a,b){0==b&&(a instanceof F?b=4:"string"==typeof a?b=2:"number"==typeof a?b=1:"boolean"==typeof a?b=3:g(Error("Unexpected evaluation result.")));2!=b&&(1!=b&&3!=b&&!(a instanceof F))&&g(Error("document.evaluate called with wrong result type."));this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof F?xa(a):""+a;break;case 1:this.numberValue=a instanceof F?+xa(a):+a;break;case 3:this.booleanValue=a instanceof F?0<a.k():!!a;break;case 4:case 5:case 6:case 7:var d=I(a);c=[];
for(var e=d.next();e;e=d.next())c.push(e);this.snapshotLength=a.k();this.invalidIteratorState=l;break;case 8:case 9:this.singleNodeValue=wa(a);break;default:g(Error("Unknown XPathResult type."))}var f=0;this.iterateNext=function(){4!=b&&5!=b&&g(Error("iterateNext called with wrong result type."));return f>=c.length?k:c[f++]};this.snapshotItem=function(a){6!=b&&7!=b&&g(Error("snapshotItem called with wrong result type."));return a>=c.length||0>a?k:c[a]}}X.ANY_TYPE=0;X.NUMBER_TYPE=1;X.STRING_TYPE=2;
X.BOOLEAN_TYPE=3;X.UNORDERED_NODE_ITERATOR_TYPE=4;X.ORDERED_NODE_ITERATOR_TYPE=5;X.UNORDERED_NODE_SNAPSHOT_TYPE=6;X.ORDERED_NODE_SNAPSHOT_TYPE=7;X.ANY_UNORDERED_NODE_TYPE=8;X.FIRST_ORDERED_NODE_TYPE=9;var ib,jb={da:"http://www.w3.org/2000/svg"};ib=function(a){return jb[a]||k};function kb(a,b){var c=function(){var c;var e=la(b);if(na){var f=(e?e.parentWindow||e.defaultView:window)||p,i=f.document;i.evaluate||(f.XPathResult=X,i.evaluate=function(a,b,c,d){return(new gb(a)).evaluate(b,d)},i.createExpression=function(a){return new gb(a)})}try{var w=e.createNSResolver?e.createNSResolver(e.documentElement):ib;c=e.evaluate(a,b,w,9,k)}catch(B){g(new s(32,"Unable to locate an element with the xpath expression "+a+" because of the following error:\n"+B))}return c?c.singleNodeValue||
k:b.selectSingleNode?(c=la(b),c.setProperty&&c.setProperty("SelectionLanguage","XPath"),b.selectSingleNode(a)):k}();c!==k&&(!c||1!=c.nodeType)&&g(new s(32,'The result of the xpath expression "'+a+'" is: '+c+". It should be an element."));return c}var Y=["_"],Z=p;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&kb!==h?Z[$]=kb:Z=Z[$]?Z[$]:Z[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
