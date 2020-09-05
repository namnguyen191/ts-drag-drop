!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function s(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>=e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<=e.max),t}var i;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(i||(i={}));class o{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.people=r,this.status=s}}class l extends class{constructor(){this.listeners=[]}addListeners(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new l),this.instance}addProject(e,t,n){const r=new o(Math.random().toString(),e,t,n,i.Active);this.projects.push(r),this.updateListener()}moveProject(e,t){const n=this.projects.find(t=>t.id===e);n&&n.status!==t&&(n.status=t,this.updateListener())}updateListener(){for(const e of this.listeners)e(this.projects.slice())}}const a=l.getInstance();function c(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var u=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class d extends r{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.peopleInputElement=this.element.querySelector("#people"),this.configure()}submitHandler(e){e.preventDefault(),console.log(this.titleInputElement.value);const t=this.gatherUserInputs();if(Array.isArray(t)){const[e,n,r]=t;a.addProject(e,n,r),this.clearInputs()}}gatherUserInputs(){const e=this.titleInputElement.value,t=this.descriptionInputElement.value,n=+this.peopleInputElement.value,r={value:e,required:!0},i={value:t,required:!0,minLength:5};return s({value:n,required:!0,min:1,max:5})&&s(r)&&s(i)?[e,t,+n]:void alert("Invalid input! Please try again")}configure(){this.element.addEventListener("submit",this.submitHandler)}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}renderContent(){}}u([c],d.prototype,"submitHandler",null);var p=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class h extends r{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get persons(){return 1===this.project.people?"1 person":this.project.people+" people"}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log(e)}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}p([c],h.prototype,"dragStartHandler",null),p([c],h.prototype,"dragEndHandler",null);var f=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class m extends r{constructor(e){super("project-list","app",!1,e+"-projects"),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}renderProjects(){document.getElementById(this.type+"-projects-list").innerHTML="";for(const e of this.assignedProjects)new h(this.element.querySelector("ul").id,e)}renderContent(){const e=this.type+"-projects-list";this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}dragOverHandler(e){if(e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]){e.preventDefault();this.element.querySelector("ul").classList.add("droppable")}}dropHandler(e){const t=e.dataTransfer.getData("text/plain");a.moveProject(t,"active"===this.type?i.Active:i.Finished);this.element.querySelector("ul").classList.remove("droppable")}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),a.addListeners(e=>{const t=e.filter(e=>"active"===this.type?e.status===i.Active:e.status===i.Finished);this.assignedProjects=t,this.renderProjects()})}}f([c],m.prototype,"dragOverHandler",null),f([c],m.prototype,"dropHandler",null),f([c],m.prototype,"dragLeaveHandler",null),new d,new m("active"),new m("finished")}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9wcm9qZWN0LXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL2F1dG9iaW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1pdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQ29tcG9uZW50IiwidGVtcGxhdGVJZCIsImhvc3RFbGVtZW50SWQiLCJpbnNlcnRBdFN0YXJ0IiwibmV3RWxlbWVudElkIiwidGhpcyIsInRlbXBsYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob3N0RWxlbWVudCIsImltcG9ydGVkTm9kZSIsImltcG9ydE5vZGUiLCJjb250ZW50IiwiZWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwiaWQiLCJhdHRhY2giLCJpbnNlcnRBdEJlZ2lubmluZyIsImluc2VydEFkamFjZW50RWxlbWVudCIsInZhbGlkYXRlIiwidmFsaWRhdGFibGVJbnB1dCIsImlzVmFsaWQiLCJyZXF1aXJlZCIsInRvU3RyaW5nIiwidHJpbSIsImxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsIlByb2plY3RTdGF0dXMiLCJQcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlb3BsZSIsInN0YXR1cyIsImxpc3RlbmVycyIsImxpc3RlbmVyRm4iLCJwdXNoIiwic3VwZXIiLCJwcm9qZWN0cyIsImluc3RhbmNlIiwibnVtT2ZQZW9wbGUiLCJuZXdQcm9qZWN0IiwiTWF0aCIsInJhbmRvbSIsIkFjdGl2ZSIsInVwZGF0ZUxpc3RlbmVyIiwicHJvamVjdElkIiwibmV3U3RhdHVzIiwicHJvamVjdCIsImZpbmQiLCJwcmoiLCJzbGljZSIsInByb2plY3RTdGF0ZSIsImdldEluc3RhbmNlIiwiQXV0b0JpbmQiLCJ0YXJnZXQiLCJtZXRob2ROYW1lIiwiZGVzY3JpcHRvciIsIm9yaWdpbmFsTWV0aG9kIiwiY29uZmlndXJhYmxlIiwidGl0bGVJbnB1dEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQiLCJwZW9wbGVJbnB1dEVsZW1lbnQiLCJjb25maWd1cmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVzZXJJbnB1dHMiLCJnYXRoZXJVc2VySW5wdXRzIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVzYyIsImFkZFByb2plY3QiLCJjbGVhcklucHV0cyIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjIiwiZW50ZXJlZFBlb3BsZSIsInRpdGxlVmFsaWRhdGFibGUiLCJkZXNjVmFsaWRhdGFibGUiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRIYW5kbGVyIiwiaG9zdElkIiwicmVuZGVyQ29udGVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwidGV4dENvbnRlbnQiLCJwZXJzb25zIiwidHlwZSIsImFzc2lnbmVkUHJvamVjdHMiLCJpbm5lckhUTUwiLCJwcmpJdGVtIiwibGlzdElkIiwidG9VcHBlckNhc2UiLCJ0eXBlcyIsImNsYXNzTGlzdCIsImFkZCIsInByaklkIiwiZ2V0RGF0YSIsIm1vdmVQcm9qZWN0IiwiRmluaXNoZWQiLCJyZW1vdmUiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnTGVhdmVIYW5kbGVyIiwiZHJvcEhhbmRsZXIiLCJhZGRMaXN0ZW5lcnMiLCJyZWxldmFudFByb2plY3RzIiwiZmlsdGVyIiwicmVuZGVyUHJvamVjdHMiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWVi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RCxjQUFjLE1BQ25DdUMsVUFBVU0sT0FBTyxhQUc1QixZQUNJdkcsS0FBS1EsUUFBUXVFLGlCQUFpQixXQUFZL0UsS0FBS3dHLGlCQUMvQ3hHLEtBQUtRLFFBQVF1RSxpQkFBaUIsWUFBYS9FLEtBQUt5RyxrQkFDaER6RyxLQUFLUSxRQUFRdUUsaUJBQWlCLE9BQVEvRSxLQUFLMEcsYUFFM0N6RCxFQUFhMEQsYUFBY3hFLElBQ3ZCLE1BQU15RSxFQUFtQnpFLEVBQVMwRSxPQUFROUQsR0FDcEIsV0FBZC9DLEtBQUswRixLQUNFM0MsRUFBSWpCLFNBQVdMLEVBQWNnQixPQUU3Qk0sRUFBSWpCLFNBQVdMLEVBQWM2RSxVQUc1Q3RHLEtBQUsyRixpQkFBbUJpQixFQUN4QjVHLEtBQUs4RyxvQkE5Q2IsR0FEQzNELEcsb0NBY0QsR0FEQ0EsRyxnQ0FlRCxHQURDQSxHLHFDQy9ETCxJQUFJLEVBQ0osSUFBSSxFQUFZLFVBQ2hCLElBQUksRUFBWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBDT01QT05FTlQgQkFTRSBDTEFTU1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCwgVSBleHRlbmRzIEhUTUxFbGVtZW50PiB7XHJcbiAgICB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICBob3N0RWxlbWVudDogVDtcclxuICAgIGVsZW1lbnQ6IFU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGVtcGxhdGVJZDogc3RyaW5nLFxyXG4gICAgICAgIGhvc3RFbGVtZW50SWQ6IHN0cmluZyxcclxuICAgICAgICBpbnNlcnRBdFN0YXJ0OiBib29sZWFuLFxyXG4gICAgICAgIG5ld0VsZW1lbnRJZD86IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgdGVtcGxhdGVJZFxyXG4gICAgICAgICkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhvc3RFbGVtZW50SWQpISBhcyBUO1xyXG5cclxuICAgICAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgVTtcclxuICAgICAgICBpZiAobmV3RWxlbWVudElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IG5ld0VsZW1lbnRJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNoKGluc2VydEF0U3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoKGluc2VydEF0QmVnaW5uaW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXHJcbiAgICAgICAgICAgIGluc2VydEF0QmVnaW5uaW5nID8gJ2FmdGVyYmVnaW4nIDogJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgY29uZmlndXJlPygpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgcmVuZGVyQ29udGVudCgpOiB2b2lkO1xyXG59XHJcbiIsIi8vIFZBTElEQVRJT05cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0YWJsZSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gICAgbWluTGVuZ3RoPzogbnVtYmVyO1xyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gICAgbWluPzogbnVtYmVyO1xyXG4gICAgbWF4PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdGFibGVJbnB1dDogVmFsaWRhdGFibGUpIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0LnJlcXVpcmVkKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9XHJcbiAgICAgICAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICAgdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJlxyXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9XHJcbiAgICAgICAgICAgIGlzVmFsaWQgJiZcclxuICAgICAgICAgICAgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPiB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aDtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgICB2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aCAhPSBudWxsICYmXHJcbiAgICAgICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICApIHtcclxuICAgICAgICBpc1ZhbGlkID1cclxuICAgICAgICAgICAgaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA8IHZhbGlkYXRhYmxlSW5wdXQubWF4TGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAgIHZhbGlkYXRhYmxlSW5wdXQubWluICE9IG51bGwgJiZcclxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ251bWJlcidcclxuICAgICkge1xyXG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPj0gdmFsaWRhdGFibGVJbnB1dC5taW47XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICAgdmFsaWRhdGFibGVJbnB1dC5tYXggIT0gbnVsbCAmJlxyXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnbnVtYmVyJ1xyXG4gICAgKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heDtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFByb2plY3RTdGF0dXMge1xyXG4gICAgQWN0aXZlLFxyXG4gICAgRmluaXNoZWRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHBlb3BsZTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdGF0dXM6IFByb2plY3RTdGF0dXNcclxuICAgICkge31cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xyXG5cclxuLy8gU1RBVEUgTUFOQUdFTUVOVCBDTEFTU1xyXG50eXBlIExpc3RlbmVyPFQ+ID0gKGl0ZW1zOiBUW10pID0+IHZvaWQ7XHJcblxyXG5jbGFzcyBTdGF0ZTxUPiB7XHJcbiAgICBwcm90ZWN0ZWQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdID0gW107XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzKGxpc3RlbmVyRm46IExpc3RlbmVyPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lckZuKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlPFByb2plY3Q+IHtcclxuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2plY3RTdGF0ZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIG51bU9mUGVvcGxlOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBudW1PZlBlb3BsZSxcclxuICAgICAgICAgICAgUHJvamVjdFN0YXR1cy5BY3RpdmVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nLCBuZXdTdGF0dXM6IFByb2plY3RTdGF0dXMpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcmopID0+IHByai5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgICAgICBpZiAocHJvamVjdCAmJiBwcm9qZWN0LnN0YXR1cyAhPT0gbmV3U3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHByb2plY3Quc3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lckZuIG9mIHRoaXMubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcclxuIiwiLy8gQVVUT0JJTkQgREVDT1JBVE9SXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRvQmluZChcclxuICAgIHRhcmdldDogYW55LFxyXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yXHJcbikge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgY29uc3QgYWRqTWV0aG9kOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgY29uc3QgYm91bmRGbiA9IG9yaWdpbmFsTWV0aG9kLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBib3VuZEZuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gYWRqTWV0aG9kO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0YWJsZSwgdmFsaWRhdGUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSdcclxuaW1wb3J0IHsgQXV0b0JpbmQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2F1dG9iaW5kJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxGb3JtRWxlbWVudD4ge1xyXG4gICAgdGl0bGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHBlb3BsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncHJvamVjdC1pbnB1dCcsICdhcHAnLCB0cnVlLCAndXNlci1pbnB1dCcpO1xyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJyN0aXRsZSdcclxuICAgICAgICApISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJyNkZXNjcmlwdGlvbidcclxuICAgICAgICApISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcjcGVvcGxlJ1xyXG4gICAgICAgICkhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAQXV0b0JpbmRcclxuICAgIHByaXZhdGUgc3VibWl0SGFuZGxlcihldmVudDogRXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dHMgPSB0aGlzLmdhdGhlclVzZXJJbnB1dHMoKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VySW5wdXRzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXRzO1xyXG4gICAgICAgICAgICBwcm9qZWN0U3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgcGVvcGxlKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhdGhlclVzZXJJbnB1dHMoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBlbnRlcmVkRGVzYyA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZW50ZXJlZFBlb3BsZSA9ICt0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVWYWxpZGF0YWJsZTogVmFsaWRhdGFibGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBlbnRlcmVkVGl0bGUsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVzY1ZhbGlkYXRhYmxlOiBWYWxpZGF0YWJsZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGVudGVyZWREZXNjLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiA1XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcGVvcGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogZW50ZXJlZFBlb3BsZSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgbWF4OiA1XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdmFsaWRhdGUocGVvcGxlVmFsaWRhdGFibGUpIHx8XHJcbiAgICAgICAgICAgICF2YWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fFxyXG4gICAgICAgICAgICAhdmFsaWRhdGUoZGVzY1ZhbGlkYXRhYmxlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBpbnB1dCEgUGxlYXNlIHRyeSBhZ2FpbicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlbnRlcmVkVGl0bGUsIGVudGVyZWREZXNjLCArZW50ZXJlZFBlb3BsZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFySW5wdXRzKCkge1xyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuLi9tb2RlbHMvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9CaW5kIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9hdXRvYmluZCc7XHJcblxyXG4vLyBQUk9KRUNUIElURU0gQ0xBU1NcclxuZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtXHJcbiAgICBleHRlbmRzIENvbXBvbmVudDxIVE1MVUxpc3RFbGVtZW50LCBIVE1MTElFbGVtZW50PlxyXG4gICAgaW1wbGVtZW50cyBEcmFnZ2FibGUge1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0OiBQcm9qZWN0O1xyXG5cclxuICAgIGdldCBwZXJzb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2plY3QucGVvcGxlID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMSBwZXJzb24nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZW9wbGVgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0SWQ6IHN0cmluZywgcHJvamVjdDogUHJvamVjdCkge1xyXG4gICAgICAgIHN1cGVyKCdzaW5nbGUtcHJvamVjdCcsIGhvc3RJZCwgZmFsc2UsIHByb2plY3QuaWQpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlndXJlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEF1dG9CaW5kXHJcbiAgICBkcmFnU3RhcnRIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnByb2plY3QuaWQpO1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcclxuICAgIH1cclxuXHJcbiAgICBAQXV0b0JpbmRcclxuICAgIGRyYWdFbmRIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJykhLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgdGhpcy5wZXJzb25zICsgJyBhc3NpZ25lZCc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ1RhcmdldCB9IGZyb20gJy4uL21vZGVscy9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b0JpbmQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2F1dG9iaW5kJztcclxuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XHJcbmltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSAnLi9wcm9qZWN0LWl0ZW0nO1xyXG5cclxuLy8gUFJPSkVDVCBMSVNUIENMQVNTXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdFxyXG4gICAgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxFbGVtZW50PlxyXG4gICAgaW1wbGVtZW50cyBEcmFnVGFyZ2V0IHtcclxuICAgIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6ICdhY3RpdmUnIHwgJ2ZpbmlzaGVkJykge1xyXG4gICAgICAgIHN1cGVyKCdwcm9qZWN0LWxpc3QnLCAnYXBwJywgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZ3VyZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGBcclxuICAgICAgICApISBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG4gICAgICAgIGxpc3RFbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBmb3IgKGNvbnN0IHByakl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0SXRlbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSEuaWQsIHByakl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhLmlkID0gbGlzdElkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpIS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpICsgJyBQUk9KRUNUUyc7XHJcbiAgICB9XHJcblxyXG4gICAgQEF1dG9CaW5kXHJcbiAgICBkcmFnT3ZlckhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBkcm9wIGV2ZW50IHRvIHRyaWdnZXIgd2UgbmVlZCB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGJlaGF2aW91clxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7XHJcbiAgICAgICAgICAgIGxpc3RFbC5jbGFzc0xpc3QuYWRkKCdkcm9wcGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEF1dG9CaW5kXHJcbiAgICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcclxuICAgICAgICBwcm9qZWN0U3RhdGUubW92ZVByb2plY3QoXHJcbiAgICAgICAgICAgIHByaklkLFxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICA/IFByb2plY3RTdGF0dXMuQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IFByb2plY3RTdGF0dXMuRmluaXNoZWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7XHJcbiAgICAgICAgbGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIEBBdXRvQmluZFxyXG4gICAgZHJhZ0xlYXZlSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xyXG4gICAgICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcnMoKHByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuRmluaXNoZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3RzO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdElucHV0IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0LWxpc3QnO1xyXG5cclxubmV3IFByb2plY3RJbnB1dCgpO1xyXG5uZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xyXG5uZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=