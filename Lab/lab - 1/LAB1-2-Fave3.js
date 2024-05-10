/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS

window.onload = function(){
	class Friend {
		constructor(name, number) {
			this.name = name;
			this.number = number;
		}
	}
	
	// Function to handle form submission
	document.forms['fave_form'].addEventListener('submit', function(event) {
		event.preventDefault();
		
		// Get values from the form
		const name1 = document.getElementById('n_1').value;
		const phone1 = document.getElementById('p_1').value;
		const name2 = document.getElementById('n_2').value;
		const phone2 = document.getElementById('p_2').value;
		const name3 = document.getElementById('n_3').value;
		const phone3 = document.getElementById('p_3').value;
		
		// Create Friend objects
		const friend1 = new Friend(name1, phone1);
		const friend2 = new Friend(name2, phone2);
		const friend3 = new Friend(name3, phone3);
		
		// Add friends to the favorite list
		const faveThree = [friend1, friend2, friend3];
		
		// Display the list
		displayFavoriteThree(faveThree);
		fave_form.style.display ='none';
		faveBlock.style.display ='block';
		console.log(faveList);
	});
	
	// Function to display the favorite three list
	function displayFavoriteThree(faveThree) {
		const listElement = document.getElementById('faveList');

		
		
		faveThree.forEach(friend => {
			const listItem = document.createElement('li');
			listItem.textContent = `${friend.name}`;
			listElement.appendChild(listItem);
		});
	}
}


