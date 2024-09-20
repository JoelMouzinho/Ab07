// stringUtils.test.js
const {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
  } = require("./stringUtils");
  
  describe("String Utility Functions", () => {
    test("isAllCaps gibt true zurück wenn alles in Caps geschrieben wurde", () => {
      expect(isAllCaps("HELLO")).toBe(true);
    });
  
    test("isAllCaps gibt false zurück wenn nicht alles in Caps geschrieben wurde", () => {
      expect(isAllCaps("Hello")).toBe(false);
    });
  
    test("countVowels gibt die anzahl von Vokalen in einem String zurück", () => {
      expect(countVowels("banana")).toBe(3);
    });
  
    test("countVowels gibt 0 zurück wenn keine Vokale vorhanden sind", () => {
      expect(countVowels("sky")).toBe(0);
    });
  
    test("mergeAndSortArrays vereint zwei Arrays und sortiert sie", () => {
      expect(mergeAndSortArrays([3, 1], [4, 2])).toEqual([1, 2, 3, 4]);
    });
  
    test("findDuplicates gibt die duplikate in einem Array zurück", () => {
      expect(findDuplicates([1, 2, 2, 3, 4, 4])).toEqual([2, 4]);
    });
  });
  