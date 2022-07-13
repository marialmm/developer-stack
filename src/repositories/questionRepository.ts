import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function create(questionData: CreateQuestionData) {
    await prisma.question.create({
        data: questionData,
    });
}

async function get() {
    return await prisma.question.findMany();
}

async function getByIdWithAnswers(id: number) {
    const question = await prisma.question.findUnique({
        where: { id },
        select: {
            question: true,
            answers: {
                select: {
                    answer: true,
                },
            },
        },
    });

    return question
}

export const questionRepository = {
    create,
    get,
    getByIdWithAnswers
};
