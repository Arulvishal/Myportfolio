import img from './proimage.png';

const projects = {
  heading:"PROJECT",
  image:img,
  Title: "Lung disease classification by analyzing lung tissue densities",
  technologies: ["Deep Learning", "Python", "HTML", "CSS"],
  description:  
    { a: "Objective: Classify lung diseases (e.g., pneumonia, COPD) using medical imaging." ,
      b: "Model: DenseNet-121 for deep learning-based feature extraction." ,
      c: "Preprocessing: Enhances contrast, removes noise, and segments lung images." ,
      d: "Dataset: NIH Chest X-ray and other public medical datasets." ,
      e: "Evaluation: Uses accuracy metrics and Grad-CAM for explainability." ,
      f: "Impact: Assists radiologists in faster and more accurate diagnoses." 
    },
  
};

// const projects = ({ technologies }) => (
//     <ul>
//       {technologies.map((tech, i) => (
//         <li key={i}>{tech}</li>
//       ))}
//     </ul>
//   );
  

export default projects;
