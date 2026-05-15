console.log("[App] app.js running");

function waitForEmbeddedPayments(timeout = 8000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const interval = setInterval(() => {
      try {
        // IMPORTANT: NOT window — direct reference (per SDK design)
        if (typeof EmbeddedPayments !== "undefined") {
          clearInterval(interval);
          resolve(EmbeddedPayments);
        }
      } catch (e) {
        // ignore until ready
      }

      if (Date.now() - start > timeout) {
        clearInterval(interval);
        reject(new Error("EmbeddedPayments SDK not available"));
      }
    }, 50);
  });
}

function buildJWT() {
  return {
    accessToken: document.getElementById("accessToken")?.value,
    amount: parseFloat(document.getElementById("amount")?.value || "1.00"),
    processingAmount: 1.00,
    processingPercent: 100,
    transactionReference: "Ref" + Date.now(),
    paypalFundingSource: ["paypal", "venmo", "bnpl"],

    applePayButtonStyle:
      document.getElementById("applePayStyle")?.value || "plain",
    googlePayButtonStyle:
      document.getElementById("googlePayStyle")?.value || "plain",

    customer: {
      firstName: document.getElementById("firstName")?.value,
      lastName: document.getElementById("lastName")?.value,
      email: document.getElementById("email")?.value,

      billingAddress: {
        address: document.getElementById("billingAddress")?.value,
        city: document.getElementById("billingCity")?.value,
        state: document.getElementById("billingState")?.value,
        zipCode: document.getElementById("billingZipCode")?.value,
        countryCode:
          document.getElementById("billingCountryCode")?.value || "USA"
      },

      hideProductsPanel: false,
      hidePayButton: false,
      hideAddressPanel: false,
      hideCancelButton: false,
      hideTermsAndConditions: false,
      hideSummaryPanel: false,
      hideTotals: true,

      iat: Math.floor(Date.now() / 1000)
    }
  };
}

async function renderEmbeddedPayments() {
  console.log("[App] renderEmbeddedPayments CALLED");

  const container = document.getElementById("embeddedpayments");

  if (!container) {
    console.error("[App] Missing #embeddedpayments");
    return;
  }

  let SDK;

  try {
    SDK = await waitForEmbeddedPayments();
  } catch (err) {
    console.error("[App] SDK failed to load:", err);
    return;
  }

  console.log("[App] EmbeddedPayments ready");

  const jwtPayload = buildJWT();

  const fakeJWT = JSON.stringify(jwtPayload);

  SDK.init(fakeJWT, {
    countryCode: "US",
    currencyCode: "USD",
    paymentMethods: ["ach", "cc"],
    merchantCapabilities: ["supports3DS"],
    allowedCardAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
    supportedNetworks: ["visa", "masterCard", "amex", "discover"],
    googlePayEnv: "TEST"
  }).then((instance) => {
    console.log("[App] SDK initialized");

    instance.setEventHandlers({
      onTxnSuccess: (gateway, data) => {
        console.log("SUCCESS:", gateway, data);
      },
      onTxnFailed: (gateway, data) => {
        console.log("FAILED:", gateway, data);
      },
      onValidationError: (gateway, errors) => {
        console.log("VALIDATION ERROR:", errors);
      },
      onCancel: (gateway) => {
        console.log("CANCELLED:", gateway);
      }
    });

    instance.render({
      containerId: "embeddedpayments"
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("render-embedded-btn")
    ?.addEventListener("click", renderEmbeddedPayments);
});