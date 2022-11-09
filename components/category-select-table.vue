<template>

    <div>

        <!-- Category selection table -->
        <b-row class="no-padding-row">

            <b-col cols="11" class="no-padding-col">
                <b-table
                    outlined
                    selectable
                    head-variant="dark"
                    :items="categoryTable"
                    @row-selected="selectCategory"
                    select-mode="single"
                    selected-variant=""
                    :tbody-tr-class="styleTableRow"
                    thead-class="hidden" />
                <b-icon-plus-circle
                    style="display: block; margin-left: auto; margin-right: auto;"
                    @click="addCustomCategory" />
            </b-col>
            <b-col cols="1" class="no-padding-col">
                <b-table
                    borderless
                    :items="categoryXs"
                    :tbody-tr-class="styleXRow"
                    @row-clicked="deleteCustomCategory"
                    thead-class="hidden" />
            </b-col>
        </b-row>

        <!-- <b-input-group>
            <b-form-input
                id="category-name-textbox"
                v-model="newCategoryName"
                :placeholder="uiText.categoryNamePlaceHolder" />
        </b-input-group>

        <b-row style="margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0;">
            <b-col cols="6" style="padding-left: 0;">
                <b-button
                    @click="addCustomCategory"
                    variant="dark">
                    Add Category
                </b-button>
            </b-col>
            <b-col cols="6" style="padding-right: 0;">
                <b-button
                    @click=""
                    variant="dark">
                    Remove Category
                </b-button>
            </b-col>
        </b-row> -->



    </div>

</template>

<script>

    // Allows for reference to store getters, mutations, actions
    import { mapGetters, mapMutations, mapActions } from "vuex";

    // + icon for adding new categories
    import { BIconPlusCircle } from "bootstrap-vue";

    export default {

        components: {
            BIconPlusCircle
        },

        data() {

            return {

                newCategoryName: "",

                // Since categories is now retrieved via mapGetters, 'categories'
                // is not available here, but is upon creation
                selectedCategory: "",

                uiText: {

                    categoryNamePlaceHolder: "New Category Name"
                }
            };
        },

        created() {

            // First category is initially selected
            this.selectCategory([{ category: this.categories[0] }]);
        },

        computed: {

            ...mapGetters([

                "categories",
                "categoryClasses",
                "originalCategories"
            ]),

            categoryTable() {

                // Return a list of dicts for each category in the table
                return this.categories.map((name) => ({
                    category: name
                }));
            },

            categoryXs() {

                return this.categories.map((name) => ({
                    x:  ( this.inOriginalCategories(name) ) ? "N" : "X"
                }));
            }
        },

        methods: {

            ...mapActions([

                "initializeCategories"
            ]),

            ...mapMutations([

                "addCategory",
                "removeCategory"
            ]),

            deleteCustomCategory(p_item, p_index, p_event) {

                // NOTE: Need to match index with categoryTable

                if ( !this.originalCategories.includes(this.categories[p_index]) ) {

                    // 1. Remove this category from the list of categories and
                    // unlink related data table columns
                    this.removeCategory(this.categories[p_index]);

                    // 2. Snap currently selected category back to the first category
                    this.selectCategory([{ category: this.categories[0]}]);
                }
            },

            addCustomCategory() {

                // 1. Add the new category

                // A. Store currently selected category
                const tempCategory = this.selectedCategory;

                // B. Add new category
                this.addCategory({ category: "NEW CATEGORY"});

                // C. Restore currently selected category
                this.selectedCategory = tempCategory;

                // 2. Ensure category class list in store includes style for new category
                this.initializeCategories(this.categories);

            },

            inOriginalCategories(p_name) {

                return this.originalCategories.includes(p_name);
            },

            selectCategory(p_row) {

                // If a new category was selected...
                if ( 0 !== p_row.length ) {

                    // 1. Save the newly selected category, if given
                    this.selectedCategory = p_row[0].category;

                    // 2. Tell the parent page about the category selction
                    // this.$emit("category-select", { category: this.selectedCategory });
                    this.$emit("category-select", { category: this.selectedCategory });
                }
            },

            styleTableRow(p_row, p_rowType) {

                // 1. Determine the opacity for this row
                const opacityClass = ( this.selectedCategory !== p_row.category ) ?
                    "category-transparent" : "category-opaque";

                // 2. Get the color class for this row
                const colorClass = this.categoryClasses[p_row.category];

                return [opacityClass, colorClass];
            },

            styleXRow(p_row, p_rowType) {

                return ( "X" === p_row.x ) ? "visible-x" : "transparent-x";
            }
        }
    };

</script>

<style>

    .category-transparent {

        opacity: 0.5;
    }

    .category-opaque {

        opacity: 1.0;
    }

    .centered-element {

        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .no-padding-row {

        padding-left: 0;
        padding-right: 0;
    }

    .no-padding-col {

        padding-left: 0;
        padding-right: 0;
    }

    .transparent-x {

        color: black;
        opacity: 0.0;
    }

    .visible-x {

        color: black;
        opacity: 1.0;
    }

</style>