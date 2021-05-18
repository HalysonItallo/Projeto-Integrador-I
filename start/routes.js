'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.post('/sendEmail', 'ForgotPasswordController.store')
Route.post('/resetPassword', 'ForgotPasswordController.update')
Route.post('/validateToken', 'ForgotPasswordController.getToken')

