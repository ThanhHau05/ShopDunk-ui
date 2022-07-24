import { useEffect, useRef } from 'react';

export const useClickOutside = (handler) => {
    const domNode = useRef();
    useEffect(() => {
        const maybeHandler = (event) => {
            console.log(domNode.current);
            if (!domNode.current?.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener('mousedown', maybeHandler);

        return () => {
            document.removeEventListener('mousedown', maybeHandler);
        };
    });

    return domNode;
};
