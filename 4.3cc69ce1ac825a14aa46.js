(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IAk5:function(n,e,o){"use strict";o.r(e),o.d(e,"DashboardModule",(function(){return d}));var t=o("ofXK"),r=o("tyNb"),s=o("fXoL"),i=o("QcKa");function c(n,e){if(1&n&&(s.Ib(0,"span"),s.Yb(1),s.Hb()),2&n){const n=e.ngIf;s.ub(1),s.Zb(" #",n," ")}}const p=function(n){return["/pokemon",n]};let a=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.xb({type:n,selectors:[["app-pokemon-list-element"]],inputs:{pokemonCard:"pokemonCard"},decls:5,vars:7,consts:[[1,"pokemon-card"],[4,"ngIf"],[3,"src","alt","routerLink"]],template:function(n,e){1&n&&(s.Ib(0,"div",0),s.Xb(1,c,2,1,"span",1),s.Ib(2,"span"),s.Yb(3),s.Hb(),s.Eb(4,"img",2),s.Hb()),2&n&&(s.ub(1),s.Rb("ngIf",e.pokemonCard.nationalPokedexNumber),s.ub(2),s.Zb(" ",e.pokemonCard.name," "),s.ub(1),s.Rb("src",e.pokemonCard.imageUrl,s.Vb)("alt",e.pokemonCard.name)("routerLink",s.Tb(5,p,e.pokemonCard.id)))},directives:[t.j,r.b],styles:[".pokemon-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:15px;width:246px}img[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();function b(n,e){if(1&n&&(s.Gb(0),s.Eb(1,"app-pokemon-list-element",2),s.Fb()),2&n){const n=e.$implicit;s.ub(1),s.Rb("pokemonCard",n)}}let m=(()=>{class n{constructor(n){this.pokemonService=n,this.pokemonCards=[]}ngOnInit(){this.pokemonService.getPokemonsList().subscribe(({cards:n})=>{this.pokemonCards=n})}}return n.\u0275fac=function(e){return new(e||n)(s.Db(i.a))},n.\u0275cmp=s.xb({type:n,selectors:[["app-pokemon-list"]],decls:2,vars:1,consts:[[1,"pokemon-list-wrapper"],[4,"ngFor","ngForOf"],[3,"pokemonCard"]],template:function(n,e){1&n&&(s.Ib(0,"div",0),s.Xb(1,b,2,1,"ng-container",1),s.Hb()),2&n&&(s.ub(1),s.Rb("ngForOf",e.pokemonCards))},directives:[t.i,a],styles:[".pokemon-list-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}"]}),n})();const l=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.xb({type:n,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(n,e){1&n&&s.Eb(0,"app-pokemon-list")},directives:[m],styles:["[_nghost-%COMP%]{width:100%}"]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=s.Bb({type:n}),n.\u0275inj=s.Ab({factory:function(e){return new(e||n)},imports:[[r.c.forChild(l)],r.c]}),n})(),d=(()=>{class n{}return n.\u0275mod=s.Bb({type:n}),n.\u0275inj=s.Ab({factory:function(e){return new(e||n)},imports:[[t.c,u]]}),n})()}}]);