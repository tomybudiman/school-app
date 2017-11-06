'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail:{
                msg:"Masukan format email yang benar!"
            }
        }
    },
    SubjectId: DataTypes.INTEGER
  });
  Teacher.associate=function(models){
      Teacher.belongsTo(models.Subject);
  }
  return Teacher;
};
