var CronJob = require('cron').CronJob;

var job = new CronJob('0 0 */1 * * *', function() {
  console.log('running a task every hour');
});
job.start();

module.exports = job