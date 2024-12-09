document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.blocRotate .bg-redMaquette').forEach(function (element) {
        element.classList.add('show');
    });

    setTimeout(function () {
        document.querySelectorAll('.blocRotate img').forEach(function (element) {
            element.classList.add('show');
        });
    }, 100);

    //APPARITION DATES

    const digitGroups = document.querySelectorAll(".digit-group");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const group = entry.target;
                    group.classList.add("appear");
                    animateDigits(group);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        }
    );

    digitGroups.forEach(group => observer.observe(group));

    function animateDigits(group) {
        const targetValue = group.dataset.value.split("");
        const digits = group.querySelectorAll(".digit");

        digits.forEach((digit, index) => {
            const value = targetValue[index] || "0";
            setTimeout(() => {
                digit.textContent = value;
                digit.style.animationDelay = `${index * 0.2}s`;
            }, index * 200);
        });
    }

    //APPARITION OMBRES

    const shadowNews = document.querySelectorAll(".parallelogram");
    const shadowAgenda = document.querySelectorAll(".parallelogramAffiche");

    const observerShadow = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const group = entry.target;
                    group.classList.add("show");
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -300px 0px"
        }
    );

    shadowNews.forEach(group => observerShadow.observe(group));
    shadowAgenda.forEach(group => observerShadow.observe(group));
});
