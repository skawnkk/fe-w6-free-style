const questions = [
  // first part question
  `나는  ___________ 사귀는 편이다.`,
  `계발활동을 갈 때 ___________.`,
  `처음 보는 친구들을 만나면 ___________말한다.`,
  `나의 생각이나 느낌을 ___________ 편이다.`,
  `나는 ___________ 놀이가 좋다.`,
  `나는 ___________ 이야기하길 좋아한다.`,
  `___________ 공부하면 더 잘된다.`,
  `나는 나의 생각과 느낌을 ___________ 편하다.`,
  `주위 사람들은 내가 ___________ 말한다.`,
  // second part question
  `나는 친구들에게 ___________에 대해 얘기하는 것을 좋아한다.`,
  `나는 ___________을/를 좋아한다.`,
  `어려운 일에 부딪히면 ___________.`,
  `나는 무엇을 할 때 ___________.`,
  `나는 ___________를 좋아한다.`,
  `나는 ___________이 중요하다고 생각한다.`,
  `나는 ___________대로 하는 편이다.`,
  `나는 ___________.`,
  `나는 ___________는 얘기를 많이 듣는 편이다.`,
  // third part question
  `나는 ___________이 가장 나쁘다고 생각한다.`,
  `나는 ___________ 사람으로 인정받고 싶다.`,
  `우리 편이 지면 ___________.`,
  `친구의 잘못된 점을 ___________.`,
  `나는 ___________ 사람이 되고싶다.`,
  `달리기에서 이기면 ___________.`,
  `나는 ___________으로 인정받고 싶다.`,
  `도둑질을 하는 사람은 ___________고 생각한다.`,
  `벌금을 받을 때에는 ___________받아야 한다.`,
  // last part question
  `나는 ___________.`,
  `나는 ___________ 선생님이 좋다.`,
  `나는 ___________ 방이 좋다.`,
  `나는 ___________를 좋아한다.`,
  `자전거를 탈 때 ___________.`,
  `나는 일기장이나 과제물을 ___________.`,
  `나는 ___________ 선생님이 좋다.`,
  `게임의 규칙은 ___________.`,
  `나는 일을 ___________ 편이다.`,
];

const answers = [
  // first part
  { one: "여러 친구들과 많이", two: "몇 명의 친구와 깊이" },
  { one: "새로운 친구들을 만나는 것이 신난다.", two: "처음 보는 친구들과 앞으로 어떻게 지낼까 걱정이다." },
  { one: "내가 먼저", two: "다른 친구가 나에게" },
  { one: "다른 사람에게 이야기하는", two: "내 마음 속에 간직하는" },
  { one: "친구들과 함께 하는", two: "나 혼자 재미있게 하는" },
  { one: "많은 친구들에게", two: "친한 친구들에게" },
  { one: "친구들과 함께", two: "나 혼자" },
  { one: "말로 표현하는 것이", two: "글로 표현하는 것이" },
  { one: "활발하다고", two: "얌전하다고" },
  // second part
  { one: "내가 직접 보고 들은 것", two: "내가 상상한 것" },
  { one: "실제로 있었던 사람이나 사실에 대한 책", two: "상상으로 지어낸 이야기" },
  { one: "하던 일을 잘 못한다.", two: "도전하고 싶은 마음이 생긴다." },
  { one: "배웠던 대로 하는 것이 편하다.", two: "새로운 방법을 생각해서 해볼 때 더 재미있다." },
  { one: "그려진 그림에 색칠하기", two: "이야기 지어내기" },
  { one: "현재에 최선을 다하는 것", two: "미래에 대한 꿈을 갖는 것" },
  { one: "선생님이 가르쳐주신 방법", two: "나 스스로 만든 나만의 방법" },
  { one: "좋아하는 책은 읽은 것이라도 또 읽는다.", two: "새로운 다른 책을 읽는 것이 좋다." },
  { one: "부지런하고 성실하다", two: "기발하고 엉뚱하다" },
  // third part
  { one: "불공평한 것", two: "다른 사람의 마음에 상처를 주는 것" },
  { one: "공부 잘하는/실력있는", two: "사람들 사이에서 인기가 좋은" },
  { one: "다음번에는 이기도록 계획을 짠다.", two: "'다음에 이기면 되지'하면서 친구들의 기분을 좋게 해준다." },
  { one: "지적해주는 편이다.", two: "지적하면 친구가 어떻게 생각할까 걱정돼서 말하지 않는 편이다." },
  { one: "공평한", two: "친절한" },
  { one: "기분이 아주 좋다.", two: "기분은 좋지만 진 사람은 기분이 어떨까 생각한다." },
  { one: "똑똑한 사람", two: "따뜻한 사람" },
  { one: "벌을 받아야 한다", two: "도둑질을 하지 않도록 도움을 받아야 한다" },
  { one: "규칙대로 정확하게", two: "상황에 따라 그 사람의 사정을 고려해서" },
  // last part
  { one: "내가 해야할 일을 먼저 하고 논다.", two: "내가 할 수 있는 일이면 먼저 놀고 난 후 해도 괜찮다." },
  { one: "수업 계획에 따라 차근차근 가르쳐 주시는", two: "그때그때마다 우리가 좋아하는 것에 맞춰 바꿔 가르치시는" },
  { one: "정리정돈 된 깨끗한", two: "내 마음대로 흩어놓을 수 있는" },
  { one: "하기 쉽게 잘 짜여진 숙제", two: "새로운 방법으로 하는 숙제" },
  { one: "어디로 갈 지 미리 생각하고 탄다.", two: "그냥 달리고 나서 어디로 갈지 생각한다." },
  { one: "잘 챙기는 편이다.", two: "잘 잊어먹는 편이다." },
  { one: "무엇을 공부해야할지 가르쳐 주시는", two: "우리가 스스로 공부할 것을 선택하도록 맡기시는" },
  { one: "절대로 바뀌어서는 안된다.", two: "경우에 따라 바뀔 수 있다." },
  { one: "계획적으로 해내는", two: "그때그때 해내는" },
];

