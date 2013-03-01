function(){return function(){function g(a){throw a;}var i=void 0,j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}function n(a){return function(){return a}}var p=this;function q(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function r(a,b){function c(){}c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c};function s(a){Error.captureStackTrace?Error.captureStackTrace(this,s):this.stack=Error().stack||"";a&&(this.message=String(a))}r(s,Error);s.prototype.name="CustomError";function aa(a,b){for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a}
function t(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var u=d[h]||"",x=e[h]||"",y=RegExp("(\\d*)(\\D*)","g"),$=RegExp("(\\d*)(\\D*)","g");do{var A=y.exec(u)||["","",""],B=$.exec(x)||["","",""];if(0==A[0].length&&0==B[0].length)break;c=((0==A[1].length?0:parseInt(A[1],10))<(0==B[1].length?0:parseInt(B[1],10))?-1:(0==A[1].length?0:parseInt(A[1],10))>(0==B[1].length?
0:parseInt(B[1],10))?1:0)||((0==A[2].length)<(0==B[2].length)?-1:(0==A[2].length)>(0==B[2].length)?1:0)||(A[2]<B[2]?-1:A[2]>B[2]?1:0)}while(0==c)}return c};function ba(a,b){b.unshift(a);s.call(this,aa.apply(k,b));b.shift();this.Z=a}r(ba,s);ba.prototype.name="AssertionError";function ca(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(b)var e=e+(": "+b),f=d;g(new ba(""+e,f||[]))}};var v=Array.prototype;function w(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(i,d[e],e,a)}function da(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;w(a,function(c,f){d=b.call(i,d,c,f,a)});return d}function z(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(i,d[e],e,a))return j;return l}function ea(a){return v.concat.apply(v,arguments)}function fa(a,b,c){ca(a.length!=k);return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)};function ga(a,b){this.code=a;this.message=b||"";this.name=ha[a]||ha[13];var c=Error(this.message);c.name=this.name;this.stack=c.stack||""}r(ga,Error);
var ha={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
ga.prototype.toString=function(){return this.name+": "+this.message};function C(){return p.navigator?p.navigator.userAgent:k}var ia,ja="",ka=/WebKit\/(\S+)/.exec(C());ia=ja=ka?ka[1]:"";var la={};function ma(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function na(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?oa(a,b):!c&&ma(e,b)?-1*pa(a,b):!d&&ma(f,a)?pa(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(j);
d=d.createRange();d.selectNode(b);d.collapse(j);return c.compareBoundaryPoints(p.Range.START_TO_END,d)}function pa(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return oa(d,a)}function oa(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};var qa,ra,sa,ta,ua,va,wa;wa=va=ua=ta=sa=ra=qa=l;var D=C();D&&(-1!=D.indexOf("Firefox")?qa=j:-1!=D.indexOf("Camino")?ra=j:-1!=D.indexOf("iPhone")||-1!=D.indexOf("iPod")?sa=j:-1!=D.indexOf("iPad")?ta=j:-1!=D.indexOf("Android")?ua=j:-1!=D.indexOf("Chrome")?va=j:-1!=D.indexOf("Safari")&&(wa=j));var xa=qa,ya=ra,za=sa,Aa=ta,E=ua,Ba=va,Ca=wa;function F(a,b,c){this.g=a;this.M=b||1;this.f=c||1}F.prototype.S=m("M");function G(a){var b=k,c=a.nodeType;1==c&&(b=a.textContent,b=b==i||b==k?a.innerText:b,b=b==i||b==k?"":b);if("string"!=typeof b)if(9==c||1==c)for(var a=9==c?a.documentElement:a.firstChild,c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}else b=a.nodeValue;return""+b}function H(a,b,c){if(b===k)return j;try{if(!a.getAttribute)return l}catch(d){return l}return c==k?!!a.getAttribute(b):a.getAttribute(b,2)==c}
function I(a,b,c,d,e){return Da.call(k,a,b,q(c)?c:k,q(d)?d:k,e||new J)}function Da(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),w(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),w(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):a instanceof K?Ea(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),w(b,function(a){H(a,c,d)&&e.add(a)}));return e}
function Fa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.matches(b)&&e.add(b);return e}function Ea(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.matches(b)&&e.add(b),Ea(a,b,c,d,e)};function J(){this.f=this.e=k;this.r=0}function Ga(a){this.o=a;this.next=this.n=k}function Ha(a,b){if(a.e){if(!b.e)return a}else return b;for(var c=a.e,d=b.e,e=k,f=k,h=0;c&&d;)c.o==d.o?(f=c,c=c.next,d=d.next):0<na(c.o,d.o)?(f=d,d=d.next):(f=c,c=c.next),(f.n=e)?e.next=f:a.e=f,e=f,h++;for(f=c||d;f;)f.n=e,e=e.next=f,h++,f=f.next;a.f=e;a.r=h;return a}J.prototype.unshift=function(a){a=new Ga(a);a.next=this.e;this.f?this.e.n=a:this.e=this.f=a;this.e=a;this.r++};
J.prototype.add=function(a){a=new Ga(a);a.n=this.f;this.e?this.f.next=a:this.e=this.f=a;this.f=a;this.r++};function Ia(a){return(a=a.e)?a.o:k}J.prototype.l=m("r");function Ja(a){return(a=Ia(a))?G(a):""}function L(a,b){return new Ka(a,!!b)}function Ka(a,b){this.V=a;this.G=(this.t=b)?a.f:a.e;this.C=k}Ka.prototype.next=function(){var a=this.G;if(a==k)return k;var b=this.C=a;this.G=this.t?a.n:a.next;return b.o};
Ka.prototype.remove=function(){var a=this.V,b=this.C;b||g(Error("Next must be called at least once before remove."));var c=b.n,b=b.next;c?c.next=b:a.e=b;b?b.n=c:a.f=c;a.r--;this.C=k};function M(a){this.d=a;this.c=this.h=l;this.s=k}M.prototype.b=m("h");M.prototype.j=m("s");function N(a,b){var c=a.evaluate(b);return c instanceof J?+Ja(c):+c}function O(a,b){var c=a.evaluate(b);return c instanceof J?Ja(c):""+c}function P(a,b){var c=a.evaluate(b);return c instanceof J?!!c.l():!!c};function La(a,b,c){M.call(this,a.d);this.F=a;this.J=b;this.O=c;this.h=b.b()||c.b();this.c=b.c||c.c;this.F==Ma&&(!c.c&&!c.b()&&4!=c.d&&0!=c.d&&b.j()?this.s={name:b.j().name,q:c}:!b.c&&(!b.b()&&4!=b.d&&0!=b.d&&c.j())&&(this.s={name:c.j().name,q:b}))}r(La,M);
function Q(a,b,c,d,e){var b=b.evaluate(d),c=c.evaluate(d),f;if(b instanceof J&&c instanceof J){f=L(b);for(b=f.next();b;b=f.next()){e=L(c);for(d=e.next();d;d=e.next())if(a(G(b),G(d)))return j}return l}if(b instanceof J||c instanceof J){b instanceof J?e=b:(e=c,c=b);e=L(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":f=+G(d);break;case "boolean":f=!!G(d);break;case "string":f=G(d);break;default:g(Error("Illegal primitive type for comparison."))}if(a(f,c))return j}return l}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}La.prototype.evaluate=function(a){return this.F.k(this.J,this.O,a)};La.prototype.toString=function(a){var a=a||"",b=a+"binary expression: "+this.F+"\n",a=a+"  ",b=b+(this.J.toString(a)+"\n");return b+=this.O.toString(a)};function Na(a,b,c,d){this.X=a;this.$=b;this.d=c;this.k=d}Na.prototype.toString=m("X");var Oa={};
function R(a,b,c,d){a in Oa&&g(Error("Binary operator already created: "+a));a=new Na(a,b,c,d);return Oa[a.toString()]=a}R("div",6,1,function(a,b,c){return N(a,c)/N(b,c)});R("mod",6,1,function(a,b,c){return N(a,c)%N(b,c)});R("*",6,1,function(a,b,c){return N(a,c)*N(b,c)});R("+",5,1,function(a,b,c){return N(a,c)+N(b,c)});R("-",5,1,function(a,b,c){return N(a,c)-N(b,c)});R("<",4,2,function(a,b,c){return Q(function(a,b){return a<b},a,b,c)});
R(">",4,2,function(a,b,c){return Q(function(a,b){return a>b},a,b,c)});R("<=",4,2,function(a,b,c){return Q(function(a,b){return a<=b},a,b,c)});R(">=",4,2,function(a,b,c){return Q(function(a,b){return a>=b},a,b,c)});var Ma=R("=",3,2,function(a,b,c){return Q(function(a,b){return a==b},a,b,c,j)});R("!=",3,2,function(a,b,c){return Q(function(a,b){return a!=b},a,b,c,j)});R("and",2,2,function(a,b,c){return P(a,c)&&P(b,c)});R("or",1,2,function(a,b,c){return P(a,c)||P(b,c)});function Pa(a,b){b.l()&&4!=a.d&&g(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));M.call(this,a.d);this.N=a;this.a=b;this.h=a.b();this.c=a.c}r(Pa,M);Pa.prototype.evaluate=function(a){a=this.N.evaluate(a);return Qa(this.a,a)};Pa.prototype.toString=function(a){var a=a||"",b=a+"Filter: \n",a=a+"  ",b=b+this.N.toString(a);return b+=this.a.toString(a)};function Ra(a,b){b.length<a.L&&g(Error("Function "+a.m+" expects at least"+a.L+" arguments, "+b.length+" given"));a.D!==k&&b.length>a.D&&g(Error("Function "+a.m+" expects at most "+a.D+" arguments, "+b.length+" given"));a.W&&w(b,function(b,d){4!=b.d&&g(Error("Argument "+d+" to function "+a.m+" is not of type Nodeset: "+b))});M.call(this,a.d);this.v=a;this.A=b;this.h=a.h||z(b,function(a){return a.b()});this.c=a.U&&!b.length||a.T&&!!b.length||z(b,function(a){return a.c})}r(Ra,M);
Ra.prototype.evaluate=function(a){return this.v.k.apply(k,ea(a,this.A))};Ra.prototype.toString=function(a){var b=a||"",a=b+"Function: "+this.v+"\n",b=b+"  ";this.A.length&&(a+=b+"Arguments:",b+="  ",a=da(this.A,function(a,d){return a+"\n"+d.toString(b)},a));return a};function Sa(a,b,c,d,e,f,h,u,x){this.m=a;this.d=b;this.h=c;this.U=d;this.T=e;this.k=f;this.L=h;this.D=u!==i?u:h;this.W=!!x}Sa.prototype.toString=m("m");var Ta={};
function S(a,b,c,d,e,f,h,u){a in Ta&&g(Error("Function already created: "+a+"."));Ta[a]=new Sa(a,b,c,d,l,e,f,h,u)}S("boolean",2,l,l,function(a,b){return P(b,a)},1);S("ceiling",1,l,l,function(a,b){return Math.ceil(N(b,a))},1);S("concat",3,l,l,function(a,b){var c=fa(arguments,1);return da(c,function(b,c){return b+O(c,a)},"")},2,k);S("contains",2,l,l,function(a,b,c){b=O(b,a);a=O(c,a);return-1!=b.indexOf(a)},2);S("count",1,l,l,function(a,b){return b.evaluate(a).l()},1,1,j);S("false",2,l,l,n(l),0);
S("floor",1,l,l,function(a,b){return Math.floor(N(b,a))},1);S("id",4,l,l,function(a,b){var c=a.g,d=9==c.nodeType?c:c.ownerDocument,c=O(b,a).split(/\s+/),e=[];w(c,function(a){var a=d.getElementById(a),b;if(b=a){a:if(q(e))b=!q(a)||1!=a.length?-1:e.indexOf(a,0);else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=!(0<=b)}b&&e.push(a)});e.sort(na);var f=new J;w(e,function(a){f.add(a)});return f},1);S("lang",2,l,l,n(l),1);
S("last",1,j,l,function(a){1!=arguments.length&&g(Error("Function last expects ()"));return a.f},0);S("local-name",3,l,j,function(a,b){var c=b?Ia(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,j);S("name",3,l,j,function(a,b){var c=b?Ia(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,j);S("namespace-uri",3,j,l,n(""),0,1,j);S("normalize-space",3,l,j,function(a,b){return(b?O(b,a):G(a.g)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
S("not",2,l,l,function(a,b){return!P(b,a)},1);S("number",1,l,j,function(a,b){return b?N(b,a):+G(a.g)},0,1);S("position",1,j,l,function(a){return a.M},0);S("round",1,l,l,function(a,b){return Math.round(N(b,a))},1);S("starts-with",2,l,l,function(a,b,c){b=O(b,a);a=O(c,a);return 0==b.lastIndexOf(a,0)},2);S("string",3,l,j,function(a,b){return b?O(b,a):G(a.g)},0,1);S("string-length",1,l,j,function(a,b){return(b?O(b,a):G(a.g)).length},0,1);
S("substring",3,l,l,function(a,b,c,d){c=N(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?N(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";var c=Math.round(c)-1,e=Math.max(c,0),a=O(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);S("substring-after",3,l,l,function(a,b,c){b=O(b,a);a=O(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
S("substring-before",3,l,l,function(a,b,c){b=O(b,a);a=O(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);S("sum",1,l,l,function(a,b){for(var c=L(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+G(e);return d},1,1,j);S("translate",3,l,l,function(a,b,c,d){for(var b=O(b,a),c=O(c,a),e=O(d,a),a=[],d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);S("true",2,l,l,n(j),0);function K(a,b){this.Q=a;this.K=b!==i?b:k;this.p=k;switch(a){case "comment":this.p=8;break;case "text":this.p=3;break;case "processing-instruction":this.p=7;break;case "node":break;default:g(Error("Unexpected argument"))}}K.prototype.matches=function(a){return this.p===k||this.p==a.nodeType};K.prototype.getName=m("Q");K.prototype.toString=function(a){var a=a||"",b=a+"kindtest: "+this.Q;this.K===k||(b+="\n"+this.K.toString(a+"  "));return b};function Ua(a){M.call(this,3);this.P=a.substring(1,a.length-1)}r(Ua,M);Ua.prototype.evaluate=m("P");Ua.prototype.toString=function(a){return(a||"")+"literal: "+this.P};function Va(a){M.call(this,1);this.R=a}r(Va,M);Va.prototype.evaluate=m("R");Va.prototype.toString=function(a){return(a||"")+"number: "+this.R};function Wa(a,b){M.call(this,a.d);this.I=a;this.u=b;this.h=a.b();this.c=a.c;if(1==this.u.length){var c=this.u[0];!c.B&&c.i==Xa&&(c=c.z,"*"!=c.getName()&&(this.s={name:c.getName(),q:k}))}}r(Wa,M);function Ya(){M.call(this,4)}r(Ya,M);Ya.prototype.evaluate=function(a){var b=new J,a=a.g;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};Ya.prototype.toString=function(a){return a+"RootHelperExpr"};function Za(){M.call(this,4)}r(Za,M);Za.prototype.evaluate=function(a){var b=new J;b.add(a.g);return b};
Za.prototype.toString=function(a){return a+"ContextHelperExpr"};
Wa.prototype.evaluate=function(a){var b=this.I.evaluate(a);b instanceof J||g(Error("FilterExpr must evaluate to nodeset."));for(var a=this.u,c=0,d=a.length;c<d&&b.l();c++){var e=a[c],f=L(b,e.i.t),h;if(!e.b()&&e.i==$a){for(h=f.next();(b=f.next())&&(!h.contains||h.contains(b))&&b.compareDocumentPosition(h)&8;h=b);b=e.evaluate(new F(h))}else if(!e.b()&&e.i==ab)h=f.next(),b=e.evaluate(new F(h));else{h=f.next();for(b=e.evaluate(new F(h));(h=f.next())!=k;)h=e.evaluate(new F(h)),b=Ha(b,h)}}return b};
Wa.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.I.toString(b);this.u.length&&(c+=b+"Steps:\n",b+="  ",w(this.u,function(a){c+=a.toString(b)}));return c};function T(a,b){this.a=a;this.t=!!b}function Qa(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=L(b),f=b.l(),h,u=0;h=e.next();u++){var x=a.t?f-u:u+1;h=d.evaluate(new F(h,x,f));var y;"number"==typeof h?y=x==h:"string"==typeof h||"boolean"==typeof h?y=!!h:h instanceof J?y=0<h.l():g(Error("Predicate.evaluate returned an unexpected type."));y||e.remove()}return b}T.prototype.j=function(){return 0<this.a.length?this.a[0].j():k};
T.prototype.b=function(){for(var a=0;a<this.a.length;a++){var b=this.a[a];if(b.b()||1==b.d||0==b.d)return j}return l};T.prototype.l=function(){return this.a.length};T.prototype.toString=function(a){var b=a||"",a=b+"Predicates:",b=b+"  ";return da(this.a,function(a,d){return a+"\n"+b+d.toString(b)},a)};function U(a,b,c,d){M.call(this,4);this.i=a;this.z=b;this.a=c||new T([]);this.B=!!d;b=this.a.j();a.Y&&b&&(this.s={name:b.name,q:b.q});this.h=this.a.b()}r(U,M);U.prototype.evaluate=function(a){var b=a.g,c=k,c=this.j(),d=k,e=k,f=0;c&&(d=c.name,e=c.q?O(c.q,a):k,f=1);if(this.B)if(!this.b()&&this.i==bb)c=I(this.z,b,d,e),c=Qa(this.a,c,f);else if(a=L((new U(cb,new K("node"))).evaluate(a)),b=a.next())for(c=this.k(b,d,e,f);(b=a.next())!=k;)c=Ha(c,this.k(b,d,e,f));else c=new J;else c=this.k(a.g,d,e,f);return c};
U.prototype.k=function(a,b,c,d){a=this.i.v(this.z,a,b,c);return a=Qa(this.a,a,d)};U.prototype.toString=function(a){var a=a||"",b=a+"Step: \n",a=a+"  ",b=b+(a+"Operator: "+(this.B?"//":"/")+"\n");this.i.m&&(b+=a+"Axis: "+this.i+"\n");b+=this.z.toString(a);if(this.a.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.a.length;c++)var d=c<this.a.length-1?", ":"",b=b+(this.a[c].toString(a)+d);return b};function db(a,b,c,d){this.m=a;this.v=b;this.t=c;this.Y=d}db.prototype.toString=m("m");var eb={};
function V(a,b,c,d){a in eb&&g(Error("Axis already created: "+a));b=new db(a,b,c,!!d);return eb[a]=b}V("ancestor",function(a,b){for(var c=new J,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},j);V("ancestor-or-self",function(a,b){var c=new J,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},j);
var Xa=V("attribute",function(a,b){var c=new J,d=a.getName(),e=b.attributes;if(e)if(a instanceof K&&a.p===k||"*"==d)for(var d=0,f;f=e[d];d++)c.add(f);else(f=e.getNamedItem(d))&&c.add(f);return c},l),bb=V("child",function(a,b,c,d,e){return Fa.call(k,a,b,q(c)?c:k,q(d)?d:k,e||new J)},l,j);V("descendant",I,l,j);
var cb=V("descendant-or-self",function(a,b,c,d){var e=new J;H(b,c,d)&&a.matches(b)&&e.add(b);return I(a,b,c,d,e)},l,j),$a=V("following",function(a,b,c,d){var e=new J;do for(var f=b;f=f.nextSibling;)H(f,c,d)&&a.matches(f)&&e.add(f),e=I(a,f,c,d,e);while(b=b.parentNode);return e},l,j);V("following-sibling",function(a,b){for(var c=new J,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},l);V("namespace",function(){return new J},l);
V("parent",function(a,b){var c=new J;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},l);var ab=V("preceding",function(a,b,c,d){var e=new J,f=[];do f.unshift(b);while(b=b.parentNode);for(var h=1,u=f.length;h<u;h++){for(var x=[],b=f[h];b=b.previousSibling;)x.unshift(b);for(var y=0,$=x.length;y<$;y++)b=x[y],H(b,c,d)&&a.matches(b)&&e.add(b),e=I(a,b,c,d,e)}return e},j,j);
V("preceding-sibling",function(a,b){for(var c=new J,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},j);V("self",function(a,b){var c=new J;a.matches(b)&&c.add(b);return c},l);function fb(a){M.call(this,1);this.H=a;this.h=a.b();this.c=a.c}r(fb,M);fb.prototype.evaluate=function(a){return-N(this.H,a)};fb.prototype.toString=function(a){var a=a||"",b=a+"UnaryExpr: -\n";return b+=this.H.toString(a+"  ")};function gb(a){M.call(this,4);this.w=a;this.h=z(this.w,function(a){return a.b()});this.c=z(this.w,function(a){return a.c})}r(gb,M);gb.prototype.evaluate=function(a){var b=new J;w(this.w,function(c){c=c.evaluate(a);c instanceof J||g(Error("PathExpr must evaluate to NodeSet."));b=Ha(b,c)});return b};gb.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";w(this.w,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function W(a){return(a=a.exec(C()))?a[1]:""}var hb=function(){if(xa)return W(/Firefox\/([0-9.]+)/);if(Ba)return W(/Chrome\/([0-9.]+)/);if(Ca)return W(/Version\/([0-9.]+)/);if(za||Aa){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(C());if(a)return a[1]+"."+a[2]}else{if(E)return(a=W(/Android\s+([0-9.]+)/))?a:W(/Version\/([0-9.]+)/);if(ya)return W(/Camino\/([0-9.]+)/)}return""}();var ib;if(E){var jb=/Android\s+([0-9\.]+)/.exec(C());ib=jb?jb[1]:"0"}else ib="0";var kb=ib;E&&(E?t(kb,2.3):t(hb,2.3));la["533"]||(la["533"]=0<=t(ia,"533"));var lb={}.S,X=["_"],Y=p;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)!X.length&&lb!==i?Y[Z]=lb:Y=Y[Z]?Y[Z]:Y[Z]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
