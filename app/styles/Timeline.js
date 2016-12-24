import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "li": {
        "listStyle": "none"
    },
    "a": {
        "textDecoration": "none",
        "color": "#7b9d6f"
    },
    "cd-horizontal-timeline::before": {
        "content": "'mobile'",
        "display": "none"
    },
    "cd-horizontal-timeline timeline": {
        "position": "relative",
        "height": 100,
        "width": "100%"
    },
    "cd-horizontal-timeline filling-line": {
        "position": "absolute",
        "zIndex": 1,
        "left": 0,
        "top": 0,
        "height": "100%",
        "width": "100%",
        "backgroundColor": "#d6b571",
        "transform": "none !important"
    },
    "cd-horizontal-timeline events": {
        "position": "absolute",
        "zIndex": 1,
        "left": 0,
        "top": 49,
        "height": 2
    },
    "cd-horizontal-timeline events a": {
        "paddingBottom": 6,
        "color": "#d6b571",
        "width": 34,
        "height": 34,
        "textAlign": "center",
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingLeft": 0,
        "fontSize": 13,
        "lineHeight": 1.428571429,
        "borderRadius": "50%",
        "fontWeight": "600",
        "content": "''",
        "position": "absolute",
        "left": "50%",
        "right": "auto",
        "WebkitTransform": "translateX(-50%)",
        "MozTransform": "translateX(-50%)",
        "MsTransform": "translateX(-50%)",
        "OTransform": "translateX(-50%)",
        "transform": "translateX(-50%)",
        "bottom": -5,
        "border": "2px solid #d6b571",
        "backgroundColor": "#fff",
        "WebkitTransition": "background-color 0.3s, border-color 0.3s",
        "MozTransition": "background-color 0.3s, border-color 0.3s",
        "transition": "background-color 0.3s, border-color 0.3s",
        "zIndex": 2
    },
    "cd-horizontal-timeline events a:focus": {
        "textDecoration": "none"
    },
    "cd-horizontal-timeline events a:hover": {
        "textDecoration": "none"
    },
    "cd-horizontal-timeline events aselected": {
        "pointerEvents": "none",
        "backgroundColor": "#d6b571",
        "borderColor": "#d6b571",
        "color": "#fff"
    },
    "cd-horizontal-timeline events aolder-event": {
        "borderColor": "#d6b571"
    },
    "cd-horizontal-timeline events-content": {
        "position": "relative",
        "width": "100%",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "overflow": "hidden",
        "WebkitTransition": "height 0.4s",
        "MozTransition": "height 0.4s",
        "transition": "height 0.4s"
    },
    "cd-horizontal-timeline events-content li": {
        "position": "absolute",
        "zIndex": 1,
        "width": "100%",
        "left": 0,
        "top": 0,
        "WebkitTransform": "translateX(-100%)",
        "MozTransform": "translateX(-100%)",
        "MsTransform": "translateX(-100%)",
        "OTransform": "translateX(-100%)",
        "transform": "translateX(-100%)",
        "paddingTop": 0,
        "paddingRight": "5%",
        "paddingBottom": 0,
        "paddingLeft": "5%",
        "opacity": 0,
        "WebkitAnimationDuration": "0.4s",
        "MozAnimationDuration": "0.4s",
        "animationDuration": "0.4s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "MozAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out"
    },
    "cd-horizontal-timeline events-content liselected": {
        "position": "relative",
        "zIndex": 2,
        "opacity": 1,
        "WebkitTransform": "translateX(0)",
        "MozTransform": "translateX(0)",
        "MsTransform": "translateX(0)",
        "OTransform": "translateX(0)",
        "transform": "translateX(0)"
    },
    "cd-horizontal-timeline events-content lienter-right": {
        "WebkitAnimationName": "cd-enter-right",
        "MozAnimationName": "cd-enter-right",
        "animationName": "cd-enter-right"
    },
    "cd-horizontal-timeline events-content lileave-right": {
        "WebkitAnimationName": "cd-enter-right",
        "MozAnimationName": "cd-enter-right",
        "animationName": "cd-enter-right",
        "WebkitAnimationDirection": "reverse",
        "MozAnimationDirection": "reverse",
        "animationDirection": "reverse"
    },
    "cd-horizontal-timeline events-content lienter-left": {
        "WebkitAnimationName": "cd-enter-left",
        "MozAnimationName": "cd-enter-left",
        "animationName": "cd-enter-left"
    },
    "cd-horizontal-timeline events-content lileave-left": {
        "WebkitAnimationName": "cd-enter-left",
        "MozAnimationName": "cd-enter-left",
        "animationName": "cd-enter-left",
        "WebkitAnimationDirection": "reverse",
        "MozAnimationDirection": "reverse",
        "animationDirection": "reverse"
    },
    "cd-horizontal-timeline events-content li > *": {
        "maxWidth": 800,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "cd-horizontal-timeline events-content h2": {
        "fontWeight": "700",
        "fontSize": 2.6,
        "lineHeight": 1.2
    },
    "cd-horizontal-timeline events-content em": {
        "display": "block",
        "fontStyle": "italic",
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto",
        "lineHeight": 1.6
    },
    "cd-horizontal-timeline events-content em::before": {
        "content": "'- '"
    },
    "cd-horizontal-timeline events-content p": {
        "fontSize": 1.4,
        "color": "#959595",
        "lineHeight": 1.6
    },
    "no-touch cd-horizontal-timeline events a:hover::after": {
        "backgroundColor": "#7b9d6f",
        "borderColor": "#7b9d6f"
    },
    "cd-timeline-navigation a": {
        "position": "absolute",
        "zIndex": 1,
        "top": "50%",
        "bottom": "auto",
        "WebkitTransform": "translateY(-50%)",
        "MozTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "OTransform": "translateY(-50%)",
        "transform": "translateY(-50%)",
        "height": 34,
        "width": 34,
        "borderRadius": "50%",
        "border": "2px solid #dfdfdf",
        "overflow": "hidden",
        "color": "transparent",
        "textIndent": "100%",
        "whiteSpace": "nowrap",
        "WebkitTransition": "border-color 0.3s",
        "MozTransition": "border-color 0.3s",
        "transition": "border-color 0.3s"
    },
    "cd-timeline-navigation a::after": {
        "content": "''",
        "position": "absolute",
        "height": 16,
        "width": 16,
        "left": "50%",
        "top": "50%",
        "bottom": "auto",
        "right": "auto",
        "WebkitTransform": "translateX(-50%) translateY(-50%)",
        "MozTransform": "translateX(-50%) translateY(-50%)",
        "MsTransform": "translateX(-50%) translateY(-50%)",
        "OTransform": "translateX(-50%) translateY(-50%)",
        "transform": "translateX(-50%) translateY(-50%)",
        "background": "url(../img/cd-arrow.svg) no-repeat 0 0"
    },
    "cd-timeline-navigation aprev": {
        "left": 0,
        "WebkitTransform": "translateY(-50%) rotate(180deg)",
        "MozTransform": "translateY(-50%) rotate(180deg)",
        "MsTransform": "translateY(-50%) rotate(180deg)",
        "OTransform": "translateY(-50%) rotate(180deg)",
        "transform": "translateY(-50%) rotate(180deg)"
    },
    "cd-timeline-navigation anext": {
        "right": 0
    },
    "cd-timeline-navigation ainactive": {
        "cursor": "not-allowed"
    },
    "cd-timeline-navigation ainactive::after": {
        "backgroundPosition": "0 -16px"
    },
    "no-touch cd-timeline-navigation a:hover": {
        "borderColor": "#7b9d6f"
    },
    "no-touch cd-timeline-navigation ainactive:hover": {
        "borderColor": "#dfdfdf"
    }
});