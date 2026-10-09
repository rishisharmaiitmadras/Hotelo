export const getDatesInRange = (startDate, endDate) => {
  if (!startDate || !endDate) return [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  // 1. Time components ko UTC Midnight (00:00:00.000) par normalize karein
  start.setUTCHours(0, 0, 0, 0);
  end.setUTCHours(0, 0, 0, 0);

  const dateList = [];
  let currentDate = new Date(start); 

  // 2. Edge Case: Agar start aur end date same hain (e.g. 1 Oct to 1 Oct)
  if (start.getTime() === end.getTime()) {
    dateList.push(start.getTime());
    return dateList;
  }

  // 3. Loop: Start date se Check-out date ke 1 din pehle tak (Nights Stay)
  while (currentDate < end) {
    dateList.push(currentDate.getTime());
    // Timezone safe increment using setUTCDate
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return dateList;
};