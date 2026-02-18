const API_BASE =
  "https://corsproxy.io/?https://cambo-gazetteer.manethpak.dev/api/v1";

const province = document.getElementById("province");
const district = document.getElementById("district");
const commune = document.getElementById("commune");
const village = document.getElementById("village");

function resetSelect(select, text, disabled = true) {
  select.innerHTML = `<option disabled selected>${text}</option>`;
  select.disabled = disabled;
}

// Load provinces
fetch(`${API_BASE}/provinces`)
  .then(res => res.json())
  .then(data => {
    data.data.forEach(p => {
      province.innerHTML += `
        <option value="${p.code}">
          ${p.name_en}
        </option>`;
    });
  });

// Province → District
province.addEventListener("change", () => {
  resetSelect(district, "Select District", false);
  resetSelect(commune, "Select Commune");
  resetSelect(village, "Select Village");

  fetch(`${API_BASE}/districts?province=${province.value}`)
    .then(res => res.json())
    .then(data => {
      data.data.forEach(d => {
        district.innerHTML += `
          <option value="${d.code}">
            ${d.name_en}
          </option>`;
      });
    });
});

// District → Commune
district.addEventListener("change", () => {
  resetSelect(commune, "Select Commune", false);
  resetSelect(village, "Select Village");

  fetch(`${API_BASE}/communes?district=${district.value}`)
    .then(res => res.json())
    .then(data => {
      data.data.forEach(c => {
        commune.innerHTML += `
          <option value="${c.code}">
            ${c.name_en}
          </option>`;
      });
    });
});

// Commune → Village
commune.addEventListener("change", () => {
  resetSelect(village, "Select Village", false);

  fetch(`${API_BASE}/villages?commune=${commune.value}`)
    .then(res => res.json())
    .then(data => {
      data.data.forEach(v => {
        village.innerHTML += `
          <option value="${v.code}">
            ${v.name_en}
          </option>`;
      });
    });
});
