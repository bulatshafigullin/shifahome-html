import KeenSlider from 'keen-slider'

function mainSliderNavigation(slider) {
    let wrapper, dots, arrowLeft, arrowRight;

    function markup(remove?: boolean) {
        wrapperMarkup(remove);
        dotMarkup(remove);
        arrowMarkup(remove);
    }

    function removeElement(elment: HTMLElement) {
        elment.parentNode.removeChild(elment);
    }
    function createDiv(className: string) {
        let div = document.createElement("div");
        let classNames = className.split(" ");
        classNames.forEach((name) => div.classList.add(name));
        return div;
    }

    function arrowMarkup(remove?: boolean) {
        if (remove) {
            removeElement(arrowLeft);
            removeElement(arrowRight);
            return;
        }
        arrowLeft = createDiv("arrow arrow--left");
        arrowLeft.addEventListener("click", () => slider.prev());
        arrowRight = createDiv("arrow arrow--right");
        arrowRight.addEventListener("click", () => slider.next());

        wrapper.appendChild(arrowLeft);
        wrapper.appendChild(arrowRight);
    }

    function wrapperMarkup(remove?: boolean) {
        if (remove) {
            let parent = wrapper.parentNode;
            while (wrapper.firstChild)
                parent.insertBefore(wrapper.firstChild, wrapper);
            removeElement(wrapper);
            return;
        }
        wrapper = createDiv("mainSliderNavigation-wrapper");
        slider.container.parentNode.appendChild(wrapper);
        wrapper.appendChild(slider.container);
    }

    function dotMarkup(remove) {
        if (remove) {
            removeElement(dots);
            return;
        }
        dots = createDiv("dots");
        slider.track.details.slides.slice(0, slider.track.details.slides.length - 1).forEach((_, idx: number) => {
            let dot = createDiv("dot");
            dot.addEventListener("click", () => slider.moveToIdx(idx));
            dots.appendChild(dot);
        });
        wrapper.appendChild(dots);
    }

    function updateClasses() {
        let slide = slider.track.details.rel;
        slide === 0
            ? arrowLeft.classList.add("arrow--disabled")
            : arrowLeft.classList.remove("arrow--disabled");
        slide === slider.track.details.slides.length - 1
            ? arrowRight.classList.add("arrow--disabled")
            : arrowRight.classList.remove("arrow--disabled");
        Array.from(dots.children).forEach(function (dot: HTMLElement, idx: number) {
            idx === slide
                ? dot.classList.add("dot--active")
                : dot.classList.remove("dot--active");
        });
    }

    slider.on("created", () => {
        markup();
        updateClasses();
    });
    slider.on("optionsChanged", () => {
        markup(true);
        markup();
        updateClasses();
    });
    slider.on("slideChanged", () => {
        updateClasses();
    });
    slider.on("destroyed", () => {
        markup(true);
    });
}

function productsSliderNavigation(slider) {
    let wrapper, dots, arrowLeft, arrowRight;

    function markup(remove?: boolean) {
        wrapperMarkup(remove);
        dotMarkup(remove);
        arrowMarkup(remove);
    }

    function removeElement(elment: HTMLElement) {
        elment.parentNode.removeChild(elment);
    }
    function createDiv(className: string) {
        let div = document.createElement("div");
        let classNames = className.split(" ");
        classNames.forEach((name) => div.classList.add(name));
        return div;
    }

    function arrowMarkup(remove?: boolean) {
        if (remove) {
            removeElement(arrowLeft);
            removeElement(arrowRight);
            return;
        }
        arrowLeft = createDiv("arrow arrow--left");
        arrowLeft.addEventListener("click", () => slider.prev());
        arrowRight = createDiv("arrow arrow--right");
        arrowRight.addEventListener("click", () => slider.next());

        wrapper.appendChild(arrowLeft);
        wrapper.appendChild(arrowRight);
    }

    function wrapperMarkup(remove?: boolean) {
        if (remove) {
            let parent = wrapper.parentNode;
            while (wrapper.firstChild)
                parent.insertBefore(wrapper.firstChild, wrapper);
            removeElement(wrapper);
            return;
        }
        wrapper = createDiv("products-slider-wrapper");
        slider.container.parentNode.appendChild(wrapper);
        wrapper.appendChild(slider.container);
    }

    function dotMarkup(remove) {
        if (remove) {
            removeElement(dots);
            return;
        }
        dots = createDiv("dots");
        slider.track.details.slides.slice(0, slider.track.details.slides.length - 1).forEach((_, idx: number) => {
            let dot = createDiv("dot");
            dot.addEventListener("click", () => slider.moveToIdx(idx));
            dots.appendChild(dot);
        });
        wrapper.appendChild(dots);
    }

    function updateClasses() {
        let slide = slider.track.details.rel;
        slide === 0
            ? arrowLeft.classList.add("arrow--disabled")
            : arrowLeft.classList.remove("arrow--disabled");
        slide === slider.track.details.slides.length - 1
            ? arrowRight.classList.add("arrow--disabled")
            : arrowRight.classList.remove("arrow--disabled");
        Array.from(dots.children).forEach(function (dot: HTMLElement, idx: number) {
            idx === slide
                ? dot.classList.add("dot--active")
                : dot.classList.remove("dot--active");
        });
    }

    slider.on("created", () => {
        markup();
        updateClasses();
    });
    slider.on("optionsChanged", () => {
        markup(true);
        markup();
        updateClasses();
    });
    slider.on("slideChanged", () => {
        updateClasses();
    });
    slider.on("destroyed", () => {
        markup(true);
    });
}

new KeenSlider(
    "#main-slider",
    {
        slides: {
            perView: 1,
            spacing: 0,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    perView: 2,
                    spacing: 10
                }
            }
        }
    },
    [mainSliderNavigation]
);

new KeenSlider(
    ".products-slider",
    {
        slides: {
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 420px)': {
                slides: {
                    perView: 2,
                    spacing: 16,
                },
            },
            '(min-width: 664px)': {
                slides: {
                    perView: 3,
                    spacing: 16,
                },
            },
            '(min-width: 900px)': {
                slides: {
                    perView: 4,
                    spacing: 16,
                },
            },
            '(min-width: 1200px)': {
                slides: {
                    perView: 5,
                    spacing: 16,
                },
            },
            '(min-width: 1280px)': {
                slides: {
                    perView: 5,
                    spacing: 54,
                },
            },
        },
    },
    [productsSliderNavigation]
);

const headerCatalogButton = document.getElementById('headerCatalogButton')
const headerCatalogMenu = document.getElementById('menu')

headerCatalogButton.addEventListener('click', function() {
    headerCatalogButton.classList.toggle('_active')
    headerCatalogMenu.classList.toggle('hidden');
});

document.addEventListener('click', function(e) {
    if (!headerCatalogMenu.contains(e.target as Node) && !headerCatalogButton.contains(e.target as Node)) {
        headerCatalogButton.classList.remove('_active')
        headerCatalogMenu.classList.add('hidden');
    }
});
