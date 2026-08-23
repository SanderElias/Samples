import {
  __spreadProps,
  __spreadValues
} from "./chunk-MJUTT27M.js";

// node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/root.js
var NativeTemporal = globalThis.Temporal;

// node_modules/.pnpm/temporal-utils@1.0.2/node_modules/temporal-utils/dist/errorMessages.js
var expectedPositive = (entityName, num) => `Non-positive ${entityName}: ${num}`;
var expectedFinite = (entityName, num) => `Non-finite ${entityName}: ${num}`;
var forbiddenBigIntToNumber = (entityName) => `Cannot convert bigint to ${entityName}`;
var invalidObject = "Invalid object";
var numberOutOfRange = (entityName, val, min, max) => invalidEntity(entityName, val) + `; must be between ${min}-${max}`;
var invalidEntity = (fieldName, val) => `Invalid ${fieldName}: ${val}`;

// node_modules/.pnpm/temporal-utils@1.0.2/node_modules/temporal-utils/dist/utils.js
var nanoInMicro = 1e3;
var nanoInMilli = 1e6;
var nanoInSec = 1e9;
var nanoInMinute = 6e10;
var nanoInHour = 36e11;
function normalizeOptions(options) {
  if (options === void 0) {
    return /* @__PURE__ */ Object.create(null);
  }
  return requireObjectLike(options);
}
function toFiniteNumber(arg, entityName = "number") {
  if (typeof arg === "bigint") {
    throw new TypeError(forbiddenBigIntToNumber(entityName));
  }
  arg = Number(arg);
  if (!Number.isFinite(arg)) {
    throw new RangeError(expectedFinite(entityName, arg));
  }
  return arg;
}
function toIntegerWithTrunc(arg, entityName) {
  return Math.trunc(toFiniteNumber(arg, entityName)) || 0;
}
function toPositiveIntegerWithTruncation(arg, entityName) {
  return requireNumberIsPositive(toIntegerWithTrunc(arg, entityName), entityName);
}
function requireNumberIsPositive(num, entityName = "number") {
  if (num <= 0) {
    throw new RangeError(expectedPositive(entityName, num));
  }
  return num;
}
function constrainToRange(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function isObjectLike(arg) {
  return arg !== null && (typeof arg === "object" || typeof arg === "function");
}
function requireObjectLike(arg) {
  if (!isObjectLike(arg)) {
    throw new TypeError(invalidObject);
  }
  return arg;
}

// node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/internal.js
var invalidEntity2 = invalidEntity;
var missingField = (fieldName) => `Missing ${fieldName}`;
var noValidFields = (validFields) => "No valid fields: " + validFields.join();
var invalidBag = "Invalid bag";
var invalidChoice = (fieldName, val, choiceMap) => invalidEntity(fieldName, val) + "; must be " + Object.keys(choiceMap).join();
var forbiddenValueOf = "Cannot use valueOf";
var invalidCallingContext = "Invalid calling context";
var missingYear = (allowEra) => "Missing year" + (allowEra ? "/era/eraYear" : "");
var invalidLeapMonth = "Invalid leap month";
var invalidCalendar = (calendarId) => invalidEntity("Calendar", calendarId);
var exoticCalendarRequired = (calendarId, remedy) => `Unknown calendar ${calendarId}; might need ${remedy}`;
var invalidTimeZone = (calendarId) => invalidEntity("TimeZone", calendarId);
var outOfBoundsDate = "Out-of-bounds date";
var failedParse = (s) => `Cannot parse: ${s}`;
var invalidSubstring = (substring) => `Invalid substring: ${substring}`;
var invalidFormatType = (branding) => `Cannot format ${branding}`;
var mismatchingFormatTypes = "Mismatching types for formatting";
var constrainToRange2 = constrainToRange;
var isObjectLike2 = isObjectLike;
function throwRangeError(message) {
  throw new RangeError(message);
}
function throwTypeError(message) {
  throw new TypeError(message);
}
function clampProp(props, propName, min, max, overflow) {
  return clampEntity(propName, ((props2, propName2) => {
    const propVal = props2[propName2];
    return void 0 === propVal && throwTypeError(missingField(propName2)), propVal;
  })(props, propName), min, max, overflow);
}
function clampEntity(entityName, num, min, max, overflow, choices) {
  const clamped = constrainToRange2(num, min, max);
  return overflow && num !== clamped && throwRangeError(((entityName2, val, min2, max2, choices2) => choices2 ? numberOutOfRange(entityName2, choices2[val], choices2[min2], choices2[max2]) : numberOutOfRange(entityName2, val, min2, max2))(entityName, num, min, max, choices)), clamped;
}
function memoize(generator, MapClass = Map) {
  const map = new MapClass();
  return (key, ...otherArgs) => {
    if (map.has(key)) {
      return map.get(key);
    }
    const val = generator(key, ...otherArgs);
    return map.set(key, val), val;
  };
}
var createNameDescriptors = (name) => createPropDescriptors({
  name
}, 1);
var createPropDescriptors = (propVals, readonly) => mapProps((value) => ({
  value,
  configurable: 1,
  writable: !readonly
}), propVals);
var createStringTagDescriptors = (value) => ({
  [Symbol.toStringTag]: {
    value,
    configurable: 1
  }
});
function mapProps(transformer, props) {
  const res = {};
  for (const propName in props) {
    res[propName] = transformer(props[propName], propName);
  }
  return res;
}
function zipPropsConst(propNames, propVal) {
  const res = {};
  for (const propName of propNames) {
    res[propName] = propVal;
  }
  return res;
}
function createPropGetters(propNames) {
  const getters = {};
  for (const propName of propNames) {
    getters[propName] = (slots) => slots[propName];
  }
  return getters;
}
function pluckProps(propNames, props, dest = /* @__PURE__ */ Object.create(null)) {
  for (const propName of propNames) {
    dest[propName] = props[propName];
  }
  return dest;
}
function allPropsEqual(propNames, props0, props1) {
  for (const propName of propNames) {
    if (props0[propName] !== props1[propName]) {
      return 0;
    }
  }
  return 1;
}
function zeroOutProps(propNames, clearUntilI, props) {
  const copy = __spreadValues({}, props);
  for (let i = 0; i < clearUntilI; i++) {
    copy[propNames[i]] = 0;
  }
  return copy;
}
function bindArgs(f, ...boundArgs) {
  return (...dynamicArgs) => f(...boundArgs, ...dynamicArgs);
}
function identity(arg) {
  return arg;
}
function noop() {
}
function capitalize(s) {
  return s[0].toUpperCase() + s.substring(1);
}
function sortStrings(...strss) {
  return [].concat(...strss).sort();
}
function createRegExp(meat) {
  return new RegExp(`^${meat}$`, "i");
}
function parseSubsecNano(fracStr) {
  return parseInt(fracStr.padEnd(9, "0"));
}
function parseSign(s) {
  return s && "+" !== s ? -1 : 1;
}
function parseInt0(s) {
  return void 0 === s ? 0 : parseInt(s);
}
function padNumber(digits, num) {
  return String(num).padStart(digits, "0");
}
var padNumber2 = /* @__PURE__ */ bindArgs(padNumber, 2);
function compareNumbers(a, b) {
  return Math.sign(a - b);
}
function compareBigInts(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function divFloorBigInt(num, denom) {
  const whole = num / denom;
  return num % denom < 0n ? whole - 1n : whole;
}
function divModFloorBigInt(num, divisor) {
  const quotient = divFloorBigInt(num, divisor);
  return [quotient, num - quotient * divisor];
}
function divModFloor(num, divisor) {
  return [Math.floor(num / divisor), modFloor(num, divisor)];
}
function modFloor(num, divisor) {
  return (num % divisor + divisor) % divisor;
}
function divTrunc(num, divisor) {
  return Math.trunc(num / divisor) || 0;
}
function modTrunc(num, divisor) {
  return num % divisor || 0;
}
function fabricateNearHalfFraction(halfCompare, sign = 1) {
  return sign * (0.5 + halfCompare / 5);
}
function hasHalf(num) {
  return 0.5 === Math.abs(num % 1);
}
var isoCalendarId = "iso8601";
var gregoryCalendarId = "gregory";
var gregoryEraOrigins = {
  "bce": -1,
  "ce": 0
};
function normalizeEraName(era) {
  const normalized = era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
  return "bc" === normalized || "b" === normalized ? "bce" : "ad" === normalized || "a" === normalized ? "ce" : normalized;
}
var isoCalendarImpl = void 0;
var gregoryCalendarImpl = 0;
function getCalendarSlotId(calendar) {
  return calendar === isoCalendarImpl ? "iso8601" : 0 === calendar ? "gregory" : calendar.id;
}
var monthCodeRegExp = /^M(\d{2})(L?)$/;
function parseMonthCode(monthCode) {
  const m = monthCodeRegExp.exec(monthCode);
  return m || throwRangeError(((monthCode2) => `Invalid monthCode: ${monthCode2}`)(monthCode)), [parseInt(m[1]), Boolean(m[2])];
}
function formatMonthCode(monthCodeNumber, isLeapMonth) {
  return "M" + padNumber2(monthCodeNumber) + (isLeapMonth ? "L" : "");
}
function monthCodeNumberToMonth(monthCodeNumber, isLeapMonth, leapMonth) {
  return monthCodeNumber + (isLeapMonth || leapMonth && monthCodeNumber >= leapMonth ? 1 : 0);
}
var unitNameMap = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
};
var unitNamesAsc = /* @__PURE__ */ Object.keys(unitNameMap);
var nanoInMicro2 = nanoInMicro;
var nanoInMilli2 = nanoInMilli;
var nanoInSec2 = nanoInSec;
var nanoInMinute2 = nanoInMinute;
var nanoInHour2 = nanoInHour;
var nanoInUtcDay = 864e11;
var unitNanoMap = [1, nanoInMicro2, nanoInMilli2, nanoInSec2, nanoInMinute2, nanoInHour2, nanoInUtcDay];
var bigNanoInMicro = /* @__PURE__ */ BigInt(nanoInMicro2);
var bigNanoInMilli = /* @__PURE__ */ BigInt(nanoInMilli2);
var bigNanoInSec = /* @__PURE__ */ BigInt(nanoInSec2);
var bigNanoInMinute = /* @__PURE__ */ BigInt(nanoInMinute2);
var bigNanoInHour = /* @__PURE__ */ BigInt(nanoInHour2);
var bigNanoInUtcDay = /* @__PURE__ */ BigInt(nanoInUtcDay);
function divideBigNanoToExactNumber(bigNano, divisorNano) {
  const days = Number(bigNano / bigNanoInUtcDay);
  const timeNano = Number(bigNano % bigNanoInUtcDay);
  return days * (nanoInUtcDay / divisorNano) + (Math.trunc(timeNano / divisorNano) + timeNano % divisorNano / divisorNano);
}
var timeFieldNamesAsc = /* @__PURE__ */ unitNamesAsc.slice(0, 6);
var timeGetters = /* @__PURE__ */ createPropGetters(timeFieldNamesAsc);
var yearFieldNamesAsc = ["year"];
var dayFieldNamesAsc = ["day"];
var calendarDateFieldNamesAsc = ["day", "month", "year"];
var offsetFieldNames = ["offset"];
var timeZoneFieldNames = ["timeZone"];
var eraYearFieldNames = ["era", "eraYear"];
var allYearFieldNames = ["era", "eraYear", "year"];
var monthFieldNames = ["month", "monthCode"];
var monthDayFieldNames = ["day", "month", "monthCode"];
var timeFieldNamesAlpha = /* @__PURE__ */ sortStrings(timeFieldNamesAsc);
var yearFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(eraYearFieldNames, yearFieldNamesAsc);
var yearMonthFieldNamesAlpha = /* @__PURE__ */ sortStrings(monthFieldNames, yearFieldNamesAsc);
var yearMonthFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(eraYearFieldNames, yearMonthFieldNamesAlpha);
var yearMonthCodeFieldNamesAlpha = /* @__PURE__ */ sortStrings(["monthCode"], yearFieldNamesAsc);
var yearMonthCodeFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(eraYearFieldNames, yearMonthCodeFieldNamesAlpha);
var monthCodeDayFieldNamesAlpha = /* @__PURE__ */ sortStrings(dayFieldNamesAsc, ["monthCode"]);
var dateFieldNamesAlpha = /* @__PURE__ */ sortStrings(dayFieldNamesAsc, yearMonthFieldNamesAlpha);
var dateFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(dayFieldNamesAsc, eraYearFieldNames, yearMonthFieldNamesAlpha);
var dateTimeFieldNamesAlpha = /* @__PURE__ */ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc);
var dateTimeFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc);
var dateTimeAndOffsetFieldNamesAlpha = /* @__PURE__ */ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc, offsetFieldNames);
var dateTimeAndOffsetFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc, offsetFieldNames);
var dateTimeAndZoneFieldNamesAlpha = /* @__PURE__ */ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc, offsetFieldNames, timeZoneFieldNames);
var dateTimeAndZoneFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc, offsetFieldNames, timeZoneFieldNames);
var yearMonthCodeDayFieldNamesAlpha = /* @__PURE__ */ sortStrings(dayFieldNamesAsc, yearMonthCodeFieldNamesAlpha);
var yearMonthCodeDayFieldNamesWithEraAlpha = /* @__PURE__ */ sortStrings(dayFieldNamesAsc, eraYearFieldNames, yearMonthCodeFieldNamesAlpha);
var timeFieldDefaults = /* @__PURE__ */ zipPropsConst(timeFieldNamesAsc, 0);
function validateTimeFields(timeFields) {
  return constrainTimeFields(timeFields, 1), timeFields;
}
var maxValues = {
  hour: 23,
  minute: 59,
  second: 59
};
function constrainTimeFields(timeFields, overflow) {
  const constrainedFields = {};
  for (const fieldName of timeFieldNamesAsc) {
    constrainedFields[fieldName] = clampEntity(fieldName, timeFields[fieldName], 0, maxValues[fieldName] || 999, overflow);
  }
  return constrainedFields;
}
function timeFieldsToNano(timeFields) {
  return timeFieldsToSec(timeFields) * nanoInSec2 + timeFieldsToSubsecNano(timeFields);
}
function timeFieldsToMilli(timeFields) {
  return 1e3 * timeFieldsToSec(timeFields) + timeFields.millisecond;
}
function timeFieldsToSec(timeFields) {
  return 3600 * timeFields.hour + 60 * timeFields.minute + timeFields.second;
}
function timeFieldsToSubsecNano(timeFields) {
  return timeFields.millisecond * nanoInMilli2 + timeFields.microsecond * nanoInMicro2 + timeFields.nanosecond;
}
function nanoToTimeAndDay(nano) {
  const [dayDelta, timeNano] = divModFloor(nano, nanoInUtcDay);
  return [nanoToTimeFields(timeNano), dayDelta];
}
function nanoToTimeFields(timeNano) {
  const [timeMilli, nanoAfterMilli] = divModFloor(timeNano, nanoInMilli2);
  const [microsecond, nanosecond] = divModFloor(nanoAfterMilli, nanoInMicro2);
  return milliToTimeFields(timeMilli, microsecond, nanosecond);
}
function milliToTimeFields(timeMilli, microsecond = 0, nanosecond = 0) {
  const [hour, milliAfterHour] = divModFloor(timeMilli, 36e5);
  const [minute, milliAfterMinute] = divModFloor(milliAfterHour, 6e4);
  const [second, millisecond] = divModFloor(milliAfterMinute, 1e3);
  return {
    hour,
    minute,
    second,
    millisecond,
    microsecond,
    nanosecond
  };
}
function epochNanoToSecMod(epochNano) {
  const [epochSec, nano] = divModFloorBigInt(epochNano, bigNanoInSec);
  return [Number(epochSec), Number(nano)];
}
function isoDateTimeToEpochNano(isoDateTime) {
  return isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime));
}
function isoDateTimeToEpochMilli(isoDateTime) {
  return isoDateToEpochMilli(isoDateTime) + timeFieldsToMilli(isoDateTime);
}
function isoDateToEpochNano(isoDate) {
  return BigInt(isoDateToEpochDays(isoDate)) * bigNanoInUtcDay;
}
function isoDateToEpochMilli(isoDate) {
  return 864e5 * isoDateToEpochDays(isoDate);
}
function isoDateToEpochDays(isoDate) {
  return isoArgsToEpochDays(isoDate.year, isoDate.month, isoDate.day);
}
function isoArgsToEpochDays(isoYear, isoMonth = 1, isoDay = 1) {
  const monthIndex = isoMonth - 1;
  return isoYear += Math.floor(monthIndex / 12), isoMonth = modFloor(monthIndex, 12), Date.UTC(isoYear % 400 - 400, isoMonth, 0) / 864e5 + 146097 * (divTrunc(isoYear, 400) + 1) + isoDay;
}
function epochNanoToIsoDateTime(epochNano) {
  const [epochDays, nanoAfterDay] = divModFloorBigInt(epochNano, bigNanoInUtcDay);
  return __spreadValues(__spreadValues({}, epochDaysToIsoDate(Number(epochDays))), nanoToTimeFields(Number(nanoAfterDay)));
}
function epochDaysToIsoDate(epochDays) {
  const legacyDate = new Date(864e5 * modFloor(epochDays, 146097));
  return {
    year: legacyDate.getUTCFullYear() + 400 * Math.floor(epochDays / 146097),
    month: legacyDate.getUTCMonth() + 1,
    day: legacyDate.getUTCDate()
  };
}
var isoEpochFirstLeapYear = 1972;
function computeIsoMonthCodeParts(month) {
  return [month, 0];
}
function computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, isLeapMonth) {
  if (!isLeapMonth) {
    return {
      year: 1972,
      month: monthCodeNumber
    };
  }
}
function computeIsoFieldsFromParts(year, month, day) {
  return {
    year,
    month,
    day
  };
}
function computeIsoDaysInMonth(year, month) {
  switch (month) {
    case 2:
      return computeIsoInLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function computeIsoDaysInYear(year) {
  return computeIsoInLeapYear(year) ? 366 : 365;
}
function computeIsoInLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
function addIsoMonths(year, month, monthDelta) {
  return year += divTrunc(monthDelta, 12), (month += modTrunc(monthDelta, 12)) < 1 ? (year--, month += 12) : month > 12 && (year++, month -= 12), {
    year,
    month
  };
}
function diffIsoMonthSlots(year0, month0, year1, month1) {
  return 12 * (year1 - year0) + month1 - month0;
}
function computeIsoDayOfWeek(isoDateFields) {
  return modFloor(isoArgsToEpochDays(isoDateFields.year, isoDateFields.month, isoDateFields.day) + 4, 7) || 7;
}
function computeIsoDayOfYear(isoDateFields) {
  return isoArgsToEpochDays(isoDateFields.year, isoDateFields.month, isoDateFields.day) - isoArgsToEpochDays(isoDateFields.year) + 1;
}
function computeIsoWeekFields(isoDateFields) {
  let yearOfWeek = isoDateFields.year;
  let weekOfYear = Math.floor((computeIsoDayOfYear(isoDateFields) - computeIsoDayOfWeek(isoDateFields) + 10) / 7);
  let weeksInYear = computeIsoWeeksInYear(yearOfWeek);
  return weekOfYear < 1 ? weekOfYear = weeksInYear = computeIsoWeeksInYear(--yearOfWeek) : weekOfYear > weeksInYear && (weekOfYear = 1, weeksInYear = computeIsoWeeksInYear(++yearOfWeek)), {
    weekOfYear,
    yearOfWeek,
    Be: weeksInYear
  };
}
function computeIsoWeeksInYear(year) {
  const y0DayOfWeek = computeIsoDayOfWeek({
    year,
    month: 1,
    day: 1
  });
  return 4 === y0DayOfWeek || 3 === y0DayOfWeek && computeIsoInLeapYear(year) ? 53 : 52;
}
function computeGregoryEraFields({ year }) {
  return year < 1 ? {
    era: "bce",
    eraYear: 1 - year
  } : {
    era: "ce",
    eraYear: year
  };
}
function validateIsoDateTimeFields(isoDateTime) {
  return validateIsoDateFields(isoDateTime), validateTimeFields(isoDateTime);
}
function validateIsoDateFields(isoInternals) {
  return constrainIsoDateFields(isoInternals, 1), isoInternals;
}
function isIsoDateFieldsValid(isoDate) {
  return allPropsEqual(calendarDateFieldNamesAsc, isoDate, constrainIsoDateFields(isoDate));
}
function constrainIsoDateFields(isoDate, overflow) {
  const { year } = isoDate;
  const month = clampProp(isoDate, "month", 1, 12, overflow);
  return {
    year,
    month,
    day: clampProp(isoDate, "day", 1, computeIsoDaysInMonth(year, month), overflow)
  };
}
function computeCalendarDateFields(calendar, isoDate) {
  return calendar ? calendar.ae(isoDate) : isoDate;
}
function computeCalendarMonthCodeParts(calendar, year, month) {
  return calendar ? calendar.L(year, month) : computeIsoMonthCodeParts(month);
}
function computeCalendarEraFields(calendar, isoDate) {
  return 0 === calendar ? computeGregoryEraFields(isoDate) : calendar && calendar.h?.(isoDate) || {};
}
function computeCalendarIsoFieldsFromParts(calendar, year, month, day) {
  return calendar ? calendar.de(year, month, day) : computeIsoFieldsFromParts(year, month, day);
}
function computeCalendarMonthsInYearForYear(calendar, year) {
  return calendar ? calendar.j(year) : 12;
}
function computeCalendarDaysInMonthForYearMonth(calendar, year, month) {
  return calendar ? calendar.o(year, month) : computeIsoDaysInMonth(year, month);
}
function computeCalendarMonthCode(calendar, isoDate) {
  const { year, month } = computeCalendarDateFields(calendar, isoDate);
  const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
  return formatMonthCode(monthCodeNumber, isLeapMonth);
}
function computeCalendarInLeapYear(calendar, isoDate) {
  const { year } = computeCalendarDateFields(calendar, isoDate);
  return calendar ? calendar.q(year) : computeIsoInLeapYear(year);
}
function computeCalendarMonthsInYear(calendar, isoDate) {
  const { year } = computeCalendarDateFields(calendar, isoDate);
  return computeCalendarMonthsInYearForYear(calendar, year);
}
function computeCalendarDaysInMonth(calendar, isoDate) {
  const { year, month } = computeCalendarDateFields(calendar, isoDate);
  return computeCalendarDaysInMonthForYearMonth(calendar, year, month);
}
function computeCalendarDaysInYear(calendar, isoDate) {
  const { year } = computeCalendarDateFields(calendar, isoDate);
  return calendar ? calendar.i(year) : computeIsoDaysInYear(year);
}
function computeCalendarDayOfYear(calendar, isoDate) {
  if (!calendar) {
    return computeIsoDayOfYear(isoDate);
  }
  const { year } = computeCalendarDateFields(calendar, isoDate);
  const yearStartIsoDate = computeCalendarIsoFieldsFromParts(calendar, year, 1, 1);
  return isoDateToEpochDays(isoDate) - isoDateToEpochDays(yearStartIsoDate) + 1;
}
function computeCalendarWeekOfYear(calendar, isoDate) {
  return calendar === isoCalendarImpl ? computeIsoWeekFields(isoDate).weekOfYear : void 0;
}
function computeCalendarYearOfWeek(calendar, isoDate) {
  return calendar === isoCalendarImpl ? computeIsoWeekFields(isoDate).yearOfWeek : void 0;
}
var durationFieldNamesAsc = /* @__PURE__ */ unitNamesAsc.map((unitName) => unitName + "s");
var durationGetters = /* @__PURE__ */ createPropGetters(durationFieldNamesAsc);
var durationFieldNamesAlpha = /* @__PURE__ */ sortStrings(durationFieldNamesAsc);
var durationTimeFieldNamesAsc = /* @__PURE__ */ durationFieldNamesAsc.slice(0, 6);
var durationDateFieldNamesAsc = /* @__PURE__ */ durationFieldNamesAsc.slice(6);
var durationCalendarFieldNamesAsc = /* @__PURE__ */ durationDateFieldNamesAsc.slice(1);
var durationFieldDefaults = /* @__PURE__ */ zipPropsConst(durationFieldNamesAsc, 0);
var durationTimeFieldDefaults = /* @__PURE__ */ zipPropsConst(durationTimeFieldNamesAsc, 0);
var clearDurationFields = /* @__PURE__ */ bindArgs(zeroOutProps, durationFieldNamesAsc);
function requirePropDefined(optionName, optionVal) {
  return null == optionVal && throwRangeError(missingField(optionName)), optionVal;
}
var requireString = /* @__PURE__ */ bindArgs(requireType, "string");
function requireType(typeName, arg, entityName = typeName) {
  return typeof arg !== typeName && throwTypeError(invalidEntity2(entityName, arg)), arg;
}
function requireNumberIsInteger(num, entityName = "number") {
  return Number.isInteger(num) || throwRangeError(((entityName2, num2) => `Non-integer ${entityName2}: ${num2}`)(entityName, num)), num || 0;
}
function toString(arg) {
  return "symbol" == typeof arg && throwTypeError("Cannot convert Symbol to string"), String(arg);
}
function toStringViaPrimitive(arg, entityName) {
  return isObjectLike(arg) ? String(arg) : requireString(arg, entityName);
}
function toBigInt(bi) {
  return "boolean" == typeof bi ? BigInt(bi ? 1 : 0) : "string" == typeof bi ? BigInt(bi) : ("bigint" != typeof bi && throwTypeError(`Invalid bigint: ${bi}`), bi);
}
function toStrictInteger(arg, entityName) {
  return requireNumberIsInteger(toFiniteNumber(arg, entityName), entityName);
}
function normalizeOptionsOrString(options, optionName) {
  return "string" == typeof options ? ((optionName2, optionVal) => {
    const res = /* @__PURE__ */ Object.create(null);
    return res[optionName2] = optionVal, res;
  })(optionName, options) : requireObjectLike(options);
}
var smallestUnitStr = "smallestUnit";
var overflowMap = {
  constrain: 0,
  reject: 1
};
var epochDisambigMap = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
};
var offsetDisambigMap = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
};
var calendarDisplayMap = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
};
var timeZoneDisplayMap = {
  auto: 0,
  never: 1,
  critical: 2
};
var offsetDisplayMap = {
  auto: 0,
  never: 1
};
var roundingModeMap = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
};
var roundingModeFuncs = [Math.floor, (num) => hasHalf(num) ? Math.floor(num) : Math.round(num), Math.ceil, (num) => hasHalf(num) ? Math.ceil(num) : Math.round(num), Math.trunc, (num) => hasHalf(num) ? Math.trunc(num) || 0 : Math.round(num), (num) => num < 0 ? Math.floor(num) : Math.ceil(num), (num) => Math.sign(num) * Math.round(Math.abs(num)) || 0, (num) => hasHalf(num) ? (num = Math.trunc(num) || 0) + num % 2 : Math.round(num)];
var directionMap = {
  previous: -1,
  next: 1
};
function coerceRoundingIncInteger(options) {
  const roundingInc = options.roundingIncrement;
  return void 0 === roundingInc ? 1 : toIntegerWithTrunc(roundingInc, "roundingIncrement");
}
function coerceFractionalSecondDigits(options) {
  let subsecDigits = options.fractionalSecondDigits;
  if (void 0 !== subsecDigits) {
    if ("number" != typeof subsecDigits) {
      if ("auto" === toString(subsecDigits)) {
        return;
      }
      throwRangeError(invalidEntity2("fractionalSecondDigits", subsecDigits));
    }
    subsecDigits = clampEntity("fractionalSecondDigits", Math.floor(subsecDigits), 0, 9, 1);
  }
  return subsecDigits;
}
function coerceUnitOption(optionName, options, minUnit = 0, ensureDefined) {
  let unitStr = options[optionName];
  if (void 0 === unitStr) {
    return ensureDefined ? minUnit : void 0;
  }
  if (unitStr = toString(unitStr), "auto" === unitStr) {
    return ensureDefined ? minUnit : null;
  }
  let unit = unitNameMap[unitStr];
  return void 0 === unit && (unit = durationFieldNamesAsc.indexOf(unitStr)), unit < 0 && throwRangeError(invalidChoice(optionName, unitStr, unitNameMap)), unit;
}
function coerceChoiceOption(optionName, enumNameMap, options, defaultChoice = 0) {
  const enumArg = options[optionName];
  if (void 0 === enumArg) {
    return defaultChoice;
  }
  const enumStr = toString(enumArg);
  const enumNum = enumNameMap[enumStr];
  return void 0 === enumNum && throwRangeError(invalidChoice(optionName, enumStr, enumNameMap)), enumNum;
}
var coerceSmallestUnit = /* @__PURE__ */ bindArgs(coerceUnitOption, smallestUnitStr);
var coerceLargestUnit = /* @__PURE__ */ bindArgs(coerceUnitOption, "largestUnit");
var coerceTotalUnit = /* @__PURE__ */ bindArgs(coerceUnitOption, "unit");
var coerceOverflow = /* @__PURE__ */ bindArgs(coerceChoiceOption, "overflow", overflowMap);
var coerceEpochDisambig = /* @__PURE__ */ bindArgs(coerceChoiceOption, "disambiguation", epochDisambigMap);
var coerceOffsetDisambig = /* @__PURE__ */ bindArgs(coerceChoiceOption, "offset", offsetDisambigMap);
var coerceCalendarDisplay = /* @__PURE__ */ bindArgs(coerceChoiceOption, "calendarName", calendarDisplayMap);
var coerceTimeZoneDisplay = /* @__PURE__ */ bindArgs(coerceChoiceOption, "timeZoneName", timeZoneDisplayMap);
var coerceOffsetDisplay = /* @__PURE__ */ bindArgs(coerceChoiceOption, "offset", offsetDisplayMap);
var coerceRoundingMode = /* @__PURE__ */ bindArgs(coerceChoiceOption, "roundingMode", roundingModeMap);
var coerceDirection = /* @__PURE__ */ bindArgs(coerceChoiceOption, "direction", directionMap);
function validateRoundingInc(roundingInc, smallestUnit, allowManyLargeUnits, solarMode) {
  const upUnitNano = solarMode ? nanoInUtcDay : unitNanoMap[smallestUnit + 1];
  if (upUnitNano) {
    const unitNano = unitNanoMap[smallestUnit];
    upUnitNano % ((roundingInc = clampEntity("roundingIncrement", roundingInc, 1, upUnitNano / unitNano - (solarMode ? 0 : 1), 1)) * unitNano) && throwRangeError(invalidEntity2("roundingIncrement", roundingInc));
  } else {
    roundingInc = clampEntity("roundingIncrement", roundingInc, 1, allowManyLargeUnits ? 10 ** 9 : 1, 1);
  }
  return roundingInc;
}
function validateUnitRange(optionName, unit, minUnit, maxUnit) {
  return null != unit && clampEntity(optionName, unit, minUnit, maxUnit, 1, unitNamesAsc), unit;
}
function checkLargestSmallestUnit(largestUnit, smallestUnit) {
  smallestUnit > largestUnit && throwRangeError("smallestUnit > largestUnit");
}
function refineDiffOptions(roundingModeInvert, options, defaultLargestUnit, maxUnit = 9, minUnit = 0, defaultRoundingMode = 4) {
  options = normalizeOptions(options);
  let largestUnit = coerceLargestUnit(options, minUnit);
  let roundingInc = coerceRoundingIncInteger(options);
  let roundingMode = coerceRoundingMode(options, defaultRoundingMode);
  let smallestUnit = coerceSmallestUnit(options, minUnit, 1);
  return largestUnit = validateUnitRange("largestUnit", largestUnit, minUnit, maxUnit), smallestUnit = validateUnitRange(smallestUnitStr, smallestUnit, minUnit, maxUnit), null == largestUnit ? largestUnit = Math.max(defaultLargestUnit, smallestUnit) : checkLargestSmallestUnit(largestUnit, smallestUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, 1), roundingModeInvert && (roundingMode = ((roundingMode2) => roundingMode2 < 4 ? (roundingMode2 + 2) % 4 : roundingMode2)(roundingMode)), [largestUnit, smallestUnit, roundingInc, roundingMode];
}
function refineRoundingOptions(options, maxUnit = 6, solarMode) {
  let roundingInc = coerceRoundingIncInteger(options = normalizeOptionsOrString(options, smallestUnitStr));
  const roundingMode = coerceRoundingMode(options, 7);
  let smallestUnit = coerceSmallestUnit(options);
  return smallestUnit = requirePropDefined(smallestUnitStr, smallestUnit), smallestUnit = validateUnitRange(smallestUnitStr, smallestUnit, 0, maxUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, void 0, solarMode), [smallestUnit, roundingInc, roundingMode];
}
function combineDateAndTime(isoDate, time) {
  return pluckProps(calendarDateFieldNamesAsc, isoDate, pluckProps(timeFieldNamesAsc, time));
}
function refineOverflowOptions(options) {
  return void 0 === options ? 0 : coerceOverflow(requireObjectLike(options));
}
function refineZonedFieldOptions(options, defaultOffsetDisambig = 0) {
  options = normalizeOptions(options);
  const epochDisambig = coerceEpochDisambig(options);
  const offsetDisambig = coerceOffsetDisambig(options, defaultOffsetDisambig);
  return [coerceOverflow(options), offsetDisambig, epochDisambig];
}
var epochNanoMax = /* @__PURE__ */ BigInt(1e8) * bigNanoInUtcDay;
var epochNanoMin = /* @__PURE__ */ BigInt(-1e8) * bigNanoInUtcDay;
var plainDateEpochNanoMin = epochNanoMin - bigNanoInUtcDay;
var isoYearMonthIndexMin = -3261848;
function checkIsoYearMonthInBounds(isoDate) {
  const isoYearMonthIndex = 12 * isoDate.year + isoDate.month;
  return (isoYearMonthIndex < isoYearMonthIndexMin || isoYearMonthIndex > 3309129) && throwRangeError(outOfBoundsDate), isoDate;
}
function checkIsoDateInBounds(isoDate, allowPlainDateLowerEdge = 1) {
  return checkIsoDateEpochNanoInBounds(isoDateToEpochNano(isoDate), allowPlainDateLowerEdge), isoDate;
}
function checkIsoDateTimeInBounds(isoDateTime) {
  const epochNano = isoDateToEpochNano(isoDateTime);
  return checkIsoDateEpochNanoInBounds(epochNano), epochNano !== plainDateEpochNanoMin || timeFieldsToNano(isoDateTime) || throwRangeError(outOfBoundsDate), isoDateTime;
}
function checkIsoDateEpochNanoInBounds(epochNano, allowPlainDateLowerEdge = 1) {
  (epochNano < (allowPlainDateLowerEdge ? plainDateEpochNanoMin : epochNanoMin) || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate);
}
function checkEpochNanoInBounds(epochNano) {
  return (epochNano < epochNanoMin || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate), epochNano;
}
function isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano) {
  return checkEpochNanoInBounds(isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime) - offsetNano));
}
function createEpochNanoSlots(epochNano) {
  return {
    epochNanoseconds: epochNano
  };
}
function createZonedEpochNanoSlots(epochNano, timeZone, calendar) {
  return {
    calendar,
    timeZone,
    epochNanoseconds: epochNano
  };
}
function createDateTimeSlots(isoDateTime, calendar) {
  return pluckProps(timeFieldNamesAsc, isoDateTime, createDateSlots(isoDateTime, calendar));
}
function createDateSlots(isoDate, calendar) {
  return pluckProps(calendarDateFieldNamesAsc, isoDate, {
    calendar
  });
}
function createTimeSlots(time) {
  return pluckProps(timeFieldNamesAsc, time);
}
function createDurationSlots(durationFields) {
  return pluckProps(durationFieldNamesAsc, durationFields, {
    sign: computeDurationSign(durationFields)
  });
}
function getEpochMilli(slots) {
  return epochNano = slots.epochNanoseconds, Number(divFloorBigInt(epochNano, bigNanoInMilli));
  var epochNano;
}
function getEpochNano(slots) {
  return slots.epochNanoseconds;
}
function totalDuration(refineRelativeTo, slots, options) {
  const maxDurationUnit = getMaxDurationUnit(slots);
  const [totalUnit, relativeToSlots] = ((options2, refineRelativeTo2) => {
    const relativeToInternals = refineRelativeTo2((options2 = normalizeOptionsOrString(options2, "unit")).relativeTo);
    let totalUnit2 = coerceTotalUnit(options2);
    return totalUnit2 = requirePropDefined("unit", totalUnit2), [totalUnit2, relativeToInternals];
  })(options, refineRelativeTo);
  const maxUnit = Math.max(totalUnit, maxDurationUnit);
  const isZoned = relativeToSlots && isZonedEpochSlots(relativeToSlots);
  if (!relativeToSlots && isUniformUnit(maxUnit, isZoned)) {
    return totalDayTimeDuration(slots, totalUnit);
  }
  if (relativeToSlots || throwRangeError("Missing relativeTo"), !slots.sign && isUniformUnit(totalUnit, isZoned)) {
    return 0;
  }
  const [balancedDuration, endEpochNano, relativeOps] = spanRelativeDuration(relativeToSlots, slots, totalUnit);
  return isUniformUnit(totalUnit, isZoned) ? totalDayTimeDuration(balancedDuration, totalUnit) : totalRelativeDuration(balancedDuration, endEpochNano, totalUnit, relativeOps);
}
function totalRelativeDuration(durationFields, endEpochNano, totalUnit, relativeOps) {
  const sign = computeDurationSign(durationFields) || 1;
  const nudgeWindow = clampRelativeDuration(clearDurationFields(totalUnit, durationFields), totalUnit, sign, relativeOps, endEpochNano);
  const epochNano0 = nudgeWindow.ee;
  const epochNano1 = nudgeWindow.te;
  const denom = Number(epochNano1 - epochNano0);
  const numerator = Number(endEpochNano - epochNano0);
  return nudgeWindow.pe[durationFieldNamesAsc[totalUnit]] + numerator / denom * sign;
}
function totalDayTimeDuration(durationFields, totalUnit) {
  return divideBigNanoToExactNumber(durationDayTimeToBigNano(durationFields), unitNanoMap[totalUnit]);
}
function clampRelativeDuration(durationFields, clampUnit, clampDistance, relativeOps, epochNanoProgress) {
  const unitName = durationFieldNamesAsc[clampUnit];
  let startDurationFields = durationFields;
  let shifted = 0;
  let window = computeRelativeDurationWindow(startDurationFields, unitName, clampDistance, relativeOps);
  return epochNanoProgress && !((epochNanoProgress2, epochNano0, epochNano1, sign) => sign > 0 ? compareBigInts(epochNano0, epochNanoProgress2) <= 0 && compareBigInts(epochNanoProgress2, epochNano1) <= 0 : compareBigInts(epochNano1, epochNanoProgress2) <= 0 && compareBigInts(epochNanoProgress2, epochNano0) <= 0)(epochNanoProgress, window.ee, window.te, Math.sign(clampDistance)) && (startDurationFields = __spreadProps(__spreadValues({}, durationFields), {
    [unitName]: durationFields[unitName] + clampDistance
  }), shifted = 1, window = computeRelativeDurationWindow(startDurationFields, unitName, clampDistance, relativeOps)), __spreadProps(__spreadValues({}, window), {
    pe: startDurationFields,
    Ae: shifted
  });
}
function computeRelativeDurationWindow(startDurationFields, unitName, clampDistance, relativeOps) {
  const endDurationFields = __spreadProps(__spreadValues({}, startDurationFields), {
    [unitName]: startDurationFields[unitName] + clampDistance
  });
  return {
    ee: moveRelativeToEpochNano(relativeOps, startDurationFields),
    te: moveRelativeToEpochNano(relativeOps, endDurationFields),
    se: endDurationFields
  };
}
function computeEpochNanoFrac(epochNanoProgress, epochNano0, epochNano1) {
  const denomBig = epochNano1 - epochNano0;
  const numeratorBig = epochNanoProgress - epochNano0;
  if (!numeratorBig) {
    return 0;
  }
  const absNumerator = numeratorBig < 0n ? -numeratorBig : numeratorBig;
  const absDenom = denomBig < 0n ? -denomBig : denomBig;
  const fracSign = compareBigInts(numeratorBig, 0n) === compareBigInts(denomBig, 0n) ? 1 : -1;
  return compareBigInts(absNumerator, absDenom) <= 0 ? absNumerator === absDenom ? fracSign : fabricateNearHalfFraction(compareBigInts(2n * absNumerator, absDenom), fracSign) : Number(numeratorBig) / Number(denomBig);
}
function roundZonedEpochSlotsToUnit(slots, smallestUnit, roundingInc, roundingMode) {
  let { epochNanoseconds } = slots;
  const { timeZone, calendar } = slots;
  if (0 === smallestUnit && 1 === roundingInc) {
    return {
      epochNanoseconds,
      timeZone,
      calendar
    };
  }
  if (6 === smallestUnit) {
    const isoFields0 = combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults);
    const isoFields1 = combineDateAndTime(moveByDays(isoFields0, 1), timeFieldDefaults);
    const epochNano0 = getStartOfDayInstantFor(timeZone, isoFields0);
    const epochNano1 = getStartOfDayInstantFor(timeZone, isoFields1);
    epochNanoseconds = roundWithMode(computeZonedDayRoundFrac(epochNanoseconds, epochNano0, epochNano1), roundingMode) ? epochNano1 : epochNano0;
  } else {
    const isoDateTime = zonedEpochSlotsToIso(slots);
    const offsetNano = isoDateTime.offsetNanoseconds;
    epochNanoseconds = getMatchingInstantFor(timeZone, roundDateTimeToNano(isoDateTime, computeNanoInc(smallestUnit, roundingInc), roundingMode), offsetNano, 2, 0, 1);
  }
  return {
    epochNanoseconds,
    timeZone,
    calendar
  };
}
function computeZonedHoursInDay(slots) {
  const { timeZone } = slots;
  const isoFields0 = combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults);
  const isoFields1 = combineDateAndTime(moveByDays(isoFields0, 1), timeFieldDefaults);
  const epochNano0 = getStartOfDayInstantFor(timeZone, isoFields0);
  return divideBigNanoToExactNumber(getStartOfDayInstantFor(timeZone, isoFields1) - epochNano0, nanoInHour2);
}
function computeZonedStartOfDay(slots) {
  const { timeZone, calendar } = slots;
  return createZonedEpochNanoSlots(getStartOfDayInstantFor(timeZone, combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults)), timeZone, calendar);
}
function computeZonedDayRoundFrac(epochNano, epochNano0, epochNano1) {
  return computeEpochNanoFrac(epochNano < epochNano1 ? epochNano : epochNano1 - 1n, epochNano0, epochNano1);
}
function roundDateTimeToNano(isoDateTime, nanoInc, roundingMode) {
  const [roundedTimeFields, dayDelta] = roundTimeToNano(isoDateTime, nanoInc, roundingMode);
  const roundedIsoDateTime = combineDateAndTime(moveByDays(isoDateTime, dayDelta), roundedTimeFields);
  return checkIsoDateTimeInBounds(roundedIsoDateTime), roundedIsoDateTime;
}
function roundTimeToNano(timeFields, nanoInc, roundingMode) {
  return nanoToTimeAndDay(roundNumberToInc(timeFieldsToNano(timeFields), nanoInc, roundingMode));
}
function roundToMinute(offsetNano) {
  return roundNumberToInc(offsetNano, nanoInMinute2, 7);
}
function computeNanoInc(smallestUnit, roundingInc) {
  return unitNanoMap[smallestUnit] * roundingInc;
}
function computeBigNanoInc(smallestUnit, roundingInc) {
  return BigInt(unitNanoMap[smallestUnit]) * BigInt(roundingInc);
}
function roundDayTimeDurationByInc(durationFields, nanoInc, roundingMode) {
  const maxUnit = Math.min(getMaxDurationUnit(durationFields), 6);
  return nanoToDurationDayTimeFields(roundBigNanoToInc(durationDayTimeToBigNano(durationFields), BigInt(nanoInc), roundingMode), maxUnit);
}
function roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps, isZoned) {
  if (0 === smallestUnit && 1 === roundingInc) {
    return durationFields;
  }
  const sign = computeDurationSign(durationFields) || 1;
  const nudgeFunc = isUniformUnit(smallestUnit, isZoned) ? isZoned && smallestUnit < 6 && largestUnit >= 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration : nudgeRelativeDuration;
  let [roundedDurationFields, roundedEpochNano, grewBigUnit] = nudgeFunc(sign, durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps);
  return grewBigUnit && 7 !== smallestUnit && (roundedDurationFields = ((durationFields2, endEpochNano2, largestUnit2, smallestUnit2, sign2, relativeOps2) => {
    for (let currentUnit = smallestUnit2 + 1; currentUnit <= largestUnit2; currentUnit++) {
      if (7 === currentUnit && 7 !== largestUnit2) {
        continue;
      }
      const baseDurationFields = clearDurationFields(currentUnit, durationFields2);
      baseDurationFields[durationFieldNamesAsc[currentUnit]] += sign2;
      const thresholdCompare = compareBigInts(endEpochNano2, moveRelativeToEpochNano(relativeOps2, baseDurationFields));
      if (thresholdCompare && thresholdCompare !== sign2) {
        break;
      }
      durationFields2 = baseDurationFields;
    }
    return durationFields2;
  })(roundedDurationFields, roundedEpochNano, largestUnit, Math.max(6, smallestUnit), sign, relativeOps)), roundedDurationFields;
}
function roundBigNanoToInc(bigNano, bigNanoInc, roundingMode) {
  return roundBigNanoToIncWithTail(bigNano, bigNanoInc, roundingMode, bigNano / bigNanoInc % 2n);
}
function roundBigNanoToDayOriginInc(bigNano, bigNanoInc, roundingMode) {
  const [day, timeNano] = divModFloorBigInt(bigNano, bigNanoInUtcDay);
  const dayOriginNano = day * bigNanoInUtcDay;
  return dayOriginNano + roundBigNanoToIncWithTail(timeNano, bigNanoInc, roundingMode, (dayOriginNano / bigNanoInc + timeNano / bigNanoInc) % 2n);
}
function roundBigNanoToIncWithTail(bigNano, bigNanoInc, roundingMode, quotientTail) {
  const quotient = bigNano / bigNanoInc;
  const remainder = bigNano % bigNanoInc;
  let fraction = 0;
  remainder && (fraction = fabricateNearHalfFraction(compareBigInts(2n * (remainder < 0n ? -remainder : remainder), bigNanoInc), Math.sign(Number(remainder))));
  const roundedTail = roundWithMode(Number(quotientTail) + fraction, roundingMode);
  return (quotient - quotientTail + BigInt(roundedTail)) * bigNanoInc;
}
function roundNumberToInc(num, roundingInc, roundingMode) {
  return roundWithMode(num / roundingInc, roundingMode) * roundingInc;
}
function roundWithMode(num, roundingMode) {
  return roundingModeFuncs[roundingMode](num);
}
function nudgeDayTimeDuration(sign, durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
  const bigNano = durationDayTimeToBigNano(durationFields);
  const roundedBigNano = roundBigNanoToInc(bigNano, computeBigNanoInc(smallestUnit, roundingInc), roundingMode);
  const nanoDiff = roundedBigNano - bigNano;
  const expandedBigUnit = Math.sign(Number(roundedBigNano / bigNanoInUtcDay) - Number(bigNano / bigNanoInUtcDay)) === sign;
  const roundedDayTimeFields = nanoToDurationDayTimeFields(roundedBigNano, Math.min(largestUnit, 6));
  return [__spreadValues(__spreadValues({}, durationFields), roundedDayTimeFields), endEpochNano + nanoDiff, expandedBigUnit];
}
function nudgeZonedTimeDuration(sign, durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps) {
  const timeNano = Number(durationTimeToBigNano(durationFields));
  const nanoInc = computeNanoInc(smallestUnit, roundingInc);
  let roundedTimeNano = roundNumberToInc(timeNano, nanoInc, roundingMode);
  const dayWindow = clampRelativeDuration(__spreadValues(__spreadValues({}, durationFields), durationTimeFieldDefaults), 6, sign, relativeOps, endEpochNano);
  const dayEpochNano0 = dayWindow.ee;
  const dayEpochNano1 = dayWindow.te;
  const beyondDayNano = roundedTimeNano - Number(dayEpochNano1 - dayEpochNano0);
  let dayDelta = 0;
  beyondDayNano && Math.sign(beyondDayNano) !== sign ? endEpochNano = dayEpochNano0 + BigInt(roundedTimeNano) : (dayDelta += sign, roundedTimeNano = roundNumberToInc(beyondDayNano, nanoInc, roundingMode), endEpochNano = dayEpochNano1 + BigInt(roundedTimeNano));
  const durationTimeFields = nanoToDurationTimeFields(roundedTimeNano);
  return [__spreadProps(__spreadValues(__spreadValues({}, durationFields), durationTimeFields), {
    days: durationFields.days + dayDelta
  }), endEpochNano, Boolean(dayDelta)];
}
function nudgeRelativeDuration(sign, durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps) {
  const smallestUnitFieldName = durationFieldNamesAsc[smallestUnit];
  const baseDurationFields = clearDurationFields(smallestUnit, durationFields);
  7 === smallestUnit && (durationFields = __spreadProps(__spreadValues({}, durationFields), {
    weeks: durationFields.weeks + Math.trunc(durationFields.days / 7)
  }));
  const truncedVal = divTrunc(durationFields[smallestUnitFieldName], roundingInc) * roundingInc;
  baseDurationFields[smallestUnitFieldName] = truncedVal;
  const nudgeWindow = clampRelativeDuration(baseDurationFields, smallestUnit, roundingInc * sign, relativeOps, endEpochNano);
  const epochNano0 = nudgeWindow.ee;
  const epochNano1 = nudgeWindow.te;
  const frac = computeEpochNanoFrac(endEpochNano, epochNano0, epochNano1);
  const windowStartVal = nudgeWindow.pe[smallestUnitFieldName];
  const windowEndVal = nudgeWindow.se[smallestUnitFieldName];
  const roundedVal = roundNumberToInc(windowStartVal + frac * sign * roundingInc, roundingInc, roundingMode);
  const roundedToEnd = roundedVal === windowEndVal;
  return baseDurationFields[smallestUnitFieldName] = roundedVal, [baseDurationFields, roundedToEnd ? epochNano1 : epochNano0, nudgeWindow.Ae || roundedToEnd];
}
function getTimeZoneTransitionEpochNanoseconds(slots, options) {
  return slots.timeZone.O(slots.epochNanoseconds, ((options2) => {
    const normalizedOptions = normalizeOptionsOrString(options2, "direction");
    const res = coerceDirection(normalizedOptions, 0);
    return res || throwRangeError(invalidEntity2("direction", res)), res;
  })(options));
}
var zonedEpochSlotsToIso = /* @__PURE__ */ memoize(_zonedEpochSlotsToIso, WeakMap);
function _zonedEpochSlotsToIso(slots) {
  const { epochNanoseconds, timeZone } = slots;
  const offsetNanoseconds = timeZone.B(epochNanoseconds);
  return __spreadProps(__spreadValues({}, epochNanoToIsoDateTime(epochNanoseconds + BigInt(offsetNanoseconds))), {
    offsetNanoseconds
  });
}
function getMatchingInstantFor(timeZone, isoDateTime, offsetNano, offsetDisambig = 0, epochDisambig = 0, epochFuzzy, hasZ) {
  if (void 0 !== offsetNano && 1 === offsetDisambig && (1 === offsetDisambig || hasZ)) {
    return isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano);
  }
  2 !== offsetDisambig && 0 !== offsetDisambig || checkIsoDateInBounds(isoDateTime, 0);
  const possibleEpochNanos = timeZone.N(isoDateTime);
  if (void 0 !== offsetNano && 3 !== offsetDisambig) {
    const matchingEpochNano = ((possibleEpochNanos2, isoDateTime2, offsetNano2, fuzzy) => {
      const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime2);
      fuzzy && (offsetNano2 = roundToMinute(offsetNano2));
      for (const possibleEpochNano of possibleEpochNanos2) {
        let possibleOffsetNano = Number(zonedEpochNano - possibleEpochNano);
        if (fuzzy && (possibleOffsetNano = roundToMinute(possibleOffsetNano)), possibleOffsetNano === offsetNano2) {
          return possibleEpochNano;
        }
      }
    })(possibleEpochNanos, isoDateTime, offsetNano, epochFuzzy);
    if (void 0 !== matchingEpochNano) {
      return matchingEpochNano;
    }
    0 === offsetDisambig && throwRangeError("Invalid TimeZone offset");
  }
  return hasZ ? isoDateTimeToEpochNano(isoDateTime) : getSingleInstantFor(timeZone, isoDateTime, epochDisambig, possibleEpochNanos);
}
function getSingleInstantFor(timeZone, isoDateTime, disambig = 0, possibleEpochNanos = timeZone.N(isoDateTime)) {
  if (1 === possibleEpochNanos.length) {
    return possibleEpochNanos[0];
  }
  if (1 === disambig && throwRangeError("Ambiguous offset"), possibleEpochNanos.length) {
    return possibleEpochNanos[3 === disambig ? 1 : 0];
  }
  const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime);
  const gapNano = ((timeZone2, zonedEpochNano2) => {
    const startOffsetNano = timeZone2.B(zonedEpochNano2 - bigNanoInUtcDay);
    return ((gapNano2) => (gapNano2 > nanoInUtcDay && throwRangeError("Out-of-bounds TimeZone gap"), gapNano2))(timeZone2.B(zonedEpochNano2 + bigNanoInUtcDay) - startOffsetNano);
  })(timeZone, zonedEpochNano);
  const shiftedIsoDateTime = epochNanoToIsoDateTime(zonedEpochNano + BigInt(gapNano * (2 === disambig ? -1 : 1)));
  return (possibleEpochNanos = timeZone.N(shiftedIsoDateTime))[2 === disambig ? 0 : possibleEpochNanos.length - 1];
}
function getStartOfDayInstantFor(timeZone, isoDateTime) {
  const possibleEpochNanos = timeZone.N(isoDateTime);
  if (possibleEpochNanos.length) {
    return possibleEpochNanos[0];
  }
  const zonedEpochNanoDayBefore = isoDateTimeToEpochNano(isoDateTime) - bigNanoInUtcDay;
  return timeZone.O(zonedEpochNanoDayBefore, 1);
}
function moveYearMonth(doSubtract, calendar, isoDateFields, durationSlots, options) {
  const overflow = refineOverflowOptions(options);
  durationSlots.sign && getMaxDurationUnit(durationSlots) < 8 && throwRangeError("Cannot use small units");
  const startOfMonthFields = checkIsoDateInBounds(moveToStartOfMonth(calendar, isoDateFields));
  return moveToStartOfMonth(calendar, dateAddWithOverflow(calendar, startOfMonthFields, doSubtract ? negateDurationFields(durationSlots) : durationSlots, overflow));
}
function moveEpochNano(epochNano, durationFields) {
  return checkEpochNanoInBounds(epochNano + (durationHasDateParts(fields = durationFields) && throwRangeError("Cannot use large units"), durationTimeToBigNano(fields)));
  var fields;
}
function moveZonedEpochSlots(slots, durationFields, options) {
  const { calendar, epochNanoseconds: epochNano, timeZone } = slots;
  const timeOnlyNano = durationTimeToBigNano(durationFields);
  let movedEpochNano = epochNano;
  if (durationHasDateParts(durationFields)) {
    const isoDateTime = zonedEpochSlotsToIso(slots);
    movedEpochNano = getSingleInstantFor(timeZone, combineDateAndTime(moveDate(calendar, isoDateTime, __spreadValues(__spreadValues({}, durationFields), durationTimeFieldDefaults), options), isoDateTime)) + timeOnlyNano;
  } else {
    movedEpochNano += timeOnlyNano, refineOverflowOptions(options);
  }
  return __spreadProps(__spreadValues({}, slots), {
    epochNanoseconds: checkEpochNanoInBounds(movedEpochNano)
  });
}
function moveDateTime(calendar, isoDateTimeFields, durationFields, options) {
  const [movedTimeFields, dayDelta] = moveTime(isoDateTimeFields, durationFields);
  return checkIsoDateTimeInBounds(combineDateAndTime(moveDate(calendar, isoDateTimeFields, __spreadProps(__spreadValues(__spreadValues({}, durationFields), durationTimeFieldDefaults), {
    days: durationFields.days + dayDelta
  }), options), movedTimeFields));
}
function moveDate(calendar, isoDateFields, durationFields, options) {
  if (durationFields.years || durationFields.months || durationFields.weeks) {
    return dateAddWithOverflow(calendar, isoDateFields, durationFields, refineOverflowOptions(options));
  }
  refineOverflowOptions(options);
  const days = durationFields.days + Number(durationTimeToBigNano(durationFields) / bigNanoInUtcDay);
  return days ? checkIsoDateInBounds(moveByDays(isoDateFields, days)) : isoDateFields;
}
function moveToStartOfMonth(calendar, isoDateFields) {
  return moveByDays(isoDateFields, 1 - computeCalendarDateFields(calendar, isoDateFields).day);
}
function moveTime(timeFields, durationFields) {
  const durationBigNano = durationTimeToBigNano(durationFields);
  const durDays = Number(durationBigNano / bigNanoInUtcDay);
  const durTimeNano = Number(durationBigNano % bigNanoInUtcDay);
  const [newTimeFields, overflowDays] = nanoToTimeAndDay(timeFieldsToNano(timeFields) + durTimeNano);
  return [newTimeFields, durDays + overflowDays];
}
function moveByDays(isoDate, days) {
  return days ? epochDaysToIsoDate(isoDateToEpochDays(isoDate) + days) : isoDate;
}
function dateAddWithOverflow(calendar, isoDateFields, durationFields, overflow) {
  let { years, months, weeks, days } = durationFields;
  let isoDate;
  if (days += Number(durationTimeToBigNano(durationFields) / bigNanoInUtcDay), years || months) {
    isoDate = addDateMonths(calendar, isoDateFields, years, months, overflow);
  } else {
    if (!weeks && !days) {
      return isoDateFields;
    }
    isoDate = isoDateFields;
  }
  return (weeks || days) && (isoDate = moveByDays(isoDate, 7 * weeks + days)), checkIsoDateInBounds(isoDate);
}
function addDateMonths(calendar, isoDateFields, years, months, overflow) {
  const dateParts = computeCalendarDateFields(calendar, isoDateFields);
  let { year, month, day } = dateParts;
  if (years) {
    const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
    year += years, month = computeYearMovedMonth(calendar, monthCodeNumber, isLeapMonth, calendar ? calendar.p(year) : void 0, overflow), month = clampEntity("month", month, 1, computeCalendarMonthsInYearForYear(calendar, year), overflow);
  }
  if (months) {
    const yearMonthParts = calendar ? calendar.K(year, month, months) : addIsoMonths(year, month, months);
    ({ year, month } = yearMonthParts);
  }
  return day = clampEntity("day", day, 1, computeCalendarDaysInMonthForYearMonth(calendar, year, month), overflow), computeCalendarIsoFieldsFromParts(calendar, year, month, day);
}
function computeYearMovedMonth(calendar, monthCodeNumber, isLeapMonth, targetLeapMonth, overflow) {
  if (isLeapMonth) {
    const leapMonthMeta = calendar ? calendar.l : void 0;
    return void 0 !== targetLeapMonth && (leapMonthMeta < 0 || targetLeapMonth === monthCodeNumber + 1) ? targetLeapMonth : (1 === overflow && throwRangeError(invalidLeapMonth), leapMonthMeta < 0 ? -leapMonthMeta : monthCodeNumber);
  }
  return monthCodeNumberToMonth(monthCodeNumber, 0, targetLeapMonth);
}
function getCommonCalendar(a, b) {
  return getCalendarSlotId(a) !== getCalendarSlotId(b) && throwRangeError("Mismatching Calendars"), a;
}
function getCommonTimeZone(a, b) {
  return a.m !== b.m && throwRangeError("Mismatching TimeZones"), a;
}
function getZonedTimeZoneId(slots) {
  return slots.timeZone.id;
}
function diffInstants(invert, instantSlots0, instantSlots1, options) {
  const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 3, 5);
  const durationFields = diffEpochNanos(instantSlots0.epochNanoseconds, instantSlots1.epochNanoseconds, largestUnit, smallestUnit, roundingInc, roundingMode);
  return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffZonedDateTimes(invert, calendar, slots0, slots1, options) {
  const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 5);
  const epochNano0 = slots0.epochNanoseconds;
  const epochNano1 = slots1.epochNanoseconds;
  let durationFields;
  if (compareBigInts(epochNano1, epochNano0)) {
    if (largestUnit < 6) {
      durationFields = diffEpochNanos(epochNano0, epochNano1, largestUnit, smallestUnit, roundingInc, roundingMode);
    } else {
      const timeZone = getCommonTimeZone(slots0.timeZone, slots1.timeZone);
      durationFields = diffZonedEpochsExact(timeZone, calendar, slots0, slots1, largestUnit), durationFields = roundRelativeDuration(durationFields, epochNano1, largestUnit, smallestUnit, roundingInc, roundingMode, createZonedRelativeOps(calendar, timeZone, slots0), 1);
    }
  } else {
    durationFields = durationFieldDefaults;
  }
  return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffPlainDateTimes(invert, calendar, plainDateTimeSlots0, plainDateTimeSlots1, options) {
  const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 6);
  const startEpochNano = isoDateTimeToEpochNano(plainDateTimeSlots0);
  const endEpochNano = isoDateTimeToEpochNano(plainDateTimeSlots1);
  const sign = compareBigInts(endEpochNano, startEpochNano);
  let durationFields;
  return sign ? largestUnit <= 6 ? durationFields = diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) : (durationFields = diffDateTimesBig(calendar, plainDateTimeSlots0, plainDateTimeSlots1, sign, largestUnit), durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, createDateTimeRelativeOps(calendar, plainDateTimeSlots0))) : durationFields = durationFieldDefaults, createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffPlainDates(invert, calendar, plainDateSlots0, plainDateSlots1, options) {
  const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 6, 9, 6);
  return diffDateLike(invert, calendar, plainDateSlots0, plainDateSlots1, largestUnit, smallestUnit, roundingInc, roundingMode);
}
function diffPlainYearMonth(invert, calendar, plainYearMonthSlots0, plainYearMonthSlots1, options) {
  const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 9, 9, 8);
  const firstOfMonth0 = moveToStartOfMonth(calendar, plainYearMonthSlots0);
  const firstOfMonth1 = moveToStartOfMonth(calendar, plainYearMonthSlots1);
  return compareIsoDate(firstOfMonth0, firstOfMonth1) ? diffDateLike(invert, calendar, checkIsoDateInBounds(firstOfMonth0), checkIsoDateInBounds(firstOfMonth1), largestUnit, smallestUnit, roundingInc, roundingMode, 8) : createDurationSlots(durationFieldDefaults);
}
function diffDateLike(invert, calendar, startIsoDate, endIsoDate, largestUnit, smallestUnit, roundingInc, roundingMode, smallestPrecision = 6) {
  const startEpochNano = isoDateToEpochNano(startIsoDate);
  const endEpochNano = isoDateToEpochNano(endIsoDate);
  let durationFields;
  return compareBigInts(endEpochNano, startEpochNano) ? 6 === largestUnit ? durationFields = diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) : (durationFields = diffCalendarDates(calendar, startIsoDate, endIsoDate, largestUnit), smallestUnit === smallestPrecision && 1 === roundingInc || (durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, createDateRelativeOps(calendar, startIsoDate)))) : durationFields = durationFieldDefaults, createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffPlainTimes(invert, plainTimeSlots0, plainTimeSlots1, options) {
  const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 5, 5);
  const timeDiffNano = roundNumberToInc(timeFieldsToNano(plainTimeSlots1) - timeFieldsToNano(plainTimeSlots0), computeNanoInc(smallestUnit, roundingInc), roundingMode);
  const durationFields = __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationTimeFields(timeDiffNano, largestUnit));
  return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffZonedEpochsExact(timeZone, calendar, slots0, slots1, largestUnit) {
  const sign = compareBigInts(slots1.epochNanoseconds, slots0.epochNanoseconds);
  if (!sign) {
    return durationFieldDefaults;
  }
  if (largestUnit < 6) {
    return __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationDayTimeFields(slots1.epochNanoseconds - slots0.epochNanoseconds, largestUnit));
  }
  if (!compareIsoDate(zonedEpochSlotsToIso(slots0), zonedEpochSlotsToIso(slots1))) {
    return __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationDayTimeFields(slots1.epochNanoseconds - slots0.epochNanoseconds, 5));
  }
  const [isoFields0, isoFields1, remainderNano] = prepareZonedEpochDiff(timeZone, slots0, slots1, sign);
  return __spreadValues(__spreadValues({}, 6 === largestUnit ? __spreadProps(__spreadValues({}, durationFieldDefaults), {
    days: diffDays(isoFields0, isoFields1)
  }) : diffCalendarDates(calendar, isoFields0, isoFields1, largestUnit)), nanoToDurationTimeFields(remainderNano));
}
function diffDateTimesExact(calendar, startIsoDateTime, endIsoDateTime, largestUnit) {
  const startEpochNano = isoDateTimeToEpochNano(startIsoDateTime);
  const endEpochNano = isoDateTimeToEpochNano(endIsoDateTime);
  const sign = compareBigInts(endEpochNano, startEpochNano);
  return sign ? largestUnit <= 6 ? __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationDayTimeFields(endEpochNano - startEpochNano, largestUnit)) : diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit) : durationFieldDefaults;
}
function diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit) {
  let diffEndDate = endIsoDateTime;
  let timeNano = timeFieldsToNano(endIsoDateTime) - timeFieldsToNano(startIsoDateTime);
  return Math.sign(timeNano) === -sign && (diffEndDate = moveByDays(endIsoDateTime, -sign), timeNano += nanoInUtcDay * sign), __spreadValues(__spreadValues({}, diffCalendarDates(calendar, startIsoDateTime, diffEndDate, largestUnit)), nanoToDurationTimeFields(timeNano));
}
function diffCalendarDates(calendar, startIsoDate, endIsoDate, largestUnit) {
  if (largestUnit <= 7) {
    const days = diffDays(startIsoDate, endIsoDate);
    return 7 === largestUnit ? __spreadProps(__spreadValues({}, durationFieldDefaults), {
      weeks: divTrunc(days, 7),
      days: modTrunc(days, 7)
    }) : __spreadProps(__spreadValues({}, durationFieldDefaults), {
      days
    });
  }
  const yearMonthDayStart = computeCalendarDateFields(calendar, startIsoDate);
  const yearMonthDayEnd = computeCalendarDateFields(calendar, endIsoDate);
  if (8 === largestUnit) {
    const { year: year02, month: month02, day: day02 } = yearMonthDayStart;
    const { year: year12, month: month12, day: day12 } = yearMonthDayEnd;
    const sign = Math.sign(compareNumbers(year12, year02) || compareNumbers(month12, month02) || diffDays(startIsoDate, endIsoDate));
    let months = 0;
    let days = 0;
    if (sign) {
      months = calendar ? calendar._(year02, month02, year12, month12) : diffIsoMonthSlots(year02, month02, year12, month12);
      let anchorIsoDate = addDateMonths(calendar, startIsoDate, 0, months, 0);
      sign * compareNumbers(day02, day12) > 0 && (months -= sign, anchorIsoDate = addDateMonths(calendar, startIsoDate, 0, months, 0)), days = diffDays(anchorIsoDate, endIsoDate);
    }
    return __spreadProps(__spreadValues({}, durationFieldDefaults), {
      months,
      days
    });
  }
  const { year: year0, month: month0, day: day0 } = yearMonthDayStart;
  let { year: year1, month: month1, day: day1 } = yearMonthDayEnd;
  let yearDiff = year1 - year0;
  let monthDiff = month1 - month0;
  let dayDiff = day1 - day0;
  if (yearDiff || monthDiff) {
    const sign = Math.sign(yearDiff || monthDiff);
    let daysInMonth1 = computeCalendarDaysInMonthForYearMonth(calendar, year1, month1);
    let dayCorrect = 0;
    if (Math.sign(day1 - day0) === -sign) {
      const origDaysInMonth1 = daysInMonth1;
      const yearMonthParts = calendar ? calendar.K(year1, month1, -sign) : addIsoMonths(year1, month1, -sign);
      ({ year: year1, month: month1 } = yearMonthParts), yearDiff = year1 - year0, monthDiff = month1 - month0, daysInMonth1 = computeCalendarDaysInMonthForYearMonth(calendar, year1, month1), dayCorrect = sign < 0 ? -origDaysInMonth1 : daysInMonth1;
    }
    if (dayDiff = day1 - Math.min(day0, daysInMonth1) + dayCorrect, yearDiff) {
      const [monthCodeNumber0, isLeapMonth0] = computeCalendarMonthCodeParts(calendar, year0, month0);
      const [monthCodeNumber1, isLeapMonth1] = computeCalendarMonthCodeParts(calendar, year1, month1);
      const leapMonthMeta = calendar ? calendar.l : void 0;
      if (monthDiff = void 0 !== leapMonthMeta && isLeapMonth0 && !isLeapMonth1 && (leapMonthMeta < 0 ? sign > 0 && monthCodeNumber1 === -leapMonthMeta : sign < 0 && monthCodeNumber1 === monthCodeNumber0) ? 0 : monthCodeNumber1 - monthCodeNumber0 || Number(isLeapMonth1) - Number(isLeapMonth0), Math.sign(monthDiff) === -sign) {
        const monthCorrect = sign < 0 && -computeCalendarMonthsInYearForYear(calendar, year1);
        year1 -= sign, yearDiff = year1 - year0, monthDiff = month1 - computeYearMovedMonth(calendar, monthCodeNumber0, isLeapMonth0, calendar ? calendar.p(year1) : void 0, 0) + (monthCorrect || computeCalendarMonthsInYearForYear(calendar, year1));
      } else if (calendar) {
        const month0Projected = computeYearMovedMonth(calendar, monthCodeNumber0, isLeapMonth0, calendar.p(year1), 0);
        monthDiff = calendar._(year1, month0Projected, year1, month1);
      }
    }
  }
  return __spreadProps(__spreadValues({}, durationFieldDefaults), {
    years: yearDiff,
    months: monthDiff,
    days: dayDiff
  });
}
function compareIsoDate(isoDate0, isoDate1) {
  return compareNumbers(isoDate0.year, isoDate1.year) || compareNumbers(isoDate0.month, isoDate1.month) || compareNumbers(isoDate0.day, isoDate1.day);
}
function prepareZonedEpochDiff(timeZone, slots0, slots1, sign) {
  const startIsoDate = zonedEpochSlotsToIso(slots0);
  const endIsoDate = zonedEpochSlotsToIso(slots1);
  const endEpochNano = slots1.epochNanoseconds;
  let dayCorrection = 0;
  const timeDiffNano = timeFieldsToNano(endIsoDate) - timeFieldsToNano(startIsoDate);
  Math.sign(timeDiffNano) === -sign && dayCorrection++;
  const maxDayCorrection = dayCorrection + (sign > 0 ? 1 : 0);
  for (; dayCorrection <= maxDayCorrection; dayCorrection++) {
    const midIsoDate = moveByDays(endIsoDate, dayCorrection * -sign);
    const midEpochNano = getSingleInstantFor(timeZone, combineDateAndTime(midIsoDate, startIsoDate));
    if (compareBigInts(endEpochNano, midEpochNano) !== -sign) {
      return [startIsoDate, midIsoDate, Number(endEpochNano - midEpochNano)];
    }
  }
}
function diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
  return __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationDayTimeFields(roundBigNanoToInc(endEpochNano - startEpochNano, computeBigNanoInc(smallestUnit, roundingInc), roundingMode), largestUnit));
}
function diffDays(startIsoDate, endIsoDate) {
  return isoDateToEpochDays(endIsoDate) - isoDateToEpochDays(startIsoDate);
}
function createDateRelativeOps(calendar, origin) {
  return {
    origin,
    ie: isoDateToEpochNano(origin),
    calendar,
    he: isoDateToEpochNano
  };
}
function createDateTimeRelativeOps(calendar, origin) {
  return {
    origin,
    ie: isoDateTimeToEpochNano(origin),
    calendar,
    he: (movedIsoDate) => isoDateTimeToEpochNano(combineDateAndTime(movedIsoDate, origin))
  };
}
function createZonedRelativeOps(calendar, timeZone, slots) {
  const origin = zonedEpochSlotsToIso(slots);
  return {
    origin,
    ie: slots.epochNanoseconds,
    calendar,
    he: (movedIsoDate) => getSingleInstantFor(timeZone, combineDateAndTime(movedIsoDate, origin))
  };
}
function moveRelativeToEpochNano(relativeOps, dateDuration) {
  return durationHasDateParts(dateDuration) ? relativeOps.he(moveDate(relativeOps.calendar, relativeOps.origin, dateDuration)) : relativeOps.ie;
}
function spanRelativeDuration(relativeToSlots, durationFields, largestUnit) {
  const { calendar } = relativeToSlots;
  if (isZonedEpochSlots(relativeToSlots)) {
    const { timeZone } = relativeToSlots;
    const endSlots = moveZonedEpochSlots(relativeToSlots, durationFields);
    return [diffZonedEpochsExact(timeZone, calendar, relativeToSlots, endSlots, largestUnit), endSlots.epochNanoseconds, createZonedRelativeOps(calendar, timeZone, relativeToSlots)];
  }
  const origin = checkIsoDateTimeInBounds(combineDateAndTime(relativeToSlots, timeFieldDefaults));
  const end = moveDateTime(calendar, origin, durationFields);
  return [diffDateTimesExact(calendar, origin, end, largestUnit), isoDateTimeToEpochNano(end), createDateRelativeOps(calendar, relativeToSlots)];
}
function moveRelativeEndpointToEpochNano(relativeToSlots, durationFields) {
  return isZonedEpochSlots(relativeToSlots) ? moveZonedEpochSlots(relativeToSlots, durationFields).epochNanoseconds : isoDateTimeToEpochNano(moveDateTime(relativeToSlots.calendar, combineDateAndTime(relativeToSlots, timeFieldDefaults), durationFields));
}
function isZonedEpochSlots(slots) {
  return "timeZone" in slots;
}
function isUniformUnit(unit, isZoned) {
  return unit <= 6 - (isZoned ? 1 : 0);
}
function nanoToGivenFields(nano, largestUnit, fieldNames) {
  const fields = {};
  for (let unit = largestUnit; unit >= 0; unit--) {
    const divisor = unitNanoMap[unit];
    fields[fieldNames[unit]] = divTrunc(nano, divisor), nano = modTrunc(nano, divisor);
  }
  return fields;
}
var maxDurationSeconds = 2 ** 53;
function addDurations(refineRelativeTo, doSubtract, slots, otherSlots, options) {
  const relativeToSlots = refineRelativeTo(normalizeOptions(options).relativeTo);
  const maxUnit = Math.max(getMaxDurationUnit(slots), getMaxDurationUnit(otherSlots));
  return isUniformUnit(maxUnit, relativeToSlots && isZonedEpochSlots(relativeToSlots)) ? addDayTimeDurationsChecked(doSubtract, slots, otherSlots, maxUnit) : (relativeToSlots || throwRangeError("Missing relativeTo"), doSubtract && (otherSlots = negateDurationFields(otherSlots)), createDurationSlots(((relativeToSlots2, durationFields0, durationFields1, largestUnit) => {
    const { calendar } = relativeToSlots2;
    if (isZonedEpochSlots(relativeToSlots2)) {
      const { timeZone } = relativeToSlots2;
      const midSlots = moveZonedEpochSlots(relativeToSlots2, durationFields0);
      return diffZonedEpochsExact(timeZone, calendar, relativeToSlots2, moveZonedEpochSlots(midSlots, durationFields1), largestUnit);
    }
    const origin = combineDateAndTime(relativeToSlots2, timeFieldDefaults);
    const mid = moveDateTime(calendar, origin, durationFields0);
    return diffDateTimesExact(calendar, origin, moveDateTime(calendar, mid, durationFields1), largestUnit);
  })(relativeToSlots, slots, otherSlots, maxUnit)));
}
function addDayTimeDurationsChecked(doSubtract, slots, otherSlots, maxUnit) {
  return createDurationSlots(validateDurationFields(((a, b, largestUnit, doSubtract2) => {
    const combined = durationDayTimeToBigNano(a) + durationDayTimeToBigNano(b) * BigInt(doSubtract2 ? -1 : 1);
    return Number.isFinite(Number(combined / bigNanoInUtcDay)) || throwRangeError(outOfBoundsDate), __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationDayTimeFields(combined, largestUnit));
  })(slots, otherSlots, maxUnit, doSubtract)));
}
function roundDuration(refineRelativeTo, slots, options) {
  const durationLargestUnit = getMaxDurationUnit(slots);
  const [largestUnit, smallestUnit, roundingInc, roundingMode, relativeToSlots] = ((options2, defaultLargestUnit, refineRelativeTo2) => {
    options2 = normalizeOptionsOrString(options2, smallestUnitStr);
    let largestUnit2 = coerceLargestUnit(options2);
    const relativeToInternals = refineRelativeTo2(options2.relativeTo);
    let roundingInc2 = coerceRoundingIncInteger(options2);
    const roundingMode2 = coerceRoundingMode(options2, 7);
    let smallestUnit2 = coerceSmallestUnit(options2);
    return void 0 === largestUnit2 && void 0 === smallestUnit2 && throwRangeError("Required smallestUnit or largestUnit"), null == smallestUnit2 && (smallestUnit2 = 0), null == largestUnit2 && (largestUnit2 = Math.max(smallestUnit2, defaultLargestUnit)), checkLargestSmallestUnit(largestUnit2, smallestUnit2), roundingInc2 = validateRoundingInc(roundingInc2, smallestUnit2, 1), roundingInc2 > 1 && smallestUnit2 > 5 && largestUnit2 !== smallestUnit2 && throwRangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [largestUnit2, smallestUnit2, roundingInc2, roundingMode2, relativeToInternals];
  })(options, durationLargestUnit, refineRelativeTo);
  if (!relativeToSlots && Math.max(durationLargestUnit, largestUnit) <= 6) {
    return createDurationSlots(validateDurationFields(((durationFields, largestUnit2, smallestUnit2, roundingInc2, roundingMode2) => {
      const roundedBigNano = roundBigNanoToInc(durationDayTimeToBigNano(durationFields), computeBigNanoInc(smallestUnit2, roundingInc2), roundingMode2);
      return __spreadValues(__spreadValues({}, durationFieldDefaults), nanoToDurationDayTimeFields(roundedBigNano, largestUnit2));
    })(slots, largestUnit, smallestUnit, roundingInc, roundingMode)));
  }
  const isZoned = relativeToSlots && isZonedEpochSlots(relativeToSlots);
  const needsZonedDayLength = isZoned && largestUnit >= 6 && smallestUnit < 6;
  if (!slots.sign && !needsZonedDayLength) {
    return slots;
  }
  relativeToSlots || throwRangeError("Missing relativeTo");
  const [balancedDuration, endEpochNano, relativeOps] = spanRelativeDuration(relativeToSlots, slots, largestUnit);
  return createDurationSlots(roundRelativeDuration(balancedDuration, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps, isZoned));
}
function absDuration(slots) {
  return -1 === slots.sign ? negateDuration(slots) : slots;
}
function negateDuration(slots) {
  return createDurationSlots(negateDurationFields(slots));
}
function negateDurationFields(fields) {
  const res = {};
  for (const fieldName of durationFieldNamesAsc) {
    res[fieldName] = -1 * fields[fieldName] || 0;
  }
  return res;
}
function computeDurationSign(fields, fieldNames = durationFieldNamesAsc) {
  let sign = 0;
  for (const fieldName of fieldNames) {
    const fieldSign = Math.sign(fields[fieldName]);
    fieldSign && (sign && sign !== fieldSign && throwRangeError("Cannot mix duration signs"), sign = fieldSign);
  }
  return sign;
}
function validateDurationFields(fields) {
  for (const calendarUnit of durationCalendarFieldNamesAsc) {
    clampEntity(calendarUnit, fields[calendarUnit], -4294967295, 4294967295, 1);
  }
  const bigNano = durationDayTimeToBigNano(fields);
  return validateDurationTimeUnit(Number(bigNano / bigNanoInSec)), fields;
}
function validateDurationTimeUnit(n) {
  Number.isSafeInteger(n) || throwRangeError("Out-of-bounds duration");
}
function durationDayTimeToBigNano(fields) {
  return BigInt(fields.days) * bigNanoInUtcDay + durationTimeToBigNano(fields);
}
function durationTimeToBigNano(fields) {
  return BigInt(fields.hours) * bigNanoInHour + BigInt(fields.minutes) * bigNanoInMinute + durationSubMinuteToBigNano(fields);
}
function durationSubMinuteToBigNano(fields) {
  return BigInt(fields.seconds) * bigNanoInSec + BigInt(fields.milliseconds) * bigNanoInMilli + BigInt(fields.microseconds) * bigNanoInMicro + BigInt(fields.nanoseconds);
}
function nanoToDurationDayTimeFields(bigNano, largestUnit = 6) {
  const days = Number(bigNano / bigNanoInUtcDay);
  const timeNano = Number(bigNano % bigNanoInUtcDay);
  const unitNano = unitNanoMap[largestUnit];
  const largestUnitVal = largestUnit <= 3 ? Number(bigNano / BigInt(unitNano)) : days * (nanoInUtcDay / unitNano) + divTrunc(timeNano, unitNano);
  Number.isFinite(largestUnitVal) || throwRangeError(outOfBoundsDate), largestUnit <= 3 && Math.abs(largestUnitVal) / (nanoInSec2 / unitNanoMap[largestUnit]) >= maxDurationSeconds && throwRangeError(outOfBoundsDate);
  const dayTimeFields = nanoToGivenFields(timeNano, largestUnit, durationFieldNamesAsc);
  return dayTimeFields[durationFieldNamesAsc[largestUnit]] = largestUnitVal, dayTimeFields;
}
function nanoToDurationTimeFields(nano, largestUnit = 5) {
  return nanoToGivenFields(nano, largestUnit, durationFieldNamesAsc);
}
function durationHasDateParts(fields) {
  return Boolean(computeDurationSign(fields, durationDateFieldNamesAsc));
}
function getMaxDurationUnit(fields) {
  let unit = 9;
  for (; unit > 0 && !fields[durationFieldNamesAsc[unit]]; unit--) {
  }
  return unit;
}
function compareZonedEpochSlots(zonedEpochSlots0, zonedEpochSlots1) {
  return compareBigInts(zonedEpochSlots0.epochNanoseconds, zonedEpochSlots1.epochNanoseconds);
}
function compareDurations(refineRelativeTo, durationSlots0, durationSlots1, options) {
  const relativeToSlots = refineRelativeTo(normalizeOptions(options).relativeTo);
  const maxUnit = Math.max(getMaxDurationUnit(durationSlots0), getMaxDurationUnit(durationSlots1));
  return allPropsEqual(durationFieldNamesAsc, durationSlots0, durationSlots1) ? 0 : isUniformUnit(maxUnit, relativeToSlots && isZonedEpochSlots(relativeToSlots)) ? compareBigInts(durationDayTimeToBigNano(durationSlots0), durationDayTimeToBigNano(durationSlots1)) : (relativeToSlots || throwRangeError("Missing relativeTo"), compareBigInts(moveRelativeEndpointToEpochNano(relativeToSlots, durationSlots0), moveRelativeEndpointToEpochNano(relativeToSlots, durationSlots1)));
}
function compareIsoDateTimeFields(isoDateTime0, isoDateTime1) {
  return compareIsoDateFields(isoDateTime0, isoDateTime1) || compareTimeFields(isoDateTime0, isoDateTime1);
}
function compareIsoDateFields(isoFields0, isoFields1) {
  return compareNumbers(isoDateToEpochDays(isoFields0), isoDateToEpochDays(isoFields1));
}
function compareTimeFields(isoFields0, isoFields1) {
  return compareNumbers(timeFieldsToNano(isoFields0), timeFieldsToNano(isoFields1));
}
function instantsEqual(instantSlots0, instantSlots1) {
  return !compareZonedEpochSlots(instantSlots0, instantSlots1);
}
function zonedDateTimesEqual(zonedDateTimeSlots0, zonedDateTimeSlots1) {
  return !compareZonedEpochSlots(zonedDateTimeSlots0, zonedDateTimeSlots1) && zonedDateTimeSlots0.timeZone.m === zonedDateTimeSlots1.timeZone.m && zonedDateTimeSlots0.calendar === zonedDateTimeSlots1.calendar;
}
function plainDateTimesEqual(plainDateTimeSlots0, plainDateTimeSlots1) {
  return !compareIsoDateTimeFields(plainDateTimeSlots0, plainDateTimeSlots1) && plainDateTimeSlots0.calendar === plainDateTimeSlots1.calendar;
}
function plainDatesEqual(plainDateSlots0, plainDateSlots1) {
  return !compareIsoDateFields(plainDateSlots0, plainDateSlots1) && plainDateSlots0.calendar === plainDateSlots1.calendar;
}
function plainYearMonthsEqual(plainYearMonthSlots0, plainYearMonthSlots1) {
  return !compareIsoDateFields(plainYearMonthSlots0, plainYearMonthSlots1) && plainYearMonthSlots0.calendar === plainYearMonthSlots1.calendar;
}
function plainMonthDaysEqual(plainMonthDaySlots0, plainMonthDaySlots1) {
  return !compareIsoDateFields(plainMonthDaySlots0, plainMonthDaySlots1) && plainMonthDaySlots0.calendar === plainMonthDaySlots1.calendar;
}
function plainTimesEqual(plainTimeSlots0, plainTimeSlots1) {
  return !compareTimeFields(plainTimeSlots0, plainTimeSlots1);
}
function getCalendarEraOrigins(calendar) {
  return 0 === calendar ? gregoryEraOrigins : calendar ? calendar.k : void 0;
}
function getCalendarFieldNames(calendar, fieldNames, fieldNamesWithEra = fieldNames) {
  return getCalendarEraOrigins(calendar) ? fieldNamesWithEra : fieldNames;
}
function resolveCalendarYear(calendar, fields) {
  const exoticCalendar = calendar || void 0;
  const eraOrigins = getCalendarEraOrigins(calendar);
  let { era, eraYear, year } = fields;
  if (void 0 !== year && (year = toIntegerWithTrunc(year, "year")), void 0 !== eraYear && (eraYear = toIntegerWithTrunc(eraYear, "eraYear")), void 0 !== era || void 0 !== eraYear) {
    void 0 !== era && void 0 !== eraYear || throwTypeError("Mismatching era/eraYear"), eraOrigins || throwRangeError("Forbidden era/eraYear");
    const normalizedEra = normalizeEraName(era);
    const eraOrigin = eraOrigins[normalizedEra];
    void 0 === eraOrigin && throwRangeError(((era2) => `Invalid era: ${era2}`)(era));
    const yearByEra = exoticCalendar?.$ ? exoticCalendar.$(eraYear, normalizedEra, eraOrigin) : eraYearToYear(eraYear, eraOrigin);
    void 0 !== year && year !== yearByEra && throwRangeError("Mismatching year/eraYear"), year = yearByEra;
  } else {
    void 0 === year && throwTypeError(missingYear(eraOrigins));
  }
  return year;
}
function resolveCalendarMonth(calendar, fields, year, overflow, monthCodeParts) {
  let { month, monthCode } = fields;
  if (void 0 !== monthCode) {
    const monthByCode = ((calendar2, monthCode2, year2, overflow2, monthCodeParts2 = parseMonthCode(monthCode2)) => {
      const leapMonth = calendar2 ? calendar2.p(year2) : void 0;
      const [monthCodeNumber, wantsLeapMonth] = monthCodeParts2;
      let month2 = monthCodeNumberToMonth(monthCodeNumber, wantsLeapMonth, leapMonth);
      if (wantsLeapMonth) {
        const leapMonthMeta = calendar2 ? calendar2.l : void 0;
        void 0 === leapMonthMeta && throwRangeError(invalidLeapMonth), leapMonthMeta > 0 ? (month2 > leapMonthMeta && throwRangeError(invalidLeapMonth), leapMonth !== month2 && (1 === overflow2 && throwRangeError(invalidLeapMonth), month2 = monthCodeNumberToMonth(monthCodeNumber, 0, leapMonth))) : (month2 !== -leapMonthMeta && throwRangeError(invalidLeapMonth), void 0 === leapMonth && 1 === overflow2 && throwRangeError(invalidLeapMonth));
      }
      return month2;
    })(calendar, monthCode, year, overflow, monthCodeParts);
    void 0 !== month && month !== monthByCode && throwRangeError("Mismatching month/monthCode"), month = monthByCode, overflow = 1;
  } else {
    void 0 === month && throwTypeError("Missing month/monthCode");
  }
  return clampEntity("month", month, 1, computeCalendarMonthsInYearForYear(calendar, year), overflow);
}
function resolveCalendarDay(calendar, fields, month, year, overflow) {
  return clampProp(fields, "day", 1, computeCalendarDaysInMonthForYearMonth(calendar, year, month), overflow);
}
function eraYearToYear(eraYear, eraOrigin) {
  return (eraOrigin + eraYear) * (Math.sign(eraOrigin) || 1) || 0;
}
function resolveTimeFields(fields, overflow) {
  return constrainTimeFields(pluckProps(timeFieldNamesAsc, __spreadValues(__spreadValues({}, timeFieldDefaults), fields)), overflow);
}
var offsetRegExp = /* @__PURE__ */ createRegExp("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function parseOffsetNano(s) {
  const offsetNano = parseOffsetNanoMaybe(s);
  return void 0 === offsetNano && throwRangeError(failedParse(s)), offsetNano;
}
function parseOffsetNanoMaybe(s, onlyHourMinute) {
  const parts = offsetRegExp.exec(s);
  if (parts && ((s2) => ((s3) => {
    "T" !== s3[0] && "t" !== s3[0] || (s3 = s3.slice(1));
    const fractionIndex = s3.search(/[.,]/);
    const main = fractionIndex < 0 ? s3 : s3.slice(0, fractionIndex);
    const parts2 = main.split(":");
    return 1 === parts2.length ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(main) : (2 === parts2.length || 3 === parts2.length) && parts2.every((part) => 2 === part.length && /^\d{2}$/i.test(part));
  })(s2.slice(1)))(parts[0])) {
    return ((parts2, onlyHourMinute2) => {
      const firstSubMinutePart = parts2[4] || parts2[5];
      onlyHourMinute2 && firstSubMinutePart && throwRangeError(invalidSubstring(firstSubMinutePart));
      const offsetNanoPos = parseInt0(parts2[2]) * nanoInHour2 + parseInt0(parts2[3]) * nanoInMinute2 + parseInt0(parts2[4]) * nanoInSec2 + parseSubsecNano(parts2[5] || "");
      return offsetNano = offsetNanoPos * parseSign(parts2[1]), Math.abs(offsetNano) >= nanoInUtcDay && throwRangeError("Out-of-bounds offset"), offsetNano;
      var offsetNano;
    })(parts, onlyHourMinute);
  }
}
var dateFieldRefiners = {
  era: toStringViaPrimitive,
  month: toPositiveIntegerWithTruncation,
  monthCode(monthCode, entityName) {
    if ("string" == typeof monthCode) {
      return monthCode;
    }
    if (monthCode && "object" == typeof monthCode) {
      const monthCodeToString = monthCode.toString;
      if ("function" == typeof monthCodeToString) {
        return requireString(monthCodeToString.call(monthCode), entityName);
      }
    }
    return requireString(monthCode, entityName);
  },
  day: toPositiveIntegerWithTruncation
};
var timeFieldRefiners = /* @__PURE__ */ zipPropsConst(timeFieldNamesAsc, toIntegerWithTrunc);
var durationFieldRefiners = /* @__PURE__ */ zipPropsConst(durationFieldNamesAsc, toStrictInteger);
var dateTimeFieldRefiners = /* @__PURE__ */ Object.assign({}, dateFieldRefiners, timeFieldRefiners);
var zonedDateTimeFieldRefiners = __spreadValues({
  offset(offsetString) {
    return parseOffsetNano(toStringViaPrimitive(offsetString));
  }
}, dateTimeFieldRefiners);
function readAndRefineBagFields(bag, validFieldNames, fieldRefiners, requiredFieldNames, disallowEmpty = !requiredFieldNames) {
  const res = {};
  let anyMatching = 0;
  for (const fieldName of validFieldNames) {
    let fieldVal = bag[fieldName];
    if (void 0 !== fieldVal) {
      anyMatching = 1;
      const refiner = fieldRefiners[fieldName];
      refiner && (fieldVal = refiner(fieldVal, fieldName)), res[fieldName] = fieldVal;
    } else {
      requiredFieldNames && requiredFieldNames.includes(fieldName) && throwTypeError(missingField(fieldName));
    }
  }
  return disallowEmpty && !anyMatching && throwTypeError(noValidFields(validFieldNames)), res;
}
function createPlainDateTimeFromRefinedFields(isoDate, time = timeFieldDefaults, calendar) {
  const isoDateTime = combineDateAndTime(isoDate, time);
  return checkIsoDateTimeInBounds(isoDateTime), createDateTimeSlots(isoDateTime, calendar);
}
function createPlainDateFromFields(calendar, fields, options) {
  return createPlainDateFromPreparedFields(calendar, fields, prepareDateFields(calendar, fields), refineOverflowOptions(options));
}
function createPlainDateFromFieldsWithOptionsRefiner(calendar, fields, refineOptions) {
  const prepared = prepareDateFields(calendar, fields);
  const refinedOptions = refineOptions();
  return [createPlainDateFromPreparedFields(calendar, fields, prepared, refinedOptions[0]), ...refinedOptions];
}
function createPlainDateFromPreparedFields(calendar, fields, prepared, overflow) {
  const year = prepared[1];
  const month = resolveCalendarMonth(calendar, fields, year, overflow, prepared[0]);
  return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, year, month, resolveCalendarDay(calendar, fields, month, year, overflow))), calendar);
}
function parseMonthCodeField(fields) {
  if (void 0 !== fields.monthCode) {
    return parseMonthCode(fields.monthCode);
  }
}
function prepareDateFields(calendar, fields) {
  const eraOrigins = getCalendarEraOrigins(calendar);
  return void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins)), void 0 === fields.monthCode && void 0 === fields.month && throwTypeError("Missing month/monthCode"), void 0 === fields.day && throwTypeError(missingField("day")), [parseMonthCodeField(fields), resolveCalendarYear(calendar, fields)];
}
function createPlainYearMonthFromFields(calendar, fields, options) {
  const eraOrigins = getCalendarEraOrigins(calendar);
  void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins)), void 0 === fields.monthCode && void 0 === fields.month && throwTypeError("Missing month/monthCode");
  const monthCodeParts = parseMonthCodeField(fields);
  const year = resolveCalendarYear(calendar, fields);
  return createDateSlots(checkIsoYearMonthInBounds(computeCalendarIsoFieldsFromParts(calendar, year, resolveCalendarMonth(calendar, fields, year, refineOverflowOptions(options), monthCodeParts), 1)), calendar);
}
function createPlainMonthDayFromFields(calendar, fields, options) {
  const isIso = calendar === isoCalendarImpl;
  const eraOrigins = getCalendarEraOrigins(calendar);
  void 0 === fields.day && throwTypeError(missingField("day")), isIso || void 0 === fields.month || void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins));
  const monthCodeParts = parseMonthCodeField(fields);
  let yearMaybe = void 0 !== fields.eraYear || void 0 !== fields.year ? resolveCalendarYear(calendar, fields) : void 0;
  const overflow = refineOverflowOptions(options);
  let day;
  let monthCodeNumber;
  let isLeapMonth;
  if (void 0 === yearMaybe && isIso && (yearMaybe = 1972), void 0 !== yearMaybe) {
    isIso || checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, yearMaybe, 1, 1));
    const month = resolveCalendarMonth(calendar, fields, yearMaybe, overflow, monthCodeParts);
    day = resolveCalendarDay(calendar, fields, month, yearMaybe, overflow), [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, yearMaybe, month);
  } else {
    void 0 === fields.monthCode && throwTypeError("Missing month/monthCode"), [monthCodeNumber, isLeapMonth] = monthCodeParts;
    const referenceYear = calendar ? calendar.ne : 1972;
    if (void 0 !== referenceYear) {
      day = resolveCalendarDay(calendar, fields, resolveCalendarMonth(calendar, fields, referenceYear, overflow, monthCodeParts), referenceYear, overflow);
    } else {
      const constrainedDay = 0 === overflow && calendar ? calendar.fe?.(monthCodeNumber, isLeapMonth, fields.day) : void 0;
      day = void 0 !== constrainedDay ? constrainedDay : fields.day;
    }
  }
  isLeapMonth && ((calendar && calendar.U?.[monthCodeNumber]) ?? 1 / 0) < fields.day && (1 === overflow && throwRangeError(invalidLeapMonth), isLeapMonth = 0, day = constrainToRange2(fields.day, 1, (calendar && calendar.R) ?? 1 / 0));
  let res = calendar ? calendar.u(monthCodeNumber, Boolean(isLeapMonth), day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, Boolean(isLeapMonth));
  for (; !res && 0 === overflow && day > 1; ) {
    day--, res = calendar ? calendar.u(monthCodeNumber, Boolean(isLeapMonth), day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, Boolean(isLeapMonth));
  }
  res || throwRangeError("Cannot guess year");
  const { year: finalYear, month: finalMonth } = res;
  return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, finalYear, finalMonth, day)), calendar);
}
var RawDateTimeFormat = Intl.DateTimeFormat;
function formatEpochMilliToPartsRecord(intlFormat, epochMilli) {
  epochMilli < -864e13 && throwRangeError(outOfBoundsDate);
  const parts = intlFormat.formatToParts(epochMilli);
  const hash = {};
  for (const part of parts) {
    hash[part.type] = part.value;
  }
  return hash;
}
var timeZonePeriodDaysByName = {
  "El_Aaiun": 17,
  "Tucuman": 12,
  "Tirane": 11,
  "Riga": 10,
  "Simferopol": 9,
  "Vienna": 9,
  "Tunis": 8,
  "Boa_Vista": 6,
  "Fortaleza": 6,
  "Maceio": 6,
  "Noronha": 6,
  "Recife": 6,
  "Gaza": 6,
  "Hebron": 6,
  "DeNoronha": 6
};
var minPossibleTransitionSec = -388152e4;
function refineTimeDisplayTuple(options, maxSmallestUnit = 4) {
  const subsecDigits = coerceFractionalSecondDigits(options);
  const roundingMode = coerceRoundingMode(options, 4);
  const smallestUnit = coerceSmallestUnit(options);
  return [roundingMode, ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, maxSmallestUnit), subsecDigits)];
}
function refineDateDisplayOptions(options) {
  return coerceCalendarDisplay(normalizeOptions(options));
}
function refineTimeDisplayOptions(options, maxSmallestUnit) {
  return refineTimeDisplayTuple(normalizeOptions(options), maxSmallestUnit);
}
function resolveSmallestUnitAndSubsecDigits(smallestUnit, subsecDigits) {
  return null != smallestUnit ? [unitNanoMap[smallestUnit], smallestUnit < 4 ? 9 - 3 * smallestUnit : -1] : [void 0 === subsecDigits ? 1 : 10 ** (9 - subsecDigits), subsecDigits];
}
function formatInstantIso(refineTimeZoneString, instantSlots, options) {
  const [timeZoneArg, roundingMode, nanoInc, subsecDigits] = ((options2) => {
    const subsecDigits2 = coerceFractionalSecondDigits(options2 = normalizeOptions(options2));
    const roundingMode2 = coerceRoundingMode(options2, 4);
    const smallestUnit = coerceSmallestUnit(options2);
    return [options2.timeZone, roundingMode2, ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, 4), subsecDigits2)];
  })(options);
  const providedTimeZone = void 0 !== timeZoneArg;
  return ((providedTimeZone2, timeZone, epochNano, roundingMode2, nanoInc2, subsecDigits2) => {
    epochNano = roundBigNanoToDayOriginInc(epochNano, BigInt(nanoInc2), roundingMode2);
    const offsetNano = timeZone.B(epochNano);
    return formatIsoDateTimeFields(epochNanoToIsoDateTime(epochNano + BigInt(offsetNano)), subsecDigits2) + (providedTimeZone2 ? formatOffsetNano(roundToMinute(offsetNano)) : "Z");
  })(providedTimeZone, queryTimeZone(providedTimeZone ? refineTimeZoneString(timeZoneArg) : "UTC"), instantSlots.epochNanoseconds, roundingMode, nanoInc, subsecDigits);
}
function formatZonedDateTimeIso(zonedDateTimeSlots0, options) {
  const displayOptions = ((options2) => {
    options2 = normalizeOptions(options2);
    const calendarDisplay = coerceCalendarDisplay(options2);
    const subsecDigits = coerceFractionalSecondDigits(options2);
    const offsetDisplay = coerceOffsetDisplay(options2);
    const roundingMode = coerceRoundingMode(options2, 4);
    const smallestUnit = coerceSmallestUnit(options2);
    return [calendarDisplay, coerceTimeZoneDisplay(options2), offsetDisplay, roundingMode, ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, 4), subsecDigits)];
  })(options);
  return ((calendar, timeZoneId, timeZone, epochNano, calendarDisplay, timeZoneDisplay, offsetDisplay, roundingMode, nanoInc, subsecDigits) => {
    epochNano = roundBigNanoToDayOriginInc(epochNano, BigInt(nanoInc), roundingMode);
    const offsetNano = timeZone.B(epochNano);
    return formatIsoDateTimeFields(epochNanoToIsoDateTime(epochNano + BigInt(offsetNano)), subsecDigits) + formatOffsetNano(roundToMinute(offsetNano), offsetDisplay) + formatTimeZone(timeZoneId, timeZoneDisplay) + formatCalendar(calendar, calendarDisplay);
  })(zonedDateTimeSlots0.calendar, zonedDateTimeSlots0.timeZone.id, zonedDateTimeSlots0.timeZone, zonedDateTimeSlots0.epochNanoseconds, ...displayOptions);
}
function formatPlainDateTimeIso(plainDateTimeSlots0, options) {
  const displayOptions = ((options2) => (options2 = normalizeOptions(options2), [coerceCalendarDisplay(options2), ...refineTimeDisplayTuple(options2)]))(options);
  return ((calendar, isoDateTime, calendarDisplay, roundingMode, nanoInc, subsecDigits) => formatIsoDateTimeFields(roundDateTimeToNano(isoDateTime, nanoInc, roundingMode), subsecDigits) + formatCalendar(calendar, calendarDisplay))(plainDateTimeSlots0.calendar, plainDateTimeSlots0, ...displayOptions);
}
function formatPlainDateIso(plainDateSlots, options) {
  return calendar = plainDateSlots.calendar, isoDate = plainDateSlots, calendarDisplay = refineDateDisplayOptions(options), formatIsoDateFields(isoDate) + formatCalendar(calendar, calendarDisplay);
  var calendar, isoDate, calendarDisplay;
}
function formatPlainYearMonthIso(plainYearMonthSlots, options) {
  return formatDateLikeIso(plainYearMonthSlots.calendar, formatIsoYearMonthFields, plainYearMonthSlots, refineDateDisplayOptions(options));
}
function formatPlainMonthDayIso(plainMonthDaySlots, options) {
  return formatDateLikeIso(plainMonthDaySlots.calendar, formatIsoMonthDayFields, plainMonthDaySlots, refineDateDisplayOptions(options));
}
function formatDateLikeIso(calendar, formatSimple, isoDate, calendarDisplay) {
  const showCalendar = calendarDisplay > 1 || 0 === calendarDisplay && calendar !== isoCalendarImpl;
  return 1 === calendarDisplay ? calendar === isoCalendarImpl ? formatSimple(isoDate) : formatIsoDateFields(isoDate) : showCalendar ? formatIsoDateFields(isoDate) + formatCalendarId(getCalendarSlotId(calendar), 2 === calendarDisplay) : formatSimple(isoDate);
}
function formatPlainTimeIso(slots, options) {
  return ((fields, roundingMode, nanoInc, subsecDigits) => formatTimeFields(roundTimeToNano(fields, nanoInc, roundingMode)[0], subsecDigits))(slots, ...refineTimeDisplayOptions(options));
}
function formatDurationIso(slots, options) {
  const [roundingMode, nanoInc, subsecDigits] = refineTimeDisplayOptions(options, 3);
  return nanoInc > 1 && validateDurationFields(slots = __spreadValues(__spreadValues({}, slots), roundDayTimeDurationByInc(slots, nanoInc, roundingMode))), formatDurationSlots(slots, subsecDigits);
}
function formatDurationSlots(durationSlots, subsecDigits) {
  const { sign } = durationSlots;
  const abs = -1 === sign ? negateDurationFields(durationSlots) : durationSlots;
  const { hours, minutes } = abs;
  const bigNano = durationSubMinuteToBigNano(abs);
  const wholeSec = Number(bigNano / bigNanoInSec);
  const subsecNano = Number(bigNano % bigNanoInSec);
  validateDurationTimeUnit(wholeSec);
  const subsecNanoString = formatSubsecNano(subsecNano, subsecDigits);
  const forceSec = subsecDigits >= 0 || !sign || subsecNanoString;
  return (sign < 0 ? "-" : "") + "P" + formatDurationFragments({
    "Y": formatDurationNumber(abs.years),
    "M": formatDurationNumber(abs.months),
    "W": formatDurationNumber(abs.weeks),
    "D": formatDurationNumber(abs.days)
  }) + (hours || minutes || wholeSec || forceSec ? "T" + formatDurationFragments({
    "H": formatDurationNumber(hours),
    "M": formatDurationNumber(minutes),
    "S": formatDurationNumber(wholeSec, forceSec) + subsecNanoString
  }) : "");
}
function formatDurationFragments(fragObj) {
  const parts = [];
  for (const fragName in fragObj) {
    const fragVal = fragObj[fragName];
    fragVal && parts.push(fragVal, fragName);
  }
  return parts.join("");
}
function formatDurationNumber(n, force) {
  if (!n && !force) {
    return "";
  }
  const options = /* @__PURE__ */ Object.create(null);
  return options.useGrouping = 0, n.toLocaleString("fullwide", options);
}
function formatIsoDateTimeFields(isoDateTime, subsecDigits) {
  return formatIsoDateFields(isoDateTime) + "T" + formatTimeFields(isoDateTime, subsecDigits);
}
function formatIsoDateFields(isoDateFields) {
  return formatIsoYearMonthFields(isoDateFields) + "-" + padNumber2(isoDateFields.day);
}
function formatIsoYearMonthFields(isoDateFields) {
  const { year } = isoDateFields;
  return (year < 0 || year > 9999 ? getSignStr(year) + padNumber(6, Math.abs(year)) : padNumber(4, year)) + "-" + padNumber2(isoDateFields.month);
}
function formatIsoMonthDayFields(isoDateFields) {
  return padNumber2(isoDateFields.month) + "-" + padNumber2(isoDateFields.day);
}
function formatTimeFields(timeFields, subsecDigits) {
  const parts = [padNumber2(timeFields.hour), padNumber2(timeFields.minute)];
  return -1 !== subsecDigits && parts.push(padNumber2(timeFields.second) + ((millisecond, microsecond, nanosecond, subsecDigits2) => formatSubsecNano(millisecond * nanoInMilli2 + microsecond * nanoInMicro2 + nanosecond, subsecDigits2))(timeFields.millisecond, timeFields.microsecond, timeFields.nanosecond, subsecDigits)), parts.join(":");
}
function formatOffsetNano(offsetNano, offsetDisplay = 0) {
  if (1 === offsetDisplay) {
    return "";
  }
  const [hour, nanoRemainder0] = divModFloor(Math.abs(offsetNano), nanoInHour2);
  const [minute, nanoRemainder1] = divModFloor(nanoRemainder0, nanoInMinute2);
  const [second, nanoRemainder2] = divModFloor(nanoRemainder1, nanoInSec2);
  return getSignStr(offsetNano) + padNumber2(hour) + ":" + padNumber2(minute) + (second || nanoRemainder2 ? ":" + padNumber2(second) + formatSubsecNano(nanoRemainder2) : "");
}
function formatTimeZone(timeZoneId, timeZoneDisplay) {
  return 1 !== timeZoneDisplay ? "[" + (2 === timeZoneDisplay ? "!" : "") + timeZoneId + "]" : "";
}
function formatCalendar(calendar, calendarDisplay) {
  return calendarDisplay > 1 || 0 === calendarDisplay && calendar !== isoCalendarImpl ? formatCalendarId(getCalendarSlotId(calendar), 2 === calendarDisplay) : "";
}
function formatCalendarId(calendarId, isCritical) {
  return "[" + (isCritical ? "!" : "") + "u-ca=" + calendarId + "]";
}
var trailingZerosRE = /0+$/;
function formatSubsecNano(totalNano, subsecDigits) {
  let s = padNumber(9, totalNano);
  return s = void 0 === subsecDigits ? s.replace(trailingZerosRE, "") : s.slice(0, subsecDigits), s ? "." + s : "";
}
function getSignStr(num) {
  return num < 0 ? "-" : "+";
}
var icuRegExp = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/;
var badCharactersRegExp = /[^\w\/:+-]+/;
function refineTimeZoneId(rawId) {
  return resolveTimeZoneId(requireString(rawId));
}
function resolveTimeZoneId(rawId) {
  return resolveTimeZoneRecord(rawId).id;
}
function resolveTimeZoneRecord(rawId) {
  const upperRawId = rawId.toUpperCase();
  const offsetRecord = ((upperRawId2) => {
    const offsetNano = parseOffsetNanoMaybe(upperRawId2, 1);
    if (void 0 !== offsetNano) {
      return {
        id: formatOffsetNano(offsetNano),
        X: offsetNano,
        m: offsetNano
      };
    }
  })(upperRawId);
  if (offsetRecord) {
    return __spreadValues({
      kind: "fixed"
    }, offsetRecord);
  }
  const normId = "UTC" === upperRawId ? "UTC" : ((rawId2) => (badCharactersRegExp.test(rawId2) && throwRangeError(invalidTimeZone(rawId2)), icuRegExp.test(rawId2) && throwRangeError("Forbidden ICU TimeZone"), rawId2.toLowerCase().split("/").map((part, partI) => (part.length <= 3 || /\d/.test(part)) && !/etc|yap/.test(part) ? part.toUpperCase() : part.replace(/baja|dumont|[a-z]+/g, (a, i) => a.length <= 2 && !partI || "in" === a || "chat" === a ? a.toUpperCase() : a.length > 2 || !i ? capitalize(a).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : a)).join("/")))(rawId);
  return queryNamedTimeZoneRecord(normId);
}
var queryNamedTimeZoneRecord = /* @__PURE__ */ memoize((normId) => {
  if ("UTC" === normId) {
    return {
      kind: "utc",
      id: normId,
      m: normId
    };
  }
  const upperNormId = normId.toUpperCase();
  const format = queryTimeZoneIntlFormat(upperNormId);
  return {
    kind: "named",
    id: normId,
    format,
    m: format.resolvedOptions().timeZone
  };
});
var queryTimeZoneIntlFormat = /* @__PURE__ */ memoize((upperNormId) => new RawDateTimeFormat("en-u-hc-h23", {
  calendar: "iso8601",
  timeZone: upperNormId,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}));
