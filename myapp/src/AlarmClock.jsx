export function AllarmClock(){
    function handleButtonClick(){
        const now= new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return(
        <div>
            <p>Click the button below to show the  current time </p>
            <button onClick={handleButtonClick}>Click Me!</button>
        </div>
    )
}