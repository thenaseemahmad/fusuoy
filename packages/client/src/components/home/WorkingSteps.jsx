import styles from "./WorkingSteps.module.css";
import { SiGithubactions } from "react-icons/si";
import { IoDocumentsOutline } from "react-icons/io5";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineModelTraining } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";



const steps = [
  { title: "Decide the data that needs to be extracted", icon:<SiGithubactions size={30}/> },
  { title: "Get the sample documents", icon:<IoDocumentsOutline size={30}/>},
  { title: "Grouping documents with similar templates", icon:<LiaLayerGroupSolid size={35}/> },
  { title: "Tag the data in sample documents", icon:<IoDocumentTextOutline size={30}/> },
  { title: "Train the model", icon:<MdOutlineModelTraining size={30}/> },
  { title: "Use the model", icon:<VscServerProcess size={30} /> },
];

export default function WorkingSteps() {
  return (
    <ol className={styles.steps}>
      {steps.map((step) => {
        return (
          <li key={step.title} className={styles.step}>            
            <div className={styles.icon}>{step.icon}</div>
            <div className={styles.title}>{step.title}</div>
          </li>
        );
      })}
    </ol>
  );
}
