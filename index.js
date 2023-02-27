(()=>{"use strict";var e,r={856:()=>{function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}e({},"RepCalculator",(()=>c));let r;var t;e({},"Formula",(()=>r)),(t=r||(r={}))[t.Brzycki=0]="Brzycki",t[t.Epley=1]="Epley",t[t.Landers=2]="Landers",t[t.Lombardi=3]="Lombardi",t[t.Wathen=4]="Wathen",t[t.OConner=5]="OConner",t[t.Adams=6]="Adams";e({},"Brzycki",(()=>a));class n{calcOneRepMax(e,r){return e*this.getRepsCoeff(r)}calcReps(e,r,t){return this.calcOneRepMax(e,r)/this.getRepsCoeff(t)}}class a extends n{name="Brzycki";getRepsCoeff(e){return 36/(37-e)}}e({},"Lombardi",(()=>s));class s extends n{name="Lombardi";getRepsCoeff(e){return Math.pow(e,.1)}}e({},"Wathen",(()=>o));class o extends n{name="Wathen";getRepsCoeff(e){return 100/(48.8+53.8*Math.pow(Math.E,-.075*e))}}e({},"OConner",(()=>i));class i extends n{name="O'Conner et al";getRepsCoeff(e){return 1+.025*e}}e({},"Adams",(()=>u));class u extends n{name="Adams";getRepsCoeff(e){return 1/(1-.02*e)}}e({},"Epley",(()=>l));class l extends n{name="Epley";getRepsCoeff(e){return 1+e/30}}e({},"Landers",(()=>p));class p extends n{name="Lander's";getRepsCoeff(e){return 100/(101.3-2.67123*e)}}class c{formulas={[r.Brzycki]:new a,[r.Epley]:new l,[r.Landers]:new p,[r.Lombardi]:new s,[r.Wathen]:new o,[r.OConner]:new i,[r.Adams]:new u};addFormula(e,r){this.formulas[e]=r}getFormula(e){return this.formulas[e]}getOneRepMax(e,r,t){return this.getFormula(e).calcOneRepMax(r,t)}getOneRepMaxAll(e,r){const t={};for(const n of Object.keys(this.formulas))t[n]=this.formulas[n].calcOneRepMax(e,r);return t}getOneRepMaxAverage(e,r){const t=this.values(this.getOneRepMaxAll(e,r));return t.reduce(((e,r)=>e+r),0)/t.length}getOneRepMaxLow(e,r){return this.values(this.getOneRepMaxAll(e,r)).reduce(this.min,0)}getOneRepMaxHigh(e,r){return this.values(this.getOneRepMaxAll(e,r)).reduce(this.max,0)}values(e){return Object.keys(e).map((r=>e[r]))}min(e,r){return 0===e?r:e<r?e:r}max(e,r){return 0===e?r:e>r?e:r}}function d(e,r,t){return(Math.ceil(e/r)*r).toFixed(t)}function h(){var e=function(){var e=document.querySelector("[data-input-weight]"),r=document.querySelector("[data-input-reps]"),t=document.querySelector("[data-input-round]");if(!e||!r||!t)throw new Error("Missing required input element");return{weight:parseFloat(e.value.replace(",",".")),reps:parseFloat(r.value.replace(",",".")),round:parseFloat(t.value.replace(",","."))}}(),t=function(e,t){for(var n=new c,a={average:n.getOneRepMaxAverage(e,t),min:n.getOneRepMaxLow(e,t),max:n.getOneRepMaxHigh(e,t),reps:[]},s=n.getFormula(r.Lombardi),o=0,i=[1,2,3,4,5,6,7,8,9,10];o<i.length;o++){var u=i[o];a.reps[u]=s.calcReps(e,t,u)}return a}(e.weight,e.reps),n=document.querySelector("#result");n.innerHTML="";var a=document.querySelector("#resultDetails");if(a.innerHTML="",t.average){n.innerHTML=d(t.average,e.round,2),a.innerHTML+="Lowest estimate: "+t.min.toFixed(2)+"<br>Highest estimate: "+t.max.toFixed(2)+"<br>";var s="";s+='<div class="py-4"><table class="table">',s+="<tr>",s+="<th>Reps</th>";for(var o=1;o<t.reps.length;o++)s+="<th>"+o+"</th>";s+="</tr>",s+="<tr>",s+="<th>Weight</th>";for(var i=1;i<t.reps.length;i++)s+="<td>"+d(t.reps[i],e.round,1)+"</td>";s+="</tr>",s+="</table></div>",a.innerHTML+=s}}var m=document.querySelector("[data-input-weight]"),f=document.querySelector("[data-input-reps]"),g=document.querySelector("[data-input-round]");if(!m||!f||!g)throw new Error("Missing required input element");m.addEventListener("keyup",h),f.addEventListener("keyup",h),g.addEventListener("change",h)},807:()=>{}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.m=r,e=[],n.O=(r,t,a,s)=>{if(!t){var o=1/0;for(p=0;p<e.length;p++){for(var[t,a,s]=e[p],i=!0,u=0;u<t.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((e=>n.O[e](t[u])))?t.splice(u--,1):(i=!1,s<o&&(o=s));if(i){e.splice(p--,1);var l=a();void 0!==l&&(r=l)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[t,a,s]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={704:0,826:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var a,s,[o,i,u]=t,l=0;if(o.some((r=>0!==e[r]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var p=u(n)}for(r&&r(t);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[826],(()=>n(856)));var a=n.O(void 0,[826],(()=>n(807)));a=n.O(a)})();