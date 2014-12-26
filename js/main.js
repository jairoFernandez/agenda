/**
* Sistema de logs
*/
var i_log = 0;
function mkLog(text){
	var date = new Date();
	var txt = i_log + " - " + date.getHours() + " - " + date.getMinutes() + " - " + date.getSeconds() + ": " + text;
	i_log++;
	console.log(txt);
}

function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	mkLog("Aplicacion cargada y lista");
	//navigator.notification.alert("PhoneGap is working");
}