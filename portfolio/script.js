// JavaScript to handle interactions on the portfolio page

document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the display of the career summary
    	const toggleSummaryBtn = document.getElementById("toggle-summary-btn");
    	const careerSummary = document.getElementById("career-summary");

    	toggleSummaryBtn.addEventListener("click", function() {
        if (careerSummary.style.display === "none") {
            careerSummary.style.display = "block";
        } else {
            careerSummary.style.display = "none";
        }
    	});

	const toggleProjectsbtn=document.getElementById("Projects-btn");
	const projectssummary=document.getElementById("Projects");

	toggleProjectsbtn.addEventListener("click",function(){
		if(projectssummary.style.display === "none"){
			projectssummary.style.display = "block";
		}
		else{
			projectssummary.style.display = "none";
			}
		});

		
		const toggleContactsbtn=document.getElementById("Contacts-btn");
		const Contactssummary=document.getElementById("Contacts");

		toggleContactsbtn.addEventListener("click",function(){
		if(Contactssummary.style.display === "none"){
			Contactssummary.style.display = "block";
		}
		else{
			Contactssummary.style.display = "none";
			}
		});	
	

		const toggleSocialbtn=document.getElementById("Social-btn");
		const Socialsummary=document.getElementById("Social");

		toggleSocialbtn.addEventListener("click",function(){
		if(Socialsummary.style.display === "none"){
			Socialsummary.style.display = "block";
		}
		else{
			Socialsummary.style.display = "none";
			}
		});	

    // Function to handle GitHub button click
   	const githubBtn = document.getElementById("github-btn");

    	githubBtn.addEventListener("click", function() {
        window.location.href = 'https://github.com/MALLIKHARJUN-02/Student_Database_Management_System';
    	});

	const linkedinBtn = document.getElementById("linkedin-btn");

	linkedinBtn.addEventListener("click", function() {
        window.location.href = 'https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241/?original_referer=https%3A%2F%2Fwww%2Ebing%	2Ecom%2F&originalSubdomain=in';
    	});
   	
});
