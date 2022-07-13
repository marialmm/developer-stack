import { Answer } from "@prisma/client";

import { answerRepository } from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">

async function create(answerData: CreateAnswerData){
    await answerRepository.create(answerData);
}

const answerService = {
    create
};
export default answerService;