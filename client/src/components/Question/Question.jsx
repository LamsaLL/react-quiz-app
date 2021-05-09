import Button from '../Button/Button.jsx';

const Question = ({
  className = '',
  error,
  loading,
  text_question,
  handleTrueButtonClick,
  handleFalseButtonClick,
  handleValidateButtonClick,
}) => (
  <>
    <div className="p-4 text-center text-xl">
      {error && 'Error!'}
      {loading && 'Loading...'}
      {text_question}
    </div>

    <div className="flex flex-wrap gap-4 p-4 justify-center">
      <Button
        className="focus:bg-green-400"
        onClick={handleTrueButtonClick}
        text="Vrai"
      />
      <Button
        className="focus:bg-red-400"
        onClick={handleFalseButtonClick}
        text="Faux"
      />
      <Button
        className="text-white bg-blue-400"
        onClick={handleValidateButtonClick}
        text="Valider"
      />
    </div>
  </>
);

export default Question;
