import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  // Destructure props from App.js
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* Go through each of the categories from App.js */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                // If the currentCategory's name equals this category's name...
                // this li has a the class `navActive`
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              {/* If this <li> is clicked, set the currentCategory equal to this <li> */}
              <span onClick={() => setCurrentCategory(category)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
