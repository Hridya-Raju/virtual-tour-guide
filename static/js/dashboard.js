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

document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome to Travio";
    const subtitle = "Unveiling the beauty of exploration";
    
    const titleElement = document.getElementById("hero-title");
    const subtitleElement = document.getElementById("hero-subtitle");

    function typeText(element, text, callback) {
        element.innerHTML = ""; // Clear text before typing
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                element.classList.add("typing");
                i++;
                setTimeout(type, 100);
            } else {
                element.classList.remove("typing");
                if (callback) setTimeout(callback, 1000);
            }
        }
        type();
    }

    function startTypingAnimation() {
        typeText(titleElement, title, function () {
            typeText(subtitleElement, subtitle);
        });
    }

    // Initial animation
    startTypingAnimation();

    // Repeat every 10 seconds
    setInterval(startTypingAnimation, 10000);
});

const images = [
    {
        src: "images/anamudy-peak.jpg",
        title: "Anamudi Peak",
        description: "The highest peak in South India, offering stunning views and adventurous trekking trails.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "November to May",
        activities: ["Trekking", "Photography", "Wildlife Spotting"],
        lat: 10.1667, 
        lng: 77.0411
    },
    {
        src: BASE_IMAGE_PATH + "attukad.jpg",
        title: "Attukad Waterfalls",
        description: "A mesmerizing waterfall surrounded by lush greenery, perfect for a scenic escape.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "June to September",
        activities: ["Sightseeing", "Trekking", "Picnic"],
        lat: 10.1667, 
        lng: 77.0411
    },
    {
        src: BASE_IMAGE_PATH + "blossom-hydel-park.jpg",
        title: "Blossom Hydel Park",
        description: "A peaceful retreat with beautiful gardens, walking trails, and boating options.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "September to March",
        activities: ["Boating", "Birdwatching", "Nature Walks"]
    },
    {
        src: BASE_IMAGE_PATH + "chinnar-ws.jpg",
        title: "Chinnar Wildlife Sanctuary",
        description: "Home to diverse wildlife, including the endangered grizzled giant squirrel and scenic trekking routes.",
        location: "Idukki, Kerala",
        bestTimeToVisit: "October to February",
        activities: ["Wildlife Safari", "Trekking", "Camping"]
    },
    {
        src: BASE_IMAGE_PATH + "chokramudi-peak.jpg",
        title: "Chokramudi Peak",
        description: "A breathtaking peak offering panoramic views of Munnar and surrounding hills.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "November to April",
        activities: ["Trekking", "Camping", "Photography"]
    },
    {
        src: BASE_IMAGE_PATH + "csi-church.jpg",
        title: "CSI Church",
        description: "A historic church in Munnar with British-era architecture and a serene atmosphere.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "Year-round",
        activities: ["Sightseeing", "Photography", "History Tour"]
    },
    {
        src: BASE_IMAGE_PATH + "echo-point.jpg",
        title: "Echo Point",
        description: "A scenic spot where the natural echo phenomenon makes it a must-visit attraction.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "August to May",
        activities: ["Boating", "Hiking", "Photography"]
    },
    {
        src: BASE_IMAGE_PATH + "eravikkulam-np.png",
        title: "Eravikulam National Park",
        description: "A UNESCO World Heritage site, home to the endangered Nilgiri Tahr and stunning landscapes.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "September to March",
        activities: ["Wildlife Safari", "Nature Walks", "Birdwatching"]
    },
    {
        src: BASE_IMAGE_PATH + "fun-forest-ap.jpg",
        title: "Fun Forest Adventure Park",
        description: "An adventure park with ziplining, rope courses, and thrilling outdoor activities.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "October to March",
        activities: ["Ziplining", "Rope Climbing", "ATV Rides"]
    },
    {
        src: BASE_IMAGE_PATH + "gap-road.webp",
        title: "Gap Road",
        description: "A scenic drive through tea plantations and misty mountains, perfect for photography.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "Year-round",
        activities: ["Scenic Drive", "Photography", "Nature Walks"]
    },
    {
        src: BASE_IMAGE_PATH + "kolukkumalai.jpg",
        title: "Kolukkumalai Tea Estate",
        description: "The world's highest tea plantation, offering breathtaking sunrise views and organic tea tasting.",
        location: "Theni, Tamil Nadu",
        bestTimeToVisit: "September to April",
        activities: ["Tea Tasting", "Jeep Safari", "Sunrise View"]
    },
    {
        src: BASE_IMAGE_PATH + "marayoor.jpg",
        title: "Marayoor",
        description: "Famous for its sandalwood forests, ancient dolmens, and natural beauty.",
        location: "Idukki, Kerala",
        bestTimeToVisit: "October to February",
        activities: ["Nature Walks", "Cultural Exploration", "Sightseeing"]
    },
    {
        src: BASE_IMAGE_PATH + "mattupetty-dam.avif",
        title: "Mattupetty Dam",
        description: "A popular tourist spot with serene waters, boating, and stunning mountain views.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "August to May",
        activities: ["Boating", "Sightseeing", "Photography"]
    },
    {
        src: BASE_IMAGE_PATH + "meeshapulimala.jpg",
        title: "Meeshapulimala",
        description: "A trekker's paradise offering panoramic views and lush green landscapes.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "November to April",
        activities: ["Trekking", "Camping", "Photography"]
    },
    {
        src: BASE_IMAGE_PATH + "pothamedu-vp.jpg",
        title: "Pothamedu View Point",
        description: "A mesmerizing viewpoint offering a bird’s eye view of Munnar’s valleys and hills.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "September to March",
        activities: ["Photography", "Sightseeing", "Tea Plantation Visit"]
    },
    {
        src: BASE_IMAGE_PATH + "tea-museum.png",
        title: "Tea Museum",
        description: "A museum showcasing the history and process of tea making in Munnar.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "Year-round",
        activities: ["Tea Tasting", "Museum Tour", "Shopping"]
    },
    {
        src: BASE_IMAGE_PATH + "vattavada.jpg",
        title: "Vattavada",
        description: "A serene hill station known for its organic farms and untouched natural beauty.",
        location: "Idukki, Kerala",
        bestTimeToVisit: "October to February",
        activities: ["Organic Farming", "Trekking", "Camping"]
    }
];


const gallery = document.getElementById("image-gallery");

// Ensure gallery exists before proceeding
if (gallery && Array.isArray(images)) {
    images.forEach((destination) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${destination.src}" alt="${destination.title}">
            <div class="card-content">
                <h3>${destination.title}</h3>
            </div>
        `;
        // <p>${destination.description.substring(0, 80)}...</p>

        // Clicking a card stores details in localStorage and redirects
        card.addEventListener("click", () => {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "/details";
        });

        gallery.appendChild(card);
    });
} else {
    console.error("Gallery container or images array is missing!");
}
card.addEventListener("click", () => {
    const destinationData = JSON.stringify(destination);
    if (destinationData) {
        localStorage.setItem("selectedDestination", destinationData);
        window.location.href = "/details";
    } else {
        console.error("Failed to store destination data!");
    }
});


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

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});