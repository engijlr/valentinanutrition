import { useState } from "react";
import Recipes from "./RecipesData";
import { Link } from "react-router-dom";
import "./styles/RecipesPreview.css";

const RecipesPreview = () => {
  const [items, setItems] = useState(Recipes);

  return (
    <section className="work container section">
      <h2 className="section__title">Latest recipes</h2>
      <div className="filters">
        <span className="recipe_item">Everything</span>
        <span className="recipe_item">Breakfast</span>
        <span className="recipe_item">Lunch</span>
        <span className="recipe_item">Snacks</span>
        <span className="recipe_item">Dinner</span>
      </div>

      <div className="work_container grid">
        {items.map((item) => {
          const { id, image, title, category } = item;
          return (
            <div className="card" key={id}>
              <div className="thumbnail">
                <img src={image} className="image" />
                <div className="mask"></div>
              </div>

              <span className="category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <Link to="/home" className="button">
                <i className="icon-link button-icon">link</i>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecipesPreview;
