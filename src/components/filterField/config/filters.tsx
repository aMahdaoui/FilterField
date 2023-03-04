import { AfterDate } from "src/assets/icons/AfterDate";
import { BeforeDate } from "src/assets/icons/BeforeDate";
import { Between } from "src/assets/icons/Between";
import { Contains } from "src/assets/icons/Contains";
import { DoesNotContain } from "src/assets/icons/DoesNotContain";
import { DoesNotEqual } from "src/assets/icons/DoesNotEqual";
import { Equals } from "src/assets/icons/Equals";
import { Greater } from "src/assets/icons/Greater";
import { GreaterEquals } from "src/assets/icons/GreaterEquals";
import { Less } from "src/assets/icons/Less";
import { LessEquals } from "src/assets/icons/LessEquals";
import { NotOnDate } from "src/assets/icons/NotOnDate";
import { OnDate } from "src/assets/icons/OnDate";
import { OnDateTime } from "src/assets/icons/OnDateTime";
import { RangeDate } from "src/assets/icons/RangeDate";
import { FilterOption } from "../types";
import { FILTERS, FILTER_DATE, FILTER_NUMBER, FILTER_TEXT } from "./constants";

export const FILTERS_BY_TYPE: { [key: string]: Map<string, FilterOption> } = {
  [FILTER_DATE]: new Map([
    [
      FILTERS.ON_DATE.filter,
      {
        filter: FILTERS.ON_DATE.filter,
        filterName: FILTERS.ON_DATE.name,
        icon: <OnDate />,
        withTime: false,
        withRange: false,
      },
    ],
    [
      FILTERS.NOT_ON_DATE.filter,
      {
        filter: FILTERS.NOT_ON_DATE.filter,
        filterName: FILTERS.NOT_ON_DATE.name,
        icon: <NotOnDate />,
        withTime: false,
        withRange: false,
      },
    ],
    [
      FILTERS.ON_DATE_TIME.filter,
      {
        filter: FILTERS.ON_DATE_TIME.filter,
        icon: <OnDateTime />,
        filterName: FILTERS.ON_DATE_TIME.name,
        withTime: true,
        withRange: false,
      },
    ],
    [
      FILTERS.BEFORE_DATE_TIME.filter,
      {
        filter: FILTERS.BEFORE_DATE_TIME.filter,
        icon: <BeforeDate />,
        filterName: FILTERS.BEFORE_DATE_TIME.name,
        withTime: true,
        withRange: false,
      },
    ],
    [
      FILTERS.AFTER_DATE_TIME.filter,
      {
        filter: FILTERS.AFTER_DATE_TIME.filter,
        icon: <AfterDate />,
        filterName: FILTERS.AFTER_DATE_TIME.name,
        withTime: true,
        withRange: false,
      },
    ],
    [
      FILTERS.DATE_RANGE.filter,
      {
        filter: FILTERS.DATE_RANGE.filter,
        icon: <RangeDate />,
        filterName: FILTERS.DATE_RANGE.name,
        withTime: true,
        withRange: false,
      },
    ],
  ]),
  [FILTER_NUMBER]: new Map([
    [
      FILTERS.EE.filter,
      {
        filter: FILTERS.EE.filter,
        filterName: FILTERS.EE.name,
        icon: <Equals />,
      },
    ],
    [
      FILTERS.NE.filter,
      {
        filter: FILTERS.NE.filter,
        filterName: FILTERS.NE.name,
        icon: <DoesNotEqual />,
      },
    ],
    [
      FILTERS.LT.filter,
      {
        filter: FILTERS.LT.filter,
        filterName: FILTERS.LT.name,
        icon: <Less />,
      },
    ],
    [
      FILTERS.LTE.filter,
      {
        filter: FILTERS.LTE.filter,
        filterName: FILTERS.LTE.name,
        icon: <LessEquals />,
      },
    ],
    [
      FILTERS.GT.filter,
      {
        filter: FILTERS.GT.filter,
        filterName: FILTERS.GT.name,
        icon: <Greater />,
      },
    ],
    [
      FILTERS.GTE.filter,
      {
        filter: FILTERS.GTE.filter,
        filterName: FILTERS.GTE.name,
        icon: <GreaterEquals />,
      },
    ],
    [
      FILTERS.BETWEEN.filter,
      {
        filter: FILTERS.BETWEEN.filter,
        filterName: FILTERS.BETWEEN.name,
        icon: <Between />,
      },
    ],
    // [FILTERS.NOT_BETWEEN.filter, {
    //     filter: FILTERS.NOT_BETWEEN.filter,
    //     filterName: FILTERS.NOT_BETWEEN.name,
    //     icon: <NotBetween />
    // }]
  ]),
  [FILTER_TEXT]: new Map([
    [
      FILTERS.CONTAINS.filter,
      {
        filter: FILTERS.CONTAINS.filter,
        filterName: FILTERS.CONTAINS.name,
        icon: <Contains />,
      },
    ],
    [
      FILTERS.NOT_CONTAINS.filter,
      {
        filter: FILTERS.NOT_CONTAINS.filter,
        filterName: FILTERS.NOT_CONTAINS.name,
        icon: <DoesNotContain />,
      },
    ],
    [
      FILTERS.EE.filter,
      {
        filter: FILTERS.EE.filter,
        filterName: FILTERS.EE.name,
        icon: <Equals />,
      },
    ],
    [
      FILTERS.NE.filter,
      {
        filter: FILTERS.NE.filter,
        filterName: FILTERS.NE.name,
        icon: <DoesNotEqual />,
      },
    ],
  ])
};