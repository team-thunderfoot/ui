export const sliderIndex = (wrapperClass) => {
    if (document.querySelector('*[tabindex="-1"]')) {
        document.querySelectorAll('button[tabindex="-1"]').forEach((sliderButton) => {
            sliderButton.setAttribute("tabindex", "0")
        })

        document.querySelectorAll(`${wrapperClass}>div`).forEach((sliderItem) => {
            let sliderCard = sliderItem.querySelector("*")

            if (sliderItem.getAttribute("tabIndex") == null) {
                sliderCard.setAttribute("tabIndex", "0")
            } else {
                sliderCard.setAttribute("tabIndex", sliderItem.getAttribute("tabIndex"))
            }
        })
    }
}
