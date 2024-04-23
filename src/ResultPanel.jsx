// eslint-disable-next-line react/prop-types
export default function ResultPanel({result, handleResult, handleStore}) {
    return (
        <div className="panel answer">
            <p>{result}</p>

            <div>
                <button onClick={handleResult}>=</button>
            </div>

            <div>
                <button onClick={handleStore}>Store</button>
            </div>
        </div>
    )
}