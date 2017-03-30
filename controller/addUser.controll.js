
var mongoose = require('mongoose');

/////////////////////////////////// Admin Account ///////////////////////////////////////////////
var Schema = mongoose.Schema;
// var mongoose = require('mongoose'),
var addUserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  Position: String,
  floor: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'addUser'}
);
var addUser = mongoose.model('addUser', addUserSchema);

    exports.insert = function(req, res, next) {
        var  dateTime = new Date();
      var item = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Position: req.body.Position,
        floor: req.body.floor,
      // var  date = new Date();
      };

      var data = new addUser(item);
      data.save() 


      res.redirect('/show');
};


 exports.show = function(req, res, next) {
      addUser.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('showUser', {items: response});
        }
        console.log("show User");
      });

};



 exports.delete = function(req, res, next) {
      var id = req.body.id;
        addUser.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/show');
};


exports.showJson = function (req, res) {
addUser
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, addUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', addUser);
  // prints "The creator is Aaron"
  res.json(addUser);
});
}

/* 

///////////////////////////////////////Room///////////////////////////////
var addRoomSchema = mongoose.Schema({
  Roomname: String,
  floor: String,
  member: String,
  dateTimeFrom: Date,
  dateTimeTo: Date,
  detail: String,
  Support : String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'addRoom'}
);
var addRoom = mongoose.model('addRoom', addRoomSchema);

 exports.insertR = function(req, res, next) {
        var  dateTime = new Date();
      var item = {

        Roomname: req.body.Roomname,
        floor: req.body.floor,
        member: req.body.member,
        detail: req.body.detail,
        Support: req.body.Support,
      // var  date = new Date();
      };
      var data = new addRoom(item);
      data.save() 
      res.redirect('/showR');
};

 exports.showR = function(req, res, next) {
      addRoom.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          res.render('showRoom', {items: response});
        }
        console.log("show User");
      });
};

 exports.deleteR = function(req, res, next) {
      var id = req.body.id;
        addRoom.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/addRoom');
};

exports.showJsonR = function (req, res) {
addRoom
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, addRoom) {
  if (err) return handleError(err);
  console.log('The creator is %s', addRoom);
  // prints "The creator is Aaron"
  res.json(addRoom);
});
};
/*
exports.getid = function (req, res) {
    addRoom
    .find({
            _id: req.param('_id')
        })
    .exec(function (err, rooms) {
      if (err) {return handleError(err);}
      else{
              console.log('Show', rooms);
      res.json(rooms);
    };  
  });
};

exports.getRoom = function (req, res) {
    addRoom
    .find({
            Roomname: req.param('Roomname')
        })
    .exec(function (err, rooms) {
      if (err) {return handleError(err);}
      else{
              console.log('Show', rooms);
      res.json(rooms);
    };  
  });
};
*/

var addroomSchema = mongoose.Schema({
  Roomtype: String,
  detail: String,
  Support : Number,
  floor: {type: Number, min: 5, max: 20},
  Officer: String,
   date: { 
      type: Date, 
      default: Date.now() 
   },
   t800: { 
      type: String, 
      default: 0
   },
   t900: { 
      type: String, 
      default: 0
   },
   t1000: { 
      type: String, 
      default: 0
   },
   t1100: { 
      type: String, 
      default: 0
   },
   t1200: { 
      type: String, 
      default: 0
   },
   t1300: { 
      type: String, 
      default: 0
   },
   t1400: { 
      type: String, 
      default: 0
   },
   t1500: { 
      type: String, 
      default: 0
   },
   t1600: { 
      type: String, 
      default: 0
   },
   },
{collection: 'addroom'}
);

var addroom = mongoose.model('addroom', addroomSchema);

  exports.insertroom = function(req, res, next) {
    var  dateTime = new Date();
      var item = {
        Roomtype: req.body.Roomtype,
        detail: req.body.detail,
        Support: req.body.Support,
        Officer: req.body.Officer,
        floor: req.body.floor,
      };

      var data = new addroom(item);
      data.save() 
    res.redirect('/showR');
};


 exports.showR = function(req, res, next) {
      addroom.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          res.render('showRoom', {items: response});
        }
        console.log("show User");
      });
};



//  exports.insertR = function(req, res, next) {
//         var  dateTime = new Date();
//       var item = {

