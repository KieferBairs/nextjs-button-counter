// Set Up component to run in browser
'use client';
import { unique } from "next/dist/build/utils";
import { useId, useState } from "react";

// Define props for component
type CounterProps = {
    initialCount?: number;
    intitialStep?: number;
    };

// Main counter component
export default function Counter({ initialCount = 0, intitialStep = 1 }: CounterProps) {
    const [count, setCount] = useState<number>(initialCount);
    const [step, setStep] = useState<number>(Math,max(1, intitialStep);

    // useId created a unique ID label for accessibility
    const stepId = useId();

    