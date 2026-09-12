// 文章資料:每篇文章包含正文、精選生字與三種測驗題目
// level: "elementary" (國小中高年級) | "middle" (國中)
// topic: "music" | "nature" | "tech" | "sports"
const ARTICLES = [
  {
    id: "music-elem-1",
    title: "Sing and Learn: Music Around the World",
    level: "elementary",
    topic: "music",
    estMinutes: 3,
    body: [
      "Music is everywhere in our lives. People listen to music on the radio, in cars, and at home. Every country has its own special songs. In Taiwan, many students enjoy pop songs and also traditional music.",
      "Did you know that music can help you learn English? When you listen to an English song, you hear new words again and again. Your ears get used to the sound of the language. Many teachers say that singing is a fun way to practice pronunciation.",
      "Musicians travel around the world to perform for their fans. A concert is an exciting event where people sing and dance together. Next time you hear an English song, try to listen carefully and enjoy the rhythm and the melody."
    ],
    vocabulary: [
      { word: "music", pos: "n.", zh: "音樂", example: "I love listening to music every day.", exampleZh: "我每天都喜歡聽音樂。" },
      { word: "song", pos: "n.", zh: "歌曲", example: "She sang a beautiful song.", exampleZh: "她唱了一首美麗的歌。" },
      { word: "listen", pos: "v.", zh: "聆聽;聽", example: "Please listen to the teacher.", exampleZh: "請聽老師說話。" },
      { word: "radio", pos: "n.", zh: "收音機;廣播", example: "We heard the news on the radio.", exampleZh: "我們從收音機聽到這則新聞。" },
      { word: "traditional", pos: "adj.", zh: "傳統的", example: "They wore traditional clothes.", exampleZh: "他們穿著傳統服飾。" },
      { word: "pronunciation", pos: "n.", zh: "發音", example: "Her English pronunciation is very clear.", exampleZh: "她的英文發音非常清楚。" },
      { word: "musician", pos: "n.", zh: "音樂家", example: "The musician played the piano beautifully.", exampleZh: "那位音樂家彈鋼琴彈得很美。" },
      { word: "concert", pos: "n.", zh: "演唱會;音樂會", example: "We went to a concert last night.", exampleZh: "我們昨晚去看了一場演唱會。" },
      { word: "rhythm", pos: "n.", zh: "節奏", example: "The song has a fast rhythm.", exampleZh: "這首歌節奏很快。" },
      { word: "melody", pos: "n.", zh: "旋律", example: "I love the melody of this song.", exampleZh: "我喜歡這首歌的旋律。" }
    ],
    extraVocabulary: [
      { word: "everywhere", pos: "adv.", zh: "到處;每個地方", example: "Music is everywhere.", exampleZh: "音樂無所不在。" },
      { word: "special", pos: "adj.", zh: "特別的", example: "This is a special song.", exampleZh: "這是一首特別的歌。" },
      { word: "enjoy", pos: "v.", zh: "享受;喜歡", example: "I enjoy listening to music.", exampleZh: "我喜歡聽音樂。" },
      { word: "sound", pos: "n.", zh: "聲音", example: "I love the sound of the guitar.", exampleZh: "我喜歡吉他的聲音。" },
      { word: "language", pos: "n.", zh: "語言", example: "English is an international language.", exampleZh: "英文是一種國際語言。" },
      { word: "practice", pos: "n./v.", zh: "練習", example: "Practice makes perfect.", exampleZh: "熟能生巧。" },
      { word: "exciting", pos: "adj.", zh: "令人興奮的", example: "The concert was exciting.", exampleZh: "這場演唱會令人興奮。" },
      { word: "perform", pos: "v.", zh: "表演", example: "She will perform on stage.", exampleZh: "她將要在台上表演。" }
    ],
    quiz: [
      { type: "reading", question: "What does the article say music can help you learn?", options: ["Math", "English pronunciation", "Cooking", "Swimming"], answerIndex: 1 },
      { type: "reading", question: "What happens when you listen to an English song again and again?", options: ["You forget the words", "Your ears get used to the sound of the language", "You stop liking music", "You learn to dance"], answerIndex: 1 },
      { type: "reading", question: "What is a concert described as in the article?", options: ["A place to sleep", "An exciting event where people sing and dance together", "A type of food", "A math class"], answerIndex: 1 },
      { type: "reading", question: "What do many students in Taiwan enjoy, according to the article?", options: ["Only traditional music", "Pop songs and traditional music", "No music at all", "Only radio news"], answerIndex: 1 },
      { type: "vocab", question: "What does \"melody\" mean?", options: ["節奏", "旋律", "音樂家", "演唱會"], answerIndex: 1 },
      { type: "vocab", question: "Choose the correct Chinese meaning of \"pronunciation\".", options: ["傳統的", "收音機", "發音", "聆聽"], answerIndex: 2 },
      { type: "vocab", question: "\"Musician\" means:", options: ["音樂家", "歌曲", "音樂", "節奏"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 演唱會 (a live music event)?", options: ["radio", "rhythm", "concert", "traditional"], answerIndex: 2 },
      { type: "listening", listenText: "The concert starts at seven o'clock in the evening.", question: "What time does the concert start?", options: ["5 o'clock", "6 o'clock", "7 o'clock", "8 o'clock"], answerIndex: 2 },
      { type: "listening", listenText: "My favorite musician plays the guitar and sings very well.", question: "What instrument does the musician play?", options: ["Piano", "Guitar", "Drums", "Violin"], answerIndex: 1 },
      { type: "listening", listenText: "This traditional song has a slow and gentle rhythm.", question: "What kind of rhythm does the song have?", options: ["Fast and loud", "Slow and gentle", "Silent", "Very high"], answerIndex: 1 },
      { type: "listening", listenText: "Please turn on the radio so we can listen to the news.", question: "What does the speaker want to turn on?", options: ["The television", "The radio", "The light", "The computer"], answerIndex: 1 }
    ]
  },
  {
    id: "music-middle-1",
    title: "The Power of Pop Music Around the World",
    level: "middle",
    topic: "music",
    estMinutes: 4,
    body: [
      "Pop music has become a global language. Thanks to streaming platforms, people can listen to songs from other countries in seconds. A song that is popular in South Korea today might become popular in Brazil tomorrow.",
      "Music connects people from very different cultures. When fans do not speak the same language as the singer, they still enjoy the melody and try to translate the words to understand the meaning. Some fans even learn a new language just because they love a certain artist.",
      "Streaming platforms track how many times a song is played by a huge audience. If a song is played millions of times, it can reach the top of the music chart. This shows that a song's popularity is no longer limited by country or language.",
      "Many singers collaborate with artists from other countries to inspire new fans around the world. This kind of teamwork often creates exciting new sounds that mix different musical traditions together."
    ],
    vocabulary: [
      { word: "global", pos: "adj.", zh: "全球的", example: "The company has a global business.", exampleZh: "這家公司有全球性的業務。" },
      { word: "popular", pos: "adj.", zh: "受歡迎的", example: "This singer is very popular in Asia.", exampleZh: "這位歌手在亞洲非常受歡迎。" },
      { word: "streaming", pos: "n./adj.", zh: "串流(的)", example: "We watch movies on a streaming service.", exampleZh: "我們透過串流服務看電影。" },
      { word: "platform", pos: "n.", zh: "平台", example: "This app is a video platform.", exampleZh: "這個應用程式是一個影音平台。" },
      { word: "audience", pos: "n.", zh: "觀眾;聽眾", example: "The audience clapped loudly after the song.", exampleZh: "觀眾在歌曲結束後大聲鼓掌。" },
      { word: "culture", pos: "n.", zh: "文化", example: "Learning a language helps you understand another culture.", exampleZh: "學習語言有助於了解另一種文化。" },
      { word: "translate", pos: "v.", zh: "翻譯", example: "Can you translate this sentence for me?", exampleZh: "你可以幫我翻譯這句話嗎?" },
      { word: "chart", pos: "n.", zh: "(音樂)排行榜", example: "The song reached number one on the chart.", exampleZh: "這首歌登上排行榜第一名。" },
      { word: "collaborate", pos: "v.", zh: "合作", example: "The two singers collaborate on a new song.", exampleZh: "這兩位歌手合作創作新歌。" },
      { word: "inspire", pos: "v.", zh: "啟發;激勵", example: "Her music inspires many young singers.", exampleZh: "她的音樂啟發了許多年輕歌手。" }
    ],
    extraVocabulary: [
      { word: "connect", pos: "v.", zh: "連結;連接", example: "Music connects people from different places.", exampleZh: "音樂連結來自不同地方的人們。" },
      { word: "meaning", pos: "n.", zh: "意義;意思", example: "She tried to understand the meaning of the song.", exampleZh: "她試著理解這首歌的意義。" },
      { word: "artist", pos: "n.", zh: "藝人;藝術家", example: "This artist has many fans.", exampleZh: "這位藝人有很多粉絲。" },
      { word: "huge", pos: "adj.", zh: "巨大的", example: "The song has a huge audience.", exampleZh: "這首歌擁有龐大的聽眾群。" },
      { word: "mix", pos: "v.", zh: "混合", example: "The song mixes two different styles of music.", exampleZh: "這首歌混合了兩種不同的音樂風格。" }
    ],
    quiz: [
      { type: "reading", question: "According to the article, what has pop music become?", options: ["A local language", "A global language", "A secret code", "A school subject"], answerIndex: 1 },
      { type: "reading", question: "What can happen to a song that is popular in South Korea, according to the article?", options: ["It stays only in South Korea", "It might become popular in Brazil too", "It disappears quickly", "It is banned in other countries"], answerIndex: 1 },
      { type: "reading", question: "Why do some fans learn a new language, based on the article?", options: ["Because school requires it", "Because they love a certain artist", "Because it is easy", "Because their parents ask them to"], answerIndex: 1 },
      { type: "reading", question: "What do streaming platforms track, according to the article?", options: ["How many times a song is played", "The singer's age", "The color of the album cover", "The length of the concert"], answerIndex: 0 },
      { type: "vocab", question: "\"Collaborate\" means:", options: ["翻譯", "合作", "啟發", "平台"], answerIndex: 1 },
      { type: "vocab", question: "Choose the meaning of \"audience\".", options: ["觀眾", "文化", "排行榜", "全球的"], answerIndex: 0 },
      { type: "vocab", question: "\"Chart\" (in music) means:", options: ["平台", "排行榜", "觀眾", "翻譯"], answerIndex: 1 },
      { type: "vocab", question: "Which word means 啟發;激勵?", options: ["inspire", "translate", "global", "popular"], answerIndex: 0 },
      { type: "listening", listenText: "This singer's new song became very popular last month.", question: "What happened to the singer's new song?", options: ["It became very popular", "It was cancelled", "It became very sad", "Nobody listened to it"], answerIndex: 0 },
      { type: "listening", listenText: "Millions of people around the world watched the online concert.", question: "How many people watched the online concert?", options: ["Ten", "A hundred", "Millions", "Nobody"], answerIndex: 2 },
      { type: "listening", listenText: "The two artists decided to collaborate on a brand new song.", question: "What did the two artists decide to do?", options: ["Stop making music", "Collaborate on a new song", "Move to another country", "Sell their instruments"], answerIndex: 1 },
      { type: "listening", listenText: "Please translate this sentence into Chinese for your homework.", question: "What is the listener asked to do?", options: ["Sing a song", "Translate a sentence", "Play an instrument", "Watch a movie"], answerIndex: 1 }
    ]
  },
  {
    id: "nature-elem-1",
    title: "Amazing Animal Superpowers",
    level: "elementary",
    topic: "nature",
    estMinutes: 3,
    body: [
      "Animals have many amazing abilities that humans do not have. Some animals are super strong, and some are super fast. These special skills help them survive in the wild.",
      "A dog has excellent hearing and a strong sense of smell. It can hear sounds from far away and smell things that people cannot smell at all. An owl can turn its head and see in the dark.",
      "Many animals use camouflage to hide from a predator. A chameleon can change its skin color to match its habitat. This helps it stay safe and protect itself from danger.",
      "Every animal's home, or habitat, gives it what it needs to live. When we protect nature, we also protect all these amazing animals and their homes."
    ],
    vocabulary: [
      { word: "strong", pos: "adj.", zh: "強壯的", example: "The elephant is a very strong animal.", exampleZh: "大象是非常強壯的動物。" },
      { word: "fast", pos: "adj.", zh: "快速的", example: "A cheetah can run very fast.", exampleZh: "獵豹可以跑得非常快。" },
      { word: "hearing", pos: "n.", zh: "聽力", example: "Dogs have great hearing.", exampleZh: "狗有很好的聽力。" },
      { word: "smell", pos: "n./v.", zh: "嗅覺;聞", example: "Sharks have a strong sense of smell.", exampleZh: "鯊魚有很強的嗅覺。" },
      { word: "camouflage", pos: "n.", zh: "偽裝;保護色", example: "The insect uses camouflage to hide.", exampleZh: "這隻昆蟲利用保護色隱藏自己。" },
      { word: "survive", pos: "v.", zh: "生存", example: "Animals need food and water to survive.", exampleZh: "動物需要食物和水才能生存。" },
      { word: "habitat", pos: "n.", zh: "棲息地", example: "The forest is the tiger's habitat.", exampleZh: "森林是老虎的棲息地。" },
      { word: "predator", pos: "n.", zh: "掠食者", example: "A lion is a powerful predator.", exampleZh: "獅子是強大的掠食者。" },
      { word: "protect", pos: "v.", zh: "保護", example: "We should protect wild animals.", exampleZh: "我們應該保護野生動物。" },
      { word: "amazing", pos: "adj.", zh: "令人驚奇的", example: "It is amazing how birds can fly.", exampleZh: "鳥類能飛真是令人驚奇。" }
    ],
    extraVocabulary: [
      { word: "ability", pos: "n.", zh: "能力", example: "Every animal has a special ability.", exampleZh: "每種動物都有一種特殊能力。" },
      { word: "skill", pos: "n.", zh: "技能", example: "This skill helps the animal survive.", exampleZh: "這項技能能幫助動物生存。" },
      { word: "wild", pos: "n./adj.", zh: "野外;野生的", example: "Lions live in the wild.", exampleZh: "獅子生活在野外。" },
      { word: "dark", pos: "n./adj.", zh: "黑暗", example: "Owls can see in the dark.", exampleZh: "貓頭鷹可以在黑暗中看見東西。" },
      { word: "hide", pos: "v.", zh: "躲藏", example: "The rabbit likes to hide in the grass.", exampleZh: "兔子喜歡躲在草叢裡。" },
      { word: "danger", pos: "n.", zh: "危險", example: "The animal stayed away from danger.", exampleZh: "這隻動物遠離危險。" },
      { word: "safe", pos: "adj.", zh: "安全的", example: "It is important to stay safe.", exampleZh: "保持安全很重要。" }
    ],
    quiz: [
      { type: "reading", question: "What helps animals survive in the wild, according to the article?", options: ["Their special skills", "Their favorite food", "Their names", "Their colors only"], answerIndex: 0 },
      { type: "reading", question: "What can an owl do, based on the article?", options: ["Run very fast", "Turn its head and see in the dark", "Change its skin color", "Fly to space"], answerIndex: 1 },
      { type: "reading", question: "How does a chameleon protect itself?", options: ["By running away quickly", "By making loud sounds", "By changing its skin color to match its habitat", "By hiding underwater"], answerIndex: 2 },
      { type: "reading", question: "What does the article say a habitat gives an animal?", options: ["Toys to play with", "What it needs to live", "A school to attend", "Money"], answerIndex: 1 },
      { type: "vocab", question: "\"Predator\" means:", options: ["棲息地", "掠食者", "生存", "強壯的"], answerIndex: 1 },
      { type: "vocab", question: "Choose the meaning of \"camouflage\".", options: ["偽裝;保護色", "聽力", "快速的", "保護"], answerIndex: 0 },
      { type: "vocab", question: "\"Survive\" means:", options: ["保護", "生存", "嗅覺", "令人驚奇的"], answerIndex: 1 },
      { type: "vocab", question: "Which word means 棲息地?", options: ["predator", "habitat", "hearing", "protect"], answerIndex: 1 },
      { type: "listening", listenText: "The rabbit ran away quickly when it saw the fox.", question: "What did the rabbit do when it saw the fox?", options: ["It ran away quickly", "It fell asleep", "It made a loud sound", "It changed color"], answerIndex: 0 },
      { type: "listening", listenText: "Elephants are very strong and can carry heavy things.", question: "What is true about elephants?", options: ["They are very small", "They are very strong", "They cannot walk", "They live in water"], answerIndex: 1 },
      { type: "listening", listenText: "This insect changes its color to hide from birds.", question: "Why does the insect change its color?", options: ["To look pretty", "To hide from birds", "To find food", "To sleep better"], answerIndex: 1 },
      { type: "listening", listenText: "Bears need a safe habitat with enough food to survive.", question: "What do bears need to survive?", options: ["A safe habitat and enough food", "A big city", "A lot of toys", "Loud music"], answerIndex: 0 }
    ]
  },
  {
    id: "nature-elem-2",
    title: "A Day in the Rainforest",
    level: "elementary",
    topic: "nature",
    estMinutes: 3,
    body: [
      "The rainforest is one of the most exciting places on Earth. It is hot and humid, and green leaves cover almost everything you see.",
      "If you explore the rainforest, you might see a monkey jumping between trees or hear the sound of colorful birds. Many kinds of insects live under the leaves and in the soil.",
      "Scientists love to visit the rainforest because they can discover new kinds of wildlife. Every year, they find new plants and animals that no one has ever seen before.",
      "The rainforest is full of surprises. From tiny insects to big monkey families, this amazing place is home to more wildlife than almost anywhere else on Earth."
    ],
    vocabulary: [
      { word: "rainforest", pos: "n.", zh: "雨林", example: "The Amazon rainforest is very large.", exampleZh: "亞馬遜雨林非常廣大。" },
      { word: "humid", pos: "adj.", zh: "潮濕悶熱的", example: "The weather here is hot and humid.", exampleZh: "這裡的天氣又熱又潮濕。" },
      { word: "leaf", pos: "n.", zh: "葉子", example: "A big green leaf fell on the ground.", exampleZh: "一片大大的綠葉掉在地上。" },
      { word: "explore", pos: "v.", zh: "探索", example: "We love to explore new places.", exampleZh: "我們喜歡探索新的地方。" },
      { word: "monkey", pos: "n.", zh: "猴子", example: "A monkey jumped from tree to tree.", exampleZh: "一隻猴子從一棵樹跳到另一棵樹。" },
      { word: "colorful", pos: "adj.", zh: "色彩繽紛的", example: "The bird has colorful feathers.", exampleZh: "這隻鳥有色彩繽紛的羽毛。" },
      { word: "insect", pos: "n.", zh: "昆蟲", example: "An insect is crawling on the leaf.", exampleZh: "一隻昆蟲正在葉子上爬行。" },
      { word: "discover", pos: "v.", zh: "發現", example: "Scientists discover new animals every year.", exampleZh: "科學家每年都會發現新的動物。" },
      { word: "wildlife", pos: "n.", zh: "野生動物", example: "The rainforest has amazing wildlife.", exampleZh: "雨林裡有令人驚奇的野生動物。" },
      { word: "surprise", pos: "n.", zh: "驚喜;意外", example: "It was a nice surprise to see a monkey.", exampleZh: "看到猴子真是個驚喜。" }
    ],
    extraVocabulary: [
      { word: "place", pos: "n.", zh: "地方", example: "The rainforest is an exciting place.", exampleZh: "雨林是一個令人興奮的地方。" },
      { word: "cover", pos: "v.", zh: "覆蓋", example: "Leaves cover the ground.", exampleZh: "樹葉覆蓋著地面。" },
      { word: "jump", pos: "v.", zh: "跳躍", example: "The monkey can jump very far.", exampleZh: "猴子可以跳得很遠。" },
      { word: "tree", pos: "n.", zh: "樹", example: "There are many trees in the forest.", exampleZh: "森林裡有很多樹。" },
      { word: "scientist", pos: "n.", zh: "科學家", example: "A scientist studies nature.", exampleZh: "科學家研究大自然。" },
      { word: "plant", pos: "n.", zh: "植物", example: "This plant only grows in the rainforest.", exampleZh: "這種植物只生長在雨林裡。" }
    ],
    quiz: [
      { type: "reading", question: "What is the weather like in the rainforest, according to the article?", options: ["Cold and dry", "Hot and humid", "Snowy", "Windy and cold"], answerIndex: 1 },
      { type: "reading", question: "What might you see if you explore the rainforest?", options: ["A monkey jumping between trees", "A polar bear swimming", "A desert with sand", "Snow falling"], answerIndex: 0 },
      { type: "reading", question: "Why do scientists love to visit the rainforest?", options: ["To buy souvenirs", "To discover new kinds of wildlife", "To build houses", "To watch movies"], answerIndex: 1 },
      { type: "reading", question: "According to the article, what covers almost everything in the rainforest?", options: ["Sand", "Green leaves", "Ice", "Rocks"], answerIndex: 1 },
      { type: "vocab", question: "\"Wildlife\" means:", options: ["野生動物", "潮濕悶熱的", "探索", "驚喜"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"discover\".", options: ["發現", "昆蟲", "色彩繽紛的", "葉子"], answerIndex: 0 },
      { type: "vocab", question: "\"Humid\" means:", options: ["猴子", "潮濕悶熱的", "雨林", "昆蟲"], answerIndex: 1 },
      { type: "vocab", question: "Which word means 色彩繽紛的?", options: ["colorful", "insect", "surprise", "leaf"], answerIndex: 0 },
      { type: "listening", listenText: "We saw a monkey eating fruit under a big green leaf.", question: "What was the monkey doing?", options: ["Sleeping", "Eating fruit", "Swimming", "Singing"], answerIndex: 1 },
      { type: "listening", listenText: "Scientists discovered a new colorful insect in the rainforest last year.", question: "What did scientists discover?", options: ["A new colorful insect", "A new mountain", "A new river", "A new city"], answerIndex: 0 },
      { type: "listening", listenText: "The weather in the rainforest is always hot and humid.", question: "What is the weather like in the rainforest?", options: ["Cold and dry", "Hot and humid", "Snowy", "Windy"], answerIndex: 1 },
      { type: "listening", listenText: "It was a wonderful surprise to see so much wildlife in one day.", question: "What was a wonderful surprise?", options: ["Seeing so much wildlife", "Losing a map", "Getting lost", "Eating lunch"], answerIndex: 0 }
    ]
  },
  {
    id: "nature-middle-1",
    title: "Saving the Coral Reefs",
    level: "middle",
    topic: "nature",
    estMinutes: 4,
    body: [
      "Coral reefs are sometimes called the rainforests of the ocean. They cover a small part of the sea floor, but they support an incredible number of species. In fact, about a quarter of all ocean life depends on coral reefs for food and shelter.",
      "Unfortunately, coral reefs around the world are in danger. Rising ocean temperature caused by climate change can lead to a process called coral bleaching, where corals lose their bright colors and slowly die. Pollution from cities and farms also threatens this fragile ecosystem.",
      "Scientists and volunteers are working hard to restore damaged reefs. They grow new coral in special underwater nurseries and then move it back to the reef. This slow but important work gives coral reefs a chance to recover.",
      "Everyone can help protect coral reefs, even people who live far from the ocean. Using less plastic, saving energy, and learning about climate change are simple ways students can make a difference."
    ],
    vocabulary: [
      { word: "ocean", pos: "n.", zh: "海洋", example: "The ocean covers most of the Earth.", exampleZh: "海洋覆蓋了地球的大部分面積。" },
      { word: "reef", pos: "n.", zh: "礁;珊瑚礁", example: "Colorful fish live near the reef.", exampleZh: "色彩繽紛的魚生活在珊瑚礁附近。" },
      { word: "ecosystem", pos: "n.", zh: "生態系統", example: "A rainforest is a rich ecosystem.", exampleZh: "雨林是一個豐富的生態系統。" },
      { word: "temperature", pos: "n.", zh: "溫度", example: "The ocean temperature is rising.", exampleZh: "海洋溫度正在上升。" },
      { word: "bleaching", pos: "n.", zh: "白化(現象)", example: "Coral bleaching is a serious problem.", exampleZh: "珊瑚白化是一個嚴重的問題。" },
      { word: "pollution", pos: "n.", zh: "污染", example: "Pollution can harm sea animals.", exampleZh: "污染會傷害海洋動物。" },
      { word: "species", pos: "n.", zh: "物種", example: "This reef is home to many species.", exampleZh: "這片珊瑚礁是許多物種的家。" },
      { word: "climate", pos: "n.", zh: "氣候", example: "Climate change affects the whole planet.", exampleZh: "氣候變遷影響整個地球。" },
      { word: "threaten", pos: "v.", zh: "威脅", example: "Pollution threatens ocean life.", exampleZh: "污染威脅著海洋生物。" },
      { word: "restore", pos: "v.", zh: "修復;恢復", example: "Volunteers work to restore the reef.", exampleZh: "志工們努力修復這片珊瑚礁。" }
    ],
    extraVocabulary: [
      { word: "support", pos: "v.", zh: "支持;支撐", example: "Coral reefs support many kinds of fish.", exampleZh: "珊瑚礁支撐著許多種類的魚。" },
      { word: "depend", pos: "v.", zh: "依賴;取決於", example: "Ocean life depends on coral reefs.", exampleZh: "海洋生物依賴珊瑚礁生存。" },
      { word: "shelter", pos: "n.", zh: "遮蔽處;棲身處", example: "The reef gives fish a safe shelter.", exampleZh: "珊瑚礁提供魚類一個安全的棲身處。" },
      { word: "bright", pos: "adj.", zh: "明亮鮮豔的", example: "Coral used to have bright colors.", exampleZh: "珊瑚曾經有著鮮豔的顏色。" },
      { word: "damage", pos: "v./n.", zh: "損害;損壞", example: "Pollution can damage the reef.", exampleZh: "污染會損害珊瑚礁。" },
      { word: "plastic", pos: "n.", zh: "塑膠", example: "Using less plastic helps the ocean.", exampleZh: "少用塑膠有助於保護海洋。" },
      { word: "energy", pos: "n.", zh: "能源;能量", example: "Saving energy is good for the planet.", exampleZh: "節省能源對地球有益。" }
    ],
    quiz: [
      { type: "reading", question: "Why are coral reefs sometimes called the rainforests of the ocean?", options: ["They are always green", "They support an incredible number of species", "They grow on land", "They are made of trees"], answerIndex: 1 },
      { type: "reading", question: "What causes coral bleaching, according to the article?", options: ["Too much rain", "Rising ocean temperature from climate change", "Too many fish", "Strong wind"], answerIndex: 1 },
      { type: "reading", question: "What are scientists and volunteers doing to help reefs, based on the article?", options: ["Ignoring the problem", "Growing new coral in underwater nurseries", "Removing all the fish", "Building new cities"], answerIndex: 1 },
      { type: "reading", question: "According to the article, what can students do to help protect coral reefs?", options: ["Nothing, because they live far away", "Use less plastic and save energy", "Stop going to school", "Buy more plastic bottles"], answerIndex: 1 },
      { type: "vocab", question: "\"Ecosystem\" means:", options: ["生態系統", "溫度", "污染", "物種"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"threaten\".", options: ["修復", "威脅", "氣候", "海洋"], answerIndex: 1 },
      { type: "vocab", question: "\"Species\" means:", options: ["白化", "物種", "礁", "溫度"], answerIndex: 1 },
      { type: "vocab", question: "Which word means 修復;恢復?", options: ["restore", "pollution", "reef", "climate"], answerIndex: 0 },
      { type: "listening", listenText: "The ocean temperature has risen over the past ten years.", question: "What has risen over the past ten years?", options: ["The ocean temperature", "The number of ships", "The size of the moon", "The price of fish"], answerIndex: 0 },
      { type: "listening", listenText: "Volunteers are growing new coral to restore the damaged reef.", question: "What are the volunteers doing?", options: ["Growing new coral to restore the reef", "Building a new boat", "Cleaning the beach only", "Selling fish"], answerIndex: 0 },
      { type: "listening", listenText: "Pollution from the city is threatening the local ecosystem.", question: "What is threatening the local ecosystem?", options: ["Pollution from the city", "Too much sunshine", "Strong wind", "Cold weather"], answerIndex: 0 },
      { type: "listening", listenText: "Coral reefs are home to thousands of different species.", question: "What are coral reefs home to?", options: ["Thousands of different species", "Only one type of fish", "No living things", "Only plants"], answerIndex: 0 }
    ]
  },
  {
    id: "tech-elem-1",
    title: "Robots That Help Us",
    level: "elementary",
    topic: "tech",
    estMinutes: 3,
    body: [
      "A robot is a machine that can do many different tasks. Some robots can clean your house, and some robots can help build cars in a factory.",
      "People invent robots to make life easier. Engineers program a robot with special instructions so it knows what to do. Some robots can even learn new things over time.",
      "You control some robots with a remote, but other robots can work on their own. These helpful machines never get tired, so they can work all day and all night.",
      "Technology keeps changing very fast. In the future, robots may help doctors, teachers, and even astronauts. It is exciting to imagine what robots will do next!"
    ],
    vocabulary: [
      { word: "robot", pos: "n.", zh: "機器人", example: "The robot can clean the floor.", exampleZh: "這台機器人可以清潔地板。" },
      { word: "machine", pos: "n.", zh: "機器", example: "A washing machine cleans your clothes.", exampleZh: "洗衣機可以清洗你的衣服。" },
      { word: "invent", pos: "v.", zh: "發明", example: "Scientists invent new tools every year.", exampleZh: "科學家每年都會發明新工具。" },
      { word: "program", pos: "v.", zh: "編寫程式;設定程式", example: "Engineers program robots to do tasks.", exampleZh: "工程師為機器人編寫程式來完成任務。" },
      { word: "control", pos: "v.", zh: "控制", example: "You can control the robot with a remote.", exampleZh: "你可以用遙控器控制機器人。" },
      { word: "task", pos: "n.", zh: "任務;工作", example: "The robot finished its task quickly.", exampleZh: "機器人很快就完成了它的任務。" },
      { word: "factory", pos: "n.", zh: "工廠", example: "Robots work in the factory all day.", exampleZh: "機器人整天都在工廠裡工作。" },
      { word: "helpful", pos: "adj.", zh: "有幫助的", example: "A helpful robot can carry heavy boxes.", exampleZh: "一台有幫助的機器人可以搬運重箱子。" },
      { word: "technology", pos: "n.", zh: "科技", example: "New technology changes our daily life.", exampleZh: "新科技改變了我們的日常生活。" },
      { word: "future", pos: "n.", zh: "未來", example: "In the future, robots may help doctors.", exampleZh: "在未來,機器人也許能幫助醫生。" }
    ],
    extraVocabulary: [
      { word: "build", pos: "v.", zh: "建造", example: "Robots help build cars.", exampleZh: "機器人幫忙建造汽車。" },
      { word: "engineer", pos: "n.", zh: "工程師", example: "An engineer designs new machines.", exampleZh: "工程師設計新的機器。" },
      { word: "instruction", pos: "n.", zh: "指令;說明", example: "The robot follows simple instructions.", exampleZh: "這台機器人遵循簡單的指令。" },
      { word: "remote", pos: "n.", zh: "遙控器", example: "You can control it with a remote.", exampleZh: "你可以用遙控器控制它。" },
      { word: "tired", pos: "adj.", zh: "疲累的", example: "Robots never get tired.", exampleZh: "機器人從不會感到疲累。" },
      { word: "imagine", pos: "v.", zh: "想像", example: "It is fun to imagine the future.", exampleZh: "想像未來是很有趣的事。" }
    ],
    quiz: [
      { type: "reading", question: "According to the article, what can a robot do?", options: ["Only sleep", "Do many different tasks", "Only sing", "Nothing at all"], answerIndex: 1 },
      { type: "reading", question: "Why do engineers program a robot?", options: ["So it knows what to do", "So it can eat food", "So it can grow taller", "So it can sleep"], answerIndex: 0 },
      { type: "reading", question: "What is one advantage of robots mentioned in the article?", options: ["They need to rest a lot", "They never get tired", "They are afraid of the dark", "They cannot work at night"], answerIndex: 1 },
      { type: "reading", question: "According to the article, who might robots help in the future?", options: ["Doctors, teachers, and astronauts", "Only farmers", "No one", "Only robots themselves"], answerIndex: 0 },
      { type: "vocab", question: "\"Invent\" means:", options: ["控制", "發明", "任務", "工廠"], answerIndex: 1 },
      { type: "vocab", question: "Choose the meaning of \"factory\".", options: ["工廠", "機器", "科技", "未來"], answerIndex: 0 },
      { type: "vocab", question: "\"Helpful\" means:", options: ["有幫助的", "機器人", "編寫程式", "任務"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 未來?", options: ["future", "task", "control", "machine"], answerIndex: 0 },
      { type: "listening", listenText: "This new robot can clean the whole house in one hour.", question: "What can the new robot do?", options: ["Clean the whole house in one hour", "Cook a big dinner", "Drive a car", "Sing a song"], answerIndex: 0 },
      { type: "listening", listenText: "Engineers program the robot to follow simple instructions.", question: "What do engineers do to the robot?", options: ["Program it to follow instructions", "Paint it a new color", "Sell it at the store", "Turn it off forever"], answerIndex: 0 },
      { type: "listening", listenText: "Many machines in the factory work all day and all night.", question: "When do the machines in the factory work?", options: ["Only in the morning", "All day and all night", "Only on weekends", "Never"], answerIndex: 1 },
      { type: "listening", listenText: "Scientists believe technology will change our future in exciting ways.", question: "What do scientists believe about technology?", options: ["It will change our future in exciting ways", "It will disappear soon", "It is not useful", "It cannot be controlled"], answerIndex: 0 }
    ]
  },
  {
    id: "tech-middle-1",
    title: "How AI Is Changing Our World",
    level: "middle",
    topic: "tech",
    estMinutes: 4,
    body: [
      "Artificial intelligence, or AI, is technology that allows computers to learn and make decisions. AI is not science fiction anymore; it is part of daily life for millions of people around the world.",
      "At the center of AI is something called an algorithm, a set of steps a computer follows to solve a problem. Computers use large amounts of data to learn patterns and improve automatically over time, without a person telling them exactly what to do each time.",
      "AI can assist people in many ways. It can recognize a face in a photo, translate a sentence, or recommend a movie you might enjoy. Hospitals use AI to help doctors find diseases faster, which can save lives.",
      "This kind of innovation makes many tasks more efficient, but it also raises new questions. Scientists and lawmakers are discussing the impact of AI on jobs and privacy, and they are working to create ethical rules for using this powerful technology safely."
    ],
    vocabulary: [
      { word: "AI", pos: "abbr.", zh: "人工智慧(Artificial Intelligence 的縮寫)", example: "AI can help doctors find diseases.", exampleZh: "人工智慧可以幫助醫生找出疾病。" },
      { word: "intelligence", pos: "n.", zh: "智慧;智能", example: "Artificial intelligence copies human intelligence.", exampleZh: "人工智慧模仿人類的智能。" },
      { word: "algorithm", pos: "n.", zh: "演算法", example: "An algorithm is a set of steps to solve a problem.", exampleZh: "演算法是解決問題的一套步驟。" },
      { word: "data", pos: "n.", zh: "資料;數據", example: "Computers learn from large amounts of data.", exampleZh: "電腦從大量的資料中學習。" },
      { word: "automatically", pos: "adv.", zh: "自動地", example: "The system updates automatically every day.", exampleZh: "這個系統每天會自動更新。" },
      { word: "assist", pos: "v.", zh: "協助", example: "AI can assist doctors in hospitals.", exampleZh: "人工智慧可以在醫院協助醫生。" },
      { word: "recognize", pos: "v.", zh: "辨識;認出", example: "The app can recognize your face.", exampleZh: "這個應用程式可以辨識你的臉。" },
      { word: "innovation", pos: "n.", zh: "創新", example: "This new invention is an amazing innovation.", exampleZh: "這項新發明是一個驚人的創新。" },
      { word: "efficient", pos: "adj.", zh: "有效率的", example: "AI makes many tasks more efficient.", exampleZh: "人工智慧讓許多工作更有效率。" },
      { word: "impact", pos: "n.", zh: "影響", example: "Scientists study the impact of AI on jobs.", exampleZh: "科學家研究人工智慧對工作的影響。" },
      { word: "ethical", pos: "adj.", zh: "合乎道德的", example: "We need ethical rules for using AI.", exampleZh: "我們需要合乎道德的規則來使用人工智慧。" }
    ],
    extraVocabulary: [
      { word: "decision", pos: "n.", zh: "決定", example: "AI helps people make decisions.", exampleZh: "人工智慧幫助人們做決定。" },
      { word: "solve", pos: "v.", zh: "解決", example: "This algorithm helps solve the problem.", exampleZh: "這個演算法有助於解決問題。" },
      { word: "problem", pos: "n.", zh: "問題", example: "AI can find a solution to the problem.", exampleZh: "人工智慧可以找到問題的解決方法。" },
      { word: "improve", pos: "v.", zh: "改善;進步", example: "The system can improve automatically.", exampleZh: "這個系統可以自動改善。" },
      { word: "recommend", pos: "v.", zh: "推薦", example: "The app can recommend a good movie.", exampleZh: "這個應用程式可以推薦一部好電影。" },
      { word: "disease", pos: "n.", zh: "疾病", example: "Doctors use AI to find diseases.", exampleZh: "醫生用人工智慧找出疾病。" },
      { word: "privacy", pos: "n.", zh: "隱私", example: "People worry about their privacy.", exampleZh: "人們擔心自己的隱私。" },
      { word: "powerful", pos: "adj.", zh: "強大的", example: "AI is a powerful technology.", exampleZh: "人工智慧是一項強大的科技。" }
    ],
    quiz: [
      { type: "reading", question: "According to the article, what is AI?", options: ["A type of food", "Technology that allows computers to learn and make decisions", "A kind of animal", "A sport"], answerIndex: 1 },
      { type: "reading", question: "What do computers use to learn patterns, according to the article?", options: ["Large amounts of data", "Only pictures", "Only music", "Nothing"], answerIndex: 0 },
      { type: "reading", question: "How can AI assist hospitals, based on the article?", options: ["By cooking meals", "By helping doctors find diseases faster", "By cleaning the floors only", "By painting walls"], answerIndex: 1 },
      { type: "reading", question: "What are scientists and lawmakers discussing, according to the article?", options: ["The impact of AI on jobs and privacy", "The price of vegetables", "The weather", "New sports rules"], answerIndex: 0 },
      { type: "vocab", question: "\"Algorithm\" means:", options: ["演算法", "資料", "創新", "影響"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"recognize\".", options: ["辨識;認出", "協助", "自動地", "有效率的"], answerIndex: 0 },
      { type: "vocab", question: "\"Ethical\" means:", options: ["合乎道德的", "演算法", "智慧", "資料"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 影響?", options: ["impact", "assist", "innovation", "data"], answerIndex: 0 },
      { type: "listening", listenText: "This computer program can recognize a face in less than a second.", question: "What can the computer program do?", options: ["Recognize a face quickly", "Cook dinner", "Play soccer", "Grow plants"], answerIndex: 0 },
      { type: "listening", listenText: "Doctors use AI to assist them in finding diseases faster.", question: "How does AI help doctors?", options: ["By assisting them in finding diseases faster", "By cleaning the hospital", "By answering phones", "By driving cars"], answerIndex: 0 },
      { type: "listening", listenText: "The system updates its data automatically every night.", question: "When does the system update its data?", options: ["Automatically every night", "Only on Mondays", "Never", "Once a year"], answerIndex: 0 },
      { type: "listening", listenText: "Scientists are studying the impact of new technology on daily life.", question: "What are scientists studying?", options: ["The impact of new technology on daily life", "The history of ancient Rome", "The weather in winter", "A new sport"], answerIndex: 0 }
    ]
  },
  {
    id: "tech-middle-2",
    title: "The Rise of Wearable Technology",
    level: "middle",
    topic: "tech",
    estMinutes: 4,
    body: [
      "Wearable technology has become one of the biggest trends in the tech world. A wearable device is a small computer that you can wear, like a smartwatch or a fitness band.",
      "These devices use a sensor to monitor your body all day long. They can check your heartbeat, count your steps, and even track how well you sleep at night.",
      "One reason wearable technology is so convenient is that it fits easily into daily life. You do not need to carry a separate device, because the information is always on your wrist or clothing.",
      "Of course, a wearable device needs power to work. Most devices have a small battery that lasts for one or two days before you need to charge it again. Companies upgrade their devices every year, adding new features like better sensors and longer battery life."
    ],
    vocabulary: [
      { word: "wearable", pos: "adj.", zh: "可穿戴的", example: "A smartwatch is a wearable device.", exampleZh: "智慧手錶是一種可穿戴裝置。" },
      { word: "device", pos: "n.", zh: "裝置;設備", example: "This device can track your steps.", exampleZh: "這個裝置可以追蹤你走的步數。" },
      { word: "monitor", pos: "v.", zh: "監測;監控", example: "The watch can monitor your sleep.", exampleZh: "這隻手錶可以監測你的睡眠。" },
      { word: "fitness", pos: "n.", zh: "健身;體適能", example: "She wears a fitness band every day.", exampleZh: "她每天都戴著健身手環。" },
      { word: "heartbeat", pos: "n.", zh: "心跳", example: "The device checks your heartbeat every minute.", exampleZh: "這個裝置每分鐘都會檢查你的心跳。" },
      { word: "sensor", pos: "n.", zh: "感測器", example: "A sensor collects information about your body.", exampleZh: "感測器會收集關於你身體的資訊。" },
      { word: "battery", pos: "n.", zh: "電池", example: "The battery lasts for two days.", exampleZh: "這顆電池可以使用兩天。" },
      { word: "convenient", pos: "adj.", zh: "方便的", example: "Wearable technology is very convenient.", exampleZh: "可穿戴科技非常方便。" },
      { word: "upgrade", pos: "v.", zh: "升級", example: "Companies upgrade their devices every year.", exampleZh: "公司每年都會為裝置升級。" },
      { word: "trend", pos: "n.", zh: "趨勢;潮流", example: "Wearable technology is a growing trend.", exampleZh: "可穿戴科技是一股成長中的趨勢。" }
    ],
    extraVocabulary: [
      { word: "check", pos: "v.", zh: "檢查", example: "The device can check your heartbeat.", exampleZh: "這個裝置可以檢查你的心跳。" },
      { word: "track", pos: "v.", zh: "追蹤", example: "It can track how many steps you take.", exampleZh: "它可以追蹤你走了多少步。" },
      { word: "sleep", pos: "n./v.", zh: "睡眠;睡覺", example: "This watch can track your sleep.", exampleZh: "這隻手錶可以追蹤你的睡眠。" },
      { word: "wrist", pos: "n.", zh: "手腕", example: "You wear the device on your wrist.", exampleZh: "你把這個裝置戴在手腕上。" },
      { word: "charge", pos: "v.", zh: "充電", example: "You need to charge the battery every day.", exampleZh: "你需要每天為電池充電。" },
      { word: "feature", pos: "n.", zh: "功能;特色", example: "The new watch has many useful features.", exampleZh: "這隻新手錶有許多實用的功能。" }
    ],
    quiz: [
      { type: "reading", question: "According to the article, what is a wearable device?", options: ["A small computer that you can wear", "A large machine in a factory", "A type of car", "A kind of food"], answerIndex: 0 },
      { type: "reading", question: "What can a sensor in a wearable device check, based on the article?", options: ["Your heartbeat and steps", "The weather only", "Your homework", "Other people's phones"], answerIndex: 0 },
      { type: "reading", question: "Why is wearable technology convenient, according to the article?", options: ["It is very expensive", "It fits easily into daily life", "It never needs a battery", "It only works at school"], answerIndex: 1 },
      { type: "reading", question: "What do companies do to their devices every year, according to the article?", options: ["Stop making them", "Upgrade them with new features", "Make them heavier", "Remove all sensors"], answerIndex: 1 },
      { type: "vocab", question: "\"Sensor\" means:", options: ["感測器", "電池", "趨勢", "健身"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"convenient\".", options: ["方便的", "可穿戴的", "升級", "心跳"], answerIndex: 0 },
      { type: "vocab", question: "\"Heartbeat\" means:", options: ["裝置", "心跳", "監測", "電池"], answerIndex: 1 },
      { type: "vocab", question: "Which word means 趨勢;潮流?", options: ["trend", "device", "fitness", "monitor"], answerIndex: 0 },
      { type: "listening", listenText: "This new watch can monitor your heartbeat while you exercise.", question: "What can the new watch do?", options: ["Monitor your heartbeat while you exercise", "Cook your breakfast", "Wash your clothes", "Play movies"], answerIndex: 0 },
      { type: "listening", listenText: "The battery in this device lasts for about two days.", question: "How long does the battery last?", options: ["About two days", "One year", "Ten minutes", "One week"], answerIndex: 0 },
      { type: "listening", listenText: "Wearable technology is becoming a very popular trend.", question: "What is becoming a very popular trend?", options: ["Wearable technology", "Cooking classes", "Old telephones", "Paper maps"], answerIndex: 0 },
      { type: "listening", listenText: "The company will upgrade the device with a new sensor next year.", question: "What will the company add next year?", options: ["A new sensor", "A new color only", "A new price", "Nothing at all"], answerIndex: 0 }
    ]
  },
  {
    id: "sports-elem-1",
    title: "The Olympic Spirit",
    level: "elementary",
    topic: "sports",
    estMinutes: 3,
    body: [
      "Every four years, athletes from all over the world come together for the Olympic Games. They compete in many different sports, from swimming to running to gymnastics.",
      "To become a champion, an athlete must practice very hard for many years. Winning a medal is a big honor, but the Olympic spirit is also about effort, respect, and doing your best.",
      "Teamwork is important too. In team sports, players must work together and support each other to win. Even when a team does not win a medal, the players can still feel proud of their hard work.",
      "Fans around the world cheer for their favorite athletes. The Olympic Games remind us that with practice and effort, anyone can achieve their dreams."
    ],
    vocabulary: [
      { word: "Olympic", pos: "adj.", zh: "奧林匹克的", example: "The Olympic Games happen every four years.", exampleZh: "奧運每四年舉辦一次。" },
      { word: "athlete", pos: "n.", zh: "運動員", example: "Every athlete trains very hard.", exampleZh: "每位運動員都非常努力訓練。" },
      { word: "compete", pos: "v.", zh: "競賽;競爭", example: "Runners compete to win the race.", exampleZh: "跑者們競賽以贏得比賽。" },
      { word: "medal", pos: "n.", zh: "獎牌", example: "She won a gold medal.", exampleZh: "她贏得了一面金牌。" },
      { word: "teamwork", pos: "n.", zh: "團隊合作", example: "Good teamwork helps the team win.", exampleZh: "良好的團隊合作能幫助球隊獲勝。" },
      { word: "practice", pos: "v./n.", zh: "練習", example: "Athletes practice every single day.", exampleZh: "運動員每天都在練習。" },
      { word: "champion", pos: "n.", zh: "冠軍", example: "He became the swimming champion.", exampleZh: "他成為了游泳冠軍。" },
      { word: "effort", pos: "n.", zh: "努力", example: "Winning takes a lot of effort.", exampleZh: "獲勝需要付出很多努力。" },
      { word: "proud", pos: "adj.", zh: "驕傲的;自豪的", example: "Her family is very proud of her.", exampleZh: "她的家人為她感到非常驕傲。" },
      { word: "cheer", pos: "v.", zh: "歡呼;加油", example: "Fans cheer loudly for their team.", exampleZh: "粉絲們大聲為他們的隊伍歡呼加油。" }
    ],
    extraVocabulary: [
      { word: "world", pos: "n.", zh: "世界", example: "Athletes come from all over the world.", exampleZh: "運動員來自世界各地。" },
      { word: "honor", pos: "n.", zh: "榮譽", example: "Winning a medal is a big honor.", exampleZh: "贏得獎牌是一項很大的榮譽。" },
      { word: "respect", pos: "n.", zh: "尊重", example: "The Olympic spirit is about respect.", exampleZh: "奧林匹克精神關乎尊重。" },
      { word: "best", pos: "adj./n.", zh: "最好的;全力以赴", example: "Just try your best.", exampleZh: "盡你最大的努力就好。" },
      { word: "support", pos: "v.", zh: "支持", example: "Teammates support each other.", exampleZh: "隊友們互相支持。" },
      { word: "dream", pos: "n.", zh: "夢想", example: "Anyone can achieve their dreams.", exampleZh: "任何人都能達成自己的夢想。" }
    ],
    quiz: [
      { type: "reading", question: "How often does the Olympic Games happen, according to the article?", options: ["Every year", "Every four years", "Every ten years", "Only once"], answerIndex: 1 },
      { type: "reading", question: "What must an athlete do to become a champion, based on the article?", options: ["Practice very hard for many years", "Watch TV all day", "Sleep a lot", "Avoid sports"], answerIndex: 0 },
      { type: "reading", question: "What does the article say the Olympic spirit is also about?", options: ["Only winning medals", "Effort, respect, and doing your best", "Money and fame", "Being the tallest player"], answerIndex: 1 },
      { type: "reading", question: "What can players feel even if their team does not win a medal, according to the article?", options: ["Angry", "Proud of their hard work", "Bored", "Sleepy"], answerIndex: 1 },
      { type: "vocab", question: "\"Teamwork\" means:", options: ["團隊合作", "獎牌", "運動員", "冠軍"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"compete\".", options: ["競賽;競爭", "練習", "努力", "歡呼"], answerIndex: 0 },
      { type: "vocab", question: "\"Champion\" means:", options: ["冠軍", "運動員", "獎牌", "努力"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 驕傲的;自豪的?", options: ["proud", "cheer", "medal", "effort"], answerIndex: 0 },
      { type: "listening", listenText: "The athlete practiced every day before winning the gold medal.", question: "What did the athlete do before winning the gold medal?", options: ["Practiced every day", "Slept all day", "Stayed home", "Stopped playing sports"], answerIndex: 0 },
      { type: "listening", listenText: "The whole crowd stood up to cheer for the champion.", question: "What did the crowd do?", options: ["Stood up to cheer for the champion", "Went home early", "Fell asleep", "Started crying"], answerIndex: 0 },
      { type: "listening", listenText: "Good teamwork helped the team win their first medal.", question: "What helped the team win their first medal?", options: ["Good teamwork", "Bad weather", "A new stadium", "Loud music"], answerIndex: 0 },
      { type: "listening", listenText: "She felt very proud after all her hard effort.", question: "How did she feel after her hard effort?", options: ["Very proud", "Very angry", "Very bored", "Very confused"], answerIndex: 0 }
    ]
  },
  {
    id: "sports-middle-1",
    title: "Breaking Records: World Athletes",
    level: "middle",
    topic: "sports",
    estMinutes: 4,
    body: [
      "Every year, athletes around the world push their bodies to new limits. When someone breaks a world record, it means they have done something that no one else has ever done before in that sport.",
      "Breaking a record is a huge achievement that usually takes years of hard training. Athletes build endurance so their bodies can perform at a high level for a long time without getting tired.",
      "However, physical training is not enough on its own. Determination and mental strength help athletes keep trying even after they fail. Coaches also help athletes improve their technique, the exact way they move their body during a sport.",
      "Sometimes an athlete's breakthrough performance becomes a milestone in sports history, inspiring future generations. Their dedication reminds us that everyone has the potential to achieve amazing things with enough hard work."
    ],
    vocabulary: [
      { word: "record", pos: "n.", zh: "紀錄", example: "She broke the world record in swimming.", exampleZh: "她打破了游泳的世界紀錄。" },
      { word: "achievement", pos: "n.", zh: "成就", example: "Winning the championship was a great achievement.", exampleZh: "贏得冠軍是一項偉大的成就。" },
      { word: "endurance", pos: "n.", zh: "耐力", example: "Marathon runners need a lot of endurance.", exampleZh: "馬拉松跑者需要很強的耐力。" },
      { word: "training", pos: "n.", zh: "訓練", example: "Years of training helped her succeed.", exampleZh: "多年的訓練幫助她獲得成功。" },
      { word: "determination", pos: "n.", zh: "決心;毅力", example: "His determination helped him never give up.", exampleZh: "他的決心讓他永不放棄。" },
      { word: "technique", pos: "n.", zh: "技巧", example: "The coach improved the athlete's technique.", exampleZh: "教練改善了運動員的技巧。" },
      { word: "breakthrough", pos: "n.", zh: "突破", example: "This was a breakthrough performance for the young athlete.", exampleZh: "這對這位年輕運動員來說是一次突破性的表現。" },
      { word: "milestone", pos: "n.", zh: "里程碑", example: "Winning her first medal was an important milestone.", exampleZh: "贏得第一面獎牌是一個重要的里程碑。" },
      { word: "dedication", pos: "n.", zh: "奉獻;投入", example: "Her dedication to the sport is inspiring.", exampleZh: "她對這項運動的投入令人敬佩。" },
      { word: "potential", pos: "n.", zh: "潛力", example: "Every athlete has the potential to improve.", exampleZh: "每位運動員都有進步的潛力。" }
    ],
    extraVocabulary: [
      { word: "push", pos: "v.", zh: "推;推動", example: "Athletes push their bodies to new limits.", exampleZh: "運動員把身體逼向新的極限。" },
      { word: "limit", pos: "n.", zh: "極限", example: "She wants to test her limits.", exampleZh: "她想要測試自己的極限。" },
      { word: "level", pos: "n.", zh: "水準;程度", example: "Her performance is at a very high level.", exampleZh: "她的表現處於非常高的水準。" },
      { word: "physical", pos: "adj.", zh: "身體的", example: "Physical training takes years.", exampleZh: "身體上的訓練需要多年時間。" },
      { word: "mental", pos: "adj.", zh: "心理的;精神上的", example: "Mental strength is also important.", exampleZh: "心理上的堅強也很重要。" },
      { word: "strength", pos: "n.", zh: "力量;強項", example: "Determination gives athletes strength.", exampleZh: "決心給予運動員力量。" },
      { word: "coach", pos: "n.", zh: "教練", example: "The coach helps athletes improve.", exampleZh: "教練幫助運動員進步。" },
      { word: "fail", pos: "v.", zh: "失敗", example: "It is okay to fail sometimes.", exampleZh: "有時候失敗也沒關係。" }
    ],
    quiz: [
      { type: "reading", question: "What does it mean when someone breaks a world record, according to the article?", options: ["They lost the game", "They have done something no one else has ever done before", "They quit the sport", "They broke a rule"], answerIndex: 1 },
      { type: "reading", question: "What do athletes build through years of training, based on the article?", options: ["Endurance", "Fear", "Boredom", "Weakness"], answerIndex: 0 },
      { type: "reading", question: "According to the article, what helps athletes keep trying even after they fail?", options: ["Determination and mental strength", "Watching television", "Giving up quickly", "Avoiding practice"], answerIndex: 0 },
      { type: "reading", question: "What does the article say an athlete's breakthrough performance can become?", options: ["A milestone in sports history", "A forgotten moment", "A reason to quit", "A small mistake"], answerIndex: 0 },
      { type: "vocab", question: "\"Endurance\" means:", options: ["耐力", "技巧", "紀錄", "里程碑"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"determination\".", options: ["決心;毅力", "成就", "訓練", "潛力"], answerIndex: 0 },
      { type: "vocab", question: "\"Milestone\" means:", options: ["里程碑", "突破", "奉獻", "紀錄"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 潛力?", options: ["potential", "technique", "achievement", "dedication"], answerIndex: 0 },
      { type: "listening", listenText: "The runner broke the world record after years of hard training.", question: "What did the runner do after years of hard training?", options: ["Broke the world record", "Quit the sport", "Got injured", "Moved to another country"], answerIndex: 0 },
      { type: "listening", listenText: "Her determination helped her keep trying even after she failed many times.", question: "What helped her keep trying?", options: ["Her determination", "Her fear", "Her age", "Her friends' money"], answerIndex: 0 },
      { type: "listening", listenText: "The coach worked with the athlete to improve his technique.", question: "What did the coach help the athlete improve?", options: ["His technique", "His homework", "His singing", "His cooking"], answerIndex: 0 },
      { type: "listening", listenText: "Winning this medal was a huge milestone in her career.", question: "What was winning this medal for her?", options: ["A huge milestone in her career", "A small mistake", "A waste of time", "A boring event"], answerIndex: 0 }
    ]
  },
  {
    id: "tech-elem-2",
    title: "Smart Homes: Houses That Listen",
    level: "elementary",
    topic: "tech",
    estMinutes: 3,
    body: [
      "Imagine a house that can turn on the lights when you say a word. Today, many homes have smart devices that can listen and help people. These devices are called smart speakers, and they can play music, answer questions, and control other machines in the house.",
      "Smart homes also have smart lights and smart locks. You can turn off the lights from your phone, even if you are not at home. Some smart locks let you open the door without a key. These inventions make daily life easier and safer for families.",
      "Scientists keep inventing new smart devices every year. In the future, houses might be able to clean themselves or order food automatically. Technology is changing the way we live, one smart device at a time."
    ],
    vocabulary: [
      { word: "imagine", pos: "v.", zh: "想像", example: "Can you imagine a talking house?", exampleZh: "你能想像一間會說話的房子嗎？" },
      { word: "device", pos: "n.", zh: "裝置;設備", example: "This device can play music.", exampleZh: "這個裝置可以播放音樂。" },
      { word: "smart", pos: "adj.", zh: "聰明的;智慧型的", example: "We have a smart speaker at home.", exampleZh: "我們家有一個智慧音箱。" },
      { word: "control", pos: "v.", zh: "控制", example: "You can control the lights with your phone.", exampleZh: "你可以用手機控制燈光。" },
      { word: "invention", pos: "n.", zh: "發明", example: "The smart lock is a useful invention.", exampleZh: "智慧門鎖是一項實用的發明。" },
      { word: "safe", pos: "adj.", zh: "安全的", example: "Smart locks make our home safer.", exampleZh: "智慧門鎖讓我們的家更安全。" },
      { word: "automatically", pos: "adv.", zh: "自動地", example: "The lights turn on automatically at night.", exampleZh: "燈光在晚上會自動打開。" },
      { word: "technology", pos: "n.", zh: "科技", example: "Technology is changing our lives.", exampleZh: "科技正在改變我們的生活。" },
      { word: "machine", pos: "n.", zh: "機器", example: "This machine can clean the floor.", exampleZh: "這台機器可以清理地板。" },
      { word: "future", pos: "n.", zh: "未來", example: "In the future, houses may clean themselves.", exampleZh: "在未來,房子也許能自己清潔。" }
    ],
    extraVocabulary: [
      { word: "house", pos: "n.", zh: "房子", example: "This is a smart house.", exampleZh: "這是一間智慧型房子。" },
      { word: "listen", pos: "v.", zh: "聆聽", example: "The speaker can listen to your voice.", exampleZh: "這個喇叭可以聽你說話。" },
      { word: "answer", pos: "v./n.", zh: "回答", example: "It can answer simple questions.", exampleZh: "它可以回答簡單的問題。" },
      { word: "question", pos: "n.", zh: "問題", example: "I asked it a question.", exampleZh: "我問了它一個問題。" },
      { word: "easy", pos: "adj.", zh: "容易的", example: "Smart devices make life easy.", exampleZh: "智慧裝置讓生活變容易。" },
      { word: "daily", pos: "adj.", zh: "每天的", example: "It helps with daily tasks.", exampleZh: "它能幫忙處理每天的事務。" }
    ],
    quiz: [
      { type: "reading", question: "What can a smart speaker do, according to the article?", options: ["Cook dinner", "Play music and answer questions", "Drive a car", "Grow plants"], answerIndex: 1 },
      { type: "reading", question: "How can you turn off smart lights, based on the article?", options: ["By clapping only", "From your phone", "By breaking them", "You cannot turn them off"], answerIndex: 1 },
      { type: "reading", question: "What might future houses be able to do, according to the article?", options: ["Clean themselves or order food", "Fly in the sky", "Talk like humans", "Grow bigger"], answerIndex: 0 },
      { type: "reading", question: "What do smart locks let you do, according to the article?", options: ["Open the door without a key", "Lock the windows automatically", "Turn on the TV", "Cook food"], answerIndex: 0 },
      { type: "vocab", question: "\"Invention\" means:", options: ["發明", "未來", "安全的", "控制"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"device\".", options: ["裝置", "發明", "未來", "聰明的"], answerIndex: 0 },
      { type: "vocab", question: "\"Automatically\" means:", options: ["自動地", "安全的", "容易的", "聰明的"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 控制 (to control)?", options: ["control", "safe", "future", "technology"], answerIndex: 0 },
      { type: "listening", listenText: "Please turn off the lights before you leave the room.", question: "What does the speaker ask you to do?", options: ["Turn off the lights", "Open the door", "Play music", "Clean the floor"], answerIndex: 0 },
      { type: "listening", listenText: "This smart device can answer your questions.", question: "What can the device do?", options: ["Cook food", "Answer your questions", "Drive a car", "Fly"], answerIndex: 1 },
      { type: "listening", listenText: "In the future, robots might help us clean our homes.", question: "What might robots do in the future?", options: ["Help us clean our homes", "Teach math class", "Play soccer", "Sing songs"], answerIndex: 0 },
      { type: "listening", listenText: "The door will lock automatically at night.", question: "When will the door lock automatically?", options: ["In the morning", "At night", "At noon", "Never"], answerIndex: 1 }
    ]
  },
  {
    id: "sports-middle-2",
    title: "Esports: A New Kind of Sport",
    level: "middle",
    topic: "sports",
    estMinutes: 4,
    body: [
      "When people think of sports, they often picture running, swimming, or playing soccer. But today, a new kind of competition is becoming popular around the world: esports. Esports are competitive video game tournaments where players compete against each other for prizes and fame.",
      "Just like traditional athletes, esports players practice for many hours every day. They train their reflexes, improve their strategy, and work together with teammates. Some professional players even have coaches and personal trainers to keep their minds and bodies healthy.",
      "Esports tournaments can fill huge stadiums, and millions of fans watch the matches online. Some competitions offer prize money worth millions of dollars. This has turned esports into a serious career for many young people around the world.",
      "Not everyone agrees that esports should be called a real sport. Some people argue that video games do not require enough physical exercise. Still, esports continues to grow in popularity, and more schools and colleges are starting esports clubs and teams."
    ],
    vocabulary: [
      { word: "competitive", pos: "adj.", zh: "競爭的", example: "Esports is a very competitive activity.", exampleZh: "電子競技是一項競爭激烈的活動。" },
      { word: "tournament", pos: "n.", zh: "錦標賽;比賽", example: "The tournament had teams from ten countries.", exampleZh: "這場錦標賽有來自十個國家的隊伍。" },
      { word: "compete", pos: "v.", zh: "競爭;比賽", example: "Players compete for the championship.", exampleZh: "選手們競爭冠軍。" },
      { word: "prize", pos: "n.", zh: "獎品;獎金", example: "The winning team received a big prize.", exampleZh: "獲勝隊伍得到了一大筆獎金。" },
      { word: "reflexes", pos: "n.", zh: "反應能力", example: "Fast reflexes are important in esports.", exampleZh: "快速的反應能力在電競中很重要。" },
      { word: "strategy", pos: "n.", zh: "策略", example: "A good strategy can help you win the game.", exampleZh: "好的策略能幫助你贏得比賽。" },
      { word: "professional", pos: "adj./n.", zh: "職業的;專業人士", example: "She is a professional esports player.", exampleZh: "她是一位職業電競選手。" },
      { word: "stadium", pos: "n.", zh: "體育場", example: "The stadium was full of fans.", exampleZh: "體育場裡擠滿了粉絲。" },
      { word: "career", pos: "n.", zh: "職業;生涯", example: "He built a career as a gamer.", exampleZh: "他成為職業玩家,建立了自己的職涯。" },
      { word: "physical", pos: "adj.", zh: "身體的", example: "Physical exercise keeps you healthy.", exampleZh: "身體運動能讓你保持健康。" }
    ],
    extraVocabulary: [
      { word: "traditional", pos: "adj.", zh: "傳統的", example: "Soccer is a traditional sport.", exampleZh: "足球是一項傳統運動。" },
      { word: "athlete", pos: "n.", zh: "運動員", example: "The athlete trains every day.", exampleZh: "這位運動員每天都在訓練。" },
      { word: "teammate", pos: "n.", zh: "隊友", example: "She works well with her teammates.", exampleZh: "她跟隊友合作得很好。" },
      { word: "coach", pos: "n.", zh: "教練", example: "The coach helps players improve.", exampleZh: "教練幫助選手進步。" },
      { word: "popularity", pos: "n.", zh: "受歡迎程度", example: "Esports is growing in popularity.", exampleZh: "電子競技越來越受歡迎。" },
      { word: "argue", pos: "v.", zh: "爭論;主張", example: "Some people argue it is not a real sport.", exampleZh: "有些人主張這不是真正的運動。" }
    ],
    quiz: [
      { type: "reading", question: "What is esports, according to the article?", options: ["A type of traditional sport like soccer", "Competitive video game tournaments", "A cooking competition", "A music contest"], answerIndex: 1 },
      { type: "reading", question: "How do esports players train, based on the article?", options: ["They never practice", "They train reflexes and strategy for hours every day", "They only watch TV", "They read books all day"], answerIndex: 1 },
      { type: "reading", question: "What can esports tournaments offer, according to the article?", options: ["Free food only", "Prize money worth millions of dollars", "Nothing", "A small trophy only"], answerIndex: 1 },
      { type: "reading", question: "Why do some people think esports should not be called a real sport?", options: ["Because it costs too much money", "Because video games do not require enough physical exercise", "Because there are no teams", "Because nobody watches it"], answerIndex: 1 },
      { type: "vocab", question: "\"Tournament\" means:", options: ["錦標賽", "反應能力", "策略", "體育場"], answerIndex: 0 },
      { type: "vocab", question: "Choose the meaning of \"reflexes\".", options: ["反應能力", "職業的", "傳統的", "教練"], answerIndex: 0 },
      { type: "vocab", question: "\"Strategy\" means:", options: ["策略", "獎品", "隊友", "受歡迎程度"], answerIndex: 0 },
      { type: "vocab", question: "Which word means 體育場 (a large place to watch games)?", options: ["stadium", "career", "prize", "athlete"], answerIndex: 0 },
      { type: "listening", listenText: "The two teams will compete in the final match tomorrow.", question: "When will the two teams compete?", options: ["Tomorrow", "Yesterday", "Next year", "Never"], answerIndex: 0 },
      { type: "listening", listenText: "She has fast reflexes, so she plays the game very well.", question: "Why does she play the game very well?", options: ["She has fast reflexes", "She is very tall", "She reads a lot", "She sings well"], answerIndex: 0 },
      { type: "listening", listenText: "The winning team received a huge prize of one million dollars.", question: "How much prize money did the winning team receive?", options: ["One thousand dollars", "One million dollars", "Ten dollars", "Nothing"], answerIndex: 1 },
      { type: "listening", listenText: "More schools are starting esports clubs for students.", question: "What are more schools starting?", options: ["Cooking clubs", "Esports clubs", "Music clubs", "Art clubs"], answerIndex: 1 }
    ]
  }
];
