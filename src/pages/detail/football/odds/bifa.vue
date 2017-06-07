<template>
   <!--<div>
       <div class="bifa-stat" >
           <div class="gl-nav">
               必发数据
           </div>
           <table drunk-if="oddsDataMap.bifa.spdex_data" cellspacing="0" cellpadding="0" border="0" class="fx-table" width="100%">
               <tbody><tr>
                   <th>选项</th>
                   <th width="16%">成交价</th>
                   <th width="26%">交易量</th>
                   <th width="26%">庄家盈亏</th>
                   <th width="15%">冷热</th>
               </tr>
               <tr>
                   <td>主胜</td>
                   <td>{{oddsDataMap.bifa.spdex_data.win.price}}</td>
                   <td>{{oddsDataMap.bifa.spdex_data.win.amount}}</td>
                   <td><span drunk-class="{'red2':oddsDataMap.bifa.spdex_data.win.profit!='0'&&oddsDataMap.bifa.spdex_data.win.profit.indexOf('-')==-1,'green2':oddsDataMap.bifa.spdex_data.win.profit!='0'&&oddsDataMap.bifa.spdex_data.win.profit.indexOf('-')>-1}">{{oddsDataMap.bifa.spdex_data.win.profit}}</span></td>
                   <td>{{oddsDataMap.bifa.spdex_data.win.exp}}</td>
               </tr>
               <tr>
                   <td>平</td>
                   <td>{{oddsDataMap.bifa.spdex_data.draw.price}}</td>
                   <td>{{oddsDataMap.bifa.spdex_data.draw.amount}}</td>
                   <td ><span drunk-class="{'red2':oddsDataMap.bifa.spdex_data.draw.profit!='0'&&oddsDataMap.bifa.spdex_data.draw.profit.indexOf('-')==-1,'green2':oddsDataMap.bifa.spdex_data.draw.profit!='0'&&oddsDataMap.bifa.spdex_data.draw.profit.indexOf('-')>-1}">{{oddsDataMap.bifa.spdex_data.draw.profit}}</span></td>
                   <td>{{oddsDataMap.bifa.spdex_data.draw.exp}}</td>
               </tr>
               <tr>
                   <td>主负</td>
                   <td>{{oddsDataMap.bifa.spdex_data.lost.price}}</td>
                   <td>{{oddsDataMap.bifa.spdex_data.lost.amount}}</td>
                   <td><span drunk-class="{'red2':oddsDataMap.bifa.spdex_data.lost.profit!='0'&&oddsDataMap.bifa.spdex_data.lost.profit.indexOf('-')==-1,'green2':oddsDataMap.bifa.spdex_data.lost.profit!='0'&&oddsDataMap.bifa.spdex_data.lost.profit.indexOf('-')>-1}">{{oddsDataMap.bifa.spdex_data.lost.profit}}</span></td>
                   <td>{{oddsDataMap.bifa.spdex_data.lost.exp}}</td>
               </tr>
               </tbody></table>
           <div class="infoTips" drunk-if="oddsDataMap.bifa.presentations">
               <i class="icon"></i>
               <p class="f24">{{oddsDataMap.bifa.presentations}}</p>
           </div>
           <div class="feed-back" drunk-if="!oddsDataMap.bifa&&!isBifaRequest">
               <div class="feed-box">
                   <em>暂无数据</em>
               </div>
           </div>
           <div class="item-loader" drunk-if="isBifaRequest">
               <div class="la-ball-pulse la-2x">
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
           </div>
       </div>
       <div class="bifa-stat bifa-volume" >
           <div class="gl-nav clear" drunk-init-data="bifaTab='all'">
               交易数据
               &lt;!&ndash;
               <ul class="volumeTab">
                   <li drunk-class="{'cur':bifaTab=='all'}" drunk-on="click:bifaTab='all'">总览</li>
                   <li drunk-if="oddsDataMap.bifa.big_trade" drunk-class="{'cur':bifaTab=='big'}" drunk-on="click:bifaTab='big'">大额</li>
               </ul>
               &ndash;&gt;
           </div>
           <div class="volumeBox" drunk-if="bifaTab=='all'&&oddsDataMap.bifa.all_trade.pie_chart">
               <div class="bili-box">
                   <div class="chart into">
                       <div class="volumeChart" drunk-echart-pie="{
                 'name':['胜','平','负'],
                 'data':[
                   {'value':oddsDataMap.bifa.all_trade.pie_chart.win_percent,'name':'胜'},
                   {'value':oddsDataMap.bifa.all_trade.pie_chart.draw_percent,'name':'平'},
                   {'value':oddsDataMap.bifa.all_trade.pie_chart.lost_percent,'name':'负'}
                 ]
                }"></div>
                       <div class="info">
                           <em class="f34">{{oddsDataMap.bifa.all_trade.pie_chart.all_amount}}</em>
                           <p class="f22">总交易[港币]</p>
                       </div>
                   </div>
                   <div class="wdl-box">
                       <div class="wins"> <span class="wdl-bili"><em class="wdl-mun">{{oddsDataMap.bifa.all_trade.pie_chart.win_percent}}</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">胜</span> <span class="wdl-count f20">{{oddsDataMap.bifa.all_trade.pie_chart.win_amount}}</span></div>
                       <div class="draws"> <span class="wdl-bili"><em class="wdl-mun">{{oddsDataMap.bifa.all_trade.pie_chart.draw_percent}}</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">平</span> <span class="wdl-count f20">{{oddsDataMap.bifa.all_trade.pie_chart.draw_amount}}</span></div>
                       <div class="losses"> <span class="wdl-bili"><em class="wdl-mun">{{oddsDataMap.bifa.all_trade.pie_chart.lost_percent}}</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">负</span> <span class="wdl-count f20">{{oddsDataMap.bifa.all_trade.pie_chart.lost_amount}}</span></div>
                   </div>
               </div>
               <p class="bili-tips">

               </p>
               <div class="volumeAll">
                   <div class="all-qushi1"  drunk-echart-big-trade="{
           'name1':'主胜',
           'name2':'平',
           'name3':'主负',
           'data1':oddsDataMap.bifa.all_trade.line_chart.win_gram,
           'data2':oddsDataMap.bifa.all_trade.line_chart.draw_gram,
           'data3':oddsDataMap.bifa.all_trade.line_chart.lost_gram,
           'startTime':oddsDataMap.bifa.all_trade.line_chart.start_time,
           'endTime':oddsDataMap.bifa.all_trade.line_chart.curr_time
        }">
                   </div>
                   <div class="all-qushi1"   drunk-echart-all-trade="{
           'name':'交易总量',
           'data':oddsDataMap.bifa.all_trade.line_chart.amount_gram
        }">
                   </div>
               </div>
           </div>
           <div class="volumeBox" drunk-if="bifaTab=='big'&&oddsDataMap.bifa.big_trade">
               <div class="bili-box">
                   <div class="chart into">
                       <div class="volumeChart" drunk-echart-pie="{
                 'name':['胜','平','负'],
                 'data':[
                   {'value':oddsDataMap.bifa.big_trade.pie_chart.win_percent,'name':'胜'},
                   {'value':oddsDataMap.bifa.big_trade.pie_chart.draw_percent,'name':'平'},
                   {'value':oddsDataMap.bifa.big_trade.pie_chart.lost_percent,'name':'负'}
                 ]
                }"></div>
                       <div class="info">
                           <em class="f34">{{oddsDataMap.bifa.big_trade.pie_chart.all_amount}}</em>
                           <p class="f22">大额交易[港币]</p>
                       </div>
                   </div>
                   <div class="wdl-box">
                       <div class="wins"> <span class="wdl-bili"><em class="wdl-mun">{{oddsDataMap.bifa.big_trade.pie_chart.win_percent}}</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">胜</span> <span class="wdl-count f20">{{oddsDataMap.bifa.big_trade.pie_chart.win_amount}}</span></div>
                       <div class="draws"> <span class="wdl-bili"><em class="wdl-mun">{{oddsDataMap.bifa.big_trade.pie_chart.draw_percent}}</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">平</span> <span class="wdl-count f20">{{oddsDataMap.bifa.big_trade.pie_chart.draw_amount}}</span></div>
                       <div class="losses"> <span class="wdl-bili"><em class="wdl-mun">{{oddsDataMap.bifa.big_trade.pie_chart.lost_percent}}</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">负</span> <span class="wdl-count f20">{{oddsDataMap.bifa.big_trade.pie_chart.lost_amount}}</span></div>
                   </div>
               </div>
               <div class="volumeAll">
                   <div class="dae-fenbu" drunk-echart-big-trade-bar="{
               'name1':'买入',
               'name2':'卖出',
               'data1':[oddsDataMap.bifa.big_trade.line_chart.win_buy,oddsDataMap.bifa.big_trade.line_chart.draw_buy,oddsDataMap.bifa.big_trade.line_chart.lost_buy],
               'data2':[oddsDataMap.bifa.big_trade.line_chart.win_sell,oddsDataMap.bifa.big_trade.line_chart.draw_sell,oddsDataMap.bifa.big_trade.line_chart.lost_sell]
            }">
                   </div>
               </div>
               <h4 class="bili-tit">近10笔大额交易明细</h4>
               <table cellspacing="0" cellpadding="0" border="0" class="fx-table" width="100%">
                   <tbody><tr>
                       <th>时间</th>
                       <th width="18%">选项</th>
                       <th width="25%">交易量</th>
                       <th width="18%">操作</th>
                   </tr>
                   <tr drunk-repeat="item in oddsDataMap.bifa.big_trade.line_chart.trade_list">
                       <td>{{item.tradetime.substring(5,16)}}</td>
                       <td drunk-if="item.choice=='3'">主胜</td>
                       <td drunk-if="item.choice=='1'">平</td>
                       <td drunk-if="item.choice=='0'">主负</td>
                       <td>{{item.amount}}</td>
                       <td>
                           <span drunk-if="item.buysell=='1'" class="red2">买入</span>
                           <span drunk-if="item.buysell=='2'">卖出</span>
                       </td>
                   </tr>

                   </tbody></table>
           </div>
           <div class="feed-back" drunk-if="!oddsDataMap.bifa&&!isBifaRequest">
               <div class="feed-box">
                   <em>暂无数据</em>
               </div>
           </div>
           <div class="item-loader" drunk-if="isBifaRequest">
               <div class="la-ball-pulse la-2x">
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
           </div>
       </div>
   </div>-->
</template>
