import React, { useState } from 'react';

const MODULOS = [
  {
    nome: "Fundamentos da Conversão Consciente",
    cor: "#3b82f6",
    explicacao: "A mentalidade e base para vendas consistentes e naturais",
    perguntas: [
      {
        pergunta: "Você acredita que vender todos os dias pode ser leve, sem parecer insistente?",
        explicacao: "A mentalidade de quem vende todos os dias deve ser natural e fluida, não forçada.",
        dica: "Vender bem é diferente de faturar muito - a base está na naturalidade."
      },
      {
        pergunta: "Você consegue identificar os 4 perfis comportamentais e como eles decidem comprar?",
        explicacao: "Cada perfil (Dominante, Influente, Estável, Conforme) tem uma forma única de tomar decisões.",
        dica: "Entender o perfil comportamental é a chave para adaptar sua abordagem."
      },
      {
        pergunta: "Você sabe fazer um diagnóstico emocional para identificar quem está pronto para comprar?",
        explicacao: "Nem todo lead está no momento certo. Saber identificar isso economiza tempo e energia.",
        dica: "Lead pronto tem urgência emocional, não apenas interesse racional."
      },
      {
        pergunta: "Você diferencia claramente 'vender bem' de 'faturar muito' na sua abordagem?",
        explicacao: "Vender bem cria relacionamentos duradouros e referências. Faturar muito pode ser insustentável.",
        dica: "Quem vende bem, fatura consistentemente a longo prazo."
      }
    ]
  },
  {
    nome: "Atração e Nutrição de Leads",
    cor: "#10b981",
    explicacao: "Como atrair e preparar leads com intenção real de compra",
    perguntas: [
      {
        pergunta: "Seu conteúdo atrai leads com intenção de compra, não apenas curiosos?",
        explicacao: "Conteúdo estratégico atrai pessoas que já sentem a dor, não apenas interessados.",
        dica: "Fale para quem já sente o problema, não para quem não sabe que tem."
      },
      {
        pergunta: "Você aplica uma estrutura de nutrição que gera oportunidade, dualidade e prova?",
        explicacao: "Nutrição estratégica prepara o lead emocional e racionalmente para a compra.",
        dica: "Mostre a oportunidade, o custo da inação e a prova de que funciona."
      },
      {
        pergunta: "Seu tráfego (orgânico ou pago) antecipa o desejo antes da oferta?",
        explicacao: "Bom tráfego desperta o desejo de mudança antes mesmo da apresentação da solução.",
        dica: "Desejo vem antes da oferta. Sem desejo, qualquer preço parece caro."
      },
      {
        pergunta: "Você prepara o lead emocionalmente para aceitar um diagnóstico/pré-venda?",
        explicacao: "Lead preparado chega na pré-venda já receptivo e engajado.",
        dica: "Preparação emocional é tão importante quanto preparação racional."
      }
    ]
  },
  {
    nome: "Diagnóstico e Qualificação Estratégica",
    cor: "#f59e0b",
    explicacao: "Como identificar perfil comportamental e qualificar leads",
    perguntas: [
      {
        pergunta: "Você sabe como fazer a chamada para diagnóstico com nomes, formas e gatilhos certos?",
        explicacao: "A forma como você chama para o diagnóstico influencia quem aceita e como chega.",
        dica: "Use termos que despertem curiosidade genuína, não obrigação."
      },
      {
        pergunta: "Você aplica formulário de pré-qualificação ou usa IA SDR para filtrar leads?",
        explicacao: "Filtrar antes economiza tempo e aumenta a qualidade das conversas.",
        dica: "Melhor rejeitar na pré-qualificação que perder tempo na venda."
      },
      {
        pergunta: "Consegue identificar o perfil DISC a partir de respostas simples do lead?",
        explicacao: "Identificar o perfil antecipadamente permite personalizar toda a abordagem.",
        dica: "Observe não apenas o que dizem, mas como dizem."
      },
      {
        pergunta: "Você sabe o que fazer quando o lead ainda não está pronto (estratégia de recuperação)?",
        explicacao: "Nem todo 'não' é definitivo. Leads não prontos hoje podem comprar amanhã.",
        dica: "Lead não maduro hoje pode ser cliente amanhã, se bem conduzido."
      }
    ]
  },
  {
    nome: "Conversa que Converte",
    cor: "#8b5cf6",
    explicacao: "Scripts vivos, escuta ativa e adaptação em tempo real",
    perguntas: [
      {
        pergunta: "Sua call tem estrutura clara que vende sem parecer que está vendendo?",
        explicacao: "Conversas estruturadas mas naturais geram mais confiança e conversão.",
        dica: "Estrutura dá segurança, naturalidade gera conexão."
      },
      {
        pergunta: "Você consegue fazer leitura corporal e emocional em calls 1 a 1?",
        explicacao: "Sinais não verbais revelam mais que palavras sobre o estado emocional do lead.",
        dica: "Tom de voz, pausas e respiração dizem se a pessoa está convencida."
      },
      {
        pergunta: "Você adapta seu pitch ao perfil do lead de forma natural e fluida?",
        explicacao: "Adaptação natural (não forçada) cria conexão genuína e aumenta conversões.",
        dica: "Fale a linguagem do seu lead, não a sua própria linguagem."
      },
      {
        pergunta: "Você contorna objeções com verdade, sem forçar ou pressionar?",
        explicacao: "Objeções são oportunidades de esclarecer e gerar mais confiança.",
        dica: "Objeção bem tratada gera mais confiança que ausência de dúvidas."
      }
    ]
  },
  {
    nome: "Fechamento com Leveza e Autoridade",
    cor: "#ef4444",
    explicacao: "Como conduzir o momento da decisão com naturalidade",
    perguntas: [
      {
        pergunta: "Você sabe identificar o momento certo de apresentar o preço?",
        explicacao: "Timing é fundamental no fechamento. Preço na hora errada mata a venda.",
        dica: "Valor sempre antes do preço. Sem valor percebido, preço é só custo."
      },
      {
        pergunta: "Você tem técnicas de fechamento específicas para cada perfil comportamental?",
        explicacao: "Cada perfil precisa de uma abordagem diferente no momento da decisão.",
        dica: "Dominantes querem rapidez, Influentes emoção, Estáveis segurança, Conformes dados."
      },
      {
        pergunta: "Você aplica urgência emocional saudável, sem pressão excessiva?",
        explicacao: "Urgência verdadeira motiva, pressão artificial afasta e gera arrependimento.",
        dica: "Urgência real vem da necessidade do cliente, não da sua necessidade de vender."
      },
      {
        pergunta: "Você conduz o próximo passo de forma leve, sem 'empurrar' o cliente?",
        explicacao: "Fechamento natural é mais eficaz que pressão. Pessoas fogem da pressão.",
        dica: "Feche como se fosse o próximo passo óbvio e natural da conversa."
      }
    ]
  },
  {
    nome: "Multiplicação com Equipe e Processos",
    cor: "#ec4899",
    explicacao: "Como escalar resultados com processos e pessoas",
    perguntas: [
      {
        pergunta: "Você sabe como treinar um closer para aplicar seu método de forma consistente?",
        explicacao: "Escalar vendas exige replicar seu método através de outras pessoas.",
        dica: "Documente processos e crie checklists para garantir consistência."
      },
      {
        pergunta: "Você revisa calls com checklist estruturado para melhoria contínua?",
        explicacao: "Melhoria contínua vem da análise sistemática, não da intuição apenas.",
        dica: "O que não é medido e revisado, não é melhorado consistentemente."
      },
      {
        pergunta: "Você acompanha métricas de vendas e ajusta pitch com base em dados reais?",
        explicacao: "Decisões baseadas em dados são mais assertivas que intuição apenas.",
        dica: "Métricas não mentem. Use-as para evoluir e otimizar resultados."
      },
      {
        pergunta: "Você tem previsibilidade de vendas e fluxo constante de oportunidades?",
        explicacao: "Previsibilidade é sinal de maturidade comercial e permite planejamento estratégico.",
        dica: "Da primeira venda à previsibilidade: processos garantem fluxo constante."
      }
    ]
  }
];

