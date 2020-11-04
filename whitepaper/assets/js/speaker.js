var data = [
	{
		speakerImg: "speaker-01_yu.jpg",
		speakerName: "俞 昊",
		speakerNameEng: "Howard Yu",
		speakerInfo: "瑞士洛桑管理學院創新樂高教授",
		speakerIntro: "瑞士 IMD 洛桑管理學院創新樂高教授（LEGO professor），AMP 進階管理學程主持人。2015 年獲選 Poets & Quants「全球 40 歲以下頂尖 40 位商學院教授」，2018 年名列 Thinkers50 雷達名單中「最可能型塑組織管理與領導未來」的 30 位管理思想家。曾替 Mars 公司、快桅 Maersk、戴姆勒 Daimler、伊萊克斯 Electrolux 等頂尖企業提供客製化課程。<br/><br/>哈佛商學院博士，取得博士學位前於香港金融業工作。",
	},
	{
		speakerImg: "speaker-02_chiang.jpg",
		speakerName: "江 逸之",
		speakerNameEng: "Benjamin Chiang",
		speakerInfo: "天下創新學院總監",
		speakerIntro: "17 年主跑科技產業， 深入研究科技產業的破壞式創新、Ecosystem、大數據與中國互聯網趨勢。 規劃 30 多個大型跨國專題。<br/><br/>曾獲得第 22、24 屆吳舜文新聞獎「國際新聞報導獎」連續三屆兩岸新聞報導獎、亞洲出版人協會（SOPA）2008 年「財經報導類首獎」及「創新傳播獎」、2011 年「卓越資料圖像獎首獎」、2012 年「卓越資料圖像獎首獎」、2012 年數位出版金鼎獎以及第 8 屆「卓越新聞獎」國際新聞報導獎。",
	},
	{
		speakerImg: "speaker-03_yeh.jpg",
		speakerName: "葉 福海",
		speakerNameEng: "Frank Yeh",
		speakerInfo: "大聯大控股執行長",
		speakerIntro: "執行長葉福海在電子業耕耘超過 40 年，曾擔任宏碁股份有限公司副總經理及美商艾睿電子股份有限公司總經理。在他的領導下，大聯大於2015年開始數位轉型工程，推出以資料驅動（Data-Driven）為基礎的「大大網」，強化對上下游廠商資訊的掌握及彈性管理能力；同時提倡智能物流服務(LaaS)模式，協助客戶共同面對智慧製造的挑戰，期與產業共建大競合之生態系。<br/><br/>葉福海未來將持續推動「專注客戶、科技賦能、協同生態、共創時代」數位轉型心法，要為大聯大下一個 10 年奠定基石。",
	},
	{
		speakerImg: "speaker-04_liu.jpg",
		speakerName: "劉 鳳珍",
		speakerNameEng: "Jane Liu",
		speakerInfo: "天下雜誌學習事業群總經理",
		speakerIntro: "曾任 Cheers 雜誌社長、總編輯。長年關注企業人才管理、新世代與國際高等教育議題，近年致力將台灣各領域標竿人物的實務經驗轉化成系統性影音課程產品。2020 年底天下學習事業群成立，涵蓋集團兩大線上學習產品：天下創新學院、MasterCheers 大師影音課，以及關注青年人才能力發展的 Cheers 雜誌，將整合線上到線下的培訓服務，協助企業提升人才競爭力。",
	},
	{
		speakerImg: "speaker-05_chen.jpg",
		speakerName: "陳 來助",
		speakerNameEng: "Lai Ju Chen",
		speakerInfo: "台灣數位企業總會理事長",
		speakerIntro: "",
	}
];
var study = [
	{
		logoImg: "logo-imd@3x-100.jpg",
		logoName: "瑞士洛桑管理學院",
		logoNameEng: "International Institute for Management Development",
		logoIntro: "IMD 商學院是一所全球頂尖的企業經營管理培訓學院，每年為全球 9000 多位來自 190 多個組織的管理者提供培訓，其公開課程已連續 9 年蟬聯全球第一，高階主管與經理人的培訓已連續 9 年排名全球第 3、連續 17 年排名全球前 5。",
	},
	{
		logoImg: "logo-trp@3x-100.jpg",
		logoName: "台灣產業創生平台",
		logoNameEng: "Taiwan Renaissance Platform",
		logoIntro: "為協助台灣佈局「後天」的競爭力，一群志同道合的台灣產業領袖，在 2020 年初共同設立了「台灣產業創生平台」，致力為台灣產業注入轉型升級的動能，以以準備好因應未來的變化。台灣產業創生平台廣邀台灣 3000 大企業領袖集思廣益，相互激盪創新思維，引導個人和企業看見後天，並透過四大工作項目達成目標：推動企業前瞻後天、舉辦演講／座談／論壇促進企業深度交流、鏈結全球創新重鎮、培育新世代產業領袖人才，為台灣產業開拓新出路。",
	},
	{
		logoImg: "logo-aif@3x-100.jpg",
		logoName: "財團法人人工智慧科技基金會",
		logoNameEng: "Artificial Intelligence Foundationaif",
		logoIntro: "人工智慧科技基金會（AIF）以促進產業之人工智慧科技提升、應用發展及社會永續為宗旨，以客製化訓練、知識推廣及專案服務，賦能企業建立自己的 AI 團隊，發揮既有優勢、提升價值並促進轉型。同時扮演產業與學術界的關鍵樞鈕，密切與企業及學術界合作，有效介接學術能量，讓台灣產業在這波 AI 浪潮中踩穩腳步，掌握轉型成長的最佳契機。",
	},
	{
		logoImg: "logo-pwc@3x-100.jpg",
		logoName: "資誠聯合會計師事務所",
		logoNameEng: "PwC Taiwan",
		logoIntro: "資誠聯合會計師事務所（PwC Taiwan）由朱國璋及陳振銑教授於 1970 年所創立，於 1973 年加入國際 Price Waterhouse 事務所；1998 年，Price Waterhouse 與 Coopers & Lybrand 合併，更名為 PricewaterhouseCoopers (PwC)。PwC 的全球聯盟組織遍佈 155 個國家及區域，計有逾 284,000 名專業人員，在世界各地致力於提供高品質的審計、稅務及顧問諮詢服務。<br/><br/>資誠為 PwC 在臺灣之聯盟所，我們的使命是「營造社會誠信，解決重要問題」。半世紀以來，隨著臺灣經濟發展，業務不斷蓬勃成長，持續追求卓越，堅持正直誠信及維持高品質的專業素養，並善盡企業責任促進變革，以贏得公眾信賴。<br/><br/>資誠聯合會計師事務所偕同策略合作夥伴（資誠企業管理顧問公司、資誠稅務諮詢顧問公司、普華國際財務顧問公司、普華商務法律事務所、資誠永續發展服務公司、普華國際不動產公司、資誠人資管理顧問公司、資誠智能風險管理諮詢公司、資誠創新諮詢公司），於全臺六個城市，超過 3,000 位專業人員，提供產業專精的整合性專業服務，服務對象涵蓋國外及國內企業，透過 PwC 全球聯盟所密切的互動與合作，提供全方位完整的解決方案，以提升客戶價值。",
	}
];