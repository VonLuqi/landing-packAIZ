document.addEventListener("DOMContentLoaded", function() {
    const lazyBackgrounds = document.querySelectorAll('.lazy-bg')

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target
                        const bgValue = element.getAttribute('data-bg')

                        element.style.setProperty('--bg-image', bgValue)
                        element.classList.add('visible');

                        observer.unobserve(element)
                    }
                })
            },
            { rootMargin: "0px 0px 100px 0px" }
        )

        lazyBackgrounds.forEach(element => {
            observer.observe(element)
        })
    }
})