//         Roomtype: req.body.Roomtype,
//         detail: req.body.detail,
//         Support: req.body.Support,
//         Officer: req.body.Officer,
//         floor: req.body.floor,
//       // var  date = new Date();
//       };
//       var data = new addroom(item);
//       data.save() 
//       res.redirect('/showR');
// };

 exports.deleteR = function(req, res, next) {
      var id = req.body.id;
        addroom.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/showR');
};

exports.showJsonROOM = function (req, res) {
addroom
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, addroom) {
  if (err) return handleError(err);
  console.log('The creator is %s', addroom);
  // prints "The creator is Aaron"
  res.json(addroom);
});
};


// exports.getTimes = function (req, res) {
//     addroom
//     .find({
//             dateTime: req.param('dateTime')
//         })
//     .exec(function (err, addroom) {
//       if (err) {return handleError(err);}
//       else{
//               console.log('Show', addroom);
//       res.json(addroom);
//     };  
//   });
// }; 

// exports.getSupport = function (req, res) {
//     addRoom
//     .find({
//             Support: req.param('Support')
//         })
//     .exec(function (err, supports) {
//       if (err) {return handleError(err);}
//       else{
//               console.log('Show', supports);
//       res.json(supports);
//     };  
//   });
// }






///////////////////////User Login ////////////////////////////////////////

var SUserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  faculty: String,
  SID: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'SUser'}
);
var SUser = mongoose.model('SUser', SUserSchema);

 exports.insertUser = function(req, res, next) {
        var  dateTime = new Date();
      var item = {

        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        faculty: req.body.faculty,
        SID: req.body.SID,
      // var  date = new Date();
      };

      var data = new SUser(item);
      data.save() 
      res.redirect('/showSU');
};

 exports.showUser = function(req, res, next) {
      SUser.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('showRoom', {items: response});
        }
        console.log("show User");
      });

};

 exports.deleteUser = function(req, res, next) {
      var id = req.body.id;
        SUser.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/SUser');
};

exports.showJsonUser = function (req, res) {
SUser
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, SUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', SUser);
  // prints "The creator is Aaron"
  res.json(SUser);
});
};

 exports.showSuser = function(req, res, next) {
      SUser.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('showUser', {items: response});
        }
        console.log("show User");
      });
};


//////////////////////////////studentuserrenew//////////////////////

// var StudentSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
//   firstName: String,
//   lastName: String,
//   Faculty: String,
//   SID: Number,
//   date: { 
//       type: Date, 
//       default: Date.now() 
//     }
// }, 
// {collection: 'Student'}
// );
// var Student = mongoose.model('Student', StudentSchema);

//     exports.insert = function(req, res, next) {
//         var  dateTime = new Date();
//       var item = {
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         Faculty: req.body.Faculty,
//         SID: req.body.SID,
//       };

//       var data = new Student(item);
//       data.save() 
// };


//  exports.showstd = function(req, res, next) {
//       Student.find({}, function(err, response) {
//         if (err) {
//           return next(err);
//         } else {
          
//           res.render('showUser', {items: response});
//         }
//         console.log("show User");
//       });

// };

// exports.getLogin = function (req, res) {
//     Student
//     .find({
//             username: req.param('username')
//         })
//     .exec(function (err, ulogin) {
//       if (err) {return handleError(err);}
//       else{
//               console.log('Show', ulogin);
//       res.json(ulogin);
//     };  
//   });
// };

/*
exports.showJson = function (req, res) {
Student
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, addUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', addUser);
  // prints "The creator is Aaron"
  res.json(addUser);
});
}
*/
//////////////////////////////// BL ////////////////////////////////////

var BlackListSchema = mongoose.Schema({
  FLName: String,
  SID: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'BLUser'}
);
var BLUser = mongoose.model('BLUser', BlackListSchema);

 exports.insertBL = function(req, res, next) {
        var  dateTime = new Date();
      var item = {

        FLName: req.body.FLName,
        SID: req.body.SID,
      // var  date = new Date();
      };

      var data = new BLUser(item);
      data.save() 
      res.redirect('/showBL');
};


 exports.showBL = function(req, res, next) {
      BLUser.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('blacklist', {items: response});
        }
        console.log("show User");
      });

};



 exports.deleteBL = function(req, res, next) {
      var id = req.body.id;
        BLUser.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/showBL');
};

exports.showJsonBL = function (req, res) {
BLUser
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, BLUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', BLUser);
  // prints "The creator is Aaron"
  res.json(BLUser);
});
}

