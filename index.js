let onSelectiOption; // Declare the variable outside the function

        function onChange() {
            onSelectiOption = document.getElementById('game').value;
            console.log(onSelectiOption);
            document.getElementById('userChoice').innerHTML = onSelectiOption; // Display user's choice
        }
        let Uscore = 0
        let Cscore = 0

   
    
        function clck() {
            if (Uscore === 3 || Cscore === 3){
                alert('game over')
                Uscore =0
                Cscore =0
            }
            let options = ["snake", "water", "gun"];
            let cpuChoice = options[Math.floor(Math.random() * options.length)];
            document.getElementById('cpu').innerHTML = cpuChoice;

            
        
            if (onSelectiOption === cpuChoice) {
                document.getElementById('usrScore').innerHTML = `draw `
                document.getElementById('cpuScore').innerHTML = `draw `;

            } 
            else if (onSelectiOption==="snake" && cpuChoice === "water"){
                document.getElementById('usrScore').innerHTML = `you won ${Uscore+=1}`;
                document.getElementById('cpuScore').innerHTML = `you lose ${Cscore}`;
            }
            else if (onSelectiOption==="snake" && cpuChoice === "gun") {
                document.getElementById('usrScore').innerHTML = `you lose ${Uscore}`;
                document.getElementById('cpuScore').innerHTML = `you won ${Cscore+=1}`;
            }
            else if (onSelectiOption==="water" && cpuChoice ==="snake"){
                document.getElementById('usrScore').innerHTML= `you lose ${Uscore}`;
                document.getElementById('cpuScore').innerHTML=`you won ${Cscore+=1}`
            }
            else if (onSelectiOption==="water" && cpuChoice ==="gun"){
                document.getElementById('usrScore').innerHTML=`you won ${Uscore+=1}`
                document.getElementById('cpuScore').innerHTML= `you lose ${Cscore}`;
            }
            else if (onSelectiOption==="gun" && cpuChoice ==="snake"){
                document.getElementById('usrScore').innerHTML=`you won ${Uscore+=1}`
                document.getElementById('cpuScore').innerHTML= `you lose ${Cscore}`;
            }
            else if (onSelectiOption==="gun" && cpuChoice ==="water"){
                document.getElementById('usrScore').innerHTML= `you lose ${Uscore}`;
                document.getElementById('cpuScore').innerHTML=`you won ${Cscore+=1}`
            }
            
        }
    
    
    