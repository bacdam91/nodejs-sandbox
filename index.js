//fs.watch demo
//const watchDemo = require("./fs_sandbox/fs.watch.demo/demo");
//watchDemo.runWatcherDemo01();

//fs.createReadStream demo
//const createReadStreamDemo = require("./fs_sandbox/fs.createReadStream.demo/demo");
//createReadStreamDemo.runCreateReadStreamDemo01();

//APP DEMO
//File Monitor Demo
const fileMonitor = require("./app_demos/file_monitor/fileMonitor");
fileMonitor.startResourcesWatcher("./app_demos/file_monitor/resources");
