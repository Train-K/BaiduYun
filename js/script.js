window.onload = function(){
	var oFile = document.getElementById('js-file');
	var oCreate = document.getElementById('js-create');
	var oDel = document.getElementById('js-delete');
	var aInput = oFile.getElementsByTagName('input');
	var oAll = document.getElementById('allchecked');
	var oUser = document.getElementById('user');
	var oHid = document.getElementById('hid');
	var i = 1;
	var tim1 = null,tim2=null;
	var atimeNow=new Array();

		function Fdate(t){

			var oDate = new Date();
			var oYear = oDate.getFullYear();
			var oMonth = oDate.getMonth()+1;
			var oDay = oDate.getDate();
			var oHour = oDate.getHours();
			var oMin = oDate.getMinutes();
			var oSec = oDate.getSeconds();
			function checkTime(i){
				if (i<10){
					i="0" + i;
				}
				return i;
			}
			atimeNow[t-1] = oYear+checkTime(oMonth)+checkTime(oDay)+checkTime(oHour)+checkTime(oMin)+checkTime(oSec);
		}

		oCreate.onclick = function()
		{	
			Fdate(i);
			var oLabel = document.createElement('label');

			var oDiv =  document.createElement('div');
				oDiv.className='doc';

			var oInput = document.createElement('input');
				oInput.type = 'checkbox';
				oInput.className='che';
				oDiv.appendChild(oInput);
			
			var oImg = document.createElement('img');
				oImg.src = './images/Folder.png';
				oDiv.appendChild(oImg);

			var oSpan = document.createElement('span');
				oSpan.innerHTML = "&nbsp;&nbsp;新建文件夹"+i;
				oDiv.appendChild(oSpan);

			var oDiv2 = document.createElement('div');
				oDiv2.className='date1';
				oDiv.appendChild(oDiv2);

			var oSpan2 = document.createElement('span');
				oSpan2.className="worda";
				var timeNow = atimeNow[i-1];
				oSpan2.innerHTML =timeNow.substring(0,4)+"/"+timeNow.substring(4,6)+"/"+timeNow.substring(6,8)+"&nbsp;&nbsp;&nbsp;"+timeNow.substring(8,10)+":"+timeNow.substring(10,12)+":"+timeNow.substring(12,14);
				oDiv2.appendChild(oSpan2);

				oLabel.appendChild(oDiv);
				oFile.appendChild(oLabel);
				i++;
		}

		oDel.onclick = function(){
			for(var i=aInput.length-1;i>0;i--)
				{
					if(aInput[i].checked == true){
						oDiv=aInput[i].parentNode;
						oFile.removeChild(oDiv.parentNode);
					}
				}
			oAll.checked=false;
		}
		
		oAll.onclick= function(){
			if(oAll.checked==true){
				for(var i=0;i<aInput.length;i++){
					aInput[i].checked=true;
				}
			}
			else{
				oAll.checked=false;
				for(var i=0;i<aInput.length;i++){
					aInput[i].checked=false;
				}
			}
		}
		oUser.onmouseover = oHid.onmouseover = function(){
			clearTimeout(tim);
			setTimeout(function(){
				oHid.style.display="block";
			},500);
		}
		oUser.onmouseout = oHid.onmouseout = function(){
			tim=setTimeout(function(){
				oHid.style.display="none";
			},500);
		}

	// var oPai = document.getElementById('js-paixu');
	// var obtn4a = document.getElementById('btn4a');
	// var obtn4b = document.getElementById('btn4b');
	// oPai.onclick = function(){
	 
	// }
		
}