console.log("[App] Deluxe SDK App running");

const DEFAULT_JWT =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
"eyJhY2Nlc3NUb2tlbiI6IkIzRDUwQjU1LTY1Q0UtNEI3Qi04RkU1LUFCMUI0RjVDRURBNyIsImFtb3VudCI6MTkuMzQsImFwcGxlUGF5QnV0dG9uU3R5bGUiOiJwbGFpbiIsImdvb2dsZVBheUJ1dHRvblN0eWxlIjoicGxhaW4iLCJwYXlwYWxGdW5kaW5nU291cmNlIjpbInBheXBhbCIsInZlbm1vIiwiYm5wbCJdLCJjdXN0b21lciI6eyJmaXJzdE5hbWUiOiIiLCJsYXN0TmFtZSI6IiIsImVtYWlsIjoiIiwiYmlsbGluZ0FkZHJlc3MiOnsiYWRkcmVzcyI6IjIwIHN0cmVldCBhZGRyZXNzIiwiY2l0eSI6IkRhbGxhcyIsInN0YXRlIjoiVFgiLCJ6aXBDb2RlIjoiNTAwNTQiLCJjb3VudHJ5Q29kZSI6IlVTQSJ9fSwicHJvZHVjdHMiOlt7Im5hbWUiOiJGcmVlIFJ1biAzLjAiLCJhbW91bnQiOjEzMDUsInF1YW50aXR5IjoxfV0sImlhdCI6MTc1NzA4MDY2MH0." +
"qHg8EssMeX_aMI1cUYdRhpSiF710O09jkl_PetAUC3U";

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