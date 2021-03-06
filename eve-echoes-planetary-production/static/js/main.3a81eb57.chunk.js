(this["webpackJsonpeve-echoes-planetary-production"] = this["webpackJsonpeve-echoes-planetary-production"] || []).push([
    [0], {
        108: function(e, t, a) {
            e.exports = a(125)
        },
        125: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                l = a(16),
                c = a.n(l),
                o = a(185),
                i = a(186),
                u = a(95),
                s = a(184),
                m = a(24),
                b = a(31),
                d = a(15),
                h = a(182),
                f = a(162),
                g = a(183),
                v = a(189),
                p = a(178),
                j = a(181),
                O = a(73);

            function y(e, t) {
                var a = Object(n.useState)((function() {
                        return JSON.parse(localStorage.getItem(e)) || t
                    })),
                    r = Object(d.a)(a, 2),
                    l = r[0],
                    c = r[1];
                return Object(n.useEffect)((function() {
                    localStorage.setItem(e, JSON.stringify(l))
                }), [e, l]), [l, c]
            }
            var E = a(190),
                w = a(167),
                C = a(193);

            function k(e) {
                var t = e.label,
                    a = e.limit,
                    n = Object(m.a)(e, ["label", "limit"]);
                return r.a.createElement(f.a, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    lg: 4
                }, r.a.createElement(E.a, Object.assign({}, n, {
                    filterOptions: Object(w.a)({
                        limit: a
                    }),
                    renderInput: function(e) {
                        return r.a.createElement(C.a, Object.assign({}, e, {
                            label: t,
                            variant: "outlined"
                        }))
                    }
                })))
            }
            k.defaultProps = {
                limit: 100
            };
            var S = k,
                x = a(192),
                R = a(171),
                P = a(195),
                K = a(187),
                N = a(196);

            function B(e) {
                return r.a.createElement(f.a, {
                    container: !0,
                    spacing: 1
                }, e.map((function(e) {
                    return r.a.createElement(f.a, {
                        item: !0,
                        key: e
                    }, r.a.createElement(x.a, {
                        label: e
                    }))
                })))
            }
            var T = function(e) {
                    var t = e.id,
                        a = e.label,
                        n = e.onChange,
                        l = e.options,
                        c = Object(m.a)(e, ["id", "label", "onChange", "options"]),
                        o = "".concat(t, "-label");
                    return r.a.createElement(f.a, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        lg: 4
                    }, r.a.createElement(R.a, {
                        fullWidth: !0
                    }, r.a.createElement(P.a, {
                        id: o
                    }, a), r.a.createElement(K.a, Object.assign({}, c, {
                        displayEmpty: !0,
                        id: t,
                        labelId: o,
                        multiple: !0,
                        onChange: function(e) {
                            return n(e, e.target.value)
                        },
                        renderValue: B
                    }), l.map((function(e) {
                        return r.a.createElement(N.a, {
                            key: e,
                            value: e
                        }, e)
                    })))))
                },
                D = a(197);

            function I(e) {
                var t = e.label,
                    a = Object(m.a)(e, ["label"]);
                return r.a.createElement(f.a, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    lg: 4
                }, r.a.createElement(P.a, null, t), r.a.createElement(D.a, a))
            }
            I.defaultProps = {
                valueLabelDisplay: "auto"
            };
            var M = I,
                H = a(172),
                L = a(173);
            var W = function(e) {
                    var t = e.columns,
                        a = e.data,
                        n = e.page,
                        l = e.rowsPerPage,
                        c = n * l,
                        o = c + l;
                    return a.slice(c, o).map((function(e, a) {
                        return r.a.createElement(H.a, {
                            key: a
                        }, t.map((function(t, a) {
                            var n = e[t.dataKey],
                                l = t.display ? t.display(n) : n,
                                c = {};
                            return t.width && (c.width = t.width), r.a.createElement(L.a, {
                                align: t.numeric ? "right" : "left",
                                key: a,
                                style: c
                            }, l)
                        })))
                    }))
                },
                J = a(174),
                _ = a(175),
                A = a(176),
                F = a(177),
                V = a(191);

            function z(e) {
                var t = e.columns,
                    a = e.data,
                    l = Object(n.useState)(t && t[0].sortDirection ? t[0].sortDirection : "asc"),
                    c = Object(d.a)(l, 2),
                    o = c[0],
                    i = c[1],
                    u = Object(n.useState)(t.length ? t[0].dataKey : void 0),
                    s = Object(d.a)(u, 2),
                    m = s[0],
                    h = s[1],
                    g = Object(n.useState)(0),
                    v = Object(d.a)(g, 2),
                    p = v[0],
                    j = v[1],
                    O = Object(n.useState)(5),
                    y = Object(d.a)(O, 2),
                    E = y[0],
                    w = y[1];
                Object(n.useEffect)((function() {
                    return j(0)
                }), [a]);
                var C = Object(n.useMemo)((function() {
                    return Object(b.a)(a).sort((function(e, t) {
                        var a = "asc" === o ? 1 : -1;
                        return e[m] === t[m] ? 0 : e[m] > t[m] ? 1 * a : -1 * a
                    }))
                }), [a, o, m]);

                function k(e, t) {
                    h(e), i(t)
                }
                return r.a.createElement(f.a, {
                    item: !0,
                    xs: 12,
                    md: 12,
                    lg: 12
                }, r.a.createElement(J.a, null, r.a.createElement(_.a, null, r.a.createElement(A.a, null, r.a.createElement(H.a, null, t.map((function(e, t) {
                    return r.a.createElement(q, {
                        column: e,
                        direction: o,
                        key: t,
                        onChangeSort: k,
                        orderBy: m
                    })
                })))), r.a.createElement(F.a, null, r.a.createElement(W, {
                    columns: t,
                    data: C,
                    page: p,
                    rowsPerPage: E
                })))), r.a.createElement(V.a, {
                    component: "div",
                    count: a.length,
                    onChangePage: function(e, t) {
                        return j(t)
                    },
                    onChangeRowsPerPage: function(e) {
                        var t = p * E,
                            a = e.target.value;
                        j(t / a), w(a)
                    },
                    page: p,
                    rowsPerPage: E,
                    rowsPerPageOptions: [5, 10, 25]
                }))
            }
            z.defaultProps = {
                columns: [],
                data: []
            };
            var G = a(198);
            var q = function(e) {
                    var t = e.column,
                        a = e.direction,
                        n = e.onChangeSort,
                        l = e.orderBy,
                        c = (e.columnData, e.dataKey, e.disableSort, e.sortBy, Object(m.a)(e, ["column", "direction", "onChangeSort", "orderBy", "columnData", "dataKey", "disableSort", "sortBy"])),
                        o = l === t.dataKey,
                        i = {
                            align: t.numeric ? "right" : "left",
                            key: t.dataKey,
                            sortDirection: !!o && a
                        };
                    return t.sortable ? i.children = r.a.createElement(G.a, {
                        active: o,
                        direction: o ? a : "asc",
                        onClick: function() {
                            return n(t.dataKey, o && "asc" === a ? "desc" : "asc")
                        }
                    }, t.label) : i.children = t.label, r.a.createElement(L.a, Object.assign({}, c, i))
                },
                $ = a(76),
                Q = a(34),
                U = a(72),
                X = a(127),
                Y = a(179),
                Z = a(71),
                ee = a.n(Z),
                te = Object(X.a)((function(e) {
                    return Object(Y.a)({
                        flexContainer: {
                            display: "flex",
                            alignItems: "center",
                            boxSizing: "border-box"
                        },
                        root: {
                            height: "calc(100vh - (".concat(e.spacing(4), "px * 3))"),
                            marginBottom: e.spacing(4)
                        },
                        table: {
                            "& .ReactVirtualized__Table__headerRow": {
                                flip: !1,
                                paddingRight: "rtl" === e.direction ? "0 !important" : void 0
                            }
                        },
                        tableRow: {
                            cursor: "pointer"
                        },
                        tableRowHover: {
                            "&:hover": {
                                backgroundColor: e.palette.grey[800]
                            }
                        },
                        tableCell: {
                            flex: 1
                        },
                        title: {
                            marginLeft: e.spacing(1),
                            width: "max-content"
                        },
                        noClick: {
                            cursor: "initial"
                        }
                    })
                }));

            function ae(e) {
                var t = e.columns,
                    a = e.data,
                    l = e.headerHeight,
                    c = e.onRowClick,
                    o = e.rowHeight,
                    i = e.title,
                    u = e.selectedId,
                    s = te(),
                    h = Object(n.useState)(t && t[0].sortDirection ? t[0].sortDirection : "asc"),
                    f = Object(d.a)(h, 2),
                    g = f[0],
                    v = f[1],
                    j = Object(n.useState)(t.length ? t[0].dataKey : void 0),
                    O = Object(d.a)(j, 2),
                    y = O[0],
                    E = O[1],
                    w = Object(n.useMemo)((function() {
                        return Object(b.a)(a).sort((function(e, t) {
                            var a = "asc" === g ? 1 : -1;
                            return e[y] === t[y] ? 0 : e[y] > t[y] ? 1 * a : -1 * a
                        }))
                    }), [a, g, y]),
                    C = ee()(s.tableCell, s.flexContainer, Object(Q.a)({}, s.noClick, null == c)),
                    k = Object(n.useCallback)((function(e) {
                        var t = e.index;
                        return ee()(s.tableRow, s.flexContainer, Object(Q.a)({}, s.tableRowHover, -1 !== t && null != c))
                    }), [s, c]),
                    S = Object(n.useCallback)((function(e) {
                        var a = e.cellData,
                            n = e.columnIndex;
                        return r.a.createElement(L.a, {
                            align: null != n && t[n].numeric ? "right" : "left",
                            component: "div",
                            className: C,
                            style: {
                                height: o
                            },
                            variant: "body"
                        }, a)
                    }), [C, t, o]),
                    x = Object(n.useCallback)((function(e) {
                        var t = e.column,
                            a = Object(m.a)(e, ["column"]);
                        return r.a.createElement(q, Object.assign({
                            className: ee()(s.tableCell, s.flexContainer, s.noClick),
                            column: t,
                            component: "div",
                            style: {
                                height: l
                            },
                            variant: "head"
                        }, a), t.label)
                    }), [s, l]);

                function R(e, t) {
                    E(e), v(t)
                }
                return r.a.createElement("div", {
                    className: s.root
                }, r.a.createElement(U.a, null, (function(e) {
                    var a = e.height,
                        n = e.width;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(p.a, {
                        className: s.title,
                        gutterBottom: !0,
                        variant: "h5"
                    }, i), r.a.createElement(U.c, {
                        className: s.table,
                        gridStyle: {
                            direction: "inherit"
                        },
                        headerHeight: l,
                        height: a,
                        noRowsRenderer: function() {
                            return r.a.createElement("div", null, "No results.")
                        },
                        rowClassName: k,
                        rowCount: w.length,
                        rowGetter: function(e) {
                            var t = e.index;
                            return w[t]
                        },
                        rowHeight: o,
                        width: n,
                        sortBy: y,
                        style: {
                            height: a
                        },
                        rowStyle: function(e) {
                            var t = e.index;
                            return t > -1 && w[t].id === u ? {
                                backgroundColor: "#666"
                            } : {
                                undefined: void 0
                            }
                        },
                        onRowClick: c
                    }, t.map((function(e, t) {
                        var a = {
                            column: e,
                            direction: g,
                            onChangeSort: R,
                            orderBy: y
                        };
                        return r.a.createElement(U.b, {
                            cellRenderer: S,
                            className: s.flexContainer,
                            dataKey: e.dataKey,
                            headerRenderer: function(e) {
                                return x(Object($.a)(Object($.a)({}, a), e))
                            },
                            key: t,
                            width: Number.isInteger(e.width) ? e.width : e.width * n
                        })
                    }))))
                })))
            }
            ae.defaultProps = {
                columns: [],
                data: [],
                headerHeight: 48,
                rowHeight: 48,
                selectedId: 0
            };
            var ne = ae,
                re = a(92),
                le = a(93),
                ce = a(69),
                oe = a(94),
                ie = a(96),
                ue = a(165),
                se = a(188),
                me = a(180),
                be = a(7),
                de = function(e) {
                    Object(oe.a)(a, e);
                    var t = Object(ie.a)(a);

                    function a(e) {
                        var n;
                        return Object(re.a)(this, a), (n = t.call(this, e)).state = {
                            currentTab: 0
                        }, n.setCurrentTab = n.setCurrentTab.bind(Object(ce.a)(n)), n
                    }
                    return Object(le.a)(a, [{
                        key: "setCurrentTab",
                        value: function(e) {
                            this.setState({
                                currentTab: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.children,
                                n = t.classes,
                                l = t.subNav,
                                c = t.tabs,
                                o = this.state.currentTab;
                            return r.a.createElement(f.a, {
                                className: n.root,
                                item: !0,
                                lg: 12,
                                md: 12,
                                xs: 12
                            }, r.a.createElement(ue.a, {
                                className: n.paper
                            }, r.a.createElement(se.a, {
                                centered: !0,
                                onChange: function(t, a) {
                                    return e.setCurrentTab(a)
                                },
                                value: o,
                                variant: "fullWidth"
                            }, c.map((function(e, t) {
                                return r.a.createElement(me.a, {
                                    key: t,
                                    label: e.label
                                })
                            })))), l, a[o])
                        }
                    }]), a
                }(r.a.Component);
            de.defaultProps = {
                children: [],
                tabs: []
            };
            var he = Object(be.a)({
                root: {
                    maxHeight: "100vh"
                },
                paper: {
                    flexGrow: 1
                }
            })(de);
            var fe = O.b(new function() {
                    return new Worker(a.p + "static/js/query.e2b3e40a.worker.js")
                }),
                ge = Object(j.a)({
                    pageLoading: {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    },
                    test: {
                        height: 10,
                        width: 120
                    }
                });
            var ve = function() {
                    var e = y("baseSystem", 0),
                        t = Object(d.a)(e, 2),
                        a = t[0],
                        l = t[1],
                        c = y("distanceRange", [0, 10]),
                        o = Object(d.a)(c, 2),
                        i = o[0],
                        u = o[1],
                        s = y("securityRange", [.5, 1]),
                        j = Object(d.a)(s, 2),
                        E = j[0],
                        w = j[1],
                        C = y("richnessRange", [90, 200]),
                        k = Object(d.a)(C, 2),
                        x = k[0],
                        R = k[1],
                        P = y("resources", ["Lustering Alloy"]),
                        K = Object(d.a)(P, 2),
                        N = K[0],
                        B = K[1],
                        D = y("planetology", 1),
                        I = Object(d.a)(D, 2),
                        H = I[0],
                        L = I[1],
                        W = y("roundTrips", 50),
                        J = Object(d.a)(W, 2),
                        _ = J[0],
                        A = J[1],
                        F = Object(n.useState)([]),
                        V = Object(d.a)(F, 2),
                        z = V[0],
                        G = V[1],
                        q = Object(n.useState)(0),
                        $ = Object(d.a)(q, 2),
                        Q = $[0],
                        U = $[1],
                        X = Object(n.useState)(65),
                        Y = Object(d.a)(X, 2),
                        Z = Y[0],
                        ee = Y[1],
                        te = Object(n.useState)(["Lustering Alloy"]),
                        ae = Object(d.a)(te, 2),
                        re = ae[0],
                        le = ae[1],
                        ce = Object(n.useState)([]),
                        oe = Object(d.a)(ce, 2),
                        ie = oe[0],
                        ue = oe[1],
                        se = Object(n.useState)([]),
                        me = Object(d.a)(se, 2),
                        be = me[0],
                        de = me[1],
                        ve = Object(n.useState)([]),
                        pe = Object(d.a)(ve, 2),
                        je = pe[0],
                        Oe = pe[1],
                        ye = Object(n.useState)(0),
                        Ee = Object(d.a)(ye, 2),
                        we = Ee[0],
                        Ce = Ee[1],
                        ke = Object(h.a)((function(e) {
                            return e.breakpoints.down("sm")
                        })),
                        Se = ge(),
                        xe = Object(n.useRef)(null);
                    Object(n.useEffect)((function() {
                        fe.longestPath(a).then((function(e) {
                            return ee(e)
                        }))
                    }), [a]), Object(n.useEffect)((function() {
                        fe.getResources().then((function(e) {
                            return le(e)
                        }))
                    }), []), Object(n.useEffect)((function() {
                        fe.getSystems().then((function(e) {
                            return ue(e)
                        }))
                    }), []), Object(n.useEffect)((function() {
                        fe.matchingProduction(a, i, E, x, N).then((function(e) {
                            de(e), Oe(e)
                        }))
                    }), [a, i, E, N, x]), Object(n.useEffect)((function() {
                        fe.findBestMatches(be, a, N, H, _, O.a(G), O.a(U))
                    }), [be, a, N, H, _]);
                    var Re = Object(n.useMemo)((function() {
                            var e = Object(b.a)(Array(Math.round(Z / 10)).keys()).map((function(e) {
                                return {
                                    value: 10 * e,
                                    label: 10 * e
                                }
                            }));
                            return e[-1] !== Z && e.push({
                                value: Z,
                                label: Z
                            }), e
                        }), [Z]),
                        Pe = Object(n.useMemo)((function() {
                            return [{
                                Component: ne,
                                columns: [{
                                    dataKey: "totalRichness",
                                    label: "Total Richness",
                                    sortable: !0,
                                    sortDirection: "desc",
                                    width: .25
                                }, {
                                    dataKey: "roundTrip",
                                    label: "Round Trip",
                                    numeric: !0,
                                    sortable: !0,
                                    width: .25
                                }, {
                                    dataKey: "planets",
                                    label: "Planets",
                                    numeric: !0,
                                    sortable: !0,
                                    width: .25
                                }, {
                                    dataKey: "systems",
                                    label: "Systems",
                                    numeric: !0,
                                    sortable: !0,
                                    width: .25
                                }],
                                data: z,
                                label: "Best Matches",
                                selectedId: we,
                                onRowClick: function(e) {
                                    var t = e.rowData;
                                    Oe(t.matches), Ce(t.id), xe && xe.current && xe.current.setCurrentTab(1)
                                },
                                title: ke ? void 0 : "Best Matches"
                            }, {
                                Component: ne,
                                columns: [{
                                    dataKey: "resource",
                                    label: "Resource",
                                    sortable: !0,
                                    width: .29
                                }, {
                                    dataKey: "planet",
                                    label: "Planet",
                                    sortable: !0,
                                    width: .29
                                }, {
                                    dataKey: "security",
                                    label: "Security",
                                    numeric: !0,
                                    sortable: !0,
                                    width: .14
                                }, {
                                    dataKey: "jumps",
                                    label: "Jumps",
                                    numeric: !0,
                                    sortable: !0,
                                    width: .14
                                }, {
                                    dataKey: "richness",
                                    label: "Richness",
                                    numeric: !0,
                                    sortable: !0,
                                    width: .14
                                }],
                                data: je,
                                label: "Details",
                                title: ke ? void 0 : "Details"
                            }]
                        }), [z, je, ke]),
                        Ke = r.a.createElement(f.a, {
                            item: !0,
                            xs: 12
                        }, r.a.createElement(g.a, {
                            value: Q,
                            variant: "determinate"
                        }));
                    return 0 === ie.length ? r.a.createElement(v.a, {
                        className: Se.pageLoading,
                        open: !0
                    }, r.a.createElement(r.a.Fragment, null, r.a.createElement(p.a, {
                        variant: "h5",
                        gutterBottom: !0
                    }, "Loading..."), r.a.createElement("div", {
                        className: Se.test
                    }, r.a.createElement(g.a, null)))) : r.a.createElement(f.a, {
                        container: !0,
                        spacing: 4
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        lg: 12
                    }, r.a.createElement(p.a, {
                        variant: "h4",
                        width: 1
                    }, "EVE Echoes"), r.a.createElement(p.a, {
                        variant: "h5",
                        width: 1
                    }, "Planetary Production")), r.a.createElement(S, {
                        disableClearable: !0,
                        getOptionLabel: function(e) {
                            return ie[e].label
                        },
                        label: "Base System",
                        onChange: function(e, t) {
                            return l(t)
                        },
                        options: ie.map((function(e, t) {
                            return t
                        })),
                        value: a
                    }), r.a.createElement(M, {
                        label: "Distance to System (jumps)",
                        marks: Re,
                        max: Z,
                        min: 0,
                        onChange: function(e, t) {
                            return u(t)
                        },
                        step: 1,
                        value: i
                    }), r.a.createElement(M, {
                        label: "System Security",
                        marks: [{
                            value: -1,
                            label: "-1.0"
                        }, {
                            value: 0,
                            label: "0.0"
                        }, {
                            value: .5,
                            label: "0.5"
                        }, {
                            value: 1,
                            label: "1.0"
                        }],
                        max: 1,
                        min: -1,
                        onChange: function(e, t) {
                            return w(t)
                        },
                        step: .1,
                        value: E
                    }), r.a.createElement(T, {
                        id: "resources",
                        label: "Resource Types",
                        onChange: function(e, t) {
                            return B(t)
                        },
                        options: re,
                        value: N
                    }), r.a.createElement(M, {
                        label: "Resource Richness",
                        marks: [{
                            value: 25,
                            label: "25"
                        }, {
                            value: 100,
                            label: "high sec"
                        }, {
                            value: 133,
                            label: "low sec"
                        }, {
                            value: 200,
                            label: "200"
                        }],
                        max: 200,
                        min: 25,
                        onChange: function(e, t) {
                            return R(t)
                        },
                        step: 1,
                        value: x
                    }), r.a.createElement(M, {
                        label: "Planets (Planetology max development)",
                        marks: [{
                            value: 1,
                            label: "1"
                        }, {
                            value: 6,
                            label: "6"
                        }],
                        max: 6,
                        min: 1,
                        onChange: function(e, t) {
                            return L(t)
                        },
                        step: 1,
                        value: H
                    }), r.a.createElement(M, {
                        label: "Max Round Trip length (jumps)",
                        marks: [0, 50, 100, 150, 200].map((function(e) {
                            return {
                                value: e,
                                label: "".concat(e)
                            }
                        })),
                        max: 200,
                        min: 0,
                        onChange: function(e, t) {
                            return A(t)
                        },
                        step: 1,
                        value: _
                    }), ke ? r.a.createElement(he, {
                        ref: xe,
                        tabs: Pe,
                        subNav: Ke
                    }, Pe.map((function(e, t) {
                        var a = e.Component,
                            n = Object(m.a)(e, ["Component"]);
                        return r.a.createElement(a, Object.assign({
                            key: t
                        }, n))
                    }))) : r.a.createElement(r.a.Fragment, null, Ke, Pe.map((function(e, t) {
                        var a = e.Component,
                            n = Object(m.a)(e, ["Component"]);
                        return r.a.createElement(f.a, {
                            key: t,
                            item: !0,
                            md: 6
                        }, r.a.createElement(a, n))
                    }))))
                },
                pe = Object(u.a)({
                    palette: {
                        type: "dark"
                    }
                });
            var je = function() {
                return r.a.createElement(s.a, {
                    theme: pe
                }, r.a.createElement(o.a, null), r.a.createElement(i.a, {
                    maxWidth: "lg",
                    style: {
                        marginTop: 16
                    }
                }, r.a.createElement(ve, null)))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(je, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [108, 1, 2]
    ]
]);
//# sourceMappingURL=main.3a81eb57.chunk.js.map