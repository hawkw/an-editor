var searchIndex = {};
searchIndex["an_rope"] = {"doc":"An rope.","items":[[3,"RopeSlice","an_rope","An immutable borrowed slice of a `Rope`.",null,null],[3,"Rope","","A Rope",null,null],[0,"metric","","Metrics for indexing `Rope`s.",null,null],[3,"Grapheme","an_rope::metric","A metric for calculating indices in `Rope`s based on Unicode graphemes.",null,null],[12,"0","","",0,null],[3,"Line","","A metric for calculating indices in `Rope`s based on line numbering.",null,null],[12,"0","","",1,null],[8,"Monoid","","The class of monoids",null,null],[11,"accumulate","","",2,{"inputs":[{"name":"f"}],"output":{"name":"self"}}],[8,"Measured","","Trait indicating that a type may be measured with [`Metric`] M.",null,null],[10,"measure","","Apply `Metric` to `Self`",3,{"inputs":[{"name":"self"}],"output":{"name":"m"}}],[10,"measure_weight","","Measure the `weight` of `Node` by this `metric`.",3,{"inputs":[{"name":"self"}],"output":{"name":"m"}}],[10,"to_byte_index","","Convert the `Metric` into a byte index into the given `Node`",3,{"inputs":[{"name":"self"},{"name":"m"}],"output":{"name":"option"}}],[8,"Metric","","A [monoid] that can be applied to a type as a measurement.",null,null],[10,"is_splittable","","Returns whether text may be split into new leaf nodes using this metric.",4,{"inputs":[],"output":{"name":"bool"}}],[11,"next","","Returns the byte index of the next element of this metric in `Node`",4,{"inputs":[{"name":"self"},{"name":"m"}],"output":{"name":"option"}}],[11,"back","","Returns the byte index of the previous element of this metric in `Node`",4,{"inputs":[{"name":"self"},{"name":"m"}],"output":{"name":"option"}}],[10,"is_boundary","","Returns true if index `i` in `node` is a boundary along this `Metric`",4,{"inputs":[{"name":"m"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"grapheme"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"ordering"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"bool"}}],[11,"from","","",0,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"add","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"grapheme"}}],[11,"add","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"grapheme"}}],[11,"add","","",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"grapheme"}}],[11,"sub","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"grapheme"}}],[11,"sub","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"grapheme"}}],[11,"sub","","",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"grapheme"}}],[11,"mul","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"grapheme"}}],[11,"mul","","",0,{"inputs":[{"name":"self"},{"name":"grapheme"}],"output":{"name":"grapheme"}}],[11,"mul","","",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"grapheme"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"line"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"ordering"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"bool"}}],[11,"from","","",1,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"add","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"line"}}],[11,"add","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"line"}}],[11,"add","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"line"}}],[11,"sub","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"line"}}],[11,"sub","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"line"}}],[11,"sub","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"line"}}],[11,"mul","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"line"}}],[11,"mul","","",1,{"inputs":[{"name":"self"},{"name":"line"}],"output":{"name":"line"}}],[11,"mul","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"line"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"is_splittable","","",0,{"inputs":[],"output":{"name":"bool"}}],[11,"is_boundary","","Returns true if index `i` in `node` is a boundary along this `Metric`",0,{"inputs":[{"name":"m"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"is_splittable","","",1,{"inputs":[],"output":{"name":"bool"}}],[11,"is_boundary","","Returns true if index `i` in `node` is a boundary along this `Metric`",1,{"inputs":[{"name":"m"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"fmt","an_rope","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"chars","","",5,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"char_indices","","",5,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"bytes","","",5,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"split_whitespace","","",5,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"new","","",5,{"inputs":[{"name":"node"},{"name":"range"}],"output":{"name":"self"}}],[11,"len","","",5,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if this `RopeSlice` is empty.",5,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","","A rope equals another rope if all the bytes in both are equal.",5,{"inputs":[{"name":"self"},{"name":"ropeslice"}],"output":{"name":"bool"}}],[11,"eq","","A rope equals another rope if all the bytes in both are equal.",5,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","A rope equals another rope if all the bytes in both are equal.",5,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"into","","Converts this `RopeSlice` into a new `Rope`",5,{"inputs":[{"name":"self"}],"output":{"name":"rope"}}],[11,"into","","Converts this `RopeSlice` into a new `String`",5,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[8,"Split","","",null,null],[10,"split","","",6,null],[11,"from","","",7,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"rope"}}],[11,"default","","",7,{"inputs":[],"output":{"name":"rope"}}],[11,"to_byte_index","","",7,{"inputs":[{"name":"self"},{"name":"m"}],"output":{"name":"option"}}],[11,"measure","","",7,{"inputs":[{"name":"self"}],"output":{"name":"m"}}],[11,"measure_weight","","",7,{"inputs":[{"name":"self"}],"output":{"name":"m"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_utf8","","Converts a vector of bytes to a `Rope`.",7,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[11,"from_utf16","","Decode a UTF-16 encoded vector `v` into a `Rope`, returning `Err` if `v` contains any invalid data.",7,null],[11,"from_utf8_unchecked","","Converts a vector of bytes to a `Rope` without checking that the vector contains valid UTF-8.",7,{"inputs":[{"name":"vec"}],"output":{"name":"rope"}}],[11,"new","","Returns a new empty Rope",7,{"inputs":[],"output":{"name":"rope"}}],[11,"len","","Returns the length of this Rope",7,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if this `Rope` is empty.",7,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"insert","","Insert `ch` into `index` in this `Rope`, returning a new `Rope`.",7,{"inputs":[{"name":"self"},{"name":"m"},{"name":"char"}],"output":{"name":"rope"}}],[11,"delete","","",7,{"inputs":[{"name":"self"},{"name":"range"}],"output":{"name":"rope"}}],[11,"insert_rope","","Insert `rope` into `index` in this `Rope`, returning a new `Rope`.",7,{"inputs":[{"name":"self"},{"name":"m"},{"name":"rope"}],"output":{"name":"rope"}}],[11,"insert_str","","Insert `s` into `index` in this `Rope`, returning a new `Rope`.",7,{"inputs":[{"name":"self"},{"name":"m"},{"name":"str"}],"output":{"name":"rope"}}],[11,"append","","Appends a `Rope` to the end of this `Rope`, returning a new `Rope`",7,{"inputs":[{"name":"self"},{"name":"rope"}],"output":{"name":"rope"}}],[11,"prepend","","Prepends a `Rope` to the end of this `Rope`, returning a new `Rope`",7,{"inputs":[{"name":"self"},{"name":"rope"}],"output":{"name":"rope"}}],[11,"split","","Splits the rope into two ropes at the given index.",7,null],[11,"strings","","Returns an iterator over all the strings in this `Rope`",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"lines","","Returns an iterator over all the lines of text in this `Rope`.",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"bytes","","Returns an iterator over all the bytes in this `Rope`.",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"chars","","Returns an iterator over all the characters in this `Rope`.",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"char_indices","","",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"split_whitespace","","",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"graphemes","","Returns an iterator over the [grapheme clusters][graphemes] of `self`. [graphemes]: http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries The iterator is over the  extended grapheme clusters; as UAX#29recommends extended grapheme cluster boundaries for general processing.",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"unicode_words","","Returns an iterator over the words of `self`, separated on UAX#29 word boundaries.",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"split_word_bounds","","Returns an iterator over substrings of `self` separated on UAX#29 word boundaries. ",7,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"grapheme_indices","","Returns an iterator over the grapheme clusters of `self` and their byte offsets. See `graphemes()` for more information.",7,{"inputs":[{"name":"self"}],"output":{"name":"graphemeindices"}}],[11,"split_word_bound_indices","","Returns an iterator over substrings of `self`, split on UAX#29 word boundaries, and their offsets. See `split_word_bounds()` for more information.",7,{"inputs":[{"name":"self"}],"output":{"name":"uwordboundindices"}}],[11,"slice","","",7,{"inputs":[{"name":"self"},{"name":"range"}],"output":{"name":"ropeslice"}}],[11,"into","","",7,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"eq","","A rope equals another rope if all the bytes in both are equal.",7,{"inputs":[{"name":"self"},{"name":"rope"}],"output":{"name":"bool"}}],[11,"eq","","A rope equals a string if all the bytes in the string equal the rope's.",7,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","A rope equals a string if all the bytes in the string equal the rope's.",7,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"bool"}}],[11,"add","","Non-destructively concatenate two `Rope`s, returning a new `Rope`.",7,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"rope"}}],[11,"add","","Non-destructively concatenate a `Rope` and a `String`.",7,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"rope"}}],[11,"add","","Non-destructively concatenate a `Rope` and an `&str`.",7,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"rope"}}],[11,"index","","Recursively index the Rope to return the `i` th character.",7,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"str"}}],[11,"index","","",7,{"inputs":[{"name":"self"},{"name":"range"}],"output":{"name":"str"}}],[11,"index","","",7,{"inputs":[{"name":"self"},{"name":"rangeto"}],"output":{"name":"str"}}],[11,"index","","",7,{"inputs":[{"name":"self"},{"name":"rangefrom"}],"output":{"name":"str"}}],[11,"index_mut","","",7,{"inputs":[{"name":"self"},{"name":"range"}],"output":{"name":"str"}}],[11,"index_mut","","",7,{"inputs":[{"name":"self"},{"name":"rangeto"}],"output":{"name":"str"}}],[11,"index_mut","","",7,{"inputs":[{"name":"self"},{"name":"rangefrom"}],"output":{"name":"str"}}],[11,"from_iter","","",7,{"inputs":[{"name":"i"}],"output":{"name":"rope"}}],[11,"from_iter","","",7,{"inputs":[{"name":"i"}],"output":{"name":"rope"}}],[11,"from_iter","","",7,{"inputs":[{"name":"i"}],"output":{"name":"rope"}}],[11,"from_iter","","",7,{"inputs":[{"name":"i"}],"output":{"name":"rope"}}],[11,"from_iter","","",7,{"inputs":[{"name":"i"}],"output":{"name":"rope"}}]],"paths":[[3,"Grapheme"],[3,"Line"],[8,"Monoid"],[8,"Measured"],[8,"Metric"],[3,"RopeSlice"],[8,"Split"],[3,"Rope"]]};
searchIndex["macro_attr"] = {"doc":"This crate provides the `macro_attr!` macro that enables the use of custom, macro-based attributes and derivations.  Supercedes the `custom_derive` crate.","items":[[14,"macro_attr","macro_attr","When given an item definition, including its attributes, this macro parses said attributes and dispatches any attributes or derivations suffixed with `!` to user-defined macros.  This allows multiple macros to process the same item.",null,null],[14,"macro_attr_callback","","This macro invokes a \"callback\" macro, merging arguments together.",null,null]],"paths":[]};
searchIndex["newtype_derive"] = {"doc":"This crate provides several macros for deriving implementations of various traits for \"newtype\" wrappers (i.e. tuple structs with a single element).  That is, given a tuple struct with exactly one field (e.g. `struct Buckets(i32)`), these macros will derive \"obvious\" implementations of traits such as `Add`, `Neg`, `Index`, `Deref`, `From`, etc.","items":[[14,"NewtypeAdd","newtype_derive","",null,null],[14,"NewtypeAddAssign","","",null,null],[14,"NewtypeBitAnd","","",null,null],[14,"NewtypeBitAndAssign","","",null,null],[14,"NewtypeBitOr","","",null,null],[14,"NewtypeBitOrAssign","","",null,null],[14,"NewtypeBitXor","","",null,null],[14,"NewtypeBitXorAssign","","",null,null],[14,"NewtypeDiv","","",null,null],[14,"NewtypeDivAssign","","",null,null],[14,"NewtypeMul","","",null,null],[14,"NewtypeMulAssign","","",null,null],[14,"NewtypeRem","","",null,null],[14,"NewtypeRemAssign","","",null,null],[14,"NewtypeSub","","",null,null],[14,"NewtypeSubAssign","","",null,null],[14,"NewtypeShl","","",null,null],[14,"NewtypeShlAssign","","",null,null],[14,"NewtypeShr","","",null,null],[14,"NewtypeShrAssign","","",null,null],[14,"NewtypeNeg","","",null,null],[14,"NewtypeNot","","",null,null],[14,"NewtypeDeref","","",null,null],[14,"NewtypeDerefMut","","",null,null],[14,"NewtypeIndex","","",null,null],[14,"NewtypeIndexMut","","",null,null],[14,"NewtypeFrom","","",null,null],[14,"NewtypeBinary","","",null,null],[14,"NewtypeDebug","","",null,null],[14,"NewtypeDisplay","","",null,null],[14,"NewtypeLowerExp","","",null,null],[14,"NewtypeLowerHex","","",null,null],[14,"NewtypeOctal","","",null,null],[14,"NewtypePointer","","",null,null],[14,"NewtypeUpperExp","","",null,null],[14,"NewtypeUpperHex","","",null,null]],"paths":[]};
searchIndex["unicode_segmentation"] = {"doc":"Iterators which split strings on Grapheme Cluster or Word boundaries, according to the Unicode Standard Annex #29 rules.","items":[[3,"Graphemes","unicode_segmentation","External iterator for a string's grapheme clusters.",null,null],[3,"GraphemeIndices","","External iterator for grapheme clusters and byte offsets.",null,null],[3,"GraphemeCursor","","Cursor-based segmenter for grapheme clusters.",null,null],[3,"UWordBounds","","External iterator for a string's word boundaries.",null,null],[3,"UWordBoundIndices","","External iterator for word boundaries and byte offsets.",null,null],[3,"UnicodeWords","","An iterator over the substrings of a string which, after splitting the string on word boundaries, contain any characters with the Alphabetic property, or with General_Category=Number.",null,null],[4,"GraphemeIncomplete","","An error return indicating that not enough content was available in the provided chunk to satisfy the query, and that more content must be provided.",null,null],[13,"PreContext","","More pre-context is needed. The caller should call `provide_context` with a chunk ending at the offset given, then retry the query. This will only be returned if the `chunk_start` parameter is nonzero.",0,null],[13,"PrevChunk","","When requesting `prev_boundary`, the cursor is moving past the beginning of the current chunk, so the chunk before that is requested. This will only be returned if the `chunk_start` parameter is nonzero.",0,null],[13,"NextChunk","","When requesting `next_boundary`, the cursor is moving past the end of the current chunk, so the chunk after that is requested. This will only be returned if the chunk ends before the `len` parameter provided on creation of the cursor.",0,null],[13,"InvalidOffset","","An error returned when the chunk given does not contain the cursor position.",0,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"graphemeindices"}}],[11,"as_str","","View the underlying data (the part yet to be iterated) as a slice of the original string.",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"next","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[11,"next_back","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"graphemes"}}],[11,"as_str","","View the underlying data (the part yet to be iterated) as a slice of the original string.",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"size_hint","","",2,null],[11,"next","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"graphemecursor"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"graphemeincomplete"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"graphemeincomplete"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new cursor. The string and initial offset are given at creation time, but the contents of the string are not. The `is_extended` parameter controls whether extended grapheme clusters are selected.",3,{"inputs":[{"name":"usize"},{"name":"usize"},{"name":"bool"}],"output":{"name":"graphemecursor"}}],[11,"set_cursor","","Set the cursor to a new location in the same string.",3,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"cur_cursor","","The current offset of the cursor. Equal to the last value provided to `new()` or `set_cursor()`, or returned from `next_boundary()` or `prev_boundary()`.",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"provide_context","","Provide additional pre-context when it is needed to decide a boundary. The end of the chunk must coincide with the value given in the `GraphemeIncomplete::PreContext` request.",3,{"inputs":[{"name":"self"},{"name":"str"},{"name":"usize"}],"output":null}],[11,"is_boundary","","Determine whether the current cursor location is a grapheme cluster boundary. Only a part of the string need be supplied. If `chunk_start` is nonzero or the length of `chunk` is not equal to `len` on creation, then this method may return `GraphemeIncomplete::PreContext`. The caller should then call `provide_context` with the requested chunk, then retry calling this method.",3,{"inputs":[{"name":"self"},{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"next_boundary","","Find the next boundary after the current cursor position. Only a part of the string need be supplied. If the chunk is incomplete, then this method might return `GraphemeIncomplete::PreContext` or `GraphemeIncomplete::NextChunk`. In the former case, the caller should call `provide_context` with the requested chunk, then retry. In the latter case, the caller should provide the chunk following the one given, then retry.",3,{"inputs":[{"name":"self"},{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"prev_boundary","","Find the previous boundary after the current cursor position. Only a part of the string need be supplied. If the chunk is incomplete, then this method might return `GraphemeIncomplete::PreContext` or `GraphemeIncomplete::PrevChunk`. In the former case, the caller should call `provide_context` with the requested chunk, then retry. In the latter case, the caller should provide the chunk preceding the one given, then retry.",3,{"inputs":[{"name":"self"},{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"next","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"uwordbounds"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"uwordboundindices"}}],[11,"as_str","","View the underlying data (the part yet to be iterated) as a slice of the original string.",6,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"next","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"as_str","","View the underlying data (the part yet to be iterated) as a slice of the original string.",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[17,"UNICODE_VERSION","","The version of Unicode that this version of unicode-segmentation is based on.",null,null],[8,"UnicodeSegmentation","","Methods for segmenting strings according to Unicode Standard Annex #29.",null,null],[10,"graphemes","","Returns an iterator over the [grapheme clusters][graphemes] of `self`.",7,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"graphemes"}}],[10,"grapheme_indices","","Returns an iterator over the grapheme clusters of `self` and their byte offsets. See `graphemes()` for more information.",7,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"graphemeindices"}}],[10,"unicode_words","","Returns an iterator over the words of `self`, separated on UAX#29 word boundaries.",7,{"inputs":[{"name":"self"}],"output":{"name":"unicodewords"}}],[10,"split_word_bounds","","Returns an iterator over substrings of `self` separated on UAX#29 word boundaries.",7,{"inputs":[{"name":"self"}],"output":{"name":"uwordbounds"}}],[10,"split_word_bound_indices","","Returns an iterator over substrings of `self`, split on UAX#29 word boundaries, and their offsets. See `split_word_bounds()` for more information.",7,{"inputs":[{"name":"self"}],"output":{"name":"uwordboundindices"}}]],"paths":[[4,"GraphemeIncomplete"],[3,"GraphemeIndices"],[3,"Graphemes"],[3,"GraphemeCursor"],[3,"UnicodeWords"],[3,"UWordBounds"],[3,"UWordBoundIndices"],[8,"UnicodeSegmentation"]]};
initSearch(searchIndex);
