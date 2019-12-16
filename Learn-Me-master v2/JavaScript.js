		
		var arrayOfRecords=[];
		var count;
		
		
	
		
		window.addEventListener("unload",function(e){
			var temp=JSON.stringify(template(e.target.textContent,e.type,new Date()));
			//add to localStorage
			localStorage.setItem("unload",temp);
			
			
		});
		
		window.addEventListener('load',function(e){
			//localStorage.setItem("Page-Loaded"+counter,' Target: '+' load'+' and type: '+e.type+' and Date: ' +new Date());
			//localStorage.setItem("Page-Loaded"+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
			var myRecord=template(e.target.textContent,e.type,new Date());
			var count=arrayOfRecords.length;
			arrayOfRecords[count+1]=myRecord;
			
			//add Unload Values To Database
			myRecord=localStorage.getItem('unload');
			localStorage.removeItem('unload');
			arrayOfRecords[count]=$.parseJSON(myRecord);
			localStorage.setItem('Events',JSON.stringify(arrayOfRecords));
		});
		
		
		
		//Set Interval to Send Data From LocalStoarge To database
		
		setInterval(clearLocalStorage, 5000);
		function clearLocalStorage() {
			var recordFromLocal=localStorage.getItem('Events');
			if(localStorage.length>0){
				$.ajax({
				'type':'POST',
				'url':'SendData.php',
				'data':{"reco":recordFromLocal},
				'success':function(response){
				//console.log(JSON.stringify(myRecord));
				console.log(response);
				localStorage.clear();
				console.log('array lenght '+arrayOfRecords.length);
				//remove elements on array
				arrayOfRecords=[];	
				console.log('array lenght '+arrayOfRecords.length);
				}
				});
			}		
		}
		
		// end Send Data To Database
	
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
			//localStorage.setItem("Generatte-Clicked"+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
			var myRecord=template(e.target.textContent,e.type,new Date());
			var count=arrayOfRecords.length;
			arrayOfRecords[count]=myRecord;
			localStorage.setItem('Events',JSON.stringify(arrayOfRecords));
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
							//localStorage.setItem('alphabet '+alphabet+' clicked'+counter,tempLocalStorage(e.target.textContent,e.type,new Date()));
							var myRecord=template(e.target.textContent,e.type,new Date());
							var count=arrayOfRecords.length;
							arrayOfRecords[count]=myRecord;
							localStorage.setItem('Events',JSON.stringify(arrayOfRecords));
						
						
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
				
					function template(target,type,date){
						var x={
						'target':target,
						'type':type,
						'date':date
						}
						return x;
					}
				
				