<template>
    <!--<div>
        <div class="pl-box-hd">
            <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
                <tr>
                    <th width="18%">公司</th>
                    <th width="15%"></th>
                    <th width="20%">大</th>
                    <th>盘口</th>
                    <th width="20%">小</th>
                </tr>
            </table>
        </div>

        <widget-prompt-view
                src="widget/prompt.html"
                drunk-if="!isRequesting && !oddsDataMap.daxiaopan || !oddsDataMap.daxiaopan.odds || !oddsDataMap.daxiaopan.odds.length"
                extra-text="很抱歉，没有数据"
                small-size
                type="no-data">
        </widget-prompt-view>

        <div class="pl-box-bd" drunk-if="oddsDataMap.daxiaopan.odds && oddsDataMap.daxiaopan.odds.length">
            <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
                <colgroup>
                    <col width="18%">
                    <col width="15%">
                    <col width="20%">
                    <col width="">
                    <col width="20%">
                </colgroup>

                <tr drunk-repeat="info in oddsDataMap.daxiaopan.odds"
                    drunk-on="click: redirect('#/footballdetail/' + tab + '/' + match.fid + '/daxiaopan/' + info.cid)">
                    <td>
                        <span class="color3">{{info.name}}</span>
                    </td>
                    <td></td>
                    <td >
                        <span class="f24" drunk-class="{'red': info.first.b == 1, 'green': info.first.b == -1}">{{parseFloat(info.first.big).toFixed(2)|nullFormat}}</span><br>
                        <span class="f24" drunk-class="{'red': info.end.b == 1, 'green': info.end.b == -1}">{{parseFloat(info.end.big).toFixed(2)|nullFormat}}</span>
                    </td>
                    <td >
                        <span class="f24" drunk-class="{'sheng': info.first.pk == 1, 'jiang': info.first.pk == -1}">{{info.first.handi|nullFormat}}</span><br>
                        <span class="f24" drunk-class="{'sheng': info.end.pk == 1, 'jiang': info.end.pk == -1}">{{info.end.handi|nullFormat}}</span>
                    </td>
                    <td>
                        <span class="f24" drunk-class="{'red': info.first.s == 1, 'green': info.first.s == -1}">{{parseFloat(info.first.small).toFixed(2)|nullFormat}}</span><br>
                        <span class="f24" drunk-class="{'red': info.end.s == 1, 'green': info.end.s == -1}">{{parseFloat(info.end.small).toFixed(2)|nullFormat}}</span>
                    </td>
                </tr>
            </table>
        </div>

        <div class="sk-btips" drunk-if="oddsDataMap.daxiaopan.odds && oddsDataMap.daxiaopan.odds.length">
            共{{oddsDataMap.daxiaopan.all_num}}家公司为你提供数据，其中主流公司{{oddsDataMap.daxiaopan.main_num}}家
            <br>
            <span>500彩票网提示：以上数据仅供参考，请以官方公布的数据为准</span>
        </div>
    </div>-->


</template>
