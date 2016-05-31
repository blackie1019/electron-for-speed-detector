
	'use strict'

    var remote = require('remote');
    var win = remote.getCurrentWindow();
   	var detectNetworkClassBtn = document.querySelector('#btn-network-detect');
	detectNetworkClassBtn.addEventListener('click',function(event){
		console.log(123);
	});
	
	var closeAppBtn = document.querySelector('#btn-app-close');
	closeAppBtn.addEventListener('click',function(event){
		win.close();
	}); 
