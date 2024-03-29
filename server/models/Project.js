var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const meetingSchema = new Schema({
    name: {type: String, required: true},
    optional: {type: Boolean, required: true, default: false},
    start_time: {type: Date, required: true, default: Date.now},
    end_time: {type: Date, required: true, default: Date.now},
    start_date: {type: Date, required: true, default: Date.now},
    end_date: {type: Date, required: true, default: Date.now},
    frequency: {type: Number, required: true, default: 7}   //Defaults to weekly
})

const teamSchema = new Schema({
    partners: {type: [ObjectId]},
    students: {type: [ObjectId]},
    educators: {type: [ObjectId]},
    meetings: {type: [meetingSchema], default: []}
})

const projectConfigSchema = new Schema({
    goal: {type: String, required: true},
    existing_software: {type: String, required: true},
    intended_users: {type: String, required: true},
    key_features: {type: String, required: true},
    value: {type: String, required: true},
    sensitive_info: {type: String, required: true},
    post_completion: {type: String, required: true},
    external_dependencies: {type: String, required: true},
    waitlist: {type: Boolean, default: false},    //Defaults to not waitlistable
    pitch: {type: String},
    info: {type: String},
    coworkers: {type: Boolean, required: true},
    staff_background: {type: String, required: true},
    publish_status: {type: Number, required: true, default: 0},
})

const studentProfileSchema = new Schema({
    status: {type: String, required: true, default: "pending"},
    categories: {type: [Object], required: true, default: []},
});

const contactPersonSchema = new Schema({
    ref_id: {type: ObjectId, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    role: {type: String, required: true},
});

const projectSchema = new Schema({
    name: {type: String, required: true},
    organization_id: {type: ObjectId, required: true},
    iteration_id: {type: ObjectId, required: true},
    contact_info: {type: contactPersonSchema, required: false},
    status: {type: String, required: true, enum: ['pending', 'submitted', 'accepted', 'published', 'conditionally-accepted', 'not-accepted'], default: 'pending'},
    category: {type: [String]},
    team: {type: teamSchema, default: {}},
    start_date: {type: Date, required: true, default: Date.now},
    end_date: {type: Date, required: true, default: Date.now},
    config: {type: projectConfigSchema, default: {}},
    student_profile: {type: studentProfileSchema, default: { status: 'pending', categories: [] }},
    created_at: {type: Date, required: true, default: Date.now},
})

const projectModel = mongoose.model('Project', projectSchema);
module.exports = { projectModel, projectSchema }
