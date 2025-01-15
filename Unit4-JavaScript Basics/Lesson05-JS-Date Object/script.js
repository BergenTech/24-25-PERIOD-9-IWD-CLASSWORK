// ==========================================
// JavaScript Date Object
// ==========================================

// 1. Creating Dates
// ----------------
// Current date and time
const now = new Date();
// console.log(now)

// Create a specific date - Note: months are 0-based (0-11)
// Format: year, month, day, hour, minute, second
const specificDate = new Date(2024, 11, 5, 14, 37, 25)
// console.log(specificDate)

// Create from date string
// const fromString = new Date("2025-01-15")
const fromString = new Date("2025-01-15T14:30:45")
// console.log(fromString)
// Create from timestamp (milliseconds since Jan 1, 1970) - Unix Time
const fromTimeStamp = new Date(542241513511)
// console.log(fromTimeStamp)

// 2. Getting Date Information
// --------------------------
const date = new Date("2025-01-15T14:56:00")
// Get the year
console.log(`Full Year: ${date.getFullYear()}`)
// Get the month (0-11, where 0 is January)
console.log(`Month: ${date.getMonth()}`)
// Get the day of the month (1-31)
console.log(`Day: ${date.getDate()}`)
// Get the day of week (0-6, where 0 is Sunday)
console.log(`Weekday: ${date.getDay()}`)
// Get hours (0-23)
console.log(`Hours: ${date.getHours()}`)
// Get minutes (0-59)
console.log(`Minutes: ${date.getMinutes()}`)
// Get seconds (0-59)
console.log(`Seconds: ${date.getSeconds()}`)

// 3. Modifying Dates
// -----------------
const modifyDate = new Date();
console.log(`Modified Date: ${modifyDate}`)
// Set year
modifyDate.setFullYear(2026)
console.log(`Modified Date: ${modifyDate}`)
// Set month (0-11)
modifyDate.setMonth(6)
console.log(`Modified Date: ${modifyDate}`)
// Set day of month
modifyDate.setDate(20)
console.log(`Modified Date: ${modifyDate}`)
// Set hours
modifyDate.setHours(16)
console.log(`Modified Date: ${modifyDate}`)
// Set minutes
modifyDate.setMinutes(46)
// Set seconds
modifyDate.setSeconds(46)

// 4. Formatting Dates
// -----------------
const formatDate = new Date();
// Convert to readable string
console.log(formatDate)
console.log(formatDate.toLocaleString())
// Get just the date portion
console.log(formatDate.toLocaleDateString())
// Get just the time portion
console.log(formatDate.toLocaleTimeString())
// Get ISO string format
console.log(formatDate.toISOString())