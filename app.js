console.log("[App] Deluxe SDK App running");

const DEFAULT_JWT =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IkIzRDUwQjU1LTY1Q0UtNEI3Qi04RkU1LUFCMUI0RjVDRURBNyIsImFtb3VudCI6MTkuMzQsImFwcGxlUGF5QnV0dG9uU3R5bGUiOiJwbGFpbiIsImdvb2dsZVBheUJ1dHRvblN0eWxlIjoicGxhaW4iLCJoaWRlcHJvZHVjdHNwYW5lbCI6dHJ1ZSwiaGlkZWFkZHJlc3NwYW5lbCI6dHJ1ZSwiaGlkZXN1bW1hcnlwYW5lbCI6dHJ1ZSwiaGlkZXBheWJ1dHRvbiI6ZmFsc2UsImhpZGVjYW5jZWxidXR0b24iOmZhbHNlLCJoaWRldGVybXNhbmRjb25kaXRpb25zIjpmYWxzZSwiaGlkZXRvdGFscyI6ZmFsc2UsInBheXBhbEZ1bmRpbmdTb3VyY2UiOlsicGF5cGFsIiwidmVubW8iLCJibnBsIl0sInNraXBTZWxsZXJTdGF0dXNDaGVjayI6ZmFsc2UsImdlbmVyYXRlVG9rZW4iOmZhbHNlLCJzYXZlUGF5bWVudE1ldGhvZCI6ZmFsc2UsImhpZGVBcHBsZVBheUJ1dHRvbiI6ZmFsc2UsImhpZGVHb29nbGVQYXlCdXR0b24iOmZhbHNlLCJoaWRlUGF6ZUJ1dHRvbiI6ZmFsc2UsImhpZGVDaGFyaW90QnV0dG9uIjpmYWxzZSwiY3VzdG9tZXIiOnsiZmlyc3ROYW1lIjoiIiwibGFzdE5hbWUiOiIiLCJlbWFpbCI6IiIsImJpbGxpbmdBZGRyZXNzIjp7ImFkZHJlc3MiOiIyMCBzdHJlZXQgYWRkcmVzcyIsImNpdHkiOiJEYWxsYXMiLCJzdGF0ZSI6IlRYIiwiemlwQ29kZSI6IjUwMDU0IiwiY291bnRyeUNvZGUiOiJVU0EifX0sInByb2R1Y3RzIjpbeyJuYW1lIjoiRnJlZSBSdW4gMy4wIFdvbWVuIiwiYW1vdW50IjoxMzA1LCJpbWFnZXVybCI6Imh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS9zL3NpbTg0cjJ4ZmVkajk5bi8lMjRfMzIuSlBHIiwicXVhbnRpdHkiOjEsImF0dHJpYnV0ZXMiOlt7Im5hbWUiOiJzaXplIiwidmFsdWUiOiIxMCJ9LHsibmFtZSI6ImNvbG9yIiwidmFsdWUiOiJHcmV5L09yYW5nZSJ9XX0seyJuYW1lIjoiVmludGFnZSBCYWNrcGFjayIsImFtb3VudCI6MTMwMCwiaW1hZ2V1cmwiOiJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vcy9xYmo5dHNidnRocXE3MmMvVmludGFnZS0yMEwtQmFja3BhY2stYnktRmolQzMlQTRsbHIlQzMlQTR2ZW4uanBnIiwicXVhbnRpdHkiOjIsImF0dHJpYnV0ZXMiOlt7Im5hbWUiOiJzaXplIiwidmFsdWUiOiIyMEwifSx7Im5hbWUiOiJjb2xvciIsInZhbHVlIjoiT2xpdmUifV19XSwiaWF0IjoxNzc4ODUyODM0fQ.DN9AiROQTkjjhdZikAgJ5BooeNujJQ1ZX0DK68QdoxY";

function getJWT() {
  return DEFAULT_JWT;
}

function renderEmbeddedPayments() {
  console.log("[App] renderEmbeddedPayments CALLED");

  const container = document.getElementById("embeddedpayments");

  if (!container) {
    console.error("[App] Missing #embeddedpayments container");
    return;
  }

  // 🔥 FIXED LINE (critical change)
  if (typeof EmbeddedPayments === "undefined") {
    console.error("[App] EmbeddedPayments SDK not found");
    return;
  }

  const jwt = getJWT();

  EmbeddedPayments
    .init(jwt, {
      countryCode: "US",
      currencyCode: "USD",
      paymentMethods: ["ach", "cc"],
      merchantCapabilities: ["supports3DS"],
      allowedCardAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
      supportedNetworks: ["visa", "masterCard", "amex", "discover"],
      googlePayEnv: "TEST"
    })
    .then((instance) => {
      console.log("[App] EmbeddedPayments initialized");

      instance.setEventHandlers({
        onTxnSuccess: (gateway, data) => {
          console.log(`${gateway} SUCCESS:`, data);
        },
        onTxnFailed: (gateway, data) => {
          console.log(`${gateway} FAILED:`, data);
        },
        onValidationError: (gateway, errors) => {
          console.log(`${gateway} VALIDATION:`, errors);
        },
        onCancel: (gateway) => {
          console.log(`${gateway} CANCELLED`);
        }
      });

      instance.render({
        containerId: "embeddedpayments"
      });
    })
    .catch((err) => {
      console.error("[App] EmbeddedPayments init failed:", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("render-embedded-btn")
    ?.addEventListener("click", renderEmbeddedPayments);
});