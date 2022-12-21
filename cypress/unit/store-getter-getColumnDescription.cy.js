import { getters } from "~/store/index-refactor";


describe("getColumnDescription", () => {
    it("returns description for a column if one exists", () => {
        const state = {
            dataDictionary : {
                annotated: {
                    "column1": {
                        description: "This is my first column"
                    },
                    "column2": {}
                }
            }
        };
        const result = getters.getColumnDescription(state, "column1");
        expect(result).to.be.equal("This is my first column");
    });
});