let serviceDetails = document.getElementsByClassName("service-details");
let serviceOption = "none";
let estimatedQuote = document.getElementById("estimated-quote");
let meals = document.getElementById("meals");

// Private Party Section
let partyGuests = document.getElementById("party-guests");
let partyService = document.getElementById("private-party-service");
let guestFee = 0;

// Catering Section
let cateringGuests = document.getElementById("catering-guests");
let cateringService = document.getElementById("catering-service");

const hideServiceDetails = ( ) => {
    for (let i = 0; i < serviceDetails.length; i++) {
        serviceDetails[i].classList.add("hidden");
    }
}

const serviceChange = (obj) => {
    hideServiceDetails();
    estimatedQuote.innerHTML = "";;
    console.log("Service option changed to: " + obj.value);
    if (obj.value === "private-party") {
        document.getElementById("private-party-details").classList.remove("hidden");
        serviceOption = "private-party";
    } else if (obj.value === "meal-prep") {
        document.getElementById("meal-prep-details").classList.remove("hidden");
        serviceOption = "meal-prep";
    } else if (obj.value === "catering") {
        document.getElementById("catering-details").classList.remove("hidden");
        serviceOption = "catering";
    } else {
        serviceOption = "none";
    }
}

const calculate = (obj) => {
    if (serviceOption === "private-party") {

        if (partyService.value === "basic") {

            if (partyGuests.value < 1) {
                alert("Please enter a valid number of guests for private party service.");
                return;
            } else {
                guestFee = 85;
                estimatedQuote.innerHTML = "Estimated Price: $" + (guestFee * partyGuests.value);
            }
            
        } else if (partyService.value === "advanced") {

            if (partyGuests.value < 1) {
                alert("Please enter a valid number of guests for private party service.");
                return;
            } else {
                guestFee = 195;
                estimatedQuote.innerHTML = "Estimated Price: $" + (guestFee * partyGuests.value);
            }
                
        } else if (partyService.value === "fine-dining") {

            if (partyGuests.value < 1) {
                alert("Please enter a valid number of guests for private party service.");
                return;
            } else {
                guestFee = 300;
                estimatedQuote.innerHTML = "Estimated Price: $" + (guestFee * partyGuests.value);
            } 
        }

    } else if (serviceOption === "meal-prep") {
        if (meals.value < 10) {
            alert("Please order at least 10 meals for meal prep service.");
            return;
        } else {
            estimatedQuote.innerHTML = "Estimated Price: $" + (20 * meals.value);
        }
    } else if (serviceOption === "catering") {
        if (cateringService.value === "basic") {

            if (cateringGuests.value < 1) {
                alert("Please enter a valid number of guests for catering service.");
                return;
            } else {
                guestFee = 40;
                estimatedQuote.innerHTML = "Estimated Price: $" + (guestFee * cateringGuests.value);
            }
            
        } else if (cateringService.value === "advanced") {
            
            if (cateringGuests.value < 1) {
                alert("Please enter a valid number of guests for catering service.");
                return;
            } else {
                guestFee = 70;
                estimatedQuote.innerHTML = "Estimated Price: $" + (guestFee * cateringGuests.value);
            }
            
                
        } else if (cateringService.value === "elevated") {
            
            if (cateringGuests.value < 1) {
                alert("Please enter a valid number of guests for catering service.");
                return;
            } else {
                guestFee = 100;
                estimatedQuote.innerHTML = "Estimated Price: $" + (guestFee * cateringGuests.value);
            }   
        }
        
    } else {
        alert("Please select a service option.");
        return;
    }
    
}