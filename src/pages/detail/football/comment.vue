<template>
    <div id="comment-content">
        <div class="comm-vs">
            <div class="zj-nav"> 投票</div>
            <p class="comm-vs-tit">本场比赛看好哪队获胜?</p>

            <div class="comm-vs-box">
                <div class="comm-vs-itm">
                    <p class="vs-itm-bg" style="width:80%"></p>
                    <span class="vs-itm-txt">巴伊亚</span>
                    <span class="vs-itm-num" style="opacity:0">80%</span>
                </div>
                <!--<if: type=='1' />--><div class="comm-vs-itm">
                <p class="vs-itm-bg" style="width:17%"></p>
                <span class="vs-itm-txt">平局</span>
                <span class="vs-itm-num" style="opacity:0">17%</span>
            </div>
                <div class="comm-vs-itm">
                    <p class="vs-itm-bg" style="width:3%"></p>
                    <span class="vs-itm-txt">戈亚尼</span>
                    <span class="vs-itm-num" style="opacity:0">3%</span>
                </div>
            </div>
        </div>

        <div class="feed-back">
            <div class="feed-box">
                <i></i>
                <em>对新比分有任何建议，请点此反馈</em>
            </div>
        </div>
        <div class="zj-nav"> 评论</div>
        <!--<if: !isRequesting&&commentList&&commentList.length==0 />-->
        <!--<if: commentList&&commentList.length>0 />--><ul class="comm-list">
        <!--<repeat>: comment,idx in commentList--><!--[repeat-item]comment,idx in commentList--><li>
            <span class="list-face">
                    <img lazy-load-default="http://tccache.500.com/mobile/touch/images/bifen/face.png" src="http://img.m.500.com/esun/avatar/40/7f/407fcb2648ea11e78460.jpg?t=1496555953.87?dw=300&amp;dh=300">
                </span>

        <div class="list-box">
            <p class="list-box-tl"><span class="name">mm6**</span>
                <span class="time">06-04 14:00</span>
            </p>

            <p class="list-box-tr">
                <span class="zan-num">10</span>
                <span class="zan-icon"></span>
            </p>

            <div class="list-cont">
                真的稳健
            </div>
        </div>
    </li><!--[repeat-item]comment,idx in commentList--><li>
            <span class="list-face">
                    <img lazy-load-default="http://tccache.500.com/mobile/touch/images/bifen/face.png" src="http://tccache.500.com/mobile/touch/images/bifen/face.png">
                </span>

        <div class="list-box">
            <p class="list-box-tl"><span class="name">ml3**</span>
                <span class="time">06-05 13:16</span>
            </p>

            <p class="list-box-tr">
                <span class="zan-num">0</span>
                <span class="zan-icon"></span>
            </p>

            <div class="list-cont">
                主队加油
            </div>
        </div>
    </li><!--[repeat-item]comment,idx in commentList--><li>
            <span class="list-face">
                    <img lazy-load-default="http://tccache.500.com/mobile/touch/images/bifen/face.png" src="http://img.m.500.com/esun/avatar/73/22/7322e3d8490311e7aeda.jpg?t=1496566942.59?dw=300&amp;dh=300">
                </span>

        <div class="list-box">
            <p class="list-box-tl"><span class="name">qq8**</span>
                <span class="time">06-05 03:50</span>
            </p>

            <p class="list-box-tr">
                <span class="zan-num">0</span>
                <span class="zan-icon"></span>
            </p>

            <div class="list-cont">
                单子很稳
            </div>
        </div>
    </li><!--[repeat-item]comment,idx in commentList--><li>
            <span class="list-face">
                    <img lazy-load-default="http://tccache.500.com/mobile/touch/images/bifen/face.png" src="http://img.m.500.com/esun/avatar/73/22/7322e3d8490311e7aeda.jpg?t=1496566942.59?dw=300&amp;dh=300">
                </span>

        <div class="list-box">
            <p class="list-box-tl"><span class="name">qq8**</span>
                <span class="time">06-05 03:49</span>
            </p>

            <p class="list-box-tr">
                <span class="zan-num">1</span>
                <span class="zan-icon"></span>
            </p>

            <div class="list-cont">
                机会给你了  兄弟欢迎
            </div>
        </div>
    </li><!--[repeat-item]comment,idx in commentList--><li>
            <span class="list-face">
                    <img lazy-load-default="http://tccache.500.com/mobile/touch/images/bifen/face.png" src="http://img.m.500.com/esun/avatar/43/22/432264a848f211e788fb.jpg?t=1496559100.37?dw=240&amp;dh=240">
                </span>

        <div class="list-box">
            <p class="list-box-tl"><span class="name">171****4707</span>
                <span class="time">06-04 14:56</span>
            </p>

            <p class="list-box-tr">
                <span class="zan-num">1</span>
                <span class="zan-icon"></span>
            </p>

            <div class="list-cont">
                不怕不红，就怕你不来
            </div>
        </div>
    </li><!--</repeat>: comment,idx in commentList-->
    </ul>
        <div class="item-loader" style="display: none;">
            <div class="la-ball-pulse la-2x">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <!--<if: !isLoad&&commentList&&commentList.length>0 />--><p style="padding-bottom: 1.5555rem;" class="no-more">
        暂无更多评论…</p>
    </div>
</template>
