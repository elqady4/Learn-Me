		var counter=localStorage.getItem('counter');
		
		if(counter == null){
		localStorage.setItem("counter",2);
		counter=1;
		}
		else{
			counter=parseInt(localStorage.getItem('counter'));
		}
		
		
		
		
		window.addEventListener('load',function(e){
			//localStorage.setItem("Page-Loaded"+counter,' Target: '+' load'+' and type: '+e.type+' and Date: ' +new Date());
			localStorage.setItem("Page-Loaded"+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
			counter++;
			localStorage.setItem("counter",counter);
		});
		
		window.addEventListener('unload',function(e){
			//localStorage.setItem("Page-UnLoaded"+counter,' Target: '+' unLoad'+' and type: '+e.type+' and Date: ' +new Date());
			localStorage.setItem("Page-UnLoaded"+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
			counter++;
			localStorage.setItem("counter",counter);
		});
		
		var myVar = setInterval(clearLocalStorage, 5000);
		function clearLocalStorage() {
			localStorage.clear();
			localStorage.setItem("counter",1);
			counter=1;
		}
	
		var mImg=document.getElementById('mImg');
		
		//asci code for characters
		var charList=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
		
		//*------
		var mBody=document.getElementById('Generated_Buttons');
		
		
		
		//Get Referance Button Generate
		var butt=document.getElementById('button_gen');
		
		
		
		
		butt.addEventListener('click',function(e){
			//remove image if it seen
			mImg.src='';
			
			
			
			// Get the Generated_Buttons
				var listOfButtons = document.getElementById("Generated_Buttons");

			// Remove All Generated Buttons
				while (listOfButtons.hasChildNodes()) {  
					listOfButtons.removeChild(listOfButtons.firstChild);
				}
			
			//localStorage.setItem("Generatte-Clicked"+counter,' Target: '+e.target.textContent+' and type: '+e.type+' and Date: ' +new Date());
			localStorage.setItem("Generatte-Clicked"+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
			counter++;
			localStorage.setItem("counter",counter);
			//localStorage.setItem("Generate-Clicked",tempLocalStorage('Generate-Clicked',e.target.type.text,new Date()));
			
		 // Selecting the input element and get its value 
            var mNumGenerated = document.getElementById("myInput").value;
			
			if(mNumGenerated>26 || mNumGenerated<1){
				alert("Take Care About Number");
				
			}else{
			
            // Displaying the value
            //alert(mNumGenerated);
			
			var arrChar_selected=[];
			
			var rand_list=[];

			for(var i=0;i<mNumGenerated;i++){
				var rand=getRndInteger(0,25);
					
					while(rand_list.includes(rand)){
						rand=getRndInteger(0,25);
						}
						arrChar_selected[i]=charList[rand];
						rand_list[i]=rand;
					}
			
			
			//append Buttons into Page Body
			for(var x=0;x<arrChar_selected.length;x++){
			//document.write(String.fromCharCode(arrChar_selected[x]));
				var mNode=document.createElement('button');
				var mTextNode=document.createTextNode(String.fromCharCode(arrChar_selected[x]));
				mNode.appendChild(mTextNode);
				mBody.appendChild(mNode);
				

				
			}
			
			//Get All Buttons
		var mButtons=document.getElementsByTagName('button');
				
				//loop for all alphabet buttons to add listener
				for(var i=1 ;i<mButtons.length;i++){
					mButtons[i].addEventListener('click',function(e){
					
					var alphabet=e.target.textContent;
						
							mImg.src='img/'+e.target.textContent+'.jpg';
							e.target.style.border="1px solid red";
							//localStorage.setItem('alphabet '+alphabet+' clicked'+counter,' Target: '+e.target.textContent+' and type: '+e.type+' and Date: ' +new Date());
							localStorage.setItem('alphabet '+alphabet+' clicked'+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
							counter++;
							localStorage.setItem("counter",counter);
						
						
				});
		}
			
		}
		}
		);
		
		
							
			
			function getRndInteger(min, max) {
				return Math.floor(Math.random() * (max - min) ) + min;
				}
				
				function tempLocalStorage(target,type,date){
					this.target=target;
					this.type=type;
					this.date=date;
					return name+' '+type+' '+date;
				}
				
				