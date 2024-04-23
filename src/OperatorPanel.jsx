// eslint-disable-next-line react/prop-types
export default function OperatorPanel({operator, handleOperator}) {
    return (
        <div className="panel">
            <p>{operator}</p>
            
            <div className="numbers">
                <button onClick={handleOperator}>+</button>
                <button onClick={handleOperator}>-</button>
                <button onClick={handleOperator}>*</button>
                <button onClick={handleOperator}>÷</button>
            </div>
        </div>
    )
}