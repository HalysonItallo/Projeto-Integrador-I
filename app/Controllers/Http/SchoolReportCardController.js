'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const SchoolReportCard = use('App/Models/SchoolReportCard');
const Database = use('Database');

/**
 * Resourceful controller for interacting with schoolreportcards
 */
class SchoolReportCardController {
  /**
   * Show a list of all schoolreportcards.
   * GET schoolreportcards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const schoolReportCard = await SchoolReportCard.query().where('teacher_id', '=', auth.user.id).fetch();
    return schoolReportCard;
  }

  /**
   * Create/save a new schoolreportcard.
   * POST schoolreportcards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth, response }) {
    const data = request.only(['subjects', 'grades', 'student_id']);
    
    const type = await Database.select('type').where('id', '=', auth.user.id).from('users');
    if(type[0].type === 'teacher'){
      const schoolReportCard = await SchoolReportCard.create({
        teacher_id: auth.user.id,
        ...data
      });
      return schoolReportCard;  
    }
    return null;
  }
  /**
   * Display a single schoolreportcard.
   * GET schoolreportcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ auth }) {
    const type = await Database.select('type').where('id', '=', auth.user.id).from('users');
    if(type[0].type === 'student'){
      const schoolReportCard = await SchoolReportCard.query().where('student_id', '=', auth.user.id).fetch();
      return schoolReportCard;
    }
    return null;
  }


  /**
   * Update schoolreportcard details.
   * PUT or PATCH schoolreportcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const { grades } = request.all();
    
    const data = await Database
    .where('teacher_id', '=', auth.user.id).where('student_id', '=', params.id).update({
      grades: grades
    }).from('school_report_cards')
    
    return data;
  }

  /**
   * Delete a schoolreportcard with id.
   * DELETE schoolreportcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const data = await Database
    .where('teacher_id', '=', auth.user.id).where('student_id', '=', params.id).delete().from('school_report_cards')
    
    return data;
  }
}

module.exports = SchoolReportCardController
