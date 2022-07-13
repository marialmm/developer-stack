import { Question } from "@prisma/client";
import { Request, Response } from "express";
import { parse } from "path";
import answerService, { CreateAnswerData } from "../services/answerService.js";
import questionService, {
    CreateQuestionData,
} from "../services/questionService.js";

export async function create(req: Request, res: Response) {
    const questionData: CreateQuestionData = req.body;

    await questionService.create(questionData);

    res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
    const { answer }: CreateAnswerData = req.body;
    const questionId: number = parseInt(req.params.id);

    await answerService.create({ answer, questionId });

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const questions: Question[] = await questionService.get();

    res.send(questions);
}

export async function getById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const question = await questionService.getById(id);

    res.send(question)
}
