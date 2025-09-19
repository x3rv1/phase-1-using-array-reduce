const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

module.exports = {
  batteryBatches,
  totalBatteries,
};
