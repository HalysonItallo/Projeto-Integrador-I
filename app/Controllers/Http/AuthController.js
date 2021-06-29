"use strict";

const User = use("App/Models/User");
const Database = use("Database");

class AuthController {
  async register({ request }) {
    const data = request.only([
      "name",
      "full_name",
      "RG",
      "CPF",
      "registration",
      "road",
      "district",
      "number_house",
      "email",
      "telephone",
      "password",
      "profile_picture",
      "type",
    ]);
    const user = await User.create(data);
    return user;
  }

  async index({ auth }) {
    const user = await User.query().where("id", "=", auth.user.id).fetch();
    return user;
  }

  async updateProfile({ request, auth }) {
    const data = request.only([
      "name",
      "full_name",
      "road",
      "district",
      "number_house",
      "email",
      "telephone",
      "profile_picture",
    ]);

    await Database.where("id", "=", auth.user.id)
      .update({
        name: data.name,
        full_name: data.full_name,
        road: data.road,
        district: data.district,
        number_house: data.number_house,
        email: data.email,
        telephone: data.telephone,
        profile_picture: data.profile_picture,
      })
      .from("users");

    return data;
  }

  async authenticate({ request, auth }) {
    const { registration, password } = request.all();

    const token = await auth.attempt(registration, password);

    return token;
  }

  async destroy({ params }) {
    const user = await User.query().where("id", "=", params.id).delete();
    return user;
  }
}

module.exports = AuthController;
