<template>

    <b-container fluid>

        <!-- Column-categorization linking -->
        <b-row>

            <!-- Category selection table -->
            <b-col cols="4">

                <!-- Heading for category select component -->
                <b-row>
                    <h3>{{ uiText.categorySelectTitle }}</h3>
                </b-row>

                <!-- Instructions prompting the user how to link categories and columns -->
                <b-row>
                    <p class="instructions-text">
                        {{ uiText.categorySelectInstructions }}
                    </p>
                </b-row>

                <b-row>
                    <b-col cols="12" id="category-select-table-col">
                        <category-select-table
                            data-cy="categorization-table"
                            @category-select="setSelectedCategory($event)" />
                    </b-col>
                </b-row>
            </b-col>

            <!-- Category to column linking table -->
            <b-col cols="8">
                <column-linking-table
                    data-cy="column-linking-table"
                    :selected-category="selectedCategory" />
            </b-col>

        </b-row>

        <!-- Whitespace to separate category-column categorization area from tool grouping area -->
        <b-row>&nbsp;</b-row>

        <!-- Tool grouping -->
        <categ-tool-group
            :column-names="dataTable.columns"
            @remove-tool-from-group="removeToolFromGroup($event)"
            @tool-group-action="toolGroupAction($event)" />

        <!-- Next page button (passed inside categ-tool-group for UI space consideration) -->
        <b-row>
            <b-col class="text-right" cols="12">

                <!-- Optional instructions to remind user of criteria to proceed to annotation page -->
                <p class="instructions-text" v-if="!pageData.annotation.accessible">
                    {{ uiText.nextPageCriteria }}
                </p>

                <!-- Button to proceed to the next page -->
                <!-- Only enabled when at least one column has been categorized -->
                <b-button
                    class="float-right"
                    data-cy="button-nextpage"
                    :disabled="!pageData.annotation.accessible"
                    :to="'/' + pageData.annotation.location"
                    :variant="nextPageButtonColor">
                    {{ uiText.nextButton }}
                </b-button>
            </b-col>
        </b-row>

    </b-container>

</template>

<script>

    // Allows for reference to store data by creating simple, implicit getters
    import { mapGetters } from "vuex";

    // Allows for reference to store data by creating simple, implicit getters
    // Fields listed in mapState below can be found in the store (index.js)
    import { mapState } from "vuex";

    export default {

        name: "CategorizationPage",

        data() {

            return {

                // Category selection (default is index 0, no selection is -1)
                selectedCategory: "",

                // Text for UI elements
                uiText: {

                    categorySelectInstructions: "Click category and then corresponding column from tsv file",
                    categorySelectTitle: "Recommended Categories",
                    nextButton: "Next step: Annotate columns",
                    nextPageCriteria: "One column must be categorized as 'Subject ID' and all assessment tools must be grouped to proceed"
                }
            };
        },

        computed: {

            ...mapGetters([

                "nextPageAccessible"
            ]),

            ...mapState([

                "categories",
                "categoryClasses",
                "columnToCategoryMap",
                "dataTable",
                "dataDictionary",
                "pageData",
                "toolGroups"
            ]),

            nextPageButtonColor() {

                // Bootstrap variant color of the button leading to the annotation page
                return this.pageData.annotation.accessible ? "success" : "secondary";
            }
        },

        provide() {

            return {

                "columnToCategoryMap": this.columnToCategoryMap,
                "toolGroups": this.toolGroups
            };
        },

        mounted() {

            // 1. Set the current page name
            this.$store.dispatch("setCurrentPage", "categorization");

            // 3. Set selected category to the first category by default
            this.setSelectedCategory({ category: this.categories[0]});

            // 4. Determine if the annotation page is available yet and if so, enable it and perform setup actions
            this.$store.dispatch("initializePage", {

                pageName: "annotation",
                enable: this.nextPageAccessible("annotation")
            });
        },

        methods: {

            countLinkedColumns() {

                // Count the number of columns that have had categories linked to them
                let links = 0;
                for ( const column in this.columnToCategoryMap ) {
                    if ( null !== this.columnToCategoryMap[column] )
                        links += 1;
                }

                return links;
            },

            removeToolFromGroup(p_toolData) {

                this.$store.dispatch("removeToolFromGroup", p_toolData);
            },

            removeToolGroup(p_toolGroupData) {

                // 1. Remove this tool group from the store
                this.$store.dispatch("removeToolGroup", p_toolGroupData);

                // 2. Enable the annotation page and perform setup actions if
                // accessibility criteria have been met
                this.$store.dispatch("initializePage", {

                    pageName: "annotation",
                    enable: this.nextPageAccessible("annotation")
                });
            },

            saveNewToolGroup(p_toolGroupData) {

                // 1. Create this new tool group in the store
                this.$store.dispatch("createToolGroup", p_toolGroupData);

                // 2. Enable the annotation page and perform setup actions if
                // accessibility criteria have been met
                this.$store.dispatch("initializePage", {

                    pageName: "annotation",
                    enable: this.nextPageAccessible("annotation")
                });
            },

            setSelectedCategory(p_clickData) {

                // Save the name of the selected category
                this.selectedCategory = p_clickData.category;
            },

            toolGroupAction(p_event) {

                // 1. Create, modify, or remove this tool group in the store
                this.$store.dispatch(p_event.action, p_event.data);

                // 2. Enable the annotation page and perform setup actions if
                // accessibility criteria have been met
                this.$store.dispatch("initializePage", {

                    pageName: "annotation",
                    enable: this.nextPageAccessible("annotation")
                });
            }
        }
    };

</script>

<style>

#category-select-table-col {

    padding-left: 0;
}

</style>
