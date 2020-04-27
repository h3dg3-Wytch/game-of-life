export const handleClick = (ref, event) => {
    console.log('dispatched!');
    return { type: 'gameClick', payload: {event, ref}}
};