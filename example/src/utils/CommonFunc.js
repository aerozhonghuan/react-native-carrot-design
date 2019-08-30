export default class CommonFunc {
    /**
     * 产生随机整数，包含下限值，包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机整数
     */
    static randomNumber(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

    /**
     * 产生一个随机的rgb颜色
     * @return {String}  返回颜色rgb值字符串内容，如：rgb(201, 57, 96)
     */
    static randomColor() {
        // 随机生成 rgb 值，每个颜色值在 0 - 255 之间
        const r = CommonFunc.randomNumber(0, 255);
        const g = CommonFunc.randomNumber(0, 255);
        const b = CommonFunc.randomNumber(0, 255);
        // 连接字符串的结果
        const result = `rgb(${r},${g},${b})`;
        // 返回结果
        return result;
    }
}