﻿! function(a, b, c) {
	"use strict";

	function d(a) {
		return function() {
			var b, c, d = arguments[0],
				e = "[" + (a ? a + ":" : "") + d + "] ",
				f = arguments[1],
				g = arguments,
				h = function(a) {
					return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
				};
			for (b = e + f.replace(/\{\d+\}/g, function(a) {
				var b, c = +a.slice(1, -1);
				return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a
			}), b = b + "\nhttp://errors.angularjs.org/1.2.6/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
			return new Error(b)
		}
	}

	function e(a) {
		if (null == a || A(a)) return !1;
		var b = a.length;
		return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	function f(a, b, c) {
		var d;
		if (a)
			if (y(a))
				for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
			else if (a.forEach && a.forEach !== f) a.forEach(b, c);
		else if (e(a))
			for (d = 0; d < a.length; d++) b.call(c, a[d], d);
		else
			for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
		return a
	}

	function g(a) {
		var b = [];
		for (var c in a) a.hasOwnProperty(c) && b.push(c);
		return b.sort()
	}

	function h(a, b, c) {
		for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
		return d
	}

	function i(a) {
		return function(b, c) {
			a(c, b)
		}
	}

	function j() {
		for (var a, b = rd.length; b;) {
			if (b--, a = rd[b].charCodeAt(0), 57 == a) return rd[b] = "A", rd.join("");
			if (90 != a) return rd[b] = String.fromCharCode(a + 1), rd.join("");
			rd[b] = "0"
		}
		return rd.unshift("0"), rd.join("")
	}

	function k(a, b) {
		b ? a.$$hashKey = b : delete a.$$hashKey
	}

	function l(a) {
		var b = a.$$hashKey;
		return f(arguments, function(b) {
			b !== a && f(b, function(b, c) {
				a[c] = b
			})
		}), k(a, b), a
	}

	function m(a) {
		return parseInt(a, 10)
	}

	function n(a, b) {
		return l(new(l(function() {}, {
			prototype: a
		})), b)
	}

	function o() {}

	function p(a) {
		return a
	}

	function q(a) {
		return function() {
			return a
		}
	}

	function r(a) {
		return "undefined" == typeof a
	}

	function s(a) {
		return "undefined" != typeof a
	}

	function t(a) {
		return null != a && "object" == typeof a
	}

	function u(a) {
		return "string" == typeof a
	}

	function v(a) {
		return "number" == typeof a
	}

	function w(a) {
		return "[object Date]" === od.call(a)
	}

	function x(a) {
		return "[object Array]" === od.call(a)
	}

	function y(a) {
		return "function" == typeof a
	}

	function z(a) {
		return "[object RegExp]" === od.call(a)
	}

	function A(a) {
		return a && a.document && a.location && a.alert && a.setInterval
	}

	function B(a) {
		return a && a.$evalAsync && a.$watch
	}

	function C(a) {
		return "[object File]" === od.call(a)
	}

	function D(a) {
		return !(!a || !(a.nodeName || a.on && a.find))
	}

	function E(a, b, c) {
		var d = [];
		return f(a, function(a, e, f) {
			d.push(b.call(c, a, e, f))
		}), d
	}

	function F(a, b) {
		return -1 != G(a, b)
	}

	function G(a, b) {
		if (a.indexOf) return a.indexOf(b);
		for (var c = 0; c < a.length; c++)
			if (b === a[c]) return c;
		return -1
	}

	function H(a, b) {
		var c = G(a, b);
		return c >= 0 && a.splice(c, 1), b
	}

	function I(a, b) {
		if (A(a) || B(a)) throw pd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (b) {
			if (a === b) throw pd("cpi", "Can't copy! Source and destination are identical.");
			if (x(a)) {
				b.length = 0;
				for (var c = 0; c < a.length; c++) b.push(I(a[c]))
			} else {
				var d = b.$$hashKey;
				f(b, function(a, c) {
					delete b[c]
				});
				for (var e in a) b[e] = I(a[e]);
				k(b, d)
			}
		} else b = a, a && (x(a) ? b = I(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = new RegExp(a.source) : t(a) && (b = I(a, {})));
		return b
	}

	function J(a, b) {
		b = b || {};
		for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && "$" !== c.charAt(1) && (b[c] = a[c]);
		return b
	}

	function K(a, b) {
		if (a === b) return !0;
		if (null === a || null === b) return !1;
		if (a !== a && b !== b) return !0;
		var d, e, f, g = typeof a,
			h = typeof b;
		if (g == h && "object" == g) {
			if (!x(a)) {
				if (w(a)) return w(b) && a.getTime() == b.getTime();
				if (z(a) && z(b)) return a.toString() == b.toString();
				if (B(a) || B(b) || A(a) || A(b) || x(b)) return !1;
				f = {};
				for (e in a)
					if ("$" !== e.charAt(0) && !y(a[e])) {
						if (!K(a[e], b[e])) return !1;
						f[e] = !0
					}
				for (e in b)
					if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !y(b[e])) return !1;
				return !0
			}
			if (!x(b)) return !1;
			if ((d = a.length) == b.length) {
				for (e = 0; d > e; e++)
					if (!K(a[e], b[e])) return !1;
				return !0
			}
		}
		return !1
	}

	function L() {
		return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"))
	}

	function M(a, b, c) {
		return a.concat(md.call(b, c))
	}

	function N(a, b) {
		return md.call(a, b || 0)
	}

	function O(a, b) {
		var c = arguments.length > 2 ? N(arguments, 2) : [];
		return !y(b) || b instanceof RegExp ? b : c.length ? function() {
			return arguments.length ? b.apply(a, c.concat(md.call(arguments, 0))) : b.apply(a, c)
		} : function() {
			return arguments.length ? b.apply(a, arguments) : b.call(a)
		}
	}

	function P(a, d) {
		var e = d;
		return "string" == typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : B(d) && (e = "$SCOPE"), e
	}

	function Q(a, b) {
		return "undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null)
	}

	function R(a) {
		return u(a) ? JSON.parse(a) : a
	}

	function S(a) {
		if (a && 0 !== a.length) {
			var b = dd("" + a);
			a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
		} else a = !1;
		return a
	}

	function T(a) {
		a = id(a).clone();
		try {
			a.empty()
		} catch (b) {}
		var c = 3,
			d = id("<div>").append(a).html();
		try {
			return a[0].nodeType === c ? dd(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
				return "<" + dd(b)
			})
		} catch (b) {
			return dd(d)
		}
	}

	function U(a) {
		try {
			return decodeURIComponent(a)
		} catch (b) {}
	}

	function V(a) {
		var b, c, d = {};
		return f((a || "").split("&"), function(a) {
			if (a && (b = a.split("="), c = U(b[0]), s(c))) {
				var e = s(b[1]) ? U(b[1]) : !0;
				d[c] ? x(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
			}
		}), d
	}

	function W(a) {
		var b = [];
		return f(a, function(a, c) {
			x(a) ? f(a, function(a) {
				b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
			}) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
		}), b.length ? b.join("&") : ""
	}

	function X(a) {
		return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function Y(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
	}

	function Z(a, c) {
		function d(a) {
			a && h.push(a)
		}
		var e, g, h = [a],
			i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
			j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
		f(i, function(c) {
			i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
		}), f(h, function(a) {
			if (!e) {
				var b = " " + a.className + " ",
					c = j.exec(b);
				c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
					!e && i[b.name] && (e = a, g = b.value)
				})
			}
		}), e && c(e, g ? [g] : [])
	}

	function $(c, d) {
		var e = function() {
				if (c = id(c), c.injector()) {
					var a = c[0] === b ? "document" : T(c);
					throw pd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
				}
				d = d || [], d.unshift(["$provide",
					function(a) {
						a.value("$rootElement", c)
					}
				]), d.unshift("ng");
				var e = Eb(d);
				return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
					function(a, b, c, d) {
						a.$apply(function() {
							b.data("$injector", d), c(b)(a)
						})
					}
				]), e
			},
			g = /^NG_DEFER_BOOTSTRAP!/;
		return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), qd.resumeBootstrap = function(a) {
			f(a, function(a) {
				d.push(a)
			}), e()
		}, void 0)
	}

	function _(a, b) {
		return b = b || "_", a.replace(td, function(a, c) {
			return (c ? b : "") + a.toLowerCase()
		})
	}

	function ab() {
		jd = a.jQuery, jd ? (id = jd, l(jd.fn, {
			scope: Dd.scope,
			isolateScope: Dd.isolateScope,
			controller: Dd.controller,
			injector: Dd.injector,
			inheritedData: Dd.inheritedData
		}), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : id = lb, qd.element = id
	}

	function bb(a, b, c) {
		if (!a) throw pd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
		return a
	}

	function cb(a, b, c) {
		return c && x(a) && (a = a[a.length - 1]), bb(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
	}

	function db(a, b) {
		if ("hasOwnProperty" === a) throw pd("badname", "hasOwnProperty is not a valid {0} name", b)
	}

	function eb(a, b, c) {
		if (!b) return a;
		for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
		return !c && y(a) ? O(f, a) : a
	}

	function fb(a) {
		var b = a[0],
			c = a[a.length - 1];
		if (b === c) return id(b);
		var d = b,
			e = [d];
		do {
			if (d = d.nextSibling, !d) break;
			e.push(d)
		} while (d !== c);
		return id(e)
	}

	function gb(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c())
		}
		var c = d("$injector"),
			e = d("ng"),
			f = b(a, "angular", Object);
		return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
			var a = {};
			return function(d, f, g) {
				var h = function(a, b) {
					if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
				};
				return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
					function a(a, c, d) {
						return function() {
							return b[d || "push"]([a, c, arguments]), i
						}
					}
					if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
					var b = [],
						e = [],
						h = a("$injector", "invoke"),
						i = {
							_invokeQueue: b,
							_runBlocks: e,
							requires: f,
							name: d,
							provider: a("$provide", "provider"),
							factory: a("$provide", "factory"),
							service: a("$provide", "service"),
							value: a("$provide", "value"),
							constant: a("$provide", "constant", "unshift"),
							animation: a("$animateProvider", "register"),
							filter: a("$filterProvider", "register"),
							controller: a("$controllerProvider", "register"),
							directive: a("$compileProvider", "directive"),
							config: h,
							run: function(a) {
								return e.push(a), this
							}
						};
					return g && h(g), i
				})
			}
		})
	}

	function hb(b) {
		l(b, {
			bootstrap: $,
			copy: I,
			extend: l,
			equals: K,
			element: id,
			forEach: f,
			injector: Eb,
			noop: o,
			bind: O,
			toJson: Q,
			fromJson: R,
			identity: p,
			isUndefined: r,
			isDefined: s,
			isString: u,
			isFunction: y,
			isObject: t,
			isNumber: v,
			isElement: D,
			isArray: x,
			version: ud,
			isDate: w,
			lowercase: dd,
			uppercase: ed,
			callbacks: {
				counter: 0
			},
			$$minErr: d,
			$$csp: L
		}), kd = gb(a);
		try {
			kd("ngLocale")
		} catch (c) {
			kd("ngLocale", []).provider("$locale", Zb)
		}
		kd("ng", ["ngLocale"], ["$provide",
			function(a) {
				a.provider({
					$$sanitizeUri: xc
				}), a.provider("$compile", Kb).directive({
					a: ke,
					input: ue,
					textarea: ue,
					form: oe,
					script: bf,
					select: ef,
					style: gf,
					option: ff,
					ngBind: Ge,
					ngBindHtml: Ie,
					ngBindTemplate: He,
					ngClass: Je,
					ngClassEven: Le,
					ngClassOdd: Ke,
					ngCloak: Me,
					ngController: Ne,
					ngForm: pe,
					ngHide: Xe,
					ngIf: Pe,
					ngInclude: Qe,
					ngInit: Se,
					ngNonBindable: Te,
					ngPluralize: Ue,
					ngRepeat: Ve,
					ngShow: We,
					ngStyle: Ye,
					ngSwitch: Ze,
					ngSwitchWhen: $e,
					ngSwitchDefault: _e,
					ngOptions: df,
					ngTransclude: af,
					ngModel: Ae,
					ngList: De,
					ngChange: Be,
					required: Ce,
					ngRequired: Ce,
					ngValue: Fe
				}).directive({
					ngInclude: Re
				}).directive(le).directive(Oe), a.provider({
					$anchorScroll: Fb,
					$animate: Md,
					$browser: Hb,
					$cacheFactory: Ib,
					$controller: Nb,
					$document: Ob,
					$exceptionHandler: Pb,
					$filter: Ic,
					$interpolate: Xb,
					$interval: Yb,
					$http: Ub,
					$httpBackend: Vb,
					$location: kc,
					$log: lc,
					$parse: tc,
					$rootScope: wc,
					$q: uc,
					$sce: Cc,
					$sceDelegate: Bc,
					$sniffer: Dc,
					$templateCache: Jb,
					$timeout: Ec,
					$window: Hc
				})
			}
		])
	}

	function ib() {
		return ++xd
	}

	function jb(a) {
		return a.replace(Ad, function(a, b, c, d) {
			return d ? c.toUpperCase() : c
		}).replace(Bd, "Moz$1")
	}

	function kb(a, b, c, d) {
		function e(a) {
			var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
				n = b;
			if (!d || null != a)
				for (; m.length;)
					for (e = m.shift(), g = 0, h = e.length; h > g; g++)
						for (i = id(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(jd(l[j]));
			return f.apply(this, arguments)
		}
		var f = jd.fn[a];
		f = f.$original || f, e.$original = f, jd.fn[a] = e
	}

	function lb(a) {
		if (a instanceof lb) return a;
		if (!(this instanceof lb)) {
			if (u(a) && "<" != a.charAt(0)) throw Cd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new lb(a)
		}
		if (u(a)) {
			var c = b.createElement("div");
			c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), vb(this, c.childNodes);
			var d = id(b.createDocumentFragment());
			d.append(this)
		} else vb(this, a)
	}

	function mb(a) {
		return a.cloneNode(!0)
	}

	function nb(a) {
		pb(a);
		for (var b = 0, c = a.childNodes || []; b < c.length; b++) nb(c[b])
	}

	function ob(a, b, c, d) {
		if (s(d)) throw Cd("offargs", "jqLite#off() does not support the `selector` argument");
		var e = qb(a, "events"),
			g = qb(a, "handle");
		g && (r(b) ? f(e, function(b, c) {
			zd(a, c, b), delete e[c]
		}) : f(b.split(" "), function(b) {
			r(c) ? (zd(a, b, e[b]), delete e[b]) : H(e[b] || [], c)
		}))
	}

	function pb(a, b) {
		var d = a[wd],
			e = vd[d];
		if (e) {
			if (b) return delete vd[d].data[b], void 0;
			e.handle && (e.events.$destroy && e.handle({}, "$destroy"), ob(a)), delete vd[d], a[wd] = c
		}
	}

	function qb(a, b, c) {
		var d = a[wd],
			e = vd[d || -1];
		return s(c) ? (e || (a[wd] = d = ib(), e = vd[d] = {}), e[b] = c, void 0) : e && e[b]
	}

	function rb(a, b, c) {
		var d = qb(a, "data"),
			e = s(c),
			f = !e && s(b),
			g = f && !t(b);
		if (d || g || qb(a, "data", d = {}), e) d[b] = c;
		else {
			if (!f) return d;
			if (g) return d && d[b];
			l(d, b)
		}
	}

	function sb(a, b) {
		return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
	}

	function tb(a, b) {
		b && a.setAttribute && f(b.split(" "), function(b) {
			a.setAttribute("class", sd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + sd(b) + " ", " ")))
		})
	}

	function ub(a, b) {
		if (b && a.setAttribute) {
			var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			f(b.split(" "), function(a) {
				a = sd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
			}), a.setAttribute("class", sd(c))
		}
	}

	function vb(a, b) {
		if (b) {
			b = b.nodeName || !s(b.length) || A(b) ? [b] : b;
			for (var c = 0; c < b.length; c++) a.push(b[c])
		}
	}

	function wb(a, b) {
		return xb(a, "$" + (b || "ngController") + "Controller")
	}

	function xb(a, b, d) {
		a = id(a), 9 == a[0].nodeType && (a = a.find("html"));
		for (var e = x(b) ? b : [b]; a.length;) {
			for (var f = 0, g = e.length; g > f; f++)
				if ((d = a.data(e[f])) !== c) return d;
			a = a.parent()
		}
	}

	function yb(a) {
		for (var b = 0, c = a.childNodes; b < c.length; b++) nb(c[b]);
		for (; a.firstChild;) a.removeChild(a.firstChild)
	}

	function zb(a, b) {
		var c = Ed[b.toLowerCase()];
		return c && Fd[a.nodeName] && c
	}

	function Ab(a, c) {
		var d = function(d, e) {
			if (d.preventDefault || (d.preventDefault = function() {
				d.returnValue = !1
			}), d.stopPropagation || (d.stopPropagation = function() {
				d.cancelBubble = !0
			}), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
				var g = d.preventDefault;
				d.preventDefault = function() {
					d.defaultPrevented = !0, g.call(d)
				}, d.defaultPrevented = !1
			}
			d.isDefaultPrevented = function() {
				return d.defaultPrevented || d.returnValue === !1
			};
			var h = J(c[e || d.type] || []);
			f(h, function(b) {
				b.call(a, d)
			}), 8 >= hd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
		};
		return d.elem = a, d
	}

	function Bb(a) {
		var b, d = typeof a;
		return "object" == d && null !== a ? "function" == typeof(b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, d + ":" + b
	}

	function Cb(a) {
		f(a, this.put, this)
	}

	function Db(a) {
		var b, c, d, e;
		return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Jd, ""), d = c.match(Gd), f(d[1].split(Hd), function(a) {
			a.replace(Id, function(a, c, d) {
				b.push(d)
			})
		})), a.$inject = b) : x(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0), b
	}

	function Eb(a) {
		function b(a) {
			return function(b, c) {
				return t(b) ? (f(b, i(a)), void 0) : a(b, c)
			}
		}

		function c(a, b) {
			if (db(a, "service"), (y(b) || x(b)) && (b = v.instantiate(b)), !b.$get) throw Kd("pget", "Provider '{0}' must define $get factory method.", a);
			return s[a + n] = b
		}

		function d(a, b) {
			return c(a, {
				$get: b
			})
		}

		function e(a, b) {
			return d(a, ["$injector",
				function(a) {
					return a.instantiate(b)
				}
			])
		}

		function g(a, b) {
			return d(a, q(b))
		}

		function h(a, b) {
			db(a, "constant"), s[a] = b, w[a] = b
		}

		function j(a, b) {
			var c = v.get(a + n),
				d = c.$get;
			c.$get = function() {
				var a = z.invoke(d, c);
				return z.invoke(b, null, {
					$delegate: a
				})
			}
		}

		function k(a) {
			var b, c, d, e, g = [];
			return f(a, function(a) {
				if (!r.get(a)) {
					r.put(a, !0);
					try {
						if (u(a))
							for (b = kd(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
								var f = c[d],
									h = v.get(f[0]);
								h[f[1]].apply(h, f[2])
							} else y(a) ? g.push(v.invoke(a)) : x(a) ? g.push(v.invoke(a)) : cb(a, "module")
					} catch (i) {
						throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Kd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
					}
				}
			}), g
		}

		function l(a, b) {
			function c(c) {
				if (a.hasOwnProperty(c)) {
					if (a[c] === m) throw Kd("cdep", "Circular dependency found: {0}", p.join(" <- "));
					return a[c]
				}
				try {
					return p.unshift(c), a[c] = m, a[c] = b(c)
				} finally {
					p.shift()
				}
			}

			function d(a, b, d) {
				var e, f, g, h = [],
					i = Db(a);
				for (f = 0, e = i.length; e > f; f++) {
					if (g = i[f], "string" != typeof g) throw Kd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
					h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
				}
				return a.$inject || (a = a[e]), a.apply(b, h)
			}

			function e(a, b) {
				var c, e, f = function() {};
				return f.prototype = (x(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || y(e) ? e : c
			}
			return {
				invoke: d,
				instantiate: e,
				get: c,
				annotate: Db,
				has: function(b) {
					return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
				}
			}
		}
		var m = {},
			n = "Provider",
			p = [],
			r = new Cb,
			s = {
				$provide: {
					provider: b(c),
					factory: b(d),
					service: b(e),
					value: b(g),
					constant: b(h),
					decorator: j
				}
			},
			v = s.$injector = l(s, function() {
				throw Kd("unpr", "Unknown provider: {0}", p.join(" <- "))
			}),
			w = {},
			z = w.$injector = l(w, function(a) {
				var b = v.get(a + n);
				return z.invoke(b.$get, b)
			});
		return f(k(a), function(a) {
			z.invoke(a || o)
		}), z
	}

	function Fb() {
		var a = !0;
		this.disableAutoScrolling = function() {
			a = !1
		}, this.$get = ["$window", "$location", "$rootScope",
			function(b, c, d) {
				function e(a) {
					var b = null;
					return f(a, function(a) {
						b || "a" !== dd(a.nodeName) || (b = a)
					}), b
				}

				function g() {
					var a, d = c.hash();
					d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
				}
				var h = b.document;
				return a && d.$watch(function() {
					return c.hash()
				}, function() {
					d.$evalAsync(g)
				}), g
			}
		]
	}

	function Gb(a, b, d, e) {
		function g(a) {
			try {
				a.apply(null, N(arguments, 1))
			} finally {
				if (s--, 0 === s)
					for (; t.length;) try {
						t.pop()()
					} catch (b) {
						d.error(b)
					}
			}
		}

		function h(a, b) {
			! function c() {
				f(w, function(a) {
					a()
				}), v = b(c, a)
			}()
		}

		function i() {
			z = null, x != j.url() && (x = j.url(), f(A, function(a) {
				a(j.url())
			}))
		}
		var j = this,
			k = b[0],
			l = a.location,
			m = a.history,
			n = a.setTimeout,
			p = a.clearTimeout,
			q = {};
		j.isMock = !1;
		var s = 0,
			t = [];
		j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
			s++
		}, j.notifyWhenNoOutstandingRequests = function(a) {
			f(w, function(a) {
				a()
			}), 0 === s ? a() : t.push(a)
		};
		var v, w = [];
		j.addPollFn = function(a) {
			return r(v) && h(100, n), w.push(a), a
		};
		var x = l.href,
			y = b.find("base"),
			z = null;
		j.url = function(b, c) {
			if (l !== a.location && (l = a.location), b) {
				if (x == b) return;
				return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
			}
			return z || l.href.replace(/%27/g, "'")
		};
		var A = [],
			B = !1;
		j.onUrlChange = function(b) {
			return B || (e.history && id(a).on("popstate", i), e.hashchange ? id(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
		}, j.baseHref = function() {
			var a = y.attr("href");
			return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
		};
		var C = {},
			D = "",
			E = j.baseHref();
		j.cookies = function(a, b) {
			var e, f, g, h, i;
			if (!a) {
				if (k.cookie !== D)
					for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
				return C
			}
			b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
		}, j.defer = function(a, b) {
			var c;
			return s++, c = n(function() {
				delete q[c], g(a)
			}, b || 0), q[c] = !0, c
		}, j.defer.cancel = function(a) {
			return q[a] ? (delete q[a], p(a), g(o), !0) : !1
		}
	}

	function Hb() {
		this.$get = ["$window", "$log", "$sniffer", "$document",
			function(a, b, c, d) {
				return new Gb(a, d, b, c)
			}
		]
	}

	function Ib() {
		this.$get = function() {
			function a(a, c) {
				function e(a) {
					a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
				}

				function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a))
				}
				if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
				var g = 0,
					h = l({}, c, {
						id: a
					}),
					i = {},
					j = c && c.capacity || Number.MAX_VALUE,
					k = {},
					m = null,
					n = null;
				return b[a] = {
					put: function(a, b) {
						var c = k[a] || (k[a] = {
							key: a
						});
						return e(c), r(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), b)
					},
					get: function(a) {
						var b = k[a];
						if (b) return e(b), i[a]
					},
					remove: function(a) {
						var b = k[a];
						b && (b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a], delete i[a], g--)
					},
					removeAll: function() {
						i = {}, g = 0, k = {}, m = n = null
					},
					destroy: function() {
						i = null, h = null, k = null, delete b[a]
					},
					info: function() {
						return l({}, h, {
							size: g
						})
					}
				}
			}
			var b = {};
			return a.info = function() {
				var a = {};
				return f(b, function(b, c) {
					a[c] = b.info()
				}), a
			}, a.get = function(a) {
				return b[a]
			}, a
		}
	}

	function Jb() {
		this.$get = ["$cacheFactory",
			function(a) {
				return a("templates")
			}
		]
	}

	function Kb(a, d) {
		var e = {},
			g = "Directive",
			h = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
			j = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
			k = /^(on[a-z]+|formaction)$/;
		this.directive = function m(b, c) {
			return db(b, "directive"), u(b) ? (bb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler",
				function(a, c) {
					var d = [];
					return f(e[b], function(e, f) {
						try {
							var g = a.invoke(e);
							y(g) ? g = {
								compile: q(g)
							} : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g)
						} catch (h) {
							c(h)
						}
					}), d
				}
			])), e[b].push(c)) : f(b, i(m)), this
		}, this.aHrefSanitizationWhitelist = function(a) {
			return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
		}, this.imgSrcSanitizationWhitelist = function(a) {
			return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
			function(a, d, i, m, o, r, s, v, w, z, A, B) {
				function C(a, b, c, d, e) {
					a instanceof id || (a = id(a)), f(a, function(b, c) {
						3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = id(b).wrap("<span></span>").parent()[0])
					});
					var g = E(a, b, a, c, d, e);
					return D(a, "ng-scope"),
						function(b, c, d) {
							bb(b, "scope");
							var e = c ? Dd.clone.call(a) : a;
							f(d, function(a, b) {
								e.data("$" + b + "Controller", a)
							});
							for (var h = 0, i = e.length; i > h; h++) {
								var j = e[h],
									k = j.nodeType;
								(1 === k || 9 === k) && e.eq(h).data("$scope", b)
							}
							return c && c(e, b), g && g(b, e, e), e
						}
				}

				function D(a, b) {
					try {
						a.addClass(b)
					} catch (c) {}
				}

				function E(a, b, d, e, f, g) {
					function h(a, d, e, f) {
						var g, h, i, j, k, l, m, n, p, q = d.length,
							r = new Array(q);
						for (m = 0; q > m; m++) r[m] = d[m];
						for (m = 0, p = 0, n = o.length; n > m; p++) i = r[p], g = o[m++], h = o[m++], j = id(i), g ? (g.scope ? (k = a.$new(), j.data("$scope", k)) : k = a, l = g.transclude, l || !f && b ? g(h, k, i, e, F(a, l || b)) : g(h, k, i, e, f)) : h && h(a, i.childNodes, c, f)
					}
					for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new $, j = G(a[p], [], i, 0 === p ? e : c, f), k = j.length ? L(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && D(id(a[p]), "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : E(l, k ? k.transclude : b), o.push(k, m), n = n || k || m, g = null;
					return n ? h : null
				}

				function F(a, b) {
					return function(c, d, e) {
						var f = !1;
						c || (c = a.$new(), c.$$transcluded = !0, f = !0);
						var g = b(c, d, e);
						return f && g.on("$destroy", O(c, c.$destroy)), g
					}
				}

				function G(a, b, c, d, e) {
					var f, g, i = a.nodeType,
						k = c.$attr;
					switch (i) {
						case 1:
							P(b, Lb(ld(a).toLowerCase()), "E", d, e);
							for (var l, m, n, o, p, q = a.attributes, r = 0, s = q && q.length; s > r; r++) {
								var t = !1,
									v = !1;
								if (l = q[r], !hd || hd >= 8 || l.specified) {
									m = l.name, o = Lb(m), eb.test(o) && (m = _(o.substr(6), "-"));
									var w = o.replace(/(Start|End)$/, "");
									o === w + "Start" && (t = m, v = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Lb(m.toLowerCase()), k[n] = m, c[n] = p = sd(l.value), zb(a, n) && (c[n] = !0), X(a, b, p, n), P(b, n, "A", d, e, t, v)
								}
							}
							if (g = a.className, u(g) && "" !== g)
								for (; f = j.exec(g);) n = Lb(f[2]), P(b, n, "C", d, e) && (c[n] = sd(f[3])), g = g.substr(f.index + f[0].length);
							break;
						case 3:
							V(b, a.nodeValue);
							break;
						case 8:
							try {
								f = h.exec(a.nodeValue), f && (n = Lb(f[1]), P(b, n, "M", d, e) && (c[n] = sd(f[2])))
							} catch (x) {}
					}
					return b.sort(S), b
				}

				function H(a, b, c) {
					var d = [],
						e = 0;
					if (b && a.hasAttribute && a.hasAttribute(b)) {
						do {
							if (!a) throw Nd("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
							1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
						} while (e > 0)
					} else d.push(a);
					return id(d)
				}

				function I(a, b, c) {
					return function(d, e, f, g, h) {
						return e = H(e[0], b, c), a(d, e, f, g, h)
					}
				}

				function L(a, e, g, h, j, k, l, m, n) {
					function o(a, b, c, d) {
						a && (c && (a = I(a, c, d)), a.require = w.require, (O === w || w.$$isolateScope) && (a = Z(a, {
							isolateScope: !0
						})), l.push(a)), b && (c && (b = I(b, c, d)), b.require = w.require, (O === w || w.$$isolateScope) && (b = Z(b, {
							isolateScope: !0
						})), m.push(b))
					}

					function p(a, b, c) {
						var d, e = "data",
							g = !1;
						if (u(a)) {
							for (;
								"^" == (d = a.charAt(0)) || "?" == d;) a = a.substr(1), "^" == d && (e = "inheritedData"), g = g || "?" == d;
							if (d = null, c && "data" === e && (d = c[a]), d = d || b[e]("$" + a + "Controller"), !d && !g) throw Nd("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, z);
							return d
						}
						return x(a) && (d = [], f(a, function(a) {
							d.push(p(a, b, c))
						})), d
					}

					function q(a, b, h, j, k) {
						function n(a, b) {
							var d;
							return arguments.length < 2 && (b = a, a = c), W && (d = z), k(a, b, d)
						}
						var o, q, t, u, v, w, x, y, z = {};
						if (o = e === h ? g : J(g, new $(id(h), g.$attr)), q = o.$$element, O) {
							var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
								B = id(h);
							x = b.$new(!0), P && P === O.$$originalDirective ? B.data("$isolateScope", x) : B.data("$isolateScopeNoTemplate", x), D(B, "ng-isolate-scope"), f(O.scope, function(a, c) {
								var e, f, g, h, i = a.match(A) || [],
									j = i[3] || c,
									k = "?" == i[2],
									l = i[1];
								switch (x.$$isolateBindings[c] = l + j, l) {
									case "@":
										o.$observe(j, function(a) {
											x[c] = a
										}), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
										break;
									case "=":
										if (k && !o[j]) return;
										f = r(o[j]), h = f.literal ? K : function(a, b) {
											return a === b
										}, g = f.assign || function() {
											throw e = x[c] = f(b), Nd("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], O.name)
										}, e = x[c] = f(b), x.$watch(function() {
											var a = f(b);
											return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a
										}, null, f.literal);
										break;
									case "&":
										f = r(o[j]), x[c] = function(a) {
											return f(b, a)
										};
										break;
									default:
										throw Nd("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", O.name, c, a)
								}
							})
						}
						for (y = k && n, L && f(L, function(a) {
							var c, d = {
								$scope: a === O || a.$$isolateScope ? x : b,
								$element: q,
								$attrs: o,
								$transclude: y
							};
							w = a.controller, "@" == w && (w = o[a.name]), c = s(w, d), z[a.name] = c, W || q.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
						}), t = 0, u = l.length; u > t; t++) try {
							v = l[t], v(v.isolateScope ? x : b, q, o, v.require && p(v.require, q, z), y)
						} catch (C) {
							i(C, T(q))
						}
						var E = b;
						for (O && (O.template || null === O.templateUrl) && (E = x), a && a(E, h.childNodes, c, k), t = m.length - 1; t >= 0; t--) try {
							v = m[t], v(v.isolateScope ? x : b, q, o, v.require && p(v.require, q, z), y)
						} catch (C) {
							i(C, T(q))
						}
					}
					n = n || {};
					for (var v, w, z, A, B, E, F = -Number.MAX_VALUE, L = n.controllerDirectives, O = n.newIsolateScopeDirective, P = n.templateDirective, S = n.nonTlbTranscludeDirective, V = !1, W = !1, X = g.$$element = id(e), _ = k, ab = h, bb = 0, cb = a.length; cb > bb; bb++) {
						w = a[bb];
						var eb = w.$$start,
							fb = w.$$end;
						if (eb && (X = H(e, eb, fb)), A = c, F > w.priority) break;
						if ((E = w.scope) && (v = v || w, w.templateUrl || (U("new/isolated scope", O, w, X), t(E) && (O = w))), z = w.name, !w.templateUrl && w.controller && (E = w.controller, L = L || {}, U("'" + z + "' controller", L[z], w, X), L[z] = w), (E = w.transclude) && (V = !0, w.$$tlb || (U("transclusion", S, w, X), S = w), "element" == E ? (W = !0, F = w.priority, A = H(e, eb, fb), X = g.$$element = id(b.createComment(" " + z + ": " + g[z] + " ")), e = X[0], Y(j, id(N(A)), e), ab = C(A, h, F, _ && _.name, {
							nonTlbTranscludeDirective: S
						})) : (A = id(mb(e)).contents(), X.empty(), ab = C(A, h))), w.template)
							if (U("template", P, w, X), P = w, E = y(w.template) ? w.template(X, g) : w.template, E = db(E), w.replace) {
								if (_ = w, A = id("<div>" + sd(E) + "</div>").contents(), e = A[0], 1 != A.length || 1 !== e.nodeType) throw Nd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", z, "");
								Y(j, X, e);
								var gb = {
										$attr: {}
									},
									hb = G(e, [], gb),
									ib = a.splice(bb + 1, a.length - (bb + 1));
								O && M(hb), a = a.concat(hb).concat(ib), Q(g, gb), cb = a.length
							} else X.html(E);
						if (w.templateUrl) U("template", P, w, X), P = w, w.replace && (_ = w), q = R(a.splice(bb, a.length - bb), X, g, j, ab, l, m, {
							controllerDirectives: L,
							newIsolateScopeDirective: O,
							templateDirective: P,
							nonTlbTranscludeDirective: S
						}), cb = a.length;
						else if (w.compile) try {
							B = w.compile(X, g, ab), y(B) ? o(null, B, eb, fb) : B && o(B.pre, B.post, eb, fb)
						} catch (jb) {
							i(jb, T(X))
						}
						w.terminal && (q.terminal = !0, F = Math.max(F, w.priority))
					}
					return q.scope = v && v.scope === !0, q.transclude = V && ab, q
				}

				function M(a) {
					for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
						$$isolateScope: !0
					})
				}

				function P(b, d, f, h, j, k, l) {
					if (d === j) return null;
					var m = null;
					if (e.hasOwnProperty(d))
						for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try {
							o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
								$$start: k,
								$$end: l
							})), b.push(o), m = o)
						} catch (s) {
							i(s)
						}
					return m
				}

				function Q(a, b) {
					var c = b.$attr,
						d = a.$attr,
						e = a.$$element;
					f(a, function(d, e) {
						"$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
					}), f(b, function(b, f) {
						"class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
					})
				}

				function R(a, b, c, d, e, g, h, i) {
					var j, k, n = [],
						p = b[0],
						q = a.shift(),
						r = l({}, q, {
							templateUrl: null,
							transclude: null,
							replace: null,
							$$originalDirective: q
						}),
						s = y(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
					return b.empty(), m.get(z.getTrustedResourceUrl(s), {
							cache: o
						}).success(function(l) {
							var m, o, u, v;
							if (l = db(l), q.replace) {
								if (u = id("<div>" + sd(l) + "</div>").contents(), m = u[0], 1 != u.length || 1 !== m.nodeType) throw Nd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
								o = {
									$attr: {}
								}, Y(d, b, m);
								var w = G(m, [], o);
								t(q.scope) && M(w), a = w.concat(a), Q(c, o)
							} else m = p, b.html(l);
							for (a.unshift(r), j = L(a, m, c, e, b, q, g, h, i), f(d, function(a, c) {
								a == m && (d[c] = b[0])
							}), k = E(b[0].childNodes, e); n.length;) {
								var x = n.shift(),
									y = n.shift(),
									z = n.shift(),
									A = n.shift(),
									B = b[0];
								y !== p && (B = mb(m), Y(z, id(y), B)), v = j.transclude ? F(x, j.transclude) : A, j(k, x, B, d, v)
							}
							n = null
						}).error(function(a, b, c, d) {
							throw Nd("tpload", "Failed to load template: {0}", d.url)
						}),
						function(a, b, c, d, e) {
							n ? (n.push(b), n.push(c), n.push(d), n.push(e)) : j(k, b, c, d, e)
						}
				}

				function S(a, b) {
					var c = b.priority - a.priority;
					return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
				}

				function U(a, b, c, d) {
					if (b) throw Nd("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
				}

				function V(a, b) {
					var c = d(b, !0);
					c && a.push({
						priority: 0,
						compile: q(function(a, b) {
							var d = b.parent(),
								e = d.data("$binding") || [];
							e.push(c), D(d.data("$binding", e), "ng-binding"), a.$watch(c, function(a) {
								b[0].nodeValue = a
							})
						})
					})
				}

				function W(a, b) {
					if ("srcdoc" == b) return z.HTML;
					var c = ld(a);
					return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? z.RESOURCE_URL : void 0
				}

				function X(a, b, c, e) {
					var f = d(c, !0);
					if (f) {
						if ("multiple" === e && "SELECT" === ld(a)) throw Nd("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
						b.push({
							priority: 100,
							compile: function() {
								return {
									pre: function(b, c, g) {
										var h = g.$$observers || (g.$$observers = {});
										if (k.test(e)) throw Nd("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
										f = d(g[e], !0, W(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) {
											"class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
										}))
									}
								}
							}
						})
					}
				}

				function Y(a, c, d) {
					var e, f, g = c[0],
						h = c.length,
						i = g.parentNode;
					if (a)
						for (e = 0, f = a.length; f > e; e++)
							if (a[e] == g) {
								a[e++] = d;
								for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
								a.length -= h - 1;
								break
							}
					i && i.replaceChild(d, g);
					var m = b.createDocumentFragment();
					m.appendChild(g), d[id.expando] = g[id.expando];
					for (var n = 1, o = c.length; o > n; n++) {
						var p = c[n];
						id(p).remove(), m.appendChild(p), delete c[n]
					}
					c[0] = d, c.length = 1
				}

				function Z(a, b) {
					return l(function() {
						return a.apply(null, arguments)
					}, a, b)
				}
				var $ = function(a, b) {
					this.$$element = a, this.$attr = b || {}
				};
				$.prototype = {
					$normalize: Lb,
					$addClass: function(a) {
						a && a.length > 0 && A.addClass(this.$$element, a)
					},
					$removeClass: function(a) {
						a && a.length > 0 && A.removeClass(this.$$element, a)
					},
					$updateClass: function(a, b) {
						this.$removeClass(Mb(b, a)), this.$addClass(Mb(a, b))
					},
					$set: function(a, b, d, e) {
						var g, h = zb(this.$$element[0], a);
						h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))), g = ld(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = B(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
						var j = this.$$observers;
						j && f(j[a], function(a) {
							try {
								a(b)
							} catch (c) {
								i(c)
							}
						})
					},
					$observe: function(a, b) {
						var c = this,
							d = c.$$observers || (c.$$observers = {}),
							e = d[a] || (d[a] = []);
						return e.push(b), v.$evalAsync(function() {
							e.$$inter || b(c[a])
						}), b
					}
				};
				var ab = d.startSymbol(),
					cb = d.endSymbol(),
					db = "{{" == ab || "}}" == cb ? p : function(a) {
						return a.replace(/\{\{/g, ab).replace(/}}/g, cb)
					},
					eb = /^ngAttr[A-Z]/;
				return C
			}
		]
	}

	function Lb(a) {
		return jb(a.replace(Od, ""))
	}

	function Mb(a, b) {
		var c = "",
			d = a.split(/\s+/),
			e = b.split(/\s+/);
		a: for (var f = 0; f < d.length; f++) {
			for (var g = d[f], h = 0; h < e.length; h++)
				if (g == e[h]) continue a;
			c += (c.length > 0 ? " " : "") + g
		}
		return c
	}

	function Nb() {
		var a = {},
			b = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function(b, c) {
			db(b, "controller"), t(b) ? l(a, b) : a[b] = c
		}, this.$get = ["$injector", "$window",
			function(c, e) {
				return function(f, g) {
					var h, i, j, k;
					if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
						if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
						g.$scope[k] = h
					}
					return h
				}
			}
		]
	}

	function Ob() {
		this.$get = ["$window",
			function(a) {
				return id(a.document)
			}
		]
	}

	function Pb() {
		this.$get = ["$log",
			function(a) {
				return function() {
					a.error.apply(a, arguments)
				}
			}
		]
	}

	function Qb(a) {
		var b, c, d, e = {};
		return a ? (f(a.split("\n"), function(a) {
			d = a.indexOf(":"), b = dd(sd(a.substr(0, d))), c = sd(a.substr(d + 1)), b && (e[b] ? e[b] += ", " + c : e[b] = c)
		}), e) : e
	}

	function Rb(a) {
		var b = t(a) ? a : c;
		return function(c) {
			return b || (b = Qb(a)), c ? b[dd(c)] || null : b
		}
	}

	function Sb(a, b, c) {
		return y(c) ? c(a, b) : (f(c, function(c) {
			a = c(a, b)
		}), a)
	}

	function Tb(a) {
		return a >= 200 && 300 > a
	}

	function Ub() {
		var a = /^\s*(\[|\{[^\{])/,
			b = /[\}\]]\s*$/,
			d = /^\)\]\}',?\n/,
			e = {
				"Content-Type": "application/json;charset=utf-8"
			},
			g = this.defaults = {
				transformResponse: [
					function(c) {
						return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))), c
					}
				],
				transformRequest: [
					function(a) {
						return t(a) && !C(a) ? Q(a) : a
					}
				],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*",
					},
					post: e,
					put: e,
					patch: e
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN"
			},
			i = this.interceptors = [],
			j = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
			function(a, b, d, e, k, m) {
				function n(a) {
					function d(a) {
						var b = l({}, a, {
							data: Sb(a.data, a.headers, h.transformResponse)
						});
						return Tb(a.status) ? b : k.reject(b)
					}

					function e(a) {
						function b(a) {
							var b;
							f(a, function(c, d) {
								y(c) && (b = c(), null != b ? a[d] = b : delete a[d])
							})
						}
						var c, d, e, h = g.headers,
							i = l({}, a.headers);
						h = l({}, h.common, h[dd(a.method)]), b(h), b(i);
						a: for (c in h) {
							d = dd(c);
							for (e in i)
								if (dd(e) === d) continue a;
							i[c] = h[c]
						}
						return i
					}
					var h = {
							transformRequest: g.transformRequest,
							transformResponse: g.transformResponse
						},
						i = e(a);
					l(h, a), h.headers = i, h.method = ed(h.method);
					var j = Gc(h.url) ? b.cookies()[h.xsrfCookieName || g.xsrfCookieName] : c;
					j && (i[h.xsrfHeaderName || g.xsrfHeaderName] = j);
					var m = function(a) {
							i = a.headers;
							var b = Sb(a.data, Rb(i), a.transformRequest);
							return r(a.data) && f(i, function(a, b) {
								"content-type" === dd(b) && delete i[b]
							}), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, b, i).then(d, d)
						},
						n = [m, c],
						o = k.when(h);
					for (f(z, function(a) {
						(a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
					}); n.length;) {
						var p = n.shift(),
							s = n.shift();
						o = o.then(p, s)
					}
					return o.success = function(a) {
						return o.then(function(b) {
							a(b.data, b.status, b.headers, h)
						}), o
					}, o.error = function(a) {
						return o.then(null, function(b) {
							a(b.data, b.status, b.headers, h)
						}), o
					}, o
				}

				function o() {
					f(arguments, function(a) {
						n[a] = function(b, c) {
							return n(l(c || {}, {
								method: a,
								url: b
							}))
						}
					})
				}

				function p() {
					f(arguments, function(a) {
						n[a] = function(b, c, d) {
							return n(l(d || {}, {
								method: a,
								url: b,
								data: c
							}))
						}
					})
				}

				function q(b, c, d) {
					function f(a, b, c) {
						j && (Tb(a) ? j.put(p, [a, b, Qb(c)]) : j.remove(p)), h(b, a, c), e.$$phase || e.$apply()
					}

					function h(a, c, d) {
						c = Math.max(c, 0), (Tb(c) ? m.resolve : m.reject)({
							data: a,
							status: c,
							headers: Rb(d),
							config: b
						})
					}

					function i() {
						var a = G(n.pendingRequests, b); - 1 !== a && n.pendingRequests.splice(a, 1)
					}
					var j, l, m = k.defer(),
						o = m.promise,
						p = v(b.url, b.params);
					if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && b.cache !== !1 && "GET" == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : w), j)
						if (l = j.get(p), s(l)) {
							if (l.then) return l.then(i, i), l;
							x(l) ? h(l[1], l[0], I(l[2])) : h(l, 200, {})
						} else j.put(p, o);
					return r(l) && a(b.method, p, c, f, d, b.timeout, b.withCredentials, b.responseType), o
				}

				function v(a, b) {
					if (!b) return a;
					var c = [];
					return h(b, function(a, b) {
						null === a || r(a) || (x(a) || (a = [a]), f(a, function(a) {
							t(a) && (a = Q(a)), c.push(Y(b) + "=" + Y(a))
						}))
					}), a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
				}
				var w = d("$http"),
					z = [];
				return f(i, function(a) {
					z.unshift(u(a) ? m.get(a) : m.invoke(a))
				}), f(j, function(a, b) {
					var c = u(a) ? m.get(a) : m.invoke(a);
					z.splice(b, 0, {
						response: function(a) {
							return c(k.when(a))
						},
						responseError: function(a) {
							return c(k.reject(a))
						}
					})
				}), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
			}
		]
	}

	function Vb() {
		this.$get = ["$browser", "$window", "$document",
			function(a, b, c) {
				return Wb(a, Pd, a.defer, b.angular.callbacks, c[0])
			}
		]
	}

	function Wb(a, b, c, d, e) {
		function g(a, b) {
			var c = e.createElement("script"),
				d = function() {
					c.onreadystatechange = c.onload = c.onerror = null, e.body.removeChild(c), b && b()
				};
			return c.type = "text/javascript", c.src = a, hd && 8 >= hd ? c.onreadystatechange = function() {
				/loaded|complete/.test(c.readyState) && d()
			} : c.onload = c.onerror = function() {
				d()
			}, e.body.appendChild(c), d
		}
		var h = -1;
		return function(e, i, j, k, l, m, n, p) {
			function q() {
				t = h, v && v(), w && w.abort()
			}

			function r(b, d, e, f) {
				var g = Fc(i).protocol;
				x && c.cancel(x), v = w = null, d = "file" == g && 0 === d ? e ? 200 : 404 : d, d = 1223 == d ? 204 : d, b(d, e, f), a.$$completeOutstandingRequest(o)
			}
			var t;
			if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == dd(e)) {
				var u = "_" + (d.counter++).toString(36);
				d[u] = function(a) {
					d[u].data = a
				};
				var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function() {
					d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), delete d[u]
				})
			} else {
				var w = new b;
				w.open(e, i, !0), f(l, function(a, b) {
					s(a) && w.setRequestHeader(b, a)
				}), w.onreadystatechange = function() {
					if (4 == w.readyState) {
						var a = null,
							b = null;
						t !== h && (a = w.getAllResponseHeaders(), b = w.responseType ? w.response : w.responseText), r(k, t || w.status, b, a)
					}
				}, n && (w.withCredentials = !0), p && (w.responseType = p), w.send(j || null)
			} if (m > 0) var x = c(q, m);
			else m && m.then && m.then(q)
		}
	}

	function Xb() {
		var a = "{{",
			b = "}}";
		this.startSymbol = function(b) {
			return b ? (a = b, this) : a
		}, this.endSymbol = function(a) {
			return a ? (b = a, this) : b
		}, this.$get = ["$parse", "$exceptionHandler", "$sce",
			function(c, d, e) {
				function f(f, i, j) {
					for (var k, l, m, n, o = 0, p = [], q = f.length, s = !1, t = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, s = !0) : (o != q && p.push(f.substring(o)), o = q);
					if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw Qd("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
					return !i || s ? (t.length = q, m = function(a) {
						try {
							for (var b, c = 0, g = q; g > c; c++) "function" == typeof(b = p[c]) && (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = "" : "string" != typeof b && (b = Q(b))), t[c] = b;
							return t.join("")
						} catch (h) {
							var i = Qd("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
							d(i)
						}
					}, m.exp = f, m.parts = p, m) : void 0
				}
				var g = a.length,
					h = b.length;
				return f.startSymbol = function() {
					return a
				}, f.endSymbol = function() {
					return b
				}, f
			}
		]
	}

	function Yb() {
		this.$get = ["$rootScope", "$window", "$q",
			function(a, b, c) {
				function d(d, f, g, h) {
					var i = b.setInterval,
						j = b.clearInterval,
						k = c.defer(),
						l = k.promise,
						m = 0,
						n = s(h) && !h;
					return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() {
						k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
					}, f), e[l.$$intervalId] = k, l
				}
				var e = {};
				return d.cancel = function(a) {
					return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
				}, d
			}
		]
	}

	function Zb() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "¤",
						posSuf: "",
						negPre: "(¤",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
					SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
					DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
					SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function(a) {
					return 1 === a ? "one" : "other"
				}
			}
		}
	}

	function $b(a) {
		for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]);
		return b.join("/")
	}

	function _b(a, b, c) {
		var d = Fc(a, c);
		b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || Sd[d.protocol] || null
	}

	function ac(a, b, c) {
		var d = "/" !== a.charAt(0);
		d && (a = "/" + a);
		var e = Fc(a, c);
		b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
	}

	function bc(a, b) {
		return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
	}

	function cc(a) {
		var b = a.indexOf("#");
		return -1 == b ? a : a.substr(0, b)
	}

	function dc(a) {
		return a.substr(0, cc(a).lastIndexOf("/") + 1)
	}

	function ec(a) {
		return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
	}

	function fc(a, b) {
		this.$$html5 = !0, b = b || "";
		var d = dc(a);
		_b(a, this, a), this.$$parse = function(b) {
			var c = bc(d, b);
			if (!u(c)) throw Td("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
			ac(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function() {
			var a = W(this.$$search),
				b = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = $b(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
		}, this.$$rewrite = function(e) {
			var f, g;
			return (f = bc(a, e)) !== c ? (g = f, (f = bc(b, f)) !== c ? d + (bc("/", f) || f) : a + g) : (f = bc(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
		}
	}

	function gc(a, b) {
		var c = dc(a);
		_b(a, this, a), this.$$parse = function(d) {
			function e(a, b, c) {
				var d, e = /^\/?.*?:(\/.*)/;
				return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
			}
			var f = bc(a, d) || bc(c, d),
				g = "#" == f.charAt(0) ? bc(b, f) : this.$$html5 ? f : "";
			if (!u(g)) throw Td("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
			ac(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose()
		}, this.$$compose = function() {
			var c = W(this.$$search),
				d = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = $b(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
		}, this.$$rewrite = function(b) {
			return cc(a) == cc(b) ? b : void 0
		}
	}

	function hc(a, b) {
		this.$$html5 = !0, gc.apply(this, arguments);
		var c = dc(a);
		this.$$rewrite = function(d) {
			var e;
			return a == cc(d) ? d : (e = bc(c, d)) ? a + b + e : c === d + "/" ? c : void 0
		}
	}

	function ic(a) {
		return function() {
			return this[a]
		}
	}

	function jc(a, b) {
		return function(c) {
			return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
		}
	}

	function kc() {
		var b = "",
			c = !1;
		this.hashPrefix = function(a) {
			return s(a) ? (b = a, this) : b
		}, this.html5Mode = function(a) {
			return s(a) ? (c = a, this) : c
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
			function(d, e, f, g) {
				function h(a) {
					d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
				}
				var i, j, k, l = e.baseHref(),
					m = e.url();
				c ? (k = ec(m) + (l || "/"), j = f.history ? fc : hc) : (k = cc(m), j = gc), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m)), g.on("click", function(b) {
					if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
						for (var c = id(b.target);
							"a" !== dd(c[0].nodeName);)
							if (c[0] === g[0] || !(c = c.parent())[0]) return;
						var f = c.prop("href");
						t(f) && "[object SVGAnimatedString]" === f.toString() && (f = Fc(f.animVal).href);
						var h = i.$$rewrite(f);
						f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
					}
				}), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
					if (i.absUrl() != a) {
						if (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented) return e.url(i.absUrl()), void 0;
						d.$evalAsync(function() {
							var b = i.absUrl();
							i.$$parse(a), h(b)
						}), d.$$phase || d.$digest()
					}
				});
				var n = 0;
				return d.$watch(function() {
					var a = e.url(),
						b = i.$$replace;
					return n && a == i.absUrl() || (n++, d.$evalAsync(function() {
						d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
					})), i.$$replace = !1, n
				}), i
			}
		]
	}

	function lc() {
		var a = !0,
			b = this;
		this.debugEnabled = function(b) {
			return s(b) ? (a = b, this) : a
		}, this.$get = ["$window",
			function(c) {
				function d(a) {
					return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
				}

				function e(a) {
					var b = c.console || {},
						e = b[a] || b.log || o,
						g = !1;
					try {
						g = !!e.apply
					} catch (h) {}
					return g ? function() {
						var a = [];
						return f(arguments, function(b) {
							a.push(d(b))
						}), e.apply(b, a)
					} : function(a, b) {
						e(a, null == b ? "" : b)
					}
				}
				return {
					log: e("log"),
					info: e("info"),
					warn: e("warn"),
					error: e("error"),
					debug: function() {
						var c = e("debug");
						return function() {
							a && c.apply(b, arguments)
						}
					}()
				}
			}
		]
	}

	function mc(a, b) {
		if ("constructor" === a) throw Vd("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
		return a
	}

	function nc(a, b) {
		if (a) {
			if (a.constructor === a) throw Vd("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
			if (a.document && a.location && a.alert && a.setInterval) throw Vd("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
			if (a.children && (a.nodeName || a.on && a.find)) throw Vd("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b)
		}
		return a
	}

	function oc(a, b, d, e, f) {
		f = f || {};
		for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
			g = mc(h.shift(), e);
			var j = a[g];
			j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (Ud(e), "$$v" in a || ! function(a) {
				a.then(function(b) {
					a.$$v = b
				})
			}(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
		}
		return g = mc(h.shift(), e), a[g] = d, d
	}

	function pc(a, b, d, e, f, g, h) {
		return mc(a, g), mc(b, g), mc(d, g), mc(e, g), mc(f, g), h.unwrapPromises ? function(h, i) {
			var j, k = i && i.hasOwnProperty(a) ? i : h;
			return null == k ? k : (k = k[a], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
				j.$$v = a
			})), k = k.$$v), null == k ? b ? c : k : (k = k[b], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
				j.$$v = a
			})), k = k.$$v), null == k ? d ? c : k : (k = k[d], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
				j.$$v = a
			})), k = k.$$v), null == k ? e ? c : k : (k = k[e], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
				j.$$v = a
			})), k = k.$$v), null == k ? f ? c : k : (k = k[f], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
				j.$$v = a
			})), k = k.$$v), k)))))
		} : function(g, h) {
			var i = h && h.hasOwnProperty(a) ? h : g;
			return null == i ? i : (i = i[a], null == i ? b ? c : i : (i = i[b], null == i ? d ? c : i : (i = i[d], null == i ? e ? c : i : (i = i[e], null == i ? f ? c : i : i = i[f]))))
		}
	}

	function qc(a, b) {
		return mc(a, b),
			function(b, d) {
				return null == b ? c : (d && d.hasOwnProperty(a) ? d : b)[a]
			}
	}

	function rc(a, b, d) {
		return mc(a, d), mc(b, d),
			function(d, e) {
				return null == d ? c : (d = (e && e.hasOwnProperty(a) ? e : d)[a], null == d ? c : d[b])
			}
	}

	function sc(a, b, d) {
		if (_d.hasOwnProperty(a)) return _d[a];
		var e, g = a.split("."),
			h = g.length;
		if (b.unwrapPromises || 1 !== h)
			if (b.unwrapPromises || 2 !== h)
				if (b.csp) e = 6 > h ? pc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
					var f, i = 0;
					do f = pc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
					return f
				};
				else {
					var i = "var p;\n";
					f(g, function(a, c) {
						mc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
					}), i += "return s;";
					var j = new Function("s", "k", "pw", i);
					j.toString = q(i), e = b.unwrapPromises ? function(a, b) {
						return j(a, b, Ud)
					} : j
				} else e = rc(g[0], g[1], d);
		else e = qc(g[0], d);
		return "hasOwnProperty" !== a && (_d[a] = e), e
	}

	function tc() {
		var a = {},
			b = {
				csp: !1,
				unwrapPromises: !1,
				logPromiseWarnings: !0
			};
		this.unwrapPromises = function(a) {
			return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
		}, this.logPromiseWarnings = function(a) {
			return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
		}, this.$get = ["$filter", "$sniffer", "$log",
			function(c, d, e) {
				return b.csp = d.csp, Ud = function(a) {
						b.logPromiseWarnings && !Wd.hasOwnProperty(a) && (Wd[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
					},
					function(d) {
						var e;
						switch (typeof d) {
							case "string":
								if (a.hasOwnProperty(d)) return a[d];
								var f = new Zd(b),
									g = new $d(f, c, b);
								return e = g.parse(d, !1), "hasOwnProperty" !== d && (a[d] = e), e;
							case "function":
								return d;
							default:
								return o
						}
					}
			}
		]
	}

	function uc() {
		this.$get = ["$rootScope", "$exceptionHandler",
			function(a, b) {
				return vc(function(b) {
					a.$evalAsync(b)
				}, b)
			}
		]
	}

	function vc(a, b) {
		function d(a) {
			return a
		}

		function e(a) {
			return j(a)
		}

		function g(a) {
			var b = h(),
				c = 0,
				d = x(a) ? [] : {};
			return f(a, function(a, e) {
				c++, i(a).then(function(a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
				}, function(a) {
					d.hasOwnProperty(e) || b.reject(a)
				})
			}), 0 === c && b.resolve(d), b.promise
		}
		var h = function() {
				var f, g, k = [];
				return g = {
					resolve: function(b) {
						if (k) {
							var d = k;
							k = c, f = i(b), d.length && a(function() {
								for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2])
							})
						}
					},
					reject: function(a) {
						g.resolve(j(a))
					},
					notify: function(b) {
						if (k) {
							var c = k;
							k.length && a(function() {
								for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b)
							})
						}
					},
					promise: {
						then: function(a, c, g) {
							var i = h(),
								j = function(c) {
									try {
										i.resolve((y(a) ? a : d)(c))
									} catch (e) {
										i.reject(e), b(e)
									}
								},
								l = function(a) {
									try {
										i.resolve((y(c) ? c : e)(a))
									} catch (d) {
										i.reject(d), b(d)
									}
								},
								m = function(a) {
									try {
										i.notify((y(g) ? g : d)(a))
									} catch (c) {
										b(c)
									}
								};
							return k ? k.push([j, l, m]) : f.then(j, l, m), i.promise
						},
						"catch": function(a) {
							return this.then(null, a)
						},
						"finally": function(a) {
							function b(a, b) {
								var c = h();
								return b ? c.resolve(a) : c.reject(a), c.promise
							}

							function c(c, e) {
								var f = null;
								try {
									f = (a || d)()
								} catch (g) {
									return b(g, !1)
								}
								return f && y(f.then) ? f.then(function() {
									return b(c, e)
								}, function(a) {
									return b(a, !1)
								}) : b(c, e)
							}
							return this.then(function(a) {
								return c(a, !0)
							}, function(a) {
								return c(a, !1)
							})
						}
					}
				}
			},
			i = function(b) {
				return b && y(b.then) ? b : {
					then: function(c) {
						var d = h();
						return a(function() {
							d.resolve(c(b))
						}), d.promise
					}
				}
			},
			j = function(c) {
				return {
					then: function(d, f) {
						var g = h();
						return a(function() {
							try {
								g.resolve((y(f) ? f : e)(c))
							} catch (a) {
								g.reject(a), b(a)
							}
						}), g.promise
					}
				}
			},
			k = function(c, f, g, k) {
				var l, m = h(),
					n = function(a) {
						try {
							return (y(f) ? f : d)(a)
						} catch (c) {
							return b(c), j(c)
						}
					},
					o = function(a) {
						try {
							return (y(g) ? g : e)(a)
						} catch (c) {
							return b(c), j(c)
						}
					},
					p = function(a) {
						try {
							return (y(k) ? k : d)(a)
						} catch (c) {
							b(c)
						}
					};
				return a(function() {
					i(c).then(function(a) {
						l || (l = !0, m.resolve(i(a).then(n, o, p)))
					}, function(a) {
						l || (l = !0, m.resolve(o(a)))
					}, function(a) {
						l || m.notify(p(a))
					})
				}), m.promise
			};
		return {
			defer: h,
			reject: j,
			when: k,
			all: g
		}
	}

	function wc() {
		var a = 10,
			b = d("$rootScope"),
			c = null;
		this.digestTtl = function(b) {
			return arguments.length && (a = b), a
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
			function(d, f, g, h) {
				function i() {
					this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
				}

				function k(a) {
					if (p.$$phase) throw b("inprog", "{0} already in progress", p.$$phase);
					p.$$phase = a
				}

				function l() {
					p.$$phase = null
				}

				function m(a, b) {
					var c = g(a);
					return cb(c, b), c
				}

				function n() {}
				i.prototype = {
					constructor: i,
					$new: function(a) {
						var b, c;
						return a ? (c = new i, c.$root = this.$root, c.$$asyncQueue = this.$$asyncQueue, c.$$postDigestQueue = this.$$postDigestQueue) : (b = function() {}, b.prototype = this, c = new b, c.$id = j()), c["this"] = c, c.$$listeners = {}, c.$parent = this, c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
					},
					$watch: function(a, b, d) {
						var e = this,
							f = m(a, "watch"),
							g = e.$$watchers,
							h = {
								fn: b,
								last: n,
								get: f,
								exp: a,
								eq: !!d
							};
						if (c = null, !y(b)) {
							var i = m(b || o, "listener");
							h.fn = function(a, b, c) {
								i(c)
							}
						}
						if ("string" == typeof a && f.constant) {
							var j = h.fn;
							h.fn = function(a, b, c) {
								j.call(this, a, b, c), H(g, h)
							}
						}
						return g || (g = e.$$watchers = []), g.unshift(h),
							function() {
								H(g, h)
							}
					},
					$watchCollection: function(a, b) {
						function c() {
							h = k(i);
							var a, b;
							if (t(h))
								if (e(h)) {
									f !== l && (f = l, n = f.length = 0, j++), a = h.length, n !== a && (j++, f.length = n = a);
									for (var c = 0; a > c; c++) f[c] !== h[c] && (j++, f[c] = h[c])
								} else {
									f !== m && (f = m = {}, n = 0, j++), a = 0;
									for (b in h) h.hasOwnProperty(b) && (a++, f.hasOwnProperty(b) ? f[b] !== h[b] && (j++, f[b] = h[b]) : (n++, f[b] = h[b], j++));
									if (n > a) {
										j++;
										for (b in f) f.hasOwnProperty(b) && !h.hasOwnProperty(b) && (n--, delete f[b])
									}
								} else f !== h && (f = h, j++);
							return j
						}

						function d() {
							b(h, f, i)
						}
						var f, h, i = this,
							j = 0,
							k = g(a),
							l = [],
							m = {},
							n = 0;
						return this.$watch(c, d)
					},
					$digest: function() {
						var d, e, g, h, i, j, m, o, p, q, r, s = this.$$asyncQueue,
							t = this.$$postDigestQueue,
							u = a,
							v = this,
							w = [];
						k("$digest"), c = null;
						do {
							for (j = !1, o = v; s.length;) {
								try {
									r = s.shift(), r.scope.$eval(r.expression)
								} catch (x) {
									l(), f(x)
								}
								c = null
							}
							a: do {
								if (h = o.$$watchers)
									for (i = h.length; i--;) try {
										if (d = h[i])
											if ((e = d.get(o)) === (g = d.last) || (d.eq ? K(e, g) : "number" == typeof e && "number" == typeof g && isNaN(e) && isNaN(g))) {
												if (d === c) {
													j = !1;
													break a
												}
											} else j = !0, c = d, d.last = d.eq ? I(e) : e, d.fn(e, g === n ? e : g, o), 5 > u && (p = 4 - u, w[p] || (w[p] = []), q = y(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, q += "; newVal: " + Q(e) + "; oldVal: " + Q(g), w[p].push(q))
									} catch (x) {
										l(), f(x)
									}
								if (!(m = o.$$childHead || o !== v && o.$$nextSibling))
									for (; o !== v && !(m = o.$$nextSibling);) o = o.$parent
							} while (o = m);
							if (j && !u--) throw l(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(w))
						} while (j || s.length);
						for (l(); t.length;) try {
							t.shift()()
						} catch (x) {
							f(x)
						}
					},
					$destroy: function() {
						if (!this.$$destroyed) {
							var a = this.$parent;
							this.$broadcast("$destroy"), this.$$destroyed = !0, this !== p && (a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
						}
					},
					$eval: function(a, b) {
						return g(a)(this, b)
					},
					$evalAsync: function(a) {
						p.$$phase || p.$$asyncQueue.length || h.defer(function() {
							p.$$asyncQueue.length && p.$digest()
						}), this.$$asyncQueue.push({
							scope: this,
							expression: a
						})
					},
					$$postDigest: function(a) {
						this.$$postDigestQueue.push(a)
					},
					$apply: function(a) {
						try {
							return k("$apply"), this.$eval(a)
						} catch (b) {
							f(b)
						} finally {
							l();
							try {
								p.$digest()
							} catch (b) {
								throw f(b), b
							}
						}
					},
					$on: function(a, b) {
						var c = this.$$listeners[a];
						return c || (this.$$listeners[a] = c = []), c.push(b),
							function() {
								c[G(c, b)] = null
							}
					},
					$emit: function(a) {
						var b, c, d, e = [],
							g = this,
							h = !1,
							i = {
								name: a,
								targetScope: g,
								stopPropagation: function() {
									h = !0
								},
								preventDefault: function() {
									i.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							j = M([i], arguments, 1);
						do {
							for (b = g.$$listeners[a] || e, i.currentScope = g, c = 0, d = b.length; d > c; c++)
								if (b[c]) try {
									b[c].apply(null, j)
								} catch (k) {
									f(k)
								} else b.splice(c, 1), c--, d--;
							if (h) return i;
							g = g.$parent
						} while (g);
						return i
					},
					$broadcast: function(a) {
						var b, c, d, e = this,
							g = e,
							h = e,
							i = {
								name: a,
								targetScope: e,
								preventDefault: function() {
									i.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							j = M([i], arguments, 1);
						do {
							for (g = h, i.currentScope = g, b = g.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
								if (b[c]) try {
									b[c].apply(null, j)
								} catch (k) {
									f(k)
								} else b.splice(c, 1), c--, d--;
							if (!(h = g.$$childHead || g !== e && g.$$nextSibling))
								for (; g !== e && !(h = g.$$nextSibling);) g = g.$parent
						} while (g = h);
						return i
					}
				};
				var p = new i;
				return p
			}
		]
	}

	function xc() {
		var a = /^\s*(https?|ftp|mailto|tel|file):/,
			b = /^\s*(https?|ftp|file):|data:image\//;
		this.aHrefSanitizationWhitelist = function(b) {
			return s(b) ? (a = b, this) : a
		}, this.imgSrcSanitizationWhitelist = function(a) {
			return s(a) ? (b = a, this) : b
		}, this.$get = function() {
			return function(c, d) {
				var e, f = d ? b : a;
				return hd && !(hd >= 8) || (e = Fc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
			}
		}
	}

	function yc(a) {
		return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	}

	function zc(a) {
		if ("self" === a) return a;
		if (u(a)) {
			if (a.indexOf("***") > -1) throw ae("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
			return a = yc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
		}
		if (z(a)) return new RegExp("^" + a.source + "$");
		throw ae("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}

	function Ac(a) {
		var b = [];
		return s(a) && f(a, function(a) {
			b.push(zc(a))
		}), b
	}

	function Bc() {
		this.SCE_CONTEXTS = be;
		var a = ["self"],
			b = [];
		this.resourceUrlWhitelist = function(b) {
			return arguments.length && (a = Ac(b)), a
		}, this.resourceUrlBlacklist = function(a) {
			return arguments.length && (b = Ac(a)), b
		}, this.$get = ["$injector",
			function(d) {
				function e(a, b) {
					return "self" === a ? Gc(b) : !!a.exec(b.href)
				}

				function f(c) {
					var d, f, g = Fc(c.toString()),
						h = !1;
					for (d = 0, f = a.length; f > d; d++)
						if (e(a[d], g)) {
							h = !0;
							break
						}
					if (h)
						for (d = 0, f = b.length; f > d; d++)
							if (e(b[d], g)) {
								h = !1;
								break
							}
					return h
				}

				function g(a) {
					var b = function(a) {
						this.$$unwrapTrustedValue = function() {
							return a
						}
					};
					return a && (b.prototype = new a), b.prototype.valueOf = function() {
						return this.$$unwrapTrustedValue()
					}, b.prototype.toString = function() {
						return this.$$unwrapTrustedValue().toString()
					}, b
				}

				function h(a, b) {
					var d = m.hasOwnProperty(a) ? m[a] : null;
					if (!d) throw ae("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
					if (null === b || b === c || "" === b) return b;
					if ("string" != typeof b) throw ae("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
					return new d(b)
				}

				function i(a) {
					return a instanceof l ? a.$$unwrapTrustedValue() : a
				}

				function j(a, b) {
					if (null === b || b === c || "" === b) return b;
					var d = m.hasOwnProperty(a) ? m[a] : null;
					if (d && b instanceof d) return b.$$unwrapTrustedValue();
					if (a === be.RESOURCE_URL) {
						if (f(b)) return b;
						throw ae("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
					}
					if (a === be.HTML) return k(b);
					throw ae("unsafe", "Attempting to use an unsafe value in a safe context.")
				}
				var k = function() {
					throw ae("unsafe", "Attempting to use an unsafe value in a safe context.")
				};
				d.has("$sanitize") && (k = d.get("$sanitize"));
				var l = g(),
					m = {};
				return m[be.HTML] = g(l), m[be.CSS] = g(l), m[be.URL] = g(l), m[be.JS] = g(l), m[be.RESOURCE_URL] = g(m[be.URL]), {
					trustAs: h,
					getTrusted: j,
					valueOf: i
				}
			}
		]
	}

	function Cc() {
		var a = !0;
		this.enabled = function(b) {
			return arguments.length && (a = !!b), a
		}, this.$get = ["$parse", "$sniffer", "$sceDelegate",
			function(b, c, d) {
				if (a && c.msie && c.msieDocumentMode < 8) throw ae("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var e = I(be);
				e.isEnabled = function() {
					return a
				}, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
					return b
				}, e.valueOf = p), e.parseAs = function(a, c) {
					var d = b(c);
					return d.literal && d.constant ? d : function(b, c) {
						return e.getTrusted(a, d(b, c))
					}
				};
				var g = e.parseAs,
					h = e.getTrusted,
					i = e.trustAs;
				return f(be, function(a, b) {
					var c = dd(b);
					e[jb("parse_as_" + c)] = function(b) {
						return g(a, b)
					}, e[jb("get_trusted_" + c)] = function(b) {
						return h(a, b)
					}, e[jb("trust_as_" + c)] = function(b) {
						return i(a, b)
					}
				}), e
			}
		]
	}

	function Dc() {
		this.$get = ["$window", "$document",
			function(a, b) {
				var c, d, e = {},
					f = m((/android (\d+)/.exec(dd((a.navigator || {}).userAgent)) || [])[1]),
					g = /Boxee/i.test((a.navigator || {}).userAgent),
					h = b[0] || {},
					i = h.documentMode,
					j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
					k = h.body && h.body.style,
					l = !1,
					n = !1;
				if (k) {
					for (var o in k)
						if (d = j.exec(o)) {
							c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
							break
						}
					c || (c = "WebkitOpacity" in k && "webkit"), l = !!("transition" in k || c + "Transition" in k), n = !!("animation" in k || c + "Animation" in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
				}
				return {
					history: !(!a.history || !a.history.pushState || 4 > f || g),
					hashchange: "onhashchange" in a && (!i || i > 7),
					hasEvent: function(a) {
						if ("input" == a && 9 == hd) return !1;
						if (r(e[a])) {
							var b = h.createElement("div");
							e[a] = "on" + a in b
						}
						return e[a]
					},
					csp: L(),
					vendorPrefix: c,
					transitions: l,
					animations: n,
					android: f,
					msie: hd,
					msieDocumentMode: i
				}
			}
		]
	}

	function Ec() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
			function(a, b, c, d) {
				function e(e, g, h) {
					var i, j = c.defer(),
						k = j.promise,
						l = s(h) && !h;
					return i = b.defer(function() {
						try {
							j.resolve(e())
						} catch (b) {
							j.reject(b), d(b)
						} finally {
							delete f[k.$$timeoutId]
						}
						l || a.$apply()
					}, g), k.$$timeoutId = i, f[i] = j, k
				}
				var f = {};
				return e.cancel = function(a) {
					return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
				}, e
			}
		]
	}

	function Fc(a) {
		var b = a;
		return hd && (ce.setAttribute("href", b), b = ce.href), ce.setAttribute("href", b), {
			href: ce.href,
			protocol: ce.protocol ? ce.protocol.replace(/:$/, "") : "",
			host: ce.host,
			search: ce.search ? ce.search.replace(/^\?/, "") : "",
			hash: ce.hash ? ce.hash.replace(/^#/, "") : "",
			hostname: ce.hostname,
			port: ce.port,
			pathname: "/" === ce.pathname.charAt(0) ? ce.pathname : "/" + ce.pathname
		}
	}

	function Gc(a) {
		var b = u(a) ? Fc(a) : a;
		return b.protocol === de.protocol && b.host === de.host
	}

	function Hc() {
		this.$get = q(a)
	}

	function Ic(a) {
		function b(d, e) {
			if (t(d)) {
				var g = {};
				return f(d, function(a, c) {
					g[c] = b(c, a)
				}), g
			}
			return a.factory(d + c, e)
		}
		var c = "Filter";
		this.register = b, this.$get = ["$injector",
			function(a) {
				return function(b) {
					return a.get(b + c)
				}
			}
		], b("currency", Kc), b("date", Sc), b("filter", Jc), b("json", Tc), b("limitTo", Uc), b("lowercase", ie), b("number", Lc), b("orderBy", Vc), b("uppercase", je)
	}

	function Jc() {
		return function(a, b, c) {
			if (!x(a)) return a;
			var d = typeof c,
				e = [];
			e.check = function(a) {
				for (var b = 0; b < e.length; b++)
					if (!e[b](a)) return !1;
				return !0
			}, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
				return qd.equals(a, b)
			} : function(a, b) {
				return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
			});
			var f = function(a, b) {
				if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
				switch (typeof a) {
					case "boolean":
					case "number":
					case "string":
						return c(a, b);
					case "object":
						switch (typeof b) {
							case "object":
								return c(a, b);
							default:
								for (var d in a)
									if ("$" !== d.charAt(0) && f(a[d], b)) return !0
						}
						return !1;
					case "array":
						for (var e = 0; e < a.length; e++)
							if (f(a[e], b)) return !0;
						return !1;
					default:
						return !1
				}
			};
			switch (typeof b) {
				case "boolean":
				case "number":
				case "string":
					b = {
						$: b
					};
				case "object":
					for (var g in b) "$" == g ? ! function() {
						if (b[g]) {
							var a = g;
							e.push(function(c) {
								return f(c, b[a])
							})
						}
					}() : ! function() {
						if ("undefined" != typeof b[g]) {
							var a = g;
							e.push(function(c) {
								return f(eb(c, a), b[a])
							})
						}
					}();
					break;
				case "function":
					e.push(b);
					break;
				default:
					return a
			}
			for (var h = [], i = 0; i < a.length; i++) {
				var j = a[i];
				e.check(j) && h.push(j)
			}
			return h
		}
	}

	function Kc(a) {
		var b = a.NUMBER_FORMATS;
		return function(a, c) {
			return r(c) && (c = b.CURRENCY_SYM), Mc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
		}
	}

	function Lc(a) {
		var b = a.NUMBER_FORMATS;
		return function(a, c) {
			return Mc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
		}
	}

	function Mc(a, b, c, d, e) {
		if (isNaN(a) || !isFinite(a)) return "";
		var f = 0 > a;
		a = Math.abs(a);
		var g = a + "",
			h = "",
			i = [],
			j = !1;
		if (-1 !== g.indexOf("e")) {
			var k = g.match(/([\d\.]+)e(-?)(\d+)/);
			k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
		}
		if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
		else {
			var l = (g.split(ee)[1] || "").length;
			r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
			var m = Math.pow(10, e);
			a = Math.round(a * m) / m;
			var n = ("" + a).split(ee),
				o = n[0];
			n = n[1] || "";
			var p, q = 0,
				s = b.lgSize,
				t = b.gSize;
			if (o.length >= s + t)
				for (q = o.length - s, p = 0; q > p; p++)(q - p) % t === 0 && 0 !== p && (h += c), h += o.charAt(p);
			for (p = q; p < o.length; p++)(o.length - p) % s === 0 && 0 !== p && (h += c), h += o.charAt(p);
			for (; n.length < e;) n += "0";
			e && "0" !== e && (h += d + n.substr(0, e))
		}
		return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
	}

	function Nc(a, b, c) {
		var d = "";
		for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
		return c && (a = a.substr(a.length - b)), d + a
	}

	function Oc(a, b, c, d) {
		return c = c || 0,
			function(e) {
				var f = e["get" + a]();
				return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Nc(f, b, d)
			}
	}

	function Pc(a, b) {
		return function(c, d) {
			var e = c["get" + a](),
				f = ed(b ? "SHORT" + a : a);
			return d[f][e]
		}
	}

	function Qc(a) {
		var b = -1 * a.getTimezoneOffset(),
			c = b >= 0 ? "+" : "";
		return c += Nc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Nc(Math.abs(b % 60), 2)
	}

	function Rc(a, b) {
		return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
	}

	function Sc(a) {
		function b(a) {
			var b;
			if (b = a.match(c)) {
				var d = new Date(0),
					e = 0,
					f = 0,
					g = b[8] ? d.setUTCFullYear : d.setFullYear,
					h = b[8] ? d.setUTCHours : d.setHours;
				b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
				var i = m(b[4] || 0) - e,
					j = m(b[5] || 0) - f,
					k = m(b[6] || 0),
					l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
				return h.call(d, i, j, k, l), d
			}
			return a
		}
		var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(c, d) {
			var e, g, h = "",
				i = [];
			if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = he.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
			for (; d;) g = ge.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
			return f(i, function(b) {
				e = fe[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), h
		}
	}

	function Tc() {
		return function(a) {
			return Q(a, !0)
		}
	}

	function Uc() {
		return function(a, b) {
			if (!x(a) && !u(a)) return a;
			if (b = m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
			var c, d, e = [];
			for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
			return e
		}
	}

	function Vc(a) {
		return function(b, c, d) {
			function e(a, b) {
				for (var d = 0; d < c.length; d++) {
					var e = c[d](a, b);
					if (0 !== e) return e
				}
				return 0
			}

			function f(a, b) {
				return S(b) ? function(b, c) {
					return a(c, b)
				} : a
			}

			function g(a, b) {
				var c = typeof a,
					d = typeof b;
				return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
			}
			if (!x(b)) return b;
			if (!c) return b;
			c = x(c) ? c : [c], c = E(c, function(b) {
				var c = !1,
					d = b || p;
				return u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b)), f(function(a, b) {
					return g(d(a), d(b))
				}, c)
			});
			for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
			return h.sort(f(e, d))
		}
	}

	function Wc(a) {
		return y(a) && (a = {
			link: a
		}), a.restrict = a.restrict || "AC", q(a)
	}

	function Xc(a, b) {
		function c(b, c) {
			c = c ? "-" + _(c, "-") : "", a.removeClass((b ? we : ve) + c).addClass((b ? ve : we) + c)
		}
		var d = this,
			e = a.parent().controller("form") || me,
			g = 0,
			h = d.$error = {},
			i = [];
		d.$name = b.name || b.ngForm, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, e.$addControl(d), a.addClass(xe), c(!0), d.$addControl = function(a) {
			db(a.$name, "input"), i.push(a), a.$name && (d[a.$name] = a)
		}, d.$removeControl = function(a) {
			a.$name && d[a.$name] === a && delete d[a.$name], f(h, function(b, c) {
				d.$setValidity(c, !0, a)
			}), H(i, a)
		}, d.$setValidity = function(a, b, f) {
			var i = h[a];
			if (b) i && (H(i, f), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), e.$setValidity(a, !0, d)));
			else {
				if (g || c(b), i) {
					if (F(i, f)) return
				} else h[a] = i = [], g++, c(!1, a), e.$setValidity(a, !1, d);
				i.push(f), d.$valid = !1, d.$invalid = !0
			}
		}, d.$setDirty = function() {
			a.removeClass(xe).addClass(ye), d.$dirty = !0, d.$pristine = !1, e.$setDirty()
		}, d.$setPristine = function() {
			a.removeClass(ye).addClass(xe), d.$dirty = !1, d.$pristine = !0, f(i, function(a) {
				a.$setPristine()
			})
		}
	}

	function Yc(a, b, e, f, g, h) {
		if (!g.android) {
			var i = !1;
			b.on("compositionstart", function() {
				i = !0
			}), b.on("compositionend", function() {
				i = !1
			})
		}
		var j = function() {
			if (!i) {
				var c = b.val();
				S(e.ngTrim || "T") && (c = sd(c)), f.$viewValue !== c && a.$apply(function() {
					f.$setViewValue(c)
				})
			}
		};
		if (g.hasEvent("input")) b.on("input", j);
		else {
			var k, l = function() {
				k || (k = h.defer(function() {
					j(), k = null
				}))
			};
			b.on("keydown", function(a) {
				var b = a.keyCode;
				91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || l()
			}), g.hasEvent("paste") && b.on("paste cut", l)
		}
		b.on("change", j), f.$render = function() {
			b.val(f.$isEmpty(f.$viewValue) ? "" : f.$viewValue)
		};
		var n, o, p = e.ngPattern,
			q = function(a, b) {
				return f.$isEmpty(b) || a.test(b) ? (f.$setValidity("pattern", !0), b) : (f.$setValidity("pattern", !1), c)
			};
		if (p && (o = p.match(/^\/(.*)\/([gim]*)$/), o ? (p = new RegExp(o[1], o[2]), n = function(a) {
			return q(p, a)
		}) : n = function(c) {
			var e = a.$eval(p);
			if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", p, e, T(b));
			return q(e, c)
		}, f.$formatters.push(n), f.$parsers.push(n)), e.ngMinlength) {
			var r = m(e.ngMinlength),
				s = function(a) {
					return !f.$isEmpty(a) && a.length < r ? (f.$setValidity("minlength", !1), c) : (f.$setValidity("minlength", !0), a)
				};
			f.$parsers.push(s), f.$formatters.push(s)
		}
		if (e.ngMaxlength) {
			var t = m(e.ngMaxlength),
				u = function(a) {
					return !f.$isEmpty(a) && a.length > t ? (f.$setValidity("maxlength", !1), c) : (f.$setValidity("maxlength", !0), a)
				};
			f.$parsers.push(u), f.$formatters.push(u)
		}
	}

	function Zc(a, b, d, e, f, g) {
		if (Yc(a, b, d, e, f, g), e.$parsers.push(function(a) {
			var b = e.$isEmpty(a);
			return b || se.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
		}), e.$formatters.push(function(a) {
			return e.$isEmpty(a) ? "" : "" + a
		}), d.min) {
			var h = function(a) {
				var b = parseFloat(d.min);
				return !e.$isEmpty(a) && b > a ? (e.$setValidity("min", !1), c) : (e.$setValidity("min", !0), a)
			};
			e.$parsers.push(h), e.$formatters.push(h)
		}
		if (d.max) {
			var i = function(a) {
				var b = parseFloat(d.max);
				return !e.$isEmpty(a) && a > b ? (e.$setValidity("max", !1), c) : (e.$setValidity("max", !0), a)
			};
			e.$parsers.push(i), e.$formatters.push(i)
		}
		e.$formatters.push(function(a) {
			return e.$isEmpty(a) || v(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), c)
		})
	}

	function $c(a, b, d, e, f, g) {
		Yc(a, b, d, e, f, g);
		var h = function(a) {
			return e.$isEmpty(a) || qe.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), c)
		};
		e.$formatters.push(h), e.$parsers.push(h)
	}

	function _c(a, b, d, e, f, g) {
		Yc(a, b, d, e, f, g);
		var h = function(a) {
			return e.$isEmpty(a) || re.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), c)
		};
		e.$formatters.push(h), e.$parsers.push(h)
	}

	function ad(a, b, c, d) {
		r(c.name) && b.attr("name", j()), b.on("click", function() {
			b[0].checked && a.$apply(function() {
				d.$setViewValue(c.value)
			})
		}), d.$render = function() {
			var a = c.value;
			b[0].checked = a == d.$viewValue
		}, c.$observe("value", d.$render)
	}

	function bd(a, b, c, d) {
		var e = c.ngTrueValue,
			f = c.ngFalseValue;
		u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() {
			a.$apply(function() {
				d.$setViewValue(b[0].checked)
			})
		}), d.$render = function() {
			b[0].checked = d.$viewValue
		}, d.$isEmpty = function(a) {
			return a !== e
		}, d.$formatters.push(function(a) {
			return a === e
		}), d.$parsers.push(function(a) {
			return a ? e : f
		})
	}

	function cd(a, b) {
		return a = "ngClass" + a,
			function() {
				return {
					restrict: "AC",
					link: function(c, d, e) {
						function g(a) {
							if (b === !0 || c.$index % 2 === b) {
								var d = h(a || "");
								i ? K(a, i) || e.$updateClass(d, h(i)) : e.$addClass(d)
							}
							i = I(a)
						}

						function h(a) {
							if (x(a)) return a.join(" ");
							if (t(a)) {
								var b = [];
								return f(a, function(a, c) {
									a && b.push(c)
								}), b.join(" ")
							}
							return a
						}
						var i;
						c.$watch(e[a], g, !0), e.$observe("class", function() {
							g(c.$eval(e[a]))
						}), "ngClass" !== a && c.$watch("$index", function(d, f) {
							var g = 1 & d;
							if (g !== f & 1) {
								var i = h(c.$eval(e[a]));
								g === b ? e.$addClass(i) : e.$removeClass(i)
							}
						})
					}
				}
			}
	}
	var dd = function(a) {
			return u(a) ? a.toLowerCase() : a
		},
		ed = function(a) {
			return u(a) ? a.toUpperCase() : a
		},
		fd = function(a) {
			return u(a) ? a.replace(/[A-Z]/g, function(a) {
				return String.fromCharCode(32 | a.charCodeAt(0))
			}) : a
		},
		gd = function(a) {
			return u(a) ? a.replace(/[a-z]/g, function(a) {
				return String.fromCharCode(-33 & a.charCodeAt(0))
			}) : a
		};
	"i" !== "I".toLowerCase() && (dd = fd, ed = gd);
	var hd, id, jd, kd, ld, md = [].slice,
		nd = [].push,
		od = Object.prototype.toString,
		pd = d("ng"),
		qd = (a.angular, a.angular || (a.angular = {})),
		rd = ["0", "0", "0"];
	hd = m((/msie (\d+)/.exec(dd(navigator.userAgent)) || [])[1]), isNaN(hd) && (hd = m((/trident\/.*; rv:(\d+)/.exec(dd(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
	var sd = function() {
		return String.prototype.trim ? function(a) {
			return u(a) ? a.trim() : a
		} : function(a) {
			return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
		}
	}();
	ld = 9 > hd ? function(a) {
		return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? ed(a.scopeName + ":" + a.nodeName) : a.nodeName
	} : function(a) {
		return a.nodeName ? a.nodeName : a[0].nodeName
	};
	var td = /[A-Z]/g,
		ud = {
			full: "1.2.6",
			major: 1,
			minor: 2,
			dot: 6,
			codeName: "taco-salsafication"
		},
		vd = lb.cache = {},
		wd = lb.expando = "ng-" + (new Date).getTime(),
		xd = 1,
		yd = a.document.addEventListener ? function(a, b, c) {
			a.addEventListener(b, c, !1)
		} : function(a, b, c) {
			a.attachEvent("on" + b, c)
		},
		zd = a.document.removeEventListener ? function(a, b, c) {
			a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			a.detachEvent("on" + b, c)
		},
		Ad = /([\:\-\_]+(.))/g,
		Bd = /^moz([A-Z])/,
		Cd = d("jqLite"),
		Dd = lb.prototype = {
			ready: function(c) {
				function d() {
					e || (e = !0, c())
				}
				var e = !1;
				"complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), lb(a).on("load", d))
			},
			toString: function() {
				var a = [];
				return f(this, function(b) {
					a.push("" + b)
				}), "[" + a.join(", ") + "]"
			},
			eq: function(a) {
				return a >= 0 ? id(this[a]) : id(this[this.length + a])
			},
			length: 0,
			push: nd,
			sort: [].sort,
			splice: [].splice
		},
		Ed = {};
	f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
		Ed[dd(a)] = a
	});
	var Fd = {};
	f("input,select,option,textarea,button,form,details".split(","), function(a) {
		Fd[ed(a)] = !0
	}), f({
		data: rb,
		inheritedData: xb,
		scope: function(a) {
			return id(a).data("$scope") || xb(a.parentNode || a, ["$isolateScope", "$scope"])
		},
		isolateScope: function(a) {
			return id(a).data("$isolateScope") || id(a).data("$isolateScopeNoTemplate")
		},
		controller: wb,
		injector: function(a) {
			return xb(a, "$injector")
		},
		removeAttr: function(a, b) {
			a.removeAttribute(b)
		},
		hasClass: sb,
		css: function(a, b, d) {
			if (b = jb(b), !s(d)) {
				var e;
				return 8 >= hd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= hd && (e = "" === e ? c : e), e
			}
			a.style[b] = d
		},
		attr: function(a, b, d) {
			var e = dd(b);
			if (Ed[e]) {
				if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
				d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
			} else if (s(d)) a.setAttribute(b, d);
			else if (a.getAttribute) {
				var f = a.getAttribute(b, 2);
				return null === f ? c : f
			}
		},
		prop: function(a, b, c) {
			return s(c) ? (a[b] = c, void 0) : a[b]
		},
		text: function() {
			function a(a, c) {
				var d = b[a.nodeType];
				return r(c) ? d ? a[d] : "" : (a[d] = c, void 0)
			}
			var b = [];
			return 9 > hd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
		}(),
		val: function(a, b) {
			if (r(b)) {
				if ("SELECT" === ld(a) && a.multiple) {
					var c = [];
					return f(a.options, function(a) {
						a.selected && c.push(a.value || a.text)
					}), 0 === c.length ? null : c
				}
				return a.value
			}
			a.value = b
		},
		html: function(a, b) {
			if (r(b)) return a.innerHTML;
			for (var c = 0, d = a.childNodes; c < d.length; c++) nb(d[c]);
			a.innerHTML = b
		},
		empty: yb
	}, function(a, b) {
		lb.prototype[b] = function(b, d) {
			var e, f;
			if (a !== yb && (2 == a.length && a !== sb && a !== wb ? b : d) === c) {
				if (t(b)) {
					for (e = 0; e < this.length; e++)
						if (a === rb) a(this[e], b);
						else
							for (f in b) a(this[e], f, b[f]);
					return this
				}
				for (var g = a.$dv, h = g === c ? Math.min(this.length, 1) : this.length, i = 0; h > i; i++) {
					var j = a(this[i], b, d);
					g = g ? g + j : j
				}
				return g
			}
			for (e = 0; e < this.length; e++) a(this[e], b, d);
			return this
		}
	}), f({
		removeData: pb,
		dealoc: nb,
		on: function hf(a, c, d, e) {
			if (s(e)) throw Cd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
			var g = qb(a, "events"),
				h = qb(a, "handle");
			g || qb(a, "events", g = {}), h || qb(a, "handle", h = Ab(a, g)), f(c.split(" "), function(c) {
				var e = g[c];
				if (!e) {
					if ("mouseenter" == c || "mouseleave" == c) {
						var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
							var c = 9 === a.nodeType ? a.documentElement : a,
								d = b && b.parentNode;
							return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
						} : function(a, b) {
							if (b)
								for (; b = b.parentNode;)
									if (b === a) return !0;
							return !1
						};
						g[c] = [];
						var i = {
							mouseleave: "mouseout",
							mouseenter: "mouseover"
						};
						hf(a, i[c], function(a) {
							var b = this,
								d = a.relatedTarget;
							(!d || d !== b && !f(b, d)) && h(a, c)
						})
					} else yd(a, c, h), g[c] = [];
					e = g[c]
				}
				e.push(d)
			})
		},
		off: ob,
		one: function(a, b, c) {
			a = id(a), a.on(b, function d() {
				a.off(b, c), a.off(b, d)
			}), a.on(b, c)
		},
		replaceWith: function(a, b) {
			var c, d = a.parentNode;
			nb(a), f(new lb(b), function(b) {
				c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
			})
		},
		children: function(a) {
			var b = [];
			return f(a.childNodes, function(a) {
				1 === a.nodeType && b.push(a)
			}), b
		},
		contents: function(a) {
			return a.childNodes || []
		},
		append: function(a, b) {
			f(new lb(b), function(b) {
				(1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
			})
		},
		prepend: function(a, b) {
			if (1 === a.nodeType) {
				var c = a.firstChild;
				f(new lb(b), function(b) {
					a.insertBefore(b, c)
				})
			}
		},
		wrap: function(a, b) {
			b = id(b)[0];
			var c = a.parentNode;
			c && c.replaceChild(b, a), b.appendChild(a)
		},
		remove: function(a) {
			nb(a);
			var b = a.parentNode;
			b && b.removeChild(a)
		},
		after: function(a, b) {
			var c = a,
				d = a.parentNode;
			f(new lb(b), function(a) {
				d.insertBefore(a, c.nextSibling), c = a
			})
		},
		addClass: ub,
		removeClass: tb,
		toggleClass: function(a, b, c) {
			r(c) && (c = !sb(a, b)), (c ? ub : tb)(a, b)
		},
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		next: function(a) {
			if (a.nextElementSibling) return a.nextElementSibling;
			for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
			return b
		},
		find: function(a, b) {
			return a.getElementsByTagName ? a.getElementsByTagName(b) : []
		},
		clone: mb,
		triggerHandler: function(a, b, c) {
			var d = (qb(a, "events") || {})[b];
			c = c || [];
			var e = [{
				preventDefault: o,
				stopPropagation: o
			}];
			f(d, function(b) {
				b.apply(a, e.concat(c))
			})
		}
	}, function(a, b) {
		lb.prototype[b] = function(b, c, d) {
			for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = id(e))) : vb(e, a(this[f], b, c, d));
			return s(e) ? e : this
		}, lb.prototype.bind = lb.prototype.on, lb.prototype.unbind = lb.prototype.off
	}), Cb.prototype = {
		put: function(a, b) {
			this[Bb(a)] = b
		},
		get: function(a) {
			return this[Bb(a)]
		},
		remove: function(a) {
			var b = this[a = Bb(a)];
			return delete this[a], b
		}
	};
	var Gd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		Hd = /,/,
		Id = /^\s*(_?)(\S+?)\1\s*$/,
		Jd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
		Kd = d("$injector"),
		Ld = d("$animate"),
		Md = ["$provide",
			function(a) {
				this.$$selectors = {}, this.register = function(b, c) {
					var d = b + "-animation";
					if (b && "." != b.charAt(0)) throw Ld("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
					this.$$selectors[b.substr(1)] = d, a.factory(d, c)
				}, this.classNameFilter = function(a) {
					return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
				}, this.$get = ["$timeout",
					function(a) {
						return {
							enter: function(b, c, d, e) {
								d ? d.after(b) : (c && c[0] || (c = d.parent()), c.append(b)), e && a(e, 0, !1)
							},
							leave: function(b, c) {
								b.remove(), c && a(c, 0, !1)
							},
							move: function(a, b, c, d) {
								this.enter(a, b, c, d)
							},
							addClass: function(b, c, d) {
								c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function(a) {
									ub(a, c)
								}), d && a(d, 0, !1)
							},
							removeClass: function(b, c, d) {
								c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function(a) {
									tb(a, c)
								}), d && a(d, 0, !1)
							},
							enabled: o
						}
					}
				]
			}
		],
		Nd = d("$compile");
	Kb.$inject = ["$provide", "$$sanitizeUriProvider"];
	var Od = /^(x[\:\-_]|data[\:\-_])/i,
		Pd = a.XMLHttpRequest || function() {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch (a) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch (b) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP")
			} catch (c) {}
			throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
		},
		Qd = d("$interpolate"),
		Rd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		Sd = {
			http: 80,
			https: 443,
			ftp: 21
		},
		Td = d("$location");
	hc.prototype = gc.prototype = fc.prototype = {
		$$html5: !1,
		$$replace: !1,
		absUrl: ic("$$absUrl"),
		url: function(a, b) {
			if (r(a)) return this.$$url;
			var c = Rd.exec(a);
			return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
		},
		protocol: ic("$$protocol"),
		host: ic("$$host"),
		port: ic("$$port"),
		path: jc("$$path", function(a) {
			return "/" == a.charAt(0) ? a : "/" + a
		}),
		search: function(a, b) {
			switch (arguments.length) {
				case 0:
					return this.$$search;
				case 1:
					if (u(a)) this.$$search = V(a);
					else {
						if (!t(a)) throw Td("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
						this.$$search = a
					}
					break;
				default:
					r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
			}
			return this.$$compose(), this
		},
		hash: jc("$$hash", p),
		replace: function() {
			return this.$$replace = !0, this
		}
	};
	var Ud, Vd = d("$parse"),
		Wd = {},
		Xd = {
			"null": function() {
				return null
			},
			"true": function() {
				return !0
			},
			"false": function() {
				return !1
			},
			undefined: o,
			"+": function(a, b, d, e) {
				return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
			},
			"-": function(a, b, c, d) {
				return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
			},
			"*": function(a, b, c, d) {
				return c(a, b) * d(a, b)
			},
			"/": function(a, b, c, d) {
				return c(a, b) / d(a, b)
			},
			"%": function(a, b, c, d) {
				return c(a, b) % d(a, b)
			},
			"^": function(a, b, c, d) {
				return c(a, b) ^ d(a, b)
			},
			"=": o,
			"===": function(a, b, c, d) {
				return c(a, b) === d(a, b)
			},
			"!==": function(a, b, c, d) {
				return c(a, b) !== d(a, b)
			},
			"==": function(a, b, c, d) {
				return c(a, b) == d(a, b)
			},
			"!=": function(a, b, c, d) {
				return c(a, b) != d(a, b)
			},
			"<": function(a, b, c, d) {
				return c(a, b) < d(a, b)
			},
			">": function(a, b, c, d) {
				return c(a, b) > d(a, b)
			},
			"<=": function(a, b, c, d) {
				return c(a, b) <= d(a, b)
			},
			">=": function(a, b, c, d) {
				return c(a, b) >= d(a, b)
			},
			"&&": function(a, b, c, d) {
				return c(a, b) && d(a, b)
			},
			"||": function(a, b, c, d) {
				return c(a, b) || d(a, b)
			},
			"&": function(a, b, c, d) {
				return c(a, b) & d(a, b)
			},
			"|": function(a, b, c, d) {
				return d(a, b)(a, b, c(a, b))
			},
			"!": function(a, b, c) {
				return !c(a, b)
			}
		},
		Yd = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: " ",
			v: " ",
			"'": "'",
			'"': '"'
		},
		Zd = function(a) {
			this.options = a
		};
	Zd.prototype = {
		constructor: Zd,
		lex: function(a) {
			this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = [];
			for (var b, d = []; this.index < this.text.length;) {
				if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
				else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
				else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === d[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf("."));
				else if (this.is("(){}[].,;:?")) this.tokens.push({
					index: this.index,
					text: this.ch,
					json: this.was(":[,") && this.is("{[") || this.is("}]:,")
				}), this.is("{[") && d.unshift(this.ch), this.is("}]") && d.shift(), this.index++;
				else {
					if (this.isWhitespace(this.ch)) {
						this.index++;
						continue
					}
					var e = this.ch + this.peek(),
						f = e + this.peek(2),
						g = Xd[this.ch],
						h = Xd[e],
						i = Xd[f];
					i ? (this.tokens.push({
						index: this.index,
						text: f,
						fn: i
					}), this.index += 3) : h ? (this.tokens.push({
						index: this.index,
						text: e,
						fn: h
					}), this.index += 2) : g ? (this.tokens.push({
						index: this.index,
						text: this.ch,
						fn: g,
						json: this.was("[,:") && this.is("+-")
					}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
				this.lastCh = this.ch
			}
			return this.tokens
		},
		is: function(a) {
			return -1 !== a.indexOf(this.ch)
		},
		was: function(a) {
			return -1 !== a.indexOf(this.lastCh)
		},
		peek: function(a) {
			var b = a || 1;
			return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
		},
		isNumber: function(a) {
			return a >= "0" && "9" >= a
		},
		isWhitespace: function(a) {
			return " " === a || "\r" === a || " " === a || "\n" === a || " " === a || " " === a
		},
		isIdent: function(a) {
			return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
		},
		isExpOperator: function(a) {
			return "-" === a || "+" === a || this.isNumber(a)
		},
		throwError: function(a, b, c) {
			c = c || this.index;
			var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
			throw Vd("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
		},
		readNumber: function() {
			for (var a = "", b = this.index; this.index < this.text.length;) {
				var c = dd(this.text.charAt(this.index));
				if ("." == c || this.isNumber(c)) a += c;
				else {
					var d = this.peek();
					if ("e" == c && this.isExpOperator(d)) a += c;
					else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
					else {
						if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			a = 1 * a, this.tokens.push({
				index: b,
				text: a,
				json: !0,
				fn: function() {
					return a
				}
			})
		},
		readIdent: function() {
			for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));) "." === d && (a = this.index), f += d, this.index++;
			if (a)
				for (b = this.index; b < this.text.length;) {
					if (d = this.text.charAt(b), "(" === d) {
						c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
						break
					}
					if (!this.isWhitespace(d)) break;
					b++
				}
			var h = {
				index: g,
				text: f
			};
			if (Xd.hasOwnProperty(f)) h.fn = Xd[f], h.json = Xd[f];
			else {
				var i = sc(f, this.options, this.text);
				h.fn = l(function(a, b) {
					return i(a, b)
				}, {
					assign: function(a, b) {
						return oc(a, f, b, e.text, e.options)
					}
				})
			}
			this.tokens.push(h), c && (this.tokens.push({
				index: a,
				text: ".",
				json: !1
			}), this.tokens.push({
				index: a + 1,
				text: c,
				json: !1
			}))
		},
		readString: function(a) {
			var b = this.index;
			this.index++;
			for (var c = "", d = a, e = !1; this.index < this.text.length;) {
				var f = this.text.charAt(this.index);
				if (d += f, e) {
					if ("u" === f) {
						var g = this.text.substring(this.index + 1, this.index + 5);
						g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
					} else {
						var h = Yd[f];
						c += h ? h : f
					}
					e = !1
				} else if ("\\" === f) e = !0;
				else {
					if (f === a) return this.index++, this.tokens.push({
						index: b,
						text: d,
						string: c,
						json: !0,
						fn: function() {
							return c
						}
					}), void 0;
					c += f
				}
				this.index++
			}
			this.throwError("Unterminated quote", b)
		}
	};
	var $d = function(a, b, c) {
		this.lexer = a, this.$filter = b, this.options = c
	};
	$d.ZERO = function() {
		return 0
	}, $d.prototype = {
		constructor: $d,
		parse: function(a, b) {
			this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
				this.throwError("is not valid json", {
					text: a,
					index: 0
				})
			});
			var c = b ? this.primary() : this.statements();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), c.literal = !!c.literal, c.constant = !!c.constant, c
		},
		primary: function() {
			var a;
			if (this.expect("(")) a = this.filterChain(), this.consume(")");
			else if (this.expect("[")) a = this.arrayDeclaration();
			else if (this.expect("{")) a = this.object();
			else {
				var b = this.expect();
				a = b.fn, a || this.throwError("not a primary expression", b), b.json && (a.constant = !0, a.literal = !0)
			}
			for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
			return a
		},
		throwError: function(a, b) {
			throw Vd("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw Vd("ueoe", "Unexpected end of expression: {0}", this.text);
			return this.tokens[0]
		},
		peek: function(a, b, c, d) {
			if (this.tokens.length > 0) {
				var e = this.tokens[0],
					f = e.text;
				if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e
			}
			return !1
		},
		expect: function(a, b, c, d) {
			var e = this.peek(a, b, c, d);
			return e ? (this.json && !e.json && this.throwError("is not valid json", e), this.tokens.shift(), e) : !1
		},
		consume: function(a) {
			this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
		},
		unaryFn: function(a, b) {
			return l(function(c, d) {
				return a(c, d, b)
			}, {
				constant: b.constant
			})
		},
		ternaryFn: function(a, b, c) {
			return l(function(d, e) {
				return a(d, e) ? b(d, e) : c(d, e)
			}, {
				constant: a.constant && b.constant && c.constant
			})
		},
		binaryFn: function(a, b, c) {
			return l(function(d, e) {
				return b(d, e, a, c)
			}, {
				constant: a.constant && c.constant
			})
		},
		statements: function() {
			for (var a = [];;)
				if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
					for (var d, e = 0; e < a.length; e++) {
						var f = a[e];
						f && (d = f(b, c))
					}
					return d
				}
		},
		filterChain: function() {
			for (var a, b = this.expression();;) {
				if (!(a = this.expect("|"))) return b;
				b = this.binaryFn(b, a.fn, this.filter())
			}
		},
		filter: function() {
			for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
				if (!(a = this.expect(":"))) {
					var d = function(a, d, e) {
						for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
						return b.apply(a, f)
					};
					return function() {
						return d
					}
				}
				c.push(this.expression())
			}
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var a, b, c = this.ternary();
			return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function(b, d) {
				return c.assign(b, a(b, d), d)
			}) : c
		},
		ternary: function() {
			var a, b, c = this.logicalOR();
			return (b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : (this.throwError("expected :", b), void 0)) : c
		},
		logicalOR: function() {
			for (var a, b = this.logicalAND();;) {
				if (!(a = this.expect("||"))) return b;
				b = this.binaryFn(b, a.fn, this.logicalAND())
			}
		},
		logicalAND: function() {
			var a, b = this.equality();
			return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
		},
		equality: function() {
			var a, b = this.relational();
			return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
		},
		relational: function() {
			var a, b = this.additive();
			return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
		},
		additive: function() {
			for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative());
			return b
		},
		multiplicative: function() {
			for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary());
			return b
		},
		unary: function() {
			var a;
			return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn($d.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
		},
		fieldAccess: function(a) {
			var b = this,
				c = this.expect().text,
				d = sc(c, this.options, this.text);
			return l(function(b, c, e) {
				return d(e || a(b, c), c)
			}, {
				assign: function(d, e, f) {
					return oc(a(d, f), c, e, b.text, b.options)
				}
			})
		},
		objectIndex: function(a) {
			var b = this,
				d = this.expression();
			return this.consume("]"), l(function(e, f) {
				var g, h, i = a(e, f),
					j = d(e, f);
				return i ? (g = nc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function(a) {
					h.$$v = a
				})), g = g.$$v), g) : c
			}, {
				assign: function(c, e, f) {
					var g = d(c, f),
						h = nc(a(c, f), b.text);
					return h[g] = e
				}
			})
		},
		functionCall: function(a, b) {
			var c = [];
			if (")" !== this.peekToken().text)
				do c.push(this.expression()); while (this.expect(","));
			this.consume(")");
			var d = this;
			return function(e, f) {
				for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
				var j = a(e, f, h) || o;
				nc(h, d.text), nc(j, d.text);
				var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
				return nc(k, d.text)
			}
		},
		arrayDeclaration: function() {
			var a = [],
				b = !0;
			if ("]" !== this.peekToken().text)
				do {
					var c = this.expression();
					a.push(c), c.constant || (b = !1)
				} while (this.expect(","));
			return this.consume("]"), l(function(b, c) {
				for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
				return d
			}, {
				literal: !0,
				constant: b
			})
		},
		object: function() {
			var a = [],
				b = !0;
			if ("}" !== this.peekToken().text)
				do {
					var c = this.expect(),
						d = c.string || c.text;
					this.consume(":");
					var e = this.expression();
					a.push({
						key: d,
						value: e
					}), e.constant || (b = !1)
				} while (this.expect(","));
			return this.consume("}"), l(function(b, c) {
				for (var d = {}, e = 0; e < a.length; e++) {
					var f = a[e];
					d[f.key] = f.value(b, c)
				}
				return d
			}, {
				literal: !0,
				constant: b
			})
		}
	};
	var _d = {},
		ae = d("$sce"),
		be = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		},
		ce = b.createElement("a"),
		de = Fc(a.location.href, !0);
	Ic.$inject = ["$provide"], Kc.$inject = ["$locale"], Lc.$inject = ["$locale"];
	var ee = ".",
		fe = {
			yyyy: Oc("FullYear", 4),
			yy: Oc("FullYear", 2, 0, !0),
			y: Oc("FullYear", 1),
			MMMM: Pc("Month"),
			MMM: Pc("Month", !0),
			MM: Oc("Month", 2, 1),
			M: Oc("Month", 1, 1),
			dd: Oc("Date", 2),
			d: Oc("Date", 1),
			HH: Oc("Hours", 2),
			H: Oc("Hours", 1),
			hh: Oc("Hours", 2, -12),
			h: Oc("Hours", 1, -12),
			mm: Oc("Minutes", 2),
			m: Oc("Minutes", 1),
			ss: Oc("Seconds", 2),
			s: Oc("Seconds", 1),
			sss: Oc("Milliseconds", 3),
			EEEE: Pc("Day"),
			EEE: Pc("Day", !0),
			a: Rc,
			Z: Qc
		},
		ge = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
		he = /^\-?\d+$/;
	Sc.$inject = ["$locale"];
	var ie = q(dd),
		je = q(ed);
	Vc.$inject = ["$parse"];
	var ke = q({
			restrict: "E",
			compile: function(a, c) {
				return 8 >= hd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.name ? void 0 : function(a, b) {
					b.on("click", function(a) {
						b.attr("href") || a.preventDefault()
                        //$(".header_right").hide();
                        //var insertText = "<div>12345678</div>";
                        // document.getElementById("insert").innerHTML(insertText);
					})
				}
			}
		}),
		le = {};
	f(Ed, function(a, b) {
		if ("multiple" != a) {
			var c = Lb("ng-" + b);
			le[c] = function() {
				return {
					priority: 100,
					compile: function() {
						return function(a, d, e) {
							a.$watch(e[c], function(a) {
								e.$set(b, !!a)
							})
						}
					}
				}
			}
		}
	}), f(["src", "srcset", "href"], function(a) {
		var b = Lb("ng-" + a);
		le[b] = function() {
			return {
				priority: 99,
				link: function(c, d, e) {
					e.$observe(b, function(b) {
						b && (e.$set(a, b), hd && d.prop(a, e[a]))
					})
				}
			}
		}
	});
	var me = {
		$addControl: o,
		$removeControl: o,
		$setValidity: o,
		$setDirty: o,
		$setPristine: o
	};
	Xc.$inject = ["$element", "$attrs", "$scope"];
	var ne = function(a) {
			return ["$timeout",
				function(b) {
					var d = {
						name: "form",
						restrict: a ? "EAC" : "E",
						controller: Xc,
						compile: function() {
							return {
								pre: function(a, d, e, f) {
									if (!e.action) {
										var g = function(a) {
											a.preventDefault ? a.preventDefault() : a.returnValue = !1
										};
										yd(d[0], "submit", g), d.on("$destroy", function() {
											b(function() {
												zd(d[0], "submit", g)
											}, 0, !1)
										})
									}
									var h = d.parent().controller("form"),
										i = e.name || e.ngForm;
									i && oc(a, i, f, i), h && d.on("$destroy", function() {
										h.$removeControl(f), i && oc(a, i, c, i), l(f, me)
									})
								}
							}
						}
					};
					return d
				}
			]
		},
		oe = ne(),
		pe = ne(!0),
		qe = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
		se = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		te = {
			text: Yc,
			number: Zc,
			url: $c,
			email: _c,
			radio: ad,
			checkbox: bd,
			hidden: o,
			button: o,
			submit: o,
			reset: o
		},
		ue = ["$browser", "$sniffer",
			function(a, b) {
				return {
					restrict: "E",
					require: "?ngModel",
					link: function(c, d, e, f) {
						f && (te[dd(e.type)] || te.text)(c, d, e, f, b, a)
					}
				}
			}
		],
		ve = "ng-valid",
		we = "ng-invalid",
		xe = "ng-pristine",
		ye = "ng-dirty",
		ze = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
			function(a, b, c, e, g) {
				function h(a, b) {
					b = b ? "-" + _(b, "-") : "", e.removeClass((a ? we : ve) + b).addClass((a ? ve : we) + b)
				}
				this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
				var i = g(c.ngModel),
					j = i.assign;
				if (!j) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
				this.$render = o, this.$isEmpty = function(a) {
					return r(a) || "" === a || null === a || a !== a
				};
				var k = e.inheritedData("$formController") || me,
					l = 0,
					m = this.$error = {};
				e.addClass(xe), h(!0), this.$setValidity = function(a, b) {
					m[a] !== !b && (b ? (m[a] && l--, l || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, l++), m[a] = !b, h(b, a), k.$setValidity(a, b, this))
				}, this.$setPristine = function() {
					this.$dirty = !1, this.$pristine = !0, e.removeClass(ye).addClass(xe)
				}, this.$setViewValue = function(c) {
					this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(xe).addClass(ye), k.$setDirty()), f(this.$parsers, function(a) {
						c = a(c)
					}), this.$modelValue !== c && (this.$modelValue = c, j(a, c), f(this.$viewChangeListeners, function(a) {
						try {
							a()
						} catch (c) {
							b(c)
						}
					}))
				};
				var n = this;
				a.$watch(function() {
					var b = i(a);
					if (n.$modelValue !== b) {
						var c = n.$formatters,
							d = c.length;
						for (n.$modelValue = b; d--;) b = c[d](b);
						n.$viewValue !== b && (n.$viewValue = b, n.$render())
					}
					return b
				})
			}
		],
		Ae = function() {
			return {
				require: ["ngModel", "^?form"],
				controller: ze,
				link: function(a, b, c, d) {
					var e = d[0],
						f = d[1] || me;
					f.$addControl(e), a.$on("$destroy", function() {
						f.$removeControl(e)
					})
				}
			}
		},
		Be = q({
			require: "ngModel",
			link: function(a, b, c, d) {
				d.$viewChangeListeners.push(function() {
					a.$eval(c.ngChange)
				})
			}
		}),
		Ce = function() {
			return {
				require: "?ngModel",
				link: function(a, b, c, d) {
					if (d) {
						c.required = !0;
						var e = function(a) {
							return c.required && d.$isEmpty(a) ? (d.$setValidity("required", !1), void 0) : (d.$setValidity("required", !0), a)
						};
						d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
							e(d.$viewValue)
						})
					}
				}
			}
		},
		De = function() {
			return {
				require: "ngModel",
				link: function(a, b, d, e) {
					var g = /\/(.*)\//.exec(d.ngList),
						h = g && new RegExp(g[1]) || d.ngList || ",",
						i = function(a) {
							if (!r(a)) {
								var b = [];
								return a && f(a.split(h), function(a) {
									a && b.push(sd(a))
								}), b
							}
						};
					e.$parsers.push(i), e.$formatters.push(function(a) {
						return x(a) ? a.join(", ") : c
					}), e.$isEmpty = function(a) {
						return !a || !a.length
					}
				}
			}
		},
		Ee = /^(true|false|\d+)$/,
		Fe = function() {
			return {
				priority: 100,
				compile: function(a, b) {
					return Ee.test(b.ngValue) ? function(a, b, c) {
						c.$set("value", a.$eval(c.ngValue))
					} : function(a, b, c) {
						a.$watch(c.ngValue, function(a) {
							c.$set("value", a)
						})
					}
				}
			}
		},
		Ge = Wc(function(a, b, d) {
			b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
				b.text(a == c ? "" : a)
			})
		}),
		He = ["$interpolate",
			function(a) {
				return function(b, c, d) {
					var e = a(c.attr(d.$attr.ngBindTemplate));
					c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function(a) {
						c.text(a)
					})
				}
			}
		],
		Ie = ["$sce", "$parse",
			function(a, b) {
				return function(c, d, e) {
					function f() {
						return (g(c) || "").toString()
					}
					d.addClass("ng-binding").data("$binding", e.ngBindHtml);
					var g = b(e.ngBindHtml);
					c.$watch(f, function() {
						d.html(a.getTrustedHtml(g(c)) || "")
					})
				}
			}
		],
		Je = cd("", !0),
		Ke = cd("Odd", 0),
		Le = cd("Even", 1),
		Me = Wc({
			compile: function(a, b) {
				b.$set("ngCloak", c), a.removeClass("ng-cloak")
			}
		}),
		Ne = [
			function() {
				return {
					scope: !0,
					controller: "@",
					priority: 500
				}
			}
		],
		Oe = {};
	f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
		var b = Lb("ng-" + a);
		Oe[b] = ["$parse",
			function(c) {
				return {
					compile: function(d, e) {
						var f = c(e[b]);
						return function(b, c) {
							c.on(dd(a), function(a) {
								b.$apply(function() {
									f(b, {
										$event: a
									})
								})
							})
						}
					}
				}
			}
		]
	});
	var Pe = ["$animate",
			function(a) {
				return {
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function(c, d, e, f, g) {
						var h, i;
						c.$watch(e.ngIf, function(f) {
							S(f) ? i || (i = c.$new(), g(i, function(c) {
								c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
									clone: c
								}, a.enter(c, d.parent(), d)
							})) : (i && (i.$destroy(), i = null), h && (a.leave(fb(h.clone)), h = null))
						})
					}
				}
			}
		],
		Qe = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
			function(a, b, c, d, e) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: qd.noop,
					compile: function(f, g) {
						var h = g.ngInclude || g.src,
							i = g.onload || "",
							j = g.autoscroll;
						return function(f, g, k, l, m) {
							var n, o, p = 0,
								q = function() {
									n && (n.$destroy(), n = null), o && (d.leave(o), o = null)
								};
							f.$watch(e.parseAsResourceUrl(h), function(e) {
								var h = function() {
										!s(j) || j && !f.$eval(j) || c()
									},
									k = ++p;
								e ? (a.get(e, {
									cache: b
								}).success(function(a) {
									if (k === p) {
										var b = f.$new();
										l.template = a;
										var c = m(b, function(a) {
											q(), d.enter(a, null, g, h)
										});
										n = b, o = c, n.$emit("$includeContentLoaded"), f.$eval(i)
									}
								}).error(function() {
									k === p && q()
								}), f.$emit("$includeContentRequested")) : (q(), l.template = null)
							})
						}
					}
				}
			}
		],
		Re = ["$compile",
			function(a) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function(b, c, d, e) {
						c.html(e.template), a(c.contents())(b)
					}
				}
			}
		],
		Se = Wc({
			priority: 450,
			compile: function() {
				return {
					pre: function(a, b, c) {
						a.$eval(c.ngInit)
					}
				}
			}
		}),
		Te = Wc({
			terminal: !0,
			priority: 1e3
		}),
		Ue = ["$locale", "$interpolate",
			function(a, b) {
				var c = /{}/g;
				return {
					restrict: "EA",
					link: function(d, e, g) {
						var h = g.count,
							i = g.$attr.when && e.attr(g.$attr.when),
							j = g.offset || 0,
							k = d.$eval(i) || {},
							l = {},
							m = b.startSymbol(),
							n = b.endSymbol(),
							o = /^when(Minus)?(.+)$/;
						f(g, function(a, b) {
							o.test(b) && (k[dd(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
						}), f(k, function(a, d) {
							l[d] = b(a.replace(c, m + h + "-" + j + n))
						}), d.$watch(function() {
							var b = parseFloat(d.$eval(h));
							return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
						}, function(a) {
							e.text(a)
						})
					}
				}
			}
		],
		Ve = ["$parse", "$animate",
			function(a, c) {
				function g(a) {
					return a.clone[0]
				}

				function h(a) {
					return a.clone[a.clone.length - 1]
				}
				var i = "$$NG_REMOVED",
					j = d("ngRepeat");
				return {
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					$$tlb: !0,
					link: function(d, k, l, m, n) {
						var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
							y = x.match(/^\s*(.+)\s+in\s+([\r\n\s\S]*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
							z = {
								$id: Bb
							};
						if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
						if (t = y[1], u = y[2], o = y[4], o ? (p = a(o), q = function(a, b, c) {
							return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z)
						}) : (r = function(a, b) {
							return Bb(b)
						}, s = function(a) {
							return a
						}), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
						v = y[3] || y[1], w = y[2];
						var A = {};
						d.$watchCollection(u, function(a) {
							var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
								G = {},
								H = [];
							if (e(a)) C = a, B = q || r;
							else {
								B = q || s, C = [];
								for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
								C.sort()
							}
							for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
								if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), db(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z], delete A[z], G[z] = D, H[l] = D;
								else {
									if (G.hasOwnProperty(z)) throw f(H, function(a) {
										a && a.scope && (A[a.id] = a)
									}), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", x, z);
									H[l] = {
										id: z
									}, G[z] = !1
								}
							for (u in A) A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E, function(a) {
								a[i] = !0
							}), D.scope.$destroy());
							for (l = 0, m = C.length; m > l; l++) {
								if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
									t = D.scope, o = F;
									do o = o.nextSibling; while (o && o[i]);
									g(D) != o && c.move(fb(D.clone), null, id(F)), F = h(D)
								} else t = d.$new();
								t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function(a) {
									a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, id(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D
								})
							}
							A = G
						})
					}
				}
			}
		],
		We = ["$animate",
			function(a) {
				return function(b, c, d) {
					b.$watch(d.ngShow, function(b) {
						a[S(b) ? "removeClass" : "addClass"](c, "ng-hide")
					})
				}
			}
		],
		Xe = ["$animate",
			function(a) {
				return function(b, c, d) {
					b.$watch(d.ngHide, function(b) {
						a[S(b) ? "addClass" : "removeClass"](c, "ng-hide")
					})
				}
			}
		],
		Ye = Wc(function(a, b, c) {
			a.$watch(c.ngStyle, function(a, c) {
				c && a !== c && f(c, function(a, c) {
					b.css(c, "")
				}), a && b.css(a)
			}, !0)
		}),
		Ze = ["$animate",
			function(a) {
				return {
					restrict: "EA",
					require: "ngSwitch",
					controller: ["$scope",
						function() {
							this.cases = {}
						}
					],
					link: function(b, c, d, e) {
						var g, h, i = d.ngSwitch || d.on,
							j = [];
						b.$watch(i, function(c) {
							for (var i = 0, k = j.length; k > i; i++) j[i].$destroy(), a.leave(h[i]);
							h = [], j = [], (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(g, function(c) {
								var d = b.$new();
								j.push(d), c.transclude(d, function(b) {
									var d = c.element;
									h.push(b), a.enter(b, d.parent(), d)
								})
							}))
						})
					}
				}
			}
		],
		$e = Wc({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			compile: function(a, b) {
				return function(a, c, d, e, f) {
					e.cases["!" + b.ngSwitchWhen] = e.cases["!" + b.ngSwitchWhen] || [], e.cases["!" + b.ngSwitchWhen].push({
						transclude: f,
						element: c
					})
				}
			}
		}),
		_e = Wc({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function(a, b, c, d, e) {
				d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
					transclude: e,
					element: b
				})
			}
		}),
		af = Wc({
			controller: ["$element", "$transclude",
				function(a, b) {
					if (!b) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(a));
					this.$transclude = b
				}
			],
			link: function(a, b, c, d) {
				d.$transclude(function(a) {
					b.empty(), b.append(a)
				})
			}
		}),
		bf = ["$templateCache",
			function(a) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function(b, c) {
						if ("text/ng-template" == c.type) {
							var d = c.id,
								e = b[0].text;
							a.put(d, e)
						}
					}
				}
			}
		],
		cf = d("ngOptions"),
		df = q({
			terminal: !0
		}),
		ef = ["$compile", "$parse",
			function(a, d) {
				var e = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
					h = {
						$setViewValue: o
					};
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: ["$element", "$scope", "$attrs",
						function(a, b, c) {
							var d, e, f = this,
								g = {},
								i = h;
							f.databound = c.ngModel, f.init = function(a, b, c) {
								i = a, d = b, e = c
							}, f.addOption = function(b) {
								db(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
							}, f.removeOption = function(a) {
								this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
							}, f.renderUnknownOption = function(b) {
								var c = "? " + Bb(b) + " ?";
								e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
							}, f.hasOption = function(a) {
								return g.hasOwnProperty(a)
							}, b.$on("$destroy", function() {
								f.renderUnknownOption = o
							})
						}
					],
					link: function(h, i, j, k) {
						function l(a, b, c, d) {
							c.$render = function() {
								var a = c.$viewValue;
								d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
							}, b.on("change", function() {
								a.$apply(function() {
									z.parent() && z.remove(), c.$setViewValue(b.val())
								})
							})
						}

						function m(a, b, c) {
							var d;
							c.$render = function() {
								var a = new Cb(c.$viewValue);
								f(b.find("option"), function(b) {
									b.selected = s(a.get(b.value))
								})
							}, a.$watch(function() {
								K(d, c.$viewValue) || (d = I(c.$viewValue), c.$render())
							}), b.on("change", function() {
								a.$apply(function() {
									var a = [];
									f(b.find("option"), function(b) {
										b.selected && a.push(b.value)
									}), c.$setViewValue(a)
								})
							})
						}

						function n(b, f, h) {
							function i() {
								var a, c, d, e, i, j, q, u, A, B, C, D, E, F, G, H = {
										"": []
									},
									I = [""],
									J = h.$modelValue,
									K = p(b) || [],
									L = m ? g(K) : K,
									M = {},
									N = !1;
								if (t)
									if (r && x(J)) {
										N = new Cb([]);
										for (var O = 0; O < J.length; O++) M[l] = J[O], N.put(r(b, M), J[O])
									} else N = new Cb(J);
								for (C = 0; A = L.length, A > C; C++) {
									if (q = C, m) {
										if (q = L[C], "$" === q.charAt(0)) continue;
										M[m] = q
									}
									if (M[l] = K[q], a = n(b, M) || "", (c = H[a]) || (c = H[a] = [], I.push(a)), t) D = s(N.remove(r ? r(b, M) : o(b, M)));
									else {
										if (r) {
											var P = {};
											P[l] = J, D = r(b, P) === r(b, M)
										} else D = J === o(b, M);
										N = N || D
									}
									G = k(b, M), G = s(G) ? G : "", c.push({
										id: r ? r(b, M) : m ? L[C] : C,
										label: G,
										selected: D
									})
								}
								for (t || (v || null === J ? H[""].unshift({
									id: "",
									label: "",
									selected: !N
								}) : N || H[""].unshift({
									id: "?",
									label: "",
									selected: !0
								})), B = 0, u = I.length; u > B; B++) {
									for (a = I[B], c = H[a], z.length <= B ? (e = {
										element: y.clone().attr("label", a),
										label: c.label
									}, i = [e], z.push(i), f.append(e.element)) : (i = z[B], e = i[0], e.label != a && e.element.attr("label", e.label = a)), E = null, C = 0, A = c.length; A > C; C++) d = c[C], (j = i[C + 1]) ? (E = j.element, j.label !== d.label && E.text(j.label = d.label), j.id !== d.id && E.val(j.id = d.id), E[0].selected !== d.selected && E.prop("selected", j.selected = d.selected)) : ("" === d.id && v ? F = v : (F = w.clone()).val(d.id).attr("selected", d.selected).text(d.label), i.push(j = {
										element: F,
										label: d.label,
										id: d.id,
										selected: d.selected
									}), E ? E.after(F) : e.element.append(F), E = F);
									for (C++; i.length > C;) i.pop().element.remove()
								}
								for (; z.length > B;) z.pop()[0].element.remove()
							}
							var j;
							if (!(j = u.match(e))) throw cf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
							var k = d(j[2] || j[1]),
								l = j[4] || j[6],
								m = j[5],
								n = d(j[3] || ""),
								o = d(j[2] ? j[1] : l),
								p = d(j[7]),
								q = j[8],
								r = q ? d(j[8]) : null,
								z = [
									[{
										element: f,
										label: ""
									}]
								];
							v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function() {
								b.$apply(function() {
									var a, d, e, g, i, j, k, n, q, s = p(b) || [],
										u = {};
									if (t) {
										for (e = [], j = 0, n = z.length; n > j; j++)
											for (a = z[j], i = 1, k = a.length; k > i; i++)
												if ((g = a[i].element)[0].selected) {
													if (d = g.val(), m && (u[m] = d), r)
														for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
													else u[l] = s[d];
													e.push(o(b, u))
												}
									} else if (d = f.val(), "?" == d) e = c;
									else if ("" === d) e = null;
									else if (r) {
										for (q = 0; q < s.length; q++)
											if (u[l] = s[q], r(b, u) == d) {
												e = o(b, u);
												break
											}
									} else u[l] = s[d], m && (u[m] = d), e = o(b, u);
									h.$setViewValue(e)
								})
							}), h.$render = i, b.$watch(i)
						}
						if (k[1]) {
							for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = id(b.createElement("option")), y = id(b.createElement("optgroup")), z = w.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
								if ("" === B[A].value) {
									o = v = B.eq(A);
									break
								}
							p.init(q, v, z), t && (q.$isEmpty = function(a) {
								return !a || 0 === a.length
							}), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
						}
					}
				}
			}
		],
		ff = ["$interpolate",
			function(a) {
				var b = {
					addOption: o,
					removeOption: o
				};
				return {
					restrict: "E",
					priority: 100,
					compile: function(c, d) {
						if (r(d.value)) {
							var e = a(c.text(), !0);
							e || d.$set("value", c.text())
						}
						return function(a, c, d) {
							var f = "$selectController",
								g = c.parent(),
								h = g.data(f) || g.parent().data(f);
							h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function(a, b) {
								d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
							}) : h.addOption(d.value), c.on("$destroy", function() {
								h.removeOption(d.value)
							})
						}
					}
				}
			}
		],
		gf = q({
			restrict: "E",
			terminal: !0
		});
	ab(), hb(qd), id(b).ready(function() {
		Z(b, $)
	})
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>'),
	function(a, b, c) {
		"use strict";

		function d(a) {
			return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
		}

		function e(a, b) {
			if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
			for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
				var i = e[f];
				a = null !== a ? a[i] : c
			}
			return a
		}

		function f(a, c) {
			c = c || {}, b.forEach(c, function(a, b) {
				delete c[b]
			});
			for (var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && "$" !== d.charAt(1) && (c[d] = a[d]);
			return c
		}
		var g = b.$$minErr("$resource"),
			h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
		b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q",
			function(a, d) {
				function h(a) {
					return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
				}

				function i(a, b) {
					return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
				}

				function j(a, b) {
					this.template = a, this.defaults = b || {}, this.urlParams = {}
				}

				function k(h, i, r) {
					function s(a, b) {
						var c = {};
						return b = o({}, i, b), n(b, function(b, d) {
							q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
						}), c
					}

					function t(a) {
						return a.resource
					}

					function u(a) {
						f(a || {}, this)
					}
					var v = new j(h);
					return r = o({}, l, r), n(r, function(e, h) {
						var i = /^(POST|PUT|PATCH)$/i.test(e.method);
						u[h] = function(h, j, k, l) {
							var r, w, x, y = {};
							switch (arguments.length) {
								case 4:
									x = l, w = k;
								case 3:
								case 2:
									if (!q(j)) {
										y = h, r = j, w = k;
										break
									}
									if (q(h)) {
										w = h, x = j;
										break
									}
									w = j, x = k;
								case 1:
									q(h) ? w = h : i ? r = h : y = h;
									break;
								case 0:
									break;
								default:
									throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
							}
							var z = this instanceof u,
								A = z ? r : e.isArray ? [] : new u(r),
								B = {},
								C = e.interceptor && e.interceptor.response || t,
								D = e.interceptor && e.interceptor.responseError || c;
							n(e, function(a, b) {
								"params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a))
							}), i && (B.data = r), v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url);
							var E = a(B).then(function(a) {
								var c = a.data,
									d = A.$promise;
								if (c) {
									if (b.isArray(c) !== !!e.isArray) throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
									e.isArray ? (A.length = 0, n(c, function(a) {
										A.push(new u(a))
									})) : (f(c, A), A.$promise = d)
								}
								return A.$resolved = !0, a.resource = A, a
							}, function(a) {
								return A.$resolved = !0, (x || m)(a), d.reject(a)
							});
							return E = E.then(function(a) {
								var b = C(a);
								return (w || m)(b, a.headers), b
							}, D), z ? E : (A.$promise = E, A.$resolved = !1, A)
						}, u.prototype["$" + h] = function(a, b, c) {
							q(a) && (c = b, b = a, a = {});
							var d = u[h].call(this, a, this, b, c);
							return d.$promise || d
						}
					}), u.bind = function(a) {
						return k(h, o({}, i, a), r)
					}, u
				}
				var l = {
						get: {
							method: "GET"
						},
						save: {
							method: "POST"
						},
						query: {
							method: "GET",
							isArray: !0
						},
						remove: {
							method: "DELETE"
						},
						"delete": {
							method: "DELETE"
						}
					},
					m = b.noop,
					n = b.forEach,
					o = b.extend,
					p = b.copy,
					q = b.isFunction;
				return j.prototype = {
					setUrlParams: function(a, c, d) {
						var e, f, i = this,
							j = d || i.template,
							k = i.urlParams = {};
						n(j.split(/\W/), function(a) {
							if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
							!new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
						}), j = j.replace(/\\:/g, ":"), c = c || {}, n(i.urlParams, function(a, d) {
							e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (f = h(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), f + "$1")) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
								return "/" == c.charAt(0) ? c : b + c
							})
						}), j = j.replace(/\/+$/, ""), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
							i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
						})
					}
				}, k
			}
		])
	}(window, window.angular),
	function(a, b, c) {
		"use strict";
		b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser",
			function(a, d) {
				function e() {
					var a, e, f, i;
					for (a in h) k(g[a]) && d.cookies(a, c);
					for (a in g) e = g[a], b.isString(e) ? e !== h[a] && (d.cookies(a, e), i = !0) : b.isDefined(h[a]) ? g[a] = h[a] : delete g[a];
					if (i) {
						i = !1, f = d.cookies();
						for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
					}
				}
				var f, g = {},
					h = {},
					i = !1,
					j = b.copy,
					k = b.isUndefined;
				return d.addPollFn(function() {
					var b = d.cookies();
					f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
				})(), i = !0, a.$watch(e), g
			}
		]).factory("$cookieStore", ["$cookies",
			function(a) {
				return {
					get: function(c) {
						var d = a[c];
						return d ? b.fromJson(d) : d
					},
					put: function(c, d) {
						a[c] = b.toJson(d)
					},
					remove: function(b) {
						delete a[b]
					}
				}
			}
		])
	}(window, window.angular),
	function(a, b) {
		"use strict";

		function c() {
			this.$get = ["$$sanitizeUri",
				function(a) {
					return function(b) {
						var c = [];
						return f(b, i(c, function(b, c) {
							return !/^unsafe/.test(a(b, c))
						})), c.join("")
					}
				}
			]
		}

		function d(a) {
			var c = [],
				d = i(c, b.noop);
			return d.chars(a), c.join("")
		}

		function e(a) {
			var b, c = {},
				d = a.split(",");
			for (b = 0; b < d.length; b++) c[d[b]] = !0;
			return c
		}

		function f(a, c) {
			function d(a, d, f, h) {
				if (d = b.lowercase(d), x[d])
					for (; s.last() && y[s.last()];) e("", s.last());
				w[d] && s.last() == d && e("", d), h = t[d] || !!h, h || s.push(d);
				var i = {};
				f.replace(m, function(a, b, c, d, e) {
					var f = c || d || e || "";
					i[b] = g(f)
				}), c.start && c.start(d, i, h)
			}

			function e(a, d) {
				var e, f = 0;
				if (d = b.lowercase(d))
					for (f = s.length - 1; f >= 0 && s[f] != d; f--);
				if (f >= 0) {
					for (e = s.length - 1; e >= f; e--) c.end && c.end(s[e]);
					s.length = f
				}
			}
			var f, h, i, s = [],
				u = a;
			for (s.last = function() {
				return s[s.length - 1]
			}; a;) {
				if (h = !0, s.last() && z[s.last()]) a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + s.last() + "[^>]*>", "i"), function(a, b) {
					return b = b.replace(p, "$1").replace(r, "$1"), c.chars && c.chars(g(b)), ""
				}), e("", s.last());
				else if (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i && (a = a.substring(i[0].length), i[0].replace(k, d), h = !1)), h) {
					f = a.indexOf("<");
					var v = 0 > f ? a : a.substring(0, f);
					a = 0 > f ? "" : a.substring(f), c.chars && c.chars(g(v))
				}
				if (a == u) throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
				u = a
			}
			e()
		}

		function g(a) {
			if (!a) return "";
			var b = E.exec(a),
				c = b[1],
				d = b[3],
				e = b[2];
			return e && (D.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in D ? D.textContent : D.innerText), c + e + d
		}

		function h(a) {
			return a.replace(/&/g, "&amp;").replace(s, function(a) {
				return "&#" + a.charCodeAt(0) + ";"
			}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
		}

		function i(a, c) {
			var d = !1,
				e = b.bind(a, a.push);
			return {
				start: function(a, f, g) {
					a = b.lowercase(a), !d && z[a] && (d = a), d || A[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
						var g = b.lowercase(f),
							i = "img" === a && "src" === g || "background" === g;
						C[g] !== !0 || B[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
					}), e(g ? "/>" : ">"))
				},
				end: function(a) {
					a = b.lowercase(a), d || A[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
				},
				chars: function(a) {
					d || e(h(a))
				}
			}
		}
		var j = b.$$minErr("$sanitize"),
			k = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
			l = /^<\s*\/\s*([\w:-]+)[^>]*>/,
			m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
			n = /^</,
			o = /^<\s*\//,
			p = /<!--(.*?)-->/g,
			q = /<!DOCTYPE([^>]*?)>/i,
			r = /<!\[CDATA\[(.*?)]]>/g,
			s = /([^\#-~| |!])/g,
			t = e("area,br,col,hr,img,wbr"),
			u = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
			v = e("rp,rt"),
			w = b.extend({}, v, u),
			x = b.extend({}, u, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
			y = b.extend({}, v, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
			z = e("script,style"),
			A = b.extend({}, t, x, y, w),
			B = e("background,cite,href,longdesc,src,usemap"),
			C = b.extend({}, B, e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
			D = document.createElement("pre"),
			E = /^(\s*)([\s\S]*?)(\s*)$/;
		b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize",
			function(a) {
				var c = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
					e = /^mailto:/;
				return function(f, g) {
					function h(a) {
						a && n.push(d(a))
					}

					function i(a, c) {
						n.push("<a "), b.isDefined(g) && (n.push('target="'), n.push(g), n.push('" ')), n.push('href="'), n.push(a), n.push('">'), h(c), n.push("</a>")
					}
					if (!f) return f;
					for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] == j[3] && (k = "mailto:" + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(e, "")), m = m.substring(l + j[0].length);
					return h(m), a(n.join(""))
				}
			}
		])
	}(window, window.angular),
	function(a, b) {
		"use strict";

		function c() {
			function a(a, c) {
				return b.extend(new(b.extend(function() {}, {
					prototype: a
				})), c)
			}

			function c(a, b) {
				var c = b.caseInsensitiveMatch,
					d = {
						originalPath: a,
						regexp: a
					},
					e = d.keys = [];
				return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function(a, b, c, d) {
					var f = "?" === d ? d : null,
						g = "*" === d ? d : null;
					return e.push({
						name: c,
						optional: !!f
					}), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
				}).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
			}
			var d = {};
			this.when = function(a, e) {
				if (d[a] = b.extend({
					reloadOnSearch: !0
				}, e, a && c(a, e)), a) {
					var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
					d[f] = b.extend({
						redirectTo: a
					}, c(f, e))
				}
				return this
			}, this.otherwise = function(a) {
				return this.when(null, a), this
			}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce",
				function(c, e, f, g, h, i, j, k) {
					function l(a, b) {
						var c = b.keys,
							d = {};
						if (!b.regexp) return null;
						var e = b.regexp.exec(a);
						if (!e) return null;
						for (var f = 1, g = e.length; g > f; ++f) {
							var h = c[f - 1],
								i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
							h && i && (d[h.name] = i)
						}
						return d
					}

					function m() {
						var a = n(),
							d = q.current;
						a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function() {
							if (a) {
								var c, d, e = b.extend({}, a.resolve);
								return b.forEach(e, function(a, c) {
									e[c] = b.isString(a) ? h.get(a) : h.invoke(a)
								}), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
									cache: j
								}).then(function(a) {
									return a.data
								}))), b.isDefined(c) && (e.$template = c), g.all(e)
							}
						}).then(function(e) {
							a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d))
						}, function(b) {
							a == q.current && c.$broadcast("$routeChangeError", a, d, b)
						}))
					}

					function n() {
						var c, f;
						return b.forEach(d, function(d) {
							!f && (c = l(e.path(), d)) && (f = a(d, {
								params: b.extend({}, e.search(), c),
								pathParams: c
							}), f.$$route = d)
						}), f || d[null] && a(d[null], {
							params: {},
							pathParams: {}
						})
					}

					function o(a, c) {
						var d = [];
						return b.forEach((a || "").split(":"), function(a, b) {
							if (0 === b) d.push(a);
							else {
								var e = a.match(/(\w+)(.*)/),
									f = e[1];
								d.push(c[f]), d.push(e[2] || ""), delete c[f]
							}
						}), d.join("")
					}
					var p = !1,
						q = {
							routes: d,
							reload: function() {
								p = !0, c.$evalAsync(m)
							}
						};
					return c.$on("$locationChangeSuccess", m), q
				}
			]
		}

		function d() {
			this.$get = function() {
				return {}
			}
		}

		function e(a, c, d) {
			return {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				link: function(e, f, g, h, i) {
					function j() {
						l && (l.$destroy(), l = null), m && (d.leave(m), m = null)
					}

					function k() {
						var g = a.current && a.current.locals,
							h = g && g.$template;
						if (h) {
							var k = e.$new(),
								p = a.current,
								q = i(k, function(a) {
									d.enter(a, null, m || f, function() {
										!b.isDefined(n) || n && !e.$eval(n) || c()
									}), j()
								});
							m = q, l = p.scope = k, l.$emit("$viewContentLoaded"), l.$eval(o)
						} else j()
					}
					var l, m, n = g.autoscroll,
						o = g.onload || "";
					e.$on("$routeChangeSuccess", k), k()
				}
			}
		}

		function f(a, b, c) {
			return {
				restrict: "ECA",
				priority: -400,
				link: function(d, e) {
					var f = c.current,
						g = f.locals;
					e.html(g.$template);
					var h = a(e.contents());
					if (f.controller) {
						g.$scope = d;
						var i = b(f.controller, g);
						f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
					}
					h(d)
				}
			}
		}
		var g = b.module("ngRoute", ["ng"]).provider("$route", c);
		g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), e.$inject = ["$route", "$anchorScroll", "$animate"], f.$inject = ["$compile", "$controller", "$route"]
	}(window, window.angular),
	function(a, b, c) {
		"use strict";
		b.module("ngAnimate", ["ng"]).factory("$$animateReflow", ["$window", "$timeout",
			function(a, b) {
				var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || function(a) {
						return b(a, 10, !1)
					},
					d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || function(a) {
						return b.cancel(a)
					};
				return function(a) {
					var b = c(a);
					return function() {
						d(b)
					}
				}
			}
		]).config(["$provide", "$animateProvider",
			function(d, e) {
				function f(a) {
					for (var b = 0; b < a.length; b++) {
						var c = a[b];
						if (c.nodeType == k) return c
					}
				}

				function g(a, b) {
					return f(a) == f(b)
				}
				var h = b.noop,
					i = b.forEach,
					j = e.$$selectors,
					k = 1,
					l = "$$ngAnimateState",
					m = "ng-animate",
					n = {
						running: !0
					};
				d.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$timeout", "$rootScope", "$document",
					function(a, c, d, k, o, p) {
						function q(a) {
							return o(a, 0, !1)
						}

						function r(a) {
							if (a) {
								var b = [],
									e = {},
									f = a.substr(1).split(".");
								(d.transitions || d.animations) && f.push("");
								for (var g = 0; g < f.length; g++) {
									var h = f[g],
										i = j[h];
									i && !e[h] && (b.push(c.get(i)), e[h] = !0)
								}
								return b
							}
						}

						function s(a, b, c, d, e, g, j) {
							function k(a) {
								if (z(), a === !0) return A(), void 0;
								var b = c.data(l);
								b && (b.done = A, c.data(l, b)), n(I, "after", A)
							}

							function n(d, e, f) {
								function g(a, b) {
									var c = b + "Complete",
										e = d[a];
									e[c] = !0, (e[j] || h)();
									for (var g = 0; g < d.length; g++)
										if (!d[g][c]) return;
									f()
								}
								"after" == e ? t() : s();
								var j = e + "End";
								i(d, function(d, f) {
									var h = function() {
										g(f, e)
									};
									return "before" != e || "enter" != a && "move" != a ? (d[e] ? d[j] = G ? d[e](c, b, h) : d[e](c, h) : h(), void 0) : (h(), void 0)
								})
							}

							function p(d) {
								c.triggerHandler("$animate:" + d, {
									event: a,
									className: b
								})
							}

							function s() {
								q(function() {
									p("before")
								})
							}

							function t() {
								q(function() {
									p("after")
								})
							}

							function x() {
								j && q(j)
							}

							function z() {
								z.hasBeenRun || (z.hasBeenRun = !0, g())
							}

							function A() {
								if (!A.hasBeenRun) {
									A.hasBeenRun = !0;
									var a = c.data(l);
									a && (G ? v(c) : (a.closeAnimationTimeout = q(function() {
										v(c)
									}), c.data(l, a))), x()
								}
							}
							var B, C, D = f(c);
							if (D && (B = D.className, C = B + " " + b), !D || !y(C)) return z(), s(), t(), A(), void 0;
							var E = (" " + C).replace(/\s+/g, ".");
							d || (d = e ? e.parent() : c.parent());
							var F = r(E),
								G = "addClass" == a || "removeClass" == a,
								H = c.data(l) || {};
							if (w(c, d) || 0 === F.length) return z(), s(), t(), A(), void 0;
							var I = [],
								J = G ? !(H.disabled || H.running && H.structural) : !0;
							if (J && i(F, function(d) {
								if (!d.allowCancel || d.allowCancel(c, a, b)) {
									var e, f = d[a];
									"leave" == a ? (e = f, f = null) : e = d["before" + a.charAt(0).toUpperCase() + a.substr(1)], I.push({
										before: e,
										after: f
									})
								}
							}), 0 === I.length) return z(), s(), t(), x(), void 0;
							var K = " ",
								L = K + B + K;
							if (H.running) {
								o.cancel(H.closeAnimationTimeout), v(c), u(H.animations);
								var M = G && !H.structural,
									N = M && H.className == b && a != H.event;
								H.beforeComplete || N ? (H.done || h)(!0) : M && (L = "removeClass" == H.event ? L.replace(K + H.className + K, K) : L + H.className + K)
							}
							var O = K + b + K;
							return "addClass" == a && L.indexOf(O) >= 0 || "removeClass" == a && -1 == L.indexOf(O) ? (z(), s(), t(), x(), void 0) : (c.addClass(m), c.data(l, {
								running: !0,
								event: a,
								className: b,
								structural: !G,
								animations: I,
								done: k
							}), n(I, "before", k), void 0)
						}

						function t(a) {
							var c = f(a);
							i(c.querySelectorAll("." + m), function(a) {
								a = b.element(a);
								var c = a.data(l);
								c && (u(c.animations), v(a))
							})
						}

						function u(a) {
							var b = !0;
							i(a, function(a) {
								a.beforeComplete || (a.beforeEnd || h)(b), a.afterComplete || (a.afterEnd || h)(b)
							})
						}

						function v(a) {
							g(a, k) ? n.disabled || (n.running = !1, n.structural = !1) : (a.removeClass(m), a.removeData(l))
						}

						function w(a, b) {
							if (n.disabled) return !0;
							if (g(a, k)) return n.disabled || n.running;
							do {
								if (0 === b.length) break;
								var c = g(b, k),
									d = c ? n : b.data(l),
									e = d && (!!d.disabled || !!d.running);
								if (c || e) return e;
								if (c) return !0
							} while (b = b.parent());
							return !0
						}
						k.data(l, n), p.$$postDigest(function() {
							p.$$postDigest(function() {
								n.running = !1
							})
						});
						var x = e.classNameFilter(),
							y = x ? function(a) {
								return x.test(a)
							} : function() {
								return !0
							};
						return {
							enter: function(b, c, d, e) {
								this.enabled(!1, b), a.enter(b, c, d), p.$$postDigest(function() {
									s("enter", "ng-enter", b, c, d, h, e)
								})
							},
							leave: function(b, c) {
								t(b), this.enabled(!1, b), p.$$postDigest(function() {
									s("leave", "ng-leave", b, null, null, function() {
										a.leave(b)
									}, c)
								})
							},
							move: function(b, c, d, e) {
								t(b), this.enabled(!1, b), a.move(b, c, d), p.$$postDigest(function() {
									s("move", "ng-move", b, c, d, h, e)
								})
							},
							addClass: function(b, c, d) {
								s("addClass", c, b, null, null, function() {
									a.addClass(b, c)
								}, d)
							},
							removeClass: function(b, c, d) {
								s("removeClass", c, b, null, null, function() {
									a.removeClass(b, c)
								}, d)
							},
							enabled: function(a, b) {
								switch (arguments.length) {
									case 2:
										if (a) v(b);
										else {
											var c = b.data(l) || {};
											c.disabled = !0, b.data(l, c)
										}
										break;
									case 1:
										n.disabled = !a;
										break;
									default:
										a = !n.disabled
								}
								return !!a
							}
						}
					}
				]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow",
					function(d, e, g, j) {
						function l(a, c) {
							H && H(), U.push(c);
							var d = f(a);
							a = b.element(d), V.push(a);
							var e = a.data(N),
								h = e.stagger,
								k = e.itemIndex * (Math.max(h.animationDelay, h.transitionDelay) || 0),
								l = (e.maxDelay + e.maxDuration) * P;
							W = Math.max(W, (k + l) * Q), e.animationCount = R, H = j(function() {
								i(U, function(a) {
									a()
								});
								var a = [],
									b = R;
								i(V, function(b) {
									a.push(b)
								}), g(function() {
									m(a, b), a = null
								}, W, !1), U = [], V = [], H = null, S = {}, W = 0, R++
							})
						}

						function m(a, b) {
							i(a, function(a) {
								var c = a.data(N);
								c && c.animationCount == b && (c.closeAnimationFn || h)()
							})
						}

						function n(a, b) {
							var c = b ? S[b] : null;
							if (!c) {
								var e, f, g, h, j = 0,
									l = 0,
									m = 0,
									n = 0;
								i(a, function(a) {
									if (a.nodeType == k) {
										var b = d.getComputedStyle(a) || {};
										g = b[C + I], j = Math.max(o(g), j), h = b[C + J], e = b[C + K], l = Math.max(o(e), l), f = b[E + K], n = Math.max(o(f), n);
										var c = o(b[E + I]);
										c > 0 && (c *= parseInt(b[E + L], 10) || 1), m = Math.max(c, m)
									}
								}), c = {
									total: 0,
									transitionPropertyStyle: h,
									transitionDurationStyle: g,
									transitionDelayStyle: e,
									transitionDelay: l,
									transitionDuration: j,
									animationDelayStyle: f,
									animationDelay: n,
									animationDuration: m
								}, b && (S[b] = c)
							}
							return c
						}

						function o(a) {
							var c = 0,
								d = b.isString(a) ? a.split(/\s*,\s*/) : [];
							return i(d, function(a) {
								c = Math.max(parseFloat(a) || 0, c)
							}), c
						}

						function p(a) {
							var b = a.parent(),
								c = b.data(M);
							return c || (b.data(M, ++T), c = T), c + "-" + f(a).className
						}

						function q(a, b, c) {
							var d = p(a),
								e = d + " " + b,
								f = {},
								g = S[e] ? ++S[e].total : 0;
							if (g > 0) {
								var h = b + "-stagger",
									j = d + " " + h,
									k = !S[j];
								k && a.addClass(h), f = n(a, j), k && a.removeClass(h)
							}
							c = c || function(a) {
								return a()
							}, a.addClass(b);
							var l = c(function() {
									return n(a, e)
								}),
								m = Math.max(l.transitionDelay, l.animationDelay),
								o = Math.max(l.transitionDuration, l.animationDuration);
							if (0 === o) return a.removeClass(b), !1;
							var q = "";
							return l.transitionDuration > 0 ? r(a) : s(a), i(b.split(" "), function(a, b) {
								q += (b > 0 ? " " : "") + a + "-active"
							}), a.data(N, {
								className: b,
								activeClassName: q,
								maxDuration: o,
								maxDelay: m,
								classes: b + " " + q,
								timings: l,
								stagger: f,
								itemIndex: g
							}), !0
						}

						function r(a) {
							f(a).style[C + J] = "none"
						}

						function s(a) {
							f(a).style[E] = "none 0s"
						}

						function t(a) {
							var b = C + J,
								c = f(a);
							c.style[b] && c.style[b].length > 0 && (c.style[b] = "")
						}

						function u(a) {
							var b = E,
								c = f(a);
							c.style[b] && c.style[b].length > 0 && (c.style[b] = "")
						}

						function v(a, b, c) {
							function d() {
								a.off(o, e), a.removeClass(l), A(a, b);
								var c = f(a);
								for (var d in r) c.style.removeProperty(r[d])
							}

							function e(a) {
								a.stopPropagation();
								var b = a.originalEvent || a,
									d = b.$manualTimeStamp || b.timeStamp || Date.now(),
									e = parseFloat(b.elapsedTime.toFixed(O));
								Math.max(d - n, 0) >= m && e >= k && c()
							}
							var g = a.data(N),
								h = f(a);
							if (-1 == h.className.indexOf(b) || !g) return c(), void 0;
							var i = g.timings,
								j = g.stagger,
								k = g.maxDuration,
								l = g.activeClassName,
								m = Math.max(i.transitionDelay, i.animationDelay) * Q,
								n = Date.now(),
								o = F + " " + D,
								p = g.itemIndex,
								q = "",
								r = [];
							if (i.transitionDuration > 0) {
								var s = i.transitionPropertyStyle; - 1 == s.indexOf("all") && (q += G + "transition-property: " + s + ";", q += G + "transition-duration: " + i.transitionDurationStyle + ";", r.push(G + "transition-property"), r.push(G + "transition-duration"))
							}
							if (p > 0) {
								if (j.transitionDelay > 0 && 0 === j.transitionDuration) {
									var t = i.transitionDelayStyle;
									q += G + "transition-delay: " + w(t, j.transitionDelay, p) + "; ", r.push(G + "transition-delay")
								}
								j.animationDelay > 0 && 0 === j.animationDuration && (q += G + "animation-delay: " + w(i.animationDelayStyle, j.animationDelay, p) + "; ", r.push(G + "animation-delay"))
							}
							if (r.length > 0) {
								var u = h.getAttribute("style") || "";
								h.setAttribute("style", u + " " + q)
							}
							return a.on(o, e), a.addClass(l), g.closeAnimationFn = function() {
								d(), c()
							}, d
						}

						function w(a, b, c) {
							var d = "";
							return i(a.split(","), function(a, e) {
								d += (e > 0 ? "," : "") + (c * b + parseInt(a, 10)) + "s"
							}), d
						}

						function x(a, b, c) {
							return q(a, b, c) ? function(c) {
								c && A(a, b)
							} : void 0
						}

						function y(a, b, c) {
							return a.data(N) ? v(a, b, c) : (A(a, b), c(), void 0)
						}

						function z(a, b, c) {
							var d = x(a, b);
							if (!d) return c(), void 0;
							var e = d;
							return l(a, function() {
									t(a), u(a), e = y(a, b, c)
								}),
								function(a) {
									(e || h)(a)
								}
						}

						function A(a, b) {
							a.removeClass(b), a.removeData(N)
						}

						function B(a, c) {
							var d = "";
							return a = b.isArray(a) ? a : a.split(/\s+/), i(a, function(a, b) {
								a && a.length > 0 && (d += (b > 0 ? " " : "") + a + c)
							}), d
						}
						var C, D, E, F, G = "";
						a.ontransitionend === c && a.onwebkittransitionend !== c ? (G = "-webkit-", C = "WebkitTransition", D = "webkitTransitionEnd transitionend") : (C = "transition", D = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (G = "-webkit-", E = "WebkitAnimation", F = "webkitAnimationEnd animationend") : (E = "animation", F = "animationend");
						var H, I = "Duration",
							J = "Property",
							K = "Delay",
							L = "IterationCount",
							M = "$$ngAnimateKey",
							N = "$$ngAnimateCSS3Data",
							O = 3,
							P = 1.5,
							Q = 1e3,
							R = 0,
							S = {},
							T = 0,
							U = [],
							V = [],
							W = 0;
						return {
							allowCancel: function(a, c, d) {
								var e = (a.data(N) || {}).classes;
								if (!e || ["enter", "leave", "move"].indexOf(c) >= 0) return !0;
								var g = a.parent(),
									h = b.element(f(a).cloneNode());
								h.attr("style", "position:absolute; top:-9999px; left:-9999px"), h.removeAttr("id"), h.empty(), i(e.split(" "), function(a) {
									h.removeClass(a)
								});
								var j = "addClass" == c ? "-add" : "-remove";
								h.addClass(B(d, j)), g.append(h);
								var k = n(h);
								return h.remove(), Math.max(k.transitionDuration, k.animationDuration) > 0
							},
							enter: function(a, b) {
								return z(a, "ng-enter", b)
							},
							leave: function(a, b) {
								return z(a, "ng-leave", b)
							},
							move: function(a, b) {
								return z(a, "ng-move", b)
							},
							beforeAddClass: function(a, b, c) {
								var d = x(a, B(b, "-add"), function(c) {
									a.addClass(b);
									var d = c();
									return a.removeClass(b), d
								});
								return d ? (l(a, function() {
									t(a), u(a), c()
								}), d) : (c(), void 0)
							},
							addClass: function(a, b, c) {
								return y(a, B(b, "-add"), c)
							},
							beforeRemoveClass: function(a, b, c) {
								var d = x(a, B(b, "-remove"), function(c) {
									var d = a.attr("class");
									a.removeClass(b);
									var e = c();
									return a.attr("class", d), e
								});
								return d ? (l(a, function() {
									t(a), u(a), c()
								}), d) : (c(), void 0)
							},
							removeClass: function(a, b, c) {
								return y(a, B(b, "-remove"), c)
							}
						}
					}
				])
			}
		])
	}(window, window.angular);