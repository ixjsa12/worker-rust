// ../../usr/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// build/worker/shim.mjs
import N from "./65d3736a568dda6bed9c5b6b758784aeaf92c076-index.wasm";
import ze from "./65d3736a568dda6bed9c5b6b758784aeaf92c076-index.wasm";
var W = Object.defineProperty;
var D = (e, t) => {
  for (var n in t)
    W(e, n, { get: t[n], enumerable: true });
};
var w = {};
D(w, { IntoUnderlyingByteSource: () => O, IntoUnderlyingSink: () => T, IntoUnderlyingSource: () => S, MinifyConfig: () => F, PipeOptions: () => L, PolishConfig: () => Q, QueuingStrategy: () => C, R2Range: () => I, ReadableStreamGetReaderOptions: () => R, RequestRedirect: () => tt, __wbg_bind_01b74990dad5c1f3: () => Se, __wbg_buffer_4e79326814bdd393: () => Ae, __wbg_buffer_55ba7a6b1b92e2ac: () => Vt, __wbg_byobRequest_08c18cee35def1f4: () => le, __wbg_byteLength_5299848ed3264181: () => he, __wbg_byteOffset_b69b0a07afccce19: () => ke, __wbg_call_557a2f2deacc4912: () => _e, __wbg_call_587b30eea3e09332: () => at, __wbg_cause_52959bcad93f9e0f: () => qe, __wbg_cf_703652f0d2c5b8d1: () => _t, __wbg_close_da7e6fb9d9851e5a: () => me, __wbg_close_e9110ca16e2567db: () => Me, __wbg_constructor_f2623999a1f453eb: () => Fe, __wbg_crypto_d05b68a3572bb8ca: () => It, __wbg_debug_e3f6a1578e6d45ca: () => vt, __wbg_enqueue_d71a1a518e21f5c3: () => ve, __wbg_exec_60f596cbe017f359: () => Lt, __wbg_first_1dcdc115710d4f3b: () => Et, __wbg_getRandomValues_7e42b4fb8779dc6d: () => Kt, __wbg_get_827d1741c899cefa: () => it, __wbg_get_f53c921291c381bd: () => Zt, __wbg_getwithrefkey_5e6d9547403deab8: () => At, __wbg_globalThis_b70c095388441f2d: () => ee, __wbg_global_1c72617491ed7194: () => ne, __wbg_headers_1eff4f53324496e6: () => rt, __wbg_instanceof_ArrayBuffer_ef2632aa0d4bfff8: () => fe, __wbg_instanceof_Error_fac23a8832b241da: () => xt, __wbg_instanceof_Uint8Array_1349640af2da2e88: () => ue, __wbg_isSafeInteger_2088b01008075470: () => be, __wbg_json_682f3a71d443960d: () => mt, __wbg_length_0aab7ffd65ad19ed: () => ce, __wbg_message_eab7d45ec69a2135: () => yt, __wbg_method_e15eb9cf1c32cdbb: () => et, __wbg_msCrypto_10fc94afee92bd76: () => Dt, __wbg_name_2a8bae31363c6a51: () => Le, __wbg_new_0394642eae39db16: () => Oe, __wbg_new_09938a7d020f049b: () => Xt, __wbg_new_143b41b4342650bb: () => ot, __wbg_new_2b55e405e4af4986: () => Ct, __wbg_new_2b6fea4ea03b1b95: () => Ce, __wbg_new_87297f22973157c8: () => je, __wbg_newnoargs_c9e6043b8ad84109: () => re, __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b: () => Ht, __wbg_newwithlength_89eeca401d8918c2: () => ft, __wbg_newwithoptbuffersourceandinit_6c49960a834dd7cf: () => bt, __wbg_newwithoptreadablestreamandinit_d238e5b972c7b57f: () => gt, __wbg_newwithoptstrandinit_ff70839f3334d3aa: () => ut, __wbg_node_43b1089f407e4ec2: () => Bt, __wbg_now_c97f243e7947c4ac: () => Gt, __wbg_prepare_545a7ed280576b99: () => lt, __wbg_process_b02b3570280d0366: () => Rt, __wbg_push_109cfc26d02582dd: () => Te, __wbg_randomFillSync_b70ccbdf4926a99d: () => Pt, __wbg_require_9a7e0f667ead4995: () => Nt, __wbg_resolve_ae38ad63c43ff98b: () => de, __wbg_respond_8fadc5f5c9d95422: () => xe, __wbg_self_742dd6eab3e9211e: () => Qt, __wbg_set_07da13cc24b69217: () => Re, __wbg_set_3698e3ca519b3c3c: () => Yt, __wbg_set_76353df4722f4954: () => st, __wbg_subarray_d82be056deb4ad27: () => Jt, __wbg_then_835b073a479138e5: () => pe, __wbg_then_8df675b8bb5d5e3c: () => we, __wbg_toString_506566b763774a16: () => Ee, __wbg_url_3325e0ef088003ca: () => nt, __wbg_versions_c1cb42213cedf0f5: () => $t, __wbg_view_231340b0dd8a2484: () => ye, __wbg_window_c409e731db53a0e2: () => te, __wbindgen_bigint_from_i64: () => St, __wbindgen_bigint_get_as_i64: () => Tt, __wbindgen_boolean_get: () => ie, __wbindgen_cb_drop: () => pt, __wbindgen_closure_wrapper3408: () => $e, __wbindgen_debug_string: () => ge, __wbindgen_error_new: () => wt, __wbindgen_in: () => Mt, __wbindgen_is_bigint: () => Ot, __wbindgen_is_function: () => Ut, __wbindgen_is_object: () => jt, __wbindgen_is_string: () => Wt, __wbindgen_is_undefined: () => kt, __wbindgen_jsval_eq: () => Ft, __wbindgen_jsval_loose_eq: () => qt, __wbindgen_memory: () => zt, __wbindgen_number_get: () => se, __wbindgen_number_new: () => Ie, __wbindgen_object_clone_ref: () => oe, __wbindgen_object_drop_ref: () => ct, __wbindgen_string_get: () => ht, __wbindgen_string_new: () => dt, __wbindgen_throw: () => ae, fetch: () => $, getMemory: () => z });
var U = new WebAssembly.Instance(N, { "./index_bg.js": w });
var o = U.exports;
function z() {
  return o.memory;
}
var l = new Array(128).fill(void 0);
l.push(void 0, null, true, false);
function r(e) {
  return l[e];
}
var y = l.length;
function V(e) {
  e < 132 || (l[e] = y, y = e);
}
function d(e) {
  let t = r(e);
  return V(e), t;
}
var H = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var B = new H("utf-8", { ignoreBOM: true, fatal: true });
B.decode();
var j = null;
function v() {
  return (j === null || j.byteLength === 0) && (j = new Uint8Array(o.memory.buffer)), j;
}
function p(e, t) {
  return e = e >>> 0, B.decode(v().subarray(e, e + t));
}
function c(e) {
  y === l.length && l.push(l.length + 1);
  let t = y;
  return y = l[t], l[t] = e, t;
}
var x = 0;
var P = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var E = new P("utf-8");
var J = typeof E.encodeInto == "function" ? function(e, t) {
  return E.encodeInto(e, t);
} : function(e, t) {
  let n = E.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function h(e, t, n) {
  if (n === void 0) {
    let g = E.encode(e), m = t(g.length) >>> 0;
    return v().subarray(m, m + g.length).set(g), x = g.length, m;
  }
  let _ = e.length, i = t(_) >>> 0, f = v(), s = 0;
  for (; s < _; s++) {
    let g = e.charCodeAt(s);
    if (g > 127)
      break;
    f[i + s] = g;
  }
  if (s !== _) {
    s !== 0 && (e = e.slice(s)), i = n(i, _, _ = s + e.length * 3) >>> 0;
    let g = v().subarray(i + s, i + _);
    s += J(e, g).written;
  }
  return x = s, i;
}
function a(e) {
  return e == null;
}
var A = null;
function u() {
  return (A === null || A.byteLength === 0) && (A = new Int32Array(o.memory.buffer)), A;
}
var k = null;
function K() {
  return (k === null || k.byteLength === 0) && (k = new BigInt64Array(o.memory.buffer)), k;
}
var M = null;
function X() {
  return (M === null || M.byteLength === 0) && (M = new Float64Array(o.memory.buffer)), M;
}
function q(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let i = e.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (t == "function") {
    let i = e.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(e)) {
    let i = e.length, f = "[";
    i > 0 && (f += q(e[0]));
    for (let s = 1; s < i; s++)
      f += ", " + q(e[s]);
    return f += "]", f;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), _;
  if (n.length > 1)
    _ = n[1];
  else
    return toString.call(e);
  if (_ == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function Y(e, t, n, _) {
  let i = { a: e, b: t, cnt: 1, dtor: n }, f = (...s) => {
    i.cnt++;
    let g = i.a;
    i.a = 0;
    try {
      return _(g, i.b, ...s);
    } finally {
      --i.cnt === 0 ? o.__wbindgen_export_2.get(i.dtor)(g, i.b) : i.a = g;
    }
  };
  return f.original = i, f;
}
function Z(e, t, n) {
  o.__wbindgen_export_3(e, t, c(n));
}
function $(e, t, n) {
  let _ = o.fetch(c(e), c(t), c(n));
  return d(_);
}
function b(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    o.__wbindgen_export_4(c(n));
  }
}
function G(e, t, n, _) {
  o.__wbindgen_export_5(e, t, c(n), c(_));
}
var Q = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var tt = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var O = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t, n;
    try {
      let f = o.__wbindgen_add_to_stack_pointer(-16);
      o.intounderlyingbytesource_type(f, this.__wbg_ptr);
      var _ = u()[f / 4 + 0], i = u()[f / 4 + 1];
      return t = _, n = i, p(_, i);
    } finally {
      o.__wbindgen_add_to_stack_pointer(16), o.__wbindgen_export_6(t, n);
    }
  }
  get autoAllocateChunkSize() {
    return o.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    o.intounderlyingbytesource_start(this.__wbg_ptr, c(t));
  }
  pull(t) {
    let n = o.intounderlyingbytesource_pull(this.__wbg_ptr, c(t));
    return d(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    o.intounderlyingbytesource_cancel(t);
  }
};
var T = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = o.intounderlyingsink_write(this.__wbg_ptr, c(t));
    return d(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = o.intounderlyingsink_close(t);
    return d(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), _ = o.intounderlyingsink_abort(n, c(t));
    return d(_);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = o.intounderlyingsource_pull(this.__wbg_ptr, c(t));
    return d(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    o.intounderlyingsource_cancel(t);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_minifyconfig_free(t);
  }
  get js() {
    return o.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    o.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    return o.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    o.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    return o.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    o.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return o.pipeoptions_preventClose(this.__wbg_ptr) !== 0;
  }
  get preventCancel() {
    return o.pipeoptions_preventCancel(this.__wbg_ptr) !== 0;
  }
  get preventAbort() {
    return o.pipeoptions_preventAbort(this.__wbg_ptr) !== 0;
  }
  get signal() {
    let t = o.pipeoptions_signal(this.__wbg_ptr);
    return d(t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return o.queuingstrategy_highWaterMark(this.__wbg_ptr);
  }
};
var I = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let _ = o.__wbindgen_add_to_stack_pointer(-16);
      o.__wbg_get_r2range_offset(_, this.__wbg_ptr);
      var t = u()[_ / 4 + 0], n = u()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      o.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    o.__wbg_set_r2range_offset(this.__wbg_ptr, !a(t), a(t) ? 0 : t);
  }
  get length() {
    try {
      let _ = o.__wbindgen_add_to_stack_pointer(-16);
      o.__wbg_get_r2range_length(_, this.__wbg_ptr);
      var t = u()[_ / 4 + 0], n = u()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      o.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    o.__wbg_set_r2range_length(this.__wbg_ptr, !a(t), a(t) ? 0 : t);
  }
  get suffix() {
    try {
      let _ = o.__wbindgen_add_to_stack_pointer(-16);
      o.__wbg_get_r2range_suffix(_, this.__wbg_ptr);
      var t = u()[_ / 4 + 0], n = u()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      o.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    o.__wbg_set_r2range_suffix(this.__wbg_ptr, !a(t), a(t) ? 0 : t);
  }
};
var R = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = o.readablestreamgetreaderoptions_mode(this.__wbg_ptr);
    return d(t);
  }
};
function et(e, t) {
  let n = r(t).method, _ = h(n, o.__wbindgen_export_0, o.__wbindgen_export_1), i = x;
  u()[e / 4 + 1] = i, u()[e / 4 + 0] = _;
}
function nt(e, t) {
  let n = r(t).url, _ = h(n, o.__wbindgen_export_0, o.__wbindgen_export_1), i = x;
  u()[e / 4 + 1] = i, u()[e / 4 + 0] = _;
}
function rt(e) {
  let t = r(e).headers;
  return c(t);
}
function _t(e) {
  let t = r(e).cf;
  return a(t) ? 0 : c(t);
}
function ot() {
  return b(function() {
    let e = new Headers();
    return c(e);
  }, arguments);
}
function ct(e) {
  d(e);
}
function it() {
  return b(function(e, t, n, _) {
    let i = r(t).get(p(n, _));
    var f = a(i) ? 0 : h(i, o.__wbindgen_export_0, o.__wbindgen_export_1), s = x;
    u()[e / 4 + 1] = s, u()[e / 4 + 0] = f;
  }, arguments);
}
function st() {
  return b(function(e, t, n, _, i) {
    r(e).set(p(t, n), p(_, i));
  }, arguments);
}
function ut() {
  return b(function(e, t, n) {
    let _ = new Response(e === 0 ? void 0 : p(e, t), r(n));
    return c(_);
  }, arguments);
}
function ft(e) {
  let t = new Uint8Array(e >>> 0);
  return c(t);
}
function bt() {
  return b(function(e, t) {
    let n = new Response(r(e), r(t));
    return c(n);
  }, arguments);
}
function gt() {
  return b(function(e, t) {
    let n = new Response(r(e), r(t));
    return c(n);
  }, arguments);
}
function at() {
  return b(function(e, t, n) {
    let _ = r(e).call(r(t), r(n));
    return c(_);
  }, arguments);
}
function pt(e) {
  let t = d(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function dt(e, t) {
  let n = p(e, t);
  return c(n);
}
function wt(e, t) {
  let n = new Error(p(e, t));
  return c(n);
}
function lt(e, t, n) {
  let _ = r(e).prepare(p(t, n));
  return c(_);
}
function xt(e) {
  let t;
  try {
    t = r(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function yt(e) {
  let t = r(e).message;
  return c(t);
}
function ht(e, t) {
  let n = r(t), _ = typeof n == "string" ? n : void 0;
  var i = a(_) ? 0 : h(_, o.__wbindgen_export_0, o.__wbindgen_export_1), f = x;
  u()[e / 4 + 1] = f, u()[e / 4 + 0] = i;
}
function mt() {
  return b(function(e) {
    let t = r(e).json();
    return c(t);
  }, arguments);
}
function jt(e) {
  let t = r(e);
  return typeof t == "object" && t !== null;
}
function At(e, t) {
  let n = r(e)[r(t)];
  return c(n);
}
function kt(e) {
  return r(e) === void 0;
}
function Mt(e, t) {
  return r(e) in r(t);
}
function vt(e) {
  console.debug(r(e));
}
function Et(e, t, n) {
  let _ = r(e).first(t === 0 ? void 0 : p(t, n));
  return c(_);
}
function qt(e, t) {
  return r(e) == r(t);
}
function Ot(e) {
  return typeof r(e) == "bigint";
}
function Tt(e, t) {
  let n = r(t), _ = typeof n == "bigint" ? n : void 0;
  K()[e / 8 + 1] = a(_) ? BigInt(0) : _, u()[e / 4 + 0] = !a(_);
}
function St(e) {
  return c(e);
}
function Ft(e, t) {
  return r(e) === r(t);
}
function Lt(e, t, n) {
  let _ = r(e).exec(p(t, n));
  return c(_);
}
function Ct(e, t) {
  try {
    var n = { a: e, b: t }, _ = (f, s) => {
      let g = n.a;
      n.a = 0;
      try {
        return G(g, n.b, f, s);
      } finally {
        n.a = g;
      }
    };
    let i = new Promise(_);
    return c(i);
  } finally {
    n.a = n.b = 0;
  }
}
function It(e) {
  let t = r(e).crypto;
  return c(t);
}
function Rt(e) {
  let t = r(e).process;
  return c(t);
}
function $t(e) {
  let t = r(e).versions;
  return c(t);
}
function Bt(e) {
  let t = r(e).node;
  return c(t);
}
function Wt(e) {
  return typeof r(e) == "string";
}
function Dt(e) {
  let t = r(e).msCrypto;
  return c(t);
}
function Nt() {
  return b(function() {
    let e = module.require;
    return c(e);
  }, arguments);
}
function Ut(e) {
  return typeof r(e) == "function";
}
function zt() {
  let e = o.memory;
  return c(e);
}
function Vt(e) {
  let t = r(e).buffer;
  return c(t);
}
function Ht(e, t, n) {
  let _ = new Uint8Array(r(e), t >>> 0, n >>> 0);
  return c(_);
}
function Pt() {
  return b(function(e, t) {
    r(e).randomFillSync(d(t));
  }, arguments);
}
function Jt(e, t, n) {
  let _ = r(e).subarray(t >>> 0, n >>> 0);
  return c(_);
}
function Kt() {
  return b(function(e, t) {
    r(e).getRandomValues(r(t));
  }, arguments);
}
function Xt(e) {
  let t = new Uint8Array(r(e));
  return c(t);
}
function Yt(e, t, n) {
  r(e).set(r(t), n >>> 0);
}
function Zt() {
  return b(function(e, t) {
    let n = Reflect.get(r(e), r(t));
    return c(n);
  }, arguments);
}
function Gt(e) {
  return r(e).now();
}
function Qt() {
  return b(function() {
    let e = self.self;
    return c(e);
  }, arguments);
}
function te() {
  return b(function() {
    let e = window.window;
    return c(e);
  }, arguments);
}
function ee() {
  return b(function() {
    let e = globalThis.globalThis;
    return c(e);
  }, arguments);
}
function ne() {
  return b(function() {
    let e = global.global;
    return c(e);
  }, arguments);
}
function re(e, t) {
  let n = new Function(p(e, t));
  return c(n);
}
function _e() {
  return b(function(e, t) {
    let n = r(e).call(r(t));
    return c(n);
  }, arguments);
}
function oe(e) {
  let t = r(e);
  return c(t);
}
function ce(e) {
  return r(e).length;
}
function ie(e) {
  let t = r(e);
  return typeof t == "boolean" ? t ? 1 : 0 : 2;
}
function se(e, t) {
  let n = r(t), _ = typeof n == "number" ? n : void 0;
  X()[e / 8 + 1] = a(_) ? 0 : _, u()[e / 4 + 0] = !a(_);
}
function ue(e) {
  let t;
  try {
    t = r(e) instanceof Uint8Array;
  } catch {
    t = false;
  }
  return t;
}
function fe(e) {
  let t;
  try {
    t = r(e) instanceof ArrayBuffer;
  } catch {
    t = false;
  }
  return t;
}
function be(e) {
  return Number.isSafeInteger(r(e));
}
function ge(e, t) {
  let n = q(r(t)), _ = h(n, o.__wbindgen_export_0, o.__wbindgen_export_1), i = x;
  u()[e / 4 + 1] = i, u()[e / 4 + 0] = _;
}
function ae(e, t) {
  throw new Error(p(e, t));
}
function pe(e, t, n) {
  let _ = r(e).then(r(t), r(n));
  return c(_);
}
function de(e) {
  let t = Promise.resolve(r(e));
  return c(t);
}
function we(e, t) {
  let n = r(e).then(r(t));
  return c(n);
}
function le(e) {
  let t = r(e).byobRequest;
  return a(t) ? 0 : c(t);
}
function xe(e, t) {
  r(e).respond(t >>> 0);
}
function ye(e) {
  let t = r(e).view;
  return a(t) ? 0 : c(t);
}
function he(e) {
  return r(e).byteLength;
}
function me(e) {
  r(e).close();
}
function je(e, t) {
  let n = new Error(p(e, t));
  return c(n);
}
function Ae(e) {
  let t = r(e).buffer;
  return c(t);
}
function ke(e) {
  return r(e).byteOffset;
}
function Me(e) {
  r(e).close();
}
function ve(e, t) {
  r(e).enqueue(r(t));
}
function Ee(e) {
  let t = r(e).toString();
  return c(t);
}
function qe(e) {
  let t = r(e).cause;
  return c(t);
}
function Oe() {
  let e = new Array();
  return c(e);
}
function Te(e, t) {
  return r(e).push(r(t));
}
function Se() {
  return b(function(e, t) {
    let n = r(e).bind(...d(t));
    return c(n);
  }, arguments);
}
function Fe(e) {
  let t = r(e).constructor;
  return c(t);
}
function Le(e) {
  let t = r(e).name;
  return c(t);
}
function Ce() {
  let e = new Object();
  return c(e);
}
function Ie(e) {
  return c(e);
}
function Re() {
  return b(function(e, t, n) {
    return Reflect.set(r(e), r(t), r(n));
  }, arguments);
}
function $e(e, t, n) {
  let _ = Y(e, t, 305, Z);
  return c(_);
}
var Ve = { fetch: $, scheduled: void 0, queue: void 0 };

// wrangler-config:config:middleware/d1-beta
var D1_IMPORTS = ["__D1_BETA__DB"];

// ../../usr/lib/node_modules/wrangler/templates/middleware/middleware-d1-beta.ts
var D1Database = class {
  constructor(binding) {
    console.debug(binding);
    this.binding = binding;
  }
  prepare(query) {
    return new D1PreparedStatement(this, query);
  }
  async dump() {
    const response = await this.binding.fetch("http://d1/dump", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    if (response.status !== 200) {
      try {
        const err = await response.json();
        throw new Error(`D1_DUMP_ERROR: ${err.error}`, {
          cause: new Error(err.error)
        });
      } catch (e) {
        throw new Error(`D1_DUMP_ERROR: Status + ${response.status}`, {
          cause: new Error("Status " + response.status)
        });
      }
    }
    return await response.arrayBuffer();
  }
  async batch(statements) {
    const exec = await this._send(
      "/query",
      statements.map((s) => s.statement),
      statements.map((s) => s.params)
    );
    return exec;
  }
  async exec(query) {
    const lines = query.trim().split("\n");
    const _exec = await this._send("/query", lines, [], false);
    const exec = Array.isArray(_exec) ? _exec : [_exec];
    const error = exec.map((r2) => {
      return r2.error ? 1 : 0;
    }).indexOf(1);
    if (error !== -1) {
      throw new Error(
        `D1_EXEC_ERROR: Error in line ${error + 1}: ${lines[error]}: ${exec[error].error}`,
        {
          cause: new Error(
            "Error in line " + (error + 1) + ": " + lines[error] + ": " + exec[error].error
          )
        }
      );
    } else {
      return {
        count: exec.length,
        duration: exec.reduce((p2, c2) => {
          return p2 + c2.meta.duration;
        }, 0)
      };
    }
  }
  async _send(endpoint, query, params, dothrow = true) {
    const body = JSON.stringify(
      typeof query == "object" ? query.map((s, index) => {
        return { sql: s, params: params[index] };
      }) : {
        sql: query,
        params
      }
    );
    const response = await this.binding.fetch(new URL(endpoint, "http://d1"), {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body
    });
    try {
      const answer = await response.json();
      if (answer.error && dothrow) {
        const err = answer;
        throw new Error(`D1_ERROR: ${err.error}`, {
          cause: new Error(err.error)
        });
      } else {
        return Array.isArray(answer) ? answer.map((r2) => mapD1Result(r2)) : mapD1Result(answer);
      }
    } catch (e) {
      const error = e;
      throw new Error(`D1_ERROR: ${error.cause || "Something went wrong"}`, {
        cause: new Error(`${error.cause}` || "Something went wrong")
      });
    }
  }
};
var D1PreparedStatement = class {
  constructor(database, statement, params = []) {
    this.database = database;
    this.statement = statement;
    this.params = params;
  }
  bind(...values) {
    for (var r2 in values) {
      const value = values[r2];
      switch (typeof value) {
        case "number":
        case "string":
          break;
        case "object":
          if (value == null)
            break;
          if (Array.isArray(value) && value.map((b2) => {
            return typeof b2 == "number" && b2 >= 0 && b2 < 256 ? 1 : 0;
          }).indexOf(0) == -1)
            break;
          if (value instanceof ArrayBuffer) {
            values[r2] = Array.from(new Uint8Array(value));
            break;
          }
          if (ArrayBuffer.isView(value)) {
            values[r2] = Array.from(new Uint8Array(value.buffer));
            break;
          }
        default:
          throw new Error(
            `D1_TYPE_ERROR: Type '${typeof value}' not supported for value '${value}'`,
            {
              cause: new Error(
                `Type '${typeof value}' not supported for value '${value}'`
              )
            }
          );
      }
    }
    return new D1PreparedStatement(this.database, this.statement, values);
  }
  async first(colName) {
    const info = firstIfArray(
      await this.database._send("/query", this.statement, this.params)
    );
    const results = info.results;
    if (colName !== void 0) {
      if (results.length > 0 && results[0][colName] === void 0) {
        throw new Error(`D1_COLUMN_NOTFOUND: Column not found (${colName})`, {
          cause: new Error("Column not found")
        });
      }
      return results.length < 1 ? null : results[0][colName];
    } else {
      return results.length < 1 ? null : results[0];
    }
  }
  async run() {
    return firstIfArray(
      await this.database._send("/execute", this.statement, this.params)
    );
  }
  async all() {
    return firstIfArray(
      await this.database._send("/query", this.statement, this.params)
    );
  }
  async raw() {
    const s = firstIfArray(
      await this.database._send("/query", this.statement, this.params)
    );
    const raw = [];
    for (var r2 in s.results) {
      const entry = Object.keys(s.results[r2]).map((k2) => {
        return s.results[r2][k2];
      });
      raw.push(entry);
    }
    return raw;
  }
};
function firstIfArray(results) {
  return Array.isArray(results) ? results[0] : results;
}
function mapD1Result(result) {
  let map = {
    results: result.results || [],
    success: result.success === void 0 ? true : result.success,
    meta: result.meta || {}
  };
  result.error && (map.error = result.error);
  return map;
}
var D1_BETA_PREFIX = `__D1_BETA__`;
var envMap = /* @__PURE__ */ new Map();
function getMaskedEnv(env) {
  if (envMap.has(env))
    return envMap.get(env);
  const newEnv = new Map(Object.entries(env));
  D1_IMPORTS.filter(
    (bindingName) => bindingName.startsWith(D1_BETA_PREFIX)
  ).forEach((bindingName) => {
    newEnv.delete(bindingName);
    const newName = bindingName.slice(D1_BETA_PREFIX.length);
    const newBinding = new D1Database(env[bindingName]);
    newEnv.set(newName, newBinding);
  });
  const newEnvObj = Object.fromEntries(newEnv.entries());
  envMap.set(env, newEnvObj);
  return newEnvObj;
}
function wrap(env) {
  return getMaskedEnv(env);
}

// ../../tmp/tmp-2640-dpJBahxST9HC/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...Ve,
  envWrappers,
  middleware: [
    void 0,
    ...Ve.middleware ? Ve.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// ../../tmp/tmp-2640-dpJBahxST9HC/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv2(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv2(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      for (const middleware of middleware_insertion_facade_default.middleware) {
        __facade_register__(middleware);
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv2(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  O as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  S as IntoUnderlyingSource,
  F as MinifyConfig,
  L as PipeOptions,
  Q as PolishConfig,
  C as QueuingStrategy,
  I as R2Range,
  R as ReadableStreamGetReaderOptions,
  tt as RequestRedirect,
  Se as __wbg_bind_01b74990dad5c1f3,
  Ae as __wbg_buffer_4e79326814bdd393,
  Vt as __wbg_buffer_55ba7a6b1b92e2ac,
  le as __wbg_byobRequest_08c18cee35def1f4,
  he as __wbg_byteLength_5299848ed3264181,
  ke as __wbg_byteOffset_b69b0a07afccce19,
  _e as __wbg_call_557a2f2deacc4912,
  at as __wbg_call_587b30eea3e09332,
  qe as __wbg_cause_52959bcad93f9e0f,
  _t as __wbg_cf_703652f0d2c5b8d1,
  me as __wbg_close_da7e6fb9d9851e5a,
  Me as __wbg_close_e9110ca16e2567db,
  Fe as __wbg_constructor_f2623999a1f453eb,
  It as __wbg_crypto_d05b68a3572bb8ca,
  vt as __wbg_debug_e3f6a1578e6d45ca,
  ve as __wbg_enqueue_d71a1a518e21f5c3,
  Lt as __wbg_exec_60f596cbe017f359,
  Et as __wbg_first_1dcdc115710d4f3b,
  Kt as __wbg_getRandomValues_7e42b4fb8779dc6d,
  it as __wbg_get_827d1741c899cefa,
  Zt as __wbg_get_f53c921291c381bd,
  At as __wbg_getwithrefkey_5e6d9547403deab8,
  ee as __wbg_globalThis_b70c095388441f2d,
  ne as __wbg_global_1c72617491ed7194,
  rt as __wbg_headers_1eff4f53324496e6,
  fe as __wbg_instanceof_ArrayBuffer_ef2632aa0d4bfff8,
  xt as __wbg_instanceof_Error_fac23a8832b241da,
  ue as __wbg_instanceof_Uint8Array_1349640af2da2e88,
  be as __wbg_isSafeInteger_2088b01008075470,
  mt as __wbg_json_682f3a71d443960d,
  ce as __wbg_length_0aab7ffd65ad19ed,
  yt as __wbg_message_eab7d45ec69a2135,
  et as __wbg_method_e15eb9cf1c32cdbb,
  Dt as __wbg_msCrypto_10fc94afee92bd76,
  Le as __wbg_name_2a8bae31363c6a51,
  Oe as __wbg_new_0394642eae39db16,
  Xt as __wbg_new_09938a7d020f049b,
  ot as __wbg_new_143b41b4342650bb,
  Ct as __wbg_new_2b55e405e4af4986,
  Ce as __wbg_new_2b6fea4ea03b1b95,
  je as __wbg_new_87297f22973157c8,
  re as __wbg_newnoargs_c9e6043b8ad84109,
  Ht as __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b,
  ft as __wbg_newwithlength_89eeca401d8918c2,
  bt as __wbg_newwithoptbuffersourceandinit_6c49960a834dd7cf,
  gt as __wbg_newwithoptreadablestreamandinit_d238e5b972c7b57f,
  ut as __wbg_newwithoptstrandinit_ff70839f3334d3aa,
  Bt as __wbg_node_43b1089f407e4ec2,
  Gt as __wbg_now_c97f243e7947c4ac,
  lt as __wbg_prepare_545a7ed280576b99,
  Rt as __wbg_process_b02b3570280d0366,
  Te as __wbg_push_109cfc26d02582dd,
  Pt as __wbg_randomFillSync_b70ccbdf4926a99d,
  Nt as __wbg_require_9a7e0f667ead4995,
  de as __wbg_resolve_ae38ad63c43ff98b,
  xe as __wbg_respond_8fadc5f5c9d95422,
  Qt as __wbg_self_742dd6eab3e9211e,
  Re as __wbg_set_07da13cc24b69217,
  Yt as __wbg_set_3698e3ca519b3c3c,
  st as __wbg_set_76353df4722f4954,
  Jt as __wbg_subarray_d82be056deb4ad27,
  pe as __wbg_then_835b073a479138e5,
  we as __wbg_then_8df675b8bb5d5e3c,
  Ee as __wbg_toString_506566b763774a16,
  nt as __wbg_url_3325e0ef088003ca,
  $t as __wbg_versions_c1cb42213cedf0f5,
  ye as __wbg_view_231340b0dd8a2484,
  te as __wbg_window_c409e731db53a0e2,
  St as __wbindgen_bigint_from_i64,
  Tt as __wbindgen_bigint_get_as_i64,
  ie as __wbindgen_boolean_get,
  pt as __wbindgen_cb_drop,
  $e as __wbindgen_closure_wrapper3408,
  ge as __wbindgen_debug_string,
  wt as __wbindgen_error_new,
  Mt as __wbindgen_in,
  Ot as __wbindgen_is_bigint,
  Ut as __wbindgen_is_function,
  jt as __wbindgen_is_object,
  Wt as __wbindgen_is_string,
  kt as __wbindgen_is_undefined,
  Ft as __wbindgen_jsval_eq,
  qt as __wbindgen_jsval_loose_eq,
  zt as __wbindgen_memory,
  se as __wbindgen_number_get,
  Ie as __wbindgen_number_new,
  oe as __wbindgen_object_clone_ref,
  ct as __wbindgen_object_drop_ref,
  ht as __wbindgen_string_get,
  dt as __wbindgen_string_new,
  ae as __wbindgen_throw,
  middleware_loader_entry_default as default,
  $ as fetch,
  z as getMemory,
  ze as wasmModule
};
//# sourceMappingURL=shim.js.map
