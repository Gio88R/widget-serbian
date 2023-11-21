/*! For license information please see playmaker-widget.bundle.js.LICENSE.txt */
(() => {
  var e = {
      9599: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(5697),
          o = n.n(r),
          a = n(9748),
          i = n(4184),
          u = n.n(i),
          l = ["top", "left", "transform", "className", "children", "innerRef"];
        function s() {
          return (
            (s = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            s.apply(this, arguments)
          );
        }
        function c(e) {
          var t = e.top,
            n = void 0 === t ? 0 : t,
            r = e.left,
            o = void 0 === r ? 0 : r,
            i = e.transform,
            c = e.className,
            f = e.children,
            h = e.innerRef,
            d = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, l);
          return a.default.createElement(
            "g",
            s(
              {
                ref: h,
                className: u()("visx-group", c),
                transform: i || "translate(" + o + ", " + n + ")",
              },
              d
            ),
            f
          );
        }
        c.propTypes = {
          top: o().number,
          left: o().number,
          transform: o().string,
          className: o().string,
          children: o().node,
          innerRef: o().oneOfType([o().string, o().func, o().object]),
        };
      },
      8788: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { Group: () => r.Z });
        var r = n(9599);
      },
      5142: (e, t, n) => {
        "use strict";
        (t.__esModule = !0), (t.default = h);
        var r = l(n(5697)),
          o = l(n(3279)),
          a = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = u(t);
            if (n && n.has(e)) return n.get(e);
            var r = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            (r.default = e), n && n.set(e, r);
            return r;
          })(n(9748)),
          i = [
            "className",
            "children",
            "debounceTime",
            "ignoreDimensions",
            "parentSizeStyles",
            "enableDebounceLeadingCall",
            "resizeObserverPolyfill",
          ];
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s() {
          return (
            (s = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            s.apply(this, arguments)
          );
        }
        var c = [],
          f = { width: "100%", height: "100%" };
        function h(e) {
          var t = e.className,
            n = e.children,
            r = e.debounceTime,
            u = void 0 === r ? 300 : r,
            l = e.ignoreDimensions,
            h = void 0 === l ? c : l,
            d = e.parentSizeStyles,
            p = void 0 === d ? f : d,
            v = e.enableDebounceLeadingCall,
            g = void 0 === v || v,
            m = e.resizeObserverPolyfill,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, i),
            _ = (0, a.useRef)(null),
            x = (0, a.useRef)(0),
            b = (0, a.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            w = b[0],
            M = b[1],
            k = (0, a.useMemo)(
              function () {
                var e = Array.isArray(h) ? h : [h];
                return (0, o.default)(
                  function (t) {
                    M(function (n) {
                      return Object.keys(n)
                        .filter(function (e) {
                          return n[e] !== t[e];
                        })
                        .every(function (t) {
                          return e.includes(t);
                        })
                        ? n
                        : t;
                    });
                  },
                  u,
                  { leading: g }
                );
              },
              [u, g, h]
            );
          return (
            (0, a.useEffect)(
              function () {
                var e = new (m || window.ResizeObserver)(function (e) {
                  e.forEach(function (e) {
                    var t,
                      n =
                        null != (t = null == e ? void 0 : e.contentRect)
                          ? t
                          : {},
                      r = n.left,
                      o = n.top,
                      a = n.width,
                      i = n.height;
                    x.current = window.requestAnimationFrame(function () {
                      k({ width: a, height: i, top: o, left: r });
                    });
                  });
                });
                return (
                  _.current && e.observe(_.current),
                  function () {
                    window.cancelAnimationFrame(x.current),
                      e.disconnect(),
                      k.cancel();
                  }
                );
              },
              [k, m]
            ),
            a.default.createElement(
              "div",
              s({ style: p, ref: _, className: t }, y),
              n(s({}, w, { ref: _.current, resize: k }))
            )
          );
        }
        h.propTypes = {
          className: r.default.string,
          debounceTime: r.default.number,
          enableDebounceLeadingCall: r.default.bool,
          ignoreDimensions: r.default.oneOfType([
            r.default.any,
            r.default.arrayOf(r.default.any),
          ]),
          children: r.default.func.isRequired,
        };
      },
      9958: (e, t, n) => {
        "use strict";
        function r(e, t) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(e);
              break;
            default:
              this.range(t).domain(e);
          }
          return this;
        }
        n.r(t),
          n.d(t, {
            coerceNumber: () => ka,
            createScale: () => xa,
            getTicks: () => Oa,
            inferScaleType: () => Ma,
            scaleBand: () => Xt,
            scaleCanBeZeroed: () => Sa,
            scaleLinear: () => Yn,
            scaleLog: () => Vo,
            scaleOrdinal: () => na,
            scalePoint: () => Qt,
            scalePower: () => ea,
            scaleQuantile: () => sa,
            scaleQuantize: () => aa,
            scaleRadial: () => Jn,
            scaleSqrt: () => _a,
            scaleSymlog: () => pa,
            scaleThreshold: () => ma,
            scaleTime: () => Fo,
            scaleUtc: () => Lo,
            toString: () => Na,
            updateScale: () => wa,
          });
        class o extends Map {
          constructor(e, t = s) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: t },
              }),
              null != e)
            )
              for (const [t, n] of e) this.set(t, n);
          }
          get(e) {
            return super.get(i(this, e));
          }
          has(e) {
            return super.has(i(this, e));
          }
          set(e, t) {
            return super.set(u(this, e), t);
          }
          delete(e) {
            return super.delete(l(this, e));
          }
        }
        class a extends Set {
          constructor(e, t = s) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: t },
              }),
              null != e)
            )
              for (const t of e) this.add(t);
          }
          has(e) {
            return super.has(i(this, e));
          }
          add(e) {
            return super.add(u(this, e));
          }
          delete(e) {
            return super.delete(l(this, e));
          }
        }
        function i({ _intern: e, _key: t }, n) {
          const r = t(n);
          return e.has(r) ? e.get(r) : n;
        }
        function u({ _intern: e, _key: t }, n) {
          const r = t(n);
          return e.has(r) ? e.get(r) : (e.set(r, n), n);
        }
        function l({ _intern: e, _key: t }, n) {
          const r = t(n);
          return e.has(r) && ((n = e.get(n)), e.delete(r)), n;
        }
        function s(e) {
          return null !== e && "object" == typeof e ? e.valueOf() : e;
        }
        const c = Symbol("implicit");
        function f() {
          var e = new o(),
            t = [],
            n = [],
            a = c;
          function i(r) {
            let o = e.get(r);
            if (void 0 === o) {
              if (a !== c) return a;
              e.set(r, (o = t.push(r) - 1));
            }
            return n[o % n.length];
          }
          return (
            (i.domain = function (n) {
              if (!arguments.length) return t.slice();
              (t = []), (e = new o());
              for (const r of n) e.has(r) || e.set(r, t.push(r) - 1);
              return i;
            }),
            (i.range = function (e) {
              return arguments.length ? ((n = Array.from(e)), i) : n.slice();
            }),
            (i.unknown = function (e) {
              return arguments.length ? ((a = e), i) : a;
            }),
            (i.copy = function () {
              return f(t, n).unknown(a);
            }),
            r.apply(i, arguments),
            i
          );
        }
        function h() {
          var e,
            t,
            n = f().unknown(void 0),
            o = n.domain,
            a = n.range,
            i = 0,
            u = 1,
            l = !1,
            s = 0,
            c = 0,
            d = 0.5;
          function p() {
            var n = o().length,
              r = u < i,
              f = r ? u : i,
              h = r ? i : u;
            (e = (h - f) / Math.max(1, n - s + 2 * c)),
              l && (e = Math.floor(e)),
              (f += (h - f - e * (n - s)) * d),
              (t = e * (1 - s)),
              l && ((f = Math.round(f)), (t = Math.round(t)));
            var p = (function (e, t, n) {
              (e = +e),
                (t = +t),
                (n =
                  (o = arguments.length) < 2
                    ? ((t = e), (e = 0), 1)
                    : o < 3
                    ? 1
                    : +n);
              for (
                var r = -1,
                  o = 0 | Math.max(0, Math.ceil((t - e) / n)),
                  a = new Array(o);
                ++r < o;

              )
                a[r] = e + r * n;
              return a;
            })(n).map(function (t) {
              return f + e * t;
            });
            return a(r ? p.reverse() : p);
          }
          return (
            delete n.unknown,
            (n.domain = function (e) {
              return arguments.length ? (o(e), p()) : o();
            }),
            (n.range = function (e) {
              return arguments.length
                ? (([i, u] = e), (i = +i), (u = +u), p())
                : [i, u];
            }),
            (n.rangeRound = function (e) {
              return ([i, u] = e), (i = +i), (u = +u), (l = !0), p();
            }),
            (n.bandwidth = function () {
              return t;
            }),
            (n.step = function () {
              return e;
            }),
            (n.round = function (e) {
              return arguments.length ? ((l = !!e), p()) : l;
            }),
            (n.padding = function (e) {
              return arguments.length ? ((s = Math.min(1, (c = +e))), p()) : s;
            }),
            (n.paddingInner = function (e) {
              return arguments.length ? ((s = Math.min(1, e)), p()) : s;
            }),
            (n.paddingOuter = function (e) {
              return arguments.length ? ((c = +e), p()) : c;
            }),
            (n.align = function (e) {
              return arguments.length
                ? ((d = Math.max(0, Math.min(1, e))), p())
                : d;
            }),
            (n.copy = function () {
              return h(o(), [i, u])
                .round(l)
                .paddingInner(s)
                .paddingOuter(c)
                .align(d);
            }),
            r.apply(p(), arguments)
          );
        }
        function d(e) {
          var t = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return d(t());
            }),
            e
          );
        }
        function p() {
          return d(h.apply(null, arguments).paddingInner(1));
        }
        function v(e, t, n) {
          (e.prototype = t.prototype = n), (n.constructor = e);
        }
        function g(e, t) {
          var n = Object.create(e.prototype);
          for (var r in t) n[r] = t[r];
          return n;
        }
        function m() {}
        var y = 0.7,
          _ = 1 / y,
          x = "\\s*([+-]?\\d+)\\s*",
          b = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          w = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          M = /^#([0-9a-f]{3,8})$/,
          k = new RegExp(`^rgb\\(${x},${x},${x}\\)$`),
          O = new RegExp(`^rgb\\(${w},${w},${w}\\)$`),
          N = new RegExp(`^rgba\\(${x},${x},${x},${b}\\)$`),
          T = new RegExp(`^rgba\\(${w},${w},${w},${b}\\)$`),
          S = new RegExp(`^hsl\\(${b},${w},${w}\\)$`),
          E = new RegExp(`^hsla\\(${b},${w},${w},${b}\\)$`),
          A = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function C() {
          return this.rgb().formatHex();
        }
        function j() {
          return this.rgb().formatRgb();
        }
        function R(e) {
          var t, n;
          return (
            (e = (e + "").trim().toLowerCase()),
            (t = M.exec(e))
              ? ((n = t[1].length),
                (t = parseInt(t[1], 16)),
                6 === n
                  ? P(t)
                  : 3 === n
                  ? new D(
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      ((15 & t) << 4) | (15 & t),
                      1
                    )
                  : 8 === n
                  ? F(
                      (t >> 24) & 255,
                      (t >> 16) & 255,
                      (t >> 8) & 255,
                      (255 & t) / 255
                    )
                  : 4 === n
                  ? F(
                      ((t >> 12) & 15) | ((t >> 8) & 240),
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      (((15 & t) << 4) | (15 & t)) / 255
                    )
                  : null)
              : (t = k.exec(e))
              ? new D(t[1], t[2], t[3], 1)
              : (t = O.exec(e))
              ? new D(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  1
                )
              : (t = N.exec(e))
              ? F(t[1], t[2], t[3], t[4])
              : (t = T.exec(e))
              ? F(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  t[4]
                )
              : (t = S.exec(e))
              ? $(t[1], t[2] / 100, t[3] / 100, 1)
              : (t = E.exec(e))
              ? $(t[1], t[2] / 100, t[3] / 100, t[4])
              : A.hasOwnProperty(e)
              ? P(A[e])
              : "transparent" === e
              ? new D(NaN, NaN, NaN, 0)
              : null
          );
        }
        function P(e) {
          return new D((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
        }
        function F(e, t, n, r) {
          return r <= 0 && (e = t = n = NaN), new D(e, t, n, r);
        }
        function I(e) {
          return (
            e instanceof m || (e = R(e)),
            e ? new D((e = e.rgb()).r, e.g, e.b, e.opacity) : new D()
          );
        }
        function L(e, t, n, r) {
          return 1 === arguments.length
            ? I(e)
            : new D(e, t, n, null == r ? 1 : r);
        }
        function D(e, t, n, r) {
          (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
        }
        function U() {
          return `#${G(this.r)}${G(this.g)}${G(this.b)}`;
        }
        function H() {
          const e = z(this.opacity);
          return `${1 === e ? "rgb(" : "rgba("}${W(this.r)}, ${W(this.g)}, ${W(
            this.b
          )}${1 === e ? ")" : `, ${e})`}`;
        }
        function z(e) {
          return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
        }
        function W(e) {
          return Math.max(0, Math.min(255, Math.round(e) || 0));
        }
        function G(e) {
          return ((e = W(e)) < 16 ? "0" : "") + e.toString(16);
        }
        function $(e, t, n, r) {
          return (
            r <= 0
              ? (e = t = n = NaN)
              : n <= 0 || n >= 1
              ? (e = t = NaN)
              : t <= 0 && (e = NaN),
            new V(e, t, n, r)
          );
        }
        function B(e) {
          if (e instanceof V) return new V(e.h, e.s, e.l, e.opacity);
          if ((e instanceof m || (e = R(e)), !e)) return new V();
          if (e instanceof V) return e;
          var t = (e = e.rgb()).r / 255,
            n = e.g / 255,
            r = e.b / 255,
            o = Math.min(t, n, r),
            a = Math.max(t, n, r),
            i = NaN,
            u = a - o,
            l = (a + o) / 2;
          return (
            u
              ? ((i =
                  t === a
                    ? (n - r) / u + 6 * (n < r)
                    : n === a
                    ? (r - t) / u + 2
                    : (t - n) / u + 4),
                (u /= l < 0.5 ? a + o : 2 - a - o),
                (i *= 60))
              : (u = l > 0 && l < 1 ? 0 : i),
            new V(i, u, l, e.opacity)
          );
        }
        function q(e, t, n, r) {
          return 1 === arguments.length
            ? B(e)
            : new V(e, t, n, null == r ? 1 : r);
        }
        function V(e, t, n, r) {
          (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
        }
        function Y(e) {
          return (e = (e || 0) % 360) < 0 ? e + 360 : e;
        }
        function X(e) {
          return Math.max(0, Math.min(1, e || 0));
        }
        function Z(e, t, n) {
          return (
            255 *
            (e < 60
              ? t + ((n - t) * e) / 60
              : e < 180
              ? n
              : e < 240
              ? t + ((n - t) * (240 - e)) / 60
              : t)
          );
        }
        v(m, R, {
          copy(e) {
            return Object.assign(new this.constructor(), this, e);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: C,
          formatHex: C,
          formatHex8: function () {
            return this.rgb().formatHex8();
          },
          formatHsl: function () {
            return B(this).formatHsl();
          },
          formatRgb: j,
          toString: j,
        }),
          v(
            D,
            L,
            g(m, {
              brighter(e) {
                return (
                  (e = null == e ? _ : Math.pow(_, e)),
                  new D(this.r * e, this.g * e, this.b * e, this.opacity)
                );
              },
              darker(e) {
                return (
                  (e = null == e ? y : Math.pow(y, e)),
                  new D(this.r * e, this.g * e, this.b * e, this.opacity)
                );
              },
              rgb() {
                return this;
              },
              clamp() {
                return new D(W(this.r), W(this.g), W(this.b), z(this.opacity));
              },
              displayable() {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: U,
              formatHex: U,
              formatHex8: function () {
                return `#${G(this.r)}${G(this.g)}${G(this.b)}${G(
                  255 * (isNaN(this.opacity) ? 1 : this.opacity)
                )}`;
              },
              formatRgb: H,
              toString: H,
            })
          ),
          v(
            V,
            q,
            g(m, {
              brighter(e) {
                return (
                  (e = null == e ? _ : Math.pow(_, e)),
                  new V(this.h, this.s, this.l * e, this.opacity)
                );
              },
              darker(e) {
                return (
                  (e = null == e ? y : Math.pow(y, e)),
                  new V(this.h, this.s, this.l * e, this.opacity)
                );
              },
              rgb() {
                var e = (this.h % 360) + 360 * (this.h < 0),
                  t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                  n = this.l,
                  r = n + (n < 0.5 ? n : 1 - n) * t,
                  o = 2 * n - r;
                return new D(
                  Z(e >= 240 ? e - 240 : e + 120, o, r),
                  Z(e, o, r),
                  Z(e < 120 ? e + 240 : e - 120, o, r),
                  this.opacity
                );
              },
              clamp() {
                return new V(Y(this.h), X(this.s), X(this.l), z(this.opacity));
              },
              displayable() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl() {
                const e = z(this.opacity);
                return `${1 === e ? "hsl(" : "hsla("}${Y(this.h)}, ${
                  100 * X(this.s)
                }%, ${100 * X(this.l)}%${1 === e ? ")" : `, ${e})`}`;
              },
            })
          );
        const Q = Math.PI / 180,
          J = 180 / Math.PI,
          K = 0.96422,
          ee = 1,
          te = 0.82521,
          ne = 4 / 29,
          re = 6 / 29,
          oe = 3 * re * re,
          ae = re * re * re;
        function ie(e) {
          if (e instanceof le) return new le(e.l, e.a, e.b, e.opacity);
          if (e instanceof ve) return ge(e);
          e instanceof D || (e = I(e));
          var t,
            n,
            r = he(e.r),
            o = he(e.g),
            a = he(e.b),
            i = se((0.2225045 * r + 0.7168786 * o + 0.0606169 * a) / ee);
          return (
            r === o && o === a
              ? (t = n = i)
              : ((t = se((0.4360747 * r + 0.3850649 * o + 0.1430804 * a) / K)),
                (n = se((0.0139322 * r + 0.0971045 * o + 0.7141733 * a) / te))),
            new le(116 * i - 16, 500 * (t - i), 200 * (i - n), e.opacity)
          );
        }
        function ue(e, t, n, r) {
          return 1 === arguments.length
            ? ie(e)
            : new le(e, t, n, null == r ? 1 : r);
        }
        function le(e, t, n, r) {
          (this.l = +e), (this.a = +t), (this.b = +n), (this.opacity = +r);
        }
        function se(e) {
          return e > ae ? Math.pow(e, 1 / 3) : e / oe + ne;
        }
        function ce(e) {
          return e > re ? e * e * e : oe * (e - ne);
        }
        function fe(e) {
          return (
            255 *
            (e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055)
          );
        }
        function he(e) {
          return (e /= 255) <= 0.04045
            ? e / 12.92
            : Math.pow((e + 0.055) / 1.055, 2.4);
        }
        function de(e) {
          if (e instanceof ve) return new ve(e.h, e.c, e.l, e.opacity);
          if ((e instanceof le || (e = ie(e)), 0 === e.a && 0 === e.b))
            return new ve(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
          var t = Math.atan2(e.b, e.a) * J;
          return new ve(
            t < 0 ? t + 360 : t,
            Math.sqrt(e.a * e.a + e.b * e.b),
            e.l,
            e.opacity
          );
        }
        function pe(e, t, n, r) {
          return 1 === arguments.length
            ? de(e)
            : new ve(e, t, n, null == r ? 1 : r);
        }
        function ve(e, t, n, r) {
          (this.h = +e), (this.c = +t), (this.l = +n), (this.opacity = +r);
        }
        function ge(e) {
          if (isNaN(e.h)) return new le(e.l, 0, 0, e.opacity);
          var t = e.h * Q;
          return new le(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
        }
        v(
          le,
          ue,
          g(m, {
            brighter(e) {
              return new le(
                this.l + 18 * (null == e ? 1 : e),
                this.a,
                this.b,
                this.opacity
              );
            },
            darker(e) {
              return new le(
                this.l - 18 * (null == e ? 1 : e),
                this.a,
                this.b,
                this.opacity
              );
            },
            rgb() {
              var e = (this.l + 16) / 116,
                t = isNaN(this.a) ? e : e + this.a / 500,
                n = isNaN(this.b) ? e : e - this.b / 200;
              return new D(
                fe(
                  3.1338561 * (t = K * ce(t)) -
                    1.6168667 * (e = ee * ce(e)) -
                    0.4906146 * (n = te * ce(n))
                ),
                fe(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
                fe(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
                this.opacity
              );
            },
          })
        ),
          v(
            ve,
            pe,
            g(m, {
              brighter(e) {
                return new ve(
                  this.h,
                  this.c,
                  this.l + 18 * (null == e ? 1 : e),
                  this.opacity
                );
              },
              darker(e) {
                return new ve(
                  this.h,
                  this.c,
                  this.l - 18 * (null == e ? 1 : e),
                  this.opacity
                );
              },
              rgb() {
                return ge(this).rgb();
              },
            })
          );
        const me = (e) => () => e;
        function ye(e, t) {
          return function (n) {
            return e + n * t;
          };
        }
        function _e(e, t) {
          var n = t - e;
          return n
            ? ye(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
            : me(isNaN(e) ? t : e);
        }
        function xe(e) {
          return 1 == (e = +e)
            ? be
            : function (t, n) {
                return n - t
                  ? (function (e, t, n) {
                      return (
                        (e = Math.pow(e, n)),
                        (t = Math.pow(t, n) - e),
                        (n = 1 / n),
                        function (r) {
                          return Math.pow(e + r * t, n);
                        }
                      );
                    })(t, n, e)
                  : me(isNaN(t) ? n : t);
              };
        }
        function be(e, t) {
          var n = t - e;
          return n ? ye(e, n) : me(isNaN(e) ? t : e);
        }
        function we(e) {
          return function (t, n) {
            var r = e((t = pe(t)).h, (n = pe(n)).h),
              o = be(t.c, n.c),
              a = be(t.l, n.l),
              i = be(t.opacity, n.opacity);
            return function (e) {
              return (
                (t.h = r(e)),
                (t.c = o(e)),
                (t.l = a(e)),
                (t.opacity = i(e)),
                t + ""
              );
            };
          };
        }
        const Me = we(_e);
        var ke = we(be);
        function Oe(e) {
          return function (t, n) {
            var r = e((t = q(t)).h, (n = q(n)).h),
              o = be(t.s, n.s),
              a = be(t.l, n.l),
              i = be(t.opacity, n.opacity);
            return function (e) {
              return (
                (t.h = r(e)),
                (t.s = o(e)),
                (t.l = a(e)),
                (t.opacity = i(e)),
                t + ""
              );
            };
          };
        }
        const Ne = Oe(_e);
        var Te = Oe(be),
          Se = -0.14861,
          Ee = 1.78277,
          Ae = -0.29227,
          Ce = -0.90649,
          je = 1.97294,
          Re = je * Ce,
          Pe = je * Ee,
          Fe = Ee * Ae - Ce * Se;
        function Ie(e, t, n, r) {
          return 1 === arguments.length
            ? (function (e) {
                if (e instanceof Le) return new Le(e.h, e.s, e.l, e.opacity);
                e instanceof D || (e = I(e));
                var t = e.r / 255,
                  n = e.g / 255,
                  r = e.b / 255,
                  o = (Fe * r + Re * t - Pe * n) / (Fe + Re - Pe),
                  a = r - o,
                  i = (je * (n - o) - Ae * a) / Ce,
                  u = Math.sqrt(i * i + a * a) / (je * o * (1 - o)),
                  l = u ? Math.atan2(i, a) * J - 120 : NaN;
                return new Le(l < 0 ? l + 360 : l, u, o, e.opacity);
              })(e)
            : new Le(e, t, n, null == r ? 1 : r);
        }
        function Le(e, t, n, r) {
          (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
        }
        function De(e) {
          return (function t(n) {
            function r(t, r) {
              var o = e((t = Ie(t)).h, (r = Ie(r)).h),
                a = be(t.s, r.s),
                i = be(t.l, r.l),
                u = be(t.opacity, r.opacity);
              return function (e) {
                return (
                  (t.h = o(e)),
                  (t.s = a(e)),
                  (t.l = i(Math.pow(e, n))),
                  (t.opacity = u(e)),
                  t + ""
                );
              };
            }
            return (n = +n), (r.gamma = t), r;
          })(1);
        }
        v(
          Le,
          Ie,
          g(m, {
            brighter(e) {
              return (
                (e = null == e ? _ : Math.pow(_, e)),
                new Le(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker(e) {
              return (
                (e = null == e ? y : Math.pow(y, e)),
                new Le(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb() {
              var e = isNaN(this.h) ? 0 : (this.h + 120) * Q,
                t = +this.l,
                n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
                r = Math.cos(e),
                o = Math.sin(e);
              return new D(
                255 * (t + n * (Se * r + Ee * o)),
                255 * (t + n * (Ae * r + Ce * o)),
                255 * (t + n * (je * r)),
                this.opacity
              );
            },
          })
        );
        const Ue = De(_e);
        var He = De(be);
        function ze(e, t, n, r, o) {
          var a = e * e,
            i = a * e;
          return (
            ((1 - 3 * e + 3 * a - i) * t +
              (4 - 6 * a + 3 * i) * n +
              (1 + 3 * e + 3 * a - 3 * i) * r +
              i * o) /
            6
          );
        }
        const We = (function e(t) {
          var n = xe(t);
          function r(e, t) {
            var r = n((e = L(e)).r, (t = L(t)).r),
              o = n(e.g, t.g),
              a = n(e.b, t.b),
              i = be(e.opacity, t.opacity);
            return function (t) {
              return (
                (e.r = r(t)),
                (e.g = o(t)),
                (e.b = a(t)),
                (e.opacity = i(t)),
                e + ""
              );
            };
          }
          return (r.gamma = e), r;
        })(1);
        function Ge(e) {
          return function (t) {
            var n,
              r,
              o = t.length,
              a = new Array(o),
              i = new Array(o),
              u = new Array(o);
            for (n = 0; n < o; ++n)
              (r = L(t[n])),
                (a[n] = r.r || 0),
                (i[n] = r.g || 0),
                (u[n] = r.b || 0);
            return (
              (a = e(a)),
              (i = e(i)),
              (u = e(u)),
              (r.opacity = 1),
              function (e) {
                return (r.r = a(e)), (r.g = i(e)), (r.b = u(e)), r + "";
              }
            );
          };
        }
        Ge(function (e) {
          var t = e.length - 1;
          return function (n) {
            var r =
                n <= 0
                  ? (n = 0)
                  : n >= 1
                  ? ((n = 1), t - 1)
                  : Math.floor(n * t),
              o = e[r],
              a = e[r + 1],
              i = r > 0 ? e[r - 1] : 2 * o - a,
              u = r < t - 1 ? e[r + 2] : 2 * a - o;
            return ze((n - r / t) * t, i, o, a, u);
          };
        }),
          Ge(function (e) {
            var t = e.length;
            return function (n) {
              var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
                o = e[(r + t - 1) % t],
                a = e[r % t],
                i = e[(r + 1) % t],
                u = e[(r + 2) % t];
              return ze((n - r / t) * t, o, a, i, u);
            };
          });
        var $e = {
          lab: function (e, t) {
            var n = be((e = ue(e)).l, (t = ue(t)).l),
              r = be(e.a, t.a),
              o = be(e.b, t.b),
              a = be(e.opacity, t.opacity);
            return function (t) {
              return (
                (e.l = n(t)),
                (e.a = r(t)),
                (e.b = o(t)),
                (e.opacity = a(t)),
                e + ""
              );
            };
          },
          hcl: Me,
          "hcl-long": ke,
          hsl: Ne,
          "hsl-long": Te,
          cubehelix: Ue,
          "cubehelix-long": He,
          rgb: We,
        };
        var Be = new Date(),
          qe = new Date();
        function Ve(e, t, n, r) {
          function o(t) {
            return (
              e((t = 0 === arguments.length ? new Date() : new Date(+t))), t
            );
          }
          return (
            (o.floor = function (t) {
              return e((t = new Date(+t))), t;
            }),
            (o.ceil = function (n) {
              return e((n = new Date(n - 1))), t(n, 1), e(n), n;
            }),
            (o.round = function (e) {
              var t = o(e),
                n = o.ceil(e);
              return e - t < n - e ? t : n;
            }),
            (o.offset = function (e, n) {
              return t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e;
            }),
            (o.range = function (n, r, a) {
              var i,
                u = [];
              if (
                ((n = o.ceil(n)),
                (a = null == a ? 1 : Math.floor(a)),
                !(n < r && a > 0))
              )
                return u;
              do {
                u.push((i = new Date(+n))), t(n, a), e(n);
              } while (i < n && n < r);
              return u;
            }),
            (o.filter = function (n) {
              return Ve(
                function (t) {
                  if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
                },
                function (e, r) {
                  if (e >= e)
                    if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                    else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
                }
              );
            }),
            n &&
              ((o.count = function (t, r) {
                return (
                  Be.setTime(+t),
                  qe.setTime(+r),
                  e(Be),
                  e(qe),
                  Math.floor(n(Be, qe))
                );
              }),
              (o.every = function (e) {
                return (
                  (e = Math.floor(e)),
                  isFinite(e) && e > 0
                    ? e > 1
                      ? o.filter(
                          r
                            ? function (t) {
                                return r(t) % e == 0;
                              }
                            : function (t) {
                                return o.count(0, t) % e == 0;
                              }
                        )
                      : o
                    : null
                );
              })),
            o
          );
        }
        const Ye = 1e3,
          Xe = 6e4,
          Ze = 60 * Xe,
          Qe = 24 * Ze,
          Je = 7 * Qe,
          Ke = 30 * Qe,
          et = 365 * Qe;
        var tt = Ve(
          (e) => e.setHours(0, 0, 0, 0),
          (e, t) => e.setDate(e.getDate() + t),
          (e, t) =>
            (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Xe) / Qe,
          (e) => e.getDate() - 1
        );
        const nt = tt;
        tt.range;
        var rt = Ve(
          function (e) {
            e.setTime(
              e -
                e.getMilliseconds() -
                e.getSeconds() * Ye -
                e.getMinutes() * Xe
            );
          },
          function (e, t) {
            e.setTime(+e + t * Ze);
          },
          function (e, t) {
            return (t - e) / Ze;
          },
          function (e) {
            return e.getHours();
          }
        );
        const ot = rt;
        rt.range;
        var at = Ve(
          function (e) {
            e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye);
          },
          function (e, t) {
            e.setTime(+e + t * Xe);
          },
          function (e, t) {
            return (t - e) / Xe;
          },
          function (e) {
            return e.getMinutes();
          }
        );
        const it = at;
        at.range;
        var ut = Ve(
          function (e) {
            e.setDate(1), e.setHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setMonth(e.getMonth() + t);
          },
          function (e, t) {
            return (
              t.getMonth() -
              e.getMonth() +
              12 * (t.getFullYear() - e.getFullYear())
            );
          },
          function (e) {
            return e.getMonth();
          }
        );
        const lt = ut;
        ut.range;
        var st = Ve(
          function (e) {
            e.setTime(e - e.getMilliseconds());
          },
          function (e, t) {
            e.setTime(+e + t * Ye);
          },
          function (e, t) {
            return (t - e) / Ye;
          },
          function (e) {
            return e.getUTCSeconds();
          }
        );
        const ct = st;
        st.range;
        function ft(e) {
          return Ve(
            function (t) {
              t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
                t.setHours(0, 0, 0, 0);
            },
            function (e, t) {
              e.setDate(e.getDate() + 7 * t);
            },
            function (e, t) {
              return (
                (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Xe) /
                Je
              );
            }
          );
        }
        var ht = ft(0),
          dt = ft(1),
          pt = ft(2),
          vt = ft(3),
          gt = ft(4),
          mt = ft(5),
          yt = ft(6),
          _t =
            (ht.range,
            dt.range,
            pt.range,
            vt.range,
            gt.range,
            mt.range,
            yt.range,
            Ve(
              function (e) {
                e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
              },
              function (e, t) {
                e.setFullYear(e.getFullYear() + t);
              },
              function (e, t) {
                return t.getFullYear() - e.getFullYear();
              },
              function (e) {
                return e.getFullYear();
              }
            ));
        _t.every = function (e) {
          return isFinite((e = Math.floor(e))) && e > 0
            ? Ve(
                function (t) {
                  t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                    t.setMonth(0, 1),
                    t.setHours(0, 0, 0, 0);
                },
                function (t, n) {
                  t.setFullYear(t.getFullYear() + n * e);
                }
              )
            : null;
        };
        const xt = _t;
        _t.range;
        var bt = Ve(
          function (e) {
            e.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCDate(e.getUTCDate() + t);
          },
          function (e, t) {
            return (t - e) / Qe;
          },
          function (e) {
            return e.getUTCDate() - 1;
          }
        );
        const wt = bt;
        bt.range;
        var Mt = Ve(
          function (e) {
            e.setUTCMinutes(0, 0, 0);
          },
          function (e, t) {
            e.setTime(+e + t * Ze);
          },
          function (e, t) {
            return (t - e) / Ze;
          },
          function (e) {
            return e.getUTCHours();
          }
        );
        const kt = Mt;
        Mt.range;
        var Ot = Ve(
          function (e) {
            e.setUTCSeconds(0, 0);
          },
          function (e, t) {
            e.setTime(+e + t * Xe);
          },
          function (e, t) {
            return (t - e) / Xe;
          },
          function (e) {
            return e.getUTCMinutes();
          }
        );
        const Nt = Ot;
        Ot.range;
        var Tt = Ve(
          function (e) {
            e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCMonth(e.getUTCMonth() + t);
          },
          function (e, t) {
            return (
              t.getUTCMonth() -
              e.getUTCMonth() +
              12 * (t.getUTCFullYear() - e.getUTCFullYear())
            );
          },
          function (e) {
            return e.getUTCMonth();
          }
        );
        const St = Tt;
        Tt.range;
        function Et(e) {
          return Ve(
            function (t) {
              t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
                t.setUTCHours(0, 0, 0, 0);
            },
            function (e, t) {
              e.setUTCDate(e.getUTCDate() + 7 * t);
            },
            function (e, t) {
              return (t - e) / Je;
            }
          );
        }
        var At = Et(0),
          Ct = Et(1),
          jt = Et(2),
          Rt = Et(3),
          Pt = Et(4),
          Ft = Et(5),
          It = Et(6),
          Lt =
            (At.range,
            Ct.range,
            jt.range,
            Rt.range,
            Pt.range,
            Ft.range,
            It.range,
            Ve(
              function (e) {
                e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
              },
              function (e, t) {
                e.setUTCFullYear(e.getUTCFullYear() + t);
              },
              function (e, t) {
                return t.getUTCFullYear() - e.getUTCFullYear();
              },
              function (e) {
                return e.getUTCFullYear();
              }
            ));
        Lt.every = function (e) {
          return isFinite((e = Math.floor(e))) && e > 0
            ? Ve(
                function (t) {
                  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                    t.setUTCMonth(0, 1),
                    t.setUTCHours(0, 0, 0, 0);
                },
                function (t, n) {
                  t.setUTCFullYear(t.getUTCFullYear() + n * e);
                }
              )
            : null;
        };
        const Dt = Lt;
        Lt.range;
        var Ut = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)),
          Ht = "%Y-%m-%d %H:%M";
        function zt(e) {
          return "2020-02-02 03:04" === e.tickFormat(1, Ht)(Ut);
        }
        var Wt = {
            day: nt,
            hour: ot,
            minute: it,
            month: lt,
            second: ct,
            week: ht,
            year: xt,
          },
          Gt = {
            day: wt,
            hour: kt,
            minute: Nt,
            month: St,
            second: ct,
            week: At,
            year: Dt,
          };
        function $t(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (n) {
              return Math.round(e * (1 - n) + t * n);
            }
          );
        }
        var Bt = [
            "domain",
            "nice",
            "zero",
            "interpolate",
            "round",
            "range",
            "reverse",
            "align",
            "base",
            "clamp",
            "constant",
            "exponent",
            "padding",
            "unknown",
          ],
          qt = {
            domain: function (e, t) {
              t.domain && e.domain(t.domain);
            },
            nice: function (e, t) {
              if ("nice" in t && void 0 !== t.nice && "nice" in e) {
                var n = t.nice;
                if ("boolean" == typeof n) n && e.nice();
                else if ("number" == typeof n) e.nice(n);
                else {
                  var r = e,
                    o = zt(r);
                  if ("string" == typeof n) r.nice(o ? Gt[n] : Wt[n]);
                  else {
                    var a = n.interval,
                      i = n.step,
                      u = (o ? Gt[a] : Wt[a]).every(i);
                    null != u && r.nice(u);
                  }
                }
              }
            },
            zero: function (e, t) {
              if ("zero" in t && !0 === t.zero) {
                var n = e.domain(),
                  r = n[0],
                  o = n[1],
                  a = o < r,
                  i = a ? [o, r] : [r, o],
                  u = i[0],
                  l = i[1],
                  s = [Math.min(0, u), Math.max(0, l)];
                e.domain(a ? s.reverse() : s);
              }
            },
            interpolate: function (e, t) {
              if (
                "interpolate" in t &&
                "interpolate" in e &&
                void 0 !== t.interpolate
              ) {
                var n = (function (e) {
                  switch (e) {
                    case "lab":
                    case "hcl":
                    case "hcl-long":
                    case "hsl":
                    case "hsl-long":
                    case "cubehelix":
                    case "cubehelix-long":
                    case "rgb":
                      return $e[e];
                  }
                  var t = e.type,
                    n = e.gamma,
                    r = $e[t];
                  return void 0 === n ? r : r.gamma(n);
                })(t.interpolate);
                e.interpolate(n);
              }
            },
            round: function (e, t) {
              "round" in t &&
                void 0 !== t.round &&
                (t.round && "interpolate" in t && void 0 !== t.interpolate
                  ? console.warn(
                      "[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:",
                      t
                    )
                  : "round" in e
                  ? e.round(t.round)
                  : "interpolate" in e && t.round && e.interpolate($t));
            },
            align: function (e, t) {
              "align" in e &&
                "align" in t &&
                void 0 !== t.align &&
                e.align(t.align);
            },
            base: function (e, t) {
              "base" in e && "base" in t && void 0 !== t.base && e.base(t.base);
            },
            clamp: function (e, t) {
              "clamp" in e &&
                "clamp" in t &&
                void 0 !== t.clamp &&
                e.clamp(t.clamp);
            },
            constant: function (e, t) {
              "constant" in e &&
                "constant" in t &&
                void 0 !== t.constant &&
                e.constant(t.constant);
            },
            exponent: function (e, t) {
              "exponent" in e &&
                "exponent" in t &&
                void 0 !== t.exponent &&
                e.exponent(t.exponent);
            },
            padding: function (e, t) {
              "padding" in e &&
                "padding" in t &&
                void 0 !== t.padding &&
                e.padding(t.padding),
                "paddingInner" in e &&
                  "paddingInner" in t &&
                  void 0 !== t.paddingInner &&
                  e.paddingInner(t.paddingInner),
                "paddingOuter" in e &&
                  "paddingOuter" in t &&
                  void 0 !== t.paddingOuter &&
                  e.paddingOuter(t.paddingOuter);
            },
            range: function (e, t) {
              t.range && e.range(t.range);
            },
            reverse: function (e, t) {
              if (t.reverse) {
                var n = e.range().slice().reverse();
                e.range(n);
              }
            },
            unknown: function (e, t) {
              "unknown" in e &&
                "unknown" in t &&
                void 0 !== t.unknown &&
                e.unknown(t.unknown);
            },
          };
        function Vt() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = new Set(t),
            o = Bt.filter(function (e) {
              return r.has(e);
            });
          return function (e, t) {
            return (
              void 0 !== t &&
                o.forEach(function (n) {
                  qt[n](e, t);
                }),
              e
            );
          };
        }
        var Yt = Vt("domain", "range", "reverse", "align", "padding", "round");
        function Xt(e) {
          return Yt(h(), e);
        }
        var Zt = Vt("domain", "range", "reverse", "align", "padding", "round");
        function Qt(e) {
          return Zt(p(), e);
        }
        var Jt = Math.sqrt(50),
          Kt = Math.sqrt(10),
          en = Math.sqrt(2);
        function tn(e, t, n) {
          var r,
            o,
            a,
            i,
            u = -1;
          if (((n = +n), (e = +e) === (t = +t) && n > 0)) return [e];
          if (
            ((r = t < e) && ((o = e), (e = t), (t = o)),
            0 === (i = nn(e, t, n)) || !isFinite(i))
          )
            return [];
          if (i > 0) {
            let n = Math.round(e / i),
              r = Math.round(t / i);
            for (
              n * i < e && ++n,
                r * i > t && --r,
                a = new Array((o = r - n + 1));
              ++u < o;

            )
              a[u] = (n + u) * i;
          } else {
            i = -i;
            let n = Math.round(e * i),
              r = Math.round(t * i);
            for (
              n / i < e && ++n,
                r / i > t && --r,
                a = new Array((o = r - n + 1));
              ++u < o;

            )
              a[u] = (n + u) / i;
          }
          return r && a.reverse(), a;
        }
        function nn(e, t, n) {
          var r = (t - e) / Math.max(0, n),
            o = Math.floor(Math.log(r) / Math.LN10),
            a = r / Math.pow(10, o);
          return o >= 0
            ? (a >= Jt ? 10 : a >= Kt ? 5 : a >= en ? 2 : 1) * Math.pow(10, o)
            : -Math.pow(10, -o) /
                (a >= Jt ? 10 : a >= Kt ? 5 : a >= en ? 2 : 1);
        }
        function rn(e, t, n) {
          var r = Math.abs(t - e) / Math.max(0, n),
            o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            a = r / o;
          return (
            a >= Jt ? (o *= 10) : a >= Kt ? (o *= 5) : a >= en && (o *= 2),
            t < e ? -o : o
          );
        }
        function on(e, t) {
          return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }
        function an(e) {
          let t = e,
            n = e;
          function r(e, t, r, o) {
            for (null == r && (r = 0), null == o && (o = e.length); r < o; ) {
              const a = (r + o) >>> 1;
              n(e[a], t) < 0 ? (r = a + 1) : (o = a);
            }
            return r;
          }
          return (
            1 === e.length &&
              ((t = (t, n) => e(t) - n),
              (n = (function (e) {
                return (t, n) => on(e(t), n);
              })(e))),
            {
              left: r,
              center: function (e, n, o, a) {
                null == o && (o = 0), null == a && (a = e.length);
                const i = r(e, n, o, a - 1);
                return i > o && t(e[i - 1], n) > -t(e[i], n) ? i - 1 : i;
              },
              right: function (e, t, r, o) {
                for (
                  null == r && (r = 0), null == o && (o = e.length);
                  r < o;

                ) {
                  const a = (r + o) >>> 1;
                  n(e[a], t) > 0 ? (o = a) : (r = a + 1);
                }
                return r;
              },
            }
          );
        }
        function un(e) {
          return null === e ? NaN : +e;
        }
        const ln = an(on),
          sn = ln.right,
          cn = (ln.left, an(un).center, sn);
        function fn(e, t) {
          var n,
            r = t ? t.length : 0,
            o = e ? Math.min(r, e.length) : 0,
            a = new Array(o),
            i = new Array(r);
          for (n = 0; n < o; ++n) a[n] = _n(e[n], t[n]);
          for (; n < r; ++n) i[n] = t[n];
          return function (e) {
            for (n = 0; n < o; ++n) i[n] = a[n](e);
            return i;
          };
        }
        function hn(e, t) {
          var n = new Date();
          return (
            (e = +e),
            (t = +t),
            function (r) {
              return n.setTime(e * (1 - r) + t * r), n;
            }
          );
        }
        function dn(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (n) {
              return e * (1 - n) + t * n;
            }
          );
        }
        function pn(e, t) {
          var n,
            r = {},
            o = {};
          for (n in ((null !== e && "object" == typeof e) || (e = {}),
          (null !== t && "object" == typeof t) || (t = {}),
          t))
            n in e ? (r[n] = _n(e[n], t[n])) : (o[n] = t[n]);
          return function (e) {
            for (n in r) o[n] = r[n](e);
            return o;
          };
        }
        var vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          gn = new RegExp(vn.source, "g");
        function mn(e, t) {
          var n,
            r,
            o,
            a = (vn.lastIndex = gn.lastIndex = 0),
            i = -1,
            u = [],
            l = [];
          for (e += "", t += ""; (n = vn.exec(e)) && (r = gn.exec(t)); )
            (o = r.index) > a &&
              ((o = t.slice(a, o)), u[i] ? (u[i] += o) : (u[++i] = o)),
              (n = n[0]) === (r = r[0])
                ? u[i]
                  ? (u[i] += r)
                  : (u[++i] = r)
                : ((u[++i] = null), l.push({ i, x: dn(n, r) })),
              (a = gn.lastIndex);
          return (
            a < t.length &&
              ((o = t.slice(a)), u[i] ? (u[i] += o) : (u[++i] = o)),
            u.length < 2
              ? l[0]
                ? (function (e) {
                    return function (t) {
                      return e(t) + "";
                    };
                  })(l[0].x)
                : (function (e) {
                    return function () {
                      return e;
                    };
                  })(t)
              : ((t = l.length),
                function (e) {
                  for (var n, r = 0; r < t; ++r) u[(n = l[r]).i] = n.x(e);
                  return u.join("");
                })
          );
        }
        function yn(e, t) {
          t || (t = []);
          var n,
            r = e ? Math.min(t.length, e.length) : 0,
            o = t.slice();
          return function (a) {
            for (n = 0; n < r; ++n) o[n] = e[n] * (1 - a) + t[n] * a;
            return o;
          };
        }
        function _n(e, t) {
          var n,
            r,
            o = typeof t;
          return null == t || "boolean" === o
            ? me(t)
            : ("number" === o
                ? dn
                : "string" === o
                ? (n = R(t))
                  ? ((t = n), We)
                  : mn
                : t instanceof R
                ? We
                : t instanceof Date
                ? hn
                : ((r = t),
                  !ArrayBuffer.isView(r) || r instanceof DataView
                    ? Array.isArray(t)
                      ? fn
                      : ("function" != typeof t.valueOf &&
                          "function" != typeof t.toString) ||
                        isNaN(t)
                      ? pn
                      : dn
                    : yn))(e, t);
        }
        function xn(e) {
          return +e;
        }
        var bn = [0, 1];
        function wn(e) {
          return e;
        }
        function Mn(e, t) {
          return (t -= e = +e)
            ? function (n) {
                return (n - e) / t;
              }
            : ((n = isNaN(t) ? NaN : 0.5),
              function () {
                return n;
              });
          var n;
        }
        function kn(e, t, n) {
          var r = e[0],
            o = e[1],
            a = t[0],
            i = t[1];
          return (
            o < r
              ? ((r = Mn(o, r)), (a = n(i, a)))
              : ((r = Mn(r, o)), (a = n(a, i))),
            function (e) {
              return a(r(e));
            }
          );
        }
        function On(e, t, n) {
          var r = Math.min(e.length, t.length) - 1,
            o = new Array(r),
            a = new Array(r),
            i = -1;
          for (
            e[r] < e[0] &&
            ((e = e.slice().reverse()), (t = t.slice().reverse()));
            ++i < r;

          )
            (o[i] = Mn(e[i], e[i + 1])), (a[i] = n(t[i], t[i + 1]));
          return function (t) {
            var n = cn(e, t, 1, r) - 1;
            return a[n](o[n](t));
          };
        }
        function Nn(e, t) {
          return t
            .domain(e.domain())
            .range(e.range())
            .interpolate(e.interpolate())
            .clamp(e.clamp())
            .unknown(e.unknown());
        }
        function Tn() {
          var e,
            t,
            n,
            r,
            o,
            a,
            i = bn,
            u = bn,
            l = _n,
            s = wn;
          function c() {
            var e,
              t,
              n,
              l = Math.min(i.length, u.length);
            return (
              s !== wn &&
                ((e = i[0]),
                (t = i[l - 1]),
                e > t && ((n = e), (e = t), (t = n)),
                (s = function (n) {
                  return Math.max(e, Math.min(t, n));
                })),
              (r = l > 2 ? On : kn),
              (o = a = null),
              f
            );
          }
          function f(t) {
            return null == t || isNaN((t = +t))
              ? n
              : (o || (o = r(i.map(e), u, l)))(e(s(t)));
          }
          return (
            (f.invert = function (n) {
              return s(t((a || (a = r(u, i.map(e), dn)))(n)));
            }),
            (f.domain = function (e) {
              return arguments.length
                ? ((i = Array.from(e, xn)), c())
                : i.slice();
            }),
            (f.range = function (e) {
              return arguments.length ? ((u = Array.from(e)), c()) : u.slice();
            }),
            (f.rangeRound = function (e) {
              return (u = Array.from(e)), (l = $t), c();
            }),
            (f.clamp = function (e) {
              return arguments.length ? ((s = !!e || wn), c()) : s !== wn;
            }),
            (f.interpolate = function (e) {
              return arguments.length ? ((l = e), c()) : l;
            }),
            (f.unknown = function (e) {
              return arguments.length ? ((n = e), f) : n;
            }),
            function (n, r) {
              return (e = n), (t = r), c();
            }
          );
        }
        function Sn() {
          return Tn()(wn, wn);
        }
        var En,
          An =
            /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function Cn(e) {
          if (!(t = An.exec(e))) throw new Error("invalid format: " + e);
          var t;
          return new jn({
            fill: t[1],
            align: t[2],
            sign: t[3],
            symbol: t[4],
            zero: t[5],
            width: t[6],
            comma: t[7],
            precision: t[8] && t[8].slice(1),
            trim: t[9],
            type: t[10],
          });
        }
        function jn(e) {
          (this.fill = void 0 === e.fill ? " " : e.fill + ""),
            (this.align = void 0 === e.align ? ">" : e.align + ""),
            (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
            (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
            (this.zero = !!e.zero),
            (this.width = void 0 === e.width ? void 0 : +e.width),
            (this.comma = !!e.comma),
            (this.precision = void 0 === e.precision ? void 0 : +e.precision),
            (this.trim = !!e.trim),
            (this.type = void 0 === e.type ? "" : e.type + "");
        }
        function Rn(e, t) {
          if (
            (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null;
          var n,
            r = e.slice(0, n);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
        }
        function Pn(e) {
          return (e = Rn(Math.abs(e))) ? e[1] : NaN;
        }
        function Fn(e, t) {
          var n = Rn(e, t);
          if (!n) return e + "";
          var r = n[0],
            o = n[1];
          return o < 0
            ? "0." + new Array(-o).join("0") + r
            : r.length > o + 1
            ? r.slice(0, o + 1) + "." + r.slice(o + 1)
            : r + new Array(o - r.length + 2).join("0");
        }
        (Cn.prototype = jn.prototype),
          (jn.prototype.toString = function () {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? "0" : "") +
              (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
              (this.comma ? "," : "") +
              (void 0 === this.precision
                ? ""
                : "." + Math.max(0, 0 | this.precision)) +
              (this.trim ? "~" : "") +
              this.type
            );
          });
        const In = {
          "%": (e, t) => (100 * e).toFixed(t),
          b: (e) => Math.round(e).toString(2),
          c: (e) => e + "",
          d: function (e) {
            return Math.abs((e = Math.round(e))) >= 1e21
              ? e.toLocaleString("en").replace(/,/g, "")
              : e.toString(10);
          },
          e: (e, t) => e.toExponential(t),
          f: (e, t) => e.toFixed(t),
          g: (e, t) => e.toPrecision(t),
          o: (e) => Math.round(e).toString(8),
          p: (e, t) => Fn(100 * e, t),
          r: Fn,
          s: function (e, t) {
            var n = Rn(e, t);
            if (!n) return e + "";
            var r = n[0],
              o = n[1],
              a =
                o - (En = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
              i = r.length;
            return a === i
              ? r
              : a > i
              ? r + new Array(a - i + 1).join("0")
              : a > 0
              ? r.slice(0, a) + "." + r.slice(a)
              : "0." +
                new Array(1 - a).join("0") +
                Rn(e, Math.max(0, t + a - 1))[0];
          },
          X: (e) => Math.round(e).toString(16).toUpperCase(),
          x: (e) => Math.round(e).toString(16),
        };
        function Ln(e) {
          return e;
        }
        var Dn,
          Un,
          Hn,
          zn = Array.prototype.map,
          Wn = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "µ",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function Gn(e) {
          var t,
            n,
            r =
              void 0 === e.grouping || void 0 === e.thousands
                ? Ln
                : ((t = zn.call(e.grouping, Number)),
                  (n = e.thousands + ""),
                  function (e, r) {
                    for (
                      var o = e.length, a = [], i = 0, u = t[0], l = 0;
                      o > 0 &&
                      u > 0 &&
                      (l + u + 1 > r && (u = Math.max(1, r - l)),
                      a.push(e.substring((o -= u), o + u)),
                      !((l += u + 1) > r));

                    )
                      u = t[(i = (i + 1) % t.length)];
                    return a.reverse().join(n);
                  }),
            o = void 0 === e.currency ? "" : e.currency[0] + "",
            a = void 0 === e.currency ? "" : e.currency[1] + "",
            i = void 0 === e.decimal ? "." : e.decimal + "",
            u =
              void 0 === e.numerals
                ? Ln
                : (function (e) {
                    return function (t) {
                      return t.replace(/[0-9]/g, function (t) {
                        return e[+t];
                      });
                    };
                  })(zn.call(e.numerals, String)),
            l = void 0 === e.percent ? "%" : e.percent + "",
            s = void 0 === e.minus ? "−" : e.minus + "",
            c = void 0 === e.nan ? "NaN" : e.nan + "";
          function f(e) {
            var t = (e = Cn(e)).fill,
              n = e.align,
              f = e.sign,
              h = e.symbol,
              d = e.zero,
              p = e.width,
              v = e.comma,
              g = e.precision,
              m = e.trim,
              y = e.type;
            "n" === y
              ? ((v = !0), (y = "g"))
              : In[y] || (void 0 === g && (g = 12), (m = !0), (y = "g")),
              (d || ("0" === t && "=" === n)) &&
                ((d = !0), (t = "0"), (n = "="));
            var _ =
                "$" === h
                  ? o
                  : "#" === h && /[boxX]/.test(y)
                  ? "0" + y.toLowerCase()
                  : "",
              x = "$" === h ? a : /[%p]/.test(y) ? l : "",
              b = In[y],
              w = /[defgprs%]/.test(y);
            function M(e) {
              var o,
                a,
                l,
                h = _,
                M = x;
              if ("c" === y) (M = b(e) + M), (e = "");
              else {
                var k = (e = +e) < 0 || 1 / e < 0;
                if (
                  ((e = isNaN(e) ? c : b(Math.abs(e), g)),
                  m &&
                    (e = (function (e) {
                      e: for (var t, n = e.length, r = 1, o = -1; r < n; ++r)
                        switch (e[r]) {
                          case ".":
                            o = t = r;
                            break;
                          case "0":
                            0 === o && (o = r), (t = r);
                            break;
                          default:
                            if (!+e[r]) break e;
                            o > 0 && (o = 0);
                        }
                      return o > 0 ? e.slice(0, o) + e.slice(t + 1) : e;
                    })(e)),
                  k && 0 == +e && "+" !== f && (k = !1),
                  (h =
                    (k
                      ? "(" === f
                        ? f
                        : s
                      : "-" === f || "(" === f
                      ? ""
                      : f) + h),
                  (M =
                    ("s" === y ? Wn[8 + En / 3] : "") +
                    M +
                    (k && "(" === f ? ")" : "")),
                  w)
                )
                  for (o = -1, a = e.length; ++o < a; )
                    if (48 > (l = e.charCodeAt(o)) || l > 57) {
                      (M = (46 === l ? i + e.slice(o + 1) : e.slice(o)) + M),
                        (e = e.slice(0, o));
                      break;
                    }
              }
              v && !d && (e = r(e, 1 / 0));
              var O = h.length + e.length + M.length,
                N = O < p ? new Array(p - O + 1).join(t) : "";
              switch (
                (v &&
                  d &&
                  ((e = r(N + e, N.length ? p - M.length : 1 / 0)), (N = "")),
                n)
              ) {
                case "<":
                  e = h + e + M + N;
                  break;
                case "=":
                  e = h + N + e + M;
                  break;
                case "^":
                  e = N.slice(0, (O = N.length >> 1)) + h + e + M + N.slice(O);
                  break;
                default:
                  e = N + h + e + M;
              }
              return u(e);
            }
            return (
              (g =
                void 0 === g
                  ? 6
                  : /[gprs]/.test(y)
                  ? Math.max(1, Math.min(21, g))
                  : Math.max(0, Math.min(20, g))),
              (M.toString = function () {
                return e + "";
              }),
              M
            );
          }
          return {
            format: f,
            formatPrefix: function (e, t) {
              var n = f((((e = Cn(e)).type = "f"), e)),
                r = 3 * Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))),
                o = Math.pow(10, -r),
                a = Wn[8 + r / 3];
              return function (e) {
                return n(o * e) + a;
              };
            },
          };
        }
        function $n(e, t, n, r) {
          var o,
            a = rn(e, t, n);
          switch ((r = Cn(null == r ? ",f" : r)).type) {
            case "s":
              var i = Math.max(Math.abs(e), Math.abs(t));
              return (
                null != r.precision ||
                  isNaN(
                    (o = (function (e, t) {
                      return Math.max(
                        0,
                        3 * Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) -
                          Pn(Math.abs(e))
                      );
                    })(a, i))
                  ) ||
                  (r.precision = o),
                Hn(r, i)
              );
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
              null != r.precision ||
                isNaN(
                  (o = (function (e, t) {
                    return (
                      (e = Math.abs(e)),
                      (t = Math.abs(t) - e),
                      Math.max(0, Pn(t) - Pn(e)) + 1
                    );
                  })(a, Math.max(Math.abs(e), Math.abs(t))))
                ) ||
                (r.precision = o - ("e" === r.type));
              break;
            case "f":
            case "%":
              null != r.precision ||
                isNaN(
                  (o = (function (e) {
                    return Math.max(0, -Pn(Math.abs(e)));
                  })(a))
                ) ||
                (r.precision = o - 2 * ("%" === r.type));
          }
          return Un(r);
        }
        function Bn(e) {
          var t = e.domain;
          return (
            (e.ticks = function (e) {
              var n = t();
              return tn(n[0], n[n.length - 1], null == e ? 10 : e);
            }),
            (e.tickFormat = function (e, n) {
              var r = t();
              return $n(r[0], r[r.length - 1], null == e ? 10 : e, n);
            }),
            (e.nice = function (n) {
              null == n && (n = 10);
              var r,
                o,
                a = t(),
                i = 0,
                u = a.length - 1,
                l = a[i],
                s = a[u],
                c = 10;
              for (
                s < l && ((o = l), (l = s), (s = o), (o = i), (i = u), (u = o));
                c-- > 0;

              ) {
                if ((o = nn(l, s, n)) === r)
                  return (a[i] = l), (a[u] = s), t(a);
                if (o > 0)
                  (l = Math.floor(l / o) * o), (s = Math.ceil(s / o) * o);
                else {
                  if (!(o < 0)) break;
                  (l = Math.ceil(l * o) / o), (s = Math.floor(s * o) / o);
                }
                r = o;
              }
              return e;
            }),
            e
          );
        }
        function qn() {
          var e = Sn();
          return (
            (e.copy = function () {
              return Nn(e, qn());
            }),
            r.apply(e, arguments),
            Bn(e)
          );
        }
        (Dn = Gn({ thousands: ",", grouping: [3], currency: ["$", ""] })),
          (Un = Dn.format),
          (Hn = Dn.formatPrefix);
        var Vn = Vt(
          "domain",
          "range",
          "reverse",
          "clamp",
          "interpolate",
          "nice",
          "round",
          "zero"
        );
        function Yn(e) {
          return Vn(qn(), e);
        }
        function Xn(e) {
          return Math.sign(e) * e * e;
        }
        function Zn() {
          var e,
            t = Sn(),
            n = [0, 1],
            o = !1;
          function a(n) {
            var r = (function (e) {
              return Math.sign(e) * Math.sqrt(Math.abs(e));
            })(t(n));
            return isNaN(r) ? e : o ? Math.round(r) : r;
          }
          return (
            (a.invert = function (e) {
              return t.invert(Xn(e));
            }),
            (a.domain = function (e) {
              return arguments.length ? (t.domain(e), a) : t.domain();
            }),
            (a.range = function (e) {
              return arguments.length
                ? (t.range((n = Array.from(e, xn)).map(Xn)), a)
                : n.slice();
            }),
            (a.rangeRound = function (e) {
              return a.range(e).round(!0);
            }),
            (a.round = function (e) {
              return arguments.length ? ((o = !!e), a) : o;
            }),
            (a.clamp = function (e) {
              return arguments.length ? (t.clamp(e), a) : t.clamp();
            }),
            (a.unknown = function (t) {
              return arguments.length ? ((e = t), a) : e;
            }),
            (a.copy = function () {
              return Zn(t.domain(), n).round(o).clamp(t.clamp()).unknown(e);
            }),
            r.apply(a, arguments),
            Bn(a)
          );
        }
        var Qn = Vt("domain", "range", "clamp", "nice", "round", "unknown");
        function Jn(e) {
          return Qn(Zn(), e);
        }
        var Kn = Ve(
          function () {},
          function (e, t) {
            e.setTime(+e + t);
          },
          function (e, t) {
            return t - e;
          }
        );
        Kn.every = function (e) {
          return (
            (e = Math.floor(e)),
            isFinite(e) && e > 0
              ? e > 1
                ? Ve(
                    function (t) {
                      t.setTime(Math.floor(t / e) * e);
                    },
                    function (t, n) {
                      t.setTime(+t + n * e);
                    },
                    function (t, n) {
                      return (n - t) / e;
                    }
                  )
                : Kn
              : null
          );
        };
        const er = Kn;
        Kn.range;
        function tr(e, t, n, r, o, a) {
          const i = [
            [ct, 1, Ye],
            [ct, 5, 5e3],
            [ct, 15, 15e3],
            [ct, 30, 3e4],
            [a, 1, Xe],
            [a, 5, 5 * Xe],
            [a, 15, 15 * Xe],
            [a, 30, 30 * Xe],
            [o, 1, Ze],
            [o, 3, 3 * Ze],
            [o, 6, 6 * Ze],
            [o, 12, 12 * Ze],
            [r, 1, Qe],
            [r, 2, 2 * Qe],
            [n, 1, Je],
            [t, 1, Ke],
            [t, 3, 3 * Ke],
            [e, 1, et],
          ];
          function u(t, n, r) {
            const o = Math.abs(n - t) / r,
              a = an(([, , e]) => e).right(i, o);
            if (a === i.length) return e.every(rn(t / et, n / et, r));
            if (0 === a) return er.every(Math.max(rn(t, n, r), 1));
            const [u, l] = i[o / i[a - 1][2] < i[a][2] / o ? a - 1 : a];
            return u.every(l);
          }
          return [
            function (e, t, n) {
              const r = t < e;
              r && ([e, t] = [t, e]);
              const o = n && "function" == typeof n.range ? n : u(e, t, n),
                a = o ? o.range(e, +t + 1) : [];
              return r ? a.reverse() : a;
            },
            u,
          ];
        }
        const [nr, rr] = tr(Dt, St, At, wt, kt, Nt),
          [or, ar] = tr(xt, lt, ht, nt, ot, it);
        function ir(e) {
          if (0 <= e.y && e.y < 100) {
            var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
            return t.setFullYear(e.y), t;
          }
          return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
        }
        function ur(e) {
          if (0 <= e.y && e.y < 100) {
            var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
            return t.setUTCFullYear(e.y), t;
          }
          return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
        }
        function lr(e, t, n) {
          return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
        }
        var sr,
          cr,
          fr,
          hr = { "-": "", _: " ", 0: "0" },
          dr = /^\s*\d+/,
          pr = /^%/,
          vr = /[\\^$*+?|[\]().{}]/g;
        function gr(e, t, n) {
          var r = e < 0 ? "-" : "",
            o = (r ? -e : e) + "",
            a = o.length;
          return r + (a < n ? new Array(n - a + 1).join(t) + o : o);
        }
        function mr(e) {
          return e.replace(vr, "\\$&");
        }
        function yr(e) {
          return new RegExp("^(?:" + e.map(mr).join("|") + ")", "i");
        }
        function _r(e) {
          return new Map(e.map((e, t) => [e.toLowerCase(), t]));
        }
        function xr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 1));
          return r ? ((e.w = +r[0]), n + r[0].length) : -1;
        }
        function br(e, t, n) {
          var r = dr.exec(t.slice(n, n + 1));
          return r ? ((e.u = +r[0]), n + r[0].length) : -1;
        }
        function wr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.U = +r[0]), n + r[0].length) : -1;
        }
        function Mr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.V = +r[0]), n + r[0].length) : -1;
        }
        function kr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.W = +r[0]), n + r[0].length) : -1;
        }
        function Or(e, t, n) {
          var r = dr.exec(t.slice(n, n + 4));
          return r ? ((e.y = +r[0]), n + r[0].length) : -1;
        }
        function Nr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r
            ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
            : -1;
        }
        function Tr(e, t, n) {
          var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
          return r
            ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
            : -1;
        }
        function Sr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 1));
          return r ? ((e.q = 3 * r[0] - 3), n + r[0].length) : -1;
        }
        function Er(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
        }
        function Ar(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.d = +r[0]), n + r[0].length) : -1;
        }
        function Cr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 3));
          return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
        }
        function jr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.H = +r[0]), n + r[0].length) : -1;
        }
        function Rr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.M = +r[0]), n + r[0].length) : -1;
        }
        function Pr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 2));
          return r ? ((e.S = +r[0]), n + r[0].length) : -1;
        }
        function Fr(e, t, n) {
          var r = dr.exec(t.slice(n, n + 3));
          return r ? ((e.L = +r[0]), n + r[0].length) : -1;
        }
        function Ir(e, t, n) {
          var r = dr.exec(t.slice(n, n + 6));
          return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
        }
        function Lr(e, t, n) {
          var r = pr.exec(t.slice(n, n + 1));
          return r ? n + r[0].length : -1;
        }
        function Dr(e, t, n) {
          var r = dr.exec(t.slice(n));
          return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
        }
        function Ur(e, t, n) {
          var r = dr.exec(t.slice(n));
          return r ? ((e.s = +r[0]), n + r[0].length) : -1;
        }
        function Hr(e, t) {
          return gr(e.getDate(), t, 2);
        }
        function zr(e, t) {
          return gr(e.getHours(), t, 2);
        }
        function Wr(e, t) {
          return gr(e.getHours() % 12 || 12, t, 2);
        }
        function Gr(e, t) {
          return gr(1 + nt.count(xt(e), e), t, 3);
        }
        function $r(e, t) {
          return gr(e.getMilliseconds(), t, 3);
        }
        function Br(e, t) {
          return $r(e, t) + "000";
        }
        function qr(e, t) {
          return gr(e.getMonth() + 1, t, 2);
        }
        function Vr(e, t) {
          return gr(e.getMinutes(), t, 2);
        }
        function Yr(e, t) {
          return gr(e.getSeconds(), t, 2);
        }
        function Xr(e) {
          var t = e.getDay();
          return 0 === t ? 7 : t;
        }
        function Zr(e, t) {
          return gr(ht.count(xt(e) - 1, e), t, 2);
        }
        function Qr(e) {
          var t = e.getDay();
          return t >= 4 || 0 === t ? gt(e) : gt.ceil(e);
        }
        function Jr(e, t) {
          return (
            (e = Qr(e)), gr(gt.count(xt(e), e) + (4 === xt(e).getDay()), t, 2)
          );
        }
        function Kr(e) {
          return e.getDay();
        }
        function eo(e, t) {
          return gr(dt.count(xt(e) - 1, e), t, 2);
        }
        function to(e, t) {
          return gr(e.getFullYear() % 100, t, 2);
        }
        function no(e, t) {
          return gr((e = Qr(e)).getFullYear() % 100, t, 2);
        }
        function ro(e, t) {
          return gr(e.getFullYear() % 1e4, t, 4);
        }
        function oo(e, t) {
          var n = e.getDay();
          return gr(
            (e = n >= 4 || 0 === n ? gt(e) : gt.ceil(e)).getFullYear() % 1e4,
            t,
            4
          );
        }
        function ao(e) {
          var t = e.getTimezoneOffset();
          return (
            (t > 0 ? "-" : ((t *= -1), "+")) +
            gr((t / 60) | 0, "0", 2) +
            gr(t % 60, "0", 2)
          );
        }
        function io(e, t) {
          return gr(e.getUTCDate(), t, 2);
        }
        function uo(e, t) {
          return gr(e.getUTCHours(), t, 2);
        }
        function lo(e, t) {
          return gr(e.getUTCHours() % 12 || 12, t, 2);
        }
        function so(e, t) {
          return gr(1 + wt.count(Dt(e), e), t, 3);
        }
        function co(e, t) {
          return gr(e.getUTCMilliseconds(), t, 3);
        }
        function fo(e, t) {
          return co(e, t) + "000";
        }
        function ho(e, t) {
          return gr(e.getUTCMonth() + 1, t, 2);
        }
        function po(e, t) {
          return gr(e.getUTCMinutes(), t, 2);
        }
        function vo(e, t) {
          return gr(e.getUTCSeconds(), t, 2);
        }
        function go(e) {
          var t = e.getUTCDay();
          return 0 === t ? 7 : t;
        }
        function mo(e, t) {
          return gr(At.count(Dt(e) - 1, e), t, 2);
        }
        function yo(e) {
          var t = e.getUTCDay();
          return t >= 4 || 0 === t ? Pt(e) : Pt.ceil(e);
        }
        function _o(e, t) {
          return (
            (e = yo(e)),
            gr(Pt.count(Dt(e), e) + (4 === Dt(e).getUTCDay()), t, 2)
          );
        }
        function xo(e) {
          return e.getUTCDay();
        }
        function bo(e, t) {
          return gr(Ct.count(Dt(e) - 1, e), t, 2);
        }
        function wo(e, t) {
          return gr(e.getUTCFullYear() % 100, t, 2);
        }
        function Mo(e, t) {
          return gr((e = yo(e)).getUTCFullYear() % 100, t, 2);
        }
        function ko(e, t) {
          return gr(e.getUTCFullYear() % 1e4, t, 4);
        }
        function Oo(e, t) {
          var n = e.getUTCDay();
          return gr(
            (e = n >= 4 || 0 === n ? Pt(e) : Pt.ceil(e)).getUTCFullYear() % 1e4,
            t,
            4
          );
        }
        function No() {
          return "+0000";
        }
        function To() {
          return "%";
        }
        function So(e) {
          return +e;
        }
        function Eo(e) {
          return Math.floor(+e / 1e3);
        }
        function Ao(e, t) {
          var n,
            r = 0,
            o = (e = e.slice()).length - 1,
            a = e[r],
            i = e[o];
          return (
            i < a && ((n = r), (r = o), (o = n), (n = a), (a = i), (i = n)),
            (e[r] = t.floor(a)),
            (e[o] = t.ceil(i)),
            e
          );
        }
        function Co(e) {
          return new Date(e);
        }
        function jo(e) {
          return e instanceof Date ? +e : +new Date(+e);
        }
        function Ro(e, t, n, r, o, a, i, u, l, s) {
          var c = Sn(),
            f = c.invert,
            h = c.domain,
            d = s(".%L"),
            p = s(":%S"),
            v = s("%I:%M"),
            g = s("%I %p"),
            m = s("%a %d"),
            y = s("%b %d"),
            _ = s("%B"),
            x = s("%Y");
          function b(e) {
            return (
              l(e) < e
                ? d
                : u(e) < e
                ? p
                : i(e) < e
                ? v
                : a(e) < e
                ? g
                : r(e) < e
                ? o(e) < e
                  ? m
                  : y
                : n(e) < e
                ? _
                : x
            )(e);
          }
          return (
            (c.invert = function (e) {
              return new Date(f(e));
            }),
            (c.domain = function (e) {
              return arguments.length ? h(Array.from(e, jo)) : h().map(Co);
            }),
            (c.ticks = function (t) {
              var n = h();
              return e(n[0], n[n.length - 1], null == t ? 10 : t);
            }),
            (c.tickFormat = function (e, t) {
              return null == t ? b : s(t);
            }),
            (c.nice = function (e) {
              var n = h();
              return (
                (e && "function" == typeof e.range) ||
                  (e = t(n[0], n[n.length - 1], null == e ? 10 : e)),
                e ? h(Ao(n, e)) : c
              );
            }),
            (c.copy = function () {
              return Nn(c, Ro(e, t, n, r, o, a, i, u, l, s));
            }),
            c
          );
        }
        !(function (e) {
          (sr = (function (e) {
            var t = e.dateTime,
              n = e.date,
              r = e.time,
              o = e.periods,
              a = e.days,
              i = e.shortDays,
              u = e.months,
              l = e.shortMonths,
              s = yr(o),
              c = _r(o),
              f = yr(a),
              h = _r(a),
              d = yr(i),
              p = _r(i),
              v = yr(u),
              g = _r(u),
              m = yr(l),
              y = _r(l),
              _ = {
                a: function (e) {
                  return i[e.getDay()];
                },
                A: function (e) {
                  return a[e.getDay()];
                },
                b: function (e) {
                  return l[e.getMonth()];
                },
                B: function (e) {
                  return u[e.getMonth()];
                },
                c: null,
                d: Hr,
                e: Hr,
                f: Br,
                g: no,
                G: oo,
                H: zr,
                I: Wr,
                j: Gr,
                L: $r,
                m: qr,
                M: Vr,
                p: function (e) {
                  return o[+(e.getHours() >= 12)];
                },
                q: function (e) {
                  return 1 + ~~(e.getMonth() / 3);
                },
                Q: So,
                s: Eo,
                S: Yr,
                u: Xr,
                U: Zr,
                V: Jr,
                w: Kr,
                W: eo,
                x: null,
                X: null,
                y: to,
                Y: ro,
                Z: ao,
                "%": To,
              },
              x = {
                a: function (e) {
                  return i[e.getUTCDay()];
                },
                A: function (e) {
                  return a[e.getUTCDay()];
                },
                b: function (e) {
                  return l[e.getUTCMonth()];
                },
                B: function (e) {
                  return u[e.getUTCMonth()];
                },
                c: null,
                d: io,
                e: io,
                f: fo,
                g: Mo,
                G: Oo,
                H: uo,
                I: lo,
                j: so,
                L: co,
                m: ho,
                M: po,
                p: function (e) {
                  return o[+(e.getUTCHours() >= 12)];
                },
                q: function (e) {
                  return 1 + ~~(e.getUTCMonth() / 3);
                },
                Q: So,
                s: Eo,
                S: vo,
                u: go,
                U: mo,
                V: _o,
                w: xo,
                W: bo,
                x: null,
                X: null,
                y: wo,
                Y: ko,
                Z: No,
                "%": To,
              },
              b = {
                a: function (e, t, n) {
                  var r = d.exec(t.slice(n));
                  return r
                    ? ((e.w = p.get(r[0].toLowerCase())), n + r[0].length)
                    : -1;
                },
                A: function (e, t, n) {
                  var r = f.exec(t.slice(n));
                  return r
                    ? ((e.w = h.get(r[0].toLowerCase())), n + r[0].length)
                    : -1;
                },
                b: function (e, t, n) {
                  var r = m.exec(t.slice(n));
                  return r
                    ? ((e.m = y.get(r[0].toLowerCase())), n + r[0].length)
                    : -1;
                },
                B: function (e, t, n) {
                  var r = v.exec(t.slice(n));
                  return r
                    ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length)
                    : -1;
                },
                c: function (e, n, r) {
                  return k(e, t, n, r);
                },
                d: Ar,
                e: Ar,
                f: Ir,
                g: Nr,
                G: Or,
                H: jr,
                I: jr,
                j: Cr,
                L: Fr,
                m: Er,
                M: Rr,
                p: function (e, t, n) {
                  var r = s.exec(t.slice(n));
                  return r
                    ? ((e.p = c.get(r[0].toLowerCase())), n + r[0].length)
                    : -1;
                },
                q: Sr,
                Q: Dr,
                s: Ur,
                S: Pr,
                u: br,
                U: wr,
                V: Mr,
                w: xr,
                W: kr,
                x: function (e, t, r) {
                  return k(e, n, t, r);
                },
                X: function (e, t, n) {
                  return k(e, r, t, n);
                },
                y: Nr,
                Y: Or,
                Z: Tr,
                "%": Lr,
              };
            function w(e, t) {
              return function (n) {
                var r,
                  o,
                  a,
                  i = [],
                  u = -1,
                  l = 0,
                  s = e.length;
                for (n instanceof Date || (n = new Date(+n)); ++u < s; )
                  37 === e.charCodeAt(u) &&
                    (i.push(e.slice(l, u)),
                    null != (o = hr[(r = e.charAt(++u))])
                      ? (r = e.charAt(++u))
                      : (o = "e" === r ? " " : "0"),
                    (a = t[r]) && (r = a(n, o)),
                    i.push(r),
                    (l = u + 1));
                return i.push(e.slice(l, u)), i.join("");
              };
            }
            function M(e, t) {
              return function (n) {
                var r,
                  o,
                  a = lr(1900, void 0, 1);
                if (k(a, e, (n += ""), 0) != n.length) return null;
                if ("Q" in a) return new Date(a.Q);
                if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
                if (
                  (t && !("Z" in a) && (a.Z = 0),
                  "p" in a && (a.H = (a.H % 12) + 12 * a.p),
                  void 0 === a.m && (a.m = "q" in a ? a.q : 0),
                  "V" in a)
                ) {
                  if (a.V < 1 || a.V > 53) return null;
                  "w" in a || (a.w = 1),
                    "Z" in a
                      ? ((o = (r = ur(lr(a.y, 0, 1))).getUTCDay()),
                        (r = o > 4 || 0 === o ? Ct.ceil(r) : Ct(r)),
                        (r = wt.offset(r, 7 * (a.V - 1))),
                        (a.y = r.getUTCFullYear()),
                        (a.m = r.getUTCMonth()),
                        (a.d = r.getUTCDate() + ((a.w + 6) % 7)))
                      : ((o = (r = ir(lr(a.y, 0, 1))).getDay()),
                        (r = o > 4 || 0 === o ? dt.ceil(r) : dt(r)),
                        (r = nt.offset(r, 7 * (a.V - 1))),
                        (a.y = r.getFullYear()),
                        (a.m = r.getMonth()),
                        (a.d = r.getDate() + ((a.w + 6) % 7)));
                } else
                  ("W" in a || "U" in a) &&
                    ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0),
                    (o =
                      "Z" in a
                        ? ur(lr(a.y, 0, 1)).getUTCDay()
                        : ir(lr(a.y, 0, 1)).getDay()),
                    (a.m = 0),
                    (a.d =
                      "W" in a
                        ? ((a.w + 6) % 7) + 7 * a.W - ((o + 5) % 7)
                        : a.w + 7 * a.U - ((o + 6) % 7)));
                return "Z" in a
                  ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), ur(a))
                  : ir(a);
              };
            }
            function k(e, t, n, r) {
              for (var o, a, i = 0, u = t.length, l = n.length; i < u; ) {
                if (r >= l) return -1;
                if (37 === (o = t.charCodeAt(i++))) {
                  if (
                    ((o = t.charAt(i++)),
                    !(a = b[o in hr ? t.charAt(i++) : o]) ||
                      (r = a(e, n, r)) < 0)
                  )
                    return -1;
                } else if (o != n.charCodeAt(r++)) return -1;
              }
              return r;
            }
            return (
              (_.x = w(n, _)),
              (_.X = w(r, _)),
              (_.c = w(t, _)),
              (x.x = w(n, x)),
              (x.X = w(r, x)),
              (x.c = w(t, x)),
              {
                format: function (e) {
                  var t = w((e += ""), _);
                  return (
                    (t.toString = function () {
                      return e;
                    }),
                    t
                  );
                },
                parse: function (e) {
                  var t = M((e += ""), !1);
                  return (
                    (t.toString = function () {
                      return e;
                    }),
                    t
                  );
                },
                utcFormat: function (e) {
                  var t = w((e += ""), x);
                  return (
                    (t.toString = function () {
                      return e;
                    }),
                    t
                  );
                },
                utcParse: function (e) {
                  var t = M((e += ""), !0);
                  return (
                    (t.toString = function () {
                      return e;
                    }),
                    t
                  );
                },
              }
            );
          })(e)),
            (cr = sr.format),
            sr.parse,
            (fr = sr.utcFormat),
            sr.utcParse;
        })({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        });
        var Po = Vt(
          "domain",
          "range",
          "reverse",
          "clamp",
          "interpolate",
          "nice",
          "round"
        );
        function Fo(e) {
          return Po(
            (function () {
              return r.apply(
                Ro(or, ar, xt, lt, ht, nt, ot, it, ct, cr).domain([
                  new Date(2e3, 0, 1),
                  new Date(2e3, 0, 2),
                ]),
                arguments
              );
            })(),
            e
          );
        }
        var Io = Vt(
          "domain",
          "range",
          "reverse",
          "clamp",
          "interpolate",
          "nice",
          "round"
        );
        function Lo(e) {
          return Io(
            (function () {
              return r.apply(
                Ro(nr, rr, Dt, St, At, wt, kt, Nt, ct, fr).domain([
                  Date.UTC(2e3, 0, 1),
                  Date.UTC(2e3, 0, 2),
                ]),
                arguments
              );
            })(),
            e
          );
        }
        function Do(e) {
          return Math.log(e);
        }
        function Uo(e) {
          return Math.exp(e);
        }
        function Ho(e) {
          return -Math.log(-e);
        }
        function zo(e) {
          return -Math.exp(-e);
        }
        function Wo(e) {
          return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
        }
        function Go(e) {
          return (t, n) => -e(-t, n);
        }
        function $o(e) {
          const t = e(Do, Uo),
            n = t.domain;
          let r,
            o,
            a = 10;
          function i() {
            return (
              (r = (function (e) {
                return e === Math.E
                  ? Math.log
                  : (10 === e && Math.log10) ||
                      (2 === e && Math.log2) ||
                      ((e = Math.log(e)), (t) => Math.log(t) / e);
              })(a)),
              (o = (function (e) {
                return 10 === e
                  ? Wo
                  : e === Math.E
                  ? Math.exp
                  : (t) => Math.pow(e, t);
              })(a)),
              n()[0] < 0 ? ((r = Go(r)), (o = Go(o)), e(Ho, zo)) : e(Do, Uo),
              t
            );
          }
          return (
            (t.base = function (e) {
              return arguments.length ? ((a = +e), i()) : a;
            }),
            (t.domain = function (e) {
              return arguments.length ? (n(e), i()) : n();
            }),
            (t.ticks = (e) => {
              const t = n();
              let i = t[0],
                u = t[t.length - 1];
              const l = u < i;
              l && ([i, u] = [u, i]);
              let s,
                c,
                f = r(i),
                h = r(u);
              const d = null == e ? 10 : +e;
              let p = [];
              if (!(a % 1) && h - f < d) {
                if (((f = Math.floor(f)), (h = Math.ceil(h)), i > 0)) {
                  for (; f <= h; ++f)
                    for (s = 1; s < a; ++s)
                      if (((c = f < 0 ? s / o(-f) : s * o(f)), !(c < i))) {
                        if (c > u) break;
                        p.push(c);
                      }
                } else
                  for (; f <= h; ++f)
                    for (s = a - 1; s >= 1; --s)
                      if (((c = f > 0 ? s / o(-f) : s * o(f)), !(c < i))) {
                        if (c > u) break;
                        p.push(c);
                      }
                2 * p.length < d && (p = tn(i, u, d));
              } else p = tn(f, h, Math.min(h - f, d)).map(o);
              return l ? p.reverse() : p;
            }),
            (t.tickFormat = (e, n) => {
              if (
                (null == e && (e = 10),
                null == n && (n = 10 === a ? "s" : ","),
                "function" != typeof n &&
                  (a % 1 || null != (n = Cn(n)).precision || (n.trim = !0),
                  (n = Un(n))),
                e === 1 / 0)
              )
                return n;
              const i = Math.max(1, (a * e) / t.ticks().length);
              return (e) => {
                let t = e / o(Math.round(r(e)));
                return t * a < a - 0.5 && (t *= a), t <= i ? n(e) : "";
              };
            }),
            (t.nice = () =>
              n(
                Ao(n(), {
                  floor: (e) => o(Math.floor(r(e))),
                  ceil: (e) => o(Math.ceil(r(e))),
                })
              )),
            t
          );
        }
        function Bo() {
          const e = $o(Tn()).domain([1, 10]);
          return (
            (e.copy = () => Nn(e, Bo()).base(e.base())),
            r.apply(e, arguments),
            e
          );
        }
        var qo = Vt(
          "domain",
          "range",
          "reverse",
          "base",
          "clamp",
          "interpolate",
          "nice",
          "round"
        );
        function Vo(e) {
          return qo(Bo(), e);
        }
        function Yo(e) {
          return function (t) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
          };
        }
        function Xo(e) {
          return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
        }
        function Zo(e) {
          return e < 0 ? -e * e : e * e;
        }
        function Qo(e) {
          var t = e(wn, wn),
            n = 1;
          return (
            (t.exponent = function (t) {
              return arguments.length
                ? 1 === (n = +t)
                  ? e(wn, wn)
                  : 0.5 === n
                  ? e(Xo, Zo)
                  : e(Yo(n), Yo(1 / n))
                : n;
            }),
            Bn(t)
          );
        }
        function Jo() {
          var e = Qo(Tn());
          return (
            (e.copy = function () {
              return Nn(e, Jo()).exponent(e.exponent());
            }),
            r.apply(e, arguments),
            e
          );
        }
        var Ko = Vt(
          "domain",
          "range",
          "reverse",
          "clamp",
          "exponent",
          "interpolate",
          "nice",
          "round",
          "zero"
        );
        function ea(e) {
          return Ko(Jo(), e);
        }
        var ta = Vt("domain", "range", "reverse", "unknown");
        function na(e) {
          return ta(f(), e);
        }
        function ra() {
          var e,
            t = 0,
            n = 1,
            o = 1,
            a = [0.5],
            i = [0, 1];
          function u(t) {
            return null != t && t <= t ? i[cn(a, t, 0, o)] : e;
          }
          function l() {
            var e = -1;
            for (a = new Array(o); ++e < o; )
              a[e] = ((e + 1) * n - (e - o) * t) / (o + 1);
            return u;
          }
          return (
            (u.domain = function (e) {
              return arguments.length
                ? (([t, n] = e), (t = +t), (n = +n), l())
                : [t, n];
            }),
            (u.range = function (e) {
              return arguments.length
                ? ((o = (i = Array.from(e)).length - 1), l())
                : i.slice();
            }),
            (u.invertExtent = function (e) {
              var r = i.indexOf(e);
              return r < 0
                ? [NaN, NaN]
                : r < 1
                ? [t, a[0]]
                : r >= o
                ? [a[o - 1], n]
                : [a[r - 1], a[r]];
            }),
            (u.unknown = function (t) {
              return arguments.length ? ((e = t), u) : u;
            }),
            (u.thresholds = function () {
              return a.slice();
            }),
            (u.copy = function () {
              return ra().domain([t, n]).range(i).unknown(e);
            }),
            r.apply(Bn(u), arguments)
          );
        }
        var oa = Vt("domain", "range", "reverse", "nice", "zero");
        function aa(e) {
          return oa(ra(), e);
        }
        function ia(e, t, n = un) {
          if ((r = e.length)) {
            if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
            if (t >= 1) return +n(e[r - 1], r - 1, e);
            var r,
              o = (r - 1) * t,
              a = Math.floor(o),
              i = +n(e[a], a, e);
            return i + (+n(e[a + 1], a + 1, e) - i) * (o - a);
          }
        }
        function ua() {
          var e,
            t = [],
            n = [],
            o = [];
          function a() {
            var e = 0,
              r = Math.max(1, n.length);
            for (o = new Array(r - 1); ++e < r; ) o[e - 1] = ia(t, e / r);
            return i;
          }
          function i(t) {
            return null == t || isNaN((t = +t)) ? e : n[cn(o, t)];
          }
          return (
            (i.invertExtent = function (e) {
              var r = n.indexOf(e);
              return r < 0
                ? [NaN, NaN]
                : [
                    r > 0 ? o[r - 1] : t[0],
                    r < o.length ? o[r] : t[t.length - 1],
                  ];
            }),
            (i.domain = function (e) {
              if (!arguments.length) return t.slice();
              t = [];
              for (let n of e) null == n || isNaN((n = +n)) || t.push(n);
              return t.sort(on), a();
            }),
            (i.range = function (e) {
              return arguments.length ? ((n = Array.from(e)), a()) : n.slice();
            }),
            (i.unknown = function (t) {
              return arguments.length ? ((e = t), i) : e;
            }),
            (i.quantiles = function () {
              return o.slice();
            }),
            (i.copy = function () {
              return ua().domain(t).range(n).unknown(e);
            }),
            r.apply(i, arguments)
          );
        }
        var la = Vt("domain", "range", "reverse");
        function sa(e) {
          return la(ua(), e);
        }
        function ca(e) {
          return function (t) {
            return Math.sign(t) * Math.log1p(Math.abs(t / e));
          };
        }
        function fa(e) {
          return function (t) {
            return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
          };
        }
        function ha() {
          var e = (function (e) {
            var t = 1,
              n = e(ca(t), fa(t));
            return (
              (n.constant = function (n) {
                return arguments.length ? e(ca((t = +n)), fa(t)) : t;
              }),
              Bn(n)
            );
          })(Tn());
          return (
            (e.copy = function () {
              return Nn(e, ha()).constant(e.constant());
            }),
            r.apply(e, arguments)
          );
        }
        var da = Vt(
          "domain",
          "range",
          "reverse",
          "clamp",
          "constant",
          "nice",
          "zero",
          "round"
        );
        function pa(e) {
          return da(ha(), e);
        }
        function va() {
          var e,
            t = [0.5],
            n = [0, 1],
            o = 1;
          function a(r) {
            return null != r && r <= r ? n[cn(t, r, 0, o)] : e;
          }
          return (
            (a.domain = function (e) {
              return arguments.length
                ? ((t = Array.from(e)),
                  (o = Math.min(t.length, n.length - 1)),
                  a)
                : t.slice();
            }),
            (a.range = function (e) {
              return arguments.length
                ? ((n = Array.from(e)),
                  (o = Math.min(t.length, n.length - 1)),
                  a)
                : n.slice();
            }),
            (a.invertExtent = function (e) {
              var r = n.indexOf(e);
              return [t[r - 1], t[r]];
            }),
            (a.unknown = function (t) {
              return arguments.length ? ((e = t), a) : e;
            }),
            (a.copy = function () {
              return va().domain(t).range(n).unknown(e);
            }),
            r.apply(a, arguments)
          );
        }
        var ga = Vt("domain", "range", "reverse");
        function ma(e) {
          return ga(va(), e);
        }
        var ya = Vt(
          "domain",
          "range",
          "reverse",
          "clamp",
          "interpolate",
          "nice",
          "round",
          "zero"
        );
        function _a(e) {
          return ya(
            (function () {
              return Jo.apply(null, arguments).exponent(0.5);
            })(),
            e
          );
        }
        const xa = function (e) {
          if (void 0 !== e && "type" in e)
            switch (e.type) {
              case "linear":
                return Yn(e);
              case "log":
                return Vo(e);
              case "pow":
                return ea(e);
              case "sqrt":
                return _a(e);
              case "symlog":
                return pa(e);
              case "time":
                return Fo(e);
              case "utc":
                return Lo(e);
              case "quantile":
                return sa(e);
              case "quantize":
                return aa(e);
              case "threshold":
                return ma(e);
              case "ordinal":
                return na(e);
              case "point":
                return Qt(e);
              case "band":
                return Xt(e);
            }
          return Yn(e);
        };
        var ba = Vt.apply(void 0, Bt);
        const wa = function (e, t) {
          return ba(e.copy(), t);
        };
        function Ma(e) {
          return "paddingInner" in e
            ? "band"
            : "padding" in e
            ? "point"
            : "quantiles" in e
            ? "quantile"
            : "base" in e
            ? "log"
            : "exponent" in e
            ? 0.5 === e.exponent()
              ? "sqrt"
              : "pow"
            : "constant" in e
            ? "symlog"
            : "clamp" in e
            ? e.ticks()[0] instanceof Date
              ? zt(e)
                ? "utc"
                : "time"
              : "linear"
            : "nice" in e
            ? "quantize"
            : "invertExtent" in e
            ? "threshold"
            : "ordinal";
        }
        function ka(e) {
          if (
            ("function" == typeof e || ("object" == typeof e && e)) &&
            "valueOf" in e
          ) {
            var t = e.valueOf();
            if ("number" == typeof t) return t;
          }
          return e;
        }
        function Oa(e, t) {
          var n = e;
          return "ticks" in n
            ? n.ticks(t)
            : n.domain().filter(function (e, n, r) {
                return (
                  null == t ||
                  r.length <= t ||
                  n % Math.round((r.length - 1) / t) == 0
                );
              });
        }
        function Na(e) {
          return null == e ? void 0 : e.toString();
        }
        var Ta = new Set(["linear", "pow", "quantize", "sqrt", "symlog"]);
        function Sa(e) {
          return Ta.has(e.type);
        }
      },
      9177: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Arc: () => de,
            Area: () => Ee,
            AreaClosed: () => je,
            AreaStack: () => De,
            Bar: () => ze,
            BarGroup: () => Ye,
            BarGroupHorizontal: () => Qe,
            BarRounded: () => $e,
            BarStack: () => it,
            BarStackHorizontal: () => st,
            Circle: () => bn,
            Line: () => xe,
            LinePath: () => Me,
            LineRadial: () => Ne,
            LinkHorizontal: () => bt,
            LinkHorizontalCurve: () => Rt,
            LinkHorizontalLine: () => Bt,
            LinkHorizontalStep: () => rn,
            LinkRadial: () => Et,
            LinkRadialCurve: () => zt,
            LinkRadialLine: () => Kt,
            LinkRadialStep: () => hn,
            LinkVertical: () => Ot,
            LinkVerticalCurve: () => Lt,
            LinkVerticalLine: () => Xt,
            LinkVerticalStep: () => ln,
            Pie: () => me,
            Polygon: () => yn,
            STACK_OFFSETS: () => ne,
            STACK_OFFSET_NAMES: () => re,
            STACK_ORDERS: () => K,
            STACK_ORDER_NAMES: () => ee,
            SplitLinePath: () => Cn,
            Stack: () => Fe,
            arc: () => ae,
            area: () => ie,
            degreesToRadians: () => ct,
            getPoint: () => gn,
            getPoints: () => mn,
            line: () => ue,
            pathHorizontalCurve: () => jt,
            pathHorizontalDiagonal: () => xt,
            pathHorizontalLine: () => $t,
            pathHorizontalStep: () => nn,
            pathRadialCurve: () => Ht,
            pathRadialDiagonal: () => St,
            pathRadialLine: () => Jt,
            pathRadialStep: () => fn,
            pathVerticalCurve: () => It,
            pathVerticalDiagonal: () => kt,
            pathVerticalLine: () => Yt,
            pathVerticalStep: () => un,
            pie: () => le,
            radialLine: () => se,
            stack: () => ce,
            stackOffset: () => oe,
            stackOrder: () => te,
          });
        var r = n(9748),
          o = n(4184),
          a = n.n(o),
          i = Math.PI,
          u = 2 * i,
          l = 1e-6,
          s = u - l;
        function c() {
          (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
        }
        function f() {
          return new c();
        }
        c.prototype = f.prototype = {
          constructor: c,
          moveTo: function (e, t) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +e) +
              "," +
              (this._y0 = this._y1 = +t);
          },
          closePath: function () {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
          },
          lineTo: function (e, t) {
            this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
          },
          quadraticCurveTo: function (e, t, n, r) {
            this._ +=
              "Q" +
              +e +
              "," +
              +t +
              "," +
              (this._x1 = +n) +
              "," +
              (this._y1 = +r);
          },
          bezierCurveTo: function (e, t, n, r, o, a) {
            this._ +=
              "C" +
              +e +
              "," +
              +t +
              "," +
              +n +
              "," +
              +r +
              "," +
              (this._x1 = +o) +
              "," +
              (this._y1 = +a);
          },
          arcTo: function (e, t, n, r, o) {
            (e = +e), (t = +t), (n = +n), (r = +r), (o = +o);
            var a = this._x1,
              u = this._y1,
              s = n - e,
              c = r - t,
              f = a - e,
              h = u - t,
              d = f * f + h * h;
            if (o < 0) throw new Error("negative radius: " + o);
            if (null === this._x1)
              this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
            else if (d > l)
              if (Math.abs(h * s - c * f) > l && o) {
                var p = n - a,
                  v = r - u,
                  g = s * s + c * c,
                  m = p * p + v * v,
                  y = Math.sqrt(g),
                  _ = Math.sqrt(d),
                  x =
                    o *
                    Math.tan((i - Math.acos((g + d - m) / (2 * y * _))) / 2),
                  b = x / _,
                  w = x / y;
                Math.abs(b - 1) > l &&
                  (this._ += "L" + (e + b * f) + "," + (t + b * h)),
                  (this._ +=
                    "A" +
                    o +
                    "," +
                    o +
                    ",0,0," +
                    +(h * p > f * v) +
                    "," +
                    (this._x1 = e + w * s) +
                    "," +
                    (this._y1 = t + w * c));
              } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
            else;
          },
          arc: function (e, t, n, r, o, a) {
            (e = +e), (t = +t), (a = !!a);
            var c = (n = +n) * Math.cos(r),
              f = n * Math.sin(r),
              h = e + c,
              d = t + f,
              p = 1 ^ a,
              v = a ? r - o : o - r;
            if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1
              ? (this._ += "M" + h + "," + d)
              : (Math.abs(this._x1 - h) > l || Math.abs(this._y1 - d) > l) &&
                (this._ += "L" + h + "," + d),
              n &&
                (v < 0 && (v = (v % u) + u),
                v > s
                  ? (this._ +=
                      "A" +
                      n +
                      "," +
                      n +
                      ",0,1," +
                      p +
                      "," +
                      (e - c) +
                      "," +
                      (t - f) +
                      "A" +
                      n +
                      "," +
                      n +
                      ",0,1," +
                      p +
                      "," +
                      (this._x1 = h) +
                      "," +
                      (this._y1 = d))
                  : v > l &&
                    (this._ +=
                      "A" +
                      n +
                      "," +
                      n +
                      ",0," +
                      +(v >= i) +
                      "," +
                      p +
                      "," +
                      (this._x1 = e + n * Math.cos(o)) +
                      "," +
                      (this._y1 = t + n * Math.sin(o))));
          },
          rect: function (e, t, n, r) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +e) +
              "," +
              (this._y0 = this._y1 = +t) +
              "h" +
              +n +
              "v" +
              +r +
              "h" +
              -n +
              "Z";
          },
          toString: function () {
            return this._;
          },
        };
        const h = f;
        function d(e) {
          return function () {
            return e;
          };
        }
        var p = Math.abs,
          v = Math.atan2,
          g = Math.cos,
          m = Math.max,
          y = Math.min,
          _ = Math.sin,
          x = Math.sqrt,
          b = 1e-12,
          w = Math.PI,
          M = w / 2,
          k = 2 * w;
        function O(e) {
          return e >= 1 ? M : e <= -1 ? -M : Math.asin(e);
        }
        function N(e) {
          return e.innerRadius;
        }
        function T(e) {
          return e.outerRadius;
        }
        function S(e) {
          return e.startAngle;
        }
        function E(e) {
          return e.endAngle;
        }
        function A(e) {
          return e && e.padAngle;
        }
        function C(e, t, n, r, o, a, i) {
          var u = e - n,
            l = t - r,
            s = (i ? a : -a) / x(u * u + l * l),
            c = s * l,
            f = -s * u,
            h = e + c,
            d = t + f,
            p = n + c,
            v = r + f,
            g = (h + p) / 2,
            y = (d + v) / 2,
            _ = p - h,
            b = v - d,
            w = _ * _ + b * b,
            M = o - a,
            k = h * v - p * d,
            O = (b < 0 ? -1 : 1) * x(m(0, M * M * w - k * k)),
            N = (k * b - _ * O) / w,
            T = (-k * _ - b * O) / w,
            S = (k * b + _ * O) / w,
            E = (-k * _ + b * O) / w,
            A = N - g,
            C = T - y,
            j = S - g,
            R = E - y;
          return (
            A * A + C * C > j * j + R * R && ((N = S), (T = E)),
            {
              cx: N,
              cy: T,
              x01: -c,
              y01: -f,
              x11: N * (o / M - 1),
              y11: T * (o / M - 1),
            }
          );
        }
        function j() {
          var e = N,
            t = T,
            n = d(0),
            r = null,
            o = S,
            a = E,
            i = A,
            u = null;
          function l() {
            var l,
              s,
              c,
              f = +e.apply(this, arguments),
              d = +t.apply(this, arguments),
              m = o.apply(this, arguments) - M,
              N = a.apply(this, arguments) - M,
              T = p(N - m),
              S = N > m;
            if (
              (u || (u = l = h()), d < f && ((s = d), (d = f), (f = s)), d > b)
            )
              if (T > k - b)
                u.moveTo(d * g(m), d * _(m)),
                  u.arc(0, 0, d, m, N, !S),
                  f > b &&
                    (u.moveTo(f * g(N), f * _(N)), u.arc(0, 0, f, N, m, S));
              else {
                var E,
                  A,
                  j = m,
                  R = N,
                  P = m,
                  F = N,
                  I = T,
                  L = T,
                  D = i.apply(this, arguments) / 2,
                  U =
                    D > b && (r ? +r.apply(this, arguments) : x(f * f + d * d)),
                  H = y(p(d - f) / 2, +n.apply(this, arguments)),
                  z = H,
                  W = H;
                if (U > b) {
                  var G = O((U / f) * _(D)),
                    $ = O((U / d) * _(D));
                  (I -= 2 * G) > b
                    ? ((P += G *= S ? 1 : -1), (F -= G))
                    : ((I = 0), (P = F = (m + N) / 2)),
                    (L -= 2 * $) > b
                      ? ((j += $ *= S ? 1 : -1), (R -= $))
                      : ((L = 0), (j = R = (m + N) / 2));
                }
                var B = d * g(j),
                  q = d * _(j),
                  V = f * g(F),
                  Y = f * _(F);
                if (H > b) {
                  var X,
                    Z = d * g(R),
                    Q = d * _(R),
                    J = f * g(P),
                    K = f * _(P);
                  if (
                    T < w &&
                    (X = (function (e, t, n, r, o, a, i, u) {
                      var l = n - e,
                        s = r - t,
                        c = i - o,
                        f = u - a,
                        h = f * l - c * s;
                      if (!(h * h < b))
                        return [
                          e + (h = (c * (t - a) - f * (e - o)) / h) * l,
                          t + h * s,
                        ];
                    })(B, q, J, K, Z, Q, V, Y))
                  ) {
                    var ee = B - X[0],
                      te = q - X[1],
                      ne = Z - X[0],
                      re = Q - X[1],
                      oe =
                        1 /
                        _(
                          ((c =
                            (ee * ne + te * re) /
                            (x(ee * ee + te * te) * x(ne * ne + re * re))) > 1
                            ? 0
                            : c < -1
                            ? w
                            : Math.acos(c)) / 2
                        ),
                      ae = x(X[0] * X[0] + X[1] * X[1]);
                    (z = y(H, (f - ae) / (oe - 1))),
                      (W = y(H, (d - ae) / (oe + 1)));
                  }
                }
                L > b
                  ? W > b
                    ? ((E = C(J, K, B, q, d, W, S)),
                      (A = C(Z, Q, V, Y, d, W, S)),
                      u.moveTo(E.cx + E.x01, E.cy + E.y01),
                      W < H
                        ? u.arc(
                            E.cx,
                            E.cy,
                            W,
                            v(E.y01, E.x01),
                            v(A.y01, A.x01),
                            !S
                          )
                        : (u.arc(
                            E.cx,
                            E.cy,
                            W,
                            v(E.y01, E.x01),
                            v(E.y11, E.x11),
                            !S
                          ),
                          u.arc(
                            0,
                            0,
                            d,
                            v(E.cy + E.y11, E.cx + E.x11),
                            v(A.cy + A.y11, A.cx + A.x11),
                            !S
                          ),
                          u.arc(
                            A.cx,
                            A.cy,
                            W,
                            v(A.y11, A.x11),
                            v(A.y01, A.x01),
                            !S
                          )))
                    : (u.moveTo(B, q), u.arc(0, 0, d, j, R, !S))
                  : u.moveTo(B, q),
                  f > b && I > b
                    ? z > b
                      ? ((E = C(V, Y, Z, Q, f, -z, S)),
                        (A = C(B, q, J, K, f, -z, S)),
                        u.lineTo(E.cx + E.x01, E.cy + E.y01),
                        z < H
                          ? u.arc(
                              E.cx,
                              E.cy,
                              z,
                              v(E.y01, E.x01),
                              v(A.y01, A.x01),
                              !S
                            )
                          : (u.arc(
                              E.cx,
                              E.cy,
                              z,
                              v(E.y01, E.x01),
                              v(E.y11, E.x11),
                              !S
                            ),
                            u.arc(
                              0,
                              0,
                              f,
                              v(E.cy + E.y11, E.cx + E.x11),
                              v(A.cy + A.y11, A.cx + A.x11),
                              S
                            ),
                            u.arc(
                              A.cx,
                              A.cy,
                              z,
                              v(A.y11, A.x11),
                              v(A.y01, A.x01),
                              !S
                            )))
                      : u.arc(0, 0, f, F, P, S)
                    : u.lineTo(V, Y);
              }
            else u.moveTo(0, 0);
            if ((u.closePath(), l)) return (u = null), l + "" || null;
          }
          return (
            (l.centroid = function () {
              var n =
                  (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
                r =
                  (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 -
                  w / 2;
              return [g(r) * n, _(r) * n];
            }),
            (l.innerRadius = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : d(+t)), l)
                : e;
            }),
            (l.outerRadius = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : d(+e)), l)
                : t;
            }),
            (l.cornerRadius = function (e) {
              return arguments.length
                ? ((n = "function" == typeof e ? e : d(+e)), l)
                : n;
            }),
            (l.padRadius = function (e) {
              return arguments.length
                ? ((r = null == e ? null : "function" == typeof e ? e : d(+e)),
                  l)
                : r;
            }),
            (l.startAngle = function (e) {
              return arguments.length
                ? ((o = "function" == typeof e ? e : d(+e)), l)
                : o;
            }),
            (l.endAngle = function (e) {
              return arguments.length
                ? ((a = "function" == typeof e ? e : d(+e)), l)
                : a;
            }),
            (l.padAngle = function (e) {
              return arguments.length
                ? ((i = "function" == typeof e ? e : d(+e)), l)
                : i;
            }),
            (l.context = function (e) {
              return arguments.length ? ((u = null == e ? null : e), l) : u;
            }),
            l
          );
        }
        function R(e) {
          this._context = e;
        }
        function P(e) {
          return new R(e);
        }
        function F(e) {
          return e[0];
        }
        function I(e) {
          return e[1];
        }
        function L() {
          var e = F,
            t = I,
            n = d(!0),
            r = null,
            o = P,
            a = null;
          function i(i) {
            var u,
              l,
              s,
              c = i.length,
              f = !1;
            for (null == r && (a = o((s = h()))), u = 0; u <= c; ++u)
              !(u < c && n((l = i[u]), u, i)) === f &&
                ((f = !f) ? a.lineStart() : a.lineEnd()),
                f && a.point(+e(l, u, i), +t(l, u, i));
            if (s) return (a = null), s + "" || null;
          }
          return (
            (i.x = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : d(+t)), i)
                : e;
            }),
            (i.y = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : d(+e)), i)
                : t;
            }),
            (i.defined = function (e) {
              return arguments.length
                ? ((n = "function" == typeof e ? e : d(!!e)), i)
                : n;
            }),
            (i.curve = function (e) {
              return arguments.length
                ? ((o = e), null != r && (a = o(r)), i)
                : o;
            }),
            (i.context = function (e) {
              return arguments.length
                ? (null == e ? (r = a = null) : (a = o((r = e))), i)
                : r;
            }),
            i
          );
        }
        function D(e, t) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        }
        function U(e) {
          return e;
        }
        R.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(e, t);
            }
          },
        };
        var H = W(P);
        function z(e) {
          this._curve = e;
        }
        function W(e) {
          function t(t) {
            return new z(e(t));
          }
          return (t._curve = e), t;
        }
        function G() {
          return (
            (e = L().curve(H)),
            (t = e.curve),
            (e.angle = e.x),
            delete e.x,
            (e.radius = e.y),
            delete e.y,
            (e.curve = function (e) {
              return arguments.length ? t(W(e)) : t()._curve;
            }),
            e
          );
          var e, t;
        }
        z.prototype = {
          areaStart: function () {
            this._curve.areaStart();
          },
          areaEnd: function () {
            this._curve.areaEnd();
          },
          lineStart: function () {
            this._curve.lineStart();
          },
          lineEnd: function () {
            this._curve.lineEnd();
          },
          point: function (e, t) {
            this._curve.point(t * Math.sin(e), t * -Math.cos(e));
          },
        };
        var $ = Array.prototype.slice;
        function B(e, t) {
          if ((o = e.length) > 1)
            for (var n, r, o, a = 1, i = e[t[0]], u = i.length; a < o; ++a)
              for (r = i, i = e[t[a]], n = 0; n < u; ++n)
                i[n][1] += i[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
        }
        function q(e) {
          for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
          return n;
        }
        function V(e, t) {
          return e[t];
        }
        function Y() {
          var e = d([]),
            t = q,
            n = B,
            r = V;
          function o(o) {
            var a,
              i,
              u = e.apply(this, arguments),
              l = o.length,
              s = u.length,
              c = new Array(s);
            for (a = 0; a < s; ++a) {
              for (
                var f, h = u[a], d = (c[a] = new Array(l)), p = 0;
                p < l;
                ++p
              )
                (d[p] = f = [0, +r(o[p], h, p, o)]), (f.data = o[p]);
              d.key = h;
            }
            for (a = 0, i = t(c); a < s; ++a) c[i[a]].index = a;
            return n(c, i), c;
          }
          return (
            (o.keys = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : d($.call(t))), o)
                : e;
            }),
            (o.value = function (e) {
              return arguments.length
                ? ((r = "function" == typeof e ? e : d(+e)), o)
                : r;
            }),
            (o.order = function (e) {
              return arguments.length
                ? ((t =
                    null == e ? q : "function" == typeof e ? e : d($.call(e))),
                  o)
                : t;
            }),
            (o.offset = function (e) {
              return arguments.length ? ((n = null == e ? B : e), o) : n;
            }),
            o
          );
        }
        function X(e, t) {
          e(t);
        }
        function Z(e) {
          var t = e.map(Q);
          return q(e).sort(function (e, n) {
            return t[e] - t[n];
          });
        }
        function Q(e) {
          for (var t, n = 0, r = -1, o = e.length; ++r < o; )
            (t = +e[r][1]) && (n += t);
          return n;
        }
        function J(e) {
          for (var t, n = -1, r = 0, o = e.length, a = -1 / 0; ++n < o; )
            (t = +e[n][1]) > a && ((a = t), (r = n));
          return r;
        }
        var K = {
            ascending: Z,
            descending: function (e) {
              return Z(e).reverse();
            },
            insideout: function (e) {
              var t,
                n,
                r = e.length,
                o = e.map(Q),
                a = (function (e) {
                  var t = e.map(J);
                  return q(e).sort(function (e, n) {
                    return t[e] - t[n];
                  });
                })(e),
                i = 0,
                u = 0,
                l = [],
                s = [];
              for (t = 0; t < r; ++t)
                (n = a[t]),
                  i < u ? ((i += o[n]), l.push(n)) : ((u += o[n]), s.push(n));
              return s.reverse().concat(l);
            },
            none: q,
            reverse: function (e) {
              return q(e).reverse();
            },
          },
          ee = Object.keys(K);
        function te(e) {
          return (e && K[e]) || K.none;
        }
        var ne = {
            expand: function (e, t) {
              if ((r = e.length) > 0) {
                for (var n, r, o, a = 0, i = e[0].length; a < i; ++a) {
                  for (o = n = 0; n < r; ++n) o += e[n][a][1] || 0;
                  if (o) for (n = 0; n < r; ++n) e[n][a][1] /= o;
                }
                B(e, t);
              }
            },
            diverging: function (e, t) {
              if ((u = e.length) > 0)
                for (
                  var n, r, o, a, i, u, l = 0, s = e[t[0]].length;
                  l < s;
                  ++l
                )
                  for (a = i = 0, n = 0; n < u; ++n)
                    (o = (r = e[t[n]][l])[1] - r[0]) > 0
                      ? ((r[0] = a), (r[1] = a += o))
                      : o < 0
                      ? ((r[1] = i), (r[0] = i += o))
                      : ((r[0] = 0), (r[1] = o));
            },
            none: B,
            silhouette: function (e, t) {
              if ((n = e.length) > 0) {
                for (var n, r = 0, o = e[t[0]], a = o.length; r < a; ++r) {
                  for (var i = 0, u = 0; i < n; ++i) u += e[i][r][1] || 0;
                  o[r][1] += o[r][0] = -u / 2;
                }
                B(e, t);
              }
            },
            wiggle: function (e, t) {
              if ((o = e.length) > 0 && (r = (n = e[t[0]]).length) > 0) {
                for (var n, r, o, a = 0, i = 1; i < r; ++i) {
                  for (var u = 0, l = 0, s = 0; u < o; ++u) {
                    for (
                      var c = e[t[u]],
                        f = c[i][1] || 0,
                        h = (f - (c[i - 1][1] || 0)) / 2,
                        d = 0;
                      d < u;
                      ++d
                    ) {
                      var p = e[t[d]];
                      h += (p[i][1] || 0) - (p[i - 1][1] || 0);
                    }
                    (l += f), (s += h * f);
                  }
                  (n[i - 1][1] += n[i - 1][0] = a), l && (a -= s / l);
                }
                (n[i - 1][1] += n[i - 1][0] = a), B(e, t);
              }
            },
          },
          re = Object.keys(ne);
        function oe(e) {
          return (e && ne[e]) || ne.none;
        }
        function ae(e) {
          var t = void 0 === e ? {} : e,
            n = t.innerRadius,
            r = t.outerRadius,
            o = t.cornerRadius,
            a = t.startAngle,
            i = t.endAngle,
            u = t.padAngle,
            l = t.padRadius,
            s = j();
          return (
            null != n && X(s.innerRadius, n),
            null != r && X(s.outerRadius, r),
            null != o && X(s.cornerRadius, o),
            null != a && X(s.startAngle, a),
            null != i && X(s.endAngle, i),
            null != u && X(s.padAngle, u),
            null != l && X(s.padRadius, l),
            s
          );
        }
        function ie(e) {
          var t = void 0 === e ? {} : e,
            n = t.x,
            r = t.x0,
            o = t.x1,
            a = t.y,
            i = t.y0,
            u = t.y1,
            l = t.defined,
            s = t.curve,
            c = (function () {
              var e = F,
                t = null,
                n = d(0),
                r = I,
                o = d(!0),
                a = null,
                i = P,
                u = null;
              function l(l) {
                var s,
                  c,
                  f,
                  d,
                  p,
                  v = l.length,
                  g = !1,
                  m = new Array(v),
                  y = new Array(v);
                for (null == a && (u = i((p = h()))), s = 0; s <= v; ++s) {
                  if (!(s < v && o((d = l[s]), s, l)) === g)
                    if ((g = !g)) (c = s), u.areaStart(), u.lineStart();
                    else {
                      for (u.lineEnd(), u.lineStart(), f = s - 1; f >= c; --f)
                        u.point(m[f], y[f]);
                      u.lineEnd(), u.areaEnd();
                    }
                  g &&
                    ((m[s] = +e(d, s, l)),
                    (y[s] = +n(d, s, l)),
                    u.point(t ? +t(d, s, l) : m[s], r ? +r(d, s, l) : y[s]));
                }
                if (p) return (u = null), p + "" || null;
              }
              function s() {
                return L().defined(o).curve(i).context(a);
              }
              return (
                (l.x = function (n) {
                  return arguments.length
                    ? ((e = "function" == typeof n ? n : d(+n)), (t = null), l)
                    : e;
                }),
                (l.x0 = function (t) {
                  return arguments.length
                    ? ((e = "function" == typeof t ? t : d(+t)), l)
                    : e;
                }),
                (l.x1 = function (e) {
                  return arguments.length
                    ? ((t =
                        null == e ? null : "function" == typeof e ? e : d(+e)),
                      l)
                    : t;
                }),
                (l.y = function (e) {
                  return arguments.length
                    ? ((n = "function" == typeof e ? e : d(+e)), (r = null), l)
                    : n;
                }),
                (l.y0 = function (e) {
                  return arguments.length
                    ? ((n = "function" == typeof e ? e : d(+e)), l)
                    : n;
                }),
                (l.y1 = function (e) {
                  return arguments.length
                    ? ((r =
                        null == e ? null : "function" == typeof e ? e : d(+e)),
                      l)
                    : r;
                }),
                (l.lineX0 = l.lineY0 =
                  function () {
                    return s().x(e).y(n);
                  }),
                (l.lineY1 = function () {
                  return s().x(e).y(r);
                }),
                (l.lineX1 = function () {
                  return s().x(t).y(n);
                }),
                (l.defined = function (e) {
                  return arguments.length
                    ? ((o = "function" == typeof e ? e : d(!!e)), l)
                    : o;
                }),
                (l.curve = function (e) {
                  return arguments.length
                    ? ((i = e), null != a && (u = i(a)), l)
                    : i;
                }),
                (l.context = function (e) {
                  return arguments.length
                    ? (null == e ? (a = u = null) : (u = i((a = e))), l)
                    : a;
                }),
                l
              );
            })();
          return (
            n && X(c.x, n),
            r && X(c.x0, r),
            o && X(c.x1, o),
            a && X(c.y, a),
            i && X(c.y0, i),
            u && X(c.y1, u),
            l && c.defined(l),
            s && c.curve(s),
            c
          );
        }
        function ue(e) {
          var t = void 0 === e ? {} : e,
            n = t.x,
            r = t.y,
            o = t.defined,
            a = t.curve,
            i = L();
          return (
            n && X(i.x, n),
            r && X(i.y, r),
            o && i.defined(o),
            a && i.curve(a),
            i
          );
        }
        function le(e) {
          var t = void 0 === e ? {} : e,
            n = t.startAngle,
            r = t.endAngle,
            o = t.padAngle,
            a = t.value,
            i = t.sort,
            u = t.sortValues,
            l = (function () {
              var e = U,
                t = D,
                n = null,
                r = d(0),
                o = d(k),
                a = d(0);
              function i(i) {
                var u,
                  l,
                  s,
                  c,
                  f,
                  h = i.length,
                  d = 0,
                  p = new Array(h),
                  v = new Array(h),
                  g = +r.apply(this, arguments),
                  m = Math.min(k, Math.max(-k, o.apply(this, arguments) - g)),
                  y = Math.min(Math.abs(m) / h, a.apply(this, arguments)),
                  _ = y * (m < 0 ? -1 : 1);
                for (u = 0; u < h; ++u)
                  (f = v[(p[u] = u)] = +e(i[u], u, i)) > 0 && (d += f);
                for (
                  null != t
                    ? p.sort(function (e, n) {
                        return t(v[e], v[n]);
                      })
                    : null != n &&
                      p.sort(function (e, t) {
                        return n(i[e], i[t]);
                      }),
                    u = 0,
                    s = d ? (m - h * _) / d : 0;
                  u < h;
                  ++u, g = c
                )
                  (l = p[u]),
                    (c = g + ((f = v[l]) > 0 ? f * s : 0) + _),
                    (v[l] = {
                      data: i[l],
                      index: u,
                      value: f,
                      startAngle: g,
                      endAngle: c,
                      padAngle: y,
                    });
                return v;
              }
              return (
                (i.value = function (t) {
                  return arguments.length
                    ? ((e = "function" == typeof t ? t : d(+t)), i)
                    : e;
                }),
                (i.sortValues = function (e) {
                  return arguments.length ? ((t = e), (n = null), i) : t;
                }),
                (i.sort = function (e) {
                  return arguments.length ? ((n = e), (t = null), i) : n;
                }),
                (i.startAngle = function (e) {
                  return arguments.length
                    ? ((r = "function" == typeof e ? e : d(+e)), i)
                    : r;
                }),
                (i.endAngle = function (e) {
                  return arguments.length
                    ? ((o = "function" == typeof e ? e : d(+e)), i)
                    : o;
                }),
                (i.padAngle = function (e) {
                  return arguments.length
                    ? ((a = "function" == typeof e ? e : d(+e)), i)
                    : a;
                }),
                i
              );
            })();
          return (
            (null === i || null != i) && l.sort(i),
            (null === u || null != u) && l.sortValues(u),
            null != a && l.value(a),
            null != o && X(l.padAngle, o),
            null != n && X(l.startAngle, n),
            null != r && X(l.endAngle, r),
            l
          );
        }
        function se(e) {
          var t = void 0 === e ? {} : e,
            n = t.angle,
            r = t.radius,
            o = t.defined,
            a = t.curve,
            i = G();
          return (
            n && X(i.angle, n),
            r && X(i.radius, r),
            o && i.defined(o),
            a && i.curve(a),
            i
          );
        }
        function ce(e) {
          var t = e.keys,
            n = e.value,
            r = e.order,
            o = e.offset,
            a = Y();
          return (
            t && a.keys(t),
            n && X(a.value, n),
            r && a.order(te(r)),
            o && a.offset(oe(o)),
            a
          );
        }
        var fe = [
          "className",
          "data",
          "innerRadius",
          "outerRadius",
          "cornerRadius",
          "startAngle",
          "endAngle",
          "padAngle",
          "padRadius",
          "children",
          "innerRef",
        ];
        function he() {
          return (
            (he = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            he.apply(this, arguments)
          );
        }
        function de(e) {
          var t = e.className,
            n = e.data,
            o = e.innerRadius,
            i = e.outerRadius,
            u = e.cornerRadius,
            l = e.startAngle,
            s = e.endAngle,
            c = e.padAngle,
            f = e.padRadius,
            h = e.children,
            d = e.innerRef,
            p = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, fe),
            v = ae({
              innerRadius: o,
              outerRadius: i,
              cornerRadius: u,
              startAngle: l,
              endAngle: s,
              padAngle: c,
              padRadius: f,
            });
          return h
            ? r.default.createElement(r.default.Fragment, null, h({ path: v }))
            : n || (null != l && null != s && null != o && null != i)
            ? r.default.createElement(
                "path",
                he({ ref: d, className: a()("visx-arc", t), d: v(n) || "" }, p)
              )
            : (console.warn(
                "[@visx/shape/Arc]: expected data because one of startAngle, endAngle, innerRadius, outerRadius is undefined. Bailing."
              ),
              null);
        }
        var pe = n(9599),
          ve = [
            "className",
            "top",
            "left",
            "data",
            "centroid",
            "innerRadius",
            "outerRadius",
            "cornerRadius",
            "startAngle",
            "endAngle",
            "padAngle",
            "padRadius",
            "pieSort",
            "pieSortValues",
            "pieValue",
            "children",
            "fill",
          ];
        function ge() {
          return (
            (ge = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            ge.apply(this, arguments)
          );
        }
        function me(e) {
          var t = e.className,
            n = e.top,
            o = e.left,
            i = e.data,
            u = void 0 === i ? [] : i,
            l = e.centroid,
            s = e.innerRadius,
            c = void 0 === s ? 0 : s,
            f = e.outerRadius,
            h = e.cornerRadius,
            d = e.startAngle,
            p = e.endAngle,
            v = e.padAngle,
            g = e.padRadius,
            m = e.pieSort,
            y = e.pieSortValues,
            _ = e.pieValue,
            x = e.children,
            b = e.fill,
            w = void 0 === b ? "" : b,
            M = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, ve),
            k = ae({
              innerRadius: c,
              outerRadius: f,
              cornerRadius: h,
              padRadius: g,
            }),
            O = le({
              startAngle: d,
              endAngle: p,
              padAngle: v,
              value: _,
              sort: m,
              sortValues: y,
            }),
            N = O(u);
          return x
            ? r.default.createElement(
                r.default.Fragment,
                null,
                x({ arcs: N, path: k, pie: O })
              )
            : r.default.createElement(
                pe.Z,
                { className: "visx-pie-arcs-group", top: n, left: o },
                N.map(function (e, n) {
                  return r.default.createElement(
                    "g",
                    { key: "pie-arc-" + n },
                    r.default.createElement(
                      "path",
                      ge(
                        {
                          className: a()("visx-pie-arc", t),
                          d: k(e) || "",
                          fill: null == w || "string" == typeof w ? w : w(e),
                        },
                        M
                      )
                    ),
                    null == l ? void 0 : l(k.centroid(e), e)
                  );
                })
              );
        }
        var ye = ["from", "to", "fill", "className", "innerRef"];
        function _e() {
          return (
            (_e = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            _e.apply(this, arguments)
          );
        }
        function xe(e) {
          var t = e.from,
            n = void 0 === t ? { x: 0, y: 0 } : t,
            o = e.to,
            i = void 0 === o ? { x: 1, y: 1 } : o,
            u = e.fill,
            l = void 0 === u ? "transparent" : u,
            s = e.className,
            c = e.innerRef,
            f = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, ye),
            h = n.x === i.x || n.y === i.y;
          return r.default.createElement(
            "line",
            _e(
              {
                ref: c,
                className: a()("visx-line", s),
                x1: n.x,
                y1: n.y,
                x2: i.x,
                y2: i.y,
                fill: l,
                shapeRendering: h ? "crispEdges" : "auto",
              },
              f
            )
          );
        }
        var be = [
          "children",
          "data",
          "x",
          "y",
          "fill",
          "className",
          "curve",
          "innerRef",
          "defined",
        ];
        function we() {
          return (
            (we = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            we.apply(this, arguments)
          );
        }
        function Me(e) {
          var t = e.children,
            n = e.data,
            o = void 0 === n ? [] : n,
            i = e.x,
            u = e.y,
            l = e.fill,
            s = void 0 === l ? "transparent" : l,
            c = e.className,
            f = e.curve,
            h = e.innerRef,
            d = e.defined,
            p =
              void 0 === d
                ? function () {
                    return !0;
                  }
                : d,
            v = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, be),
            g = ue({ x: i, y: u, defined: p, curve: f });
          return t
            ? r.default.createElement(r.default.Fragment, null, t({ path: g }))
            : r.default.createElement(
                "path",
                we(
                  {
                    ref: h,
                    className: a()("visx-linepath", c),
                    d: g(o) || "",
                    fill: s,
                    strokeLinecap: "round",
                  },
                  v
                )
              );
        }
        var ke = [
          "className",
          "angle",
          "radius",
          "defined",
          "curve",
          "data",
          "innerRef",
          "children",
          "fill",
        ];
        function Oe() {
          return (
            (Oe = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Oe.apply(this, arguments)
          );
        }
        function Ne(e) {
          var t = e.className,
            n = e.angle,
            o = e.radius,
            i = e.defined,
            u = e.curve,
            l = e.data,
            s = void 0 === l ? [] : l,
            c = e.innerRef,
            f = e.children,
            h = e.fill,
            d = void 0 === h ? "transparent" : h,
            p = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, ke),
            v = se({ angle: n, radius: o, defined: i, curve: u });
          return f
            ? r.default.createElement(r.default.Fragment, null, f({ path: v }))
            : r.default.createElement(
                "path",
                Oe(
                  {
                    ref: c,
                    className: a()("visx-line-radial", t),
                    d: v(s) || "",
                    fill: d,
                  },
                  p
                )
              );
        }
        var Te = [
          "children",
          "x",
          "x0",
          "x1",
          "y",
          "y0",
          "y1",
          "data",
          "defined",
          "className",
          "curve",
          "innerRef",
        ];
        function Se() {
          return (
            (Se = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Se.apply(this, arguments)
          );
        }
        function Ee(e) {
          var t = e.children,
            n = e.x,
            o = e.x0,
            i = e.x1,
            u = e.y,
            l = e.y0,
            s = e.y1,
            c = e.data,
            f = void 0 === c ? [] : c,
            h = e.defined,
            d =
              void 0 === h
                ? function () {
                    return !0;
                  }
                : h,
            p = e.className,
            v = e.curve,
            g = e.innerRef,
            m = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Te),
            y = ie({
              x: n,
              x0: o,
              x1: i,
              y: u,
              y0: l,
              y1: s,
              defined: d,
              curve: v,
            });
          return t
            ? r.default.createElement(r.default.Fragment, null, t({ path: y }))
            : r.default.createElement(
                "path",
                Se({ ref: g, className: a()("visx-area", p), d: y(f) || "" }, m)
              );
        }
        var Ae = [
          "x",
          "x0",
          "x1",
          "y",
          "y1",
          "y0",
          "yScale",
          "data",
          "defined",
          "className",
          "curve",
          "innerRef",
          "children",
        ];
        function Ce() {
          return (
            (Ce = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ce.apply(this, arguments)
          );
        }
        function je(e) {
          var t = e.x,
            n = e.x0,
            o = e.x1,
            i = e.y,
            u = e.y1,
            l = e.y0,
            s = e.yScale,
            c = e.data,
            f = void 0 === c ? [] : c,
            h = e.defined,
            d =
              void 0 === h
                ? function () {
                    return !0;
                  }
                : h,
            p = e.className,
            v = e.curve,
            g = e.innerRef,
            m = e.children,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Ae),
            _ = ie({ x: t, x0: n, x1: o, defined: d, curve: v });
          return (
            null == l ? _.y0(s.range()[0]) : X(_.y0, l),
            i && !u && X(_.y1, i),
            u && !i && X(_.y1, u),
            m
              ? r.default.createElement(
                  r.default.Fragment,
                  null,
                  m({ path: _ })
                )
              : r.default.createElement(
                  "path",
                  Ce(
                    {
                      ref: g,
                      className: a()("visx-area-closed", p),
                      d: _(f) || "",
                    },
                    y
                  )
                )
          );
        }
        var Re = [
          "className",
          "top",
          "left",
          "keys",
          "data",
          "curve",
          "defined",
          "x",
          "x0",
          "x1",
          "y0",
          "y1",
          "value",
          "order",
          "offset",
          "color",
          "children",
        ];
        function Pe() {
          return (
            (Pe = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Pe.apply(this, arguments)
          );
        }
        function Fe(e) {
          var t = e.className,
            n = e.top,
            o = e.left,
            i = e.keys,
            u = e.data,
            l = e.curve,
            s = e.defined,
            c = e.x,
            f = e.x0,
            h = e.x1,
            d = e.y0,
            p = e.y1,
            v = e.value,
            g = e.order,
            m = e.offset,
            y = e.color,
            _ = e.children,
            x = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Re),
            b = ce({ keys: i, value: v, order: g, offset: m }),
            w = ie({ x: c, x0: f, x1: h, y0: d, y1: p, curve: l, defined: s }),
            M = b(u);
          return _
            ? r.default.createElement(
                r.default.Fragment,
                null,
                _({ stacks: M, path: w, stack: b })
              )
            : r.default.createElement(
                pe.Z,
                { top: n, left: o },
                M.map(function (e, n) {
                  return r.default.createElement(
                    "path",
                    Pe(
                      {
                        className: a()("visx-stack", t),
                        key: "stack-" + n + "-" + (e.key || ""),
                        d: w(e) || "",
                        fill: null == y ? void 0 : y(e.key, n),
                      },
                      x
                    )
                  );
                })
              );
        }
        var Ie = [
          "className",
          "top",
          "left",
          "keys",
          "data",
          "curve",
          "defined",
          "x",
          "x0",
          "x1",
          "y0",
          "y1",
          "value",
          "order",
          "offset",
          "color",
          "children",
        ];
        function Le() {
          return (
            (Le = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Le.apply(this, arguments)
          );
        }
        function De(e) {
          var t = e.className,
            n = e.top,
            o = e.left,
            i = e.keys,
            u = e.data,
            l = e.curve,
            s = e.defined,
            c = e.x,
            f = e.x0,
            h = e.x1,
            d = e.y0,
            p = e.y1,
            v = e.value,
            g = e.order,
            m = e.offset,
            y = e.color,
            _ = e.children,
            x = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Ie);
          return r.default.createElement(
            Fe,
            Le(
              {
                className: t,
                top: n,
                left: o,
                keys: i,
                data: u,
                curve: l,
                defined: s,
                x: c,
                x0: f,
                x1: h,
                y0: d,
                y1: p,
                value: v,
                order: g,
                offset: m,
                color: y,
              },
              x
            ),
            _ ||
              function (e) {
                var n = e.stacks,
                  o = e.path;
                return n.map(function (e, n) {
                  return r.default.createElement(
                    "path",
                    Le(
                      {
                        className: a()("visx-area-stack", t),
                        key: "area-stack-" + n + "-" + (e.key || ""),
                        d: o(e) || "",
                        fill: null == y ? void 0 : y(e.key, n),
                      },
                      x
                    )
                  );
                });
              }
          );
        }
        var Ue = ["className", "innerRef"];
        function He() {
          return (
            (He = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            He.apply(this, arguments)
          );
        }
        function ze(e) {
          var t = e.className,
            n = e.innerRef,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Ue);
          return r.default.createElement(
            "rect",
            He({ ref: n, className: a()("visx-bar", t) }, o)
          );
        }
        var We = [
          "children",
          "className",
          "innerRef",
          "x",
          "y",
          "width",
          "height",
          "radius",
          "all",
          "top",
          "bottom",
          "left",
          "right",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
        ];
        function Ge() {
          return (
            (Ge = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ge.apply(this, arguments)
          );
        }
        function $e(e) {
          var t = e.children,
            n = e.className,
            o = e.innerRef,
            i = e.x,
            u = e.y,
            l = e.width,
            s = e.height,
            c = e.radius,
            f = e.all,
            h = void 0 !== f && f,
            d = e.top,
            p = void 0 !== d && d,
            v = e.bottom,
            g = void 0 !== v && v,
            m = e.left,
            y = void 0 !== m && m,
            _ = e.right,
            x = void 0 !== _ && _,
            b = e.topLeft,
            w = void 0 !== b && b,
            M = e.topRight,
            k = void 0 !== M && M,
            O = e.bottomLeft,
            N = void 0 !== O && O,
            T = e.bottomRight,
            S = void 0 !== T && T,
            E = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, We),
            A = (function (e) {
              var t = e.all,
                n = e.bottom,
                r = e.bottomLeft,
                o = e.bottomRight,
                a = e.height,
                i = e.left,
                u = e.radius,
                l = e.right,
                s = e.top,
                c = e.topLeft,
                f = e.topRight,
                h = e.width,
                d = e.x,
                p = e.y;
              (f = t || s || l || f),
                (o = t || n || l || o),
                (r = t || n || i || r),
                (c = t || s || i || c);
              var v = 2 * (u = Math.max(1, Math.min(u, Math.min(h, a) / 2)));
              return (
                "M" +
                (d + u) +
                "," +
                p +
                " h" +
                (h - v) +
                "\n " +
                (f
                  ? "a" + u + "," + u + " 0 0 1 " + u + "," + u
                  : "h" + u + "v" + u) +
                "\n v" +
                (a - v) +
                "\n " +
                (o
                  ? "a" + u + "," + u + " 0 0 1 " + -u + "," + u
                  : "v" + u + "h" + -u) +
                "\n h" +
                (v - h) +
                "\n " +
                (r
                  ? "a" + u + "," + u + " 0 0 1 " + -u + "," + -u
                  : "h" + -u + "v" + -u) +
                "\n v" +
                (v - a) +
                "\n " +
                (c
                  ? "a" + u + "," + u + " 0 0 1 " + u + "," + -u
                  : "v" + -u + "h" + u) +
                "\nz"
              )
                .split("\n")
                .join("");
            })({
              x: i,
              y: u,
              width: l,
              height: s,
              radius: c,
              all: h,
              top: p,
              bottom: g,
              left: y,
              right: x,
              topLeft: w,
              topRight: k,
              bottomLeft: N,
              bottomRight: S,
            });
          return t
            ? r.default.createElement(r.default.Fragment, null, t({ path: A }))
            : r.default.createElement(
                "path",
                Ge({ ref: o, className: a()("visx-bar-rounded", n), d: A }, E)
              );
        }
        function Be(e) {
          if ("bandwidth" in e) return e.bandwidth();
          var t = e.range(),
            n = e.domain();
          return Math.abs(t[t.length - 1] - t[0]) / n.length;
        }
        var qe = [
          "data",
          "className",
          "top",
          "left",
          "x0",
          "x0Scale",
          "x1Scale",
          "yScale",
          "color",
          "keys",
          "height",
          "children",
        ];
        function Ve() {
          return (
            (Ve = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ve.apply(this, arguments)
          );
        }
        function Ye(e) {
          var t = e.data,
            n = e.className,
            o = e.top,
            i = e.left,
            u = e.x0,
            l = e.x0Scale,
            s = e.x1Scale,
            c = e.yScale,
            f = e.color,
            h = e.keys,
            d = e.height,
            p = e.children,
            v = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, qe),
            g = Be(s),
            m = t.map(function (e, t) {
              return {
                index: t,
                x0: l(u(e)),
                bars: h.map(function (t, n) {
                  var r = e[t];
                  return {
                    index: n,
                    key: t,
                    value: r,
                    width: g,
                    x: s(t) || 0,
                    y: c(r) || 0,
                    color: f(t, n),
                    height: d - (c(r) || 0),
                  };
                }),
              };
            });
          return p
            ? r.default.createElement(r.default.Fragment, null, p(m))
            : r.default.createElement(
                pe.Z,
                { className: a()("visx-bar-group", n), top: o, left: i },
                m.map(function (e) {
                  return r.default.createElement(
                    pe.Z,
                    { key: "bar-group-" + e.index + "-" + e.x0, left: e.x0 },
                    e.bars.map(function (t) {
                      return r.default.createElement(
                        ze,
                        Ve(
                          {
                            key:
                              "bar-group-bar-" +
                              e.index +
                              "-" +
                              t.index +
                              "-" +
                              t.value +
                              "-" +
                              t.key,
                            x: t.x,
                            y: t.y,
                            width: t.width,
                            height: t.height,
                            fill: t.color,
                          },
                          v
                        )
                      );
                    })
                  );
                })
              );
        }
        var Xe = [
          "data",
          "className",
          "top",
          "left",
          "x",
          "y0",
          "y0Scale",
          "y1Scale",
          "xScale",
          "color",
          "keys",
          "width",
          "children",
        ];
        function Ze() {
          return (
            (Ze = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ze.apply(this, arguments)
          );
        }
        function Qe(e) {
          var t = e.data,
            n = e.className,
            o = e.top,
            i = e.left,
            u = e.x,
            l =
              void 0 === u
                ? function () {
                    return 0;
                  }
                : u,
            s = e.y0,
            c = e.y0Scale,
            f = e.y1Scale,
            h = e.xScale,
            d = e.color,
            p = e.keys,
            v = (e.width, e.children),
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Xe),
            m = Be(f),
            y = t.map(function (e, t) {
              return {
                index: t,
                y0: c(s(e)) || 0,
                bars: p.map(function (t, n) {
                  var r = e[t];
                  return {
                    index: n,
                    key: t,
                    value: r,
                    height: m,
                    x: l(r) || 0,
                    y: f(t) || 0,
                    color: d(t, n),
                    width: h(r) || 0,
                  };
                }),
              };
            });
          return v
            ? r.default.createElement(r.default.Fragment, null, v(y))
            : r.default.createElement(
                pe.Z,
                {
                  className: a()("visx-bar-group-horizontal", n),
                  top: o,
                  left: i,
                },
                y.map(function (e) {
                  return r.default.createElement(
                    pe.Z,
                    { key: "bar-group-" + e.index + "-" + e.y0, top: e.y0 },
                    e.bars.map(function (t) {
                      return r.default.createElement(
                        ze,
                        Ze(
                          {
                            key:
                              "bar-group-bar-" +
                              e.index +
                              "-" +
                              t.index +
                              "-" +
                              t.value +
                              "-" +
                              t.key,
                            x: t.x,
                            y: t.y,
                            width: t.width,
                            height: t.height,
                            fill: t.color,
                          },
                          g
                        )
                      );
                    })
                  );
                })
              );
        }
        function Je(e) {
          return "number" == typeof (null == e ? void 0 : e.x)
            ? null == e
              ? void 0
              : e.x
            : 0;
        }
        function Ke(e) {
          return "number" == typeof (null == e ? void 0 : e.y)
            ? null == e
              ? void 0
              : e.y
            : 0;
        }
        function et(e) {
          return null == e ? void 0 : e.source;
        }
        function tt(e) {
          return null == e ? void 0 : e.target;
        }
        function nt(e) {
          return null == e ? void 0 : e[0];
        }
        function rt(e) {
          return null == e ? void 0 : e[1];
        }
        var ot = [
          "data",
          "className",
          "top",
          "left",
          "x",
          "y0",
          "y1",
          "xScale",
          "yScale",
          "color",
          "keys",
          "value",
          "order",
          "offset",
          "children",
        ];
        function at() {
          return (
            (at = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            at.apply(this, arguments)
          );
        }
        function it(e) {
          var t = e.data,
            n = e.className,
            o = e.top,
            i = e.left,
            u = e.x,
            l = e.y0,
            s = void 0 === l ? nt : l,
            c = e.y1,
            f = void 0 === c ? rt : c,
            h = e.xScale,
            d = e.yScale,
            p = e.color,
            v = e.keys,
            g = e.value,
            m = e.order,
            y = e.offset,
            _ = e.children,
            x = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, ot),
            b = Y();
          v && b.keys(v),
            g && X(b.value, g),
            m && b.order(te(m)),
            y && b.offset(oe(y));
          var w = b(t),
            M = Be(h),
            k = w.map(function (e, t) {
              var n = e.key;
              return {
                index: t,
                key: n,
                bars: e.map(function (t, r) {
                  var o = (d(s(t)) || 0) - (d(f(t)) || 0),
                    a = d(f(t)),
                    i =
                      "bandwidth" in h
                        ? h(u(t.data))
                        : Math.max((h(u(t.data)) || 0) - M / 2);
                  return {
                    bar: t,
                    key: n,
                    index: r,
                    height: o,
                    width: M,
                    x: i || 0,
                    y: a || 0,
                    color: p(e.key, r),
                  };
                }),
              };
            });
          return _
            ? r.default.createElement(r.default.Fragment, null, _(k))
            : r.default.createElement(
                pe.Z,
                { className: a()("visx-bar-stack", n), top: o, left: i },
                k.map(function (e) {
                  return e.bars.map(function (t) {
                    return r.default.createElement(
                      ze,
                      at(
                        {
                          key: "bar-stack-" + e.index + "-" + t.index,
                          x: t.x,
                          y: t.y,
                          height: t.height,
                          width: t.width,
                          fill: t.color,
                        },
                        x
                      )
                    );
                  });
                })
              );
        }
        var ut = [
          "data",
          "className",
          "top",
          "left",
          "y",
          "x0",
          "x1",
          "xScale",
          "yScale",
          "color",
          "keys",
          "value",
          "order",
          "offset",
          "children",
        ];
        function lt() {
          return (
            (lt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            lt.apply(this, arguments)
          );
        }
        function st(e) {
          var t = e.data,
            n = e.className,
            o = e.top,
            i = e.left,
            u = e.y,
            l = e.x0,
            s = void 0 === l ? nt : l,
            c = e.x1,
            f = void 0 === c ? rt : c,
            h = e.xScale,
            d = e.yScale,
            p = e.color,
            v = e.keys,
            g = e.value,
            m = e.order,
            y = e.offset,
            _ = e.children,
            x = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, ut),
            b = Y();
          v && b.keys(v),
            g && X(b.value, g),
            m && b.order(te(m)),
            y && b.offset(oe(y));
          var w = b(t),
            M = Be(d),
            k = w.map(function (e, t) {
              var n = e.key;
              return {
                index: t,
                key: n,
                bars: e.map(function (t, r) {
                  var o = (h(f(t)) || 0) - (h(s(t)) || 0),
                    a = h(s(t)),
                    i =
                      "bandwidth" in d
                        ? d(u(t.data))
                        : Math.max((d(u(t.data)) || 0) - o / 2);
                  return {
                    bar: t,
                    key: n,
                    index: r,
                    height: M,
                    width: o,
                    x: a || 0,
                    y: i || 0,
                    color: p(e.key, r),
                  };
                }),
              };
            });
          return _
            ? r.default.createElement(r.default.Fragment, null, _(k))
            : r.default.createElement(
                pe.Z,
                {
                  className: a()("visx-bar-stack-horizontal", n),
                  top: o,
                  left: i,
                },
                k.map(function (e) {
                  return e.bars.map(function (t) {
                    return r.default.createElement(
                      ze,
                      lt(
                        {
                          key: "bar-stack-" + e.index + "-" + t.index,
                          x: t.x,
                          y: t.y,
                          height: t.height,
                          width: t.width,
                          fill: t.color,
                        },
                        x
                      )
                    );
                  });
                })
              );
        }
        var ct = function (e) {
          return (Math.PI / 180) * e;
        };
        function ft(e, t) {
          return [(t = +t) * Math.cos((e -= Math.PI / 2)), t * Math.sin(e)];
        }
        function ht(e) {
          return e.source;
        }
        function dt(e) {
          return e.target;
        }
        function pt(e) {
          var t = ht,
            n = dt,
            r = F,
            o = I,
            a = null;
          function i() {
            var i,
              u = $.call(arguments),
              l = t.apply(this, u),
              s = n.apply(this, u);
            if (
              (a || (a = i = h()),
              e(
                a,
                +r.apply(this, ((u[0] = l), u)),
                +o.apply(this, u),
                +r.apply(this, ((u[0] = s), u)),
                +o.apply(this, u)
              ),
              i)
            )
              return (a = null), i + "" || null;
          }
          return (
            (i.source = function (e) {
              return arguments.length ? ((t = e), i) : t;
            }),
            (i.target = function (e) {
              return arguments.length ? ((n = e), i) : n;
            }),
            (i.x = function (e) {
              return arguments.length
                ? ((r = "function" == typeof e ? e : d(+e)), i)
                : r;
            }),
            (i.y = function (e) {
              return arguments.length
                ? ((o = "function" == typeof e ? e : d(+e)), i)
                : o;
            }),
            (i.context = function (e) {
              return arguments.length ? ((a = null == e ? null : e), i) : a;
            }),
            i
          );
        }
        function vt(e, t, n, r, o) {
          e.moveTo(t, n), e.bezierCurveTo((t = (t + r) / 2), n, t, o, r, o);
        }
        function gt(e, t, n, r, o) {
          e.moveTo(t, n), e.bezierCurveTo(t, (n = (n + o) / 2), r, n, r, o);
        }
        function mt(e, t, n, r, o) {
          var a = ft(t, n),
            i = ft(t, (n = (n + o) / 2)),
            u = ft(r, n),
            l = ft(r, o);
          e.moveTo(a[0], a[1]),
            e.bezierCurveTo(i[0], i[1], u[0], u[1], l[0], l[1]);
        }
        var yt = [
          "className",
          "children",
          "data",
          "innerRef",
          "path",
          "x",
          "y",
          "source",
          "target",
        ];
        function _t() {
          return (
            (_t = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            _t.apply(this, arguments)
          );
        }
        function xt(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y;
          return function (e) {
            var a = pt(vt);
            return a.x(r), a.y(o), a.source(t), a.target(n), a(e);
          };
        }
        function bt(e) {
          var t = e.className,
            n = e.children,
            o = e.data,
            i = e.innerRef,
            u = e.path,
            l = e.x,
            s = void 0 === l ? Ke : l,
            c = e.y,
            f = void 0 === c ? Je : c,
            h = e.source,
            d = void 0 === h ? et : h,
            p = e.target,
            v = void 0 === p ? tt : p,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, yt),
            m = u || xt({ source: d, target: v, x: s, y: f });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: m }))
            : r.default.createElement(
                "path",
                _t(
                  {
                    ref: i,
                    className: a()(
                      "visx-link visx-link-horizontal-diagonal",
                      t
                    ),
                    d: m(o) || "",
                  },
                  g
                )
              );
        }
        var wt = [
          "className",
          "children",
          "data",
          "innerRef",
          "path",
          "x",
          "y",
          "source",
          "target",
        ];
        function Mt() {
          return (
            (Mt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Mt.apply(this, arguments)
          );
        }
        function kt(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y;
          return function (e) {
            var a = pt(gt);
            return a.x(r), a.y(o), a.source(t), a.target(n), a(e);
          };
        }
        function Ot(e) {
          var t = e.className,
            n = e.children,
            o = e.data,
            i = e.innerRef,
            u = e.path,
            l = e.x,
            s = void 0 === l ? Je : l,
            c = e.y,
            f = void 0 === c ? Ke : c,
            h = e.source,
            d = void 0 === h ? et : h,
            p = e.target,
            v = void 0 === p ? tt : p,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, wt),
            m = u || kt({ source: d, target: v, x: s, y: f });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: m }))
            : r.default.createElement(
                "path",
                Mt(
                  {
                    ref: i,
                    className: a()("visx-link visx-link-vertical-diagonal", t),
                    d: m(o) || "",
                  },
                  g
                )
              );
        }
        var Nt = [
          "className",
          "children",
          "data",
          "innerRef",
          "path",
          "angle",
          "radius",
          "source",
          "target",
        ];
        function Tt() {
          return (
            (Tt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Tt.apply(this, arguments)
          );
        }
        function St(e) {
          var t = e.source,
            n = e.target,
            r = e.angle,
            o = e.radius;
          return function (e) {
            var a,
              i =
                (((a = pt(mt)).angle = a.x),
                delete a.x,
                (a.radius = a.y),
                delete a.y,
                a);
            return i.angle(r), i.radius(o), i.source(t), i.target(n), i(e);
          };
        }
        function Et(e) {
          var t = e.className,
            n = e.children,
            o = e.data,
            i = e.innerRef,
            u = e.path,
            l = e.angle,
            s = void 0 === l ? Je : l,
            c = e.radius,
            f = void 0 === c ? Ke : c,
            h = e.source,
            d = void 0 === h ? et : h,
            p = e.target,
            v = void 0 === p ? tt : p,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Nt),
            m = u || St({ source: d, target: v, angle: s, radius: f });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: m }))
            : r.default.createElement(
                "path",
                Tt(
                  {
                    ref: i,
                    className: a()("visx-link visx-link-radial-diagonal", t),
                    d: m(o) || "",
                  },
                  g
                )
              );
        }
        var At = [
          "className",
          "children",
          "data",
          "innerRef",
          "path",
          "percent",
          "x",
          "y",
          "source",
          "target",
        ];
        function Ct() {
          return (
            (Ct = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ct.apply(this, arguments)
          );
        }
        function jt(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y,
            a = e.percent;
          return function (e) {
            var i = t(e),
              u = n(e),
              l = r(i),
              s = o(i),
              c = r(u),
              f = o(u),
              d = c - l,
              p = f - s,
              v = a * (d + p),
              g = a * (p - d),
              m = h();
            return (
              m.moveTo(l, s),
              m.bezierCurveTo(l + v, s + g, c + g, f - v, c, f),
              m.toString()
            );
          };
        }
        function Rt(e) {
          var t = e.className,
            n = e.children,
            o = e.data,
            i = e.innerRef,
            u = e.path,
            l = e.percent,
            s = void 0 === l ? 0.2 : l,
            c = e.x,
            f = void 0 === c ? Ke : c,
            h = e.y,
            d = void 0 === h ? Je : h,
            p = e.source,
            v = void 0 === p ? et : p,
            g = e.target,
            m = void 0 === g ? tt : g,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, At),
            _ = u || jt({ source: v, target: m, x: f, y: d, percent: s });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: _ }))
            : r.default.createElement(
                "path",
                Ct(
                  {
                    ref: i,
                    className: a()("visx-link visx-link-horizontal-curve", t),
                    d: _(o) || "",
                  },
                  y
                )
              );
        }
        var Pt = [
          "className",
          "children",
          "data",
          "innerRef",
          "path",
          "percent",
          "x",
          "y",
          "source",
          "target",
        ];
        function Ft() {
          return (
            (Ft = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ft.apply(this, arguments)
          );
        }
        function It(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y,
            a = e.percent;
          return function (e) {
            var i = t(e),
              u = n(e),
              l = r(i),
              s = o(i),
              c = r(u),
              f = o(u),
              d = c - l,
              p = f - s,
              v = a * (d + p),
              g = a * (p - d),
              m = h();
            return (
              m.moveTo(l, s),
              m.bezierCurveTo(l + v, s + g, c + g, f - v, c, f),
              m.toString()
            );
          };
        }
        function Lt(e) {
          var t = e.className,
            n = e.children,
            o = e.data,
            i = e.innerRef,
            u = e.path,
            l = e.percent,
            s = void 0 === l ? 0.2 : l,
            c = e.x,
            f = void 0 === c ? Je : c,
            h = e.y,
            d = void 0 === h ? Ke : h,
            p = e.source,
            v = void 0 === p ? et : p,
            g = e.target,
            m = void 0 === g ? tt : g,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Pt),
            _ = u || It({ source: v, target: m, x: f, y: d, percent: s });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: _ }))
            : r.default.createElement(
                "path",
                Ft(
                  {
                    ref: i,
                    className: a()("visx-link visx-link-vertical-curve", t),
                    d: _(o) || "",
                  },
                  y
                )
              );
        }
        var Dt = [
          "className",
          "children",
          "data",
          "innerRef",
          "path",
          "percent",
          "x",
          "y",
          "source",
          "target",
        ];
        function Ut() {
          return (
            (Ut = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ut.apply(this, arguments)
          );
        }
        function Ht(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y,
            a = e.percent;
          return function (e) {
            var i = t(e),
              u = n(e),
              l = r(i) - Math.PI / 2,
              s = o(i),
              c = r(u) - Math.PI / 2,
              f = o(u),
              d = s * Math.cos(l),
              p = s * Math.sin(l),
              v = f * Math.cos(c),
              g = f * Math.sin(c),
              m = v - d,
              y = g - p,
              _ = a * (m + y),
              x = a * (y - m),
              b = h();
            return (
              b.moveTo(d, p),
              b.bezierCurveTo(d + _, p + x, v + x, g - _, v, g),
              b.toString()
            );
          };
        }
        function zt(e) {
          var t = e.className,
            n = e.children,
            o = e.data,
            i = e.innerRef,
            u = e.path,
            l = e.percent,
            s = void 0 === l ? 0.2 : l,
            c = e.x,
            f = void 0 === c ? Je : c,
            h = e.y,
            d = void 0 === h ? Ke : h,
            p = e.source,
            v = void 0 === p ? et : p,
            g = e.target,
            m = void 0 === g ? tt : g,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Dt),
            _ = u || Ht({ source: v, target: m, x: f, y: d, percent: s });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: _ }))
            : r.default.createElement(
                "path",
                Ut(
                  {
                    ref: i,
                    className: a()("visx-link visx-link-radial-curve", t),
                    d: _(o) || "",
                  },
                  y
                )
              );
        }
        var Wt = [
          "className",
          "children",
          "innerRef",
          "data",
          "path",
          "x",
          "y",
          "source",
          "target",
        ];
        function Gt() {
          return (
            (Gt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Gt.apply(this, arguments)
          );
        }
        function $t(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y;
          return function (e) {
            var a = t(e),
              i = n(e),
              u = r(a),
              l = o(a),
              s = r(i),
              c = o(i),
              f = h();
            return f.moveTo(u, l), f.lineTo(s, c), f.toString();
          };
        }
        function Bt(e) {
          var t = e.className,
            n = e.children,
            o = e.innerRef,
            i = e.data,
            u = e.path,
            l = e.x,
            s = void 0 === l ? Ke : l,
            c = e.y,
            f = void 0 === c ? Je : c,
            h = e.source,
            d = void 0 === h ? et : h,
            p = e.target,
            v = void 0 === p ? tt : p,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Wt),
            m = u || $t({ source: d, target: v, x: s, y: f });
          return n
            ? r.default.createElement(r.default.Fragment, null, n({ path: m }))
            : r.default.createElement(
                "path",
                Gt(
                  {
                    ref: o,
                    className: a()("visx-link visx-link-horizontal-line", t),
                    d: m(i) || "",
                  },
                  g
                )
              );
        }
        var qt = [
          "className",
          "innerRef",
          "data",
          "path",
          "x",
          "y",
          "source",
          "target",
          "children",
        ];
        function Vt() {
          return (
            (Vt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Vt.apply(this, arguments)
          );
        }
        function Yt(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y;
          return function (e) {
            var a = t(e),
              i = n(e),
              u = r(a),
              l = o(a),
              s = r(i),
              c = o(i),
              f = h();
            return f.moveTo(u, l), f.lineTo(s, c), f.toString();
          };
        }
        function Xt(e) {
          var t = e.className,
            n = e.innerRef,
            o = e.data,
            i = e.path,
            u = e.x,
            l = void 0 === u ? Je : u,
            s = e.y,
            c = void 0 === s ? Ke : s,
            f = e.source,
            h = void 0 === f ? et : f,
            d = e.target,
            p = void 0 === d ? tt : d,
            v = e.children,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, qt),
            m = i || Yt({ source: h, target: p, x: l, y: c });
          return v
            ? r.default.createElement(r.default.Fragment, null, v({ path: m }))
            : r.default.createElement(
                "path",
                Vt(
                  {
                    ref: n,
                    className: a()("visx-link visx-link-vertical-line", t),
                    d: m(o) || "",
                  },
                  g
                )
              );
        }
        var Zt = [
          "className",
          "innerRef",
          "data",
          "path",
          "x",
          "y",
          "source",
          "target",
          "children",
        ];
        function Qt() {
          return (
            (Qt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Qt.apply(this, arguments)
          );
        }
        function Jt(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y;
          return function (e) {
            var a = t(e),
              i = n(e),
              u = r(a) - Math.PI / 2,
              l = o(a),
              s = r(i) - Math.PI / 2,
              c = o(i),
              f = Math.cos(u),
              d = Math.sin(u),
              p = Math.cos(s),
              v = Math.sin(s),
              g = h();
            return g.moveTo(l * f, l * d), g.lineTo(c * p, c * v), g.toString();
          };
        }
        function Kt(e) {
          var t = e.className,
            n = e.innerRef,
            o = e.data,
            i = e.path,
            u = e.x,
            l = void 0 === u ? Je : u,
            s = e.y,
            c = void 0 === s ? Ke : s,
            f = e.source,
            h = void 0 === f ? et : f,
            d = e.target,
            p = void 0 === d ? tt : d,
            v = e.children,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Zt),
            m = i || Jt({ source: h, target: p, x: l, y: c });
          return v
            ? r.default.createElement(r.default.Fragment, null, v({ path: m }))
            : r.default.createElement(
                "path",
                Qt(
                  {
                    ref: n,
                    className: a()("visx-link visx-link-radial-line", t),
                    d: m(o) || "",
                  },
                  g
                )
              );
        }
        var en = [
          "className",
          "innerRef",
          "data",
          "path",
          "percent",
          "x",
          "y",
          "source",
          "target",
          "children",
        ];
        function tn() {
          return (
            (tn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            tn.apply(this, arguments)
          );
        }
        function nn(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y,
            a = e.percent;
          return function (e) {
            var i = t(e),
              u = n(e),
              l = r(i),
              s = o(i),
              c = r(u),
              f = o(u),
              d = h();
            return (
              d.moveTo(l, s),
              d.lineTo(l + (c - l) * a, s),
              d.lineTo(l + (c - l) * a, f),
              d.lineTo(c, f),
              d.toString()
            );
          };
        }
        function rn(e) {
          var t = e.className,
            n = e.innerRef,
            o = e.data,
            i = e.path,
            u = e.percent,
            l = void 0 === u ? 0.5 : u,
            s = e.x,
            c = void 0 === s ? Ke : s,
            f = e.y,
            h = void 0 === f ? Je : f,
            d = e.source,
            p = void 0 === d ? et : d,
            v = e.target,
            g = void 0 === v ? tt : v,
            m = e.children,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, en),
            _ = i || nn({ source: p, target: g, x: c, y: h, percent: l });
          return m
            ? r.default.createElement(r.default.Fragment, null, m({ path: _ }))
            : r.default.createElement(
                "path",
                tn(
                  {
                    ref: n,
                    className: a()("visx-link visx-link-horizontal-step", t),
                    d: _(o) || "",
                  },
                  y
                )
              );
        }
        var on = [
          "className",
          "innerRef",
          "data",
          "path",
          "percent",
          "x",
          "y",
          "source",
          "target",
          "children",
        ];
        function an() {
          return (
            (an = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            an.apply(this, arguments)
          );
        }
        function un(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y,
            a = e.percent;
          return function (e) {
            var i = t(e),
              u = n(e),
              l = r(i),
              s = o(i),
              c = r(u),
              f = o(u),
              d = h();
            return (
              d.moveTo(l, s),
              d.lineTo(l, s + (f - s) * a),
              d.lineTo(c, s + (f - s) * a),
              d.lineTo(c, f),
              d.toString()
            );
          };
        }
        function ln(e) {
          var t = e.className,
            n = e.innerRef,
            o = e.data,
            i = e.path,
            u = e.percent,
            l = void 0 === u ? 0.5 : u,
            s = e.x,
            c = void 0 === s ? Je : s,
            f = e.y,
            h = void 0 === f ? Ke : f,
            d = e.source,
            p = void 0 === d ? et : d,
            v = e.target,
            g = void 0 === v ? tt : v,
            m = e.children,
            y = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, on),
            _ = i || un({ source: p, target: g, x: c, y: h, percent: l });
          return m
            ? r.default.createElement(r.default.Fragment, null, m({ path: _ }))
            : r.default.createElement(
                "path",
                an(
                  {
                    ref: n,
                    className: a()("visx-link visx-link-vertical-step", t),
                    d: _(o) || "",
                  },
                  y
                )
              );
        }
        var sn = [
          "className",
          "innerRef",
          "data",
          "path",
          "x",
          "y",
          "source",
          "target",
          "children",
        ];
        function cn() {
          return (
            (cn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            cn.apply(this, arguments)
          );
        }
        function fn(e) {
          var t = e.source,
            n = e.target,
            r = e.x,
            o = e.y;
          return function (e) {
            var a = t(e),
              i = n(e),
              u = r(a),
              l = o(a),
              s = r(i),
              c = o(i),
              f = u - Math.PI / 2,
              h = l,
              d = s - Math.PI / 2,
              p = c,
              v = Math.cos(f),
              g = Math.sin(f),
              m = Math.cos(d),
              y = Math.sin(d);
            return (
              "\n      M" +
              h * v +
              "," +
              h * g +
              "\n      A" +
              h +
              "," +
              h +
              ",0,0," +
              ((Math.abs(d - f) > Math.PI ? d <= f : d > f) ? 1 : 0) +
              "," +
              h * m +
              "," +
              h * y +
              "\n      L" +
              p * m +
              "," +
              p * y +
              "\n    "
            );
          };
        }
        function hn(e) {
          var t = e.className,
            n = e.innerRef,
            o = e.data,
            i = e.path,
            u = e.x,
            l = void 0 === u ? Je : u,
            s = e.y,
            c = void 0 === s ? Ke : s,
            f = e.source,
            h = void 0 === f ? et : f,
            d = e.target,
            p = void 0 === d ? tt : d,
            v = e.children,
            g = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, sn),
            m = i || fn({ source: h, target: p, x: l, y: c });
          return v
            ? r.default.createElement(r.default.Fragment, null, v({ path: m }))
            : r.default.createElement(
                "path",
                cn(
                  {
                    ref: n,
                    className: a()("visx-link visx-link-radial-step", t),
                    d: m(o) || "",
                  },
                  g
                )
              );
        }
        var dn = [
          "sides",
          "size",
          "center",
          "rotate",
          "className",
          "children",
          "innerRef",
          "points",
        ];
        function pn() {
          return (
            (pn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            pn.apply(this, arguments)
          );
        }
        var vn = { x: 0, y: 0 },
          gn = function (e) {
            var t = e.sides,
              n = void 0 === t ? 4 : t,
              r = e.size,
              o = void 0 === r ? 25 : r,
              a = e.center,
              i = void 0 === a ? vn : a,
              u = e.rotate,
              l = void 0 === u ? 0 : u,
              s = e.side,
              c = ct((360 / n) * s - l);
            return { x: i.x + o * Math.cos(c), y: i.y + o * Math.sin(c) };
          },
          mn = function (e) {
            var t = e.sides,
              n = e.size,
              r = e.center,
              o = e.rotate;
            return new Array(t).fill(0).map(function (e, a) {
              return gn({ sides: t, size: n, center: r, rotate: o, side: a });
            });
          };
        function yn(e) {
          var t = e.sides,
            n = void 0 === t ? 4 : t,
            o = e.size,
            i = void 0 === o ? 25 : o,
            u = e.center,
            l = void 0 === u ? vn : u,
            s = e.rotate,
            c = void 0 === s ? 0 : s,
            f = e.className,
            h = e.children,
            d = e.innerRef,
            p = e.points,
            v = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, dn),
            g =
              p ||
              mn({ sides: n, size: i, center: l, rotate: c }).map(function (e) {
                return [e.x, e.y];
              });
          return h
            ? r.default.createElement(
                r.default.Fragment,
                null,
                h({ points: g })
              )
            : r.default.createElement(
                "polygon",
                pn(
                  {
                    ref: d,
                    className: a()("visx-polygon", f),
                    points: g.join(" "),
                  },
                  v
                )
              );
        }
        var _n = ["className", "innerRef"];
        function xn() {
          return (
            (xn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            xn.apply(this, arguments)
          );
        }
        function bn(e) {
          var t = e.className,
            n = e.innerRef,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, _n);
          return r.default.createElement(
            "circle",
            xn({ ref: n, className: a()("visx-circle", t) }, o)
          );
        }
        var wn = n(5697),
          Mn = n.n(wn),
          kn = "http://www.w3.org/2000/svg";
        var On = "__visx_splitpath_svg_path_measurement_id",
          Nn = function () {
            return !0;
          };
        function Tn(e) {
          var t = e.path,
            n = e.pointsInSegments,
            r = e.segmentation,
            o = void 0 === r ? "x" : r,
            a = e.sampleRate,
            i = void 0 === a ? 1 : a;
          try {
            var u = (function (e) {
              var t = document.getElementById(e);
              if (!t) {
                var n = document.createElementNS(kn, "svg");
                n.setAttribute("aria-hidden", "true"),
                  (n.style.opacity = "0"),
                  (n.style.width = "0"),
                  (n.style.height = "0"),
                  (n.style.position = "absolute"),
                  (n.style.top = "-100%"),
                  (n.style.left = "-100%"),
                  (n.style.pointerEvents = "none"),
                  (t = document.createElementNS(kn, "path")).setAttribute(
                    "id",
                    e
                  ),
                  n.appendChild(t),
                  document.body.appendChild(n);
              }
              return t;
            })(On);
            u.setAttribute("d", t);
            var l = u.getTotalLength(),
              s = n.length,
              c = n.map(function () {
                return [];
              });
            if ("x" === o || "y" === o)
              for (
                var f = n.map(function (e) {
                    var t;
                    return null ==
                      (t = e.find(function (e) {
                        return "number" == typeof e[o];
                      }))
                      ? void 0
                      : t[o];
                  }),
                  h = u.getPointAtLength(0),
                  d =
                    u.getPointAtLength(l)[o] > h[o]
                      ? f.map(function (e) {
                          return void 0 === e
                            ? Nn
                            : function (t) {
                                return t >= e;
                              };
                        })
                      : f.map(function (e) {
                          return void 0 === e
                            ? Nn
                            : function (t) {
                                return t <= e;
                              };
                        }),
                  p = 0,
                  v = 0;
                v <= l;
                v += i
              ) {
                for (
                  var g = u.getPointAtLength(v), m = g[o];
                  p < s - 1 && d[p + 1](m);

                )
                  p += 1;
                c[p].push(g);
              }
            else {
              var y = n.map(function (e) {
                  return e.length;
                }),
                _ = y.reduce(function (e, t) {
                  return e + t;
                }, 0),
                x = l / Math.max(1, _ - 1),
                b = y.slice(0, s - 1);
              b.unshift(0);
              for (var w = 2; w < s; w += 1) b[w] += b[w - 1];
              for (var M = 0; M < s; M += 1) b[M] *= x;
              for (var k = 0, O = 0; O <= l; O += i) {
                for (
                  var N = u.getPointAtLength(O);
                  k < s - 1 && O >= b[k + 1];

                )
                  k += 1;
                c[k].push(N);
              }
            }
            return c;
          } catch (e) {
            return [];
          }
        }
        function Sn() {
          return (
            (Sn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Sn.apply(this, arguments)
          );
        }
        var En = function (e) {
            return e.x || 0;
          },
          An = function (e) {
            return e.y || 0;
          };
        function Cn(e) {
          var t = e.children,
            n = e.className,
            o = e.curve,
            a = e.defined,
            i = e.segmentation,
            u = e.sampleRate,
            l = e.segments,
            s = e.x,
            c = e.y,
            f = e.styles,
            h = (0, r.useMemo)(
              function () {
                var e =
                    "number" == typeof s || void 0 === s
                      ? function () {
                          return s;
                        }
                      : s,
                  t =
                    "number" == typeof c || void 0 === c
                      ? function () {
                          return c;
                        }
                      : c;
                return l.map(function (n) {
                  return n.map(function (r, o) {
                    return { x: e(r, o, n), y: t(r, o, n) };
                  });
                });
              },
              [s, c, l]
            ),
            d = (0, r.useMemo)(
              function () {
                return ue({ x: s, y: c, defined: a, curve: o })(l.flat()) || "";
              },
              [s, c, a, o, l]
            ),
            p = (0, r.useMemo)(
              function () {
                return Tn({
                  path: d,
                  segmentation: i,
                  pointsInSegments: h,
                  sampleRate: u,
                });
              },
              [d, i, h, u]
            );
          return r.default.createElement(
            "g",
            null,
            p.map(function (e, o) {
              return t
                ? r.default.createElement(
                    r.default.Fragment,
                    { key: o },
                    t({ index: o, segment: e, styles: f[o] || f[o % f.length] })
                  )
                : r.default.createElement(
                    Me,
                    Sn(
                      { key: o, className: n, data: e, x: En, y: An },
                      f[o] || f[o % f.length]
                    )
                  );
            })
          );
        }
        Cn.propTypes = {
          segments: Mn().arrayOf(Mn().array).isRequired,
          styles: Mn().array.isRequired,
          children: Mn().func,
          className: Mn().string,
        };
      },
      1677: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, { Text: () => g, getStringWidth: () => l, useText: () => h });
        var r = n(9748),
          o = n(6488),
          a = n.n(o),
          i = n(8306),
          u = "__react_svg_text_measurement_id";
        const l = n.n(i)()(
          function (e, t) {
            try {
              var n = document.getElementById(u);
              if (!n) {
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                r.setAttribute("aria-hidden", "true"),
                  (r.style.width = "0"),
                  (r.style.height = "0"),
                  (r.style.position = "absolute"),
                  (r.style.top = "-100%"),
                  (r.style.left = "-100%"),
                  (n = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text"
                  )).setAttribute("id", u),
                  r.appendChild(n),
                  document.body.appendChild(r);
              }
              return (
                Object.assign(n.style, t),
                (n.textContent = e),
                n.getComputedTextLength()
              );
            } catch (e) {
              return null;
            }
          },
          function (e, t) {
            return e + "_" + JSON.stringify(t);
          }
        );
        var s = [
          "verticalAnchor",
          "scaleToFit",
          "angle",
          "width",
          "lineHeight",
          "capHeight",
          "children",
          "style",
        ];
        function c(e) {
          return "number" == typeof e;
        }
        function f(e) {
          return (
            ("number" == typeof e && Number.isFinite(e)) || "string" == typeof e
          );
        }
        function h(e) {
          var t = e.verticalAnchor,
            n = void 0 === t ? "end" : t,
            o = e.scaleToFit,
            i = void 0 !== o && o,
            u = e.angle,
            h = e.width,
            d = e.lineHeight,
            p = void 0 === d ? "1em" : d,
            v = e.capHeight,
            g = void 0 === v ? "0.71em" : v,
            m = e.children,
            y = e.style,
            _ = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, s),
            x = _.x,
            b = void 0 === x ? 0 : x,
            w = _.y,
            M = void 0 === w ? 0 : w,
            k = !f(b) || !f(M),
            O = (0, r.useMemo)(
              function () {
                return {
                  wordsWithWidth: (null == m
                    ? []
                    : m.toString().split(/(?:(?!\u00A0+)\s+)/)
                  ).map(function (e) {
                    return { word: e, wordWidth: l(e, y) || 0 };
                  }),
                  spaceWidth: l(" ", y) || 0,
                };
              },
              [m, y]
            ),
            N = O.wordsWithWidth,
            T = O.spaceWidth,
            S = (0, r.useMemo)(
              function () {
                return k
                  ? []
                  : h || i
                  ? N.reduce(function (e, t) {
                      var n = t.word,
                        r = t.wordWidth,
                        o = e[e.length - 1];
                      if (o && (null == h || i || (o.width || 0) + r + T < h))
                        o.words.push(n),
                          (o.width = o.width || 0),
                          (o.width += r + T);
                      else {
                        var a = { words: [n], width: r };
                        e.push(a);
                      }
                      return e;
                    }, [])
                  : [
                      {
                        words:
                          null == m
                            ? []
                            : m.toString().split(/(?:(?!\u00A0+)\s+)/),
                      },
                    ];
              },
              [k, h, i, m, N, T]
            ),
            E = (0, r.useMemo)(
              function () {
                return k
                  ? ""
                  : "start" === n
                  ? a()("calc(" + g + ")")
                  : "middle" === n
                  ? a()(
                      "calc(" +
                        (S.length - 1) / 2 +
                        " * -" +
                        p +
                        " + (" +
                        g +
                        " / 2))"
                    )
                  : a()("calc(" + (S.length - 1) + " * -" + p + ")");
              },
              [k, n, g, S.length, p]
            ),
            A = (0, r.useMemo)(
              function () {
                var e = [];
                if (k) return "";
                if (c(b) && c(M) && c(h) && i && S.length > 0) {
                  var t = S[0].width || 1,
                    n = "shrink-only" === i ? Math.min(h / t, 1) : h / t,
                    r = n,
                    o = b - n * b,
                    a = M - r * M;
                  e.push(
                    "matrix(" + n + ", 0, 0, " + r + ", " + o + ", " + a + ")"
                  );
                }
                return (
                  u && e.push("rotate(" + u + ", " + b + ", " + M + ")"),
                  e.length > 0 ? e.join(" ") : ""
                );
              },
              [k, b, M, h, i, S, u]
            );
          return { wordsByLines: S, startDy: E, transform: A };
        }
        var d = [
          "dx",
          "dy",
          "textAnchor",
          "innerRef",
          "innerTextRef",
          "verticalAnchor",
          "angle",
          "lineHeight",
          "scaleToFit",
          "capHeight",
          "width",
        ];
        function p() {
          return (
            (p = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            p.apply(this, arguments)
          );
        }
        var v = { overflow: "visible" };
        function g(e) {
          var t = e.dx,
            n = void 0 === t ? 0 : t,
            o = e.dy,
            a = void 0 === o ? 0 : o,
            i = e.textAnchor,
            u = void 0 === i ? "start" : i,
            l = e.innerRef,
            s = e.innerTextRef,
            c = (e.verticalAnchor, e.angle, e.lineHeight),
            f = void 0 === c ? "1em" : c,
            g =
              (e.scaleToFit,
              e.capHeight,
              e.width,
              (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, d)),
            m = g.x,
            y = void 0 === m ? 0 : m,
            _ = g.fontSize,
            x = h(e),
            b = x.wordsByLines,
            w = x.startDy,
            M = x.transform;
          return r.default.createElement(
            "svg",
            { ref: l, x: n, y: a, fontSize: _, style: v },
            b.length > 0
              ? r.default.createElement(
                  "text",
                  p({ ref: s, transform: M }, g, { textAnchor: u }),
                  b.map(function (e, t) {
                    return r.default.createElement(
                      "tspan",
                      { key: t, x: y, dy: 0 === t ? w : f },
                      e.words.join(" ")
                    );
                  })
                )
              : null
          );
        }
      },
      7724: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Portal: () => y,
            Tooltip: () => O,
            TooltipPositionConsumer: () => C,
            TooltipWithBounds: () => I,
            defaultStyles: () => M,
            useTooltip: () => i,
            useTooltipInPortal: () => G,
            useTooltipPosition: () => j,
            withTooltip: () => l,
          });
        var r = n(9748),
          o = ["tooltipOpen"];
        function a() {
          return (
            (a = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            a.apply(this, arguments)
          );
        }
        function i(e) {
          var t = (0, r.useState)(a({ tooltipOpen: !1 }, e)),
            n = t[0],
            i = t[1],
            u = (0, r.useCallback)(
              function (e) {
                return i(
                  "function" == typeof e
                    ? function (t) {
                        t.tooltipOpen;
                        var n = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            o = {},
                            a = Object.keys(e);
                          for (r = 0; r < a.length; r++)
                            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(t, o);
                        return a({}, e(n), { tooltipOpen: !0 });
                      }
                    : {
                        tooltipOpen: !0,
                        tooltipLeft: e.tooltipLeft,
                        tooltipTop: e.tooltipTop,
                        tooltipData: e.tooltipData,
                      }
                );
              },
              [i]
            ),
            l = (0, r.useCallback)(
              function () {
                return i({
                  tooltipOpen: !1,
                  tooltipLeft: void 0,
                  tooltipTop: void 0,
                  tooltipData: void 0,
                });
              },
              [i]
            );
          return {
            tooltipOpen: n.tooltipOpen,
            tooltipLeft: n.tooltipLeft,
            tooltipTop: n.tooltipTop,
            tooltipData: n.tooltipData,
            updateTooltip: i,
            showTooltip: u,
            hideTooltip: l,
          };
        }
        function u() {
          return (
            (u = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            u.apply(this, arguments)
          );
        }
        function l(e, t, n) {
          void 0 === t &&
            (t = {
              style: {
                position: "relative",
                width: "inherit",
                height: "inherit",
              },
            }),
            void 0 === n &&
              (n = function (e, t) {
                return r.default.createElement("div", t, e);
              });
          return function (o) {
            var a = i();
            return n(r.default.createElement(e, u({}, a, o)), t);
          };
        }
        var s = n(296),
          c = n.n(s);
        function f(e) {
          let {
            debounce: t,
            scroll: n,
            polyfill: o,
            offsetSize: a,
          } = void 0 === e ? { debounce: 0, scroll: !1, offsetSize: !1 } : e;
          const i =
            o ||
            ("undefined" == typeof window ? class {} : window.ResizeObserver);
          if (!i)
            throw new Error(
              "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
            );
          const [u, l] = (0, r.useState)({
              left: 0,
              top: 0,
              width: 0,
              height: 0,
              bottom: 0,
              right: 0,
              x: 0,
              y: 0,
            }),
            s = (0, r.useRef)({
              element: null,
              scrollContainers: null,
              resizeObserver: null,
              lastBounds: u,
            }),
            f = t ? ("number" == typeof t ? t : t.scroll) : null,
            d = t ? ("number" == typeof t ? t : t.resize) : null,
            v = (0, r.useRef)(!1);
          (0, r.useEffect)(
            () => (
              (v.current = !0),
              () => {
                v.current = !1;
              }
            )
          );
          const [g, m, y] = (0, r.useMemo)(() => {
            const e = () => {
              if (!s.current.element) return;
              const {
                  left: e,
                  top: t,
                  width: n,
                  height: r,
                  bottom: o,
                  right: i,
                  x: u,
                  y: c,
                } = s.current.element.getBoundingClientRect(),
                f = {
                  left: e,
                  top: t,
                  width: n,
                  height: r,
                  bottom: o,
                  right: i,
                  x: u,
                  y: c,
                };
              s.current.element instanceof HTMLElement &&
                a &&
                ((f.height = s.current.element.offsetHeight),
                (f.width = s.current.element.offsetWidth)),
                Object.freeze(f),
                v.current &&
                  !p(s.current.lastBounds, f) &&
                  l((s.current.lastBounds = f));
            };
            return [e, d ? c()(e, d) : e, f ? c()(e, f) : e];
          }, [l, a, f, d]);
          function _() {
            s.current.scrollContainers &&
              (s.current.scrollContainers.forEach((e) =>
                e.removeEventListener("scroll", y, !0)
              ),
              (s.current.scrollContainers = null)),
              s.current.resizeObserver &&
                (s.current.resizeObserver.disconnect(),
                (s.current.resizeObserver = null));
          }
          function x() {
            s.current.element &&
              ((s.current.resizeObserver = new i(y)),
              s.current.resizeObserver.observe(s.current.element),
              n &&
                s.current.scrollContainers &&
                s.current.scrollContainers.forEach((e) =>
                  e.addEventListener("scroll", y, { capture: !0, passive: !0 })
                ));
          }
          var b, w, M;
          return (
            (b = y),
            (w = Boolean(n)),
            (0, r.useEffect)(() => {
              if (w) {
                const e = b;
                return (
                  window.addEventListener("scroll", e, {
                    capture: !0,
                    passive: !0,
                  }),
                  () => {
                    window.removeEventListener("scroll", e, !0);
                  }
                );
              }
            }, [b, w]),
            (M = m),
            (0, r.useEffect)(() => {
              const e = M;
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, [M]),
            (0, r.useEffect)(() => {
              _(), x();
            }, [n, y, m]),
            (0, r.useEffect)(() => _, []),
            [
              (e) => {
                e &&
                  e !== s.current.element &&
                  (_(),
                  (s.current.element = e),
                  (s.current.scrollContainers = h(e)),
                  x());
              },
              u,
              g,
            ]
          );
        }
        function h(e) {
          const t = [];
          if (!e || e === document.body) return t;
          const {
            overflow: n,
            overflowX: r,
            overflowY: o,
          } = window.getComputedStyle(e);
          return (
            [n, r, o].some((e) => "auto" === e || "scroll" === e) && t.push(e),
            [...t, ...h(e.parentElement)]
          );
        }
        const d = [
            "x",
            "y",
            "top",
            "bottom",
            "left",
            "right",
            "width",
            "height",
          ],
          p = (e, t) => d.every((n) => e[n] === t[n]);
        var v = n(5697),
          g = n.n(v);
        function m(e, t) {
          return (
            (m = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            m(e, t)
          );
        }
        var y = (function (e) {
          var t, n;
          function o() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            m(t, n);
          var a = o.prototype;
          return (
            (a.componentWillUnmount = function () {
              this.node &&
                document.body &&
                (document.body.removeChild(this.node), delete this.node);
            }),
            (a.render = function () {
              return (
                this.node ||
                  "undefined" == typeof document ||
                  ((this.node = document.createElement("div")),
                  null != this.props.zIndex &&
                    (this.node.style.zIndex = "" + this.props.zIndex),
                  document.body.append(this.node)),
                this.node
                  ? r.default.createPortal(this.props.children, this.node)
                  : null
              );
            }),
            o
          );
        })(r.default.PureComponent);
        y.propTypes = { zIndex: g().oneOfType([g().number, g().string]) };
        var _ = n(4184),
          x = n.n(_),
          b = [
            "className",
            "top",
            "left",
            "offsetLeft",
            "offsetTop",
            "style",
            "children",
            "unstyled",
            "applyPositionStyle",
          ];
        function w() {
          return (
            (w = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            w.apply(this, arguments)
          );
        }
        var M = {
            position: "absolute",
            backgroundColor: "white",
            color: "#666666",
            padding: ".3rem .5rem",
            borderRadius: "3px",
            fontSize: "14px",
            boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
            lineHeight: "1em",
            pointerEvents: "none",
          },
          k = r.default.forwardRef(function (e, t) {
            var n = e.className,
              o = e.top,
              a = e.left,
              i = e.offsetLeft,
              u = void 0 === i ? 10 : i,
              l = e.offsetTop,
              s = void 0 === l ? 10 : l,
              c = e.style,
              f = void 0 === c ? M : c,
              h = e.children,
              d = e.unstyled,
              p = void 0 !== d && d,
              v = e.applyPositionStyle,
              g = void 0 !== v && v,
              m = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, b);
            return r.default.createElement(
              "div",
              w(
                {
                  ref: t,
                  className: x()("visx-tooltip", n),
                  style: w(
                    {
                      top: null == o || null == s ? o : o + s,
                      left: null == a || null == u ? a : a + u,
                    },
                    g && { position: "absolute" },
                    !p && f
                  ),
                },
                m
              ),
              h
            );
          });
        (k.propTypes = {
          children: g().node,
          className: g().string,
          left: g().number,
          offsetLeft: g().number,
          offsetTop: g().number,
          top: g().number,
          applyPositionStyle: g().bool,
          unstyled: g().bool,
        }),
          (k.displayName = "Tooltip");
        const O = k;
        function N() {
          return (
            (N = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            N.apply(this, arguments)
          );
        }
        function T(e, t) {
          return (
            (T = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            T(e, t)
          );
        }
        var S = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        var E = (0, r.createContext)({
            isFlippedVertically: !1,
            isFlippedHorizontally: !1,
          }),
          A = E.Provider,
          C = E.Consumer,
          j = function () {
            return (0, r.useContext)(E);
          },
          R = [
            "children",
            "getRects",
            "left",
            "offsetLeft",
            "offsetTop",
            "parentRect",
            "rect",
            "style",
            "top",
            "unstyled",
            "nodeRef",
          ];
        function P() {
          return (
            (P = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            P.apply(this, arguments)
          );
        }
        function F(e) {
          var t,
            n = e.children,
            o = (e.getRects, e.left),
            a = void 0 === o ? 0 : o,
            i = e.offsetLeft,
            u = void 0 === i ? 10 : i,
            l = e.offsetTop,
            s = void 0 === l ? 10 : l,
            c = e.parentRect,
            f = e.rect,
            h = e.style,
            d = void 0 === h ? M : h,
            p = e.top,
            v = void 0 === p ? 0 : p,
            g = e.unstyled,
            m = void 0 !== g && g,
            y = e.nodeRef,
            _ = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, R),
            x = !1,
            b = !1;
          if (f && c) {
            var w = a,
              k = v;
            if (c.width) {
              var N = w + u + f.width - c.width,
                T = f.width - w - u;
              x = N > 0 && N > T;
            } else {
              var S = w + u + f.width - window.innerWidth,
                E = f.width - w - u;
              x = S > 0 && S > E;
            }
            if (c.height) {
              var C = k + s + f.height - c.height,
                j = f.height - k - s;
              b = C > 0 && C > j;
            } else b = k + s + f.height > window.innerHeight;
            (w = x ? w - f.width - u : w + u),
              (k = b ? k - f.height - s : k + s),
              (t =
                "translate(" +
                (w = Math.round(w)) +
                "px, " +
                (k = Math.round(k)) +
                "px)");
          }
          return r.default.createElement(
            O,
            P(
              { ref: y, style: P({ left: 0, top: 0, transform: t }, !m && d) },
              _
            ),
            r.default.createElement(
              A,
              { value: { isFlippedVertically: !b, isFlippedHorizontally: !x } },
              n
            )
          );
        }
        F.propTypes = {
          nodeRef: g().oneOfType([g().string, g().func, g().object]),
        };
        const I =
          ((L = F),
          ((D = (function (e) {
            var t, n;
            function o(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  rect: void 0,
                  parentRect: void 0,
                }),
                (n.nodeRef = r.default.createRef()),
                (n.getRects = n.getRects.bind(
                  (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(n)
                )),
                n
              );
            }
            (n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              T(t, n);
            var a = o.prototype;
            return (
              (a.componentDidMount = function () {
                var e,
                  t = this;
                (this.node =
                  null != (e = this.nodeRef) && e.current
                    ? this.nodeRef.current
                    : r.default.findDOMNode(this)),
                  this.setState(function () {
                    return t.getRects();
                  });
              }),
              (a.getRects = function () {
                if (!this.node) return this.state;
                var e = this.node,
                  t = e.parentNode;
                return {
                  rect: e.getBoundingClientRect ? e.getBoundingClientRect() : S,
                  parentRect:
                    null != t && t.getBoundingClientRect
                      ? t.getBoundingClientRect()
                      : S,
                };
              }),
              (a.render = function () {
                return r.default.createElement(
                  L,
                  N(
                    { nodeRef: this.nodeRef, getRects: this.getRects },
                    this.state,
                    this.props
                  )
                );
              }),
              o
            );
          })(r.default.PureComponent)).displayName =
            "withBoundingRects(" + (L.displayName || "") + ")"),
          D);
        var L,
          D,
          U = ["detectBounds", "zIndex"],
          H = ["left", "top", "detectBounds", "zIndex"];
        function z() {
          return (
            (z = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            z.apply(this, arguments)
          );
        }
        function W(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        function G(e) {
          var t = void 0 === e ? {} : e,
            n = t.detectBounds,
            o = void 0 === n || n,
            a = t.zIndex,
            i = f(W(t, U)),
            u = i[0],
            l = i[1],
            s = i[2],
            c = (0, r.useState)(!1),
            h = c[0],
            d = c[1];
          (0, r.useEffect)(function () {
            d(!1);
          }, []);
          var p = (0, r.useMemo)(
            function () {
              return function (e) {
                var t = e.left,
                  n = void 0 === t ? 0 : t,
                  i = e.top,
                  u = void 0 === i ? 0 : i,
                  s = e.detectBounds,
                  c = e.zIndex,
                  f = W(e, H),
                  d = null == c ? a : c,
                  p = (null == s ? o : s) ? I : O,
                  v = h ? 0 : window.scrollX,
                  g = h ? 0 : window.scrollY,
                  m = n + (l.left || 0) + v,
                  _ = u + (l.top || 0) + g;
                return r.default.createElement(
                  y,
                  { zIndex: d },
                  r.default.createElement(p, z({ left: m, top: _ }, f))
                );
              };
            },
            [o, a, l.left, l.top, h]
          );
          return {
            containerRef: u,
            containerBounds: l,
            forceRefreshBounds: s,
            TooltipInPortal: p,
          };
        }
      },
      513: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = new (class {
          constructor() {
            this.config = { widgets: {} };
          }
          setConfig(e) {
            this.config = { ...this.config, ...e };
          }
          getConfig() {
            return this.config;
          }
        })();
        t.default = n;
      },
      6206: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(6400),
          o = n(9748);
        n(4965);
        var a = (0, o.memo)(function (e) {
          var t;
          const n =
              (null == e || null === (t = e.settings) || void 0 === t
                ? void 0
                : t.theme) || "light",
            o = "pm-fallback-container ".concat("dark" === n ? "dark" : "");
          return (0,
          r.h)("div", { className: o }, (0, r.h)("p", null, "Det finns tyvärr ingen statistik tillgänglig för denna match."));
        });
        t.default = a;
      },
      2351: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(6400),
          o = n(9748);
        n(2355);
        const a = {
            xG: "xG",
            xGC: "xGC",
            averageScored: "averageScored",
            averageConceded: "averageConceded",
            averageScoredBetween: "averageScoredBetween",
            averageScoredHomeAndAway: "averageScoredHomeAndAway",
            topScorersXG: "topScorersXG",
          },
          i = {
            xG: "Очекивани голови(xG)",
            xGC: "Очекивани примљени голови (xГЦ)",
            averageScored: "Просек постигнутих голова (цела сезона)",
            averageConceded: "Просечан број примљених голова (цела сезона)",
            averageScoredBetween: "Просечан број постигнутих голова (последњих 5)",
            averageScoredHomeAndAway: "Просечни голови постигнути код куће и у гостима",
          };
        function u(e) {
          let {
            home: t,
            total: n,
            away: a,
            metricText: i,
            hideMetricText: u = !1,
          } = e;
          const c = l(a, n),
            f = l(t, n),
            h = Math.round(100 * n) / 100;
          let d = !1;
          return (
            0 === t && 0 === a && (d = !0),
            (0, r.h)(
              o.Fragment,
              null,
              u
                ? null
                : (0, r.h)(
                    "div",
                    { className: "pm-row-metric", role: "row" },
                    (0, r.h)(
                      "div",
                      { className: "pm-metric pm-text", cell: "columnheader" },
                      i
                    )
                  ),
              (0, r.h)(
                "div",
                { className: "pm-row", role: "row" },
                (0, r.h)(
                  "div",
                  { className: "pm-home", role: "cell" },
                  (0, r.h)("span", { className: "pm-home-metric-text" }, s(t)),
                  (0, r.h)(
                    "div",
                    {
                      className: "pm-progress-container",
                      "aria-valuenow": f.width,
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      role: "progressbar",
                    },
                    (0, r.h)("div", {
                      className: "pm-progress-inner-left",
                      style: { width: f.width },
                    })
                  )
                ),
                (0, r.h)(
                  "div",
                  { className: "pm-metric pm-sum-text", role: "cell" },
                  d ? "-" : s(h)
                ),
                (0, r.h)(
                  "div",
                  { className: "pm-away", role: "cell" },
                  (0, r.h)(
                    "div",
                    {
                      className: "pm-progress-container",
                      "aria-valuemax": "100",
                      "aria-valuenow": c.width,
                      "aria-valuemin": "0",
                      role: "progressbar",
                    },
                    (0, r.h)("div", {
                      className: "pm-progress-inner-right",
                      style: { width: c.width },
                    })
                  ),
                  (0, r.h)("span", { className: "pm-away-metric-text" }, s(a))
                )
              )
            )
          );
        }
        function l(e, t) {
          let n = 0,
            r = 100;
          return (
            t > 0 && ((n = parseInt((e / t) * 100)), (r = 100 - n)),
            { marginLeft: "".concat(r, "%"), width: "".concat(n, "%") }
          );
        }
        function s(e) {
          return e ? parseFloat(e).toFixed(2) : e;
        }
        function c(e) {
          let {
            homePlayer: t,
            homePlayerXG: n,
            awayPlayer: o,
            awayPlayerXG: a,
          } = e;
          return (0, r.h)(
            "div",
            { className: "pm-xg-row" },
            (0, r.h)(
              "div",
              { className: "pm-xg-home-team" },
              (0, r.h)("span", { className: "pm-xg-value" }, s(n)),
              (0, r.h)(
                "span",
                { className: "pm-xg-scorer pm-xg-scorer-home" },
                f(t)
              )
            ),
            (0, r.h)(
              "div",
              { className: "pm-xg-away-team" },
              (0, r.h)(
                "span",
                { className: "pm-xg-scorer pm-xg-scorer-away" },
                f(o)
              ),
              (0, r.h)("span", { className: "pm-xg-value" }, s(a))
            )
          );
        }
        function f(e) {
          let t = e.split(" ");
          return e.length >= 15 && t.length ? "".concat(t[t.length - 1]) : e;
        }
        var h = (0, o.memo)(function (e) {
          var t, n, l;
          const s = e.data;
          if (!e.data)
            return (0, r.h)(
              "div",
              { className: "pm-container" },
              (0, r.h)(
                "div",
                { className: "pm-flex-row" },
                (0, r.h)(
                  "div",
                  { className: "pm-headline pm-fallback-text" },
                  "Det finns tyvärr ingen målstatistik tillgänglig."
                )
              )
            );
          const f =
              null != s && s.teams.home
                ? null == s
                  ? void 0
                  : s.teams.home
                : "",
            h =
              null != s && s.teams.away
                ? null == s
                  ? void 0
                  : s.teams.away
                : "",
            d = Object.keys(a).filter(
              (t) =>
                (null == e ? void 0 : e.settings.length) > 0 &&
                (null == e ? void 0 : e.settings.includes(t))
            ),
            p = d.length > 0 ? d[0] : null;
          return (0, r.h)(
            "div",
            { className: "pm-container", id: "pm-container", role: "table" },
            (0, r.h)(
              "div",
              { className: "pm-row-team", role: "row" },
              (0, r.h)(
                "div",
                { className: "pm-home-name pm-text", role: "columnheader" },
                f
              ),
              (0, r.h)(
                "div",
                { className: "pm-metric pm-text", role: "columnheader" },
                p ? i[p] : null
              ),
              (0, r.h)(
                "div",
                { className: "pm-away-name pm-text", role: "columnheader" },
                h
              )
            ),
            d.includes(a.xG)
              ? (function (e, t) {
                  const n = Number(e.home) >= 0 ? parseFloat(e.home) : "",
                    r = Number(e.away) >= 0 ? parseFloat(e.away) : "",
                    o = "" !== n && "" !== r ? n + r : "",
                    l = i.xG;
                  return u({
                    home: n,
                    total: o,
                    away: r,
                    metricText: l,
                    hideMetricText: t === a.xG,
                  });
                })(
                  null == e || null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.expectedGoals,
                  p
                )
              : null,
            d.includes(a.xGC)
              ? (function (e, t) {
                  const n = Number(e.home) >= 0 ? parseFloat(e.home) : "",
                    r = Number(e.away) >= 0 ? parseFloat(e.away) : "";
                  return u({
                    home: n,
                    away: r,
                    total: "" !== n && "" !== r ? n + r : "",
                    metricText: i.xGC,
                    hideMetricText: t === a.xGC,
                  });
                })(
                  null == e || null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.expectedGoalsConceded,
                  p
                )
              : null,
            d.includes(a.averageScored)
              ? (function (e, t) {
                  const n = Number(e.home) >= 0 ? parseFloat(e.home) : "",
                    r = Number(e.away) >= 0 ? parseFloat(e.away) : "";
                  return u({
                    home: n,
                    away: r,
                    total: "" !== n && "" !== r ? n + r : "",
                    metricText: i.averageScored,
                    hideMetricText: t === a.averageScored,
                  });
                })(
                  null == e || null === (l = e.data) || void 0 === l
                    ? void 0
                    : l.averageScoredEntireSeason,
                  p
                )
              : null,
            d.includes(a.averageConceded)
              ? (function (e, t) {
                  const n = Number(e.home) >= 0 ? parseFloat(e.home) : "",
                    r = Number(e.away) >= 0 ? parseFloat(e.away) : "";
                  return u({
                    home: n,
                    away: r,
                    total: "" !== n && "" !== r ? n + r : "",
                    metricText: i.averageConceded,
                    hideMetricText: t === a.averageConceded,
                  });
                })(
                  null == e ? void 0 : e.data.averageGoalsConcededEntireSeason,
                  p
                )
              : null,
            d.includes(a.averageScoredBetween)
              ? (function (e, t) {
                  const n = Number(e.home) >= 0 ? parseFloat(e.home) : "",
                    r = Number(e.away) >= 0 ? parseFloat(e.away) : "";
                  return u({
                    home: n,
                    away: r,
                    total: "" !== n && "" !== r ? n + r : "",
                    metricText: i.averageScoredBetween,
                    hideMetricText: t === a.averageScoredBetween,
                  });
                })(
                  null == e ? void 0 : e.data.averageScoredBetweenFiveLatest,
                  p
                )
              : null,
            d.includes(a.averageScoredHomeAndAway)
              ? (function (e, t) {
                  const n = Number(e.home) >= 0 ? parseFloat(e.home) : "",
                    r = Number(e.away) >= 0 ? parseFloat(e.away) : "";
                  return u({
                    home: n,
                    away: r,
                    total: "" !== n && "" !== r ? n + r : "",
                    metricText: i.averageScoredHomeAndAway,
                    hideMetricText: t === a.averageScoredHomeAndAway,
                  });
                })(null == e ? void 0 : e.data.averageScoredHomeAndAway, p)
              : null,
            d.includes(a.topScorersXG)
              ? (function (e) {
                  if (!e.home || !e.away) return null;
                  return (0, r.h)(
                    o.Fragment,
                    null,
                    (0, r.h)("div", { className: "pm-divider" }),
                    (0, r.h)(
                      "div",
                      { className: "pm-flex-row" },
                      (0, r.h)(
                        "h2",
                        { className: "pm-headline" },
                        "Играч са највећим очекиваним бројем голова"
                      )
                    ),
                    c({
                      homePlayer: e.home[0].name,
                      homePlayerXG: e.home[0].xg,
                      awayPlayer: e.away[0].name,
                      awayPlayerXG: e.away[0].xg,
                    }),
                    c({
                      homePlayer: e.home[1].name,
                      homePlayerXG: e.home[1].xg,
                      awayPlayer: e.away[1].name,
                      awayPlayerXG: e.away[1].xg,
                    }),
                    c({
                      homePlayer: e.home[2].name,
                      homePlayerXG: e.home[2].xg,
                      awayPlayer: e.away[2].name,
                      awayPlayerXG: e.away[2].xg,
                    })
                  );
                })(null == e ? void 0 : e.data.topScorers)
              : null,
            (0, r.h)(
              "div",
              { className: "pm-flex-row" },
              (0, r.h)(
                "div",
                { className: "pm-data-powered-text" },
                "Data powered by: PlaymakerAI"
              ),
              (0, r.h)(
                "div",
                { className: "pm-logo" },
                (0, r.h)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "pm-logo-size",
                    "data-testid": "pm-logo-id",
                    viewBox: "0 0 86.57 86.57",
                  },
                  (0, r.h)(
                    "defs",
                    null,
                    (0, r.h)("style", null, ".cls-2{fill:#e6302d}")
                  ),
                  (0, r.h)("path", {
                    d: "M39.77 54.81 55.7 43.95l-.01-11.59-15.93 10.8.01 11.65z",
                    style: { fill: "#ce171a" },
                  }),
                  (0, r.h)("path", {
                    d: "M55.7 43.95 35.12 28.93l.01-11.58L55.71 32.3l-.01 11.65zM30.87 69.23V49.15l9.29-6.26.04 19.58-9.33 6.76z",
                    className: "cls-2",
                  })
                ),
                (0, r.h)("span", { className: "pm-logo-text" }, "PlaymakerAI")
              )
            )
          );
        });
        t.default = h;
      },
      3730: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GoalWidget = void 0);
        var r = n(6400),
          o = u(n(1959)),
          a = u(n(513)),
          i = u(n(2351));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.GoalWidget = class {
          constructor(e) {
            let { rootNodeId: t, matchId: n, settings: r } = e;
            (this._rootNodeId = t),
              (this._matchId = n),
              (this._settings = r),
              (this._data = null);
          }
          changeSettings(e) {
            o.default.log("Change settings", e),
              (this._settings = e.settings),
              this._renderWidget();
          }
          remove() {
            const e = document.getElementById(this._rootNodeId);
            e && (0, r.render)(null, e),
              delete a.default.getConfig().widgets[this._rootNodeId];
          }
          update(e) {
            let { matchId: t } = e;
            t
              ? ((this._matchId = t), this._fetchAndRenderWidget())
              : o.default.error("MatchId required");
          }
          _renderWidget() {
            const e = document.getElementById(this._rootNodeId);
            e
              ? ((0, r.render)(
                  (0, r.h)(i.default, {
                    matchId: this._matchId,
                    settings: this._settings,
                    data: this._data,
                  }),
                  e
                ),
                (a.default.getConfig().widgets[this._rootNodeId] = this))
              : o.default.error(
                  "Unable to find node with ID ".concat(this._rootNodeId)
                );
          }
          _fetchData() {
            return this._matchId
              ? (o.default.log("Fetching data for game ".concat(this._matchId)),
                fetch(
                  ""
                    .concat("https://widget.playmaker.ai", "/")
                    .concat(this._matchId, ".json")
                )
                  .then((e) =>
                    e.status >= 400
                      ? (o.default.warn(
                          "Failed to fetch data for game ",
                          this._matchId
                        ),
                        null)
                      : e.json()
                  )
                  .catch((e) => {
                    o.default.error("Error fetching data", e);
                  }))
              : Promise.resolve(null);
          }
          _fetchAndRenderWidget() {
            this._fetchData()
              .then((e) => {
                (this._data = e), this._renderWidget();
              })
              .catch((e) => {
                o.default.log(e);
              });
          }
        };
      },
      1959: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        const n = { log: 1, info: 2, warn: 3, error: 4 };
        var r = new (class {
          constructor() {
            this._config = { debug: !0, logLevel: "error" };
          }
          init(e) {
            this._config = Object.assign({}, this._config, e);
          }
          _handler(e) {
            if (this._config.debug && n[e] >= n[this._config.logLevel]) {
              for (
                var t = arguments.length,
                  r = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                r[o - 1] = arguments[o];
              return console[e](...r);
            }
          }
          log() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return this._handler("log", ...t);
          }
          info() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return this._handler("info", ...t);
          }
          warn() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return this._handler("warn", ...t);
          }
          error() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return this._handler("error", ...t);
          }
        })();
        t.default = r;
      },
      1191: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SpiderWidget = void 0);
        var r = n(6400),
          o = l(n(1959)),
          a = l(n(513)),
          i = l(n(4730)),
          u = l(n(6206));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const s = [
          "entireSeason",
          "entireSeasonHome",
          "entireSeasonAway",
          "lastFiveGames",
          "lastFiveGamesHome",
          "lastFiveGamesAway",
        ];
        t.SpiderWidget = class {
          constructor(e) {
            let { rootNodeId: t, matchId: n, settings: r } = e;
            (this._rootNodeId = t),
              (this._matchId = n),
              (this._settings = r),
              (this._data = null);
          }
          changeSettings(e) {
            let t = !1;
            "tooltipOpen" in e && (t = !0),
              (this._settings = { ...this._settings, ...e }),
              this._renderWidget(t);
          }
          remove() {
            const e = document.getElementById(this._rootNodeId);
            e && ((0, r.render)(null, e), (this._data = null)),
              delete a.default.getConfig().widgets[this._rootNodeId];
          }
          update(e) {
            let { matchId: t } = e;
            t
              ? ((this._matchId = t), this._fetchAndRenderWidget())
              : o.default.error("MatchId required");
          }
          _renderWidget() {
            var e;
            let t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const n = document.getElementById(this._rootNodeId);
            let l = null;
            if (
              "string" ==
                typeof (null === (e = this._settings) || void 0 === e
                  ? void 0
                  : e.displayMode) &&
              s.includes(this._settings.displayMode) &&
              this._data
            )
              switch (this._settings.displayMode) {
                case "entireSeason":
                  l = this._data.entireSeason;
                  break;
                case "entireSeasonHome":
                  l = {
                    homeTeam: this._data.entireSeason.homeTeam,
                    awayTeam: this._data.entireSeason.awayTeam,
                    homeTeamMetrics: this._data.entireSeason.homeTeamMetrics,
                  };
                  break;
                case "entireSeasonAway":
                  l = {
                    homeTeam: this._data.entireSeason.homeTeam,
                    awayTeam: this._data.entireSeason.awayTeam,
                    awayTeamMetrics: this._data.entireSeason.awayTeamMetrics,
                  };
                  break;
                case "lastFiveGames":
                  l = this._data.lastFiveGames;
                  break;
                case "lastFiveGamesHome":
                  l = {
                    homeTeam: this._data.lastFiveGames.homeTeam,
                    awayTeam: this._data.lastFiveGames.awayTeam,
                    homeTeamMetrics: this._data.lastFiveGames.homeTeamMetrics,
                  };
                  break;
                case "lastFiveGamesAway":
                  l = {
                    homeTeam: this._data.lastFiveGames.homeTeam,
                    awayTeam: this._data.lastFiveGames.awayTeam,
                    awayTeamMetrics: this._data.lastFiveGames.awayTeamMetrics,
                  };
                  break;
                default:
                  l = null;
              }
            n
              ? (l
                  ? (t && (0, r.render)(null, n),
                    (0, r.render)(
                      (0, r.h)(i.default, {
                        data: l,
                        settings: this._settings,
                      }),
                      n
                    ))
                  : (0, r.render)(
                      (0, r.h)(u.default, { settings: this._settings }),
                      n
                    ),
                (a.default.getConfig().widgets[this._rootNodeId] = this))
              : o.default.error(
                  "Unable to find node with ID ".concat(this._rootNodeId)
                );
          }
          _fetchData() {
            return this._matchId
              ? fetch(
                  ""
                    .concat("https://widget.playmaker.ai", "/ts-")
                    .concat(this._matchId, ".json")
                )
                  .then((e) =>
                    e.status >= 400
                      ? (o.default.warn(
                          "Failed to fetch data for game ",
                          this._matchId
                        ),
                        null)
                      : e.json()
                  )
                  .catch((e) => {
                    o.default.error("Error fetching data", e);
                  })
              : Promise.resolve(null);
          }
          _fetchAndRenderWidget() {
            this._fetchData()
              .then((e) => {
                (this._data = e), this._renderWidget();
              })
              .catch((e) => {
                o.default.error(e);
              });
          }
        };
      },
      4730: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          o = n(6400),
          a = n(9748),
          i = ((r = n(5142)) && r.__esModule, n(9958)),
          u = n(8788),
          l = n(9177),
          s = n(1677),
          c = n(7724),
          f = n(4075);
        function h() {
          return (
            (h = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            h.apply(this, arguments)
          );
        }
        n(720);
        const d = 360,
          p = {
            light: {
              backgroundColor: "#00000000",
              primary: "#c2c2c2",
              innerLines: "#c2c2c2",
              innerRadialLines: "#c2c2c2",
              home: "#ED0000",
              away: "#256FEA",
            },
            dark: {
              backgroundColor: "#00000000",
              primary: "#FFFFFF",
              innerLines: "#858585",
              innerRadialLines: "#858585",
              home: "#ED0000",
              away: "#256FEA",
            },
          };
        function v(e) {
          var t,
            n,
            r,
            a,
            h,
            v,
            m,
            y,
            _,
            x,
            b,
            w,
            M,
            k,
            O,
            N,
            T,
            S,
            E,
            A,
            C,
            j,
            R;
          let {
            width: P,
            height: F,
            margin: I = { left: 10, right: 10, top: 10, bottom: 10 },
            padding: L = 16,
            data: D,
            shouldTooltipOpen: U = !1,
            theme: H = "light",
            displayMode: z,
          } = e;
          const W = "dark" === H ? p.dark : p.light;
          let G = null;
          D.homeTeamMetrics && (G = (0, f.mapMetrics)(D.homeTeamMetrics));
          let $ = null;
          D.awayTeamMetrics && ($ = (0, f.mapMetrics)(D.awayTeamMetrics));
          const B = P - I.left,
            q = F - I.bottom,
            V = Math.min(B, q) / 2 - 4,
            Y = (0, i.scaleLinear)({ range: [0, 2 * Math.PI], domain: [d, 0] }),
            X = (0, i.scaleLinear)({ range: [0, V - 8], domain: [0, 1] }),
            Z = (0, f.genLastLevelWebAngle)(6),
            Q = (0, f.genMidLevelWebAngle)(6),
            J = (0, f.genFirstLevelAngle)(6),
            K = (0, f.genPoints)(6, V - 8);
          let ee = null;
          Array.isArray(G) &&
            G.length > 0 &&
            (ee = (0, f.genPolygonPoints)(
              G,
              (e) => {
                var t;
                return null !== (t = X(e)) && void 0 !== t ? t : 0;
              },
              (e) => e.value
            ));
          let te = null;
          Array.isArray($) &&
            $.length > 0 &&
            (te = (0, f.genPolygonPoints)(
              $,
              (e) => {
                var t;
                return null !== (t = X(e)) && void 0 !== t ? t : 0;
              },
              (e) => e.value
            ));
          const ne = (0, f.getPoints)(3, (3 * V - 8) / 3),
            re = (0, f.genPoints)(6, V + 1.5 * L),
            {
              tooltipLeft: oe,
              tooltipTop: ae,
              tooltipOpen: ie,
              showTooltip: ue,
              hideTooltip: le,
            } = (0, c.useTooltip)({ tooltipOpen: U });
          return (0, o.h)(
            "div",
            { className: "pm-spider-position-relative", role: "figure" },
            (0, o.h)(
              "svg",
              {
                width: P,
                height: F,
                className: "pm-spider-svg-container",
                role: "img",
                "aria-label": "Spindeldiagram",
                alt: (0, f.altSpiderText)(z),
              },
              (0, o.h)(
                u.Group,
                {
                  top: F / 2,
                  left: P / 2,
                  onClick: (e, t) => {
                    ue({ tooltipLeft: P / 2 - 10, tooltipTop: F / 2 - 10 });
                  },
                  "aria-label": "Click to display exact values in a tooltip",
                },
                (0, o.h)(
                  s.Text,
                  {
                    x: ne.x,
                    y: -(V - 8),
                    textAnchor: "middle",
                    verticalAnchor: "end",
                    fontSize: "12",
                    fill: W.primary,
                  },
                  "1"
                ),
                (function (e, t, n) {
                  const r = g({
                      x: e[3].x,
                      y: e[3].y,
                      textAnchor: "middle",
                      verticalAnchor: "middle",
                      lines: ["Поправљене ситуације", "(Офанзивно)"],
                      isTop: !0,
                      theme: t,
                      padding: n,
                    }),
                    a = (0, o.h)(
                      s.Text,
                      {
                        x: e[2].x,
                        y: e[2].y,
                        fontSize: 14,
                        fontWeight: 500,
                        fill: t.primary,
                        verticalAnchor: "start",
                        textAnchor: "end",
                        angle:
                          (0, f.getAngleForTextLabels)(
                            e[2].x,
                            e[2].y,
                            e[3].x,
                            e[3].y
                          ) + 180,
                      },
                      "Шансе за"
                    ),
                    i = (0, o.h)(
                      s.Text,
                      {
                        x: e[1].x,
                        y: e[1].y,
                        fontSize: 14,
                        fontWeight: 500,
                        fill: t.primary,
                        verticalAnchor: "end",
                        textAnchor: "end",
                        angle:
                          (0, f.getAngleForTextLabels)(
                            e[1].x,
                            e[1].y,
                            e[0].x,
                            e[0].y
                          ) + 180,
                      },
                      "Контра напада"
                    ),
                    u = g({
                      x: e[0].x,
                      y: e[0].y,
                      verticalAnchor: "end",
                      textAnchor: "middle",
                      lines: ["Фиксне ситуације", "(одбрамбени)"],
                      theme: t,
                      padding: n,
                    }),
                    l = (0, o.h)(
                      s.Text,
                      {
                        x: e[5].x,
                        y: e[5].y,
                        fontSize: 14,
                        fontWeight: 500,
                        fill: t.primary,
                        verticalAnchor: "end",
                        textAnchor: "start",
                        angle: (0, f.getAngleForTextLabels)(
                          e[5].x,
                          e[5].y,
                          e[0].x,
                          e[0].y
                        ),
                      },
                      "Оддс против"
                    ),
                    c = (0, o.h)(
                      s.Text,
                      {
                        x: e[4].x,
                        y: e[4].y,
                        fontSize: 14,
                        fontWeight: 500,
                        fill: t.primary,
                        verticalAnchor: "start",
                        textAnchor: "start",
                        angle: (0, f.getAngleForTextLabels)(
                          e[4].x,
                          e[4].y,
                          e[3].x,
                          e[3].y
                        ),
                      },
                      "Поседовање лопте"
                    );
                  return [r, a, i, u, l, c];
                })(re, W, L),
                (0, o.h)(l.LineRadial, {
                  data: Z,
                  angle: (e) => {
                    var t;
                    return null !== (t = Y(e.angle)) && void 0 !== t ? t : 0;
                  },
                  radius: V - 8,
                  fill: W.backgroundColor,
                  stroke: W.primary,
                  strokeWidth: 3,
                  strokeOpacity: 1,
                  strokeLinecap: "round",
                }),
                (0, o.h)(l.LineRadial, {
                  data: Q,
                  angle: (e) => {
                    var t;
                    return null !== (t = Y(e.angle)) && void 0 !== t ? t : 0;
                  },
                  radius: (2 * V) / 3 - 8,
                  fill: "none",
                  stroke: W.innerRadialLines,
                  strokeWidth: 0.8,
                  strokeOpacity: 0.6,
                  strokeLinecap: "round",
                }),
                (0, o.h)(l.LineRadial, {
                  data: J,
                  angle: (e) => {
                    var t;
                    return null !== (t = Y(e.angle)) && void 0 !== t ? t : 0;
                  },
                  radius: V / 3 - 8,
                  fill: "none",
                  stroke: W.innerRadialLines,
                  strokeWidth: 0.8,
                  strokeOpacity: 0.6,
                  strokeLinecap: "round",
                }),
                (0, o.h)(
                  s.Text,
                  {
                    fontSize: "12",
                    textAnchor: "middle",
                    verticalAnchor: "middle",
                    fill: W.primary,
                  },
                  "0.0"
                ),
                (function (e, t, n, r) {
                  const a = 10,
                    i = (0, f.genPoints)(6, a),
                    u = (function (e, t, n, r, a) {
                      const i = 0.85,
                        u = 1.15,
                        c = 0.91,
                        h = n - 8,
                        d = (0, f.getPoints)(3, h / r);
                      d.y = d.y * i;
                      const p = (0, o.h)(l.Line, {
                          from: t,
                          to: d,
                          stroke: a.innerLines,
                          strokeWidth: 1,
                        }),
                        v = (0, f.getPoints)(3, h / r),
                        g = { ...v };
                      v.y = v.y * u;
                      const m = (0, f.getPoints)(3, (2 * h) / r),
                        y = { ...m };
                      m.y = m.y * c;
                      const _ = (0, o.h)(
                          s.Text,
                          {
                            x: g.x,
                            y: g.y,
                            fontSize: "12",
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                            fill: a.primary,
                          },
                          "0.3"
                        ),
                        x = (0, o.h)(l.Line, {
                          from: v,
                          to: m,
                          stroke: a.innerLines,
                          strokeWidth: 1,
                        }),
                        b = (0, o.h)(
                          s.Text,
                          {
                            x: y.x,
                            y: y.y,
                            fontSize: "12",
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                            fill: a.primary,
                          },
                          "0.6"
                        ),
                        w = 0.98,
                        M = 1.07,
                        k = (0, f.getPoints)(3, (2 * h) / r),
                        O = (0, f.getPoints)(3, (3 * h) / r);
                      (k.y = k.y * M), (O.y = O.y * w);
                      const N = (0, o.h)(l.Line, {
                        from: k,
                        to: O,
                        stroke: a.innerLines,
                        strokeWidth: 1,
                      });
                      return [p, _, x, b, N];
                    })(e[3], i[3], t, n, r);
                  return [
                    (0, o.h)(l.Line, {
                      from: i[0],
                      to: e[0],
                      stroke: r.innerLines,
                    }),
                    (0, o.h)(l.Line, {
                      from: i[1],
                      to: e[1],
                      stroke: r.innerLines,
                    }),
                    (0, o.h)(l.Line, {
                      from: i[2],
                      to: e[2],
                      stroke: r.innerLines,
                    }),
                    ...u,
                    (0, o.h)(l.Line, {
                      from: i[4],
                      to: e[4],
                      stroke: r.innerLines,
                    }),
                    (0, o.h)(l.Line, {
                      from: i[5],
                      to: e[5],
                      stroke: r.innerLines,
                    }),
                  ];
                })(K, V, 3, W),
                ee
                  ? (0, o.h)("polygon", {
                      points: ee.pointString,
                      fill: W.home,
                      fillOpacity: 0.4,
                      stroke: W.home,
                      strokeWidth: 2,
                    })
                  : null,
                te
                  ? (0, o.h)("polygon", {
                      points: te.pointString,
                      fill: W.away,
                      fillOpacity: 0.4,
                      stroke: W.away,
                      strokeWidth: 2,
                    })
                  : null
              )
            ),
            ie && 0 !== P && 0 !== F
              ? (0, o.h)(
                  c.Tooltip,
                  {
                    key: Math.random(),
                    top: ae || F / 2 - 10,
                    left: oe || P / 2 - 10,
                    className: "pm-spider-tooltip",
                    role: "tooltip",
                    style: { ...c.defaultStyles, pointerEvents: "auto" },
                  },
                  (0, o.h)(
                    "div",
                    { className: "pm-spider-tooltip-container" },
                    (0, o.h)(
                      "div",
                      { className: "pm-spider-tooltip-row" },
                      (0, o.h)(
                        "div",
                        { className: "pm-spider-tooltip-label" },
                        "Фиксне ситуације (офанзивно)"
                      ),
                      (0, o.h)(
                        "div",
                        null,
                        G
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-home",
                              },
                              null !== (t = G[3].value) && void 0 !== t ? t : 0
                            )
                          : null,
                        $
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-away",
                              },
                              null !==
                                (n =
                                  null === (r = $[3]) || void 0 === r
                                    ? void 0
                                    : r.value) && void 0 !== n
                                ? n
                                : 0
                            )
                          : null
                      )
                    ),
                    (0, o.h)(
                      "div",
                      { className: "pm-spider-tooltip-row" },
                      (0, o.h)(
                        "div",
                        { className: "pm-spider-tooltip-label" },
                        "Шансе (офанзивно)"
                      ),
                      (0, o.h)(
                        "div",
                        null,
                        G
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-home",
                              },
                              null !==
                                (a =
                                  null === (h = G[2]) || void 0 === h
                                    ? void 0
                                    : h.value) && void 0 !== a
                                ? a
                                : 0
                            )
                          : null,
                        $
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-away",
                              },
                              null !==
                                (v =
                                  null === (m = $[2]) || void 0 === m
                                    ? void 0
                                    : m.value) && void 0 !== v
                                ? v
                                : 0
                            )
                          : null
                      )
                    ),
                    (0, o.h)(
                      "div",
                      { className: "pm-spider-tooltip-row" },
                      (0, o.h)(
                        "div",
                        { className: "pm-spider-tooltip-label" },
                        "Контра напада"
                      ),
                      (0, o.h)(
                        "div",
                        null,
                        G
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-home",
                              },
                              null !==
                                (y =
                                  null === (_ = G[1]) || void 0 === _
                                    ? void 0
                                    : _.value) && void 0 !== y
                                ? y
                                : 0
                            )
                          : null,
                        $
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-away",
                              },
                              null !==
                                (x =
                                  null === (b = $[1]) || void 0 === b
                                    ? void 0
                                    : b.value) && void 0 !== x
                                ? x
                                : 0
                            )
                          : null
                      )
                    ),
                    (0, o.h)(
                      "div",
                      { className: "pm-spider-tooltip-row" },
                      (0, o.h)(
                        "div",
                        { className: "pm-spider-tooltip-label" },
                        "Фиксне ситуације (одбрамбени)"
                      ),
                      (0, o.h)(
                        "div",
                        null,
                        G
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-home",
                              },
                              null !==
                                (w =
                                  null === (M = G[0]) || void 0 === M
                                    ? void 0
                                    : M.value) && void 0 !== w
                                ? w
                                : 0
                            )
                          : null,
                        $
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-away",
                              },
                              null !==
                                (k =
                                  null === (O = $[0]) || void 0 === O
                                    ? void 0
                                    : O.value) && void 0 !== k
                                ? k
                                : 0
                            )
                          : null
                      )
                    ),
                    (0, o.h)(
                      "div",
                      { className: "pm-spider-tooltip-row" },
                      (0, o.h)(
                        "div",
                        { className: "pm-spider-tooltip-label" },
                        "Шансе (одбрана)"
                      ),
                      (0, o.h)(
                        "div",
                        null,
                        G
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-home",
                              },
                              null !==
                                (N =
                                  null === (T = G[5]) || void 0 === T
                                    ? void 0
                                    : T.value) && void 0 !== N
                                ? N
                                : 0
                            )
                          : null,
                        $
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-away",
                              },
                              null !==
                                (S =
                                  null === (E = $[5]) || void 0 === E
                                    ? void 0
                                    : E.value) && void 0 !== S
                                ? S
                                : 0
                            )
                          : null
                      )
                    ),
                    (0, o.h)(
                      "div",
                      { className: "pm-spider-tooltip-row" },
                      (0, o.h)(
                        "div",
                        { className: "pm-spider-tooltip-label" },
                        "Поседовање лопте"
                      ),
                      (0, o.h)(
                        "div",
                        null,
                        G
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-home",
                              },
                              null !==
                                (A =
                                  null === (C = G[4]) || void 0 === C
                                    ? void 0
                                    : C.value) && void 0 !== A
                                ? A
                                : 0
                            )
                          : null,
                        $
                          ? (0, o.h)(
                              "div",
                              {
                                className:
                                  "pm-spider-tooltip-value pm-spider-tooltip-value-away",
                              },
                              null !==
                                (j =
                                  null === (R = $[4]) || void 0 === R
                                    ? void 0
                                    : R.value) && void 0 !== j
                                ? j
                                : 0
                            )
                          : null
                      )
                    ),
                    (0, o.h)(
                      "button",
                      {
                        onClick: () => {
                          le();
                        },
                        className: "pm-spider-tooltip-btn",
                      },
                      "Близу"
                    )
                  )
                )
              : null
          );
        }
        function g(e) {
          let {
            x: t,
            y: n,
            verticalAnchor: r,
            textAnchor: a,
            lines: i,
            isTop: u = !1,
            theme: l,
            padding: c,
          } = e;
          const f = {
              dx: 0,
              dy: 0,
              lineHeight: "1em",
              scaleToFit: !1,
              x: t,
              y: n,
              fontSize: 14,
              fontWeight: 500,
              fill: l.primary,
              verticalAnchor: r,
              textAnchor: a,
            },
            d = (0, s.useText)({ ...f, children: i[0] }),
            p = (0, s.useText)({ ...f, children: i[1] });
          return (0, o.h)(
            "svg",
            { fontSize: 14, style: { overflow: "visible" } },
            d.wordsByLines.length > 0
              ? (0, o.h)(
                  "text",
                  h({ transform: d.transform }, f, {
                    textAnchor: a,
                    y: u ? n : n - c,
                  }),
                  d.wordsByLines.map((e, n) =>
                    (0, o.h)(
                      "tspan",
                      { x: t, dy: d.startDy },
                      e.words.join(" ")
                    )
                  )
                )
              : null,
            p.wordsByLines.length > 0
              ? (0, o.h)(
                  "text",
                  h({ transform: p.transform }, f, {
                    textAnchor: a,
                    y: u ? n + c : n,
                  }),
                  p.wordsByLines.map((e, n) =>
                    (0, o.h)(
                      "tspan",
                      { x: t, dy: p.startDy },
                      e.words.join(" ")
                    )
                  )
                )
              : null
          );
        }
        var m = (0, a.memo)(function (e) {
          var t, n, r, a, i, u, l, s, c, f;
          const h =
              null !==
                (t =
                  null == e || null === (n = e.settings) || void 0 === n
                    ? void 0
                    : n.theme) && void 0 !== t
                ? t
                : "light",
            d = "pm-spider-container ".concat("dark" === h ? "dark" : ""),
            p =
              null !==
                (r =
                  null == e || null === (a = e.settings) || void 0 === a
                    ? void 0
                    : a.displayMode) && void 0 !== r
                ? r
                : "";
          return (0,
          o.h)("div", { className: d }, (0, o.h)("div", { className: "pm-spider-radar-container" }, (0, o.h)(v, { width: 350, height: 402, data: e.data, shouldTooltipOpen: null !== (i = null == e || null === (u = e.settings) || void 0 === u ? void 0 : u.tooltipOpen) && void 0 !== i && i, displayMode: p, theme: h }), (0, o.h)("div", { className: "pm-spider-legend" }, null != e && null !== (l = e.data) && void 0 !== l && l.homeTeamMetrics && null != e && null !== (s = e.data) && void 0 !== s && s.homeTeam ? (0, o.h)("div", { className: "pm-spider-legend-team" }, (0, o.h)("span", { className: "pm-spider-legend-home-square" }), (0, o.h)("span", { className: "pm-spider-home-team" }, null == e ? void 0 : e.data.homeTeam)) : null, null != e && null !== (c = e.data) && void 0 !== c && c.awayTeamMetrics && null != e && null !== (f = e.data) && void 0 !== f && f.awayTeam ? (0, o.h)("div", { className: "pm-spider-legend-team" }, (0, o.h)("span", { className: "pm-spider-legend-away-square" }), (0, o.h)("span", { className: "pm-spider-away-team" }, null == e ? void 0 : e.data.awayTeam)) : null)));
        });
        t.default = m;
      },
      4075: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.altSpiderText = function (e) {
            return (
              {
                entireSeason: "Spindeldiagram hela säsongen",
                entireSeasonHome: "Spindeldiagram hemmalag hela säsongen",
                entireSeasonAway: "Spindeldiagram bortalag hela säsongen",
                lastFiveGames: "Spindeldiagram senaste fem matcherna",
                lastFiveGamesHome:
                  "Spindeldiagram hemmalag senaste fem matcherna",
                lastFiveGamesAway:
                  "Spindeldiagram bortalag senaste fem matcherna",
              }[e] || "Spindeldiagram"
            );
          }),
          (t.genFirstLevelAngle = function (e) {
            return [...new Array(e + 1)].map((t, r) =>
              0 === r
                ? { angle: 12 }
                : r === e
                ? { angle: 348 }
                : { angle: r * (n / e) + (e % 2 == 0 ? 0 : n / e / 2) }
            );
          }),
          (t.genLastLevelWebAngle = function (e) {
            return [...new Array(e + 1)].map((t, r) =>
              0 === r
                ? { angle: 2 }
                : r === e
                ? { angle: 358 }
                : { angle: r * (n / e) + (e % 2 == 0 ? 0 : n / e / 2) }
            );
          }),
          (t.genMidLevelWebAngle = function (e) {
            return [...new Array(e + 1)].map((t, r) =>
              0 === r
                ? { angle: 6 }
                : r === e
                ? { angle: 354 }
                : { angle: r * (n / e) + (e % 2 == 0 ? 0 : n / e / 2) }
            );
          }),
          (t.genPoints = function (e, t) {
            const n = (2 * Math.PI) / e;
            return [...new Array(e)].map((e, r) => ({
              x: t * Math.sin(r * n),
              y: t * Math.cos(r * n),
            }));
          }),
          (t.genPolygonPoints = function (e, t, n) {
            const r = (2 * Math.PI) / e.length,
              o = new Array(e.length).fill({ x: 0, y: 0 }),
              a = new Array(e.length + 1).fill("").reduce((a, i, u) => {
                if (u > e.length) return a;
                const l = t(n(e[u - 1])) * Math.sin(u * r),
                  s = t(n(e[u - 1])) * Math.cos(u * r);
                return (
                  (o[u - 1] = { x: l, y: s }),
                  (a += "".concat(l, ",").concat(s, " "))
                );
              });
            return { points: o, pointString: a };
          }),
          (t.getAngleForTextLabels = function (e, t, n, r) {
            let o = n - e,
              a = r - t;
            return Math.atan2(a, o) * (180 / Math.PI);
          }),
          (t.getPoints = function (e, t) {
            const n = (2 * Math.PI) / 6;
            return { x: t * Math.sin(e * n), y: t * Math.cos(e * n) };
          }),
          (t.mapMetrics = function (e) {
            if (!Array.isArray(e) && e.length < 6) return null;
            return [
              e.find((e) => "setPiecesDef" === e.name),
              e.find((e) => "counterAttacks" === e.name),
              e.find((e) => "chancesCreated" === e.name),
              e.find((e) => "setPiecesOff" === e.name),
              e.find((e) => "possession" === e.name),
              e.find((e) => "chancesConceded" === e.name),
            ];
          });
        const n = 360;
      },
      9911: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.XWidget = void 0);
        var r = n(6400),
          o = l(n(1959)),
          a = l(n(513)),
          i = l(n(2392)),
          u = l(n(6206));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const s = [
          "entireSeason",
          "entireSeasonHome",
          "entireSeasonAway",
          "lastFiveGames",
          "lastFiveGamesHome",
          "lastFiveGamesAway",
        ];
        t.XWidget = class {
          constructor(e) {
            let { rootNodeId: t, matchId: n, settings: r } = e;
            (this._rootNodeId = t),
              (this._matchId = n),
              (this._settings = r),
              (this._data = null);
          }
          changeSettings(e) {
            (this._settings = { ...this._settings, ...e }),
              this._renderWidget();
          }
          remove() {
            const e = document.getElementById(this._rootNodeId);
            e && ((0, r.render)(null, e), (this._data = null)),
              delete a.default.getConfig().widgets[this._rootNodeId];
          }
          update(e) {
            let { matchId: t } = e;
            t
              ? ((this._matchId = t), this._fetchAndRenderWidget())
              : o.default.error("MatchId required");
          }
          _renderWidget() {
            var e;
            const t = document.getElementById(this._rootNodeId);
            let n = null;
            if (
              "string" ==
                typeof (null === (e = this._settings) || void 0 === e
                  ? void 0
                  : e.displayMode) &&
              s.includes(this._settings.displayMode) &&
              this._data
            )
              switch (this._settings.displayMode) {
                case "entireSeason":
                  n = this._data.entireSeason;
                  break;
                case "entireSeasonHome":
                case "entireSeasonAway":
                case "lastFiveGamesAway":
                case "lastFiveGamesHome":
                  break;
                case "lastFiveGames":
                  n = this._data.lastFiveGames;
                  break;
                default:
                  n = null;
              }
            t
              ? (n
                  ? (0, r.render)(
                      (0, r.h)(i.default, {
                        data: n,
                        settings: this._settings,
                      }),
                      t
                    )
                  : (0, r.render)(
                      (0, r.h)(u.default, { settings: this._settings }),
                      t
                    ),
                (a.default.getConfig().widgets[this._rootNodeId] = this))
              : o.default.error(
                  "Unable to find node with ID ".concat(this._rootNodeId)
                );
          }
          _fetchData() {
            return this._matchId
              ? fetch(
                  ""
                    .concat("https://widget.playmaker.ai", "/x-stats-")
                    .concat(this._matchId, ".json")
                )
                  .then((e) =>
                    e.status >= 400
                      ? (o.default.warn(
                          "Failed to fetch data for game ",
                          this._matchId
                        ),
                        null)
                      : e.json()
                  )
                  .catch((e) => {
                    o.default.error("Error fetching data", e);
                  })
              : Promise.resolve(null);
          }
          _fetchAndRenderWidget() {
            this._fetchData()
              .then((e) => {
                (this._data = e), this._renderWidget();
              })
              .catch((e) => {
                o.default.error(e);
              });
          }
        };
      },
      2392: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(6400),
          o = n(9748);
        n(5680);
        var a,
          i = (a = n(6206)) && a.__esModule ? a : { default: a };
        const u = {
          xG: "Очекивани голови (кГ)",
          xGC: "Очекивани примљени голови (кГЦ)",
          averageScored: "Просек постигнутих голова (цела сезона)",
          averageConceded: "Просечан број примљених голова (цела сезона)",
          averageScoredBetween: "Просек постигнутих голова mутуал (5 најновијих)", 
          averageScoredHomeAndAway: "Просечни голови код куће и у гостима",
          xp: "Очекивани поени (кП)",
          points: "Тачка",
          xpPointsDiff: "Разлика у кП/поенима",
          expectedTablePosition: "Очекивана позиција стола",
          tablePosition: "Постављање стола",
        };
        function l(e) {
          const t = (function (e, t, n) {
              switch (e) {
                case u.expectedTablePosition:
                case u.tablePosition:
                  return t < n;
                default:
                  return t > n;
              }
            })(e.metricName, e.home, e.away),
            n = e.home === e.away;
          let o = "pm-x-row-metric-value ".concat(
              t ? "pm-x-home-win" : "pm-x-default-value"
            ),
            a = "pm-x-row-away pm-x-row-metric-value ".concat(
              t ? "pm-x-default-value" : "pm-x-away-win"
            );
          return (
            n &&
              ((o = "pm-x-row-metric-value pm-x-default-value"),
              (a = "pm-x-row-away pm-x-row-metric-value pm-x-default-value")),
            (0, r.h)(
              "div",
              { className: "pm-x-metric-row", role: "row" },
              (0, r.h)("div", { className: o, role: "cell" }, e.home),
              (0, r.h)(
                "div",
                { className: "pm-x-metric-name", role: "rowheader" },
                u[e.metricName] || "Unknown"
              ),
              (0, r.h)("div", { className: a, role: "cell" }, e.away)
            )
          );
        }
        var s = (0, o.memo)(function (e) {
          var t;
          const n = e.data.metrics.filter((t) =>
              e.settings.metrics.includes(t.metricName)
            ),
            o =
              (null == e || null === (t = e.settings) || void 0 === t
                ? void 0
                : t.theme) || "light",
            a = "pm-x pm-x-container ".concat("dark" === o ? "dark" : "");
          return 0 === (null == n ? void 0 : n.length)
            ? (0, r.h)(i.default, { settings: null == e ? void 0 : e.settings })
            : (0, r.h)(
                "div",
                { className: a, role: "table" },
                (0, r.h)(
                  "div",
                  { className: "pm-x-row", role: "row" },
                  (0, r.h)(
                    "div",
                    {
                      className: "pm-x-row-home pm-x-row-team-name",
                      role: "columnheader",
                    },
                    e.data.homeTeam
                  ),
                  (0, r.h)(
                    "div",
                    {
                      className: "pm-x-row-away pm-x-row-team-name",
                      role: "columnheader",
                    },
                    e.data.awayTeam
                  )
                ),
                n.map((e) => (0, r.h)(l, e))
              );
        });
        t.default = s;
      },
      5623: (e) => {
        "use strict";
        function t(e, t, o) {
          e instanceof RegExp && (e = n(e, o)),
            t instanceof RegExp && (t = n(t, o));
          var a = r(e, t, o);
          return (
            a && {
              start: a[0],
              end: a[1],
              pre: o.slice(0, a[0]),
              body: o.slice(a[0] + e.length, a[1]),
              post: o.slice(a[1] + t.length),
            }
          );
        }
        function n(e, t) {
          var n = t.match(e);
          return n ? n[0] : null;
        }
        function r(e, t, n) {
          var r,
            o,
            a,
            i,
            u,
            l = n.indexOf(e),
            s = n.indexOf(t, l + 1),
            c = l;
          if (l >= 0 && s > 0) {
            if (e === t) return [l, s];
            for (r = [], a = n.length; c >= 0 && !u; )
              c == l
                ? (r.push(c), (l = n.indexOf(e, c + 1)))
                : 1 == r.length
                ? (u = [r.pop(), s])
                : ((o = r.pop()) < a && ((a = o), (i = s)),
                  (s = n.indexOf(t, c + 1))),
                (c = l < s && l >= 0 ? l : s);
            r.length && (u = [a, i]);
          }
          return u;
        }
        (e.exports = t), (t.range = r);
      },
      4184: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var u in n) r.call(n, u) && n[u] && e.push(u);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      296: (e) => {
        function t(e, t, n) {
          var r, o, a, i, u;
          function l() {
            var s = Date.now() - i;
            s < t && s >= 0
              ? (r = setTimeout(l, t - s))
              : ((r = null), n || ((u = e.apply(a, o)), (a = o = null)));
          }
          null == t && (t = 100);
          var s = function () {
            (a = this), (o = arguments), (i = Date.now());
            var s = n && !r;
            return (
              r || (r = setTimeout(l, t)),
              s && ((u = e.apply(a, o)), (a = o = null)),
              u
            );
          };
          return (
            (s.clear = function () {
              r && (clearTimeout(r), (r = null));
            }),
            (s.flush = function () {
              r &&
                ((u = e.apply(a, o)),
                (a = o = null),
                clearTimeout(r),
                (r = null));
            }),
            s
          );
        }
        (t.debounce = t), (e.exports = t);
      },
      1989: (e, t, n) => {
        var r = n(1789),
          o = n(401),
          a = n(7667),
          i = n(1327),
          u = n(1866);
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (l.prototype.clear = r),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = u),
          (e.exports = l);
      },
      8407: (e, t, n) => {
        var r = n(7040),
          o = n(4125),
          a = n(2117),
          i = n(7518),
          u = n(4705);
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (l.prototype.clear = r),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = u),
          (e.exports = l);
      },
      7071: (e, t, n) => {
        var r = n(852)(n(5639), "Map");
        e.exports = r;
      },
      3369: (e, t, n) => {
        var r = n(4785),
          o = n(1285),
          a = n(6e3),
          i = n(9916),
          u = n(5265);
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (l.prototype.clear = r),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = u),
          (e.exports = l);
      },
      2705: (e, t, n) => {
        var r = n(5639).Symbol;
        e.exports = r;
      },
      8470: (e, t, n) => {
        var r = n(7813);
        e.exports = function (e, t) {
          for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
          return -1;
        };
      },
      4239: (e, t, n) => {
        var r = n(2705),
          o = n(9607),
          a = n(2333),
          i = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : i && i in Object(e)
            ? o(e)
            : a(e);
        };
      },
      8458: (e, t, n) => {
        var r = n(3560),
          o = n(5346),
          a = n(3218),
          i = n(346),
          u = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          s = Object.prototype,
          c = l.toString,
          f = s.hasOwnProperty,
          h = RegExp(
            "^" +
              c
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        e.exports = function (e) {
          return !(!a(e) || o(e)) && (r(e) ? h : u).test(i(e));
        };
      },
      7561: (e, t, n) => {
        var r = n(7990),
          o = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, r(e) + 1).replace(o, "") : e;
        };
      },
      4429: (e, t, n) => {
        var r = n(5639)["__core-js_shared__"];
        e.exports = r;
      },
      1957: (e, t, n) => {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r;
      },
      5050: (e, t, n) => {
        var r = n(7019);
        e.exports = function (e, t) {
          var n = e.__data__;
          return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
      },
      852: (e, t, n) => {
        var r = n(8458),
          o = n(7801);
        e.exports = function (e, t) {
          var n = o(e, t);
          return r(n) ? n : void 0;
        };
      },
      9607: (e, t, n) => {
        var r = n(2705),
          o = Object.prototype,
          a = o.hasOwnProperty,
          i = o.toString,
          u = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          var t = a.call(e, u),
            n = e[u];
          try {
            e[u] = void 0;
            var r = !0;
          } catch (e) {}
          var o = i.call(e);
          return r && (t ? (e[u] = n) : delete e[u]), o;
        };
      },
      7801: (e) => {
        e.exports = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      1789: (e, t, n) => {
        var r = n(4536);
        e.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      401: (e) => {
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        };
      },
      7667: (e, t, n) => {
        var r = n(4536),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          if (r) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return o.call(t, e) ? t[e] : void 0;
        };
      },
      1327: (e, t, n) => {
        var r = n(4536),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          return r ? void 0 !== t[e] : o.call(t, e);
        };
      },
      1866: (e, t, n) => {
        var r = n(4536);
        e.exports = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      },
      7019: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        };
      },
      5346: (e, t, n) => {
        var r,
          o = n(4429),
          a = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        e.exports = function (e) {
          return !!a && a in e;
        };
      },
      7040: (e) => {
        e.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      4125: (e, t, n) => {
        var r = n(8470),
          o = Array.prototype.splice;
        e.exports = function (e) {
          var t = this.__data__,
            n = r(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
          );
        };
      },
      2117: (e, t, n) => {
        var r = n(8470);
        e.exports = function (e) {
          var t = this.__data__,
            n = r(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
      },
      7518: (e, t, n) => {
        var r = n(8470);
        e.exports = function (e) {
          return r(this.__data__, e) > -1;
        };
      },
      4705: (e, t, n) => {
        var r = n(8470);
        e.exports = function (e, t) {
          var n = this.__data__,
            o = r(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
      },
      4785: (e, t, n) => {
        var r = n(1989),
          o = n(8407),
          a = n(7071);
        e.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (a || o)(),
              string: new r(),
            });
        };
      },
      1285: (e, t, n) => {
        var r = n(5050);
        e.exports = function (e) {
          var t = r(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        };
      },
      6e3: (e, t, n) => {
        var r = n(5050);
        e.exports = function (e) {
          return r(this, e).get(e);
        };
      },
      9916: (e, t, n) => {
        var r = n(5050);
        e.exports = function (e) {
          return r(this, e).has(e);
        };
      },
      5265: (e, t, n) => {
        var r = n(5050);
        e.exports = function (e, t) {
          var n = r(this, e),
            o = n.size;
          return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
      },
      4536: (e, t, n) => {
        var r = n(852)(Object, "create");
        e.exports = r;
      },
      2333: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      5639: (e, t, n) => {
        var r = n(1957),
          o = "object" == typeof self && self && self.Object === Object && self,
          a = r || o || Function("return this")();
        e.exports = a;
      },
      346: (e) => {
        var t = Function.prototype.toString;
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        };
      },
      7990: (e) => {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      3279: (e, t, n) => {
        var r = n(3218),
          o = n(7771),
          a = n(4841),
          i = Math.max,
          u = Math.min;
        e.exports = function (e, t, n) {
          var l,
            s,
            c,
            f,
            h,
            d,
            p = 0,
            v = !1,
            g = !1,
            m = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var n = l,
              r = s;
            return (l = s = void 0), (p = t), (f = e.apply(r, n));
          }
          function _(e) {
            var n = e - d;
            return void 0 === d || n >= t || n < 0 || (g && e - p >= c);
          }
          function x() {
            var e = o();
            if (_(e)) return b(e);
            h = setTimeout(
              x,
              (function (e) {
                var n = t - (e - d);
                return g ? u(n, c - (e - p)) : n;
              })(e)
            );
          }
          function b(e) {
            return (h = void 0), m && l ? y(e) : ((l = s = void 0), f);
          }
          function w() {
            var e = o(),
              n = _(e);
            if (((l = arguments), (s = this), (d = e), n)) {
              if (void 0 === h)
                return (function (e) {
                  return (p = e), (h = setTimeout(x, t)), v ? y(e) : f;
                })(d);
              if (g) return clearTimeout(h), (h = setTimeout(x, t)), y(d);
            }
            return void 0 === h && (h = setTimeout(x, t)), f;
          }
          return (
            (t = a(t) || 0),
            r(n) &&
              ((v = !!n.leading),
              (c = (g = "maxWait" in n) ? i(a(n.maxWait) || 0, t) : c),
              (m = "trailing" in n ? !!n.trailing : m)),
            (w.cancel = function () {
              void 0 !== h && clearTimeout(h),
                (p = 0),
                (l = d = s = h = void 0);
            }),
            (w.flush = function () {
              return void 0 === h ? f : b(o());
            }),
            w
          );
        };
      },
      7813: (e) => {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t);
        };
      },
      3560: (e, t, n) => {
        var r = n(4239),
          o = n(3218);
        e.exports = function (e) {
          if (!o(e)) return !1;
          var t = r(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        };
      },
      3218: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      7005: (e) => {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      3448: (e, t, n) => {
        var r = n(4239),
          o = n(7005);
        e.exports = function (e) {
          return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
        };
      },
      8306: (e, t, n) => {
        var r = n(3369);
        function o(e, t) {
          if ("function" != typeof e || (null != t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var n = function () {
            var r = arguments,
              o = t ? t.apply(this, r) : r[0],
              a = n.cache;
            if (a.has(o)) return a.get(o);
            var i = e.apply(this, r);
            return (n.cache = a.set(o, i) || a), i;
          };
          return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (e.exports = o);
      },
      7771: (e, t, n) => {
        var r = n(5639);
        e.exports = function () {
          return r.Date.now();
        };
      },
      4841: (e, t, n) => {
        var r = n(7561),
          o = n(3218),
          a = n(3448),
          i = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          s = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (a(e)) return NaN;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = r(e);
          var n = u.test(e);
          return n || l.test(e)
            ? s(e.slice(2), n ? 2 : 8)
            : i.test(e)
            ? NaN
            : +e;
        };
      },
      2087: (e, t, n) => {
        var r = n(8361);
        (r.prototype.formulaEval = function () {
          "use strict";
          for (var e, t, n, r = [], o = this.value, a = 0; a < o.length; a++)
            1 === o[a].type || 3 === o[a].type
              ? r.push({
                  value: 3 === o[a].type ? o[a].show : o[a].value,
                  type: 1,
                })
              : 13 === o[a].type
              ? r.push({ value: o[a].show, type: 1 })
              : 0 === o[a].type
              ? (r[r.length - 1] = {
                  value:
                    o[a].show +
                    ("-" != o[a].show ? "(" : "") +
                    r[r.length - 1].value +
                    ("-" != o[a].show ? ")" : ""),
                  type: 0,
                })
              : 7 === o[a].type
              ? (r[r.length - 1] = {
                  value:
                    (1 != r[r.length - 1].type ? "(" : "") +
                    r[r.length - 1].value +
                    (1 != r[r.length - 1].type ? ")" : "") +
                    o[a].show,
                  type: 7,
                })
              : 10 === o[a].type
              ? ((e = r.pop()),
                (t = r.pop()),
                "P" === o[a].show || "C" === o[a].show
                  ? r.push({
                      value:
                        "<sup>" +
                        t.value +
                        "</sup>" +
                        o[a].show +
                        "<sub>" +
                        e.value +
                        "</sub>",
                      type: 10,
                    })
                  : r.push({
                      value:
                        (1 != t.type ? "(" : "") +
                        t.value +
                        (1 != t.type ? ")" : "") +
                        "<sup>" +
                        e.value +
                        "</sup>",
                      type: 1,
                    }))
              : 2 === o[a].type || 9 === o[a].type
              ? ((e = r.pop()),
                (t = r.pop()),
                r.push({
                  value:
                    (1 != t.type ? "(" : "") +
                    t.value +
                    (1 != t.type ? ")" : "") +
                    o[a].show +
                    (1 != e.type ? "(" : "") +
                    e.value +
                    (1 != e.type ? ")" : ""),
                  type: o[a].type,
                }))
              : 12 === o[a].type &&
                ((e = r.pop()),
                (t = r.pop()),
                (n = r.pop()),
                r.push({
                  value:
                    o[a].show +
                    "(" +
                    n.value +
                    "," +
                    t.value +
                    "," +
                    e.value +
                    ")",
                  type: 12,
                }));
          return r[0].value;
        }),
          (e.exports = r);
      },
      7735: (e, t, n) => {
        "use strict";
        var r = n(3553);
        function o(e, t) {
          for (var n = 0; n < e.length; n++) e[n] += t;
          return e;
        }
        for (
          var a = [
              { token: "sin", show: "sin", type: 0, value: r.math.sin },
              { token: "cos", show: "cos", type: 0, value: r.math.cos },
              { token: "tan", show: "tan", type: 0, value: r.math.tan },
              { token: "pi", show: "&pi;", type: 3, value: "PI" },
              { token: "(", show: "(", type: 4, value: "(" },
              { token: ")", show: ")", type: 5, value: ")" },
              { token: "P", show: "P", type: 10, value: r.math.P },
              { token: "C", show: "C", type: 10, value: r.math.C },
              { token: " ", show: " ", type: 14, value: " ".anchor },
              { token: "asin", show: "asin", type: 0, value: r.math.asin },
              { token: "acos", show: "acos", type: 0, value: r.math.acos },
              { token: "atan", show: "atan", type: 0, value: r.math.atan },
              { token: "7", show: "7", type: 1, value: "7" },
              { token: "8", show: "8", type: 1, value: "8" },
              { token: "9", show: "9", type: 1, value: "9" },
              { token: "int", show: "Int", type: 0, value: Math.floor },
              { token: "cosh", show: "cosh", type: 0, value: r.math.cosh },
              { token: "acosh", show: "acosh", type: 0, value: r.math.acosh },
              { token: "ln", show: " ln", type: 0, value: Math.log },
              { token: "^", show: "^", type: 10, value: Math.pow },
              { token: "root", show: "root", type: 0, value: Math.sqrt },
              { token: "4", show: "4", type: 1, value: "4" },
              { token: "5", show: "5", type: 1, value: "5" },
              { token: "6", show: "6", type: 1, value: "6" },
              { token: "/", show: "&divide;", type: 2, value: r.math.div },
              { token: "!", show: "!", type: 7, value: r.math.fact },
              { token: "tanh", show: "tanh", type: 0, value: r.math.tanh },
              { token: "atanh", show: "atanh", type: 0, value: r.math.atanh },
              { token: "Mod", show: " Mod ", type: 2, value: r.math.mod },
              { token: "1", show: "1", type: 1, value: "1" },
              { token: "2", show: "2", type: 1, value: "2" },
              { token: "3", show: "3", type: 1, value: "3" },
              { token: "*", show: "&times;", type: 2, value: r.math.mul },
              { token: "sinh", show: "sinh", type: 0, value: r.math.sinh },
              { token: "asinh", show: "asinh", type: 0, value: r.math.asinh },
              { token: "e", show: "e", type: 3, value: "E" },
              { token: "log", show: " log", type: 0, value: r.math.log },
              { token: "0", show: "0", type: 1, value: "0" },
              { token: ".", show: ".", type: 6, value: "." },
              { token: "+", show: "+", type: 9, value: r.math.add },
              { token: "-", show: "-", type: 9, value: r.math.sub },
              { token: ",", show: ",", type: 11, value: "," },
              {
                token: "Sigma",
                show: "&Sigma;",
                type: 12,
                value: r.math.sigma,
              },
              { token: "n", show: "n", type: 13, value: "n" },
              { token: "Pi", show: "&Pi;", type: 12, value: r.math.Pi },
              {
                token: "pow",
                show: "pow",
                type: 8,
                value: Math.pow,
                numberOfArguments: 2,
              },
              { token: "&", show: "&", type: 9, value: r.math.and },
            ],
            i = {
              0: 11,
              1: 0,
              2: 3,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 11,
              8: 11,
              9: 1,
              10: 10,
              11: 0,
              12: 11,
              13: 0,
              14: -1,
              15: 11,
            },
            u = 0;
          u < a.length;
          u++
        )
          a[u].precedence = i[a[u].type];
        var l = {
            0: !0,
            1: !0,
            3: !0,
            4: !0,
            6: !0,
            8: !0,
            9: !0,
            12: !0,
            13: !0,
            14: !0,
            15: !0,
          },
          s = {
            0: !0,
            1: !0,
            2: !0,
            3: !0,
            4: !0,
            5: !0,
            6: !0,
            7: !0,
            8: !0,
            9: !0,
            10: !0,
            11: !0,
            12: !0,
            13: !0,
            15: !0,
          },
          c = { 0: !0, 3: !0, 4: !0, 8: !0, 12: !0, 13: !0, 15: !0 },
          f = {},
          h = {
            0: !0,
            1: !0,
            3: !0,
            4: !0,
            6: !0,
            8: !0,
            12: !0,
            13: !0,
            15: !0,
          },
          d = { 1: !0 },
          p = [
            [],
            [
              "1",
              "2",
              "3",
              "7",
              "8",
              "9",
              "4",
              "5",
              "6",
              "+",
              "-",
              "*",
              "/",
              "(",
              ")",
              "^",
              "!",
              "P",
              "C",
              "e",
              "0",
              ".",
              ",",
              "n",
              " ",
              "&",
            ],
            ["pi", "ln", "Pi"],
            ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
            ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
            ["acosh", "atanh", "asinh", "Sigma"],
          ];
        function v(e, t, n, r) {
          for (var o = 0; o < r; o++) if (e[n + o] !== t[o]) return !1;
          return !0;
        }
        function g(e, t) {
          for (var n = 0; n < t.length; n++) if (t[n].token === e) return n;
          return -1;
        }
        function m(e) {
          for (var t, n, o, i = [], u = e.length, l = 0; l < u; l++)
            if (!(l < u - 1 && " " === e[l] && " " === e[l + 1])) {
              for (
                t = "",
                  n = e.length - l > p.length - 2 ? p.length - 1 : e.length - l;
                n > 0;
                n--
              )
                if (void 0 !== p[n])
                  for (o = 0; o < p[n].length; o++)
                    v(e, p[n][o], l, n) &&
                      ((t = p[n][o]), (o = p[n].length), (n = 0));
              if (((l += t.length - 1), "" === t))
                throw new r.Exception("Can't understand after " + e.slice(l));
              i.push(a[g(t, a)]);
            }
          return i;
        }
        (r.tokenTypes = {
          FUNCTION_WITH_ONE_ARG: 0,
          NUMBER: 1,
          BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
          CONSTANT: 3,
          OPENING_PARENTHESIS: 4,
          CLOSING_PARENTHESIS: 5,
          DECIMAL: 6,
          POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
          FUNCTION_WITH_N_ARGS: 8,
          BINARY_OPERATOR_LOW_PRECENDENCE: 9,
          BINARY_OPERATOR_PERMUTATION: 10,
          COMMA: 11,
          EVALUATED_FUNCTION: 12,
          EVALUATED_FUNCTION_PARAMETER: 13,
          SPACE: 14,
        }),
          (r.addToken = function (e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t].token.length,
                o = -1;
              e[t].type === r.tokenTypes.FUNCTION_WITH_N_ARGS &&
                void 0 === e[t].numberOfArguments &&
                (e[t].numberOfArguments = 2),
                (p[n] = p[n] || []);
              for (var u = 0; u < p[n].length; u++)
                if (e[t].token === p[n][u]) {
                  o = g(p[n][u], a);
                  break;
                }
              -1 === o
                ? (a.push(e[t]),
                  (e[t].precedence = i[e[t].type]),
                  p.length <= e[t].token.length && (p[e[t].token.length] = []),
                  p[e[t].token.length].push(e[t].token))
                : ((a[o] = e[t]), (e[t].precedence = i[e[t].type]));
            }
          });
        var y = { value: r.math.changeSign, type: 0, pre: 21, show: "-" },
          _ = { value: ")", show: ")", type: 5, pre: 0 },
          x = { value: "(", type: 4, pre: 0, show: "(" };
        (r.lex = function (e, t) {
          var n,
            a = [x],
            i = [],
            u = e,
            p = l,
            v = 0,
            g = f,
            b = "";
          void 0 !== t && r.addToken(t);
          var w = {},
            M = m(u);
          for (n = 0; n < M.length; n++) {
            var k = M[n];
            if (14 !== k.type) {
              var O,
                N = k.token,
                T = k.type,
                S = k.value,
                E = k.precedence,
                A = k.show,
                C = a[a.length - 1];
              for (O = i.length; O-- && 0 === i[O]; )
                if (-1 !== [0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(T)) {
                  if (!0 !== p[T])
                    throw new r.Exception(N + " is not allowed after " + b);
                  a.push(_), (p = s), (g = h), i.pop();
                }
              if (!0 !== p[T])
                throw new r.Exception(N + " is not allowed after " + b);
              if (
                (!0 === g[T] &&
                  ((T = 2),
                  (S = r.math.mul),
                  (A = "&times;"),
                  (E = 3),
                  (n -= 1)),
                (w = {
                  value: S,
                  type: T,
                  pre: E,
                  show: A,
                  numberOfArguments: k.numberOfArguments,
                }),
                0 === T)
              )
                (p = l),
                  (g = f),
                  o(i, 2),
                  a.push(w),
                  4 !== M[n + 1].type && (a.push(x), i.push(2));
              else if (1 === T)
                1 === C.type ? ((C.value += S), o(i, 1)) : a.push(w),
                  (p = s),
                  (g = c);
              else if (2 === T) (p = l), (g = f), o(i, 2), a.push(w);
              else if (3 === T) a.push(w), (p = s), (g = h);
              else if (4 === T) o(i, 1), v++, (p = l), (g = f), a.push(w);
              else if (5 === T) {
                if (!v)
                  throw new r.Exception(
                    "Closing parenthesis are more than opening one, wait What!!!"
                  );
                v--, (p = s), (g = h), a.push(w), o(i, 1);
              } else if (6 === T) {
                if (C.hasDec)
                  throw new r.Exception(
                    "Two decimals are not allowed in one number"
                  );
                1 !== C.type &&
                  ((C = { value: 0, type: 1, pre: 0 }), a.push(C)),
                  (p = d),
                  o(i, 1),
                  (g = f),
                  (C.value += S),
                  (C.hasDec = !0);
              } else 7 === T && ((p = s), (g = h), o(i, 1), a.push(w));
              8 === T
                ? ((p = l),
                  (g = f),
                  o(i, k.numberOfArguments + 2),
                  a.push(w),
                  4 !== M[n + 1].type &&
                    (a.push(x), i.push(k.numberOfArguments + 2)))
                : 9 === T
                ? (9 === C.type
                    ? C.value === r.math.add
                      ? ((C.value = S), (C.show = A), o(i, 1))
                      : C.value === r.math.sub &&
                        "-" === A &&
                        ((C.value = r.math.add), (C.show = "+"), o(i, 1))
                    : 5 !== C.type &&
                      7 !== C.type &&
                      1 !== C.type &&
                      3 !== C.type &&
                      13 !== C.type
                    ? "-" === N &&
                      ((p = l), (g = f), o(i, 2).push(2), a.push(y), a.push(x))
                    : (a.push(w), o(i, 2)),
                  (p = l),
                  (g = f))
                : 10 === T
                ? ((p = l), (g = f), o(i, 2), a.push(w))
                : 11 === T
                ? ((p = l), (g = f), a.push(w))
                : 12 === T
                ? ((p = l),
                  (g = f),
                  o(i, 6),
                  a.push(w),
                  4 !== M[n + 1].type && (a.push(x), i.push(6)))
                : 13 === T && ((p = s), (g = h), a.push(w)),
                o(i, -1),
                (b = N);
            } else if (
              n > 0 &&
              n < M.length - 1 &&
              1 === M[n + 1].type &&
              (1 === M[n - 1].type || 6 === M[n - 1].type)
            )
              throw new r.Exception("Unexpected Space");
          }
          for (O = i.length; O--; ) a.push(_);
          if (!0 !== p[5]) throw new r.Exception("complete the expression");
          for (; v--; ) a.push(_);
          return a.push(_), new r(a);
        }),
          (e.exports = r);
      },
      3553: (e) => {
        "use strict";
        var t = function (e) {
          this.value = e;
        };
        (t.math = {
          isDegree: !0,
          acos: function (e) {
            return t.math.isDegree
              ? (180 / Math.PI) * Math.acos(e)
              : Math.acos(e);
          },
          add: function (e, t) {
            return e + t;
          },
          asin: function (e) {
            return t.math.isDegree
              ? (180 / Math.PI) * Math.asin(e)
              : Math.asin(e);
          },
          atan: function (e) {
            return t.math.isDegree
              ? (180 / Math.PI) * Math.atan(e)
              : Math.atan(e);
          },
          acosh: function (e) {
            return Math.log(e + Math.sqrt(e * e - 1));
          },
          asinh: function (e) {
            return Math.log(e + Math.sqrt(e * e + 1));
          },
          atanh: function (e) {
            return Math.log((1 + e) / (1 - e));
          },
          C: function (e, n) {
            var r = 1,
              o = e - n,
              a = n;
            a < o && ((a = o), (o = n));
            for (var i = a + 1; i <= e; i++) r *= i;
            return r / t.math.fact(o);
          },
          changeSign: function (e) {
            return -e;
          },
          cos: function (e) {
            return t.math.isDegree && (e = t.math.toRadian(e)), Math.cos(e);
          },
          cosh: function (e) {
            return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
          },
          div: function (e, t) {
            return e / t;
          },
          fact: function (e) {
            if (e % 1 != 0) return "NaN";
            for (var t = 1, n = 2; n <= e; n++) t *= n;
            return t;
          },
          inverse: function (e) {
            return 1 / e;
          },
          log: function (e) {
            return Math.log(e) / Math.log(10);
          },
          mod: function (e, t) {
            return e % t;
          },
          mul: function (e, t) {
            return e * t;
          },
          P: function (e, t) {
            for (
              var n = 1, r = Math.floor(e) - Math.floor(t) + 1;
              r <= Math.floor(e);
              r++
            )
              n *= r;
            return n;
          },
          Pi: function (e, t, n) {
            for (var r = 1, o = e; o <= t; o++)
              r *= Number(n.postfixEval({ n: o }));
            return r;
          },
          pow10x: function (e) {
            for (var t = 1; e--; ) t *= 10;
            return t;
          },
          sigma: function (e, t, n) {
            for (var r = 0, o = e; o <= t; o++)
              r += Number(n.postfixEval({ n: o }));
            return r;
          },
          sin: function (e) {
            return t.math.isDegree && (e = t.math.toRadian(e)), Math.sin(e);
          },
          sinh: function (e) {
            return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
          },
          sub: function (e, t) {
            return e - t;
          },
          tan: function (e) {
            return t.math.isDegree && (e = t.math.toRadian(e)), Math.tan(e);
          },
          tanh: function (e) {
            return t.sinha(e) / t.cosha(e);
          },
          toRadian: function (e) {
            return (e * Math.PI) / 180;
          },
          and: function (e, t) {
            return e & t;
          },
        }),
          (t.Exception = function (e) {
            this.message = e;
          }),
          (e.exports = t);
      },
      7186: (e, t, n) => {
        var r = n(7735);
        (r.prototype.toPostfix = function () {
          "use strict";
          for (
            var e,
              t,
              n,
              o,
              a,
              i = [],
              u = [{ value: "(", type: 4, pre: 0 }],
              l = this.value,
              s = 1;
            s < l.length;
            s++
          )
            if (1 === l[s].type || 3 === l[s].type || 13 === l[s].type)
              1 === l[s].type && (l[s].value = Number(l[s].value)),
                i.push(l[s]);
            else if (4 === l[s].type) u.push(l[s]);
            else if (5 === l[s].type)
              for (; 4 !== (t = u.pop()).type; ) i.push(t);
            else if (11 === l[s].type) {
              for (; 4 !== (t = u.pop()).type; ) i.push(t);
              u.push(t);
            } else {
              (o = (e = l[s]).pre), (n = (a = u[u.length - 1]).pre);
              var c = "Math.pow" == a.value && "Math.pow" == e.value;
              if (o > n) u.push(e);
              else {
                for (; (n >= o && !c) || (c && o < n); )
                  (t = u.pop()),
                    (a = u[u.length - 1]),
                    i.push(t),
                    (n = a.pre),
                    (c = "Math.pow" == e.value && "Math.pow" == a.value);
                u.push(e);
              }
            }
          return new r(i);
        }),
          (e.exports = r);
      },
      8361: (e, t, n) => {
        var r = n(7186);
        (r.prototype.postfixEval = function (e) {
          "use strict";
          ((e = e || {}).PI = Math.PI), (e.E = Math.E);
          for (
            var t, n, o, a = [], i = this.value, u = void 0 !== e.n, l = 0;
            l < i.length;
            l++
          )
            if (1 === i[l].type) a.push({ value: i[l].value, type: 1 });
            else if (3 === i[l].type) a.push({ value: e[i[l].value], type: 1 });
            else if (0 === i[l].type)
              void 0 === a[a.length - 1].type
                ? a[a.length - 1].value.push(i[l])
                : (a[a.length - 1].value = i[l].value(a[a.length - 1].value));
            else if (7 === i[l].type)
              void 0 === a[a.length - 1].type
                ? a[a.length - 1].value.push(i[l])
                : (a[a.length - 1].value = i[l].value(a[a.length - 1].value));
            else if (8 === i[l].type) {
              for (var s = [], c = 0; c < i[l].numberOfArguments; c++)
                s.push(a.pop().value);
              a.push({ type: 1, value: i[l].value.apply(i[l], s.reverse()) });
            } else
              10 === i[l].type
                ? ((t = a.pop()),
                  void 0 === (n = a.pop()).type
                    ? ((n.value = n.concat(t)), n.value.push(i[l]), a.push(n))
                    : void 0 === t.type
                    ? (t.unshift(n), t.push(i[l]), a.push(t))
                    : a.push({ type: 1, value: i[l].value(n.value, t.value) }))
                : 2 === i[l].type || 9 === i[l].type
                ? ((t = a.pop()),
                  void 0 === (n = a.pop()).type
                    ? ((n = n.concat(t)).push(i[l]), a.push(n))
                    : void 0 === t.type
                    ? (t.unshift(n), t.push(i[l]), a.push(t))
                    : a.push({ type: 1, value: i[l].value(n.value, t.value) }))
                : 12 === i[l].type
                ? (void 0 !== (t = a.pop()).type && (t = [t]),
                  (n = a.pop()),
                  (o = a.pop()),
                  a.push({
                    type: 1,
                    value: i[l].value(o.value, n.value, new r(t)),
                  }))
                : 13 === i[l].type &&
                  (u
                    ? a.push({ value: e[i[l].value], type: 3 })
                    : a.push([i[l]]));
          if (a.length > 1) throw new r.Exception("Uncaught Syntax error");
          return a[0].value > 1e15
            ? "Infinity"
            : parseFloat(a[0].value.toFixed(15));
        }),
          (r.eval = function (e, t, n) {
            return void 0 === t
              ? this.lex(e).toPostfix().postfixEval()
              : void 0 === n
              ? void 0 !== t.length
                ? this.lex(e, t).toPostfix().postfixEval()
                : this.lex(e).toPostfix().postfixEval(t)
              : this.lex(e, t).toPostfix().postfixEval(n);
          }),
          (e.exports = r);
      },
      4965: (e, t, n) => {
        "use strict";
        n.r(t);
      },
      2355: (e, t, n) => {
        "use strict";
        n.r(t);
      },
      720: (e, t, n) => {
        "use strict";
        n.r(t);
      },
      5680: (e, t, n) => {
        "use strict";
        n.r(t);
      },
      9748: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Children: () => B,
            Component: () => u.Component,
            Fragment: () => u.Fragment,
            PureComponent: () => U,
            StrictMode: () => Ae,
            Suspense: () => Z,
            SuspenseList: () => K,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => be,
            cloneElement: () => Oe,
            createContext: () => u.createContext,
            createElement: () => u.createElement,
            createFactory: () => Me,
            createPortal: () => re,
            createRef: () => u.createRef,
            default: () => Ie,
            findDOMNode: () => Te,
            flushSync: () => Ee,
            forwardRef: () => G,
            hydrate: () => fe,
            isValidElement: () => ke,
            lazy: () => J,
            memo: () => H,
            render: () => ce,
            startTransition: () => Ce,
            unmountComponentAtNode: () => Ne,
            unstable_batchedUpdates: () => Se,
            useCallback: () => k,
            useContext: () => O,
            useDebugValue: () => N,
            useDeferredValue: () => je,
            useEffect: () => _,
            useErrorBoundary: () => T,
            useId: () => S,
            useImperativeHandle: () => w,
            useInsertionEffect: () => Pe,
            useLayoutEffect: () => x,
            useMemo: () => M,
            useReducer: () => y,
            useRef: () => b,
            useState: () => m,
            useSyncExternalStore: () => Fe,
            useTransition: () => Re,
            version: () => we,
          });
        var r,
          o,
          a,
          i,
          u = n(6400),
          l = 0,
          s = [],
          c = [],
          f = u.options.__b,
          h = u.options.__r,
          d = u.options.diffed,
          p = u.options.__c,
          v = u.options.unmount;
        function g(e, t) {
          u.options.__h && u.options.__h(o, e, l || t), (l = 0);
          var n = o.__H || (o.__H = { __: [], __h: [] });
          return e >= n.__.length && n.__.push({ __V: c }), n.__[e];
        }
        function m(e) {
          return (l = 1), y(F, e);
        }
        function y(e, t, n) {
          var a = g(r++, 2);
          if (
            ((a.t = e),
            !a.__c &&
              ((a.__ = [
                n ? n(t) : F(void 0, t),
                function (e) {
                  var t = a.__N ? a.__N[0] : a.__[0],
                    n = a.t(t, e);
                  t !== n && ((a.__N = [n, a.__[1]]), a.__c.setState({}));
                },
              ]),
              (a.__c = o),
              !o.u))
          ) {
            var i = function (e, t, n) {
              if (!a.__c.__H) return !0;
              var r = a.__c.__H.__.filter(function (e) {
                return e.__c;
              });
              if (
                r.every(function (e) {
                  return !e.__N;
                })
              )
                return !u || u.call(this, e, t, n);
              var o = !1;
              return (
                r.forEach(function (e) {
                  if (e.__N) {
                    var t = e.__[0];
                    (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0);
                  }
                }),
                !(!o && a.__c.props === e) && (!u || u.call(this, e, t, n))
              );
            };
            o.u = !0;
            var u = o.shouldComponentUpdate,
              l = o.componentWillUpdate;
            (o.componentWillUpdate = function (e, t, n) {
              if (this.__e) {
                var r = u;
                (u = void 0), i(e, t, n), (u = r);
              }
              l && l.call(this, e, t, n);
            }),
              (o.shouldComponentUpdate = i);
          }
          return a.__N || a.__;
        }
        function _(e, t) {
          var n = g(r++, 3);
          !u.options.__s &&
            P(n.__H, t) &&
            ((n.__ = e), (n.i = t), o.__H.__h.push(n));
        }
        function x(e, t) {
          var n = g(r++, 4);
          !u.options.__s &&
            P(n.__H, t) &&
            ((n.__ = e), (n.i = t), o.__h.push(n));
        }
        function b(e) {
          return (
            (l = 5),
            M(function () {
              return { current: e };
            }, [])
          );
        }
        function w(e, t, n) {
          (l = 6),
            x(
              function () {
                return "function" == typeof e
                  ? (e(t()),
                    function () {
                      return e(null);
                    })
                  : e
                  ? ((e.current = t()),
                    function () {
                      return (e.current = null);
                    })
                  : void 0;
              },
              null == n ? n : n.concat(e)
            );
        }
        function M(e, t) {
          var n = g(r++, 7);
          return P(n.__H, t)
            ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V)
            : n.__;
        }
        function k(e, t) {
          return (
            (l = 8),
            M(function () {
              return e;
            }, t)
          );
        }
        function O(e) {
          var t = o.context[e.__c],
            n = g(r++, 9);
          return (
            (n.c = e),
            t ? (null == n.__ && ((n.__ = !0), t.sub(o)), t.props.value) : e.__
          );
        }
        function N(e, t) {
          u.options.useDebugValue && u.options.useDebugValue(t ? t(e) : e);
        }
        function T(e) {
          var t = g(r++, 10),
            n = m();
          return (
            (t.__ = e),
            o.componentDidCatch ||
              (o.componentDidCatch = function (e, r) {
                t.__ && t.__(e, r), n[1](e);
              }),
            [
              n[0],
              function () {
                n[1](void 0);
              },
            ]
          );
        }
        function S() {
          var e = g(r++, 11);
          if (!e.__) {
            for (var t = o.__v; null !== t && !t.__m && null !== t.__; )
              t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++;
          }
          return e.__;
        }
        function E() {
          for (var e; (e = s.shift()); )
            if (e.__P && e.__H)
              try {
                e.__H.__h.forEach(j), e.__H.__h.forEach(R), (e.__H.__h = []);
              } catch (t) {
                (e.__H.__h = []), u.options.__e(t, e.__v);
              }
        }
        (u.options.__b = function (e) {
          (o = null), f && f(e);
        }),
          (u.options.__r = function (e) {
            h && h(e), (r = 0);
            var t = (o = e.__c).__H;
            t &&
              (a === o
                ? ((t.__h = []),
                  (o.__h = []),
                  t.__.forEach(function (e) {
                    e.__N && (e.__ = e.__N),
                      (e.__V = c),
                      (e.__N = e.i = void 0);
                  }))
                : (t.__h.forEach(j), t.__h.forEach(R), (t.__h = []))),
              (a = o);
          }),
          (u.options.diffed = function (e) {
            d && d(e);
            var t = e.__c;
            t &&
              t.__H &&
              (t.__H.__h.length &&
                ((1 !== s.push(t) && i === u.options.requestAnimationFrame) ||
                  ((i = u.options.requestAnimationFrame) || C)(E)),
              t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i),
                  e.__V !== c && (e.__ = e.__V),
                  (e.i = void 0),
                  (e.__V = c);
              })),
              (a = o = null);
          }),
          (u.options.__c = function (e, t) {
            t.some(function (e) {
              try {
                e.__h.forEach(j),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || R(e);
                  }));
              } catch (n) {
                t.some(function (e) {
                  e.__h && (e.__h = []);
                }),
                  (t = []),
                  u.options.__e(n, e.__v);
              }
            }),
              p && p(e, t);
          }),
          (u.options.unmount = function (e) {
            v && v(e);
            var t,
              n = e.__c;
            n &&
              n.__H &&
              (n.__H.__.forEach(function (e) {
                try {
                  j(e);
                } catch (e) {
                  t = e;
                }
              }),
              (n.__H = void 0),
              t && u.options.__e(t, n.__v));
          });
        var A = "function" == typeof requestAnimationFrame;
        function C(e) {
          var t,
            n = function () {
              clearTimeout(r), A && cancelAnimationFrame(t), setTimeout(e);
            },
            r = setTimeout(n, 100);
          A && (t = requestAnimationFrame(n));
        }
        function j(e) {
          var t = o,
            n = e.__c;
          "function" == typeof n && ((e.__c = void 0), n()), (o = t);
        }
        function R(e) {
          var t = o;
          (e.__c = e.__()), (o = t);
        }
        function P(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
              return t !== e[n];
            })
          );
        }
        function F(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function I(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function L(e, t) {
          for (var n in e) if ("__source" !== n && !(n in t)) return !0;
          for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
          return !1;
        }
        function D(e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        }
        function U(e) {
          this.props = e;
        }
        function H(e, t) {
          function n(e) {
            var n = this.props.ref,
              r = n == e.ref;
            return (
              !r && n && (n.call ? n(null) : (n.current = null)),
              t ? !t(this.props, e) || !r : L(this.props, e)
            );
          }
          function r(t) {
            return (this.shouldComponentUpdate = n), (0, u.createElement)(e, t);
          }
          return (
            (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
            (r.prototype.isReactComponent = !0),
            (r.__f = !0),
            r
          );
        }
        ((U.prototype = new u.Component()).isPureReactComponent = !0),
          (U.prototype.shouldComponentUpdate = function (e, t) {
            return L(this.props, e) || L(this.state, t);
          });
        var z = u.options.__b;
        u.options.__b = function (e) {
          e.type &&
            e.type.__f &&
            e.ref &&
            ((e.props.ref = e.ref), (e.ref = null)),
            z && z(e);
        };
        var W =
          ("undefined" != typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.forward_ref")) ||
          3911;
        function G(e) {
          function t(t) {
            var n = I({}, t);
            return delete n.ref, e(n, t.ref || null);
          }
          return (
            (t.$$typeof = W),
            (t.render = t),
            (t.prototype.isReactComponent = t.__f = !0),
            (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
            t
          );
        }
        var $ = function (e, t) {
            return null == e
              ? null
              : (0, u.toChildArray)((0, u.toChildArray)(e).map(t));
          },
          B = {
            map: $,
            forEach: $,
            count: function (e) {
              return e ? (0, u.toChildArray)(e).length : 0;
            },
            only: function (e) {
              var t = (0, u.toChildArray)(e);
              if (1 !== t.length) throw "Children.only";
              return t[0];
            },
            toArray: u.toChildArray,
          },
          q = u.options.__e;
        u.options.__e = function (e, t, n, r) {
          if (e.then)
            for (var o, a = t; (a = a.__); )
              if ((o = a.__c) && o.__c)
                return (
                  null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)),
                  o.__c(e, t)
                );
          q(e, t, n, r);
        };
        var V = u.options.unmount;
        function Y(e, t, n) {
          return (
            e &&
              (e.__c &&
                e.__c.__H &&
                (e.__c.__H.__.forEach(function (e) {
                  "function" == typeof e.__c && e.__c();
                }),
                (e.__c.__H = null)),
              null != (e = I({}, e)).__c &&
                (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
              (e.__k =
                e.__k &&
                e.__k.map(function (e) {
                  return Y(e, t, n);
                }))),
            e
          );
        }
        function X(e, t, n) {
          return (
            e &&
              ((e.__v = null),
              (e.__k =
                e.__k &&
                e.__k.map(function (e) {
                  return X(e, t, n);
                })),
              e.__c &&
                e.__c.__P === t &&
                (e.__e && n.insertBefore(e.__e, e.__d),
                (e.__c.__e = !0),
                (e.__c.__P = n))),
            e
          );
        }
        function Z() {
          (this.__u = 0), (this.t = null), (this.__b = null);
        }
        function Q(e) {
          var t = e.__.__c;
          return t && t.__a && t.__a(e);
        }
        function J(e) {
          var t, n, r;
          function o(o) {
            if (
              (t ||
                (t = e()).then(
                  function (e) {
                    n = e.default || e;
                  },
                  function (e) {
                    r = e;
                  }
                ),
              r)
            )
              throw r;
            if (!n) throw t;
            return (0, u.createElement)(n, o);
          }
          return (o.displayName = "Lazy"), (o.__f = !0), o;
        }
        function K() {
          (this.u = null), (this.o = null);
        }
        (u.options.unmount = function (e) {
          var t = e.__c;
          t && t.__R && t.__R(),
            t && !0 === e.__h && (e.type = null),
            V && V(e);
        }),
          ((Z.prototype = new u.Component()).__c = function (e, t) {
            var n = t.__c,
              r = this;
            null == r.t && (r.t = []), r.t.push(n);
            var o = Q(r.__v),
              a = !1,
              i = function () {
                a || ((a = !0), (n.__R = null), o ? o(u) : u());
              };
            n.__R = i;
            var u = function () {
                if (!--r.__u) {
                  if (r.state.__a) {
                    var e = r.state.__a;
                    r.__v.__k[0] = X(e, e.__c.__P, e.__c.__O);
                  }
                  var t;
                  for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
                    t.forceUpdate();
                }
              },
              l = !0 === t.__h;
            r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
              e.then(i, i);
          }),
          (Z.prototype.componentWillUnmount = function () {
            this.t = [];
          }),
          (Z.prototype.render = function (e, t) {
            if (this.__b) {
              if (this.__v.__k) {
                var n = document.createElement("div"),
                  r = this.__v.__k[0].__c;
                this.__v.__k[0] = Y(this.__b, n, (r.__O = r.__P));
              }
              this.__b = null;
            }
            var o = t.__a && (0, u.createElement)(u.Fragment, null, e.fallback);
            return (
              o && (o.__h = null),
              [
                (0, u.createElement)(
                  u.Fragment,
                  null,
                  t.__a ? null : e.children
                ),
                o,
              ]
            );
          });
        var ee = function (e, t, n) {
          if (
            (++n[1] === n[0] && e.o.delete(t),
            e.props.revealOrder &&
              ("t" !== e.props.revealOrder[0] || !e.o.size))
          )
            for (n = e.u; n; ) {
              for (; n.length > 3; ) n.pop()();
              if (n[1] < n[0]) break;
              e.u = n = n[2];
            }
        };
        function te(e) {
          return (
            (this.getChildContext = function () {
              return e.context;
            }),
            e.children
          );
        }
        function ne(e) {
          var t = this,
            n = e.i;
          (t.componentWillUnmount = function () {
            (0, u.render)(null, t.l), (t.l = null), (t.i = null);
          }),
            t.i && t.i !== n && t.componentWillUnmount(),
            e.__v
              ? (t.l ||
                  ((t.i = n),
                  (t.l = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    appendChild: function (e) {
                      this.childNodes.push(e), t.i.appendChild(e);
                    },
                    insertBefore: function (e, n) {
                      this.childNodes.push(e), t.i.appendChild(e);
                    },
                    removeChild: function (e) {
                      this.childNodes.splice(
                        this.childNodes.indexOf(e) >>> 1,
                        1
                      ),
                        t.i.removeChild(e);
                    },
                  })),
                (0, u.render)(
                  (0, u.createElement)(te, { context: t.context }, e.__v),
                  t.l
                ))
              : t.l && t.componentWillUnmount();
        }
        function re(e, t) {
          var n = (0, u.createElement)(ne, { __v: e, i: t });
          return (n.containerInfo = t), n;
        }
        ((K.prototype = new u.Component()).__a = function (e) {
          var t = this,
            n = Q(t.__v),
            r = t.o.get(e);
          return (
            r[0]++,
            function (o) {
              var a = function () {
                t.props.revealOrder ? (r.push(o), ee(t, e, r)) : o();
              };
              n ? n(a) : a();
            }
          );
        }),
          (K.prototype.render = function (e) {
            (this.u = null), (this.o = new Map());
            var t = (0, u.toChildArray)(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; )
              this.o.set(t[n], (this.u = [1, 0, this.u]));
            return e.children;
          }),
          (K.prototype.componentDidUpdate = K.prototype.componentDidMount =
            function () {
              var e = this;
              this.o.forEach(function (t, n) {
                ee(e, n, t);
              });
            });
        var oe =
            ("undefined" != typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103,
          ae =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
          ie = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
          ue = /[A-Z0-9]/g,
          le = "undefined" != typeof document,
          se = function (e) {
            return (
              "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                ? /fil|che|rad/
                : /fil|che|ra/
            ).test(e);
          };
        function ce(e, t, n) {
          return (
            null == t.__k && (t.textContent = ""),
            (0, u.render)(e, t),
            "function" == typeof n && n(),
            e ? e.__c : null
          );
        }
        function fe(e, t, n) {
          return (
            (0, u.hydrate)(e, t),
            "function" == typeof n && n(),
            e ? e.__c : null
          );
        }
        (u.Component.prototype.isReactComponent = {}),
          [
            "componentWillMount",
            "componentWillReceiveProps",
            "componentWillUpdate",
          ].forEach(function (e) {
            Object.defineProperty(u.Component.prototype, e, {
              configurable: !0,
              get: function () {
                return this["UNSAFE_" + e];
              },
              set: function (t) {
                Object.defineProperty(this, e, {
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          });
        var he = u.options.event;
        function de() {}
        function pe() {
          return this.cancelBubble;
        }
        function ve() {
          return this.defaultPrevented;
        }
        u.options.event = function (e) {
          return (
            he && (e = he(e)),
            (e.persist = de),
            (e.isPropagationStopped = pe),
            (e.isDefaultPrevented = ve),
            (e.nativeEvent = e)
          );
        };
        var ge,
          me = {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return this.class;
            },
          },
          ye = u.options.vnode;
        u.options.vnode = function (e) {
          "string" == typeof e.type &&
            (function (e) {
              var t = e.props,
                n = e.type,
                r = {};
              for (var o in t) {
                var a = t[o];
                if (
                  !(
                    ("value" === o && "defaultValue" in t && null == a) ||
                    (le && "children" === o && "noscript" === n) ||
                    "class" === o ||
                    "className" === o
                  )
                ) {
                  var i = o.toLowerCase();
                  "defaultValue" === o && "value" in t && null == t.value
                    ? (o = "value")
                    : "download" === o && !0 === a
                    ? (a = "")
                    : "ondoubleclick" === i
                    ? (o = "ondblclick")
                    : "onchange" !== i ||
                      ("input" !== n && "textarea" !== n) ||
                      se(t.type)
                    ? "onfocus" === i
                      ? (o = "onfocusin")
                      : "onblur" === i
                      ? (o = "onfocusout")
                      : ie.test(o)
                      ? (o = i)
                      : -1 === n.indexOf("-") && ae.test(o)
                      ? (o = o.replace(ue, "-$&").toLowerCase())
                      : null === a && (a = void 0)
                    : (i = o = "oninput"),
                    "oninput" === i && r[(o = i)] && (o = "oninputCapture"),
                    (r[o] = a);
                }
              }
              "select" == n &&
                r.multiple &&
                Array.isArray(r.value) &&
                (r.value = (0, u.toChildArray)(t.children).forEach(function (
                  e
                ) {
                  e.props.selected = -1 != r.value.indexOf(e.props.value);
                })),
                "select" == n &&
                  null != r.defaultValue &&
                  (r.value = (0, u.toChildArray)(t.children).forEach(function (
                    e
                  ) {
                    e.props.selected = r.multiple
                      ? -1 != r.defaultValue.indexOf(e.props.value)
                      : r.defaultValue == e.props.value;
                  })),
                t.class && !t.className
                  ? ((r.class = t.class),
                    Object.defineProperty(r, "className", me))
                  : ((t.className && !t.class) || (t.class && t.className)) &&
                    (r.class = r.className = t.className),
                (e.props = r);
            })(e),
            (e.$$typeof = oe),
            ye && ye(e);
        };
        var _e = u.options.__r;
        u.options.__r = function (e) {
          _e && _e(e), (ge = e.__c);
        };
        var xe = u.options.diffed;
        u.options.diffed = function (e) {
          xe && xe(e);
          var t = e.props,
            n = e.__e;
          null != n &&
            "textarea" === e.type &&
            "value" in t &&
            t.value !== n.value &&
            (n.value = null == t.value ? "" : t.value),
            (ge = null);
        };
        var be = {
            ReactCurrentDispatcher: {
              current: {
                readContext: function (e) {
                  return ge.__n[e.__c].props.value;
                },
              },
            },
          },
          we = "17.0.2";
        function Me(e) {
          return u.createElement.bind(null, e);
        }
        function ke(e) {
          return !!e && e.$$typeof === oe;
        }
        function Oe(e) {
          return ke(e) ? u.cloneElement.apply(null, arguments) : e;
        }
        function Ne(e) {
          return !!e.__k && ((0, u.render)(null, e), !0);
        }
        function Te(e) {
          return (e && (e.base || (1 === e.nodeType && e))) || null;
        }
        var Se = function (e, t) {
            return e(t);
          },
          Ee = function (e, t) {
            return e(t);
          },
          Ae = u.Fragment;
        function Ce(e) {
          e();
        }
        function je(e) {
          return e;
        }
        function Re() {
          return [!1, Ce];
        }
        var Pe = x;
        function Fe(e, t) {
          var n = t(),
            r = m({ h: { __: n, v: t } }),
            o = r[0].h,
            a = r[1];
          return (
            x(
              function () {
                (o.__ = n), (o.v = t), D(o.__, t()) || a({ h: o });
              },
              [e, n, t]
            ),
            _(
              function () {
                return (
                  D(o.__, o.v()) || a({ h: o }),
                  e(function () {
                    D(o.__, o.v()) || a({ h: o });
                  })
                );
              },
              [e]
            ),
            n
          );
        }
        var Ie = {
          useState: m,
          useId: S,
          useReducer: y,
          useEffect: _,
          useLayoutEffect: x,
          useInsertionEffect: Pe,
          useTransition: Re,
          useDeferredValue: je,
          useSyncExternalStore: Fe,
          startTransition: Ce,
          useRef: b,
          useImperativeHandle: w,
          useMemo: M,
          useCallback: k,
          useContext: O,
          useDebugValue: N,
          version: "17.0.2",
          Children: B,
          render: ce,
          hydrate: fe,
          unmountComponentAtNode: Ne,
          createPortal: re,
          createElement: u.createElement,
          createContext: u.createContext,
          createFactory: Me,
          cloneElement: Oe,
          createRef: u.createRef,
          Fragment: u.Fragment,
          isValidElement: ke,
          findDOMNode: Te,
          Component: u.Component,
          PureComponent: U,
          memo: H,
          forwardRef: G,
          flushSync: Ee,
          unstable_batchedUpdates: Se,
          StrictMode: Ae,
          Suspense: Z,
          SuspenseList: K,
          lazy: J,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
        };
      },
      6400: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Component: () => b,
            Fragment: () => x,
            cloneElement: () => G,
            createContext: () => $,
            createElement: () => m,
            createRef: () => _,
            h: () => m,
            hydrate: () => W,
            isValidElement: () => i,
            options: () => o,
            render: () => z,
            toChildArray: () => S,
          });
        var r,
          o,
          a,
          i,
          u,
          l,
          s,
          c,
          f,
          h = {},
          d = [],
          p =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function v(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function g(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function m(e, t, n) {
          var o,
            a,
            i,
            u = {};
          for (i in t)
            "key" == i ? (o = t[i]) : "ref" == i ? (a = t[i]) : (u[i] = t[i]);
          if (
            (arguments.length > 2 &&
              (u.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
          )
            for (i in e.defaultProps)
              void 0 === u[i] && (u[i] = e.defaultProps[i]);
          return y(e, u, o, a, null);
        }
        function y(e, t, n, r, i) {
          var u = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == i ? ++a : i,
          };
          return null == i && null != o.vnode && o.vnode(u), u;
        }
        function _() {
          return { current: null };
        }
        function x(e) {
          return e.children;
        }
        function b(e, t) {
          (this.props = e), (this.context = t);
        }
        function w(e, t) {
          if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? w(e) : null;
        }
        function M(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
              }
            return M(e);
          }
        }
        function k(e) {
          ((!e.__d && (e.__d = !0) && u.push(e) && !O.__r++) ||
            l !== o.debounceRendering) &&
            ((l = o.debounceRendering) || s)(O);
        }
        function O() {
          var e, t, n, r, o, a, i, l;
          for (u.sort(c); (e = u.shift()); )
            e.__d &&
              ((t = u.length),
              (r = void 0),
              (o = void 0),
              (i = (a = (n = e).__v).__e),
              (l = n.__P) &&
                ((r = []),
                ((o = v({}, a)).__v = a.__v + 1),
                F(
                  l,
                  a,
                  o,
                  n.__n,
                  void 0 !== l.ownerSVGElement,
                  null != a.__h ? [i] : null,
                  r,
                  null == i ? w(a) : i,
                  a.__h
                ),
                I(r, a),
                a.__e != i && M(a)),
              u.length > t && u.sort(c));
          O.__r = 0;
        }
        function N(e, t, n, r, o, a, i, u, l, s) {
          var c,
            f,
            p,
            v,
            g,
            m,
            _,
            b = (r && r.__k) || d,
            M = b.length;
          for (n.__k = [], c = 0; c < t.length; c++)
            if (
              null !=
              (v = n.__k[c] =
                null == (v = t[c]) ||
                "boolean" == typeof v ||
                "function" == typeof v
                  ? null
                  : "string" == typeof v ||
                    "number" == typeof v ||
                    "bigint" == typeof v
                  ? y(null, v, null, null, v)
                  : Array.isArray(v)
                  ? y(x, { children: v }, null, null, null)
                  : v.__b > 0
                  ? y(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v)
                  : v)
            ) {
              if (
                ((v.__ = n),
                (v.__b = n.__b + 1),
                null === (p = b[c]) ||
                  (p && v.key == p.key && v.type === p.type))
              )
                b[c] = void 0;
              else
                for (f = 0; f < M; f++) {
                  if ((p = b[f]) && v.key == p.key && v.type === p.type) {
                    b[f] = void 0;
                    break;
                  }
                  p = null;
                }
              F(e, v, (p = p || h), o, a, i, u, l, s),
                (g = v.__e),
                (f = v.ref) &&
                  p.ref != f &&
                  (_ || (_ = []),
                  p.ref && _.push(p.ref, null, v),
                  _.push(f, v.__c || g, v)),
                null != g
                  ? (null == m && (m = g),
                    "function" == typeof v.type && v.__k === p.__k
                      ? (v.__d = l = T(v, l, e))
                      : (l = E(e, v, p, b, g, l)),
                    "function" == typeof n.type && (n.__d = l))
                  : l && p.__e == l && l.parentNode != e && (l = w(p));
            }
          for (n.__e = m, c = M; c--; )
            null != b[c] &&
              ("function" == typeof n.type &&
                null != b[c].__e &&
                b[c].__e == n.__d &&
                (n.__d = A(r).nextSibling),
              U(b[c], b[c]));
          if (_) for (c = 0; c < _.length; c++) D(_[c], _[++c], _[++c]);
        }
        function T(e, t, n) {
          for (var r, o = e.__k, a = 0; o && a < o.length; a++)
            (r = o[a]) &&
              ((r.__ = e),
              (t =
                "function" == typeof r.type
                  ? T(r, t, n)
                  : E(n, r, r, o, r.__e, t)));
          return t;
        }
        function S(e, t) {
          return (
            (t = t || []),
            null == e ||
              "boolean" == typeof e ||
              (Array.isArray(e)
                ? e.some(function (e) {
                    S(e, t);
                  })
                : t.push(e)),
            t
          );
        }
        function E(e, t, n, r, o, a) {
          var i, u, l;
          if (void 0 !== t.__d) (i = t.__d), (t.__d = void 0);
          else if (null == n || o != a || null == o.parentNode)
            e: if (null == a || a.parentNode !== e)
              e.appendChild(o), (i = null);
            else {
              for (u = a, l = 0; (u = u.nextSibling) && l < r.length; l += 1)
                if (u == o) break e;
              e.insertBefore(o, a), (i = a);
            }
          return void 0 !== i ? i : o.nextSibling;
        }
        function A(e) {
          var t, n, r;
          if (null == e.type || "string" == typeof e.type) return e.__e;
          if (e.__k)
            for (t = e.__k.length - 1; t >= 0; t--)
              if ((n = e.__k[t]) && (r = A(n))) return r;
          return null;
        }
        function C(e, t, n) {
          "-" === t[0]
            ? e.setProperty(t, null == n ? "" : n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || p.test(t)
                  ? n
                  : n + "px");
        }
        function j(e, t, n, r, o) {
          var a;
          e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || C(e.style, t, "");
              if (n) for (t in n) (r && n[t] === r[t]) || C(e.style, t, n[t]);
            }
          else if ("o" === t[0] && "n" === t[1])
            (a = t !== (t = t.replace(/Capture$/, ""))),
              (t =
                t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + a] = n),
              n
                ? r || e.addEventListener(t, a ? P : R, a)
                : e.removeEventListener(t, a ? P : R, a);
          else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "width" !== t &&
              "height" !== t &&
              "href" !== t &&
              "list" !== t &&
              "form" !== t &&
              "tabIndex" !== t &&
              "download" !== t &&
              t in e
            )
              try {
                e[t] = null == n ? "" : n;
                break e;
              } catch (e) {}
            "function" == typeof n ||
              (null == n || (!1 === n && "-" !== t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, n));
          }
        }
        function R(e) {
          return this.l[e.type + !1](o.event ? o.event(e) : e);
        }
        function P(e) {
          return this.l[e.type + !0](o.event ? o.event(e) : e);
        }
        function F(e, t, n, r, a, i, u, l, s) {
          var c,
            f,
            h,
            d,
            p,
            g,
            m,
            y,
            _,
            w,
            M,
            k,
            O,
            T,
            S,
            E = t.type;
          if (void 0 !== t.constructor) return null;
          null != n.__h &&
            ((s = n.__h), (l = t.__e = n.__e), (t.__h = null), (i = [l])),
            (c = o.__b) && c(t);
          try {
            e: if ("function" == typeof E) {
              if (
                ((y = t.props),
                (_ = (c = E.contextType) && r[c.__c]),
                (w = c ? (_ ? _.props.value : c.__) : r),
                n.__c
                  ? (m = (f = t.__c = n.__c).__ = f.__E)
                  : ("prototype" in E && E.prototype.render
                      ? (t.__c = f = new E(y, w))
                      : ((t.__c = f = new b(y, w)),
                        (f.constructor = E),
                        (f.render = H)),
                    _ && _.sub(f),
                    (f.props = y),
                    f.state || (f.state = {}),
                    (f.context = w),
                    (f.__n = r),
                    (h = f.__d = !0),
                    (f.__h = []),
                    (f._sb = [])),
                null == f.__s && (f.__s = f.state),
                null != E.getDerivedStateFromProps &&
                  (f.__s == f.state && (f.__s = v({}, f.__s)),
                  v(f.__s, E.getDerivedStateFromProps(y, f.__s))),
                (d = f.props),
                (p = f.state),
                (f.__v = t),
                h)
              )
                null == E.getDerivedStateFromProps &&
                  null != f.componentWillMount &&
                  f.componentWillMount(),
                  null != f.componentDidMount &&
                    f.__h.push(f.componentDidMount);
              else {
                if (
                  (null == E.getDerivedStateFromProps &&
                    y !== d &&
                    null != f.componentWillReceiveProps &&
                    f.componentWillReceiveProps(y, w),
                  (!f.__e &&
                    null != f.shouldComponentUpdate &&
                    !1 === f.shouldComponentUpdate(y, f.__s, w)) ||
                    t.__v === n.__v)
                ) {
                  for (
                    t.__v !== n.__v &&
                      ((f.props = y), (f.state = f.__s), (f.__d = !1)),
                      f.__e = !1,
                      t.__e = n.__e,
                      t.__k = n.__k,
                      t.__k.forEach(function (e) {
                        e && (e.__ = t);
                      }),
                      M = 0;
                    M < f._sb.length;
                    M++
                  )
                    f.__h.push(f._sb[M]);
                  (f._sb = []), f.__h.length && u.push(f);
                  break e;
                }
                null != f.componentWillUpdate &&
                  f.componentWillUpdate(y, f.__s, w),
                  null != f.componentDidUpdate &&
                    f.__h.push(function () {
                      f.componentDidUpdate(d, p, g);
                    });
              }
              if (
                ((f.context = w),
                (f.props = y),
                (f.__P = e),
                (k = o.__r),
                (O = 0),
                "prototype" in E && E.prototype.render)
              ) {
                for (
                  f.state = f.__s,
                    f.__d = !1,
                    k && k(t),
                    c = f.render(f.props, f.state, f.context),
                    T = 0;
                  T < f._sb.length;
                  T++
                )
                  f.__h.push(f._sb[T]);
                f._sb = [];
              } else
                do {
                  (f.__d = !1),
                    k && k(t),
                    (c = f.render(f.props, f.state, f.context)),
                    (f.state = f.__s);
                } while (f.__d && ++O < 25);
              (f.state = f.__s),
                null != f.getChildContext &&
                  (r = v(v({}, r), f.getChildContext())),
                h ||
                  null == f.getSnapshotBeforeUpdate ||
                  (g = f.getSnapshotBeforeUpdate(d, p)),
                (S =
                  null != c && c.type === x && null == c.key
                    ? c.props.children
                    : c),
                N(e, Array.isArray(S) ? S : [S], t, n, r, a, i, u, l, s),
                (f.base = t.__e),
                (t.__h = null),
                f.__h.length && u.push(f),
                m && (f.__E = f.__ = null),
                (f.__e = !1);
            } else
              null == i && t.__v === n.__v
                ? ((t.__k = n.__k), (t.__e = n.__e))
                : (t.__e = L(n.__e, t, n, r, a, i, u, s));
            (c = o.diffed) && c(t);
          } catch (e) {
            (t.__v = null),
              (s || null != i) &&
                ((t.__e = l), (t.__h = !!s), (i[i.indexOf(l)] = null)),
              o.__e(e, t, n);
          }
        }
        function I(e, t) {
          o.__c && o.__c(t, e),
            e.some(function (t) {
              try {
                (e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  });
              } catch (e) {
                o.__e(e, t.__v);
              }
            });
        }
        function L(e, t, n, o, a, i, u, l) {
          var s,
            c,
            f,
            d = n.props,
            p = t.props,
            v = t.type,
            m = 0;
          if (("svg" === v && (a = !0), null != i))
            for (; m < i.length; m++)
              if (
                (s = i[m]) &&
                "setAttribute" in s == !!v &&
                (v ? s.localName === v : 3 === s.nodeType)
              ) {
                (e = s), (i[m] = null);
                break;
              }
          if (null == e) {
            if (null === v) return document.createTextNode(p);
            (e = a
              ? document.createElementNS("http://www.w3.org/2000/svg", v)
              : document.createElement(v, p.is && p)),
              (i = null),
              (l = !1);
          }
          if (null === v) d === p || (l && e.data === p) || (e.data = p);
          else {
            if (
              ((i = i && r.call(e.childNodes)),
              (c = (d = n.props || h).dangerouslySetInnerHTML),
              (f = p.dangerouslySetInnerHTML),
              !l)
            ) {
              if (null != i)
                for (d = {}, m = 0; m < e.attributes.length; m++)
                  d[e.attributes[m].name] = e.attributes[m].value;
              (f || c) &&
                ((f &&
                  ((c && f.__html == c.__html) || f.__html === e.innerHTML)) ||
                  (e.innerHTML = (f && f.__html) || ""));
            }
            if (
              ((function (e, t, n, r, o) {
                var a;
                for (a in n)
                  "children" === a ||
                    "key" === a ||
                    a in t ||
                    j(e, a, null, n[a], r);
                for (a in t)
                  (o && "function" != typeof t[a]) ||
                    "children" === a ||
                    "key" === a ||
                    "value" === a ||
                    "checked" === a ||
                    n[a] === t[a] ||
                    j(e, a, t[a], n[a], r);
              })(e, p, d, a, l),
              f)
            )
              t.__k = [];
            else if (
              ((m = t.props.children),
              N(
                e,
                Array.isArray(m) ? m : [m],
                t,
                n,
                o,
                a && "foreignObject" !== v,
                i,
                u,
                i ? i[0] : n.__k && w(n, 0),
                l
              ),
              null != i)
            )
              for (m = i.length; m--; ) null != i[m] && g(i[m]);
            l ||
              ("value" in p &&
                void 0 !== (m = p.value) &&
                (m !== e.value ||
                  ("progress" === v && !m) ||
                  ("option" === v && m !== d.value)) &&
                j(e, "value", m, d.value, !1),
              "checked" in p &&
                void 0 !== (m = p.checked) &&
                m !== e.checked &&
                j(e, "checked", m, d.checked, !1));
          }
          return e;
        }
        function D(e, t, n) {
          try {
            "function" == typeof e ? e(t) : (e.current = t);
          } catch (e) {
            o.__e(e, n);
          }
        }
        function U(e, t, n) {
          var r, a;
          if (
            (o.unmount && o.unmount(e),
            (r = e.ref) &&
              ((r.current && r.current !== e.__e) || D(r, null, t)),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount();
              } catch (e) {
                o.__e(e, t);
              }
            (r.base = r.__P = null), (e.__c = void 0);
          }
          if ((r = e.__k))
            for (a = 0; a < r.length; a++)
              r[a] && U(r[a], t, n || "function" != typeof e.type);
          n || null == e.__e || g(e.__e), (e.__ = e.__e = e.__d = void 0);
        }
        function H(e, t, n) {
          return this.constructor(e, n);
        }
        function z(e, t, n) {
          var a, i, u;
          o.__ && o.__(e, t),
            (i = (a = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (u = []),
            F(
              t,
              (e = ((!a && n) || t).__k = m(x, null, [e])),
              i || h,
              h,
              void 0 !== t.ownerSVGElement,
              !a && n
                ? [n]
                : i
                ? null
                : t.firstChild
                ? r.call(t.childNodes)
                : null,
              u,
              !a && n ? n : i ? i.__e : t.firstChild,
              a
            ),
            I(u, e);
        }
        function W(e, t) {
          z(e, t, W);
        }
        function G(e, t, n) {
          var o,
            a,
            i,
            u = v({}, e.props);
          for (i in t)
            "key" == i ? (o = t[i]) : "ref" == i ? (a = t[i]) : (u[i] = t[i]);
          return (
            arguments.length > 2 &&
              (u.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            y(e.type, u, o || e.key, a || e.ref, null)
          );
        }
        function $(e, t) {
          var n = {
            __c: (t = "__cC" + f++),
            __: e,
            Consumer: function (e, t) {
              return e.children(t);
            },
            Provider: function (e) {
              var n, r;
              return (
                this.getChildContext ||
                  ((n = []),
                  ((r = {})[t] = this),
                  (this.getChildContext = function () {
                    return r;
                  }),
                  (this.shouldComponentUpdate = function (e) {
                    this.props.value !== e.value &&
                      n.some(function (e) {
                        (e.__e = !0), k(e);
                      });
                  }),
                  (this.sub = function (e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      n.splice(n.indexOf(e), 1), t && t.call(e);
                    };
                  })),
                e.children
              );
            },
          };
          return (n.Provider.__ = n.Consumer.contextType = n);
        }
        (r = d.slice),
          (o = {
            __e: function (e, t, n, r) {
              for (var o, a, i; (t = t.__); )
                if ((o = t.__c) && !o.__)
                  try {
                    if (
                      ((a = o.constructor) &&
                        null != a.getDerivedStateFromError &&
                        (o.setState(a.getDerivedStateFromError(e)),
                        (i = o.__d)),
                      null != o.componentDidCatch &&
                        (o.componentDidCatch(e, r || {}), (i = o.__d)),
                      i)
                    )
                      return (o.__E = o);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (a = 0),
          (i = function (e) {
            return null != e && void 0 === e.constructor;
          }),
          (b.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = v({}, this.state))),
              "function" == typeof e && (e = e(v({}, n), this.props)),
              e && v(n, e),
              null != e && this.__v && (t && this._sb.push(t), k(this));
          }),
          (b.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), k(this));
          }),
          (b.prototype.render = x),
          (u = []),
          (s =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (c = function (e, t) {
            return e.__v.__b - t.__v.__b;
          }),
          (O.__r = 0),
          (f = 0);
      },
      2703: (e, t, n) => {
        "use strict";
        var r = n(414);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      5697: (e, t, n) => {
        e.exports = n(2703)();
      },
      414: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      6488: (e, t, n) => {
        var r,
          o = n(6524),
          a = n(6913),
          i = n(2087),
          u = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;
        e.exports = function (e, t) {
          function n(e, a, l) {
            if (r++ > 100)
              throw ((r = 0), new Error("Call stack overflow for " + l));
            if ("" === e)
              throw new Error(
                a + "(): '" + l + "' must contain a non-whitespace string"
              );
            e = (function (e, t) {
              e = e.replace(/((?:\-[a-z]+\-)?calc)/g, "");
              var r,
                a = "",
                i = e;
              for (; (r = u.exec(i)); ) {
                r[0].index > 0 && (a += i.substring(0, r[0].index));
                var l = o("(", ")", i.substring([0].index));
                if ("" === l.body)
                  throw new Error(
                    "'" + e + "' must contain a non-whitespace string"
                  );
                var s = n(l.body, "", t);
                (a += l.pre + s), (i = l.post);
              }
              return a + i;
            })(e, l);
            var s = (function (e) {
              var t = [],
                n = [],
                r = /[\.0-9]([%a-z]+)/gi,
                o = r.exec(e);
              for (; o; )
                o &&
                  o[1] &&
                  (-1 === n.indexOf(o[1].toLowerCase()) &&
                    (t.push(o[1]), n.push(o[1].toLowerCase())),
                  (o = r.exec(e)));
              return t;
            })(e);
            if (s.length > 1 || e.indexOf("var(") > -1)
              return a + "(" + e + ")";
            var c = s[0] || "";
            "%" === c &&
              (e = e.replace(/\b[0-9\.]+%/g, function (e) {
                return 0.01 * parseFloat(e.slice(0, -1));
              }));
            var f,
              h = e.replace(new RegExp(c, "gi"), "");
            try {
              f = i.eval(h);
            } catch (t) {
              return a + "(" + e + ")";
            }
            return (
              "%" === c && (f *= 100),
              (a.length || "%" === c) && (f = Math.round(f * t) / t),
              (f += c)
            );
          }
          return (
            (r = 0),
            (t = Math.pow(10, void 0 === t ? 5 : t)),
            (e = e.replace(/\n+/g, " ")),
            a(e, /((?:\-[a-z]+\-)?calc)\(/, n)
          );
        };
      },
      6524: (e) => {
        function t(e, t, o) {
          e instanceof RegExp && (e = n(e, o)),
            t instanceof RegExp && (t = n(t, o));
          var a = r(e, t, o);
          return (
            a && {
              start: a[0],
              end: a[1],
              pre: o.slice(0, a[0]),
              body: o.slice(a[0] + e.length, a[1]),
              post: o.slice(a[1] + t.length),
            }
          );
        }
        function n(e, t) {
          var n = t.match(e);
          return n ? n[0] : null;
        }
        function r(e, t, n) {
          var r,
            o,
            a,
            i,
            u,
            l = n.indexOf(e),
            s = n.indexOf(t, l + 1),
            c = l;
          if (l >= 0 && s > 0) {
            for (r = [], a = n.length; c >= 0 && !u; )
              c == l
                ? (r.push(c), (l = n.indexOf(e, c + 1)))
                : 1 == r.length
                ? (u = [r.pop(), s])
                : ((o = r.pop()) < a && ((a = o), (i = s)),
                  (s = n.indexOf(t, c + 1))),
                (c = l < s && l >= 0 ? l : s);
            r.length && (u = [a, i]);
          }
          return u;
        }
        (e.exports = t), (t.range = r);
      },
      6913: (e, t, n) => {
        var r = n(5623);
        function o(e, t, n) {
          var a = e;
          return (function (e, t) {
            var n = [],
              o = "string" == typeof t ? new RegExp("\\b(" + t + ")\\(") : t;
            do {
              var a = o.exec(e);
              if (!a) return n;
              if (void 0 === a[1])
                throw new Error(
                  "Missing the first couple of parenthesis to get the function identifier in " +
                    t
                );
              var i = a[1],
                u = a.index,
                l = r("(", ")", e.substring(u));
              if (!l || l.start !== a[0].length - 1)
                throw new SyntaxError(
                  i + "(): missing closing ')' in the value '" + e + "'"
                );
              n.push({ matches: l, functionIdentifier: i }), (e = l.post);
            } while (o.test(e));
            return n;
          })(e, t).reduce(function (e, r) {
            return e.replace(
              r.functionIdentifier + "(" + r.matches.body + ")",
              (function (e, t, n, r, a) {
                return n(o(e, a, n), t, r);
              })(r.matches.body, r.functionIdentifier, n, a, t)
            );
          }, e);
        }
        e.exports = o;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = i(n(513)),
        t = i(n(1959)),
        r = n(3730),
        o = n(1191),
        a = n(9911);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(n, i) {
        if ((t.default.log("API call", n, i), !n))
          return void t.default.error("Method required");
        let u = null;
        switch (n) {
          case "addGoalWidget":
            if (!i.selectorId)
              return void t.default.error("SelectorId required");
            const l = i.selectorId;
            if (e.default.getConfig().widgets[l])
              return void t.default.warn(
                "Widget on selector ",
                l,
                " already exists"
              );
            const s = i.matchId ? i.matchId : null,
              c = i.settings;
            (u = new r.GoalWidget({ rootNodeId: l, matchId: s, settings: c })),
              u._fetchAndRenderWidget();
            break;
          case "addSpiderWidget":
            if (!i.selectorId)
              return void t.default.error("SelectorId required");
            const f = i.selectorId;
            if (e.default.getConfig().widgets[f])
              return void t.default.warn(
                "Widget on selector ",
                f,
                " already exists"
              );
            const h = i.matchId ? i.matchId : null,
              d = i.settings;
            (u = new o.SpiderWidget({
              rootNodeId: f,
              matchId: h,
              settings: d,
            })),
              u._fetchAndRenderWidget();
            break;
          case "addXWidget":
            if (!i.selectorId)
              return void t.default.error("SelectorId required");
            const p = i.selectorId;
            if (e.default.getConfig().widgets[p])
              return void t.default.warn(
                "Widget on selector ",
                p,
                " already exists"
              );
            const v = i.matchId ? i.matchId : null,
              g = i.settings;
            (u = new a.XWidget({ rootNodeId: p, matchId: v, settings: g })),
              u._fetchAndRenderWidget();
            break;
          default:
            t.default.error("Unknown method", n);
        }
        return u && (e.default.getConfig().widgets[i.selectorId] = u), u;
      }
      function l(e, t) {
        for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      !(function (n) {
        let r = { settings: [], logLevel: "error", debug: !1 },
          o = n[n.PlaymakerWidget],
          a = o.q;
        if (a)
          for (let n = 0; n < a.length; n++)
            "init" === a[n][0].toLowerCase()
              ? ((r = l(r, a[n][1])),
                t.default.init({ logLevel: r.logLevel, debug: r.debug }),
                e.default.setConfig(r),
                t.default.info("Playmaker-Widget started"))
              : u(a[n][0], a[n][1]);
        (o = u), (n[n.PlaymakerWidget] = o);
      })(window);
    })();
})();
