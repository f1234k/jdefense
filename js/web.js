var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// ../lib/src/should.ts
var should_never_happen = (msg, ...args) => {
  console.error(msg, ...args);
  debugger;
  throw new Error(`Should never happen: ${msg}`);
};

// src/lib/save.ts
function save_get(version) {
  const local_storage_save_value = localStorage.getItem("jdefense");
  if (local_storage_save_value === null) {
    const new_save = save_init(version);
    localStorage.setItem("jdefense", JSON.stringify(new_save));
    return new_save;
  } else {
    const current_save = JSON.parse(local_storage_save_value);
    if (current_save.version !== version) {
      const new_save = save_init(version);
      localStorage.setItem("jdefense", JSON.stringify(new_save));
      return new_save;
    } else {
      return current_save;
    }
  }
}
function save_init(version) {
  return {
    version,
    mission: "m001"
  };
}

// src/web.ts
var VERSION = "0.0.1";
async function main() {
  const root_element = document.getElementById("app");
  if (!root_element) {
    should_never_happen("Root Element Not Found!");
    return;
  }
  const current_save = save_get(VERSION);
  import(`./missions/${current_save.mission}/${current_save.mission}.js`).then((m) => m.init());
}
main();

//# debugId=255468502C8FD76C64756E2164756E21
