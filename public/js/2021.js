!function r(i,c,t){function l(o,e){if(!c[o]){if(!i[o]){var n="function"==typeof require&&require;if(!e&&n)return n(o,!0);if(u)return u(o,!0);var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var s=c[o]={exports:{}};i[o][0].call(s.exports,function(e){return l(i[o][1][e]||e)},s,s.exports,r,i,c,t)}return c[o].exports}for(var u="function"==typeof require&&require,e=0;e<t.length;e++)l(t[e]);return l}({1:[function(e,o,n){var a=e("./libs/topbar"),s=e("./libs/keyicons"),r=(e("./libs/subscribe"),e("./libs/shared")),i=e("./libs/search");jQuery(document).ready(function(e){console.log("%cHello, I see you worry about how I am built, Regards!","color: red"),a(),s(),r(),i()})},{"./libs/keyicons":2,"./libs/search":3,"./libs/shared":4,"./libs/subscribe":5,"./libs/topbar":6}],2:[function(e,o,n){o.exports=function(){$(".KeyiconsContent").html(""),$.ajax({url:"public/js/keyicons.json",dataType:"JSON",success:function(e){var o,i,c;o=e,i="<div class='key' data-category=':tag:'><a href=':link:' download class='keyicon :keyiconNew:'><span class='keyicon_name'>:name:</span><img src=':img:' alt=''>:type:<span class='keyicon_download'>Download</span></a></div>",c="./public/iconset/",$.each(o.keyicons,function(e,o){var n,a;img=c+o.name+".svg",link=c+o.name+".svg",randomColor=(n=1,a=3,randomColor=Math.round(Math.random()*(a-n)+n),1==randomColor?"newBlue":2==randomColor?"newOrange":"newPink"),anotherColor="<span class='keyicon_download keyicon-new "+randomColor+"'>New</span>",type=1==o.type?anotherColor:"",keyiconNew=1==o.type?randomColor:"";var s,r=i.replace(":name:",o.name).replace(":link:",link).replace(":img:",img).replace(":type:",type).replace(":tag:",o.tag).replace(":keyiconNew:",keyiconNew);s=r,$(".KeyiconsContent").append($(s)),0})}}),$("body").on("click",".keyicon",function(e){$(this).addClass("is-clicked")})}},{}],3:[function(e,o,n){o.exports=function(){$("#searchKeyicons").focus(function(){$('input[name="categories"]').prop("checked",!1)}),$("#searchKeyicons").on("keyup",function(){!function(){for(var e=$("#searchKeyicons").val().toUpperCase(),o=$(".keyicon"),n=0;n<o.length;n++)-1<o[n].getElementsByTagName("span")[0].innerHTML.toUpperCase().indexOf(e)?(icono=o[n],icono.style.display=""):(icono=o[n],icono.style.display="none")}()})}},{}],4:[function(e,o,n){o.exports=function(){$(".keyicon");var e=$("#CloseShared"),o=$(".Shared-Img img"),n=$(".Shared");$("body").on("click",".keyicon",function(){n.addClass("is-open"),algo=$(this).attr("href"),o.attr("src",algo)}),e.on("click",function(){n.removeClass("is-open")})}},{}],5:[function(e,o,n){o.exports=function(){var e=$("#mc-embedded-subscribe"),a=$("#mce-EMAIL"),s=$("#resultElement"),r=$(".content-email"),i=$("#mc-embedded-subscribe-form");e.on("click",function(e){var o,n;e.preventDefault(),i.validate(),i.valid()?(o=i,n=s,$.ajax({type:"GET",url:o.attr("action"),data:o.serialize(),cache:!1,dataType:"jsonp",jsonp:"c",contentType:"application/json; charset=utf-8",error:function(e){},success:function(e){var o;"success"!=e.result?(o=e.msg||"Sorry. Unable to subscribe. Please try again later.",r.fadeOut(),n.addClass("is-error").fadeIn(),e.msg&&0<=e.msg.indexOf("already subscribed")&&(o="<p>You're already subscribed. Thank you.</p> <br> <a href='http://keyicons.com/public/keyicons_library.zip' class='btn btn-secondary'>Download Library again</a> ",r.fadeOut(),n.removeClass("is-error").addClass("is-success").fadeIn()),n.html(o)):(r.fadeOut(),n.removeClass("is-error").addClass("is-success"),n.html("Thank you!<br>You must confirm the subscription in your inbox.").fadeIn())}}),setTimeout(function(){a.val("")},1e3)):$("#mce-EMAIL").focus()});var o=$(".Modal"),n=$(".js-download");$("#Modal-Close");function c(){o.removeClass("is-open"),$("#mce-EMAIL").val(""),$("#mce-NAME").val(""),r.fadeIn(),s.fadeOut()}n.on("click",function(e){e.preventDefault(),o.addClass("is-open"),$("#mce-EMAIL").focus()}),$(document).on("click",'[href="#closer"]',function(e){e.preventDefault(),c()}).keydown(function(e){o.hasClass("is-open")&&27==e.keyCode&&c()})}},{}],6:[function(e,o,n){o.exports=function(){var o=$(".Header"),n=o.offset().top;$(window).scroll(function(e){$(this).scrollTop()>=n+50?o.addClass("is-scrolled"):o.removeClass("is-scrolled")})}},{}]},{},[1]);