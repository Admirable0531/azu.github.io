function startGame() {
	let currKM = document.getElementById('currKM');
	let baseIncrement = document.getElementById('baseIncrement');
	let task1 = "False";
	let task2 = "False";
	let task3 = "False";
	let mem1 = "False";
	let mem2 = "False";
	let mem3 = "False";
	let x = 0;
	let bonuses = document.getElementById('bonuses');

	currKM = parseInt(currKM.value);
	baseIncrement = parseInt(baseIncrement.value); // Default value of 12
	bonuses = parseInt(bonuses.value); // Default value of 2

	logMessage(currKM);

	function checkNewMember() {
		if((currKM >= 30) && (mem1 == "False")) {
			baseIncrement += bonuses;
			mem1 = "True";
		} else if((currKM >= 190) && (mem2 == "False")) {
			baseIncrement += bonuses;
			mem2 = "True";
		} else if((currKM >= 350) && (mem3 == "False")) {
			baseIncrement += bonuses;
			mem3 = "True";
		}
	}


	function bonus(y) {
		baseIncrement = baseIncrement * y;
		while(currKM < 800) {
			checkNewMember();
			game();
			logMessage("-------------");
		}
	}

	function checkTask() {
		if ((currKM >= 60) && (task1 == "False")) {
			currKM = 60;
			task1 = "True";
		} else if((currKM >= 220) && (task2 == "False")) {
			currKM = 220;
			task2 = "True";
		} else if ((currKM >= 500) && (task3 == "False")) {
			currKM = 500;
			task3 = "True";
		}
	}

	function game() {
		x++;
		for(let i=0; i < 4; i++){
			currKM += baseIncrement;
			checkTask();
		 	logMessage("KM: " + currKM);
		}
	}

	function checkKM() {
		if(currKM >= 30) {
			baseIncrement += bonuses;
			mem1 = "True";
		}
		if(currKM >= 190) {
			baseIncrement += bonuses;
			mem2 = "True";
		}
		if(currKM >= 350) {
			baseIncrement += bonuses;
			mem3 = "True";
		}
		if (currKM >= 60) {
			task1 = "True";
		}
		if(currKM >= 220) {
			task2 = "True";
		}
		if (currKM >= 500) {
			task3 = "True";
		}

	}

	function logMessage(message) {
    	const logElement = document.getElementById('log');
    	const newLogEntry = document.createElement('p');
    	newLogEntry.textContent = message;
    	logElement.appendChild(newLogEntry);
  }

  document.getElementById('log').textContent = '';

	checkKM();
	bonus(bonuses);

	const resultElement = document.getElementById('result');
	resultElement.textContent = 'Calculations completed. Total games needed: ' + x;
}