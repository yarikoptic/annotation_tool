<template>

    <div>

        <b-card
            no-body
            class="annotation-card">

            <b-card-header>{{ uiText.instructions }}</b-card-header>

            <b-card-body>

                <b-table
                    striped
                    :fields="exampleFields"
                    :items="displayTable">
                    <template #cell(select_an_appropriate_mapping)="row">

                        <!-- Bootstrap-Vue doesn't have a great option here so I am using https://vue-select.org/ -->
                        <!-- NOTE: We use the $event statement to add the row data to the payload of the @input
                            event without replacing the original event payload -->

                        <v-select
                            :data-cy="'discrete-select-' + title + '-' + row.index"
                            :options="options"
                            :value="valueMapping[row.item.column_name][row.item.raw_value]"
                            @input="updateMapping($event, row.item)" />

                    </template>
                    <template #cell(missing_value)="row">
                        <b-button
                            variant="danger"
                            @click="declareMissing(row.item)">
                            {{ uiText.missingValueButton }}
                        </b-button>
                    </template>
                </b-table>

                <!-- Button to save the annotated data of this tab to the store -->
                <b-row>
                    <b-button
                        :data-cy="'save-button-' + title"
                        :disabled="!saveButtonEnabled"
                        :variant="saveButtonColor"
                        @click="applyAnnotation">
                        {{ uiText.saveButton }}
                    </b-button>
                </b-row>

            </b-card-body>

        </b-card>

    </div>

</template>

<script>

    // Allows for reference to store data by creating simple, implicit getters
    import { mapGetters } from "vuex";

    export default {

        props: {

            options: {

                type: Array,
                // Default values for Arrays or Objects have to be created with constructor functions
                // see: https://vuejs.org/guide/components/props.html#prop-validation
                default() {
                    // TODO: We currently let users tell us about a missing value in the same way they annotate real values
                    // we should instead have a separate mechanism to identify missing values
                    return ["default category", this.missingValueLabel];
                },
                required: true
            },
            relevantColumns: { type: Array, required: true },
            title: { type: String, required: true },
            uniqueValues: { type: Object, required: true }
        },

        inject: [

            "dataTable",
            "isMissingValue",
            "missingColumnValues",
            "missingValueLabel"
        ],

        name: "AnnotDiscreteValues",

        data() {

            return {

                exampleFields: [

                    "column_name",
                    "raw_value",
                    "select_an_appropriate_mapping",
                    "missing_value"
                ],

                // This field is used to ensure the save annotation button is
                // disabled after new annotation data has been saved by the user
                hasNewAnnotation: false,

                // Text for UI elements
                uiText: {

                    instructions: "Annotate each unique value",
                    saveButton: "Save Annotation",
                    missingValueButton: "Mark as missing"
                },

                valueMapping: {}
            };
        },

        computed: {

            ...mapGetters([

                "getOriginalColumnValue"
            ]),

            displayTable() {

                // Create and return table data for the unique values in the relevant columns that are not missing values
                const tableData = [];
                for ( const columnName of this.relevantColumns ) {
                    for ( const value of this.uniqueValues[columnName] ) {
                        if ( !this.isMissingValue(columnName, value) ) {

                            tableData.push({

                                column_name: columnName,
                                raw_value: value
                            });
                        }
                    }
                }

                return tableData;
            },

            saveButtonColor() {

                // Bootstrap variant color of the button to save the annotation to the data table
                return this.saveButtonEnabled ? "success" : "secondary";
            },

            saveButtonEnabled() {

                let allValidValues = this.relevantColumns.every(

                    columnName => this.uniqueValues[columnName].every(
                        uniqueValue => (
                            "" !== this.valueMapping[columnName][uniqueValue] ||
                            this.isMissingValue(columnName, uniqueValue) )
                    )
                );

                return this.hasNewAnnotation && allValidValues;
            }
        },

        watch: {

            relevantColumns(p_newColumns, p_oldColumns) {

                const removedColumns = p_oldColumns.filter( column => !p_newColumns.includes(column) );

                if ( removedColumns.length > 0 ) {

                    // There has been at least one column removed from this component's category,
                    // possibly via the annot-columns component 'remove' action
                    for ( const columnName of removedColumns ) {

                        // We cannot just remove the key from the object with a normal
                        // JS delete operator because then Vue wouldn't be aware of it.
                        // See also: https://v2.vuejs.org/v2/api/?redirect=true#vm-delete
                        this.$delete(this.valueMapping, columnName);
                    }

                    // TODO: Check if we need to also handle the case where a column is added
                }
            }
        },

        created() {

            // Initialize the mapping of all unique values as empty string
            this.initializeMapping();
        },

        methods: {

            applyAnnotation() {

                // We want to use the annotated dataTable here in order to not overwrite previous
                // annotations from other components

                // 1. Create a local copy of the annotated table for transformation
                const transformedTable = structuredClone(this.dataTable.annotated);

                // 2. Transform all values in columns categorized as columns selected for this discrete choices component
                for ( let index = 0; index < this.dataTable.original.length; index++ ) {

                    for ( const columnName of this.relevantColumns ) {

                        if ( this.isMissingValue(columnName, transformedTable[index][columnName]) ) {

                            // TODO: this string should be replaced by an app-wide way to designate missing values
                            transformedTable[index][columnName] = this.missingValueLabel;
                        } else {

                            transformedTable[index][columnName] = this.transformedValue(columnName, this.dataTable.original[index][columnName]);
                        }
                    }
                }

                // 3. Trigger a save of this transformation to the annotated table in the store
                // NOTE: 'transformHeuristics' are currently not being saved to the store
                this.$emit("update:dataTable", {

                    // transformHeuristics: this.valueMapping,
                    transformedTable: transformedTable
                });

                // 4. Indicate that the entered annotation has been saved and there are no new entered annotation values
                this.hasNewAnnotation = false;
            },

            initializeMapping() {

                // TODO: Revisit this once we have implemented the missing value components to make sure
                // we don't break things by later turning values into missing values

                // Initialize the mapping as empty
                this.valueMapping = {};
                for ( const [columnName, uniqueValues] of Object.entries(this.uniqueValues) ) {

                    // Now we will create a mapping of the form { uniqueVale: "" } for each unique value
                    this.valueMapping[columnName] = Object.fromEntries(
                        uniqueValues.map((uniqueValue) => [uniqueValue, ""])
                    );
                }
            },

            declareMissing(p_row) {

                // TODO: Use this method to move unique values to the missing value category
                this.$emit("update:missingValue", {

                    column: p_row.column_name,
                    value: p_row.raw_value
                });
            },

            transformedValue(p_columnName, p_value) {

                // Return the annotated version of this column's raw value
                return this.valueMapping[p_columnName][p_value];
            },

            updateMapping(p_selectedValue, p_row) {

                // This method updates the valueMapping object.
                // In order for Vue to detect this change and be reactive, we have to merge the new
                // value with the existing object, one level at a time

                // 1. Merge the inner level (e.g. the mapping for the columnName)
                const innerUpdate = Object.assign(
                    this.valueMapping[p_row.column_name],
                    { [p_row.raw_value]: p_selectedValue }
                );

                // 2. Merge the outer layer (e.g. the complete mapping object)
                this.valueMapping = Object.assign(
                    {},
                    this.valueMapping,
                    { [p_row.column_name]: innerUpdate }
                );

                // 3. Indicate that there a new annotation value has been
                // entered, ensuring the save annotation button is enabled
                this.hasNewAnnotation = true;
            }
        }
    };

</script>
