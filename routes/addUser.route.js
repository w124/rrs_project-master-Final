var user = require('../controller/addUser.controll');


module.exports = function (app) {
app.route('/insert')
    .post(user.insert);

app.route('/insertroom')
    .post(user.insertroom);

app.route('/show')
	.get(user.show);

app.route('/delete')
     .post(user.delete);

app.route('/showJson')
     .get(user.showJson);    



app.route('/showR')
	.get(user.showR);

app.route('/deleteR')
     .post(user.deleteR);

app.route('/showJsonR')
     .get(user.showJsonROOM);

/*app.route('/loginPage/:username')
 .get(user.getLogin);*/
/*
app.route('/showS/:_id')
 .get(user.getid);
*/
/*app.route('/showS/:Roomname')
 .get(user.getRoom);*/
/*
 app.route('/showS/:times')
 .get(user.getTimes);

 app.route('/showS/')
 .get();
*/

app.route('/showBL')
    .get(user.showBL);

app.route('/insertBL')
    .post(user.insertBL);

app.route('/deleteBL')
    .post(user.deleteBL);
};