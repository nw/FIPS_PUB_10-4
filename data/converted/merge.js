var fs = require('fs');
var path = require('path');

var fd = fs.createWriteStream(path.join(__dirname, './UPDATES.csv'));

var current = 1;
var updates = 16;

while(current <= updates){
	fd.write('\n\nUPDATE,'+ current +'\n\n');
	fd.write(fs.readFileSync(path.join(__dirname, './UPDATE' + current + '.csv')));
        current++;
}
