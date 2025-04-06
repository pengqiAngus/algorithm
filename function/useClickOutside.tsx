import React, { useEffect, useRef } from "react";
export const useOutsideHooks = (callback:Function) => {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const clickOutSide = (e:MouseEvent) => {
            if (ref.current&&!ref.current.contains(e.target as Node)) {
                callback();
            }
        }
        document.addEventListener('mousedown',clickOutSide)
        return () => {
            document.removeEventListener('mousedown',clickOutSide)
        }
    }, [callback])
    return ref;
}

export const App = () => {
    const clickOutSideCallback = () => {
        console.log('outside');
    }
    const ref = useOutsideHooks(clickOutSideCallback);
    return <div>
        <div ref={ref}>
            123444
        </div>
    </div>
}