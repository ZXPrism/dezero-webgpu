import { dezero } from "./dezero";
import "./style.css";


function display_error(title: string, error: Error | string, stack?: string) {
    const error_display = document.getElementById("error-display");
    if (!error_display) { return; }

    const error_message = typeof error === "string" ? error : error.message;

    error_display.innerHTML = `
        <h2>${title}</h2>
        <div class="error-message">${error_message}</div>
        ${stack ? `<div class="error-stack">${stack}</div>` : ""}
    `;
    error_display.style.display = "block";
}

// Global error handler
window.addEventListener("error", (event) => {
    display_error(
        "Runtime Error",
        event.error || event.message,
        event.error?.stack
    );
});

// Global promise rejection handler
window.addEventListener("unhandledrejection", (event) => {
    display_error(
        "Unhandled Promise Rejection",
        event.reason,
        event.reason?.stack
    );
});

// Main initialization
async function main() {
    try {
        const x = dezero.tensor([1.0, [2.0, 4.0]]);
        console.log(x);
    } catch (error) {
        display_error(
            "Runtime Error",
            error instanceof Error ? error : String(error),
            error instanceof Error ? error.stack : undefined
        );
    }
}

main();
