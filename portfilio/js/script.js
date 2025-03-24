console.log ("Welcome to Shahinda's Portfolio!");
 
 
 document.querySelector(".btn-dark").addEventListener("click", function() {
   alert("Opening GitHub Profile...");
 });
 
 
 document.querySelector(".btn-info").addEventListener("click", function() {
   alert("Opening LinkedIn Profile...");
 });

 document.addEventListener("DOMContentLoaded", function () {

    
    window.addEventListener('scroll', function () {
        let navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });

   
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView ({ behavior: 'smooth' });
            }
        });
    });

    
    const animatedItems = document.querySelectorAll(".animate-on-scroll");

    function checkScrollAnimations() {
        animatedItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 100) {
                item.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScrollAnimations);
    checkScrollAnimations();

    
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("❌ Please complete all fields!");
                return;
            }
            
            if (!email.includes("@") || !email.includes(".")) {
                alert("❌ Please enter a valid email address!");
                return;
            }

            alert("✅  Message sent successfully!");
            form.reset();
        });
    }
});
