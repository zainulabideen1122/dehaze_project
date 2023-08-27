import "./About.css"
import aboutImg from "../media/aboutPage.jpg"

const About = () => {
  return (<>
    <div className="aboutCont">
        <h1>About Us</h1>
    </div>
    <div className="firstExtraDiv"></div>
    <div className="aboutContent">
        <div className="aboutContentImage">
            <img src={aboutImg} width={760}/>
        </div>
        <div className="aboutContentText">
            <p className="has-dropcap">Defogging is a process that aims to enhance the visibility and clarity of images captured in foggy or hazy conditions. In this brief text, I will explain how defogging works using a self-implemented AI model that combines a CNN (Convolutional Neural Network) and a histogram distribution technique for image clarification.
The first step in the defogging process is to analyze the input image using a CNN model. The CNN is trained on a large dataset of foggy and clear images to learn the patterns and characteristics of foggy scenes. By utilizing convolutional layers, the model can extract relevant features from the input image and understand the underlying foggy structure.
Once the CNN has processed the image, it generates a foggy map that represents the fog distribution across the scene. The foggy map highlights the areas where fog is most prevalent, helping the model identify regions that require clarification.
To further enhance the image clarity, a histogram distribution technique is employed. The histogram of the foggy image is analyzed to determine the fog density distribution. This distribution information is then used to estimate the original scene radiance, as fog tends to reduce the visibility by attenuating light. By modeling the fog density and its effects, the algorithm can estimate the radiance of the original scene.
Next, the estimated radiance is combined with the foggy map generated by the CNN. This fusion process involves subtracting the foggy map from the estimated radiance to recover the original scene radiance. The result is an image with reduced fog and improved visibility.
Finally, post-processing techniques such as contrast adjustment and noise reduction may be applied to further enhance the defogged image's quality and clarity.
By leveraging the power of a CNN model to analyze foggy scenes and combining it with a histogram distribution technique for image clarification, the self-implemented AI model can effectively remove fog and improve visibility in images captured under adverse weather conditions.</p>
        </div>
    </div>
    <div className="extraDiv"></div>
  </>);
};
export default About;