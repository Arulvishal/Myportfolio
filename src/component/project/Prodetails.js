import img from './proimage.png';

const projects = {
  heading:"PROJECT",
  image:img,
  Title: "Lung disease classification by analyzing lung tissue densities",
  
  description:  
    { a: "Objective: Classify lung diseases (e.g., pneumonia, COPD) using medical imaging." ,
      b: "Model: DenseNet-121 for deep learning-based feature extraction." ,
      c: "Preprocessing: Enhances contrast, removes noise, and segments lung images." ,
      d: "Dataset: NIH Chest X-ray and other public medical datasets." ,
      e: "Evaluation: Uses accuracy metrics and Grad-CAM for explainability." ,
      f: "Impact: Assists radiologists in faster and more accurate diagnoses." 
    },

     technology: [{la: "Deep Learning"}, {la:"Python"},{la:"HTML"}, {la:"CSS"}] 
  
};
  

export default projects;
