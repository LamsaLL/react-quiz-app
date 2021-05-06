import Button from '../Button/Button.jsx';

const Score = ({ className = '', score, numberOfQuestions, handleRestartButtonClick }) => (
    <div className={className}>
        Your score is {score}/{numberOfQuestions}
        <Button className="text-white bg-blue-400" onClick={handleRestartButtonClick} text="Rejouer" />
    </div>
);

export default Score;