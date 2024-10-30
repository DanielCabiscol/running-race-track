export const getDistanceName = (distance: number) => {
    debugger
    if(distance === 5) {
        return '5K';
    }else if(distance === 10) {
        return '10K';
    } else if(distance === 21.1) {
        return 'Half Marathon';
    } else if(distance === 42.2) {
        return 'Marathon';
    }
}