(this["webpackJsonpheroes-app"] = this["webpackJsonpheroes-app"] || []).push([
  [0],
  {
    36: function (e, r, a) {
      var c = {
        "./dc-arrow.jpg": 37,
        "./dc-batman.jpg": 38,
        "./dc-black.jpg": 39,
        "./dc-blue.jpg": 40,
        "./dc-flash.jpg": 41,
        "./dc-green.jpg": 42,
        "./dc-martian.jpg": 43,
        "./dc-robin.jpg": 44,
        "./dc-superman.jpg": 45,
        "./dc-wonder.jpg": 46,
        "./marvel-captain.jpg": 47,
        "./marvel-cyclops.jpg": 48,
        "./marvel-daredevil.jpg": 49,
        "./marvel-hawkeye.jpg": 50,
        "./marvel-hulk.jpg": 51,
        "./marvel-iron.jpg": 52,
        "./marvel-silver.jpg": 53,
        "./marvel-spider.jpg": 54,
        "./marvel-thor.jpg": 55,
        "./marvel-wolverine.jpg": 56,
      };
      function t(e) {
        var r = s(e);
        return a(r);
      }
      function s(e) {
        if (!a.o(c, e)) {
          var r = new Error("Cannot find module '" + e + "'");
          throw ((r.code = "MODULE_NOT_FOUND"), r);
        }
        return c[e];
      }
      (t.keys = function () {
        return Object.keys(c);
      }),
        (t.resolve = s),
        (e.exports = t),
        (t.id = 36);
    },
    37: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-arrow.15b27bc2.jpg");
    },
    38: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-batman.ab9eadc3.jpg");
    },
    39: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-black.3747c663.jpg");
    },
    40: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-blue.cc8169a3.jpg");
    },
    41: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-flash.b3922f25.jpg");
    },
    42: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-green.01c54ee1.jpg");
    },
    43: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-martian.78565f7d.jpg");
    },
    44: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-robin.ea4afe99.jpg");
    },
    45: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-superman.e9391474.jpg");
    },
    46: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/dc-wonder.970ba2d6.jpg");
    },
    47: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-captain.d2c7774d.jpg");
    },
    48: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-cyclops.f1442408.jpg");
    },
    49: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-daredevil.2f4f1a57.jpg");
    },
    50: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-hawkeye.1f78e874.jpg");
    },
    51: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-hulk.d1af5fe5.jpg");
    },
    52: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-iron.b394df11.jpg");
    },
    53: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-silver.1d43a08b.jpg");
    },
    54: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-spider.054016b4.jpg");
    },
    55: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-thor.c63e651c.jpg");
    },
    56: function (e, r, a) {
      "use strict";
      a.r(r), (r.default = a.p + "static/media/marvel-wolverine.ee676488.jpg");
    },
    71: function (e, r, a) {
      "use strict";
      a.r(r);
      var c = a(1),
        t = a(20),
        s = a.n(t),
        i = a(5),
        n = a(2),
        l = a(0),
        o = function (e) {
          var r = e.history;
          return Object(l.jsxs)("div", {
            className: "container mt-5",
            children: [
              Object(l.jsx)("h1", { children: "Login" }),
              Object(l.jsx)("hr", {}),
              Object(l.jsx)("button", {
                className: "btn btn-dark",
                onClick: function () {
                  r.push("/");
                },
                children: "Ingresar",
              }),
            ],
          });
        },
        d = function () {
          return Object(l.jsxs)("nav", {
            className: "navbar navbar-expand-sm navbar-dark bg-dark",
            children: [
              Object(l.jsx)(i.b, {
                className: "navbar-brand",
                to: "/",
                children: "Asociaciones",
              }),
              Object(l.jsx)("div", {
                className: "navbar-collapse",
                children: Object(l.jsxs)("div", {
                  className: "navbar-nav",
                  children: [
                    Object(l.jsx)(i.c, {
                      activeClassName: "active",
                      className: "nav-item nav-link",
                      exact: !0,
                      to: "/marvel",
                      children: "Marvel",
                    }),
                    Object(l.jsx)(i.c, {
                      activeClassName: "active",
                      className: "nav-item nav-link",
                      exact: !0,
                      to: "/dc",
                      children: "DC",
                    }),
                    Object(l.jsx)(i.c, {
                      activeClassName: "active",
                      className: "nav-item nav-link",
                      exact: !0,
                      to: "/search",
                      children: "Search",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("div", {
                className:
                  "navbar-collapse collapse w-100 order-3 dual-collapse2",
                children: Object(l.jsx)("ul", {
                  className: "navbar-nav ml-auto",
                  children: Object(l.jsx)(i.c, {
                    activeClassName: "active",
                    className: "nav-item nav-link",
                    exact: !0,
                    to: "/login",
                    children: "Logout",
                  }),
                }),
              }),
            ],
          });
        },
        u = a(12),
        p = [
          {
            id: "dc-batman",
            superhero: "Batman",
            publisher: "DC Comics",
            alter_ego: "Bruce Wayne",
            first_appearance: "Detective Comics #27",
            characters: "Bruce Wayne",
          },
          {
            id: "dc-superman",
            superhero: "Superman",
            publisher: "DC Comics",
            alter_ego: "Kal-El",
            first_appearance: "Action Comics #1",
            characters: "Kal-El",
          },
          {
            id: "dc-flash",
            superhero: "Flash",
            publisher: "DC Comics",
            alter_ego: "Jay Garrick",
            first_appearance: "Flash Comics #1",
            characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
          },
          {
            id: "dc-green",
            superhero: "Green Lantern",
            publisher: "DC Comics",
            alter_ego: "Alan Scott",
            first_appearance: "All-American Comics #16",
            characters:
              "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
          },
          {
            id: "dc-arrow",
            superhero: "Green Arrow",
            publisher: "DC Comics",
            alter_ego: "Oliver Queen",
            first_appearance: "More Fun Comics #73",
            characters: "Oliver Queen",
          },
          {
            id: "dc-wonder",
            superhero: "Wonder Woman",
            publisher: "DC Comics",
            alter_ego: "Princess Diana",
            first_appearance: "All Star Comics #8",
            characters: "Princess Diana",
          },
          {
            id: "dc-martian",
            superhero: "Martian Manhunter",
            publisher: "DC Comics",
            alter_ego: "J'onn J'onzz",
            first_appearance: "Detective Comics #225",
            characters: "Martian Manhunter",
          },
          {
            id: "dc-robin",
            superhero: "Robin/Nightwing",
            publisher: "DC Comics",
            alter_ego: "Dick Grayson",
            first_appearance: "Detective Comics #38",
            characters: "Dick Grayson",
          },
          {
            id: "dc-blue",
            superhero: "Blue Beetle",
            publisher: "DC Comics",
            alter_ego: "Dan Garret",
            first_appearance: "Mystery Men Comics #1",
            characters: "Dan Garret, Ted Kord, Jaime Reyes",
          },
          {
            id: "dc-black",
            superhero: "Black Canary",
            publisher: "DC Comics",
            alter_ego: "Dinah Drake",
            first_appearance: "Flash Comics #86",
            characters: "Dinah Drake, Dinah Lance",
          },
          {
            id: "marvel-spider",
            superhero: "Spider Man",
            publisher: "Marvel Comics",
            alter_ego: "Peter Parker",
            first_appearance: "Amazing Fantasy #15",
            characters: "Peter Parker",
          },
          {
            id: "marvel-captain",
            superhero: "Captain America",
            publisher: "Marvel Comics",
            alter_ego: "Steve Rogers",
            first_appearance: "Captain America Comics #1",
            characters: "Steve Rogers",
          },
          {
            id: "marvel-iron",
            superhero: "Iron Man",
            publisher: "Marvel Comics",
            alter_ego: "Tony Stark",
            first_appearance: "Tales of Suspense #39",
            characters: "Tony Stark",
          },
          {
            id: "marvel-thor",
            superhero: "Thor",
            publisher: "Marvel Comics",
            alter_ego: "Thor Odinson",
            first_appearance: "Journey into Myster #83",
            characters: "Thor Odinson",
          },
          {
            id: "marvel-hulk",
            superhero: "Hulk",
            publisher: "Marvel Comics",
            alter_ego: "Bruce Banner",
            first_appearance: "The Incredible Hulk #1",
            characters: "Bruce Banner",
          },
          {
            id: "marvel-wolverine",
            superhero: "Wolverine",
            publisher: "Marvel Comics",
            alter_ego: "James Howlett",
            first_appearance: "The Incredible Hulk #180",
            characters: "James Howlett",
          },
          {
            id: "marvel-daredevil",
            superhero: "Daredevil",
            publisher: "Marvel Comics",
            alter_ego: "Matthew Michael Murdock",
            first_appearance: "Daredevil #1",
            characters: "Matthew Michael Murdock",
          },
          {
            id: "marvel-hawkeye",
            superhero: "Hawkeye",
            publisher: "Marvel Comics",
            alter_ego: "Clinton Francis Barton",
            first_appearance: "Tales of Suspense #57",
            characters: "Clinton Francis Barton",
          },
          {
            id: "marvel-cyclops",
            superhero: "Cyclops",
            publisher: "Marvel Comics",
            alter_ego: "Scott Summers",
            first_appearance: "X-Men #1",
            characters: "Scott Summers",
          },
          {
            id: "marvel-silver",
            superhero: "Silver Surfer",
            publisher: "Marvel Comics",
            alter_ego: "Norrin Radd",
            first_appearance: "The Fantastic Four #48",
            characters: "Norrin Radd",
          },
        ],
        h = function (e) {
          var r = e.id,
            a = e.superhero,
            c = (e.publisher, e.alter_ego),
            t = e.first_appearance,
            s = e.characters;
          return Object(l.jsx)("div", {
            className: "card ms-3",
            style: { maxWidth: 540 },
            children: Object(l.jsxs)("div", {
              className: "row no-gutters",
              children: [
                Object(l.jsx)("div", {
                  className: "col-md-4",
                  children: Object(l.jsx)("img", {
                    src: "./img/".concat(r),
                    className: "card-img",
                    alt: a,
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "col-md-8",
                  children: Object(l.jsxs)("div", {
                    className: "card-body",
                    children: [
                      Object(l.jsx)("h5", {
                        className: "card-title",
                        children: a,
                      }),
                      Object(l.jsx)("p", {
                        className: "card-text",
                        children: c,
                      }),
                      c !== s &&
                        Object(l.jsx)("p", {
                          className: "card-text",
                          children: s,
                        }),
                      Object(l.jsx)("p", {
                        className: "card-text",
                        children: Object(l.jsx)("small", {
                          className: "text-muted",
                          children: t,
                        }),
                      }),
                      Object(l.jsx)(i.b, {
                        to: "/hero/".concat(r),
                        children: "M\xe1s...",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        j =
          (a(18),
          function (e) {
            var r = e.publisher,
              a = Object(c.useMemo)(
                function () {
                  return (function (e) {
                    if (!["DC Comics", "Marvel Comics"].includes(e))
                      throw new Error(
                        'publisher "'.concat(e, '" no es correcto')
                      );
                    return p.filter(function (r) {
                      return r.publisher === e;
                    });
                  })(r);
                },
                [r]
              );
            return Object(l.jsx)("div", {
              className: "card-columns animate__animated animate__fadeIn",
              children: a.map(function (e) {
                return Object(l.jsx)(h, Object(u.a)({}, e), e.id);
              }),
            });
          }),
        m = function () {
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)("h1", { children: "DC Screen" }),
              Object(l.jsx)("hr", {}),
              Object(l.jsx)(j, { publisher: "DC Comics" }),
            ],
          });
        },
        b = function () {
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)("h1", { children: "Marvel Screen" }),
              Object(l.jsx)("hr", {}),
              Object(l.jsx)(j, { publisher: "Marvel Comics" }),
            ],
          });
        },
        v = function (e) {
          var r,
            c = e.history,
            t = Object(n.h)().heroId,
            s =
              ((r = t),
              p.find(function (e) {
                return e.id === r;
              }));
          if (!s) return Object(l.jsx)(n.a, { to: "/" });
          var i = s.superhero,
            o = s.publisher,
            d = s.alter_ego,
            u = s.first_appearance,
            h = s.characters;
          return Object(l.jsxs)("div", {
            className: "row mt-5",
            children: [
              Object(l.jsx)("div", {
                className: "col-4",
                children: Object(l.jsx)("img", {
                  src: a(36)("./".concat(t, ".jpg")).default,
                  alt: i,
                  className:
                    "img-thumbnail animate__animated animate__fadeInLeftBig",
                }),
              }),
              Object(l.jsxs)("div", {
                className: "col-8",
                children: [
                  Object(l.jsx)("h3", { children: i }),
                  Object(l.jsxs)("ul", {
                    className: "list-group list-group-flush",
                    children: [
                      Object(l.jsx)("li", {
                        className: "list-group-item",
                        children: Object(l.jsxs)("b", {
                          children: ["Alter ego:", d],
                        }),
                      }),
                      Object(l.jsx)("li", {
                        className: "list-group-item",
                        children: Object(l.jsxs)("b", {
                          children: ["publisher:", o],
                        }),
                      }),
                      Object(l.jsx)("li", {
                        className: "list-group-item",
                        children: Object(l.jsxs)("b", {
                          children: ["First apearence:", u],
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsx)("h5", { children: " Characters" }),
                  Object(l.jsx)("p", { children: h }),
                  Object(l.jsx)("button", {
                    className: "btn btn-outline-info",
                    onClick: function () {
                      c.length <= 1 ? c.push("/") : c.goBack();
                    },
                    children: " Return",
                  }),
                ],
              }),
            ],
          });
        },
        f = a(24),
        x = a(25),
        O = a(23),
        g = a.n(O),
        C = function (e) {
          var r = e.history,
            a = Object(c.useState)([]),
            t = Object(x.a)(a, 2),
            s = t[0],
            i = t[1],
            o = Object(n.g)(),
            d = g.a.parse(o.search).q,
            j = void 0 === d ? "" : d;
          Object(c.useEffect)(
            function () {
              var e = (function (e) {
                if ("" === e) return [];
                var r = e.toLocaleLowerCase();
                return p.filter(function (e) {
                  return e.superhero.toLocaleLowerCase().includes(r);
                });
              })(j);
              i(Object(f.a)(e));
            },
            [j]
          );
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)("h1", { children: "Search Screen" }),
              Object(l.jsx)("hr", {}),
              Object(l.jsxs)("div", {
                className: "row",
                children: [
                  Object(l.jsxs)("div", {
                    className: "col-4",
                    children: [
                      Object(l.jsx)("h4", { children: "Search Form" }),
                      Object(l.jsxs)("form", {
                        children: [
                          Object(l.jsx)("input", {
                            name: "superHero",
                            type: "text",
                            placeholder: "Find your Hero",
                            className: "form-control",
                          }),
                          Object(l.jsx)("button", {
                            type: "submit",
                            className: "btn m-1 btn-block btn-outline-primary",
                            onClick: function (e) {
                              e.preventDefault();
                              var a = document.querySelector("input").value;
                              r.push("?q=".concat(a));
                            },
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "col-8",
                    children: [
                      Object(l.jsx)("h4", { children: " Results" }),
                      Object(l.jsx)("hr", {}),
                      s.map(function (e) {
                        return Object(l.jsx)(h, Object(u.a)({}, e), e.id);
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        _ = function () {
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(d, {}),
              Object(l.jsx)("div", {
                className: "container mt-2",
                children: Object(l.jsxs)(n.d, {
                  children: [
                    Object(l.jsx)(n.b, {
                      exact: !0,
                      path: "/dc",
                      component: m,
                    }),
                    Object(l.jsx)(n.b, {
                      exact: !0,
                      path: "/marvel",
                      component: b,
                    }),
                    Object(l.jsx)(n.b, {
                      exact: !0,
                      path: "/hero/:heroId",
                      component: v,
                    }),
                    Object(l.jsx)(n.b, {
                      exact: !0,
                      path: "/search",
                      component: C,
                    }),
                    Object(l.jsx)(n.a, { to: "/marvel" }),
                  ],
                }),
              }),
            ],
          });
        },
        N = function () {
          return Object(l.jsx)(i.a, {
            children: Object(l.jsx)("div", {
              children: Object(l.jsxs)(n.d, {
                children: [
                  Object(l.jsx)(n.b, {
                    exact: !0,
                    path: "/login",
                    component: o,
                  }),
                  Object(l.jsx)(n.b, { path: "/", component: _ }),
                ],
              }),
            }),
          });
        },
        k = function () {
          return Object(l.jsx)(N, {});
        };
      s.a.render(Object(l.jsx)(k, {}), document.getElementById("root"));
    },
  },
  [[71, 1, 2]],
]);
//# sourceMappingURL=main.f4836e37.chunk.js.map
