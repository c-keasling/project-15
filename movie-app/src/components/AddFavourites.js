import React from "react";

// A React component for adding a movie to favourites
const AddFavourite = () => {
  return (
    // React fragment to group multiple elements without adding extra nodes to the DOM
    <>
      <span className="mr-2">Add to Favourites</span>{" "}
      {/* Text label for the button */}
      <svg
        width="1em" // Sets width of the icon and height next lin
        height="1em"
        viewBox="0 0 16 16" // Defines the position and dimension in user space of an SVG
        class="bi bi-heart-fill" // Bootstrap icon class for styling
        fill="red" // Sets the fill color of the heart icon
        xmlns="http://www.w3.org/2000/svg" // XML namespace for SVG elements
      >
        <path
          fill-rule="evenodd" // Defines the rule for painting the interior of the given graphical element
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" // SVG path command for the heart shape
        />
      </svg>
    </>
  );
};

export default AddFavourite;
