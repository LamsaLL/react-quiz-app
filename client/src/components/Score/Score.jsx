import Button from '../Button/Button.jsx';

const Score = ({ className = '', score, numberOfQuestions, handleRestartButtonClick }) => (
    <div className={`relative p-2 ${className}`}>
       <div className="p-16 text-center text-xl">
           Votre score: <span className="font-bold">{score}/{numberOfQuestions}</span> 
        </div>
        <div className="absolute p-2 right-0 bottom-0">
            <Button className=" text-white bg-blue-400" onClick={handleRestartButtonClick} text="Rejouer" />
        </div>
    </div>
);

export default Score;