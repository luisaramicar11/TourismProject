// Function for form validations
//"#register-form [required]"
export function formValidations(varInputsSelector) {
    console.log("entre a validaciones");

    // Function for form validations
    const inputs = document.querySelectorAll(varInputsSelector);
    console.log(inputs);

    // Create error message spans for each input
    inputs.forEach(input => {
        const span = document.createElement("span");
        span.id = input.name + "-error";  // Changed id to avoid conflicts
        span.textContent = input.title;
        span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", span);
    });

    // Event listener for keyup events
    document.addEventListener("keyup", (e) => {
        if (Array.from(inputs).includes(e.target)) {
            let input = e.target;
            let pattern = input.pattern;

            if (pattern && input.value !== "") {
                let regex = new RegExp(pattern);

                if (!regex.test(input.value)) {
                    document.getElementById(input.name + "-error").classList.add("is-active");
                } else {
                    document.getElementById(input.name + "-error").classList.remove("is-active");
                }
            } else {
                if (input.value === "") {
                    document.getElementById(input.name + "-error").classList.add("is-active");
                } else {
                    document.getElementById(input.name + "-error").classList.remove("is-active");
                }
            }
        }
    });
}