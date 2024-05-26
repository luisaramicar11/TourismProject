// Function for form validations
function formValidations() {
    const d = document
    // Function for form validations
    const inputs = document.querySelectorAll("#register-form [required]")
    console.log(inputs)

    // Create error message spans for each input
    inputs.forEach(input => {
        const span = document.createElement("span")
        span.id = input.name;
        span.textContent = input.title;
        span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", span)

    })
    // Event listener for keyup events
    d.addEventListener("keyup", (e) => {
        if (e.target.matches("#register-form [required]")) {
            let input = e.target
            let pattern = input.pattern

            if (pattern && input.value !== "") {
                let rergex = new RegExp(pattern)
                return !rergex.exec(input.value)
                
                // Add or remove 'is-active' class based on validation
                ? d.getElementById(input.name).classList.add("is-active")
                : d.getElementById(input.name).classList.remove("is-active")
            }
            if (!pattern) {

                // Add or remove 'is-active' class if the field is empty
                return e.target.value
                    ? d.getElementById(input.name).classList.add("is-active")
                    : d.getElementById(input.name).classList.remove("is-active")
            }
        }
    })

}
formValidations()

