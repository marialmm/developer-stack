import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

async function create(answerData: CreateAnswerData){
    await prisma.answer.create({
        data: answerData
    })
}

export const answerRepository = {
    create
}