// Componente Radar SVG AMPLIADO
const RadarChart = ({ data, showPercentage = false }) => {
  const size = 800; // AUMENTADO de 600 para 800
  const center = size / 2;
  const maxRadius = 280; // AUMENTADO de 160 para 280
  const levels = 5;
  
  const calculatePoint = (angle, radius) => {
    const x = center + Math.cos(angle - Math.PI / 2) * radius;
    const y = center + Math.sin(angle - Math.PI / 2) * radius;
    return { x, y };
  };

  const angles = data.map((_, i) => (2 * Math.PI * i) / data.length);
  
  const actualPoints = data.map((value, i) => {
    const radius = (value / 100) * maxRadius;
    return calculatePoint(angles[i], radius);
  });

  const idealPoints = angles.map(angle => calculatePoint(angle, maxRadius));

  const createPath = (points) => {
    return points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ') + ' Z';
  };

  return (
    <div className="flex justify-center mb-8">
      <svg width={size} height={size} className="rounded-xl" style={{backgroundColor: '#1a2332'}}>
        {/* Grid circular */}
        {[...Array(levels)].map((_, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={(maxRadius * (i + 1)) / levels}
            fill="none"
            stroke="#666"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
        
        {/* Linhas radiais */}
        {angles.map((angle, i) => {
          const endPoint = calculatePoint(angle, maxRadius);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="#666"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}

        {/* Polígono ideal (verde) */}
        <path
          d={createPath(idealPoints)}
          fill="rgba(16, 185, 129, 0.1)"
          stroke="#10b981"
          strokeWidth="3" // AUMENTADO
        />

        {/* Polígono atual (dourado) */}
        <path
          d={createPath(actualPoints)}
          fill="rgba(210, 188, 143, 0.3)"
          stroke="#d2bc8f"
          strokeWidth="4" // AUMENTADO
        />

        {/* Pontos do resultado atual */}
        {actualPoints.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="8" // AUMENTADO de 6 para 8
            fill="#d2bc8f"
            stroke="white"
            strokeWidth="3" // AUMENTADO
          />
        ))}

        {/* Labels dos módulos com nome completo e porcentagem */}
        {MODULOS.map((modulo, i) => {
          const labelPoint = calculatePoint(angles[i], maxRadius + 120); // AUMENTADO espaçamento
          const porcentagem = showPercentage ? data[i] : '';
          
          // Quebrar o nome em linhas menores
          const palavras = modulo.nome.split(' ');
          let linha1, linha2, linha3 = '';
          
          if (palavras.length <= 2) {
            linha1 = palavras[0] || '';
            linha2 = palavras[1] || '';
          } else if (palavras.length === 3) {
            linha1 = palavras[0];
            linha2 = palavras[1];
            linha3 = palavras[2];
          } else {
            linha1 = palavras.slice(0, 2).join(' ');
            linha2 = palavras.slice(2, 4).join(' ');
            linha3 = palavras.slice(4).join(' ');
          }
          
          return (
            <g key={i}>
              <text
                x={labelPoint.x}
                y={labelPoint.y - 20} // AUMENTADO espaçamento
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="14" // AUMENTADO de 10 para 14
                fontWeight="bold"
              >
                {linha1}
              </text>
              {linha2 && (
                <text
                  x={labelPoint.x}
                  y={labelPoint.y - 5} // AUMENTADO espaçamento
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="14" // AUMENTADO
                  fontWeight="bold"
                >
                  {linha2}
                </text>
              )}
              {linha3 && (
                <text
                  x={labelPoint.x}
                  y={labelPoint.y + 10} // AUMENTADO espaçamento
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="14" // AUMENTADO
                  fontWeight="bold"
                >
                  {linha3}
                </text>
              )}
              {showPercentage && (
                <text
                  x={labelPoint.x}
                  y={labelPoint.y + (linha3 ? 30 : 20)} // AUMENTADO espaçamento
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#d2bc8f"
                  fontSize="16" // AUMENTADO de 12 para 16
                  fontWeight="bold"
                >
                  {porcentagem}%
                </text>
              )}
            </g>
          );
        })}

        {/* Legenda */}
        <g transform={`translate(30, ${size - 80})`}>
          <rect x="0" y="0" width="16" height="16" fill="#d2bc8f" />
          <text x="22" y="12" fill="white" fontSize="14" fontWeight="bold">Resultado Atual</text>
          <rect x="0" y="25" width="16" height="16" fill="#10b981" />
          <text x="22" y="37" fill="white" fontSize="14" fontWeight="bold">Resultado Ideal</text>
        </g>
      </svg>
    </div>
  );
};

export default function DiagnosticoCX() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [nomeCapturado, setNomeCapturado] = useState(false);
  const [iniciado, setIniciado] = useState(false);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [moduloAtual, setModuloAtual] = useState(0);
  const [perguntaDoModulo, setPerguntaDoModulo] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(true);
  const [finalizado, setFinalizado] = useState(false);

  const totalPerguntas = MODULOS.reduce((acc, mod) => acc + mod.perguntas.length, 0);
  const perguntaInfo = MODULOS[moduloAtual]?.perguntas[perguntaDoModulo];
  const moduloInfo = MODULOS[moduloAtual];

  const handleResposta = (valor) => {
    const novasRespostas = [...respostas, valor];
    setRespostas(novasRespostas);
    setMostrarExplicacao(false);

    setTimeout(() => {
      if (perguntaDoModulo < moduloInfo.perguntas.length - 1) {
        setPerguntaDoModulo(perguntaDoModulo + 1);
      } else if (moduloAtual < MODULOS.length - 1) {
        setModuloAtual(moduloAtual + 1);
        setPerguntaDoModulo(0);
      } else {
        setFinalizado(true);
      }
      setPerguntaAtual(perguntaAtual + 1);
      setMostrarExplicacao(true);
    }, 1500);
  };

  const calcularResultados = () => {
    const total = respostas.reduce((acc, cur) => acc + cur, 0);
    const totalPossivel = totalPerguntas * 10;
    const porcentagem = Math.round((total / totalPossivel) * 100);

    let nivel = "";
    let cor = "";
    let interpretacao = "";

    if (porcentagem <= 40) {
      nivel = "Iniciante";
      cor = "#ef4444";
      interpretacao = "Você ainda vende na tentativa. Precisa de estrutura e clareza de processo. Há muito potencial para crescimento!";
    } else if (porcentagem <= 70) {
      nivel = "Intermediário";
      cor = "#f59e0b";
      interpretacao = "Está no caminho! Já aplica o método parcialmente, mas pode ajustar pontos-chave para resultados mais consistentes.";
    } else {
      nivel = "Avançado";
      cor = "#10b981";
      interpretacao = "Está pronto(a) para escala e estrutura de alta performance com o Código da Conversão.";
    }

    return { total, totalPossivel, porcentagem, nivel, cor, interpretacao };
  };

  const calcularResultadosModulo = () => {
    return MODULOS.map((modulo, idx) => {
      const inicio = MODULOS.slice(0, idx).reduce((acc, m) => acc + m.perguntas.length, 0);
      const fim = inicio + modulo.perguntas.length;
      const respostasModulo = respostas.slice(inicio, fim);
      const pontuacao = respostasModulo.reduce((acc, r) => acc + r, 0);
      const maxPontos = modulo.perguntas.length * 10;
      const porcentagem = Math.round((pontuacao / maxPontos) * 100);
      return { pontuacao, maxPontos, porcentagem };
    });
  };

  const gerarRecomendacoesPersonalizadas = (porcentagem, resultadosModulo) => {
    if (porcentagem >= 90) {
      return {
        titulo: `Parabéns ${nomeUsuario}! Você está no Top 5% dos Vendedores!`,
        mensagem: `${nomeUsuario}, com ${porcentagem}% você já domina o básico, mas para vender TODOS OS DIAS de forma consistente e escalar para 6-7 dígitos, você precisa dos segredos que apenas 1% dos vendedores conhecem.`,
        pontosEvolucao: resultadosModulo
          .map((resultado, idx) => ({
            modulo: MODULOS[idx].nome,
            porcentagem: resultado.porcentagem,
            gap: 100 - resultado.porcentagem
          }))
          .filter(item => item.gap > 0)
          .sort((a, b) => b.gap - a.gap)
          .slice(0, 3)
          .map(item => `• **${item.modulo}**: Potencial de +${item.gap}% de otimização para resultados exponenciais`),
        cta: `${nomeUsuario}, você está pronto para o CÓDIGO DA CONVERSÃO COMPLETO. Quer descobrir os 3 segredos que separam quem vende bem de quem vende TODOS OS DIAS?`
      };
    } else if (porcentagem >= 70) {
      return {
        titulo: `${nomeUsuario}, você tem potencial, mas está perdendo vendas!`,
        mensagem: `Com ${porcentagem}%, você já vende, mas está deixando dinheiro na mesa. Os gaps identificados são exatamente o que te impedem de ter consistência diária.`,
        pontosEvolucao: resultadosModulo
          .map((resultado, idx) => ({
            modulo: MODULOS[idx].nome,
            porcentagem: resultado.porcentagem,
            gap: 100 - resultado.porcentagem
          }))
          .filter(item => item.gap > 20)
          .sort((a, b) => b.gap - a.gap)
          .map(item => `• **${item.modulo}**: ${item.gap}% de gap - isso pode estar custando até 50% das suas vendas`),
        cta: `${nomeUsuario}, quer transformar esses gaps em faturamento? Te mostro como fechar essas lacunas em semanas, não meses.`
      };
    } else {
      return {
        titulo: `${nomeUsuario}, você tem muito potencial inexplorado!`,
        mensagem: `Com ${porcentagem}%, você ainda vende na tentativa. Mas a boa notícia é que você tem margem gigante para crescimento explosivo.`,
        pontosEvolucao: [
          `• Você está perdendo pelo menos 70% das vendas por falta de método`,
          `• Seus maiores gaps estão em: ${resultadosModulo.map((r, idx) => r.porcentagem < 50 ? MODULOS[idx].nome : '').filter(n => n).slice(0,2).join(' e ')}`,
          `• Com o método certo, você pode triplicar seus resultados em 90 dias`
        ],
        cta: `${nomeUsuario}, quer sair da tentativa e entrar na certeza? Te ensino o sistema completo para vender todos os dias.`
      };
    }
  };

  const reiniciar = () => {
    setNomeUsuario('');
    setNomeCapturado(false);
    setIniciado(false);
    setPerguntaAtual(0);
    setModuloAtual(0);
    setPerguntaDoModulo(0);
    setRespostas([]);
    setMostrarExplicacao(true);
    setFinalizado(false);
  };

  // Aplicar estilo ao body
  React.useEffect(() => {
    document.body.style.backgroundColor = '#0c121c';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  // Tela de captura de nome
  if (!nomeCapturado) {
    return (
      <div className="bg-[#0c121c] text-white min-h-screen py-10 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#d2bc8f] mb-6">
            📊 Diagnóstico Personalizado
          </h1>
          <h2 className="text-2xl font-bold text-white mb-8">
            Código da Conversão Consciente
          </h2>
          
          <div className="bg-[#1a2332] rounded-xl p-8 mb-8 border border-[#d2bc8f]">
            <p className="text-xl text-white mb-6">
              Antes de começar, como posso me dirigir a você?
            </p>
            <input
              type="text"
              placeholder="Digite seu primeiro nome..."
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
              style={{
                backgroundColor: 'white',
                color: '#0c121c',
                border: '2px solid #d2bc8f',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '18px',
                textAlign: 'center',
                width: '100%',
                outline: 'none'
              }}
              className="focus:ring-2 focus:ring-[#d2bc8f]"
              onKeyPress={(e) => e.key === 'Enter' && nomeUsuario.trim() && setNomeCapturado(true)}
            />
          </div>

          <button
            onClick={() => nomeUsuario.trim() && setNomeCapturado(true)}
            disabled={!nomeUsuario.trim()}
            className="bg-[#d2bc8f] text-[#0c121c] px-12 py-4 rounded-xl font-bold text-xl hover:bg-[#e6d0a3] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }

  // Tela inicial
  if (!iniciado) {
    return (
      <div className="bg-[#0c121c] text-white min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#d2bc8f] mb-8">
            📊 Olá, {nomeUsuario}! Sessão de Diagnóstico
          </h1>
          <h2 className="text-3xl font-bold text-white mb-12">
            Código da Conversão Consciente
          </h2>
          
          <div className="bg-[#1a2332] rounded-xl p-8 mb-8 border border-[#d2bc8f]">
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <span className="bg-[#d2bc8f] text-[#0c121c] rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</span>
                <p className="text-xl text-white">
                  <strong>Atribua uma nota de 0 a 10 de acordo com nível de qualidade de cada subtópico</strong>
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="bg-[#d2bc8f] text-[#0c121c] rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</span>
                <p className="text-xl text-white">
                  <strong>A avaliação será concluída abaixo mostrando o resultado final em percentual de 0% a 100% de cada tópico principal</strong>
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="bg-[#d2bc8f] text-[#0c121c] rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</span>
                <p className="text-xl text-white">
                  <strong>Ao final haverá um panorama geral de todos os tópicos, um diagnóstico geral.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MODULOS.map((modulo, idx) => (
              <div key={idx} className="bg-[#1a2332] rounded-lg p-6" style={{border: '2px solid #d2bc8f'}}>
                <div className="w-4 h-4 rounded-full mx-auto mb-4" style={{backgroundColor: modulo.cor}}></div>
                <h3 className="font-bold text-[#d2bc8f] mb-3 text-lg">{modulo.nome}</h3>
                <p className="text-white text-sm">{modulo.explicacao}</p>
                <div className="mt-4 text-[#d2bc8f] font-semibold">
                  {modulo.perguntas.length} perguntas
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIniciado(true)}
            className="bg-[#d2bc8f] text-[#0c121c] px-12 py-4 rounded-xl font-bold text-xl hover:bg-[#e6d0a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Iniciar Diagnóstico
          </button>
        </div>
      </div>
    );
  }

  // Tela de resultado
  if (finalizado) {
    const resultado = calcularResultados();
    const resultadosModulo = calcularResultadosModulo();
    const dadosRadar = resultadosModulo.map(r => r.porcentagem);
    const recomendacoes = gerarRecomendacoesPersonalizadas(resultado.porcentagem, resultadosModulo);

    return (
      <div className="bg-[#0c121c] text-white min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#d2bc8f] mb-4">
              🎯 Resultado do Diagnóstico CX
            </h1>
            <div className="bg-[#1a2332] rounded-xl p-8 border-2 border-[#d2bc8f]">
              <div className="text-6xl font-bold mb-4" style={{color: resultado.cor}}>
                {resultado.porcentagem}%
              </div>
              <div className="text-2xl font-semibold mb-2" style={{color: resultado.cor}}>
                Nível: {resultado.nivel}
              </div>
              <div className="text-lg text-white mb-4">
                {resultado.total} de {resultado.totalPossivel} pontos
              </div>
              <p className="text-xl text-white leading-relaxed">
                {resultado.interpretacao}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#d2bc8f] text-center mb-8">
              📊 Diagnóstico empresa atual vs empresa ideal de conversão
            </h2>
            <RadarChart data={dadosRadar} showPercentage={true} />
          </div>

          {/* Recomendações Personalizadas */}
          <div className="bg-[#1a2332] rounded-xl p-8 mb-8 border border-[#d2bc8f]">
            <h2 className="text-2xl font-bold text-[#d2bc8f] mb-4">
              {recomendacoes.titulo}
            </h2>
            <p className="text-xl text-white mb-6 leading-relaxed">
              {recomendacoes.mensagem}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#d2bc8f] mb-3">
                📈 Pontos de Evolução Identificados:
              </h3>
              <div className="space-y-2">
                {recomendacoes.pontosEvolucao.map((ponto, idx) => (
                  <p key={idx} className="text-white" dangerouslySetInnerHTML={{__html: ponto}} />
                ))}
              </div>
            </div>

            <div className="bg-[#0c121c] rounded-lg p-6 border border-[#d2bc8f]">
              <p className="text-xl text-white font-semibold text-center mb-4">
                {recomendacoes.cta}
              </p>
              <div className="text-center">
                <button className="bg-[#d2bc8f] text-[#0c121c] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e6d0a3] transition-colors mr-4">
                  🚀 Quero Conhecer o Método Completo
                </button>
                <button
                  onClick={reiniciar}
                  className="bg-gray-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Refazer Diagnóstico
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {MODULOS.map((modulo, idx) => {
              const resultadoModulo = resultadosModulo[idx];
              return (
                <div key={idx} className="bg-[#1a2332] rounded-lg p-6 border-l-4" style={{borderLeftColor: modulo.cor}}>
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 rounded-full mr-3" style={{backgroundColor: modulo.cor}}></div>
                    <h3 className="font-semibold text-[#d2bc8f] text-sm">{modulo.nome}</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{color: modulo.cor}}>
                    {resultadoModulo.porcentagem}%
                  </div>
                  <div className="text-sm text-white">
                    {resultadoModulo.pontuacao}/{resultadoModulo.maxPontos} pontos
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Tela das perguntas
  const progresso = (perguntaAtual / totalPerguntas) * 100;

  return (
    <div className="bg-[#0c121c] text-white min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#d2bc8f] mb-4">
            📊 Diagnóstico CX – Código da Conversão
          </h1>
          <div className="bg-[#1a2332] rounded-full h-3 mb-4">
            <div 
              className="bg-[#d2bc8f] h-3 rounded-full transition-all duration-500"
              style={{width: `${progresso}%`}}
            ></div>
          </div>
          <p className="text-white">
            Pergunta {perguntaAtual + 1} de {totalPerguntas}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div 
              className="w-4 h-4 rounded-full mr-3"
              style={{backgroundColor: moduloInfo.cor}}
            ></div>
            <h2 className="text-xl font-semibold text-[#d2bc8f]">
              {moduloInfo.nome}
            </h2>
          </div>
          <p className="text-white mb-6">{moduloInfo.explicacao}</p>
        </div>

        <div className="bg-[#1a2332] rounded-xl p-8 mb-6" style={{border: '2px solid #d2bc8f'}}>
          <h3 className="text-2xl font-semibold mb-6 text-white leading-relaxed">
            {perguntaInfo.pergunta}
          </h3>

          {mostrarExplicacao && (
            <div className="bg-[#0c121c] rounded-lg p-4 mb-6 border border-[#d2bc8f]">
              <p className="text-white mb-3">
                <strong className="text-[#d2bc8f]">Por que esta pergunta é importante:</strong><br/>
                {perguntaInfo.explicacao}
              </p>
              <p className="text-white italic">
                💡 {perguntaInfo.dica}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <p className="text-white mb-4">Avalie de 0 (nunca) a 10 (sempre):</p>
            <div className="grid grid-cols-11 gap-2">
              {[...Array(11)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleResposta(i)}
                  className="hover:bg-[#d2bc8f] hover:text-[#0c121c] text-white py-3 px-2 rounded-lg font-semibold transition-all duration-200 text-sm"
                  style={{
                    backgroundColor: '#1a2332',
                    border: '2px solid #d2bc8f',
                    color: '#0c121c'
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Nunca</span>
              <span>Sempre</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
