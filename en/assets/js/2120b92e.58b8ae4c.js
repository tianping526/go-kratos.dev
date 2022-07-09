"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1333],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8179:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=t(3117),o=(t(7294),t(3905));const a={id:"tracing",title:"Tracing",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,c={unversionedId:"component/middleware/tracing",id:"component/middleware/tracing",title:"Tracing",description:"We use OpenTelemetry for distributed tracing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/08-tracing.md",sourceDirName:"component/middleware",slug:"/component/middleware/tracing",permalink:"/en/docs/component/middleware/tracing",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/08-tracing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"tracing",title:"Tracing",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Recovery",permalink:"/en/docs/component/middleware/recovery"},next:{title:"Validate",permalink:"/en/docs/component/middleware/validate"}},p={},l=[{value:"Configuration",id:"configuration",level:3},{value:"<code>WithTracerProvider</code>",id:"withtracerprovider",level:4},{value:"<code>WithPropagator</code>",id:"withpropagator",level:4},{value:"Usage",id:"usage",level:3},{value:"Tracing for Server",id:"tracing-for-server",level:4},{value:"Tracing for Client",id:"tracing-for-client",level:4},{value:"References",id:"references",level:3}],s={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We use OpenTelemetry for distributed tracing."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"There are two methods for configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"WithTracerProvider()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WithPropagator()"),"."),(0,o.kt)("h4",{id:"withtracerprovider"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTracerProvider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithTracerProvider(provider trace.TracerProvider) Option {\n    return func(opts *options) {\n        opts.TracerProvider = provider\n    }\n}    \n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WithTracerProvider")," is for setting the provider, it accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"trace.TracerProvider")),(0,o.kt)("h4",{id:"withpropagator"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithPropagator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithPropagator(propagator propagation.TextMapPropagator) Option {\n    return func(opts *options) {\n        opts.Propagator = propagator\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WithPropagator")," is for setting the text map propagator, it accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"propagation.TextMapPropagator")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"tracing-for-server"},"Tracing for Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package server\n\nimport (\n    "github.com/go-kratos/kratos/v2/middleware/tracing"\n    "github.com/go-kratos/kratos/v2/transport/grpc"\n\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/attribute"\n    "go.opentelemetry.io/otel/exporters/jaeger"\n    "go.opentelemetry.io/otel/sdk/resource"\n    tracesdk "go.opentelemetry.io/otel/sdk/trace"\n    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n)\n\n// Set global trace provider\nfunc initTracer(url string) error {\n    // Create the Jaeger exporter\n    exp, err := jaeger.New(jaeger.WithCollectorEndpoint(jaeger.WithEndpoint(url)))\n    if err != nil {\n        return err\n    }\n    tp := tracesdk.NewTracerProvider(\n        // Set the sampling rate based on the parent span to 100%\n        tracesdk.WithSampler(tracesdk.ParentBased(tracesdk.TraceIDRatioBased(1.0))),\n        // Always be sure to batch in production.\n        tracesdk.WithBatcher(exp),\n        // Record information about this application in an Resource.\n        tracesdk.WithResource(resource.NewSchemaless(\n            semconv.ServiceNameKey.String("kratos-trace"),\n            attribute.String("exporter", "jaeger"),\n            attribute.Float64("float", 312.23),\n        )),\n    )\n    otel.SetTracerProvider(tp)\n    return nil\n}\n\n// NewGRPCServer new a gRPC server.\nfunc NewGRPCServer(c *conf.Server, executor *service.ExecutorService) *grpc.Server {\n    err := initTracer("http://localhost:14268/api/traces")\n    if err != nil {\n        panic(err)\n    }\n    //tr := otel.Tracer("component-main")\n    var opts = []grpc.ServerOption{\n        grpc.Middleware(\n            tracing.Server(),\n        ),\n    }\n    // ...\n}\n')),(0,o.kt)("h4",{id:"tracing-for-client"},"Tracing for Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package client\n\nimport (\n    "context"\n\n    "github.com/go-kratos/kratos/v2/middleware/tracing"\n    "github.com/go-kratos/kratos/v2/transport/grpc"\n\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/attribute"\n    "go.opentelemetry.io/otel/exporters/jaeger"\n    "go.opentelemetry.io/otel/sdk/resource"\n    tracesdk "go.opentelemetry.io/otel/sdk/trace"\n    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n    googlegrpc "google.golang.org/grpc"\n)\n\n// Set global trace provider\nfunc initTracer(url string) error {\n    // Create the Jaeger exporter\n    exp, err := jaeger.New(jaeger.WithCollectorEndpoint(jaeger.WithEndpoint(url)))\n    if err != nil {\n        return err\n    }\n    tp := tracesdk.NewTracerProvider(\n        // Set the sampling rate based on the parent span to 100%\n        tracesdk.WithSampler(tracesdk.ParentBased(tracesdk.TraceIDRatioBased(1.0))),\n        // Always be sure to batch in production.\n        tracesdk.WithBatcher(exp),\n        // Record information about this application in an Resource.\n        tracesdk.WithResource(resource.NewSchemaless(\n            semconv.ServiceNameKey.String("kratos-trace"),\n            attribute.String("exporter", "jaeger"),\n            attribute.Float64("float", 312.23),\n        )),\n    )\n    otel.SetTracerProvider(tp)\n    return nil\n}\n\nfunc grpcCli() (*googlegrpc.ClientConn, error) {\n    // If the project does not initialize initTracer, please initialize.\n    return grpc.DialInsecure(\n        context.Background(),\n        grpc.WithMiddleware(\n            tracing.Client(),\n        ),\n    )\n}\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"https://opentelemetry.io/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-go/tree/main/example"},"https://github.com/open-telemetry/opentelemetry-go/tree/main/example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.opentelemetry.io/otel"},"https://pkg.go.dev/go.opentelemetry.io/otel"))))}u.isMDXComponent=!0}}]);