for(var buy=document.querySelectorAll(".button-item-buy"),buyPopup=document.querySelector(".modal-buy"),closePopupBuy=buyPopup.querySelector(".button-close"),continueBuy=document.querySelectorAll(".button-continue"),checkoutBuy=buyPopup.querySelector(".button-checkout"),i=0;i<buy.length;i++)buy[i].addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.add("modal-active"),checkoutBuy.focus()});for(i=0;i<continueBuy.length;i++)continueBuy[i].addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.remove("modal-active")});closePopupBuy.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.remove("modal-active")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),buyPopup.classList.contains("modal-active")&&buyPopup.classList.remove("modal-active"))});var message=document.querySelector(".message-button"),popup=document.querySelector(".modal-login"),close=document.querySelector(".button-close"),login=document.querySelector(".user-info .login"),form=document.querySelector(".user-info"),email=document.querySelector(".email"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}message.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-active"),storage?(login.value=storage,email.focus()):login.focus()}),form.addEventListener("submit",function(e){login.value&&email.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"),console.log("Нужно ввести логин и адрес электронной почты"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-active")&&(popup.classList.remove("modal-active"),popup.classList.remove("modal-error")))}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-active"),popup.classList.remove("modal-error")});var mapLink=document.querySelector(".map-popup"),mapPopup=document.querySelector(".modal-map"),closeMap=mapPopup.querySelector(".button-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-active")}),closeMap.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-active")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-active")&&mapPopup.classList.remove("modal-active"))});