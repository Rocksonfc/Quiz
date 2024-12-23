import questoes from "../bancoDeQuestoes";
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const idSelecionado = Number(req.query.id as string);

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()

    return res.status(200).json(questaoSelecionada.paraObjeto())
  } else {

    return res.status(204).json(questoes[0].paraObjeto())
  }

}