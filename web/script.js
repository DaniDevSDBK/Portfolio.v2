document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });

    });


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const id = entry.target.id;

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );

                });

            });

        },
        {
            threshold: 0.4
        }
    );


    document
        .querySelectorAll("section[id]")
        .forEach(section => observer.observe(section));

});