"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47034], {
        68245: function(t, e, n) {
            n.d(e, {
                e: function() {
                    return i
                }
            });
            var r = n(70865),
                o = n(38398),
                i = function(t) {
                    var e = t.urlParams,
                        n = t.queryParams,
                        i = "/bundle/".concat((void 0 === e ? {} : e).filename),
                        a = (0, r.Z)({}, void 0 === n ? {} : n);
                    return {
                        url: i,
                        defaultParams: a,
                        formattedUrl: (0, o.format)({
                            pathname: i,
                            query: a
                        })
                    }
                }
        },
        4418: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return Z
                }
            });
            var r = n(47842),
                o = n(70865),
                i = n(96670),
                a = n(52322),
                s = n(67550),
                c = n(27050),
                u = n(53957),
                l = n(9390),
                d = n(29292),
                f = n(9823),
                p = n(11800),
                m = n(57004),
                _ = n(8740),
                h = n(47999),
                v = (0, _.ZL)()(function(t) {
                    var e, n = t.tokens,
                        o = n.border,
                        i = n.color,
                        a = n.opacity;
                    return e = {}, (0, r.Z)(e, u.n8.blackOutline, {
                        color: i.black,
                        background: i.white,
                        border: "".concat(o.width.default, " solid ").concat(i.black),
                        "&:hover": {
                            color: i.black,
                            background: i.white,
                            opacity: a[80]
                        }
                    }), (0, r.Z)(e, u.n8.whiteOutline, {
                        background: i.black,
                        color: i.white,
                        border: "".concat(o.width.default, " solid ").concat(i.white),
                        "&:hover": {
                            background: i.black,
                            color: i.white,
                            opacity: a[80]
                        }
                    }), (0, r.Z)(e, u.n8.blackFill, {
                        background: i.black,
                        color: i.white,
                        border: "none",
                        "&:hover": {
                            background: i.black,
                            color: i.white,
                            opacity: a[80]
                        }
                    }), (0, r.Z)(e, u.n8.whiteFill, {
                        background: i.white,
                        color: i.black,
                        border: "none",
                        "&:hover": {
                            background: i.white,
                            color: i.black,
                            opacity: a[80]
                        }
                    }), (0, r.Z)(e, u.n8.blackTransparent, {
                        background: "transparent",
                        border: "".concat(o.width.default, " solid ").concat(i.black),
                        color: i.black,
                        "&:hover": {
                            color: i.white,
                            background: i.black
                        }
                    }), (0, r.Z)(e, u.n8.whiteTransparent, {
                        background: "transparent",
                        border: "".concat(o.width.default, " solid ").concat(i.white),
                        color: i.white,
                        "&:hover": {
                            color: i.black,
                            background: i.white
                        }
                    }), (0, r.Z)(e, u.n8.primaryRed, {
                        background: i.red.logo,
                        color: i.white,
                        border: "none",
                        "&:hover": {
                            background: i.red.rose,
                            color: i.white
                        }
                    }), (0, r.Z)(e, u.n8.outlineDarkMode, {
                        background: "transparent",
                        border: "".concat(o.width.default, " solid ").concat(i.white),
                        color: i.white,
                        "&:hover": {
                            color: i.black,
                            background: i.white
                        }
                    }), e
                }),
                Z = function(t) {
                    var e, n = t.linkAs,
                        r = t.component,
                        _ = t.classesProps,
                        Z = t.color,
                        g = t.dataAutomation,
                        b = t.href,
                        w = t.justifyContent,
                        y = t.label,
                        x = t.mb,
                        k = t.mt,
                        j = t.size,
                        P = t.trackAnalytics,
                        I = t.variant,
                        S = t.dataOptimize,
                        E = t.ctaButtonType,
                        C = t.openLinkInNewTab,
                        A = t.additionalButtonProps,
                        z = t.setReady,
                        F = t.themeMode,
                        T = t.isContentfulLP,
                        R = t.trackAnalyticsElementData,
                        B = E,
                        N = (0, f.D)().isBrandSstk,
                        D = v(),
                        q = D.classes,
                        U = D.cx;
                    e = T && R ? (0, d.SO)({
                        trackAnalytics: (0, m.bR)(R)
                    }) : (0, d.SO)({
                        trackAnalytics: P
                    }), T && N && (B === u.n8.outline && (B = F === u.VH || F === u.Ji ? u.n8.whiteTransparent : u.n8.blackTransparent), B === u.n8.outlineDarkMode && (B = u.n8.whiteTransparent), B === u.n8.primary && (B = u.n8.primaryRed)), (0, p.L)(function() {
                        z && z(!0)
                    }, [z]);
                    try {
                        return (0, a.jsx)(s.Z, {
                            display: "flex",
                            justifyContent: w,
                            mt: k,
                            mb: x,
                            whiteSpace: "nowrap",
                            className: _.root,
                            children: (0, a.jsx)(h.z, (0, i.Z)((0, o.Z)({
                                linkAs: n,
                                "aria-label": y,
                                className: U(q[B], _.button),
                                clickTrack: e,
                                color: Z,
                                href: b,
                                component: r || (b ? l.r : "a"),
                                "data-automation": g,
                                size: j,
                                variant: I,
                                "data-optimize": S
                            }, C ? {
                                target: "_blank"
                            } : {}, A), {
                                children: y
                            }))
                        })
                    } catch (t) {
                        return (0, c.qr)(t, "CmsButton")
                    }
                };
            Z.defaultProps = {
                color: "primary",
                component: null,
                classesProps: {
                    button: "",
                    root: ""
                },
                dataAutomation: "cms-button",
                justifyContent: "center",
                mb: 0,
                mt: 0,
                size: "large",
                variant: u.Qh,
                dataOptimize: null,
                ctaButtonType: "",
                productInformationElementData: null,
                additionalButtonProps: null,
                setReady: null,
                themeMode: u.sn,
                isContentfulLP: !1
            }
        },
        47034: function(t, e, n) {
            n.r(e), n.d(e, {
                CmsDarkHeaderBanner: function() {
                    return tO
                }
            });
            var r, o, i, a, s = n(70865),
                c = n(26297),
                u = n(52322),
                l = n(96976),
                d = n(87394),
                f = n(97599),
                p = n(65532),
                m = n(43110),
                _ = n(72075),
                h = n(27764),
                v = n(70314),
                Z = n.n(v),
                g = n(5632),
                b = n(2784),
                w = n(80589),
                y = function(t) {
                    var e, n, r, o = t.children,
                        i = (0, g.useRouter)(),
                        a = null == i ? void 0 : i.asPath,
                        s = (0, d.Z)((0, b.useState)(), 2),
                        c = s[0],
                        l = s[1],
                        v = ((0, m.jy)().data || {}).id,
                        y = (0, p.PE)();
                    _.j && (r = null == window ? void 0 : null === (e = window.location) || void 0 === e ? void 0 : e.href);
                    var x = (0, h.qw)(a),
                        k = null === (n = Z()().publicRuntimeConfig.googleOptimize.containerId.shutterstock) || void 0 === n ? void 0 : n[x],
                        j = (0, b.useCallback)(function(t) {
                            var e, n;
                            l(t), console.error(JSON.stringify({
                                message: t.message,
                                stack: t.stack,
                                err: t,
                                msg: "BannerErrorBoundary onError"
                            })), null === (e = window.NREUM) || void 0 === e || null === (n = e.noticeError) || void 0 === n || n.call(e, t, {
                                assetType: x,
                                currentAsPath: a,
                                localeData: y,
                                msg: "MPENG-14 banner error",
                                optimizeContainerId: k,
                                url: r,
                                userId: v
                            })
                        }, [x, a, y, k, r, v]);
                    return (0, u.jsx)(w.ErrorBoundary, {
                        onError: j,
                        FallbackComponent: function() {
                            return (0, u.jsx)(f.F, {
                                error: c,
                                statusCode: 500,
                                withSearchBar: !0
                            })
                        },
                        children: o
                    })
                },
                x = n(92931),
                k = n(41033),
                j = n(18505),
                P = n(47842),
                I = n(67550),
                S = n(75053),
                E = function() {
                    return (0, u.jsx)(I.Z, {
                        width: "100%",
                        sx: function(t) {
                            var e = t.breakpoints;
                            return (0, P.Z)({
                                height: S.ep
                            }, e.down("sm"), {
                                height: S.oQ
                            })
                        }
                    })
                },
                C = n(62021),
                A = n(62197),
                z = n(4418),
                F = n(8740),
                T = (0, F.ZL)()(function(t) {
                    var e, n, r = t.breakpoints,
                        o = t.palette,
                        i = t.tokens.spacing;
                    return {
                        root: (e = {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "".concat(i.s, " ").concat(i.base),
                            backgroundColor: o.background.default,
                            color: o.primary.main
                        }, (0, P.Z)(e, r.down("sm"), {
                            flexDirection: "column",
                            minHeight: "".concat(S.oQ, "px")
                        }), (0, P.Z)(e, "minHeight", "".concat(S.ep, "px")), e),
                        title: (0, P.Z)({}, r.up("sm"), {
                            marginRight: i.m
                        }),
                        button: (n = {}, (0, P.Z)(n, r.down("sm"), {
                            marginTop: i.s,
                            width: "100%"
                        }), (0, P.Z)(n, "backgroundColor", o.common.white), (0, P.Z)(n, "color", o.common.black), (0, P.Z)(n, "&:hover", {
                            color: o.common.white
                        }), n),
                        buttonRoot: (0, P.Z)({}, r.down("sm"), {
                            width: "100%"
                        })
                    }
                }),
                R = function(t) {
                    var e = t.title,
                        n = t.cta,
                        r = T().classes;
                    return (0, u.jsxs)("div", {
                        className: r.root,
                        "data-automation": "header-banner",
                        "data-optimize": "CmsHeaderBanner-banner",
                        children: [(0, u.jsx)(A.Z, {
                            variant: "body2",
                            className: r.title,
                            "data-automation": "header-banner-title",
                            children: e
                        }), !!n && (0, u.jsx)(z.Y, {
                            dataAutomation: "header-banner-cta",
                            label: n.label,
                            href: n.href,
                            trackAnalytics: n.trackAnalytics,
                            classesProps: {
                                root: r.buttonRoot,
                                button: r.button
                            },
                            size: "medium"
                        })]
                    })
                };
            R.defaultProps = {
                title: void 0,
                cta: void 0
            };
            var B = function(t) {
                    var e = t.initialProps;
                    return (0, u.jsx)(R, (0, s.Z)({}, e))
                },
                N = n(88849),
                D = n(96670),
                q = "Start your Free Trial",
                U = {
                    flagID: "pa-342-free-trial-adp-banner-tag-lines",
                    id: "PA-342",
                    name: "Free Trial ADP Banner Tag Lines",
                    treatments: (r = {}, (0, P.Z)(r, N.NM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        return (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []), (0, u.jsx)(B, {
                            initialProps: n
                        })
                    }), (0, P.Z)(r, N.vG, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Create winning content fast with Shutterstock's 650M+ high-quality images, videos, and music tracks. First month free."
                        }))
                    }), (0, P.Z)(r, N._Z, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Find and download the perfect assets for your projects in seconds with Shutterstock's free trial."
                        }))
                    }), (0, P.Z)(r, N.Dh, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Generate stunning custom images — instantly. First month free."
                        }))
                    }), (0, P.Z)(r, N.gR, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Everything you need to create stunning designs with confidence. Customize and download — fast!\xa0"
                        }))
                    }), (0, P.Z)(r, N.oM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "High-quality assets and design tools to get your project started. First month free with annual commitment."
                        }))
                    }), (0, P.Z)(r, N.An, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Quickly find the perfect assets for your projects with Shutterstock’s free trial."
                        }))
                    }), (0, P.Z)(r, N.E2, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Elevate your brand with 650M+ high-quality assets and easy design tools. First month on us!"
                        }))
                    }), (0, P.Z)(r, N.PN, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Start creating like a pro with Shutterstock’s All-in-One plan"
                        }))
                    }), (0, P.Z)(r, N.jt, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Design like a pro with high quality assets and an AI-powered editing platform for the everyday creator."
                        }))
                    }), (0, P.Z)(r, N.k1, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Don’t miss the chance to tell better stories and grow your business. First month on us!"
                        }))
                    }), (0, P.Z)(r, N.co, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Boost your brand's digital presence now — Get authentic local assets and AI-powered design tools."
                        }))
                    }), (0, P.Z)(r, N.QW, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Struggling to find the right visuals for your projects? Unlock stunning content with Shutterstock's free trial."
                        }))
                    }), (0, P.Z)(r, N.pZ, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Discover curated content and exclusive collections only available on Shutterstock. Start your free trial today."
                        }))
                    }), (0, P.Z)(r, N.E4, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Find high-quality assets to power your creativity on a steady basis — All for one low price"
                        }))
                    }), (0, P.Z)(r, N.b, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Find assets you love and unlock the power of AI-generated content. First month on us."
                        }))
                    }), (0, P.Z)(r, N.LC, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "High-quality assets, easy editor, and smart AI tools — all-in-one place and with one simple subscription."
                        }))
                    }), (0, P.Z)(r, N.bi, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Get the images, videos, music, and design tools you need to bring your stories to life. First month free."
                        }))
                    }), (0, P.Z)(r, N.PD, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Create with confidence with our high-quality assets, easy editor, and smart AI tools."
                        }))
                    }), (0, P.Z)(r, N.$U, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Bring your ideas to life. Any type of content you need, anytime you need it. Start now."
                        }))
                    }), (0, P.Z)(r, N.rM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Support artists worldwide every time you license or generate content. Start your free trial today."
                        }))
                    }), (0, P.Z)(r, N.Yt, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Join millions of happy customers who trust Shutterstock with their creative needs. First month on us."
                        }))
                    }), (0, P.Z)(r, N.TV, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "See why top brands, creators, and agencies choose Shutterstock for their projects."
                        }))
                    }), (0, P.Z)(r, N.Q1, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: q
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Over 20 years of experience connecting artists with customers searching for the best content. Start your free trial today."
                        }))
                    }), r)
                },
                M = function(t) {
                    return (0, u.jsx)(C.K, {
                        config: U,
                        initialProps: t,
                        Portal: B,
                        SkeletonLoader: E
                    })
                },
                O = function(t) {
                    var e = t.initialProps;
                    return (0, u.jsx)(R, (0, s.Z)({}, e))
                },
                L = "Start your Free Trial",
                H = {
                    flagID: "PA-343-srp-banner-tag-line",
                    id: "PA-343",
                    name: "sign up top panel SRP",
                    treatments: (o = {}, (0, P.Z)(o, N.NM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        return (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []), (0, u.jsx)(O, {
                            initialProps: n
                        })
                    }), (0, P.Z)(o, N.vG, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Create winning content fast with Shutterstock’s 650M+ high-quality images, videos, and music tracks. First month free."
                        }))
                    }), (0, P.Z)(o, N._Z, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Find and download the perfect assets for your projects in seconds with Shutterstock’s free trial."
                        }))
                    }), (0, P.Z)(o, N.Dh, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Generate stunning custom images — instantly. First month free."
                        }))
                    }), (0, P.Z)(o, N.gR, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Everything you need to create stunning designs with confidence. Customize and download — fast!"
                        }))
                    }), (0, P.Z)(o, N.oM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "High-quality assets and design tools to get your project started. First month free with annual commitment."
                        }))
                    }), (0, P.Z)(o, N.An, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Quickly find the perfect assets for your projects with Shutterstock’s free trial."
                        }))
                    }), (0, P.Z)(o, N.E2, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Elevate your brand with 650M+ high-quality assets and easy design tools. First month on us!"
                        }))
                    }), (0, P.Z)(o, N.PN, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Start creating like a pro with Shutterstock’s All-in-One plan "
                        }))
                    }), (0, P.Z)(o, N.jt, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Design like a pro with high quality assets and an AI-powered editing platform for the everyday creator."
                        }))
                    }), (0, P.Z)(o, N.k1, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Don’t miss the chance to tell better stories and grow your business. First month on us!"
                        }))
                    }), (0, P.Z)(o, N.co, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Boost your brand’s digital presence now — Get authentic local assets and AI-powered design tools."
                        }))
                    }), (0, P.Z)(o, N.QW, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Struggling to find the right visuals for your projects? Unlock stunning content with Shutterstock’s free trial."
                        }))
                    }), (0, P.Z)(o, N.pZ, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Discover curated content and exclusive collections only available on Shutterstock. Start your free trial today."
                        }))
                    }), (0, P.Z)(o, N.E4, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Find high-quality assets to power your creativity on a steady basis — All for one low price"
                        }))
                    }), (0, P.Z)(o, N.b, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Find assets you love and unlock the power of AI-generated content. First month on us."
                        }))
                    }), (0, P.Z)(o, N.LC, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "High-quality assets, easy editor, and smart AI tools — all-in-one place and with one simple subscription."
                        }))
                    }), (0, P.Z)(o, N.bi, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Get the images, videos, music, and design tools you need to bring your stories to life. First month free."
                        }))
                    }), (0, P.Z)(o, N.PD, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Create with confidence with our high-quality assets, easy editor, and smart AI tools."
                        }))
                    }), (0, P.Z)(o, N.$U, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Bring your ideas to life. Any type of content you need, anytime you need it. Start now. "
                        }))
                    }), (0, P.Z)(o, N.rM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Support artists worldwide every time you license or generate content. Start your free trial today."
                        }))
                    }), (0, P.Z)(o, N.Yt, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Join millions of happy customers who trust Shutterstock with their creative needs. First month on us."
                        }))
                    }), (0, P.Z)(o, N.TV, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "See why top brands, creators, and agencies choose Shutterstock for their projects."
                        }))
                    }), (0, P.Z)(o, N.Q1, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, b.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var r = (0, D.Z)((0, s.Z)({}, n.cta), {
                            label: L
                        });
                        return (0, u.jsx)(R, (0, s.Z)({}, {
                            cta: r,
                            title: "Over 20 years of experience connecting artists with customers searching for the best content. Start your free trial today."
                        }))
                    }), o)
                },
                Q = function(t) {
                    return (0, u.jsx)(C.K, {
                        config: H,
                        initialProps: t,
                        Portal: O,
                        SkeletonLoader: E
                    })
                },
                V = n(94909),
                X = "enabled",
                G = "disabled",
                K = "SDAQ-268-banner-status",
                Y = function(t) {
                    var e = t.initialProps;
                    return (0, u.jsx)(R, (0, s.Z)({}, e))
                },
                J = n(90985),
                W = n(75),
                $ = n(31880),
                tt = n(59481),
                te = n(92128),
                tn = function(t) {
                    var e = t.classes,
                        n = t.handleCloseOnClick;
                    return (0, u.jsx)(tt.h, {
                        "data-automation": "header-banner-dismiss-button",
                        clickTrack: "cmsBanner.close",
                        onClick: n,
                        size: "medium",
                        className: e.close,
                        children: (0, u.jsx)(te.x, {})
                    })
                },
                tr = function(t) {
                    var e = t.classes,
                        n = t.title,
                        r = t.cta,
                        o = t.onCloseButton;
                    return (0, u.jsxs)("div", {
                        className: e.root,
                        "data-automation": "header-banner",
                        "data-optimize": "CmsHeaderBanner-banner",
                        children: [(0, u.jsxs)("div", {
                            className: e.content,
                            children: [(0, u.jsx)(A.Z, {
                                variant: "body2",
                                className: e.title,
                                "data-automation": "header-banner-title",
                                children: n
                            }), !!r && (0, u.jsx)(z.Y, {
                                dataAutomation: "header-banner-cta",
                                label: r.label,
                                href: r.href,
                                trackAnalytics: r.trackAnalytics,
                                classesProps: {
                                    root: e.buttonRoot,
                                    button: e.button
                                },
                                size: "medium"
                            })]
                        }), (0, u.jsx)(I.Z, {
                            className: e.closeButton,
                            children: (0, u.jsx)(tn, {
                                classes: e,
                                handleCloseOnClick: o
                            })
                        })]
                    })
                };
            tr.defaultProps = {
                title: void 0,
                cta: void 0
            };
            var to = function() {
                    var t = (0, d.Z)((0, b.useState)(X), 2),
                        e = t[0],
                        n = t[1];
                    return (0, b.useEffect)(function() {
                        try {
                            var t = window.localStorage.getItem(K);
                            t ? n(t) : (n(X), window.localStorage.setItem(K, X))
                        } catch (t) {}
                    }, []), {
                        shouldShowCmsBanner: e === X,
                        onDissmissBannerHandler: function() {
                            try {
                                n(G), window.localStorage.setItem(K, G)
                            } catch (t) {}
                        }
                    }
                },
                ti = (0, F.ZL)()(function(t, e) {
                    var n, r, o = t.breakpoints,
                        i = t.palette,
                        a = t.tokens.spacing,
                        c = e.isTopNavFixed;
                    return {
                        root: (0, D.Z)((0, s.Z)({
                            display: "flex",
                            position: "sticky",
                            top: 0,
                            zIndex: 1444,
                            width: "100%"
                        }, c && {
                            zIndex: 9,
                            width: "100%"
                        }), (n = {
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "".concat(a.s, " ").concat(a.base),
                            backgroundColor: i.common.black,
                            color: i.primary.main
                        }, (0, P.Z)(n, o.down("sm"), {
                            flexDirection: "column",
                            minHeight: "".concat(S.oQ, "px")
                        }), (0, P.Z)(n, "minHeight", "".concat(S.ep, "px")), n)),
                        title: (0, P.Z)({
                            color: i.common.white
                        }, o.up("sm"), {
                            marginRight: a.m
                        }),
                        button: (r = {
                            border: "1px solid ".concat(i.common.white)
                        }, (0, P.Z)(r, o.down("sm"), {
                            marginTop: a.s,
                            width: "100%"
                        }), (0, P.Z)(r, "backgroundColor", i.common.white), (0, P.Z)(r, "color", i.common.black), (0, P.Z)(r, "&:hover", {
                            color: i.common.white
                        }), r),
                        buttonRoot: (0, P.Z)({}, o.down("sm"), {
                            width: "100%"
                        }),
                        closeButton: {
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        close: {
                            color: i.common.white
                        },
                        content: (0, P.Z)({
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }, o.down("sm"), {
                            flexDirection: "column"
                        })
                    }
                }),
                ta = (0, F.ZL)()(function(t, e) {
                    var n, r, o = t.breakpoints,
                        i = t.palette,
                        a = t.tokens.spacing,
                        c = e.isTopNavFixed;
                    return {
                        root: (0, D.Z)((0, s.Z)({
                            display: "flex",
                            position: "sticky",
                            top: 0,
                            zIndex: 1444,
                            width: "100%"
                        }, c && {
                            zIndex: 9,
                            width: "100%"
                        }), (n = {
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "".concat(a.s, " ").concat(a.base),
                            backgroundColor: "#0070F0",
                            color: i.primary.main
                        }, (0, P.Z)(n, o.down("sm"), {
                            flexDirection: "column",
                            minHeight: "".concat(S.oQ, "px")
                        }), (0, P.Z)(n, "minHeight", "".concat(S.ep, "px")), n)),
                        title: (0, P.Z)({
                            color: i.common.white
                        }, o.up("sm"), {
                            marginRight: a.m
                        }),
                        button: (r = {
                            border: "1px solid ".concat(i.common.white)
                        }, (0, P.Z)(r, o.down("sm"), {
                            marginTop: a.s,
                            width: "100%"
                        }), (0, P.Z)(r, "backgroundColor", i.common.white), (0, P.Z)(r, "color", i.common.black), (0, P.Z)(r, "&:hover", {
                            color: i.common.white
                        }), r),
                        buttonRoot: (0, P.Z)({}, o.down("sm"), {
                            width: "100%"
                        }),
                        closeButton: {
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        close: {
                            color: i.common.white
                        },
                        content: (0, P.Z)({
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }, o.down("sm"), {
                            flexDirection: "column"
                        })
                    }
                }),
                ts = (0, F.ZL)()(function(t, e) {
                    var n, r, o = t.breakpoints,
                        i = t.palette,
                        a = t.tokens.spacing,
                        c = e.isTopNavFixed;
                    return {
                        root: (0, D.Z)((0, s.Z)({
                            display: "flex",
                            position: "sticky",
                            top: 0,
                            zIndex: 1444,
                            width: "100%"
                        }, c && {
                            zIndex: 9,
                            width: "100%"
                        }), (n = {
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "".concat(a.s, " ").concat(a.base),
                            backgroundColor: "#C0CBFF",
                            color: i.primary.main
                        }, (0, P.Z)(n, o.down("sm"), {
                            flexDirection: "column",
                            minHeight: "".concat(S.oQ, "px")
                        }), (0, P.Z)(n, "minHeight", "".concat(S.ep, "px")), n)),
                        title: (0, P.Z)({
                            color: i.common.black
                        }, o.up("sm"), {
                            marginRight: a.m
                        }),
                        button: (r = {
                            border: "1px solid ".concat(i.common.black)
                        }, (0, P.Z)(r, o.down("sm"), {
                            marginTop: a.s,
                            width: "100%"
                        }), (0, P.Z)(r, "backgroundColor", "#C0CBFF"), (0, P.Z)(r, "color", i.common.black), (0, P.Z)(r, "&:hover", {
                            color: i.common.white,
                            backgroundColor: i.common.black
                        }), r),
                        buttonRoot: (0, P.Z)({}, o.down("sm"), {
                            width: "100%"
                        }),
                        closeButton: {
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        close: {
                            color: i.common.black
                        },
                        content: (0, P.Z)({
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }, o.down("sm"), {
                            flexDirection: "column"
                        })
                    }
                }),
                tc = (i = {}, (0, P.Z)(i, N.NM, function(t) {
                    var e = t.experiment,
                        n = t.initialProps;
                    return (0, b.useEffect)(function() {
                        e.recordImpression()
                    }, []), (0, u.jsx)(Y, {
                        initialProps: n
                    })
                }), (0, P.Z)(i, N.vG, function(t) {
                    var e = t.experiment,
                        n = t.initialProps;
                    (0, b.useEffect)(function() {
                        e.recordImpression()
                    }, []);
                    var r = (0, $.$G)(W.Oc6).t,
                        o = to(),
                        i = o.shouldShowCmsBanner,
                        a = o.onDissmissBannerHandler,
                        c = ti({
                            isTopNavFixed: (0, J.Z)({
                                threshold: 108,
                                skip: n.isMobile
                            })
                        }).classes,
                        l = {
                            cta: (0, D.Z)((0, s.Z)({}, n.cta), {
                                label: r("activation-drawers:logout_adp_free_trial_try_for_free_variant_a")
                            }),
                            title: r("experiment:flex_geo_cms_banner_title")
                        };
                    return i ? (0, u.jsx)(tr, (0, D.Z)((0, s.Z)({}, l), {
                        classes: c,
                        onCloseButton: a
                    })) : null
                }), (0, P.Z)(i, N._Z, function(t) {
                    var e = t.experiment,
                        n = t.initialProps;
                    (0, b.useEffect)(function() {
                        e.recordImpression()
                    }, []);
                    var r = (0, $.$G)(W.Oc6).t,
                        o = to(),
                        i = o.shouldShowCmsBanner,
                        a = o.onDissmissBannerHandler,
                        c = ta({
                            isTopNavFixed: (0, J.Z)({
                                threshold: 108,
                                skip: n.isMobile
                            })
                        }).classes,
                        l = {
                            cta: (0, D.Z)((0, s.Z)({}, n.cta), {
                                label: r("activation-drawers:logout_adp_free_trial_try_for_free_variant_a")
                            }),
                            title: r("experiment:flex_geo_cms_banner_title")
                        };
                    return i ? (0, u.jsx)(tr, (0, D.Z)((0, s.Z)({}, l), {
                        classes: c,
                        onCloseButton: a
                    })) : null
                }), (0, P.Z)(i, N.Dh, function(t) {
                    var e = t.experiment,
                        n = t.initialProps;
                    (0, b.useEffect)(function() {
                        e.recordImpression()
                    }, []);
                    var r = (0, $.$G)(W.Oc6).t,
                        o = to(),
                        i = o.shouldShowCmsBanner,
                        a = o.onDissmissBannerHandler,
                        c = ts({
                            isTopNavFixed: (0, J.Z)({
                                threshold: 108,
                                skip: n.isMobile
                            })
                        }).classes,
                        l = {
                            cta: (0, D.Z)((0, s.Z)({}, n.cta), {
                                label: r("activation-drawers:logout_adp_free_trial_try_for_free_variant_a")
                            }),
                            title: r("experiment:flex_geo_cms_banner_title")
                        };
                    return i ? (0, u.jsx)(tr, (0, D.Z)((0, s.Z)({}, l), {
                        classes: c,
                        onCloseButton: a
                    })) : null
                }), i),
                tu = (0, D.Z)((0, s.Z)({}, {
                    flagID: "SDAQ-268-lo-uhp-cms-banner-experiment",
                    id: "SDAQ-268",
                    name: "LO UHP: CMS Banner Sticky and Dismissible"
                }), {
                    treatments: tc
                }),
                tl = function(t) {
                    var e = (0, V.d)();
                    return (0, u.jsx)(C.K, {
                        config: tu,
                        initialProps: (0, D.Z)((0, s.Z)({}, t), {
                            isMobile: e
                        }),
                        Portal: Y,
                        SkeletonLoader: E
                    })
                },
                td = n(81740),
                tf = n(27050),
                tp = n(33701),
                tm = n(53957),
                t_ = function(t) {
                    var e, n, r = t.id,
                        o = t.entries,
                        i = (0, tf.E6)(o, r);
                    if (!i) return null;
                    switch (i.ctaButtonType) {
                        case tm.n8.outline:
                        case tm.n8.outlineDarkMode:
                            e = tm.Qh;
                            break;
                        case tm.n8.primaryRed:
                            e = tm.xJ, n = tm.Vb;
                            break;
                        default:
                            e = tm.xJ
                    }
                    return (0, D.Z)((0, s.Z)((0, D.Z)((0, s.Z)({
                        id: r,
                        label: i.ctaButtonText,
                        href: (0, h.en)(i.ctaButtonUrl)
                    }, i.trackAnalytics && {
                        trackAnalytics: (0, tf.AV)({
                            trackAnalytics: i.trackAnalytics,
                            entries: o
                        })
                    }), {
                        variant: e
                    }), n ? {
                        color: n
                    } : {}), {
                        contentType: tm.wF.button,
                        ctaButtonType: i.ctaButtonType,
                        openLinkInNewTab: i.openLinkInNewTab || null
                    })
                },
                th = function(t) {
                    var e = t.logoMedia,
                        n = (0, tf.U2)({
                            image: e
                        }),
                        r = n.url,
                        o = n.title,
                        i = n.description;
                    return r ? {
                        url: r,
                        title: o,
                        description: i
                    } : null
                },
                tv = function(t) {
                    var e = t.id,
                        n = t.entries,
                        r = (0, tf.E6)(n, e);
                    if (!r) return null;
                    var o = r.title,
                        i = r.subtitle,
                        a = r.logo,
                        s = r.backgroundImage,
                        c = r.backgroundColor,
                        u = r.width,
                        l = r.alignment,
                        d = r.colorTheme,
                        f = r.height,
                        p = r.cta;
                    return {
                        title: o,
                        subtitle: void 0 === i ? null : i,
                        logo: th({
                            logoMedia: a
                        }),
                        backgroundImage: (0, tf.U2)({
                            image: s,
                            srcSet: (0, tf.cK)({
                                heroSize: tp.bn
                            })
                        }),
                        backgroundColor: c,
                        width: void 0 === u ? null : u,
                        alignment: void 0 === l ? null : l,
                        colorTheme: void 0 === d ? null : d,
                        height: void 0 === f ? null : f,
                        cta: p && t_({
                            id: p.id,
                            entries: n
                        })
                    }
                },
                tZ = function(t) {
                    var e = t.fields.modules,
                        n = t.entries;
                    return tv({
                        id: ((0, tf.v2)(e, tm.wF.cmsBanner) || {}).id,
                        entries: n
                    })
                },
                tg = function(t) {
                    var e = t.fields.modules,
                        n = t.entries;
                    return (0, tf.Eb)(e, tm.wF.cmsBanner).map(function(t) {
                        return tv({
                            id: t.id,
                            entries: n
                        })
                    })
                },
                tb = function(t) {
                    var e = t.slug;
                    return {
                        contentType: tm.wF.fetchComponentsContainer,
                        fieldName: tm.mA.slug,
                        fieldValue: e
                    }
                },
                tw = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.rawData,
                        n = t.locale;
                    if (!e) return {};
                    var r = (0, tf.iG)(e, n);
                    return {
                        headerBanner: tZ(r),
                        headerBanners: tg(r)
                    }
                },
                ty = n(67661),
                tx = n(3255),
                tk = function(t) {
                    var e = t.slug,
                        n = (0, p.PE)().locale,
                        r = (0, g.useRouter)().query,
                        o = tb({
                            slug: e
                        }),
                        i = (0, tf.pK)((0, s.Z)({
                            query: r,
                            locale: n
                        }, o)),
                        a = (0, td.Dn)({
                            queryParams: i
                        }).formattedUrl;
                    return (0, tx.ZP)(e ? a : null, function(t) {
                        return ty.Yq.get(t, {}).then(function(t) {
                            return tw({
                                rawData: t.data,
                                locale: n
                            })
                        }).catch(function(t) {
                            var e, n;
                            throw null === (e = window.NREUM) || void 0 === e || null === (n = e.addPageAction) || void 0 === n || n.call(e, "graceful degradation of cms banner, error fetching CMS data, nothing will be shown to the user", {
                                msg: "graceful degradation of cms banner, error fetching CMS data, nothing will be shown to the user",
                                message: t.message,
                                stack: t.stack,
                                referrerPath: window.location.pathname,
                                referrerQuery: window.location.search
                            }), t
                        })
                    }, {})
                },
                tj = n(5528),
                tP = n(20865),
                tI = n(42606),
                tS = function(t) {
                    var e = t.initialProps;
                    return (0, u.jsx)(R, (0, s.Z)({}, e))
                },
                tE = n(21370),
                tC = (a = {}, (0, P.Z)(a, N.NM, function(t) {
                    var e = t.initialProps;
                    return (0, u.jsx)(tS, {
                        initialProps: e
                    })
                }), (0, P.Z)(a, N.vG, function(t) {
                    var e = t.initialProps,
                        n = (0, tE._)().href,
                        r = {
                            cta: (0, D.Z)((0, s.Z)({}, e.cta), {
                                href: n
                            }),
                            title: e.title
                        };
                    return (0, u.jsx)(R, (0, s.Z)({}, r))
                }), a),
                tA = (0, D.Z)((0, s.Z)({}, tI.sZ), {
                    treatments: tC
                }),
                tz = function() {
                    return (0, u.jsx)(u.Fragment, {})
                },
                tF = function(t) {
                    return (0, u.jsx)(C.K, {
                        config: tA,
                        initialProps: t,
                        Portal: tS,
                        SkeletonLoader: tz
                    })
                },
                tT = ["/_shutterstock", "/_shutterstock/images", "/_shutterstock/search/[term]", "/_shutterstock/image-photo/[title]"],
                tR = function(t) {
                    var e = t.pathname;
                    return tT.includes(e)
                },
                tB = {
                    title: void 0,
                    cta: void 0
                },
                tN = function() {
                    var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, g.useRouter)().pathname,
                        o = (0, m.B)(),
                        i = (0, tj.c)(),
                        a = (0, tP.V9)().data,
                        c = tk({
                            slug: j.U0
                        }),
                        l = c.data,
                        d = c.error;
                    if (!S.RU.includes(r) && a && (null === (t = a.activeSubscriptions) || void 0 === t ? void 0 : t.length) || d) return (0, u.jsx)(k.Z, {
                        timeout: {
                            appear: 500,
                            enter: 300,
                            exit: 5e3
                        },
                        unmountOnExit: !0,
                        children: (0, u.jsx)(R, {})
                    });
                    if (e = (n.title || n.cta) && a ? (0, s.Z)({}, n) : void 0 === a ? tB : l && l.headerBanner ? n.disableCmsContent ? tB : l.headerBanner : tB, !o && i) return (0, u.jsx)(tl, (0, s.Z)({}, e));
                    if (tR({
                            pathname: r
                        })) return (0, u.jsx)(tF, (0, s.Z)({}, e));
                    if (!o) {
                        if ((0, h.xw)({
                                pathname: r
                            })) return (0, u.jsx)(M, (0, s.Z)({}, e));
                        if ((0, h.Rd)({
                                pathname: r
                            })) return (0, u.jsx)(Q, (0, s.Z)({}, e))
                    }
                    return (0, u.jsx)(R, (0, s.Z)({}, e))
                };
            tN.defaultProps = {
                title: "",
                cta: null,
                disableCmsContent: !1
            };
            var tD = n(39232),
                tq = n(32787),
                tU = ["/_shutterstock/".concat(tD.xF), "/_shutterstock", "/_shutterstock/".concat(tD.Y_), "/_shutterstock/".concat(tD.k4, "-photo/[title]"), "/_shutterstock/".concat(tD.k4, "-vector/[title]"), "/_shutterstock/".concat(tD.k4, "-illustration/[title]"), "/_shutterstock/".concat(tD.k4, "-3d-object/[title]"), "/_shutterstock/".concat(tD.k4, "-generated/[title]"), "/_shutterstock/".concat(j.mo), "/_shutterstock/".concat(j.mo, "/[term]"), "/_shutterstock/".concat(tD.pX), "/_shutterstock/".concat(tD.pX, "/[slug]"), "/_shutterstock/".concat(tD.pX, "/").concat(j.mo, "/[term]"), "/_shutterstock/".concat(tD.pX, "/").concat(j.mo), "/_shutterstock/".concat(tD.xF, "/[title]"), "/_shutterstock/".concat(tD.xF, "/").concat(j.mo), "/_shutterstock/".concat(tD.xF, "/").concat(j.mo, "/[term]"), "/_shutterstock/".concat(tD.Qp), "/_shutterstock/".concat(tD.Qp, "/[title]"), "/_shutterstock/".concat(tD.Qp, "/").concat(j.mo), "/_shutterstock/".concat(tD.Qp, "/").concat(j.mo, "/[term]")],
                tM = function(t) {
                    var e = t.banners,
                        n = (0, m.B)(),
                        r = (0, g.useRouter)().pathname,
                        o = (0, tq.w)().data;
                    if (!(null == e ? void 0 : e.length)) return null;
                    if (tU.find(function(t) {
                            return t === r
                        })) {
                        var i, a, c = (0, d.Z)(e, 2),
                            l = c[0],
                            f = c[1],
                            p = ((null == o ? void 0 : null === (a = o.data) || void 0 === a ? void 0 : a.attributes) || {}).audiences,
                            _ = void 0 === p ? {} : p;
                        if (!((null == _ ? void 0 : _.q22023PromoAudienceVariantGroup) && e.length > 1)) return (0, u.jsx)(tN, (0, s.Z)({}, l));
                        i = f
                    } else {
                        var h = (0, d.Z)(e, 2),
                            v = h[0],
                            Z = h[1];
                        i = e.length > 1 && n ? Z : v
                    }
                    return (0, u.jsx)(R, (0, s.Z)({}, i))
                };
            tM.defaultProps = {
                banners: null
            };
            var tO = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.banners,
                    n = t.showHeaderBanner,
                    r = (0, c.Z)(t, ["banners", "showHeaderBanner"]);
                return n ? (0, u.jsx)(l.Z, {
                    theme: x.q,
                    children: (0, u.jsx)(y, {
                        children: (null == e ? void 0 : e.length) ? (0, u.jsx)(tM, {
                            banners: e
                        }) : (0, u.jsx)(tN, (0, s.Z)({}, r))
                    })
                }) : (0, u.jsx)("div", {})
            };
            tO.defaultProps = {
                title: "",
                cta: null,
                banners: null,
                showHeaderBanner: !1
            }
        },
        75053: function(t, e, n) {
            n.d(e, {
                RU: function() {
                    return s
                },
                ep: function() {
                    return a
                },
                oQ: function() {
                    return i
                }
            });
            var r = n(39232),
                o = n(18505),
                i = 105,
                a = 60,
                s = ["/", "/".concat(r.Y_), "/".concat(o.mo, "/[term]"), "/".concat(r.pX), "/".concat(r.pX, "/").concat(o.mo), "/".concat(r.pX, "/").concat(o.mo, "/[term]"), "/".concat(r.xF), "/".concat(r.xF, "/").concat(o.mo), "/".concat(r.xF, "/").concat(o.mo, "/[term]"), "/".concat(r.Qp), "/".concat(r.Qp, "/").concat(o.mo), "/".concat(r.Qp, "/").concat(o.mo, "/[term]")]
        },
        59481: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return o
                }
            });
            var r = n(85801),
                o = (0, n(12281).g)(r.Z)
        },
        14625: function(t, e, n) {
            n.d(e, {
                GN: function() {
                    return g
                },
                K9: function() {
                    return m
                },
                NP: function() {
                    return d
                },
                PU: function() {
                    return u
                },
                Ui: function() {
                    return _
                },
                Up: function() {
                    return v
                },
                XC: function() {
                    return l
                },
                Xh: function() {
                    return Z
                },
                Y4: function() {
                    return b
                },
                l_: function() {
                    return w
                },
                wZ: function() {
                    return y
                }
            });
            var r, o, i = n(47842),
                a = n(70865),
                s = n(96670),
                c = n(27739),
                u = "subscription",
                l = "onDemand",
                d = "enhanced",
                f = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: c.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.dm,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }]
                },
                p = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer", "activation-drawers:sub_product_sub_disclaimer"]
                    },
                    items: [{
                        name: c.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.cz,
                        translations: {
                            price: "activation-drawers:price_per_month"
                        }
                    }, {
                        name: c.dF,
                        translations: {
                            price: "activation-drawers:price_per_month"
                        }
                    }]
                },
                m = {
                    translations: {
                        title: "choose_a_plan",
                        caption: ["activation-drawers:sub_product_sub_disclaimer"]
                    },
                    items: [{
                        name: c.EV,
                        translations: {
                            price: "activation-drawers:price_per_year",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.KB,
                        translations: {
                            price: "activation-drawers:price_per_year"
                        }
                    }, {
                        name: c.Dy,
                        translations: {
                            price: "activation-drawers:price_per_year"
                        }
                    }]
                },
                _ = {
                    translations: {
                        title: "on_demand_title",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: c._x
                    }, {
                        name: c.vC
                    }, {
                        name: c.cL
                    }]
                },
                h = {
                    translations: {
                        title: "on_demand_title",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: c.cd,
                        translations: {
                            price: "price_standard_license"
                        }
                    }, {
                        name: c.vC,
                        translations: {
                            price: "price_standard_license"
                        }
                    }, {
                        name: c._x,
                        translations: {
                            price: "price_standard_license"
                        }
                    }, {
                        name: c.cL,
                        translations: {
                            price: "price_standard_license"
                        }
                    }],
                    initialItemIndex: 1
                },
                v = {
                    translations: {
                        title: "enhanced_legal_protections",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: c.vI
                    }, {
                        name: c.zW
                    }, {
                        name: c.jh
                    }]
                },
                Z = (r = {}, (0, i.Z)(r, u, f), (0, i.Z)(r, l, h), (0, i.Z)(r, d, v), r),
                g = (o = {}, (0, i.Z)(o, u, f), (0, i.Z)(o, l, _), (0, i.Z)(o, d, v), o),
                b = (0, s.Z)((0, a.Z)({}, Z), (0, i.Z)({}, u, p)),
                w = (0, s.Z)((0, a.Z)({}, g), (0, i.Z)({}, u, p)),
                y = [{
                    translations: "subscriptions",
                    analyticsLabel: "subscriptionTab"
                }, {
                    translations: "on_demand_packs",
                    analyticsLabel: "onDemandTab"
                }]
        },
        27739: function(t, e, n) {
            n.d(e, {
                Ak: function() {
                    return S
                },
                Ao: function() {
                    return ty
                },
                CN: function() {
                    return tv
                },
                Dy: function() {
                    return K
                },
                E6: function() {
                    return L
                },
                EV: function() {
                    return P
                },
                Em: function() {
                    return x
                },
                Hz: function() {
                    return H
                },
                KB: function() {
                    return q
                },
                Kg: function() {
                    return tm
                },
                MJ: function() {
                    return tw
                },
                NH: function() {
                    return tl
                },
                PS: function() {
                    return t_
                },
                Pv: function() {
                    return M
                },
                Q9: function() {
                    return y
                },
                RD: function() {
                    return _
                },
                RY: function() {
                    return g
                },
                SK: function() {
                    return N
                },
                TV: function() {
                    return tx
                },
                Tj: function() {
                    return V
                },
                Ts: function() {
                    return tZ
                },
                UA: function() {
                    return td
                },
                WN: function() {
                    return W
                },
                XW: function() {
                    return tk
                },
                Xd: function() {
                    return O
                },
                Xv: function() {
                    return tf
                },
                YW: function() {
                    return tb
                },
                _x: function() {
                    return F
                },
                bQ: function() {
                    return m
                },
                bk: function() {
                    return h
                },
                cL: function() {
                    return R
                },
                cd: function() {
                    return C
                },
                cz: function() {
                    return D
                },
                dF: function() {
                    return G
                },
                dm: function() {
                    return I
                },
                do: function() {
                    return tg
                },
                fn: function() {
                    return w
                },
                h$: function() {
                    return b
                },
                ik: function() {
                    return tI
                },
                jh: function() {
                    return B
                },
                ks: function() {
                    return tj
                },
                nj: function() {
                    return Q
                },
                pK: function() {
                    return tu
                },
                qi: function() {
                    return v
                },
                tq: function() {
                    return j
                },
                v8: function() {
                    return Z
                },
                vC: function() {
                    return A
                },
                vI: function() {
                    return z
                },
                x1: function() {
                    return E
                },
                yD: function() {
                    return tP
                },
                zC: function() {
                    return th
                },
                zV: function() {
                    return tp
                },
                zW: function() {
                    return T
                }
            });
            var r, o, i = n(47842),
                a = n(50930),
                s = n(97258),
                c = "ultrahd4k_video",
                u = "hd_video",
                l = "sd_video",
                d = "enhanced_footage_4k_clips",
                f = "enhanced_footage_hd_clips",
                p = "enhanced_footage_sd_clips",
                m = (r = {}, (0, i.Z)(r, s.yF, d), (0, i.Z)(r, s.HD, f), (0, i.Z)(r, s.SD, p), r),
                _ = (o = {}, (0, i.Z)(o, s.yF, c), (0, i.Z)(o, s.HD, u), (0, i.Z)(o, s.SD, l), o),
                h = "portfolio_credit_rules",
                v = "flex10_monthly",
                Z = "flex10_cmt_x12",
                g = "flex10_cmt_upfront",
                b = [v, Z, g],
                w = Z,
                y = "TRYFLEX10",
                x = "freetrialflex10",
                k = "flex25_monthly",
                j = "flex25_cmt_x12",
                P = "flex25_cmt_upfront",
                I = "flex350_ecomm_cmt_x12",
                S = "flex350_ecomm_cmt_upfront",
                E = (0, a.Z)(b).concat((0, a.Z)([k, j, P]), (0, a.Z)(["flex50_ecomm_monthly", "flex50_ecomm_cmt_x12", "flex50_ecomm_cmt_upfront"]), (0, a.Z)(["flex150_ecomm_monthly", "flex150_ecomm_cmt_x12", "flex150_ecomm_cmt_upfront"]), (0, a.Z)(["flex350_ecomm_monthly", I, S]), (0, a.Z)(["flex750_ecomm_monthly", "flex750_ecomm_cmt_x12", "flex750_ecomm_cmt_upfront"]), (0, a.Z)(["flex150_cmt_x12", "flex150_annual_upf", "flex300_cmt_x12", "flex300_annual_upf", "flex500_cmt_x12", "flex500_annual_upf", "flex750_cmt_x12", "flex750_annual_upf", "flex1000_cmt_x12", "flex1000_annual_upf"])),
                C = "on_demand_large_1_download",
                A = "on_demand_large_2_download",
                z = "enhanced_2_download_365_day",
                F = "on_demand_large_5_download",
                T = "enhanced_5_download_365_day",
                R = "on_demand_large_25_download",
                B = "enhanced_25_download_365_day",
                N = (0, a.Z)([A, z]).concat((0, a.Z)([F, T]), (0, a.Z)([R, B])),
                D = "monthly_10_download_1_month_cmt_x12",
                q = "monthly_10_download_12_month_upf",
                U = ["monthly_10_download_1_month_upf", D, q],
                M = D,
                O = "PICK10FREE",
                L = "freetrialimage",
                H = "freetrialimageaips",
                Q = "CREATEFREE",
                V = [O, Q, y],
                X = ["monthly_50_download_1_month_upf", "monthly_50_download_1_month_cmt_x12", "monthly_50_download_12_month_upf"],
                G = "monthly_350_download_1_month_no_ro_cmt_x12",
                K = "monthly_350_download_12_month_upf",
                Y = ["monthly_350_download_1_month_no_ro_upf", G, K],
                J = ["monthly_750_download_1_month_no_ro_upf", "monthly_750_download_1_month_no_ro_cmt_x12", "monthly_750_download_12_month_upf"];
            (0, a.Z)(U).concat((0, a.Z)(X), (0, a.Z)(Y), (0, a.Z)(J));
            var W = "standard",
                $ = ["footage_5_download_nonhd", "footage_5_download_hd", "footage_5_download_ultrahd4k"],
                tt = ["enhanced_footage_sd_5_pack", "enhanced_footage_hd_5_pack", "enhanced_footage_4k_5_pack"];
            ["footage_5_download_lowres"].concat((0, a.Z)($), (0, a.Z)(tt));
            var te = ["footage_10_download_nonhd", "footage_10_download_hd", "footage_10_download_ultrahd4k"],
                tn = ["enhanced_footage_sd_10_pack", "enhanced_footage_hd_10_pack", "enhanced_footage_4k_10_pack"];
            ["footage_10_download_lowres"].concat((0, a.Z)(te), (0, a.Z)(tn));
            var tr = ["footage_25_download_nonhd", "footage_25_download_hd", "footage_25_download_ultrahd4k"],
                to = ["enhanced_footage_sd_25_pack", "enhanced_footage_hd_25_pack", "enhanced_footage_4k_25_pack"];
            ["footage_25_download_lowres"].concat((0, a.Z)(tr), (0, a.Z)(to));
            var ti = (0, a.Z)($).concat((0, a.Z)(te), (0, a.Z)(tr), (0, a.Z)(tt), (0, a.Z)(tn), (0, a.Z)(to));
            (0, a.Z)([l, u, c]).concat((0, a.Z)([p, f, d]), (0, a.Z)(ti));
            var ta = ["footage_monthly_5_download_1_month_upf", "footage_monthly_5_download_1_month_cmt_x12", "footage_monthly_5_download_12_month_upf"],
                ts = ["footage_monthly_10_download_1_month_cmt_x12", "footage_monthly_10_download_12_month_upf", "footage_monthly_10_download_1_month_upf"],
                tc = ["footage_monthly_20_download_1_month_upf", "footage_monthly_20_download_1_month_cmt_x12", "footage_monthly_20_download_12_month_upf"];
            (0, a.Z)(ta).concat((0, a.Z)(ts), (0, a.Z)(tc));
            var tu = "on_demand_editorial_25_download",
                tl = "creative_flow_plus_monthly",
                td = [tl, "creative_flow_plus_cmt_upfront"],
                tf = ["hd_video", "ultrahd4k_video", "select_video", "sd_video", "audio_standard_track", "audio_enhanced_track", "footage_elements_low", "footage_elements_medium", "footage_elements_high", "sfx_standard_track", "sfx_enhanced_track", "editorial_footage_ecomm_clips", "single_image_standard_license", d, f, p, "single_premium_image_standard_license", "single_premium_image_enhanced_license"],
                tp = "OUT_OF_CREDITS",
                tm = ["shared_monthly_1000_download_1_month_cmt_x12", "shared_monthly_12000_download_12_month_upf", "shared_monthly_12000_download_365_day", "shared_monthly_750_download_1_month_cmt_x12", "shared_monthly_9000_download_12_month_upf", "shared_monthly_9000_download_365_day", "shared_standard_1_month_cmt_x12", "shared_standard_12_month_upf", "shared_standard_365_day"],
                t_ = "multi_share",
                th = "footage_standard",
                tv = "footage_enhanced",
                tZ = /^.*(_nonhd|_sd|sd_).*$/gm,
                tg = /^.*(_hd|hd_).*$/gm,
                tb = /^.*(_ultrahd4k|_4k_|ultrahd4k_).*$/gm,
                tw = [v, Z, g, k, j, P],
                ty = (0, a.Z)(U).concat((0, a.Z)(X), (0, a.Z)(Y), (0, a.Z)(J), ["shared_monthly_750_download_1_month_plus_cmt_x12_2"]),
                tx = (0, a.Z)(ta).concat((0, a.Z)(ts), (0, a.Z)(tc)),
                tk = [A, F, R],
                tj = [z, T, B],
                tP = (0, a.Z)([C, "enhanced_1_download_365_day"]),
                tI = ["IN"]
        },
        19522: function(t, e, n) {
            n.d(e, {
                KQ: function() {
                    return i
                },
                LX: function() {
                    return s
                },
                Qs: function() {
                    return o
                },
                _3: function() {
                    return r
                },
                _Y: function() {
                    return u
                },
                iH: function() {
                    return c
                },
                yI: function() {
                    return a
                }
            });
            var r = "jpg",
                o = "eps",
                i = "JPEG",
                a = "png",
                s = "tiff",
                c = "mp3",
                u = "wav"
        },
        91948: function(t, e, n) {
            n.d(e, {
                b: function() {
                    return s
                }
            });
            var r = n(80875),
                o = n(2784),
                i = n(88849),
                a = n(27673),
                s = function(t) {
                    var e = t.flagID,
                        n = t.metadata,
                        s = t.variations,
                        c = (0, r.I)(e),
                        u = c.reason,
                        l = c.variation,
                        d = c.error,
                        f = c.isLoading,
                        p = (0, o.useMemo)(function() {
                            if (l !== i.NM && l) return s[l] || void 0
                        }, [l, s]),
                        m = (0, a.z)({
                            error: d,
                            flagID: e,
                            name: n.name,
                            reason: u,
                            variantKey: l
                        }).recordImpression;
                    return {
                        config: p,
                        isLoading: void 0 !== f && f,
                        recordImpression: u === i.M6 ? m : function() {
                            return ""
                        }
                    }
                }
        },
        42606: function(t, e, n) {
            n.d(e, {
                C5: function() {
                    return _
                },
                Di: function() {
                    return c
                },
                VP: function() {
                    return b
                },
                jm: function() {
                    return s
                },
                nk: function() {
                    return h
                },
                rN: function() {
                    return v
                },
                sZ: function() {
                    return u
                },
                wZ: function() {
                    return Z
                }
            });
            var r, o = n(47842),
                i = n(14625),
                a = n(27739),
                s = "p3-1546-price-reset",
                c = "Price reset",
                u = {
                    flagID: s,
                    id: "P3-1546",
                    name: c
                },
                l = "2_credit_pack",
                d = "5_credit_pack",
                f = "30_credit_pack",
                p = "125_credit_pack",
                m = "250_credit_pack",
                _ = [l, d, f, p, m],
                h = "creditPack",
                v = "pricingCardCreditPack",
                Z = [{
                    translations: "subscriptions",
                    analyticsLabel: "subscriptionTab"
                }, {
                    translations: "credit_packs",
                    analyticsLabel: "creditPacksTab"
                }],
                g = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: a.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: a.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details_images_and_music"
                        }
                    }, {
                        name: a.dm,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }]
                },
                b = (r = {}, (0, o.Z)(r, i.PU, g), (0, o.Z)(r, i.XC, {
                    translations: {
                        title: "credit_packs_title",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: d
                    }, {
                        name: l
                    }, {
                        name: f
                    }]
                }), (0, o.Z)(r, i.NP, {
                    translations: {
                        title: "enhanced_generic_legal_protections",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: f
                    }, {
                        name: p
                    }, {
                        name: m
                    }]
                }), r)
        },
        5466: function(t, e, n) {
            n.d(e, {
                m: function() {
                    return a
                }
            });
            var r = n(42606),
                o = n(91948),
                i = {
                    variantA: {
                        productId: "flex10_cmt_x12-var-0014",
                        preset: "p31193",
                        creditAllotments: {
                            image: 1,
                            video: 25,
                            music: 4
                        },
                        title: "credit_packs"
                    }
                },
                a = function() {
                    var t = (0, o.b)({
                        flagID: r.jm,
                        metadata: {
                            name: r.Di
                        },
                        variations: i
                    }).config;
                    return {
                        productId: null == t ? void 0 : t.productId,
                        preset: null == t ? void 0 : t.preset,
                        creditAllotments: null == t ? void 0 : t.creditAllotments,
                        title: null == t ? void 0 : t.title
                    }
                }
        },
        66970: function(t, e, n) {
            n.d(e, {
                DW: function() {
                    return s
                },
                a8: function() {
                    return a
                }
            });
            var r = n(87394),
                o = n(97258),
                i = n(39232),
                a = function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null == e ? void 0 : null === (t = e.sizes) || void 0 === t ? void 0 : t[o.v2]
                },
                s = function(t) {
                    var e, n, o = t.assetType,
                        a = t.assetSize,
                        s = void 0 === a ? {} : a,
                        c = "",
                        u = "";
                    switch (o) {
                        case i.pX:
                            c = s.resolution, u = s.format;
                            break;
                        case i.k4:
                        default:
                            c = (n = (0, r.Z)((null == s ? void 0 : null === (e = s.name) || void 0 === e ? void 0 : e.split("_")) || [], 2))[0], u = n[1]
                    }
                    return {
                        size: c,
                        format: u
                    }
                }
        },
        83451: function(t, e, n) {
            n.d(e, {
                Oo: function() {
                    return B
                },
                rB: function() {
                    return P
                }
            });
            var r, o, i, a, s = n(98788),
                c = n(70865),
                u = n(87394),
                l = n(5163),
                d = n(81740),
                f = n(19522),
                p = n(97258),
                m = n(39232),
                _ = n(85330),
                h = n(84833),
                v = n(94054),
                Z = n(67661),
                g = n(9009),
                b = n(81232),
                w = n(37546),
                y = n(44297),
                x = n(18411),
                k = n(61765),
                j = function(t) {
                    var e, n, r = t.asset,
                        o = r.angle,
                        i = r.selectedFormatType,
                        a = r.selectedShadowsOption;
                    return (0, c.Z)({
                        angle: o || (null == r ? void 0 : null === (e = r.metadata) || void 0 === e ? void 0 : null === (n = e.cart) || void 0 === n ? void 0 : n.angle) || "H01",
                        content_size: p.JF
                    }, i === f.yI && {
                        include_shadows: "on" === a
                    })
                },
                P = function(t) {
                    var e, n, r = t.asset;
                    return (null == r ? void 0 : null === (e = r.metadata) || void 0 === e ? void 0 : null === (n = e.cart) || void 0 === n ? void 0 : n.sizes) || r.sizes
                },
                I = (r = (0, s.Z)(function(t) {
                    var e, n, r, o;
                    return (0, l.__generator)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!((null == (e = t.asset) ? void 0 : null === (n = e.metadata) || void 0 === n ? void 0 : n.cart) && !e.metadata.cart.sizes)) return [3, 2];
                                return r = (0, y.so)(e), o = {
                                    id: e.id
                                }, r && (o.channel = _.$S, o.content_provider = h._e), [4, Z.uS.get((0, d.om)({
                                    queryParams: o
                                }).formattedUrl).then(function(t) {
                                    var e = t.data;
                                    return (0, g.O)(e)
                                })];
                            case 1:
                                return [2, i.sent().sizes];
                            case 2:
                                return [2, P({
                                    asset: e
                                })]
                        }
                    })
                }), function(t) {
                    return r.apply(this, arguments)
                }),
                S = function(t) {
                    var e, n, r, o, i = t.asset,
                        a = t.is3dObject,
                        s = t.isRexEditorial,
                        c = t.selectedAssetSize;
                    return i.licenseAsJpeg || (null === (e = i.metadata) || void 0 === e ? void 0 : null === (n = e.cart) || void 0 === n ? void 0 : n.licenseAsJpeg) ? "jpeg" : a && i.selectedFormatType ? "3dByFormat" : a && (null === (r = i.metadata) || void 0 === r ? void 0 : null === (o = r.cart) || void 0 === o ? void 0 : o.size) ? "3dBySize" : x.Bg[c] ? "comped" : s ? "rexEditorial" : "default"
                },
                E = function(t) {
                    var e, n, r, o, i = t.asset,
                        a = t.licenseStrategy,
                        s = t.selectedAssetSize,
                        c = t.sizesToUseArray,
                        l = function() {
                            switch (a) {
                                case "jpeg":
                                    return c.find(function(t) {
                                        return t.format === f._3
                                    });
                                case "3dByFormat":
                                    return c.find(function(t) {
                                        return t.format === i.selectedFormatType
                                    });
                                case "3dBySize":
                                    return;
                                case "comped":
                                    return (0, w.AR)({
                                        sizes: c,
                                        compSizeImage: s
                                    });
                                default:
                                    return (0, w.Nf)(c)
                            }
                        }(),
                        d = (null == l ? void 0 : l.format) || (null === (e = i.metadata) || void 0 === e ? void 0 : null === (n = e.cart) || void 0 === n ? void 0 : n.format);
                    switch (a) {
                        case "rexEditorial":
                            return {
                                size: p.vD,
                                format: d
                            };
                        case "3dByFormat":
                            return {
                                size: (0, u.Z)(l.name.split("_"), 1)[0],
                                format: d
                            };
                        case "3dBySize":
                            return {
                                size: null == i ? void 0 : null === (r = i.metadata) || void 0 === r ? void 0 : null === (o = r.cart) || void 0 === o ? void 0 : o.size,
                                format: d
                            };
                        default:
                            return {
                                size: x.nd[(0, b.z)(l.name)].downloadName,
                                format: d
                            }
                    }
                },
                C = function(t) {
                    var e, n, r, o, i = t.selectedAssetSize,
                        a = t.asset,
                        s = P({
                            asset: a
                        }),
                        u = (0, y.EK)(a),
                        l = (0, y.f8)(a),
                        d = l ? j({
                            asset: a,
                            selectedAssetSize: i,
                            sizesToUse: s
                        }) : {};
                    if (!s && (null == a ? void 0 : null === (e = a.metadata) || void 0 === e ? void 0 : null === (n = e.cart) || void 0 === n ? void 0 : n.size) && (null == a ? void 0 : null === (r = a.metadata) || void 0 === r ? void 0 : null === (o = r.cart) || void 0 === o ? void 0 : o.format)) return (0, c.Z)({
                        content_size: u ? p.vD : a.metadata.cart.size,
                        content_format: a.metadata.cart.format
                    }, d);
                    var f = Object.values(s),
                        m = S({
                            asset: a,
                            is3dObject: l,
                            isRexEditorial: u,
                            selectedAssetSize: i
                        }),
                        _ = E({
                            asset: a,
                            licenseStrategy: m,
                            selectedAssetSize: i,
                            sizesToUseArray: f
                        }),
                        h = _.size,
                        v = _.format;
                    return (0, c.Z)({
                        content_size: h,
                        content_format: v
                    }, d)
                },
                A = function(t) {
                    var e = t.map[t.licenseName];
                    return e === p.T0 ? p.qY : e
                },
                z = function(t) {
                    var e = t.asset,
                        n = t.licenseName,
                        r = t.isVideoComp,
                        o = t.selectedAssetSize,
                        i = t.sizes,
                        a = (0, y.EK)(e),
                        s = (0, y.cL)(e),
                        c = (0, y.$Q)({
                            sizes: Object.values(i)
                        });
                    return !r && c ? A({
                        map: x.Q1,
                        licenseName: n
                    }) : r || n === v.f12 || a || s ? !o || a || s ? (0, w.mF)(i) : x.kR[o] : A({
                        map: x.kR,
                        licenseName: n
                    })
                },
                F = (o = (0, s.Z)(function(t) {
                    var e, n, r, o, i, a, s, c;
                    return (0, l.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return e = t.asset, n = t.licenseName, r = t.isVideoComp, o = t.selectedAssetSize, [4, I({
                                    asset: e
                                })];
                            case 1:
                                return a = z({
                                    asset: e,
                                    licenseName: n,
                                    isVideoComp: r,
                                    selectedAssetSize: o,
                                    sizes: i = u.sent()
                                }), s = (0, y.EK)(e), c = Object.values(i).find(function(t) {
                                    var e = t.resolution;
                                    return x.wb[null == e ? void 0 : e.toLowerCase()] === a
                                }), [2, {
                                    content_size: s ? p.vD : a,
                                    content_format: null == c ? void 0 : c.format
                                }]
                        }
                    })
                }), function(t) {
                    return o.apply(this, arguments)
                }),
                T = function(t) {
                    var e, n = t.format;
                    switch (t.selectedAssetSize) {
                        case "stereo":
                            e = p.cs;
                            break;
                        case "5.1":
                            e = p.gp;
                            break;
                        default:
                            e = p.yy
                    }
                    return {
                        content_size: e,
                        content_format: n === f.iH ? f.iH : f._Y
                    }
                },
                R = (i = (0, s.Z)(function(t) {
                    var e, n, r, o, i, a;
                    return (0, l.__generator)(this, function(s) {
                        switch (s.label) {
                            case 0:
                                switch (e = t.asset, n = t.licenseName, r = t.isVideoComp, o = t.selectedAssetSize, i = t.format, a = (0, k.qw)({
                                    asset: e
                                }), (0, y.so)(e) && (a = m.A7), a) {
                                    case m.pX:
                                    case m.A7:
                                        return [3, 1];
                                    case m.j0:
                                        return [3, 3];
                                    case m.tn:
                                        return [3, 4]
                                }
                                return [3, 5];
                            case 1:
                                return [4, F({
                                    asset: e,
                                    licenseName: n,
                                    isVideoComp: r,
                                    selectedAssetSize: o
                                })];
                            case 2:
                                return [2, s.sent()];
                            case 3:
                                return [2, {
                                    content_size: p.Ng,
                                    content_format: m.j0
                                }];
                            case 4:
                                return [2, T({
                                    selectedAssetSize: o,
                                    format: i
                                })];
                            case 5:
                                return [2, C({
                                    selectedAssetSize: o,
                                    asset: e
                                })];
                            case 6:
                                return [2]
                        }
                    })
                }), function(t) {
                    return i.apply(this, arguments)
                }),
                B = (a = (0, s.Z)(function(t) {
                    var e, n, r, o, i, a, s, u;
                    return (0, l.__generator)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return e = t.licenseName, n = t.selectedAssetSize, r = t.asset, o = t.isVideoComp, i = t.format, a = (0, k.qw)({
                                    asset: r
                                }), u = [{
                                    content_id: s = r.id.toString(),
                                    content_type: (0, k.JD)({
                                        assetType: a,
                                        assetId: s
                                    })
                                }], [4, R({
                                    asset: r,
                                    licenseName: e,
                                    isVideoComp: o,
                                    selectedAssetSize: n,
                                    format: i
                                })];
                            case 1:
                                return [2, c.Z.apply(void 0, u.concat([l.sent()]))]
                        }
                    })
                }), function(t) {
                    return a.apply(this, arguments)
                })
        },
        61765: function(t, e, n) {
            n.d(e, {
                Fy: function() {
                    return u
                },
                JD: function() {
                    return a
                },
                Js: function() {
                    return l
                },
                qw: function() {
                    return s
                },
                rw: function() {
                    return c
                }
            });
            var r = n(39232),
                o = n(94054),
                i = n(44297),
                a = function(t) {
                    var e = t.assetId,
                        n = t.assetType;
                    if ((0, i.EK)({
                            id: e
                        })) return r.gP;
                    switch (n) {
                        case r.k4:
                        case r.Y_:
                        case r.ox:
                        case r.w5:
                            return r.pV;
                        case r.FM:
                            return r.pX;
                        case r.xF:
                        case r.jr:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return n
                    }
                },
                s = function(t) {
                    var e, n = t.asset;
                    if (null === (e = n.image) || void 0 === e ? void 0 : e.isVector) return r.ox;
                    if ((0, i.EK)(n)) return r.gP;
                    var o = n.imageType || n.itemType || n.type;
                    switch (o) {
                        case r.e3:
                        case r.X2:
                        case r.Y_:
                            return r.k4;
                        case r.FM:
                            return r.pX;
                        case r.jr:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return o
                    }
                },
                c = function(t) {
                    var e = t.asset;
                    if ((0, i.N3)(e)) return r.gP;
                    if ((0, i.so)(e)) return r.cF;
                    var n = e.imageType || e.itemType || e.type;
                    switch (n) {
                        case r.ox:
                        case r.pV:
                        case r.e3:
                        case r.X2:
                        case r.Y_:
                            return r.k4;
                        case r.FM:
                            return r.pX;
                        case r.jr:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return n
                    }
                },
                u = function(t) {
                    var e = t.asset;
                    if ((0, i.N3)(e)) return r.nX;
                    if ((0, i.so)(e)) return r.A7;
                    var n = e.imageType || e.itemType || e.type;
                    switch (n) {
                        case r.ox:
                        case r.pV:
                        case r.e3:
                        case r.X2:
                        case r.Y_:
                            return r.k4;
                        case r.FM:
                            return r.pX;
                        case r.jr:
                        case r.xF:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return n
                    }
                },
                l = function(t) {
                    var e = u({
                        asset: t.mediaItem
                    });
                    return t.licenseName === o._rW[e]
                }
        },
        18167: function(t, e, n) {
            n.d(e, {
                t: function() {
                    return c
                }
            });
            var r = n(70865),
                o = n(66970),
                i = n(44297),
                a = n(38398),
                s = n(60591),
                c = function(t) {
                    var e = t.asset,
                        n = t.couponCode,
                        c = t.productId,
                        u = t.selectedAssetSize,
                        l = t.vatNumber,
                        d = t.preset,
                        f = t.seatCount,
                        p = t.doNotRedirect,
                        m = void 0 !== p && p,
                        _ = t.existingUserRedirect,
                        h = void 0 !== _ && _,
                        v = t.customLandingPage,
                        Z = t.host,
                        g = t.license,
                        b = void 0 === g ? s.ur : g,
                        w = (0, i.OP)({
                            asset: e
                        }),
                        y = (0, i.Tp)(e),
                        x = (0, o.DW)({
                            assetType: y,
                            assetSize: u
                        }),
                        k = x.size,
                        j = x.format;
                    return (0, a.format)({
                        pathname: null != v ? v : "/order",
                        query: (0, r.Z)({}, y && {
                            assetType: y
                        }, w && {
                            assetId: w
                        }, n && {
                            couponCode: n
                        }, l && {
                            vatNumber: l
                        }, k && {
                            size: k
                        }, j && {
                            format: j
                        }, f && {
                            seatCount: f
                        }, m && {
                            doNotRedirect: m
                        }, h && {
                            existingUserRedirect: h
                        }, d && {
                            preset: d
                        }, c && {
                            productId: c
                        }, Z && {
                            host: Z
                        }, b && {
                            license: b
                        })
                    })
                }
        },
        21370: function(t, e, n) {
            n.d(e, {
                _: function() {
                    return l
                }
            });
            var r = n(70865),
                o = n(27739),
                i = n(39232),
                a = n(5466),
                s = n(18167),
                c = n(59979),
                u = n(50860),
                l = function() {
                    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).asset,
                        e = (0, a.m)(),
                        n = e.productId,
                        l = e.preset,
                        d = (0, s.t)({
                            asset: t,
                            couponCode: o.Q9,
                            productId: n || o.v8
                        }),
                        f = (0, r.Z)({
                            landing_page: d,
                            view: o.Em
                        }, (null == t ? void 0 : t.type) === i.Y_ && {
                            assetType: null == t ? void 0 : t.type,
                            imageId: null == t ? void 0 : t.id
                        }, l && {
                            preset: l
                        }),
                        p = (0, c.cM)(f),
                        m = (0, u.P)({
                            query: f
                        });
                    return {
                        href: p,
                        landingPage: d,
                        signUpPageRedirectHandler: m
                    }
                }
        },
        59979: function(t, e, n) {
            n.d(e, {
                Sl: function() {
                    return E
                },
                Ov: function() {
                    return S
                },
                cM: function() {
                    return I
                }
            });
            var r, o, i = n(47842),
                a = n(70865),
                s = n(26297),
                c = n(87394),
                u = n(39232),
                l = n(38398),
                d = n.n(l),
                f = "signup",
                p = "login",
                m = (r = {}, (0, i.Z)(r, f, "/".concat(f)), (0, i.Z)(r, p, "/".concat(p)), r),
                _ = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.query,
                        n = d().format({
                            pathname: m[f],
                            query: void 0 === e ? {} : e
                        });
                    return [n, n]
                },
                h = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.query,
                        n = d().format({
                            pathname: m[p],
                            query: void 0 === e ? {} : e
                        });
                    return [n, n]
                },
                v = n(21805),
                Z = n(70314),
                g = n.n(Z)()().publicRuntimeConfig.authSsoCookieName,
                b = function() {
                    var t, e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).cookies;
                    return "-undefined" === (e ? e[g] : v.Z.get(g))
                },
                w = function() {
                    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).cookies,
                        e = b({
                            cookies: t
                        });
                    return {
                        getPathProps: e ? h : _,
                        isSignUp: !e
                    }
                },
                y = n(9823),
                x = n(27764),
                k = n(5632),
                j = (o = {}, (0, i.Z)(o, u.k4, u.k4), (0, i.Z)(o, u.pX, u.gW), (0, i.Z)(o, u.VT, u.gP), (0, i.Z)(o, u.nj, u.gP), (0, i.Z)(o, u.xF, u.xF), (0, i.Z)(o, u.Nk, "aigen"), o),
                P = function(t) {
                    var e = t.getPathProps,
                        n = t.query,
                        r = (void 0 === n ? {} : n).landing_page,
                        o = (0, s.Z)(t.query, ["landing_page"]),
                        i = (0, k.useRouter)().asPath,
                        u = (0, y.D)(),
                        l = u.isBrandSstk,
                        d = u.isBrandEnterprise,
                        f = j[(0, x.N6)(i)],
                        p = r || (d ? "/" === i ? null : i : null),
                        m = (0, a.Z)({}, l && {
                            site: f
                        }, p && {
                            landing_page: decodeURIComponent(p)
                        }, o);
                    return (0, c.Z)(e({
                        query: m
                    }), 1)[0]
                },
                I = function(t) {
                    return P({
                        getPathProps: _,
                        query: t
                    })
                },
                S = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return P({
                        getPathProps: h,
                        query: (0, y.D)().isBrandEnterprise ? {
                            site: "premier"
                        } : t
                    })
                },
                E = function(t) {
                    var e = t.cookies,
                        n = t.queryParams,
                        r = t.signUpView,
                        o = w({
                            cookies: e
                        }),
                        i = o.getPathProps,
                        s = o.isSignUp;
                    return P({
                        getPathProps: i,
                        query: (0, a.Z)({}, n, s && r ? {
                            view: r
                        } : {})
                    })
                }
        },
        50860: function(t, e, n) {
            n.d(e, {
                P: function() {
                    return l
                }
            });
            var r = n(70865),
                o = n(96670),
                i = n(72075),
                a = n(2784),
                s = n(27764),
                c = n(19819),
                u = n(59979),
                l = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.asset,
                        n = t.query,
                        l = t.shouldSetLocalStorage,
                        d = void 0 !== l && l,
                        f = (0, u.cM)(n);
                    return (0, a.useCallback)(function() {
                        if (i.j) {
                            var t, n;
                            d && (0, c.oe)(e), null === (t = window.NREUM) || void 0 === t || null === (n = t.addPageAction) || void 0 === n || n.call(t, "UP3-1623 assign useSignUpPageRedirect signUpPath to href", (0, o.Z)((0, r.Z)({}, window.location || {}), {
                                shouldSetLocalStorage: d,
                                signUpPath: f
                            })), (0, s.iz)(f, "signUpPageRedirect")
                        }
                    }, [f, e, d])
                }
        },
        5528: function(t, e, n) {
            n.d(e, {
                c: function() {
                    return a
                }
            });
            var r = n(85129),
                o = n(11181),
                i = n(5632),
                a = function() {
                    return (0, i.useRouter)().pathname === r.aD[o.BRANDS.SSTK]
                }
        },
        11800: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return i
                }
            });
            var r = n(72075),
                o = n(2784),
                i = r.j ? o.useLayoutEffect : o.useEffect
        },
        90985: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = n(87394),
                o = n(2784),
                i = n(19819),
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.threshold,
                        n = void 0 === e ? 1 / 0 : e,
                        a = t.skip,
                        s = void 0 !== a && a,
                        c = t.initialStateValue,
                        u = (0, r.Z)((0, o.useState)(void 0 !== c && c), 2),
                        l = u[0],
                        d = u[1];
                    return (0, o.useEffect)(function() {
                        if (!s) {
                            var t = (0, i.Zc)(function() {
                                window.pageYOffset >= n ? d(!0) : d(!1)
                            });
                            return window.addEventListener("scroll", t, {
                                    passive: !0
                                }),
                                function() {
                                    return t && window.removeEventListener("scroll", t)
                                }
                        }
                    }, [n, s]), l
                }
        },
        19819: function(t, e, n) {
            n.d(e, {
                A_: function() {
                    return j
                },
                QH: function() {
                    return S
                },
                VM: function() {
                    return C
                },
                Zc: function() {
                    return z
                },
                mJ: function() {
                    return I
                },
                oe: function() {
                    return A
                },
                uG: function() {
                    return P
                }
            });
            var r, o, i, a = n(98788),
                s = n(70865),
                c = n(96670),
                u = n(50930),
                l = n(5163),
                d = n(68245),
                f = n(81740),
                p = n(19522),
                m = n(97258),
                _ = n(39232),
                h = n(85330),
                v = n(94054),
                Z = n(83451),
                g = n(37546),
                b = n(44297),
                w = n(37154),
                y = n(91855),
                x = n(67661),
                k = n(84159),
                j = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.name,
                        r = e.target,
                        o = document.createElement("a");
                    o.setAttribute("data-automation", "FeatureDownload_utils_link"), o.style.display = "none", o.href = t, o.target = void 0 === r ? "_self" : r, o.download = n || t, document.body.appendChild(o), o.click(), (0, k.bK)() || document.body.removeChild(o)
                },
                P = (r = (0, a.Z)(function(t) {
                    var e, n;
                    return (0, l.__generator)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e = t.downloadBundlePayload, n = (0, d.e)({
                                    urlParams: {
                                        filename: e.bundleFilename
                                    }
                                }).formattedUrl, [4, y.jl.post(n, e.content)];
                            case 1:
                                return [2, r.sent().data.public_url]
                        }
                    })
                }), function(t) {
                    return r.apply(this, arguments)
                }),
                I = function(t) {
                    var e = t.licensedContent,
                        n = t.supplementalUrlType,
                        r = e[0],
                        o = r.downloadUrl,
                        i = r.supplementalUrls;
                    if ((null == i ? void 0 : i.length) && n) {
                        var a = (i.find(function(t) {
                            return t.type === n
                        }) || {}).url;
                        return void 0 === a ? o : a
                    }
                    return o
                },
                S = (o = (0, a.Z)(function(t) {
                    var e, n, r, o, i;
                    return (0, l.__generator)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return e = t.downloadPayload, n = t.supplementalUrlType, r = t.licenseeIdentifier, o = (0, f.f$)({
                                    urlParams: {
                                        licenseeIdentifier: r
                                    }
                                }).formattedUrl, [4, x.uS.post(o, e)];
                            case 1:
                                return [2, {
                                    downloadUrl: I({
                                        licensedContent: i = a.sent().data.meta.licensedContent,
                                        supplementalUrlType: n
                                    }),
                                    licensedContent: i
                                }]
                        }
                    })
                }), function(t) {
                    return o.apply(this, arguments)
                }),
                E = function(t) {
                    var e = t.existingAssetLicenses,
                        n = t.contentType,
                        r = t.licenseName,
                        o = t.subscriptions;
                    switch (n) {
                        case _.pX:
                            var i, a, s = (0, w.I)({
                                existingAssetLicenses: e,
                                subscriptions: (0, u.Z)(null !== (i = null == o ? void 0 : o.videoSubscriptions) && void 0 !== i ? i : []).concat((0, u.Z)(null !== (a = null == o ? void 0 : o.videoCompSubscriptions) && void 0 !== a ? a : [])),
                                licenseName: r
                            });
                            return (null == s ? void 0 : s.redeemableFor) || r;
                        case _.j0:
                            return r || v.zUW;
                        case _.tn:
                            return r || v.i9D;
                        case _.pV:
                        default:
                            return r
                    }
                },
                C = (i = (0, a.Z)(function(t) {
                    var e, n, r, o, i;
                    return (0, l.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                var d;
                                return e = t.assets, n = t.existingAssetLicenses, r = t.format, o = t.selectedAssetSize, i = t.subscriptions, [4, Promise.all(e.map((d = (0, a.Z)(function(t) {
                                    var e, a;
                                    return (0, l.__generator)(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return e = (0, g.SS)({
                                                    asset: t
                                                }), [4, (0, Z.Oo)({
                                                    asset: t,
                                                    licenseName: t.licenseId,
                                                    selectedAssetSize: o
                                                })];
                                            case 1:
                                                return a = u.sent(), [2, (0, c.Z)((0, s.Z)({}, a, e === _.tn && {
                                                    override_filename: "".concat(h.Oq, "_").concat(t.id, ".").concat(r || a.content_format)
                                                }, (0, b.f8)(t) && (0, s.Z)({
                                                    content_provider: "pixelsquid-media",
                                                    content_size: m.JF
                                                }, t.selectedFormatType === p.yI && {
                                                    include_shadows: "on" === t.selectedShadowsOption
                                                })), {
                                                    license_name: E({
                                                        existingAssetLicenses: n,
                                                        contentType: e,
                                                        licenseName: t.licenseId,
                                                        subscriptions: i
                                                    }),
                                                    show_modal: !0
                                                })]
                                        }
                                    })
                                }), function(t) {
                                    return d.apply(this, arguments)
                                })))];
                            case 1:
                                return [2, {
                                    required_cookies: "",
                                    content: u.sent()
                                }]
                        }
                    })
                }), function(t) {
                    return i.apply(this, arguments)
                }),
                A = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t && t.id && (t.title || t.description) && t.type && window.localStorage.setItem("sstk_ent_asset_preview", JSON.stringify({
                        id: t.id,
                        title: t.title || t.description,
                        thumb: t.src || t.previewImageUrl || "",
                        video: t.previewVideoUrls,
                        url: t.link,
                        type: (0, b.Tp)(t),
                        isRex: t.isRexEditorial
                    }))
                },
                z = function(t) {
                    var e;
                    return requestAnimationFrame ? function() {
                        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        e && cancelAnimationFrame(e), e = requestAnimationFrame(function() {
                            t.apply(void 0, (0, u.Z)(r))
                        })
                    } : t
                }
        },
        92128: function(t, e, n) {
            n.d(e, {
                x: function() {
                    return a
                }
            });
            var r = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M25.333 9.2l-1.867-1.867-7.467 7.467-7.467-7.467L6.665 9.2l7.467 7.467-7.467 7.467 1.867 1.867 7.467-7.467 7.467 7.467 1.867-1.867-7.467-7.467L25.333 9.2z"
                }), "Close.svg"),
                a = function(t) {
                    return (0, o.jsx)(i, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        91855: function(t, e, n) {
            n.d(e, {
                z1: function() {
                    return T
                },
                ey: function() {
                    return R
                },
                jm: function() {
                    return B
                },
                cR: function() {
                    return q
                },
                IZ: function() {
                    return U
                },
                jl: function() {
                    return O
                },
                mV: function() {
                    return H
                },
                IU: function() {
                    return Q
                },
                kO: function() {
                    return X
                },
                xj: function() {
                    return G
                },
                j: function() {
                    return K
                }
            });
            var r, o, i = n(47293),
                a = n(70314),
                s = n.n(a),
                c = n(98788),
                u = n(90581),
                l = n(47842),
                d = n(70865),
                f = n(96670),
                p = n(87394),
                m = n(5163),
                _ = n(7297),
                h = n(71162),
                v = "application/json",
                Z = s()().publicRuntimeConfig._app,
                g = (o = {}, (0, l.Z)(o, _.eJ, v), (0, l.Z)(o, _.P8, Z.name), (0, l.Z)(o, _.hU, Z.version), o),
                b = (0, l.Z)({
                    Accept: v
                }, _.zv, v),
                w = (r = (0, c.Z)(function(t, e) {
                    var n, r, o, i, a, s;
                    return (0, m.__generator)(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return n = t.toString(), r = null == e ? void 0 : e.body, [4, fetch(n, (0, f.Z)((0, d.Z)({}, e), {
                                    headers: (0, d.Z)({}, g, r && (0, d.Z)({}, b), null == e ? void 0 : e.headers)
                                }))];
                            case 1:
                                i = (o = c.sent()).headers.get(_.zv), c.label = 2;
                            case 2:
                                if (c.trys.push([2, 9, , 10]), !(null == i ? void 0 : i.includes(v))) return [3, 4];
                                return [4, o.json()];
                            case 3:
                                o.data = c.sent(), c.label = 4;
                            case 4:
                                if (!(null == i ? void 0 : i.includes("text/plain"))) return [3, 6];
                                return [4, o.text()];
                            case 5:
                                o.data = c.sent(), c.label = 6;
                            case 6:
                                if (!(null == i ? void 0 : i.includes("application/pdf"))) return [3, 8];
                                return [4, o.blob()];
                            case 7:
                                o.data = c.sent(), c.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                return c.sent(), [2, o];
                            case 10:
                                var u;
                                if ((u = o.status) >= h.HO && u < h.C7) return [2, o];
                                return o.data && (s = o.data.errors, a = (0, p.Z)(s || [], 1)[0]), [2, Promise.reject(a || o)]
                        }
                    })
                }), function(t, e) {
                    return r.apply(this, arguments)
                }),
                y = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = "[object Object]",
                        r = "[object Array]",
                        o = function(t, e) {
                            return null != t ? "".concat(t, "[").concat(e, "]") : e
                        },
                        i = function(t, e, a) {
                            var s = Object.prototype.toString.call(t),
                                c = a;
                            if (void 0 === c) {
                                if (s === n) c = {};
                                else {
                                    if (s !== r) return {};
                                    c = []
                                }
                            }
                            for (var u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    var l = t[u];
                                    if (l) switch (Object.prototype.toString.call(l)) {
                                        case r:
                                        case n:
                                            i(l, o(e, u), c);
                                            break;
                                        default:
                                            c[o(e, u)] = l
                                    }
                                }
                            return c
                        },
                        a = Object.entries(i(t)).map(function(t) {
                            return t.join("=")
                        }).join("&");
                    return e ? encodeURIComponent(a) : a
                },
                x = function() {
                    function t(e) {
                        (0, u.Z)(this, t), this.baseUrl = e, this.deleteHttpMethod = function(t) {
                            var e = t.url,
                                n = t.options;
                            return w(e, (0, d.Z)({
                                method: "DELETE"
                            }, n))
                        }, this.fetchHttpMethod = function(t) {
                            return w(t.url, t.options)
                        }, this.getHttpMethod = function(t) {
                            var e = t.url,
                                n = t.options;
                            return w(e, (0, d.Z)({
                                method: "GET"
                            }, n))
                        }, this.patchHttpMethod = function(t) {
                            var e = t.url,
                                n = t.options;
                            return w(e, (0, d.Z)({
                                method: "PATCH"
                            }, n))
                        }, this.postHttpMethod = function(t) {
                            var e = t.url,
                                n = t.options;
                            return w(e, (0, d.Z)({
                                method: "POST"
                            }, n))
                        }, this.putHttpMethod = function(t) {
                            var e = t.url,
                                n = t.options;
                            return w(e, (0, d.Z)({
                                method: "PUT"
                            }, n))
                        }, this.requestInterceptors = [], this.responseInterceptors = []
                    }
                    var e = t.prototype;
                    return e.createUrlObject = function(t, e) {
                        var n = (e || {}).params,
                            r = "";
                        n && (r = y(n, !1));
                        var o = n ? "".concat(t, "?").concat(r) : t;
                        return new URL("".concat(this.baseUrl).concat(o))
                    }, e.runRequestInterceptors = function(t) {
                        return 0 === this.requestInterceptors.length ? t : this.requestInterceptors.reduce(function(t, e) {
                            return e(t)
                        }, t)
                    }, e.runResponseInterceptors = function(t) {
                        return 0 === this.responseInterceptors.length ? t : this.responseInterceptors.reduce(function(t, e) {
                            return e(t)
                        }, t)
                    }, e.get = function(t, e) {
                        var n = this;
                        return (0, c.Z)(function() {
                            var r, o, i;
                            return (0, m.__generator)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = n.createUrlObject(t, e), o = n.runRequestInterceptors({
                                            url: r,
                                            options: e
                                        }), [4, n.getHttpMethod(o)];
                                    case 1:
                                        return i = a.sent(), [2, n.runResponseInterceptors(i)]
                                }
                            })
                        })()
                    }, e.delete = function(t, e) {
                        var n = this;
                        return (0, c.Z)(function() {
                            var r, o, i, a, s;
                            return (0, m.__generator)(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return o = (r = null == e ? void 0 : e.data) ? JSON.stringify(null == e ? void 0 : e.data) : null, r && (null == e || delete e.data), i = n.createUrlObject(t, e), a = n.runRequestInterceptors({
                                            url: i,
                                            options: (0, f.Z)((0, d.Z)({}, e), {
                                                body: o
                                            })
                                        }), [4, n.deleteHttpMethod(a)];
                                    case 1:
                                        return s = c.sent(), [2, n.runResponseInterceptors(s)]
                                }
                            })
                        })()
                    }, e.fetch = function(e, n) {
                        var r = this;
                        return (0, c.Z)(function() {
                            var o, i, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return o = null == n ? void 0 : n.data, (i = n ? t.getRequestBody(o) : null) && (null == n || delete n.data), a = r.createUrlObject(e, n), s = r.runRequestInterceptors({
                                            url: a,
                                            options: (0, f.Z)((0, d.Z)({}, n), {
                                                body: i
                                            })
                                        }), [4, r.fetchHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, r.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, e.patch = function(e, n, r) {
                        var o = this;
                        return (0, c.Z)(function() {
                            var i, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (i = n || (null == r ? void 0 : r.data) ? t.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), a = o.createUrlObject(e, r), s = o.runRequestInterceptors({
                                            url: a,
                                            options: (0, f.Z)((0, d.Z)({}, r), {
                                                body: i
                                            })
                                        }), [4, o.patchHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, o.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, e.post = function(e, n, r) {
                        var o = this;
                        return (0, c.Z)(function() {
                            var i, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (i = n || (null == r ? void 0 : r.data) ? t.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), a = o.createUrlObject(e, r), s = o.runRequestInterceptors({
                                            url: a,
                                            options: (0, f.Z)((0, d.Z)({}, r), {
                                                body: i
                                            })
                                        }), [4, o.postHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, o.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, e.put = function(e, n, r) {
                        var o = this;
                        return (0, c.Z)(function() {
                            var i, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (i = n || (null == r ? void 0 : r.data) ? t.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), a = o.createUrlObject(e, r), s = o.runRequestInterceptors({
                                            url: a,
                                            options: (0, f.Z)((0, d.Z)({}, r), {
                                                body: i
                                            })
                                        }), [4, o.putHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, o.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, t.getRequestBody = function(t) {
                        return t && Object.keys(t).length > 0 ? JSON.stringify(t) : null
                    }, t
                }(),
                k = n(4842),
                j = n(74147),
                P = n(21805),
                I = n(6364),
                S = s()().publicRuntimeConfig.authSsoCookieName,
                E = function(t) {
                    var e, n = t.url,
                        r = t.options,
                        o = (null == r ? void 0 : null === (e = r.headers) || void 0 === e ? void 0 : e[_.cp]) || (0, I.Z)();
                    return {
                        url: n,
                        options: (0, f.Z)((0, d.Z)({}, r), {
                            headers: (0, f.Z)((0, d.Z)({}, null == r ? void 0 : r.headers), (0, l.Z)({}, _.cp, o))
                        })
                    }
                },
                C = function(t) {
                    401 === t.status || t.status;
                    var e, n, r = null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n[0],
                        o = null == t ? void 0 : t.data;
                    return r || o || t
                },
                A = function(t) {
                    if (!t.ok) return C(t);
                    if ("string" == typeof(null == t ? void 0 : t.data)) return t;
                    var e, n = null === (e = t.headers.get(_.zv)) || void 0 === e ? void 0 : e.includes("application/json");
                    return !new URL(t.url).pathname.startsWith(i.a) && n && (t.data = (0, j.Y)(t.data)), t
                },
                z = s()().publicRuntimeConfig.apiEndpoints,
                F = function(t) {
                    return z[t], "".concat(window.location.origin).concat(i.a)
                },
                T = new x(F("accounts")),
                R = new x(F("airtable"));
            new x(F("planning"));
            var B = new x(F("enterpriseApi")),
                N = new x(F("enterpriseApi")),
                D = new x(F("graphGateway")),
                q = new x(F("identitySettings")),
                U = new x(F("mailingApi")),
                M = new x(F(i.a)),
                O = new x(F("shutterstockBundler")),
                L = new x(F("studio"));
            new x(F("studio"));
            var H = new x(F("unityGroup")),
                Q = new x(F("unityInvoice")),
                V = new x(F("userAssetsService")),
                X = new x(F("userPropertiesApi")),
                G = new x(F("visitorTracking")),
                K = {
                    postVisitorTracking: function(t, e) {
                        return G.post("/visit", t, e)
                    },
                    postReferrals: function(t, e) {
                        return G.post("/events/referral", t, e)
                    }
                };
            L.requestInterceptors.push(function(t) {
                var e, n = t.url,
                    r = t.options;
                if ((null == r ? void 0 : null === (e = r.method) || void 0 === e ? void 0 : e.toLowerCase()) === "get") {
                    var o = n.pathname.split("?")[0];
                    if (k.M.includes(o)) {
                        var i = P.Z.get(S);
                        i && "-undefined" !== i && n.searchParams.set(k.D, i)
                    }
                }
                return {
                    url: n,
                    options: r
                }
            }), [L, B, N, Q, Q, q].forEach(function(t) {
                return t.responseInterceptors.push(A)
            }), [T, R, B, N, D, U, M, O, L, H, Q, V, G].forEach(function(t) {
                return t.requestInterceptors.push(E)
            })
        },
        57004: function(t, e, n) {
            n.d(e, {
                WE: function() {
                    return i
                },
                bR: function() {
                    return p
                },
                d5: function() {
                    return f
                },
                ms: function() {
                    return o
                },
                nN: function() {
                    return d
                },
                yS: function() {
                    return l
                }
            });
            var r = n(70865),
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return t.reduce(function(t, e) {
                        return t[e] = !0, t
                    }, {})
                },
                i = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    return Object.keys(t).reduce(function(t, n) {
                        return (0, r.Z)({}, t, e[n] && e[n])
                    }, {})
                },
                a = {},
                s = {
                    compare: function(t, e) {
                        return t < e ? 1 : t > e ? -1 : 0
                    }
                },
                c = function(t) {
                    var e = a[t];
                    if (e) return e;
                    if ("undefined" == typeof Intl || !Intl || !Intl.Collator) return s;
                    var n = new Intl.Collator(t);
                    return a[t] = n, n
                },
                u = function(t) {
                    return function(e) {
                        return function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
                                    return t
                                },
                                o = c(e);
                            return n.slice().sort(function(e, n) {
                                var i = r(e),
                                    a = r(n);
                                return i === a ? 0 : t ? o.compare(i, a) : o.compare(a, i)
                            })
                        }
                    }
                },
                l = u(!1),
                d = u(!0),
                f = {
                    standard: {
                        pageSection: "standardForm"
                    },
                    eloqua: {
                        pageSection: "eloquaMarketingForm"
                    },
                    selector: {
                        pageSection: "selectorForm"
                    }
                },
                p = function(t) {
                    var e = (null == t ? void 0 : t.fields) || {};
                    return {
                        action: e.dataTrackEventAction,
                        section: e.dataTrackPageSection,
                        label: e.dataTrackEventLabel
                    }
                }
        }
    }
]);
//# sourceMappingURL=47034-9952e73e849937e0.js.map