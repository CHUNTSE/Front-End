interface INumerologyCalculator {
    getLifeNumerology(): number;
    getAstrologyConstellationName(): string;
}
class NumerologyCalculator implements INumerologyCalculator {
    private _birthYear: number;
    private _birthMonth: number;
    private _birthDay: number;

    constructor(year: number, month: number, day: number) {
        this._birthYear = year;
        this._birthMonth = month;
        this._birthDay = day;
    }
    getLifeNumerology(): number {
        let str = this._birthYear.toString() + this._birthMonth.toString() + this._birthDay.toString();
        return this.getLifeNumerologyInternal(str);
    }
    private getLifeNumerologyInternal(str: string): number {
        let result = 0;
        let total = str.split("");


        for (var i = 0; i < str.length; i++) {
            result += parseInt(total[i]);
        }

        if (result > 9) {
            var numres = this.getLifeNumerologyInternal(result.toString());
            return numres;
        }
        else {
            return result;
        }
    }
    getAstrologyConstellationName(): string {//回傳直是   :string
        let fournum = this._birthMonth.toString() + this._birthDay.toString();
        return this.getLifeNumerologystar(fournum);
    }

    private getLifeNumerologystar(fournum: string): string {
        var num = parseInt(fournum);
        if (num > 121 && num < 218) {
            return "aquarius";
        }
        if (num > 219 && num < 320) {
            return "pisces";
        }
        if (num > 321 && num < 420) {
            return "aries";
        }
        if (num > 421 && num < 521) {
            return "taurus";
        }
        if (num > 522 && num < 621) {
            return "gemini";
        }
        if (num > 622 && num < 722) {
            return "cancer";
        }
        if (num > 723 && num < 822) {
            return "leo";
        }
        if (num > 823 && num < 922) {
            return "virgo";
        }
        if (num > 923 && num < 1023) {
            return "libra";
        }
        if (num > 1024 && num < 1122) {
            return "scorpio";
        }
        if (num > 1123 && num < 1221) {
            return "sagittarius";
        }
        return "capricorn";
    }
}