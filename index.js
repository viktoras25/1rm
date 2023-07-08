(()=>{"use strict";var e,r={856:()=>{function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}e({},"RepCalculator",(()=>p));let r;var t;e({},"Formula",(()=>r)),(t=r||(r={}))[t.Brzycki=0]="Brzycki",t[t.Epley=1]="Epley",t[t.Landers=2]="Landers",t[t.Lombardi=3]="Lombardi",t[t.Wathen=4]="Wathen",t[t.OConner=5]="OConner",t[t.Adams=6]="Adams";e({},"Brzycki",(()=>a));class n{calcOneRepMax(e,r){return e*this.getRepsCoeff(r)}calcReps(e,r,t){return this.calcOneRepMax(e,r)/this.getRepsCoeff(t)}}class a extends n{name="Brzycki";getRepsCoeff(e){return 36/(37-e)}}e({},"Lombardi",(()=>s));class s extends n{name="Lombardi";getRepsCoeff(e){return Math.pow(e,.1)}}e({},"Wathen",(()=>o));class o extends n{name="Wathen";getRepsCoeff(e){return 100/(48.8+53.8*Math.pow(Math.E,-.075*e))}}e({},"OConner",(()=>i));class i extends n{name="O'Conner et al";getRepsCoeff(e){return 1+.025*e}}e({},"Adams",(()=>l));class l extends n{name="Adams";getRepsCoeff(e){return 1/(1-.02*e)}}e({},"Epley",(()=>u));class u extends n{name="Epley";getRepsCoeff(e){return 1+e/30}}e({},"Landers",(()=>c));class c extends n{name="Lander's";getRepsCoeff(e){return 100/(101.3-2.67123*e)}}class p{formulas={[r.Brzycki]:new a,[r.Epley]:new u,[r.Landers]:new c,[r.Lombardi]:new s,[r.Wathen]:new o,[r.OConner]:new i,[r.Adams]:new l};addFormula(e,r){this.formulas[e]=r}getFormula(e){return this.formulas[e]}getOneRepMax(e,r,t){return this.getFormula(e).calcOneRepMax(r,t)}getOneRepMaxAll(e,r){const t={};for(const n of Object.keys(this.formulas))t[n]=this.formulas[n].calcOneRepMax(e,r);return t}getOneRepMaxAverage(e,r){const t=this.values(this.getOneRepMaxAll(e,r));return t.reduce(((e,r)=>e+r),0)/t.length}getOneRepMaxLow(e,r){return this.values(this.getOneRepMaxAll(e,r)).reduce(this.min,0)}getOneRepMaxHigh(e,r){return this.values(this.getOneRepMaxAll(e,r)).reduce(this.max,0)}values(e){return Object.keys(e).map((r=>e[r]))}min(e,r){return 0===e?r:e<r?e:r}max(e,r){return 0===e?r:e>r?e:r}}function d(e,r,t){return(Math.ceil(e/r)*r).toFixed(t)}function h(){var e=function(){var e=document.querySelector("[data-input-weight]"),r=document.querySelector("[data-input-reps]"),t=document.querySelector("[data-input-round]");if(!e||!r||!t)throw new Error("Missing required input element");return{weight:parseFloat(e.value.replace(",",".")),reps:parseFloat(r.value.replace(",",".")),round:parseFloat(t.value.replace(",","."))}}(),t=function(e,t){for(var n=new p,a={average:n.getOneRepMaxAverage(e,t),min:n.getOneRepMaxLow(e,t),max:n.getOneRepMaxHigh(e,t),reps:[]},s=n.getFormula(r.Lombardi),o=0,i=[1,2,3,4,5,6,7,8,9,10];o<i.length;o++){var l=i[o];a.reps[l]=s.calcReps(e,t,l)}return a}(e.weight,e.reps),n=document.querySelector("#result");n.innerHTML="";var a=document.querySelector("#resultDetails");if(a.innerHTML="",t.average){n.innerHTML=d(t.average,e.round,2),a.innerHTML+="Lowest estimate: "+t.min.toFixed(2)+"<br>Highest estimate: "+t.max.toFixed(2)+"<br>";var s="";s+='<div class="py-4 overflow-scroll"><table class="table">',s+="<tr>",s+="<th>Reps</th>";for(var o=1;o<t.reps.length;o++)s+="<th>"+o+"</th>";s+="</tr>",s+="<tr>",s+="<th>Weight</th>";for(var i=1;i<t.reps.length;i++)s+="<td>"+d(t.reps[i],e.round,1)+"</td>";s+="</tr>",s+="</table></div>",a.innerHTML+=s}}var f=document.querySelector("[data-input-weight]"),m=document.querySelector("[data-input-reps]"),g=document.querySelector("[data-input-round]");if(!f||!m||!g)throw new Error("Missing required input element");f.addEventListener("keyup",h),m.addEventListener("keyup",h),g.addEventListener("change",h)},807:()=>{}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.m=r,e=[],n.O=(r,t,a,s)=>{if(!t){var o=1/0;for(c=0;c<e.length;c++){for(var[t,a,s]=e[c],i=!0,l=0;l<t.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var u=a();void 0!==u&&(r=u)}}return r}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,a,s]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={704:0,826:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var a,s,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(r&&r(t);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[826],(()=>n(856)));var a=n.O(void 0,[826],(()=>n(807)));a=n.O(a)})();