let Time =() =>{
    let time = new Date();

    return <p className="lead text-center">
        The current date & time is : {time.toDateString()} & {time.toLocaleTimeString()}
    </p>
}
export default Time;