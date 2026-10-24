
const langBtn = document.getElementById("langBtn");
let lang = "gu";

// Gujarati and English language switching
function setLang(next) {
  lang = next;
  document.documentElement.lang = next;

  document.querySelectorAll("[data-gu][data-en]").forEach(el => {
    el.textContent = el.dataset[next];
  });

  if (langBtn) {
    langBtn.textContent = next === "gu" ? "English" : "ગુજરાતી";
  }
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    setLang(lang === "gu" ? "en" : "gu");
  });
}

// Automatically update copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ARVI ONLINE & CSC UPI payment settings
const UPI_ID = "7265013972sonu@ybl";
const UPI_NAME = "ARVI ONLINE CSC";

const serviceFees = {
  pan: 250,
  gazette: 3000,
  marriage: 3000,
  land: 30,
  rc: 200,
  ayushman: 200,
  scheme: 200
};

// Start UPI payment
function startUPIPayment(serviceKey) {
  const amount = serviceFees[serviceKey];

  if (amount === undefined) {
    alert("આ સેવાની ફી હજી નક્કી નથી. કૃપા કરીને સંપર્ક કરો.");
    return;
  }

  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_NAME,
    am: amount.toFixed(2),
    cu: "INR",
    tn: "ARVI CSC - " + serviceKey.toUpperCase()
  });

  window.location.href = "upi://pay?" + params.toString();
}
