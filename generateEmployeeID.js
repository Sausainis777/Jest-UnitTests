export function generateEmployeeID(name, birthYear) {
    
    const shortName = name.replace(/\s+/g, '').slice(0, 3).toUpperCase();
    
    return `${shortName}-${birthYear}`;
}