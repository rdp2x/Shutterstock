"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37546], {
        13011: function(n, e, i) {
            i.d(e, {
                Cp: function() {
                    return r
                },
                E: function() {
                    return f
                },
                G: function() {
                    return s
                },
                M: function() {
                    return N
                },
                Mz: function() {
                    return b
                },
                NJ: function() {
                    return u
                },
                On: function() {
                    return g
                },
                P7: function() {
                    return T
                },
                So: function() {
                    return p
                },
                Th: function() {
                    return m
                },
                W6: function() {
                    return a
                },
                ZN: function() {
                    return h
                },
                _X: function() {
                    return c
                },
                gO: function() {
                    return t
                },
                kH: function() {
                    return q
                },
                mD: function() {
                    return _
                },
                pG: function() {
                    return Z
                },
                pP: function() {
                    return l
                },
                pQ: function() {
                    return w
                },
                r0: function() {
                    return S
                },
                rh: function() {
                    return v
                },
                sQ: function() {
                    return d
                },
                yF: function() {
                    return o
                },
                zf: function() {
                    return y
                }
            });
            var t = 150,
                r = 24,
                o = 175,
                c = 54,
                u = 40,
                s = 200,
                a = 14,
                l = 100,
                d = 12,
                f = 160,
                m = 9 / 16,
                v = "".concat(100 * m, "%"),
                p = 1 / m,
                y = 1.775,
                b = 40,
                _ = 1,
                T = 57,
                Z = 280,
                g = "350px",
                h = 90,
                w = 90,
                q = 135,
                N = {
                    elevation: 0
                },
                S = "140px"
        },
        37546: function(n, e, i) {
            i.d(e, {
                nR: function() {
                    return k
                },
                Oo: function() {
                    return N
                },
                id: function() {
                    return p
                },
                jz: function() {
                    return y
                },
                SL: function() {
                    return L
                },
                mF: function() {
                    return I
                },
                SS: function() {
                    return S
                },
                Nf: function() {
                    return h
                },
                FG: function() {
                    return q
                },
                AR: function() {
                    return w
                },
                Lr: function() {
                    return v
                },
                DN: function() {
                    return Z
                },
                Sw: function() {
                    return T
                },
                Vt: function() {
                    return _
                },
                hQ: function() {
                    return g
                },
                kS: function() {
                    return C
                },
                Z: function() {
                    return A
                }
            });
            var t = i(70865),
                r = i(96670),
                o = i(97258),
                c = i(39232),
                u = i(13011),
                s = i(3053),
                a = function(n, e) {
                    var i = 0;
                    return n && e ? n.quality > e.quality ? i = 1 : n.quality < e.quality && (i = -1) : !n && e ? i = 1 : n && !e && (i = -1), i
                },
                l = i(81232),
                d = i(68781),
                f = i(44297),
                m = i(18411),
                v = function(n) {
                    return (null == n ? void 0 : n.image) ? n.image : (null == n ? void 0 : n.mediaItem) ? n.mediaItem : n
                },
                p = function(n) {
                    var e = n.asset,
                        i = v(e),
                        t = i.aspect,
                        r = i.aspectRatioCommon;
                    if (t) return t;
                    if (r) return (0, s.Hz)({
                        aspectRatioCommon: r
                    });
                    if ((0, f.w5)(i)) return 1;
                    if ((0, f.vh)(e.type)) {
                        var o = e.width,
                            c = e.height;
                        return (0, s.n3)({
                            width: o,
                            height: c
                        }) || u.So
                    }
                    return u.So
                },
                y = function(n) {
                    return 1 / p({
                        asset: n
                    })
                },
                b = function(n) {
                    var e = (0, f.EK)(n);
                    return (0, r.Z)((0, t.Z)({}, n), {
                        src: n.previewImageUrl,
                        alt: n.description,
                        aspect: u.zf,
                        link: e ? "/editorial/detail-".concat(n.id) : "/video/".concat(n.description, "-").concat(n.id)
                    })
                },
                _ = function(n) {
                    var e, i = n.height,
                        t = n.width,
                        r = (0, s.n3)({
                            height: i,
                            width: t
                        }),
                        o = "".concat(n.src || n.previewUrls[0]).concat((e = r, "?width=".concat(e >= .75 && e < 3 ? 500 : e >= 3 && e < 6 || e < .75 && e > .45 ? 900 : 1200)), "&format=webp");
                    return {
                        id: n.id,
                        title: n.title,
                        description: n.description || n.title,
                        alt: n.alt || n.title,
                        src: o,
                        height: i,
                        width: t
                    }
                },
                T = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    switch (null == n ? void 0 : n.type) {
                        case "collection-items":
                            return T((0, r.Z)((0, t.Z)({}, n), {
                                type: n.itemType
                            }));
                        case c.pX:
                        case c.FM:
                            return b(n);
                        case c.jr:
                        case c.pV:
                        case c.k4:
                        case c.Y_:
                            return n;
                        case c.hv:
                            return _(n);
                        default:
                            return {}
                    }
                },
                Z = function(n, e) {
                    return n && e && a(o.c3[n], o.c3[e]) >= 0
                },
                g = function(n) {
                    return Array.isArray(n) ? n.filter(function(n) {
                        return m.nd[n.name && (0, l.z)(n.name)]
                    }).map(function(n) {
                        var e = n.name && (0, l.z)(n.name),
                            i = m.nd[e].quality || 0;
                        return (0, r.Z)((0, t.Z)({}, n), {
                            quality: i
                        })
                    }).sort(function(n, e) {
                        return e.quality - n.quality
                    }) : {}
                },
                h = function(n) {
                    return Array.isArray(n) ? g(n)[0] : {}
                },
                w = function(n) {
                    var e = n.sizes,
                        i = n.compSizeImage;
                    return Array.isArray(e) && i ? e.find(function(n) {
                        return (0, l.z)(n.name) === m.Bg[i]
                    }) : {}
                },
                q = function(n) {
                    return Array.isArray(n) ? n.map(function(n) {
                        var e, i = null === (e = n.name) || void 0 === e ? void 0 : e.split("_")[0];
                        return (0, r.Z)((0, t.Z)({}, n), {
                            quality: o.c3[i] && o.c3[i].quality
                        })
                    }).sort(function(n, e) {
                        return e.quality - n.quality
                    })[0] : {}
                };
            m.nd, o.c3;
            var N = function(n) {
                    var e = n.length && n.sort(function(n, e) {
                        var i, t;
                        return (null === (i = o.c3[e]) || void 0 === i ? void 0 : i.quality) - (null === (t = o.c3[n]) || void 0 === t ? void 0 : t.quality)
                    })[0];
                    return o.c3[e] && e
                },
                S = function(n) {
                    var e = n.asset;
                    return [c.k4, c.Y_, c.ox].includes(e.type) ? c.pV : e.type === c.FM ? c.pX : e.type === c.jr ? c.j0 : e.type
                },
                A = function(n) {
                    var e = n.sizes;
                    return e && Object.keys(e).map(function(n) {
                        var i = n.split("_")[0],
                            r = o.c3[i];
                        return r ? (0, t.Z)({}, e[n], r) : {}
                    }).sort(function(n, e) {
                        return e.quality - n.quality
                    })
                },
                C = function(n) {
                    return Array.isArray(n) ? n.map(function(n) {
                        var e, i = null === (e = n.name) || void 0 === e ? void 0 : e.split("_")[0];
                        return (0, r.Z)((0, t.Z)({}, n), {
                            cartOrder: o.c3[i] && o.c3[i].cartOrder
                        })
                    }).sort(function(n, e) {
                        return n.cartOrder - e.cartOrder
                    }) : []
                },
                I = function(n) {
                    var e, i = A({
                        sizes: n
                    });
                    return null == i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : e.name
                },
                L = function(n) {
                    var e, i = n.sizes,
                        t = n.subscriptions,
                        r = n.licenseTypeToUse,
                        o = n.assetType,
                        c = A({
                            sizes: i
                        });
                    return null == c || c.every(function(n) {
                        var i, c = n.name,
                            u = null === (i = m.Mq[c]) || void 0 === i ? void 0 : i[r],
                            s = (0, d.I)({
                                assetType: o,
                                subscriptions: t,
                                selectedLicenseId: u
                            });
                        return s && (e = c), !s
                    }), e
                },
                k = function(n) {
                    return ![o.Zh, o.qY, o.rf, o.SD, o.dn, o.HD].some(function(e) {
                        var i;
                        return (null === (i = n[1]) || void 0 === i ? void 0 : i.name) === e
                    })
                }
        },
        18411: function(n, e, i) {
            i.d(e, {
                Bg: function() {
                    return f
                },
                Mq: function() {
                    return T
                },
                Oy: function() {
                    return m
                },
                Q1: function() {
                    return y
                },
                kR: function() {
                    return p
                },
                nd: function() {
                    return d
                },
                wb: function() {
                    return _
                }
            });
            var t, r, o, c = i(47842),
                u = i(70865),
                s = i(96670),
                a = i(97258),
                l = i(94054),
                d = (t = {}, (0, c.Z)(t, a._0, {
                    quality: 1,
                    name: "small",
                    downloadName: "small",
                    label: "common:image_size_small"
                }), (0, c.Z)(t, a.Ke, {
                    quality: 1,
                    name: "small",
                    downloadName: "small",
                    label: "common:image_size_small"
                }), (0, c.Z)(t, a.m4, {
                    quality: 2,
                    name: "medium",
                    downloadName: "medium",
                    label: "common:image_size_medium"
                }), (0, c.Z)(t, a.Fq, {
                    quality: 2,
                    name: "medium",
                    downloadName: "medium",
                    label: "common:image_size_medium"
                }), (0, c.Z)(t, a.v2, {
                    quality: 3,
                    displayName: "large",
                    name: "large",
                    downloadName: "huge",
                    label: "common:image_size_large"
                }), (0, c.Z)(t, a.R7, {
                    quality: 3,
                    name: "large",
                    downloadName: "huge",
                    label: "common:image_size_large"
                }), (0, c.Z)(t, a.x0, {
                    quality: 4,
                    name: "vector",
                    downloadName: "vector",
                    label: "common:image_size_vector"
                }), (0, c.Z)(t, a.Vw, {
                    quality: 4,
                    name: "vector",
                    downloadName: "vector",
                    label: "common:image_size_vector"
                }), (0, c.Z)(t, a.JF, {
                    quality: 3,
                    name: "large",
                    downloadName: "large",
                    label: "common:image_size_large"
                }), (0, c.Z)(t, a.JJ, {
                    quality: 3,
                    name: a.JJ,
                    downloadName: a.JJ,
                    label: "PNG"
                }), (0, c.Z)(t, a.HX, {
                    quality: 3,
                    name: a.HX,
                    downloadName: a.HX,
                    label: "PSD"
                }), t),
                f = (r = {}, (0, c.Z)(r, a.Xk, a.v2), (0, c.Z)(r, a.Fm, a.m4), (0, c.Z)(r, a._I, a._0), (0, c.Z)(r, a.Nu, a._0), r),
                m = {
                    LEGACY_TO_SSTK: {
                        ultrahd4k: "4k",
                        web: "low",
                        lowres: "low"
                    },
                    SSTK_TO_LEGACY: {
                        low: "web",
                        "4k": "ultrahd4k"
                    },
                    SSTK_TO_LEGACY_ELIGIBILTY: (0, s.Z)((0, u.Z)({}, {
                        low: "lowres"
                    }), {
                        "4k": "ultrahd4k"
                    })
                },
                v = function(n) {
                    var e, i = n.licenseType,
                        t = n.isOnlySDVideoAvailable;
                    return e = {}, (0, c.Z)(e, "footage_".concat(i, "_4k"), a.yF), (0, c.Z)(e, "footage_".concat(i, "_hd"), t ? a.SD : a.HD), (0, c.Z)(e, "footage_".concat(i, "_sd"), a.SD), (0, c.Z)(e, "footage_".concat(i, "_lowres"), a.T0), e
                },
                p = l.oPg.reduce(function(n, e) {
                    return (0, u.Z)({}, n, v({
                        licenseType: e
                    }))
                }, {}),
                y = l.oPg.reduce(function(n, e) {
                    return (0, u.Z)({}, n, v({
                        licenseType: e,
                        isOnlySDVideoAvailable: !0
                    }))
                }, {}),
                b = function(n) {
                    var e, i = n.resolutionAbbr;
                    return e = {}, (0, c.Z)(e, l.azy, "footage_premier_".concat(i)), (0, c.Z)(e, l.luK, "footage_platform_".concat(i)), (0, c.Z)(e, l.dWR, "footage_media_".concat(i)), (0, c.Z)(e, l.IuI, "footage_sm_premier_".concat(i)), (0, c.Z)(e, l.CSe, "footage_sm_media_".concat(i)), (0, c.Z)(e, l.s5m, "footage_select_premier_".concat(i)), (0, c.Z)(e, l.Hv9, "footage_select_media_".concat(i)), (0, c.Z)(e, l.TP0, "footage_comp_".concat(i)), e
                },
                _ = (o = {}, (0, c.Z)(o, a.yF, a.yF), (0, c.Z)(o, a.HD, a.HD), (0, c.Z)(o, a.SD, a.SD), (0, c.Z)(o, a.qY, a.qY), (0, c.Z)(o, a.qG, a.yF), (0, c.Z)(o, a.dn, a.HD), (0, c.Z)(o, a.rf, a.SD), (0, c.Z)(o, a.Zh, a.qY), (0, c.Z)(o, a.L0, a.HD), (0, c.Z)(o, a.Ae, a.SD), (0, c.Z)(o, a.vD, a.HD), (0, c.Z)(o, a.yE, a.qY), o),
                T = [a.yF, a.HD, a.SD, a.yE, a.qY, a.qG, a.dn, a.rf, a.Zh, a.L0, a.Ae, a.vD].reduce(function(n, e) {
                    return (0, s.Z)((0, u.Z)({}, n), (0, c.Z)({}, e, b({
                        resolutionAbbr: _[e]
                    })))
                }, {})
        },
        40744: function(n, e, i) {
            i.d(e, {
                H: function() {
                    return r
                }
            });
            var t = i(24861),
                r = function(n) {
                    var e = n.priceType,
                        i = n.price,
                        r = n.currency;
                    return n.activityTracking === t.nm && e === t.vh ? {
                        priceAsAbsolute: {
                            price: i,
                            priceType: t.Br,
                            currency: r
                        }
                    } : {}
                }
        },
        42252: function(n, e, i) {
            i.d(e, {
                I: function() {
                    return t
                }
            });
            var t = function(n) {
                var e, i, t, r = n.subscription,
                    o = null == r ? void 0 : null === (e = r.currentAllotments) || void 0 === e ? void 0 : e.length;
                return null == r ? void 0 : null === (i = r.currentAllotments) || void 0 === i ? void 0 : null === (t = i[o - 1]) || void 0 === t ? void 0 : t.creditsRemaining
            }
        },
        53098: function(n, e, i) {
            i.d(e, {
                r: function() {
                    return r
                }
            });
            var t = i(42252),
                r = function(n) {
                    var e = n.subscription,
                        i = (0, t.I)({
                            subscription: e
                        });
                    return null === i || i > 0
                }
        },
        65448: function(n, e, i) {
            i.d(e, {
                q: function() {
                    return r
                }
            });
            var t = i(24861),
                r = function(n) {
                    var e, i, r, o = n.subscription;
                    return !!((null == o ? void 0 : o.isUnlimited) || (null == o ? void 0 : null === (e = o.currentLicenses) || void 0 === e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.isUnlimited)) || t.U_.includes(null == o ? void 0 : null === (r = o.product) || void 0 === r ? void 0 : r.name)
                }
        },
        12138: function(n, e, i) {
            i.d(e, {
                I: function() {
                    return t
                }
            });
            var t = function(n) {
                var e = n.subscriptions,
                    i = n.licenseName,
                    t = i ? null == e ? void 0 : e.filter(function(n) {
                        var e = n.redeemableFor;
                        return (null == i ? void 0 : i.includes("_unlimited")) ? e === i : e === "".concat(i, "_unlimited")
                    }) : e;
                return !!(null == t ? void 0 : t.some(function(n) {
                    var e = n.currentLicenses;
                    return null == e ? void 0 : e.some(function(n) {
                        return n.isUnlimited
                    })
                }))
            }
        },
        68781: function(n, e, i) {
            i.d(e, {
                I: function() {
                    return c
                }
            });
            var t = i(39232),
                r = i(51455),
                o = i(37154),
                c = function(n) {
                    var e = n.assetType,
                        i = n.contentTier,
                        c = n.subscriptions,
                        u = n.selectedLicenseId;
                    switch (e) {
                        case t.pX:
                            return (0, o.I)({
                                licenseName: u,
                                subscriptions: c
                            });
                        case t.j0:
                        case t.xF:
                        case t.tn:
                        case t.k4:
                        default:
                            return (0, r.$)({
                                subscriptions: c,
                                licenseName: u,
                                contentTier: i,
                                assetType: e
                            })
                    }
                }
        },
        73621: function(n, e, i) {
            i.d(e, {
                X: function() {
                    return p
                }
            });
            var t, r = i(70865),
                o = i(26297),
                c = i(87394),
                u = i(24861),
                s = i(40744),
                a = i(94665),
                l = function(n) {
                    var e = n.currentLicense;
                    return null !== (t = null == e ? void 0 : e.maxContentTier) && void 0 !== t ? t : a.E2
                },
                d = i(39232),
                f = i(65448),
                m = i(12847),
                v = function(n) {
                    var e = n.subscription,
                        i = n.assetTypeFromSubscription;
                    return i === d.xF && (0, f.q)({
                        subscription: e
                    }) ? "".concat(i).concat((0, m.ZV)(d.q9, "en")) : i
                },
                p = function(n) {
                    var e, i, t = n.subscription,
                        a = t.creditPrice,
                        d = t.creditType,
                        f = t.creditCurrency,
                        m = t.currentLicenses,
                        p = t.redeemableFor,
                        y = t.product,
                        b = t.type,
                        _ = null !== (i = null != f ? f : null == m ? void 0 : null === (e = m[0]) || void 0 === e ? void 0 : e.currency) && void 0 !== i ? i : null == y ? void 0 : y.currency,
                        T = (null == m ? void 0 : m.find(function(n) {
                            return n.redeemableFor === p
                        })) || {},
                        Z = T.creditPriceComponents,
                        g = (0, o.Z)(T, ["creditPriceComponents"]),
                        h = u.bW[b],
                        w = u.iN[h];
                    return Z && w ? Object.entries(Z.contentTier).reduce(function(n, e) {
                        var i, o, a = (0, c.Z)(e, 2),
                            l = a[0],
                            d = a[1],
                            f = d.amount,
                            m = d.amountType,
                            p = void 0 === m ? u.Zm : m,
                            y = Number(l);
                        return n.push((0, r.Z)({
                            currency: _,
                            subscriptionType: v({
                                subscription: t,
                                assetTypeFromSubscription: w[l]
                            }),
                            price: f,
                            contentTier: y,
                            priceType: p
                        }, (0, s.H)({
                            priceType: null !== (i = t.creditType) && void 0 !== i ? i : p,
                            price: (null == g ? void 0 : g.isUnlimited) ? 0 : null !== (o = t.creditPrice) && void 0 !== o ? o : f,
                            currency: _,
                            activityTracking: t.activityTracking
                        }))), n
                    }, []) : [{
                        subscriptionType: v({
                            subscription: t,
                            assetTypeFromSubscription: h
                        }),
                        currency: _,
                        price: (null == g ? void 0 : g.isUnlimited) ? 0 : a,
                        priceType: d || u.Zm,
                        contentTier: l({
                            currentLicense: g
                        })
                    }]
                }
        },
        51455: function(n, e, i) {
            i.d(e, {
                $: function() {
                    return g
                }
            });
            var t = i(70865),
                r = i(96670),
                o = i(39232),
                c = i(24861),
                u = i(23067),
                s = i(94665),
                a = function(n) {
                    var e = n.assetContentTier,
                        i = n.subscriptionMaxContentTier,
                        t = n.musicInfo,
                        r = i >= e;
                    if (null == t ? void 0 : t.isMusic) {
                        var o = t.isUnlimited,
                            c = t.isUnlimitedSubscriptionAvailable;
                        if (e > s.$H) return r && !o;
                        if (c) return o
                    }
                    return r
                },
                l = function(n) {
                    var e = n.subscriptions,
                        i = n.contentTier,
                        o = n.musicInfo;
                    return (null == e ? void 0 : e.filter(function(n) {
                        var e = n.currentLicenses;
                        return null == e ? void 0 : e.find(function(n) {
                            var e = n.maxContentTier,
                                c = n.isUnlimited;
                            return a({
                                assetContentTier: i,
                                subscriptionMaxContentTier: e,
                                musicInfo: (0, r.Z)((0, t.Z)({}, o), {
                                    isUnlimited: c
                                })
                            })
                        })
                    })) || []
                },
                d = i(53098),
                f = i(12138),
                m = i(87394),
                v = i(40744),
                p = i(73802),
                y = function(n) {
                    var e, i, r, o = n.subscription,
                        c = null === (e = o.currentLicenses[0].creditPriceComponents) || void 0 === e ? void 0 : e.contentTier,
                        u = (0, m.Z)(c ? Object.entries(c)[0] : [{}, {}], 2)[1],
                        s = u.amount,
                        a = u.amountType;
                    return (0, t.Z)({}, !(0, p.e)(o, "creditPrice") && {
                        creditPrice: s
                    }, o, (0, v.H)({
                        priceType: null !== (i = o.creditType) && void 0 !== i ? i : a,
                        price: null !== (r = o.creditPrice) && void 0 !== r ? r : s,
                        currency: o.creditCurrency,
                        activityTracking: o.activityTracking
                    }))
                },
                b = function(n) {
                    var e = n.prices,
                        i = n.mediaContentTier;
                    return (null == e ? void 0 : e.find(function(n) {
                        return n.contentTier >= i
                    })) || {}
                },
                _ = i(73621),
                T = function(n) {
                    var e = n.subscription,
                        i = n.mediaContentTier,
                        o = n.musicInfo,
                        c = e.activityTracking,
                        u = e.currentLicenses,
                        s = e.creditPrice,
                        l = e.creditType,
                        d = b({
                            prices: (0, _.X)({
                                subscription: e
                            }),
                            mediaContentTier: i
                        }),
                        f = d.price,
                        m = d.priceType,
                        p = d.currency,
                        y = u.filter(function(n) {
                            var e = n.maxContentTier,
                                c = n.isUnlimited;
                            return a({
                                assetContentTier: i,
                                subscriptionMaxContentTier: e,
                                musicInfo: (0, r.Z)((0, t.Z)({}, o), {
                                    isUnlimited: c
                                })
                            })
                        });
                    return (0, t.Z)((0, r.Z)((0, t.Z)({}, e), {
                        currentLicenses: y,
                        creditPrice: f,
                        creditType: m
                    }), (0, v.H)({
                        priceType: null != l ? l : m,
                        price: s,
                        currency: p,
                        activityTracking: c
                    }))
                },
                Z = function(n) {
                    var e = n.subscriptions,
                        i = n.contentTier,
                        r = n.musicInfo;
                    return null == e ? void 0 : e.map(function(n) {
                        var e, o;
                        return (null == n ? void 0 : null === (e = n.currentLicenses) || void 0 === e ? void 0 : e.length) ? i ? T({
                            subscription: n,
                            mediaContentTier: i,
                            musicInfo: r
                        }) : y({
                            subscription: n
                        }) : (0, t.Z)({
                            creditType: null !== (o = null == n ? void 0 : n.creditType) && void 0 !== o ? o : c.Zm
                        }, n)
                    })
                },
                g = function(n) {
                    var e, i, s, a, m = n.assetType,
                        v = n.subscriptions,
                        p = n.licenseName,
                        y = n.contentTier,
                        b = null === (e = null === (i = null == v ? void 0 : v.filter(function(n) {
                            var e = n.license,
                                i = n.redeemableFor,
                                t = n.name;
                            return e === p || i === p || t === p
                        })) || void 0 === i ? void 0 : i.sort(function(n, e) {
                            return new Date(n.subscriptionExpiration).getTime() - new Date(e.subscriptionExpiration).getTime()
                        })) || void 0 === e ? void 0 : e.map(function(n) {
                            return (0, u.TR)({
                                subscription: n,
                                assetType: m
                            })
                        }),
                        _ = m === o.xF,
                        T = {
                            isMusic: _,
                            isUnlimitedSubscriptionAvailable: _ && (0, f.I)({
                                subscriptions: v,
                                licenseName: p
                            })
                        },
                        g = y ? l({
                            subscriptions: b,
                            contentTier: y,
                            musicInfo: T
                        }) : b,
                        h = Z({
                            subscriptions: g,
                            contentTier: y,
                            musicInfo: T
                        });
                    return (null == g ? void 0 : g[0]) && (s = (0, r.Z)((0, t.Z)({}, null == g ? void 0 : g[0]), {
                        creditType: c.Zm
                    })), (null == h ? void 0 : h.find(function(n) {
                        return (0, d.r)({
                            subscription: n
                        })
                    })) || (null !== (a = null == h ? void 0 : h[0]) && void 0 !== a ? a : s)
                }
        },
        37154: function(n, e, i) {
            i.d(e, {
                I: function() {
                    return s
                }
            });
            var t = i(39232),
                r = i(94054),
                o = i(51455),
                c = function(n) {
                    var e, i = n.licenses,
                        r = n.subscriptions;
                    return i.some(function(n) {
                        return e = (0, o.$)({
                            subscriptions: r,
                            licenseName: n,
                            assetType: t.pX
                        })
                    }), e
                },
                u = function(n) {
                    var e = n.existingAssetLicenses,
                        i = n.licenseType,
                        t = n.licenseName,
                        r = n.subscriptions;
                    return t === "footage_".concat(i, "_sd") ? c({
                        licenses: (null == e ? void 0 : e.includes("footage_".concat(i, "_hd"))) ? ["footage_".concat(i, "_hd")] : ["footage_".concat(i, "_sd"), "footage_".concat(i, "_hd")],
                        subscriptions: r
                    }) : t === "footage_".concat(i, "_lowres") ? (null == e ? void 0 : e.includes("footage_".concat(i, "_hd"))) ? c({
                        licenses: ["footage_".concat(i, "_hd")],
                        subscriptions: r
                    }) : (null == e ? void 0 : e.includes("footage_".concat(i, "_sd"))) ? c({
                        licenses: ["footage_".concat(i, "_sd")],
                        subscriptions: r
                    }) : c({
                        licenses: ["footage_".concat(i, "_lowres")],
                        subscriptions: r
                    }) : void 0
                },
                s = function(n) {
                    var e = n.existingAssetLicenses,
                        i = n.subscriptions,
                        c = n.licenseName,
                        s = t.pX;
                    if ([r.Mbf, r.Gap, r.mfl, r.vbi, r.Dh9, r.SPT, r.a9m, r.y21, r.v1l, r.KK0, r.mJ5, r.Wdi].some(function(n) {
                            return n === c
                        }) || r.Lj9.some(function(n) {
                            return n === c
                        })) return (0, o.$)({
                        subscriptions: i,
                        licenseName: c,
                        assetType: s
                    });
                    if ([r.f12, r.OyJ, r.JCJ, r.TLc].some(function(n) {
                            return n === c
                        })) return (0, o.$)({
                        subscriptions: i,
                        licenseName: r.f12,
                        assetType: s
                    });
                    var a = u({
                            existingAssetLicenses: e,
                            licenseType: r.bin,
                            licenseName: c,
                            subscriptions: i
                        }),
                        l = u({
                            existingAssetLicenses: e,
                            licenseType: r.Eek,
                            licenseName: c,
                            subscriptions: i
                        }),
                        d = u({
                            existingAssetLicenses: e,
                            licenseType: r.pHc,
                            licenseName: c,
                            subscriptions: i
                        }),
                        f = u({
                            existingAssetLicenses: e,
                            licenseType: r.wOM,
                            licenseName: c,
                            subscriptions: i
                        });
                    return a || l || d || f || void 0
                }
        },
        3053: function(n, e, i) {
            i.d(e, {
                Hz: function() {
                    return c
                },
                ms: function() {
                    return u
                },
                n3: function() {
                    return o
                }
            });
            var t = i(87394),
                r = i(13011),
                o = function(n) {
                    return n.width / n.height
                },
                c = function(n) {
                    var e = n.aspectRatioCommon,
                        i = (0, t.Z)((null == e ? void 0 : e.split(":")) || [], 2);
                    return o({
                        width: i[0],
                        height: i[1]
                    }) || r.So
                },
                u = function(n) {
                    var e = n.width,
                        i = n.height,
                        t = function(n, e) {
                            return n % e ? t(e, n % e) : e
                        },
                        r = t(e, i);
                    return "".concat(e / r).concat(":").concat(i / r)
                }
        }
    }
]);
//# sourceMappingURL=37546-90417d974b717584.js.map