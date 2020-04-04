const mgrArticles = require('./mgrArticles');
const CronJob = require('cron').CronJob;

const job = new CronJob('0 0 */1 * * *', async function() {
  console.log('running job every hour');
  await mgrArticles();
});
job.start();

module.exports = job