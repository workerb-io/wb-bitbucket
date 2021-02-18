!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return o={},n.m=r={0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PACKAGE_NAME=t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.bitbucket.org/2.0/",t.accessToken=VARS&&VARS.BITBUCKET_PERSONAL_TOKEN,t.PACKAGE_NAME="bitbucket"},1:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.createPR=o.DeleteWithAuth=o.UpdateWithAuth=o.fetchWithAuth=o.decodeApiResponse=o.getUrl=void 0;var n=t(0);o.getUrl=function(e){return n.apiUrl+e};o.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}};function s(e,t){var r=t?JSON.stringify(t):null,t={Authorization:"Basic "+n.accessToken};r&&(t["content-type"]="application/json");t=httpPost(o.getUrl(e),r,t),t=o.decodeApiResponse(t).response,t=void 0===t?{}:t;if("error"===t.type)throw notify(t.error.message,"error",3e3),t.error.message;return t.values}o.fetchWithAuth=function(e){e=httpGet(o.getUrl(e),{Authorization:"Basic "+n.accessToken}),e=o.decodeApiResponse(e).response,e=void 0===e?{}:e;if("error"===e.type)throw e.error.message;return e.values||null},o.UpdateWithAuth=s,o.DeleteWithAuth=function(e){var t={Authorization:"Basic "+n.accessToken},t=httpDelete(o.getUrl(e),null,t);if("error"===(t=void 0===(t=o.decodeApiResponse(t).response)?{}:t).type)throw notify(t.error.message,"error",3e3),t.error.message;return t},o.createPR=function(e,t){var r={title:prompt("PR title"),source:{branch:{name:e}},destination:{branch:{name:t}}};try{s("repositories/"+options.workspaces.uuid+"/"+options.repos.slug+"/pullrequests/",r),notify("PR created","success",3e3),reIndex([n.PACKAGE_NAME,"workspaces",options.workspaces.name,"repos",options.repos.name,"PRs"])}catch(e){throw e}}},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t=r(1);if(!options.workspaces||!options.repos)throw notify("Workspace or repo is not selected","success",3e3),"Workspace or repo is not selected";r=options.branches.name;t.createPR(r,"master")}},n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16);function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,o});