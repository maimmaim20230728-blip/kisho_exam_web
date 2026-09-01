window.KISHO_DATA = window.KISHO_DATA || {};
window.KISHO_DATA["56_ippan"] = {
"tag": "56_ippan",
"kai": 56,
"kind": "ippan",
"label": "令和3年度第1回(第56回)",
"subject": "予報業務に関する一般知識",
"questions": [
{
"q": 1,
"question": "<span class=\"term\" data-term=\"気圧\">気圧</span>の平均的な<span class=\"term\" data-term=\"高度\">高度</span><span class=\"term\" data-term=\"分布\">分布</span>は，地上(高度0km)で<span class=\"term\" data-term=\"1000hPa\">1000hPa</span>，高度約5kmで<span class=\"term\" data-term=\"500hPa\">500hPa</span>，約10kmで250<span class=\"term\" data-term=\"hPa\">hPa</span>，約15kmで125hPaというように，ほぼ一定の高度間隔ごとに一定の<span class=\"term\" data-term=\"比率\">比率</span>で減少している。このとき<span class=\"term\" data-term=\"大気\">大気</span>全体の<span class=\"term\" data-term=\"質量\">質量</span>の99.9%が含まれる地上からの平均的な高度として最も適切なものを，下記の①〜⑤の中から1つ選べ。",
"choices": [
"約24km",
"約32km",
"約48km",
"約64km",
"約96km"
],
"answers": [
3
],
"answer_note": "",
"figures": [],
"explanation": "正解は ③ です。\n\nこの問題で問われているのは、<span class=\"term\" data-term=\"気圧\">気圧</span>が高さとともにどう減っていくかという性質と、気圧が「そこより上にある空気の重さ」を表しているという意味を、つなげて考えられるかどうかです。\n\nまず大事な前提からいきましょう。ある高さの気圧は、そこより上にある空気の重さ(<span class=\"term\" data-term=\"単位面積\">単位面積</span>あたり)を表しています。地上の気圧が<span class=\"term\" data-term=\"1000hPa\">1000hPa</span>ということは、<span class=\"term\" data-term=\"大気\">大気</span>全体の重さが1000hPa分だということなんですね。\n\nつまり「大気全体の<span class=\"term\" data-term=\"質量\">質量</span>の99.9%が下にある高さ」というのは、「上に残っている空気が全体の0.1%しかない高さ」のことです。そこでの気圧は\n1000hPa × 0.001 = 1<span class=\"term\" data-term=\"hPa\">hPa</span>\nになります。\n\n次に問題文の数値を見てみましょう。1000→500→250→125と、5kmごとにちょうど半分になっています。ようするに5km上がるごとに気圧は1/2倍です。\n\n1hPaになるまで何回半分にすればいいかを数えてみます。\n1000 → 500(5km) → 250(10km) → 125(15km) → 62.5(20km) → 31.3(25km) → 15.6(30km) → 7.8(35km) → 3.9(40km) → 2.0(45km) → 1.0(50km)\n\n2を10回かけると1024でほぼ1000ですから、10回半分にすればおよそ1hPaです。必要な高さは\n5km × 10 = 約50km\nですね。選択肢の中でこれに一番近いのは ③ の約48kmです。\n\nちなみに約24kmだと上に残る空気がまだ約3.6%、約64kmだと約0.014%で、どちらも「残り0.1%」からは外れてしまいます。\n\nポイント: 気圧はその高さより上の空気の重さを表すので、「質量の何%が下にあるか」は気圧の比でそのまま計算できます。5kmで半分という目安と、2の<span class=\"term\" data-term=\"10乗\">10乗</span>が約1000であることを覚えておくと素早く解けます。"
},
{
"q": 2,
"question": "<span class=\"term\" data-term=\"湿潤大気\">湿潤大気</span>中で<span class=\"term\" data-term=\"空気塊\">空気塊</span>を持ち上げたときの気温等の変化について述べた次の文章の<span class=\"term\" data-term=\"空欄\">空欄</span>(a),(b)に入る数値の組み合わせとして最も適切なものを，下記の①〜⑤の中から1つ選べ。ただし，<span class=\"term\" data-term=\"乾燥断熱減率\">乾燥断熱減率</span>は10<span class=\"term\" data-term=\"℃/km\">℃/km</span>，<span class=\"term\" data-term=\"湿潤断熱減率\">湿潤断熱減率</span>は5℃/km とする。\n地上(<span class=\"term\" data-term=\"高度\">高度</span>0km)で気温が25℃，高度3kmで気温が5℃の<span class=\"term\" data-term=\"大気\">大気</span>中において，周囲の空気と<span class=\"term\" data-term=\"混合\">混合</span>せずに<span class=\"term\" data-term=\"断熱的\">断熱的</span>に地上から上昇した空気塊の<span class=\"term\" data-term=\"自由対流高度\">自由対流高度</span>が3kmとなった。このとき，<span class=\"term\" data-term=\"持ち上げ凝結高度\">持ち上げ凝結高度</span>は (a) km，そこでの空気塊の温度は (b) ℃となる。",
"choices": [
"(a) 1 (b) 10",
"(a) 1 (b) 15",
"(a) 1.5 (b) 10",
"(a) 2 (b) 10",
"(a) 2 (b) 15"
],
"answers": [
2
],
"answer_note": "",
"figures": [],
"explanation": "正解は ② です。\n\nここでは、空気のかたまり(<span class=\"term\" data-term=\"空気塊\">空気塊</span>)が上昇するとき、雲ができる前と後で気温の下がり方が変わることが分かっているかを見ています。\n\n先に用語を整理しておきましょう。\n・<span class=\"term\" data-term=\"乾燥断熱減率\">乾燥断熱減率</span>…雲ができていない空気塊が上昇するときの、気温が下がる割合。ここでは10<span class=\"term\" data-term=\"℃/km\">℃/km</span>です。\n・<span class=\"term\" data-term=\"湿潤断熱減率\">湿潤断熱減率</span>…<span class=\"term\" data-term=\"水蒸気\">水蒸気</span>が<span class=\"term\" data-term=\"凝結\">凝結</span>し始めた(雲ができ始めた)あとの割合。凝結のときに熱が出るので下がり方がゆるくなって、ここでは5℃/kmです。\n・<span class=\"term\" data-term=\"持ち上げ凝結高度\">持ち上げ凝結高度</span>…空気塊が上昇して雲ができ始める高さ。\n・<span class=\"term\" data-term=\"自由対流高度\">自由対流高度</span>…空気塊の温度が周りの空気の温度に追いつき、そこから先は自分の<span class=\"term\" data-term=\"浮力\">浮力</span>だけで上がっていける高さ。つまり「空気塊の温度=周囲の気温」となる高さなんです。\n\nでは順に計算してみましょう。持ち上げ凝結高度を a km とおきます。\n\n① 地上から a km までは乾燥断熱減率なので、下がる量は 10 × a (℃)。\n② a km から3kmまでは湿潤断熱減率なので、下がる量は 5 × (3 − a) (℃)。\n\nですから<span class=\"term\" data-term=\"高度\">高度</span>3kmでの空気塊の温度は\n25 − 10a − 5(3 − a)\n= 25 − 10a − 15 + 5a\n= 10 − 5a (℃)\nになります。\n\nここがだいじなところなんですが、自由対流高度が3kmということは、この温度が高度3kmの周囲の気温5℃と等しいということですね。\n10 − 5a = 5\n5a = 5\na = 1\n\nというわけで持ち上げ凝結高度は 1km、これが(a)の答えです。\n\nそこでの空気塊の温度は、地上から1kmまで乾燥断熱減率で下がった値ですから\n25 − 10 × 1 = 15(℃)\nとなり、これが(b)の答えになります。\n\n(a)1、(b)15 の組み合わせは ② です。\n\nポイント: 「自由対流高度=空気塊と周囲の気温が一致する高さ」という<span class=\"term\" data-term=\"定義\">定義</span>さえ式にできれば、あとは<span class=\"term\" data-term=\"乾燥\">乾燥</span><span class=\"term\" data-term=\"断熱\">断熱</span>と<span class=\"term\" data-term=\"湿潤\">湿潤</span>断熱の2区間に分けた足し算だけで解けます。"
},
{
"q": 3,
"question": "<span class=\"term\" data-term=\"気圧\">気圧</span><span class=\"term\" data-term=\"850hPa\">850hPa</span>，温度5℃の<span class=\"term\" data-term=\"空気塊\">空気塊</span>の<span class=\"term\" data-term=\"飽和水蒸気圧\">飽和水蒸気圧</span>をA，<span class=\"term\" data-term=\"飽和混合比\">飽和混合比</span>をBとする。このとき，次の文(a)〜(c)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n(a) 気圧800<span class=\"term\" data-term=\"hPa\">hPa</span>，温度5℃の空気塊の飽和水蒸気圧はAよりも大きい。\n(b) 気圧850hPa，温度10℃の空気塊の飽和混合比はBよりも大きい。\n(c) 気圧<span class=\"term\" data-term=\"900hPa\">900hPa</span>，温度5℃の空気塊の飽和混合比はBよりも大きい。",
"choices": [
"(a)正 (b)正 (c)誤",
"(a)正 (b)誤 (c)正",
"(a)誤 (b)正 (c)正",
"(a)誤 (b)正 (c)誤",
"(a)誤 (b)誤 (c)正"
],
"answers": [
4
],
"answer_note": "",
"figures": [],
"explanation": "正解は ④ です。\n\n<span class=\"term\" data-term=\"飽和水蒸気圧\">飽和水蒸気圧</span>と<span class=\"term\" data-term=\"飽和混合比\">飽和混合比</span>が、それぞれ何によって決まるのか。ここを区別できているかどうかがカギです。\n\nまず用語の確認をしましょう。\n・飽和水蒸気圧…空気が<span class=\"term\" data-term=\"水蒸気\">水蒸気</span>を含みきれる限界のときに、水蒸気だけが示す<span class=\"term\" data-term=\"圧力\">圧力</span>。\n・飽和混合比…そのとき、乾いた空気1kgに対して水蒸気が何g混ざっているかという割合。\n\nここで一番大切なのは次の2つの性質です。\n・飽和水蒸気圧は温度だけで決まります(<span class=\"term\" data-term=\"気圧\">気圧</span>は関係しません)。温度が高いほど大きくなります。\n・飽和混合比は、飽和水蒸気圧を e、気圧を p として、およそ 0.622 × e ÷ (p − e) で表されます。つまり温度が高いほど大きく、気圧が高いほど小さくなるんですね。\n\n(a)は誤りです。飽和水蒸気圧は温度だけで決まりますから、気圧が800<span class=\"term\" data-term=\"hPa\">hPa</span>に変わっても温度が5℃のままなら値はAと同じです。だから「Aよりも大きい」は誤りです。\n\n(b)は正しいです。気圧は<span class=\"term\" data-term=\"850hPa\">850hPa</span>のままで温度が5℃から10℃に上がると、飽和水蒸気圧 e が大きくなります。上の式で<span class=\"term\" data-term=\"分子\">分子</span>が大きくなって、分母(p − e)は小さくなりますから、飽和混合比は大きくなります。暖かい空気ほど水蒸気をたくさん含めるという、日常の感覚どおりですね。\n\n(c)は誤りです。温度が5℃のままなので飽和水蒸気圧 e は変わりませんが、気圧が850hPaから<span class=\"term\" data-term=\"900hPa\">900hPa</span>に上がると分母(p − e)が大きくなります。ですから飽和混合比は小さくなって、「Bよりも大きい」は誤りです。同じ温度なら、空気が濃い(気圧が高い)ほど、その中に占める水蒸気の割合は小さくなると考えると分かりやすいです。\n\n(a)誤・(b)正・(c)誤 の組み合わせは ④ です。\n\nポイント: 飽和水蒸気圧は温度だけで決まる。飽和混合比は温度が高いほど大きく、気圧が高いほど小さい。この2点を混ぜないことが要です。"
},
{
"q": 4,
"question": "雲の中の<span class=\"term\" data-term=\"水滴\">水滴</span>の成長について述べた次の文(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n(a) <span class=\"term\" data-term=\"水蒸気\">水蒸気</span>の<span class=\"term\" data-term=\"凝結\">凝結</span>による水滴の成長<span class=\"term\" data-term=\"過程\">過程</span>では，水滴の半径が小さいほど<span class=\"term\" data-term=\"単位時間\">単位時間</span>の半径の<span class=\"term\" data-term=\"増加率\">増加率</span>は大きい。\n(b) 水滴同士が<span class=\"term\" data-term=\"衝突・併合\">衝突・併合</span>して成長する過程では，一般に水滴が大きく成長するにつれて単位時間の半径の増加率は小さくなる。\n(c) <span class=\"term\" data-term=\"暖かい雨\">暖かい雨</span>の形成過程における水蒸気の凝結と水滴同士の衝突・併合による水滴の成長はともに遅く，水滴が成長して<span class=\"term\" data-term=\"降水\">降水</span>がはじまるまでに1時間以上かかる。\n(d) <span class=\"term\" data-term=\"積乱雲\">積乱雲</span>の中では強い<span class=\"term\" data-term=\"鉛直流\">鉛直流</span>の中で短時間のうちに水滴が大きく成長し，水滴の直径が10mmを超えることがある。",
"choices": [
"(a)正 (b)正 (c)誤 (d)正",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)正 (b)誤 (c)誤 (d)誤",
"(a)誤 (b)正 (c)正 (d)誤",
"(a)誤 (b)誤 (c)正 (d)正"
],
"answers": [
3
],
"answer_note": "",
"figures": [],
"explanation": "正解は ③ です。\n\n問われているのは、雲の中で<span class=\"term\" data-term=\"水滴\">水滴</span>が大きくなる2つの仕組み、つまり<span class=\"term\" data-term=\"水蒸気\">水蒸気</span>がくっついて大きくなる<span class=\"term\" data-term=\"凝結成長\">凝結成長</span>と、水滴どうしがぶつかって合体する<span class=\"term\" data-term=\"衝突・併合\">衝突・併合</span>の、性質の違いです。\n\n(a)は正しいです。水蒸気の<span class=\"term\" data-term=\"凝結\">凝結</span>による成長では、半径 r の増え方は 1/r に比例します。つまり水滴が小さいうちは半径がぐんぐん伸びますが、大きくなるほど伸びがにぶくなるんですね。水滴に<span class=\"term\" data-term=\"拡散\">拡散</span>でやってくる水蒸気の量は半径に比例してしか増えないのに、半径を同じだけ伸ばすのに必要な水の量は<span class=\"term\" data-term=\"表面積\">表面積</span>(半径の<span class=\"term\" data-term=\"2乗\">2乗</span>)に比例して増えるので、大きい水滴ほど半径は伸びにくくなります。\n\n(b)は誤りです。衝突・併合(水滴どうしがぶつかって1つになること)では、大きな水滴ほど<span class=\"term\" data-term=\"落下速度\">落下速度</span>が速く、落ちていく途中で出会う小さな水滴の数も多くなります。ですから大きくなるほど<span class=\"term\" data-term=\"単位時間\">単位時間</span>の半径の増え方は大きくなります。文は逆のことを言っていますね。\n\n(c)は誤りです。<span class=\"term\" data-term=\"暖かい雨\">暖かい雨</span>(氷の粒を経ずに水滴だけでできる雨)では、たしかに凝結だけの成長は遅いのですが、いったん少し大きな水滴ができると、そこからの衝突・併合はとても速く進みます。ですから雨が降り始めるまでの時間は数十分程度で、「ともに遅く1時間以上かかる」というのは誤りです。\n\n(d)は誤りです。水滴は大きくなると<span class=\"term\" data-term=\"空気の抵抗\">空気の抵抗</span>で平たく<span class=\"term\" data-term=\"変形\">変形</span>して、直径がおよそ5〜6mmを超えると<span class=\"term\" data-term=\"分裂\">分裂</span>してしまいます。強い<span class=\"term\" data-term=\"上昇流\">上昇流</span>のある<span class=\"term\" data-term=\"積乱雲\">積乱雲</span>の中でも、水滴のままで直径10mmを超えることはありません。直径が1cmを超えるような粒があるとすれば、それは水滴ではなく氷の粒(<span class=\"term\" data-term=\"ひょう\">ひょう</span>)なんです。\n\n(a)正・(b)誤・(c)誤・(d)誤 の組み合わせは ③ です。\n\nポイント: 凝結による成長は小さいうちだけ<span class=\"term\" data-term=\"効率\">効率</span>がよく、衝突・併合は大きくなるほど効率がよい。この役割分担が、<span class=\"term\" data-term=\"雲粒\">雲粒</span>から<span class=\"term\" data-term=\"雨粒\">雨粒</span>へ短時間で育つ理由です。"
},
{
"q": 5,
"question": "地球<span class=\"term\" data-term=\"大気\">大気</span>の<span class=\"term\" data-term=\"温室効果\">温室効果</span>の原理について述べた次の文章の下線部(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。ただし，以下の条件が満たされているものと<span class=\"term\" data-term=\"仮定\">仮定</span>する。\n・<span class=\"term\" data-term=\"太陽放射\">太陽放射</span>は<span class=\"term\" data-term=\"大気層\">大気層</span>を完全に<span class=\"term\" data-term=\"透過\">透過</span>する。\n・<span class=\"term\" data-term=\"地表面\">地表面</span>は<span class=\"term\" data-term=\"黒体\">黒体</span>で全ての<span class=\"term\" data-term=\"放射\">放射</span>を完全に<span class=\"term\" data-term=\"吸収\">吸収</span>する。\n・大気は地表面からの<span class=\"term\" data-term=\"黒体放射\">黒体放射</span>を完全に吸収する。\n・大気の温度は<span class=\"term\" data-term=\"一様\">一様</span>であり，大気および地表面は<span class=\"term\" data-term=\"放射平衡\">放射平衡</span>状態にある。\n地球に大気がないときの，地表面が受け取る太陽放射量と放射平衡状態にある地表面温度を<span class=\"term\" data-term=\"絶対温度\">絶対温度</span> <span class=\"term\" data-term=\"T₀\">T₀</span> とする。図のように大気があるときには，<span class=\"term\" data-term=\"大気上端\">大気上端</span>の<span class=\"term\" data-term=\"放射収支\">放射収支</span>から，大気の上向きの<span class=\"term\" data-term=\"長波放射\">長波放射</span>量は (a)<u>地表面が吸収する太陽放射量と等しい</u>。一方，地表面の放射収支から，太陽放射量と大気の下向き長波放射量の和は地表面からの黒体放射量と等しい。また，黒体放射量は物質の絶対温度の (b)<u><span class=\"term\" data-term=\"4乗\">4乗</span></u>に比例する。これらより，大気の温度は (c)<u><span class=\"term\" data-term=\"2¹/⁴\">2¹/⁴</span>T₀</u> となり，地表面温度は (d)<u>T₀</u> となる。",
"choices": [
"(a)正 (b)正 (c)正 (d)正",
"(a)正 (b)正 (c)誤 (d)誤",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)誤 (b)正 (c)誤 (d)正",
"(a)誤 (b)誤 (c)誤 (d)誤"
],
"answers": [
2
],
"answer_note": "",
"figures": [
"56_ippan_p04_1.png"
],
"explanation": "正解は ② です。\n\nここでは、<span class=\"term\" data-term=\"温室効果\">温室効果</span>のいちばん簡単な<span class=\"term\" data-term=\"モデル\">モデル</span>(<span class=\"term\" data-term=\"大気\">大気</span>を1枚の層と考えるモデル)で、<span class=\"term\" data-term=\"放射\">放射</span>のつり合いから温度を求められるかを見ています。\n\nまず図の見方からいきましょう。図には矢印が3種類あります。左の下向きの矢印が「<span class=\"term\" data-term=\"太陽放射\">太陽放射</span>」で、大気を素通りして<span class=\"term\" data-term=\"地表面\">地表面</span>に届きます。右にある上向きと下向きの矢印が「大気の<span class=\"term\" data-term=\"長波放射\">長波放射</span>」で、大気は上へも下へも同じだけ放射することが図で示されています。中央の上向き矢印が「地表面からの<span class=\"term\" data-term=\"黒体放射\">黒体放射</span>」で、これは大気にすべて<span class=\"term\" data-term=\"吸収\">吸収</span>されます。あとは、大気の一番上と地表面のそれぞれで出入りがつり合う、という条件で解いていきます。\n\n大気がないときは、太陽放射がそのまま地表面の黒体放射とつり合っていました。太陽放射量を S とすると S = <span class=\"term\" data-term=\"σ\">σ</span><span class=\"term\" data-term=\"T₀\">T₀</span>⁴ ですね(σは<span class=\"term\" data-term=\"定数\">定数</span>)。\n\n(a)は正しいです。大気の一番上(<span class=\"term\" data-term=\"大気上端\">大気上端</span>)で出入りを見ると、入ってくるのは太陽放射 S だけ、出ていくのは大気の上向き長波放射だけです。地表面からの放射は大気にすべて吸収されて、外へは出られないからなんですね。つり合うので、大気の上向き長波放射 = S = 地表面が吸収する太陽放射量 となります。\n\n(b)は正しいです。黒体放射の量は<span class=\"term\" data-term=\"絶対温度\">絶対温度</span>の<span class=\"term\" data-term=\"4乗\">4乗</span>に比例します(<span class=\"term\" data-term=\"ステファン・ボルツマンの法則\">ステファン・ボルツマンの法則</span>)。\n\n(c)は誤りです。大気は上へも下へも同じ量を出しますから、大気の下向き長波放射も S です。大気の温度を T_a とすると σT_a⁴ = S = σT₀⁴ となって、T_a = T₀ です。2の4分の1乗倍にはなりません。\n\n(d)は誤りです。地表面では、入ってくるのが太陽放射 S と大気の下向き長波放射 S の合計 2S、出ていくのが地表面の黒体放射です。地表面温度を T_s とすると σT_s⁴ = 2S = 2σT₀⁴ となって、T_s = 2の4分の1乗 × T₀(約1.19倍)ですから、T₀ より高くなります。これが温室効果なんです。\n\n(a)正・(b)正・(c)誤・(d)誤 の組み合わせは ② です。\n\nポイント: (c)と(d)の答えがちょうど入れかわっています。大気の温度は大気がないときと同じ T₀、地表面はそれより2の4分の1乗倍だけ高い、と覚えましょう。"
},
{
"q": 6,
"question": "<span class=\"term\" data-term=\"北緯\">北緯</span>30°と北緯45°の2つの地点で，いずれも東向きで<span class=\"term\" data-term=\"風速\">風速</span>100<span class=\"term\" data-term=\"m/s\">m/s</span>の<span class=\"term\" data-term=\"地衡風\">地衡風</span>が吹いているとする。\nこの2つの地点で，<span class=\"term\" data-term=\"水平気圧差\">水平気圧差</span>が4<span class=\"term\" data-term=\"hPa\">hPa</span>となる南北方向の距離を <span class=\"term\" data-term=\"Δ\">Δ</span>Y₃₀, ΔY₄₅ としたとき，ΔY₃₀と ΔY₄₅の比（ΔY₃₀／ΔY₄₅）の値として最も適切なものを，下記の①〜⑤の中から1つ選べ。ただし，2つの地点で<span class=\"term\" data-term=\"大気\">大気</span>の<span class=\"term\" data-term=\"密度\">密度</span>は等しく，<span class=\"term\" data-term=\"地表\">地表</span>の<span class=\"term\" data-term=\"摩擦\">摩擦</span>の影響は無視できるとし，<span class=\"term\" data-term=\"sin30°\">sin30°</span>＝1/2，<span class=\"term\" data-term=\"cos30°\">cos30°</span>＝1.7/2，<span class=\"term\" data-term=\"sin45°\">sin45°</span>＝1/1.4，<span class=\"term\" data-term=\"cos45°\">cos45°</span>＝1/1.4とする。",
"choices": [
"0.6",
"0.7",
"1",
"1.4",
"1.7"
],
"answers": [
4
],
"answer_note": "",
"figures": [],
"explanation": "正解は ④ です。\n\n<span class=\"term\" data-term=\"地衡風\">地衡風</span>の式の中で、<span class=\"term\" data-term=\"緯度\">緯度</span>がどこに効いてくるのか。それを見る計算問題です。\n\nまず使う式の意味からいきましょう。地衡風というのは、<span class=\"term\" data-term=\"気圧\">気圧</span>の差が空気を押す力(<span class=\"term\" data-term=\"気圧傾度力\">気圧傾度力</span>)と、地球の<span class=\"term\" data-term=\"自転\">自転</span>によって生じる<span class=\"term\" data-term=\"見かけの力\">見かけの力</span>(<span class=\"term\" data-term=\"コリオリ力\">コリオリ力</span>)がつり合って吹く風のことです。式にすると\n\n気圧傾度力 = コリオリ力\n(1/<span class=\"term\" data-term=\"ρ\">ρ</span>) × (<span class=\"term\" data-term=\"Δp\">Δp</span> ÷ <span class=\"term\" data-term=\"Δ\">Δ</span>Y) = f × V\n\nとなります。ρ は空気の<span class=\"term\" data-term=\"密度\">密度</span>、Δp は南北の気圧差、ΔY はその気圧差ができる南北方向の距離、V は<span class=\"term\" data-term=\"風速\">風速</span>、f は<span class=\"term\" data-term=\"コリオリ係数\">コリオリ係数</span>です。\n\nコリオリ係数は f = 2<span class=\"term\" data-term=\"Ω\">Ω</span> <span class=\"term\" data-term=\"sinφ\">sinφ</span> で表されて、Ω は地球の自転の速さ(どこでも同じ)、<span class=\"term\" data-term=\"φ\">φ</span> は緯度です。つまり f は sinφ に比例して、緯度が高いほど大きくなります。<span class=\"term\" data-term=\"cos\">cos</span> は出てきません。\n\n求めたいのは ΔY ですから、式を ΔY について解いてみましょう。\n\nΔY = Δp ÷ (ρ × f × V)\n\n今回、Δp(=4<span class=\"term\" data-term=\"hPa\">hPa</span>)、ρ、V(=100<span class=\"term\" data-term=\"m/s\">m/s</span>)は2地点で同じと決められています。ですから ΔY は f に反比例して、f は sinφ に比例するので、結局 ΔY は sinφ に反比例するんですね。\n\nΔY₃₀ ÷ ΔY₄₅ = (1 ÷ <span class=\"term\" data-term=\"sin30°\">sin30°</span>) ÷ (1 ÷ <span class=\"term\" data-term=\"sin45°\">sin45°</span>) = sin45° ÷ sin30°\n\n与えられた値を入れてみます。sin45° = 1/1.4、sin30° = 1/2 ですから\n\nsin45° ÷ sin30° = (1/1.4) ÷ (1/2) = (1/1.4) × 2 = 2 ÷ 1.4 <span class=\"term\" data-term=\"≒\">≒</span> 1.43\n\n一番近いのは ④ の1.4です。\n\n意味を言葉にすると、緯度30°ではコリオリ力が弱いので、同じ100m/sの風を吹かせるには気圧の<span class=\"term\" data-term=\"傾き\">傾き</span>をゆるく、つまり同じ4hPaの差をより長い距離でつくらないといけない、ということなんです。\n\nポイント: 地衡風では、風速と気圧差が同じなら、その気圧差ができる距離は sinφ に反比例します。<span class=\"term\" data-term=\"低緯度\">低緯度</span>ほど、気圧の傾きがゆるくても強い風が吹けるのです。"
},
{
"q": 7,
"question": "図は<span class=\"term\" data-term=\"地表面\">地表面</span>から<span class=\"term\" data-term=\"高度\">高度</span>0.0001<span class=\"term\" data-term=\"hPa\">hPa</span>までの1月の平均<span class=\"term\" data-term=\"気温(K)\">気温(K)</span>の<span class=\"term\" data-term=\"緯度高度分布\">緯度高度分布</span>であり，<span class=\"term\" data-term=\"経度方向\">経度方向</span>に<span class=\"term\" data-term=\"一様\">一様</span>な<span class=\"term\" data-term=\"東西風\">東西風</span>(<span class=\"term\" data-term=\"地衡風\">地衡風</span>)が吹いているものとする。<span class=\"term\" data-term=\"南北温度傾度\">南北温度傾度</span>から<span class=\"term\" data-term=\"温度風\">温度風</span>の関係を<span class=\"term\" data-term=\"考慮\">考慮</span>して，図中のア〜エで示す●の箇所における東西風の<span class=\"term\" data-term=\"西風成分\">西風成分</span>の<span class=\"term\" data-term=\"鉛直方向\">鉛直方向</span>の変化の組み合わせとして適切なものを，下記の①〜⑤の中から1つ選べ。なお，西風成分の鉛直方向の変化は，高度が高くなるにつれて西風成分が大きくなる場合を正とする。",
"choices": [
"ア 正 イ 負 ウ 正 エ 正",
"ア 正 イ 負 ウ 正 エ 負",
"ア 負 イ 正 ウ 正 エ 負",
"ア 負 イ 正 ウ 負 エ 負",
"ア 負 イ 負 ウ 負 エ 正"
],
"answers": [
1
],
"answer_note": "",
"figures": [],
"explanation": "正解は ① です。\n\n<span class=\"term\" data-term=\"温度風\">温度風</span>の関係(南北の気温差から、風が高さとともにどう変わるかが決まるという関係)を、実際の気温<span class=\"term\" data-term=\"分布\">分布</span>の図から読み取れるかどうかがカギです。\n\n覚えることは一つだけで、「極側が冷たいほど、<span class=\"term\" data-term=\"西風\">西風</span>は高いところほど強くなる(正)」です。逆に極側が暖かければ、<span class=\"term\" data-term=\"西風成分\">西風成分</span>は高いほど小さくなります(<span class=\"term\" data-term=\"負\">負</span>)。この言い方なら<span class=\"term\" data-term=\"北半球\">北半球</span>でも<span class=\"term\" data-term=\"南半球\">南半球</span>でもそのまま使えるんですね。\n\n図の見方です。<span class=\"term\" data-term=\"横軸\">横軸</span>は<span class=\"term\" data-term=\"緯度\">緯度</span>で左が南半球、右が北半球、<span class=\"term\" data-term=\"縦軸\">縦軸</span>は<span class=\"term\" data-term=\"気圧\">気圧</span>で上ほど高い<span class=\"term\" data-term=\"高度\">高度</span>、曲線は<span class=\"term\" data-term=\"気温(K)\">気温(K)</span>の<span class=\"term\" data-term=\"等値線\">等値線</span>です。各点で「そこから極の方へ進むと気温が上がるか下がるか」を読み取っていきましょう。1月なので南半球が夏、北半球が冬です。\n\nア(南半球45°付近、約<span class=\"term\" data-term=\"300hPa\">300hPa</span>、<span class=\"term\" data-term=\"対流圏\">対流圏</span>)…対流圏では極ほど<span class=\"term\" data-term=\"低温\">低温</span>です。図でも南極側へ向かうにつれて等値線の値が下がっていきます。極側が冷たいので正ですね。実際、対流圏では<span class=\"term\" data-term=\"亜熱帯ジェット気流\">亜熱帯ジェット気流</span>が上空ほど強くなっています。\n\nイ(南半球45°付近、約2<span class=\"term\" data-term=\"hPa\">hPa</span>、<span class=\"term\" data-term=\"成層圏\">成層圏</span>の上部)…点の左側に270Kの等値線があって、南極側の方が<span class=\"term\" data-term=\"高温\">高温</span>です。夏の極は太陽が当たり続けるので、この高さでは暖かくなるんです。極側が暖かいので負となり、ここは<span class=\"term\" data-term=\"東風\">東風</span>が上ほど強まっている場所にあたります。\n\nウ(南半球45°付近、約0.01hPa、<span class=\"term\" data-term=\"中間圏\">中間圏</span>の上部)…180Kの等値線が南極側に見えて、成層圏とは逆に夏の極の方が低温になっています。極側が冷たいので正です。\n\nエ(北半球40°付近、約2hPa、成層圏の上部)…1月の<span class=\"term\" data-term=\"北極\">北極</span>側は太陽が当たらず低温で、北へ行くほど等値線の値が下がります。極側が冷たいので正で、これが冬の<span class=\"term\" data-term=\"極夜ジェット\">極夜ジェット</span>にあたります。\n\nア正・イ負・ウ正・エ正 の組み合わせは ① です。\n\nポイント: 「極側が冷たければ西風は上ほど強い」。夏の極は成層圏では暖かく中間圏では冷たいという逆転があることも、図で確かめておきましょう。",
"figures_note": "この問題の図は、市販書籍などからの引用を含むため本アプリでは表示していません。図は気象業務支援センターが公開している試験問題冊子でご確認ください。"
},
{
"q": 8,
"question": "<span class=\"term\" data-term=\"北半球\">北半球</span>における<span class=\"term\" data-term=\"発達期\">発達期</span>の<span class=\"term\" data-term=\"温帯低気圧\">温帯低気圧</span>について述べた次の文(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n(a) <span class=\"term\" data-term=\"低気圧\">低気圧</span>周辺の<span class=\"term\" data-term=\"相対的\">相対的</span>に<span class=\"term\" data-term=\"高温\">高温</span>の<span class=\"term\" data-term=\"領域\">領域</span>では<span class=\"term\" data-term=\"北よりの風\">北よりの風</span>で<span class=\"term\" data-term=\"上昇流\">上昇流</span>，<span class=\"term\" data-term=\"低温\">低温</span>の領域では<span class=\"term\" data-term=\"南よりの風\">南よりの風</span>で<span class=\"term\" data-term=\"下降流\">下降流</span>となっている。\n(b) 地上の低気圧の中心は<span class=\"term\" data-term=\"上層\">上層</span>の<span class=\"term\" data-term=\"気圧の谷\">気圧の谷</span>の東側にある。\n(c) 低気圧は<span class=\"term\" data-term=\"南北温度傾度\">南北温度傾度</span>の大きい<span class=\"term\" data-term=\"偏西風帯\">偏西風帯</span>で<span class=\"term\" data-term=\"発達\">発達</span>し，熱を<span class=\"term\" data-term=\"高緯度\">高緯度</span>に運んでいる。\n(d) 低気圧の発達には<span class=\"term\" data-term=\"水蒸気\">水蒸気</span>の<span class=\"term\" data-term=\"凝結\">凝結</span>による<span class=\"term\" data-term=\"熱エネルギー\">熱エネルギー</span>の<span class=\"term\" data-term=\"供給\">供給</span>が不可欠である。",
"choices": [
"(a)正 (b)正 (c)正 (d)誤",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)正 (b)誤 (c)誤 (d)正",
"(a)誤 (b)正 (c)正 (d)正",
"(a)誤 (b)正 (c)正 (d)誤"
],
"answers": [
5
],
"answer_note": "",
"figures": [],
"explanation": "正解は ⑤ です。\n\nこの問題で問われているのは、<span class=\"term\" data-term=\"発達期\">発達期</span>の<span class=\"term\" data-term=\"温帯低気圧\">温帯低気圧</span>がどんな構造をしていて、なぜ<span class=\"term\" data-term=\"発達\">発達</span>するのか、です。\n\n(a)は誤りです。<span class=\"term\" data-term=\"北半球\">北半球</span>の温帯低気圧では、暖かい空気のある側(<span class=\"term\" data-term=\"低気圧\">低気圧</span>の南東側)で<span class=\"term\" data-term=\"南よりの風\">南よりの風</span>が吹いて、<span class=\"term\" data-term=\"暖気\">暖気</span>が<span class=\"term\" data-term=\"冷気\">冷気</span>の上へすべり上がるようにして<span class=\"term\" data-term=\"上昇流\">上昇流</span>になります。反対に冷たい空気のある側(北西側)では<span class=\"term\" data-term=\"北よりの風\">北よりの風</span>が吹いて、<span class=\"term\" data-term=\"下降流\">下降流</span>になるんですね。文は<span class=\"term\" data-term=\"風向\">風向</span>と上昇下降の組み合わせが逆です。\n\n(b)は正しいです。発達期の温帯低気圧は、上空の<span class=\"term\" data-term=\"気圧の谷\">気圧の谷</span>(<span class=\"term\" data-term=\"トラフ\">トラフ</span>、周りより<span class=\"term\" data-term=\"気圧\">気圧</span>の低い細長い部分)が地上の低気圧の中心より西側にずれた、西に傾いた構造をしています。言いかえれば、地上の低気圧の中心は<span class=\"term\" data-term=\"上層\">上層</span>の谷の東側にあるということです。この<span class=\"term\" data-term=\"傾き\">傾き</span>があるおかげで上空の谷の<span class=\"term\" data-term=\"前面\">前面</span>で上昇流が起きて、低気圧が発達していくというわけです。\n\n(c)は正しいです。温帯低気圧は、南北の温度差が大きい<span class=\"term\" data-term=\"偏西風帯\">偏西風帯</span>(<span class=\"term\" data-term=\"中緯度\">中緯度</span>)で、その温度差がもつ<span class=\"term\" data-term=\"エネルギー\">エネルギー</span>を使って発達します(<span class=\"term\" data-term=\"傾圧不安定\">傾圧不安定</span>といいます)。暖気を北へ、<span class=\"term\" data-term=\"寒気\">寒気</span>を南へ動かすので、結果として熱を<span class=\"term\" data-term=\"低緯度\">低緯度</span>から<span class=\"term\" data-term=\"高緯度\">高緯度</span>へ運ぶ役割を果たしています。\n\n(d)は誤りです。温帯低気圧の発達の基本は、南北の温度差がもつエネルギーが風のエネルギーに変わることです。<span class=\"term\" data-term=\"水蒸気\">水蒸気</span>の<span class=\"term\" data-term=\"凝結\">凝結</span>で出る熱は発達を助けはしますが、なくてはならないものではありません。<span class=\"term\" data-term=\"凝結熱\">凝結熱</span>がエネルギー源として欠かせないのは、むしろ台風(<span class=\"term\" data-term=\"熱帯低気圧\">熱帯低気圧</span>)の方ですね。\n\n(a)誤・(b)正・(c)正・(d)誤 の組み合わせは ⑤ です。\n\nポイント: 温帯低気圧は「南北の温度差」で発達し、上空の谷は地上の中心より西にあります。凝結熱が命である台風との違いをセットで覚えましょう。"
},
{
"q": 9,
"question": "<span class=\"term\" data-term=\"孤立\">孤立</span>した<span class=\"term\" data-term=\"積乱雲\">積乱雲</span>と複数の積乱雲が<span class=\"term\" data-term=\"組織化\">組織化</span>した<span class=\"term\" data-term=\"マルチセル型\">マルチセル型</span>の<span class=\"term\" data-term=\"メソ対流系\">メソ対流系</span>を比較して述べた次の文章の下線部 (a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n孤立した積乱雲は，発生から<span class=\"term\" data-term=\"衰弱\">衰弱</span>までの時間が一般に (a)<u>10分間から20分間程度</u>である。このように寿命が短い主な理由は，積乱雲の<span class=\"term\" data-term=\"発達\">発達</span>が進むとともに，積乱雲の内部において (b)<u><span class=\"term\" data-term=\"降水粒子\">降水粒子</span>の<span class=\"term\" data-term=\"荷重\">荷重</span>や<span class=\"term\" data-term=\"融解\">融解</span>・<span class=\"term\" data-term=\"蒸発\">蒸発</span>にともなう<span class=\"term\" data-term=\"冷却\">冷却</span>により，<span class=\"term\" data-term=\"上昇流\">上昇流</span>が維持できなくなるため</u>である。\n組織化されたマルチセル型のメソ対流系は，孤立した積乱雲が発生するときよりも，<span class=\"term\" data-term=\"一般風\">一般風</span>の<span class=\"term\" data-term=\"鉛直シアー\">鉛直シアー</span>が (c)<u>小さい</u>ときに形成されることが多い。マルチセル型のメソ対流系では，(d)<u><span class=\"term\" data-term=\"対流系\">対流系</span>内の積乱雲の<span class=\"term\" data-term=\"下降流\">下降流</span>域から吹き出した<span class=\"term\" data-term=\"気流\">気流</span>が周辺の<span class=\"term\" data-term=\"高温高湿\">高温高湿</span>な気流とぶつかって空気を持ち上げ</u>，新たな<span class=\"term\" data-term=\"対流雲\">対流雲</span>が発生・発達して積乱雲に成長し，世代交代が持続的に起きる。この結果，マルチセル型のメソ対流系は孤立した積乱雲より長寿命となる。",
"choices": [
"(a)正 (b)正 (c)正 (d)誤",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)誤 (b)正 (c)誤 (d)正",
"(a)誤 (b)正 (c)誤 (d)誤",
"(a)誤 (b)誤 (c)正 (d)正"
],
"answers": [
3
],
"answer_note": "",
"figures": [],
"explanation": "正解は ③ です。\n\nここでは、単独の<span class=\"term\" data-term=\"積乱雲\">積乱雲</span>と、複数の積乱雲がまとまって世代交代しながら続く<span class=\"term\" data-term=\"マルチセル型\">マルチセル型</span>との違いが分かっているかを見ています。\n\n(a)は誤りです。<span class=\"term\" data-term=\"孤立\">孤立</span>した積乱雲の一生は、発生から<span class=\"term\" data-term=\"衰弱\">衰弱</span>までおよそ30分から1時間程度なんです。10分から20分では短すぎます。\n\n(b)は正しいです。積乱雲が<span class=\"term\" data-term=\"発達\">発達</span>すると雲の中に雨や氷の粒がたまって、その重さ(<span class=\"term\" data-term=\"荷重\">荷重</span>)が<span class=\"term\" data-term=\"上昇流\">上昇流</span>を押さえます。さらに落ちてくる粒が融けたり<span class=\"term\" data-term=\"蒸発\">蒸発</span>したりするとき、まわりの空気から熱をうばうので、空気が冷えて重くなり<span class=\"term\" data-term=\"下降流\">下降流</span>に変わります。ここがだいじなところなんですが、この下降流が、下から入ってくる暖かく湿った空気の入口をふさいでしまうので、上昇流が続かなくなって雲は衰弱します。\n\n(c)は誤りです。マルチセル型ができるのは、<span class=\"term\" data-term=\"一般風\">一般風</span>の<span class=\"term\" data-term=\"鉛直シアー\">鉛直シアー</span>(高さによって風の向きや強さが変わること)が大きいときです。<span class=\"term\" data-term=\"シアー\">シアー</span>が大きいと上昇流の部分と下降流の部分が横にずれて位置するので、下降流が自分自身の上昇流をつぶしてしまわず、<span class=\"term\" data-term=\"対流系\">対流系</span>が長続きできるんですね。文は「小さい」としているので誤りです。\n\n(d)は正しいです。積乱雲から吹き出した冷たい空気は<span class=\"term\" data-term=\"地表\">地表</span>付近を広がりながら、まわりの<span class=\"term\" data-term=\"高温\">高温</span>多湿な空気とぶつかります。冷たい空気は重いので、暖かく湿った空気を持ち上げる坂のようなはたらきをして、その場所に新しい<span class=\"term\" data-term=\"対流雲\">対流雲</span>ができます。これがくり返されることで世代交代が続いて、集団としては長い寿命をもつことになります。\n\n(a)誤・(b)正・(c)誤・(d)正 の組み合わせは ③ です。\n\nポイント: 鉛直シアーが大きいほど上昇流と下降流が離れて<span class=\"term\" data-term=\"共存\">共存</span>でき、積乱雲は<span class=\"term\" data-term=\"組織化\">組織化</span>して長寿命になります。"
},
{
"q": 10,
"question": "<span class=\"term\" data-term=\"成層圏\">成層圏</span>の<span class=\"term\" data-term=\"オゾン\">オゾン</span>について述べた次の文(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n(a) <span class=\"term\" data-term=\"高度\">高度</span>20〜60kmにおける気温の<span class=\"term\" data-term=\"経度平均\">経度平均</span>が<span class=\"term\" data-term=\"夏極\">夏極</span>に近いほど<span class=\"term\" data-term=\"高温\">高温</span>であるのは，オゾンの<span class=\"term\" data-term=\"紫外線\">紫外線</span><span class=\"term\" data-term=\"吸収\">吸収</span>に伴う<span class=\"term\" data-term=\"加熱量\">加熱量</span>がより多くなるからである。\n(b) オゾンは主として<span class=\"term\" data-term=\"高緯度\">高緯度</span>の成層圏で<span class=\"term\" data-term=\"生成\">生成</span>され，<span class=\"term\" data-term=\"蓄積\">蓄積</span>される。\n(c) <span class=\"term\" data-term=\"北半球\">北半球</span>の<span class=\"term\" data-term=\"中高緯度\">中高緯度</span>の<span class=\"term\" data-term=\"オゾン全量\">オゾン全量</span>は，冬から春にかけた時期が他の時期よりも多い。\n(d) 南極では，<span class=\"term\" data-term=\"極渦\">極渦</span>が弱い年ほど成層圏が<span class=\"term\" data-term=\"低温\">低温</span>になりやすく，<span class=\"term\" data-term=\"オゾンホール\">オゾンホール</span>が<span class=\"term\" data-term=\"発達\">発達</span>する<span class=\"term\" data-term=\"傾向\">傾向</span>がある。",
"choices": [
"(a)正 (b)正 (c)正 (d)誤",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)正 (b)誤 (c)誤 (d)正",
"(a)誤 (b)正 (c)誤 (d)誤",
"(a)誤 (b)誤 (c)誤 (d)正"
],
"answers": [
2
],
"answer_note": "",
"figures": [],
"explanation": "正解は ② です。\n\n<span class=\"term\" data-term=\"成層圏\">成層圏</span>の<span class=\"term\" data-term=\"オゾン\">オゾン</span>が「どこでつくられ、どこにたまるか」。そして、それが気温や<span class=\"term\" data-term=\"オゾンホール\">オゾンホール</span>にどう関係するか。ここが分かっているかどうかがカギです。\n\n(a)は正しいです。オゾンは太陽からの<span class=\"term\" data-term=\"紫外線\">紫外線</span>を<span class=\"term\" data-term=\"吸収\">吸収</span>して、その<span class=\"term\" data-term=\"エネルギー\">エネルギー</span>でまわりの空気を暖めます。夏の極は一日じゅう太陽が当たり続けるので紫外線の吸収量が多く、<span class=\"term\" data-term=\"高度\">高度</span>20〜60km(成層圏の中部から<span class=\"term\" data-term=\"中間圏\">中間圏</span>の下部)では<span class=\"term\" data-term=\"夏極\">夏極</span>に近いほど気温が高くなります。地上の感覚とは違って、この高さでは太陽の当たり方がそのまま気温を決めているんですね。\n\n(b)は誤りです。オゾンがつくられるのは、紫外線がいちばん強く当たる<span class=\"term\" data-term=\"低緯度\">低緯度</span>(<span class=\"term\" data-term=\"熱帯\">熱帯</span>)の<span class=\"term\" data-term=\"上部成層圏\">上部成層圏</span>です。つくられたオゾンは、成層圏をゆっくり極の方へ運ぶ大<span class=\"term\" data-term=\"規模\">規模</span>な流れ(<span class=\"term\" data-term=\"ブリューワー・ドブソン循環\">ブリューワー・ドブソン循環</span>)によって<span class=\"term\" data-term=\"中高緯度\">中高緯度</span>へ運ばれて、そこで下降してたまります。「<span class=\"term\" data-term=\"生成\">生成</span>の場所は低緯度、たまる場所は<span class=\"term\" data-term=\"高緯度\">高緯度</span>」と分けて覚えましょう。\n\n(c)は正しいです。この運ぶ流れは冬に強くはたらくので、<span class=\"term\" data-term=\"北半球\">北半球</span>の中高緯度の<span class=\"term\" data-term=\"オゾン全量\">オゾン全量</span>は冬から春(2〜4月ごろ)に最も多くなって、秋に最も少なくなります。\n\n(d)は誤りです。南極では、極をとりまく強い渦(<span class=\"term\" data-term=\"極渦\">極渦</span>)が強い年ほど、外からの暖かい空気が入りにくくなって成層圏が非常に<span class=\"term\" data-term=\"低温\">低温</span>になります。低温になると<span class=\"term\" data-term=\"極域成層圏雲\">極域成層圏雲</span>ができて、その粒の表面での<span class=\"term\" data-term=\"化学反応\">化学反応</span>がオゾンの破壊を進めるので、オゾンホールが<span class=\"term\" data-term=\"発達\">発達</span>します。文は「弱い年ほど」としているので逆ですね。\n\n(a)正・(b)誤・(c)正・(d)誤 の組み合わせは ② です。\n\nポイント: オゾンは低緯度で生まれて高緯度にたまる。オゾンホールは極渦が強く低温の年ほど発達する。この2つの向きを取りちがえないことが大切です。"
},
{
"q": 11,
"question": "<span class=\"term\" data-term=\"エルニーニョ現象\">エルニーニョ現象</span>発生時の<span class=\"term\" data-term=\"天候\">天候</span>の特徴について述べた次の文章の下線部(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\nエルニーニョ現象が発生しているときには，ペルーやコロンビアなどの南米北部では，平均気温が<span class=\"term\" data-term=\"平年\">平年</span>に比べて (a)<u>低い</u><span class=\"term\" data-term=\"傾向\">傾向</span>が，また，インドネシアやオーストラリア北部などの西部太平洋<span class=\"term\" data-term=\"熱帯域\">熱帯域</span>では，<span class=\"term\" data-term=\"降水量\">降水量</span>が平年に比べて (b)<u>多い</u>傾向がみられる。\n日本では，<span class=\"term\" data-term=\"西日本\">西日本</span>の<span class=\"term\" data-term=\"夏季\">夏季</span>(6〜8月)において平均気温が平年に比べて (c)<u>高い</u>傾向が，<span class=\"term\" data-term=\"東日本\">東日本</span>の<span class=\"term\" data-term=\"冬季\">冬季</span>(12〜2月)では，平均気温は平年に比べて (d)<u>高い</u>傾向がみられる。",
"choices": [
"(a)正 (b)正 (c)誤 (d)正",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)誤 (b)正 (c)誤 (d)誤",
"(a)誤 (b)誤 (c)正 (d)正",
"(a)誤 (b)誤 (c)誤 (d)正"
],
"answers": [
5
],
"answer_note": "",
"figures": [],
"explanation": "正解は ⑤ です。\n\n<span class=\"term\" data-term=\"エルニーニョ現象\">エルニーニョ現象</span>(太平洋<span class=\"term\" data-term=\"赤道域\">赤道域</span>の東側で<span class=\"term\" data-term=\"海面水温\">海面水温</span>が<span class=\"term\" data-term=\"平年\">平年</span>より高い状態が続く<span class=\"term\" data-term=\"現象\">現象</span>)が起きたとき、世界と日本の<span class=\"term\" data-term=\"天候\">天候</span>にどんな<span class=\"term\" data-term=\"傾向\">傾向</span>が出るか。それが正面から問われています。\n\nまず全体像からいきましょう。ふだんは太平洋赤道域の西側(インドネシア付近)の海が暖かくて、そこで<span class=\"term\" data-term=\"積乱雲\">積乱雲</span>が盛んに発生しています。<span class=\"term\" data-term=\"エルニーニョ\">エルニーニョ</span>のときは、この暖かい海と積乱雲の中心が東(<span class=\"term\" data-term=\"日付変更線\">日付変更線</span>付近)へずれます。この「雨の降る場所の移動」が、世界中の天候をずらしていくんですね。\n\n(a)は誤りです。南米北部(ペルーやコロンビアなど)は東側にあたって、すぐ沖の海面水温が高くなるので、平均気温は平年より高い傾向になります。文は「低い」としているので誤りです。\n\n(b)は誤りです。積乱雲の中心が東へ移った分だけ、インドネシアやオーストラリア北部などの西部太平洋<span class=\"term\" data-term=\"熱帯域\">熱帯域</span>では雨雲ができにくくなって、<span class=\"term\" data-term=\"降水量\">降水量</span>は平年より少ない傾向になります。エルニーニョの年にオーストラリアで<span class=\"term\" data-term=\"干ばつ\">干ばつ</span>が起こりやすいのは、このためなんです。\n\n(c)は誤りです。エルニーニョの夏は、<span class=\"term\" data-term=\"太平洋高気圧\">太平洋高気圧</span>の日本付近への<span class=\"term\" data-term=\"張り出し\">張り出し</span>が弱まりやすく、<span class=\"term\" data-term=\"西日本\">西日本</span>の夏(6〜8月)の平均気温は平年より低い、つまり<span class=\"term\" data-term=\"冷夏\">冷夏</span>になりやすい傾向です。\n\n(d)は正しいです。エルニーニョの冬は、日本付近で<span class=\"term\" data-term=\"冬型の気圧配置\">冬型の気圧配置</span>が弱まりやすく、<span class=\"term\" data-term=\"東日本\">東日本</span>の冬(12〜2月)の平均気温は平年より高い、つまり<span class=\"term\" data-term=\"暖冬\">暖冬</span>になりやすい傾向ですね。\n\n(a)誤・(b)誤・(c)誤・(d)正 の組み合わせは ⑤ です。\n\nポイント: 日本への影響は「冷夏・暖冬」とまとめて覚えられます。世界では、東(南米側)が暖かく湿り、西(インドネシア側)が乾く、と押さえましょう。"
},
{
"q": 12,
"question": "<span class=\"term\" data-term=\"気象\">気象</span>の<span class=\"term\" data-term=\"予報業務\">予報業務</span>の<span class=\"term\" data-term=\"許可\">許可</span>を受けている者(「<span class=\"term\" data-term=\"予報業務許可事業者\">予報業務許可事業者</span>」という)に<span class=\"term\" data-term=\"罰則\">罰則</span>が適用される事例について述べた次の文(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>について，下記の①〜⑤の中から正しいものを1つ選べ。\n(a) 予報業務許可事業者が，<span class=\"term\" data-term=\"当該\">当該</span>予報業務の目的および範囲に<span class=\"term\" data-term=\"係る\">係る</span><span class=\"term\" data-term=\"気象庁\">気象庁</span>の<span class=\"term\" data-term=\"警報事項\">警報事項</span>を予報業務の利用者に<span class=\"term\" data-term=\"伝達\">伝達</span>することを怠った。\n(b) <span class=\"term\" data-term=\"気象庁長官\">気象庁長官</span>による予報業務の<span class=\"term\" data-term=\"改善命令\">改善命令</span>を受けた予報業務許可事業者が，改善命令に違反して業務を行った。\n(c) 予報業務許可事業者が，予報業務のうち<span class=\"term\" data-term=\"現象の予想\">現象の予想</span>を<span class=\"term\" data-term=\"気象予報士\">気象予報士</span>以外の者に行わせた。\n(d) 予報業務許可事業者が，気象庁長官の<span class=\"term\" data-term=\"認可\">認可</span>を受けずに予報業務の範囲を変更して業務を行った。",
"choices": [
"(a)のみ誤り",
"(b)のみ誤り",
"(c)のみ誤り",
"(d)のみ誤り",
"すべて正しい"
],
"answers": [
1
],
"answer_note": "",
"figures": [],
"explanation": "正解は ① です。\n\nこの問題で問われているのは、<span class=\"term\" data-term=\"予報業務許可事業者\">予報業務許可事業者</span>(<span class=\"term\" data-term=\"気象庁\">気象庁</span>の<span class=\"term\" data-term=\"許可\">許可</span>を受けて<span class=\"term\" data-term=\"予報\">予報</span>を行う会社など)の<span class=\"term\" data-term=\"義務\">義務</span>のうち、破ると<span class=\"term\" data-term=\"罰則\">罰則</span>がつくものと、努力目標にとどまるものを見分けられるかどうかです。\n\n(a)は誤りです。つまり、この事例では罰則は適用されません。<span class=\"term\" data-term=\"気象業務法\">気象業務法</span>では、予報業務許可事業者は、自分の<span class=\"term\" data-term=\"予報業務\">予報業務</span>の目的や範囲に関わる気象庁の<span class=\"term\" data-term=\"警報事項\">警報事項</span>を、利用者に<span class=\"term\" data-term=\"迅速\">迅速</span>に<span class=\"term\" data-term=\"伝達\">伝達</span>するように努めなければならない、と定められています。これは<span class=\"term\" data-term=\"努力義務\">努力義務</span>(努めるように、という定め)なので、怠っても罰則の対象にはならないんですね。\n\n(b)は正しいです。<span class=\"term\" data-term=\"気象庁長官\">気象庁長官</span>は、予報の適正を確保するために必要があるときは<span class=\"term\" data-term=\"事業者\">事業者</span>に<span class=\"term\" data-term=\"改善命令\">改善命令</span>を出すことができます。この命令に違反して業務を行った場合は罰則の対象になります。\n\n(c)は正しいです。予報業務のうち<span class=\"term\" data-term=\"現象の予想\">現象の予想</span>は、必ず<span class=\"term\" data-term=\"気象予報士\">気象予報士</span>に行わせなければならないと定められています。これに違反して気象予報士以外の人に予想をさせた場合は罰則の対象です。\n\n(d)は正しいです。予報業務の目的や範囲を変更するときは、あらかじめ気象庁長官の<span class=\"term\" data-term=\"認可\">認可</span>を受けなければなりません。認可を受けずに変更して業務を行えば罰則の対象になります。\n\nというわけで、罰則が適用される事例としてあてはまらないのは(a)だけですから、①「(a)のみ誤り」が正解です。\n\nポイント: <span class=\"term\" data-term=\"条文\">条文</span>の語尾に注目してみましょう。「〜しなければならない」は義務で罰則につながることが多く、「〜するように努めなければならない」は努力義務で罰則がありません。"
},
{
"q": 13,
"question": "<span class=\"term\" data-term=\"気象予報士\">気象予報士</span>について述べた次の文(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n(a) <span class=\"term\" data-term=\"予報業務\">予報業務</span>の<span class=\"term\" data-term=\"許可\">許可</span>を受けた<span class=\"term\" data-term=\"事業者\">事業者</span>の下で予報業務に<span class=\"term\" data-term=\"従事\">従事</span>しようとする気象予報士は，事業者を通じて<span class=\"term\" data-term=\"予め\">予め</span><span class=\"term\" data-term=\"その旨\">その旨</span>を<span class=\"term\" data-term=\"気象庁長官\">気象庁長官</span>に<span class=\"term\" data-term=\"届け出\">届け出</span>なければならない。\n(b) 予報業務の許可を受けた事業者は，配置した気象予報士の<span class=\"term\" data-term=\"登録証\">登録証</span>を<span class=\"term\" data-term=\"事業所\">事業所</span>に<span class=\"term\" data-term=\"掲示\">掲示</span>しておかなければならない。\n(c) 予報業務の許可を受けた事業者が発表した天気<span class=\"term\" data-term=\"予報\">予報</span>について解説を行う者は，気象予報士の資格を有していなくてもよい。\n(d) 予報業務の許可を受けた事業者は，予報業務を行う事業所に複数名配置した気象予報士に1名の<span class=\"term\" data-term=\"欠員\">欠員</span>が生じ，<span class=\"term\" data-term=\"国土交通省令\">国土交通省令</span>で定める人数に満たなくなった場合には，ただちに予報業務を停止しなければならない。",
"choices": [
"(a)正 (b)正 (c)誤 (d)正",
"(a)正 (b)誤 (c)誤 (d)誤",
"(a)誤 (b)正 (c)誤 (d)誤",
"(a)誤 (b)誤 (c)正 (d)正",
"(a)誤 (b)誤 (c)正 (d)誤"
],
"answers": [
5
],
"answer_note": "",
"figures": [],
"explanation": "正解は ⑤ です。\n\nここでは、<span class=\"term\" data-term=\"気象予報士\">気象予報士</span>にしかできない<span class=\"term\" data-term=\"仕事\">仕事</span>は何か、そして<span class=\"term\" data-term=\"事業者\">事業者</span>に課された手続きのきまりを、正しく覚えているかを見ています。\n\n(a)は誤りです。気象予報士の側が、あらかじめ<span class=\"term\" data-term=\"気象庁長官\">気象庁長官</span>に<span class=\"term\" data-term=\"届け出\">届け出</span>るというきまりはありません。<span class=\"term\" data-term=\"届出\">届出</span>をするのは<span class=\"term\" data-term=\"予報業務\">予報業務</span>の<span class=\"term\" data-term=\"許可\">許可</span>を受けた事業者の方で、しかも<span class=\"term\" data-term=\"事業所\">事業所</span>に置く気象予報士の氏名などに変更があったときに、<span class=\"term\" data-term=\"遅滞なく\">遅滞なく</span>届け出る形なんです。「あらかじめ」「気象予報士本人が」という2点が誤りですね。\n\n(b)は誤りです。気象予報士には<span class=\"term\" data-term=\"登録証\">登録証</span>が<span class=\"term\" data-term=\"交付\">交付</span>されますが、それを事業所に<span class=\"term\" data-term=\"掲示\">掲示</span>しなければならないという定めはありません。\n\n(c)は正しいです。気象予報士でなければできないのは「<span class=\"term\" data-term=\"現象の予想\">現象の予想</span>」を行うことだけです。すでに発表された天気<span class=\"term\" data-term=\"予報\">予報</span>を紹介したり、その内容を解説したりすることは、気象予報士の資格がなくてもできます。テレビで<span class=\"term\" data-term=\"気象\">気象</span>情報を伝える人が必ずしも気象予報士とは限らないのは、このためなんですね。\n\n(d)は誤りです。事業所に置く気象予報士の数が<span class=\"term\" data-term=\"国土交通省令\">国土交通省令</span>で定める<span class=\"term\" data-term=\"員数\">員数</span>を下回ったときは、二週間以内に、<span class=\"term\" data-term=\"基準\">基準</span>に<span class=\"term\" data-term=\"適合\">適合</span>させるために必要な<span class=\"term\" data-term=\"措置\">措置</span>をとらなければならない、と定められています。ただちに予報業務を停止しなければならないわけではありません。\n\n(a)誤・(b)誤・(c)正・(d)誤 の組み合わせは ⑤ です。\n\nポイント: 資格が必要なのは「現象の予想」だけ。人数が足りなくなったときは「二週間以内に立て直す」。この2つを押さえておくと、この分野の設問の多くに対応できます。"
},
{
"q": 14,
"question": "<span class=\"term\" data-term=\"気象観測\">気象観測</span>について述べた次の文(a)〜(d)の<span class=\"term\" data-term=\"正誤\">正誤</span>の組み合わせとして正しいものを，下記の①〜⑤の中から1つ選べ。\n(a) 農園で<span class=\"term\" data-term=\"果樹\">果樹</span>の管理のために農園内の<span class=\"term\" data-term=\"苗木\">苗木</span>の間に温度計を<span class=\"term\" data-term=\"設置\">設置</span>する場合は，その農園の運営者は温度計の設置について<span class=\"term\" data-term=\"気象庁長官\">気象庁長官</span>に<span class=\"term\" data-term=\"届け出\">届け出</span>なければならない。\n(b) <span class=\"term\" data-term=\"学会\">学会</span>に発表する<span class=\"term\" data-term=\"論文\">論文</span>に掲載するデータを得るために大学が<span class=\"term\" data-term=\"風速\">風速</span><span class=\"term\" data-term=\"観測施設\">観測施設</span>を設置する場合は，その大学は観測施設の設置について気象庁長官に届け出なければならない。\n(c) スキー場を運営する<span class=\"term\" data-term=\"事業者\">事業者</span>が<span class=\"term\" data-term=\"ゲレンデ\">ゲレンデ</span>付近の気温をホームページに掲載するためにスキー場内に温度計を設置する場合は，その事業者は温度計の設置について気象庁長官に届け出なければならない。\n(d) 鉄道事業者が列車の安全な運行に利用するために<span class=\"term\" data-term=\"降水量\">降水量</span>の観測施設を設置する場合は，<span class=\"term\" data-term=\"国土交通省令\">国土交通省令</span>で定める<span class=\"term\" data-term=\"技術上の基準\">技術上の基準</span>に従って<span class=\"term\" data-term=\"観測\">観測</span>を行わなければならない。",
"choices": [
"(a)正 (b)正 (c)誤 (d)正",
"(a)正 (b)正 (c)誤 (d)誤",
"(a)正 (b)誤 (c)正 (d)誤",
"(a)誤 (b)誤 (c)正 (d)正",
"(a)誤 (b)誤 (c)誤 (d)正"
],
"answers": [
4
],
"answer_note": "",
"figures": [],
"explanation": "正解は ④ です。\n\n<span class=\"term\" data-term=\"気象庁\">気象庁</span>以外の人が<span class=\"term\" data-term=\"気象観測\">気象観測</span>をするとき、どんな場合に<span class=\"term\" data-term=\"技術上の基準\">技術上の基準</span>に従う必要があって、<span class=\"term\" data-term=\"気象庁長官\">気象庁長官</span>への<span class=\"term\" data-term=\"届出\">届出</span>が必要になるのか。その線引きができるかどうかがカギです。\n\n判断の物差しは2つだけなんです。\n・その<span class=\"term\" data-term=\"観測\">観測</span>の<span class=\"term\" data-term=\"成果\">成果</span>を発表するために行うものか。\n・その成果を災害の防止に利用するために行うものか。\nこのどちらかに当てはまるときは、<span class=\"term\" data-term=\"国土交通省令\">国土交通省令</span>で定める技術上の基準に従って観測しなければならず、施設を設けたときは気象庁長官に<span class=\"term\" data-term=\"届け出\">届け出</span>ます。どちらにも当てはまらない、自分たちの中だけで使う観測は対象外です。なお、研究や教育のために行う観測は、国土交通省令(<span class=\"term\" data-term=\"気象業務法施行規則\">気象業務法施行規則</span>)によって技術上の基準の<span class=\"term\" data-term=\"適用外\">適用外</span>とされていて、届出も要りません。\n\n(a)は誤りです。農園の中で<span class=\"term\" data-term=\"果樹\">果樹</span>の管理のために温度を測るのは、自分たちの作業に使うだけの観測ですね。発表するためでも災害防止のためでもないので、届出は必要ありません。\n\n(b)は誤りです。大学が<span class=\"term\" data-term=\"学会\">学会</span>に発表する<span class=\"term\" data-term=\"論文\">論文</span>のためにデータをとる観測は、研究のために行う観測にあたって、届出が不要とされている施設に含まれます。\n\n(c)は正しいです。<span class=\"term\" data-term=\"ゲレンデ\">ゲレンデ</span>付近の気温をホームページに載せるのは、観測の成果を広く発表することにあたります。ですから技術上の基準に従う必要があって、届出も必要です。\n\n(d)は正しいです。鉄道<span class=\"term\" data-term=\"事業者\">事業者</span>が列車の安全な運行に使うために<span class=\"term\" data-term=\"降水量\">降水量</span>を測るのは、その成果を災害の防止に利用するための観測にあたります。ですから国土交通省令で定める技術上の基準に従って観測しなければなりません。\n\n(a)誤・(b)誤・(c)正・(d)正 の組み合わせは ④ です。\n\nポイント: 「外へ発表する」か「災害防止に使う」か。このどちらかに当てはまるかで判断し、研究・教育のための<span class=\"term\" data-term=\"観測施設\">観測施設</span>は届出が不要、と覚えましょう。"
},
{
"q": 15,
"question": "<span class=\"term\" data-term=\"気象業務法\">気象業務法</span>に定められた<span class=\"term\" data-term=\"警報\">警報</span>や<span class=\"term\" data-term=\"特別警報\">特別警報</span>について述べた次の文(a)〜(d)の下線部の<span class=\"term\" data-term=\"正誤\">正誤</span>について，下記の①〜⑤の中から正しいものを1つ選べ。\n(a) 警報とは，<u>重大な災害の起こるおそれのある<span class=\"term\" data-term=\"旨\">旨</span>を警告して行う<span class=\"term\" data-term=\"予報\">予報</span></u>をいう。\n(b) 特別警報は，<u>予想される<span class=\"term\" data-term=\"現象\">現象</span>が特に異常であるため重大な災害の起こるおそれが<span class=\"term\" data-term=\"著しく\">著しく</span>大きい場合</u>に発表される。\n(c) <span class=\"term\" data-term=\"気象庁\">気象庁</span>から特別警報に<span class=\"term\" data-term=\"係る\">係る</span><span class=\"term\" data-term=\"警報事項\">警報事項</span>の<span class=\"term\" data-term=\"通知\">通知</span>を受けた都道府県の機関は，<u><span class=\"term\" data-term=\"直ちに\">直ちに</span>その通知された<span class=\"term\" data-term=\"事項\">事項</span>を関係<span class=\"term\" data-term=\"市町村長\">市町村長</span>に通知しなければならない</u>。\n(d) 特別警報の<span class=\"term\" data-term=\"基準\">基準</span>を定めようとするときは，気象庁は，<u>あらかじめ<span class=\"term\" data-term=\"関係都道府県知事\">関係都道府県知事</span>の意見を聴かなければならない</u>。",
"choices": [
"(a)のみ誤り",
"(b)のみ誤り",
"(c)のみ誤り",
"(d)のみ誤り",
"すべて正しい"
],
"answers": [
5
],
"answer_note": "",
"figures": [],
"explanation": "正解は ⑤ です。\n\nこの問題で問われているのは、<span class=\"term\" data-term=\"警報\">警報</span>と<span class=\"term\" data-term=\"特別警報\">特別警報</span>について、<span class=\"term\" data-term=\"気象業務法\">気象業務法</span>がどう定めているかを<span class=\"term\" data-term=\"条文\">条文</span>どおりに覚えているかどうかです。\n\n(a)は正しいです。気象業務法では、警報とは「重大な災害の起るおそれのある<span class=\"term\" data-term=\"旨\">旨</span>を警告して行う<span class=\"term\" data-term=\"予報\">予報</span>」と<span class=\"term\" data-term=\"定義\">定義</span>されています。ここがだいじなところなんですが、警報は予報とは別物ではなくて、予報の一種です。ちなみに<span class=\"term\" data-term=\"注意報\">注意報</span>は、災害が起こるおそれがある場合に<span class=\"term\" data-term=\"その旨\">その旨</span>を注意して行う予報で、警報の方が一段重い言い方になっています。\n\n(b)は正しいです。特別警報は、予想される<span class=\"term\" data-term=\"現象\">現象</span>が特に異常であるため重大な災害の起こるおそれが<span class=\"term\" data-term=\"著しく\">著しく</span>大きい場合として、<span class=\"term\" data-term=\"降雨量\">降雨量</span>その他の<span class=\"term\" data-term=\"事項\">事項</span>について定める<span class=\"term\" data-term=\"基準\">基準</span>に該当するときに発表されます。警報の中でもさらに重い、数十年に一度というような状況のときに出されるものです。\n\n(c)は正しいです。特別警報に<span class=\"term\" data-term=\"係る\">係る</span><span class=\"term\" data-term=\"警報事項\">警報事項</span>の<span class=\"term\" data-term=\"通知\">通知</span>を受けた都道府県の機関は、<span class=\"term\" data-term=\"直ちに\">直ちに</span>その通知された事項を関係<span class=\"term\" data-term=\"市町村長\">市町村長</span>に通知しなければならない、と定められています。さらに通知を受けた市町村長も、直ちに住民などに<span class=\"term\" data-term=\"周知\">周知</span>させる<span class=\"term\" data-term=\"措置\">措置</span>をとらなければなりません。特別警報については、<span class=\"term\" data-term=\"伝達\">伝達</span>の<span class=\"term\" data-term=\"義務\">義務</span>が「努める」ではなく「しなければならない」と強く定められているのが特徴です。\n\n(d)は正しいです。<span class=\"term\" data-term=\"気象庁\">気象庁</span>が特別警報の基準を定めようとするときは、あらかじめ<span class=\"term\" data-term=\"関係都道府県知事\">関係都道府県知事</span>の意見を聴かなければならないと定められています。地域ごとの実情を反映させるためなんです。\n\nというわけですべて正しく、⑤「すべて正しい」が正解になります。\n\nポイント: 特別警報は伝達の義務が強いのが特徴です。都道府県から市町村へ、市町村から住民へ、いずれも直ちに伝えることが義務づけられています。"
}
]
};
