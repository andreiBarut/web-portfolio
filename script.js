//^ HAMBURGER MENU FUNCTIONALITY
let clicked = 1;
function revealMenu() {
	clicked++;
	let hamburgerMenuItems = document.querySelector(".hamburger-menu-items");
	let hamburgerMenu = document.querySelector(".fa-bars");
	if (clicked % 2 != 0) {
		hamburgerMenuItems.style.display = "flex";
		hamburgerMenu.style.transform = "rotate(90deg)";
		hamburgerMenu.style.transition = "0.3s";
		hamburgerMenu.style.color = "#816797";
	} else {
		hamburgerMenu.style.transform = "rotate(0deg)";
		hamburgerMenuItems.style.display = "none";
		hamburgerMenu.style.color = "#f3c03d";
	}
}
