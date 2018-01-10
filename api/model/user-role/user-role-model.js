const Role = require('./user-role-schema');

let findAll = () => {
  return new Promise((resolve, reject) => {
    Role.find((err, roles) => {
      if (err) {
        reject(err);
      }
      resolve(roles);
    });
  })
}


let addRole = (newRole) => {
  return new Promise((resolve, reject) =>{
      Role.create(newRole,(err, model) => {
        if (err) {
          reject(err);
        }
        resolve(model);
      })
    })
}

let FindRoleById = (id) => {
  return new Promise((resolve, reject) => {
    Role.findById(id, (err, role) => {
      if (err) {
        reject(err);
      }
      resolve(role);
    })
  })
}

let deleteRole = (id) => {
  return new Promise((resolve, reject) => {
    Role.findByIdAndRemove({_id: id}, (err, role) => {
      if (err) {
        reject(err);
      }
      resolve(role._id);
    })
  })
}

let updateRole = (id, newValue) => {
  return new Promise((resolve, reject) => {
    Role.findByIdAndUpdate(id, newValue,(err, value) =>{
      if (err) {
        reject(err);
      }
      resolve(value);
    })
  })
}


module.exports = {
  findAll: findAll,
  FindRoleById: FindRoleById,
  updateRole: updateRole,
  addRole: addRole,
  deleteRole: deleteRole
};