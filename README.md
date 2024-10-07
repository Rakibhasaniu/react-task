**TourDom**
TourDom is a responsive single-page web application designed to showcase amazing travel destinations. The application features a parallax hero section, cards for showcasing different locations, and a modal for displaying additional information.

**Technologies Used**
-React.js: A JavaScript library for building user interfaces.
-Tailwind CSS: A utility-first CSS framework for styling.
-React Parallax: A library for creating animations in React applications.
-Prop-Types: A runtime type checking tool for React props.


**Navbar Component**
-The Navbar component is a simple responsive navigation bar with a mobile-friendly menu toggle.
-The navigation bar is responsive, hiding menu links on smaller screens and displaying a -hamburger button to toggle them.
-Links include hover effects for better user interaction.
-The menu is shown or hidden based on the state of isOpen.
**Description**
-On small screens, the menu can be toggled by clicking on the button, showing or hiding the navigation links.
-On larger screens, the navigation links are displayed inline without the toggle button.
**Hero Component**
-The Hero component displays a full-screen parallax section with a background image and a centered welcome message.
**Description**
-Utilizes the react-parallax library to create a parallax effect with a background image.
-Displays a title and a subtitle in the center of the screen.

**Card Component**
-he Card component displays an individual card with an image, title, description, and a button that triggers a modal or an event.

**Props**
-image (string, required): The URL of the image to be displayed on the card.
-title (string, required): The title of the card.
-description (string, required): The description or additional information about the card.
-onClick (func, required): The function that will be triggered when the button is clicked, to open a modal.
**Description**
-Includes hover animations for the image, zooming in slightly when hovered.
-The card contains a title, a description, and a "Visit" button that triggers a function when clicked.

**Modal Component**
-The Modal component is a simple, customizable modal window that appears when a certain condition is met (e.g., isOpen prop is true).
**Props**
-isOpen (bool, required): Controls whether the modal is visible or hidden.
-onClose (func, required): The function to close the modal.
-title (string, required): The title displayed at the top of the modal.
-description (string, required): The content or description displayed inside the modal.
**Description**
-The modal is conditionally rendered based on the isOpen prop.
-Includes a close button to hide the modal by triggering the onClose function.