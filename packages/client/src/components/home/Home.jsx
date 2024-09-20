import styles from "./Home.module.css";
import SampleImage from "../../assets/sample-document.jpg";
import TopNavbar from "../navbars/TopNavbar";
import PlanCard from "./PlanCard";
import Footer from "../footer/Footer";
import WorkingSteps from "./WorkingSteps";
import { useRef } from "react";
import UserAuthentication from "../UserAuthentication";

const plans = [
  {
    name: "FREE",
    cost: 0,
    benefits: [
      "Single workspace",
      "Train upto 20 templates",
      "Process 10 documents per day",
      "Email support",
      "Upto 1GB storage per workspace",
    ],
    buttonTitle: "Register for Free",
  },
  {
    name: "CLONE",
    cost: 0,
    benefits: [
      "Unlimited workspaces",
      "Train unlimited templates",
      "Process unlimited documents per day",
      "Email support",
      "Storage as per your infra",
    ],
    buttonTitle: "Get started",
  },
  {
    name: "ENTERPRISE",
    cost: 29,
    benefits: [
      "Single workspace initially",
      "Train unlimited templates",
      "Process unlimited documents per day",
      "Immediate support",
      "Upto 100 Models per workspace",
    ],
    buttonTitle: "Contact us",
  },
];

export default function Home() {
  const userAuthenticationModalRef = useRef();

  function handleLoginClick(){
    userAuthenticationModalRef.current.showModal();
  }

  function  handlePlanButtonClick(clickedButton){

  }
  
  return (
    <>
      {/* <img className={styles.background} src={HomeBcgImage} alt="" /> */}
      <UserAuthentication ref={userAuthenticationModalRef} />
      <header className={styles.mainHeader}>
        <TopNavbar handleLoginClick={handleLoginClick}></TopNavbar>
      </header>
      <section className={styles.introSection}>
        <p className={styles.intro}>
          Automate the way you process the documents with DoXo
        </p>
      </section>
      <section className={styles.howItWorks}>
        <h1 className={styles.howItWorksTitle}>Here is how it works</h1>
        <div className={styles.workingSteps}>
          <WorkingSteps />
          <img className={styles.previewImg} src={SampleImage} alt="" />
        </div>
      </section>
      <section className={styles.pricing}>
        <h1 className={styles.pricingTitle}>Pricing</h1>
        <section id="pricing" className={styles.plan}>
          {plans.map((plan) => {
            return (
              <PlanCard
                key={plan.name}
                planName={plan.name}
                cost={plan.cost}
                benefits={plan.benefits}
                buttonText={plan.buttonTitle}
                handlePlanButtonClick={handlePlanButtonClick}
              />
            );
          })}
        </section>
      </section>
      <Footer />
    </>
  );
}
