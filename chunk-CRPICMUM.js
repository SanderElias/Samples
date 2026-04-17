import {
  createUniqueId
} from "./chunk-XUVHIZKL.js";
import {
  Injectable,
  catchError,
  from,
  map,
  of,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-5EIP4NRL.js";
import {
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/generic-services/address.service.ts
var AddressService = class _AddressService {
  constructor() {
    this.fakerModule = import("./dist-I7CSMJRU.js");
    this.userCards$ = this.users(25);
  }
  users(length) {
    return from(this.fakerModule).pipe(
      map((fakerModule) => {
        const { faker } = fakerModule;
        return Array.from({ length }, () => __spreadValues({}, userCard(faker)));
      }),
      // tap(r => console.dir(r)),
      shareReplay(1),
      catchError((e) => of([]))
    );
  }
  static {
    this.\u0275fac = function AddressService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddressService, factory: _AddressService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function userCard(faker) {
  const sex = faker.person.sex();
  const firstName = faker.person.firstName({ sex });
  const lastName = faker.person.lastName({ sex });
  const name = faker.person.fullName({ firstName, lastName, sex });
  return {
    id: createUniqueId(),
    name,
    username: faker.internet.username({ firstName, lastName }),
    email: faker.internet.exampleEmail({ lastName }),
    avatar: faker.image.avatar(),
    dob: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
    address: {
      street: faker.location.street(),
      suite: faker.location.secondaryAddress(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      geo: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude()
      }
    },
    tags: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.word.noun()),
    contactBy: Array.from({ length: faker.number.int({ min: 2, max: 4 }) }, () => ({
      mean: faker.word.noun(),
      value: faker.word.verb()
    })),
    phone: faker.phone.number,
    website: faker.internet.domainName(),
    company: {
      name: faker.company.name(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.buzzPhrase()
    }
  };
}

export {
  AddressService,
  userCard
};
