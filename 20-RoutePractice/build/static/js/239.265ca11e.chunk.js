"use strict";(self.webpackChunk_20_routepractice=self.webpackChunk_20_routepractice||[]).push([[239],{239:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(689),r=n(87),c=n(791),o=n(439),a="Comments_comments__9cxIN",m="NewCommentForm_form__C3cQf",i="NewCommentForm_control__iR6jS",l="NewCommentForm_actions__NC323",u=n(995),d=n(442),h=n(184),x=function(e){var t=(0,u.Z)(d.Ir,!0),n=(t.sendRequest,t.error,t.status,(0,c.useRef)()),s=function(e){e.preventDefault()};return(0,h.jsxs)("form",{className:m,onSubmit:s,children:[(0,h.jsxs)("div",{className:i,onSubmit:s,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{id:"comment",rows:"5",ref:n})]}),(0,h.jsx)("div",{className:l,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},j=function(){var e=(0,c.useState)(!1),t=(0,o.Z)(e,2),n=t[0],s=t[1];return(0,h.jsxs)("section",{className:a,children:[(0,h.jsx)("h2",{children:"User Comments"}),!n&&(0,h.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),n&&(0,h.jsx)(x,{}),(0,h.jsx)("p",{children:"Comments..."})]})},f="HighlightedQuote_quote__dE8qA",_=function(e){return(0,h.jsxs)("figure",{className:f,children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("figcaption",{children:e.author})]})},p=n(556),N=function(){var e=(0,s.UO)(),t=(0,s.TH)(),n=(0,u.Z)(d.jR,!0),o=n.sendRequest,a=n.data,m=n.error,i=n.status,l=e.quoteId;if((0,c.useEffect)((function(){o(l)}),[o,l]),"pending"===i)return(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(p.Z,{})});if(m)return(0,h.jsx)("p",{children:m});var x=t.pathname.split("/")[1],f=t.pathname==="/".concat(x,"/").concat(e.quoteId);return"completed"!==i||a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{author:a.author,text:a.text}),(0,h.jsx)(s.Z5,{children:(0,h.jsx)(s.AW,{path:"/comments",element:(0,h.jsx)(j,{})})}),f&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(r.rU,{className:"btn--flat",to:"".concat(t.pathname,"/comments"),children:"Load a Comment"})})]}):(0,h.jsx)("h2",{className:"centered",style:{color:"red"},children:"No Quote Found with this ID!!!"})}}}]);
//# sourceMappingURL=239.265ca11e.chunk.js.map