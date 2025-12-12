// Danh sách app ở thanh dưới
// position: "left" = nhóm trái, "right" = nhóm phải

window.CAR_APPS = [
  { id: "drive",   label: "Drive",   icon: "fa-solid fa-car-side",    position: "left" },
  { id: "media",   label: "Media",   icon: "fa-solid fa-music",       position: "left" },
  { id: "route",   label: "Route",   icon: "fa-solid fa-route",       position: "left" },

  { id: "seats",   label: "Seats",   icon: "fa-solid fa-seat-airline", position: "right" },
  { id: "climate", label: "Climate", icon: "fa-solid fa-fan",          position: "right" },
  { id: "volume",  label: "Vol",     icon: "fa-solid fa-volume-high",  position: "right" }
];

// Muốn thêm app mới? Chỉ cần push thêm object:
// { id: "camera", label: "Camera", icon: "fa-solid fa-camera", position: "right" }
