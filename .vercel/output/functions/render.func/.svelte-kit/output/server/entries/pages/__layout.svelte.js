import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as subscribe } from "../../immutable/chunks/index-5d236a54.js";
import { i as isDarkTheme } from "../../immutable/chunks/theme-8d88d356.js";
const app = "";
const NavbarLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linksTo } = $$props;
  let { className = "" } = $$props;
  let finalClass = `hover:scale-110 ${className}`;
  if ($$props.linksTo === void 0 && $$bindings.linksTo && linksTo !== void 0)
    $$bindings.linksTo(linksTo);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<li${add_attribute("class", finalClass, 0)}><a${add_attribute("href", linksTo, 0)} class="${"font-medium uppercase tracking-wider text-slate-900 transition-colors hover:text-violet-500 dark:text-white dark:hover:text-violet-300"}">${slots.default ? slots.default({}) : ``}</a></li>`;
});
const ToggleTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const toggleTheme = async () => {
    isDarkTheme.update((darktheme) => darktheme = !darktheme);
  };
  let isDark;
  isDarkTheme.subscribe((val) => isDark = val);
  let { className = "" } = $$props;
  let finalClass = `${className} text-black dark:text-white hover:border-y-2 dark:hover:border-yellow-300 hover:border-blue-900`;
  if ($$props.toggleTheme === void 0 && $$bindings.toggleTheme && toggleTheme !== void 0)
    $$bindings.toggleTheme(toggleTheme);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<button${add_attribute("class", finalClass, 0)}>${escape(isDark ? "light \u2600\uFE0F" : "dark \u{1F311}")}</button>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"sticky top-0 z-20 mx-auto bg-white px-6 pt-6 opacity-80 dark:bg-slate-900 dark:bg-opacity-80"}"><div class="${"flex-col md:flex "}"><ul class="${"container mx-auto flex max-w-4xl justify-between"}">${validate_component(ToggleTheme, "ToggleTheme").$$render($$result, {
    className: "tracking-wider uppercase font-medium"
  }, {}, {})}
			<div class="${"flex justify-between space-x-10"}">${validate_component(NavbarLink, "NavbarLink").$$render($$result, { linksTo: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })}
				${validate_component(NavbarLink, "NavbarLink").$$render($$result, { linksTo: "/blog" }, {}, {
    default: () => {
      return `Blog`;
    }
  })}</div></ul>
		<div class="${"mt-2 hidden"}"></div></div></nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkTheme, $$unsubscribe_isDarkTheme;
  $$unsubscribe_isDarkTheme = subscribe(isDarkTheme, (value) => $isDarkTheme = value);
  $$unsubscribe_isDarkTheme();
  return `<div${add_attribute("class", `${$isDarkTheme ? "dark" : ""} min-h-screen  bg-white dark:bg-slate-900 `, 0)}><div class="${"absolute inset-0 z-0 h-screen w-screen bg-white dark:bg-slate-900"}"></div>

	<div class="${"relative z-20 mx-auto h-full bg-white dark:bg-slate-900 dark:text-white lg:px-2"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		<main>${slots.default ? slots.default({}) : ``}</main></div></div>`;
});
export {
  _layout as default
};