function queryTimeZone(rawTimeZoneId) {
  const record = resolveTimeZoneRecord(rawTimeZoneId);
  return queryTimeZoneRecord(record.id, record);
}
var queryTimeZoneRecord = /* @__PURE__ */ memoize((normTimeZoneId, record) => "named" === record.kind ? new IntlTimeZone(normTimeZoneId, record.m, record.format) : new FixedTimeZone(normTimeZoneId, record.m, "fixed" === record.kind ? record.X : 0));
var FixedTimeZone = class {
  constructor(id, compareKey, offsetNano) {
    this.id = id, this.m = compareKey, this.X = offsetNano;
  }
  B() {
    return this.X;
  }
  N(isoDateTime) {
    return [isoDateTimeAndOffsetToEpochNano(isoDateTime, this.X)];
  }
  O() {
  }
};
var IntlTimeZone = class {
  constructor(id, compareKey, format) {
    this.id = id, this.m = compareKey, this.ke = ((computeOffsetSec, periodDays) => {
      const getSample = memoize(computeOffsetSec);
      const getSplit = memoize(createSplitTuple);
      const periodSec = 86400 * periodDays;
      function getOffsetSec(epochSec) {
        const [startEpochSec, endEpochSec] = computePeriod(epochSec, periodSec);
        const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
        const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
        const startOffsetSec = getSample(clampedStartEpochSec);
        const endOffsetSec = getSample(clampedEndEpochSec);
        return startOffsetSec === endOffsetSec ? startOffsetSec : pinch(getSplit(clampedStartEpochSec, clampedEndEpochSec), startOffsetSec, endOffsetSec, epochSec);
      }
      function pinch(split, startOffsetSec, endOffsetSec, forEpochSec) {
        let offsetSec;
        let splitDurSec;
        for (; (void 0 === forEpochSec || void 0 === (offsetSec = forEpochSec < split[0] ? startOffsetSec : forEpochSec >= split[1] ? endOffsetSec : void 0)) && (splitDurSec = split[1] - split[0]); ) {
          const middleEpochSec = split[0] + Math.floor(splitDurSec / 2);
          computeOffsetSec(middleEpochSec) === endOffsetSec ? split[1] = middleEpochSec : split[0] = middleEpochSec + 1;
        }
        return offsetSec;
      }
      return {
        xe(zonedEpochSec) {
          const wideOffsetSec0 = getOffsetSec(zonedEpochSec - 86400);
          const wideOffsetSec1 = getOffsetSec(zonedEpochSec + 86400);
          const wideUtcEpochSec0 = zonedEpochSec - wideOffsetSec0;
          const wideUtcEpochSec1 = zonedEpochSec - wideOffsetSec1;
          if (wideOffsetSec0 === wideOffsetSec1) {
            return [wideUtcEpochSec0];
          }
          const narrowOffsetSec0 = getOffsetSec(wideUtcEpochSec0);
          return narrowOffsetSec0 === getOffsetSec(wideUtcEpochSec1) ? [zonedEpochSec - narrowOffsetSec0] : wideOffsetSec0 > wideOffsetSec1 ? [wideUtcEpochSec0, wideUtcEpochSec1] : [];
        },
        we: getOffsetSec,
        O: function getTransition(epochSec, direction) {
          if (direction > 0 && epochSec >= 864e10) {
            return;
          }
          if (direction < 0) {
            if (epochSec <= minPossibleTransitionSec) {
              return;
            }
            const lookaheadEpochSec = getCurrentEpochSec() + 94867200;
            if (epochSec > lookaheadEpochSec) {
              return getTransition(lookaheadEpochSec, -1);
            }
          }
          const searchEpochSec = direction > 0 ? Math.max(epochSec, minPossibleTransitionSec) : epochSec;
          let [startEpochSec, endEpochSec] = computePeriod(searchEpochSec, periodSec);
          const inc = periodSec * direction;
          const searchLimit = direction > 0 ? Math.max(epochSec, getCurrentEpochSec()) + 94867200 : minPossibleTransitionSec;
          const inBounds = () => direction < 0 ? endEpochSec > searchLimit : startEpochSec < searchLimit;
          for (; inBounds(); ) {
            const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
            const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
            const startOffsetSec = getSample(clampedStartEpochSec);
            const endOffsetSec = getSample(clampedEndEpochSec);
            if (startOffsetSec !== endOffsetSec) {
              const split = getSplit(clampedStartEpochSec, clampedEndEpochSec);
              pinch(split, startOffsetSec, endOffsetSec);
              const transitionEpochSec = split[0];
              if ((compareNumbers(transitionEpochSec, epochSec) || 1) === direction) {
                return transitionEpochSec;
              }
            }
            startEpochSec += inc, endEpochSec += inc;
          }
        }
      };
    })(/* @__PURE__ */ ((format2) => (epochSec) => {
      const intlParts = formatEpochMilliToPartsRecord(format2, 1e3 * epochSec);
      return 86400 * isoArgsToEpochDays(((intlParts2) => {
        const relatedYear = intlParts2.relatedYear;
        if (void 0 !== relatedYear) {
          return parseInt(relatedYear);
        }
        const year = parseInt(intlParts2.year);
        return void 0 !== intlParts2.era && "bce" === normalizeEraName(intlParts2.era) ? 1 - year : year;
      })(intlParts), parseInt(intlParts.month), parseInt(intlParts.day)) + 3600 * parseInt(intlParts.hour) + 60 * parseInt(intlParts.minute) + parseInt(intlParts.second) - epochSec;
    })(format), ((timeZoneId) => {
      const timeZoneName = timeZoneId.split("/").pop();
      return timeZonePeriodDaysByName[timeZoneName] || 60;
    })(id));
  }
  B(epochNano) {
    return this.ke.we(((epochNano2) => epochNanoToSecMod(epochNano2)[0])(epochNano)) * nanoInSec2;
  }
  N(isoDateTime) {
    const zonedEpochSec = 86400 * isoDateToEpochDays(isoDateTime) + timeFieldsToSec(isoDateTime);
    const subsecNano = timeFieldsToSubsecNano(isoDateTime);
    return this.ke.xe(zonedEpochSec).map((epochSec) => checkEpochNanoInBounds(BigInt(epochSec) * bigNanoInSec + BigInt(subsecNano)));
  }
  O(epochNano, direction) {
    const [epochSec, subsecNano] = epochNanoToSecMod(epochNano);
    const resEpochSec = this.ke.O(epochSec + (direction > 0 || subsecNano ? 1 : 0), direction);
    if (void 0 !== resEpochSec) {
      return BigInt(resEpochSec) * bigNanoInSec;
    }
  }
};
function getCurrentEpochSec() {
  return Math.floor(Date.now() / 1e3);
}
function createSplitTuple(startEpochSec, endEpochSec) {
  return [startEpochSec, endEpochSec];
}
function computePeriod(epochSec, periodSec) {
  const startEpochSec = Math.floor(epochSec / periodSec) * periodSec;
  return [startEpochSec, startEpochSec + periodSec];
}
function clampIntlSampleEpochSec(epochSec) {
  return constrainToRange2(epochSec, -1e10, 864e10);
}
function refineMaybeZonedDateTimeObjectLike(refineTimeZoneString, calendar, bag) {
  const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeAndZoneFieldNamesAlpha, dateTimeAndZoneFieldNamesWithEraAlpha), zonedDateTimeFieldRefiners, [], 0);
  if (void 0 !== fields.timeZone) {
    const isoDateFields = createPlainDateFromFields(calendar, fields);
    const timeFields = resolveTimeFields(fields);
    const timeZone = queryTimeZone(refineTimeZoneString(fields.timeZone));
    return {
      epochNanoseconds: getMatchingInstantFor(timeZone, combineDateAndTime(isoDateFields, timeFields), fields.offset),
      timeZone,
      calendar
    };
  }
  return createPlainDateFromFields(calendar, fields);
}
function refineZonedDateTimeObjectLike(refineTimeZoneString, calendar, bag, options) {
  const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeAndZoneFieldNamesAlpha, dateTimeAndZoneFieldNamesWithEraAlpha), zonedDateTimeFieldRefiners, timeZoneFieldNames, 0);
  const timeZoneId = refineTimeZoneString(fields.timeZone);
  const [isoDateFields, overflow, offsetDisambig, epochDisambig] = createPlainDateFromFieldsWithOptionsRefiner(calendar, fields, () => refineZonedFieldOptions(options));
  const timeFields = resolveTimeFields(fields, overflow);
  const timeZone = queryTimeZone(timeZoneId);
  return createZonedEpochNanoSlots(getMatchingInstantFor(timeZone, combineDateAndTime(isoDateFields, timeFields), fields.offset, offsetDisambig, epochDisambig), timeZone, calendar);
}
function refinePlainDateTimeObjectLike(calendar, bag, options) {
  const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeFieldNamesAlpha, dateTimeFieldNamesWithEraAlpha), dateTimeFieldRefiners, [], 0);
  const [isoDateInternals, overflow] = createPlainDateFromFieldsWithOptionsRefiner(calendar, fields, () => [refineOverflowOptions(options)]);
  return createPlainDateTimeFromRefinedFields(isoDateInternals, resolveTimeFields(fields, overflow), calendar);
}
function refinePlainDateObjectLike(calendar, bag, options, requireFields = []) {
  return createPlainDateFromFields(calendar, readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha), dateFieldRefiners, requireFields), options);
}
function refinePlainYearMonthObjectLike(calendar, bag, options, requireFields) {
  return createPlainYearMonthFromFields(calendar, readAndRefineBagFields(bag, getCalendarFieldNames(calendar, yearMonthFieldNamesAlpha, yearMonthFieldNamesWithEraAlpha), dateFieldRefiners, requireFields), options);
}
function refinePlainMonthDayObjectLike(calendar, calendarAbsent, bag, options) {
  const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha), dateFieldRefiners, dayFieldNamesAsc, 0);
  return calendarAbsent && void 0 !== fields.month && void 0 === fields.monthCode && void 0 === fields.year && (fields.year = 1972), createPlainMonthDayFromFields(calendar, fields, options);
}
function refinePlainTimeObjectLike(bag, options) {
  return resolveTimeFields(readAndRefineBagFields(bag, timeFieldNamesAlpha, timeFieldRefiners, [], 1), refineOverflowOptions(options));
}
function refineDurationObjectLike(bag) {
  const durationFields = readAndRefineBagFields(bag, durationFieldNamesAlpha, durationFieldRefiners);
  return createDurationSlots(validateDurationFields(__spreadValues(__spreadValues({}, durationFieldDefaults), durationFields)));
}
function throwFailedParse(s) {
  throwRangeError(failedParse(s));
}
function parseInstant(s) {
  const organized = parseDateTimeLike(s = toStringViaPrimitive(s));
  let offsetNano;
  return organized || throwFailedParse(s), organized.C ? offsetNano = 0 : organized.offset ? offsetNano = parseOffsetNano(organized.offset) : throwFailedParse(s), organized.timeZoneId && parseOffsetNanoMaybe(organized.timeZoneId, 1), validateIsoDateTimeFields(organized), createEpochNanoSlots(isoDateTimeAndOffsetToEpochNano(organized, offsetNano));
}
function parseRelativeToSlots(s, resolveCalendar) {
  const organized = parseDateTimeLike(requireString(s));
  return organized || throwFailedParse(s), organized.timeZoneId ? finalizeZonedDateTime(organized, resolveCalendar, void 0) : (organized.C && throwFailedParse(s), finalizeDate(organized, resolveCalendar));
}
function parseZonedDateTime(s, resolveCalendar, options) {
  const organized = parseDateTimeLike(requireString(s));
  return organized && organized.timeZoneId || throwFailedParse(s), finalizeZonedDateTime(organized, resolveCalendar, options);
}
function parsePlainDateTime(s, resolveCalendar) {
  const organized = parseDateTimeLike(requireString(s));
  return organized && !organized.C || throwFailedParse(s), finalizeDateTime(organized, resolveCalendar);
}
function parsePlainDate(s, resolveCalendar) {
  const slots = finalizeDateLike(parsePlainDateLike(requireString(s)), void 0, resolveCalendar);
  return createDateSlots(slots, slots.calendar);
}
function parsePlainYearMonth(s, resolveCalendar) {
  const organized = parseYearMonthOnly(requireString(s));
  if (organized) {
    return requireIsoCalendar(organized), createDateSlots(checkIsoYearMonthInBounds(validateIsoDateFields(organized)), resolveCalendar(organized.calendarId));
  }
  const dateSlots = finalizeDateLike(parsePlainDateLike(s), projectIsoYearMonthDate, resolveCalendar);
  const { calendar } = dateSlots;
  return createDateSlots(moveToStartOfMonth(calendar, dateSlots), calendar);
}
function requireIsoCalendar(organized) {
  "iso8601" !== organized.calendarId && throwRangeError(invalidSubstring(organized.calendarId));
}
function parsePlainMonthDay(s, resolveCalendar) {
  const organized = parseMonthDayOnly(requireString(s));
  if (organized) {
    return requireIsoCalendar(organized), createDateSlots(validateIsoDateFields(organized), resolveCalendar(organized.calendarId));
  }
  const dateSlots = finalizeDateLike(parsePlainDateLike(s), projectIsoMonthDayDate, resolveCalendar);
  const { calendar } = dateSlots;
  const { year: origYear, month: origMonth, day } = computeCalendarDateFields(calendar, dateSlots);
  const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, origYear, origMonth);
  const { year, month } = ((calendar2, monthCodeNumber2, isLeapMonth2, day2) => {
    const yearMonthFields = calendar2 ? calendar2.u(monthCodeNumber2, isLeapMonth2, day2) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber2, isLeapMonth2);
    return yearMonthFields || throwRangeError("Cannot guess year"), yearMonthFields;
  })(calendar, monthCodeNumber, isLeapMonth, day);
  return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, year, month, day)), calendar);
}
function parsePlainTime(s) {
  let organized = ((s2) => {
    const parts = parseTimeOnlyParts(s2);
    return parts ? (organizeAnnotationParts(parts[13]), organizeTimeParts(parts, 1)) : void 0;
  })(s = requireString(s));
  if (!organized) {
    const dateTime = parseDateTimeLike(s);
    dateTime && dateTime.re || throwFailedParse(s), dateTime.C && throwRangeError(invalidSubstring("Z")), requireIsoCalendar(dateTime), organized = dateTime;
  }
  let altParsed;
  return (altParsed = parseYearMonthOnly(s)) && isIsoDateFieldsValid(altParsed) && throwFailedParse(s), (altParsed = parseMonthDayOnly(s)) && isIsoDateFieldsValid(altParsed) && throwFailedParse(s), createTimeSlots(validateTimeFields(organized));
}
function parseDuration(s) {
  const parts = durationRegExp.exec(requireString(s));
  return parts || throwFailedParse(s), createDurationSlots(validateDurationFields(((parts2) => {
    let hasAny = 0;
    let hasAnyFrac = 0;
    let leftoverNano = 0;
    let durationFields = __spreadValues({
      years: parseUnit(parts2[2]),
      months: parseUnit(parts2[3]),
      weeks: parseUnit(parts2[4]),
      days: parseUnit(parts2[5]),
      hours: parseUnit(parts2[6], parts2[7], 5),
      minutes: parseUnit(parts2[8], parts2[9], 4),
      seconds: parseUnit(parts2[10], parts2[11], 3)
    }, nanoToGivenFields(leftoverNano, 2, durationFieldNamesAsc));
    return hasAny || throwRangeError(noValidFields(durationFieldNamesAsc)), parseSign(parts2[1]) < 0 && (durationFields = negateDurationFields(durationFields)), durationFields;
    function parseUnit(wholeStr, fracStr, timeUnit) {
      let leftoverUnits = 0;
      let wholeUnits = 0;
      return timeUnit && ([leftoverUnits, leftoverNano] = divModFloor(leftoverNano, unitNanoMap[timeUnit])), void 0 !== wholeStr && (hasAnyFrac && throwRangeError(invalidSubstring(wholeStr)), wholeUnits = ((s2) => {
        const n = parseInt(s2);
        return Number.isFinite(n) || throwRangeError(invalidSubstring(s2)), n;
      })(wholeStr), hasAny = 1, fracStr && (leftoverNano = parseSubsecNano(fracStr) * (unitNanoMap[timeUnit] / nanoInSec2), hasAnyFrac = 1)), leftoverUnits + wholeUnits;
    }
  })(parts)));
}
function parseCalendarId(s) {
  const res = parseDateTimeLike(s) || parseYearMonthOnly(s) || parseMonthDayOnly(s);
  if (res) {
    return res.calendarId;
  }
  const timeParts = parseTimeOnlyParts(s);
  return timeParts ? organizeAnnotationParts(timeParts[13]).calendarId : s;
}
function parseTimeZoneId(s) {
  const parsed = parseDateTimeLike(s);
  return parsed && (parsed.timeZoneId || parsed.C && "UTC" || parsed.offset) || s;
}
function parsePlainDateLike(s) {
  const organized = parseDateTimeLike(s);
  return organized && !organized.C || throwFailedParse(s), organized;
}
function finalizeDateLike(organized, isoDateProjector, resolveCalendar) {
  return isoDateProjector && "iso8601" === organized.calendarId ? (validateIsoDateFields(organized), organized.re && validateTimeFields(organized), finalizeDate(isoDateProjector(organized), resolveCalendar)) : organized.re ? finalizeDateTime(organized, resolveCalendar) : finalizeDate(organized, resolveCalendar);
}
function projectIsoYearMonthDate(organized) {
  const day = 12 * organized.year + organized.month === isoYearMonthIndexMin ? 20 : 1;
  return __spreadProps(__spreadValues({}, organized), {
    day
  });
}
function projectIsoMonthDayDate(organized) {
  return __spreadProps(__spreadValues({}, organized), {
    year: 1972
  });
}
function finalizeZonedDateTime(organized, resolveCalendar, options) {
  const timeZone = queryTimeZone(resolveTimeZoneId(organized.timeZoneId));
  let epochNano;
  if (validateIsoDateTimeFields(organized), organized.re) {
    const offsetNano = organized.offset ? parseOffsetNano(organized.offset) : void 0;
    const [, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options);
    epochNano = getMatchingInstantFor(timeZone, organized, offsetNano, offsetDisambig, epochDisambig, !(timeZone.X || void 0 === organized.offset || (offset = organized.offset, offset.replace(/\D/g, "").length > 4)), organized.C);
  } else {
    refineZonedFieldOptions(options), epochNano = getStartOfDayInstantFor(timeZone, organized);
  }
  var offset;
  return checkEpochNanoInBounds(epochNano), createZonedEpochNanoSlots(epochNano, timeZone, resolveCalendar(organized.calendarId));
}
function finalizeDateTime(organized, resolveCalendar) {
  return validateIsoDateTimeFields(organized), checkIsoDateTimeInBounds(organized), __spreadProps(__spreadValues({}, combineDateAndTime(organized, organized)), {
    calendar: resolveCalendar(organized.calendarId)
  });
}
function finalizeDate(organized, resolveCalendar) {
  return validateIsoDateFields(organized), checkIsoDateInBounds(organized), {
    calendar: resolveCalendar(organized.calendarId),
    year: organized.year,
    month: organized.month,
    day: organized.day
  };
}
function timeRegExpStr(separatorIndex) {
  return `(\\d{2})(?:(:?)(\\d{2})(?:\\${separatorIndex}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
var dateTimeRegExpStr = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + timeRegExpStr(8) + "(Z|([+-])" + timeRegExpStr(15) + ")?)?";
var yearMonthRegExp = /* @__PURE__ */ createRegExp("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})");
var monthDayRegExp = /* @__PURE__ */ createRegExp("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})");
var dateTimeRegExp = /* @__PURE__ */ createRegExp(dateTimeRegExpStr + "((?:\\[(!?)([^\\]]*)\\]){0,9})");
var timeRegExp = /* @__PURE__ */ createRegExp("T?" + timeRegExpStr(2) + `(([+-])${timeRegExpStr(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`);
var annotationRegExp = /* @__PURE__ */ new RegExp("\\[(!?)([^\\]]*)\\]", "g");
var durationRegExp = /* @__PURE__ */ createRegExp("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?!$)(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?");
function parseDateTimeLike(s) {
  const parts = dateTimeRegExp.exec(s);
  return parts ? ((parts2) => {
    const zOrOffset = parts2[12];
    const hasZ = "Z" === (zOrOffset || "").toUpperCase();
    return __spreadProps(__spreadValues(__spreadValues({
      year: organizeIsoYearParts(parts2),
      month: parseInt(parts2[5]),
      day: parseInt(parts2[6])
    }, organizeTimeParts(parts2, 7)), organizeAnnotationParts(parts2[19])), {
      re: Boolean(parts2[7]),
      C: hasZ,
      offset: hasZ ? void 0 : zOrOffset
    });
  })(parts) : void 0;
}
function parseYearMonthOnly(s) {
  const parts = yearMonthRegExp.exec(s);
  if (parts) {
    return ((parts2) => __spreadValues({
      year: organizeIsoYearParts(parts2),
      month: parseInt(parts2[4]),
      day: 1
    }, organizeAnnotationParts(parts2[5])))(parts);
  }
}
function parseMonthDayOnly(s) {
  const parts = monthDayRegExp.exec(s);
  return parts ? ((parts2) => __spreadValues({
    year: 1972,
    month: parseInt(parts2[1]),
    day: parseInt(parts2[2])
  }, organizeAnnotationParts(parts2[3])))(parts) : void 0;
}
function parseTimeOnlyParts(s) {
  const parts = timeRegExp.exec(s);
  if (parts) {
    return parts[6] && parseOffsetNano(parts[6]), parts;
  }
}
function organizeTimeParts(parts, hourIndex) {
  const second = parseInt0(parts[hourIndex + 3]);
  return __spreadProps(__spreadValues({}, nanoToTimeAndDay(parseSubsecNano(parts[hourIndex + 4] || ""))[0]), {
    hour: parseInt0(parts[hourIndex]),
    minute: parseInt0(parts[hourIndex + 2]),
    second: 60 === second ? 59 : second
  });
}
function organizeIsoYearParts(parts) {
  const yearSign = parseSign(parts[1]);
  const year = parseInt(parts[2] || parts[3]);
  return yearSign < 0 && !year && throwRangeError(invalidSubstring(-0)), yearSign * year;
}
function organizeAnnotationParts(s) {
  let calendarIsCritical;
  let timeZoneId;
  const calendarIds = [];
  return s.replace(annotationRegExp, (whole, criticalStr, mainStr) => {
    const isCritical = Boolean(criticalStr);
    const [val, name] = mainStr.split("=").reverse();
    return name ? "u-ca" === name ? (calendarIds.push(val.toLowerCase()), calendarIsCritical || (calendarIsCritical = isCritical)) : (isCritical || /[A-Z]/.test(name)) && throwRangeError(invalidSubstring(whole)) : (timeZoneId && throwRangeError(invalidSubstring(whole)), timeZoneId = val), "";
  }), calendarIds.length > 1 && calendarIsCritical && throwRangeError(invalidSubstring(s)), {
    timeZoneId,
    calendarId: calendarIds[0] || "iso8601"
  };
}
function mergeCalendarFields(calendar, baseFields, additionalFields) {
  const merged = Object.assign(/* @__PURE__ */ Object.create(null), baseFields);
  return spliceFields(merged, additionalFields, monthFieldNames), getCalendarEraOrigins(calendar) && (spliceFields(merged, additionalFields, allYearFieldNames), calendar && calendar.ge && spliceFields(merged, additionalFields, monthDayFieldNames, eraYearFieldNames)), merged;
}
function spliceFields(dest, additional, allPropNames, deletablePropNames) {
  let anyMatching = 0;
  const nonMatchingPropNames = [];
  for (const propName of allPropNames) {
    void 0 !== additional[propName] ? anyMatching = 1 : nonMatchingPropNames.push(propName);
  }
  if (Object.assign(dest, additional), anyMatching) {
    for (const deletablePropName of deletablePropNames || nonMatchingPropNames) {
      delete dest[deletablePropName];
    }
  }
}
function mergeZonedDateTimeFields(zonedDateTimeSlots, modFields, options) {
  const { calendar, timeZone } = zonedDateTimeSlots;
  const validFieldNames = getCalendarFieldNames(calendar, dateTimeAndOffsetFieldNamesAlpha, dateTimeAndOffsetFieldNamesWithEraAlpha);
  const zonedSlots = zonedEpochSlotsToIso(zonedDateTimeSlots);
  const { year, month, day } = computeCalendarDateFields(calendar, zonedSlots);
  const origFields = {
    year,
    monthCode: computeMonthCode(calendar, year, month),
    day,
    hour: zonedSlots.hour,
    minute: zonedSlots.minute,
    second: zonedSlots.second,
    millisecond: zonedSlots.millisecond,
    microsecond: zonedSlots.microsecond,
    nanosecond: zonedSlots.nanosecond,
    offset: zonedSlots.offsetNanoseconds
  };
  const partialFields = readAndRefineBagFields(modFields, validFieldNames, zonedDateTimeFieldRefiners);
  const mergedCalendarFields = mergeCalendarFields(calendar, origFields, partialFields);
  const mergedAllFields = __spreadValues(__spreadValues({}, origFields), partialFields);
  const [isoDateFields, overflow, offsetDisambig, epochDisambig] = createPlainDateFromFieldsWithOptionsRefiner(calendar, mergedCalendarFields, () => refineZonedFieldOptions(options, 2));
  return createZonedEpochNanoSlots(getMatchingInstantFor(timeZone, combineDateAndTime(isoDateFields, constrainTimeFields(mergedAllFields, overflow)), mergedAllFields.offset, offsetDisambig, epochDisambig), timeZone, calendar);
}
function mergePlainDateTimeFields(plainDateTimeSlots, modFields, options) {
  const { calendar } = plainDateTimeSlots;
  const validFieldNames = getCalendarFieldNames(calendar, dateTimeFieldNamesAlpha, dateTimeFieldNamesWithEraAlpha);
  const { year, month, day } = computeCalendarDateFields(calendar, plainDateTimeSlots);
  const origFields = {
    year,
    monthCode: computeMonthCode(calendar, year, month),
    day,
    hour: plainDateTimeSlots.hour,
    minute: plainDateTimeSlots.minute,
    second: plainDateTimeSlots.second,
    millisecond: plainDateTimeSlots.millisecond,
    microsecond: plainDateTimeSlots.microsecond,
    nanosecond: plainDateTimeSlots.nanosecond
  };
  const partialFields = readAndRefineBagFields(modFields, validFieldNames, dateTimeFieldRefiners);
  const mergedCalendarFields = mergeCalendarFields(calendar, origFields, partialFields);
  const mergedAllFields = __spreadValues(__spreadValues({}, origFields), partialFields);
  const [plainDateSlots, overflow] = createPlainDateFromFieldsWithOptionsRefiner(calendar, mergedCalendarFields, () => [refineOverflowOptions(options)]);
  return createPlainDateTimeFromRefinedFields(plainDateSlots, constrainTimeFields(mergedAllFields, overflow), calendar);
}
function mergePlainDateFields(plainDateSlots, modFields, options) {
  const { calendar } = plainDateSlots;
  const validFieldNames = getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha);
  const { year, month, day } = computeCalendarDateFields(calendar, plainDateSlots);
  return createPlainDateFromFields(calendar, mergeCalendarFields(calendar, {
    year,
    monthCode: computeMonthCode(calendar, year, month),
    day
  }, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners)), options);
}
function mergePlainYearMonthFields(plainYearMonthSlots, modFields, options) {
  const { calendar } = plainYearMonthSlots;
  const validFieldNames = getCalendarFieldNames(calendar, yearMonthFieldNamesAlpha, yearMonthFieldNamesWithEraAlpha);
  const { year, month } = computeCalendarDateFields(calendar, plainYearMonthSlots);
  return createPlainYearMonthFromFields(calendar, mergeCalendarFields(calendar, {
    year,
    monthCode: computeMonthCode(calendar, year, month)
  }, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners)), options);
}
function mergePlainMonthDayFields(plainMonthDaySlots, modFields, options) {
  const { calendar } = plainMonthDaySlots;
  const validFieldNames = getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha);
  const { year, month, day } = computeCalendarDateFields(calendar, plainMonthDaySlots);
  return createPlainMonthDayFromFields(calendar, mergeCalendarFields(calendar, {
    monthCode: computeMonthCode(calendar, year, month),
    day
  }, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners)), options);
}
function mergePlainTimeFields(initialFields, mod, options) {
  return ((initialFields2, modFields, options2) => resolveTimeFields(__spreadValues(__spreadValues({}, pluckProps(timeFieldNamesAlpha, initialFields2)), readAndRefineBagFields(modFields, timeFieldNamesAlpha, timeFieldRefiners)), refineOverflowOptions(options2)))(initialFields, mod, options);
}
function mergeDurationFields(slots, fields) {
  return createDurationSlots((initialFields = slots, modFields = fields, validateDurationFields(__spreadValues(__spreadValues({}, initialFields), readAndRefineBagFields(modFields, durationFieldNamesAlpha, durationFieldRefiners)))));
  var initialFields, modFields;
}
function computeMonthCode(calendar, year, month) {
  const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
  return formatMonthCode(monthCodeNumber, isLeapMonth);
}
function instantToZonedDateTime(instantSlots, timeZone, calendar) {
  return createZonedEpochNanoSlots(instantSlots.epochNanoseconds, timeZone, calendar);
}
function zonedDateTimeToInstant(zonedDateTimeSlots0) {
  return createEpochNanoSlots(zonedDateTimeSlots0.epochNanoseconds);
}
function zonedDateTimeToPlainDateTime(zonedDateTimeSlots0) {
  return createDateTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0), zonedDateTimeSlots0.calendar);
}
function zonedDateTimeToPlainDate(zonedDateTimeSlots0) {
  return createDateSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0), zonedDateTimeSlots0.calendar);
}
function zonedDateTimeToPlainTime(zonedDateTimeSlots0) {
  return createTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0));
}
function plainDateTimeToZonedDateTime(plainDateTimeSlots, timeZone, options) {
  const epochNano = getSingleInstantFor(timeZone, plainDateTimeSlots, ((options2) => coerceEpochDisambig(normalizeOptions(options2)))(options));
  return createZonedEpochNanoSlots(checkEpochNanoInBounds(epochNano), timeZone, plainDateTimeSlots.calendar);
}
function plainDateToZonedDateTime(refineTimeZoneString, refinePlainTimeArg, plainDateSlots, options) {
  const timeZoneId = refineTimeZoneString(options.timeZone);
  const plainTimeArg = options.plainTime;
  const timeFields = void 0 !== plainTimeArg ? refinePlainTimeArg(plainTimeArg) : void 0;
  const timeZone = queryTimeZone(timeZoneId);
  let epochNano;
  return epochNano = timeFields ? getSingleInstantFor(timeZone, combineDateAndTime(plainDateSlots, timeFields)) : getStartOfDayInstantFor(timeZone, combineDateAndTime(plainDateSlots, timeFieldDefaults)), createZonedEpochNanoSlots(epochNano, timeZone, plainDateSlots.calendar);
}
function convertPlainYearMonthToDate(calendar, input, bag) {
  return createPlainDateFromMergedFields(calendar, pluckProps(getCalendarFieldNames(calendar, yearMonthCodeFieldNamesAlpha, yearMonthCodeFieldNamesWithEraAlpha), input), readAndRefineBagFields(requireObjectLike(bag), dayFieldNamesAsc, dateFieldRefiners, []));
}
function convertPlainMonthDayToDate(calendar, input, bag) {
  const extraFieldNames = getCalendarFieldNames(calendar, yearFieldNamesAsc, yearFieldNamesWithEraAlpha);
  return createPlainDateFromMergedFields(calendar, pluckProps(monthCodeDayFieldNamesAlpha, input), readAndRefineBagFields(requireObjectLike(bag), extraFieldNames, dateFieldRefiners, []));
}
function convertToPlainMonthDay(calendar, input) {
  return createPlainMonthDayFromFields(calendar, readAndRefineBagFields(input, monthCodeDayFieldNamesAlpha, dateFieldRefiners));
}
function convertToPlainYearMonth(calendar, input, options) {
  return createPlainYearMonthFromFields(calendar, readAndRefineBagFields(input, getCalendarFieldNames(calendar, yearMonthCodeFieldNamesAlpha, yearMonthCodeFieldNamesWithEraAlpha), dateFieldRefiners), options);
}
function createPlainDateFromMergedFields(calendar, inputFields, extraFields) {
  const mergedFieldNames = getCalendarFieldNames(calendar, yearMonthCodeDayFieldNamesAlpha, yearMonthCodeDayFieldNamesWithEraAlpha);
  let mergedFields = mergeCalendarFields(calendar, inputFields, extraFields);
  return mergedFields = readAndRefineBagFields(mergedFields, mergedFieldNames, dateFieldRefiners, []), createPlainDateFromFields(calendar, mergedFields);
}
function epochMilliToInstant(epochMilli) {
  return createEpochNanoSlots(checkEpochNanoInBounds(BigInt(toStrictInteger(epochMilli)) * bigNanoInMilli));
}
function epochNanoToInstant(epochNano) {
  return createEpochNanoSlots(checkEpochNanoInBounds(toBigInt(epochNano)));
}
function applyPlainFormatTimeZone(options) {
  return options.timeZone = "UTC", ["full", "long"].includes(options.timeStyle) && (options.timeStyle = "medium"), options;
}
function applyZonedFormatTimeZone(options, timeZoneId) {
  return void 0 !== options.timeZone && throwTypeError("Cannot specify TimeZone"), options.timeZone = timeZoneId, options;
}
function checkResolvedCalendarCompatible(format, slots, strictCalendarCheck) {
  const resolvedCalendarId = format.resolvedOptions().calendar;
  !strictCalendarCheck && slots.calendar === isoCalendarImpl || getCalendarSlotId(slots.calendar) === resolvedCalendarId || throwRangeError("Mismatching Calendars");
}
function createOptionsTransformer(shapeFieldNames, invalidShapeFieldNames, ignoredFieldNames, defaultShapeFields, dateStyleReplacementFields) {
  const shapeFieldNameSet = new Set(shapeFieldNames);
  const invalidShapeFieldNameSet = new Set(invalidShapeFieldNames);
  const ignoredFieldNameSet = new Set(ignoredFieldNames);
  return (options, allowPartialOverlap) => {
    let dateStyle;
    let timeStyle;
    const granularShapeFields = {};
    const modifierFields = {};
    const otherFields = {};
    let hasInvalidGranularShapeFields = 0;
    let hasInvalidStyleFields = 0;
    for (const name of Object.keys(options)) {
      const value = options[name];
      void 0 === value || ignoredFieldNameSet.has(name) || (shapeFieldNameSet.has(name) ? "dateStyle" === name ? dateStyle = value : "timeStyle" === name ? timeStyle = value : granularShapeFields[name] = value : "era" === name ? modifierFields[name] = value : invalidShapeFieldNameSet.has(name) ? "dateStyle" === name || "timeStyle" === name ? hasInvalidStyleFields = 1 : hasInvalidGranularShapeFields = 1 : otherFields[name] = value);
    }
    const hasDateStyle = void 0 !== dateStyle;
    const hasTimeStyle = void 0 !== timeStyle;
    const hasAnyStyle = hasDateStyle || hasTimeStyle;
    const hasGranularShapeFields = Object.keys(granularShapeFields).length > 0;
    const hasInvalids = hasInvalidGranularShapeFields || hasInvalidStyleFields;
    const hasShapeFields = hasGranularShapeFields || hasDateStyle || hasTimeStyle;
    const hasModifierFields = Object.keys(modifierFields).length > 0;
    (!allowPartialOverlap && hasInvalids || allowPartialOverlap && hasInvalids && !hasShapeFields || hasAnyStyle && (hasGranularShapeFields || hasModifierFields || hasInvalidGranularShapeFields)) && throwTypeError("Invalid formatting options");
    const transformedOptions = {};
    return hasAnyStyle || hasShapeFields || Object.assign(transformedOptions, defaultShapeFields), Object.assign(transformedOptions, granularShapeFields, modifierFields, otherFields), hasDateStyle && (dateStyleReplacementFields ? Object.assign(transformedOptions, dateStyleReplacementFields[dateStyle]) : transformedOptions.dateStyle = dateStyle), hasTimeStyle && (transformedOptions.timeStyle = timeStyle), transformedOptions;
  };
}
var dateDefaultShapeFields = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
};
var timeDefaultShapeFields = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
var dateTimeDefaultShapeFields = /* @__PURE__ */ Object.assign({}, dateDefaultShapeFields, timeDefaultShapeFields);
var dateShapeFieldNames = ["weekday", "year", "month", "day", "dateStyle"];
var timeShapeFieldNames = ["dayPeriod", "hour", "minute", "second", "fractionalSecondDigits", "timeStyle"];
var dateTimeShapeFieldNames = /* @__PURE__ */ dateShapeFieldNames.concat(timeShapeFieldNames);
var yearMonthIgnoredFieldNames = /* @__PURE__ */ ["weekday", "day"].concat(timeShapeFieldNames);
var monthDayIgnoredFieldNames = /* @__PURE__ */ ["weekday", "year"].concat(timeShapeFieldNames);
var transformInstantOptions = /* @__PURE__ */ createOptionsTransformer(dateTimeShapeFieldNames, [], [], dateTimeDefaultShapeFields);
var transformZonedOptions = /* @__PURE__ */ createOptionsTransformer(dateTimeShapeFieldNames, [], [], __spreadProps(__spreadValues({}, dateTimeDefaultShapeFields), {
  timeZoneName: "short"
}));
var transformDateTimeOptions = /* @__PURE__ */ createOptionsTransformer(dateTimeShapeFieldNames, [], ["timeZoneName"], dateTimeDefaultShapeFields);
var transformDateOptions = /* @__PURE__ */ createOptionsTransformer(dateShapeFieldNames, timeShapeFieldNames, ["timeZoneName"], dateDefaultShapeFields);
var transformTimeOptions = /* @__PURE__ */ createOptionsTransformer(timeShapeFieldNames, dateShapeFieldNames, ["timeZoneName", "era"], timeDefaultShapeFields);
var transformYearMonthOptions = /* @__PURE__ */ createOptionsTransformer(["year", "month", "dateStyle"], yearMonthIgnoredFieldNames, ["timeZoneName"], {
  year: "numeric",
  month: "numeric"
}, {
  full: {
    year: "numeric",
    month: "long"
  },
  long: {
    year: "numeric",
    month: "long"
  },
  medium: {
    year: "numeric",
    month: "short"
  },
  short: {
    year: "2-digit",
    month: "numeric"
  }
});
var transformMonthDayOptions = /* @__PURE__ */ createOptionsTransformer(["month", "day", "dateStyle"], monthDayIgnoredFieldNames, ["timeZoneName", "era"], {
  month: "numeric",
  day: "numeric"
}, {
  full: {
    month: "long",
    day: "numeric"
  },
  long: {
    month: "long",
    day: "numeric"
  },
  medium: {
    month: "short",
    day: "numeric"
  },
  short: {
    month: "numeric",
    day: "numeric"
  }
});
function zonedDateTimeWithPlainTime(zonedDateTimeSlots, plainTimeFields) {
  const { timeZone } = zonedDateTimeSlots;
  const isoDateTime = zonedEpochSlotsToIso(zonedDateTimeSlots);
  const { offsetNanoseconds } = isoDateTime;
  const time = plainTimeFields || timeFieldDefaults;
  let epochNano;
  return epochNano = plainTimeFields ? getMatchingInstantFor(timeZone, combineDateAndTime(isoDateTime, time), offsetNanoseconds, 2) : getStartOfDayInstantFor(timeZone, combineDateAndTime(isoDateTime, time)), createZonedEpochNanoSlots(epochNano, timeZone, zonedDateTimeSlots.calendar);
}
function getCurrentIsoDateTime(timeZone) {
  const epochNano = getCurrentEpochNano();
  const offsetNano = timeZone.B(epochNano);
  return epochNanoToIsoDateTime(epochNano + BigInt(offsetNano));
}
function getCurrentEpochNano() {
  return BigInt(Date.now()) * bigNanoInMilli;
}
function getCurrentTimeZoneId() {
  return new RawDateTimeFormat().resolvedOptions().timeZone;
}
function createDateTimeFormatShell(createArgsProvider, transformOptions = identity) {
  const internalsMap = /* @__PURE__ */ new WeakMap();
  function getInternals(format) {
    const internals = internalsMap.get(format);
    return internals || throwTypeError("Invalid calling context"), internals;
  }
  class ShimDateTimeFormat {
    constructor(locales, options = /* @__PURE__ */ Object.create(null)) {
      const transformedOptions = transformOptions(options);
      const observedOptionNames = [];
      const trackedOptions = new Proxy(/* @__PURE__ */ Object.create(null), {
        get(_target, name) {
          const value = transformedOptions[name];
          return void 0 !== value && observedOptionNames.push(name), value;
        }
      });
      const baseFormat = new RawDateTimeFormat(locales, trackedOptions);
      const resolvedOptions = baseFormat.resolvedOptions();
      const copiedOptions = pluckProps(observedOptionNames, resolvedOptions);
      internalsMap.set(this, {
        Z: createArgsProvider({
          t: baseFormat,
          ze: resolvedOptions.locale,
          F: copiedOptions,
          Ce: transformedOptions
        }),
        t: baseFormat
      });
    }
    get format() {
      const internals = getInternals(this);
      return internals.qe || (internals.qe = (record) => {
        const [format, ...rest] = internals.Z.A(record);
        return format.format(...rest);
      });
    }
    formatToParts(record) {
      const { Z: argsProvider } = getInternals(this);
      const [format, ...rest] = argsProvider.A(record);
      return format.formatToParts(...rest);
    }
    resolvedOptions() {
      return getInternals(this).t.resolvedOptions();
    }
  }
  const { prototype } = ShimDateTimeFormat;
  function DateTimeFormat2(locales, options) {
    return new ShimDateTimeFormat(locales, options);
  }
  RawDateTimeFormat.prototype.formatRange && Object.defineProperties(prototype, createPropDescriptors({
    formatRange(record0, record1) {
      const { Z: argsProvider } = getInternals(this);
      const [format, epochMilli0, epochMilli1] = argsProvider.v(record0, record1);
      return format.formatRange(epochMilli0, epochMilli1);
    },
    formatRangeToParts(record0, record1) {
      const { Z: argsProvider } = getInternals(this);
      const [format, epochMilli0, epochMilli1] = argsProvider.v(record0, record1);
      return format.formatRangeToParts(epochMilli0, epochMilli1);
    }
  }));
  const rawStaticDescriptors = Object.getOwnPropertyDescriptors(RawDateTimeFormat);
  return rawStaticDescriptors.prototype.value = prototype, Object.defineProperties(DateTimeFormat2, rawStaticDescriptors), prototype.constructor = DateTimeFormat2, Object.defineProperties(prototype, createStringTagDescriptors("Intl.DateTimeFormat")), DateTimeFormat2;
}

// node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/apiHelpers.js
var PlainYearMonthBranding = "PlainYearMonth";
var PlainMonthDayBranding = "PlainMonthDay";
var PlainDateBranding = "PlainDate";
var PlainDateTimeBranding = "PlainDateTime";
var PlainTimeBranding = "PlainTime";
var ZonedDateTimeBranding = "ZonedDateTime";
var InstantBranding = "Instant";
var DurationBranding = "Duration";
function defineTemporalClass(branding, cls, getSlots, ...getterMaps) {
  return Object.defineProperties(cls, createNameDescriptors(branding)), Object.defineProperties(cls.prototype, createStringTagDescriptors("Temporal." + branding)), Object.defineProperties(cls.prototype, mapProps((getter) => ({
    get() {
      return getter(getSlots(this));
    },
    configurable: 1
  }), Object.assign({}, ...getterMaps))), cls;
}
var attachDebugString = "noop" === noop.name ? (instance) => {
  Object.defineProperty(instance, "_str_", {
    value: instance.toJSON()
  });
} : noop;
function invalidRecordType() {
  throwTypeError(invalidCallingContext);
}
function forbiddenValueOf2() {
  throwTypeError(forbiddenValueOf);
}
var yearMonthFieldGetters$1 = {
  era(slots) {
    return computeCalendarEraFields(slots.calendar, slots).era;
  },
  eraYear(slots) {
    return computeCalendarEraFields(slots.calendar, slots).eraYear;
  },
  year(slots) {
    return computeCalendarDateFields(slots.calendar, slots).year;
  },
  month(slots) {
    return computeCalendarDateFields(slots.calendar, slots).month;
  },
  monthCode(slots) {
    return computeCalendarMonthCode(slots.calendar, slots);
  }
};
var dateFieldGetters$1 = {
  era(slots) {
    return computeCalendarEraFields(slots.calendar, slots).era;
  },
  eraYear(slots) {
    return computeCalendarEraFields(slots.calendar, slots).eraYear;
  },
  year(slots) {
    return computeCalendarDateFields(slots.calendar, slots).year;
  },
  month(slots) {
    return computeCalendarDateFields(slots.calendar, slots).month;
  },
  monthCode(slots) {
    return computeCalendarMonthCode(slots.calendar, slots);
  },
  day(slots) {
    return computeCalendarDateFields(slots.calendar, slots).day;
  }
};
var monthDayFieldGetters$1 = {
  monthCode(slots) {
    return computeCalendarMonthCode(slots.calendar, slots);
  },
  day(slots) {
    return computeCalendarDateFields(slots.calendar, slots).day;
  }
};
var yearMonthDerivedGetters = {
  daysInMonth(slots) {
    return computeCalendarDaysInMonth(slots.calendar, slots);
  },
  daysInYear(slots) {
    return computeCalendarDaysInYear(slots.calendar, slots);
  },
  monthsInYear(slots) {
    return computeCalendarMonthsInYear(slots.calendar, slots);
  },
  inLeapYear(slots) {
    return computeCalendarInLeapYear(slots.calendar, slots);
  }
};
var dateDerivedGetters = {
  dayOfWeek(slots) {
    return computeIsoDayOfWeek(slots);
  },
  dayOfYear(slots) {
    return computeCalendarDayOfYear(slots.calendar, slots);
  },
  weekOfYear(slots) {
    return computeCalendarWeekOfYear(slots.calendar, slots);
  },
  yearOfWeek(slots) {
    return computeCalendarYearOfWeek(slots.calendar, slots);
  },
  daysInWeek() {
    return 7;
  },
  daysInMonth(slots) {
    return computeCalendarDaysInMonth(slots.calendar, slots);
  },
  daysInYear(slots) {
    return computeCalendarDaysInYear(slots.calendar, slots);
  },
  monthsInYear(slots) {
    return computeCalendarMonthsInYear(slots.calendar, slots);
  },
  inLeapYear(slots) {
    return computeCalendarInLeapYear(slots.calendar, slots);
  }
};
function createNativeGetters(shimGetters) {
  return createPropGetters(Object.keys(shimGetters));
}
createNativeGetters(yearMonthDerivedGetters), createNativeGetters(dateDerivedGetters);

// node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/classApi.js
function createIntlExtended(DateTimeFormat2) {
  return Object.defineProperties(Object.create(Intl), createPropDescriptors({
    DateTimeFormat: DateTimeFormat2
  }));
}
function createDateTimeFormatClass(getTemporalBrandingAndSlots2) {
  return createDateTimeFormatShell((internals) => {
    const getTemporalFormat = memoize((branding) => {
      let options;
      switch (branding) {
        case InstantBranding:
          options = transformInstantOptions(internals.F, 1);
          break;
        case PlainDateTimeBranding:
          options = applyPlainFormatTimeZone(transformDateTimeOptions(internals.F, 1));
          break;
        case PlainDateBranding:
          options = applyPlainFormatTimeZone(transformDateOptions(internals.F, 1));
          break;
        case PlainTimeBranding:
          options = applyPlainFormatTimeZone(transformTimeOptions(internals.F, 1));
          break;
        case PlainYearMonthBranding:
          options = applyPlainFormatTimeZone(transformYearMonthOptions(internals.F, 1));
          break;
        case PlainMonthDayBranding:
          options = applyPlainFormatTimeZone(transformMonthDayOptions(internals.F, 1));
          break;
        default:
          throwTypeError(invalidFormatType(branding));
      }
      return new RawDateTimeFormat(internals.ze, options);
    });
    return {
      A(formattable) {
        if (void 0 === formattable) {
          return [internals.t];
        }
        const brandingAndSlots = getTemporalBrandingAndSlots2(formattable);
        if (!brandingAndSlots) {
          return [internals.t, Number(formattable)];
        }
        const [branding, slots] = brandingAndSlots;
        const format = getTemporalFormat(branding);
        return checkTemporalDateTimeFormatCompatible(format, branding, slots), [format, temporalDateTimeToEpochMilli(branding, slots)];
      },
      v(start, end) {
        void 0 !== start && void 0 !== end || throwTypeError(mismatchingFormatTypes);
        const startBrandingAndSlots = getTemporalBrandingAndSlots2(start);
        const startEpochMilli = startBrandingAndSlots ? void 0 : Number(start);
        const endBrandingAndSlots = getTemporalBrandingAndSlots2(end);
        const endEpochMilli = endBrandingAndSlots ? void 0 : Number(end);
        if (!startBrandingAndSlots && !endBrandingAndSlots) {
          return [internals.t, startEpochMilli, endEpochMilli];
        }
        startBrandingAndSlots && endBrandingAndSlots || throwTypeError(mismatchingFormatTypes);
        const [startBranding, startSlots] = startBrandingAndSlots;
        const [endBranding, endSlots] = endBrandingAndSlots;
        startBranding !== endBranding && throwTypeError(mismatchingFormatTypes);
        const format = getTemporalFormat(startBranding);
        return checkTemporalDateTimeFormatCompatible(format, startBranding, startSlots), checkTemporalDateTimeFormatCompatible(format, startBranding, endSlots), [format, temporalDateTimeToEpochMilli(startBranding, startSlots), temporalDateTimeToEpochMilli(startBranding, endSlots)];
      }
    };
  });
}
function checkTemporalDateTimeFormatCompatible(format, branding, slots) {
  switch (branding) {
    case InstantBranding:
    case PlainTimeBranding:
      return;
    case PlainDateTimeBranding:
    case PlainDateBranding:
      return void checkResolvedCalendarCompatible(format, slots);
    case PlainYearMonthBranding:
    case PlainMonthDayBranding:
      return void checkResolvedCalendarCompatible(format, slots, 1);
    default:
      throwTypeError(invalidFormatType(branding));
  }
}
function temporalDateTimeToEpochMilli(branding, slots) {
  switch (branding) {
    case InstantBranding:
      return getEpochMilli(slots);
    case PlainDateTimeBranding:
      return isoDateTimeToEpochMilli(slots);
    case PlainDateBranding:
    case PlainYearMonthBranding:
    case PlainMonthDayBranding:
      return isoDateToEpochMilli(slots);
    case PlainTimeBranding:
      return timeFieldsToMilli(slots);
    default:
      throwTypeError(invalidFormatType(branding));
  }
}

// node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/classApi-basic.js
function resolveBasicCalendarId(rawCalendarId) {
  const lowerRawCalendarId = requireString(rawCalendarId).toLowerCase();
  return lowerRawCalendarId === isoCalendarId ? isoCalendarImpl : lowerRawCalendarId === gregoryCalendarId ? gregoryCalendarImpl : void throwRangeError(exoticCalendarRequired(rawCalendarId, "temporal-polyfill/full"));
}
function resolveBasicCalendarArg(rawCalendarId = isoCalendarId) {
  return resolveBasicCalendarId(rawCalendarId);
}
var zonedDateTimeSlotsMap = /* @__PURE__ */ new WeakMap();
var ZonedDateTime = /* @__PURE__ */ defineTemporalClass(ZonedDateTimeBranding, class {
  constructor(epochNanoseconds, timeZoneId, calendar = void 0) {
    const epochNano = checkEpochNanoInBounds(toBigInt(epochNanoseconds));
    const timeZone = queryTimeZone(refineTimeZoneId(timeZoneId));
    const calendarImpl = resolveBasicCalendarArg(calendar);
    initZonedDateTime(this, createZonedEpochNanoSlots(epochNano, timeZone, calendarImpl));
  }
  static from(arg, options = void 0) {
    return createZonedDateTime(toZonedDateTimeSlots(arg, options));
  }
  static compare(arg0, arg1) {
    return compareZonedEpochSlots(toZonedDateTimeSlots(arg0), toZonedDateTimeSlots(arg1));
  }
  get calendarId() {
    return getCalendarSlotId(getZonedDateTimeSlots(this).calendar);
  }
  get timeZoneId() {
    return getZonedDateTimeSlots(this).timeZone.id;
  }
  get epochMilliseconds() {
    return getEpochMilli(getZonedDateTimeSlots(this));
  }
  get epochNanoseconds() {
    return getEpochNano(getZonedDateTimeSlots(this));
  }
  get offset() {
    return formatOffsetNano(zonedEpochSlotsToIso(getZonedDateTimeSlots(this)).offsetNanoseconds);
  }
  get offsetNanoseconds() {
    return zonedEpochSlotsToIso(getZonedDateTimeSlots(this)).offsetNanoseconds;
  }
  get hoursInDay() {
    return computeZonedHoursInDay(getZonedDateTimeSlots(this));
  }
  with(mod, options = void 0) {
    return createZonedDateTime(mergeZonedDateTimeFields(getZonedDateTimeSlots(this), validateBag(mod), options));
  }
  withCalendar(calendarArg) {
    return createZonedDateTime(__spreadProps(__spreadValues({}, getZonedDateTimeSlots(this)), {
      calendar: refineCalendarArg(calendarArg)
    }));
  }
  withTimeZone(timeZoneArg) {
    return createZonedDateTime(__spreadProps(__spreadValues({}, getZonedDateTimeSlots(this)), {
      timeZone: queryTimeZone(refineTimeZoneArg(timeZoneArg))
    }));
  }
  withPlainTime(plainTimeArg = void 0) {
    return createZonedDateTime(zonedDateTimeWithPlainTime(getZonedDateTimeSlots(this), optionalToPlainTimeFields(plainTimeArg)));
  }
  add(durationArg, options = void 0) {
    const slots = getZonedDateTimeSlots(this);
    return createZonedDateTime(moveZonedEpochSlots(slots, toDurationSlots(durationArg), options));
  }
  subtract(durationArg, options = void 0) {
    const slots = getZonedDateTimeSlots(this);
    return createZonedDateTime(moveZonedEpochSlots(slots, negateDurationFields(toDurationSlots(durationArg)), options));
  }
  until(otherArg, options = void 0) {
    const slots = getZonedDateTimeSlots(this);
    const other = toZonedDateTimeSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(createDurationSlots(diffZonedDateTimes(0, calendar, slots, other, options)));
  }
  since(otherArg, options = void 0) {
    const slots = getZonedDateTimeSlots(this);
    const other = toZonedDateTimeSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(createDurationSlots(diffZonedDateTimes(1, calendar, slots, other, options)));
  }
  round(options) {
    const slots = getZonedDateTimeSlots(this);
    const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options);
    return createZonedDateTime(roundZonedEpochSlotsToUnit(slots, smallestUnit, roundingInc, roundingMode));
  }
  startOfDay() {
    return createZonedDateTime(computeZonedStartOfDay(getZonedDateTimeSlots(this)));
  }
  equals(otherArg) {
    return zonedDateTimesEqual(getZonedDateTimeSlots(this), toZonedDateTimeSlots(otherArg));
  }
  toInstant() {
    return createInstant(zonedDateTimeToInstant(getZonedDateTimeSlots(this)));
  }
  toPlainDateTime() {
    return createPlainDateTime(zonedDateTimeToPlainDateTime(getZonedDateTimeSlots(this)));
  }
  toPlainDate() {
    return createPlainDate(zonedDateTimeToPlainDate(getZonedDateTimeSlots(this)));
  }
  toPlainTime() {
    return createPlainTime(zonedDateTimeToPlainTime(getZonedDateTimeSlots(this)));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getZonedDateTimeSlots(this);
    const format = new RawDateTimeFormat(locales, applyZonedFormatTimeZone(transformZonedOptions(options), getZonedTimeZoneId(slots)));
    return checkResolvedCalendarCompatible(format, slots), format.format(getEpochMilli(slots));
  }
  toString(options = void 0) {
    return formatZonedDateTimeIso(getZonedDateTimeSlots(this), options);
  }
  toJSON() {
    return formatZonedDateTimeIso(getZonedDateTimeSlots(this));
  }
  getTimeZoneTransition(options) {
    const slots = getZonedDateTimeSlots(this);
    const newEpochNano = getTimeZoneTransitionEpochNanoseconds(slots, options);
    return newEpochNano ? createZonedDateTime(__spreadProps(__spreadValues({}, slots), {
      epochNanoseconds: newEpochNano
    })) : null;
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getZonedDateTimeIsoSlots, dateFieldGetters$1, dateDerivedGetters, timeGetters);
function createZonedDateTime(slots) {
  return initZonedDateTime(Object.create(ZonedDateTime.prototype), slots);
}
function getZonedDateTimeSlots(obj) {
  return getZonedDateTimeSlotsIfPresent(obj) || invalidRecordType();
}
function getZonedDateTimeIsoSlots(obj) {
  const slots = getZonedDateTimeSlots(obj);
  return __spreadProps(__spreadValues({}, zonedEpochSlotsToIso(slots)), {
    calendar: slots.calendar
  });
}
function getZonedDateTimeSlotsIfPresent(obj) {
  return zonedDateTimeSlotsMap.get(obj);
}
function toZonedDateTimeSlots(arg, options) {
  if (isObjectLike2(arg)) {
    const ownSlots = getZonedDateTimeSlotsIfPresent(arg);
    if (ownSlots) {
      return refineZonedFieldOptions(options), ownSlots;
    }
    const calendar = getCalendarFromBag(arg);
    return refineZonedDateTimeObjectLike(refineTimeZoneArg, calendar, arg, options);
  }
  return parseZonedDateTime(arg, resolveBasicCalendarId, options);
}
function initZonedDateTime(instance, slots) {
  return zonedDateTimeSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
function refineTimeZoneArg(arg) {
  if (isObjectLike2(arg)) {
    const slots = getZonedDateTimeSlotsIfPresent(arg);
    return slots || throwTypeError(invalidTimeZone(arg)), slots.timeZone.id;
  }
  return ((arg2) => resolveTimeZoneId(parseTimeZoneId(requireString(arg2))))(arg);
}
var instantSlotsMap = /* @__PURE__ */ new WeakMap();
var Instant = /* @__PURE__ */ defineTemporalClass(InstantBranding, class {
  constructor(epochNanoseconds) {
    const epochNano = checkEpochNanoInBounds(toBigInt(epochNanoseconds));
    initInstant(this, createEpochNanoSlots(epochNano));
  }
  static from(arg) {
    return createInstant(toInstantSlots(arg));
  }
  static fromEpochMilliseconds(epochMilli) {
    return createInstant(epochMilliToInstant(epochMilli));
  }
  static fromEpochNanoseconds(epochNano) {
    return createInstant(epochNanoToInstant(epochNano));
  }
  static compare(a, b) {
    return compareZonedEpochSlots(toInstantSlots(a), toInstantSlots(b));
  }
  get epochMilliseconds() {
    return getEpochMilli(getInstantSlots(this));
  }
  get epochNanoseconds() {
    return getEpochNano(getInstantSlots(this));
  }
  add(durationArg) {
    const slots = getInstantSlots(this);
    return createInstant(createEpochNanoSlots(moveEpochNano(slots.epochNanoseconds, toDurationSlots(durationArg))));
  }
  subtract(durationArg) {
    const slots = getInstantSlots(this);
    return createInstant(createEpochNanoSlots(moveEpochNano(slots.epochNanoseconds, negateDurationFields(toDurationSlots(durationArg)))));
  }
  until(otherArg, options = void 0) {
    return createDuration(diffInstants(0, getInstantSlots(this), toInstantSlots(otherArg), options));
  }
  since(otherArg, options = void 0) {
    return createDuration(diffInstants(1, getInstantSlots(this), toInstantSlots(otherArg), options));
  }
  round(options) {
    const slots = getInstantSlots(this);
    const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options, 5, 1);
    return createInstant(createEpochNanoSlots(roundBigNanoToDayOriginInc(slots.epochNanoseconds, computeBigNanoInc(smallestUnit, roundingInc), roundingMode)));
  }
  equals(otherArg) {
    return instantsEqual(getInstantSlots(this), toInstantSlots(otherArg));
  }
  toZonedDateTimeISO(timeZoneArg) {
    return createZonedDateTime(instantToZonedDateTime(getInstantSlots(this), queryTimeZone(refineTimeZoneArg(timeZoneArg))));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getInstantSlots(this);
    return new RawDateTimeFormat(locales, transformInstantOptions(options)).format(getEpochMilli(slots));
  }
  toString(options = void 0) {
    return formatInstantIso(refineTimeZoneArg, getInstantSlots(this), options);
  }
  toJSON() {
    return formatInstantIso(refineTimeZoneArg, getInstantSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
});
function createInstant(slots) {
  return initInstant(Object.create(Instant.prototype), slots);
}
function getInstantSlots(obj) {
  return getInstantSlotsIfPresent(obj) || invalidRecordType();
}
function getInstantSlotsIfPresent(obj) {
  return instantSlotsMap.get(obj);
}
function toInstantSlots(arg) {
  if (isObjectLike2(arg)) {
    const ownSlots = getInstantSlotsIfPresent(arg);
    if (ownSlots) {
      return ownSlots;
    }
    const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
    if (zonedDateTimeSlots) {
      return createEpochNanoSlots(zonedDateTimeSlots.epochNanoseconds);
    }
  }
  return parseInstant(arg);
}
var { toTemporalInstant } = {
  toTemporalInstant() {
    const epochMilli = Date.prototype.valueOf.call(this);
    return createInstant(createEpochNanoSlots(BigInt(requireNumberIsInteger(epochMilli)) * bigNanoInMilli));
  }
};
function initInstant(instance, slots) {
  return instantSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
var plainMonthDaySlotsMap = /* @__PURE__ */ new WeakMap();
var PlainMonthDay = /* @__PURE__ */ defineTemporalClass(PlainMonthDayBranding, class {
  constructor(isoMonth, isoDay, calendar = void 0, referenceIsoYear) {
    const isoMonthInt = toIntegerWithTrunc(isoMonth);
    const isoDayInt = toIntegerWithTrunc(isoDay);
    const calendarImpl = resolveBasicCalendarArg(calendar);
    const isoYearInt = toIntegerWithTrunc(referenceIsoYear ?? isoEpochFirstLeapYear);
    const fields = checkIsoDateInBounds(validateIsoDateFields({
      year: isoYearInt,
      month: isoMonthInt,
      day: isoDayInt
    }));
    initPlainMonthDay(this, createDateSlots(fields, calendarImpl));
  }
  static from(arg, options = void 0) {
    return createPlainMonthDay(toPlainMonthDaySlots(arg, options));
  }
  get calendarId() {
    return getCalendarSlotId(getPlainMonthDaySlots(this).calendar);
  }
  with(mod, options = void 0) {
    return createPlainMonthDay(mergePlainMonthDayFields(getPlainMonthDaySlots(this), validateBag(mod), options));
  }
  equals(otherArg) {
    return plainMonthDaysEqual(getPlainMonthDaySlots(this), toPlainMonthDaySlots(otherArg));
  }
  toPlainDate(bag) {
    const slots = getPlainMonthDaySlots(this);
    return createPlainDate(convertPlainMonthDayToDate(slots.calendar, this, bag));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getPlainMonthDaySlots(this);
    const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformMonthDayOptions(options)));
    return checkResolvedCalendarCompatible(format, slots, 1), format.format(isoDateToEpochMilli(slots));
  }
  toString(options = void 0) {
    return formatPlainMonthDayIso(getPlainMonthDaySlots(this), options);
  }
  toJSON() {
    return formatPlainMonthDayIso(getPlainMonthDaySlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getPlainMonthDaySlots, monthDayFieldGetters$1);
function createPlainMonthDay(slots) {
  return initPlainMonthDay(Object.create(PlainMonthDay.prototype), slots);
}
function getPlainMonthDaySlots(obj) {
  return getPlainMonthDaySlotsIfPresent(obj) || invalidRecordType();
}
function getPlainMonthDaySlotsIfPresent(obj) {
  return plainMonthDaySlotsMap.get(obj);
}
function toPlainMonthDaySlots(arg, options) {
  if (isObjectLike2(arg)) {
    const ownSlots = getPlainMonthDaySlotsIfPresent(arg);
    if (ownSlots) {
      return refineOverflowOptions(options), ownSlots;
    }
    const calendarMaybe = extractCalendarFromBag(arg);
    return refinePlainMonthDayObjectLike(void 0 === calendarMaybe ? isoCalendarImpl : calendarMaybe, void 0 === calendarMaybe, arg, options);
  }
  const res = parsePlainMonthDay(arg, resolveBasicCalendarId);
  return refineOverflowOptions(options), res;
}
function initPlainMonthDay(instance, slots) {
  return plainMonthDaySlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
var plainYearMonthSlotsMap = /* @__PURE__ */ new WeakMap();
var PlainYearMonth = /* @__PURE__ */ defineTemporalClass(PlainYearMonthBranding, class {
  constructor(isoYear, isoMonth, calendar = void 0, referenceIsoDay) {
    const isoYearInt = toIntegerWithTrunc(isoYear);
    const isoMonthInt = toIntegerWithTrunc(isoMonth);
    const calendarImpl = resolveBasicCalendarArg(calendar);
    const isoDayInt = toIntegerWithTrunc(referenceIsoDay ?? 1);
    const fields = checkIsoYearMonthInBounds(validateIsoDateFields({
      year: isoYearInt,
      month: isoMonthInt,
      day: isoDayInt
    }));
    initPlainYearMonth(this, createDateSlots(fields, calendarImpl));
  }
  static from(arg, options = void 0) {
    return createPlainYearMonth(toPlainYearMonthSlots(arg, options));
  }
  static compare(arg0, arg1) {
    return compareIsoDateFields(toPlainYearMonthSlots(arg0), toPlainYearMonthSlots(arg1));
  }
  get calendarId() {
    return getCalendarSlotId(getPlainYearMonthSlots(this).calendar);
  }
  with(mod, options = void 0) {
    return createPlainYearMonth(mergePlainYearMonthFields(getPlainYearMonthSlots(this), validateBag(mod), options));
  }
  add(durationArg, options = void 0) {
    const slots = getPlainYearMonthSlots(this);
    return createPlainYearMonth(createDateSlots(moveYearMonth(0, slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
  }
  subtract(durationArg, options = void 0) {
    const slots = getPlainYearMonthSlots(this);
    return createPlainYearMonth(createDateSlots(moveYearMonth(1, slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
  }
  until(otherArg, options = void 0) {
    const slots = getPlainYearMonthSlots(this);
    const other = toPlainYearMonthSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(diffPlainYearMonth(0, calendar, slots, other, options));
  }
  since(otherArg, options = void 0) {
    const slots = getPlainYearMonthSlots(this);
    const other = toPlainYearMonthSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(diffPlainYearMonth(1, calendar, slots, other, options));
  }
  equals(otherArg) {
    return plainYearMonthsEqual(getPlainYearMonthSlots(this), toPlainYearMonthSlots(otherArg));
  }
  toPlainDate(bag) {
    const slots = getPlainYearMonthSlots(this);
    return createPlainDate(convertPlainYearMonthToDate(slots.calendar, this, bag));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getPlainYearMonthSlots(this);
    const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformYearMonthOptions(options)));
    return checkResolvedCalendarCompatible(format, slots, 1), format.format(isoDateToEpochMilli(slots));
  }
  toString(options = void 0) {
    return formatPlainYearMonthIso(getPlainYearMonthSlots(this), options);
  }
  toJSON() {
    return formatPlainYearMonthIso(getPlainYearMonthSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getPlainYearMonthSlots, yearMonthFieldGetters$1, yearMonthDerivedGetters);
function createPlainYearMonth(slots) {
  return initPlainYearMonth(Object.create(PlainYearMonth.prototype), slots);
}
function getPlainYearMonthSlots(obj) {
  return getPlainYearMonthSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainYearMonthSlotsIfPresent(obj) {
  return plainYearMonthSlotsMap.get(obj);
}
function toPlainYearMonthSlots(arg, options) {
  if (isObjectLike2(arg)) {
    const ownSlots = getPlainYearMonthSlotsIfPresent(arg);
    if (ownSlots) {
      return refineOverflowOptions(options), ownSlots;
    }
    const calendar = getCalendarFromBag(arg);
    return refinePlainYearMonthObjectLike(calendar, arg, options);
  }
  const res = parsePlainYearMonth(arg, resolveBasicCalendarId);
  return refineOverflowOptions(options), res;
}
function initPlainYearMonth(instance, slots) {
  return plainYearMonthSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
function getTemporalBrandingAndSlots(obj) {
  if (!isObjectLike2(obj)) {
    return;
  }
  let slots = getInstantSlotsIfPresent(obj);
  return slots ? [InstantBranding, slots] : (slots = getZonedDateTimeSlotsIfPresent(obj), slots ? [ZonedDateTimeBranding, slots] : (slots = getPlainDateTimeSlotsIfPresent(obj), slots ? [PlainDateTimeBranding, slots] : (slots = getPlainDateSlotsIfPresent(obj), slots ? [PlainDateBranding, slots] : (slots = getPlainTimeSlotsIfPresent(obj), slots ? [PlainTimeBranding, slots] : (slots = getPlainYearMonthSlotsIfPresent(obj), slots ? [PlainYearMonthBranding, slots] : (slots = getPlainMonthDaySlotsIfPresent(obj), slots ? [PlainMonthDayBranding, slots] : (slots = getDurationSlotsIfPresent(obj), slots ? [DurationBranding, slots] : void 0)))))));
}
function validateBag(bag) {
  return (getTemporalBrandingAndSlots(bag) || void 0 !== bag.calendar || void 0 !== bag.timeZone) && throwTypeError(invalidBag), bag;
}
var plainTimeSlotsMap = /* @__PURE__ */ new WeakMap();
var PlainTime = /* @__PURE__ */ defineTemporalClass(PlainTimeBranding, class {
  constructor(hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0) {
    const fields = validateTimeFields(mapProps(toIntegerWithTrunc, {
      hour,
      minute,
      second,
      millisecond,
      microsecond,
      nanosecond
    }));
    initPlainTime(this, createTimeSlots(fields));
  }
  static from(arg, options = void 0) {
    return createPlainTime(toPlainTimeSlots(arg, options));
  }
  static compare(arg0, arg1) {
    return compareTimeFields(toPlainTimeSlots(arg0), toPlainTimeSlots(arg1));
  }
  with(mod, options = void 0) {
    return createPlainTime(mergePlainTimeFields(getPlainTimeSlots(this), validateBag(mod), options));
  }
  add(durationArg) {
    const slots = getPlainTimeSlots(this);
    return createPlainTime(moveTime(slots, toDurationSlots(durationArg))[0]);
  }
  subtract(durationArg) {
    const slots = getPlainTimeSlots(this);
    return createPlainTime(moveTime(slots, negateDurationFields(toDurationSlots(durationArg)))[0]);
  }
  until(otherArg, options = void 0) {
    return createDuration(diffPlainTimes(0, getPlainTimeSlots(this), toPlainTimeSlots(otherArg), options));
  }
  since(otherArg, options = void 0) {
    return createDuration(diffPlainTimes(1, getPlainTimeSlots(this), toPlainTimeSlots(otherArg), options));
  }
  round(options) {
    const slots = getPlainTimeSlots(this);
    const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options, 5);
    return createPlainTime(roundTimeToNano(slots, computeNanoInc(smallestUnit, roundingInc), roundingMode)[0]);
  }
  equals(other) {
    return plainTimesEqual(getPlainTimeSlots(this), toPlainTimeSlots(other));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getPlainTimeSlots(this);
    return new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformTimeOptions(options))).format(timeFieldsToMilli(slots));
  }
  toString(options = void 0) {
    return formatPlainTimeIso(getPlainTimeSlots(this), options);
  }
  toJSON() {
    return formatPlainTimeIso(getPlainTimeSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getPlainTimeSlots, timeGetters);
function createPlainTime(slots) {
  return initPlainTime(Object.create(PlainTime.prototype), slots);
}
function getPlainTimeSlots(obj) {
  return getPlainTimeSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainTimeSlotsIfPresent(obj) {
  return plainTimeSlotsMap.get(obj);
}
function toPlainTimeSlots(arg, options) {
  if (isObjectLike2(arg)) {
    const ownSlots = getPlainTimeSlotsIfPresent(arg);
    if (ownSlots) {
      return refineOverflowOptions(options), ownSlots;
    }
    const dateTimeSlots = getPlainDateTimeSlotsIfPresent(arg);
    if (dateTimeSlots) {
      return refineOverflowOptions(options), createTimeSlots(dateTimeSlots);
    }
    const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
    return zonedDateTimeSlots ? (refineOverflowOptions(options), zonedDateTimeToPlainTime(zonedDateTimeSlots)) : refinePlainTimeObjectLike(arg, options);
  }
  const timeSlots = parsePlainTime(arg);
  return refineOverflowOptions(options), timeSlots;
}
function optionalToPlainTimeFields(timeArg) {
  return void 0 === timeArg ? void 0 : toPlainTimeSlots(timeArg);
}
function initPlainTime(instance, slots) {
  return plainTimeSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
var plainDateTimeSlotsMap = /* @__PURE__ */ new WeakMap();
var PlainDateTime = /* @__PURE__ */ defineTemporalClass(PlainDateTimeBranding, class {
  constructor(isoYear, isoMonth, isoDay, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0, calendar = void 0) {
    const fields = checkIsoDateTimeInBounds(validateIsoDateTimeFields(mapProps(toIntegerWithTrunc, {
      year: isoYear,
      month: isoMonth,
      day: isoDay,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
      nanosecond
    })));
    const calendarImpl = resolveBasicCalendarArg(calendar);
    initPlainDateTime(this, createDateTimeSlots(fields, calendarImpl));
  }
  static from(arg, options = void 0) {
    return createPlainDateTime(toPlainDateTimeSlots(arg, options));
  }
  static compare(arg0, arg1) {
    const slots0 = toPlainDateTimeSlots(arg0);
    const slots1 = toPlainDateTimeSlots(arg1);
    return compareIsoDateTimeFields(slots0, slots1);
  }
  get calendarId() {
    return getCalendarSlotId(getPlainDateTimeSlots(this).calendar);
  }
  with(mod, options = void 0) {
    return createPlainDateTime(mergePlainDateTimeFields(getPlainDateTimeSlots(this), validateBag(mod), options));
  }
  withCalendar(calendarArg) {
    const slots = getPlainDateTimeSlots(this);
    return createPlainDateTime(createDateTimeSlots(slots, refineCalendarArg(calendarArg)));
  }
  withPlainTime(plainTimeArg = void 0) {
    const slots = getPlainDateTimeSlots(this);
    return createPlainDateTime(createPlainDateTimeFromRefinedFields(slots, optionalToPlainTimeFields(plainTimeArg), slots.calendar));
  }
  add(durationArg, options = void 0) {
    const slots = getPlainDateTimeSlots(this);
    return createPlainDateTime(createDateTimeSlots(moveDateTime(slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
  }
  subtract(durationArg, options = void 0) {
    const slots = getPlainDateTimeSlots(this);
    return createPlainDateTime(createDateTimeSlots(moveDateTime(slots.calendar, slots, negateDurationFields(toDurationSlots(durationArg)), options), slots.calendar));
  }
  until(otherArg, options = void 0) {
    const slots = getPlainDateTimeSlots(this);
    const other = toPlainDateTimeSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(diffPlainDateTimes(0, calendar, slots, other, options));
  }
  since(otherArg, options = void 0) {
    const slots = getPlainDateTimeSlots(this);
    const other = toPlainDateTimeSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(diffPlainDateTimes(1, calendar, slots, other, options));
  }
  round(options) {
    const slots = getPlainDateTimeSlots(this);
    const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options);
    return createPlainDateTime(createDateTimeSlots(roundDateTimeToNano(slots, computeNanoInc(smallestUnit, roundingInc), roundingMode), slots.calendar));
  }
  equals(otherArg) {
    return plainDateTimesEqual(getPlainDateTimeSlots(this), toPlainDateTimeSlots(otherArg));
  }
  toZonedDateTime(timeZoneArg, options = void 0) {
    return createZonedDateTime(plainDateTimeToZonedDateTime(getPlainDateTimeSlots(this), queryTimeZone(refineTimeZoneArg(timeZoneArg)), options));
  }
  toPlainDate() {
    const slots = getPlainDateTimeSlots(this);
    return createPlainDate(createDateSlots(slots, slots.calendar));
  }
  toPlainTime() {
    return createPlainTime(createTimeSlots(getPlainDateTimeSlots(this)));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getPlainDateTimeSlots(this);
    const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformDateTimeOptions(options)));
    return checkResolvedCalendarCompatible(format, slots), format.format(isoDateTimeToEpochMilli(slots));
  }
  toString(options = void 0) {
    return formatPlainDateTimeIso(getPlainDateTimeSlots(this), options);
  }
  toJSON() {
    return formatPlainDateTimeIso(getPlainDateTimeSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getPlainDateTimeSlots, dateFieldGetters$1, dateDerivedGetters, timeGetters);
function createPlainDateTime(slots) {
  return initPlainDateTime(Object.create(PlainDateTime.prototype), slots);
}
function getPlainDateTimeSlots(obj) {
  return getPlainDateTimeSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainDateTimeSlotsIfPresent(obj) {
  return plainDateTimeSlotsMap.get(obj);
}
function toPlainDateTimeSlots(arg, options) {
  if (isObjectLike2(arg)) {
    const ownSlots = getPlainDateTimeSlotsIfPresent(arg);
    if (ownSlots) {
      return refineOverflowOptions(options), ownSlots;
    }
    const dateSlots = getPlainDateSlotsIfPresent(arg);
    if (dateSlots) {
      return refineOverflowOptions(options), createDateTimeSlots(combineDateAndTime(dateSlots, timeFieldDefaults), dateSlots.calendar);
    }
    const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
    if (zonedDateTimeSlots) {
      return refineOverflowOptions(options), zonedDateTimeToPlainDateTime(zonedDateTimeSlots);
    }
    const calendar = getCalendarFromBag(arg);
    return refinePlainDateTimeObjectLike(calendar, arg, options);
  }
  const res = parsePlainDateTime(arg, resolveBasicCalendarId);
  return refineOverflowOptions(options), res;
}
function initPlainDateTime(instance, slots) {
  return plainDateTimeSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
var plainDateSlotsMap = /* @__PURE__ */ new WeakMap();
var PlainDate = /* @__PURE__ */ defineTemporalClass(PlainDateBranding, class {
  constructor(isoYear, isoMonth, isoDay, calendar = void 0) {
    const fields = checkIsoDateInBounds(validateIsoDateFields(mapProps(toIntegerWithTrunc, {
      year: isoYear,
      month: isoMonth,
      day: isoDay
    })));
    const calendarImpl = resolveBasicCalendarArg(calendar);
    initPlainDate(this, createDateSlots(fields, calendarImpl));
  }
  static from(arg, options = void 0) {
    return createPlainDate(toPlainDateSlots(arg, options));
  }
  static compare(arg0, arg1) {
    return compareIsoDateFields(toPlainDateSlots(arg0), toPlainDateSlots(arg1));
  }
  get calendarId() {
    return getCalendarSlotId(getPlainDateSlots(this).calendar);
  }
  with(mod, options = void 0) {
    const slots = getPlainDateSlots(this);
    return createPlainDate(mergePlainDateFields(slots, validateBag(mod), options));
  }
  withCalendar(calendarArg) {
    const slots = getPlainDateSlots(this);
    return createPlainDate(createDateSlots(slots, refineCalendarArg(calendarArg)));
  }
  add(durationArg, options = void 0) {
    const slots = getPlainDateSlots(this);
    return createPlainDate(createDateSlots(moveDate(slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
  }
  subtract(durationArg, options = void 0) {
    const slots = getPlainDateSlots(this);
    return createPlainDate(createDateSlots(moveDate(slots.calendar, slots, negateDurationFields(toDurationSlots(durationArg)), options), slots.calendar));
  }
  until(otherArg, options = void 0) {
    const slots = getPlainDateSlots(this);
    const other = toPlainDateSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(diffPlainDates(0, calendar, slots, other, options));
  }
  since(otherArg, options = void 0) {
    const slots = getPlainDateSlots(this);
    const other = toPlainDateSlots(otherArg);
    const calendar = getCommonCalendar(slots.calendar, other.calendar);
    return createDuration(diffPlainDates(1, calendar, slots, other, options));
  }
  equals(otherArg) {
    return plainDatesEqual(getPlainDateSlots(this), toPlainDateSlots(otherArg));
  }
  toZonedDateTime(options) {
    const optionsObj = isObjectLike2(options) ? {
      timeZone: options.timeZone,
      plainTime: options.plainTime
    } : {
      timeZone: options
    };
    return createZonedDateTime(plainDateToZonedDateTime(refineTimeZoneArg, toPlainTimeSlots, getPlainDateSlots(this), optionsObj));
  }
  toPlainDateTime(plainTimeArg = void 0) {
    const slots = getPlainDateSlots(this);
    return createPlainDateTime(createPlainDateTimeFromRefinedFields(slots, optionalToPlainTimeFields(plainTimeArg), slots.calendar));
  }
  toPlainYearMonth() {
    const slots = getPlainDateSlots(this);
    return createPlainYearMonth(convertToPlainYearMonth(slots.calendar, this));
  }
  toPlainMonthDay() {
    const slots = getPlainDateSlots(this);
    return createPlainMonthDay(convertToPlainMonthDay(slots.calendar, this));
  }
  toLocaleString(locales = void 0, options = {}) {
    const slots = getPlainDateSlots(this);
    const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformDateOptions(options)));
    return checkResolvedCalendarCompatible(format, slots), format.format(isoDateToEpochMilli(slots));
  }
  toString(options = void 0) {
    return formatPlainDateIso(getPlainDateSlots(this), options);
  }
  toJSON() {
    return formatPlainDateIso(getPlainDateSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getPlainDateSlots, dateFieldGetters$1, dateDerivedGetters);
function createPlainDate(slots) {
  return initPlainDate(Object.create(PlainDate.prototype), slots);
}
function getPlainDateSlots(obj) {
  return getPlainDateSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainDateSlotsIfPresent(obj) {
  return plainDateSlotsMap.get(obj);
}
function toPlainDateSlots(arg, options) {
  if (isObjectLike2(arg)) {
    const ownSlots = getPlainDateSlotsIfPresent(arg);
    if (ownSlots) {
      return refineOverflowOptions(options), ownSlots;
    }
    const dateTimeSlots = getPlainDateTimeSlotsIfPresent(arg);
    if (dateTimeSlots) {
      return refineOverflowOptions(options), createDateSlots(dateTimeSlots, dateTimeSlots.calendar);
    }
    const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
    if (zonedDateTimeSlots) {
      return refineOverflowOptions(options), zonedDateTimeToPlainDate(zonedDateTimeSlots);
    }
    const calendar = getCalendarFromBag(arg);
    return refinePlainDateObjectLike(calendar, arg, options);
  }
  const res = parsePlainDate(arg, resolveBasicCalendarId);
  return refineOverflowOptions(options), res;
}
function initPlainDate(instance, slots) {
  return plainDateSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
function getCalendarFromBag(bag) {
  const calendar = extractCalendarFromBag(bag);
  return void 0 === calendar ? isoCalendarImpl : calendar;
}
function extractCalendarFromBag(bag) {
  const { calendar: calendarArg } = bag;
  if (void 0 !== calendarArg) {
    return refineCalendarArg(calendarArg);
  }
}
function refineCalendarArg(arg) {
  if (isObjectLike2(arg)) {
    const slots = getPlainDateSlotsIfPresent(arg) || getPlainDateTimeSlotsIfPresent(arg) || getZonedDateTimeSlotsIfPresent(arg) || getPlainMonthDaySlotsIfPresent(arg) || getPlainYearMonthSlotsIfPresent(arg);
    return slots || throwTypeError(invalidCalendar(arg)), slots.calendar;
  }
  return ((arg2) => resolveBasicCalendarId(parseCalendarId(requireString(arg2))))(arg);
}
var durationSlotsMap = /* @__PURE__ */ new WeakMap();
var Duration = /* @__PURE__ */ defineTemporalClass(DurationBranding, class {
  constructor(years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0) {
    const fields = validateDurationFields(mapProps(toStrictInteger, {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
      microseconds,
      nanoseconds
    }));
    initDuration(this, createDurationSlots(fields));
  }
  static from(arg) {
    return createDuration(toDurationSlots(arg));
  }
  static compare(durationArg0, durationArg1, options = void 0) {
    return compareDurations(refinePublicRelativeTo, toDurationSlots(durationArg0), toDurationSlots(durationArg1), options);
  }
  get sign() {
    return getDurationSlots(this).sign;
  }
  get blank() {
    return !getDurationSlots(this).sign;
  }
  with(mod) {
    return createDuration(mergeDurationFields(getDurationSlots(this), mod));
  }
  negated() {
    return createDuration(negateDuration(getDurationSlots(this)));
  }
  abs() {
    return createDuration(absDuration(getDurationSlots(this)));
  }
  add(otherArg, options = void 0) {
    return createDuration(addDurations(refinePublicRelativeTo, 0, getDurationSlots(this), toDurationSlots(otherArg), options));
  }
  subtract(otherArg, options = void 0) {
    return createDuration(addDurations(refinePublicRelativeTo, 1, getDurationSlots(this), toDurationSlots(otherArg), options));
  }
  round(roundTo) {
    return createDuration(roundDuration(refinePublicRelativeTo, getDurationSlots(this), roundTo));
  }
  total(totalOf) {
    return totalDuration(refinePublicRelativeTo, getDurationSlots(this), totalOf);
  }
  toLocaleString(locales = void 0, options) {
    const slots = getDurationSlots(this);
    return Intl.DurationFormat ? new Intl.DurationFormat(locales, options).format(slots) : formatDurationIso(slots, options);
  }
  toString(options = void 0) {
    return formatDurationIso(getDurationSlots(this), options);
  }
  toJSON() {
    return formatDurationIso(getDurationSlots(this));
  }
  valueOf() {
    return forbiddenValueOf2();
  }
}, getDurationSlots, durationGetters);
function createDuration(slots) {
  return initDuration(Object.create(Duration.prototype), slots);
}
function getDurationSlots(obj) {
  return getDurationSlotsIfPresent(obj) || invalidRecordType();
}
function getDurationSlotsIfPresent(obj) {
  return durationSlotsMap.get(obj);
}
function toDurationSlots(arg) {
  if (isObjectLike2(arg)) {
    return getDurationSlotsIfPresent(arg) || refineDurationObjectLike(arg);
  }
  return parseDuration(arg);
}
function refinePublicRelativeTo(relativeTo) {
  if (void 0 !== relativeTo) {
    if (isObjectLike2(relativeTo)) {
      const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(relativeTo);
      if (zonedDateTimeSlots) {
        return zonedDateTimeSlots;
      }
      const dateSlots = getPlainDateSlotsIfPresent(relativeTo);
      if (dateSlots) {
        return dateSlots;
      }
      const dateTimeSlots = getPlainDateTimeSlotsIfPresent(relativeTo);
      if (dateTimeSlots) {
        return createDateSlots(dateTimeSlots, dateTimeSlots.calendar);
      }
      const calendar = getCalendarFromBag(relativeTo);
      return refineMaybeZonedDateTimeObjectLike(refineTimeZoneArg, calendar, relativeTo);
    }
    return parseRelativeToSlots(relativeTo, resolveBasicCalendarId);
  }
}
function initDuration(instance, slots) {
  return durationSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
var Now = /* @__PURE__ */ Object.defineProperties({}, __spreadValues(__spreadValues({}, createStringTagDescriptors("Temporal.Now")), createPropDescriptors({
  timeZoneId() {
    return getCurrentTimeZoneId();
  },
  instant() {
    return createInstant(createEpochNanoSlots(getCurrentEpochNano()));
  },
  zonedDateTimeISO(timeZoneArg = getCurrentTimeZoneId()) {
    const timeZone = queryTimeZone(refineTimeZoneArg(timeZoneArg));
    return createZonedDateTime(createZonedEpochNanoSlots(getCurrentEpochNano(), timeZone));
  },
  plainDateTimeISO(timeZoneArg = getCurrentTimeZoneId()) {
    const isoDateTime = getCurrentIsoDateTime(queryTimeZone(refineTimeZoneArg(timeZoneArg)));
    return createPlainDateTime(createDateTimeSlots(isoDateTime));
  },
  plainDateISO(timeZoneArg = getCurrentTimeZoneId()) {
    const isoDateTime = getCurrentIsoDateTime(queryTimeZone(refineTimeZoneArg(timeZoneArg)));
    return createPlainDate(createDateSlots(isoDateTime));
  },
  plainTimeISO(timeZoneArg = getCurrentTimeZoneId()) {
    const isoDateTime = getCurrentIsoDateTime(queryTimeZone(refineTimeZoneArg(timeZoneArg)));
    return createPlainTime(createTimeSlots(isoDateTime));
  }
})));
var Temporal = /* @__PURE__ */ Object.defineProperties({}, __spreadValues(__spreadValues({}, createStringTagDescriptors("Temporal")), createPropDescriptors({
  PlainYearMonth,
  PlainMonthDay,
  PlainDate,
  PlainTime,
  PlainDateTime,
  ZonedDateTime,
  Instant,
  Duration,
  Now
})));
var DateTimeFormat = /* @__PURE__ */ createDateTimeFormatClass(getTemporalBrandingAndSlots);
var IntlExtended = /* @__PURE__ */ createIntlExtended(DateTimeFormat);

// node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/index.js
var Temporal2 = NativeTemporal || Temporal;
var IntlExport = NativeTemporal ? Intl : IntlExtended;
var toTemporalInstant2 = NativeTemporal ? Date.prototype.toTemporalInstant : toTemporalInstant;
export {
  IntlExport as Intl,
  Temporal2 as Temporal,
  toTemporalInstant2 as toTemporalInstant
};
