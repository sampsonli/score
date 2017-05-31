    /**
     * 足球比赛的状态
     *
     * "0": "未开始",
     * "1": "上半场",
     * "2": "中场",
     * "3": "下半场",
     * "4": "完场",
     * "5": "取消",
     * "6": "改期",
     * "7": "腰斩",
     * "8": "中断",
     * "9": "待定",
     */
    export default {
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
