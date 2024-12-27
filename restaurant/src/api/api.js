const seededRandom = function (seed) {
    const m = 2 ** 35 - 31; // Modulus (large prime number)
    const a = 185852; // Multiplier
    let s = seed % m; // Initial seed value
    return function () {
      s = (s * a) % m; // Update seed value
      return s / m; // Normalize to [0, 1)
    };
  };
  
  /**
   * Generates random availability times for a given date.
   * @param {Date} date - The date for which to fetch available times.
   * @param {number} [startHour=17] - Starting hour of the range.
   * @param {number} [endHour=23] - Ending hour of the range.
   * @param {number} [threshold=0.5] - Probability threshold for time inclusion.
   * @returns {string[]} - Array of available times (e.g., "17:00", "17:30").
   */
  const fetchAPI = function (date, startHour = 17, endHour = 23, threshold = 0.5) {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date. Please provide a valid Date object.");
    }
  
    let result = [];
    const randomGenerator = seededRandom(date.getDate());
  
    for (let i = startHour; i <= endHour; i++) {
      if (randomGenerator() < threshold) {
        result.push(`${i}:00`);
      }
      if (randomGenerator() < threshold) {
        result.push(`${i}:30`);
      }
    }
    return result;
  };
  
  // Export only what is needed
  export { fetchAPI };
  