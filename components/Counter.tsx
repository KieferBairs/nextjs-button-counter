// Set Up component to run in browser
'use client';
import { useId, useState } from "react";

// Define props for component
type CounterProps = {
    initialCount?: number;
    intitialStep?: number;
    };

// Main counter component
export default function Counter({ initialCount = 0, intitialStep = 1 }: CounterProps) {
    const [count, setCount] = useState<number>(initialCount);
    const [step, setStep] = useState<number>(Math.max(1, intitialStep));

// useId created a unique ID label for accessibility
const stepId = useId();

// Only allow decrrementing if count-step will not go below 0
const canDecrement = count - step >= 0;

return (
    <section aria-label="Button counter">
        <div>
            <label htmlFor={stepId}>Step</label>
            <input
                id={stepId}
                type="number"
                min={1} // Dont allow step to be less than 1
                value={step}
                onChange={(e) => setStep(Math.max(1, Number(e.target.value || 1)))}
              />        
            </div>

{/* aria-live="polite" lets screen readers know to announce changes */}
<p aria-live="polite" aria-atomic="true">
    count: <strong>{count}</strong>
</p>

{/* Button Controls */}

{/* Decrement */}
<div>
    <button onClick={() => canDecrement && setCount((c) => c - step)} disabled={!canDecrement}>
        -{step}
    </button>
 {/* Increment */}
    <button onClick={() => setCount((c) => c + step)}>+{step}</button>

 {/* Reset */}
    <button onClick={() => setCount(0)}>Reset</button>
 </div>
 </section>
);
}