function calculator(){
	var h=document.getElementById('h').value;
	var valid = false;
    if(h>=1000){
        document.getElementById("result").innerHTML="Ներմուծեք ավելի փոքր թիվ ";
    }
    else if(!h){
        document.getElementById("result").innerHTML="Ներմուծեք տվյալներ";
    }
    else{ 
	if(document.getElementById("care").checked){
		valid = true;
		var bmi = h * 2000 * 2;
		console.log(bmi);
		document.getElementById("result").innerHTML="Դուք պետք է վճարեք " + Math.ceil(bmi) + " դրամ";
	}
    // else if(document.getElementById("care").checked, h>=100){
    //     var bmi=2 * ((99 * 2000) + (h - 99) * 1000);
    // }
	else{ 

	if(h<=1000){	
		if(!h){
			document.getElementById("result").innerHTML="Ներմուծեք տվյալներ";
		}
        else if(h<=99){
            var calc=h * 2000;
			console.log(calc);
			document.getElementById("result").innerHTML="Դուք պետք է վճարեք " + Math.ceil(bmi) + " դրամ";
        }
		else{
			var calc=(99 * 2000) + (h - 99) * 1000;
			console.log(calc);
			document.getElementById("result").innerHTML="Դուք պետք է վճարեք " + Math.ceil(bmi) + " դրամ";
		}
		}
	else{
		document.getElementById("result").innerHTML="Ներմուծեք ավելի փոքր թիվ ";
	}
}
}
}
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}