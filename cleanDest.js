const fs = require('fs');
const { exec } = require("child_process");

console.log("-- !!CAUTION!! YOU WILL BE CREATING A CLEAN COPY OF THE SRC TO DEST REPO    --");
console.log("-- !!CAUTION!! YOU HAVE 10 SECONDS TO CANCEL THE OPERATION BY HITING Ctrl+C --");

function sleep(milliseconds, debugSkip) {
	const startTime = new Date().getTime(); 
	if (debugSkip){
		return ;
	}
	do {
		var endTime = new Date().getTime();
	} while ((endTime - startTime) <= milliseconds);
}

function run(command) {
	if (!command) { return; }
	console.log(`RUNNING COMMAND: ${command}`);
	exec(`${command}`,(err, stdout, stderr) => {
		if (err) {
			console.log(`Error: ${err}`); 
			return false; 
		} 
		if (stderr) { 
			console.log(`STDERR: ${stderr}`); 
			return false; 
		}
		console.log(stdout);
	});
}

function clean(directory){
	fs.readdir(`${directory}`, (err, data) => {
		data.forEach((DirContent) => {
			if (!DirContent.startsWith('.')) {
				console.log(`REMOVING: ${directory}/${DirContent}`)
				fs.rmSync(`${directory}/${DirContent}`, { recursive: true, force: true }, (err) => {
					if (err) {
						console.log(err);
					}
				});
			}
		});
	})
}

sleep(10 * 1000);
clean('./dst', false)
run('npm run build:eleventy')
run('npm run build:webpack')
run('npm run build:sass')