const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({id}).first();
}
/*
function findSteps(id) {
    return db('steps as st')
    .join('schemes as sc', 'sc.id', '=', 'st.scheme_id')
    .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .where({scheme_id: id});
}*/
//works both ways!! SQL is pretty forgiving
function findSteps(id) {
    return db('schemes as sc')
    .join('steps as st', 'st.scheme_id', '=', 'sc.id')
    .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .where({scheme_id: id})
}
function add (scheme) {
    return db('schemes').insert(scheme);
}

function update (updates, id) {
    return db('schemes').where({id}).update(updates);
}
function remove (id) {
    return db('schemes').where({id}).del();
}
function addStep(stepData, id) {
    return db('steps').where({id}).insert(stepData);
}