import Food from "../../components/FoodOnBoard/Food";
import Foodrotation from "../../components/Foodrotation/Foodrotation";
import "./Onboarding.css";
import { Link } from "react-router-dom";
const Onboarding = () => {
  return (
    <section className="onboarding">
      <Foodrotation />
      <article>
        <h2>All recipe you needed</h2>
        <p>5000+ healthy recipes made by people for your healthy life</p>
        <Link className="started" to="/home">
          Get Started
        </Link>
      </article>
    </section>
  );
};

export default Onboarding;
