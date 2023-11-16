const slider = document.querySelector('.slider');
                    const prevbut = document.querySelector('.prev');
                    const nextbut = document.querySelector('.next');
                    const slides = Array.from(slider.querySelectorAll('img'));
                    const count = slides.length;
                    let ind = 0;

                    prevbut.addEventListener('click', showPreviousSlide);
                    nextbut.addEventListener('click', showNextSlide);

                    function showPreviousSlide() {
                    ind = (ind - 1 + count) % count;
                    updateSlider();
                    }
                    function showNextSlide() {
                    ind = (ind + 1) % count;
                    updateSlider();
                    }

                    function updateSlider() {
                    slides.forEach((slide, index) => {
                        if (index === ind) {
                            slide.style.display = 'block';
                        } else {
                            slide.style.display = 'none';
                        }
                    });
                    }
                    updateSlider();