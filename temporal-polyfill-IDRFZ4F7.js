import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/temporal-polyfill@0.3.2/node_modules/temporal-polyfill/chunks/internal.js
function clampProp(e2, n2, t2, o2, r2) {
  return ba(n2, ((e3, n3) => {
    const t3 = e3[n3];
    if (void 0 === t3) {
      throw new TypeError(missingField(n3));
    }
    return t3;
  })(e2, n2), t2, o2, r2);
}
function ba(e2, n2, t2, o2, r2, i2) {
  const a2 = clampNumber(n2, t2, o2);
  if (r2 && n2 !== a2) {
    throw new RangeError(numberOutOfRange(e2, n2, t2, o2, i2));
  }
  return a2;
}
function s(e2) {
  return null !== e2 && /object|function/.test(typeof e2);
}
function on(e2, n2 = Map) {
  const t2 = new n2();
  return (n3, ...o2) => {
    if (t2.has(n3)) {
      return t2.get(n3);
    }
    const r2 = e2(n3, ...o2);
    return t2.set(n3, r2), r2;
  };
}
function r(e2) {
  return n({
    name: e2
  }, 1);
}
function n(n2, t2) {
  return e(((e2) => ({
    value: e2,
    configurable: 1,
    writable: !t2
  })), n2);
}
function t(n2) {
  return e(((e2) => ({
    get: e2,
    configurable: 1
  })), n2);
}
function o(e2) {
  return {
    [Symbol.toStringTag]: {
      value: e2,
      configurable: 1
    }
  };
}
function zipProps(e2, n2) {
  const t2 = {};
  let o2 = e2.length;
  for (const r2 of n2) {
    t2[e2[--o2]] = r2;
  }
  return t2;
}
function e(e2, n2, t2) {
  const o2 = {};
  for (const r2 in n2) {
    o2[r2] = e2(n2[r2], r2, t2);
  }
  return o2;
}
function P(e2, n2, t2) {
  const o2 = {};
  for (let r2 = 0; r2 < n2.length; r2++) {
    const i2 = n2[r2];
    o2[i2] = e2(i2, r2, t2);
  }
  return o2;
}
function remapProps(e2, n2, t2) {
  const o2 = {};
  for (let r2 = 0; r2 < e2.length; r2++) {
    o2[n2[r2]] = t2[e2[r2]];
  }
  return o2;
}
function nn(e2, n2) {
  const t2 = /* @__PURE__ */ Object.create(null);
  for (const o2 of e2) {
    t2[o2] = n2[o2];
  }
  return t2;
}
function hasAnyPropsByName(e2, n2) {
  for (const t2 of n2) {
    if (t2 in e2) {
      return 1;
    }
  }
  return 0;
}
function allPropsEqual(e2, n2, t2) {
  for (const o2 of e2) {
    if (n2[o2] !== t2[o2]) {
      return 0;
    }
  }
  return 1;
}
function zeroOutProps(e2, n2, t2) {
  const o2 = __spreadValues({}, t2);
  for (let t3 = 0; t3 < n2; t3++) {
    o2[e2[t3]] = 0;
  }
  return o2;
}
function gt(e2, ...n2) {
  return (...t2) => e2(...n2, ...t2);
}
function noop() {
}
function capitalize(e2) {
  return e2[0].toUpperCase() + e2.substring(1);
}
function sortStrings(e2) {
  return e2.slice().sort();
}
function padNumber(e2, n2) {
  return String(n2).padStart(e2, "0");
}
function compareNumbers(e2, n2) {
  return Math.sign(e2 - n2);
}
function clampNumber(e2, n2, t2) {
  return Math.min(Math.max(e2, n2), t2);
}
function divModFloor(e2, n2) {
  return [Math.floor(e2 / n2), modFloor(e2, n2)];
}
function modFloor(e2, n2) {
  return (e2 % n2 + n2) % n2;
}
function divModTrunc(e2, n2) {
  return [divTrunc(e2, n2), modTrunc(e2, n2)];
}
function divTrunc(e2, n2) {
  return Math.trunc(e2 / n2) || 0;
}
function modTrunc(e2, n2) {
  return e2 % n2 || 0;
}
function hasHalf(e2) {
  return 0.5 === Math.abs(e2 % 1);
}
function givenFieldsToBigNano(e2, n2, t2) {
  let o2 = 0, r2 = 0;
  for (let i3 = 0; i3 <= n2; i3++) {
    const n3 = e2[t2[i3]], a3 = Zu[i3], s2 = go / a3, [c2, u2] = divModTrunc(n3, s2);
    o2 += u2 * a3, r2 += c2;
  }
  const [i2, a2] = divModTrunc(o2, go);
  return [r2 + i2, a2];
}
function nanoToGivenFields(e2, n2, t2) {
  const o2 = {};
  for (let r2 = n2; r2 >= 0; r2--) {
    const n3 = Zu[r2];
    o2[t2[r2]] = divTrunc(e2, n3), e2 = modTrunc(e2, n3);
  }
  return o2;
}
function m(e2) {
  if (void 0 !== e2) {
    return d(e2);
  }
}
function g(e2) {
  if (void 0 !== e2) {
    return h(e2);
  }
}
function S(e2) {
  if (void 0 !== e2) {
    return T(e2);
  }
}
function h(e2) {
  return requireNumberIsPositive(T(e2));
}
function T(e2) {
  return _e(rl(e2));
}
function requirePropDefined(e2, n2) {
  if (null == n2) {
    throw new RangeError(missingField(e2));
  }
  return n2;
}
function oa(e2) {
  if (!s(e2)) {
    throw new TypeError(ru);
  }
  return e2;
}
function requireType(e2, n2, t2 = e2) {
  if (typeof n2 !== e2) {
    throw new TypeError(invalidEntity(t2, n2));
  }
  return n2;
}
function _e(e2, n2 = "number") {
  if (!Number.isInteger(e2)) {
    throw new RangeError(expectedInteger(n2, e2));
  }
  return e2 || 0;
}
function requireNumberIsPositive(e2, n2 = "number") {
  if (e2 <= 0) {
    throw new RangeError(expectedPositive(n2, e2));
  }
  return e2;
}
function tu(e2) {
  if ("symbol" == typeof e2) {
    throw new TypeError(ou);
  }
  return String(e2);
}
function toStringViaPrimitive(e2, n2) {
  return s(e2) ? String(e2) : d(e2, n2);
}
function toBigInt(e2) {
  if ("string" == typeof e2) {
    return BigInt(e2);
  }
  if ("bigint" != typeof e2) {
    throw new TypeError(invalidBigInt(e2));
  }
  return e2;
}
function toNumber(e2, n2 = "number") {
  if ("bigint" == typeof e2) {
    throw new TypeError(forbiddenBigIntToNumber(n2));
  }
  if (e2 = Number(e2), !Number.isFinite(e2)) {
    throw new RangeError(expectedFinite(n2, e2));
  }
  return e2;
}
function Za(e2, n2) {
  return Math.trunc(toNumber(e2, n2)) || 0;
}
function Ba(e2, n2) {
  return _e(toNumber(e2, n2), n2);
}
function toPositiveInteger(e2, n2) {
  return requireNumberIsPositive(Za(e2, n2), n2);
}
function createBigNano(e2, n2) {
  let [t2, o2] = divModTrunc(n2, go), r2 = e2 + t2;
  const i2 = Math.sign(r2);
  return i2 && i2 === -Math.sign(o2) && (r2 -= i2, o2 += i2 * go), [r2, o2];
}
function so(e2, n2, t2 = 1) {
  return createBigNano(e2[0] + n2[0] * t2, e2[1] + n2[1] * t2);
}
function Ta(e2, n2) {
  return createBigNano(e2[0], e2[1] + n2);
}
function va(e2, n2) {
  return so(n2, e2, -1);
}
function pa(e2, n2) {
  return compareNumbers(e2[0], n2[0]) || compareNumbers(e2[1], n2[1]);
}
function bigNanoOutside(e2, n2, t2) {
  return -1 === pa(e2, n2) || 1 === pa(e2, t2);
}
function bigIntToBigNano(e2, n2 = 1) {
  const t2 = BigInt(go / n2);
  return [Number(e2 / t2), Number(e2 % t2) * n2];
}
function Ge(e2, n2 = 1) {
  const t2 = go / n2, [o2, r2] = divModTrunc(e2, t2);
  return [o2, r2 * n2];
}
function bigNanoToBigInt(e2, n2 = 1) {
  const [t2, o2] = e2, r2 = Math.floor(o2 / n2), i2 = go / n2;
  return BigInt(t2) * BigInt(i2) + BigInt(r2);
}
function La(e2, n2 = 1, t2) {
  const [o2, r2] = e2, [i2, a2] = divModTrunc(r2, n2);
  return o2 * (go / n2) + (i2 + (t2 ? a2 / n2 : 0));
}
function Oa(e2) {
  return e2[0] + e2[1] / go;
}
function divModBigNano(e2, n2, t2 = divModFloor) {
  const [o2, r2] = e2, [i2, a2] = t2(r2, n2);
  return [o2 * (go / n2) + i2, a2];
}
function checkIsoYearMonthInBounds(e2) {
  return clampProp(e2, "isoYear", Nl, yl, 1), e2.isoYear === Nl ? clampProp(e2, "isoMonth", 4, 12, 1) : e2.isoYear === yl && clampProp(e2, "isoMonth", 1, 9, 1), e2;
}
function To(e2) {
  return Do(__spreadProps(__spreadValues(__spreadValues({}, e2), At), {
    isoHour: 12
  })), e2;
}
function Do(e2) {
  const n2 = clampProp(e2, "isoYear", Nl, yl, 1), t2 = n2 === Nl ? 1 : n2 === yl ? -1 : 0;
  return t2 && io(ma(__spreadProps(__spreadValues({}, e2), {
    isoDay: e2.isoDay + t2,
    isoNanosecond: e2.isoNanosecond - t2
  }))), e2;
}
function io(e2) {
  if (!e2 || bigNanoOutside(e2, Ml, Tl)) {
    throw new RangeError(Mu);
  }
  return e2;
}
function isoTimeFieldsToNano(e2) {
  return givenFieldsToBigNano(e2, 5, w)[1];
}
function nanoToIsoTimeAndDay(e2) {
  const [n2, t2] = divModFloor(e2, go);
  return [nanoToGivenFields(t2, 5, w), n2];
}
function epochNanoToSec(e2) {
  return epochNanoToSecMod(e2)[0];
}
function epochNanoToSecMod(e2) {
  return divModBigNano(e2, oo);
}
function isoToEpochMilli(e2) {
  return isoArgsToEpochMilli(e2.isoYear, e2.isoMonth, e2.isoDay, e2.isoHour, e2.isoMinute, e2.isoSecond, e2.isoMillisecond);
}
function ma(e2) {
  const n2 = isoToEpochMilli(e2);
  if (void 0 !== n2) {
    const [t2, o2] = divModTrunc(n2, Cu);
    return [t2, o2 * Ke + (e2.isoMicrosecond || 0) * ro + (e2.isoNanosecond || 0)];
  }
}
function isoToEpochNanoWithOffset(e2, n2) {
  const [t2, o2] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(e2) - n2);
  return io(ma(__spreadValues(__spreadProps(__spreadValues({}, e2), {
    isoDay: e2.isoDay + o2
  }), t2)));
}
function isoArgsToEpochSec(...e2) {
  return isoArgsToEpochMilli(...e2) / ku;
}
function isoArgsToEpochMilli(...e2) {
  const [n2, t2] = isoToLegacyDate(...e2), o2 = n2.valueOf();
  if (!isNaN(o2)) {
    return o2 - t2 * Cu;
  }
}
function isoToLegacyDate(e2, n2 = 1, t2 = 1, o2 = 0, r2 = 0, i2 = 0, a2 = 0) {
  const s2 = e2 === Nl ? 1 : e2 === yl ? -1 : 0, c2 = /* @__PURE__ */ new Date();
  return c2.setUTCHours(o2, r2, i2, a2), c2.setUTCFullYear(e2, n2 - 1, t2 + s2), [c2, s2];
}
function So(e2, n2) {
  let [t2, o2] = Ta(e2, n2);
  o2 < 0 && (o2 += go, t2 -= 1);
  const [r2, i2] = divModFloor(o2, Ke), [a2, s2] = divModFloor(i2, ro);
  return Pa(t2 * Cu + r2, a2, s2);
}
function Pa(e2, n2 = 0, t2 = 0) {
  const o2 = Math.ceil(Math.max(0, Math.abs(e2) - gl) / Cu) * Math.sign(e2), r2 = new Date(e2 - o2 * Cu);
  return zipProps(pl, [r2.getUTCFullYear(), r2.getUTCMonth() + 1, r2.getUTCDate() + o2, r2.getUTCHours(), r2.getUTCMinutes(), r2.getUTCSeconds(), r2.getUTCMilliseconds(), n2, t2]);
}
function hashIntlFormatParts(e2, n2) {
  if (n2 < -gl) {
    throw new RangeError(Mu);
  }
  const t2 = e2.formatToParts(n2), o2 = {};
  for (const e3 of t2) {
    o2[e3.type] = e3.value;
  }
  return o2;
}
function computeIsoDay(e2) {
  return e2.isoDay;
}
function computeIsoDateParts(e2) {
  return [e2.isoYear, e2.isoMonth, e2.isoDay];
}
function computeIsoMonthCodeParts(e2, n2) {
  return [n2, 0];
}
function computeIsoYearMonthForMonthDay(e2, n2) {
  if (!n2) {
    return [Pl, e2];
  }
}
function computeIsoFieldsFromParts(e2, n2, t2) {
  return {
    isoYear: e2,
    isoMonth: n2,
    isoDay: t2
  };
}
function fo() {
  return 7;
}
function computeIsoMonthsInYear() {
  return Fl;
}
function computeIsoDaysInMonth(e2, n2) {
  switch (n2) {
    case 2:
      return computeIsoInLeapYear(e2) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function computeIsoDaysInYear(e2) {
  return computeIsoInLeapYear(e2) ? 366 : 365;
}
function computeIsoInLeapYear(e2) {
  return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
}
function Ha(e2) {
  const [n2, t2] = isoToLegacyDate(e2.isoYear, e2.isoMonth, e2.isoDay);
  return modFloor(n2.getUTCDay() - t2, 7) || 7;
}
function computeIsoEraParts(e2) {
  return this.id === Xu ? (({ isoYear: e3 }) => e3 < 1 ? ["gregory-inverse", 1 - e3] : ["gregory", e3])(e2) : this.id === el ? Ol(e2) : [];
}
function computeJapaneseEraParts(e2) {
  const n2 = isoToEpochMilli(e2);
  if (n2 < El) {
    const { isoYear: n3 } = e2;
    return n3 < 1 ? ["japanese-inverse", 1 - n3] : ["japanese", n3];
  }
  const t2 = hashIntlFormatParts(bf(el), n2), { era: o2, eraYear: r2 } = parseIntlYear(t2, el);
  return [o2, r2];
}
function checkIsoDateTimeFields(e2) {
  return checkIsoDateFields(e2), constrainIsoTimeFields(e2, 1), e2;
}
function checkIsoDateFields(e2) {
  return constrainIsoDateFields(e2, 1), e2;
}
function isIsoDateFieldsValid(e2) {
  return allPropsEqual(ml, e2, constrainIsoDateFields(e2));
}
function constrainIsoDateFields(e2, n2) {
  const { isoYear: t2 } = e2, o2 = clampProp(e2, "isoMonth", 1, computeIsoMonthsInYear(), n2);
  return {
    isoYear: t2,
    isoMonth: o2,
    isoDay: clampProp(e2, "isoDay", 1, computeIsoDaysInMonth(t2, o2), n2)
  };
}
function constrainIsoTimeFields(e2, n2) {
  return zipProps(w, [clampProp(e2, "isoHour", 0, 23, n2), clampProp(e2, "isoMinute", 0, 59, n2), clampProp(e2, "isoSecond", 0, 59, n2), clampProp(e2, "isoMillisecond", 0, 999, n2), clampProp(e2, "isoMicrosecond", 0, 999, n2), clampProp(e2, "isoNanosecond", 0, 999, n2)]);
}
function dt(e2) {
  return void 0 === e2 ? 0 : Gl(oa(e2));
}
function je(e2, n2 = 0) {
  e2 = normalizeOptions(e2);
  const t2 = Vl(e2), o2 = _l(e2, n2);
  return [Gl(e2), o2, t2];
}
function refineDiffOptions(e2, n2, t2, o2 = 9, r2 = 0, i2 = 4) {
  n2 = normalizeOptions(n2);
  let a2 = $l(n2, o2, r2), s2 = parseRoundingIncInteger(n2), c2 = Xl(n2, i2);
  const u2 = xl(n2, o2, r2, 1);
  return null == a2 ? a2 = Math.max(t2, u2) : checkLargestSmallestUnit(a2, u2), s2 = refineRoundingInc(s2, u2, 1), e2 && (c2 = ((e3) => e3 < 4 ? (e3 + 2) % 4 : e3)(c2)), [a2, u2, s2, c2];
}
function refineRoundingOptions(e2, n2 = 6, t2) {
  let o2 = parseRoundingIncInteger(e2 = normalizeOptionsOrString(e2, bl));
  const r2 = Xl(e2, 7);
  let i2 = xl(e2, n2);
  return i2 = requirePropDefined(bl, i2), o2 = refineRoundingInc(o2, i2, void 0, t2), [i2, o2, r2];
}
function refineDateDisplayOptions(e2) {
  return Jl(normalizeOptions(e2));
}
function refineTimeDisplayOptions(e2, n2) {
  return refineTimeDisplayTuple(normalizeOptions(e2), n2);
}
function Ze(e2) {
  const n2 = normalizeOptionsOrString(e2, kl), t2 = refineChoiceOption(kl, Wl, n2, 0);
  if (!t2) {
    throw new RangeError(invalidEntity(kl, t2));
  }
  return t2;
}
function refineTimeDisplayTuple(e2, n2 = 4) {
  const t2 = refineSubsecDigits(e2);
  return [Xl(e2, 4), ...refineSmallestUnitAndSubsecDigits(xl(e2, n2), t2)];
}
function refineSmallestUnitAndSubsecDigits(e2, n2) {
  return null != e2 ? [Zu[e2], e2 < 4 ? 9 - 3 * e2 : -1] : [void 0 === n2 ? 1 : 10 ** (9 - n2), n2];
}
function parseRoundingIncInteger(e2) {
  const n2 = e2[Bl];
  return void 0 === n2 ? 1 : Za(n2, Bl);
}
function refineRoundingInc(e2, n2, t2, o2) {
  const r2 = o2 ? go : Zu[n2 + 1];
  if (r2) {
    const t3 = Zu[n2];
    if (r2 % ((e2 = ba(Bl, e2, 1, r2 / t3 - (o2 ? 0 : 1), 1)) * t3)) {
      throw new RangeError(invalidEntity(Bl, e2));
    }
  } else {
    e2 = ba(Bl, e2, 1, t2 ? 10 ** 9 : 1, 1);
  }
  return e2;
}
function refineSubsecDigits(e2) {
  let n2 = e2[Yl];
  if (void 0 !== n2) {
    if ("number" != typeof n2) {
      if ("auto" === tu(n2)) {
        return;
      }
      throw new RangeError(invalidEntity(Yl, n2));
    }
    n2 = ba(Yl, Math.floor(n2), 0, 9, 1);
  }
  return n2;
}
function normalizeOptions(e2) {
  return void 0 === e2 ? {} : oa(e2);
}
function normalizeOptionsOrString(e2, n2) {
  return "string" == typeof e2 ? {
    [n2]: e2
  } : oa(e2);
}
function fabricateOverflowOptions(e2) {
  return {
    overflow: Rl[e2]
  };
}
function refineUnitOption(e2, n2, t2 = 9, o2 = 0, r2) {
  let i2 = n2[e2];
  if (void 0 === i2) {
    return r2 ? o2 : void 0;
  }
  if (i2 = tu(i2), "auto" === i2) {
    return r2 ? o2 : null;
  }
  let a2 = Bu[i2];
  if (void 0 === a2 && (a2 = ul[i2]), void 0 === a2) {
    throw new RangeError(invalidChoice(e2, i2, Bu));
  }
  return ba(e2, a2, o2, t2, 1, Yu), a2;
}
function refineChoiceOption(e2, n2, t2, o2 = 0) {
  const r2 = t2[e2];
  if (void 0 === r2) {
    return o2;
  }
  const i2 = tu(r2), a2 = n2[i2];
  if (void 0 === a2) {
    throw new RangeError(invalidChoice(e2, i2, n2));
  }
  return a2;
}
function checkLargestSmallestUnit(e2, n2) {
  if (n2 > e2) {
    throw new RangeError(Eu);
  }
}
function xe(e2) {
  return {
    branding: Re,
    epochNanoseconds: e2
  };
}
function Xe(e2, n2, t2) {
  return {
    branding: _,
    calendar: t2,
    timeZone: n2,
    epochNanoseconds: e2
  };
}
function jt(e2, n2 = e2.calendar) {
  return __spreadValues({
    branding: x,
    calendar: n2
  }, nn(Il, e2));
}
function W(e2, n2 = e2.calendar) {
  return __spreadValues({
    branding: G,
    calendar: n2
  }, nn(Ca, e2));
}
function createPlainYearMonthSlots(e2, n2 = e2.calendar) {
  return __spreadValues({
    branding: Qt,
    calendar: n2
  }, nn(Ca, e2));
}
function createPlainMonthDaySlots(e2, n2 = e2.calendar) {
  return __spreadValues({
    branding: qt,
    calendar: n2
  }, nn(Ca, e2));
}
function St(e2) {
  return __spreadValues({
    branding: ft
  }, nn(hl, e2));
}
function pe(e2) {
  return __spreadValues({
    branding: A,
    sign: computeDurationSign(e2)
  }, nn(il, e2));
}
function I(e2) {
  return divModBigNano(e2.epochNanoseconds, Ke)[0];
}
function b(e2) {
  return bigNanoToBigInt(e2.epochNanoseconds);
}
function fa(e2) {
  return e2.epochNanoseconds;
}
function J(e2, n2, t2, o2, r2) {
  const i2 = getMaxDurationUnit(o2), [a2, s2] = ((e3, n3) => {
    const t3 = n3((e3 = normalizeOptionsOrString(e3, Sl))[Cl]);
    let o3 = Hl(e3);
    return o3 = requirePropDefined(Sl, o3), [o3, t3];
  })(r2, e2), c2 = Math.max(a2, i2);
  if (!s2 && isUniformUnit(c2, s2)) {
    return totalDayTimeDuration(o2, a2);
  }
  if (!s2) {
    throw new RangeError(vu);
  }
  if (!o2.sign) {
    return 0;
  }
  const [u2, l2, f2] = createMarkerSystem(n2, t2, s2), d2 = createMarkerToEpochNano(f2), m2 = createMoveMarker(f2), p2 = createDiffMarkers(f2), h2 = m2(l2, u2, o2);
  isZonedEpochSlots(s2) || (Do(u2), Do(h2));
  const I2 = p2(l2, u2, h2, a2);
  return isUniformUnit(a2, s2) ? totalDayTimeDuration(I2, a2) : ya(I2, d2(h2), a2, l2, u2, d2, m2);
}
function ya(e2, n2, t2, o2, r2, i2, a2) {
  const s2 = computeDurationSign(e2), [c2, u2] = clampRelativeDuration(o2, dl(t2, e2), t2, s2, r2, i2, a2), l2 = ja(n2, c2, u2);
  return e2[O[t2]] + l2 * s2;
}
function totalDayTimeDuration(e2, n2) {
  return La(durationFieldsToBigNano(e2), Zu[n2], 1);
}
function clampRelativeDuration(e2, n2, t2, o2, r2, i2, a2) {
  const s2 = O[t2], c2 = __spreadProps(__spreadValues({}, n2), {
    [s2]: n2[s2] + o2
  }), u2 = a2(e2, r2, n2), l2 = a2(e2, r2, c2);
  return [i2(u2), i2(l2)];
}
function ja(e2, n2, t2) {
  const o2 = La(va(n2, t2));
  if (!o2) {
    throw new RangeError(du);
  }
  return La(va(n2, e2)) / o2;
}
function Le(e2, n2) {
  const [t2, o2, r2] = refineRoundingOptions(n2, 5, 1);
  return xe(roundBigNano(e2.epochNanoseconds, t2, o2, r2, 1));
}
function Ie(e2, n2, t2) {
  let { epochNanoseconds: o2, timeZone: r2, calendar: i2 } = n2;
  const [a2, s2, c2] = refineRoundingOptions(t2);
  if (0 === a2 && 1 === s2) {
    return n2;
  }
  const u2 = e2(r2);
  if (6 === a2) {
    o2 = uo(computeDayInterval, u2, n2, c2);
  } else {
    const e3 = u2.N(o2);
    o2 = getMatchingInstantFor(u2, roundDateTime(So(o2, e3), a2, s2, c2), e3, 2, 0, 1);
  }
  return Xe(o2, r2, i2);
}
function bt(e2, n2) {
  return jt(roundDateTime(e2, ...refineRoundingOptions(n2)), e2.calendar);
}
function lt(e2, n2) {
  const [t2, o2, r2] = refineRoundingOptions(n2, 5);
  var i2;
  return St((i2 = r2, roundTimeToNano(e2, computeNanoInc(t2, o2), i2)[0]));
}
function Te(e2, n2) {
  const t2 = e2(n2.timeZone), o2 = he(n2, t2), [r2, i2] = computeDayInterval(o2), a2 = La(va(getStartOfDayInstantFor(t2, r2), getStartOfDayInstantFor(t2, i2)), no, 1);
  if (a2 <= 0) {
    throw new RangeError(du);
  }
  return a2;
}
function be(e2, n2) {
  const { timeZone: t2, calendar: o2 } = n2;
  return Xe(lo(ho, e2(t2), n2), t2, o2);
}
function lo(e2, n2, t2) {
  return getStartOfDayInstantFor(n2, e2(he(t2, n2)));
}
function uo(e2, n2, t2, o2) {
  const r2 = he(t2, n2), [i2, a2] = e2(r2), s2 = t2.epochNanoseconds, c2 = getStartOfDayInstantFor(n2, i2), u2 = getStartOfDayInstantFor(n2, a2);
  if (bigNanoOutside(s2, c2, u2)) {
    throw new RangeError(du);
  }
  return Ea(ja(s2, c2, u2), o2) ? u2 : c2;
}
function roundDateTime(e2, n2, t2, o2) {
  return roundDateTimeToNano(e2, computeNanoInc(n2, t2), o2);
}
function roundDateTimeToNano(e2, n2, t2) {
  const [o2, r2] = roundTimeToNano(e2, n2, t2);
  return Do(__spreadValues(__spreadValues({}, Ua(e2, r2)), o2));
}
function roundTimeToNano(e2, n2, t2) {
  return nanoToIsoTimeAndDay(Da(isoTimeFieldsToNano(e2), n2, t2));
}
function roundToMinute(e2) {
  return Da(e2, ao, 7);
}
function computeNanoInc(e2, n2) {
  return Zu[e2] * n2;
}
function computeDayInterval(e2) {
  const n2 = ho(e2);
  return [n2, Ua(n2, 1)];
}
function ho(e2) {
  return Ra(6, e2);
}
function roundDayTimeDurationByInc(e2, n2, t2) {
  const o2 = Math.min(getMaxDurationUnit(e2), 6);
  return nanoToDurationDayTimeFields(Ya(durationFieldsToBigNano(e2, o2), n2, t2), o2);
}
function roundRelativeDuration(e2, n2, t2, o2, r2, i2, a2, s2, c2, u2) {
  if (0 === o2 && 1 === r2) {
    return e2;
  }
  const l2 = isUniformUnit(o2, s2) ? isZonedEpochSlots(s2) && o2 < 6 && t2 >= 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration : nudgeRelativeDuration;
  let [f2, d2, m2] = l2(e2, n2, t2, o2, r2, i2, a2, s2, c2, u2);
  return m2 && 7 !== o2 && (f2 = ((e3, n3, t3, o3, r3, i3, a3, s3) => {
    const c3 = computeDurationSign(e3);
    for (let u3 = o3 + 1; u3 <= t3; u3++) {
      if (7 === u3 && 7 !== t3) {
        continue;
      }
      const o4 = dl(u3, e3);
      o4[O[u3]] += c3;
      const l3 = La(va(a3(s3(r3, i3, o4)), n3));
      if (l3 && Math.sign(l3) !== c3) {
        break;
      }
      e3 = o4;
    }
    return e3;
  })(f2, d2, t2, Math.max(6, o2), a2, s2, c2, u2)), f2;
}
function roundBigNano(e2, n2, t2, o2, r2) {
  return 6 === n2 ? [Da(Oa(e2), t2, o2), 0] : Ya(e2, computeNanoInc(n2, t2), o2, r2);
}
function Ya(e2, n2, t2, o2) {
  let [r2, i2] = e2;
  o2 && i2 < 0 && (i2 += go, r2 -= 1);
  const [a2, s2] = divModFloor(Da(i2, n2, t2), go);
  return createBigNano(r2 + a2, s2);
}
function Da(e2, n2, t2) {
  return Ea(e2 / n2, t2) * n2;
}
function Ea(e2, n2) {
  return ef[n2](e2);
}
function nudgeDayTimeDuration(e2, n2, t2, o2, r2, i2) {
  const a2 = computeDurationSign(e2), s2 = durationFieldsToBigNano(e2), c2 = roundBigNano(s2, o2, r2, i2), u2 = va(s2, c2), l2 = Math.sign(c2[0] - s2[0]) === a2, f2 = nanoToDurationDayTimeFields(c2, Math.min(t2, 6));
  return [__spreadValues(__spreadValues({}, e2), f2), so(n2, u2), l2];
}
function nudgeZonedTimeDuration(e2, n2, t2, o2, r2, i2, a2, s2, c2, u2) {
  const l2 = computeDurationSign(e2) || 1, f2 = La(durationFieldsToBigNano(e2, 5)), d2 = computeNanoInc(o2, r2);
  let m2 = Da(f2, d2, i2);
  const [p2, h2] = clampRelativeDuration(a2, __spreadValues(__spreadValues({}, e2), fl), 6, l2, s2, c2, u2), I2 = m2 - La(va(p2, h2));
  let D2 = 0;
  I2 && Math.sign(I2) !== l2 ? n2 = Ta(p2, m2) : (D2 += l2, m2 = Da(I2, d2, i2), n2 = Ta(h2, m2));
  const g2 = nanoToDurationTimeFields(m2);
  return [__spreadProps(__spreadValues(__spreadValues({}, e2), g2), {
    days: e2.days + D2
  }), n2, Boolean(D2)];
}
function nudgeRelativeDuration(e2, n2, t2, o2, r2, i2, a2, s2, c2, u2) {
  const l2 = computeDurationSign(e2), f2 = O[o2], d2 = dl(o2, e2);
  7 === o2 && (e2 = __spreadProps(__spreadValues({}, e2), {
    weeks: e2.weeks + Math.trunc(e2.days / 7)
  }));
  const m2 = divTrunc(e2[f2], r2) * r2;
  d2[f2] = m2;
  const [p2, h2] = clampRelativeDuration(a2, d2, o2, r2 * l2, s2, c2, u2), I2 = m2 + ja(n2, p2, h2) * l2 * r2, D2 = Da(I2, r2, i2), g2 = Math.sign(D2 - I2) === l2;
  return d2[f2] = D2, [d2, g2 ? h2 : p2, g2];
}
function ke(e2, n2, t2, o2) {
  const [r2, i2, a2, s2] = ((e3) => {
    const n3 = refineTimeDisplayTuple(e3 = normalizeOptions(e3));
    return [e3.timeZone, ...n3];
  })(o2), c2 = void 0 !== r2;
  return ((e3, n3, t3, o3, r3, i3) => {
    t3 = Ya(t3, r3, o3, 1);
    const a3 = n3.N(t3);
    return formatIsoDateTimeFields(So(t3, a3), i3) + (e3 ? Se(roundToMinute(a3)) : "Z");
  })(c2, n2(c2 ? e2(r2) : nf), t2.epochNanoseconds, i2, a2, s2);
}
function Fe(e2, n2, t2) {
  const [o2, r2, i2, a2, s2, c2] = ((e3) => {
    e3 = normalizeOptions(e3);
    const n3 = Jl(e3), t3 = refineSubsecDigits(e3), o3 = Ql(e3), r3 = Xl(e3, 4), i3 = xl(e3, 4);
    return [n3, Kl(e3), o3, r3, ...refineSmallestUnitAndSubsecDigits(i3, t3)];
  })(t2);
  return ((e3, n3, t3, o3, r3, i3, a3, s3, c3, u2) => {
    o3 = Ya(o3, c3, s3, 1);
    const l2 = e3(t3).N(o3);
    return formatIsoDateTimeFields(So(o3, l2), u2) + Se(roundToMinute(l2), a3) + ((e4, n4) => 1 !== n4 ? "[" + (2 === n4 ? "!" : "") + e4 + "]" : "")(t3, i3) + formatCalendar(n3, r3);
  })(e2, n2.calendar, n2.timeZone, n2.epochNanoseconds, o2, r2, i2, a2, s2, c2);
}
function Ft(e2, n2) {
  const [t2, o2, r2, i2] = ((e3) => (e3 = normalizeOptions(e3), [Jl(e3), ...refineTimeDisplayTuple(e3)]))(n2);
  return a2 = e2.calendar, s2 = t2, c2 = i2, formatIsoDateTimeFields(roundDateTimeToNano(e2, r2, o2), c2) + formatCalendar(a2, s2);
  var a2, s2, c2;
}
function ce(e2, n2) {
  return t2 = e2.calendar, o2 = e2, r2 = refineDateDisplayOptions(n2), formatIsoDateFields(o2) + formatCalendar(t2, r2);
  var t2, o2, r2;
}
function Ht(e2, n2) {
  return formatDateLikeIso(e2.calendar, formatIsoYearMonthFields, e2, refineDateDisplayOptions(n2));
}
function Jt(e2, n2) {
  return formatDateLikeIso(e2.calendar, formatIsoMonthDayFields, e2, refineDateDisplayOptions(n2));
}
function ct(e2, n2) {
  const [t2, o2, r2] = refineTimeDisplayOptions(n2);
  return i2 = r2, formatIsoTimeFields(roundTimeToNano(e2, o2, t2)[0], i2);
  var i2;
}
function k(e2, n2) {
  const [t2, o2, r2] = refineTimeDisplayOptions(n2, 3);
  return o2 > 1 && checkDurationUnits(e2 = __spreadValues(__spreadValues({}, e2), roundDayTimeDurationByInc(e2, o2, t2))), ((e3, n3) => {
    const { sign: t3 } = e3, o3 = -1 === t3 ? negateDurationFields(e3) : e3, { hours: r3, minutes: i2 } = o3, [a2, s2] = divModBigNano(durationFieldsToBigNano(o3, 3), oo, divModTrunc);
    checkDurationTimeUnit(a2);
    const c2 = formatSubsecNano(s2, n3), u2 = n3 >= 0 || !t3 || c2;
    return (t3 < 0 ? "-" : "") + "P" + formatDurationFragments({
      Y: formatDurationNumber(o3.years),
      M: formatDurationNumber(o3.months),
      W: formatDurationNumber(o3.weeks),
      D: formatDurationNumber(o3.days)
    }) + (r3 || i2 || a2 || u2 ? "T" + formatDurationFragments({
      H: formatDurationNumber(r3),
      M: formatDurationNumber(i2),
      S: formatDurationNumber(a2, u2) + c2
    }) : "");
  })(e2, r2);
}
function formatDateLikeIso(e2, n2, t2, o2) {
  const r2 = o2 > 1 || 0 === o2 && e2 !== l;
  return 1 === o2 ? e2 === l ? n2(t2) : formatIsoDateFields(t2) : r2 ? formatIsoDateFields(t2) + formatCalendarId(e2, 2 === o2) : n2(t2);
}
function formatDurationFragments(e2) {
  const n2 = [];
  for (const t2 in e2) {
    const o2 = e2[t2];
    o2 && n2.push(o2, t2);
  }
  return n2.join("");
}
function formatIsoDateTimeFields(e2, n2) {
  return formatIsoDateFields(e2) + "T" + formatIsoTimeFields(e2, n2);
}
function formatIsoDateFields(e2) {
  return formatIsoYearMonthFields(e2) + "-" + wu(e2.isoDay);
}
function formatIsoYearMonthFields(e2) {
  const { isoYear: n2 } = e2;
  return (n2 < 0 || n2 > 9999 ? getSignStr(n2) + padNumber(6, Math.abs(n2)) : padNumber(4, n2)) + "-" + wu(e2.isoMonth);
}
function formatIsoMonthDayFields(e2) {
  return wu(e2.isoMonth) + "-" + wu(e2.isoDay);
}
function formatIsoTimeFields(e2, n2) {
  const t2 = [wu(e2.isoHour), wu(e2.isoMinute)];
  return -1 !== n2 && t2.push(wu(e2.isoSecond) + ((e3, n3, t3, o2) => formatSubsecNano(e3 * Ke + n3 * ro + t3, o2))(e2.isoMillisecond, e2.isoMicrosecond, e2.isoNanosecond, n2)), t2.join(":");
}
function Se(e2, n2 = 0) {
  if (1 === n2) {
    return "";
  }
  const [t2, o2] = divModFloor(Math.abs(e2), no), [r2, i2] = divModFloor(o2, ao), [a2, s2] = divModFloor(i2, oo);
  return getSignStr(e2) + wu(t2) + ":" + wu(r2) + (a2 || s2 ? ":" + wu(a2) + formatSubsecNano(s2) : "");
}
function formatCalendar(e2, n2) {
  return 1 !== n2 && (n2 > 1 || 0 === n2 && e2 !== l) ? formatCalendarId(e2, 2 === n2) : "";
}
function formatCalendarId(e2, n2) {
  return "[" + (n2 ? "!" : "") + "u-ca=" + e2 + "]";
}
function formatSubsecNano(e2, n2) {
  let t2 = padNumber(9, e2);
  return t2 = void 0 === n2 ? t2.replace(af, "") : t2.slice(0, n2), t2 ? "." + t2 : "";
}
function getSignStr(e2) {
  return e2 < 0 ? "-" : "+";
}
function formatDurationNumber(e2, n2) {
  return e2 || n2 ? e2.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function _zonedEpochSlotsToIso(e2, n2) {
  const { epochNanoseconds: t2 } = e2, o2 = (n2.N ? n2 : n2(e2.timeZone)).N(t2), r2 = So(t2, o2);
  return __spreadProps(__spreadValues({
    calendar: e2.calendar
  }, r2), {
    offsetNanoseconds: o2
  });
}
function getMatchingInstantFor(e2, n2, t2, o2 = 0, r2 = 0, i2, a2) {
  if (void 0 !== t2 && 1 === o2 && (1 === o2 || a2)) {
    return isoToEpochNanoWithOffset(n2, t2);
  }
  const s2 = e2.v(n2);
  if (void 0 !== t2 && 3 !== o2) {
    const e3 = ((e4, n3, t3, o3) => {
      const r3 = ma(n3);
      o3 && (t3 = roundToMinute(t3));
      for (const n4 of e4) {
        let e5 = La(va(n4, r3));
        if (o3 && (e5 = roundToMinute(e5)), e5 === t3) {
          return n4;
        }
      }
    })(s2, n2, t2, i2);
    if (void 0 !== e3) {
      return e3;
    }
    if (0 === o2) {
      throw new RangeError(gu);
    }
  }
  return a2 ? ma(n2) : $o(e2, n2, r2, s2);
}
function $o(e2, n2, t2 = 0, o2 = e2.v(n2)) {
  if (1 === o2.length) {
    return o2[0];
  }
  if (1 === t2) {
    throw new RangeError(Tu);
  }
  if (o2.length) {
    return o2[3 === t2 ? 1 : 0];
  }
  const r2 = ma(n2), i2 = ((e3, n3) => {
    const t3 = e3.N(Ta(n3, -go));
    return ((e4) => {
      if (e4 > go) {
        throw new RangeError(Du);
      }
      return e4;
    })(e3.N(Ta(n3, go)) - t3);
  })(e2, r2), a2 = i2 * (2 === t2 ? -1 : 1);
  return (o2 = e2.v(So(r2, a2)))[2 === t2 ? 0 : o2.length - 1];
}
function getStartOfDayInstantFor(e2, n2) {
  const t2 = e2.v(n2);
  if (t2.length) {
    return t2[0];
  }
  const o2 = Ta(ma(n2), -go);
  return e2.l(o2, 1);
}
function Ye(e2, n2, t2) {
  return xe(io(so(n2.epochNanoseconds, ((e3) => {
    if (durationHasDateParts(e3)) {
      throw new RangeError(Pu);
    }
    return durationFieldsToBigNano(e3, 5);
  })(e2 ? negateDurationFields(t2) : t2))));
}
function Oe(e2, n2, t2, o2, r2, i2 = /* @__PURE__ */ Object.create(null)) {
  const a2 = n2(o2.timeZone), s2 = e2(o2.calendar);
  return __spreadValues(__spreadValues({}, o2), Fa(a2, s2, o2, t2 ? negateDurationFields(r2) : r2, i2));
}
function wt(e2, n2, t2, o2, r2 = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i2 } = t2;
  return jt(ka(e2(i2), t2, n2 ? negateDurationFields(o2) : o2, r2), i2);
}
function ne(e2, n2, t2, o2, r2) {
  const { calendar: i2 } = t2;
  return W(moveDate(e2(i2), t2, n2 ? negateDurationFields(o2) : o2, r2), i2);
}
function Gt(e2, n2, t2, o2, r2) {
  const i2 = t2.calendar, a2 = e2(i2);
  let s2 = To(Na(a2, t2));
  n2 && (o2 = B(o2)), o2.sign < 0 && (s2 = a2.P(s2, __spreadProps(__spreadValues({}, ll), {
    months: 1
  })), s2 = Ua(s2, -1));
  const c2 = a2.P(s2, o2, r2);
  return createPlainYearMonthSlots(Na(a2, c2), i2);
}
function at(e2, n2, t2) {
  return St(moveTime(n2, e2 ? negateDurationFields(t2) : t2)[0]);
}
function Fa(e2, n2, t2, o2, r2) {
  const i2 = durationFieldsToBigNano(o2, 5);
  let a2 = t2.epochNanoseconds;
  if (durationHasDateParts(o2)) {
    const s2 = he(t2, e2);
    a2 = so($o(e2, __spreadValues(__spreadValues({}, moveDate(n2, s2, __spreadValues(__spreadValues({}, o2), fl), r2)), nn(w, s2))), i2);
  } else {
    a2 = so(a2, i2), dt(r2);
  }
  return {
    epochNanoseconds: io(a2)
  };
}
function ka(e2, n2, t2, o2) {
  const [r2, i2] = moveTime(n2, t2);
  return Do(__spreadValues(__spreadValues({}, moveDate(e2, n2, __spreadProps(__spreadValues(__spreadValues({}, t2), fl), {
    days: t2.days + i2
  }), o2)), r2));
}
function moveDate(e2, n2, t2, o2) {
  if (t2.years || t2.months || t2.weeks) {
    return e2.P(n2, t2, o2);
  }
  dt(o2);
  const r2 = t2.days + durationFieldsToBigNano(t2, 5)[0];
  return r2 ? To(Ua(n2, r2)) : n2;
}
function Na(e2, n2, t2 = 1) {
  return Ua(n2, t2 - e2.day(n2));
}
function moveTime(e2, n2) {
  const [t2, o2] = durationFieldsToBigNano(n2, 5), [r2, i2] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(e2) + o2);
  return [r2, t2 + i2];
}
function nativeDateAdd(e2, n2, t2) {
  const o2 = dt(t2);
  let r2, { years: i2, months: a2, weeks: s2, days: c2 } = n2;
  if (c2 += durationFieldsToBigNano(n2, 5)[0], i2 || a2) {
    r2 = wa(this, e2, i2, a2, o2);
  } else {
    if (!s2 && !c2) {
      return e2;
    }
    r2 = isoToEpochMilli(e2);
  }
  if (void 0 === r2) {
    throw new RangeError(Mu);
  }
  return r2 += (7 * s2 + c2) * Cu, To(Pa(r2));
}
function wa(e2, n2, t2, o2, r2) {
  let [i2, a2, s2] = e2.u(n2);
  if (t2) {
    const [n3, o3] = e2.m(i2, a2);
    i2 += t2, a2 = monthCodeNumberToMonth(n3, o3, e2.F(i2)), a2 = ba("month", a2, 1, e2.O(i2), r2);
  }
  return o2 && ([i2, a2] = e2.p(i2, a2, o2)), s2 = ba("day", s2, 1, e2.B(i2, a2), r2), e2.M(i2, a2, s2);
}
function isoMonthAdd(e2, n2, t2) {
  return e2 += divTrunc(t2, Fl), (n2 += modTrunc(t2, Fl)) < 1 ? (e2--, n2 += Fl) : n2 > Fl && (e2++, n2 -= Fl), [e2, n2];
}
function intlMonthAdd(e2, n2, t2) {
  if (t2) {
    if (n2 += t2, !Number.isSafeInteger(n2)) {
      throw new RangeError(Mu);
    }
    if (t2 < 0) {
      for (; n2 < 1; ) {
        n2 += computeIntlMonthsInYear.call(this, --e2);
      }
    } else {
      let t3;
      for (; n2 > (t3 = computeIntlMonthsInYear.call(this, e2)); ) {
        n2 -= t3, e2++;
      }
    }
  }
  return [e2, n2];
}
function Ua(e2, n2) {
  return n2 ? __spreadValues(__spreadValues({}, e2), Pa(isoToEpochMilli(e2) + n2 * Cu)) : e2;
}
function createMarkerSystem(e2, n2, t2) {
  const o2 = e2(t2.calendar);
  return isZonedEpochSlots(t2) ? [t2, o2, n2(t2.timeZone)] : [__spreadValues(__spreadValues({}, t2), At), o2];
}
function createMarkerToEpochNano(e2) {
  return e2 ? fa : ma;
}
function createMoveMarker(e2) {
  return e2 ? gt(Fa, e2) : ka;
}
function createDiffMarkers(e2) {
  return e2 ? gt(diffZonedEpochsExact, e2) : diffDateTimesExact;
}
function isZonedEpochSlots(e2) {
  return e2 && e2.epochNanoseconds;
}
function isUniformUnit(e2, n2) {
  return e2 <= 6 - (isZonedEpochSlots(n2) ? 1 : 0);
}
function E(e2, n2, t2, o2, r2, i2, a2) {
  const s2 = e2(normalizeOptions(a2).relativeTo), c2 = Math.max(getMaxDurationUnit(r2), getMaxDurationUnit(i2));
  if (isUniformUnit(c2, s2)) {
    return pe(checkDurationUnits(((e3, n3, t3, o3) => {
      const r3 = so(durationFieldsToBigNano(e3), durationFieldsToBigNano(n3), o3 ? -1 : 1);
      if (!Number.isFinite(r3[0])) {
        throw new RangeError(Mu);
      }
      return __spreadValues(__spreadValues({}, ll), nanoToDurationDayTimeFields(r3, t3));
    })(r2, i2, c2, o2)));
  }
  if (!s2) {
    throw new RangeError(vu);
  }
  o2 && (i2 = negateDurationFields(i2));
  const [u2, l2, f2] = createMarkerSystem(n2, t2, s2), d2 = createMoveMarker(f2), m2 = createDiffMarkers(f2), p2 = d2(l2, u2, r2);
  return pe(m2(l2, u2, d2(l2, p2, i2), c2));
}
function V(e2, n2, t2, o2, r2) {
  const i2 = getMaxDurationUnit(o2), [a2, s2, c2, u2, l2] = ((e3, n3, t3) => {
    e3 = normalizeOptionsOrString(e3, bl);
    let o3 = $l(e3);
    const r3 = t3(e3[Cl]);
    let i3 = parseRoundingIncInteger(e3);
    const a3 = Xl(e3, 7);
    let s3 = xl(e3);
    if (void 0 === o3 && void 0 === s3) {
      throw new RangeError(Fu);
    }
    if (null == s3 && (s3 = 0), null == o3 && (o3 = Math.max(s3, n3)), checkLargestSmallestUnit(o3, s3), i3 = refineRoundingInc(i3, s3, 1), i3 > 1 && s3 > 5 && o3 !== s3) {
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    }
    return [o3, s3, i3, a3, r3];
  })(r2, i2, e2), f2 = Math.max(i2, a2);
  if (!l2 && f2 <= 6) {
    return pe(checkDurationUnits(((e3, n3, t3, o3, r3) => {
      const i3 = roundBigNano(durationFieldsToBigNano(e3), t3, o3, r3);
      return __spreadValues(__spreadValues({}, ll), nanoToDurationDayTimeFields(i3, n3));
    })(o2, a2, s2, c2, u2)));
  }
  if (!isZonedEpochSlots(l2) && !o2.sign) {
    return o2;
  }
  if (!l2) {
    throw new RangeError(vu);
  }
  const [d2, m2, p2] = createMarkerSystem(n2, t2, l2), h2 = createMarkerToEpochNano(p2), I2 = createMoveMarker(p2), D2 = createDiffMarkers(p2), g2 = I2(m2, d2, o2);
  isZonedEpochSlots(l2) || (Do(d2), Do(g2));
  let T2 = D2(m2, d2, g2, a2);
  const M2 = o2.sign, y2 = computeDurationSign(T2);
  if (M2 && y2 && M2 !== y2) {
    throw new RangeError(du);
  }
  return T2 = roundRelativeDuration(T2, h2(g2), a2, s2, c2, u2, m2, d2, h2, I2), pe(T2);
}
function Y(e2) {
  return -1 === e2.sign ? B(e2) : e2;
}
function B(e2) {
  return pe(negateDurationFields(e2));
}
function negateDurationFields(e2) {
  const n2 = {};
  for (const t2 of O) {
    n2[t2] = -1 * e2[t2] || 0;
  }
  return n2;
}
function y(e2) {
  return !e2.sign;
}
function computeDurationSign(e2, n2 = O) {
  let t2 = 0;
  for (const o2 of n2) {
    const n3 = Math.sign(e2[o2]);
    if (n3) {
      if (t2 && t2 !== n3) {
        throw new RangeError(Nu);
      }
      t2 = n3;
    }
  }
  return t2;
}
function checkDurationUnits(e2) {
  for (const n2 of cl) {
    ba(n2, e2[n2], -sf, sf, 1);
  }
  return checkDurationTimeUnit(La(durationFieldsToBigNano(e2), oo)), e2;
}
function checkDurationTimeUnit(e2) {
  if (!Number.isSafeInteger(e2)) {
    throw new RangeError(yu);
  }
}
function durationFieldsToBigNano(e2, n2 = 6) {
  return givenFieldsToBigNano(e2, n2, O);
}
function nanoToDurationDayTimeFields(e2, n2 = 6) {
  const [t2, o2] = e2, r2 = nanoToGivenFields(o2, n2, O);
  if (r2[O[n2]] += t2 * (go / Zu[n2]), !Number.isFinite(r2[O[n2]])) {
    throw new RangeError(Mu);
  }
  return r2;
}
function nanoToDurationTimeFields(e2, n2 = 5) {
  return nanoToGivenFields(e2, n2, O);
}
function durationHasDateParts(e2) {
  return Boolean(computeDurationSign(e2, sl));
}
function getMaxDurationUnit(e2) {
  let n2 = 9;
  for (; n2 > 0 && !e2[O[n2]]; n2--) {
  }
  return n2;
}
function createSplitTuple(e2, n2) {
  return [e2, n2];
}
function computePeriod(e2) {
  const n2 = Math.floor(e2 / tf) * tf;
  return [n2, n2 + tf];
}
function We(e2) {
  const n2 = parseDateTimeLike(e2 = toStringViaPrimitive(e2));
  if (!n2) {
    throw new RangeError(failedParse(e2));
  }
  let t2;
  if (n2.C) {
    t2 = 0;
  } else {
    if (!n2.offset) {
      throw new RangeError(failedParse(e2));
    }
    t2 = parseOffsetNano(n2.offset);
  }
  return n2.timeZone && parseOffsetNanoMaybe(n2.timeZone, 1), xe(isoToEpochNanoWithOffset(checkIsoDateTimeFields(n2), t2));
}
function $(e2) {
  const n2 = parseDateTimeLike(d(e2));
  if (!n2) {
    throw new RangeError(failedParse(e2));
  }
  if (n2.timeZone) {
    return finalizeZonedDateTime(n2, n2.offset ? parseOffsetNano(n2.offset) : void 0);
  }
  if (n2.C) {
    throw new RangeError(failedParse(e2));
  }
  return finalizeDate(n2);
}
function Ne(e2, n2) {
  const t2 = parseDateTimeLike(d(e2));
  if (!t2 || !t2.timeZone) {
    throw new RangeError(failedParse(e2));
  }
  const { offset: o2 } = t2, r2 = o2 ? parseOffsetNano(o2) : void 0, [, i2, a2] = je(n2);
  return finalizeZonedDateTime(t2, r2, i2, a2);
}
function parseOffsetNano(e2) {
  const n2 = parseOffsetNanoMaybe(e2);
  if (void 0 === n2) {
    throw new RangeError(failedParse(e2));
  }
  return n2;
}
function Bt(e2) {
  const n2 = parseDateTimeLike(d(e2));
  if (!n2 || n2.C) {
    throw new RangeError(failedParse(e2));
  }
  return jt(finalizeDateTime(n2));
}
function me(e2, n2, t2) {
  let o2 = parseDateTimeLike(d(e2));
  if (!o2 || o2.C) {
    throw new RangeError(failedParse(e2));
  }
  return n2 ? o2.calendar === l && (o2 = -271821 === o2.isoYear && 4 === o2.isoMonth ? __spreadValues(__spreadProps(__spreadValues({}, o2), {
    isoDay: 20
  }), At) : __spreadValues(__spreadProps(__spreadValues({}, o2), {
    isoDay: 1
  }), At)) : t2 && o2.calendar === l && (o2 = __spreadProps(__spreadValues({}, o2), {
    isoYear: Pl
  })), W(o2.k ? finalizeDateTime(o2) : finalizeDate(o2));
}
function Xt(e2, n2) {
  const t2 = parseYearMonthOnly(d(n2));
  if (t2) {
    return requireIsoCalendar(t2), createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields(t2)));
  }
  const o2 = me(n2, 1);
  return createPlainYearMonthSlots(Na(e2(o2.calendar), o2));
}
function requireIsoCalendar(e2) {
  if (e2.calendar !== l) {
    throw new RangeError(invalidSubstring(e2.calendar));
  }
}
function xt(e2, n2) {
  const t2 = parseMonthDayOnly(d(n2));
  if (t2) {
    return requireIsoCalendar(t2), createPlainMonthDaySlots(checkIsoDateFields(t2));
  }
  const o2 = me(n2, 0, 1), { calendar: r2 } = o2, i2 = e2(r2), [a2, s2, c2] = i2.u(o2), [u2, l2] = i2.m(a2, s2), [f2, m2] = i2.R(u2, l2, c2);
  return createPlainMonthDaySlots(To(i2.U(f2, m2, c2)), r2);
}
function ht(e2) {
  let n2, t2 = ((e3) => {
    const n3 = Tf.exec(e3);
    return n3 ? (organizeAnnotationParts(n3[10]), organizeTimeParts(n3)) : void 0;
  })(d(e2));
  if (!t2) {
    if (t2 = parseDateTimeLike(e2), !t2) {
      throw new RangeError(failedParse(e2));
    }
    if (!t2.k) {
      throw new RangeError(failedParse(e2));
    }
    if (t2.C) {
      throw new RangeError(invalidSubstring("Z"));
    }
    requireIsoCalendar(t2);
  }
  if ((n2 = parseYearMonthOnly(e2)) && isIsoDateFieldsValid(n2)) {
    throw new RangeError(failedParse(e2));
  }
  if ((n2 = parseMonthDayOnly(e2)) && isIsoDateFieldsValid(n2)) {
    throw new RangeError(failedParse(e2));
  }
  return St(constrainIsoTimeFields(t2, 1));
}
function R(e2) {
  const n2 = ((e3) => {
    const n3 = Nf.exec(e3);
    return n3 ? ((e4) => {
      function parseUnit(e5, r3, i2) {
        let a2 = 0, s2 = 0;
        if (i2 && ([a2, o2] = divModFloor(o2, Zu[i2])), void 0 !== e5) {
          if (t2) {
            throw new RangeError(invalidSubstring(e5));
          }
          s2 = ((e6) => {
            const n5 = parseInt(e6);
            if (!Number.isFinite(n5)) {
              throw new RangeError(invalidSubstring(e6));
            }
            return n5;
          })(e5), n4 = 1, r3 && (o2 = parseSubsecNano(r3) * (Zu[i2] / oo), t2 = 1);
        }
        return a2 + s2;
      }
      let n4 = 0, t2 = 0, o2 = 0, r2 = __spreadValues(__spreadValues({}, zipProps(O, [parseUnit(e4[2]), parseUnit(e4[3]), parseUnit(e4[4]), parseUnit(e4[5]), parseUnit(e4[6], e4[7], 5), parseUnit(e4[8], e4[9], 4), parseUnit(e4[10], e4[11], 3)])), nanoToGivenFields(o2, 2, O));
      if (!n4) {
        throw new RangeError(noValidFields(O));
      }
      return parseSign(e4[1]) < 0 && (r2 = negateDurationFields(r2)), r2;
    })(n3) : void 0;
  })(d(e2));
  if (!n2) {
    throw new RangeError(failedParse(e2));
  }
  return pe(checkDurationUnits(n2));
}
function f(e2) {
  const n2 = parseDateTimeLike(e2) || parseYearMonthOnly(e2) || parseMonthDayOnly(e2);
  return n2 ? n2.calendar : e2;
}
function M(e2) {
  const n2 = parseDateTimeLike(e2);
  return n2 && (n2.timeZone || n2.C && nf || n2.offset) || e2;
}
function finalizeZonedDateTime(e2, n2, t2 = 0, o2 = 0) {
  const r2 = Z(e2.timeZone), i2 = L(r2);
  let a2;
  return checkIsoDateTimeFields(e2), a2 = e2.k ? getMatchingInstantFor(i2, e2, n2, t2, o2, !i2.j, e2.C) : getStartOfDayInstantFor(i2, e2), Xe(a2, r2, u(e2.calendar));
}
function finalizeDateTime(e2) {
  return resolveSlotsCalendar(Do(checkIsoDateTimeFields(e2)));
}
function finalizeDate(e2) {
  return resolveSlotsCalendar(To(checkIsoDateFields(e2)));
}
function resolveSlotsCalendar(e2) {
  return __spreadProps(__spreadValues({}, e2), {
    calendar: u(e2.calendar)
  });
}
function parseDateTimeLike(e2) {
  const n2 = gf.exec(e2);
  return n2 ? ((e3) => {
    const n3 = e3[10], t2 = "Z" === (n3 || "").toUpperCase();
    return __spreadProps(__spreadValues(__spreadValues({
      isoYear: organizeIsoYearParts(e3),
      isoMonth: parseInt(e3[4]),
      isoDay: parseInt(e3[5])
    }, organizeTimeParts(e3.slice(5))), organizeAnnotationParts(e3[16])), {
      k: Boolean(e3[6]),
      C: t2,
      offset: t2 ? void 0 : n3
    });
  })(n2) : void 0;
}
function parseYearMonthOnly(e2) {
  const n2 = If.exec(e2);
  return n2 ? ((e3) => __spreadValues({
    isoYear: organizeIsoYearParts(e3),
    isoMonth: parseInt(e3[4]),
    isoDay: 1
  }, organizeAnnotationParts(e3[5])))(n2) : void 0;
}
function parseMonthDayOnly(e2) {
  const n2 = Df.exec(e2);
  return n2 ? ((e3) => __spreadValues({
    isoYear: Pl,
    isoMonth: parseInt(e3[1]),
    isoDay: parseInt(e3[2])
  }, organizeAnnotationParts(e3[3])))(n2) : void 0;
}
function parseOffsetNanoMaybe(e2, n2) {
  const t2 = Mf.exec(e2);
  return t2 ? ((e3, n3) => {
    const t3 = e3[4] || e3[5];
    if (n3 && t3) {
      throw new RangeError(invalidSubstring(t3));
    }
    return ((e4) => {
      if (Math.abs(e4) >= go) {
        throw new RangeError(Iu);
      }
      return e4;
    })((parseInt0(e3[2]) * no + parseInt0(e3[3]) * ao + parseInt0(e3[4]) * oo + parseSubsecNano(e3[5] || "")) * parseSign(e3[1]));
  })(t2, n2) : void 0;
}
function organizeIsoYearParts(e2) {
  const n2 = parseSign(e2[1]), t2 = parseInt(e2[2] || e2[3]);
  if (n2 < 0 && !t2) {
    throw new RangeError(invalidSubstring(-0));
  }
  return n2 * t2;
}
function organizeTimeParts(e2) {
  const n2 = parseInt0(e2[3]);
  return __spreadProps(__spreadValues({}, nanoToIsoTimeAndDay(parseSubsecNano(e2[4] || ""))[0]), {
    isoHour: parseInt0(e2[1]),
    isoMinute: parseInt0(e2[2]),
    isoSecond: 60 === n2 ? 59 : n2
  });
}
function organizeAnnotationParts(e2) {
  let n2, t2;
  const o2 = [];
  if (e2.replace(yf, ((e3, r2, i2) => {
    const a2 = Boolean(r2), [s2, c2] = i2.split("=").reverse();
    if (c2) {
      if ("u-ca" === c2) {
        o2.push(s2), n2 || (n2 = a2);
      } else if (a2 || /[A-Z]/.test(c2)) {
        throw new RangeError(invalidSubstring(e3));
      }
    } else {
      if (t2) {
        throw new RangeError(invalidSubstring(e3));
      }
      t2 = s2;
    }
    return "";
  })), o2.length > 1 && n2) {
    throw new RangeError(invalidSubstring(e2));
  }
  return {
    timeZone: t2,
    calendar: o2[0] || l
  };
}
function parseSubsecNano(e2) {
  return parseInt(e2.padEnd(9, "0"));
}
function createRegExp(e2) {
  return new RegExp(`^${e2}$`, "i");
}
function parseSign(e2) {
  return e2 && "+" !== e2 ? -1 : 1;
}
function parseInt0(e2) {
  return void 0 === e2 ? 0 : parseInt(e2);
}
function Me(e2) {
  return Z(d(e2));
}
function Z(e2) {
  const n2 = getTimeZoneEssence(e2);
  return "number" == typeof n2 ? Se(n2) : n2 ? ((e3) => {
    if (Ff.test(e3)) {
      throw new RangeError(F(e3));
    }
    if (Pf.test(e3)) {
      throw new RangeError(hu);
    }
    return e3.toLowerCase().split("/").map(((e4, n3) => (e4.length <= 3 || /\d/.test(e4)) && !/etc|yap/.test(e4) ? e4.toUpperCase() : e4.replace(/baja|dumont|[a-z]+/g, ((e5, t2) => e5.length <= 2 && !n3 || "in" === e5 || "chat" === e5 ? e5.toUpperCase() : e5.length > 2 || !t2 ? capitalize(e5).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : e5)))).join("/");
  })(e2) : nf;
}
function getTimeZoneAtomic(e2) {
  const n2 = getTimeZoneEssence(e2);
  return "number" == typeof n2 ? n2 : n2 ? n2.resolvedOptions().timeZone : nf;
}
function getTimeZoneEssence(e2) {
  const n2 = parseOffsetNanoMaybe(e2 = e2.toUpperCase(), 1);
  return void 0 !== n2 ? n2 : e2 !== nf ? vf(e2) : void 0;
}
function He(e2, n2) {
  return pa(e2.epochNanoseconds, n2.epochNanoseconds);
}
function Be(e2, n2) {
  return pa(e2.epochNanoseconds, n2.epochNanoseconds);
}
function H(e2, n2, t2, o2, r2, i2) {
  const a2 = e2(normalizeOptions(i2).relativeTo), s2 = Math.max(getMaxDurationUnit(o2), getMaxDurationUnit(r2));
  if (allPropsEqual(O, o2, r2)) {
    return 0;
  }
  if (isUniformUnit(s2, a2)) {
    return pa(durationFieldsToBigNano(o2), durationFieldsToBigNano(r2));
  }
  if (!a2) {
    throw new RangeError(vu);
  }
  const [c2, u2, l2] = createMarkerSystem(n2, t2, a2), f2 = createMarkerToEpochNano(l2), d2 = createMoveMarker(l2);
  return pa(f2(d2(u2, c2, o2)), f2(d2(u2, c2, r2)));
}
function Yt(e2, n2) {
  return te(e2, n2) || Dt(e2, n2);
}
function te(e2, n2) {
  return compareNumbers(isoToEpochMilli(e2), isoToEpochMilli(n2));
}
function Dt(e2, n2) {
  return compareNumbers(isoTimeFieldsToNano(e2), isoTimeFieldsToNano(n2));
}
function Ve(e2, n2) {
  return !He(e2, n2);
}
function ve(e2, n2) {
  return !Be(e2, n2) && !!isTimeZoneIdsEqual(e2.timeZone, n2.timeZone) && e2.calendar === n2.calendar;
}
function vt(e2, n2) {
  return !Yt(e2, n2) && e2.calendar === n2.calendar;
}
function re(e2, n2) {
  return !te(e2, n2) && e2.calendar === n2.calendar;
}
function zt(e2, n2) {
  return !te(e2, n2) && e2.calendar === n2.calendar;
}
function Lt(e2, n2) {
  return !te(e2, n2) && e2.calendar === n2.calendar;
}
function st(e2, n2) {
  return !Dt(e2, n2);
}
function isTimeZoneIdsEqual(e2, n2) {
  if (e2 === n2) {
    return 1;
  }
  try {
    return getTimeZoneAtomic(e2) === getTimeZoneAtomic(n2);
  } catch (e3) {
  }
}
function Ee(e2, n2, t2, o2) {
  const r2 = refineDiffOptions(e2, o2, 3, 5), i2 = diffEpochNanos(n2.epochNanoseconds, t2.epochNanoseconds, ...r2);
  return pe(e2 ? negateDurationFields(i2) : i2);
}
function we(e2, n2, t2, o2, r2, i2) {
  const a2 = ha(o2.calendar, r2.calendar), [s2, c2, u2, l2] = refineDiffOptions(t2, i2, 5), f2 = o2.epochNanoseconds, d2 = r2.epochNanoseconds, m2 = pa(d2, f2);
  let p2;
  if (m2) {
    if (s2 < 6) {
      p2 = diffEpochNanos(f2, d2, s2, c2, u2, l2);
    } else {
      const t3 = n2(ga(o2.timeZone, r2.timeZone)), f3 = e2(a2);
      p2 = diffZonedEpochsBig(f3, t3, o2, r2, m2, s2, i2), p2 = roundRelativeDuration(p2, d2, s2, c2, u2, l2, f3, o2, fa, gt(Fa, t3));
    }
  } else {
    p2 = ll;
  }
  return pe(t2 ? negateDurationFields(p2) : p2);
}
function It(e2, n2, t2, o2, r2) {
  const i2 = ha(t2.calendar, o2.calendar), [a2, s2, c2, u2] = refineDiffOptions(n2, r2, 6), l2 = ma(t2), f2 = ma(o2), d2 = pa(f2, l2);
  let m2;
  if (d2) {
    if (a2 <= 6) {
      m2 = diffEpochNanos(l2, f2, a2, s2, c2, u2);
    } else {
      const n3 = e2(i2);
      m2 = diffDateTimesBig(n3, t2, o2, d2, a2, r2), m2 = roundRelativeDuration(m2, f2, a2, s2, c2, u2, n3, t2, ma, ka);
    }
  } else {
    m2 = ll;
  }
  return pe(n2 ? negateDurationFields(m2) : m2);
}
function oe(e2, n2, t2, o2, r2) {
  const i2 = ha(t2.calendar, o2.calendar);
  return diffDateLike(n2, (() => e2(i2)), t2, o2, ...refineDiffOptions(n2, r2, 6, 9, 6));
}
function _t(e2, n2, t2, o2, r2) {
  const i2 = ha(t2.calendar, o2.calendar), a2 = refineDiffOptions(n2, r2, 9, 9, 8), s2 = e2(i2), c2 = Na(s2, t2), u2 = Na(s2, o2);
  return c2.isoYear === u2.isoYear && c2.isoMonth === u2.isoMonth && c2.isoDay === u2.isoDay ? pe(ll) : diffDateLike(n2, (() => s2), To(c2), To(u2), ...a2, 8);
}
function diffDateLike(e2, n2, t2, o2, r2, i2, a2, s2, c2 = 6) {
  const u2 = ma(t2), l2 = ma(o2);
  if (void 0 === u2 || void 0 === l2) {
    throw new RangeError(Mu);
  }
  let f2;
  if (pa(l2, u2)) {
    if (6 === r2) {
      f2 = diffEpochNanos(u2, l2, r2, i2, a2, s2);
    } else {
      const e3 = n2();
      f2 = e3.h(t2, o2, r2), i2 === c2 && 1 === a2 || (f2 = roundRelativeDuration(f2, l2, r2, i2, a2, s2, e3, t2, ma, moveDate));
    }
  } else {
    f2 = ll;
  }
  return pe(e2 ? negateDurationFields(f2) : f2);
}
function it(e2, n2, t2, o2) {
  const [r2, i2, a2, s2] = refineDiffOptions(e2, o2, 5, 5), c2 = Da(diffTimes(n2, t2), computeNanoInc(i2, a2), s2), u2 = __spreadValues(__spreadValues({}, ll), nanoToDurationTimeFields(c2, r2));
  return pe(e2 ? negateDurationFields(u2) : u2);
}
function diffZonedEpochsExact(e2, n2, t2, o2, r2, i2) {
  const a2 = pa(o2.epochNanoseconds, t2.epochNanoseconds);
  return a2 ? r2 < 6 ? diffEpochNanosExact(t2.epochNanoseconds, o2.epochNanoseconds, r2) : diffZonedEpochsBig(n2, e2, t2, o2, a2, r2, i2) : ll;
}
function diffDateTimesExact(e2, n2, t2, o2, r2) {
  const i2 = ma(n2), a2 = ma(t2), s2 = pa(a2, i2);
  return s2 ? o2 <= 6 ? diffEpochNanosExact(i2, a2, o2) : diffDateTimesBig(e2, n2, t2, s2, o2, r2) : ll;
}
function diffZonedEpochsBig(e2, n2, t2, o2, r2, i2, a2) {
  const [s2, c2, u2] = Sa(n2, t2, o2, r2);
  var l2, f2;
  return __spreadValues(__spreadValues({}, 6 === i2 ? (l2 = s2, f2 = c2, __spreadProps(__spreadValues({}, ll), {
    days: td(l2, f2)
  })) : e2.h(s2, c2, i2, a2)), nanoToDurationTimeFields(u2));
}
function diffDateTimesBig(e2, n2, t2, o2, r2, i2) {
  const [a2, s2, c2] = ((e3, n3, t3) => {
    let o3 = n3, r3 = diffTimes(e3, n3);
    return Math.sign(r3) === -t3 && (o3 = Ua(n3, -t3), r3 += go * t3), [e3, o3, r3];
  })(n2, t2, o2);
  return __spreadValues(__spreadValues({}, e2.h(a2, s2, r2, i2)), nanoToDurationTimeFields(c2));
}
function Sa(e2, n2, t2, o2) {
  function updateMid() {
    return l2 = __spreadValues(__spreadValues({}, Ua(a2, c2++ * -o2)), i2), f2 = $o(e2, l2), pa(s2, f2) === -o2;
  }
  const r2 = he(n2, e2), i2 = nn(w, r2), a2 = he(t2, e2), s2 = t2.epochNanoseconds;
  let c2 = 0;
  const u2 = diffTimes(r2, a2);
  let l2, f2;
  if (Math.sign(u2) === -o2 && c2++, updateMid() && (-1 === o2 || updateMid())) {
    throw new RangeError(du);
  }
  const d2 = La(va(f2, s2));
  return [r2, l2, d2];
}
function diffEpochNanos(e2, n2, t2, o2, r2, i2) {
  return __spreadValues(__spreadValues({}, ll), nanoToDurationDayTimeFields(roundBigNano(va(e2, n2), o2, r2, i2), t2));
}
function diffEpochNanosExact(e2, n2, t2) {
  return __spreadValues(__spreadValues({}, ll), nanoToDurationDayTimeFields(va(e2, n2), t2));
}
function td(e2, n2) {
  return diffEpochMilliByDay(isoToEpochMilli(e2), isoToEpochMilli(n2));
}
function diffEpochMilliByDay(e2, n2) {
  return Math.trunc((n2 - e2) / Cu);
}
function diffTimes(e2, n2) {
  return isoTimeFieldsToNano(n2) - isoTimeFieldsToNano(e2);
}
function nativeDateUntil(e2, n2, t2) {
  if (t2 <= 7) {
    let o3 = 0, r3 = td(__spreadValues(__spreadValues({}, e2), At), __spreadValues(__spreadValues({}, n2), At));
    return 7 === t2 && ([o3, r3] = divModTrunc(r3, 7)), __spreadProps(__spreadValues({}, ll), {
      weeks: o3,
      days: r3
    });
  }
  const o2 = this.u(e2), r2 = this.u(n2);
  let [i2, a2, s2] = ((e3, n3, t3, o3, r3, i3, a3) => {
    let s3 = r3 - n3, c2 = i3 - t3, u2 = a3 - o3;
    if (s3 || c2) {
      const l2 = Math.sign(s3 || c2);
      let f2 = e3.B(r3, i3), d2 = 0;
      if (Math.sign(u2) === -l2) {
        const o4 = f2;
        [r3, i3] = e3.p(r3, i3, -l2), s3 = r3 - n3, c2 = i3 - t3, f2 = e3.B(r3, i3), d2 = l2 < 0 ? -o4 : f2;
      }
      if (u2 = a3 - Math.min(o3, f2) + d2, s3) {
        const [o4, a4] = e3.m(n3, t3), [u3, f3] = e3.m(r3, i3);
        if (c2 = u3 - o4 || Number(f3) - Number(a4), Math.sign(c2) === -l2) {
          const t4 = l2 < 0 && -e3.O(r3);
          s3 = (r3 -= l2) - n3, c2 = i3 - monthCodeNumberToMonth(o4, a4, e3.F(r3)) + (t4 || e3.O(r3));
        }
      }
    }
    return [s3, c2, u2];
  })(this, ...o2, ...r2);
  return 8 === t2 && (a2 += this.q(i2, o2[0]), i2 = 0), __spreadProps(__spreadValues({}, ll), {
    years: i2,
    months: a2,
    days: s2
  });
}
function computeIsoMonthsInYearSpan(e2) {
  return e2 * Fl;
}
function computeIntlMonthsInYearSpan(e2, n2) {
  const t2 = n2 + e2, o2 = Math.sign(e2), r2 = o2 < 0 ? -1 : 0;
  let i2 = 0;
  for (let e3 = n2; e3 !== t2; e3 += o2) {
    i2 += computeIntlMonthsInYear.call(this, e3 + r2);
  }
  return i2;
}
function ha(e2, n2) {
  if (e2 !== n2) {
    throw new RangeError(mu);
  }
  return e2;
}
function ga(e2, n2) {
  if (!isTimeZoneIdsEqual(e2, n2)) {
    throw new RangeError(pu);
  }
  return e2;
}
function computeNativeWeekOfYear(e2) {
  return this.I(e2)[0];
}
function computeNativeYearOfWeek(e2) {
  return this.I(e2)[1];
}
function computeNativeInLeapYear(e2) {
  const [n2] = this.u(e2);
  return this.L(n2);
}
function computeNativeMonthsInYear(e2) {
  const [n2] = this.u(e2);
  return this.O(n2);
}
function computeNativeDaysInMonth(e2) {
  const [n2, t2] = this.u(e2);
  return this.B(n2, t2);
}
function computeNativeDaysInYear(e2) {
  const [n2] = this.u(e2);
  return this.G(n2);
}
function computeNativeDayOfYear(e2) {
  const [n2] = this.u(e2);
  return diffEpochMilliByDay(this.M(n2), isoToEpochMilli(e2)) + 1;
}
function parseMonthCode(e2) {
  const n2 = Ef.exec(e2);
  if (!n2) {
    throw new RangeError(invalidMonthCode(e2));
  }
  return [parseInt(n2[1]), Boolean(n2[2])];
}
function sa(e2, n2) {
  return "M" + wu(e2) + (n2 ? "L" : "");
}
function monthCodeNumberToMonth(e2, n2, t2) {
  return e2 + (n2 || t2 && e2 >= t2 ? 1 : 0);
}
function monthToMonthCodeNumber(e2, n2) {
  return e2 - (n2 && e2 >= n2 ? 1 : 0);
}
function eraYearToYear(e2, n2) {
  return (n2 + e2) * (Math.sign(n2) || 1) || 0;
}
function getCalendarEraOrigins(e2) {
  return nl[getCalendarIdBase(e2)];
}
function getCalendarLeapMonthMeta(e2) {
  return ol[getCalendarIdBase(e2)];
}
function getCalendarIdBase(e2) {
  return computeCalendarIdBase(e2.id || l);
}
function createIntlCalendar(e2) {
  function epochMilliToIntlFields(e3) {
    return ((e4, n3) => __spreadProps(__spreadValues({}, parseIntlYear(e4, n3)), {
      V: e4.month,
      day: parseInt(e4.day)
    }))(hashIntlFormatParts(n2, e3), t2);
  }
  const n2 = bf(e2), t2 = computeCalendarIdBase(e2);
  return {
    id: e2,
    _: createIntlFieldCache(epochMilliToIntlFields),
    J: createIntlYearDataCache(epochMilliToIntlFields)
  };
}
function createIntlFieldCache(e2) {
  return on(((n2) => {
    const t2 = isoToEpochMilli(n2);
    return e2(t2);
  }), WeakMap);
}
function createIntlYearDataCache(e2) {
  const n2 = e2(0).year - vl;
  return on(((t2) => {
    let o2, r2 = isoArgsToEpochMilli(t2 - n2), i2 = 0;
    const a2 = [], s2 = [];
    do {
      r2 += 400 * Cu;
    } while ((o2 = e2(r2)).year <= t2);
    do {
      if (r2 += (1 - o2.day) * Cu, o2.year === t2 && (a2.push(r2), s2.push(o2.V)), r2 -= Cu, ++i2 > 100 || r2 < -gl) {
        throw new RangeError(du);
      }
    } while ((o2 = e2(r2)).year >= t2);
    return {
      K: a2.reverse(),
      X: bu(s2.reverse())
    };
  }));
}
function parseIntlYear(e2, n2) {
  let t2, o2, r2 = parseIntlPartsYear(e2);
  if (e2.era) {
    const i2 = nl[n2], a2 = tl[n2] || {};
    void 0 !== i2 && (t2 = "islamic" === n2 ? "ah" : e2.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), "bc" === t2 || "b" === t2 ? t2 = "bce" : "ad" === t2 || "a" === t2 ? t2 = "ce" : "beforeroc" === t2 && (t2 = "broc"), t2 = a2[t2] || t2, o2 = r2, r2 = eraYearToYear(o2, i2[t2] || 0));
  }
  return {
    era: t2,
    eraYear: o2,
    year: r2
  };
}
function parseIntlPartsYear(e2) {
  return parseInt(e2.relatedYear || e2.year);
}
function computeIntlDay(e2) {
  return this._(e2).day;
}
function computeIntlDateParts(e2) {
  const { year: n2, V: t2, day: o2 } = this._(e2), { X: r2 } = this.J(n2);
  return [n2, r2[t2] + 1, o2];
}
function computeIsoFieldsFromIntlParts(e2, n2, t2) {
  return Pa(computeIntlEpochMilli.call(this, e2, n2, t2));
}
function computeIntlEpochMilli(e2, n2 = 1, t2 = 1) {
  return this.J(e2).K[n2 - 1] + (t2 - 1) * Cu;
}
function computeIntlMonthCodeParts(e2, n2) {
  const t2 = computeIntlLeapMonth.call(this, e2);
  return [monthToMonthCodeNumber(n2, t2), t2 === n2];
}
function computeIntlLeapMonth(e2) {
  const n2 = queryMonthStrings(this, e2), t2 = queryMonthStrings(this, e2 - 1), o2 = n2.length;
  if (o2 > t2.length) {
    const e3 = getCalendarLeapMonthMeta(this);
    if (e3 < 0) {
      return -e3;
    }
    for (let e4 = 0; e4 < o2; e4++) {
      if (n2[e4] !== t2[e4]) {
        return e4 + 1;
      }
    }
  }
}
function computeIntlInLeapYear(e2) {
  const n2 = computeIntlDaysInYear.call(this, e2);
  return n2 > computeIntlDaysInYear.call(this, e2 - 1) && n2 > computeIntlDaysInYear.call(this, e2 + 1);
}
function computeIntlDaysInYear(e2) {
  return diffEpochMilliByDay(computeIntlEpochMilli.call(this, e2), computeIntlEpochMilli.call(this, e2 + 1));
}
function computeIntlDaysInMonth(e2, n2) {
  const { K: t2 } = this.J(e2);
  let o2 = n2 + 1, r2 = t2;
  return o2 > t2.length && (o2 = 1, r2 = this.J(e2 + 1).K), diffEpochMilliByDay(t2[n2 - 1], r2[o2 - 1]);
}
function computeIntlMonthsInYear(e2) {
  return this.J(e2).K.length;
}
function computeIntlEraParts(e2) {
  const n2 = this._(e2);
  return [n2.era, n2.eraYear];
}
function computeIntlYearMonthForMonthDay(e2, n2, t2) {
  const o2 = this.id && "chinese" === computeCalendarIdBase(this.id) ? ((e3, n3, t3) => {
    if (n3) {
      switch (e3) {
        case 1:
          return 1651;
        case 2:
          return t3 < 30 ? 1947 : 1765;
        case 3:
          return t3 < 30 ? 1966 : 1955;
        case 4:
          return t3 < 30 ? 1963 : 1944;
        case 5:
          return t3 < 30 ? 1971 : 1952;
        case 6:
          return t3 < 30 ? 1960 : 1941;
        case 7:
          return t3 < 30 ? 1968 : 1938;
        case 8:
          return t3 < 30 ? 1957 : 1718;
        case 9:
          return 1832;
        case 10:
          return 1870;
        case 11:
          return 1814;
        case 12:
          return 1890;
      }
    }
    return 1972;
  })(e2, n2, t2) : Pl;
  let [r2, i2, a2] = computeIntlDateParts.call(this, {
    isoYear: o2,
    isoMonth: Fl,
    isoDay: 31
  });
  const s2 = computeIntlLeapMonth.call(this, r2), c2 = i2 === s2;
  1 === (compareNumbers(e2, monthToMonthCodeNumber(i2, s2)) || compareNumbers(Number(n2), Number(c2)) || compareNumbers(t2, a2)) && r2--;
  for (let o3 = 0; o3 < 100; o3++) {
    const i3 = r2 - o3, a3 = computeIntlLeapMonth.call(this, i3), s3 = monthCodeNumberToMonth(e2, n2, a3);
    if (n2 === (s3 === a3) && t2 <= computeIntlDaysInMonth.call(this, i3, s3)) {
      return [i3, s3];
    }
  }
}
function queryMonthStrings(e2, n2) {
  return Object.keys(e2.J(n2).X);
}
function Zt(e2) {
  return u(d(e2));
}
function u(e2) {
  if ((e2 = e2.toLowerCase()) !== l && e2 !== Xu) {
    const n2 = bf(e2).resolvedOptions().calendar;
    if (computeCalendarIdBase(e2) !== computeCalendarIdBase(n2)) {
      throw new RangeError(c(e2));
    }
    return n2;
  }
  return e2;
}
function computeCalendarIdBase(e2) {
  return "islamicc" === e2 && (e2 = "islamic"), e2.split("-")[0];
}
function createNativeOpsCreator(e2, n2) {
  return (t2) => t2 === l ? e2 : t2 === Xu || t2 === el ? Object.assign(Object.create(e2), {
    id: t2
  }) : Object.assign(Object.create(n2), Of(t2));
}
function z(e2, n2, t2, o2) {
  const r2 = refineCalendarFields(t2, o2, _u, [], ju);
  if (void 0 !== r2.timeZone) {
    const o3 = t2.ee(r2), i2 = refineTimeBag(r2), a2 = e2(r2.timeZone);
    return {
      epochNanoseconds: getMatchingInstantFor(n2(a2), __spreadValues(__spreadValues({}, o3), i2), void 0 !== r2.offset ? parseOffsetNano(r2.offset) : void 0),
      timeZone: a2
    };
  }
  return __spreadValues(__spreadValues({}, t2.ee(r2)), At);
}
function Ae(e2, n2, t2, o2, r2, i2) {
  const a2 = refineCalendarFields(t2, r2, _u, Au, ju), s2 = e2(a2.timeZone), [c2, u2, l2] = je(i2), f2 = t2.ee(a2, fabricateOverflowOptions(c2)), d2 = refineTimeBag(a2, c2);
  return Xe(getMatchingInstantFor(n2(s2), __spreadValues(__spreadValues({}, f2), d2), void 0 !== a2.offset ? parseOffsetNano(a2.offset) : void 0, u2, l2), s2, o2);
}
function Nt(e2, n2, t2) {
  const o2 = refineCalendarFields(e2, n2, _u, [], p), r2 = dt(t2);
  return jt(Do(__spreadValues(__spreadValues({}, e2.ee(o2, fabricateOverflowOptions(r2))), refineTimeBag(o2, r2))));
}
function de(e2, n2, t2, o2 = []) {
  const r2 = refineCalendarFields(e2, n2, _u, o2);
  return e2.ee(r2, t2);
}
function Ut(e2, n2, t2, o2) {
  const r2 = refineCalendarFields(e2, n2, Gu, o2);
  return e2.ne(r2, t2);
}
function Rt(e2, n2, t2, o2) {
  const r2 = refineCalendarFields(e2, t2, _u, Hu);
  return n2 && void 0 !== r2.month && void 0 === r2.monthCode && void 0 === r2.year && (r2.year = Pl), e2.te(r2, o2);
}
function Tt(e2, n2) {
  return St(refineTimeBag(refineFields(e2, Ru, [], 1), dt(n2)));
}
function q(e2) {
  const n2 = refineFields(e2, il);
  return pe(checkDurationUnits(__spreadValues(__spreadValues({}, ll), n2)));
}
function refineCalendarFields(e2, n2, t2, o2 = [], r2 = []) {
  return refineFields(n2, [...e2.fields(t2), ...r2].sort(), o2);
}
function refineFields(e2, n2, t2, o2 = !t2) {
  const r2 = {};
  let i2, a2 = 0;
  for (const o3 of n2) {
    if (o3 === i2) {
      throw new RangeError(duplicateFields(o3));
    }
    if ("constructor" === o3 || "__proto__" === o3) {
      throw new RangeError(forbiddenField(o3));
    }
    let n3 = e2[o3];
    if (void 0 !== n3) {
      a2 = 1, Rm[o3] && (n3 = Rm[o3](n3, o3)), r2[o3] = n3;
    } else if (t2) {
      if (t2.includes(o3)) {
        throw new TypeError(missingField(o3));
      }
      r2[o3] = Qu[o3];
    }
    i2 = o3;
  }
  if (o2 && !a2) {
    throw new TypeError(noValidFields(n2));
  }
  return r2;
}
function refineTimeBag(e2, n2) {
  return constrainIsoTimeFields(zm(__spreadValues(__spreadValues({}, Qu), e2)), n2);
}
function De(e2, n2, t2, o2, r2) {
  const { calendar: i2, timeZone: a2 } = t2, s2 = e2(i2), c2 = n2(a2), u2 = [...s2.fields(_u), ...Uu].sort(), l2 = ((e3) => {
    const n3 = he(e3, L), t3 = Se(n3.offsetNanoseconds), o3 = ra(e3.calendar), [r3, i3, a3] = o3.u(n3), [s3, c3] = o3.m(r3, i3), u3 = sa(s3, c3);
    return __spreadProps(__spreadValues({}, Ga(n3)), {
      year: r3,
      monthCode: u3,
      day: a3,
      offset: t3
    });
  })(t2), f2 = refineFields(o2, u2), d2 = s2.oe(l2, f2), m2 = __spreadValues(__spreadValues({}, l2), f2), [p2, h2, I2] = je(r2, 2);
  return Xe(getMatchingInstantFor(c2, __spreadValues(__spreadValues({}, s2.ee(d2, fabricateOverflowOptions(p2))), constrainIsoTimeFields(zm(m2), p2)), parseOffsetNano(m2.offset), h2, I2), a2, i2);
}
function Pt(e2, n2, t2, o2) {
  const r2 = e2(n2.calendar), i2 = [...r2.fields(_u), ...p].sort(), a2 = __spreadProps(__spreadValues({}, computeDateEssentials(s2 = n2)), {
    hour: s2.isoHour,
    minute: s2.isoMinute,
    second: s2.isoSecond,
    millisecond: s2.isoMillisecond,
    microsecond: s2.isoMicrosecond,
    nanosecond: s2.isoNanosecond
  });
  var s2;
  const c2 = refineFields(t2, i2), u2 = dt(o2), l2 = r2.oe(a2, c2), f2 = __spreadValues(__spreadValues({}, a2), c2);
  return jt(Do(__spreadValues(__spreadValues({}, r2.ee(l2, fabricateOverflowOptions(u2))), constrainIsoTimeFields(zm(f2), u2))));
}
function ee(e2, n2, t2, o2) {
  const r2 = e2(n2.calendar), i2 = r2.fields(_u).sort(), a2 = computeDateEssentials(n2), s2 = refineFields(t2, i2), c2 = r2.oe(a2, s2);
  return r2.ee(c2, o2);
}
function Wt(e2, n2, t2, o2) {
  const r2 = e2(n2.calendar), i2 = r2.fields(Gu).sort(), a2 = ((e3) => {
    const n3 = ra(e3.calendar), [t3, o3] = n3.u(e3), [r3, i3] = n3.m(t3, o3);
    return {
      year: t3,
      monthCode: sa(r3, i3)
    };
  })(n2), s2 = refineFields(t2, i2), c2 = r2.oe(a2, s2);
  return r2.ne(c2, o2);
}
function Et(e2, n2, t2, o2) {
  const r2 = e2(n2.calendar), i2 = r2.fields(_u).sort(), a2 = ((e3) => {
    const n3 = ra(e3.calendar), [t3, o3, r3] = n3.u(e3), [i3, a3] = n3.m(t3, o3);
    return {
      monthCode: sa(i3, a3),
      day: r3
    };
  })(n2), s2 = refineFields(t2, i2), c2 = r2.oe(a2, s2);
  return r2.te(c2, o2);
}
function rt(e2, n2, t2) {
  return St(((e3, n3, t3) => refineTimeBag(__spreadValues(__spreadValues({}, nn(Ru, e3)), refineFields(n3, Ru)), dt(t3)))(e2, n2, t2));
}
function N(e2, n2) {
  return pe((t2 = e2, o2 = n2, checkDurationUnits(__spreadValues(__spreadValues({}, t2), refineFields(o2, il)))));
  var t2, o2;
}
function convertToPlainMonthDay(e2, n2) {
  const t2 = refineCalendarFields(e2, n2, Ku);
  return e2.te(t2);
}
function convertToPlainYearMonth(e2, n2, t2) {
  const o2 = refineCalendarFields(e2, n2, Vu);
  return e2.ne(o2, t2);
}
function convertToIso(e2, n2, t2, o2, r2) {
  n2 = nn(t2 = e2.fields(t2), n2), o2 = refineFields(o2, r2 = e2.fields(r2), []);
  let i2 = e2.oe(n2, o2);
  return i2 = refineFields(i2, [...t2, ...r2].sort(), []), e2.ee(i2);
}
function nativeDateFromFields(e2, n2) {
  const t2 = dt(n2), o2 = refineYear(this, e2), r2 = refineMonth(this, e2, o2, t2), i2 = refineDay(this, e2, r2, o2, t2);
  return W(To(this.U(o2, r2, i2)), this.id || l);
}
function nativeYearMonthFromFields(e2, n2) {
  const t2 = dt(n2), o2 = refineYear(this, e2), r2 = refineMonth(this, e2, o2, t2);
  return createPlainYearMonthSlots(checkIsoYearMonthInBounds(this.U(o2, r2, 1)), this.id || l);
}
function nativeMonthDayFromFields(e2, n2) {
  const t2 = dt(n2);
  let o2, r2, i2, a2 = void 0 !== e2.eraYear || void 0 !== e2.year ? refineYear(this, e2) : void 0;
  const s2 = !this.id;
  if (void 0 === a2 && s2 && (a2 = Pl), void 0 !== a2) {
    const n3 = refineMonth(this, e2, a2, t2);
    o2 = refineDay(this, e2, n3, a2, t2);
    const s3 = this.F(a2);
    r2 = monthToMonthCodeNumber(n3, s3), i2 = n3 === s3;
  } else {
    if (void 0 === e2.monthCode) {
      throw new TypeError(lu);
    }
    if ([r2, i2] = parseMonthCode(e2.monthCode), this.id && this.id !== Xu && this.id !== el) {
      if (this.id && "coptic" === computeCalendarIdBase(this.id) && 0 === t2) {
        const n3 = i2 || 13 !== r2 ? 30 : 6;
        o2 = e2.day, o2 = clampNumber(o2, 1, n3);
      } else if (this.id && "chinese" === computeCalendarIdBase(this.id) && 0 === t2) {
        const n3 = !i2 || 1 !== r2 && 9 !== r2 && 10 !== r2 && 11 !== r2 && 12 !== r2 ? 30 : 29;
        o2 = e2.day, o2 = clampNumber(o2, 1, n3);
      } else {
        o2 = e2.day;
      }
    } else {
      o2 = refineDay(this, e2, refineMonth(this, e2, Pl, t2), Pl, t2);
    }
  }
  const c2 = this.R(r2, i2, o2);
  if (!c2) {
    throw new RangeError("Cannot guess year");
  }
  const [u2, f2] = c2;
  return createPlainMonthDaySlots(To(this.U(u2, f2, o2)), this.id || l);
}
function nativeFieldsMethod(e2) {
  return getCalendarEraOrigins(this) && e2.includes("year") ? [...e2, ...qu] : e2;
}
function nativeMergeFields(e2, n2) {
  const t2 = Object.assign(/* @__PURE__ */ Object.create(null), e2);
  return spliceFields(t2, n2, $u), getCalendarEraOrigins(this) && (spliceFields(t2, n2, Lu), this.id === el && spliceFields(t2, n2, Ju, qu)), t2;
}
function refineYear(e2, n2) {
  const t2 = getCalendarEraOrigins(e2), o2 = tl[e2.id || ""] || {};
  let { era: r2, eraYear: i2, year: a2 } = n2;
  if (void 0 !== r2 || void 0 !== i2) {
    if (void 0 === r2 || void 0 === i2) {
      throw new TypeError(su);
    }
    if (!t2) {
      throw new RangeError(iu);
    }
    const e3 = t2[o2[r2] || r2];
    if (void 0 === e3) {
      throw new RangeError(invalidEra(r2));
    }
    const n3 = eraYearToYear(i2, e3);
    if (void 0 !== a2 && a2 !== n3) {
      throw new RangeError(cu);
    }
    a2 = n3;
  } else if (void 0 === a2) {
    throw new TypeError(missingYear(t2));
  }
  return a2;
}
function refineMonth(e2, n2, t2, o2) {
  let { month: r2, monthCode: i2 } = n2;
  if (void 0 !== i2) {
    const n3 = ((e3, n4, t3, o3) => {
      const r3 = e3.F(t3), [i3, a2] = parseMonthCode(n4);
      let s2 = monthCodeNumberToMonth(i3, a2, r3);
      if (a2) {
        const n5 = getCalendarLeapMonthMeta(e3);
        if (void 0 === n5) {
          throw new RangeError(fu);
        }
        if (n5 > 0) {
          if (s2 > n5) {
            throw new RangeError(fu);
          }
          if (void 0 === r3) {
            if (1 === o3) {
              throw new RangeError(fu);
            }
            s2--;
          }
        } else {
          if (s2 !== -n5) {
            throw new RangeError(fu);
          }
          if (void 0 === r3 && 1 === o3) {
            throw new RangeError(fu);
          }
        }
      }
      return s2;
    })(e2, i2, t2, o2);
    if (void 0 !== r2 && r2 !== n3) {
      throw new RangeError(uu);
    }
    r2 = n3, o2 = 1;
  } else if (void 0 === r2) {
    throw new TypeError(lu);
  }
  return ba("month", r2, 1, e2.O(t2), o2);
}
function refineDay(e2, n2, t2, o2, r2) {
  return clampProp(n2, "day", 1, e2.B(o2, t2), r2);
}
function spliceFields(e2, n2, t2, o2) {
  let r2 = 0;
  const i2 = [];
  for (const e3 of t2) {
    void 0 !== n2[e3] ? r2 = 1 : i2.push(e3);
  }
  if (Object.assign(e2, n2), r2) {
    for (const n3 of o2 || i2) {
      delete e2[n3];
    }
  }
}
function computeDateEssentials(e2) {
  const n2 = ra(e2.calendar), [t2, o2, r2] = n2.u(e2), [i2, a2] = n2.m(t2, o2);
  return {
    year: t2,
    monthCode: sa(i2, a2),
    day: r2
  };
}
function qe(e2) {
  return xe(io(bigIntToBigNano(toBigInt(e2))));
}
function ye(e2, n2, t2, o2, r2 = l) {
  return Xe(io(bigIntToBigNano(toBigInt(t2))), n2(o2), e2(r2));
}
function Mt(n2, t2, o2, r2, i2 = 0, a2 = 0, s2 = 0, c2 = 0, u2 = 0, f2 = 0, d2 = l) {
  return jt(Do(checkIsoDateTimeFields(e(Za, zipProps(pl, [t2, o2, r2, i2, a2, s2, c2, u2, f2])))), n2(d2));
}
function ue(n2, t2, o2, r2, i2 = l) {
  return W(To(checkIsoDateFields(e(Za, {
    isoYear: t2,
    isoMonth: o2,
    isoDay: r2
  }))), n2(i2));
}
function Kt(e2, n2, t2, o2 = l, r2 = 1) {
  const i2 = Za(n2), a2 = Za(t2), s2 = e2(o2);
  return createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields({
    isoYear: i2,
    isoMonth: a2,
    isoDay: Za(r2)
  })), s2);
}
function kt(e2, n2, t2, o2 = l, r2 = Pl) {
  const i2 = Za(n2), a2 = Za(t2), s2 = e2(o2);
  return createPlainMonthDaySlots(To(checkIsoDateFields({
    isoYear: Za(r2),
    isoMonth: i2,
    isoDay: a2
  })), s2);
}
function ut(n2 = 0, t2 = 0, o2 = 0, r2 = 0, i2 = 0, a2 = 0) {
  return St(constrainIsoTimeFields(e(Za, zipProps(w, [n2, t2, o2, r2, i2, a2])), 1));
}
function j(n2 = 0, t2 = 0, o2 = 0, r2 = 0, i2 = 0, a2 = 0, s2 = 0, c2 = 0, u2 = 0, l2 = 0) {
  return pe(checkDurationUnits(e(Ba, zipProps(O, [n2, t2, o2, r2, i2, a2, s2, c2, u2, l2]))));
}
function Je(e2, n2, t2 = l) {
  return Xe(e2.epochNanoseconds, n2, t2);
}
function Ce(e2) {
  return xe(e2.epochNanoseconds);
}
function yt(e2, n2) {
  return jt(he(n2, e2));
}
function fe(e2, n2) {
  return W(he(n2, e2));
}
function mt(e2, n2) {
  return St(he(n2, e2));
}
function Ct(e2, n2, t2, o2) {
  const r2 = ((e3, n3, t3, o3) => {
    const r3 = ((e4) => Vl(normalizeOptions(e4)))(o3);
    return $o(e3(n3), t3, r3);
  })(e2, t2, n2, o2);
  return Xe(io(r2), t2, n2.calendar);
}
function ae(e2, n2, t2, o2, r2) {
  const i2 = e2(r2.timeZone), a2 = r2.plainTime, s2 = void 0 !== a2 ? n2(a2) : void 0, c2 = t2(i2);
  let u2;
  return u2 = s2 ? $o(c2, __spreadValues(__spreadValues({}, o2), s2)) : getStartOfDayInstantFor(c2, __spreadValues(__spreadValues({}, o2), At)), Xe(u2, i2, o2.calendar);
}
function ie(e2, n2 = At) {
  return jt(Do(__spreadValues(__spreadValues({}, e2), n2)));
}
function le(e2, n2, t2) {
  return convertToPlainYearMonth(e2(n2.calendar), t2);
}
function se(e2, n2, t2) {
  return convertToPlainMonthDay(e2(n2.calendar), t2);
}
function $t(e2, n2, t2, o2) {
  return ((e3, n3, t3) => convertToIso(e3, n3, Vu, oa(t3), Hu))(e2(n2.calendar), t2, o2);
}
function Vt(e2, n2, t2, o2) {
  return ((e3, n3, t3) => convertToIso(e3, n3, Ku, oa(t3), Wu))(e2(n2.calendar), t2, o2);
}
function ze(e2) {
  return xe(io(Ge(Ba(e2), Ke)));
}
function $e(e2) {
  return xe(io(bigIntToBigNano(toBigInt(e2))));
}
function createOptionsTransformer(e2, n2, t2) {
  const o2 = new Set(t2);
  return (r2, i2) => {
    const a2 = t2 && hasAnyPropsByName(r2, t2);
    if (!hasAnyPropsByName(r2 = ((e3, n3) => {
      const t3 = {};
      for (const o3 in n3) {
        e3.has(o3) || (t3[o3] = n3[o3]);
      }
      return t3;
    })(o2, r2), e2)) {
      if (i2 && a2) {
        throw new TypeError("Invalid formatting options");
      }
      r2 = __spreadValues(__spreadValues({}, n2), r2);
    }
    return t2 && (r2.timeZone = nf, ["full", "long"].includes(r2.ie) && (r2.ie = "medium")), r2;
  };
}
function K(e2, n2 = an, t2 = 0) {
  const [o2, , , r2] = e2;
  return (i2, a2 = mp, ...s2) => {
    const c2 = n2(r2 && r2(...s2), i2, a2, o2, t2), u2 = c2.resolvedOptions();
    return [c2, ...toEpochMillis(e2, u2, s2)];
  };
}
function an(e2, n2, t2, o2, r2) {
  if (t2 = o2(t2, r2), e2) {
    if (void 0 !== t2.timeZone) {
      throw new TypeError(Ou);
    }
    t2.timeZone = e2;
  }
  return new en(n2, t2);
}
function computeNonBuggyIsoResolve() {
  return new en(void 0, {
    calendar: l
  }).resolvedOptions().calendar === l;
}
function toEpochMillis(e2, n2, t2) {
  const [, o2, r2] = e2;
  return t2.map(((e3) => (e3.calendar && ((e4, n3, t3) => {
    if ((t3 || e4 !== l) && e4 !== n3) {
      throw new RangeError(mu);
    }
  })(e3.calendar, n2.calendar, r2), o2(e3, n2))));
}
function Pe(e2, n2, t2) {
  const o2 = n2.timeZone, r2 = e2(o2), i2 = __spreadValues(__spreadValues({}, he(n2, r2)), t2 || At);
  let a2;
  return a2 = t2 ? getMatchingInstantFor(r2, i2, i2.offsetNanoseconds, 2) : getStartOfDayInstantFor(r2, i2), Xe(a2, o2, n2.calendar);
}
function pt(e2, n2 = At) {
  return jt(Do(__spreadValues(__spreadValues({}, e2), n2)));
}
function Ot(e2, n2) {
  return __spreadProps(__spreadValues({}, e2), {
    calendar: n2
  });
}
function ge(e2, n2) {
  return __spreadProps(__spreadValues({}, e2), {
    timeZone: n2
  });
}
function tn(e2) {
  const n2 = Ue();
  return So(n2, e2.N(n2));
}
function Ue() {
  return Ge(Date.now(), Ke);
}
function Qe() {
  return new en().resolvedOptions().timeZone;
}
var expectedInteger = (e2, n2) => `Non-integer ${e2}: ${n2}`;
var expectedPositive = (e2, n2) => `Non-positive ${e2}: ${n2}`;
var expectedFinite = (e2, n2) => `Non-finite ${e2}: ${n2}`;
var forbiddenBigIntToNumber = (e2) => `Cannot convert bigint to ${e2}`;
var invalidBigInt = (e2) => `Invalid bigint: ${e2}`;
var ou = "Cannot convert Symbol to string";
var ru = "Invalid object";
var numberOutOfRange = (e2, n2, t2, o2, r2) => r2 ? numberOutOfRange(e2, r2[n2], r2[t2], r2[o2]) : invalidEntity(e2, n2) + `; must be between ${t2}-${o2}`;
var invalidEntity = (e2, n2) => `Invalid ${e2}: ${n2}`;
var missingField = (e2) => `Missing ${e2}`;
var forbiddenField = (e2) => `Invalid field ${e2}`;
var duplicateFields = (e2) => `Duplicate field ${e2}`;
var noValidFields = (e2) => "No valid fields: " + e2.join();
var i = "Invalid bag";
var invalidChoice = (e2, n2, t2) => invalidEntity(e2, n2) + "; must be " + Object.keys(t2).join();
var C = "Cannot use valueOf";
var a = "Invalid calling context";
var iu = "Forbidden era/eraYear";
var su = "Mismatching era/eraYear";
var cu = "Mismatching year/eraYear";
var invalidEra = (e2) => `Invalid era: ${e2}`;
var missingYear = (e2) => "Missing year" + (e2 ? "/era/eraYear" : "");
var invalidMonthCode = (e2) => `Invalid monthCode: ${e2}`;
var uu = "Mismatching month/monthCode";
var lu = "Missing month/monthCode";
var fu = "Invalid leap month";
var du = "Invalid protocol results";
var c = (e2) => invalidEntity("Calendar", e2);
var mu = "Mismatching Calendars";
var F = (e2) => invalidEntity("TimeZone", e2);
var pu = "Mismatching TimeZones";
var hu = "Forbidden ICU TimeZone";
var Iu = "Out-of-bounds offset";
var Du = "Out-of-bounds TimeZone gap";
var gu = "Invalid TimeZone offset";
var Tu = "Ambiguous offset";
var Mu = "Out-of-bounds date";
var yu = "Out-of-bounds duration";
var Nu = "Cannot mix duration signs";
var vu = "Missing relativeTo";
var Pu = "Cannot use large units";
var Fu = "Required smallestUnit or largestUnit";
var Eu = "smallestUnit > largestUnit";
var failedParse = (e2) => `Cannot parse: ${e2}`;
var invalidSubstring = (e2) => `Invalid substring: ${e2}`;
var rn = (e2) => `Cannot format ${e2}`;
var ln = "Mismatching types for formatting";
var Ou = "Cannot specify TimeZone";
var bu = /* @__PURE__ */ gt(P, ((e2, n2) => n2));
var Su = /* @__PURE__ */ gt(P, ((e2, n2, t2) => t2));
var wu = /* @__PURE__ */ gt(padNumber, 2);
var Bu = {
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
var Yu = /* @__PURE__ */ Object.keys(Bu);
var Cu = 864e5;
var ku = 1e3;
var ro = 1e3;
var Ke = 1e6;
var oo = 1e9;
var ao = 6e10;
var no = 36e11;
var go = 864e11;
var Zu = [1, ro, Ke, oo, ao, no, go];
var p = /* @__PURE__ */ Yu.slice(0, 6);
var Ru = /* @__PURE__ */ sortStrings(p);
var zu = ["offset"];
var Au = ["timeZone"];
var Uu = /* @__PURE__ */ p.concat(zu);
var ju = /* @__PURE__ */ Uu.concat(Au);
var qu = ["era", "eraYear"];
var Lu = /* @__PURE__ */ qu.concat(["year"]);
var Wu = ["year"];
var xu = ["monthCode"];
var $u = /* @__PURE__ */ ["month"].concat(xu);
var Hu = ["day"];
var Gu = /* @__PURE__ */ $u.concat(Wu);
var Vu = /* @__PURE__ */ xu.concat(Wu);
var _u = /* @__PURE__ */ Hu.concat(Gu);
var Ju = /* @__PURE__ */ Hu.concat($u);
var Ku = /* @__PURE__ */ Hu.concat(xu);
var Qu = /* @__PURE__ */ Su(p, 0);
var l = "iso8601";
var Xu = "gregory";
var el = "japanese";
var nl = {
  [Xu]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [el]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
};
var tl = {
  [Xu]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [el]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
};
var ol = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
};
var d = /* @__PURE__ */ gt(requireType, "string");
var D = /* @__PURE__ */ gt(requireType, "boolean");
var rl = /* @__PURE__ */ gt(requireType, "number");
var O = /* @__PURE__ */ Yu.map(((e2) => e2 + "s"));
var il = /* @__PURE__ */ sortStrings(O);
var al = /* @__PURE__ */ O.slice(0, 6);
var sl = /* @__PURE__ */ O.slice(6);
var cl = /* @__PURE__ */ sl.slice(1);
var ul = /* @__PURE__ */ bu(O);
var ll = /* @__PURE__ */ Su(O, 0);
var fl = /* @__PURE__ */ Su(al, 0);
var dl = /* @__PURE__ */ gt(zeroOutProps, O);
var w = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"];
var ml = ["isoDay", "isoMonth", "isoYear"];
var pl = /* @__PURE__ */ w.concat(ml);
var Ca = /* @__PURE__ */ sortStrings(ml);
var hl = /* @__PURE__ */ sortStrings(w);
var Il = /* @__PURE__ */ sortStrings(pl);
var At = /* @__PURE__ */ Su(hl, 0);
var Ra = /* @__PURE__ */ gt(zeroOutProps, pl);
var Dl = 1e8;
var gl = Dl * Cu;
var Tl = [Dl, 0];
var Ml = [-Dl, 0];
var yl = 275760;
var Nl = -271821;
var en = Intl.DateTimeFormat;
var vl = 1970;
var Pl = 1972;
var Fl = 12;
var El = /* @__PURE__ */ isoArgsToEpochMilli(1868, 9, 8);
var Ol = /* @__PURE__ */ on(computeJapaneseEraParts, WeakMap);
var bl = "smallestUnit";
var Sl = "unit";
var wl = "roundingMode";
var Bl = "roundingIncrement";
var Yl = "fractionalSecondDigits";
var Cl = "relativeTo";
var kl = "direction";
var Zl = {
  constrain: 0,
  reject: 1
};
var Rl = /* @__PURE__ */ Object.keys(Zl);
var zl = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
};
var Al = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
};
var Ul = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
};
var jl = {
  auto: 0,
  never: 1,
  critical: 2
};
var ql = {
  auto: 0,
  never: 1
};
var Ll = {
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
var Wl = {
  previous: -1,
  next: 1
};
var xl = /* @__PURE__ */ gt(refineUnitOption, bl);
var $l = /* @__PURE__ */ gt(refineUnitOption, "largestUnit");
var Hl = /* @__PURE__ */ gt(refineUnitOption, Sl);
var Gl = /* @__PURE__ */ gt(refineChoiceOption, "overflow", Zl);
var Vl = /* @__PURE__ */ gt(refineChoiceOption, "disambiguation", zl);
var _l = /* @__PURE__ */ gt(refineChoiceOption, "offset", Al);
var Jl = /* @__PURE__ */ gt(refineChoiceOption, "calendarName", Ul);
var Kl = /* @__PURE__ */ gt(refineChoiceOption, "timeZoneName", jl);
var Ql = /* @__PURE__ */ gt(refineChoiceOption, "offset", ql);
var Xl = /* @__PURE__ */ gt(refineChoiceOption, wl, Ll);
var Qt = "PlainYearMonth";
var qt = "PlainMonthDay";
var G = "PlainDate";
var x = "PlainDateTime";
var ft = "PlainTime";
var _ = "ZonedDateTime";
var Re = "Instant";
var A = "Duration";
var ef = [Math.floor, (e2) => hasHalf(e2) ? Math.floor(e2) : Math.round(e2), Math.ceil, (e2) => hasHalf(e2) ? Math.ceil(e2) : Math.round(e2), Math.trunc, (e2) => hasHalf(e2) ? Math.trunc(e2) || 0 : Math.round(e2), (e2) => e2 < 0 ? Math.floor(e2) : Math.ceil(e2), (e2) => Math.sign(e2) * Math.round(Math.abs(e2)) || 0, (e2) => hasHalf(e2) ? (e2 = Math.trunc(e2) || 0) + e2 % 2 : Math.round(e2)];
var nf = "UTC";
var tf = 5184e3;
var of = /* @__PURE__ */ isoArgsToEpochSec(1847);
var rf = /* @__PURE__ */ isoArgsToEpochSec((() => {
  const e2 = /* @__PURE__ */ new Date();
  return (0 === e2.getTime() ? 2040 : e2.getUTCFullYear()) + 10;
})());
var af = /0+$/;
var he = /* @__PURE__ */ on(_zonedEpochSlotsToIso, WeakMap);
var sf = 2 ** 32 - 1;
var L = /* @__PURE__ */ on(((e2) => {
  const n2 = getTimeZoneEssence(e2);
  return "object" == typeof n2 ? new IntlTimeZone(n2) : new FixedTimeZone(n2 || 0);
}));
var FixedTimeZone = class {
  constructor(e2) {
    this.j = e2;
  }
  N() {
    return this.j;
  }
  v(e2) {
    return ((e3) => {
      const n2 = ma(__spreadValues(__spreadValues({}, e3), At));
      if (!n2 || Math.abs(n2[0]) > 1e8) {
        throw new RangeError(Mu);
      }
    })(e2), [isoToEpochNanoWithOffset(e2, this.j)];
  }
  l() {
  }
};
var IntlTimeZone = class {
  constructor(e2) {
    this.ae = ((e3) => {
      function getOffsetSec(e4) {
        const i2 = clampNumber(e4, o2, r2), [a2, s2] = computePeriod(i2), c2 = n2(a2), u2 = n2(s2);
        return c2 === u2 ? c2 : pinch(t2(a2, s2), c2, u2, e4);
      }
      function pinch(n3, t3, o3, r3) {
        let i2, a2;
        for (; (void 0 === r3 || void 0 === (i2 = r3 < n3[0] ? t3 : r3 >= n3[1] ? o3 : void 0)) && (a2 = n3[1] - n3[0]); ) {
          const t4 = n3[0] + Math.floor(a2 / 2);
          e3(t4) === o3 ? n3[1] = t4 : n3[0] = t4 + 1;
        }
        return i2;
      }
      const n2 = on(e3), t2 = on(createSplitTuple);
      let o2 = of, r2 = rf;
      return {
        se(e4) {
          const n3 = getOffsetSec(e4 - 86400), t3 = getOffsetSec(e4 + 86400), o3 = e4 - n3, r3 = e4 - t3;
          if (n3 === t3) {
            return [o3];
          }
          const i2 = getOffsetSec(o3);
          return i2 === getOffsetSec(r3) ? [e4 - i2] : n3 > t3 ? [o3, r3] : [];
        },
        ue: getOffsetSec,
        l(e4, i2) {
          const a2 = clampNumber(e4, o2, r2);
          let [s2, c2] = computePeriod(a2);
          const u2 = tf * i2, l2 = i2 < 0 ? () => c2 > o2 || (o2 = a2, 0) : () => s2 < r2 || (r2 = a2, 0);
          for (; l2(); ) {
            const o3 = n2(s2), r3 = n2(c2);
            if (o3 !== r3) {
              const n3 = t2(s2, c2);
              pinch(n3, o3, r3);
              const a3 = n3[0];
              if ((compareNumbers(a3, e4) || 1) === i2) {
                return a3;
              }
            }
            s2 += u2, c2 += u2;
          }
        }
      };
    })(/* @__PURE__ */ ((e3) => (n2) => {
      const t2 = hashIntlFormatParts(e3, n2 * ku);
      return isoArgsToEpochSec(parseIntlPartsYear(t2), parseInt(t2.month), parseInt(t2.day), parseInt(t2.hour), parseInt(t2.minute), parseInt(t2.second)) - n2;
    })(e2));
  }
  N(e2) {
    return this.ae.ue(epochNanoToSec(e2)) * oo;
  }
  v(e2) {
    const [n2, t2] = [isoArgsToEpochSec((o2 = e2).isoYear, o2.isoMonth, o2.isoDay, o2.isoHour, o2.isoMinute, o2.isoSecond), o2.isoMillisecond * Ke + o2.isoMicrosecond * ro + o2.isoNanosecond];
    var o2;
    return this.ae.se(n2).map(((e3) => io(Ta(Ge(e3, oo), t2))));
  }
  l(e2, n2) {
    const [t2, o2] = epochNanoToSecMod(e2), r2 = this.ae.l(t2 + (n2 > 0 || o2 ? 1 : 0), n2);
    if (void 0 !== r2) {
      return Ge(r2, oo);
    }
  }
};
var cf = "([+-])";
var uf = "(?:[.,](\\d{1,9}))?";
var lf = `(?:(?:${cf}(\\d{6}))|(\\d{4}))-?(\\d{2})`;
var ff = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + uf + ")?)?";
var df = cf + ff;
var mf = lf + "-?(\\d{2})(?:[T ]" + ff + "(Z|" + df + ")?)?";
var pf = "\\[(!?)([^\\]]*)\\]";
var hf = `((?:${pf}){0,9})`;
var If = /* @__PURE__ */ createRegExp(lf + hf);
var Df = /* @__PURE__ */ createRegExp("(?:--)?(\\d{2})-?(\\d{2})" + hf);
var gf = /* @__PURE__ */ createRegExp(mf + hf);
var Tf = /* @__PURE__ */ createRegExp("T?" + ff + "(?:" + df + ")?" + hf);
var Mf = /* @__PURE__ */ createRegExp(df);
var yf = /* @__PURE__ */ new RegExp(pf, "g");
var Nf = /* @__PURE__ */ createRegExp(`${cf}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${uf}H)?(?:(\\d+)${uf}M)?(?:(\\d+)${uf}S)?)?`);
var vf = /* @__PURE__ */ on(((e2) => new en("en", {
  calendar: l,
  timeZone: e2,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: 0
})));
var Pf = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/;
var Ff = /[^\w\/:+-]+/;
var Ef = /^M(\d{2})(L?)$/;
var Of = /* @__PURE__ */ on(createIntlCalendar);
var bf = /* @__PURE__ */ on(((e2) => new en("en", {
  calendar: e2,
  timeZone: nf,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour12: 0
})));
var kf = {
  P: nativeDateAdd,
  h: nativeDateUntil,
  ee: nativeDateFromFields,
  ne: nativeYearMonthFromFields,
  te: nativeMonthDayFromFields,
  fields: nativeFieldsMethod,
  oe: nativeMergeFields,
  inLeapYear: computeNativeInLeapYear,
  monthsInYear: computeNativeMonthsInYear,
  daysInMonth: computeNativeDaysInMonth,
  daysInYear: computeNativeDaysInYear,
  dayOfYear: computeNativeDayOfYear,
  era(e2) {
    return this.$(e2)[0];
  },
  eraYear(e2) {
    return this.$(e2)[1];
  },
  monthCode(e2) {
    const [n2, t2] = this.u(e2), [o2, r2] = this.m(n2, t2);
    return sa(o2, r2);
  },
  dayOfWeek: Ha,
  daysInWeek: fo
};
var Kf = {
  u: computeIsoDateParts,
  $: computeIsoEraParts,
  m: computeIsoMonthCodeParts
};
var tm = {
  dayOfYear: computeNativeDayOfYear,
  u: computeIsoDateParts,
  M: isoArgsToEpochMilli
};
var om = /* @__PURE__ */ Object.assign({}, tm, {
  weekOfYear: computeNativeWeekOfYear,
  yearOfWeek: computeNativeYearOfWeek,
  I(e2) {
    function computeWeekShift(e3) {
      return (7 - e3 < n2 ? 7 : 0) - e3;
    }
    function computeWeeksInYear(e3) {
      const n3 = computeIsoDaysInYear(l2 + e3), t3 = e3 || 1, o3 = computeWeekShift(modFloor(a2 + n3 * t3, 7));
      return c2 = (n3 + (o3 - s2) * t3) / 7;
    }
    const n2 = this.id ? 1 : 4, t2 = Ha(e2), o2 = this.dayOfYear(e2), r2 = modFloor(t2 - 1, 7), i2 = o2 - 1, a2 = modFloor(r2 - i2, 7), s2 = computeWeekShift(a2);
    let c2, u2 = Math.floor((i2 - s2) / 7) + 1, l2 = e2.isoYear;
    return u2 ? u2 > computeWeeksInYear(0) && (u2 = 1, l2++) : (u2 = computeWeeksInYear(-1), l2--), [u2, l2, c2];
  }
});
var im = /* @__PURE__ */ Object.assign({}, kf, om, {
  u: computeIsoDateParts,
  $: computeIsoEraParts,
  m: computeIsoMonthCodeParts,
  R: computeIsoYearMonthForMonthDay,
  L: computeIsoInLeapYear,
  F: noop,
  O: computeIsoMonthsInYear,
  q: computeIsoMonthsInYearSpan,
  B: computeIsoDaysInMonth,
  G: computeIsoDaysInYear,
  U: computeIsoFieldsFromParts,
  M: isoArgsToEpochMilli,
  p: isoMonthAdd,
  year(e2) {
    return e2.isoYear;
  },
  month(e2) {
    return e2.isoMonth;
  },
  day: computeIsoDay
});
var Nm = {
  u: computeIntlDateParts,
  $: computeIntlEraParts,
  m: computeIntlMonthCodeParts
};
var Om = {
  dayOfYear: computeNativeDayOfYear,
  u: computeIntlDateParts,
  M: computeIntlEpochMilli
};
var bm = {
  I() {
    return [];
  }
};
var Sm = /* @__PURE__ */ Object.assign({}, Om, bm, {
  weekOfYear: computeNativeWeekOfYear,
  yearOfWeek: computeNativeYearOfWeek
});
var Bm = /* @__PURE__ */ Object.assign({}, kf, Sm, {
  u: computeIntlDateParts,
  $: computeIntlEraParts,
  m: computeIntlMonthCodeParts,
  R: computeIntlYearMonthForMonthDay,
  L: computeIntlInLeapYear,
  F: computeIntlLeapMonth,
  O: computeIntlMonthsInYear,
  q: computeIntlMonthsInYearSpan,
  B: computeIntlDaysInMonth,
  G: computeIntlDaysInYear,
  U: computeIsoFieldsFromIntlParts,
  M: computeIntlEpochMilli,
  p: intlMonthAdd,
  year(e2) {
    return this._(e2).year;
  },
  month(e2) {
    const { year: n2, V: t2 } = this._(e2), { X: o2 } = this.J(n2);
    return o2[t2] + 1;
  },
  day: computeIntlDay
});
var ra = /* @__PURE__ */ createNativeOpsCreator(Kf, Nm);
var v = /* @__PURE__ */ createNativeOpsCreator(im, Bm);
var Ym = {
  era: toStringViaPrimitive,
  eraYear: Za,
  year: Za,
  month: toPositiveInteger,
  monthCode(e2) {
    const n2 = toStringViaPrimitive(e2);
    return parseMonthCode(n2), n2;
  },
  day: toPositiveInteger
};
var Cm = /* @__PURE__ */ Su(p, Za);
var km = /* @__PURE__ */ Su(O, Ba);
var Zm = {
  offset(e2) {
    const n2 = toStringViaPrimitive(e2);
    return parseOffsetNano(n2), n2;
  }
};
var Rm = /* @__PURE__ */ Object.assign({}, Ym, Cm, km, Zm);
var zm = /* @__PURE__ */ gt(remapProps, p, w);
var Ga = /* @__PURE__ */ gt(remapProps, w, p);
var Am = "numeric";
var Um = ["timeZoneName"];
var jm = {
  month: Am,
  day: Am
};
var qm = {
  year: Am,
  month: Am
};
var Lm = /* @__PURE__ */ Object.assign({}, qm, {
  day: Am
});
var Wm = {
  hour: Am,
  minute: Am,
  second: Am
};
var xm = /* @__PURE__ */ Object.assign({}, Lm, Wm);
var $m = /* @__PURE__ */ Object.assign({}, xm, {
  timeZoneName: "short"
});
var Hm = /* @__PURE__ */ Object.keys(qm);
var Gm = /* @__PURE__ */ Object.keys(jm);
var Vm = /* @__PURE__ */ Object.keys(Lm);
var _m = /* @__PURE__ */ Object.keys(Wm);
var Jm = ["dateStyle"];
var Km = /* @__PURE__ */ Hm.concat(Jm);
var Qm = /* @__PURE__ */ Gm.concat(Jm);
var Xm = /* @__PURE__ */ Vm.concat(Jm, ["weekday"]);
var ep = /* @__PURE__ */ _m.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]);
var np = /* @__PURE__ */ Xm.concat(ep);
var tp = /* @__PURE__ */ Um.concat(ep);
var op = /* @__PURE__ */ Um.concat(Xm);
var rp = /* @__PURE__ */ Um.concat(["day", "weekday"], ep);
var ip = /* @__PURE__ */ Um.concat(["year", "weekday"], ep);
var ap = /* @__PURE__ */ createOptionsTransformer(np, xm);
var sp = /* @__PURE__ */ createOptionsTransformer(np, $m);
var cp = /* @__PURE__ */ createOptionsTransformer(np, xm, Um);
var up = /* @__PURE__ */ createOptionsTransformer(Xm, Lm, tp);
var lp = /* @__PURE__ */ createOptionsTransformer(ep, Wm, op);
var fp = /* @__PURE__ */ createOptionsTransformer(Km, qm, rp);
var dp = /* @__PURE__ */ createOptionsTransformer(Qm, jm, ip);
var mp = {};
var pp = /* @__PURE__ */ computeNonBuggyIsoResolve();
var Q = [ap, I];
var ot = [sp, I, 0, (e2, n2) => {
  const t2 = e2.timeZone;
  if (n2 && n2.timeZone !== t2) {
    throw new RangeError(pu);
  }
  return t2;
}];
var U = [cp, isoToEpochMilli];
var X = [up, isoToEpochMilli];
var tt = [lp, (e2) => isoTimeFieldsToNano(e2) / Ke];
var et = [fp, isoToEpochMilli, pp];
var nt = [dp, isoToEpochMilli, pp];

