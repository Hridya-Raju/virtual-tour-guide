document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Adjust for navbar height
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Navbar animation on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    
    gsap.to(".logo", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".nav-links li", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
    gsap.to(".hero-content", { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.5 });
    gsap.to(".btn", { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.8 });
});





document.addEventListener("DOMContentLoaded", () => {
    const destinationData = localStorage.getItem("selectedDestination");

    if (!destinationData) {
        console.error("No destination data found! Redirecting to home...");
        window.location.href = "/dashboard";
        return;
    }

    const destination = JSON.parse(destinationData);

    document.getElementById("destination-title").textContent = destination.title;
    document.getElementById("destination-description").textContent = destination.description;
    document.getElementById("main-image").src = destination.src;
    document.getElementById("main-image").alt = destination.title;

    // Extra details
    document.getElementById("destination-location").textContent = destination.location || "Not Available";
    document.getElementById("destination-time").textContent = destination.bestTime || "All year round";
    
    // Populate activities
    const activitiesList = document.getElementById("destination-activities");
    activitiesList.innerHTML = destination.activities?.map(activity => `<p>${activity}</p>`).join("") || "<li>No activities listed</li>";
                                                                          //initially li is used instead of p                    
    // Populate nearby attractions
    const attractionsList = document.getElementById("destination-attractions");
    attractionsList.innerHTML = destination.attractions?.map(attraction => `<p>${attraction}</p>`).join("") || "<li>No nearby attractions listed</li>";

 // Initialize OpenStreetMap
 var map = L.map('map').setView([10.0889, 77.0595], 13); // Default to Munnar

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 L.marker([10.0889, 77.0595]).addTo(map)
     .bindPopup(destination.title)
     .openPopup();});


     document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.getElementById("feedback-popup").classList.add("show");
        }, 10000); // Show after 10 seconds
    
        // Close Popup
        document.getElementById("close-popup").addEventListener("click", function () {
            document.getElementById("feedback-popup").classList.remove("show");
        });
    
        // Submit Feedback
        document.getElementById("submit-feedback").addEventListener("click", function () {
            let feedback = document.getElementById("popup-feedback-text").value;
    
            if (feedback.trim() === "") {
                alert("Please enter your feedback before submitting.");
                return;
            }
    
            alert("Thank you for your feedback!");
            document.getElementById("popup-feedback-text").value = "";
            document.getElementById("feedback-popup").classList.remove("show");
        });
    });
    