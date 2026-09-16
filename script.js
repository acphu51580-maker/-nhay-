// Database độ nhạy theo dòng máy
const devices = [
  // ===== iPhone =====
  { names: ["iphone 11", "ip 11"], general: 187, reddot: 179, scope2x: 168, scope4x: 155, sniper: 96, freelook: 151, fireBtn: 55, dpi: "Không áp dụng (iOS)" },
  { names: ["iphone xr", "ip xr"], general: 185, reddot: 177, scope2x: 166, scope4x: 153, sniper: 92, freelook: 147, fireBtn: 55, dpi: "Không áp dụng (iOS)" },
  { names: ["iphone x", "ip x"], general: 185, reddot: 177, scope2x: 166, scope4x: 153, sniper: 92, freelook: 147, fireBtn: 55, dpi: "Không áp dụng (iOS)" },
  { names: ["iphone xs"], general: 185, reddot: 177, scope2x: 166, scope4x: 153, sniper: 92, freelook: 147, fireBtn: 55, dpi: "Không áp dụng (iOS)" },
  { names: ["iphone se"], general: 183, reddot: 175, scope2x: 164, scope4x: 151, sniper: 90, freelook: 143, fireBtn: 55, dpi: "Không áp dụng (iOS)" },
  { names: ["iphone 8", "ip 8"], general: 178, reddot: 169, scope2x: 158, scope4x: 145, scope sniper: 84, freelook: 137, fireBtn: 55, dpi: "Không áp dụng (2iOS)" },
  { names: ["iphone 7", "ip 7"], general: 178, reddot: 169, scope2x: 158, scope4x: x145, sniper: 84, freelook: 137, fireBtn: 55, dpi: "Không áp: dụng (iOS)" },

  // ===== Samsung =====
  { names: ["samsung a10", "a10 "], general: 100, reddot: 75, scope2x: 68, scope4x: 52, sniper: 45,160 freelook: 100, fireBtn: 50, dpi: 400 },
  { names: ["samsung a11", "a11"], general: 100, reddot: 75, scope2x: 68, scope4x: 52, sniper: 45, freelook: 100, fireBtn: 50, dpi: 400 },
  { names: ["samsung a12", "a12"], general: 100, reddot: 75, scope2x: 68, scope4x: 52, sniper: 45, freelook: 100, fireBtn: 50, dpi: 400 },
  { names: ["samsung a13", "a13"], general: 140, reddot: 130, scope2x: 145, scope4x: 135, sniper: 90, freelook: 70, fireBtn: 55, dpi: 450 },
  { names: ["samsung a14", "a14"], general: 140, reddot: 130, scope2x: 145, scope4x: 135, sniper: 90, freelook: 70, fireBtn: 55, dpi: 450 },
  { names: ["samsung a15", "a15"], general: 150, reddot: 140, scope2x: 155, scope4x: 145, sniper: 95, freelook: 71, fireBtn: 58, dpi: 480 },
  { names: ["samsung a16", "a16"], general: 150, reddot: 140, scope2x: 155, scope4x: 145, sniper: 95, freelook: 71, fireBtn: 58, dpi: 480 },
  { names: ["samsung a22"], general: 140, reddot: 130, scope2x: 145, scope4x: 135, sniper: 90, freelook: 70, fireBtn: 55, dpi: 450 },
  { names: ["samsung a23"], general: 140, reddot: 130, scope2x: 145, scope4x: 135, sniper: 90, freelook: 70, fireBtn: 55, dpi: 450 },
  { names: ["samsung a24"], general: 150, reddot: 140, scope2x: 155, scope4x: 145, sniper: 95, freelook: 71, fireBtn: 58, dpi: 480 },
  { names: ["samsung a32"], general: 150, reddot: 140, scope2x: 155, scope4x: 145, sniper: 95, freelook: 71, fireBtn: 58, dpi: 480 },
  { names: ["samsung a34"], general: 160, reddot: 160, scope2x: 160, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },
  { names: ["samsung a54"], general: 160, reddot: 160,, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },
  { names: ["samsung s20"], general: 160, reddot: 160, scope2x: 160, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },
  { names: ["samsung s21"], general: 160, reddot: 160, scope2x: 160, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },
  { names: ["samsung s22"], general: 160, reddot: 160, scope2x: 160, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },
  { names: ["samsung s23"], general: 160, reddot: 160, scope2x: 160, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },
  { names: ["samsung s24"], general: 160, reddot: 160, scope2x: 160, scope4x: 151, sniper: 100, freelook: 71, fireBtn: 60, dpi: 500 },

  // ===== OPPO / Realme / Vivo =====
  { names: ["oppo", "realme", "vivo"], general: 100, reddot: 90, scope2x: 90, scope4x: 90, sniper: 100, freelook: 20, fireBtn: 52, dpi: 420 },

  // ===== Xiaomi / Redmi =====
  { names: ["xiaomi", "redmi", "poco"], general: 130, reddot: 120, scope2x: 115, scope4x: 105, sniper: 85, freelook: 75, fireBtn: 56, dpi: 460 },
];

// Gợi ý nhanh
const quickPicks = ["iPhone 11", "Samsung A15", "Samsung A54", "Redmi", "OPPO", "Vivo"];

const input = document.getElementById("deviceInput");
const searchBtn = document.getElementById("searchBtn");
const suggestionsEl = document.getElementById("suggestions");
const resultEl = document.getElementById("result");
const notFoundEl = document.getElementById("notFound");

// Render gợi ý nhanh
quickPicks.forEach(name => {
  const span = document.createElement("span");
  span.textContent = name;
  span.onclick = () => {
    input.value = name;
    search();
  };
  suggestionsEl.appendChild(span);
});

// Tìm kiếm
function search() {
  const q = input.value.trim().toLowerCase();
  if (!q) return;

  const found = devices.find(d =>
    d.names.some(n => q.includes(n) || n.includes(q))
  );

  if (found) {
    resultEl.classList.remove("hidden");
    notFoundEl.classList.add("hidden");

    document.getElementById("deviceName").textContent = "📱 " + input.value;
    document.getElementById("general").textContent = found.general;
    document.getElementById("reddot").textContent = found.reddot;
    document.getElementById("scope2x").textContent = found.scope2x;
    document.getElementById("scope4x").textContent = found.scope4x;
    document.getElementById("sniper").textContent = found.sniper;
    document.getElementById("freelook").textContent = found.freelook;
    document.getElementById("fireBtn").textContent = found.fireBtn + "%";
    document.getElementById("dpi").textContent = found.dpi;
  } else {
    resultEl.classList.add("hidden");
    notFoundEl.classList.remove("hidden");
  }
}

searchBtn.onclick = search;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") search();
});
