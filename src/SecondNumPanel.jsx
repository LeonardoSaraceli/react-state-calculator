// eslint-disable-next-line react/prop-types
export default function SecondNumPanel({secondNum, handleSecondNum, handleResetSecondNum, handleSecondNumRecall}) {
    return (
        <div className="panel">
            <p>{secondNum}</p>
            
            <div className="numbers">
                <button onClick={handleSecondNum}>1</button>
                <button onClick={handleSecondNum}>2</button>
                <button onClick={handleSecondNum}>3</button>
                <button onClick={handleSecondNum}>4</button>
                <button onClick={handleSecondNum}>5</button>
                <button onClick={handleSecondNum}>6</button>
                <button onClick={handleSecondNum}>7</button>
                <button onClick={handleSecondNum}>8</button>
                <button onClick={handleSecondNum}>9</button>
                <button onClick={handleSecondNum}>0</button>
                <button onClick={handleSecondNum}>.</button>
                <button onClick={handleResetSecondNum}>Clear</button>
                <button onClick={handleSecondNumRecall}>Recall</button>
            </div>
        </div>
    )
} 