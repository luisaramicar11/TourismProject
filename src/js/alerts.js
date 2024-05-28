// Importing the SweetAlert2 library
import Swal from 'sweetalert2'

// Configuration for toast notifications
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

// Function to show a success alert with a custom message
export function showAlertSuccess(message) {
    Toast.fire({
        icon: "success",// Display a success icon
        title: message // Display the provided message
    });
}
export function showAlertError(message) {
    Toast.fire({
        icon: "error",// Display a success icon
        title: message // Display the provided message
    });
}

export function showAlertWarning(message) {
    Toast.fire({
        icon: "warning",// Display a success icon
        title: message // Display the provided message
    });
}

