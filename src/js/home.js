document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.blocRotate .bg-redMaquette').forEach(function (element) {
        element.classList.add('show');
    });

    setTimeout(function () {
        document.querySelectorAll('.blocRotate img').forEach(function (element) {
            element.classList.add('show');
        });
    }, 100);
});