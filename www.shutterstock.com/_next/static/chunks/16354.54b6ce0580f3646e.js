"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16354], {
        91927: function(e, i, n) {
            n.d(i, {
                F: function() {
                    return I
                }
            });
            var t = n(52322),
                r = n(68043),
                l = n(97258),
                o = n(39232),
                s = n(44297),
                a = n(63256),
                d = n(75),
                u = n(59877),
                c = n(8740),
                h = n(44647),
                v = n(52131),
                m = n(87394),
                g = n(2784),
                f = function(e) {
                    return "string" == typeof e
                },
                p = function(e) {
                    var i = e.src,
                        n = e.id,
                        t = e.onLoadHandler,
                        r = e.onErrorHandler,
                        l = e.defaults,
                        o = void 0 === l ? {
                            displaySkeleton: !1,
                            isImageLoaded: !1
                        } : l,
                        s = (0, g.useRef)(),
                        a = (0, m.Z)((0, g.useState)(o.isImageLoaded), 2),
                        d = a[0],
                        u = a[1],
                        c = (0, m.Z)((0, g.useState)(!1), 2),
                        h = c[0],
                        v = c[1],
                        p = h || !i && f(i),
                        w = !d && !p && o.displaySkeleton;
                    return (0, g.useEffect)(function() {
                        var e;
                        (null === (e = s.current) || void 0 === e ? void 0 : e.complete) && !d && i && u(!0)
                    }, [d, i]), (0, g.useEffect)(function() {
                        t && t(!w)
                    }, [w, t]), (0, g.useEffect)(function() {
                        p && r && r(n)
                    }, [p, r, n]), (0, g.useEffect)(function() {
                        i && s.current && s.current.src !== i && u(!1)
                    }, [i]), {
                        imgRef: s,
                        setIsImageLoaded: u,
                        setImageError: v,
                        showBrokenImage: p,
                        displaySkeleton: w
                    }
                },
                w = function(e) {
                    var i = e.src,
                        n = e.alt,
                        l = e.title,
                        o = e.id,
                        s = e.onLoadHandler,
                        a = e.onErrorHandler,
                        d = e.imgClassName,
                        u = e.withLoadingSkeletons,
                        c = e.style,
                        m = e.assetType,
                        g = e.width,
                        w = e.height,
                        y = e.highQualitySrc,
                        L = p({
                            src: i,
                            id: o,
                            onLoadHandler: s,
                            onErrorHandler: a,
                            defaults: {
                                displaySkeleton: !r.hq.ENABLED,
                                isImageLoaded: r.hq.ENABLED
                            }
                        }),
                        E = L.imgRef,
                        I = L.setIsImageLoaded,
                        S = L.setImageError,
                        k = L.showBrokenImage,
                        x = L.displaySkeleton,
                        b = !i && !f(i);
                    return k ? (0, t.jsx)(h.x, {
                        assetType: m,
                        isMissing: b
                    }) : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)("picture", {
                            children: [y && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("source", {
                                    srcSet: y,
                                    media: "(min-width: ".concat(4096, "px)")
                                }), (0, t.jsx)("source", {
                                    srcSet: i,
                                    media: "(max-width: ".concat(4096, "px)")
                                })]
                            }), (0, t.jsx)("img", {
                                ref: E,
                                className: d,
                                src: y || i,
                                alt: n,
                                title: l,
                                onLoad: function() {
                                    return I(!0)
                                },
                                onError: function() {
                                    return S(!0)
                                },
                                style: c,
                                width: g,
                                height: w
                            })]
                        }), u && x && (0, t.jsx)(v.S, {})]
                    })
                };
            w.defaultProps = {
                onLoadHandler: null,
                imgClassName: null,
                withLoadingSkeletons: !1,
                width: 0,
                height: 0,
                highQualitySrc: void 0
            };
            var y = (0, c.ZL)()({
                    thumbnail: {
                        width: "100.5%",
                        height: "auto"
                    }
                }),
                L = [o.bz, o.X2, o.k4, o.pV, o.hv, o.IK, o.ox, o.pX],
                E = function(e) {
                    var i = e.t,
                        n = e.assetTypeLabel,
                        t = e.alt,
                        r = e.isEditorial;
                    return {
                        altWithAssetType: L.includes(n) ? i("asset:alt:".concat(n).concat(r ? ":editorial" : ""), {
                            ALT: t
                        }) : t
                    }
                },
                I = function(e) {
                    var i, n, o = e.withSsr,
                        c = e.asset,
                        h = e.onLoadHandler,
                        v = e.onErrorHandler,
                        m = e.withLoadingSkeletons,
                        g = e.imgClassName,
                        f = e.style,
                        p = e.useCssGrid,
                        L = y().classes,
                        I = (0, a.lR)(c),
                        S = c.id,
                        k = c.title,
                        x = c.description,
                        b = c.alt,
                        H = c.isEditorial,
                        C = c.isRexEditorial,
                        N = k || x,
                        T = b || N,
                        U = g || L.thumbnail,
                        j = (0, s.Tp)(c),
                        A = (0, s.zs)({
                            asset: c
                        }),
                        R = (0, a.r8)(c),
                        z = R.width,
                        G = R.height,
                        V = p && z < r.hq.MAX_ASSET_WIDTH && (null == c ? void 0 : null === (i = c.displays) || void 0 === i ? void 0 : null === (n = i[l.bm]) || void 0 === n ? void 0 : n.src),
                        Z = (0, u.$G)(d.Zcw),
                        _ = Z.t,
                        B = Z.ready,
                        F = E({
                            t: _,
                            alt: T,
                            assetTypeLabel: A,
                            isEditorial: H || C
                        });
                    return o && !m ? (0, t.jsx)("img", {
                        className: U,
                        src: I,
                        alt: B ? F.altWithAssetType : T,
                        title: N,
                        style: f,
                        width: z,
                        height: G
                    }) : (0, t.jsx)(w, {
                        id: S,
                        alt: B ? F.altWithAssetType : T,
                        title: N,
                        src: I,
                        assetType: j,
                        onLoadHandler: h,
                        onErrorHandler: v,
                        imgClassName: U,
                        style: f,
                        withLoadingSkeletons: m,
                        width: z,
                        height: G,
                        highQualitySrc: V
                    })
                }
        },
        16354: function(e, i, n) {
            n.r(i), n.d(i, {
                ImageGridItem: function() {
                    return o
                }
            });
            var t = n(52322),
                r = n(37546),
                l = n(91927),
                o = function(e) {
                    var i = e.asset,
                        n = e.imgClassName,
                        o = e.onLoadHandler,
                        s = e.onErrorHandler,
                        a = e.withSsr,
                        d = e.withLoadingSkeletons,
                        u = e.useCssGrid,
                        c = (0, r.Lr)(i);
                    return (0, t.jsx)(l.F, {
                        asset: c,
                        onLoadHandler: o,
                        onErrorHandler: s,
                        imgClassName: n,
                        withSsr: a,
                        withLoadingSkeletons: d,
                        useCssGrid: u
                    })
                };
            o.defaultProps = {
                imgClassName: null,
                onLoadHandler: null,
                onErrorHandler: null,
                withSsr: !1,
                withLoadingSkeletons: !1,
                useCssGrid: !1
            }
        },
        44647: function(e, i, n) {
            n.d(i, {
                x: function() {
                    return r
                }
            });
            var t = n(25237),
                r = n.n(t)()(function() {
                    return n.e(13567).then(n.bind(n, 13567)).then(function(e) {
                        return e.BrokenImg
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [13567]
                        }
                    },
                    ssr: !1
                })
        },
        63256: function(e, i, n) {
            n.d(i, {
                KW: function() {
                    return v
                },
                VC: function() {
                    return m
                },
                fp: function() {
                    return u
                },
                lR: function() {
                    return c
                },
                ok: function() {
                    return g
                },
                qG: function() {
                    return h
                },
                r8: function() {
                    return f
                },
                vG: function() {
                    return d
                }
            });
            var t = n(87394),
                r = n(97258),
                l = n(39232),
                o = n(44297),
                s = n(31683),
                a = [l.pX],
                d = function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    if (!s.n5 || "string" != typeof e || e.includes("ip=x".concat(i))) return e;
                    try {
                        var n = new URL(e);
                        return n.searchParams.set("ip", "x".concat(i)), n.href
                    } catch (i) {
                        return e
                    }
                },
                u = function(e) {
                    var i, n, t;
                    return (null == e ? void 0 : e.mediaItem) ? {
                        previewImageUrl: null === (n = e.mediaItem) || void 0 === n ? void 0 : n.previewImageUrl,
                        previewVideoUrls: null === (t = e.mediaItem) || void 0 === t ? void 0 : t.previewVideoUrls
                    } : {
                        previewImageUrl: (null == e ? void 0 : e.thumbImageUrl) || (null == e ? void 0 : null === (i = e.image) || void 0 === i ? void 0 : i.url) || (null == e ? void 0 : e.previewImageUrl),
                        previewVideoUrls: null == e ? void 0 : e.previewVideoUrls
                    }
                },
                c = function() {
                    var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    return (0, o.Am)(i) ? d(u(i).previewImageUrl, n) : i.src || (null === (e = i.image) || void 0 === e ? void 0 : e.url)
                },
                h = function(e) {
                    return e.assetType === l.pX ? "mp4" : null
                },
                v = function(e) {
                    var i = e.asset;
                    return a.includes((0, o.Tp)(i)) && !(0, o.so)(i)
                },
                m = function() {
                    var e, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ((0, o.vh)(null == n ? void 0 : n.type)) return (null == n ? void 0 : n.width) > 1e3 ? "".concat(null == n ? void 0 : n.previewUrls[0], "?width=1000") : null == n ? void 0 : n.previewUrls[0];
                    var t = (0, o.EK)(n) ? r.bm : r.RA,
                        l = null == n ? void 0 : null === (e = n.displays) || void 0 === e ? void 0 : null === (i = e[t]) || void 0 === i ? void 0 : i.src;
                    return (0, o.f8)(n) ? l.replace(/\/([A-Z]\d\d)./, "/".concat(n.angle, ".")) : l
                },
                g = function() {
                    var e, i, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        s = (0, o.Tp)(t);
                    return s === l.k4 || s === l.zo || s === l.Nk ? (null == t ? void 0 : null === (e = t.displays) || void 0 === e ? void 0 : null === (i = e[r.bm]) || void 0 === i ? void 0 : i.src) || (null == t ? void 0 : t.src) : s === l.bz ? null == t ? void 0 : null === (n = t.imageVariants) || void 0 === n ? void 0 : n["1500"] : s === l.xF || s === l.tn ? null == t ? void 0 : t.previewMp3 : s === l.hv ? null == t ? void 0 : t.previewUrls[0] : null
                },
                f = function() {
                    var e, i, n, r, l, s, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        u = {
                            width: null !== (r = null !== (n = a.width) && void 0 !== n ? n : null === (e = a.mediaItem) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0,
                            height: null !== (s = null !== (l = a.height) && void 0 !== l ? l : null === (i = a.mediaItem) || void 0 === i ? void 0 : i.height) && void 0 !== s ? s : 0
                        };
                    if ((0, o.Am)(a) && (!u.width || !u.height) && a.sizes) {
                        var c = Object.keys(a.sizes).find(function(e) {
                            return a.sizes[e]
                        });
                        u.width = c && a.sizes[c].width || 0, u.height = c && a.sizes[c].height || 0
                    }
                    if (d && (!u.width || !u.height) && a.aspectRatioCommon) {
                        var h = (0, t.Z)(a.aspectRatioCommon.split(":"), 2),
                            v = h[0],
                            m = h[1];
                        u.width = Number(v), u.height = Number(m)
                    }
                    return u
                }
        }
    }
]);
//# sourceMappingURL=16354.54b6ce0580f3646e.js.map