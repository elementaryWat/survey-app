import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const Countdown = ({ seconds, currentQuestion, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    useEffect(() => {
        if (timeLeft > 0) {
            const intervalId = setInterval(() => {
                setTimeLeft((t) => t - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        if (timeLeft == 0) {
            onComplete()
        }
    }, [timeLeft]);

    useEffect(() => {
        setTimeLeft(seconds)
    }, [seconds, currentQuestion]);

    return <div>{timeLeft}s</div>;
}

Countdown.propTypes = {
    seconds: PropTypes.number,
    currentQuestion: PropTypes.number,
    onComplete: PropTypes.func,
}
export default Countdown;