import { embaralhar } from "@/functions/array";
import questoes from "../bancoDeQuestoes"
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids));
}
