/**
 * Created by lichun on 2017/6/1.
 */
export const pushEvents = {
    FOOTBALL_INFO: 0, // 足球对阵信息的推送
    BASKETBALL_INFO: 1, // 篮球对阵信息的推送
    FOOTBALL_EVENT: 2, // 足球事件列表的推送
    BASKETBALL_EVENT: 3 // 篮球事件列表的推送
}
export const FootballStatusCode = {
    NOT_STARTED: '0',
    FIRST_HALF: '1',
    MID: '2',
    LAST_HALF: '3',
    ENDED: '4',
    CANCELED: '5',
    CHANGED: '6',
    REMOVED: '7',
    PAUSED: '8',
    UNSURE: '9',
    EXTRA_STARTED: '10',
    EXTRA_ENDED: '11',
    SPOT_KICK_STARTED: '12',
    SPOT_KICK_ENDED: '13'
}
