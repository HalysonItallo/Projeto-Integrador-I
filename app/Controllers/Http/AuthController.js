'use strict'

const User = use('App/Models/User');

class AuthController {
  async register({ request }) {
    const data = request.only([
      'name',
      'full_name',
      'RG',
      'CPF',
      'registration',
      'road',
      'district',
      'number_house',
      'email',
      'telephone',
      'password',
      'profile_picture'
    ]);
    const user = await User.create(data);
    return user;
  }
  
  async authenticate({ request, auth }) {
    const { registration, password } = request.all();
    
    const token = await auth.attempt(registration, password);
    
    return token
  }
  /*
  async getLink(picture) {
    return axios({
      url: "https://api.imgur.com/3/image",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Client-ID b6ad8f52807aabb"
      },
      data: {image: picture}
    }).then(function (response) {
      return response.data.data.link;
    }).catch(function (error) {
      return error;
    });
  }
  */
  
}

module.exports = AuthController
