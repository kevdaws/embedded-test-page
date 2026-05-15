console.log("[App] Deluxe SDK App running");

// ✅ DEFAULT JWT (your provided token)
const DEFAULT_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IkIzRDUwQjU1LTY1Q0UtNEI3Qi04RkU1LUFCMUI0RjVDRURBNyIsImFtb3VudCI6MTkuMzQsImFwcGxlUGF5QnV0dG9uU3R5bGUiOiJwbGFpbiIsImdvb2dsZVBheUJ1dHRvblN0eWxlIjoicGxhaW4iLCJoaWRlcHJvZHVjdHNwYW5lbCI6ZmFsc2UsImhpZGVhZGRyZXNzcGFuZWwiOnRydWUsImhpZGVzdW1tYXJ5cGFuZWwiOmZhbHNlLCJoaWRlcGF5YnV0dG9uIjpmYWxzZSwiaGlkZWNhbmNlbGJ1dHRvbiI6ZmFsc2UsImhpZGV0ZXJtc2FuZGNvbmRpdGlvbnMiOmZhbHNlLCJoaWRldG90YWxzIjpmYWxzZSwicGF5cGFsRnVuZGluZ1NvdXJjZSI6WyJwYXlwYWwiLCJ2ZW5tbyIsImJucGwiXSwic2tpcFNlbGxlclN0YXR1c0NoZWNrIjpmYWxzZSwiZ2VuZXJhdGVUb2tlbiI6ZmFsc2UsInNhdmVQYXltZW50TWV0aG9kIjpmYWxzZSwiaGlkZUFwcGxlUGF5QnV0dG9uIjpmYWxzZSwiaGlkZUdvb2dsZVBheUJ1dHRvbiI6ZmFsc2UsImhpZGVQYXplQnV0dG9uIjpmYWxzZSwiaGlkZUNoYXJpb3RCdXR0b24iOmZhbHNlLCJjdXN0b21lciI6eyJmaXJzdE5hbWUiOiIiLCJsYXN0TmFtZSI6IiIsImVtYWlsIjoiIiwiYmlsbGluZ0FkZHJlc3MiOnsiYWRkcmVzcyI6IjIwIHN0cmVldCBhZGRyZXNzIiwiY2l0eSI6IkRhbGxhcyIsInN0YXRlIjoiVFgiLCJ6aXBDb2RlIjoiNTAwNTQiLCJjb3VudHJ5Q29kZSI6IlVTQSJ9fSwicHJvZHVjdHMiOlt7Im5hbWUiOiJGcmVlIFJ1biAzLjAgV29tZW4iLCJhbW91bnQiOjEzMDUsImltYWdldXJsIjoiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3Mvc2ltODRyMnhmZWRqOTluLyUyNF8zMi5KUEciLCJxdWFudGl0eSI6MSwiYXR0cmlidXRlcyI6W3sibmFtZSI6InNpemUiLCJ2YWx1ZSI6IjEwIn0seyJuYW1lIjoiY29sb3IiLCJ2YWx1ZSI6IkdyZXkvT3JhbmdlIn1dfSx7Im5hbWUiOiJWaW50YWdlIEJhY2twYWNrIiwiYW1vdW50IjoxMzAwLCJpbWFnZXVybCI6Imh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS9zL3Fiajl0c2J2dGhxcTcyYy9WaW50YWdlLTIwTC1CYWNrcGFjay1ieS1GaiVDMyVBNGxsciVDMyVBNHZlbi5qcGciLCJxdWFudGl0eSI6MiwiYXR0cmlidXRlcyI6W3sibmFtZSI6InNpemUiLCJ2YWx1ZSI6IjIwTCJ9LHsibmFtZSI6ImNvbG9yIiwidmFsdWUiOiJPbGl2ZSJ9XX1dLCJpYXQiOjE3NTcwODA2NjB9.qHg8EssMeX_aMI1cUYdRhpSiF710O09jkl_PetAUC3U";

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

  if (!window.EmbeddedPayments) {
    console.error("[App] EmbeddedPayments SDK not loaded (authorizeMerchant likely failing)");
    return;
  }

  const jwt = getJWT();

  console.log("[App] Using JWT (first 30 chars):", jwt.slice(0, 30));

  window.EmbeddedPayments
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
          console.log("[SUCCESS]", gateway, data);
        },
        onTxnFailed: (gateway, data) => {
          console.log("[FAILED]", gateway, data);
        },
        onValidationError: (gateway, errors) => {
          console.log("[VALIDATION]", errors);
        },
        onCancel: (gateway) => {
          console.log("[CANCEL]", gateway);
        }
      });

      instance.render({
        containerId: "embeddedpayments"
      });
    })
    .catch((err) => {
      console.error("[App] INIT FAILED (authorizeMerchant issue):", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("render-embedded-btn")
    ?.addEventListener("click", renderEmbeddedPayments);
});