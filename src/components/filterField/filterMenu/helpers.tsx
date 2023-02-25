import { FILTERS, FILTER_DATE, FILTER_NUMBER, FILTER_TEXT } from "../config/constants";
import { AfterDate } from "../../../assets/icons/AfterDate";
import { BeforeDate } from "../../../assets/icons/BeforeDate";
import { Contains } from "../../../assets/icons/Contains";
import { DoesNotContain } from "../../../assets/icons/DoesNotContain";
import { DoesNotEqual } from "../../../assets/icons/DoesNotEqual";
import { Equals } from "../../../assets/icons/Equals";
import { Greater } from "../../../assets/icons/Greater";
import { GreaterEquals } from "../../../assets/icons/GreaterEquals";
import { Less } from "../../../assets/icons/Less";
import { LessEquals } from "../../../assets/icons/LessEquals";
import { NotOnDate } from "../../../assets/icons/NotOnDate";
import { OnDate } from "../../../assets/icons/OnDate";
import { OnDateTime } from "../../../assets/icons/OnDateTime";
import { RangeDate } from "../../../assets/icons/RangeDate";
import { Filter, FilterOption, FilterType } from "../types";
import { Between } from "../../../assets/icons/Between";


const FILTERS_BY_TYPE = (type: FilterType): Map<string, FilterOption> => {
    switch (type) {
        case FILTER_DATE:
            return new Map([
                [FILTERS.ON_DATE.filter, {
                    filter: FILTERS.ON_DATE.filter,
                    filterName: FILTERS.ON_DATE.name,
                    icon: <OnDate />,
                    withTime: false,
                    withRange: false
                }],
                [FILTERS.NOT_ON_DATE.filter, {
                    filter: FILTERS.NOT_ON_DATE.filter,
                    filterName: FILTERS.NOT_ON_DATE.name,
                    icon: <NotOnDate />,
                    withTime: false,
                    withRange: false
                }],
                [FILTERS.ON_DATE_TIME.filter, {
                    filter: FILTERS.ON_DATE_TIME.filter,
                    icon: <OnDateTime />,
                    filterName: FILTERS.ON_DATE_TIME.name,
                    withTime: true,
                    withRange: false
                }],
                [FILTERS.BEFORE_DATE_TIME.filter, {
                    filter: FILTERS.BEFORE_DATE_TIME.filter,
                    icon: <BeforeDate />,
                    filterName: FILTERS.BEFORE_DATE_TIME.name,
                    withTime: true,
                    withRange: false
                }],
                [FILTERS.AFTER_DATE_TIME.filter, {
                    filter: FILTERS.AFTER_DATE_TIME.filter,
                    icon: <AfterDate />,
                    filterName: FILTERS.AFTER_DATE_TIME.name,
                    withTime: true,
                    withRange: false
                }],
                [FILTERS.DATE_RANGE.filter, {
                    filter: FILTERS.DATE_RANGE.filter,
                    icon: <RangeDate />,
                    filterName: FILTERS.DATE_RANGE.name,
                    withTime: true,
                    withRange: false
                }],
            ])
        case FILTER_NUMBER:
            return new Map([
                [FILTERS.EE.filter, {
                    filter: FILTERS.EE.filter,
                    filterName: FILTERS.EE.name,
                    icon: <Equals />
                }],
                [FILTERS.NE.filter, {
                    filter: FILTERS.NE.filter,
                    filterName: FILTERS.NE.name,
                    icon: <DoesNotEqual />
                }],
                [FILTERS.LT.filter, {
                    filter: FILTERS.LT.filter,
                    filterName: FILTERS.LT.name,
                    icon: <Less />
                }],
                [FILTERS.LTE.filter, {
                    filter: FILTERS.LTE.filter,
                    filterName: FILTERS.LTE.name,
                    icon: <LessEquals />
                }],
                [FILTERS.GT.filter, {
                    filter: FILTERS.GT.filter,
                    filterName: FILTERS.GT.name,
                    icon: <Greater />
                }],
                [FILTERS.GTE.filter, {
                    filter: FILTERS.GTE.filter,
                    filterName: FILTERS.GTE.name,
                    icon: <GreaterEquals />
                }],
                [FILTERS.BETWEEN.filter, {
                    filter: FILTERS.BETWEEN.filter,
                    filterName: FILTERS.BETWEEN.name,
                    icon: <Between />
                }],
                // [FILTERS.NOT_BETWEEN.filter, {
                //     filter: FILTERS.NOT_BETWEEN.filter,
                //     filterName: FILTERS.NOT_BETWEEN.name,
                //     icon: <NotBetween />
                // }]

            ])
        case FILTER_TEXT:
        default:
            return new Map([
                [FILTERS.CONTAINS.filter, {
                    filter: FILTERS.CONTAINS.filter,
                    filterName: FILTERS.CONTAINS.name,
                    icon: <Contains />
                }],
                [FILTERS.NOT_CONTAINS.filter, {
                    filter: FILTERS.NOT_CONTAINS.filter,
                    filterName: FILTERS.NOT_CONTAINS.name,
                    icon: <DoesNotContain />
                }],
                [FILTERS.EE.filter, {
                    filter: FILTERS.EE.filter,
                    filterName: FILTERS.EE.name,
                    icon: <Equals />
                }],
                [FILTERS.NE.filter, {
                    filter: FILTERS.NE.filter,
                    filterName: FILTERS.NE.name,
                    icon: <DoesNotEqual />
                }]
            ])

    }
}

// export const TEXT_FILTERS = Array.from(FILTERS_BY_TYPE('text')).map((value, key) => value)
// export const NUMBER_FILTERS = Array.from(FILTERS_BY_TYPE('text')).map((value, key) => value)

export const getAllFiltersByType = (filterType: FilterType): Array<FilterOption> | [] => {
    let result: Array<FilterOption> = []
    FILTERS_BY_TYPE(filterType).forEach((filter) => {
        result.push(filter)
    })
    return result
}
export const getFilterByType = (filterType: FilterType, filter: Filter): FilterOption | undefined => {
    const filters = FILTERS_BY_TYPE(filterType)
    return filters.get(filter)
};
export const getDefaultFilterByType = (type: FilterType): string => {
    if (type === FILTER_NUMBER) return FILTERS.EE.filter
    if (type === FILTER_DATE) return FILTERS.ON_DATE.filter
    return FILTERS.CONTAINS.filter
}