class EnumExtensions {
    static getValues(e: any): Array<number> {
        var a: Array<number> = [];
        for (var val in e) {
            if (!isNaN(val)) {
                a.push(parseInt(val, 10));
            }
        }
        return a;
    }
}