const breakMsg = {
  E: "오호, 외향적인 듯한 느낌이 나는군요! 계속해서 가보실까요?",
  I: "오호, 내향적인 듯한 느낌이 나는군요! 계속해서 가보실까요?",
  S: "이상적이기보다는 현실주의자에 가까운 것 같은데요? 계속해서 가보실까요?",
  N: "현실적이기보다는 이상주의자에 가까운 것 같은데요? 계속해서 가보실까요?",
  T: "논리적이고 객관적이신 분 같군요! 계속해서 가보실까요?",
  F: "공감적으로 감정 표현에 적극적이신 분 같군요! 계속해서 가보실까요?",
  J: "여기까지 하시느라 고생하셨습니다! 이제 결과를 알려드릴게요!",
  P: "여기까지 하시느라 고생하셨습니다! 이제 결과를 알려드릴게요!",
};

const blockIds = [
  "604df51fb908ae1e731f0141", // 1_1
  "604df546048a962ecd896158", // 1_2
  "604e200917144a1360f34241", // 1_3
  "604e201048341a06c552a9a1", // 1_4
  "604e201b17144a1360f34243", // 1_5
  "604e2023495587217fcfcbce", // 1_6
  "604e202d57027e150c33fd07", // 1_7
  "604e20354c78c32f12f5fede", // 1_8
  "604e20411690bb7bf77a7d5b", // 1_9

  "604eee761690bb7bf77a80f8", // 2_1
  "604eee7e48341a06c552ad6f", // 2_2
  "604eee86a8cb07012a49c631", // 2_3
  "604eee90b908ae1e731f04f4", // 2_4
  "604eee98b0303517b58bd32f", // 2_5
  "604eeea0048a962ecd8964b9", // 2_6
  "604eeea8495587217fcfcf5c", // 2_7
  "604eeeb0a8cb07012a49c63a", // 2_8
  "604eeeb71690bb7bf77a8101", // 2_9

  "604f0199b908ae1e731f05e2", // 3_1
  "604f01a9b0303517b58bd453", // 3_2
  "604f01b2b0303517b58bd455", // 3_3
  "604f01b8495587217fcfd078", // 3_4
  "604f01c2a8cb07012a49c761", // 3_5
  "604f01cf57027e150c340192", // 3_6
  "604f01da48341a06c552aed5", // 3_7
  "604f01e2a8cb07012a49c763", // 3_8
  "604f01e84c78c32f12f60314", // 3_9

  "604f026c17144a1360f34766", // 4_1
  "604f0276048a962ecd8965d8", // 4_2
  "604f027d048a962ecd8965db", // 4_3
  "604f0286b0303517b58bd45b", // 4_4
  "604f028f48341a06c552aed9", // 4_5
  "604f0299a8cb07012a49c76e", // 4_6
  "604f02a117144a1360f3476a", // 4_7
  "604f02aab908ae1e731f05e7", // 4_8
  "604f02b4495587217fcfd07d", // 4_9

  "604f0e5f48341a06c552af6e", // result
];

module.exports = { questions, answers, breakMsg, blockIds };