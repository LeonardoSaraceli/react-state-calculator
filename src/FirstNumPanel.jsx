// eslint-disable-next-line react/prop-types
export default function FirstNumPanel({firstNum, handleFirstNum, handleResetFirstNum, handleFirstNumRecall}) {
    return (
        <div className="panel">
            <p>{firstNum}</p>
            
            <div className="numbers">
                <button onClick={handleFirstNum}>1</button>
                <button onClick={handleFirstNum}>2</button>
                <button onClick={handleFirstNum}>3</button>
                <button onClick={handleFirstNum}>4</button>
                <button onClick={handleFirstNum}>5</button>
                <button onClick={handleFirstNum}>6</button>
                <button onClick={handleFirstNum}>7</button>
                <button onClick={handleFirstNum}>8</button>
                <button onClick={handleFirstNum}>9</button>
                <button onClick={handleFirstNum}>0</button>
                <button onClick={handleFirstNum}>.</button>
                <button onClick={handleResetFirstNum}>Clear</button>
                <button onClick={handleFirstNumRecall}>Recall</button>
            </div>
        </div>
    )
}