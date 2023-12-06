const Timer = () => {
    const startingTime = 1701834519915
    const currentTime = Date.now()
    const timeElapsed = currentTime - startingTime

    const convertTime = (timeElapsed: number) => {

        const result = new Date(timeElapsed)
            .toISOString()
            .slice(11, 19);
        console.log(result);
    }

    convertTime(timeElapsed)


    return (
        <div></div>
    )
}

export default Timer;