// node_modules/.pnpm/temporal-polyfill@0.3.2/node_modules/temporal-polyfill/chunks/classApi.js
function createSlotClass(i2, l2, s2, c2, u2, f2) {
  function Class(...t2) {
    if (!(this instanceof Class)) {
      throw new TypeError(a);
    }
    {
      const e2 = l2(...t2);
      un(this, e2), dbg(this, e2, f2);
    }
  }
  function bindMethod(t2, e2) {
    return Object.defineProperties((function(...e3) {
      return t2.call(this, getSpecificSlots(this), ...e3);
    }), r(e2));
  }
  function getSpecificSlots(t2) {
    const e2 = cn(t2);
    if (!e2 || e2.branding !== i2) {
      throw new TypeError(a);
    }
    return e2;
  }
  return Object.defineProperties(Class.prototype, __spreadValues(__spreadValues(__spreadValues({}, t(e(bindMethod, s2))), n(e(bindMethod, c2))), o("Temporal." + i2))), Object.defineProperties(Class, __spreadValues(__spreadValues({}, n(u2)), r(i2))), [Class, (t2) => {
    const e2 = Object.create(Class.prototype);
    return un(e2, t2), dbg(e2, t2, f2), e2;
  }, getSpecificSlots];
}
function rejectInvalidBag(t2) {
  if (cn(t2) || void 0 !== t2.calendar || void 0 !== t2.timeZone) {
    throw new TypeError(i);
  }
  return t2;
}
function dbg(t2, e2, n2) {
  "dbg" === dbg.name && Object.defineProperty(t2, "o", {
    value: n2(e2),
    writable: 0,
    enumerable: 0,
    configurable: 0
  });
}
function getCalendarIdFromBag(t2) {
  return extractCalendarIdFromBag(t2) || l;
}
function extractCalendarIdFromBag(t2) {
  const { calendar: e2 } = t2;
  if (void 0 !== e2) {
    return refineCalendarArg(e2);
  }
}
function refineCalendarArg(t2) {
  if (s(t2)) {
    const { calendar: e2 } = cn(t2) || {};
    if (!e2) {
      throw new TypeError(c(t2));
    }
    return e2;
  }
  return ((t3) => u(f(d(t3))))(t2);
}
function createCalendarGetters(t2) {
  const e2 = {};
  for (const n2 in t2) {
    e2[n2] = (t3) => {
      const { calendar: e3 } = t3;
      return v(e3)[n2](t3);
    };
  }
  return e2;
}
function neverValueOf() {
  throw new TypeError(C);
}
function refineTimeZoneArg(t2) {
  if (s(t2)) {
    const { timeZone: e2 } = cn(t2) || {};
    if (!e2) {
      throw new TypeError(F(t2));
    }
    return e2;
  }
  return ((t3) => Z(M(d(t3))))(t2);
}
function toDurationSlots(t2) {
  if (s(t2)) {
    const e2 = cn(t2);
    return e2 && e2.branding === A ? e2 : q(t2);
  }
  return R(t2);
}
function refinePublicRelativeTo(t2) {
  if (void 0 !== t2) {
    if (s(t2)) {
      const e2 = cn(t2) || {};
      switch (e2.branding) {
        case _:
        case G:
          return e2;
        case x:
          return W(e2);
      }
      const n2 = getCalendarIdFromBag(t2);
      return __spreadProps(__spreadValues({}, z(refineTimeZoneArg, L, v(n2), t2)), {
        calendar: n2
      });
    }
    return $(t2);
  }
}
function toPlainTimeSlots(t2, e2) {
  if (s(t2)) {
    const n3 = cn(t2) || {};
    switch (n3.branding) {
      case ft:
        return dt(e2), n3;
      case x:
        return dt(e2), St(n3);
      case _:
        return dt(e2), mt(L, n3);
    }
    return Tt(t2, e2);
  }
  const n2 = ht(t2);
  return dt(e2), n2;
}
function optionalToPlainTimeFields(t2) {
  return void 0 === t2 ? void 0 : toPlainTimeSlots(t2);
}
function toPlainDateTimeSlots(t2, e2) {
  if (s(t2)) {
    const n3 = cn(t2) || {};
    switch (n3.branding) {
      case x:
        return dt(e2), n3;
      case G:
        return dt(e2), jt(__spreadValues(__spreadValues({}, n3), At));
      case _:
        return dt(e2), yt(L, n3);
    }
    return Nt(v(getCalendarIdFromBag(t2)), t2, e2);
  }
  const n2 = Bt(t2);
  return dt(e2), n2;
}
function toPlainMonthDaySlots(t2, e2) {
  if (s(t2)) {
    const n3 = cn(t2);
    if (n3 && n3.branding === qt) {
      return dt(e2), n3;
    }
    const o2 = extractCalendarIdFromBag(t2);
    return Rt(v(o2 || l), !o2, t2, e2);
  }
  const n2 = xt(v, t2);
  return dt(e2), n2;
}
function toPlainYearMonthSlots(t2, e2) {
  if (s(t2)) {
    const n3 = cn(t2);
    return n3 && n3.branding === Qt ? (dt(e2), n3) : Ut(v(getCalendarIdFromBag(t2)), t2, e2);
  }
  const n2 = Xt(v, t2);
  return dt(e2), n2;
}
function toPlainDateSlots(t2, e2) {
  if (s(t2)) {
    const n3 = cn(t2) || {};
    switch (n3.branding) {
      case G:
        return dt(e2), n3;
      case x:
        return dt(e2), W(n3);
      case _:
        return dt(e2), fe(L, n3);
    }
    return de(v(getCalendarIdFromBag(t2)), t2, e2);
  }
  const n2 = me(t2);
  return dt(e2), n2;
}
function toZonedDateTimeSlots(t2, e2) {
  if (s(t2)) {
    const n2 = cn(t2);
    if (n2 && n2.branding === _) {
      return je(e2), n2;
    }
    const o2 = getCalendarIdFromBag(t2);
    return Ae(refineTimeZoneArg, L, v(o2), o2, t2, e2);
  }
  return Ne(t2, e2);
}
function adaptDateMethods(t2) {
  return e(((t3) => (e2) => t3(slotsToIso(e2))), t2);
}
function slotsToIso(t2) {
  return he(t2, L);
}
function toInstantSlots(t2) {
  if (s(t2)) {
    const e2 = cn(t2);
    if (e2) {
      switch (e2.branding) {
        case Re:
          return e2;
        case _:
          return xe(e2.epochNanoseconds);
      }
    }
  }
  return We(t2);
}
function toTemporalInstant() {
  const t2 = Date.prototype.valueOf.call(this);
  return Hn(xe(Ge(_e(t2), Ke)));
}
function createDateTimeFormatClass() {
  function DateTimeFormatFunc(t3, e3) {
    return new DateTimeFormatNew(t3, e3);
  }
  function DateTimeFormatNew(t3, e3 = /* @__PURE__ */ Object.create(null)) {
    to.set(this, ((t4, e4) => {
      const n3 = new en(t4, e4), o2 = n3.resolvedOptions(), r2 = o2.locale, a2 = nn(Object.keys(e4), o2), i2 = on(createFormatPrepperForBranding), prepFormat = (t5, ...e5) => {
        if (t5) {
          if (2 !== e5.length) {
            throw new TypeError(ln);
          }
          for (const t6 of e5) {
            if (void 0 === t6) {
              throw new TypeError(ln);
            }
          }
        }
        t5 || void 0 !== e5[0] || (e5 = []);
        const o3 = e5.map(((t6) => cn(t6) || Number(t6)));
        let l2, s2 = 0;
        for (const t6 of o3) {
          const e6 = "object" == typeof t6 ? t6.branding : void 0;
          if (s2++ && e6 !== l2) {
            throw new TypeError(ln);
          }
          l2 = e6;
        }
        return l2 ? i2(l2)(r2, a2, ...o3) : [n3, ...o3];
      };
      return prepFormat.i = n3, prepFormat;
    })(t3, e3));
  }
  const t2 = en.prototype, e2 = Object.getOwnPropertyDescriptors(t2), n2 = Object.getOwnPropertyDescriptors(en);
  for (const t3 in e2) {
    const n3 = e2[t3], o2 = t3.startsWith("format") && createFormatMethod(t3);
    "function" == typeof n3.value ? n3.value = "constructor" === t3 ? DateTimeFormatFunc : o2 || createProxiedMethod(t3) : o2 && (n3.get = function() {
      if (!to.has(this)) {
        throw new TypeError(a);
      }
      return (...t4) => o2.apply(this, t4);
    }, Object.defineProperties(n3.get, r(`get ${t3}`)));
  }
  return n2.prototype.value = DateTimeFormatNew.prototype = Object.create({}, e2), Object.defineProperties(DateTimeFormatFunc, n2), DateTimeFormatFunc;
}
function createFormatMethod(t2) {
  return Object.defineProperties((function(...e2) {
    const n2 = to.get(this), [o2, ...r2] = n2(t2.includes("Range"), ...e2);
    return o2[t2](...r2);
  }), r(t2));
}
function createProxiedMethod(t2) {
  return Object.defineProperties((function(...e2) {
    return to.get(this).i[t2](...e2);
  }), r(t2));
}
function createFormatPrepperForBranding(t2) {
  const e2 = vn[t2];
  if (!e2) {
    throw new TypeError(rn(t2));
  }
  return K(e2, on(an), 1);
}
var sn = /* @__PURE__ */ new WeakMap();
var cn = /* @__PURE__ */ sn.get.bind(sn);
var un = /* @__PURE__ */ sn.set.bind(sn);
var fn = {
  era: m,
  eraYear: S,
  year: T,
  month: h,
  daysInMonth: h,
  daysInYear: h,
  inLeapYear: D,
  monthsInYear: h
};
var dn = {
  monthCode: d
};
var mn = {
  day: h
};
var Sn = {
  dayOfWeek: h,
  dayOfYear: h,
  weekOfYear: g,
  yearOfWeek: S,
  daysInWeek: h
};
var Tn = /* @__PURE__ */ createCalendarGetters(/* @__PURE__ */ Object.assign({}, fn, dn, mn, Sn));
var hn = /* @__PURE__ */ createCalendarGetters(__spreadValues(__spreadValues({}, fn), dn));
var Dn = /* @__PURE__ */ createCalendarGetters(__spreadValues(__spreadValues({}, dn), mn));
var gn = {
  calendarId: (t2) => t2.calendar
};
var Pn = /* @__PURE__ */ P(((t2) => (e2) => e2[t2]), O.concat("sign"));
var On = /* @__PURE__ */ P(((t2, e2) => (t3) => t3[w[e2]]), p);
var pn = {
  epochMilliseconds: I,
  epochNanoseconds: b
};
var [wn, In, bn] = createSlotClass(A, j, __spreadProps(__spreadValues({}, Pn), {
  blank: y
}), {
  with: (t2, e2) => In(N(t2, e2)),
  negated: (t2) => In(B(t2)),
  abs: (t2) => In(Y(t2)),
  add: (t2, e2, n2) => In(E(refinePublicRelativeTo, v, L, 0, t2, toDurationSlots(e2), n2)),
  subtract: (t2, e2, n2) => In(E(refinePublicRelativeTo, v, L, 1, t2, toDurationSlots(e2), n2)),
  round: (t2, e2) => In(V(refinePublicRelativeTo, v, L, t2, e2)),
  total: (t2, e2) => J(refinePublicRelativeTo, v, L, t2, e2),
  toLocaleString(t2, e2, n2) {
    return Intl.DurationFormat ? new Intl.DurationFormat(e2, n2).format(this) : k(t2);
  },
  toString: k,
  toJSON: (t2) => k(t2),
  valueOf: neverValueOf
}, {
  from: (t2) => In(toDurationSlots(t2)),
  compare: (t2, e2, n2) => H(refinePublicRelativeTo, v, L, toDurationSlots(t2), toDurationSlots(e2), n2)
}, k);
var vn = {
  Instant: Q,
  PlainDateTime: U,
  PlainDate: X,
  PlainTime: tt,
  PlainYearMonth: et,
  PlainMonthDay: nt
};
var Cn = /* @__PURE__ */ K(Q);
var Fn = /* @__PURE__ */ K(ot);
var Zn = /* @__PURE__ */ K(U);
var Mn = /* @__PURE__ */ K(X);
var yn = /* @__PURE__ */ K(tt);
var jn = /* @__PURE__ */ K(et);
var An = /* @__PURE__ */ K(nt);
var [Nn, Bn] = createSlotClass(ft, ut, On, {
  with(t2, e2, n2) {
    return Bn(rt(this, rejectInvalidBag(e2), n2));
  },
  add: (t2, e2) => Bn(at(0, t2, toDurationSlots(e2))),
  subtract: (t2, e2) => Bn(at(1, t2, toDurationSlots(e2))),
  until: (t2, e2, n2) => In(it(0, t2, toPlainTimeSlots(e2), n2)),
  since: (t2, e2, n2) => In(it(1, t2, toPlainTimeSlots(e2), n2)),
  round: (t2, e2) => Bn(lt(t2, e2)),
  equals: (t2, e2) => st(t2, toPlainTimeSlots(e2)),
  toLocaleString(t2, e2, n2) {
    const [o2, r2] = yn(e2, n2, t2);
    return o2.format(r2);
  },
  toString: ct,
  toJSON: (t2) => ct(t2),
  valueOf: neverValueOf
}, {
  from: (t2, e2) => Bn(toPlainTimeSlots(t2, e2)),
  compare: (t2, e2) => Dt(toPlainTimeSlots(t2), toPlainTimeSlots(e2))
}, ct);
var [Yn, En] = createSlotClass(x, gt(Mt, Zt), __spreadValues(__spreadValues(__spreadValues({}, gn), Tn), On), {
  with: (t2, e2, n2) => En(Pt(v, t2, rejectInvalidBag(e2), n2)),
  withCalendar: (t2, e2) => En(Ot(t2, refineCalendarArg(e2))),
  withPlainTime: (t2, e2) => En(pt(t2, optionalToPlainTimeFields(e2))),
  add: (t2, e2, n2) => En(wt(v, 0, t2, toDurationSlots(e2), n2)),
  subtract: (t2, e2, n2) => En(wt(v, 1, t2, toDurationSlots(e2), n2)),
  until: (t2, e2, n2) => In(It(v, 0, t2, toPlainDateTimeSlots(e2), n2)),
  since: (t2, e2, n2) => In(It(v, 1, t2, toPlainDateTimeSlots(e2), n2)),
  round: (t2, e2) => En(bt(t2, e2)),
  equals: (t2, e2) => vt(t2, toPlainDateTimeSlots(e2)),
  toZonedDateTime: (t2, e2, n2) => zn(Ct(L, t2, refineTimeZoneArg(e2), n2)),
  toPlainDate: (t2) => Wn(W(t2)),
  toPlainTime: (t2) => Bn(St(t2)),
  toLocaleString(t2, e2, n2) {
    const [o2, r2] = Zn(e2, n2, t2);
    return o2.format(r2);
  },
  toString: Ft,
  toJSON: (t2) => Ft(t2),
  valueOf: neverValueOf
}, {
  from: (t2, e2) => En(toPlainDateTimeSlots(t2, e2)),
  compare: (t2, e2) => Yt(toPlainDateTimeSlots(t2), toPlainDateTimeSlots(e2))
}, Ft);
var [Ln, Vn, Jn] = createSlotClass(qt, gt(kt, Zt), __spreadValues(__spreadValues({}, gn), Dn), {
  with: (t2, e2, n2) => Vn(Et(v, t2, rejectInvalidBag(e2), n2)),
  equals: (t2, e2) => Lt(t2, toPlainMonthDaySlots(e2)),
  toPlainDate(t2, e2) {
    return Wn(Vt(v, t2, this, e2));
  },
  toLocaleString(t2, e2, n2) {
    const [o2, r2] = An(e2, n2, t2);
    return o2.format(r2);
  },
  toString: Jt,
  toJSON: (t2) => Jt(t2),
  valueOf: neverValueOf
}, {
  from: (t2, e2) => Vn(toPlainMonthDaySlots(t2, e2))
}, Jt);
var [kn, qn, Rn] = createSlotClass(Qt, gt(Kt, Zt), __spreadValues(__spreadValues({}, gn), hn), {
  with: (t2, e2, n2) => qn(Wt(v, t2, rejectInvalidBag(e2), n2)),
  add: (t2, e2, n2) => qn(Gt(v, 0, t2, toDurationSlots(e2), n2)),
  subtract: (t2, e2, n2) => qn(Gt(v, 1, t2, toDurationSlots(e2), n2)),
  until: (t2, e2, n2) => In(_t(v, 0, t2, toPlainYearMonthSlots(e2), n2)),
  since: (t2, e2, n2) => In(_t(v, 1, t2, toPlainYearMonthSlots(e2), n2)),
  equals: (t2, e2) => zt(t2, toPlainYearMonthSlots(e2)),
  toPlainDate(t2, e2) {
    return Wn($t(v, t2, this, e2));
  },
  toLocaleString(t2, e2, n2) {
    const [o2, r2] = jn(e2, n2, t2);
    return o2.format(r2);
  },
  toString: Ht,
  toJSON: (t2) => Ht(t2),
  valueOf: neverValueOf
}, {
  from: (t2, e2) => qn(toPlainYearMonthSlots(t2, e2)),
  compare: (t2, e2) => te(toPlainYearMonthSlots(t2), toPlainYearMonthSlots(e2))
}, Ht);
var [xn, Wn, Gn] = createSlotClass(G, gt(ue, Zt), __spreadValues(__spreadValues({}, gn), Tn), {
  with: (t2, e2, n2) => Wn(ee(v, t2, rejectInvalidBag(e2), n2)),
  withCalendar: (t2, e2) => Wn(Ot(t2, refineCalendarArg(e2))),
  add: (t2, e2, n2) => Wn(ne(v, 0, t2, toDurationSlots(e2), n2)),
  subtract: (t2, e2, n2) => Wn(ne(v, 1, t2, toDurationSlots(e2), n2)),
  until: (t2, e2, n2) => In(oe(v, 0, t2, toPlainDateSlots(e2), n2)),
  since: (t2, e2, n2) => In(oe(v, 1, t2, toPlainDateSlots(e2), n2)),
  equals: (t2, e2) => re(t2, toPlainDateSlots(e2)),
  toZonedDateTime(t2, e2) {
    const n2 = s(e2) ? e2 : {
      timeZone: e2
    };
    return zn(ae(refineTimeZoneArg, toPlainTimeSlots, L, t2, n2));
  },
  toPlainDateTime: (t2, e2) => En(ie(t2, optionalToPlainTimeFields(e2))),
  toPlainYearMonth(t2) {
    return qn(le(v, t2, this));
  },
  toPlainMonthDay(t2) {
    return Vn(se(v, t2, this));
  },
  toLocaleString(t2, e2, n2) {
    const [o2, r2] = Mn(e2, n2, t2);
    return o2.format(r2);
  },
  toString: ce,
  toJSON: (t2) => ce(t2),
  valueOf: neverValueOf
}, {
  from: (t2, e2) => Wn(toPlainDateSlots(t2, e2)),
  compare: (t2, e2) => te(toPlainDateSlots(t2), toPlainDateSlots(e2))
}, ce);
var [_n, zn] = createSlotClass(_, gt(ye, Zt, Me), __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, pn), gn), adaptDateMethods(Tn)), adaptDateMethods(On)), {
  offset: (t2) => Se(slotsToIso(t2).offsetNanoseconds),
  offsetNanoseconds: (t2) => slotsToIso(t2).offsetNanoseconds,
  timeZoneId: (t2) => t2.timeZone,
  hoursInDay: (t2) => Te(L, t2)
}), {
  with: (t2, e2, n2) => zn(De(v, L, t2, rejectInvalidBag(e2), n2)),
  withCalendar: (t2, e2) => zn(Ot(t2, refineCalendarArg(e2))),
  withTimeZone: (t2, e2) => zn(ge(t2, refineTimeZoneArg(e2))),
  withPlainTime: (t2, e2) => zn(Pe(L, t2, optionalToPlainTimeFields(e2))),
  add: (t2, e2, n2) => zn(Oe(v, L, 0, t2, toDurationSlots(e2), n2)),
  subtract: (t2, e2, n2) => zn(Oe(v, L, 1, t2, toDurationSlots(e2), n2)),
  until: (t2, e2, n2) => In(pe(we(v, L, 0, t2, toZonedDateTimeSlots(e2), n2))),
  since: (t2, e2, n2) => In(pe(we(v, L, 1, t2, toZonedDateTimeSlots(e2), n2))),
  round: (t2, e2) => zn(Ie(L, t2, e2)),
  startOfDay: (t2) => zn(be(L, t2)),
  equals: (t2, e2) => ve(t2, toZonedDateTimeSlots(e2)),
  toInstant: (t2) => Hn(Ce(t2)),
  toPlainDateTime: (t2) => En(yt(L, t2)),
  toPlainDate: (t2) => Wn(fe(L, t2)),
  toPlainTime: (t2) => Bn(mt(L, t2)),
  toLocaleString(t2, e2, n2 = {}) {
    const [o2, r2] = Fn(e2, n2, t2);
    return o2.format(r2);
  },
  toString: (t2, e2) => Fe(L, t2, e2),
  toJSON: (t2) => Fe(L, t2),
  valueOf: neverValueOf,
  getTimeZoneTransition(t2, e2) {
    const { timeZone: n2, epochNanoseconds: o2 } = t2, r2 = Ze(e2), a2 = L(n2).l(o2, r2);
    return a2 ? zn(__spreadProps(__spreadValues({}, t2), {
      epochNanoseconds: a2
    })) : null;
  }
}, {
  from: (t2, e2) => zn(toZonedDateTimeSlots(t2, e2)),
  compare: (t2, e2) => Be(toZonedDateTimeSlots(t2), toZonedDateTimeSlots(e2))
}, ((t2) => Fe(L, t2)));
var [$n, Hn, Kn] = createSlotClass(Re, qe, pn, {
  add: (t2, e2) => Hn(Ye(0, t2, toDurationSlots(e2))),
  subtract: (t2, e2) => Hn(Ye(1, t2, toDurationSlots(e2))),
  until: (t2, e2, n2) => In(Ee(0, t2, toInstantSlots(e2), n2)),
  since: (t2, e2, n2) => In(Ee(1, t2, toInstantSlots(e2), n2)),
  round: (t2, e2) => Hn(Le(t2, e2)),
  equals: (t2, e2) => Ve(t2, toInstantSlots(e2)),
  toZonedDateTimeISO: (t2, e2) => zn(Je(t2, refineTimeZoneArg(e2))),
  toLocaleString(t2, e2, n2) {
    const [o2, r2] = Cn(e2, n2, t2);
    return o2.format(r2);
  },
  toString: (t2, e2) => ke(refineTimeZoneArg, L, t2, e2),
  toJSON: (t2) => ke(refineTimeZoneArg, L, t2),
  valueOf: neverValueOf
}, {
  from: (t2) => Hn(toInstantSlots(t2)),
  fromEpochMilliseconds: (t2) => Hn(ze(t2)),
  fromEpochNanoseconds: (t2) => Hn($e(t2)),
  compare: (t2, e2) => He(toInstantSlots(t2), toInstantSlots(e2))
}, ((t2) => ke(refineTimeZoneArg, L, t2)));
var Qn = /* @__PURE__ */ Object.defineProperties({}, __spreadValues(__spreadValues({}, o("Temporal.Now")), n({
  timeZoneId: () => Qe(),
  instant: () => Hn(xe(Ue())),
  zonedDateTimeISO: (t2 = Qe()) => zn(Xe(Ue(), refineTimeZoneArg(t2), l)),
  plainDateTimeISO: (t2 = Qe()) => En(jt(tn(L(refineTimeZoneArg(t2))), l)),
  plainDateISO: (t2 = Qe()) => Wn(W(tn(L(refineTimeZoneArg(t2))), l)),
  plainTimeISO: (t2 = Qe()) => Bn(St(tn(L(refineTimeZoneArg(t2)))))
})));
var Un = /* @__PURE__ */ Object.defineProperties({}, __spreadValues(__spreadValues({}, o("Temporal")), n({
  PlainYearMonth: kn,
  PlainMonthDay: Ln,
  PlainDate: xn,
  PlainTime: Nn,
  PlainDateTime: Yn,
  ZonedDateTime: _n,
  Instant: $n,
  Duration: wn,
  Now: Qn
})));
var Xn = /* @__PURE__ */ createDateTimeFormatClass();
var to = /* @__PURE__ */ new WeakMap();
var eo = /* @__PURE__ */ Object.defineProperties(Object.create(Intl), n({
  DateTimeFormat: Xn
}));
export {
  eo as Intl,
  Un as Temporal,
  toTemporalInstant
};
