import aboutImg1 from "../assets/about1.avif";
import aboutImg2 from "../assets/about2.avif";
import aboutImg3 from "../assets/about3.avif";
import "./styles/About.css";

const AboutPage = () => {
  return (
    <div className="home">
      <div className="posts">
        <div className="post">
          <div className="img">
            <img src={aboutImg1} alt="img" />
          </div>
          <div>
            <h1>Hello</h1>
            <p>
              Welcome to Valentina Nutrition! My name is Valentina, and I'm a
              registered dietitian and nutritionist with a passion for helping
              individuals achieve their health and wellness goals through
              personalized nutrition plans and evidence-based advice. I believe
              that proper nutrition is the foundation for a healthy lifestyle,
              and my mission is to empower my clients with the knowledge and
              tools they need to make informed decisions about their diet and
              nutrition. Whether you're looking to lose weight, manage a chronic
              condition, or simply adopt a healthier way of eating, I'm here to
              guide you on your journey. My approach to nutrition is holistic
              and individualized, taking into account each client's unique
              needs, preferences, and lifestyle. I believe in the power of
              whole, nutrient-dense foods, and I strive to make healthy eating
              both delicious and achievable for everyone.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="img">
            <img src={aboutImg2} alt="img" />
          </div>
          <div>
            <h1>Hello</h1>
            <p>
              Welcome to Valentina Nutrition! My name is Valentina, and I'm a
              registered dietitian and nutritionist with a passion for helping
              individuals achieve their health and wellness goals through
              personalized nutrition plans and evidence-based advice. I believe
              that proper nutrition is the foundation for a healthy lifestyle,
              and my mission is to empower my clients with the knowledge and
              tools they need to make informed decisions about their diet and
              nutrition. Whether you're looking to lose weight, manage a chronic
              condition, or simply adopt a healthier way of eating, I'm here to
              guide you on your journey. My approach to nutrition is holistic
              and individualized, taking into account each client's unique
              needs, preferences, and lifestyle. I believe in the power of
              whole, nutrient-dense foods, and I strive to make healthy eating
              both delicious and achievable for everyone.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="img">
            <img src={aboutImg3} alt="img" />
          </div>
          <div>
            <h1>Hello</h1>
            <p>
              Welcome to Valentina Nutrition! My name is Valentina, and I'm a
              registered dietitian and nutritionist with a passion for helping
              individuals achieve their health and wellness goals through
              personalized nutrition plans and evidence-based advice. I believe
              that proper nutrition is the foundation for a healthy lifestyle,
              and my mission is to empower my clients with the knowledge and
              tools they need to make informed decisions about their diet and
              nutrition. Whether you're looking to lose weight, manage a chronic
              condition, or simply adopt a healthier way of eating, I'm here to
              guide you on your journey. My approach to nutrition is holistic
              and individualized, taking into account each client's unique
              needs, preferences, and lifestyle. I believe in the power of
              whole, nutrient-dense foods, and I strive to make healthy eating
              both delicious and achievable for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
