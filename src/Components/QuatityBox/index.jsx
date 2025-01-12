import { Button } from "@mui/material";
import { useState } from "react";

const QuatityBox = () => {
    const [count, setCount] = useState(1);

    const handleClickCountDown = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleClickCountUp = () => {
        setCount(count + 1);
    };
    return (
        <div className="quatityBox">
            <Button onClick={handleClickCountDown}>-</Button>
            <span className="mx-3">{count}</span>
            <Button onClick={handleClickCountUp}>+</Button>
        </div>
    );
};

export default QuatityBox;
