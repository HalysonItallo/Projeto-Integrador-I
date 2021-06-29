'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Hours = use('App/Models/Hour');
const Database = use('Database');

/**
 * Resourceful controller for interacting with hours
 */
class HourController {
  /**
   * Show a list of all hours.
   * GET hours
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const hours = await Hours.query().where('user_id', '=', auth.user.id).fetch();
    return hours;
  }

  /**
   * Render a form to be used for creating a new hour.
   * GET hours/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, auth }) {
    let data = request.only(['week_day','grade', 'hour']); 
      
    const hours = await Hours.create({
      user_id: auth.user.id,
      ...data
    });
    return hours;  
  }


  /**
   * Display a single hour.
   * GET hours/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({  }) {
  }


  /**
   * Update hour details.
   * PUT or PATCH hours/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, params, auth }) {
    
    const {week_day, grade, hour } = request.all();
    
    const data = await Database
    .where('week_day', '=', params.week_day)
    .where('hour', '=', params.hour)
    .where('user_id','=', auth.user.id)
    .update({
      week_day: week_day,
      grade: grade,
      hour: hour
    }).from('hours')
    
    return data;
  }

  /**
   * Delete a hour with id.
   * DELETE hours/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const data = await Database
    .where('week_day', '=', params.week_day)
    .where('hour', '=', params.hour)
    .where('user_id','=', auth.user.id)
    .delete().from('hours')
    return data;
  }
}

module.exports = HourController
