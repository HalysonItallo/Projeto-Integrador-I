'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Call = use('App/Models/Call');
const Database = use('Database');


/**
 * Resourceful controller for interacting with calls
 */
class CallController {
  /**
   * Show a list of all calls.
   * GET calls
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const call = await Call.query().where('teacher_id', '=', auth.user.id).fetch();
    return call;
  }

  /**
   * Render a form to be used for creating a new call.
   * GET calls/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, auth }) {
    const data = request.only(['status_teacher', 'status_student', 'student_id']);
    
    const type = await Database.select('type').where('id', '=', auth.user.id).from('users');
    if(type[0].type === 'teacher'){
      const call = await Call.create({
        teacher_id: auth.user.id,
        ...data
      });
      return call;  
    }
    return null;
  }

  /**
   * Display a single call.
   * GET calls/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ auth }) {
    const type = await Database.select('type').where('id', '=', auth.user.id).from('users');
    if(type[0].type === 'student'){
      const call = await Call.query().where('student_id', '=', auth.user.id).where('status_teacher','=','start').fetch();
      return call;
    } 
    return null;
  }

  /**
   * Update call details.
   * PUT or PATCH calls/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const status = request.only('status_teacher', 'status_student');
  
    const type = await Database.select('type').where('id', '=', auth.user.id).from('users');
    if(type[0].type === 'teacher'){ 
      const data = await Database
      .where('teacher_id', '=', auth.user.id).where('student_id', '=', params.id).update({
        status_teacher: status.status_teacher
      }).from('calls')
      return data;  
    } else if (type[0] === 'student') {
      const data = await Database
      .where('student_id', '=', auth.user.id).where('student_id', '=', params.id).update({
        status_student: status.status_student
      }).from('calls')
      return data;
    }
  }

  /**
   * Delete a call with id.
   * DELETE calls/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const data = await Database
    .where('teacher_id', '=', auth.user.id).where('student_id', '=', params.id).delete().from('calls')
    return data;
  }
}

module.exports = CallController
