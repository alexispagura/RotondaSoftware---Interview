// Notifications can be stores in the database or in a text file, we just need a way to check the timestamp of the last one.
let lastNotificationTimestamp = null;

const ONE_MINUTE_IN_MS = 1 * 60 * 1000;

function logError(error) {
  const currentTimestamp = getCurrentDateTime();

  if (!lastNotificationTimestamp || currentTimestamp - lastNotificationTimestamp >= ONE_MINUTE_IN_MS) {
    const logs = readLogFile();
    const logsCountPerMinute = countLogsInLastMinute(logs, currentTimestamp);

    if (logsCountPerMinute > 10) {
      sendNotification("There are many errors in the system, please check the logs.")
      lastNotificationTimestamp = currentTimestamp;
    }
  }
}

function countLogsInLastMinute(logs, currentTimestamp) {
  const logsInLastMinute = filterLogsInTimeRange(logs, currentTimestamp - ONE_MINUTE_IN_MS, currentTimestamp)
  return logsInLastMinute.length;
}

function sendNotification(message) {
  // Logic to send notification message to the team by Email, Slack, SMS or the desired channel.
}

function readLogFile() {
  // Logic to read and parse the log file. 
  // Because it could contain many logs, I would recommend to use a new log file every day or week depending on the size.
  // Returns an array of logs
}


function filterLogsInTimeRange(logs, start, end) {
  // Filters logs that fall within the time range [start, end]
  // Returns an array of logs within that range
}


function getCurrentDateTime() {
  // Logic to obtain the current time in ms
  // Returns the current time
}
