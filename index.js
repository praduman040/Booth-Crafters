
      const viewBtn = document.getElementById("viewGalleryBtn");
      viewBtn.addEventListener("click", () => {
        document
          .querySelectorAll(".extra-img")
          .forEach((img) => img.classList.remove("d-none"));
        viewBtn.style.display = "none";
      });
      const counters = document.querySelectorAll('.counter');
      const speed = 50;

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 1;

        const updateCount = () => {
          const increment = Math.ceil(target / speed);
          if (count < target) {
            count += increment;
            counter.innerText = count > target ? target : count;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        // Set starting value
        counter.innerText = 1;
        updateCount();
      });
      function initMap() {
        const location = { lat: 28.6139, lng: 77.2090 }; // Delhi
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: location,
        });
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      }
      AOS.init();
       window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
   
