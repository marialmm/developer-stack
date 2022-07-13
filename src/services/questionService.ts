import { Question } from "@prisma/client";
import { questionRepository } from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">

export interface QuestionWithAnswer {
    question: String
    answers: {
        answer: String
    }[]
}

async function create(questionData: CreateQuestionData){
    await questionRepository.create(questionData);
}

async function get(){
    return await questionRepository.get();
}

async function getById(id: number){
    const question: QuestionWithAnswer = await questionRepository.getByIdWithAnswers(id);

    return question;
}

const questionService = {
    create,
    get,
    getById
};
export default questionService;