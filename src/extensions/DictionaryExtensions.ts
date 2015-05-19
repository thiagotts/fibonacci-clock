/// <reference path="IDictionary.ts"/>

class DictionaryExtensions {
    static getLength(dictionary: any): number {
        var length = 0;        
        for (var key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                length++;
            }
        }
        
        return length;
    }
}