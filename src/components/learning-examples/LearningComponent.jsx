import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
    return (
        <div className="App">
            My Todo Application
        <FirstComponent></FirstComponent>
        <SecondComponent/>
        <LearningJavaScript/>
        </div>
    );
}