const { Service } = require('node-linux');
const { join } = require('path');
const express = require('express');
const app = express();
const PORT = 4000;

const serverPath = join(
  process.cwd(),
  "dist",
  "linux-test"
);

const serverPathFile = join(
  process.cwd(),
  "src",
  "server.js"
);

console.log('serverPathFile', serverPathFile);
console.log('serverPath', serverPath);

// Create a new service object
const svc = new Service({
  name: 'Linux App',
  description: 'The nodejs.org example web server.',
  script: serverPathFile // Worked Example
});

app.get('/', (req, res) => {
  return res.send('Ok');
});

app.get('/install', (req, res) => {
  svc.install();
  console.log('App Installed');
  return res.send('App Installed');
});

app.get('/start', (req, res) => {
  svc.start();
  console.log('App Started');
  return res.send('App Started');
});

app.get('/stop', (req, res) => {
  svc.stop();
  console.log('App Stopped');
  return res.send('App Stopped');
});

app.get('/uninstall', (req, res) => {
  svc.uninstall();
  console.log('App uninstalled');
  return res.send('App uninstalled');
});

svc.on('install', () => {
  console.log('Install');
  console.log('Started');
  svc.start();
});

svc.on('alreadyinstalled', () => {
  console.log('alreadyinstalled');
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
