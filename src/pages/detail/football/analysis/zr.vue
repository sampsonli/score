<template>
    <div><div class="zr-box">
        <div class="zj-nav">
            阵容概览
         </div>
        <!--<if: hasTeamworthData />--><div class="dataBox">
        <ul class="dataItem">
            <li class="itemL">
                <em class="num">马西米利亚诺...</em>
            </li>
            <li class="itemC">
                <span class="item-info">主教练</span>
            </li>
            <li class="itemR">
                <em class="num">齐内丁·齐达...</em>
            </li>
        </ul>
        <ul class="dataItem">
            <li class="itemL">
                <em class="num">€4.5亿</em>
            </li>
            <li class="itemC">
                <span class="item-info">球队身价</span>
            </li>
            <li class="itemR">
                <em class="num">€7.6亿</em>
            </li>
        </ul>
        <ul class="dataItem">
            <li class="itemL">
                <em class="num">伊瓜因</em>
                <span class="item-info">€6000万 前锋</span>
            </li>
            <li class="itemC">
                <span class="item-info">头牌</span>
                <em class="num">&nbsp;</em>
            </li>
            <li class="itemR">
                <em class="num">  C罗</em>
                <span class="item-info">€11000万 前锋</span>
            </li>
        </ul>
    </div>
        <!--<if: !hasTeamworthData&&!isRequesting />-->
        <!--<if: isRequesting />-->
    </div>

        <!--<if: formation.alineup />--><div class="zhedie-box">
            <div class="zj-nav">
                上场首发
            </div>
            <!--<if: !isRequesting && !formationHidden && !formation.alineup />-->
            <!--<if: !formationHidden && formation.alineup />--><div class="zhedie">
            <div class="zuqiuc">
                <table cellspacing="0" cellpadding="0" border="0" class="zx-table" width="100%">
                    <tbody><!--<repeat>: row in formation.hlineup--><!--[repeat-item]row in formation.hlineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            32
                                            <!--<if: player.characterpic1 />-->
                                        </span>
                                <br> 32 埃米尔奥德罗
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.hlineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            26
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3188.png">
                                        </span>
                                <br> 26 利希施泰纳
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            4
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3209.png">
                                        </span>
                                <br> 4 贝纳蒂亚
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            15
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3181.png">
                                        </span>
                                <br> 15 巴尔扎利
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            22
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3186.png">
                                        </span>
                                <br> 22 阿萨莫阿
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.hlineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            8
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3175.png">
                                        </span>
                                <br> 8 马尔基西奥
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            6
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_143.png">
                                        </span>
                                <br> 6 赫迪拉
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.hlineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            7
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3903.png">
                                        </span>
                                <br> 7 夸德拉多
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            21
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_4453.png">
                                        </span>
                                <br> 21 迪巴拉
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            27
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_4201.png">
                                        </span>
                                <br> 27 斯图拉罗
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.hlineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == '' || player.playernum == null />-->
                                <!--<if: !(player.playernum == '' || player.playernum == null) />--><span class="person">
                                            9
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_3872.png">
                                        </span>
                                <br> 9 伊瓜因
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--</repeat>: row in formation.hlineup-->
                    </tbody></table>

                <table cellspacing="0" cellpadding="0" border="0" class="zx-table" width="100%">
                    <tbody><!--<repeat>: row in formation.alineup--><!--[repeat-item]row in formation.alineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            7
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_144.png">
                                        </span>
                                <br> 7 C罗
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            9
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_145.png">
                                        </span>
                                <br> 9 本泽马
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.alineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            22
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_157.png">
                                        </span>
                                <br> 22 伊斯科
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.alineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            8
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_218.png">
                                        </span>
                                <br> 8 克罗斯
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            14
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_150.png">
                                        </span>
                                <br> 14 卡塞米罗
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            19
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_153.png">
                                        </span>
                                <br> 19 莫德里奇
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.alineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            12
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_33.png">
                                        </span>
                                <br> 12 马塞洛
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            4
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_141.png">
                                        </span>
                                <br> 4 拉莫斯
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            5
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_139.png">
                                        </span>
                                <br> 5 瓦拉内
                            </li><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            23
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_6815.png">
                                        </span>
                                <br> 23 达尼洛
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--[repeat-item]row in formation.alineup--><tr>
                        <td>
                            <ul class="zx-ul responsive">
                                <!--<repeat>: player in row--><!--[repeat-item]player in row--><li class="each-resone">
                                <!--<if: player.playernum == null />-->
                                <!--<if: player.playernum != null />--><span class="person">
                                            1
                                            <!--<if: player.characterpic1 />--><img src="http://odds.500.com/static/soccerdata/images/CharacterPic/characterpic1_1288.png">
                                        </span>
                                <br> 1 纳瓦斯
                            </li><!--</repeat>: player in row-->
                            </ul>
                        </td>
                    </tr><!--</repeat>: row in formation.alineup-->
                    </tbody></table>

                <div class="zhu-zx">尤  文阵型 4-2-3-1</div>
                <div class="ke-zx">4-3-1-2 皇  马阵型</div>
            </div>
        </div>
        </div>

        <!--<if: lineup />--><!--<repeat>: name,type in {shoufa: '预测首发', houbei: '替补阵容', shangbing: '伤停阵容'}--><!--[repeat-item]name,type in {shoufa: '预测首发', houbei: '替补阵容', shangbing: '伤停阵容'}--><div class="zhedie-box">
            <div class="zj-nav">
                预测首发
           </div>
            <!--<if: !isRequesting && !lineupHidden[type] && (lineup[type] == null || !lineup[type].length) />--><div class="feed-back">
            <div class="feed-box">
                <em>暂无数据</em>
            </div>
        </div>
            <!--<if: !lineupHidden[type] && lineup[type] != null && lineup[type].length />-->
        </div><!--[repeat-item]name,type in {shoufa: '预测首发', houbei: '替补阵容', shangbing: '伤停阵容'}--><div class="zhedie-box">
            <div class="zj-nav">
                替补阵容
           </div>
            <!--<if: !isRequesting && !lineupHidden[type] && (lineup[type] == null || !lineup[type].length) />--><div class="feed-back">
            <div class="feed-box">
                <em>暂无数据</em>
            </div>
        </div>
            <!--<if: !lineupHidden[type] && lineup[type] != null && lineup[type].length />-->
        </div><!--[repeat-item]name,type in {shoufa: '预测首发', houbei: '替补阵容', shangbing: '伤停阵容'}--><div class="zhedie-box">
            <div class="zj-nav">
                伤停阵容
           </div>
            <!--<if: !isRequesting && !lineupHidden[type] && (lineup[type] == null || !lineup[type].length) />--><div class="feed-back">
            <div class="feed-box">
                <em>暂无数据</em>
            </div>
        </div>
            <!--<if: !lineupHidden[type] && lineup[type] != null && lineup[type].length />-->
        </div><!--</repeat>: name,type in {shoufa: '预测首发', houbei: '替补阵容', shangbing: '伤停阵容'}--></div>
</template>
