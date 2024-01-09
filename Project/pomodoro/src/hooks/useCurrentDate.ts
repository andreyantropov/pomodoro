export function useCurrentDate() {
    const currentDate = new Date().getDate();

    return [currentDate];
}