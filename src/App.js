import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState(0);

	const submitResponse = (e) => {
		e.preventDefault();
	};

	return (
		<div className="app">
			<h2>Lung Cancer Prediction</h2>
			<p>How it works - Just fill all the fields and hit the predict button</p>
			<form>
				<p>
					Age: <input name="age" type="number" defaultValue={44} />
				</p>
				<p>
					Gender: <input name="gender" type="number" defaultValue={1} />{' '}
				</p>
				<p>
					Air Pollution: <input name="airPollution" type="number" defaultValue={5.5} />{' '}
				</p>
				<p>
					Alcohol Use: <input name="alcoholUse" type="number" defaultValue={5.5} />{' '}
				</p>
				<p>
					Dust Allergy: <input name="dustAllergy" type="number" defaultValue={5.5} />{' '}
				</p>
				<p>
					Occupational Hazards: <input name="occupationalHazards" type="number" defaultValue={5.5} />{' '}
				</p>
				<p>
					Genetic Risk: <input name="geneticRisk" type="number" defaultValue={5.3} />{' '}
				</p>
				<p>
					Chronic Lung Disease: <input name="chronicLungDisease" type="number" defaultValue={1.3} />
				</p>
				<p>
					Balanced Diet: <input name="balancedDiet" type="number" defaultValue={1.3} />
				</p>
				<p>
					Obesity: <input name="obesity" type="number" defaultValue={1.3} />
				</p>
				<p>
					Smoking: <input name="smoking" type="number" defaultValue={5.6} />
				</p>
				<p>
					Passive Smoker: <input name="passiveSmoker" type="number" defaultValue={1.6} />
				</p>
				<p>
					Chest Pain: <input name="chestPain" type="number" defaultValue={1.6} />
				</p>
				<p>
					Coughing of Blood: <input name="coughingOfBlood" type="number" defaultValue={1.8} />
				</p>
				<p>
					Fatigue: <input name="fatigue" type="number" defaultValue={5.8} />
				</p>
				<p>
					Weight Loss: <input name="weightLoss" type="number" defaultValue={1.7} />
				</p>
				<p>
					Shortness of Breath: <input name="shortnessOfBreath" type="number" defaultValue={1.7} />
				</p>
				<p>
					Wheezing: <input name="wheezing" type="number" defaultValue={5.7} />
				</p>
				<p>
					Swallowing Difficulty: <input name="swallowingDifficulty" type="number" defaultValue={1.1} />
				</p>
				<p>
					Clubbing of Finger Nails: <input name="clubbingOfFingerNails" type="number" defaultValue={1.2} />
				</p>
				<p>
					Frequent Cold: <input name="frequentCold" type="number" defaultValue={5.9} />
				</p>
				<p>
					Dry Cough: <input name="dryCough" type="number" defaultValue={1.0} />
				</p>
				<p>
					Snoring: <input name="snoring" type="number" defaultValue={5.4} />
				</p>
				<button type="submit" className="app__predictButton" onClick={submitResponse}>
					Predict
				</button>
			</form>

			{/* result */}
			{result && <h3>Result: {result}</h3>}
		</div>
	);
}

export default App;
