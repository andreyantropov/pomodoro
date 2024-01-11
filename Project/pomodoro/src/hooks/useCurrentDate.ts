export function useCurrentDate() {
    const currentDate = new Date().setHours(0, 0, 0, 0);

    return [currentDate];
}