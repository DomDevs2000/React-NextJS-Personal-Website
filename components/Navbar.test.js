import { render, fireEvent, screen } from '@testing-library/react';

import NavBar from '../../components/NavBar';

describe('NavBar', () => {
	let navbar;
	beforeEach(() => {
		navbar = render(<NavBar theme={'light'}></NavBar>);
	});

	xit('should toggle theme to dark when current mode is light', async () => {
		const navbar = render(<NavBar theme={'light'}></NavBar>);
		const themeToggle = navbar.container.querySelector('.theme-toggle');

		//1. find light theme by class (.light)
		const themeDiv = navbar.container.querySelector('.light');

		//assert its in document or length = 1
		expect(themeDiv).toBeInTheDocument();
		//toggle theme (fireevent)
		expect(themeToggle).toBeInTheDocument();
		act(async () => {
			await fireEvent.click(themeToggle);
		});
		screen.debug(navbar.container);
		const darkDiv = navbar.container.querySelector('.dark');
		// assert that that (.light) is not there
		expect(darkDiv).toBeInTheDocument();
		//assert class is dark (.dark)
		// expect(themeDiv).toBeInTheDocument();
	});

	xit('should toggle theme to light when current mode is dark', async () => {
		const themeToggle = navbar.container.querySelector('.theme-toggle');

		// DOESNT FIND DIV WITH CLASS OF dark or light
		// const themeDiv = navbar.querySelector('.light');

		const themeDiv = navbar.getByTestId('themeToggle');

		await fireEvent.click(themeToggle);

		expect(themeDiv).toBeInTheDocument();

		expect(themeToggle).toBeInTheDocument();
	});

	it('show menu when hamburger menu is clicked', () => {
		const hamburgerMenu = navbar.container.querySelector('.MOBILE-MENU');

		fireEvent.click(hamburgerMenu);

		const menuOpen = navbar.container.querySelector('.showMenuNav');
		expect(hamburgerMenu).not.toBeInTheDocument();
		expect(menuOpen).toBeInTheDocument();
	});

	it.only('close  menu when cross button is clicked', async () => {
		//test that when you press close button the mobile menu is not visibile in DOM
		const hamburgerMenu = navbar.container.querySelector('.MOBILE-MENU');
		await fireEvent.click(hamburgerMenu);
		screen.debug(navbar.container);

		const closeButton = navbar.container.querySelector('.CROSS-ICON');
		await fireEvent.click(closeButton);
		const mobileMenu = navbar.container.querySelector('.showMenuNav');
		expect(mobileMenu).not.toBeInTheDocument();
	});
});
