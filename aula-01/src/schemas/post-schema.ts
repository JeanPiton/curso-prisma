import joi from "@hapi/joi";
import JoiDate from "@hapi/joi-date"
import { CreatePost } from "../repositories/post-repository";

const Joi = joi.extend(JoiDate)

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  createAt: Joi.date().format("YYYY/MM/dd")
})