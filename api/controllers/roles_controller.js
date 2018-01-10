'use strict'
const Role = require('../model/user-role/user-role-model');

let GetAllRoles = (req, res) => {
  Role.findAll(req, res)
    .then((roles) => res.json(roles))
    .catch((message) => res.json({'message': message}));
};

let AddRole = (req, res) => {
  Role.addRole(req.body)
    .then((model) => res.json({"description": "Created"}))
    .catch((message) => res.json({'message': message}));
};

let FindRoleById = (req, res) => {
  const id = req.swagger.params.id.value;
  Role.FindRoleById({_id: id})
    .then((role) => res.json(role))
    .catch((err) => res.json({'message': err}));
};

let DeleteRoleById = (req, res) =>{
  const id = req.swagger.params.id.value;
  Role.deleteRole(id)
    .then(() => res.json(204))
    .catch((err) => res.json({'message': err}));
}

function UpdateRoleById(req,res) {
   var id = req.swagger.params.id.value;
   Role.updateRole(id, req.body)
       .then((value) => {res.json(value)})
       .catch((err) => res.json(400));

}

module.exports = {
  GetAllRoles: GetAllRoles,
  AddRole: AddRole,
  FindRoleById: FindRoleById,
  DeleteRoleById: DeleteRoleById,
  UpdateRoleById: UpdateRoleById
};
